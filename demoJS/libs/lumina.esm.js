/**
 * @fileoverview LuminaJS Core - Image Loader
 * Handles ingestion of image sources (URL strings or File objects)
 * and resolves them to HTMLImageElement instances.
 */

/**
 * Loads an image from a URL string.
 *
 * @param {string} url - A fully-qualified image URL or a data URL.
 * @returns {Promise<HTMLImageElement>} Resolves with a fully loaded HTMLImageElement.
 * @throws {Error} Rejects if the image fails to load (e.g. 404, CORS block).
 */
function loadFromURL(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Required for cross-origin images to allow canvas pixel access.
    // The server must respond with appropriate CORS headers.
    img.crossOrigin = 'Anonymous';

    img.onload = () => resolve(img);
    img.onerror = () =>
      reject(new Error(`LuminaJS [loader]: Failed to load image from URL — "${url}"`));

    img.src = url;
  });
}

/**
 * Loads an image from a File object by creating a temporary object URL.
 * The object URL is revoked automatically after the image has loaded
 * to prevent memory leaks.
 *
 * @param {File} file - A File object, typically from an <input type="file"> element.
 * @returns {Promise<HTMLImageElement>} Resolves with a fully loaded HTMLImageElement.
 * @throws {TypeError} Rejects if the provided File is not a valid image MIME type.
 * @throws {Error} Rejects if the image fails to load from the generated object URL.
 */
function loadFromFile(file) {
  if (!file.type.startsWith('image/')) {
    return Promise.reject(
      new TypeError(
        `LuminaJS [loader]: Expected an image File, but received MIME type "${file.type}".`
      )
    );
  }

  const objectURL = URL.createObjectURL(file);

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectURL); // Release memory immediately after load
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectURL); // Also release on failure
      reject(new Error(`LuminaJS [loader]: Failed to load image from File — "${file.name}".`));
    };

    img.src = objectURL;
  });
}

/**
 * Loads an image from either a URL string or a File object,
 * returning a Promise that resolves to an HTMLImageElement.
 *
 * This is the primary entry point for image ingestion in LuminaJS.
 *
 * @param {string | File} source - The image source. Accepts:
 *   - `string`: A URL (absolute, relative, or data URL).
 *   - `File`: A File object from the browser File API.
 * @returns {Promise<HTMLImageElement>} A promise that resolves to
 *   a fully loaded `HTMLImageElement`, ready for canvas drawing.
 * @throws {TypeError} Rejects if `source` is neither a string nor a File.
 *
 * @example
 * // Load from URL
 * const img = await loadImage('https://example.com/photo.jpg');
 *
 * @example
 * // Load from File input
 * const [file] = event.target.files;
 * const img = await loadImage(file);
 */
async function loadImage(source) {
  if (typeof source === 'string') {
    return loadFromURL(source);
  }

  if (source instanceof File) {
    return loadFromFile(source);
  }

  return Promise.reject(
    new TypeError(
      `LuminaJS [loader]: Invalid source type "${typeof source}". ` +
        `Expected a URL string or a File object.`
    )
  );
}

/**
 * @fileoverview LuminaJS Core - Canvas Bridge
 * Provides the bridge between HTMLImageElement instances and raw pixel data
 * via the HTML5 Canvas API. All canvas operations use offscreen (non-attached)
 * canvas elements to avoid any DOM side-effects.
 */

/**
 * @typedef {Object} CanvasContext
 * @property {HTMLCanvasElement} canvas - The offscreen canvas element.
 * @property {CanvasRenderingContext2D} ctx - The 2D rendering context.
 */

/**
 * Creates an offscreen canvas sized to the given dimensions.
 *
 * @param {number} width  - Canvas width in pixels.
 * @param {number} height - Canvas height in pixels.
 * @returns {CanvasContext} An object containing the canvas and its 2D context.
 */
function createOffscreenCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', {
    willReadFrequently: true,
  });

  if (!ctx) {
    throw new Error('LuminaJS [canvas]: Failed to create offscreen canvas context.');
  }

  return { canvas, ctx };
}

