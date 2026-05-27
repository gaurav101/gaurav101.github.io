(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{label:`Features`,href:`#features`},{label:`Playground`,href:`#playground`},{label:`Use Cases`,href:`#use-cases`},{label:`API`,href:`#api`},{label:`Demos`,href:`#demos`},{label:`Install`,href:`#install`},{label:`Docs`,href:`./docs`},{label:`Storybook`,href:`./examples/react/storybook`},{label:`GitHub`,href:`https://github.com/gaurav101/LuminaJS/`}],t={github:`https://github.com/gaurav101/LuminaJS/`},n={label:`LuminaJS 2.1`,text:`Canvas filters, React components, crop workflows, and CSS image utilities in one browser-first package.`,href:`./docs`},r={eyebrow:`The browser image engine for modern JavaScript apps`,title:`Edit, transform, and export images where your users already are.`,body:`LuminaJS is a developer-friendly image processing toolkit for product teams building upload flows, profile editors, creative tools, CMS dashboards, and media-heavy web apps without sending every pixel through a backend job.`,actions:[{label:`Launch React Demo`,href:`./examples/react`,variant:`primary`},{label:`JS Demo`,href:`./vanilla-js`,variant:`secondary`,icon:`code`},{label:`CSS Demo`,href:`./css-demo`,variant:`accent`,icon:`brush`},{label:`Explore API Docs`,href:`./docs`,variant:`secondary`},{label:`View GitHub`,href:`https://github.com/gaurav101/LuminaJS/`,variant:`accent`,icon:`github`}],badges:[{value:`0 runtime deps`,label:`Canvas-native core`,icon:`gauge`},{value:`Only 3.8 kB gzipped`,label:`Minified browser bundle`,icon:`download`}],metrics:[{value:`4 output types`,label:`Canvas, Blob, data URL, and ImageData export paths.`,icon:`download`},{value:`3 ways to use`,label:`Core JavaScript, React components, and CSS utilities.`,icon:`layers`}]},i=[{id:`vanilla`,label:`Vanilla JS`,icon:`code`,code:`import { lumina } from '@gks101/luminajs';

await lumina(file)
  .resize(1200, 800)
  .contrast(28)
  .watermark('LuminaJS')
  .toCanvas(canvas);

const blob = await lumina(canvas)
  .sharpen()
  .toBlob('image/png');`},{id:`react`,label:`React`,icon:`react`,code:`import { LuminaCanvas } from '@gks101/luminajs/react';

function Editor({ file }) {
  return (
    <LuminaCanvas
      source={file}
      width={1200}
      height={800}
      contrast={28}
      watermark="LuminaJS"
      outputType="blob"
    />
  );
}`},{id:`css`,label:`CSS Utilities`,icon:`brush`,code:`<figure class="lum-frame lum-aspect-video">
  <img
    class="lum-img lum-fit-cover lum-filter-contrast lum-hover-zoom"
    src="/sample.png"
    alt="Processed preview"
  />
</figure>`}],a=[{title:`Chainable image pipeline`,body:`Load a File, URL, image element, canvas, or ImageData, then chain transformations and export the result.`,tone:`teal`,icon:`layers`},{title:`Filters and transforms`,body:`Brightness, contrast, grayscale, sepia, blur, sharpen, emboss, edge detection, resize, crop, ASCII, and watermark support.`,tone:`blue`,icon:`sliders`},{title:`React hooks and components`,body:`Use useLumina, LuminaCanvas, and ImageCropper to build responsive editors with less state glue.`,tone:`amber`,icon:`react`},{title:`Export-ready outputs`,body:`Render to canvas, download Blob output, create data URLs, or keep ImageData available for custom processing.`,tone:`rose`,icon:`download`},{title:`CSS image utilities`,body:`Style images with utility classes for filters, hover effects, object-fit, aspect ratios, animations, frames, and overlays.`,tone:`green`,icon:`brush`},{title:`Browser-first ergonomics`,body:`Designed for upload previews, profile-image editors, CMS tools, creative apps, and client-side asset preparation.`,tone:`violet`,icon:`rocket`}],o=[{title:`Upload previews`,body:`Resize and compress large uploads before they hit your API, while showing users a responsive preview.`,accent:`border-teal-200 bg-teal-50/70 text-teal-800`,icon:`upload`},{title:`Profile editors`,body:`Add crop, resize, watermark, and export flows to avatar or cover-photo forms without a heavy editor stack.`,accent:`border-blue-200 bg-blue-50/70 text-blue-800`,icon:`crop`},{title:`CMS image tools`,body:`Let editors apply predictable image transformations directly in admin dashboards and content workflows.`,accent:`border-amber-200 bg-amber-50/70 text-amber-900`,icon:`fileImage`},{title:`Creative interfaces`,body:`Prototype filter labs, ASCII previews, hover effects, and visual recipes with a browser-native API.`,accent:`border-rose-200 bg-rose-50/70 text-rose-800`,icon:`wand`}],s=[{title:`Original`,label:`Input media`,body:`Accept user-selected files and render the first preview instantly.`,imageClass:`brightness-105 saturate-110`,icon:`image`},{title:`Edited`,label:`Canvas result`,body:`Apply contrast, crop, filters, watermarking, and export rules in the browser.`,imageClass:`contrast-125 saturate-150`,icon:`sliders`},{title:`Styled`,label:`CSS utility`,body:`Use CSS-only image treatments for galleries, cards, and documentation examples.`,imageClass:`sepia contrast-125 brightness-95`,icon:`brush`}],c=[{label:`Full React Demo`,href:`./examples/react`,variant:`primary`,icon:`react`},{label:`Full JS Demo`,href:`./vanilla-js`,variant:`secondary`,icon:`code`},{label:`Full CSS Demo`,href:`./css-demo`,variant:`accent`,icon:`brush`},{label:`React Storybook`,href:`./examples/react/storybook`,variant:`secondary`,icon:`boxes`}],l=[{id:`none`,label:`Original`},{id:`grayscale`,label:`Mono`},{id:`sepia`,label:`Sepia`},{id:`sharpen`,label:`Sharpen`},{id:`emboss`,label:`Emboss`}],u=[{id:`html`,label:`HTML`,icon:`code`,code:`<section class="lumina-playground">
  <label class="drop-zone">
    <input id="imageInput" type="file" accept="image/*" />
    <span>Drop an image or browse</span>
  </label>

  <label>
    Brightness
    <input id="brightness" type="range" min="-80" max="80" value="0" />
  </label>

  <label>
    Contrast
    <input id="contrast" type="range" min="-80" max="80" value="18" />
  </label>

  <div id="cropStage" class="crop-stage">
    <canvas id="preview" width="960" height="540"></canvas>
    <div id="cropBox" class="crop-box" hidden></div>
  </div>

  <button id="applyCrop" type="button">Apply crop</button>
  <button id="resetImage" type="button">Reset image</button>

  <div class="filters">
    <button data-filter="none">Original</button>
    <button data-filter="grayscale">Mono</button>
    <button data-filter="sepia">Sepia</button>
    <button data-filter="sharpen">Sharpen</button>
    <button data-filter="emboss">Emboss</button>
  </div>
</section>`},{id:`css`,label:`CSS`,icon:`brush`,code:`.lumina-playground {
  display: grid;
  gap: 1rem;
  max-width: 960px;
}

.drop-zone {
  display: grid;
  min-height: 9rem;
  place-items: center;
  border: 2px dashed #5eead4;
  border-radius: 1rem;
  cursor: pointer;
}

.crop-stage {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #020617;
}

#preview {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.crop-box {
  position: absolute;
  cursor: move;
  border: 2px solid #5eead4;
  background: rgb(94 234 212 / 15%);
  box-shadow: 0 0 0 9999px rgb(15 23 42 / 45%);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}`},{id:`react`,label:`React`,icon:`react`,code:`import { useCallback, useState } from 'react';
import {
  ImageCropper,
  LuminaCanvas,
  useLumina,
} from '@gks101/luminajs/react';

const filterToProps = {
  none: {},
  grayscale: { grayscale: true },
  sepia: { sepia: true },
  sharpen: { sharpen: true },
  emboss: { emboss: true },
};

export function LuminaPlayground() {
  const [source, setSource] = useState(null);
  const [filter, setFilter] = useState('none');
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(18);
  const [cropped, setCropped] = useState(null);

  const activeSource = cropped ?? source;
  const filterProps = filterToProps[filter];

  const { loading, error, getImage } = useLumina({
    source: activeSource,
    ...filterProps,
    brightness,
    contrast,
    outputType: 'blob',
    deps: [filter, brightness, contrast, activeSource],
  });

  const handleFile = useCallback((event) => {
    const [file] = event.target.files ?? [];
    if (!file) return;
    setSource(file);
    setCropped(null);
  }, []);

  const exportBlob = async () => {
    const blob = await getImage('blob');
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'lumina-output.png';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="lumina-playground">
      <input type="file" accept="image/*" onChange={handleFile} />

      <div className="filters">
        {Object.keys(filterToProps).map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <label>
        Brightness
        <input
          type="range"
          min="-80"
          max="80"
          value={brightness}
          onChange={(event) => setBrightness(Number(event.target.value))}
        />
      </label>

      <label>
        Contrast
        <input
          type="range"
          min="-80"
          max="80"
          value={contrast}
          onChange={(event) => setContrast(Number(event.target.value))}
        />
      </label>

      <LuminaCanvas
        className="preview"
        source={activeSource}
        {...filterProps}
        brightness={brightness}
        contrast={contrast}
        outputType="canvas"
      />

      <ImageCropper
        src={activeSource}
        outputFormat="blob"
        allowResize
        allowReset
        showPreview={false}
        onCropComplete={(blob) => setCropped(blob)}
      />

      <button type="button" disabled={!activeSource || loading} onClick={exportBlob}>
        Export processed image
      </button>

      {error ? <p role="alert">{error.message}</p> : null}
    </section>
  );
}`},{id:`js`,label:`JS`,icon:`code`,code:`import { lumina } from '@gks101/luminajs';

const input = document.querySelector('#imageInput');
const canvas = document.querySelector('#preview');
const brightness = document.querySelector('#brightness');
const contrast = document.querySelector('#contrast');
const filterButtons = document.querySelectorAll('[data-filter]');
const sourceCanvas = document.createElement('canvas');
const originalCanvas = document.createElement('canvas');
let activeFilter = 'none';

input.addEventListener('change', async () => {
  const [file] = input.files;
  if (!file) return;

  const image = new Image();
  image.onload = () => {
    drawImage(originalCanvas, image);
    copyCanvas(sourceCanvas, originalCanvas);
    render();
  };
  image.src = URL.createObjectURL(file);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    render();
  });
});

[brightness, contrast].forEach((control) => {
  control.addEventListener('input', render);
});

async function render() {
  let chain = lumina(sourceCanvas);

  if (activeFilter === 'grayscale') chain = chain.grayscale();
  if (activeFilter === 'sepia') chain = chain.sepia();
  if (activeFilter === 'sharpen') chain = chain.sharpen();
  if (activeFilter === 'emboss') chain = chain.emboss();

  await chain
    .brightness(Number(brightness.value))
    .contrast(Number(contrast.value))
    .toCanvas(canvas);
}

async function applyCrop({ x, y, width, height }) {
  const cropped = document.createElement('canvas');

  await lumina(sourceCanvas)
    .crop(x, y, width, height)
    .toCanvas(cropped);

  copyCanvas(sourceCanvas, cropped);
  render();
}

function drawImage(targetCanvas, image) {
  targetCanvas.width = image.naturalWidth;
  targetCanvas.height = image.naturalHeight;
  targetCanvas.getContext('2d').drawImage(image, 0, 0);
}

function copyCanvas(targetCanvas, source) {
  targetCanvas.width = source.width;
  targetCanvas.height = source.height;
  targetCanvas.getContext('2d').drawImage(source, 0, 0);
}`}],d=[{label:`React`,title:`Image editor demo`,body:`Live filters, resize, crop, watermark, ASCII, hooks, and components.`,href:`./examples/react`,icon:`react`},{label:`JavaScript`,title:`Vanilla browser demo`,body:`Drag-and-drop processing with Canvas exports and transform controls.`,href:`./vanilla-js`,icon:`code`},{label:`CSS`,title:`Lumina Image CSS`,body:`Utility classes for responsive image styling and hover effects.`,href:`./css-demo`,icon:`brush`},{label:`Reference`,title:`Generated docs`,body:`API reference generated from source comments.`,href:`./docs`,icon:`book`},{label:`Storybook`,title:`React stories`,body:`Component examples for React integration and documentation.`,href:`./examples/react/storybook`,icon:`boxes`}],f={eyebrow:`React application demo`,title:`See LuminaJS running inside the React image editor.`,body:`The React demo shows the library in a real application flow: upload an image, tune visual filters, resize and crop, preview the result, and export from the browser without a backend processing step.`,video:`./react-demo.mp4`,href:`./react`},p=[{label:`Core API`,title:`Compose image operations fluently.`,body:`Use the chain API for direct JavaScript workflows and framework-agnostic tools.`,code:`import { lumina } from '@gks101/luminajs';

const dataUrl = await lumina(file)
  .resize(900, 600)
  .brightness(10)
  .contrast(18)
  .toDataURL();`},{label:`React`,title:`Render image processing as UI.`,body:`Use components and hooks when state, loading, preview, and user controls live in React.`,code:`import { LuminaCanvas } from '@gks101/luminajs/react';

<LuminaCanvas
  source="/sample.png"
  grayscale
  outputType="dataUrl"
  getImage={setPreview}
/>`},{label:`CSS`,title:`Style images without JavaScript work.`,body:`Use utility classes for visual effects, frames, aspect ratios, and hover states.`,code:`<figure class="lum-frame lum-aspect-video">
  <img
    class="lum-img lum-fit-cover lum-hover-zoom"
    src="/hero.jpg"
    alt="Preview"
  />
</figure>`}],m=[{title:`Core image pipeline`,body:`Load File, URL, image element, canvas, or ImageData sources and compose operations through a chainable API.`,icon:`layers`},{title:`Filter catalog`,body:`Brightness, contrast, grayscale, sepia, blur, sharpen, emboss, edge detection, ASCII, and background blur.`,icon:`sliders`},{title:`Transform toolkit`,body:`Resize, crop, watermark, prepare previews, and keep image work close to the browser UI.`,icon:`crop`},{title:`React exports`,body:`Use useLumina, LuminaCanvas, and ImageCropper for stateful editor screens and product upload flows.`,icon:`react`},{title:`CSS image utilities`,body:`Aspect ratios, object-fit helpers, filters, shadows, frames, overlays, hover effects, and animation helpers.`,icon:`brush`},{title:`Export adapters`,body:`Return Canvas, Blob, data URL, or ImageData results for previews, downloads, uploads, and custom processing.`,icon:`download`}],h=`# npm
npm install @gks101/luminajs

# pnpm
pnpm add @gks101/luminajs

# yarn
yarn add @gks101/luminajs`,g=[{label:`npm`,command:`npm install @gks101/luminajs`},{label:`pnpm`,command:`pnpm add @gks101/luminajs`},{label:`yarn`,command:`yarn add @gks101/luminajs`}],_=`// Core JavaScript
import { lumina } from '@gks101/luminajs';

// React components and hooks
import { LuminaCanvas, useLumina } from '@gks101/luminajs/react';

// Optional CSS utility layer
import '@gks101/luminajs/lumina-image.css';

await lumina(file)
  .resize(800, 600)
  .brightness(12)
  .contrast(18)
  .toCanvas(canvas);`,v=[{title:`Load`,body:`Accept files, URLs, canvases, image elements, or ImageData.`,icon:`upload`},{title:`Transform`,body:`Resize, crop, filter, sharpen, blur, watermark, or create ASCII.`,icon:`wand`},{title:`Preview`,body:`Render quickly to a canvas or React component while users edit.`,icon:`canvas`},{title:`Export`,body:`Return a Blob, data URL, ImageData, or final canvas for download.`,icon:`download`}],y={title:`Start with the demo, ship with the API.`,body:`Inspect the generated docs/code and lift the pieces that match your product workflow.`,actions:[{label:`Read Documentation`,href:`./docs`,variant:`primary`},{label:`Code`,href:`https://github.com/gaurav101/LuminaJS/`,variant:`accent`,icon:`github`}]},b={primary:`bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-700/20 hover:bg-teal-700`,secondary:`bg-white text-slate-950 border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50`,accent:`bg-amber-100 text-amber-900 border-amber-200 shadow-sm hover:border-amber-300 hover:bg-amber-50`};function x({label:e,href:t,variant:n=`secondary`,icon:r}){return`
    <a class="btn ${b[n]}" href="${t}">
      ${E(r??w[n]??`arrowRight`,`size-4`)}
      ${e}
    </a>
  `}function S(e){return`<span class="eyebrow">${e}</span>`}function C(e,t=``){return`
    <pre class="code-block ${t}"><code>${O(e)}</code></pre>
  `}var w={primary:`play`,secondary:`book`,accent:`sparkles`},T={arrowRight:`<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>`,book:`<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path>`,boxes:`<path d="m7.5 4.3 4.5 2.6 4.5-2.6"></path><path d="M7.5 9.7 12 12.3l4.5-2.6"></path><path d="M3 7l9-5 9 5v10l-9 5-9-5Z"></path>`,brush:`<path d="M9.5 16.5c-1.7 0-3 1.3-3 3 0 .8-.7 1.5-1.5 1.5 2.8.9 6-.5 6-4.5a1.5 1.5 0 0 0-1.5-1.5Z"></path><path d="m16 3 5 5-9.5 9.5-5-5Z"></path>`,canvas:`<rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 22h8"></path><path d="M12 18v4"></path>`,clipboard:`<rect x="8" y="2" width="8" height="4" rx="1"></rect><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"></path>`,code:`<path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path>`,crop:`<path d="M6 2v14a2 2 0 0 0 2 2h14"></path><path d="M18 22V8a2 2 0 0 0-2-2H2"></path>`,download:`<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>`,fileImage:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="m9 15 2-2 4 4"></path><circle cx="9" cy="10" r="1"></circle>`,filter:`<path d="M22 3H2l8 9.5V20l4 2v-9.5Z"></path>`,gauge:`<path d="M12 14 16 8"></path><path d="M4.3 19a9 9 0 1 1 15.4 0"></path>`,github:`<path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6 0-1.5-.5-2.7-1.4-3.7.1-.4.6-1.9-.2-3.6 0 0-1.2-.4-3.8 1.4a13.2 13.2 0 0 0-6.8 0C5.4.2 4.2.6 4.2.6c-.8 1.7-.3 3.2-.2 3.6A5.1 5.1 0 0 0 2.6 8c0 5.1 3.1 6.3 6.1 6.6a3 3 0 0 0-.9 2.1V22"></path><path d="M9 18c-3.1 1-3.1-1.5-4.3-1.8"></path>`,image:`<rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="8.5" cy="10.5" r="1.5"></circle><path d="m21 15-5-5L5 19"></path>`,layers:`<path d="m12 2 9 5-9 5-9-5Z"></path><path d="m3 12 9 5 9-5"></path><path d="m3 17 9 5 9-5"></path>`,play:`<path d="m8 5 11 7-11 7Z"></path>`,react:`<ellipse cx="12" cy="12" rx="9" ry="3.8"></ellipse><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"></ellipse><circle cx="12" cy="12" r="1.5"></circle>`,rocket:`<path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"></path><path d="M9 15 4 10l4-2 8-5 5 5-5 8-2 4Z"></path><circle cx="15" cy="9" r="1.5"></circle>`,sliders:`<path d="M4 21v-7"></path><path d="M4 10V3"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M20 21v-5"></path><path d="M20 12V3"></path><path d="M2 14h4"></path><path d="M10 8h4"></path><path d="M18 16h4"></path>`,sparkles:`<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"></path><path d="m5 3 .7 2.3L8 6l-2.3.7L5 9l-.7-2.3L2 6l2.3-.7Z"></path><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"></path>`,upload:`<path d="M12 15V3"></path><path d="m7 8 5-5 5 5"></path><path d="M5 21h14"></path>`,wand:`<path d="m15 4 5 5"></path><path d="m14 5 5 5L7 22l-5-5Z"></path><path d="M9 4V2"></path><path d="M4 9H2"></path><path d="M17 20v2"></path><path d="M22 15h-2"></path>`};function E(e,t=`size-5`){return`
    <svg class="${t} shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      ${T[e]??T.sparkles}
    </svg>
  `}function D(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function O(e){let t=[],n=D(e).replace(/(`(?:\\.|[^`])*`|'(?:\\.|[^'])*'|"(?:\\.|[^"])*")/g,e=>{let n=`LUMINASTRINGTOKEN${k(t.length)}`;return t.push({token:n,value:e}),n});return t.reduce((e,t)=>e.replace(t.token,`<span class="code-string">${t.value}</span>`),n.replace(/\b(import|from|await|const|return|async|function)\b/g,`<span class="code-keyword">$1</span>`).replace(/\b(\d+)\b/g,`<span class="code-number">$1</span>`).replace(/(\.[a-zA-Z_$][\w$]*)/g,`<span class="code-method">$1</span>`))}function k(e){let t=``,n=e;do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t}function A(){return`
    <section class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 px-5 py-9 text-slate-950 shadow-2xl shadow-slate-900/10 sm:px-8 lg:px-10 lg:py-12">
      <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-500 via-amber-400 to-rose-500"></div>
      <div class="mx-auto flex max-w-5xl flex-col items-center text-center">
        ${j()}
        <span class="inline-flex min-h-8 w-fit items-center rounded-full border border-teal-200 bg-teal-50 px-3 text-xs font-extrabold uppercase tracking-wide text-teal-700">
          ${r.eyebrow}
        </span>
        <h1 class="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
          ${r.title}
        </h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          ${r.body}
        </p>
        <div class="cta-row mt-7 justify-center">
          ${r.actions.map(x).join(``)}
        </div>
        <div class="mt-4 flex w-full flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
          ${r.badges.map(e=>`
                <span class="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-extrabold text-teal-900">
                  ${E(e.icon,`size-4`)}
                  <strong>${e.value}</strong>
                  <span class="hidden font-bold text-teal-700 sm:inline">${e.label}</span>
                </span>
              `).join(``)}
        </div>
        <div class="mt-5 grid w-full gap-3 sm:grid-cols-2">
          ${r.metrics.map(e=>`
                <div class="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 text-left">
                  <span class="mb-3 grid size-9 place-items-center rounded-xl bg-white text-teal-700 shadow-sm shadow-slate-900/10">
                    ${E(e.icon,`size-4`)}
                  </span>
                  <strong class="block text-base text-slate-950">${e.value}</strong>
                  <span class="mt-1 block text-sm leading-6 text-slate-600">${e.label}</span>
                </div>
              `).join(``)}
        </div>
      </div>
      ${M()}
      ${N()}
    </section>
  `}function j(){return`
    <a class="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-bold leading-6 text-teal-900 no-underline hover:border-teal-300 hover:bg-teal-100 sm:rounded-full" href="${n.href}">
      <span class="shrink-0 whitespace-nowrap rounded-full bg-teal-700 px-2 py-0.5 text-xs uppercase tracking-wide text-white">${n.label}</span>
      <span class="min-w-0 whitespace-normal break-words text-left">${n.text}</span>
    </a>
  `}function M(){return`
    <div class="mx-auto mt-9 max-w-5xl rounded-2xl border border-teal-300/30  p-4 shadow-2xl shadow-slate-900/20">
      <div class="grid min-w-0 gap-3 xl:grid-cols-3 ">
        ${g.map(e=>`
              <div class="overflow-hidden rounded-xl border border-teal-300/30 bg-slate-950 shadow-lg shadow-slate-950/20">
                <div class="flex items-center justify-between border-b border-white/10 px-3 py-2">
                  <span class="text-xs font-black uppercase tracking-wide text-teal-200">${e.label}</span>
                  <button class="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-teal-100 transition hover:border-teal-300 hover:bg-teal-300/15" type="button" data-copy-command="${e.command}" aria-label="Copy ${e.label} install command">
                    ${E(`clipboard`,`size-4`)}
                  </button>
                </div>
                <pre class="overflow-x-auto p-4 text-sm font-black leading-6"><code><span class="text-slate-500">$</span> <span class="text-amber-200">${e.command.split(` `)[0]}</span> <span class="text-teal-200">${e.command.split(` `).slice(1).join(` `)}</span></code></pre>
              </div>
            `).join(``)}
      </div>
    </div>
  `}function N(){return`
    <div class="mx-auto mt-9 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5" data-code-tabs>
      <div class="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div class="border-b border-slate-200 bg-slate-50/80 p-5 lg:border-b-0 lg:border-r">
          ${S(`Compare implementation`)}
          <h2 class="mt-4 text-2xl font-black leading-tight text-slate-950">Same image workflow, three front-end surfaces.</h2>
          <p class="mt-3 leading-7 text-slate-600">Switch between Vanilla JS, React, and CSS utilities to see how LuminaJS fits the stack you are shipping.</p>
          <div class="mt-5 grid gap-2" role="tablist" aria-label="Hero code examples">
            ${i.map((e,t)=>`
                  <button class="code-tab-button ${t===0?`is-active`:``}" type="button" role="tab" aria-selected="${t===0}" aria-controls="hero-code-${e.id}" data-code-tab="${e.id}">
                    ${E(e.icon,`size-4`)}
                    ${e.label}
                  </button>
                `).join(``)}
          </div>
        </div>
        <div class="min-w-0 bg-slate-950">
          ${i.map((e,t)=>`
                <div id="hero-code-${e.id}" class="code-tab-panel ${t===0?``:`hidden`}" role="tabpanel" data-code-panel="${e.id}">
                  ${C(e.code,`min-h-[360px] rounded-none border-0`)}
                </div>
              `).join(``)}
        </div>
      </div>
    </div>
  `}function P(){return`
    <nav class="sticky top-0 z-20 flex flex-col gap-4 border-b border-slate-200/70 bg-white/75 py-3 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between" aria-label="Primary navigation">
      <a class="inline-flex items-center gap-3 text-lg font-black no-underline" href="./index.html" aria-label="LuminaJS home">
        <span class="grid size-10 place-items-center rounded-lg bg-slate-950 text-white shadow-lg shadow-slate-900/20">L</span>
        <span class="tracking-tight">LuminaJS</span>
      </a>
      <div class="flex flex-wrap gap-2">
        ${e.map(e=>`
              <a class="rounded-lg border border-transparent px-3.5 py-2 text-sm font-bold text-slate-600 hover:border-slate-200 hover:bg-white/80 hover:text-slate-950" href="${e.href}">
                ${e.label}
              </a>
            `).join(``)}
      </div>
    </nav>
  `}function F(){return`
    <footer class="flex flex-col gap-3 border-t border-slate-200 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <p>LuminaJS is built for browser-first image processing, React image UI, and CSS-only visual image effects.</p>
      <a class="font-bold text-slate-900 hover:text-teal-700" href="./docs">API reference</a>
    </footer>
  `}function I(){return`
    <section class="section" id="playground">
      <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/10" data-playground>
        <div class="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
          <div class="border-b border-slate-200 bg-gradient-to-br from-teal-50 via-white to-amber-50 p-6 lg:border-b-0 lg:border-r lg:p-7">
            ${S(`Live canvas playground`)}
            <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Drop a photo. Tune it on the page.</h2>
            <p class="mt-4 leading-8 text-slate-600">
              Try the same browser-side workflow LuminaJS is built for: load local media, adjust pixels, crop the frame, and preview the result without uploading the file.
            </p>

            <label class="mt-6 flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal-300 bg-white/80 p-5 text-center transition hover:border-teal-500 hover:bg-teal-50" data-drop-zone>
              <input class="sr-only" type="file" accept="image/*" data-image-input />
              <span class="grid size-12 place-items-center rounded-2xl bg-teal-100 text-teal-800">${E(`upload`)}</span>
              <strong class="mt-3 text-base text-slate-950">Drop an image or browse</strong>
              <span class="mt-1 text-sm leading-6 text-slate-600" data-playground-status>Using the sample image until you choose a local file.</span>
            </label>

            <div class="mt-6 grid gap-4">
              ${L(`Brightness`,`brightness`,-80,80,0)}
              ${L(`Contrast`,`contrast`,-80,80,18)}
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <button class="btn bg-slate-950 text-white border-slate-950 shadow-lg shadow-slate-900/20 hover:bg-slate-800" type="button" data-apply-crop>
                ${E(`crop`,`size-4`)}
                Apply crop
              </button>
              <button class="btn bg-white text-slate-950 border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50" type="button" data-reset-crop>
                ${E(`image`,`size-4`)}
                Reset image
              </button>
            </div>

            <p class="mt-5 rounded-2xl border border-teal-200 bg-white/75 p-4 text-sm font-bold leading-6 text-slate-700">
              This embedded playground is a lightweight preview of the LuminaJS workflow. For the complete feature demos, open the full examples below.
            </p>

            <div class="playground-demo-actions mt-5">
              ${c.map(x).join(``)}
            </div>
          </div>

          <div class="bg-slate-950 p-4 sm:p-6">
            <div class="flex items-center justify-between rounded-t-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-200">
              <span class="inline-flex items-center gap-2">${E(`canvas`,`size-4`)} Canvas preview</span>
              <span data-playground-timing>Ready</span>
            </div>
            <div class="relative overflow-hidden rounded-b-2xl border-x border-b border-white/10 bg-slate-900" data-crop-stage>
              <canvas class="aspect-video h-full min-h-[320px] w-full bg-slate-900 object-contain" width="960" height="540" data-playground-canvas></canvas>
              <div class="absolute hidden cursor-move border-2 border-teal-300 bg-teal-300/15 shadow-[0_0_0_9999px_rgba(15,23,42,0.45)]" data-crop-box>
                ${[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`].map(e=>`<span class="crop-handle crop-handle-${e}" data-crop-handle="${e}"></span>`).join(``)}
              </div>
              <div class="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl bg-slate-950/75 px-3 py-2 text-sm font-bold text-white backdrop-blur" data-crop-help>Drag on the image to select a crop area.</div>
            </div>
            <div class="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
              <div class="mb-3 flex items-center justify-between gap-3 text-sm font-bold text-slate-200">
                <span>Filter previews</span>
                <span class="text-xs uppercase tracking-wide text-slate-400">LuminaJS API</span>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                ${l.map((e,t)=>`
                      <button class="filter-preset ${t===0?`is-active`:``}" type="button" data-filter="${e.id}">
                        <canvas class="h-16 w-full rounded-lg bg-slate-800 object-cover" width="160" height="90" data-filter-preview="${e.id}"></canvas>
                        <span>${e.label}</span>
                      </button>
                    `).join(``)}
              </div>
            </div>
            ${ee()}
          </div>
        </div>
      </div>
    </section>
  `}function ee(){return`
    <div class="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950" data-code-tabs>
      <div class="flex flex-col gap-3 border-b border-white/10 bg-white/[0.06] p-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Playground code examples">
          ${u.map((e,t)=>`
                <button class="playground-code-tab ${t===0?`is-active`:``}" type="button" role="tab" aria-selected="${t===0}" aria-controls="playground-code-${e.id}" data-code-tab="${e.id}">
                  ${E(e.icon,`size-4`)}
                  ${e.label}
                </button>
              `).join(``)}
        </div>
        <button class="copy-button" type="button" data-copy-code>
          ${E(`clipboard`,`size-4`)}
          <span data-copy-label>Copy</span>
        </button>
      </div>
      ${u.map((e,t)=>`
            <div id="playground-code-${e.id}" class="code-tab-panel ${t===0?``:`hidden`}" role="tabpanel" data-code-panel="${e.id}">
              ${C(e.code,`max-h-[420px] rounded-none border-0 text-xs`)}
            </div>
          `).join(``)}
    </div>
  `}function L(e,t,n,r,i){return`
    <label class="grid gap-2 rounded-2xl border border-slate-200 bg-white/75 p-4">
      <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800">
        <span>${e}</span>
        <output class="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700" data-control-value="${t}">${i}</output>
      </span>
      <input class="accent-teal-600" type="range" min="${n}" max="${r}" value="${i}" data-control="${t}" />
    </label>
  `}function R(e,t){return`
    <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <h2 class="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">${e}</h2>
      <p class="max-w-xl leading-7 text-slate-600">${t}</p>
    </div>
  `}var te={teal:`bg-teal-600`,blue:`bg-blue-600`,amber:`bg-amber-500`,rose:`bg-rose-600`,green:`bg-green-700`,violet:`bg-violet-600`};function ne(){return`
    <section class="section">
      <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          ${S(`Media workflows`)}
          <h2 class="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">Show the image journey from input to polished output.</h2>
        </div>
        <p class="max-w-xl leading-7 text-slate-600">Use the same asset across editing states, CSS treatments, and export previews so product teams can see how LuminaJS fits real UI flows.</p>
      </div>
      <div class="grid gap-4 lg:grid-cols-3">
        ${s.map(e=>`
              <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-900/5">
                <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img class="h-full w-full object-cover transition duration-500 group-hover:scale-105 ${e.imageClass}" src="./sample.png" alt="${e.title} preview created with LuminaJS" />
                  <span class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-slate-800 shadow-lg shadow-slate-900/10">
                    ${E(e.icon,`size-3.5`)}
                    ${e.label}
                  </span>
                </div>
                <div class="p-5">
                  <h3 class="text-xl font-black text-slate-950">${e.title}</h3>
                  <p class="mt-2 leading-7 text-slate-600">${e.body}</p>
                </div>
              </article>
            `).join(``)}
      </div>
    </section>
  `}function re(){return`
    <section class="section" id="use-cases">
      ${R(`Built for product teams shipping real image workflows.`,`Use LuminaJS where image handling is part of the user experience, not a separate media-processing service.`)}
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        ${o.map(e=>`
              <article class="rounded-2xl border ${e.accent} p-5">
                <span class="mb-4 grid size-11 place-items-center rounded-xl bg-white/80 shadow-sm shadow-slate-900/10">
                  ${E(e.icon)}
                </span>
                <h3 class="text-lg font-black">${e.title}</h3>
                <p class="mt-3 leading-7 text-slate-700">${e.body}</p>
              </article>
            `).join(``)}
      </div>
    </section>
  `}function ie(){return`
    <section class="section" id="features">
      ${R(`Everything needed for browser image tooling.`,`Compose low-level filters, use React abstractions when the UI gets complex, or reach for CSS utilities when the job is presentation only.`)}
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        ${a.map(e=>`
              <article class="card hover-card">
                <div class="mb-4 flex items-center justify-between">
                  <span class="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-900">
                    ${E(e.icon)}
                  </span>
                  <span class="h-1 w-11 rounded-full ${te[e.tone]}"></span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-950">${e.title}</h3>
                <p class="mt-3 leading-7 text-slate-600">${e.body}</p>
              </article>
            `).join(``)}
      </div>
    </section>
  `}function z(){return`
    <section class="section" id="api">
      ${R(`One library surface, three implementation modes.`,`Pick the level that matches the feature you are building: framework-agnostic JavaScript, React UI, or CSS-only image presentation.`)}
      <div class="grid gap-5">
        <div class="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              ${S(`Package contents`)}
              <h3 class="mt-4 text-3xl font-black leading-tight text-slate-950">What ships in the package</h3>
              <p class="mt-3 max-w-3xl leading-7 text-slate-600">
                Install one package and use only the surface your application needs: core JavaScript, React components, CSS utilities, or export helpers.
              </p>
            </div>
            <a class="btn bg-slate-950 text-white border-slate-950 shadow-lg shadow-slate-900/20 hover:bg-slate-800" href="${t.github}">
              ${E(`github`,`size-4`)}
              GitHub repository
            </a>
          </div>
          <div class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            ${m.map(e=>`
                  <article class="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <span class="grid size-10 place-items-center rounded-xl bg-white text-teal-700 shadow-sm shadow-slate-900/10">
                      ${E(e.icon)}
                    </span>
                    <h4 class="mt-4 text-base font-black text-slate-950">${e.title}</h4>
                    <p class="mt-2 text-sm leading-6 text-slate-600">${e.body}</p>
                  </article>
                `).join(``)}
          </div>
        </div>
        <div class="grid gap-4 lg:grid-cols-3">
          ${p.map(e=>`
                <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white/90">
                  <div class="p-5">
                    <span class="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-slate-700">${e.label}</span>
                    <h3 class="mt-4 text-xl font-black text-slate-950">${e.title}</h3>
                    <p class="mt-2 leading-7 text-slate-600">${e.body}</p>
                  </div>
                  ${C(e.code,`min-h-64 rounded-none border-0 text-xs md:text-sm`)}
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function B(){return`
    <section class="section" id="demos">
      ${R(`Explore the working demos.`,`Each demo is built from the example projects and can be opened directly from this generated artifact folder.`)}
      ${ae()}
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        ${d.map(e=>`
              <a class="card hover-card group min-h-44 no-underline" href="${e.href}">
                <span class="mb-4 grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  ${E(e.icon)}
                </span>
                <span class="inline-flex w-fit rounded-lg bg-blue-50 px-2 py-1 text-xs font-black uppercase tracking-wide text-blue-700">${e.label}</span>
                <strong class="mt-3 block text-base text-slate-950">${e.title}</strong>
                <span class="mt-3 block leading-6 text-slate-600">${e.body}</span>
              </a>
            `).join(``)}
      </div>
    </section>
  `}function ae(){return`
    <article class="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-900/5 lg:grid lg:grid-cols-[0.82fr_1.18fr]">
      <div class="p-6 lg:p-7">
        ${S(f.eyebrow)}
        <h3 class="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">${f.title}</h3>
        <p class="mt-4 leading-8 text-slate-600">${f.body}</p>
        <div class="cta-row mt-6">
          ${x({label:`Open React Demo`,href:f.href,variant:`primary`,icon:`react`})}
        </div>
      </div>
      <div class="bg-slate-950 p-3">
        <video class="aspect-video h-full w-full rounded-xl bg-slate-900 object-cover shadow-2xl shadow-slate-950/30" src="${f.video}" controls muted playsinline preload="metadata" aria-label="React demo walkthrough video"></video>
      </div>
    </article>
  `}function oe(){return`
    <section class="section" id="install">
      <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-900/5 lg:grid lg:grid-cols-[0.82fr_1.18fr]">
        <div class="bg-gradient-to-br from-amber-50 via-white to-teal-50 p-7">
          ${S(`Developer quick start`)}
          <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950">Install once. Use only what you need.</h2>
          <p class="mt-4 leading-8 text-slate-600">
            LuminaJS exposes core modules, filter helpers, React exports, and CSS utilities so applications can stay focused and avoid pulling in a full image editor stack.
          </p>
          <dl class="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 bg-white/75 p-3">
              <dt class="font-black text-slate-950">Package</dt>
              <dd class="mt-1">
               <a class="inline-flex items-center gap-2 rounded-lg hover:bg-teal-50" href="https://www.npmjs.com/package/@gks101/luminajs" target="_blank">
             @gks101/luminajs</a>
              </dd>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white/75 p-3">
              <dt class="font-black text-slate-950">Code</dt>
              <dd class="mt-2">
                <a class="inline-flex items-center gap-2 rounded-lg hover:bg-amber-50" href="${t.github}" target="_blank">
                  ${E(`github`,`size-4`)}
                  GitHub repository
                </a>
              </dd>
            </div>
          </dl>
          <div class="cta-row mt-6">
            ${x({label:`Read API Docs`,href:`./docs`,variant:`primary`})}
            ${x({label:`View GitHub`,href:t.github,variant:`secondary`,icon:`github`})}
          </div>
        </div>
        <div class="grid gap-px bg-slate-200 lg:grid-cols-2">
          <div class="bg-white">
            <div class="border-b border-slate-200 px-5 py-3 text-xs font-black uppercase tracking-wide text-slate-600">Install</div>
            ${C(h,`h-full min-h-72 rounded-none border-0`)}
          </div>
          <div class="bg-white">
            <div class="border-b border-slate-200 px-5 py-3 text-xs font-black uppercase tracking-wide text-slate-600">Usage</div>
            ${C(_,`h-full min-h-72 rounded-none border-0`)}
          </div>
        </div>
      </div>
    </section>
  `}function se(){return`
    <section class="section">
      ${R(`A practical image workflow model.`,`The API follows the way browser image tools are usually built: load, preview, compose, and export.`)}
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        ${v.map((e,t)=>`
              <article class="card hover-card p-6">
                <div class="flex items-center justify-between">
                  <b class="grid size-8 place-items-center rounded-lg bg-teal-50 text-teal-700">${t+1}</b>
                  <span class="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-900">
                    ${E(e.icon)}
                  </span>
                </div>
                <h3 class="mt-4 text-lg font-extrabold text-slate-950">${e.title}</h3>
                <p class="mt-2 leading-7 text-slate-600">${e.body}</p>
              </article>
            `).join(``)}
      </div>
    </section>
  `}function ce(){return`
    <section class="section">
      <div class="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/25 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
        <div>
          <h2 class="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">${y.title}</h2>
          <p class="mt-3 max-w-2xl leading-8 text-slate-300">${y.body}</p>
        </div>
        <div class="cta-row mt-6 sm:flex-nowrap lg:mt-0 lg:justify-end">
          ${y.actions.map(x).join(``)}
        </div>
      </div>
    </section>
  `}function le(){return`
    <div class="site-shell relative">
      ${P()}
      <main>
        ${A()}
        ${I()}
        ${ne()}
        ${re()}
        ${ie()}
        ${z()}
        ${B()}
        ${oe()}
        ${se()}
        ${ce()}
      </main>
      ${F()}
    </div>
  `}function V(){let e=globalThis.window!==void 0,t=globalThis.document!==void 0&&typeof globalThis.document.createElement==`function`;return e||t}function H(e){if(!V())throw Error(`LuminaJS [runtime]: "${e}" is browser-only. Run this on the client side (window/document available).`)}function U(e,t){let n=globalThis[t];return typeof n==`function`&&e instanceof n}function W(e){if(typeof globalThis.Image!=`function`)throw Error(`LuminaJS [runtime]: "load image from URL" is browser-only. Run this on the client side (window/document/Image available).`);return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`Anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LuminaJS [loader]: Failed to load image from URL — "${e}"`)),r.src=e})}function ue(e){if(!e.type.startsWith(`image/`))return Promise.reject(TypeError(`LuminaJS [loader]: Expected an image File, but received MIME type "${e.type}".`));if(typeof globalThis.Image!=`function`)throw Error(`LuminaJS [runtime]: "load image from File" is browser-only. Run this on the client side (window/document/Image available).`);if(globalThis.URL===void 0||typeof globalThis.URL.createObjectURL!=`function`||typeof globalThis.URL.revokeObjectURL!=`function`)throw Error(`LuminaJS [runtime]: "load image from File" requires URL.createObjectURL support in the browser.`);let t=URL.createObjectURL(e);return new Promise((n,r)=>{let i=new Image;i.onload=()=>{URL.revokeObjectURL(t),n(i)},i.onerror=()=>{URL.revokeObjectURL(t),r(Error(`LuminaJS [loader]: Failed to load image from File — "${e.name}".`))},i.src=t})}async function de(e){return typeof e==`string`?W(e):U(e,`File`)?ue(e):Promise.reject(TypeError(`LuminaJS [loader]: Invalid source type "${typeof e}". Expected a URL string or a File object.`))}function G(e,t){H(`create offscreen canvas`);let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`LuminaJS [canvas]: Failed to create offscreen canvas context.`);return{canvas:n,ctx:r}}function fe(e){let t=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(t===0||n===0)throw Error(`LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions (${t}x${n}). Ensure the image is fully loaded before calling getPixelData.`);let{canvas:r,ctx:i}=G(t,n);i.drawImage(e,0,0,t,n);try{return{imageData:i.getImageData(0,0,t,n),canvas:r}}catch(e){let t=e instanceof Error?e.message:String(e);throw Error(`LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a cross-origin image. Ensure the server sends CORS headers and the image is loaded with crossOrigin="Anonymous". Original error: ${t}`)}}function K(e,t){let n=e.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. The canvas may already have a context of a different type (e.g. "webgl").`);n.putImageData(t,0,0)}function pe(e,t=`image/png`,n=.92){return new Promise((r,i)=>{e.toBlob(e=>{e?r(e):i(Error(`LuminaJS [canvas]: canvas.toBlob returned null. The canvas may be empty or the MIME type "${t}" is unsupported.`))},t,n)})}function me(e,t,n){if(t<=0||n<=0)throw Error(`LuminaJS [canvas]: Resize dimensions must be positive (${t}x${n}).`);let{canvas:r,ctx:i}=G(t,n);return i.drawImage(e,0,0,t,n),r}function q(e,t,n,r,i){if(r<=0||i<=0)throw Error(`LuminaJS [canvas]: Crop dimensions must be positive (${r}x${i}).`);let{canvas:a,ctx:o}=G(r,i);return o.drawImage(e,t,n,r,i,0,0,r,i),a}var he=.299,ge=.587,_e=.114;function ve(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2],a=he*t+ge*r+_e*i;n[e]=a,n[e+1]=a,n[e+2]=a}return t}function J(e,t,n){return Math.min(Math.max(e,t),n)}function ye(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length;for(let e=0;e<i;e+=4)r[e]=J(r[e]+t,0,255),r[e+1]=J(r[e+1]+t,0,255),r[e+2]=J(r[e+2]+t,0,255);return n}function be(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length,a=259*(t+255)/(255*(259-t));for(let e=0;e<i;e+=4)r[e]=J(a*(r[e]-128)+128,0,255),r[e+1]=J(a*(r[e+1]-128)+128,0,255),r[e+2]=J(a*(r[e+2]-128)+128,0,255);return n}function xe(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2];n[e]=J(t*.393+r*.769+i*.189,0,255),n[e+1]=J(t*.349+r*.686+i*.168,0,255),n[e+2]=J(t*.272+r*.534+i*.131,0,255)}return t}var Se=`@%#*+=-:. `;function Ce(e,t={}){let{charSet:n=Se,invert:r=!1}=t,i=r?n.split(``).reverse().join(``):n,a=e.data,o=e.width,s=e.height,c=``;for(let e=0;e<s;e++){for(let t=0;t<o;t++){let n=(e*o+t)*4,r=a[n],s=a[n+1],l=a[n+2],u=.299*r+.587*s+.114*l,d=Math.floor(u/255*(i.length-1));c+=i[d]}c+=`
`}return c}function we(e,t=1){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t=Math.max(0,Math.floor(t)),t===0)return new ImageData(new Uint8ClampedArray(i),n,r);for(let e=0;e<r;e++)for(let r=0;r<n;r++){let a=0,s=0,c=0,l=0,u=0;for(let o=-t;o<=t;o++){let t=r+o;if(t>=0&&t<n){let r=(e*n+t)*4;a+=i[r],s+=i[r+1],c+=i[r+2],l+=i[r+3],u++}}let d=(e*n+r)*4;o[d]=a/u,o[d+1]=s/u,o[d+2]=c/u,o[d+3]=l/u}for(let e=0;e<n;e++)for(let i=0;i<r;i++){let s=0,c=0,l=0,u=0,d=0;for(let a=-t;a<=t;a++){let t=i+a;if(t>=0&&t<r){let r=(t*n+e)*4;s+=o[r],c+=o[r+1],l+=o[r+2],u+=o[r+3],d++}}let f=(i*n+e)*4;a[f]=s/d,a[f+1]=c/d,a[f+2]=l/d,a[f+3]=u/d}return new ImageData(a,n,r)}function Y(e,t=2){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t<=0)return new ImageData(new Uint8ClampedArray(i),n,r);let s=Math.ceil(t*3),c=s*2+1,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){let n=e-s;l[e]=Math.exp(-(n*n)/(2*t*t)),u+=l[e]}for(let e=0;e<c;e++)l[e]/=u;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=0,a=0,u=0,d=0;for(let o=0;o<c;o++){let c=t+(o-s),f=Math.max(0,Math.min(n-1,c)),p=(e*n+f)*4,m=l[o];r+=i[p]*m,a+=i[p+1]*m,u+=i[p+2]*m,d+=i[p+3]*m}let f=(e*n+t)*4;o[f]=r,o[f+1]=a,o[f+2]=u,o[f+3]=d}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let i=0,u=0,d=0,f=0;for(let a=0;a<c;a++){let c=t+(a-s),p=(Math.max(0,Math.min(r-1,c))*n+e)*4,m=l[a];i+=o[p]*m,u+=o[p+1]*m,d+=o[p+2]*m,f+=o[p+3]*m}let p=(t*n+e)*4;a[p]=i,a[p+1]=u,a[p+2]=d,a[p+3]=f}return new ImageData(a,n,r)}function Te(e,t,n={}){H(`apply watermark`);let{x:r=10,y:i=10,fontSize:a=24,fontFace:o=`Arial`,font:s=`${a}px ${o}`,color:c=`rgba(255, 255, 255, 0.5)`,align:l=`left`,baseline:u=`top`}=n,d=document.createElement(`canvas`);d.width=e.width,d.height=e.height;let f=d.getContext(`2d`);if(!f)throw Error(`LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.`);return f.putImageData(e,0,0),f.font=s,f.fillStyle=c,f.textAlign=l,f.textBaseline=u,f.fillText(t,r,i),f.getImageData(0,0,d.width,d.height)}function Ee(e,t={}){let{width:n,height:r}=e,i=Math.min(n,r),{sigma:a=5,centerX:o=n/2,centerY:s=r/2,focusRadius:c=i*.2,falloff:l=i*.4}=t,u=Y(e,a),d=e.data,f=u.data,p=new Uint8ClampedArray(d.length);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-o,i=e-s,a=Math.sqrt(r*r+i*i),u=0;a>c&&(u=Math.min(1,(a-c)/l));let m=(e*n+t)*4,h=1-u;p[m]=d[m]*h+f[m]*u,p[m+1]=d[m+1]*h+f[m+1]*u,p[m+2]=d[m+2]*h+f[m+2]*u,p[m+3]=d[m+3]}return new ImageData(p,n,r)}var X=(e,t,n,r)=>{let i=new Uint8ClampedArray(e);for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=0,s=0,c=0;for(let e=0;e<3;e++)for(let l=0;l<3;l++){let u=n+l-1,d=((a+e-1)*t+u)*4,f=r[e*3+l];o+=i[d]*f,s+=i[d+1]*f,c+=i[d+2]*f}let l=(a*t+n)*4;e[l]=Math.min(255,Math.max(0,o)),e[l+1]=Math.min(255,Math.max(0,s)),e[l+2]=Math.min(255,Math.max(0,c))}return e},De=e=>(X(e.data,e.width,e.height,[0,-1,0,-1,5,-1,0,-1,0]),e),Oe=e=>(X(e.data,e.width,e.height,[-2,-1,0,-1,1,1,0,1,2]),e),ke=e=>(X(e.data,e.width,e.height,[-1,-1,-1,-1,8,-1,-1,-1,-1]),e),Ae=class{constructor(e){this.source=e,this.operations=[]}_addOp(e,...t){return this.operations.push({fn:e,args:t}),this}grayscale(){return this._addOp(ve)}brightness(e){return this._addOp(ye,e)}contrast(e){return this._addOp(be,e)}sepia(){return this._addOp(xe)}ascii(e={}){return this._addOp(Ce,e)}blur(e){return this._addOp(we,e)}gaussianBlur(e){return this._addOp(Y,e)}watermark(e,t){return this._addOp(Te,e,t)}backgroundBlur(e){return this._addOp(Ee,e)}applyConvolution(e,t,n){return this._addOp(X,e,t,n)}sharpen(){return this._addOp(De)}emboss(){return this._addOp(Oe)}edgeDetection(){return this._addOp(ke)}resize(e,t){return this._addOp((e,t,n)=>{H(`resize image in chain`);let r=document.createElement(`canvas`);r.width=e.width,r.height=e.height;let i=r.getContext(`2d`);if(!i)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);i.putImageData(e,0,0);let a=me(r,t,n).getContext(`2d`);if(!a)throw Error(`LuminaJS [chain]: Failed to get resized canvas context.`);return a.getImageData(0,0,t,n)},e,t)}crop(e,t,n,r){return this._addOp((e,t,n,r,i)=>{H(`crop image in chain`);let a=document.createElement(`canvas`);a.width=e.width,a.height=e.height;let o=a.getContext(`2d`);if(!o)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);o.putImageData(e,0,0);let s=q(a,t,n,r,i).getContext(`2d`);if(!s)throw Error(`LuminaJS [chain]: Failed to get cropped canvas context.`);return s.getImageData(0,0,r,i)},e,t,n,r)}async _resolveSource(){let e=this.source;if((typeof e==`string`||U(e,`File`))&&(e=await de(e)),U(e,`HTMLImageElement`))return fe(e).imageData;if(U(e,`HTMLCanvasElement`)){let t=e,n=t.getContext(`2d`);if(!n)throw Error(`LuminaJS [chain]: Failed to get canvas context from source.`);return n.getImageData(0,0,t.width,t.height)}if(U(e,`ImageData`))return e;throw Error(`LuminaJS [chain]: Unsupported source type.`)}async render(){let e=await this._resolveSource();for(let t of this.operations)e=await t.fn(e,...t.args);return e}async toCanvas(e){let t=await this.render();return e.width=t.width,e.height=t.height,K(e,t),e}async toBlob(e=`image/png`,t=.92){let n=await this.render();H(`export image as Blob`);let r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,K(r,n),pe(r,e,t)}async toDataURL(e=`image/png`,t=.92){let n=await this.render();H(`export image as Data URL`);let r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,K(r,n),r.toDataURL(e,t)}async toHtmlElement(e){H(`render image into HTML element`);let t=typeof e==`string`?document.getElementById(e):e;if(!t)throw Error(`LuminaJS [chain]: Target element not found: "${e}"`);if(U(t,`HTMLImageElement`)){let e=t;e.src=await this.toDataURL()}else if(U(t,`HTMLCanvasElement`)){let e=t;await this.toCanvas(e)}else throw Error(`LuminaJS [chain]: toHtmlElement only supports <img> and <canvas> elements.`);return t}};function Z(e){return new Ae(e)}document.querySelector(`#app`).innerHTML=le(),document.querySelectorAll(`[data-code-tabs]`).forEach(e=>{let t=[...e.querySelectorAll(`[data-code-tab]`)],n=[...e.querySelectorAll(`[data-code-panel]`)],r=e.querySelector(`[data-copy-code]`);t.forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.codeTab;t.forEach(e=>{let t=e.dataset.codeTab===r;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-selected`,String(t))}),n.forEach(e=>{e.classList.toggle(`hidden`,e.dataset.codePanel!==r)})})}),r?.addEventListener(`click`,async()=>{let e=n.find(e=>!e.classList.contains(`hidden`))?.querySelector(`code`)?.textContent??``,t=r.querySelector(`[data-copy-label]`);e&&(await Q(e),t&&(t.textContent=`Copied`),window.setTimeout(()=>{t&&(t.textContent=`Copy`)},1400))})}),document.querySelectorAll(`[data-copy-command]`).forEach(e=>{e.addEventListener(`click`,async()=>{await Q(e.dataset.copyCommand);let t=e.getAttribute(`aria-label`);e.classList.add(`border-teal-300`,`bg-teal-300/20`),e.setAttribute(`aria-label`,`Copied`),window.setTimeout(()=>{e.classList.remove(`border-teal-300`,`bg-teal-300/20`),e.setAttribute(`aria-label`,t)},1200)})});async function Q(e){if(navigator.clipboard){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.left=`-9999px`,t.style.top=`0`,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}document.querySelectorAll(`[data-playground]`).forEach(e=>{let t=e.querySelector(`[data-playground-canvas]`),n=e.querySelector(`[data-image-input]`),r=e.querySelector(`[data-drop-zone]`),i=e.querySelector(`[data-crop-stage]`),a=e.querySelector(`[data-crop-box]`),o=e.querySelector(`[data-crop-help]`),s=e.querySelector(`[data-apply-crop]`),c=e.querySelector(`[data-reset-crop]`),l=[...e.querySelectorAll(`[data-filter]`)],u=[...e.querySelectorAll(`[data-filter-preview]`)],d=e.querySelector(`[data-playground-status]`),f=e.querySelector(`[data-playground-timing]`),p=[...e.querySelectorAll(`[data-control]`)],m=new Map(p.map(e=>[e.dataset.control,Number(e.value)])),h=document.createElement(`canvas`),g=document.createElement(`canvas`),_,v,y=`none`,b,x=0,S=0;w(`./sample.png`,`Using the sample image until you choose a local file.`),p.forEach(t=>{t.addEventListener(`input`,()=>{m.set(t.dataset.control,Number(t.value));let n=e.querySelector(`[data-control-value="${t.dataset.control}"]`);n&&(n.value=t.value,n.textContent=t.value),T()})}),l.forEach(e=>{e.addEventListener(`click`,()=>{y=e.dataset.filter,l.forEach(t=>{t.classList.toggle(`is-active`,t===e)}),d.textContent=`${e.textContent.trim()} filter selected.`,T()})}),n.addEventListener(`change`,()=>{let[e]=n.files;e&&C(e)}),[`dragenter`,`dragover`].forEach(e=>{r.addEventListener(e,e=>{e.preventDefault(),r.classList.add(`border-teal-600`,`bg-teal-50`)})}),[`dragleave`,`drop`].forEach(e=>{r.addEventListener(e,e=>{e.preventDefault(),r.classList.remove(`border-teal-600`,`bg-teal-50`)})}),r.addEventListener(`drop`,e=>{let[t]=e.dataTransfer.files;t?.type.startsWith(`image/`)&&C(t)}),i.addEventListener(`pointerdown`,e=>{if(!g.width||!g.height)return;e.preventDefault(),i.setPointerCapture(e.pointerId);let t=e.target.closest(`[data-crop-handle]`),n=A(e);if(t&&_){v={mode:`resize`,handle:t.dataset.cropHandle,startPoint:n,startSelection:{..._}};return}if(_&&a.contains(e.target)){v={mode:`move`,startPoint:n,startSelection:{..._}};return}v={mode:`create`,startPoint:n,startSelection:{x:n.x,y:n.y,width:0,height:0}},_={...v.startSelection},F()}),i.addEventListener(`pointermove`,e=>{if(!v)return;let t=A(e);v.mode===`create`&&(_=j(v.startPoint,t)),v.mode===`move`&&(_=M(v.startSelection,t,v.startPoint)),v.mode===`resize`&&(_=N(v.startSelection,t,v.startPoint,v.handle)),F()}),i.addEventListener(`pointerup`,()=>{_&&(_.width<18||_.height<18)&&I(),v=void 0}),s.addEventListener(`click`,async()=>{if(!_){d.textContent=`Select an area on the image before applying crop.`;return}let e={x:Math.round(_.x),y:Math.round(_.y),width:Math.round(_.width),height:Math.round(_.height)},t=document.createElement(`canvas`);await Z(g).crop(e.x,e.y,e.width,e.height).toCanvas(t),k(g,t),I(),d.textContent=`Crop applied: ${e.width} x ${e.height}px.`,D(),T()}),c.addEventListener(`click`,()=>{k(g,h),y=`none`,l.forEach(e=>{e.classList.toggle(`is-active`,e.dataset.filter===`none`)}),I(),d.textContent=`Image reset to the original loaded file.`,D(),T()});function C(e){b&&URL.revokeObjectURL(b),b=URL.createObjectURL(e),w(b,`${e.name} loaded locally.`)}function w(e,t){let n=new Image;n.onload=()=>{O(h,n),k(g,h),y=`none`,l.forEach(e=>{e.classList.toggle(`is-active`,e.dataset.filter===`none`)}),I(),d.textContent=t,D(),T()},n.src=e}function T(){cancelAnimationFrame(x),x=requestAnimationFrame(()=>{E()})}async function E(){if(!g.width||!g.height)return;let e=++S,n=performance.now(),r=m.get(`brightness`)??0,i=m.get(`contrast`)??0,a=$(Z(g),y);r!==0&&(a=a.brightness(r)),i!==0&&(a=a.contrast(i)),await a.toCanvas(t),e===S&&(F(),f.textContent=`Rendered in ${Math.max(1,Math.round(performance.now()-n))}ms`)}async function D(){if(!g.width||!g.height)return;let e=document.createElement(`canvas`);e.width=160,e.height=90;let t=e.getContext(`2d`),n=Math.max(e.width/g.width,e.height/g.height),r=g.width*n,i=g.height*n,a=(e.width-r)/2,o=(e.height-i)/2;t.drawImage(g,a,o,r,i),await Promise.all(u.map(async t=>{await $(Z(e),t.dataset.filterPreview).toCanvas(t)}))}function O(e,t){let n=Math.min(1,1200/Math.max(t.naturalWidth,t.naturalHeight));e.width=Math.max(1,Math.round(t.naturalWidth*n)),e.height=Math.max(1,Math.round(t.naturalHeight*n));let r=e.getContext(`2d`);r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height)}function k(e,t){e.width=t.width,e.height=t.height;let n=e.getContext(`2d`);n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0)}function A(e){let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*t.width,i=(e.clientY-n.top)/n.height*t.height;return{x:Math.max(0,Math.min(t.width,r)),y:Math.max(0,Math.min(t.height,i))}}function j(e,t){return{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)}}function M(e,t,n){return P({...e,x:e.x+t.x-n.x,y:e.y+t.y-n.y})}function N(e,n,r,i){let a=n.x-r.x,o=n.y-r.y,s=e.x,c=e.y,l=e.x+e.width,u=e.y+e.height;return i.includes(`w`)&&(s+=a),i.includes(`e`)&&(l+=a),i.includes(`n`)&&(c+=o),i.includes(`s`)&&(u+=o),s=Math.max(0,Math.min(t.width,s)),l=Math.max(0,Math.min(t.width,l)),c=Math.max(0,Math.min(t.height,c)),u=Math.max(0,Math.min(t.height,u)),Math.abs(l-s)<18||Math.abs(u-c)<18?e:j({x:s,y:c},{x:l,y:u})}function P(e){return{...e,x:Math.max(0,Math.min(t.width-e.width,e.x)),y:Math.max(0,Math.min(t.height-e.height,e.y))}}function F(){if(!_)return;let e=t.getBoundingClientRect(),n=i.getBoundingClientRect();a.classList.remove(`hidden`),o.textContent=`Adjust by dragging a new selection, then apply crop.`,a.style.left=`${e.left-n.left+_.x/t.width*e.width}px`,a.style.top=`${e.top-n.top+_.y/t.height*e.height}px`,a.style.width=`${_.width/t.width*e.width}px`,a.style.height=`${_.height/t.height*e.height}px`}function I(){_=void 0,a.classList.add(`hidden`),a.removeAttribute(`style`),o.textContent=`Drag on the image to select a crop area.`}});function $(e,t){return t===`grayscale`?e.grayscale():t===`sepia`?e.sepia():t===`sharpen`?e.sharpen():t===`emboss`?e.emboss():e}