import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-j_H1BQi0.js";import{t as r}from"./jsx-runtime-Bqg2l_Gi.js";function i(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`Anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LuminaJS [loader]: Failed to load image from URL — "${e}"`)),r.src=e})}function a(e){if(!e.type.startsWith(`image/`))return Promise.reject(TypeError(`LuminaJS [loader]: Expected an image File, but received MIME type "${e.type}".`));let t=URL.createObjectURL(e);return new Promise((n,r)=>{let i=new Image;i.onload=()=>{URL.revokeObjectURL(t),n(i)},i.onerror=()=>{URL.revokeObjectURL(t),r(Error(`LuminaJS [loader]: Failed to load image from File — "${e.name}".`))},i.src=t})}async function o(e){return typeof e==`string`?i(e):e instanceof File?a(e):Promise.reject(TypeError(`LuminaJS [loader]: Invalid source type "${typeof e}". Expected a URL string or a File object.`))}var s=t((()=>{}));function c(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`LuminaJS [canvas]: Failed to create offscreen canvas context.`);return{canvas:n,ctx:r}}function l(e){let t=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(t===0||n===0)throw Error(`LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions (${t}x${n}). Ensure the image is fully loaded before calling getPixelData.`);let{canvas:r,ctx:i}=c(t,n);i.drawImage(e,0,0,t,n);try{return{imageData:i.getImageData(0,0,t,n),canvas:r}}catch(e){let t=e instanceof Error?e.message:String(e);throw Error(`LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a cross-origin image. Ensure the server sends CORS headers and the image is loaded with crossOrigin="Anonymous". Original error: ${t}`)}}function u(e,t){let n=e.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. The canvas may already have a context of a different type (e.g. "webgl").`);n.putImageData(t,0,0)}function d(e,t=`image/png`,n=.92){return new Promise((r,i)=>{e.toBlob(e=>{e?r(e):i(Error(`LuminaJS [canvas]: canvas.toBlob returned null. The canvas may be empty or the MIME type "${t}" is unsupported.`))},t,n)})}function f(e,t,n){if(t<=0||n<=0)throw Error(`LuminaJS [canvas]: Resize dimensions must be positive (${t}x${n}).`);let{canvas:r,ctx:i}=c(t,n);return i.drawImage(e,0,0,t,n),r}function p(e,t,n,r,i){if(r<=0||i<=0)throw Error(`LuminaJS [canvas]: Crop dimensions must be positive (${r}x${i}).`);let{canvas:a,ctx:o}=c(r,i);return o.drawImage(e,t,n,r,i,0,0,r,i),a}var m=t((()=>{}));function h(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2],a=g*t+_*r+v*i;n[e]=a,n[e+1]=a,n[e+2]=a}return t}var g,_,v,y=t((()=>{g=.299,_=.587,v=.114}));function b(e,t,n){return Math.min(Math.max(e,t),n)}var x=t((()=>{}));function S(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length;for(let e=0;e<i;e+=4)r[e]=b(r[e]+t,0,255),r[e+1]=b(r[e+1]+t,0,255),r[e+2]=b(r[e+2]+t,0,255);return n}var C=t((()=>{x()}));function w(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length,a=259*(t+255)/(255*(259-t));for(let e=0;e<i;e+=4)r[e]=b(a*(r[e]-128)+128,0,255),r[e+1]=b(a*(r[e+1]-128)+128,0,255),r[e+2]=b(a*(r[e+2]-128)+128,0,255);return n}var T=t((()=>{x()}));function E(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2];n[e]=b(t*.393+r*.769+i*.189,0,255),n[e+1]=b(t*.349+r*.686+i*.168,0,255),n[e+2]=b(t*.272+r*.534+i*.131,0,255)}return t}var D=t((()=>{x()}));function O(e,t={}){let{charSet:n=k,invert:r=!1}=t,i=r?n.split(``).reverse().join(``):n,a=e.data,o=e.width,s=e.height,c=``;for(let e=0;e<s;e++){for(let t=0;t<o;t++){let n=(e*o+t)*4,r=a[n],s=a[n+1],l=a[n+2],u=.299*r+.587*s+.114*l,d=Math.floor(u/255*(i.length-1));c+=i[d]}c+=`
`}return c}var k,ee=t((()=>{k=`@%#*+=-:. `}));function te(e,t=1){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t=Math.max(0,Math.floor(t)),t===0)return new ImageData(new Uint8ClampedArray(i),n,r);for(let e=0;e<r;e++)for(let r=0;r<n;r++){let a=0,s=0,c=0,l=0,u=0;for(let o=-t;o<=t;o++){let t=r+o;if(t>=0&&t<n){let r=(e*n+t)*4;a+=i[r],s+=i[r+1],c+=i[r+2],l+=i[r+3],u++}}let d=(e*n+r)*4;o[d]=a/u,o[d+1]=s/u,o[d+2]=c/u,o[d+3]=l/u}for(let e=0;e<n;e++)for(let i=0;i<r;i++){let s=0,c=0,l=0,u=0,d=0;for(let a=-t;a<=t;a++){let t=i+a;if(t>=0&&t<r){let r=(t*n+e)*4;s+=o[r],c+=o[r+1],l+=o[r+2],u+=o[r+3],d++}}let f=(i*n+e)*4;a[f]=s/d,a[f+1]=c/d,a[f+2]=l/d,a[f+3]=u/d}return new ImageData(a,n,r)}var A=t((()=>{}));function ne(e,t=2){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t<=0)return new ImageData(new Uint8ClampedArray(i),n,r);let s=Math.ceil(t*3),c=s*2+1,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){let n=e-s;l[e]=Math.exp(-(n*n)/(2*t*t)),u+=l[e]}for(let e=0;e<c;e++)l[e]/=u;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=0,a=0,u=0,d=0;for(let o=0;o<c;o++){let c=t+(o-s),f=Math.max(0,Math.min(n-1,c)),p=(e*n+f)*4,m=l[o];r+=i[p]*m,a+=i[p+1]*m,u+=i[p+2]*m,d+=i[p+3]*m}let f=(e*n+t)*4;o[f]=r,o[f+1]=a,o[f+2]=u,o[f+3]=d}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let i=0,u=0,d=0,f=0;for(let a=0;a<c;a++){let c=t+(a-s),p=(Math.max(0,Math.min(r-1,c))*n+e)*4,m=l[a];i+=o[p]*m,u+=o[p+1]*m,d+=o[p+2]*m,f+=o[p+3]*m}let p=(t*n+e)*4;a[p]=i,a[p+1]=u,a[p+2]=d,a[p+3]=f}return new ImageData(a,n,r)}var re=t((()=>{}));function ie(e,t,n={}){let{x:r=10,y:i=10,fontSize:a=24,fontFace:o=`Arial`,font:s=`${a}px ${o}`,color:c=`rgba(255, 255, 255, 0.5)`,align:l=`left`,baseline:u=`top`}=n,d=document.createElement(`canvas`);d.width=e.width,d.height=e.height;let f=d.getContext(`2d`);if(!f)throw Error(`LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.`);return f.putImageData(e,0,0),f.font=s,f.fillStyle=c,f.textAlign=l,f.textBaseline=u,f.fillText(t,r,i),f.getImageData(0,0,d.width,d.height)}var ae=t((()=>{}));function oe(e,t={}){let{width:n,height:r}=e,i=Math.min(n,r),{sigma:a=5,centerX:o=n/2,centerY:s=r/2,focusRadius:c=i*.2,falloff:l=i*.4}=t,u=ne(e,a),d=e.data,f=u.data,p=new Uint8ClampedArray(d.length);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-o,i=e-s,a=Math.sqrt(r*r+i*i),u=0;a>c&&(u=Math.min(1,(a-c)/l));let m=(e*n+t)*4,h=1-u;p[m]=d[m]*h+f[m]*u,p[m+1]=d[m+1]*h+f[m+1]*u,p[m+2]=d[m+2]*h+f[m+2]*u,p[m+3]=d[m+3]}return new ImageData(p,n,r)}var se=t((()=>{re()})),ce,j=t((()=>{ce=(e,t,n,r)=>{let i=new Uint8ClampedArray(e);for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=0,s=0,c=0;for(let e=0;e<3;e++)for(let l=0;l<3;l++){let u=n+l-1,d=((a+e-1)*t+u)*4,f=r[e*3+l];o+=i[d]*f,s+=i[d+1]*f,c+=i[d+2]*f}let l=(a*t+n)*4;e[l]=Math.min(255,Math.max(0,o)),e[l+1]=Math.min(255,Math.max(0,s)),e[l+2]=Math.min(255,Math.max(0,c))}return e}})),le,ue=t((()=>{j(),le=e=>(ce(e.data,e.width,e.height,[0,-1,0,-1,5,-1,0,-1,0]),e)})),de,fe=t((()=>{j(),de=e=>(ce(e.data,e.width,e.height,[-2,-1,0,-1,1,1,0,1,2]),e)})),pe,me=t((()=>{j(),pe=e=>(ce(e.data,e.width,e.height,[-1,-1,-1,-1,8,-1,-1,-1,-1]),e)})),he=t((()=>{y(),C(),T(),D(),ee(),A(),re(),ae(),se(),j(),ue(),fe(),me()})),ge,_e=t((()=>{he(),s(),m(),ge=class{constructor(e){this.source=e,this.operations=[]}_addOp(e,...t){return this.operations.push({fn:e,args:t}),this}grayscale(){return this._addOp(h)}brightness(e){return this._addOp(S,e)}contrast(e){return this._addOp(w,e)}sepia(){return this._addOp(E)}ascii(e={}){return this._addOp(O,e)}blur(e){return this._addOp(te,e)}gaussianBlur(e){return this._addOp(ne,e)}watermark(e,t){return this._addOp(ie,e,t)}backgroundBlur(e){return this._addOp(oe,e)}applyConvolution(e,t,n){return this._addOp(ce,e,t,n)}sharpen(){return this._addOp(le)}emboss(){return this._addOp(de)}edgeDetection(){return this._addOp(pe)}resize(e,t){return this._addOp((e,t,n)=>{let r=document.createElement(`canvas`);r.width=e.width,r.height=e.height;let i=r.getContext(`2d`);if(!i)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);i.putImageData(e,0,0);let a=f(r,t,n).getContext(`2d`);if(!a)throw Error(`LuminaJS [chain]: Failed to get resized canvas context.`);return a.getImageData(0,0,t,n)},e,t)}crop(e,t,n,r){return this._addOp((e,t,n,r,i)=>{let a=document.createElement(`canvas`);a.width=e.width,a.height=e.height;let o=a.getContext(`2d`);if(!o)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);o.putImageData(e,0,0);let s=p(a,t,n,r,i).getContext(`2d`);if(!s)throw Error(`LuminaJS [chain]: Failed to get cropped canvas context.`);return s.getImageData(0,0,r,i)},e,t,n,r)}async _resolveSource(){let e=this.source;if((typeof e==`string`||e instanceof File)&&(e=await o(e)),e instanceof HTMLImageElement)return l(e).imageData;if(e instanceof HTMLCanvasElement){let t=e.getContext(`2d`);if(!t)throw Error(`LuminaJS [chain]: Failed to get canvas context from source.`);return t.getImageData(0,0,e.width,e.height)}if(e instanceof ImageData)return e;throw Error(`LuminaJS [chain]: Unsupported source type.`)}async render(){let e=await this._resolveSource();for(let t of this.operations)e=await t.fn(e,...t.args);return e}async toCanvas(e){let t=await this.render();return e.width=t.width,e.height=t.height,u(e,t),e}async toBlob(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),d(r,e,t)}async toDataURL(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),r.toDataURL(e,t)}async toHtmlElement(e){let t=typeof e==`string`?document.getElementById(e):e;if(!t)throw Error(`LuminaJS [chain]: Target element not found: "${e}"`);if(t instanceof HTMLImageElement)t.src=await this.toDataURL();else if(t instanceof HTMLCanvasElement)await this.toCanvas(t);else throw Error(`LuminaJS [chain]: toHtmlElement only supports <img> and <canvas> elements.`);return t}}}));function ve(e){return new ge(e)}var ye=t((()=>{s(),m(),y(),C(),T(),D(),ee(),A(),re(),ae(),se(),j(),ue(),fe(),me(),_e(),x()}));function be(e,t){let n=e;return t.grayscale&&(n=n.grayscale()),t.brightness!==void 0&&(n=n.brightness(t.brightness)),t.contrast!==void 0&&(n=n.contrast(t.contrast)),t.sepia&&(n=n.sepia()),t.ascii&&(n=n.ascii(typeof t.ascii==`boolean`?{}:t.ascii)),t.blur!==void 0&&(n=n.blur(t.blur)),t.gaussianBlur!==void 0&&(n=n.gaussianBlur(t.gaussianBlur)),t.watermark&&(n=n.watermark(t.watermark.text,t.watermark.options)),t.backgroundBlur&&(n=n.backgroundBlur(t.backgroundBlur)),t.sharpen&&(n=n.sharpen()),t.emboss&&(n=n.emboss()),t.edgeDetection&&(n=n.edgeDetection()),t.resize&&(n=n.resize(t.resize.width,t.resize.height)),t.crop&&(n=n.crop(t.crop.x,t.crop.y,t.crop.width,t.crop.height)),n}var xe=t((()=>{}));function Se({source:e,operations:t,deps:n=[],outputType:r=`imageData`,...i}){let[a,o]=(0,M.useState)(null),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)(null);return(0,M.useEffect)(()=>{let n=!0;return(async()=>{if(!e){o(null);return}c(!0),u(null);try{let a=ve(e);a=be(a,i),typeof t==`function`&&(a=t(a));let s;switch(r){case`dataUrl`:s=await a.toDataURL();break;case`blob`:s=await a.toBlob();break;default:s=await a.render()}n&&o(s)}catch(e){n&&u(e instanceof Error?e:Error(String(e)))}finally{n&&c(!1)}})(),()=>{n=!1}},[e,r,t,JSON.stringify(i),...n]),{result:a,loading:s,error:l,getImage:async n=>{if(!e)return null;try{let a=ve(e);a=be(a,i),typeof t==`function`&&(a=t(a));let o;switch(n||r){case`dataUrl`:o=await a.toDataURL();break;case`blob`:o=await a.toBlob();break;default:o=await a.render()}return o}catch(e){return u(e instanceof Error?e:Error(String(e))),null}}}}var M,Ce=t((()=>{M=e(n(),1),ye(),xe()})),we,N,P,Te=t((()=>{we=r(),N=e(n(),1),ye(),xe(),P=(0,N.forwardRef)(function({source:e,filter:t,onProcessError:n,onLoad:r,getImage:i,outputType:a=`canvas`,grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y,...b},x){let S=(0,N.useMemo)(()=>({grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y}),[o,s,c,l,u,d,f,p,m,h,g,_,v,y]),C=(0,N.useRef)(null),[w,T]=(0,N.useState)(null),E=(0,N.useCallback)(e=>{C.current=e,typeof x==`function`?x(e):x&&(x.current=e)},[x]);return(0,N.useEffect)(()=>{if(!e||!C.current)return;let o=!0;return(async()=>{try{let n=ve(e);if(n=be(n,S),typeof t==`function`&&(n=t(n)),C.current&&await n.toCanvas(C.current),o&&r&&r(),o&&i&&C.current)if(a===`dataUrl`)i(C.current.toDataURL());else if(a===`blob`)C.current.toBlob(e=>{e&&i(e)});else if(a===`imageData`){let e=C.current.getContext(`2d`);e&&i(e.getImageData(0,0,C.current.width,C.current.height))}else i(C.current)}catch(e){let t=e instanceof Error?e:Error(String(e));o&&(T(t),n&&n(t))}})(),()=>{o=!1}},[e,t,n,r,i,a,S]),w?(0,we.jsx)(`div`,{className:`lumina-error`,children:w.message}):(0,we.jsx)(`canvas`,{ref:E,...b})})}));function Ee(e,t,n){return Math.max(t,Math.min(e,n))}function De(e,t,n,r){return{x:Math.min(e,n),y:Math.min(t,r),width:Math.abs(n-e),height:Math.abs(r-t)}}function Oe(e,t,n){let r=Ee(e.x,0,t-e.width),i=Ee(e.y,0,n-e.height);return{...e,x:r,y:i}}function ke(e,t,n,r){let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=i+t.width/2,l=o+t.height/2;if(n===`e`||n===`w`){let t=n===`e`?i:a,o=n===`e`?e.imageWidth-t:t,s=Ee(Math.abs(e.x-t),Me,Math.min(o,e.imageHeight*r)),c=s/r;return Oe({x:n===`e`?t:t-s,y:l-c/2,width:s,height:c},e.imageWidth,e.imageHeight)}if(n===`n`||n===`s`){let t=n===`s`?o:s,i=n===`s`?e.imageHeight-t:t,a=Ee(Math.abs(e.y-t),Me,Math.min(i,e.imageWidth/r)),l=a*r;return Oe({x:c-l/2,y:n===`s`?t:t-a,width:l,height:a},e.imageWidth,e.imageHeight)}let u=n.includes(`e`)?i:a,d=n.includes(`s`)?o:s,f=e.x-u,p=e.y-d,m=f>=0?1:-1,h=p>=0?1:-1,g=Math.max(Math.abs(f),Math.abs(p)*r,Me),_=g/r,v=m>0?e.imageWidth-u:u,y=h>0?e.imageHeight-d:d;return g=Math.min(g,v,y*r),_=g/r,De(u,d,u+m*g,d+h*_)}function Ae(e,t,n,r){if(r)return ke(e,t,n,r);let i=t.x,a=t.x+t.width,o=t.y,s=t.y+t.height,c=n.includes(`w`)?e.x:i,l=n.includes(`e`)?e.x:a;return De(c,n.includes(`n`)?e.y:o,l,n.includes(`s`)?e.y:s)}var F,I,je,Me,Ne,Pe,Fe=t((()=>{F=r(),I=e(n(),1),je=12,Me=1,Ne=[{id:`nw`,cursor:`nwse-resize`,style:{left:`0%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`n`,cursor:`ns-resize`,style:{left:`50%`,top:`0%`,transform:`translate(-50%, -50%)`}},{id:`ne`,cursor:`nesw-resize`,style:{right:`0%`,top:`0%`,transform:`translate(50%, -50%)`}},{id:`e`,cursor:`ew-resize`,style:{right:`0%`,top:`50%`,transform:`translate(50%, -50%)`}},{id:`se`,cursor:`nwse-resize`,style:{right:`0%`,bottom:`0%`,transform:`translate(50%, 50%)`}},{id:`s`,cursor:`ns-resize`,style:{left:`50%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`sw`,cursor:`nesw-resize`,style:{left:`0%`,bottom:`0%`,transform:`translate(-50%, 50%)`}},{id:`w`,cursor:`ew-resize`,style:{left:`0%`,top:`50%`,transform:`translate(-50%, -50%)`}}],Pe=({src:e,onCropChange:t,onCropComplete:n,aspect:r,lineWidth:i=2,lineColor:a=`#fff`,overlayOpacity:o=.5,allowResize:s=!0,overlayControls:c})=>{let[l,u]=(0,I.useState)({x:0,y:0,width:0,height:0}),[d,f]=(0,I.useState)(!1),[p,m]=(0,I.useState)(`draw`),[h,g]=(0,I.useState)(null),[_,v]=(0,I.useState)({scaleX:1,scaleY:1}),y=(0,I.useRef)(null),b=(0,I.useRef)({x:0,y:0}),x=(0,I.useRef)({x:0,y:0}),S=(0,I.useRef)(l),C=(0,I.useRef)(!1),w=(0,I.useRef)(`draw`),T=(0,I.useRef)(null),E=(0,I.useRef)(null),D=(0,I.useCallback)(()=>{let e=y.current;if(!e||e.naturalWidth===0||e.naturalHeight===0)return;let t=e.getBoundingClientRect();t.width===0||t.height===0||v({scaleX:t.width/e.naturalWidth,scaleY:t.height/e.naturalHeight})},[]),O=(0,I.useCallback)(e=>{let t=y.current,n=t?.getBoundingClientRect();if(!n||!t)return null;let r=t.naturalWidth/n.width,i=t.naturalHeight/n.height;return{x:Math.max(0,Math.min((e.clientX-n.left)*r,t.naturalWidth)),y:Math.max(0,Math.min((e.clientY-n.top)*i,t.naturalHeight)),imageWidth:t.naturalWidth,imageHeight:t.naturalHeight}},[]),k=(0,I.useCallback)(e=>{if(!s)return null;let t=S.current;if(t.width<=0||t.height<=0)return null;let n=je/Math.max(_.scaleX,.001),r=je/Math.max(_.scaleY,.001),i=t.x,a=t.x+t.width,o=t.y,c=t.y+t.height,l=i+t.width/2,u=o+t.height/2,d=t=>Math.abs(e.x-t)<=n,f=t=>Math.abs(e.y-t)<=r;return d(i)&&f(o)?`nw`:d(a)&&f(o)?`ne`:d(a)&&f(c)?`se`:d(i)&&f(c)?`sw`:f(o)&&e.x>=i&&e.x<=a?`n`:d(a)&&e.y>=o&&e.y<=c?`e`:f(c)&&e.x>=i&&e.x<=a?`s`:d(i)&&e.y>=o&&e.y<=c?`w`:d(l)&&f(o)?`n`:d(a)&&f(u)?`e`:d(l)&&f(c)?`s`:d(i)&&f(u)?`w`:null},[s,_.scaleX,_.scaleY]),ee=(0,I.useCallback)(e=>{if(e.button!==0)return;let t=O(e);if(!t)return;f(!0),C.current=!0;let n=S.current,r=k(t);if(r){w.current=`resize`,m(`resize`),T.current=r,g(r),E.current=n;return}if(n.width>0&&n.height>0&&t.x>=n.x&&t.x<=n.x+n.width&&t.y>=n.y&&t.y<=n.y+n.height){w.current=`move`,m(`move`),T.current=null,g(null),E.current=null,x.current={x:t.x-n.x,y:t.y-n.y};return}w.current=`draw`,m(`draw`),T.current=null,g(null),E.current=null,b.current={x:t.x,y:t.y};let i={x:t.x,y:t.y,width:0,height:0};S.current=i,u(i)},[O,k]),te=(0,I.useCallback)(e=>{if(!d||!y.current)return;let n=O(e);if(!n)return;if(w.current===`resize`&&T.current&&E.current){let e=Ae(n,E.current,T.current,r);S.current=e,u(e),t(e);return}if(w.current===`move`){let e=S.current,r={...e,x:Math.max(0,Math.min(n.x-x.current.x,n.imageWidth-e.width)),y:Math.max(0,Math.min(n.y-x.current.y,n.imageHeight-e.height))};S.current=r,u(r),t(r);return}let i=n.x-b.current.x,a=r?i/r:n.y-b.current.y;if(r&&Math.abs(a)>0){let e=n.imageHeight-Math.max(0,b.current.y),t=n.imageWidth-Math.max(0,b.current.x);Math.abs(a)>e&&(a=Math.sign(a)*e,i=a*r),Math.abs(i)>t&&(i=Math.sign(i)*t,a=i/r)}let o={x:i>0?b.current.x:n.x,y:a>0?b.current.y:n.y,width:Math.abs(i),height:Math.abs(a)};S.current=o,u(o),t(o)},[d,r,O,t]),A=(0,I.useCallback)(()=>{if(!C.current)return;C.current=!1,f(!1),T.current=null,g(null),E.current=null;let e=S.current;e.width>0&&e.height>0&&n?.(e)},[n]);return(0,I.useEffect)(()=>(D(),window.addEventListener(`resize`,D),()=>window.removeEventListener(`resize`,D)),[e,D]),(0,F.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`,cursor:(p===`resize`&&h?Ne.find(e=>e.id===h)?.cursor:void 0)??(d&&p===`move`?`grabbing`:`crosshair`),userSelect:`none`},onMouseDown:ee,onMouseMove:te,onMouseUp:A,onMouseLeave:A,children:[(0,F.jsx)(`img`,{ref:y,src:e,alt:`Crop Source`,onLoad:D,style:{display:`block`,maxWidth:`100%`,userSelect:`none`},draggable:!1}),l.width>0&&l.height>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{style:{position:`absolute`,border:`${i}px dashed ${a}`,backgroundColor:`rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 0 9999px rgba(0, 0, 0, ${o})`,cursor:d?`grabbing`:`move`,left:l.x*_.scaleX,top:l.y*_.scaleY,width:l.width*_.scaleX,height:l.height*_.scaleY,zIndex:10},children:s&&Ne.map(e=>(0,F.jsx)(`span`,{style:{position:`absolute`,width:je,height:je,borderRadius:`50%`,border:`2px solid ${a}`,backgroundColor:`#fff`,boxSizing:`border-box`,cursor:e.cursor,...e.style}},e.id))}),c&&(()=>{let e=l.x*_.scaleX,t=l.y*_.scaleY,n=l.width*_.scaleX,r=l.height*_.scaleY,i=t-40-8;return i<8&&(i=t+r+8),(0,F.jsx)(`div`,{style:{position:`absolute`,left:e,top:i,zIndex:1001,pointerEvents:`auto`},onMouseDown:e=>e.stopPropagation(),onMouseUp:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:c({left:e,top:t,width:n,height:r,scaleX:_.scaleX,scaleY:_.scaleY})})})()]})]})}})),L,R,Ie,Le=t((()=>{L=r(),R=e(n(),1),ye(),Te(),Fe(),Ie=({src:e,onCropComplete:t,onError:n,aspectRatio:r,outputFormat:i=`blob`,maxWidth:a=600,maxHeight:o=400,allowReset:s=!0,allowResize:c=!0,className:l,style:u,applyButtonClassName:d,applyButtonStyle:f,resetButtonClassName:p,resetButtonStyle:m,buttonPosition:h=`top-left`,onApply:g,onReset:_})=>{let[v,y]=(0,R.useState)(!1),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(0),E=b?.source===e?b.src:null,D=S?.source===e?S.crop:null,O=(0,R.useMemo)(()=>{if(typeof e==`string`)return e;if(e instanceof File)return URL.createObjectURL(e)},[e]);(0,R.useEffect)(()=>()=>{O&&e instanceof File&&URL.revokeObjectURL(O)},[O,e]),(0,R.useEffect)(()=>()=>{b?.src.startsWith(`blob:`)&&URL.revokeObjectURL(b.src)},[b]);let k=(0,R.useCallback)(t=>{C({source:e,crop:t}),x(null)},[e]),ee=(0,R.useCallback)(t=>{C({source:e,crop:t})},[e]),te=(0,R.useCallback)(async()=>{if(!D||D.width===0||D.height===0){n?.(Error(`Please select a crop area`));return}if(!e){n?.(Error(`No source image provided`));return}if(g)try{if(await g(D)===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}y(!0);try{let n=ve(e).crop(D.x,D.y,D.width,D.height);if(i===`blob`){let r=await n.toBlob();if(r)x({source:e,src:URL.createObjectURL(r)}),t?.(r);else throw Error(`Failed to generate cropped blob.`)}else{let r=await n.toDataURL();x({source:e,src:r}),t?.(r)}}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t)}finally{y(!1)}},[n,t,i,D,e,g]),A=(0,R.useCallback)(async()=>{if(_)try{if(await _()===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}x(null),C(null),T(e=>e+1)},[_,n]),ne=e=>{n?.(e)},re=(0,R.useMemo)(()=>{let e={position:`absolute`,display:`flex`,gap:`8px`,zIndex:1001,alignItems:`center`};switch(h){case`top-left`:return{...e,top:`12px`,left:`12px`};case`top-right`:return{...e,top:`12px`,right:`12px`};case`top-center`:return{...e,top:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-left`:return{...e,bottom:`12px`,left:`12px`};case`bottom-center`:return{...e,bottom:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-right`:return{...e,bottom:`12px`,right:`12px`};default:return{...e,top:`12px`,left:`12px`}}},[h]);return(0,L.jsx)(`div`,{className:l,style:{padding:`16px`,borderRadius:`8px`,...u},children:(0,L.jsxs)(`div`,{style:{position:`relative`,maxWidth:a,maxHeight:o,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #ddd`},children:[E?(0,L.jsx)(P,{source:E,style:{width:`100%`,height:`100%`,display:`block`},onProcessError:ne}):O&&(0,L.jsx)(Pe,{src:O,aspect:r,onCropChange:k,onCropComplete:ee,lineColor:`#0066cc`,overlayOpacity:.6,allowResize:c,overlayControls:()=>(0,L.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,L.jsx)(`button`,{type:`button`,onClick:te,disabled:v,className:d,style:{padding:`8px 12px`,backgroundColor:`#0066cc`,color:`#fff`,border:`none`,borderRadius:`4px`,cursor:v?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...f},children:v?`Processing...`:`Apply Crop`}),s&&(0,L.jsx)(`button`,{type:`button`,onClick:A,disabled:v,className:p,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:v?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...m},children:`Reset`})]})},`${O}-${w}`),v&&(0,L.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(255, 255, 255, 0.75)`,color:`#333`,fontSize:`14px`,fontWeight:500},children:`Processing...`}),s&&E&&!v&&(0,L.jsx)(`div`,{style:re,children:(0,L.jsx)(`button`,{type:`button`,onClick:A,className:p,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...m},children:`Reset`})})]})})}})),Re=t((()=>{Ce(),Te(),Fe(),Le()}));function z({children:e,title:t,description:n}){return(0,V.jsx)(`div`,{className:`lumina-story-shell`,children:(0,V.jsxs)(`div`,{className:`lumina-story-stack`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{children:t}),n&&(0,V.jsx)(`p`,{children:n})]}),e]})})}function ze({children:e}){return(0,V.jsx)(`div`,{className:`lumina-story-result`,children:e})}function Be(){let{result:e,loading:t,error:n,getImage:r}=Se({source:H,resize:(0,B.useMemo)(()=>({width:260,height:180}),[]),brightness:8,contrast:12,operations:(0,B.useCallback)(e=>e.sepia().watermark(`useLumina`,{x:16,y:34}),[]),outputType:`dataUrl`}),[i,a]=(0,B.useState)(`Blob not requested yet`);return(0,V.jsx)(z,{title:`useLumina Hook`,description:`Processes an image in React state and can imperatively request another output type with getImage.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsxs)(`div`,{className:`lumina-story-row`,children:[(0,V.jsx)(`button`,{className:`lumina-story-button`,onClick:async()=>{let e=await r(`blob`);a(e instanceof Blob?`${e.size} bytes`:`No blob`)},children:`Request Blob`}),(0,V.jsxs)(ze,{children:[t&&`Processing image...`,n&&n.message,!t&&!n&&i]})]}),e&&(0,V.jsx)(`img`,{className:`lumina-story-image-preview`,src:e,alt:`Processed useLumina result`})]})})}function Ve(){let{result:e,loading:t,error:n}=Se({source:We,resize:(0,B.useMemo)(()=>({width:80,height:44}),[]),operations:(0,B.useCallback)(e=>e.ascii(),[])});return(0,V.jsx)(z,{title:`ASCII Output`,description:`The hook can return non-image output when the Lumina chain operation returns text.`,children:(0,V.jsx)(`pre`,{className:`lumina-story-pre`,children:t?`Generating ASCII...`:n?.message||e})})}function He({aspect:e,lineColor:t,overlayOpacity:n,allowResize:r}){let[i,a]=(0,B.useState)({x:0,y:0,width:0,height:0});return(0,V.jsx)(z,{title:`ImageAreaSelector`,description:`Drag on the image to create a crop region. Drag inside the region to move it, or drag a handle to resize it.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsx)(Pe,{src:H,aspect:e,lineColor:t,overlayOpacity:n,allowResize:r,onCropChange:a,onCropComplete:a,overlayControls:({width:e,height:t})=>(0,V.jsxs)(`span`,{className:`lumina-story-chip`,children:[Math.round(e),` x `,Math.round(t)]})}),(0,V.jsxs)(ze,{children:[`x `,Math.round(i.x),`, y `,Math.round(i.y),`, w`,` `,Math.round(i.width),`, h `,Math.round(i.height)]})]})})}function Ue({aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i}){let[a,o]=(0,B.useState)(`No crop applied yet`),[s,c]=(0,B.useState)(null);return(0,V.jsx)(z,{title:`ImageCropper`,description:`Select an area, apply the crop, and inspect the returned Blob or Data URL.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,V.jsx)(`div`,{className:`lumina-story-panel`,children:(0,V.jsx)(Ie,{src:H,aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,allowResize:i,maxWidth:520,maxHeight:360,onCropComplete:e=>{if(typeof e==`string`){c(e),o(`Data URL length: ${e.length}`);return}let t=URL.createObjectURL(e);c(e=>(e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),t)),o(`Blob size: ${e.size} bytes`)},onError:e=>o(e.message)})}),(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsx)(ze,{children:a}),s&&(0,V.jsx)(`img`,{className:`lumina-story-image-preview`,src:s,alt:`Cropped output`})]})]})})}var B,V,H,We,Ge,U,W,G,K,q,J,Y,X,Z,Q,$,Ke;t((()=>{B=e(n(),1),Re(),V=r(),H=`./sample.png`,We=`./lumina.png`,Ge={title:`LuminaJS React/API Overview`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook coverage for the React exports in src/react: LuminaCanvas, useLumina, ImageAreaSelector, and ImageCropper. The stories also document the shared image editing options used by the component and hook APIs.`}}}},U={name:`React exports and functionality list`,render:()=>(0,V.jsx)(z,{title:`React Exports`,description:`The React entrypoint exposes component, hook, and crop-selection primitives over the LuminaJS chain API.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`LuminaCanvas`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Renders a processed image to canvas.`}),(0,V.jsx)(`li`,{children:`Supports declarative editing props.`}),(0,V.jsx)(`li`,{children:`Accepts a custom chain callback through filter.`}),(0,V.jsx)(`li`,{children:`Returns canvas, dataUrl, blob, or ImageData through getImage.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`useLumina`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Processes images from a hook.`}),(0,V.jsx)(`li`,{children:`Provides result, loading, error, and getImage.`}),(0,V.jsx)(`li`,{children:`Supports deps for caller-controlled reprocessing.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`ImageAreaSelector`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Interactive selection rectangle over an image.`}),(0,V.jsx)(`li`,{children:`Resizable handles and drag-to-move behavior.`}),(0,V.jsx)(`li`,{children:`Optional aspect-ratio lock.`}),(0,V.jsx)(`li`,{children:`Selection styling and overlayControls render prop.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`ImageCropper`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Complete crop workflow with apply and reset controls.`}),(0,V.jsx)(`li`,{children:`Resizable crop selection powered by ImageAreaSelector.`}),(0,V.jsx)(`li`,{children:`Blob or Data URL output.`}),(0,V.jsx)(`li`,{children:`Custom button classes, styles, positions, and callbacks.`})]})]})]})}),parameters:{docs:{source:{code:`import { LuminaCanvas, useLumina, ImageAreaSelector, ImageCropper } from '@gks101/luminajs/react';`}}}},W={name:`LuminaCanvas/basic canvas`,render:()=>(0,V.jsx)(z,{title:`LuminaCanvas Basic`,description:`Use source plus standard canvas attributes to render an image.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,width:520,height:360})}),parameters:{docs:{source:{code:`<LuminaCanvas source="/sample.png" width={520} height={360} />`}}}},G={name:`LuminaCanvas/adjustments and filters`,args:{brightness:12,contrast:18,grayscale:!1,sepia:!0,gaussianBlur:0,sharpen:!1,emboss:!1,edgeDetection:!1},render:e=>(0,V.jsx)(z,{title:`Adjustments And Filters`,description:`These props map to the shared ImageEditingOptions contract.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,width:520,height:360,brightness:e.brightness,contrast:e.contrast,grayscale:e.grayscale,sepia:e.sepia,gaussianBlur:e.gaussianBlur||void 0,sharpen:e.sharpen,emboss:e.emboss,edgeDetection:e.edgeDetection})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  brightness={12}
  contrast={18}
  sepia
  gaussianBlur={0}