/**
 * Draws an HTMLImageElement onto an offscreen canvas and returns the raw
 * pixel data as an `ImageData` object.
 *
 * The returned `ImageData.data` is a flat `Uint8ClampedArray` of RGBA values:
 * `[R, G, B, A, R, G, B, A, ...]`, where each channel is in the range [0, 255].
 *
 * @param {HTMLImageElement} image - A fully loaded image element. It must have
 *   non-zero `naturalWidth` and `naturalHeight` properties.
 * @returns {{ imageData: ImageData, canvas: HTMLCanvasElement }} An object
 *   containing the extracted `ImageData` and the offscreen `canvas` used,
 *   which can be passed to `putPixelData` after manipulation.
 * @throws {Error} Throws if the image has zero dimensions or if the canvas
 *   context cannot be obtained (e.g. context already in use).
 *
 * @example
 * const img = await loadImage('photo.jpg');
 * const { imageData, canvas } = getPixelData(img);
 * // imageData.data => Uint8ClampedArray [R, G, B, A, ...]
 */
function getPixelData(image) {
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;

  if (width === 0 || height === 0) {
    throw new Error(
      `LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions ` +
        `(${width}x${height}). Ensure the image is fully loaded before calling getPixelData.`
    );
  }

  const { canvas, ctx } = createOffscreenCanvas(width, height);

  ctx.drawImage(image, 0, 0, width, height);

  // getImageData can throw a SecurityError if the canvas is "tainted"
  // by a cross-origin image loaded without CORS headers.
  try {
    const imageData = ctx.getImageData(0, 0, width, height);
    return { imageData, canvas };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(
      `LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a ` +
        `cross-origin image. Ensure the server sends CORS headers and the image is loaded ` +
        `with crossOrigin="Anonymous". Original error: ${message}`
    );
  }
}

/**
 * Writes an `ImageData` object back onto a canvas element, replacing its
 * current contents. This is the inverse of `getPixelData` and is used to
 * commit mutated pixel data back to a drawable surface.
 *
 * @param {HTMLCanvasElement} canvas   - The target canvas. Typically the one
 *   returned from a prior `getPixelData` call, already sized to match the data.
 * @param {ImageData}         imageData - The pixel data to write. Its `width`
 *   and `height` must not exceed the canvas dimensions.
 * @returns {void}
 * @throws {Error} Throws if a 2D context cannot be obtained from the canvas.
 *
 * @example
 * const { imageData, canvas } = getPixelData(img);
 * // ... mutate imageData.data ...
 * putPixelData(canvas, imageData);
 * const dataURL = canvas.toDataURL('image/png');
 */
function putPixelData(canvas, imageData) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  if (!ctx) {
    throw new Error(
      `LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. ` +
        `The canvas may already have a context of a different type (e.g. "webgl").`
    );
  }

  ctx.putImageData(imageData, 0, 0);
}

/**
 * Converts a canvas element to a `Blob` asynchronously.
 * A convenience wrapper around the native `canvas.toBlob` callback API.
 *
 * @param {HTMLCanvasElement} canvas   - The source canvas.
 * @param {string}            [mimeType='image/png']  - Output MIME type (e.g. `'image/jpeg'`).
 * @param {number}            [quality=0.92] - Compression quality for lossy formats (0.0–1.0).
 * @returns {Promise<Blob>} Resolves with the encoded image Blob.
 * @throws {Error} Rejects if the browser fails to encode the canvas.
 *
 * @example
 * const blob = await canvasToBlob(canvas, 'image/jpeg', 0.85);
 * const url = URL.createObjectURL(blob);
 */
function canvasToBlob(canvas, mimeType = 'image/png', quality = 0.92) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(
            new Error(
              `LuminaJS [canvas]: canvas.toBlob returned null. ` +
                `The canvas may be empty or the MIME type "${mimeType}" is unsupported.`
            )
          );
        }
      },
      mimeType,
      quality
    );
  });
}

/**
 * Extracts ImageData from an image after resizing it to the specified dimensions.
 * Useful for filters that require downsampling, like ASCII art.
 *
 * @param {HTMLImageElement} image  - The source image.
 * @param {number}           width  - Target width.
 * @param {number}           height - Target height.
 * @returns {ImageData} The extracted pixel data at the new resolution.
 */
function getResizedImageData(image, width, height) {
  const canvas = resize(image, width, height);
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('LuminaJS [canvas]: Failed to obtain a 2D context from the resized canvas.');
  }
  return ctx.getImageData(0, 0, width, height);
}

