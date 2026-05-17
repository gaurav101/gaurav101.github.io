import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{S as n}from"./iframe-D4OspdrT.js";import{t as r}from"./jsx-runtime-XCTPEF9e.js";function i(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`Anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LuminaJS [loader]: Failed to load image from URL — "${e}"`)),r.src=e})}function a(e){if(!e.type.startsWith(`image/`))return Promise.reject(TypeError(`LuminaJS [loader]: Expected an image File, but received MIME type "${e.type}".`));let t=URL.createObjectURL(e);return new Promise((n,r)=>{let i=new Image;i.onload=()=>{URL.revokeObjectURL(t),n(i)},i.onerror=()=>{URL.revokeObjectURL(t),r(Error(`LuminaJS [loader]: Failed to load image from File — "${e.name}".`))},i.src=t})}async function o(e){return typeof e==`string`?i(e):e instanceof File?a(e):Promise.reject(TypeError(`LuminaJS [loader]: Invalid source type "${typeof e}". Expected a URL string or a File object.`))}var s=e((()=>{}));function c(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`LuminaJS [canvas]: Failed to create offscreen canvas context.`);return{canvas:n,ctx:r}}function l(e){let t=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(t===0||n===0)throw Error(`LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions (${t}x${n}). Ensure the image is fully loaded before calling getPixelData.`);let{canvas:r,ctx:i}=c(t,n);i.drawImage(e,0,0,t,n);try{return{imageData:i.getImageData(0,0,t,n),canvas:r}}catch(e){let t=e instanceof Error?e.message:String(e);throw Error(`LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a cross-origin image. Ensure the server sends CORS headers and the image is loaded with crossOrigin="Anonymous". Original error: ${t}`)}}function u(e,t){let n=e.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. The canvas may already have a context of a different type (e.g. "webgl").`);n.putImageData(t,0,0)}function d(e,t=`image/png`,n=.92){return new Promise((r,i)=>{e.toBlob(e=>{e?r(e):i(Error(`LuminaJS [canvas]: canvas.toBlob returned null. The canvas may be empty or the MIME type "${t}" is unsupported.`))},t,n)})}function f(e,t,n){if(t<=0||n<=0)throw Error(`LuminaJS [canvas]: Resize dimensions must be positive (${t}x${n}).`);let{canvas:r,ctx:i}=c(t,n);return i.drawImage(e,0,0,t,n),r}function p(e,t,n,r,i){if(r<=0||i<=0)throw Error(`LuminaJS [canvas]: Crop dimensions must be positive (${r}x${i}).`);let{canvas:a,ctx:o}=c(r,i);return o.drawImage(e,t,n,r,i,0,0,r,i),a}var m=e((()=>{}));function h(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2],a=g*t+_*r+v*i;n[e]=a,n[e+1]=a,n[e+2]=a}return t}var g,_,v,y=e((()=>{g=.299,_=.587,v=.114}));function b(e,t,n){return Math.min(Math.max(e,t),n)}var x=e((()=>{}));function S(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length;for(let e=0;e<i;e+=4)r[e]=b(r[e]+t,0,255),r[e+1]=b(r[e+1]+t,0,255),r[e+2]=b(r[e+2]+t,0,255);return n}var C=e((()=>{x()}));function w(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length,a=259*(t+255)/(255*(259-t));for(let e=0;e<i;e+=4)r[e]=b(a*(r[e]-128)+128,0,255),r[e+1]=b(a*(r[e+1]-128)+128,0,255),r[e+2]=b(a*(r[e+2]-128)+128,0,255);return n}var T=e((()=>{x()}));function E(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2];n[e]=b(t*.393+r*.769+i*.189,0,255),n[e+1]=b(t*.349+r*.686+i*.168,0,255),n[e+2]=b(t*.272+r*.534+i*.131,0,255)}return t}var D=e((()=>{x()}));function O(e,t={}){let{charSet:n=k,invert:r=!1}=t,i=r?n.split(``).reverse().join(``):n,a=e.data,o=e.width,s=e.height,c=``;for(let e=0;e<s;e++){for(let t=0;t<o;t++){let n=(e*o+t)*4,r=a[n],s=a[n+1],l=a[n+2],u=.299*r+.587*s+.114*l,d=Math.floor(u/255*(i.length-1));c+=i[d]}c+=`
`}return c}var k,A=e((()=>{k=`@%#*+=-:. `}));function ee(e,t=1){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t=Math.max(0,Math.floor(t)),t===0)return new ImageData(new Uint8ClampedArray(i),n,r);for(let e=0;e<r;e++)for(let r=0;r<n;r++){let a=0,s=0,c=0,l=0,u=0;for(let o=-t;o<=t;o++){let t=r+o;if(t>=0&&t<n){let r=(e*n+t)*4;a+=i[r],s+=i[r+1],c+=i[r+2],l+=i[r+3],u++}}let d=(e*n+r)*4;o[d]=a/u,o[d+1]=s/u,o[d+2]=c/u,o[d+3]=l/u}for(let e=0;e<n;e++)for(let i=0;i<r;i++){let s=0,c=0,l=0,u=0,d=0;for(let a=-t;a<=t;a++){let t=i+a;if(t>=0&&t<r){let r=(t*n+e)*4;s+=o[r],c+=o[r+1],l+=o[r+2],u+=o[r+3],d++}}let f=(i*n+e)*4;a[f]=s/d,a[f+1]=c/d,a[f+2]=l/d,a[f+3]=u/d}return new ImageData(a,n,r)}var j=e((()=>{}));function te(e,t=2){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t<=0)return new ImageData(new Uint8ClampedArray(i),n,r);let s=Math.ceil(t*3),c=s*2+1,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){let n=e-s;l[e]=Math.exp(-(n*n)/(2*t*t)),u+=l[e]}for(let e=0;e<c;e++)l[e]/=u;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=0,a=0,u=0,d=0;for(let o=0;o<c;o++){let c=t+(o-s),f=Math.max(0,Math.min(n-1,c)),p=(e*n+f)*4,m=l[o];r+=i[p]*m,a+=i[p+1]*m,u+=i[p+2]*m,d+=i[p+3]*m}let f=(e*n+t)*4;o[f]=r,o[f+1]=a,o[f+2]=u,o[f+3]=d}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let i=0,u=0,d=0,f=0;for(let a=0;a<c;a++){let c=t+(a-s),p=(Math.max(0,Math.min(r-1,c))*n+e)*4,m=l[a];i+=o[p]*m,u+=o[p+1]*m,d+=o[p+2]*m,f+=o[p+3]*m}let p=(t*n+e)*4;a[p]=i,a[p+1]=u,a[p+2]=d,a[p+3]=f}return new ImageData(a,n,r)}var M=e((()=>{}));function ne(e,t,n={}){let{x:r=10,y:i=10,fontSize:a=24,fontFace:o=`Arial`,font:s=`${a}px ${o}`,color:c=`rgba(255, 255, 255, 0.5)`,align:l=`left`,baseline:u=`top`}=n,d=document.createElement(`canvas`);d.width=e.width,d.height=e.height;let f=d.getContext(`2d`);if(!f)throw Error(`LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.`);return f.putImageData(e,0,0),f.font=s,f.fillStyle=c,f.textAlign=l,f.textBaseline=u,f.fillText(t,r,i),f.getImageData(0,0,d.width,d.height)}var re=e((()=>{}));function ie(e,t={}){let{width:n,height:r}=e,i=Math.min(n,r),{sigma:a=5,centerX:o=n/2,centerY:s=r/2,focusRadius:c=i*.2,falloff:l=i*.4}=t,u=te(e,a),d=e.data,f=u.data,p=new Uint8ClampedArray(d.length);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-o,i=e-s,a=Math.sqrt(r*r+i*i),u=0;a>c&&(u=Math.min(1,(a-c)/l));let m=(e*n+t)*4,h=1-u;p[m]=d[m]*h+f[m]*u,p[m+1]=d[m+1]*h+f[m+1]*u,p[m+2]=d[m+2]*h+f[m+2]*u,p[m+3]=d[m+3]}return new ImageData(p,n,r)}var ae=e((()=>{M()})),oe,se=e((()=>{oe=(e,t,n,r)=>{let i=new Uint8ClampedArray(e);for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=0,s=0,c=0;for(let e=0;e<3;e++)for(let l=0;l<3;l++){let u=n+l-1,d=((a+e-1)*t+u)*4,f=r[e*3+l];o+=i[d]*f,s+=i[d+1]*f,c+=i[d+2]*f}let l=(a*t+n)*4;e[l]=Math.min(255,Math.max(0,o)),e[l+1]=Math.min(255,Math.max(0,s)),e[l+2]=Math.min(255,Math.max(0,c))}return e}})),ce,le=e((()=>{se(),ce=e=>(oe(e.data,e.width,e.height,[0,-1,0,-1,5,-1,0,-1,0]),e)})),ue,de=e((()=>{se(),ue=e=>(oe(e.data,e.width,e.height,[-2,-1,0,-1,1,1,0,1,2]),e)})),fe,pe=e((()=>{se(),fe=e=>(oe(e.data,e.width,e.height,[-1,-1,-1,-1,8,-1,-1,-1,-1]),e)})),me=e((()=>{y(),C(),T(),D(),A(),j(),M(),re(),ae(),se(),le(),de(),pe()})),he,ge=e((()=>{me(),s(),m(),he=class{constructor(e){this.source=e,this.operations=[]}_addOp(e,...t){return this.operations.push({fn:e,args:t}),this}grayscale(){return this._addOp(h)}brightness(e){return this._addOp(S,e)}contrast(e){return this._addOp(w,e)}sepia(){return this._addOp(E)}ascii(e={}){return this._addOp(O,e)}blur(e){return this._addOp(ee,e)}gaussianBlur(e){return this._addOp(te,e)}watermark(e,t){return this._addOp(ne,e,t)}backgroundBlur(e){return this._addOp(ie,e)}applyConvolution(e,t,n){return this._addOp(oe,e,t,n)}sharpen(){return this._addOp(ce)}emboss(){return this._addOp(ue)}edgeDetection(){return this._addOp(fe)}resize(e,t){return this._addOp((e,t,n)=>{let r=document.createElement(`canvas`);r.width=e.width,r.height=e.height;let i=r.getContext(`2d`);if(!i)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);i.putImageData(e,0,0);let a=f(r,t,n).getContext(`2d`);if(!a)throw Error(`LuminaJS [chain]: Failed to get resized canvas context.`);return a.getImageData(0,0,t,n)},e,t)}crop(e,t,n,r){return this._addOp((e,t,n,r,i)=>{let a=document.createElement(`canvas`);a.width=e.width,a.height=e.height;let o=a.getContext(`2d`);if(!o)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);o.putImageData(e,0,0);let s=p(a,t,n,r,i).getContext(`2d`);if(!s)throw Error(`LuminaJS [chain]: Failed to get cropped canvas context.`);return s.getImageData(0,0,r,i)},e,t,n,r)}async _resolveSource(){let e=this.source;if((typeof e==`string`||e instanceof File)&&(e=await o(e)),e instanceof HTMLImageElement)return l(e).imageData;if(e instanceof HTMLCanvasElement){let t=e.getContext(`2d`);if(!t)throw Error(`LuminaJS [chain]: Failed to get canvas context from source.`);return t.getImageData(0,0,e.width,e.height)}if(e instanceof ImageData)return e;throw Error(`LuminaJS [chain]: Unsupported source type.`)}async render(){let e=await this._resolveSource();for(let t of this.operations)e=await t.fn(e,...t.args);return e}async toCanvas(e){let t=await this.render();return e.width=t.width,e.height=t.height,u(e,t),e}async toBlob(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),d(r,e,t)}async toDataURL(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),r.toDataURL(e,t)}async toHtmlElement(e){let t=typeof e==`string`?document.getElementById(e):e;if(!t)throw Error(`LuminaJS [chain]: Target element not found: "${e}"`);if(t instanceof HTMLImageElement)t.src=await this.toDataURL();else if(t instanceof HTMLCanvasElement)await this.toCanvas(t);else throw Error(`LuminaJS [chain]: toHtmlElement only supports <img> and <canvas> elements.`);return t}}}));function _e(e){return new he(e)}var ve=e((()=>{s(),m(),y(),C(),T(),D(),A(),j(),M(),re(),ae(),se(),le(),de(),pe(),ge(),x()}));function ye(e,t){let n=e;return t.grayscale&&(n=n.grayscale()),t.brightness!==void 0&&(n=n.brightness(t.brightness)),t.contrast!==void 0&&(n=n.contrast(t.contrast)),t.sepia&&(n=n.sepia()),t.ascii&&(n=n.ascii(typeof t.ascii==`boolean`?{}:t.ascii)),t.blur!==void 0&&(n=n.blur(t.blur)),t.gaussianBlur!==void 0&&(n=n.gaussianBlur(t.gaussianBlur)),t.watermark&&(n=n.watermark(t.watermark.text,t.watermark.options)),t.backgroundBlur&&(n=n.backgroundBlur(t.backgroundBlur)),t.sharpen&&(n=n.sharpen()),t.emboss&&(n=n.emboss()),t.edgeDetection&&(n=n.edgeDetection()),t.resize&&(n=n.resize(t.resize.width,t.resize.height)),t.crop&&(n=n.crop(t.crop.x,t.crop.y,t.crop.width,t.crop.height)),n}var be=e((()=>{}));function xe({source:e,operations:t,deps:n=[],outputType:r=`imageData`,...i}){let[a,o]=(0,Se.useState)(null),[s,c]=(0,Se.useState)(!1),[l,u]=(0,Se.useState)(null);return(0,Se.useEffect)(()=>{let n=!0;return(async()=>{if(!e){o(null);return}c(!0),u(null);try{let a=_e(e);a=ye(a,i),typeof t==`function`&&(a=t(a));let s;switch(r){case`dataUrl`:s=await a.toDataURL();break;case`blob`:s=await a.toBlob();break;default:s=await a.render()}n&&o(s)}catch(e){n&&u(e instanceof Error?e:Error(String(e)))}finally{n&&c(!1)}})(),()=>{n=!1}},[e,r,t,JSON.stringify(i),...n]),{result:a,loading:s,error:l,getImage:async n=>{if(!e)return null;try{let a=_e(e);a=ye(a,i),typeof t==`function`&&(a=t(a));let o;switch(n||r){case`dataUrl`:o=await a.toDataURL();break;case`blob`:o=await a.toBlob();break;default:o=await a.render()}return o}catch(e){return u(e instanceof Error?e:Error(String(e))),null}}}}var Se,Ce=e((()=>{Se=t(n(),1),ve(),be()})),N,we,P,Te=e((()=>{N=t(n(),1),ve(),be(),we=r(),P=(0,N.forwardRef)(function({source:e,filter:t,onProcessError:n,onLoad:r,getImage:i,outputType:a=`canvas`,grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y,...b},x){let S=(0,N.useMemo)(()=>({grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y}),[o,s,c,l,u,d,f,p,m,h,g,_,v,y]),C=(0,N.useRef)(null),[w,T]=(0,N.useState)(null),E=(0,N.useCallback)(e=>{C.current=e,typeof x==`function`?x(e):x&&(x.current=e)},[x]);return(0,N.useEffect)(()=>{if(!e||!C.current)return;let o=!0;return(async()=>{try{let n=_e(e);if(n=ye(n,S),typeof t==`function`&&(n=t(n)),C.current&&await n.toCanvas(C.current),o&&r&&r(),o&&i&&C.current)if(a===`dataUrl`)i(C.current.toDataURL());else if(a===`blob`)C.current.toBlob(e=>{e&&i(e)});else if(a===`imageData`){let e=C.current.getContext(`2d`);e&&i(e.getImageData(0,0,C.current.width,C.current.height))}else i(C.current)}catch(e){let t=e instanceof Error?e:Error(String(e));o&&(T(t),n&&n(t))}})(),()=>{o=!1}},[e,t,n,r,i,a,S]),w?(0,we.jsx)(`div`,{className:`lumina-error`,children:w.message}):(0,we.jsx)(`canvas`,{ref:E,...b})}),P.__docgenInfo={description:`\`LuminaCanvas\` - A declarative React component to render LuminaJS processed images on a canvas.

This component handles the rendering of image transformations directly onto an HTML \`<canvas>\`.
It provides a powerful, prop-driven interface to apply image edits like crop, resize, and various filters.
You can also access the resulting generated image using the \`getImage\` callback prop.

@param {LuminaCanvasProps} props - The props for the component, extending standard CanvasHTMLAttributes.
@param {LuminaSource | null} props.source - The image source (URL, File, HTMLImageElement, HTMLCanvasElement, or ImageData).
@param {Function} [props.filter] - An optional callback to use the Lumina chainable API manually. Runs after explicit props.
@param {Function} [props.onProcessError] - Callback triggered if an error occurs during processing.
@param {Function} [props.onLoad] - Callback triggered when the image is successfully processed and rendered to the canvas.
@param {Function} [props.getImage] - Callback triggered after rendering to provide the resulting image data.
@param {'imageData' | 'dataUrl' | 'blob' | 'canvas'} [props.outputType='canvas'] - The format of the data sent to \`getImage\`.
@param {boolean} [props.grayscale] - Applies a grayscale filter.
@param {number} [props.brightness] - Adjusts brightness.
@param {Object} [props.resize] - Resizes the image e.g. { width: 800, height: 600 }.
@param {Object} [props.crop] - Crops the image e.g. { x: 0, y: 0, width: 100, height: 100 }.
// ... plus many more filters.

@example
\`\`\`tsx
function App() {
  const handleImage = (dataUrl) => console.log('Generated Image:', dataUrl);

  return (
    <LuminaCanvas
      source="photo.jpg"
      brightness={20}
      sepia={true}
      resize={{ width: 500, height: 500 }}
      outputType="dataUrl"
      getImage={handleImage}
      width={500} // standard canvas attribute
      height={500} // standard canvas attribute
    />
  );
}
\`\`\``,methods:[],displayName:`LuminaCanvas`,props:{grayscale:{required:!1,tsType:{name:`boolean`},description:``},brightness:{required:!1,tsType:{name:`number`},description:``},contrast:{required:!1,tsType:{name:`number`},description:``},sepia:{required:!1,tsType:{name:`boolean`},description:``},ascii:{required:!1,tsType:{name:`union`,raw:`boolean | Record<string, unknown>`,elements:[{name:`boolean`},{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}]},description:``},blur:{required:!1,tsType:{name:`number`},description:``},gaussianBlur:{required:!1,tsType:{name:`number`},description:``},watermark:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ text: string; options?: Record<string, unknown> }`,signature:{properties:[{key:`text`,value:{name:`string`,required:!0}},{key:`options`,value:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`,required:!1}}]}},description:``},backgroundBlur:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``},sharpen:{required:!1,tsType:{name:`boolean`},description:``},emboss:{required:!1,tsType:{name:`boolean`},description:``},edgeDetection:{required:!1,tsType:{name:`boolean`},description:``},resize:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ width: number; height: number }`,signature:{properties:[{key:`width`,value:{name:`number`,required:!0}},{key:`height`,value:{name:`number`,required:!0}}]}},description:``},crop:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ x: number; y: number; width: number; height: number }`,signature:{properties:[{key:`x`,value:{name:`number`,required:!0}},{key:`y`,value:{name:`number`,required:!0}},{key:`width`,value:{name:`number`,required:!0}},{key:`height`,value:{name:`number`,required:!0}}]}},description:``},source:{required:!0,tsType:{name:`union`,raw:`| string
| File
| HTMLImageElement
| HTMLCanvasElement
| ImageData
| null`,elements:[{name:`string`},{name:`File`},{name:`HTMLImageElement`},{name:`HTMLCanvasElement`},{name:`ImageData`},{name:`null`}]},description:``},filter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(chain: Lumina) => Lumina`,signature:{arguments:[{type:{name:`Lumina`},name:`chain`}],return:{name:`Lumina`}}},description:``},onProcessError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: Error) => void`,signature:{arguments:[{type:{name:`Error`},name:`error`}],return:{name:`void`}}},description:``},onLoad:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},getImage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(data: string | Blob | ImageData | HTMLCanvasElement) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | Blob | ImageData | HTMLCanvasElement`,elements:[{name:`string`},{name:`Blob`},{name:`ImageData`},{name:`HTMLCanvasElement`}]},name:`data`}],return:{name:`void`}}},description:``},outputType:{required:!1,tsType:{name:`union`,raw:`'imageData' | 'dataUrl' | 'blob' | 'canvas'`,elements:[{name:`literal`,value:`'imageData'`},{name:`literal`,value:`'dataUrl'`},{name:`literal`,value:`'blob'`},{name:`literal`,value:`'canvas'`}]},description:``,defaultValue:{value:`'canvas'`,computed:!1}}},composes:[`Omit`]}}));function Ee(e,t,n){return Math.max(t,Math.min(e,n))}function De(e,t,n,r){return{x:Math.min(e,n),y:Math.min(t,r),width:Math.abs(n-e),height:Math.abs(r-t)}}function Oe(e,t,n){let r=Ee(e.x,0,t-e.width),i=Ee(e.y,0,n-e.height);return{...e,x:r,y:i}}function ke(e,t,n,r){let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=i+t.width/2,l=o+t.height/2;if(n===`e`||n===`w`){let t=n===`e`?i:a,o=n===`e`?e.imageWidth-t:t,s=Ee(Math.abs(e.x-t),L,Math.min(o,e.imageHeight*r)),c=s/r;return Oe({x:n===`e`?t:t-s,y:l-c/2,width:s,height:c},e.imageWidth,e.imageHeight)}if(n===`n`||n===`s`){let t=n===`s`?o:s,i=n===`s`?e.imageHeight-t:t,a=Ee(Math.abs(e.y-t),L,Math.min(i,e.imageWidth/r)),l=a*r;return Oe({x:c-l/2,y:n===`s`?t:t-a,width:l,height:a},e.imageWidth,e.imageHeight)}let u=n.includes(`e`)?i:a,d=n.includes(`s`)?o:s,f=e.x-u,p=e.y-d,m=f>=0?1:-1,h=p>=0?1:-1,g=Math.max(Math.abs(f),Math.abs(p)*r,L),_=g/r,v=m>0?e.imageWidth-u:u,y=h>0?e.imageHeight-d:d;return g=Math.min(g,v,y*r),_=g/r,De(u,d,u+m*g,d+h*_)}function Ae(e,t,n,r){if(r)return ke(e,t,n,r);let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=n.includes(`w`)?e.x:i,l=n.includes(`e`)?e.x:a;return De(c,n.includes(`n`)?e.y:o,l,n.includes(`s`)?e.y:s)}var F,I,je,L,Me,Ne,Pe=e((()=>{F=t(n(),1),I=r(),je=12,L=1,Me=[{id:`nw`,cursor:`nwse-resize`,style:{left:`0%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`n`,cursor:`ns-resize`,style:{left:`50%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`ne`,cursor:`nesw-resize`,style:{right:`0%`,top:`0%`,transform:`translate(50%, -50%)`}},{id:`e`,cursor:`ew-resize`,style:{right:`0%`,top:`50%`,transform:`translate(50%, -50%)`}},{id:`se`,cursor:`nwse-resize`,style:{right:`0%`,bottom:`0%`,transform:`translate(50%, 50%)`}},{id:`s`,cursor:`ns-resize`,style:{left:`50%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`sw`,cursor:`nesw-resize`,style:{left:`0%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`w`,cursor:`ew-resize`,style:{left:`0%`,top:`50%`,transform:`translate(-50%, -50%)`}}],Ne=({src:e,onCropChange:t,onCropComplete:n,aspect:r,lineWidth:i=2,lineColor:a=`#fff`,overlayOpacity:o=.5,allowResize:s=!0,overlayControls:c})=>{let[l,u]=(0,F.useState)({x:0,y:0,width:0,height:0}),[d,f]=(0,F.useState)(!1),[p,m]=(0,F.useState)(`draw`),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)({scaleX:1,scaleY:1}),y=(0,F.useRef)(null),b=(0,F.useRef)({x:0,y:0}),x=(0,F.useRef)({x:0,y:0}),S=(0,F.useRef)(l),C=(0,F.useRef)(!1),w=(0,F.useRef)(`draw`),T=(0,F.useRef)(null),E=(0,F.useRef)(null),D=(0,F.useRef)(null),O=(0,F.useRef)(null),k=(0,F.useCallback)(()=>{let e=y.current;if(!e||e.naturalWidth===0||e.naturalHeight===0)return;let t=e.getBoundingClientRect();t.width===0||t.height===0||v({scaleX:t.width/e.naturalWidth,scaleY:t.height/e.naturalHeight})},[]),A=(0,F.useCallback)(e=>{let t=y.current,n=t?.getBoundingClientRect();if(!n||!t)return null;let r=t.naturalWidth/n.width,i=t.naturalHeight/n.height,a,o;if(`touches`in e){if(e.touches.length===0)return null;a=e.touches[0].clientX,o=e.touches[0].clientY}else a=e.clientX,o=e.clientY;return{x:Math.max(0,Math.min((a-n.left)*r,t.naturalWidth)),y:Math.max(0,Math.min((o-n.top)*i,t.naturalHeight)),imageWidth:t.naturalWidth,imageHeight:t.naturalHeight}},[]),ee=(0,F.useCallback)(e=>{if(!s)return null;let t=S.current;if(t.width<=0||t.height<=0)return null;let n=je/Math.max(_.scaleX,.001),r=je/Math.max(_.scaleY,.001),i=t.x,a=t.x+t.width,o=t.y,c=t.y+t.height,l=i+t.width/2,u=o+t.height/2,d=t=>Math.abs(e.x-t)<=n,f=t=>Math.abs(e.y-t)<=r;return d(i)&&f(o)?`nw`:d(a)&&f(o)?`ne`:d(a)&&f(c)?`se`:d(i)&&f(c)?`sw`:f(o)&&e.x>=i&&e.x<=a?`n`:d(a)&&e.y>=o&&e.y<=c?`e`:f(c)&&e.x>=i&&e.x<=a?`s`:d(i)&&e.y>=o&&e.y<=c?`w`:d(l)&&f(o)?`n`:d(a)&&f(u)?`e`:d(l)&&f(c)?`s`:d(i)&&f(u)?`w`:null},[s,_.scaleX,_.scaleY]),j=(0,F.useCallback)(e=>{if(`button`in e&&e.button!==0)return;if(`touches`in e&&e.touches.length===2){let t=e.touches[0],n=e.touches[1];D.current=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),O.current=S.current,f(!0),C.current=!0,w.current=`resize`,m(`resize`);return}if(`touches`in e&&e.touches.length>2)return;let t=A(e);if(!t)return;f(!0),C.current=!0;let n=S.current,r=ee(t);if(r){w.current=`resize`,m(`resize`),T.current=r,g(r),E.current=n;return}if(n.width>0&&n.height>0&&t.x>=n.x&&t.x<=n.x+n.width&&t.y>=n.y&&t.y<=n.y+n.height){w.current=`move`,m(`move`),T.current=null,g(null),E.current=null,x.current={x:t.x-n.x,y:t.y-n.y};return}w.current=`draw`,m(`draw`),T.current=null,g(null),E.current=null,b.current={x:t.x,y:t.y};let i={x:t.x,y:t.y,width:0,height:0};S.current=i,u(i)},[A,ee]),te=(0,F.useCallback)(e=>{if(!d||!y.current)return;if(`touches`in e&&e.touches.length===2){if(D.current!==null&&O.current!==null){let n=e.touches[0],i=e.touches[1],a=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY)/D.current,o=O.current,s=y.current.naturalWidth,c=y.current.naturalHeight,l=o.width*a,d=r?l/r:o.height*a;l=Math.max(L,Math.min(l,s)),d=Math.max(L,Math.min(d,c)),r&&d>c&&(d=c,l=d*r);let f=o.x+o.width/2,p=o.y+o.height/2,m=Oe({x:f-l/2,y:p-d/2,width:l,height:d},s,c);S.current=m,u(m),t(m)}return}let n=A(e);if(!n)return;if(w.current===`resize`&&T.current&&E.current){let e=Ae(n,E.current,T.current,r);S.current=e,u(e),t(e);return}if(w.current===`move`){let e=S.current,r={...e,x:Math.max(0,Math.min(n.x-x.current.x,n.imageWidth-e.width)),y:Math.max(0,Math.min(n.y-x.current.y,n.imageHeight-e.height))};S.current=r,u(r),t(r);return}let i=n.x-b.current.x,a=r?i/r:n.y-b.current.y;if(r&&Math.abs(a)>0){let e=n.imageHeight-Math.max(0,b.current.y),t=n.imageWidth-Math.max(0,b.current.x);Math.abs(a)>e&&(a=Math.sign(a)*e,i=a*r),Math.abs(i)>t&&(i=Math.sign(i)*t,a=i/r)}let o={x:i>0?b.current.x:n.x,y:a>0?b.current.y:n.y,width:Math.abs(i),height:Math.abs(a)};S.current=o,u(o),t(o)},[d,r,A,t]),M=(0,F.useCallback)(()=>{if(!C.current)return;C.current=!1,f(!1),T.current=null,g(null),E.current=null,D.current=null,O.current=null;let e=S.current;e.width>0&&e.height>0&&n?.(e)},[n]);return(0,F.useEffect)(()=>(k(),window.addEventListener(`resize`,k),()=>window.removeEventListener(`resize`,k)),[e,k]),(0,I.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`,cursor:(p===`resize`&&h?Me.find(e=>e.id===h)?.cursor:void 0)??(d&&p===`move`?`grabbing`:`crosshair`),userSelect:`none`,touchAction:`none`},onMouseDown:j,onMouseMove:te,onMouseUp:M,onMouseLeave:M,onTouchStart:j,onTouchMove:te,onTouchEnd:M,onTouchCancel:M,children:[(0,I.jsx)(`img`,{ref:y,src:e,alt:`Crop Source`,onLoad:k,style:{display:`block`,maxWidth:`100%`,userSelect:`none`},draggable:!1}),l.width>0&&l.height>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{style:{position:`absolute`,border:`${i}px dashed ${a}`,backgroundColor:`rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 0 9999px rgba(0, 0, 0, ${o})`,cursor:d?`grabbing`:`move`,left:l.x*_.scaleX,top:l.y*_.scaleY,width:l.width*_.scaleX,height:l.height*_.scaleY,zIndex:10},children:s&&Me.map(e=>(0,I.jsx)(`span`,{style:{position:`absolute`,width:je,height:je,borderRadius:`50%`,border:`2px solid ${a}`,backgroundColor:`#fff`,boxSizing:`border-box`,cursor:e.cursor,...e.style}},e.id))}),c&&(()=>{let e=l.x*_.scaleX,t=l.y*_.scaleY,n=l.width*_.scaleX,r=l.height*_.scaleY,i=t-40-8;return i<8&&(i=t+r+8),(0,I.jsx)(`div`,{style:{position:`absolute`,left:e,top:i,zIndex:1001,pointerEvents:`auto`},onMouseDown:e=>e.stopPropagation(),onMouseUp:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),onTouchStart:e=>e.stopPropagation(),onTouchMove:e=>e.stopPropagation(),onTouchEnd:e=>e.stopPropagation(),onTouchCancel:e=>e.stopPropagation(),children:c({left:e,top:t,width:n,height:r,scaleX:_.scaleX,scaleY:_.scaleY})})})()]})]})},Ne.__docgenInfo={description:`ImageAreaSelector - An interactive image cropping tool.

Displays an image with a draggable selection box to define a crop area.
The selected crop area can be dragged to another part of the image before applying.
Constraints applied: image boundaries, optional aspect ratio, and prevents negative dimensions.

@param {ImageAreaSelectorProps} props
@param {string} props.src - The image URL to display
@param {Function} props.onCropChange - Callback triggered when crop area changes
@param {Function} [props.onCropComplete] - Callback triggered when crop selection ends
@param {number} [props.aspect] - Optional aspect ratio to enforce (width / height)
@param {number} [props.lineWidth=2] - Border line width in pixels
@param {string} [props.lineColor='#fff'] - Border color (CSS color value)
@param {number} [props.overlayOpacity=0.5] - Opacity of the darkened surround area (0-1)
@param {boolean} [props.allowResize=true] - Enables resize handles on the crop area

@example
\`\`\`tsx
const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });

<ImageAreaSelector
  src="image.jpg"
  aspect={16 / 9}
  lineColor="#00ff00"
  onCropChange={setCrop}
/>
\`\`\``,methods:[],displayName:`ImageAreaSelector`,props:{src:{required:!0,tsType:{name:`string`},description:``},onCropChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(crop: CropArea) => void`,signature:{arguments:[{type:{name:`CropArea`},name:`crop`}],return:{name:`void`}}},description:``},onCropComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(crop: CropArea) => void`,signature:{arguments:[{type:{name:`CropArea`},name:`crop`}],return:{name:`void`}}},description:``},aspect:{required:!1,tsType:{name:`number`},description:``},lineWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},lineColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#fff'`,computed:!1}},overlayOpacity:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0.5`,computed:!1}},allowResize:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},overlayControls:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(params: {
  left: number;
  top: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
}) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  left: number;
  top: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
}`,signature:{properties:[{key:`left`,value:{name:`number`,required:!0}},{key:`top`,value:{name:`number`,required:!0}},{key:`width`,value:{name:`number`,required:!0}},{key:`height`,value:{name:`number`,required:!0}},{key:`scaleX`,value:{name:`number`,required:!0}},{key:`scaleY`,value:{name:`number`,required:!0}}]}},name:`params`}],return:{name:`ReactNode`}}},description:``}}}})),R,z,Fe,Ie=e((()=>{R=t(n(),1),ve(),Te(),Pe(),z=r(),Fe=({src:e,onCropComplete:t,onError:n,aspectRatio:r,outputFormat:i=`blob`,maxWidth:a=600,maxHeight:o=400,allowReset:s=!0,allowResize:c=!0,className:l,style:u,applyButtonClassName:d,applyButtonStyle:f,resetButtonClassName:p,resetButtonStyle:m,buttonPosition:h=`top-left`,onApply:g,onReset:_})=>{let[v,y]=(0,R.useState)(!1),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(0),E=b?.source===e?b.src:null,D=S?.source===e?S.crop:null,O=(0,R.useMemo)(()=>{if(typeof e==`string`)return e;if(e instanceof File)return URL.createObjectURL(e)},[e]);(0,R.useEffect)(()=>()=>{O&&e instanceof File&&URL.revokeObjectURL(O)},[O,e]),(0,R.useEffect)(()=>()=>{b?.src.startsWith(`blob:`)&&URL.revokeObjectURL(b.src)},[b]);let k=(0,R.useCallback)(t=>{C({source:e,crop:t}),x(null)},[e]),A=(0,R.useCallback)(t=>{C({source:e,crop:t})},[e]),ee=(0,R.useCallback)(async()=>{if(!D||D.width===0||D.height===0){n?.(Error(`Please select a crop area`));return}if(!e){n?.(Error(`No source image provided`));return}if(g)try{if(await g(D)===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}y(!0);try{let n=_e(e).crop(D.x,D.y,D.width,D.height);if(i===`blob`){let r=await n.toBlob();if(r)x({source:e,src:URL.createObjectURL(r)}),t?.(r);else throw Error(`Failed to generate cropped blob.`)}else{let r=await n.toDataURL();x({source:e,src:r}),t?.(r)}}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t)}finally{y(!1)}},[n,t,i,D,e,g]),j=(0,R.useCallback)(async()=>{if(_)try{if(await _()===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}x(null),C(null),T(e=>e+1)},[_,n]),te=e=>{n?.(e)},M=(0,R.useMemo)(()=>{let e={position:`absolute`,display:`flex`,gap:`8px`,zIndex:1001,alignItems:`center`};switch(h){case`top-left`:return{...e,top:`12px`,left:`12px`};case`top-right`:return{...e,top:`12px`,right:`12px`};case`top-center`:return{...e,top:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-left`:return{...e,bottom:`12px`,left:`12px`};case`bottom-center`:return{...e,bottom:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-right`:return{...e,bottom:`12px`,right:`12px`};default:return{...e,top:`12px`,left:`12px`}}},[h]);return(0,z.jsx)(`div`,{className:l,style:{padding:`16px`,borderRadius:`8px`,...u},children:(0,z.jsxs)(`div`,{style:{position:`relative`,maxWidth:a,maxHeight:o,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #ddd`},children:[E?(0,z.jsx)(P,{source:E,style:{width:`100%`,height:`100%`,display:`block`},onProcessError:te}):O&&(0,z.jsx)(Ne,{src:O,aspect:r,onCropChange:k,onCropComplete:A,lineColor:`#0066cc`,overlayOpacity:.6,allowResize:c,overlayControls:()=>(0,z.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,z.jsx)(`button`,{type:`button`,onClick:ee,disabled:v,className:d,style:{padding:`8px 12px`,backgroundColor:`#0066cc`,color:`#fff`,border:`none`,borderRadius:`4px`,cursor:v?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...f},children:v?`Processing...`:`Apply Crop`}),s&&(0,z.jsx)(`button`,{type:`button`,onClick:j,disabled:v,className:p,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:v?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...m},children:`Reset`})]})},`${O}-${w}`),v&&(0,z.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(255, 255, 255, 0.75)`,color:`#333`,fontSize:`14px`,fontWeight:500},children:`Processing...`}),s&&E&&!v&&(0,z.jsx)(`div`,{style:M,children:(0,z.jsx)(`button`,{type:`button`,onClick:j,className:p,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...m},children:`Reset`})})]})})},Fe.__docgenInfo={description:`ImageCropper - A complete image cropping interface with explicit apply.

Combines the \`ImageAreaSelector\` for interactive crop area selection with
\`LuminaCanvas\` for rendering the applied crop in the same component after the user clicks Apply.

Props summary (not exhaustive):
- src: Image source (string | File | HTMLImageElement | HTMLCanvasElement | ImageData | null)
- onCropComplete: Callback when crop is finalized (receives Blob or DataURL)
- onError: Callback for processing errors
- aspectRatio: Optional aspect ratio to enforce (width / height)
- outputFormat: 'blob' | 'dataUrl'
- allowReset: show reset button
- allowResize: show resize handles on the selected crop area
- applyButtonClassName / applyButtonStyle: Customize the Apply button class/style
- resetButtonClassName / resetButtonStyle: Customize the Reset button class/style
- onApply / onReset: Optional callbacks fired when Apply or Reset are clicked. If the callback returns false (or a Promise that resolves to false), the default behavior is aborted.

@example
\`\`\`tsx
<ImageCropper
  src="photo.jpg"
  aspectRatio={16 / 9}
  outputFormat="blob"
  applyButtonClassName="primary-btn"
  resetButtonStyle={{ backgroundColor: '#fff' }}
  onApply={(crop) =>  validate crop or return false to prevent default }
  onReset={() => /* do custom reset; return false to prevent default }
/>
\`\`\``,methods:[],displayName:`ImageCropper`,props:{src:{required:!0,tsType:{name:`union`,raw:`string | File | HTMLImageElement | HTMLCanvasElement | ImageData | null`,elements:[{name:`string`},{name:`File`},{name:`HTMLImageElement`},{name:`HTMLCanvasElement`},{name:`ImageData`},{name:`null`}]},description:``},onCropComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(croppedImage: Blob | string) => void`,signature:{arguments:[{type:{name:`union`,raw:`Blob | string`,elements:[{name:`Blob`},{name:`string`}]},name:`croppedImage`}],return:{name:`void`}}},description:``},onError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: Error) => void`,signature:{arguments:[{type:{name:`Error`},name:`error`}],return:{name:`void`}}},description:``},aspectRatio:{required:!1,tsType:{name:`number`},description:``},outputFormat:{required:!1,tsType:{name:`union`,raw:`'blob' | 'dataUrl'`,elements:[{name:`literal`,value:`'blob'`},{name:`literal`,value:`'dataUrl'`}]},description:``,defaultValue:{value:`'blob'`,computed:!1}},maxWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`600`,computed:!1}},maxHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`400`,computed:!1}},showPreview:{required:!1,tsType:{name:`boolean`},description:``},allowReset:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},allowResize:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},applyButtonClassName:{required:!1,tsType:{name:`string`},description:``},applyButtonStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},resetButtonClassName:{required:!1,tsType:{name:`string`},description:``},resetButtonStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},buttonPosition:{required:!1,tsType:{name:`union`,raw:`| 'top-left'
| 'top-right'
| 'top-center'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,elements:[{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'top-center'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`},{name:`literal`,value:`'bottom-right'`}]},description:``,defaultValue:{value:`'top-left'`,computed:!1}},onApply:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(crop: CropArea) => boolean | void | Promise<boolean | void>`,signature:{arguments:[{type:{name:`CropArea`},name:`crop`}],return:{name:`union`,raw:`boolean | void | Promise<boolean | void>`,elements:[{name:`boolean`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`boolean | void`,elements:[{name:`boolean`},{name:`void`}]}],raw:`Promise<boolean | void>`}]}}},description:``},onReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => boolean | void | Promise<boolean | void>`,signature:{arguments:[],return:{name:`union`,raw:`boolean | void | Promise<boolean | void>`,elements:[{name:`boolean`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`boolean | void`,elements:[{name:`boolean`},{name:`void`}]}],raw:`Promise<boolean | void>`}]}}},description:``}}}})),Le=e((()=>{Ce(),Te(),Pe(),Ie()}));function B({children:e,title:t,description:n}){return(0,H.jsx)(`div`,{className:`lumina-story-shell`,children:(0,H.jsxs)(`div`,{className:`lumina-story-stack`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h2`,{children:t}),n&&(0,H.jsx)(`p`,{children:n})]}),e]})})}function Re({children:e}){return(0,H.jsx)(`div`,{className:`lumina-story-result`,children:e})}function ze(){let{result:e,loading:t,error:n,getImage:r}=xe({source:U,resize:(0,V.useMemo)(()=>({width:260,height:180}),[]),brightness:8,contrast:12,operations:(0,V.useCallback)(e=>e.sepia().watermark(`useLumina`,{x:16,y:34}),[]),outputType:`dataUrl`}),[i,a]=(0,V.useState)(`Blob not requested yet`);return(0,H.jsx)(B,{title:`useLumina Hook`,description:`Processes an image in React state and can imperatively request another output type with getImage.`,children:(0,H.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,H.jsxs)(`div`,{className:`lumina-story-row`,children:[(0,H.jsx)(`button`,{className:`lumina-story-button`,onClick:async()=>{let e=await r(`blob`);a(e instanceof Blob?`${e.size} bytes`:`No blob`)},children:`Request Blob`}),(0,H.jsxs)(Re,{children:[t&&`Processing image...`,n&&n.message,!t&&!n&&i]})]}),e&&(0,H.jsx)(`img`,{className:`lumina-story-image-preview`,src:e,alt:`Processed useLumina result`})]})})}function Be(){let{result:e,loading:t,error:n}=xe({source:Ue,resize:(0,V.useMemo)(()=>({width:80,height:44}),[]),operations:(0,V.useCallback)(e=>e.ascii(),[])});return(0,H.jsx)(B,{title:`ASCII Output`,description:`The hook can return non-image output when the Lumina chain operation returns text.`,children:(0,H.jsx)(`pre`,{className:`lumina-story-pre`,children:t?`Generating ASCII...`:n?.message||e})})}function Ve({aspect:e,lineColor:t,overlayOpacity:n,allowResize:r}){let[i,a]=(0,V.useState)({x:0,y:0,width:0,height:0});return(0,H.jsx)(B,{title:`ImageAreaSelector`,description:`Drag on the image to create a crop region. Drag inside the region to move it, or drag a handle to resize it.`,children:(0,H.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,H.jsx)(Ne,{src:U,aspect:e,lineColor:t,overlayOpacity:n,allowResize:r,onCropChange:a,onCropComplete:a,overlayControls:({width:e,height:t})=>(0,H.jsxs)(`span`,{className:`lumina-story-chip`,children:[Math.round(e),` x `,Math.round(t)]})}),(0,H.jsxs)(Re,{children:[`x `,Math.round(i.x),`, y `,Math.round(i.y),`, w`,` `,Math.round(i.width),`, h `,Math.round(i.height)]})]})})}function He({aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i}){let[a,o]=(0,V.useState)(`No crop applied yet`),[s,c]=(0,V.useState)(null);return(0,H.jsx)(B,{title:`ImageCropper`,description:`Select an area, apply the crop, and inspect the returned Blob or Data URL.`,children:(0,H.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,H.jsx)(`div`,{className:`lumina-story-panel`,children:(0,H.jsx)(Fe,{src:U,aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i,maxWidth:520,maxHeight:360,onCropComplete:e=>{if(typeof e==`string`){c(e),o(`Data URL length: ${e.length}`);return}let t=URL.createObjectURL(e);c(e=>(e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),t)),o(`Blob size: ${e.size} bytes`)},onError:e=>o(e.message)})}),(0,H.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,H.jsx)(Re,{children:a}),s&&(0,H.jsx)(`img`,{className:`lumina-story-image-preview`,src:s,alt:`Cropped output`})]})]})})}var V,H,U,Ue,We,W,G,K,q,J,Y,X,Z,Q,Ge,$,Ke;e((()=>{V=t(n(),1),Le(),H=r(),U=`./sample.png`,Ue=`./lumina.png`,We={title:`LuminaJS React/API Overview`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook coverage for the React exports in src/react: LuminaCanvas, useLumina, ImageAreaSelector, and ImageCropper. The stories also document the shared image editing options used by the component and hook APIs.`}}}},W={name:`React exports and functionality list`,render:()=>(0,H.jsx)(B,{title:`React Exports`,description:`The React entrypoint exposes component, hook, and crop-selection primitives over the LuminaJS chain API.`,children:(0,H.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,H.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,H.jsx)(`h3`,{children:`LuminaCanvas`}),(0,H.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,H.jsx)(`li`,{children:`Renders a processed image to canvas.`}),(0,H.jsx)(`li`,{children:`Supports declarative editing props.`}),(0,H.jsx)(`li`,{children:`Accepts a custom chain callback through filter.`}),(0,H.jsx)(`li`,{children:`Returns canvas, dataUrl, blob, or ImageData through getImage.`})]})]}),(0,H.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,H.jsx)(`h3`,{children:`useLumina`}),(0,H.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,H.jsx)(`li`,{children:`Processes images from a hook.`}),(0,H.jsx)(`li`,{children:`Provides result, loading, error, and getImage.`}),(0,H.jsx)(`li`,{children:`Supports deps for caller-controlled reprocessing.`})]})]}),(0,H.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,H.jsx)(`h3`,{children:`ImageAreaSelector`}),(0,H.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,H.jsx)(`li`,{children:`Interactive selection rectangle over an image.`}),(0,H.jsx)(`li`,{children:`Resizable handles, drag-to-move, and touch support with pinch-to-resize.`}),(0,H.jsx)(`li`,{children:`Optional aspect-ratio lock.`}),(0,H.jsx)(`li`,{children:`Selection styling and overlayControls render prop.`})]})]}),(0,H.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,H.jsx)(`h3`,{children:`ImageCropper`}),(0,H.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,H.jsx)(`li`,{children:`Complete crop workflow with apply and reset controls.`}),(0,H.jsx)(`li`,{children:`Resizable crop selection powered by ImageAreaSelector (supports touch & pinch).`}),(0,H.jsx)(`li`,{children:`Blob or Data URL output.`}),(0,H.jsx)(`li`,{children:`Custom button classes, styles, positions, and callbacks.`})]})]})]})}),parameters:{docs:{source:{code:`import { LuminaCanvas, useLumina, ImageAreaSelector, ImageCropper } from '@gks101/luminajs/react';`}}}},G={name:`LuminaCanvas/basic canvas`,render:()=>(0,H.jsx)(B,{title:`LuminaCanvas Basic`,description:`Use source plus standard canvas attributes to render an image.`,children:(0,H.jsx)(P,{className:`lumina-story-canvas`,source:U,width:520,height:360})}),parameters:{docs:{source:{code:`<LuminaCanvas source="/sample.png" width={520} height={360} />`}}}},K={name:`LuminaCanvas/adjustments and filters`,args:{brightness:12,contrast:18,grayscale:!1,sepia:!0,gaussianBlur:0,sharpen:!1,emboss:!1,edgeDetection:!1},render:e=>(0,H.jsx)(B,{title:`Adjustments And Filters`,description:`These props map to the shared ImageEditingOptions contract.`,children:(0,H.jsx)(P,{className:`lumina-story-canvas`,source:U,width:520,height:360,brightness:e.brightness,contrast:e.contrast,grayscale:e.grayscale,sepia:e.sepia,gaussianBlur:e.gaussianBlur||void 0,sharpen:e.sharpen,emboss:e.emboss,edgeDetection:e.edgeDetection})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  brightness={12}
  contrast={18}
  sepia
  gaussianBlur={0}
/>`}}}},q={name:`LuminaCanvas/resize crop watermark`,render:()=>(0,H.jsx)(B,{title:`Resize, Crop, And Watermark`,description:`Crop and resize are applied before the optional filter callback.`,children:(0,H.jsx)(P,{className:`lumina-story-canvas`,source:U,resize:{width:420,height:280},crop:{x:80,y:60,width:520,height:360},watermark:{text:`LuminaJS`,options:{x:20,y:48,fontSize:32,color:`rgba(255,255,255,0.82)`}}})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  crop={{ x: 80, y: 60, width: 520, height: 360 }}
  resize={{ width: 420, height: 280 }}
  watermark={{
    text: 'LuminaJS',
    options: { x: 20, y: 48, fontSize: 32, color: 'rgba(255,255,255,0.82)' },
  }}
/>`}}}},J={name:`LuminaCanvas/custom filter chain`,render:()=>(0,H.jsx)(B,{title:`Custom Chain`,description:`Use filter when you need the chainable Lumina API directly.`,children:(0,H.jsx)(P,{className:`lumina-story-canvas`,source:U,width:520,height:360,filter:e=>e.grayscale().brightness(20).sharpen()})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  filter={(chain) => chain.grayscale().brightness(20).sharpen()}
/>`}}}},Y={name:`useLumina/data URL and getImage`,render:()=>(0,H.jsx)(ze,{}),parameters:{docs:{source:{code:`const { result, loading, error, getImage } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 260, height: 180 },
  brightness: 8,
  contrast: 12,
  operations: (chain) => chain.sepia().watermark('useLumina', { x: 16, y: 34 }),
  outputType: 'dataUrl',
});