/>`}}}},K={name:`LuminaCanvas/resize crop watermark`,render:()=>(0,V.jsx)(z,{title:`Resize, Crop, And Watermark`,description:`Crop and resize are applied before the optional filter callback.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,resize:{width:420,height:280},crop:{x:80,y:60,width:520,height:360},watermark:{text:`LuminaJS`,options:{x:20,y:48,fontSize:32,color:`rgba(255,255,255,0.82)`}}})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  crop={{ x: 80, y: 60, width: 520, height: 360 }}
  resize={{ width: 420, height: 280 }}
  watermark={{
    text: 'LuminaJS',
    options: { x: 20, y: 48, fontSize: 32, color: 'rgba(255,255,255,0.82)' },
  }}
/>`}}}},q={name:`LuminaCanvas/custom filter chain`,render:()=>(0,V.jsx)(z,{title:`Custom Chain`,description:`Use filter when you need the chainable Lumina API directly.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,width:520,height:360,filter:e=>e.grayscale().brightness(20).sharpen()})}),parameters:{docs:{source:{code:`<LuminaCanvas
  source="/sample.png"
  filter={(chain) => chain.grayscale().brightness(20).sharpen()}
/>`}}}},J={name:`useLumina/data URL and getImage`,render:()=>(0,V.jsx)(Be,{}),parameters:{docs:{source:{code:`const { result, loading, error, getImage } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 260, height: 180 },
  brightness: 8,
  contrast: 12,
  operations: (chain) => chain.sepia().watermark('useLumina', { x: 16, y: 34 }),
  outputType: 'dataUrl',
});

const blob = await getImage('blob');`}}}},Y={name:`useLumina/ASCII output`,render:()=>(0,V.jsx)(Ve,{}),parameters:{docs:{source:{code:`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 80, height: 44 },
  operations: (chain) => chain.ascii(),
});`}}}},X={name:`ImageAreaSelector/freeform selection`,args:{lineColor:`#1c64d1`,overlayOpacity:.55,allowResize:!0},render:e=>(0,V.jsx)(He,{lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
  allowResize
  onCropChange={setCrop}
  onCropComplete={setCrop}
/>`}}}},Z={name:`ImageAreaSelector/aspect locked`,args:{aspect:16/9,lineColor:`#d14d1c`,overlayOpacity:.62,allowResize:!0},render:e=>(0,V.jsx)(He,{aspect:e.aspect,lineColor:e.lineColor,overlayOpacity:e.overlayOpacity,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
  allowResize
  overlayControls={({ width, height }) => (
    <span>{Math.round(width)} x {Math.round(height)}</span>
  )}
  onCropChange={setCrop}
/>`}}}},Q={name:`ImageCropper/blob output`,args:{aspectRatio:1,outputFormat:`blob`,buttonPosition:`top-left`,allowReset:!0,allowResize:!0},render:e=>(0,V.jsx)(Ue,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  allowResize
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>`}}}},$={name:`ImageCropper/data URL output and custom controls`,args:{aspectRatio:16/9,outputFormat:`dataUrl`,buttonPosition:`bottom-left`,allowReset:!0,allowResize:!0},render:e=>(0,V.jsx)(Ue,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset,allowResize:e.allowResize}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  buttonPosition="bottom-right"
  allowResize
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>`}}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
            <li>Resizable handles and drag-to-move behavior.</li>
            <li>Optional aspect-ratio lock.</li>
            <li>Selection styling and overlayControls render prop.</li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>ImageCropper</h3>
          <ul className="lumina-story-list">
            <li>Complete crop workflow with apply and reset controls.</li>
            <li>Resizable crop selection powered by ImageAreaSelector.</li>
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ke=[`ReactExports`,`LuminaCanvasBasic`,`LuminaCanvasAdjustments`,`LuminaCanvasTransformations`,`LuminaCanvasCustomChain`,`UseLuminaDataUrl`,`UseLuminaAscii`,`ImageAreaSelectorFreeform`,`ImageAreaSelectorAspectLocked`,`ImageCropperBlob`,`ImageCropperDataUrl`]}))();export{Z as ImageAreaSelectorAspectLocked,X as ImageAreaSelectorFreeform,Q as ImageCropperBlob,$ as ImageCropperDataUrl,G as LuminaCanvasAdjustments,W as LuminaCanvasBasic,q as LuminaCanvasCustomChain,K as LuminaCanvasTransformations,U as ReactExports,Y as UseLuminaAscii,J as UseLuminaDataUrl,Ke as __namedExportsOrder,Ge as default};