/**
 * Resizes an image or canvas to new dimensions.
 * Returns a new canvas with the resized content.
 *
 * @param {HTMLImageElement|HTMLCanvasElement} source - The source to resize.
 * @param {number} width - New width.
 * @param {number} height - New height.
 * @returns {HTMLCanvasElement} A new canvas containing the resized image.
 */
function resize(source, width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error(`LuminaJS [canvas]: Resize dimensions must be positive (${width}x${height}).`);
  }
  const { canvas, ctx } = createOffscreenCanvas(width, height);
  ctx.drawImage(source, 0, 0, width, height);
  return canvas;
}

/**
 * Crops an image or canvas.
 * Returns a new canvas with the cropped content.
 *
 * @param {HTMLImageElement|HTMLCanvasElement} source - The source to crop.
 * @param {number} x - Left coordinate.
 * @param {number} y - Top coordinate.
 * @param {number} width - Crop width.
 * @param {number} height - Crop height.
 * @returns {HTMLCanvasElement} A new canvas containing the cropped image.
 */
function crop(source, x, y, width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error(`LuminaJS [canvas]: Crop dimensions must be positive (${width}x${height}).`);
  }
  const { canvas, ctx } = createOffscreenCanvas(width, height);
  ctx.drawImage(source, x, y, width, height, 0, 0, width, height);
  return canvas;
}

/**
 * @fileoverview LuminaJS Filters - Grayscale
 * Converts an image to grayscale using the ITU-R BT.601 luminance formula:
 *   Y = 0.299R + 0.587G + 0.114B
 *
 * These weights reflect human perception of color brightness:
 * green channels appear brightest, blue channels the darkest.
 */

/** @constant {number} - Luminance weight for the Red channel */
const LUMA_R = 0.299;

/** @constant {number} - Luminance weight for the Green channel */
const LUMA_G = 0.587;

/** @constant {number} - Luminance weight for the Blue channel */
const LUMA_B = 0.114;

/**
 * Applies a grayscale filter to a cloned copy of the provided `ImageData`.
 *
 * Each pixel's RGB channels are replaced with the luminance value `Y`,
 * computed via the BT.601 formula. The alpha channel is preserved unchanged.
 *
 * Performance notes:
 * - Pixel array length is cached before the loop to avoid repeated property lookups.
 * - The loop increments by 4 on every iteration (one full RGBA pixel per step),
 *   eliminating redundant index arithmetic.
 * - A new `ImageData` is returned; the original is never mutated.
 *
 * @param {ImageData} imageData - The source pixel data, as returned by `getPixelData`.
 * @returns {ImageData} A new `ImageData` object with all pixels converted to grayscale.
 *
 * @example
 * import { loadImage }    from '../core/loader.js';
 * import { getPixelData, putPixelData, canvasToBlob } from '../core/canvas.js';
 * import { grayscale }    from '../filters/grayscale.js';
 *
 * const img              = await loadImage(file);
 * const { imageData, canvas } = getPixelData(img);
 * const grayData         = grayscale(imageData);
 *
 * putPixelData(canvas, grayData);
 * const blob = await canvasToBlob(canvas);
 */
function grayscale(imageData) {
  // Clone the source data so the original ImageData is never mutated.
  const output = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );

  const data = output.data;
  const len = data.length; // Cache length — avoids re-evaluation each iteration

  // Iterate in 4-step increments: each group of 4 bytes = [R, G, B, A]
  for (let i = 0; i < len; i += 4) {
    const r = data[i];       // Red
    const g = data[i + 1];   // Green
    const b = data[i + 2];   // Blue
    // data[i + 3] = Alpha   // Untouched

    // BT.601 Luma — result is automatically clamped to [0, 255] by Uint8ClampedArray
    const y = LUMA_R * r + LUMA_G * g + LUMA_B * b;

    data[i]     = y; // R ← Y
    data[i + 1] = y; // G ← Y
    data[i + 2] = y; // B ← Y
  }

  return output;
}

/**
 * @fileoverview LuminaJS Utils
 * Shared utility helpers for the LuminaJS library.
 * Populate this module with reusable, stateless helpers as the library grows —
 * e.g. type guards, math helpers, or output format converters.
 */

