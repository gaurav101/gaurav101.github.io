import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-DXzsgFd7.js";import{t as r}from"./jsx-runtime-CVnZRb2K.js";function i(){let e=globalThis.window!==void 0,t=globalThis.document!==void 0&&typeof globalThis.document.createElement==`function`;return e||t}function a(e){if(!i())throw Error(`LuminaJS [runtime]: "${e}" is browser-only. Run this on the client side (window/document available).`)}function o(e,t){let n=globalThis[t];return typeof n==`function`&&e instanceof n}var s=e((()=>{}));function c(e){if(typeof globalThis.Image!=`function`)throw Error(`LuminaJS [runtime]: "load image from URL" is browser-only. Run this on the client side (window/document/Image available).`);return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`Anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LuminaJS [loader]: Failed to load image from URL — "${e}"`)),r.src=e})}function l(e){if(!e.type.startsWith(`image/`))return Promise.reject(TypeError(`LuminaJS [loader]: Expected an image File, but received MIME type "${e.type}".`));if(typeof globalThis.Image!=`function`)throw Error(`LuminaJS [runtime]: "load image from File" is browser-only. Run this on the client side (window/document/Image available).`);if(globalThis.URL===void 0||typeof globalThis.URL.createObjectURL!=`function`||typeof globalThis.URL.revokeObjectURL!=`function`)throw Error(`LuminaJS [runtime]: "load image from File" requires URL.createObjectURL support in the browser.`);let t=URL.createObjectURL(e);return new Promise((n,r)=>{let i=new Image;i.onload=()=>{URL.revokeObjectURL(t),n(i)},i.onerror=()=>{URL.revokeObjectURL(t),r(Error(`LuminaJS [loader]: Failed to load image from File — "${e.name}".`))},i.src=t})}async function u(e){return typeof e==`string`?c(e):o(e,`File`)?l(e):Promise.reject(TypeError(`LuminaJS [loader]: Invalid source type "${typeof e}". Expected a URL string or a File object.`))}var d=e((()=>{s()}));function f(e,t){a(`create offscreen canvas`);let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`LuminaJS [canvas]: Failed to create offscreen canvas context.`);return{canvas:n,ctx:r}}function p(e){let t=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(t===0||n===0)throw Error(`LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions (${t}x${n}). Ensure the image is fully loaded before calling getPixelData.`);let{canvas:r,ctx:i}=f(t,n);i.drawImage(e,0,0,t,n);try{return{imageData:i.getImageData(0,0,t,n),canvas:r}}catch(e){let t=e instanceof Error?e.message:String(e);throw Error(`LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a cross-origin image. Ensure the server sends CORS headers and the image is loaded with crossOrigin="Anonymous". Original error: ${t}`)}}function m(e,t){let n=e.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. The canvas may already have a context of a different type (e.g. "webgl").`);n.putImageData(t,0,0)}function h(e,t=`image/png`,n=.92){return new Promise((r,i)=>{e.toBlob(e=>{e?r(e):i(Error(`LuminaJS [canvas]: canvas.toBlob returned null. The canvas may be empty or the MIME type "${t}" is unsupported.`))},t,n)})}function g(e,t,n){if(t<=0||n<=0)throw Error(`LuminaJS [canvas]: Resize dimensions must be positive (${t}x${n}).`);let{canvas:r,ctx:i}=f(t,n);return i.drawImage(e,0,0,t,n),r}function ee(e,t,n,r,i){if(r<=0||i<=0)throw Error(`LuminaJS [canvas]: Crop dimensions must be positive (${r}x${i}).`);let{canvas:a,ctx:o}=f(r,i);return o.drawImage(e,t,n,r,i,0,0,r,i),a}var _=e((()=>{s()}));function te(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2],a=v*t+ne*r+re*i;n[e]=a,n[e+1]=a,n[e+2]=a}return t}var v,ne,re,y=e((()=>{v=.299,ne=.587,re=.114}));function b(e,t,n){return Math.min(Math.max(e,t),n)}var x=e((()=>{}));function S(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length;for(let e=0;e<i;e+=4)r[e]=b(r[e]+t,0,255),r[e+1]=b(r[e+1]+t,0,255),r[e+2]=b(r[e+2]+t,0,255);return n}var C=e((()=>{x()}));function w(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length,a=259*(t+255)/(255*(259-t));for(let e=0;e<i;e+=4)r[e]=b(a*(r[e]-128)+128,0,255),r[e+1]=b(a*(r[e+1]-128)+128,0,255),r[e+2]=b(a*(r[e+2]-128)+128,0,255);return n}var ie=e((()=>{x()}));function ae(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2];n[e]=b(t*.393+r*.769+i*.189,0,255),n[e+1]=b(t*.349+r*.686+i*.168,0,255),n[e+2]=b(t*.272+r*.534+i*.131,0,255)}return t}var T=e((()=>{x()}));function oe(e,t={}){let{charSet:n=E,invert:r=!1}=t,i=r?n.split(``).reverse().join(``):n,a=e.data,o=e.width,s=e.height,c=``;for(let e=0;e<s;e++){for(let t=0;t<o;t++){let n=(e*o+t)*4,r=a[n],s=a[n+1],l=a[n+2],u=.299*r+.587*s+.114*l,d=Math.floor(u/255*(i.length-1));c+=i[d]}c+=`
`}return c}var E,D=e((()=>{E=`@%#*+=-:. `}));function se(e,t=1){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t=Math.max(0,Math.floor(t)),t===0)return new ImageData(new Uint8ClampedArray(i),n,r);for(let e=0;e<r;e++)for(let r=0;r<n;r++){let a=0,s=0,c=0,l=0,u=0;for(let o=-t;o<=t;o++){let t=r+o;if(t>=0&&t<n){let r=(e*n+t)*4;a+=i[r],s+=i[r+1],c+=i[r+2],l+=i[r+3],u++}}let d=(e*n+r)*4;o[d]=a/u,o[d+1]=s/u,o[d+2]=c/u,o[d+3]=l/u}for(let e=0;e<n;e++)for(let i=0;i<r;i++){let s=0,c=0,l=0,u=0,d=0;for(let a=-t;a<=t;a++){let t=i+a;if(t>=0&&t<r){let r=(t*n+e)*4;s+=o[r],c+=o[r+1],l+=o[r+2],u+=o[r+3],d++}}let f=(i*n+e)*4;a[f]=s/d,a[f+1]=c/d,a[f+2]=l/d,a[f+3]=u/d}return new ImageData(a,n,r)}var O=e((()=>{}));function ce(e,t=2){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t<=0)return new ImageData(new Uint8ClampedArray(i),n,r);let s=Math.ceil(t*3),c=s*2+1,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){let n=e-s;l[e]=Math.exp(-(n*n)/(2*t*t)),u+=l[e]}for(let e=0;e<c;e++)l[e]/=u;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=0,a=0,u=0,d=0;for(let o=0;o<c;o++){let c=t+(o-s),f=Math.max(0,Math.min(n-1,c)),p=(e*n+f)*4,m=l[o];r+=i[p]*m,a+=i[p+1]*m,u+=i[p+2]*m,d+=i[p+3]*m}let f=(e*n+t)*4;o[f]=r,o[f+1]=a,o[f+2]=u,o[f+3]=d}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let i=0,u=0,d=0,f=0;for(let a=0;a<c;a++){let c=t+(a-s),p=(Math.max(0,Math.min(r-1,c))*n+e)*4,m=l[a];i+=o[p]*m,u+=o[p+1]*m,d+=o[p+2]*m,f+=o[p+3]*m}let p=(t*n+e)*4;a[p]=i,a[p+1]=u,a[p+2]=d,a[p+3]=f}return new ImageData(a,n,r)}var k=e((()=>{}));function A(e,t,n={}){a(`apply watermark`);let{x:r=10,y:i=10,fontSize:o=24,fontFace:s=`Arial`,font:c=`${o}px ${s}`,color:l=`rgba(255, 255, 255, 0.5)`,align:u=`left`,baseline:d=`top`}=n,f=document.createElement(`canvas`);f.width=e.width,f.height=e.height;let p=f.getContext(`2d`);if(!p)throw Error(`LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.`);return p.putImageData(e,0,0),p.font=c,p.fillStyle=l,p.textAlign=u,p.textBaseline=d,p.fillText(t,r,i),p.getImageData(0,0,f.width,f.height)}var j=e((()=>{s()}));function le(e,t={}){let{width:n,height:r}=e,i=Math.min(n,r),{sigma:a=5,centerX:o=n/2,centerY:s=r/2,focusRadius:c=i*.2,falloff:l=i*.4}=t,u=ce(e,a),d=e.data,f=u.data,p=new Uint8ClampedArray(d.length);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-o,i=e-s,a=Math.sqrt(r*r+i*i),u=0;a>c&&(u=Math.min(1,(a-c)/l));let m=(e*n+t)*4,h=1-u;p[m]=d[m]*h+f[m]*u,p[m+1]=d[m+1]*h+f[m+1]*u,p[m+2]=d[m+2]*h+f[m+2]*u,p[m+3]=d[m+3]}return new ImageData(p,n,r)}var ue=e((()=>{k()})),M,N=e((()=>{M=(e,t,n,r)=>{let i=new Uint8ClampedArray(e);for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=0,s=0,c=0;for(let e=0;e<3;e++)for(let l=0;l<3;l++){let u=n+l-1,d=((a+e-1)*t+u)*4,f=r[e*3+l];o+=i[d]*f,s+=i[d+1]*f,c+=i[d+2]*f}let l=(a*t+n)*4;e[l]=Math.min(255,Math.max(0,o)),e[l+1]=Math.min(255,Math.max(0,s)),e[l+2]=Math.min(255,Math.max(0,c))}return e}})),de,fe=e((()=>{N(),de=e=>(M(e.data,e.width,e.height,[0,-1,0,-1,5,-1,0,-1,0]),e)})),pe,me=e((()=>{N(),pe=e=>(M(e.data,e.width,e.height,[-2,-1,0,-1,1,1,0,1,2]),e)})),he,P=e((()=>{N(),he=e=>(M(e.data,e.width,e.height,[-1,-1,-1,-1,8,-1,-1,-1,-1]),e)})),ge=e((()=>{y(),C(),ie(),T(),D(),O(),k(),j(),ue(),N(),fe(),me(),P()})),_e,F=e((()=>{ge(),d(),s(),_(),_e=class{constructor(e){this.source=e,this.operations=[]}_addOp(e,...t){return this.operations.push({fn:e,args:t}),this}grayscale(){return this._addOp(te)}brightness(e){return this._addOp(S,e)}contrast(e){return this._addOp(w,e)}sepia(){return this._addOp(ae)}ascii(e={}){return this._addOp(oe,e)}blur(e){return this._addOp(se,e)}gaussianBlur(e){return this._addOp(ce,e)}watermark(e,t){return this._addOp(A,e,t)}backgroundBlur(e){return this._addOp(le,e)}applyConvolution(e,t,n){return this._addOp(M,e,t,n)}sharpen(){return this._addOp(de)}emboss(){return this._addOp(pe)}edgeDetection(){return this._addOp(he)}resize(e,t){return this._addOp((e,t,n)=>{a(`resize image in chain`);let r=document.createElement(`canvas`);r.width=e.width,r.height=e.height;let i=r.getContext(`2d`);if(!i)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);i.putImageData(e,0,0);let o=g(r,t,n).getContext(`2d`);if(!o)throw Error(`LuminaJS [chain]: Failed to get resized canvas context.`);return o.getImageData(0,0,t,n)},e,t)}crop(e,t,n,r){return this._addOp((e,t,n,r,i)=>{a(`crop image in chain`);let o=document.createElement(`canvas`);o.width=e.width,o.height=e.height;let s=o.getContext(`2d`);if(!s)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);s.putImageData(e,0,0);let c=ee(o,t,n,r,i).getContext(`2d`);if(!c)throw Error(`LuminaJS [chain]: Failed to get cropped canvas context.`);return c.getImageData(0,0,r,i)},e,t,n,r)}async _resolveSource(){let e=this.source;if((typeof e==`string`||o(e,`File`))&&(e=await u(e)),o(e,`HTMLImageElement`))return p(e).imageData;if(o(e,`HTMLCanvasElement`)){let t=e,n=t.getContext(`2d`);if(!n)throw Error(`LuminaJS [chain]: Failed to get canvas context from source.`);return n.getImageData(0,0,t.width,t.height)}if(o(e,`ImageData`))return e;throw Error(`LuminaJS [chain]: Unsupported source type.`)}async render(){let e=await this._resolveSource();for(let t of this.operations)e=await t.fn(e,...t.args);return e}async toCanvas(e){let t=await this.render();return e.width=t.width,e.height=t.height,m(e,t),e}async toBlob(e=`image/png`,t=.92){let n=await this.render();a(`export image as Blob`);let r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,m(r,n),h(r,e,t)}async toDataURL(e=`image/png`,t=.92){let n=await this.render();a(`export image as Data URL`);let r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,m(r,n),r.toDataURL(e,t)}async toHtmlElement(e){a(`render image into HTML element`);let t=typeof e==`string`?document.getElementById(e):e;if(!t)throw Error(`LuminaJS [chain]: Target element not found: "${e}"`);if(o(t,`HTMLImageElement`)){let e=t;e.src=await this.toDataURL()}else if(o(t,`HTMLCanvasElement`)){let e=t;await this.toCanvas(e)}else throw Error(`LuminaJS [chain]: toHtmlElement only supports <img> and <canvas> elements.`);return t}}}));function ve(e){return new _e(e)}var ye=e((()=>{d(),_(),y(),C(),ie(),T(),D(),O(),k(),j(),ue(),N(),fe(),me(),P(),F(),x()}));function I(e,t){let n=e;return t.grayscale&&(n=n.grayscale()),t.brightness!==void 0&&(n=n.brightness(t.brightness)),t.contrast!==void 0&&(n=n.contrast(t.contrast)),t.sepia&&(n=n.sepia()),t.ascii&&(n=n.ascii(typeof t.ascii==`boolean`?{}:t.ascii)),t.blur!==void 0&&(n=n.blur(t.blur)),t.gaussianBlur!==void 0&&(n=n.gaussianBlur(t.gaussianBlur)),t.watermark&&(n=n.watermark(t.watermark.text,t.watermark.options)),t.backgroundBlur&&(n=n.backgroundBlur(t.backgroundBlur)),t.sharpen&&(n=n.sharpen()),t.emboss&&(n=n.emboss()),t.edgeDetection&&(n=n.edgeDetection()),t.resize&&(n=n.resize(t.resize.width,t.resize.height)),t.crop&&(n=n.crop(t.crop.x,t.crop.y,t.crop.width,t.crop.height)),n}var be=e((()=>{}));function xe({source:e,operations:t,deps:n=[],outputType:r=`imageData`,...i}){let[a,o]=(0,L.useState)(null),[s,c]=(0,L.useState)(!1),[l,u]=(0,L.useState)(null);return(0,L.useEffect)(()=>{let n=!0;return(async()=>{if(!e){o(null);return}c(!0),u(null);try{let a=ve(e);a=I(a,i),typeof t==`function`&&(a=t(a));let s;switch(r){case`dataUrl`:s=await a.toDataURL();break;case`blob`:s=await a.toBlob();break;default:s=await a.render()}n&&o(s)}catch(e){n&&u(e instanceof Error?e:Error(String(e)))}finally{n&&c(!1)}})(),()=>{n=!1}},[e,r,t,JSON.stringify(i),...n]),{result:a,loading:s,error:l,getImage:async n=>{if(!e)return null;try{let a=ve(e);a=I(a,i),typeof t==`function`&&(a=t(a));let o;switch(n||r){case`dataUrl`:o=await a.toDataURL();break;case`blob`:o=await a.toBlob();break;default:o=await a.render()}return o}catch(e){return u(e instanceof Error?e:Error(String(e))),null}}}}var L,Se=e((()=>{L=t(n(),1),ye(),be()})),Ce,R,z,B=e((()=>{Ce=r(),R=t(n(),1),ye(),be(),z=(0,R.forwardRef)(function({source:e,filter:t,onProcessError:n,onLoad:r,getImage:i,outputType:a=`canvas`,errorClassName:o,errorStyle:s,errorRole:c=`alert`,grayscale:l,brightness:u,contrast:d,sepia:f,ascii:p,blur:m,gaussianBlur:h,watermark:g,backgroundBlur:ee,sharpen:_,emboss:te,edgeDetection:v,resize:ne,crop:re,...y},b){let x=(0,R.useMemo)(()=>({grayscale:l,brightness:u,contrast:d,sepia:f,ascii:p,blur:m,gaussianBlur:h,watermark:g,backgroundBlur:ee,sharpen:_,emboss:te,edgeDetection:v,resize:ne,crop:re}),[l,u,d,f,p,m,h,g,ee,_,te,v,ne,re]),S=(0,R.useRef)(null),[C,w]=(0,R.useState)(null),ie=(0,R.useCallback)(e=>{S.current=e,typeof b==`function`?b(e):b&&(b.current=e)},[b]);return(0,R.useEffect)(()=>{if(!e||!S.current)return;let o=!0;return(async()=>{try{let n=ve(e);if(n=I(n,x),typeof t==`function`&&(n=t(n)),S.current&&await n.toCanvas(S.current),o&&r&&r(),o&&i&&S.current)if(a===`dataUrl`)i(S.current.toDataURL());else if(a===`blob`)S.current.toBlob(e=>{e&&i(e)});else if(a===`imageData`){let e=S.current.getContext(`2d`);e&&i(e.getImageData(0,0,S.current.width,S.current.height))}else i(S.current)}catch(e){let t=e instanceof Error?e:Error(String(e));o&&(w(t),n&&n(t))}})(),()=>{o=!1}},[e,t,n,r,i,a,x]),C?(0,Ce.jsx)(`div`,{className:o??`lumina-error`,style:s,role:c,children:C.message}):(0,Ce.jsx)(`canvas`,{ref:ie,...y})})}));function V(e,t,n){return Math.max(t,Math.min(e,n))}function H(e,t,n,r){return{x:Math.min(e,n),y:Math.min(t,r),width:Math.abs(n-e),height:Math.abs(r-t)}}function we(e,t,n){let r=V(e.x,0,t-e.width),i=V(e.y,0,n-e.height);return{...e,x:r,y:i}}function U(e,t,n,r){let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=i+t.width/2,l=o+t.height/2;if(n===`e`||n===`w`){let t=n===`e`?i:a,o=n===`e`?e.imageWidth-t:t,s=V(Math.abs(e.x-t),K,Math.min(o,e.imageHeight*r)),c=s/r;return we({x:n===`e`?t:t-s,y:l-c/2,width:s,height:c},e.imageWidth,e.imageHeight)}if(n===`n`||n===`s`){let t=n===`s`?o:s,i=n===`s`?e.imageHeight-t:t,a=V(Math.abs(e.y-t),K,Math.min(i,e.imageWidth/r)),l=a*r;return we({x:c-l/2,y:n===`s`?t:t-a,width:l,height:a},e.imageWidth,e.imageHeight)}let u=n.includes(`e`)?i:a,d=n.includes(`s`)?o:s,f=e.x-u,p=e.y-d,m=f>=0?1:-1,h=p>=0?1:-1,g=Math.max(Math.abs(f),Math.abs(p)*r,K),ee=g/r,_=m>0?e.imageWidth-u:u,te=h>0?e.imageHeight-d:d;return g=Math.min(g,_,te*r),ee=g/r,H(u,d,u+m*g,d+h*ee)}function Te(e,t,n,r){if(r)return U(e,t,n,r);let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=n.includes(`w`)?e.x:i,l=n.includes(`e`)?e.x:a;return H(c,n.includes(`n`)?e.y:o,l,n.includes(`s`)?e.y:s)}var W,G,Ee,K,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe=e((()=>{W=r(),G=t(n(),1),Ee=12,K=1,De={position:`relative`,display:`inline-block`,userSelect:`none`,touchAction:`none`},Oe={display:`block`,maxWidth:`100%`,userSelect:`none`},ke={position:`absolute`,backgroundColor:`rgba(255, 255, 255, 0.1)`,zIndex:10},Ae={position:`absolute`,width:Ee,height:Ee,borderRadius:`50%`,backgroundColor:`#fff`,boxSizing:`border-box`},je={position:`absolute`,zIndex:1001,pointerEvents:`auto`},Me={position:`absolute`,width:1,height:1,padding:0,margin:-1,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},Ne=[{id:`nw`,cursor:`nwse-resize`,style:{left:`0%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`n`,cursor:`ns-resize`,style:{left:`50%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`ne`,cursor:`nesw-resize`,style:{right:`0%`,top:`0%`,transform:`translate(50%, -50%)`}},{id:`e`,cursor:`ew-resize`,style:{right:`0%`,top:`50%`,transform:`translate(50%, -50%)`}},{id:`se`,cursor:`nwse-resize`,style:{right:`0%`,bottom:`0%`,transform:`translate(50%, 50%)`}},{id:`s`,cursor:`ns-resize`,style:{left:`50%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`sw`,cursor:`nesw-resize`,style:{left:`0%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`w`,cursor:`ew-resize`,style:{left:`0%`,top:`50%`,transform:`translate(-50%, -50%)`}}],Pe=({src:e,onCropChange:t,onCropComplete:n,aspect:r,lineWidth:i=2,lineColor:a=`#fff`,overlayOpacity:o=.5,allowResize:s=!0,overlayControls:c,className:l,style:u,imageClassName:d,imageStyle:f,selectionClassName:p,selectionStyle:m,handleClassName:h,handleStyle:g,overlayControlsContainerClassName:ee,overlayControlsContainerStyle:_,ariaLabel:te=`Image crop selection area`,ariaDescription:v=`Use arrow keys to move the crop. Hold Shift for larger steps. Hold Alt with arrows to resize. Press Enter to confirm the current selection. Press Escape to clear the selection.`,keyboardStep:ne=1,keyboardStepLarge:re=10})=>{let[y,b]=(0,G.useState)({x:0,y:0,width:0,height:0}),[x,S]=(0,G.useState)(!1),[C,w]=(0,G.useState)(`draw`),[ie,ae]=(0,G.useState)(null),[T,oe]=(0,G.useState)({scaleX:1,scaleY:1}),E=(0,G.useRef)(null),D=(0,G.useRef)({x:0,y:0}),se=(0,G.useRef)({x:0,y:0}),O=(0,G.useRef)(y),ce=(0,G.useRef)(!1),k=(0,G.useRef)(`draw`),A=(0,G.useRef)(null),j=(0,G.useRef)(null),le=(0,G.useRef)(null),ue=(0,G.useRef)(null),M=(0,G.useId)(),N=(0,G.useCallback)(()=>{let e=E.current;if(!e||e.naturalWidth===0||e.naturalHeight===0)return;let t=e.getBoundingClientRect();t.width===0||t.height===0||oe({scaleX:t.width/e.naturalWidth,scaleY:t.height/e.naturalHeight})},[]),de=(0,G.useCallback)(e=>{let t=E.current,n=t?.getBoundingClientRect();if(!n||!t)return null;let r=t.naturalWidth/n.width,i=t.naturalHeight/n.height,a,o;if(`touches`in e){if(e.touches.length===0)return null;a=e.touches[0].clientX,o=e.touches[0].clientY}else a=e.clientX,o=e.clientY;return{x:Math.max(0,Math.min((a-n.left)*r,t.naturalWidth)),y:Math.max(0,Math.min((o-n.top)*i,t.naturalHeight)),imageWidth:t.naturalWidth,imageHeight:t.naturalHeight}},[]),fe=(0,G.useCallback)(e=>{if(!s)return null;let t=O.current;if(t.width<=0||t.height<=0)return null;let n=Ee/Math.max(T.scaleX,.001),r=Ee/Math.max(T.scaleY,.001),i=t.x,a=t.x+t.width,o=t.y,c=t.y+t.height,l=i+t.width/2,u=o+t.height/2,d=t=>Math.abs(e.x-t)<=n,f=t=>Math.abs(e.y-t)<=r;return d(i)&&f(o)?`nw`:d(a)&&f(o)?`ne`:d(a)&&f(c)?`se`:d(i)&&f(c)?`sw`:f(o)&&e.x>=i&&e.x<=a?`n`:d(a)&&e.y>=o&&e.y<=c?`e`:f(c)&&e.x>=i&&e.x<=a?`s`:d(i)&&e.y>=o&&e.y<=c?`w`:d(l)&&f(o)?`n`:d(a)&&f(u)?`e`:d(l)&&f(c)?`s`:d(i)&&f(u)?`w`:null},[s,T.scaleX,T.scaleY]),pe=(0,G.useCallback)(e=>{if(`button`in e&&e.button!==0)return;if(`touches`in e&&e.touches.length===2){let t=e.touches[0],n=e.touches[1];le.current=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),ue.current=O.current,S(!0),ce.current=!0,k.current=`resize`,w(`resize`);return}if(`touches`in e&&e.touches.length>2)return;let t=de(e);if(!t)return;S(!0),ce.current=!0;let n=O.current,r=fe(t);if(r){k.current=`resize`,w(`resize`),A.current=r,ae(r),j.current=n;return}if(n.width>0&&n.height>0&&t.x>=n.x&&t.x<=n.x+n.width&&t.y>=n.y&&t.y<=n.y+n.height){k.current=`move`,w(`move`),A.current=null,ae(null),j.current=null,se.current={x:t.x-n.x,y:t.y-n.y};return}k.current=`draw`,w(`draw`),A.current=null,ae(null),j.current=null,D.current={x:t.x,y:t.y};let i={x:t.x,y:t.y,width:0,height:0};O.current=i,b(i)},[de,fe]),me=(0,G.useCallback)(e=>{if(!x||!E.current)return;if(`touches`in e&&e.touches.length===2){if(le.current!==null&&ue.current!==null){let n=e.touches[0],i=e.touches[1],a=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY)/le.current,o=ue.current,s=E.current.naturalWidth,c=E.current.naturalHeight,l=o.width*a,u=r?l/r:o.height*a;l=Math.max(K,Math.min(l,s)),u=Math.max(K,Math.min(u,c)),r&&u>c&&(u=c,l=u*r);let d=o.x+o.width/2,f=o.y+o.height/2,p=we({x:d-l/2,y:f-u/2,width:l,height:u},s,c);O.current=p,b(p),t(p)}return}let n=de(e);if(!n)return;if(k.current===`resize`&&A.current&&j.current){let e=Te(n,j.current,A.current,r);O.current=e,b(e),t(e);return}if(k.current===`move`){let e=O.current,r={...e,x:Math.max(0,Math.min(n.x-se.current.x,n.imageWidth-e.width)),y:Math.max(0,Math.min(n.y-se.current.y,n.imageHeight-e.height))};O.current=r,b(r),t(r);return}let i=n.x-D.current.x,a=r?i/r:n.y-D.current.y;if(r&&Math.abs(a)>0){let e=n.imageHeight-Math.max(0,D.current.y),t=n.imageWidth-Math.max(0,D.current.x);Math.abs(a)>e&&(a=Math.sign(a)*e,i=a*r),Math.abs(i)>t&&(i=Math.sign(i)*t,a=i/r)}let o={x:i>0?D.current.x:n.x,y:a>0?D.current.y:n.y,width:Math.abs(i),height:Math.abs(a)};O.current=o,b(o),t(o)},[x,r,de,t]),he=(0,G.useCallback)(()=>{if(!ce.current)return;ce.current=!1,S(!1),A.current=null,ae(null),j.current=null,le.current=null,ue.current=null;let e=O.current;e.width>0&&e.height>0&&n?.(e)},[n]),P=(0,G.useCallback)((e,r=!1)=>{O.current=e,b(e),t(e),r&&e.width>0&&e.height>0&&n?.(e)},[t,n]),ge=(0,G.useCallback)(e=>{if(e.target!==e.currentTarget)return;let t=O.current,i=t.width>0&&t.height>0,a=E.current;if(!a)return;let o=a.naturalWidth||0,s=a.naturalHeight||0;if(!o||!s)return;if(e.key===`Escape`&&i){e.preventDefault(),P({x:0,y:0,width:0,height:0});return}if((e.key===`Enter`||e.key===` `)&&i){e.preventDefault(),n?.(t);return}if(!i||![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key))return;e.preventDefault();let c=e.shiftKey?re:ne,l=e.key===`ArrowLeft`?-c:e.key===`ArrowRight`?c:0,u=e.key===`ArrowUp`?-c:e.key===`ArrowDown`?c:0;if(e.altKey){let e=t.width+l,n=t.height+u;if(r&&(l===0?(n=t.height+u,e=n*r):(e=t.width+l,n=e/r)),e=V(e,K,o-t.x),n=V(n,K,s-t.y),r){let i=n*r,a=e/r;i<=o-t.x?e=i:n=a}P({...t,width:e,height:n});return}P({...t,x:V(t.x+l,0,o-t.width),y:V(t.y+u,0,s-t.height)})},[r,ne,re,P,n]);(0,G.useEffect)(()=>(N(),window.addEventListener(`resize`,N),()=>window.removeEventListener(`resize`,N)),[e,N]);let _e=C===`resize`&&ie?Ne.find(e=>e.id===ie)?.cursor:void 0;return(0,W.jsxs)(`div`,{className:l,style:{...De,cursor:_e??(x&&C===`move`?`grabbing`:`crosshair`),...u},role:`group`,tabIndex:0,"aria-label":te,"aria-describedby":v?M:void 0,"aria-keyshortcuts":`ArrowUp ArrowDown ArrowLeft ArrowRight Shift+ArrowUp Shift+ArrowDown Shift+ArrowLeft Shift+ArrowRight Alt+ArrowUp Alt+ArrowDown Alt+ArrowLeft Alt+ArrowRight Enter Escape`,onKeyDown:ge,onMouseDown:pe,onMouseMove:me,onMouseUp:he,onMouseLeave:he,onTouchStart:pe,onTouchMove:me,onTouchEnd:he,onTouchCancel:he,children:[v?(0,W.jsx)(`span`,{id:M,style:Me,children:v}):null,(0,W.jsx)(`img`,{ref:E,src:e,alt:`Crop Source`,onLoad:N,className:d,style:{...Oe,...f},draggable:!1}),y.width>0&&y.height>0&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{className:p,style:{...ke,border:`${i}px dashed ${a}`,boxShadow:`0 0 0 9999px rgba(0, 0, 0, ${o})`,cursor:x?`grabbing`:`move`,left:y.x*T.scaleX,top:y.y*T.scaleY,width:y.width*T.scaleX,height:y.height*T.scaleY,...m},"aria-hidden":!0,children:s&&Ne.map(e=>(0,W.jsx)(`span`,{className:h,style:{...Ae,border:`2px solid ${a}`,cursor:e.cursor,...e.style,...g},"aria-hidden":!0},e.id))}),c&&(()=>{let e=y.x*T.scaleX,t=y.y*T.scaleY,n=y.width*T.scaleX,r=y.height*T.scaleY,i=t-40-8;return i<8&&(i=t+r+8),(0,W.jsx)(`div`,{className:ee,style:{...je,left:e,top:i,..._},onMouseDown:e=>e.stopPropagation(),onMouseUp:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),onTouchStart:e=>e.stopPropagation(),onTouchMove:e=>e.stopPropagation(),onTouchEnd:e=>e.stopPropagation(),onTouchCancel:e=>e.stopPropagation(),children:c({left:e,top:t,width:n,height:r,scaleX:T.scaleX,scaleY:T.scaleY})})})()]})]})}})),q,J,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{q=r(),J=t(n(),1),ye(),B(),Fe(),Ie={padding:`16px`,borderRadius:`8px`},Le={position:`relative`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #ddd`},Re={width:`100%`,height:`100%`,display:`block`},ze={position:`absolute`,display:`flex`,gap:`8px`,zIndex:1001,alignItems:`center`},Be={padding:`8px 12px`,backgroundColor:`#0066cc`,color:`#fff`,border:`none`,borderRadius:`4px`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`},Ve={padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`},He={position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(255, 255, 255, 0.75)`,color:`#333`,fontSize:`14px`,fontWeight:500},Ue={marginTop:`10px`,padding:`10px 12px`,borderRadius:`6px`,border:`1px solid #fca5a5`,background:`#fff1f2`},We={color:`#b91c1c`,margin:0,fontSize:`13px`,lineHeight:1.4},Ge=({src:e,onCropComplete:t,onError:n,aspectRatio:r,outputFormat:i=`blob`,maxWidth:a=600,maxHeight:o=400,showPreview:s=!0,allowReset:c=!0,allowResize:l=!0,className:u,style:d,containerClassName:f,containerStyle:p,previewCanvasClassName:m,previewCanvasStyle:h,processingOverlayClassName:g,processingOverlayStyle:ee,errorClassName:_,errorStyle:te,errorTextClassName:v,errorTextStyle:ne,applyButtonClassName:re,applyButtonStyle:y,applyButtonLabel:b=`Apply Crop`,applyButtonAriaLabel:x=`Apply selected crop`,resetButtonClassName:S,resetButtonStyle:C,resetButtonLabel:w=`Reset`,resetButtonAriaLabel:ie=`Reset crop selection`,buttonContainerClassName:ae,buttonContainerStyle:T,processingLabel:oe=`Processing...`,selectorLineWidth:E=2,selectorLineColor:D=`#0066cc`,selectorOverlayOpacity:se=.6,selectorClassName:O,selectorStyle:ce,selectorImageClassName:k,selectorImageStyle:A,selectorSelectionClassName:j,selectorSelectionStyle:le,selectorHandleClassName:ue,selectorHandleStyle:M,selectorControlsContainerClassName:N,selectorControlsContainerStyle:de,selectorAriaLabel:fe=`Image crop selection area`,selectorAriaDescription:pe=`Use arrow keys to move the crop. Hold Shift for larger steps. Hold Alt with arrows to resize. Press Enter to confirm the current selection. Press Escape to clear the selection.`,keyboardStep:me=1,keyboardStepLarge:he=10,buttonPosition:P=`top-left`,onApply:ge,onReset:_e})=>{let[F,ye]=(0,J.useState)(!1),[I,be]=(0,J.useState)(null),[xe,L]=(0,J.useState)(null),[Se,Ce]=(0,J.useState)(0),[R,B]=(0,J.useState)(null),V=I?.source===e?I.src:null,H=xe?.source===e?xe.crop:null,we=typeof File<`u`&&e instanceof File,U=typeof URL<`u`&&typeof URL.createObjectURL==`function`&&typeof URL.revokeObjectURL==`function`,Te=(0,J.useMemo)(()=>{if(typeof e==`string`)return e;if(we&&U)return URL.createObjectURL(e)},[U,we,e]);(0,J.useEffect)(()=>()=>{Te&&we&&U&&URL.revokeObjectURL(Te)},[U,Te,we]),(0,J.useEffect)(()=>()=>{U&&I?.src.startsWith(`blob:`)&&URL.revokeObjectURL(I.src)},[I,U]);let W=(0,J.useCallback)(t=>{L({source:e,crop:t}),be(null),B(null)},[e]),G=(0,J.useCallback)(t=>{L({source:e,crop:t}),B(null)},[e]),Ee=(0,J.useCallback)(async()=>{if(B(null),!H||H.width===0||H.height===0){let e=Error(`Please select a crop area`);B(e.message),n?.(e);return}if(!e){let e=Error(`No source image provided`);B(e.message),n?.(e);return}if(ge)try{if(await ge(H)===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));B(t.message),n?.(t);return}ye(!0);try{let n=ve(e).crop(H.x,H.y,H.width,H.height);if(i===`blob`){let r=await n.toBlob();if(r){if(s){if(!U)throw Error(`Blob preview requires URL.createObjectURL.`);be({source:e,src:URL.createObjectURL(r)})}t?.(r)}else throw Error(`Failed to generate cropped blob.`)}else{let r=await n.toDataURL();s&&be({source:e,src:r}),t?.(r)}}catch(e){let t=e instanceof Error?e:Error(String(e));B(t.message),n?.(t)}finally{ye(!1)}},[U,ge,t,n,i,H,s,e]),K=(0,J.useCallback)(async()=>{if(_e)try{if(await _e()===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));B(t.message),n?.(t);return}be(null),L(null),B(null),Ce(e=>e+1)},[_e,n]),De=e=>{B(e.message),n?.(e)},Oe=(0,J.useMemo)(()=>{let e={...ze};switch(P){case`top-left`:return{...e,top:`12px`,left:`12px`};case`top-right`:return{...e,top:`12px`,right:`12px`};case`top-center`:return{...e,top:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-left`:return{...e,bottom:`12px`,left:`12px`};case`bottom-center`:return{...e,bottom:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-right`:return{...e,bottom:`12px`,right:`12px`};default:return{...e,top:`12px`,left:`12px`}}},[P]);return(0,q.jsxs)(`div`,{className:u,style:{...Ie,...d},children:[(0,q.jsxs)(`div`,{className:f,style:{...Le,maxWidth:a,maxHeight:o,...p},children:[V?(0,q.jsx)(z,{source:V,className:m,style:{...Re,...h},onProcessError:De}):Te&&(0,q.jsx)(Pe,{src:Te,aspect:r,onCropChange:W,onCropComplete:G,lineWidth:E,lineColor:D,overlayOpacity:se,allowResize:l,className:O,style:ce,imageClassName:k,imageStyle:A,selectionClassName:j,selectionStyle:le,handleClassName:ue,handleStyle:M,overlayControlsContainerClassName:N,overlayControlsContainerStyle:de,ariaLabel:fe,ariaDescription:pe,keyboardStep:me,keyboardStepLarge:he,overlayControls:()=>(0,q.jsxs)(`div`,{className:ae,style:{...Oe,...T},children:[(0,q.jsx)(`button`,{type:`button`,onClick:Ee,disabled:F,className:re,"aria-label":x,style:{...Be,cursor:F?`not-allowed`:`pointer`,...y},children:F?oe:b}),c&&(0,q.jsx)(`button`,{type:`button`,onClick:K,disabled:F,className:S,"aria-label":ie,style:{...Ve,cursor:F?`not-allowed`:`pointer`,...C},children:w})]})},`${Te}-${Se}`),F&&(0,q.jsx)(`div`,{className:g,role:`status`,"aria-live":`polite`,style:{...He,...ee},children:oe}),c&&V&&!F&&(0,q.jsx)(`div`,{className:ae,style:{...Oe,...T},children:(0,q.jsx)(`button`,{type:`button`,onClick:K,className:S,"aria-label":ie,style:{...Ve,...C},children:w})})]}),R?(0,q.jsx)(`div`,{className:_,style:{...Ue,...te},children:(0,q.jsx)(`p`,{className:v,style:{...We,...ne},role:`alert`,children:R})}):null]})}})),qe=e((()=>{Se(),B(),Fe(),Ke()}));function Y({children:e,title:t,description:n}){return(0,Q.jsx)(`div`,{className:`lumina-story-shell`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-stack`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h2`,{children:t}),n&&(0,Q.jsx)(`p`,{children:n})]}),e]})})}function Je({children:e,href:t}){return(0,Q.jsx)(`a`,{className:`lumina-story-link`,href:t,target:`_blank`,rel:`noreferrer`,children:e})}function Ye({children:e}){return(0,Q.jsx)(`div`,{className:`lumina-story-result`,children:e})}function X({title:e,description:t,options:n={}}){return(0,Q.jsxs)(`div`,{className:`lumina-story-filter-card`,children:[(0,Q.jsx)(z,{className:`lumina-story-canvas lumina-story-filter-canvas`,source:$,resize:{width:260,height:170},...n}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h3`,{children:e}),(0,Q.jsx)(`p`,{children:t})]})]})}function Xe({brightness:e,contrast:t,gaussianBlur:n,sepia:r,sharpen:i}){let{result:a,loading:o,error:s}=xe({source:$,resize:(0,Z.useMemo)(()=>({width:360,height:240}),[]),brightness:e,contrast:t,gaussianBlur:n,sepia:r,operations:(0,Z.useCallback)(e=>{let t=e;return i&&(t=t.sharpen()),t.watermark(`Live hook`,{x:16,y:34,fontSize:22,color:`rgba(255,255,255,0.78)`})},[i]),deps:[e,t,n,r,i],outputType:`dataUrl`});return(0,Q.jsx)(Y,{title:`useLumina Live Controls`,description:`Story args update the hook dependency list so controls reprocess the same source through the React hook.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsxs)(Ye,{children:[o&&`Processing image...`,s&&s.message,!o&&!s&&`brightness ${e}, contrast ${t}, gaussian blur ${n}`]}),a&&(0,Q.jsx)(`img`,{className:`lumina-story-image-preview wide`,src:a,alt:`Live useLumina output`})]})})}function Ze({outputType:e}){let[t,n]=(0,Z.useState)(`Waiting for canvas render...`);return(0,Q.jsx)(Y,{title:`LuminaCanvas Output Types`,description:`getImage can receive the rendered canvas, a Data URL, a Blob, or raw ImageData.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsx)(z,{className:`lumina-story-canvas`,source:$,resize:{width:420,height:280},brightness:8,contrast:12,outputType:e,getImage:(0,Z.useCallback)(e=>{if(typeof e==`string`){n(`Data URL length: ${e.length}`);return}if(e instanceof Blob){n(`Blob: ${e.type||`image/png`}, ${e.size} bytes`);return}if(e instanceof ImageData){n(`ImageData: ${e.width} x ${e.height}, ${e.data.length} values`);return}n(`Canvas: ${e.width} x ${e.height}`)},[])}),(0,Q.jsx)(Ye,{children:t})]})})}function Qe(){let{result:e,loading:t,error:n,getImage:r}=xe({source:$,resize:(0,Z.useMemo)(()=>({width:260,height:180}),[]),brightness:8,contrast:12,operations:(0,Z.useCallback)(e=>e.sepia().watermark(`useLumina`,{x:16,y:34}),[]),outputType:`dataUrl`}),[i,a]=(0,Z.useState)(`Blob not requested yet`);return(0,Q.jsx)(Y,{title:`useLumina Hook`,description:`Processes an image in React state and can imperatively request another output type with getImage.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsxs)(`div`,{className:`lumina-story-row`,children:[(0,Q.jsx)(`button`,{className:`lumina-story-button`,onClick:async()=>{let e=await r(`blob`);a(e instanceof Blob?`${e.size} bytes`:`No blob`)},children:`Request Blob`}),(0,Q.jsxs)(Ye,{children:[t&&`Processing image...`,n&&n.message,!t&&!n&&i]})]}),e&&(0,Q.jsx)(`img`,{className:`lumina-story-image-preview`,src:e,alt:`Processed useLumina result`})]})})}function $e(){let{result:e,loading:t,error:n}=xe({source:nt,resize:(0,Z.useMemo)(()=>({width:80,height:44}),[]),operations:(0,Z.useCallback)(e=>e.ascii(),[])});return(0,Q.jsx)(Y,{title:`ASCII Output`,description:`The hook can return non-image output when the Lumina chain operation returns text.`,children:(0,Q.jsx)(`pre`,{className:`lumina-story-pre`,children:t?`Generating ASCII...`:n?.message||e})})}function et({aspect:e,lineColor:t,overlayOpacity:n,allowResize:r}){let[i,a]=(0,Z.useState)({x:0,y:0,width:0,height:0});return(0,Q.jsx)(Y,{title:`ImageAreaSelector`,description:`Drag on the image to create a crop region. Drag inside the region to move it, or drag a handle to resize it.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsx)(Pe,{src:$,aspect:e,lineColor:t,overlayOpacity:n,allowResize:r,onCropChange:a,onCropComplete:a,overlayControls:({width:e,height:t})=>(0,Q.jsxs)(`span`,{className:`lumina-story-chip`,children:[Math.round(e),` x `,Math.round(t)]})}),(0,Q.jsxs)(Ye,{children:[`x `,Math.round(i.x),`, y `,Math.round(i.y),`, w`,` `,Math.round(i.width),`, h `,Math.round(i.height)]})]})})}function tt({aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i,showPreview:a}){let[o,s]=(0,Z.useState)(`No crop applied yet`),[c,l]=(0,Z.useState)(null);return(0,Q.jsx)(Y,{title:`ImageCropper`,description:`Select an area, apply the crop, and inspect the returned Blob or Data URL. showPreview controls whether the cropper swaps to the applied preview internally.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,Q.jsx)(`div`,{className:`lumina-story-panel`,children:(0,Q.jsx)(Ge,{src:$,aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i,showPreview:a,maxWidth:520,maxHeight:360,applyButtonLabel:`Apply`,resetButtonLabel:`Reset`,applyButtonAriaLabel:`Apply selected Storybook crop`,resetButtonAriaLabel:`Reset Storybook crop selection`,selectorAriaLabel:`Storybook image crop selection`,selectorAriaDescription:`Use arrow keys to move the crop. Hold Shift for larger steps. Hold Alt with arrows to resize. Press Enter to confirm and Escape to clear.`,keyboardStep:2,keyboardStepLarge:18,onApply:e=>{if(e.width<24||e.height<24)return s(`Select an area at least 24 x 24 pixels.`),!1;s(`Applying crop...`)},onReset:()=>{l(e=>(e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),null)),s(`No crop applied yet`)},onCropComplete:e=>{if(typeof e==`string`){l(e),s(`Data URL length: ${e.length}`);return}let t=URL.createObjectURL(e);l(e=>(e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),t)),s(`Blob size: ${e.size} bytes`)},onError:e=>s(e.message)})}),(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsxs)(`div`,{className:`lumina-story-note`,children:[`Internal preview: `,a?`enabled`:`disabled`,`. Parent-managed preview is shown below when a crop completes.`]}),(0,Q.jsx)(Ye,{children:o}),c&&(0,Q.jsx)(`img`,{className:`lumina-story-image-preview`,src:c,alt:`Cropped output`})]})]})})}var Z,Q,$,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt;e((()=>{Z=t(n(),1),qe(),Q=r(),$=`./sample.png`,nt=`./lumina.png`,rt={title:`LuminaJS React/API Overview`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook coverage for the React exports in src/react: LuminaCanvas, useLumina, ImageAreaSelector, and ImageCropper. The stories also document the shared image editing options used by the component and hook APIs.`}}}},it={name:`React exports and functionality list`,render:()=>(0,Q.jsx)(Y,{title:`React Exports`,description:`The React entrypoint exposes component, hook, and crop-selection primitives over the LuminaJS chain API.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,Q.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,Q.jsx)(`h3`,{children:`LuminaCanvas`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`Renders a processed image to canvas.`}),(0,Q.jsx)(`li`,{children:`Supports declarative editing props.`}),(0,Q.jsx)(`li`,{children:`Accepts a custom chain callback through filter.`}),(0,Q.jsx)(`li`,{children:`Returns canvas, dataUrl, blob, or ImageData through getImage.`}),(0,Q.jsx)(`li`,{children:`Runs only in browser/client render paths.`})]})]}),(0,Q.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,Q.jsx)(`h3`,{children:`useLumina`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`Processes images from a hook.`}),(0,Q.jsx)(`li`,{children:`Provides result, loading, error, and getImage.`}),(0,Q.jsx)(`li`,{children:`Supports deps for caller-controlled reprocessing.`}),(0,Q.jsx)(`li`,{children:`Can request Blob output on demand for upload flows.`})]})]}),(0,Q.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,Q.jsx)(`h3`,{children:`ImageAreaSelector`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`Interactive selection rectangle over an image.`}),(0,Q.jsx)(`li`,{children:`Resizable handles, drag-to-move, and touch support with pinch-to-resize.`}),(0,Q.jsx)(`li`,{children:`Optional aspect-ratio lock.`}),(0,Q.jsx)(`li`,{children:`Selection styling and overlayControls render prop.`}),(0,Q.jsx)(`li`,{children:`Keyboard movement and resize controls for existing regions.`})]})]}),(0,Q.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,Q.jsx)(`h3`,{children:`ImageCropper`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`Complete crop workflow with apply and reset controls.`}),(0,Q.jsx)(`li`,{children:`Resizable crop selection powered by ImageAreaSelector (supports touch & pinch).`}),(0,Q.jsx)(`li`,{children:`Blob or Data URL output.`}),(0,Q.jsx)(`li`,{children:`Custom button classes, styles, positions, and callbacks.`}),(0,Q.jsx)(`li`,{children:`Explicit showPreview support for parent-managed previews.`})]})]})]})}),parameters:{docs:{source:{code:`import { LuminaCanvas, useLumina, ImageAreaSelector, ImageCropper } from '@gks101/luminajs/react';`}}}},at={name:`Positioning/browser client and CSS-only path`,render:()=>(0,Q.jsx)(Y,{title:`Browser-Only And CSS-Only Positioning`,description:`LuminaJS React APIs process images with browser Canvas and ImageData APIs. Use Lumina Image CSS when you only need CSS presentation.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsx)(`h3`,{children:`React image processing`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`Use inside client-only React views.`}),(0,Q.jsx)(`li`,{children:`Keep SSR render passes away from runtime image processing.`}),(0,Q.jsx)(`li`,{children:`Use Blob/Data URL outputs for upload or preview workflows.`})]})]}),(0,Q.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,Q.jsx)(`h3`,{children:`CSS-only image styling`}),(0,Q.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,Q.jsx)(`li`,{children:`No JavaScript pixel processing.`}),(0,Q.jsx)(`li`,{children:`Presentation-only filters, hover effects, overlays, and layout.`}),(0,Q.jsx)(`li`,{children:`Stable import: @gks101/luminajs/lumina-image.css.`})]}),(0,Q.jsxs)(`div`,{className:`lumina-story-row`,children:[(0,Q.jsx)(Je,{href:`https://gaurav101.github.io/LuminaJS/css-demo`,children:`CSS Demo`}),(0,Q.jsx)(Je,{href:`https://github.com/gaurav101/LuminaJS/blob/main/Lumina-IMAGE-CSS.md`,children:`CSS Guide`})]})]})]})}),parameters:{docs:{source:{code:`// React processing APIs are client/browser features.
import { LuminaCanvas, useLumina, ImageCropper } from '@gks101/luminajs/react';