const blob = await getImage('blob');`}}}},X={name:`useLumina/ASCII output`,render:()=>(0,H.jsx)(Be,{}),parameters:{docs:{source:{code:`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 80, height: 44 },
  operations: (chain) => chain.ascii(),
});`}}}},Z={name:`ImageAreaSelector/freeform selection`,args:{lineColor:`#1c64d1`,overlayOpacity:.55,allowResize:!0},render:e=>(0,H.jsx)(Ve,{lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
  allowResize
  onCropChange={setCrop}
  onCropComplete={setCrop}
/>`}}}},Q={name:`ImageAreaSelector/aspect locked`,args:{aspect:16/9,lineColor:`#d14d1c`,overlayOpacity:.62,allowResize:!0},render:e=>(0,H.jsx)(Ve,{aspect:e.aspect,lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
  allowResize
  overlayControls={({ width, height }) => (
    <span>{Math.round(width)} x {Math.round(height)}</span>
  )}
  onCropChange={setCrop}
/>`}}}},Ge={name:`ImageCropper/blob output`,args:{aspectRatio:1,outputFormat:`blob`,buttonPosition:`top-left`,allowReset:!0,allowResize:!0},render:e=>(0,H.jsx)(He,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  allowResize
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>`}}}},$={name:`ImageCropper/data URL output and custom controls`,args:{aspectRatio:16/9,outputFormat:`dataUrl`,buttonPosition:`bottom-left`,allowReset:!0,allowResize:!0},render:e=>(0,H.jsx)(He,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  buttonPosition="bottom-right"
  allowResize
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>`}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'React exports and functionality list',
  render: () => <StoryShell title="React Exports" description="The React entrypoint exposes component, hook, and crop-selection primitives over the LuminaJS chain API.">
      <div className="lumina-story-grid">
        <div className="lumina-story-panel">
          <h3>LuminaCanvas</h3>
          <ul className="lumina-story-list">
            <li>Renders a processed image to canvas.</li>
            <li>Supports declarative editing props.</li>
            <li>Accepts a custom chain callback through filter.</li>
            <li>
              Returns canvas, dataUrl, blob, or ImageData through getImage.
            </li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>useLumina</h3>
          <ul className="lumina-story-list">
            <li>Processes images from a hook.</li>
            <li>Provides result, loading, error, and getImage.</li>
            <li>Supports deps for caller-controlled reprocessing.</li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>ImageAreaSelector</h3>
          <ul className="lumina-story-list">
            <li>Interactive selection rectangle over an image.</li>
            <li>
              Resizable handles, drag-to-move, and touch support with
              pinch-to-resize.
            </li>
            <li>Optional aspect-ratio lock.</li>
            <li>Selection styling and overlayControls render prop.</li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>ImageCropper</h3>
          <ul className="lumina-story-list">
            <li>Complete crop workflow with apply and reset controls.</li>
            <li>
              Resizable crop selection powered by ImageAreaSelector (supports
              touch & pinch).
            </li>
            <li>Blob or Data URL output.</li>
            <li>Custom button classes, styles, positions, and callbacks.</li>
          </ul>
        </div>
      </div>
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`import { LuminaCanvas, useLumina, ImageAreaSelector, ImageCropper } from '@gks101/luminajs/react';\`
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/basic canvas',
  render: () => <StoryShell title="LuminaCanvas Basic" description="Use source plus standard canvas attributes to render an image.">
      <LuminaCanvas className="lumina-story-canvas" source={SAMPLE_IMAGE} width={520} height={360} />
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas source="/sample.png" width={520} height={360} />\`
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/adjustments and filters',
  args: {
    brightness: 12,
    contrast: 18,
    grayscale: false,
    sepia: true,
    gaussianBlur: 0,
    sharpen: false,
    emboss: false,
    edgeDetection: false
  },
  render: args => <StoryShell title="Adjustments And Filters" description="These props map to the shared ImageEditingOptions contract.">
      <LuminaCanvas className="lumina-story-canvas" source={SAMPLE_IMAGE} width={520} height={360} brightness={args.brightness} contrast={args.contrast} grayscale={args.grayscale} sepia={args.sepia} gaussianBlur={args.gaussianBlur || undefined} sharpen={args.sharpen} emboss={args.emboss} edgeDetection={args.edgeDetection} />
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas
  source="/sample.png"
  brightness={12}
  contrast={18}
  sepia
  gaussianBlur={0}
/>\`
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/resize crop watermark',
  render: () => <StoryShell title="Resize, Crop, And Watermark" description="Crop and resize are applied before the optional filter callback.">
      <LuminaCanvas className="lumina-story-canvas" source={SAMPLE_IMAGE} resize={{
      width: 420,
      height: 280
    }} crop={{
      x: 80,
      y: 60,
      width: 520,
      height: 360
    }} watermark={{
      text: 'LuminaJS',
      options: {
        x: 20,
        y: 48,
        fontSize: 32,
        color: 'rgba(255,255,255,0.82)'
      }
    }} />
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas
  source="/sample.png"
  crop={{ x: 80, y: 60, width: 520, height: 360 }}
  resize={{ width: 420, height: 280 }}
  watermark={{
    text: 'LuminaJS',
    options: { x: 20, y: 48, fontSize: 32, color: 'rgba(255,255,255,0.82)' },
  }}
/>\`
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/custom filter chain',
  render: () => <StoryShell title="Custom Chain" description="Use filter when you need the chainable Lumina API directly.">
      <LuminaCanvas className="lumina-story-canvas" source={SAMPLE_IMAGE} width={520} height={360} filter={chain => chain.grayscale().brightness(20).sharpen()} />
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas
  source="/sample.png"
  filter={(chain) => chain.grayscale().brightness(20).sharpen()}
/>\`
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'useLumina/data URL and getImage',
  render: () => <UseLuminaDataUrlDemo />,
  parameters: {
    docs: {
      source: {
        code: \`const { result, loading, error, getImage } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 260, height: 180 },
  brightness: 8,
  contrast: 12,
  operations: (chain) => chain.sepia().watermark('useLumina', { x: 16, y: 34 }),
  outputType: 'dataUrl',
});

const blob = await getImage('blob');\`
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'useLumina/ASCII output',
  render: () => <UseLuminaAsciiDemo />,
  parameters: {
    docs: {
      source: {
        code: \`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 80, height: 44 },
  operations: (chain) => chain.ascii(),
});\`
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'ImageAreaSelector/freeform selection',
  args: {
    lineColor: '#1c64d1',
    overlayOpacity: 0.55,
    allowResize: true
  },
  render: args => <ImageAreaSelectorDemo lineColor={args.lineColor} overlayOpacity={args.overlayOpacity} allowResize={args.allowResize} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
  allowResize
  onCropChange={setCrop}
  onCropComplete={setCrop}
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'ImageAreaSelector/aspect locked',
  args: {
    aspect: 16 / 9,
    lineColor: '#d14d1c',
    overlayOpacity: 0.62,
    allowResize: true
  },
  render: args => <ImageAreaSelectorDemo aspect={args.aspect} lineColor={args.lineColor} overlayOpacity={args.overlayOpacity} allowResize={args.allowResize} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
  allowResize
  overlayControls={({ width, height }) => (
    <span>{Math.round(width)} x {Math.round(height)}</span>
  )}
  onCropChange={setCrop}
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
  name: 'ImageCropper/blob output',
  args: {
    aspectRatio: 1,
    outputFormat: 'blob',
    buttonPosition: 'top-left',
    allowReset: true,
    allowResize: true
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} allowResize={args.allowResize} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  allowResize
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>\`
      }
    }
  }
}`,...Ge.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'ImageCropper/data URL output and custom controls',
  args: {
    aspectRatio: 16 / 9,
    outputFormat: 'dataUrl',
    buttonPosition: 'bottom-left',
    allowReset: true,
    allowResize: true
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} allowResize={args.allowResize} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  buttonPosition="bottom-right"
  allowResize
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>\`
      }
    }
  }
}`,...$.parameters?.docs?.source}}},Ke=[`ReactExports`,`LuminaCanvasBasic`,`LuminaCanvasAdjustments`,`LuminaCanvasTransformations`,`LuminaCanvasCustomChain`,`UseLuminaDataUrl`,`UseLuminaAscii`,`ImageAreaSelectorFreeform`,`ImageAreaSelectorAspectLocked`,`ImageCropperBlob`,`ImageCropperDataUrl`]}))();export{Q as ImageAreaSelectorAspectLocked,Z as ImageAreaSelectorFreeform,Ge as ImageCropperBlob,$ as ImageCropperDataUrl,K as LuminaCanvasAdjustments,G as LuminaCanvasBasic,J as LuminaCanvasCustomChain,q as LuminaCanvasTransformations,W as ReactExports,X as UseLuminaAscii,Y as UseLuminaDataUrl,Ke as __namedExportsOrder,We as default};