/**
 * Clamps a numeric value to a given inclusive range [min, max].
 *
 * @param {number} value - The input value.
 * @param {number} min   - Lower bound (inclusive).
 * @param {number} max   - Upper bound (inclusive).
 * @returns {number} The clamped value.
 *
 * @example
 * clamp(300, 0, 255); // → 255
 * clamp(-10, 0, 255); // → 0
 * clamp(128, 0, 255); // → 128
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns `true` if the provided value is a `File` object whose MIME type
 * indicates an image format.
 *
 * @param {unknown} value - Any value to test.
 * @returns {boolean} `true` if `value` is an image `File`, otherwise `false`.
 *
 * @example
 * isImageFile(event.target.files[0]); // → true / false
 */
function isImageFile(value) {
  return value instanceof File && value.type.startsWith('image/');
}

/**
 * @fileoverview LuminaJS Filters - Brightness
 * Adjusts the brightness of an image by adding a fixed level to each color channel.
 */

/**
 * Applies a brightness filter to a copy of the provided `ImageData`.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {number} level - Brightness adjustment level.
 *   - `level > 0`: Increases brightness.
 *   - `level < 0`: Decreases brightness (darker).
 *   - Recommended range: [-255, 255].
 * @returns {ImageData} A new `ImageData` object with adjusted brightness.
 *
 * @example
 * const brightData = brightness(imageData, 50);
 */
function brightness(imageData, level = 0) {
  const output = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );

  const data = output.data;
  const len = data.length;

  for (let i = 0; i < len; i += 4) {
    data[i]     = clamp(data[i]     + level, 0, 255); // R
    data[i + 1] = clamp(data[i + 1] + level, 0, 255); // G
    data[i + 2] = clamp(data[i + 2] + level, 0, 255); // B
    // Alpha remains untouched
  }

  return output;
}

/**
 * @fileoverview LuminaJS Filters - Contrast
 * Adjusts the contrast of an image using a non-linear scaling factor.
 */

/**
 * Applies a contrast filter to a copy of the provided `ImageData`.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {number} level - Contrast adjustment level.
 *   - `level > 0`: Increases contrast.
 *   - `level < 0`: Decreases contrast.
 *   - Range: [-100, 100].
 * @returns {ImageData} A new `ImageData` object with adjusted contrast.
 *
 * @example
 * const highContrastData = contrast(imageData, 30);
 */
function contrast(imageData, level = 0) {
  const output = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );

  const data = output.data;
  const len = data.length;

  // Factor calculation formula
  // See: https://www.dfstudios.co.uk/articles/programming/image-algorithms-part-4-contrast-adjustment/
  const factor = (259 * (level + 255)) / (255 * (259 - level));

  for (let i = 0; i < len; i += 4) {
    data[i]     = clamp(factor * (data[i]     - 128) + 128, 0, 255); // R
    data[i + 1] = clamp(factor * (data[i + 1] - 128) + 128, 0, 255); // G
    data[i + 2] = clamp(factor * (data[i + 2] - 128) + 128, 0, 255); // B
  }

  return output;
}

/**
 * @fileoverview LuminaJS Filters - Sepia
 * Applies a classic sepia (antique) tone using standard weighting factors.
 */

/**
 * Applies a sepia filter to a copy of the provided `ImageData`.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @returns {ImageData} A new `ImageData` object with sepia tones applied.
 *
 * @example
 * const sepiaData = sepia(imageData);
 */
function sepia(imageData) {
  const output = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );

  const data = output.data;
  const len = data.length;

  for (let i = 0; i < len; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Standard Sepia formula
    data[i]     = clamp((r * 0.393) + (g * 0.769) + (b * 0.189), 0, 255); // New R
    data[i + 1] = clamp((r * 0.349) + (g * 0.686) + (b * 0.168), 0, 255); // New G
    data[i + 2] = clamp((r * 0.272) + (g * 0.534) + (b * 0.131), 0, 255); // New B
  }

  return output;
}

/**
 * @fileoverview LuminaJS Filters - ASCII Art
 * Converts an image to a string of ASCII characters based on pixel luminance.
 */

/**
 * Standard character set ordered from densest (darkest) to sparsest (lightest).
 * @constant {string}
 */