// CSS-only presentation path:
import '@gks101/luminajs/lumina-image.css';`}}}},ot={name:`LuminaCanvas/basic canvas`,render:()=>(0,Q.jsx)(Y,{title:`LuminaCanvas Basic`,description:`Use source plus standard canvas attributes to render an image.`,children:(0,Q.jsx)(z,{className:`lumina-story-canvas`,source:$,width:520,height:360})}),parameters:{docs:{source:{code:`<LuminaCanvas source="/sample.png" width={520} height={360} />`}}}},st={name:`LuminaCanvas/adjustments and filters`,args:{brightness:12,contrast:18,grayscale:!1,sepia:!0,gaussianBlur:0,sharpen:!1,emboss:!1,edgeDetection:!1},render:e=>(0,Q.jsx)(Y,{title:`Adjustments And Filters`,description:`These props map to the shared ImageEditingOptions contract.`,children:(0,Q.jsx)(z,{className:`lumina-story-canvas`,source:$,width:520,height:360,brightness:e.brightness,contrast:e.contrast,grayscale:e.grayscale,sepia:e.sepia,gaussianBlur:e.gaussianBlur||void 0,sharpen:e.sharpen,emboss:e.emboss,edgeDetection:e.edgeDetection})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  brightness={12}
  contrast={18}
  sepia
  gaussianBlur={0}
/>`}}}},ct={name:`LuminaCanvas/filter gallery`,render:()=>(0,Q.jsx)(Y,{title:`Built-In Filter Gallery`,description:`Each card applies one built-in LuminaJS edit option through the React component API.`,children:(0,Q.jsxs)(`div`,{className:`lumina-story-filter-grid`,children:[(0,Q.jsx)(X,{title:`Original`,description:`Unmodified source image`}),(0,Q.jsx)(X,{title:`Grayscale`,description:`grayscale`,options:{grayscale:!0}}),(0,Q.jsx)(X,{title:`Sepia`,description:`sepia`,options:{sepia:!0}}),(0,Q.jsx)(X,{title:`Brightness`,description:`brightness={28}`,options:{brightness:28}}),(0,Q.jsx)(X,{title:`Contrast`,description:`contrast={34}`,options:{contrast:34}}),(0,Q.jsx)(X,{title:`Blur`,description:`blur={3}`,options:{blur:3}}),(0,Q.jsx)(X,{title:`Gaussian Blur`,description:`gaussianBlur={4}`,options:{gaussianBlur:4}}),(0,Q.jsx)(X,{title:`Background Blur`,description:`backgroundBlur focus area`,options:{backgroundBlur:{sigma:7,centerX:150,centerY:92,focusRadius:58,falloff:86}}}),(0,Q.jsx)(X,{title:`Sharpen`,description:`sharpen`,options:{sharpen:!0}}),(0,Q.jsx)(X,{title:`Emboss`,description:`emboss`,options:{emboss:!0}}),(0,Q.jsx)(X,{title:`Edge Detection`,description:`edgeDetection`,options:{edgeDetection:!0}}),(0,Q.jsx)(X,{title:`Watermark`,description:`watermark text overlay`,options:{watermark:{text:`LuminaJS`,options:{x:16,y:38,fontSize:26,color:`rgba(255,255,255,0.82)`}}}})]})}),parameters:{docs:{source:{code:`<LuminaCanvas source="/sample.png" grayscale />
<LuminaCanvas source="/sample.png" sepia />
<LuminaCanvas source="/sample.png" brightness={28} />
<LuminaCanvas source="/sample.png" contrast={34} />
<LuminaCanvas source="/sample.png" blur={3} />
<LuminaCanvas source="/sample.png" gaussianBlur={4} />
<LuminaCanvas source="/sample.png" backgroundBlur={{ sigma: 7, focusRadius: 58, falloff: 86 }} />
<LuminaCanvas source="/sample.png" sharpen />
<LuminaCanvas source="/sample.png" emboss />
<LuminaCanvas source="/sample.png" edgeDetection />
<LuminaCanvas source="/sample.png" watermark={{ text: 'LuminaJS' }} />`}}}},lt={name:`LuminaCanvas/resize crop watermark`,render:()=>(0,Q.jsx)(Y,{title:`Resize, Crop, And Watermark`,description:`Crop and resize are applied before the optional filter callback.`,children:(0,Q.jsx)(z,{className:`lumina-story-canvas`,source:$,resize:{width:420,height:280},crop:{x:80,y:60,width:520,height:360},watermark:{text:`LuminaJS`,options:{x:20,y:48,fontSize:32,color:`rgba(255,255,255,0.82)`}}})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  crop={{ x: 80, y: 60, width: 520, height: 360 }}
  resize={{ width: 420, height: 280 }}
  watermark={{
    text: 'LuminaJS',
    options: { x: 20, y: 48, fontSize: 32, color: 'rgba(255,255,255,0.82)' },
  }}
/>`}}}},ut={name:`LuminaCanvas/custom filter chain`,render:()=>(0,Q.jsx)(Y,{title:`Custom Chain`,description:`Use filter when you need the chainable Lumina API directly.`,children:(0,Q.jsx)(z,{className:`lumina-story-canvas`,source:$,width:520,height:360,filter:e=>e.grayscale().brightness(20).sharpen()})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  filter={(chain) => chain.grayscale().brightness(20).sharpen()}
/>`}}}},dt={name:`LuminaCanvas/getImage output types`,args:{outputType:`dataUrl`},argTypes:{outputType:{control:`select`,options:[`canvas`,`dataUrl`,`blob`,`imageData`]}},render:e=>(0,Q.jsx)(Ze,{outputType:e.outputType}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  outputType="dataUrl"
  getImage={(data) => console.log(data)}
/>`}}}},ft={name:`LuminaCanvas/error state`,render:()=>(0,Q.jsx)(Y,{title:`Error State`,description:`Invalid sources render an accessible error container and call onProcessError.`,children:(0,Q.jsx)(z,{source:`/missing-lumina-image.png`,errorClassName:`lumina-story-error`,errorRole:`status`,onProcessError:()=>void 0})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/missing-image.png"
  errorClassName="image-error"
  errorRole="status"
  onProcessError={(error) => report(error)}
/>`}}}},pt={name:`useLumina/data URL and getImage`,render:()=>(0,Q.jsx)(Qe,{}),parameters:{docs:{source:{code:`const { result, loading, error, getImage } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 260, height: 180 },
  brightness: 8,
  contrast: 12,
  operations: (chain) => chain.sepia().watermark('useLumina', { x: 16, y: 34 }),
  outputType: 'dataUrl',
});

const blob = await getImage('blob');`}}}},mt={name:`useLumina/live filter controls`,args:{brightness:12,contrast:16,gaussianBlur:0,sepia:!1,sharpen:!1},render:e=>(0,Q.jsx)(Xe,{...e}),parameters:{docs:{source:{code:`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 360, height: 240 },
  brightness,
  contrast,
  gaussianBlur,
  sepia,
  operations: (chain) => chain.watermark('Live hook'),
  deps: [brightness, contrast, gaussianBlur, sepia],
  outputType: 'dataUrl',
});`}}}},ht={name:`useLumina/ASCII output`,render:()=>(0,Q.jsx)($e,{}),parameters:{docs:{source:{code:`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 80, height: 44 },
  operations: (chain) => chain.ascii(),
});`}}}},gt={name:`ImageAreaSelector/freeform selection`,args:{lineColor:`#1c64d1`,overlayOpacity:.55,allowResize:!0},render:e=>(0,Q.jsx)(et,{lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
  allowResize
  onCropChange={setCrop}
  onCropComplete={setCrop}
/>`}}}},_t={name:`ImageAreaSelector/aspect locked`,args:{aspect:16/9,lineColor:`#d14d1c`,overlayOpacity:.62,allowResize:!0},render:e=>(0,Q.jsx)(et,{aspect:e.aspect,lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
  allowResize
  overlayControls={({ width, height }) => (
    <span>{Math.round(width)} x {Math.round(height)}</span>
  )}
  onCropChange={setCrop}
/>`}}}},vt={name:`ImageCropper/blob output`,args:{aspectRatio:1,outputFormat:`blob`,buttonPosition:`top-left`,allowReset:!0,allowResize:!0,showPreview:!1},render:e=>(0,Q.jsx)(tt,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize,showPreview:e.showPreview}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  showPreview={false}
  allowResize
  onApply={(crop) => crop.width >= 24}
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>`}}}},yt={name:`ImageCropper/data URL output and custom controls`,args:{aspectRatio:16/9,outputFormat:`dataUrl`,buttonPosition:`bottom-left`,allowReset:!0,allowResize:!0,showPreview:!0},render:e=>(0,Q.jsx)(tt,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize,showPreview:e.showPreview}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  showPreview
  buttonPosition="bottom-right"
  allowResize
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>`}}}},it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
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
            <li>Runs only in browser/client render paths.</li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>useLumina</h3>
          <ul className="lumina-story-list">
            <li>Processes images from a hook.</li>
            <li>Provides result, loading, error, and getImage.</li>
            <li>Supports deps for caller-controlled reprocessing.</li>
            <li>Can request Blob output on demand for upload flows.</li>
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
            <li>Keyboard movement and resize controls for existing regions.</li>
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
            <li>Explicit showPreview support for parent-managed previews.</li>
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
}`,...it.parameters?.docs?.source}}},at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  name: 'Positioning/browser client and CSS-only path',
  render: () => <StoryShell title="Browser-Only And CSS-Only Positioning" description="LuminaJS React APIs process images with browser Canvas and ImageData APIs. Use Lumina Image CSS when you only need CSS presentation.">
      <div className="lumina-story-grid">
        <div className="lumina-story-panel lumina-story-stack">
          <h3>React image processing</h3>
          <ul className="lumina-story-list">
            <li>Use inside client-only React views.</li>
            <li>Keep SSR render passes away from runtime image processing.</li>
            <li>Use Blob/Data URL outputs for upload or preview workflows.</li>
          </ul>
        </div>
        <div className="lumina-story-panel lumina-story-stack">
          <h3>CSS-only image styling</h3>
          <ul className="lumina-story-list">
            <li>No JavaScript pixel processing.</li>
            <li>
              Presentation-only filters, hover effects, overlays, and layout.
            </li>
            <li>Stable import: @gks101/luminajs/lumina-image.css.</li>
          </ul>
          <div className="lumina-story-row">
            <StoryLink href="https://gaurav101.github.io/LuminaJS/css-demo">
              CSS Demo
            </StoryLink>
            <StoryLink href="https://github.com/gaurav101/LuminaJS/blob/main/Lumina-IMAGE-CSS.md">
              CSS Guide
            </StoryLink>
          </div>
        </div>
      </div>
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`// React processing APIs are client/browser features.
import { LuminaCanvas, useLumina, ImageCropper } from '@gks101/luminajs/react';

// CSS-only presentation path:
import '@gks101/luminajs/lumina-image.css';\`
      }
    }
  }
}`,...at.parameters?.docs?.source}}},ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
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
}`,...ot.parameters?.docs?.source}}},st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
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
}`,...st.parameters?.docs?.source}}},ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/filter gallery',
  render: () => <StoryShell title="Built-In Filter Gallery" description="Each card applies one built-in LuminaJS edit option through the React component API.">
      <div className="lumina-story-filter-grid">
        <FilterCard title="Original" description="Unmodified source image" />
        <FilterCard title="Grayscale" description="grayscale" options={{
        grayscale: true
      }} />
        <FilterCard title="Sepia" description="sepia" options={{
        sepia: true
      }} />
        <FilterCard title="Brightness" description="brightness={28}" options={{
        brightness: 28
      }} />
        <FilterCard title="Contrast" description="contrast={34}" options={{
        contrast: 34
      }} />
        <FilterCard title="Blur" description="blur={3}" options={{
        blur: 3
      }} />
        <FilterCard title="Gaussian Blur" description="gaussianBlur={4}" options={{
        gaussianBlur: 4
      }} />
        <FilterCard title="Background Blur" description="backgroundBlur focus area" options={{
        backgroundBlur: {
          sigma: 7,
          centerX: 150,
          centerY: 92,
          focusRadius: 58,
          falloff: 86
        }
      }} />
        <FilterCard title="Sharpen" description="sharpen" options={{
        sharpen: true
      }} />
        <FilterCard title="Emboss" description="emboss" options={{
        emboss: true
      }} />
        <FilterCard title="Edge Detection" description="edgeDetection" options={{
        edgeDetection: true
      }} />
        <FilterCard title="Watermark" description="watermark text overlay" options={{
        watermark: {
          text: 'LuminaJS',
          options: {
            x: 16,
            y: 38,
            fontSize: 26,
            color: 'rgba(255,255,255,0.82)'
          }
        }
      }} />
      </div>
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas source="/sample.png" grayscale />
<LuminaCanvas source="/sample.png" sepia />
<LuminaCanvas source="/sample.png" brightness={28} />
<LuminaCanvas source="/sample.png" contrast={34} />
<LuminaCanvas source="/sample.png" blur={3} />
<LuminaCanvas source="/sample.png" gaussianBlur={4} />
<LuminaCanvas source="/sample.png" backgroundBlur={{ sigma: 7, focusRadius: 58, falloff: 86 }} />
<LuminaCanvas source="/sample.png" sharpen />
<LuminaCanvas source="/sample.png" emboss />
<LuminaCanvas source="/sample.png" edgeDetection />
<LuminaCanvas source="/sample.png" watermark={{ text: 'LuminaJS' }} />\`
      }
    }
  }
}`,...ct.parameters?.docs?.source}}},lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
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
}`,...lt.parameters?.docs?.source}}},ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
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
}`,...ut.parameters?.docs?.source}}},dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/getImage output types',
  args: {
    outputType: 'dataUrl'
  },
  argTypes: {
    outputType: {
      control: 'select',
      options: ['canvas', 'dataUrl', 'blob', 'imageData']
    }
  },
  render: args => <LuminaCanvasOutputDemo outputType={args.outputType} />,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas
  source="/sample.png"
  outputType="dataUrl"
  getImage={(data) => console.log(data)}