const DEFAULT_CHARSET = '@%#*+=-:. ';

/**
 * Converts the provided ImageData into an ASCII string representation.
 * 
 * Note: For best results, the input ImageData should be relatively low resolution 
 * (e.g., 50-100 pixels wide), as each pixel maps to a single character.
 *
 * @param {ImageData} imageData - The source pixel data. 
 * @param {Object} [options={}] - Transformation options.
 * @param {string} [options.charSet='@%#*+=-:. '] - A string of characters ordered from dark to light.
 * @param {boolean} [options.invert=false] - If true, treats the first character as the lightest.
 * @returns {string} A string containing the ASCII representation of the image, including newlines.
 *
 * @example
 * const { getResizedImageData } = Lumina;
 * const smallData = getResizedImageData(image, 80, 40);
 * const textOutput = ascii(smallData);
 * console.log(textOutput);
 */
function ascii(imageData, options = {}) {
  const {
    charSet = DEFAULT_CHARSET,
    invert = false
  } = options;

  const chars = invert ? charSet.split('').reverse().join('') : charSet;
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  let result = '';

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      // data[offset + 3] is Alpha (ignored in basic ASCII)

      // BT.601 Luminance
      const luma = 0.299 * r + 0.587 * g + 0.114 * b;
      
      // Map luma [0-255] to charIndex [0, chars.length - 1]
      // Use (1 - charIndex) logic implicitly by charSet ordering (dark to light)
      const charIndex = Math.floor((luma / 255) * (chars.length - 1));
      
      result += chars[charIndex];
    }
    result += '\n'; // Row transition
  }

  return result;
}

/**
 * @fileoverview LuminaJS Filters - Blur
 * Applies a box blur effect to an image.
 */

/**
 * Applies a box blur filter to a copy of the provided `ImageData`.
 * This implementation uses a two-pass box blur algorithm (horizontal then vertical)
 * for better performance.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {number} radius - The blur radius (integer). Default is 1.
 * @returns {ImageData} A new `ImageData` object with blur applied.
 *
 * @example
 * const blurredData = blur(imageData, 3);
 */
function blur(imageData, radius = 1) {
  const width = imageData.width;
  const height = imageData.height;
  const input = imageData.data;
  const output = new Uint8ClampedArray(input.length);
  const temp = new Uint8ClampedArray(input.length);

  radius = Math.max(0, Math.floor(radius));
  if (radius === 0) {
    return new ImageData(new Uint8ClampedArray(input), width, height);
  }

  // Horizontal pass
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      let count = 0;
      for (let dx = -radius; dx <= radius; dx++) {
        const nx = x + dx;
        if (nx >= 0 && nx < width) {
          const offset = (y * width + nx) * 4;
          r += input[offset];
          g += input[offset + 1];
          b += input[offset + 2];
          a += input[offset + 3];
          count++;
        }
      }
      const offset = (y * width + x) * 4;
      temp[offset]     = r / count;
      temp[offset + 1] = g / count;
      temp[offset + 2] = b / count;
      temp[offset + 3] = a / count;
    }
  }

  // Vertical pass
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let r = 0, g = 0, b = 0, a = 0;
      let count = 0;
      for (let dy = -radius; dy <= radius; dy++) {
        const ny = y + dy;
        if (ny >= 0 && ny < height) {
          const offset = (ny * width + x) * 4;
          r += temp[offset];
          g += temp[offset + 1];
          b += temp[offset + 2];
          a += temp[offset + 3];
          count++;
        }
      }
      const offset = (y * width + x) * 4;
      output[offset]     = r / count;
      output[offset + 1] = g / count;
      output[offset + 2] = b / count;
      output[offset + 3] = a / count;
    }
  }

  return new ImageData(output, width, height);
}

/**
 * @fileoverview LuminaJS Filters - Gaussian Blur
 * Applies a smooth Gaussian blur effect to an image.
 */

/**
 * Applies a Gaussian blur filter to a copy of the provided `ImageData`.
 * This implementation uses a two-pass separable convolution for better performance.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {number} sigma - The standard deviation of the Gaussian distribution.
 *   Larger values result in more blurring. Default is 2.
 * @returns {ImageData} A new `ImageData` object with Gaussian blur applied.
 *
 * @example
 * const blurredData = gaussianBlur(imageData, 3.5);
 */
function gaussianBlur(imageData, sigma = 2) {
  const width = imageData.width;
  const height = imageData.height;
  const input = imageData.data;
  const output = new Uint8ClampedArray(input.length);
  const temp = new Uint8ClampedArray(input.length);

  if (sigma <= 0) {
    return new ImageData(new Uint8ClampedArray(input), width, height);
  }

  // Calculate kernel radius (3 * sigma is standard for Gaussian)
  const radius = Math.ceil(sigma * 3);
  const size = radius * 2 + 1;
  const kernel = new Float32Array(size);
  
  // Pre-calculate Gaussian kernel
  let sum = 0;
  for (let i = 0; i < size; i++) {
    const x = i - radius;
    kernel[i] = Math.exp(-(x * x) / (2 * sigma * sigma));
    sum += kernel[i];
  }
  // Normalize kernel
  for (let i = 0; i < size; i++) {
    kernel[i] /= sum;
  }

  // Horizontal pass
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let k = 0; k < size; k++) {
        const nx = x + (k - radius);
        // Edge handling: clamping to nearest pixel
        const ix = Math.max(0, Math.min(width - 1, nx));
        const offset = (y * width + ix) * 4;
        const weight = kernel[k];
        
        r += input[offset] * weight;
        g += input[offset + 1] * weight;
        b += input[offset + 2] * weight;
        a += input[offset + 3] * weight;
      }
      const offset = (y * width + x) * 4;
      temp[offset]     = r;
      temp[offset + 1] = g;
      temp[offset + 2] = b;
      temp[offset + 3] = a;
    }
  }

  // Vertical pass
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let k = 0; k < size; k++) {
        const ny = y + (k - radius);
        const iy = Math.max(0, Math.min(height - 1, ny));
        const offset = (iy * width + x) * 4;
        const weight = kernel[k];
        
        r += temp[offset] * weight;
        g += temp[offset + 1] * weight;
        b += temp[offset + 2] * weight;
        a += temp[offset + 3] * weight;
      }
      const offset = (y * width + x) * 4;
      output[offset]     = r;
      output[offset + 1] = g;
      output[offset + 2] = b;
      output[offset + 3] = a;
    }
  }

  return new ImageData(output, width, height);
}

/**
 * @fileoverview LuminaJS Filters - Watermark
 * Overlays text on top of an image.
 */

/**
 * Applies a text watermark to a copy of the provided `ImageData`.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {string} text - The watermark text to overlay.
 * @param {Object} [options={}] - Customization options.
 * @param {number} [options.x=10] - X coordinate for the text.
 * @param {number} [options.y=10] - Y coordinate for the text.
 * @param {string} [options.font='24px Arial'] - CSS font string.
 * @param {string} [options.color='rgba(255, 255, 255, 0.5)'] - CSS color string.
 * @param {CanvasTextAlign} [options.align='left'] - Text alignment ('left', 'center', 'right', 'start', 'end').
 * @param {CanvasTextBaseline} [options.baseline='top'] - Text baseline ('top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom').
 * @returns {ImageData} A new `ImageData` object with the watermark applied.
 *
 * @example
 * const watermarked = watermark(imageData, '© LuminaJS', { x: 20, y: 20, color: 'white' });
 */
function watermark(imageData, text, options = {}) {
  const {
    x = 10,
    y = 10,
    font = '24px Arial',
    color = 'rgba(255, 255, 255, 0.5)',
    align = 'left',
    baseline = 'top'
  } = options;

  // Create a temporary canvas to draw the text
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.');
  }

  // Draw the original image data onto the canvas
  ctx.putImageData(imageData, 0, 0);

  // Configure text styles
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;

  // Draw the text
  ctx.fillText(text, x, y);

  // Return the new image data
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @fileoverview LuminaJS Filters - Background Blur
 * Applies a selective blur to the background while keeping a focus area sharp.
 * Mimics the "Portrait" or "Bokeh" effect.
 */