/>\`
      }
    }
  }
}`,...dt.parameters?.docs?.source}}},ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  name: 'LuminaCanvas/error state',
  render: () => <StoryShell title="Error State" description="Invalid sources render an accessible error container and call onProcessError.">
      <LuminaCanvas source="/missing-lumina-image.png" errorClassName="lumina-story-error" errorRole="status" onProcessError={() => undefined} />
    </StoryShell>,
  parameters: {
    docs: {
      source: {
        code: \`<LuminaCanvas
  source="/missing-image.png"
  errorClassName="image-error"
  errorRole="status"
  onProcessError={(error) => report(error)}
/>\`
      }
    }
  }
}`,...ft.parameters?.docs?.source}}},pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
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
}`,...pt.parameters?.docs?.source}}},mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
  name: 'useLumina/live filter controls',
  args: {
    brightness: 12,
    contrast: 16,
    gaussianBlur: 0,
    sepia: false,
    sharpen: false
  },
  render: args => <UseLuminaLiveDemo {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 360, height: 240 },
  brightness,
  contrast,
  gaussianBlur,
  sepia,
  operations: (chain) => chain.watermark('Live hook'),
  deps: [brightness, contrast, gaussianBlur, sepia],
  outputType: 'dataUrl',
});\`
      }
    }
  }
}`,...mt.parameters?.docs?.source}}},ht.parameters={...ht.parameters,docs:{...ht.parameters?.docs,source:{originalSource:`{
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
}`,...ht.parameters?.docs?.source}}},gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
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
}`,...gt.parameters?.docs?.source}}},_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
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
}`,..._t.parameters?.docs?.source}}},vt.parameters={...vt.parameters,docs:{...vt.parameters?.docs,source:{originalSource:`{
  name: 'ImageCropper/blob output',
  args: {
    aspectRatio: 1,
    outputFormat: 'blob',
    buttonPosition: 'top-left',
    allowReset: true,
    allowResize: true,
    showPreview: false
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} allowResize={args.allowResize} showPreview={args.showPreview} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  showPreview={false}
  allowResize
  onApply={(crop) => crop.width >= 24}
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>\`
      }
    }
  }
}`,...vt.parameters?.docs?.source}}},yt.parameters={...yt.parameters,docs:{...yt.parameters?.docs,source:{originalSource:`{
  name: 'ImageCropper/data URL output and custom controls',
  args: {
    aspectRatio: 16 / 9,
    outputFormat: 'dataUrl',
    buttonPosition: 'bottom-left',
    allowReset: true,
    allowResize: true,
    showPreview: true
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} allowResize={args.allowResize} showPreview={args.showPreview} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  showPreview
  buttonPosition="bottom-right"
  allowResize
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>\`
      }
    }
  }
}`,...yt.parameters?.docs?.source}}},bt=[`ReactExports`,`ClientOnlyAndCssOnlyPositioning`,`LuminaCanvasBasic`,`LuminaCanvasAdjustments`,`LuminaCanvasFilterGallery`,`LuminaCanvasTransformations`,`LuminaCanvasCustomChain`,`LuminaCanvasOutputTypes`,`LuminaCanvasErrorState`,`UseLuminaDataUrl`,`UseLuminaLiveControls`,`UseLuminaAscii`,`ImageAreaSelectorFreeform`,`ImageAreaSelectorAspectLocked`,`ImageCropperBlob`,`ImageCropperDataUrl`]}))();export{at as ClientOnlyAndCssOnlyPositioning,_t as ImageAreaSelectorAspectLocked,gt as ImageAreaSelectorFreeform,vt as ImageCropperBlob,yt as ImageCropperDataUrl,st as LuminaCanvasAdjustments,ot as LuminaCanvasBasic,ut as LuminaCanvasCustomChain,ft as LuminaCanvasErrorState,ct as LuminaCanvasFilterGallery,dt as LuminaCanvasOutputTypes,lt as LuminaCanvasTransformations,it as ReactExports,ht as UseLuminaAscii,pt as UseLuminaDataUrl,mt as UseLuminaLiveControls,bt as __namedExportsOrder,rt as default};