/**
 * Applies a background blur effect to a copy of the provided `ImageData`.
 *
 * @param {ImageData} imageData - The source pixel data.
 * @param {Object} [options={}] - Customization options.
 * @param {number} [options.sigma=5] - Blur intensity for the background.
 * @param {number} [options.centerX] - X coordinate of the focus center (default: center).
 * @param {number} [options.centerY] - Y coordinate of the focus center (default: center).
 * @param {number} [options.focusRadius] - Radius of the perfectly sharp area (default: 20% of min dimension).
 * @param {number} [options.falloff] - Distance over which the blur reaches maximum (default: 40% of min dimension).
 * @returns {ImageData} A new `ImageData` object with the selective blur applied.
 *
 * @example
 * const portrait = backgroundBlur(imageData, { sigma: 8, focusRadius: 100 });
 */
function backgroundBlur(imageData, options = {}) {
  const { width, height } = imageData;
  const minDim = Math.min(width, height);

  const {
    sigma = 5,
    centerX = width / 2,
    centerY = height / 2,
    focusRadius = minDim * 0.2,
    falloff = minDim * 0.4
  } = options;

  // 1. Get a fully blurred version of the image
  const blurredData = gaussianBlur(imageData, sigma);
  
  const original = imageData.data;
  const blurred = blurredData.data;
  const output = new Uint8ClampedArray(original.length);

  // 2. Composite the two based on distance from focus point
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate weight for blurred image (0 = sharp, 1 = fully blurred)
      let weight = 0;
      if (distance > focusRadius) {
        weight = Math.min(1, (distance - focusRadius) / falloff);
      }

      const offset = (y * width + x) * 4;
      const invWeight = 1 - weight;

      output[offset]     = original[offset]     * invWeight + blurred[offset]     * weight;
      output[offset + 1] = original[offset + 1] * invWeight + blurred[offset + 1] * weight;
      output[offset + 2] = original[offset + 2] * invWeight + blurred[offset + 2] * weight;
      output[offset + 3] = original[offset + 3]; // Keep original alpha
    }
  }

  return new ImageData(output, width, height);
}

/**
 * Generic Convolution Engine
 * @param {Uint8ClampedArray} data - RGBA pixel data
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {number[]} kernel - A 3x3 matrix (array of 9 numbers)
 */
const applyConvolution = (data, width, height, kernel) => {
    const buffer = new Uint8ClampedArray(data);

    // Iterate through every pixel except the 1-px border
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let r = 0, g = 0, b = 0;

            // Apply the 3x3 kernel matrix
            for (let ky = 0; ky < 3; ky++) {
                for (let kx = 0; kx < 3; kx++) {
                    const nx = x + kx - 1;
                    const ny = y + ky - 1;
                    const offset = (ny * width + nx) * 4;
                    const weight = kernel[ky * 3 + kx];

                    r += buffer[offset] * weight;
                    g += buffer[offset + 1] * weight;
                    b += buffer[offset + 2] * weight;
                }
            }

            const i = (y * width + x) * 4;
            data[i] = Math.min(255, Math.max(0, r)); // Red
            data[i + 1] = Math.min(255, Math.max(0, g)); // Green
            data[i + 2] = Math.min(255, Math.max(0, b)); // Blue
        }
    }
    return data;
};

/**
 * @param {ImageData} imageData 
 */
const sharpen = (imageData) => {
    const kernel = [
        0, -1,  0,
       -1,  5, -1,
        0, -1,  0
    ];
    applyConvolution(imageData.data, imageData.width, imageData.height, kernel);
    return imageData;
};

/**
 * @param {ImageData} imageData 
 */
const emboss = (imageData) => {
    const kernel = [
       -2, -1,  0,
       -1,  1,  1,
        0,  1,  2
    ];
    applyConvolution(imageData.data, imageData.width, imageData.height, kernel);
    return imageData;
};

/**
 * @param {ImageData} imageData 
 */
const edgeDetection = (imageData) => {
    const kernel = [
       -1, -1, -1,
       -1,  8, -1,
       -1, -1, -1
    ];
    applyConvolution(imageData.data, imageData.width, imageData.height, kernel);
    return imageData;
};

export { applyConvolution, ascii, backgroundBlur, blur, brightness, canvasToBlob, clamp, contrast, crop, edgeDetection, emboss, gaussianBlur, getPixelData, getResizedImageData, grayscale, isImageFile, loadImage, putPixelData, resize, sepia, sharpen, watermark };
