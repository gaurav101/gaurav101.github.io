import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-CFeXiBk7.js";import{t as r}from"./jsx-runtime-DC6t-S6Q.js";function i(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`Anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LuminaJS [loader]: Failed to load image from URL — "${e}"`)),r.src=e})}function a(e){if(!e.type.startsWith(`image/`))return Promise.reject(TypeError(`LuminaJS [loader]: Expected an image File, but received MIME type "${e.type}".`));let t=URL.createObjectURL(e);return new Promise((n,r)=>{let i=new Image;i.onload=()=>{URL.revokeObjectURL(t),n(i)},i.onerror=()=>{URL.revokeObjectURL(t),r(Error(`LuminaJS [loader]: Failed to load image from File — "${e.name}".`))},i.src=t})}async function o(e){return typeof e==`string`?i(e):e instanceof File?a(e):Promise.reject(TypeError(`LuminaJS [loader]: Invalid source type "${typeof e}". Expected a URL string or a File object.`))}var s=t((()=>{}));function c(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`LuminaJS [canvas]: Failed to create offscreen canvas context.`);return{canvas:n,ctx:r}}function l(e){let t=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(t===0||n===0)throw Error(`LuminaJS [canvas]: Cannot extract pixel data from an image with zero dimensions (${t}x${n}). Ensure the image is fully loaded before calling getPixelData.`);let{canvas:r,ctx:i}=c(t,n);i.drawImage(e,0,0,t,n);try{return{imageData:i.getImageData(0,0,t,n),canvas:r}}catch(e){let t=e instanceof Error?e.message:String(e);throw Error(`LuminaJS [canvas]: Unable to read pixel data — canvas may be tainted by a cross-origin image. Ensure the server sends CORS headers and the image is loaded with crossOrigin="Anonymous". Original error: ${t}`)}}function u(e,t){let n=e.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`LuminaJS [canvas]: Failed to obtain a 2D context from the provided canvas element. The canvas may already have a context of a different type (e.g. "webgl").`);n.putImageData(t,0,0)}function d(e,t=`image/png`,n=.92){return new Promise((r,i)=>{e.toBlob(e=>{e?r(e):i(Error(`LuminaJS [canvas]: canvas.toBlob returned null. The canvas may be empty or the MIME type "${t}" is unsupported.`))},t,n)})}function f(e,t,n){if(t<=0||n<=0)throw Error(`LuminaJS [canvas]: Resize dimensions must be positive (${t}x${n}).`);let{canvas:r,ctx:i}=c(t,n);return i.drawImage(e,0,0,t,n),r}function p(e,t,n,r,i){if(r<=0||i<=0)throw Error(`LuminaJS [canvas]: Crop dimensions must be positive (${r}x${i}).`);let{canvas:a,ctx:o}=c(r,i);return o.drawImage(e,t,n,r,i,0,0,r,i),a}var m=t((()=>{}));function h(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2],a=g*t+_*r+v*i;n[e]=a,n[e+1]=a,n[e+2]=a}return t}var g,_,v,y=t((()=>{g=.299,_=.587,v=.114}));function b(e,t,n){return Math.min(Math.max(e,t),n)}var x=t((()=>{}));function S(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length;for(let e=0;e<i;e+=4)r[e]=b(r[e]+t,0,255),r[e+1]=b(r[e+1]+t,0,255),r[e+2]=b(r[e+2]+t,0,255);return n}var C=t((()=>{x()}));function w(e,t=0){let n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),r=n.data,i=r.length,a=259*(t+255)/(255*(259-t));for(let e=0;e<i;e+=4)r[e]=b(a*(r[e]-128)+128,0,255),r[e+1]=b(a*(r[e+1]-128)+128,0,255),r[e+2]=b(a*(r[e+2]-128)+128,0,255);return n}var T=t((()=>{x()}));function E(e){let t=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),n=t.data,r=n.length;for(let e=0;e<r;e+=4){let t=n[e],r=n[e+1],i=n[e+2];n[e]=b(t*.393+r*.769+i*.189,0,255),n[e+1]=b(t*.349+r*.686+i*.168,0,255),n[e+2]=b(t*.272+r*.534+i*.131,0,255)}return t}var D=t((()=>{x()}));function ee(e,t={}){let{charSet:n=te,invert:r=!1}=t,i=r?n.split(``).reverse().join(``):n,a=e.data,o=e.width,s=e.height,c=``;for(let e=0;e<s;e++){for(let t=0;t<o;t++){let n=(e*o+t)*4,r=a[n],s=a[n+1],l=a[n+2],u=.299*r+.587*s+.114*l,d=Math.floor(u/255*(i.length-1));c+=i[d]}c+=`
`}return c}var te,ne=t((()=>{te=`@%#*+=-:. `}));function re(e,t=1){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t=Math.max(0,Math.floor(t)),t===0)return new ImageData(new Uint8ClampedArray(i),n,r);for(let e=0;e<r;e++)for(let r=0;r<n;r++){let a=0,s=0,c=0,l=0,u=0;for(let o=-t;o<=t;o++){let t=r+o;if(t>=0&&t<n){let r=(e*n+t)*4;a+=i[r],s+=i[r+1],c+=i[r+2],l+=i[r+3],u++}}let d=(e*n+r)*4;o[d]=a/u,o[d+1]=s/u,o[d+2]=c/u,o[d+3]=l/u}for(let e=0;e<n;e++)for(let i=0;i<r;i++){let s=0,c=0,l=0,u=0,d=0;for(let a=-t;a<=t;a++){let t=i+a;if(t>=0&&t<r){let r=(t*n+e)*4;s+=o[r],c+=o[r+1],l+=o[r+2],u+=o[r+3],d++}}let f=(i*n+e)*4;a[f]=s/d,a[f+1]=c/d,a[f+2]=l/d,a[f+3]=u/d}return new ImageData(a,n,r)}var ie=t((()=>{}));function ae(e,t=2){let n=e.width,r=e.height,i=e.data,a=new Uint8ClampedArray(i.length),o=new Uint8ClampedArray(i.length);if(t<=0)return new ImageData(new Uint8ClampedArray(i),n,r);let s=Math.ceil(t*3),c=s*2+1,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){let n=e-s;l[e]=Math.exp(-(n*n)/(2*t*t)),u+=l[e]}for(let e=0;e<c;e++)l[e]/=u;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=0,a=0,u=0,d=0;for(let o=0;o<c;o++){let c=t+(o-s),f=Math.max(0,Math.min(n-1,c)),p=(e*n+f)*4,m=l[o];r+=i[p]*m,a+=i[p+1]*m,u+=i[p+2]*m,d+=i[p+3]*m}let f=(e*n+t)*4;o[f]=r,o[f+1]=a,o[f+2]=u,o[f+3]=d}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let i=0,u=0,d=0,f=0;for(let a=0;a<c;a++){let c=t+(a-s),p=(Math.max(0,Math.min(r-1,c))*n+e)*4,m=l[a];i+=o[p]*m,u+=o[p+1]*m,d+=o[p+2]*m,f+=o[p+3]*m}let p=(t*n+e)*4;a[p]=i,a[p+1]=u,a[p+2]=d,a[p+3]=f}return new ImageData(a,n,r)}var oe=t((()=>{}));function se(e,t,n={}){let{x:r=10,y:i=10,fontSize:a=24,fontFace:o=`Arial`,font:s=`${a}px ${o}`,color:c=`rgba(255, 255, 255, 0.5)`,align:l=`left`,baseline:u=`top`}=n,d=document.createElement(`canvas`);d.width=e.width,d.height=e.height;let f=d.getContext(`2d`);if(!f)throw Error(`LuminaJS [watermark]: Failed to obtain 2D context for temporary canvas.`);return f.putImageData(e,0,0),f.font=s,f.fillStyle=c,f.textAlign=l,f.textBaseline=u,f.fillText(t,r,i),f.getImageData(0,0,d.width,d.height)}var ce=t((()=>{}));function le(e,t={}){let{width:n,height:r}=e,i=Math.min(n,r),{sigma:a=5,centerX:o=n/2,centerY:s=r/2,focusRadius:c=i*.2,falloff:l=i*.4}=t,u=ae(e,a),d=e.data,f=u.data,p=new Uint8ClampedArray(d.length);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=t-o,i=e-s,a=Math.sqrt(r*r+i*i),u=0;a>c&&(u=Math.min(1,(a-c)/l));let m=(e*n+t)*4,h=1-u;p[m]=d[m]*h+f[m]*u,p[m+1]=d[m+1]*h+f[m+1]*u,p[m+2]=d[m+2]*h+f[m+2]*u,p[m+3]=d[m+3]}return new ImageData(p,n,r)}var ue=t((()=>{oe()})),O,k=t((()=>{O=(e,t,n,r)=>{let i=new Uint8ClampedArray(e);for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=0,s=0,c=0;for(let e=0;e<3;e++)for(let l=0;l<3;l++){let u=n+l-1,d=((a+e-1)*t+u)*4,f=r[e*3+l];o+=i[d]*f,s+=i[d+1]*f,c+=i[d+2]*f}let l=(a*t+n)*4;e[l]=Math.min(255,Math.max(0,o)),e[l+1]=Math.min(255,Math.max(0,s)),e[l+2]=Math.min(255,Math.max(0,c))}return e}})),de,fe=t((()=>{k(),de=e=>(O(e.data,e.width,e.height,[0,-1,0,-1,5,-1,0,-1,0]),e)})),pe,me=t((()=>{k(),pe=e=>(O(e.data,e.width,e.height,[-2,-1,0,-1,1,1,0,1,2]),e)})),he,ge=t((()=>{k(),he=e=>(O(e.data,e.width,e.height,[-1,-1,-1,-1,8,-1,-1,-1,-1]),e)})),_e=t((()=>{y(),C(),T(),D(),ne(),ie(),oe(),ce(),ue(),k(),fe(),me(),ge()})),ve,ye=t((()=>{_e(),s(),m(),ve=class{constructor(e){this.source=e,this.operations=[]}_addOp(e,...t){return this.operations.push({fn:e,args:t}),this}grayscale(){return this._addOp(h)}brightness(e){return this._addOp(S,e)}contrast(e){return this._addOp(w,e)}sepia(){return this._addOp(E)}ascii(e={}){return this._addOp(ee,e)}blur(e){return this._addOp(re,e)}gaussianBlur(e){return this._addOp(ae,e)}watermark(e,t){return this._addOp(se,e,t)}backgroundBlur(e){return this._addOp(le,e)}applyConvolution(e,t,n){return this._addOp(O,e,t,n)}sharpen(){return this._addOp(de)}emboss(){return this._addOp(pe)}edgeDetection(){return this._addOp(he)}resize(e,t){return this._addOp((e,t,n)=>{let r=document.createElement(`canvas`);r.width=e.width,r.height=e.height;let i=r.getContext(`2d`);if(!i)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);i.putImageData(e,0,0);let a=f(r,t,n).getContext(`2d`);if(!a)throw Error(`LuminaJS [chain]: Failed to get resized canvas context.`);return a.getImageData(0,0,t,n)},e,t)}crop(e,t,n,r){return this._addOp((e,t,n,r,i)=>{let a=document.createElement(`canvas`);a.width=e.width,a.height=e.height;let o=a.getContext(`2d`);if(!o)throw Error(`LuminaJS [chain]: Failed to get canvas context.`);o.putImageData(e,0,0);let s=p(a,t,n,r,i).getContext(`2d`);if(!s)throw Error(`LuminaJS [chain]: Failed to get cropped canvas context.`);return s.getImageData(0,0,r,i)},e,t,n,r)}async _resolveSource(){let e=this.source;if((typeof e==`string`||e instanceof File)&&(e=await o(e)),e instanceof HTMLImageElement)return l(e).imageData;if(e instanceof HTMLCanvasElement){let t=e.getContext(`2d`);if(!t)throw Error(`LuminaJS [chain]: Failed to get canvas context from source.`);return t.getImageData(0,0,e.width,e.height)}if(e instanceof ImageData)return e;throw Error(`LuminaJS [chain]: Unsupported source type.`)}async render(){let e=await this._resolveSource();for(let t of this.operations)e=await t.fn(e,...t.args);return e}async toCanvas(e){let t=await this.render();return e.width=t.width,e.height=t.height,u(e,t),e}async toBlob(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),d(r,e,t)}async toDataURL(e=`image/png`,t=.92){let n=await this.render(),r=document.createElement(`canvas`);return r.width=n.width,r.height=n.height,u(r,n),r.toDataURL(e,t)}async toHtmlElement(e){let t=typeof e==`string`?document.getElementById(e):e;if(!t)throw Error(`LuminaJS [chain]: Target element not found: "${e}"`);if(t instanceof HTMLImageElement)t.src=await this.toDataURL();else if(t instanceof HTMLCanvasElement)await this.toCanvas(t);else throw Error(`LuminaJS [chain]: toHtmlElement only supports <img> and <canvas> elements.`);return t}}}));function A(e){return new ve(e)}var j=t((()=>{s(),m(),y(),C(),T(),D(),ne(),ie(),oe(),ce(),ue(),k(),fe(),me(),ge(),ye(),x()}));function be(e,t){let n=e;return t.grayscale&&(n=n.grayscale()),t.brightness!==void 0&&(n=n.brightness(t.brightness)),t.contrast!==void 0&&(n=n.contrast(t.contrast)),t.sepia&&(n=n.sepia()),t.ascii&&(n=n.ascii(typeof t.ascii==`boolean`?{}:t.ascii)),t.blur!==void 0&&(n=n.blur(t.blur)),t.gaussianBlur!==void 0&&(n=n.gaussianBlur(t.gaussianBlur)),t.watermark&&(n=n.watermark(t.watermark.text,t.watermark.options)),t.backgroundBlur&&(n=n.backgroundBlur(t.backgroundBlur)),t.sharpen&&(n=n.sharpen()),t.emboss&&(n=n.emboss()),t.edgeDetection&&(n=n.edgeDetection()),t.resize&&(n=n.resize(t.resize.width,t.resize.height)),t.crop&&(n=n.crop(t.crop.x,t.crop.y,t.crop.width,t.crop.height)),n}var xe=t((()=>{}));function Se({source:e,operations:t,deps:n=[],outputType:r=`imageData`,...i}){let[a,o]=(0,M.useState)(null),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)(null);return(0,M.useEffect)(()=>{let n=!0;return(async()=>{if(!e){o(null);return}c(!0),u(null);try{let a=A(e);a=be(a,i),typeof t==`function`&&(a=t(a));let s;switch(r){case`dataUrl`:s=await a.toDataURL();break;case`blob`:s=await a.toBlob();break;default:s=await a.render()}n&&o(s)}catch(e){n&&u(e instanceof Error?e:Error(String(e)))}finally{n&&c(!1)}})(),()=>{n=!1}},[e,r,t,JSON.stringify(i),...n]),{result:a,loading:s,error:l,getImage:async n=>{if(!e)return null;try{let a=A(e);a=be(a,i),typeof t==`function`&&(a=t(a));let o;switch(n||r){case`dataUrl`:o=await a.toDataURL();break;case`blob`:o=await a.toBlob();break;default:o=await a.render()}return o}catch(e){return u(e instanceof Error?e:Error(String(e))),null}}}}var M,Ce=t((()=>{M=e(n(),1),j(),xe()})),we,N,P,Te=t((()=>{we=r(),N=e(n(),1),j(),xe(),P=(0,N.forwardRef)(function({source:e,filter:t,onProcessError:n,onLoad:r,getImage:i,outputType:a=`canvas`,grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y,...b},x){let S=(0,N.useMemo)(()=>({grayscale:o,brightness:s,contrast:c,sepia:l,ascii:u,blur:d,gaussianBlur:f,watermark:p,backgroundBlur:m,sharpen:h,emboss:g,edgeDetection:_,resize:v,crop:y}),[o,s,c,l,u,d,f,p,m,h,g,_,v,y]),C=(0,N.useRef)(null),[w,T]=(0,N.useState)(null);return(0,N.useEffect)(()=>{if(!e||!C.current)return;let o=!0;return(async()=>{try{let n=A(e);if(n=be(n,S),typeof t==`function`&&(n=t(n)),C.current&&await n.toCanvas(C.current),o&&r&&r(),o&&i&&C.current)if(a===`dataUrl`)i(C.current.toDataURL());else if(a===`blob`)C.current.toBlob(e=>{e&&i(e)});else if(a===`imageData`){let e=C.current.getContext(`2d`);e&&i(e.getImageData(0,0,C.current.width,C.current.height))}else i(C.current)}catch(e){let t=e instanceof Error?e:Error(String(e));o&&(T(t),n&&n(t))}})(),()=>{o=!1}},[e,t,n,r,i,a,S]),w?(0,we.jsx)(`div`,{className:`lumina-error`,children:w.message}):(0,we.jsx)(`canvas`,{ref:x||C,...b})})})),F,I,Ee,De=t((()=>{F=r(),I=e(n(),1),Ee=({src:e,onCropChange:t,onCropComplete:n,aspect:r,lineWidth:i=2,lineColor:a=`#fff`,overlayOpacity:o=.5,overlayControls:s})=>{let[c,l]=(0,I.useState)({x:0,y:0,width:0,height:0}),[u,d]=(0,I.useState)(!1),[f,p]=(0,I.useState)(`draw`),[m,h]=(0,I.useState)({scaleX:1,scaleY:1}),g=(0,I.useRef)(null),_=(0,I.useRef)({x:0,y:0}),v=(0,I.useRef)({x:0,y:0}),y=(0,I.useRef)(c),b=(0,I.useRef)(!1),x=(0,I.useRef)(`draw`),S=(0,I.useCallback)(()=>{let e=g.current;if(!e||e.naturalWidth===0||e.naturalHeight===0)return;let t=e.getBoundingClientRect();t.width===0||t.height===0||h({scaleX:t.width/e.naturalWidth,scaleY:t.height/e.naturalHeight})},[]),C=(0,I.useCallback)(e=>{let t=g.current,n=t?.getBoundingClientRect();if(!n||!t)return null;let r=t.naturalWidth/n.width,i=t.naturalHeight/n.height;return{x:Math.max(0,Math.min((e.clientX-n.left)*r,t.naturalWidth)),y:Math.max(0,Math.min((e.clientY-n.top)*i,t.naturalHeight)),imageWidth:t.naturalWidth,imageHeight:t.naturalHeight}},[]),w=(0,I.useCallback)(e=>{if(e.button!==0)return;let t=C(e);if(!t)return;d(!0),b.current=!0;let n=y.current;if(n.width>0&&n.height>0&&t.x>=n.x&&t.x<=n.x+n.width&&t.y>=n.y&&t.y<=n.y+n.height){x.current=`move`,p(`move`),v.current={x:t.x-n.x,y:t.y-n.y};return}x.current=`draw`,p(`draw`),_.current={x:t.x,y:t.y};let r={x:t.x,y:t.y,width:0,height:0};y.current=r,l(r)},[C]),T=(0,I.useCallback)(e=>{if(!u||!g.current)return;let n=C(e);if(!n)return;if(x.current===`move`){let e=y.current,r={...e,x:Math.max(0,Math.min(n.x-v.current.x,n.imageWidth-e.width)),y:Math.max(0,Math.min(n.y-v.current.y,n.imageHeight-e.height))};y.current=r,l(r),t(r);return}let i=n.x-_.current.x,a=r?i/r:n.y-_.current.y;if(r&&Math.abs(a)>0){let e=n.imageHeight-Math.max(0,_.current.y),t=n.imageWidth-Math.max(0,_.current.x);Math.abs(a)>e&&(a=Math.sign(a)*e,i=a*r),Math.abs(i)>t&&(i=Math.sign(i)*t,a=i/r)}let o={x:i>0?_.current.x:n.x,y:a>0?_.current.y:n.y,width:Math.abs(i),height:Math.abs(a)};y.current=o,l(o),t(o)},[u,r,C,t]),E=(0,I.useCallback)(()=>{if(!b.current)return;b.current=!1,d(!1);let e=y.current;e.width>0&&e.height>0&&n?.(e)},[n]);return(0,I.useEffect)(()=>(S(),window.addEventListener(`resize`,S),()=>window.removeEventListener(`resize`,S)),[e,S]),(0,F.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`,cursor:u&&f===`move`?`grabbing`:`crosshair`,userSelect:`none`},onMouseDown:w,onMouseMove:T,onMouseUp:E,onMouseLeave:E,children:[(0,F.jsx)(`img`,{ref:g,src:e,alt:`Crop Source`,onLoad:S,style:{display:`block`,maxWidth:`100%`,userSelect:`none`},draggable:!1}),c.width>0&&c.height>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{style:{position:`absolute`,border:`${i}px dashed ${a}`,backgroundColor:`rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 0 9999px rgba(0, 0, 0, ${o})`,cursor:u?`grabbing`:`move`,left:c.x*m.scaleX,top:c.y*m.scaleY,width:c.width*m.scaleX,height:c.height*m.scaleY,zIndex:10}}),s&&(()=>{let e=c.x*m.scaleX,t=c.y*m.scaleY,n=c.width*m.scaleX,r=c.height*m.scaleY,i=t-40-8;return i<8&&(i=t+r+8),(0,F.jsx)(`div`,{style:{position:`absolute`,left:e,top:i,zIndex:1001,pointerEvents:`auto`},onMouseDown:e=>e.stopPropagation(),onMouseUp:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:s({left:e,top:t,width:n,height:r,scaleX:m.scaleX,scaleY:m.scaleY})})})()]})]})}})),L,R,Oe,ke=t((()=>{L=r(),R=e(n(),1),j(),Te(),De(),Oe=({src:e,onCropComplete:t,onError:n,aspectRatio:r,outputFormat:i=`blob`,maxWidth:a=600,maxHeight:o=400,allowReset:s=!0,className:c,style:l,applyButtonClassName:u,applyButtonStyle:d,resetButtonClassName:f,resetButtonStyle:p,buttonPosition:m=`top-left`,onApply:h,onReset:g})=>{let[_,v]=(0,R.useState)(!1),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),[C,w]=(0,R.useState)(0),T=y?.source===e?y.src:null,E=x?.source===e?x.crop:null;E&&E.width>0&&E.height;let D=(0,R.useMemo)(()=>{if(typeof e==`string`)return e;if(e instanceof File)return URL.createObjectURL(e)},[e]);(0,R.useEffect)(()=>()=>{D&&e instanceof File&&URL.revokeObjectURL(D)},[D,e]),(0,R.useEffect)(()=>()=>{y?.src.startsWith(`blob:`)&&URL.revokeObjectURL(y.src)},[y]);let ee=(0,R.useCallback)(t=>{S({source:e,crop:t}),b(null)},[e]),te=(0,R.useCallback)(t=>{S({source:e,crop:t})},[e]),ne=(0,R.useCallback)(async()=>{if(!E||E.width===0||E.height===0){n?.(Error(`Please select a crop area`));return}if(!e){n?.(Error(`No source image provided`));return}if(h)try{if(await h(E)===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}v(!0);try{let n=A(e).crop(E.x,E.y,E.width,E.height);if(i===`blob`){let r=await n.toBlob();if(r)b({source:e,src:URL.createObjectURL(r)}),t?.(r);else throw Error(`Failed to generate cropped blob.`)}else{let r=await n.toDataURL();b({source:e,src:r}),t?.(r)}}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t)}finally{v(!1)}},[n,t,i,E,e,h]),re=(0,R.useCallback)(async()=>{if(g)try{if(await g()===!1)return}catch(e){let t=e instanceof Error?e:Error(String(e));n?.(t);return}b(null),S(null),w(e=>e+1)},[g,n]),ie=e=>{n?.(e)},ae=(0,R.useMemo)(()=>{let e={position:`absolute`,display:`flex`,gap:`8px`,zIndex:1001,alignItems:`center`};switch(m){case`top-left`:return{...e,top:`12px`,left:`12px`};case`top-right`:return{...e,top:`12px`,right:`12px`};case`top-center`:return{...e,top:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-left`:return{...e,bottom:`12px`,left:`12px`};case`bottom-center`:return{...e,bottom:`12px`,left:`50%`,transform:`translateX(-50%)`};case`bottom-right`:return{...e,bottom:`12px`,right:`12px`};default:return{...e,top:`12px`,left:`12px`}}},[m]);return(0,L.jsx)(`div`,{className:c,style:{padding:`16px`,borderRadius:`8px`,...l},children:(0,L.jsxs)(`div`,{style:{position:`relative`,maxWidth:a,maxHeight:o,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #ddd`},children:[T?(0,L.jsx)(P,{source:T,style:{width:`100%`,height:`100%`,display:`block`},onProcessError:ie}):D&&(0,L.jsx)(Ee,{src:D,aspect:r,onCropChange:ee,onCropComplete:te,lineColor:`#0066cc`,overlayOpacity:.6,overlayControls:({left:e,top:t,width:n,height:r,scaleX:i,scaleY:a})=>(0,L.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,L.jsx)(`button`,{type:`button`,onClick:ne,disabled:_,className:u,style:{padding:`8px 12px`,backgroundColor:`#0066cc`,color:`#fff`,border:`none`,borderRadius:`4px`,cursor:_?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...d},children:_?`Processing...`:`Apply Crop`}),s&&(0,L.jsx)(`button`,{type:`button`,onClick:re,disabled:_,className:f,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:_?`not-allowed`:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...p},children:`Reset`})]})},`${D}-${C}`),_&&(0,L.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(255, 255, 255, 0.75)`,color:`#333`,fontSize:`14px`,fontWeight:500},children:`Processing...`}),s&&T&&!_&&(0,L.jsx)(`div`,{style:ae,children:(0,L.jsx)(`button`,{type:`button`,onClick:re,className:f,style:{padding:`8px 12px`,backgroundColor:`#fff`,color:`#333`,border:`1px solid #ddd`,borderRadius:`4px`,cursor:`pointer`,fontSize:`13px`,fontWeight:500,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.12)`,...p},children:`Reset`})})]})})}})),Ae=t((()=>{Ce(),Te(),De(),ke()}));function z({children:e,title:t,description:n}){return(0,V.jsx)(`div`,{className:`lumina-story-shell`,children:(0,V.jsxs)(`div`,{className:`lumina-story-stack`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{children:t}),n&&(0,V.jsx)(`p`,{children:n})]}),e]})})}function je({children:e}){return(0,V.jsx)(`div`,{className:`lumina-story-result`,children:e})}function Me(){let{result:e,loading:t,error:n,getImage:r}=Se({source:H,resize:(0,B.useMemo)(()=>({width:260,height:180}),[]),brightness:8,contrast:12,operations:(0,B.useCallback)(e=>e.sepia().watermark(`useLumina`,{x:16,y:34}),[]),outputType:`dataUrl`}),[i,a]=(0,B.useState)(`Blob not requested yet`);return(0,V.jsx)(z,{title:`useLumina Hook`,description:`Processes an image in React state and can imperatively request another output type with getImage.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsxs)(`div`,{className:`lumina-story-row`,children:[(0,V.jsx)(`button`,{className:`lumina-story-button`,onClick:async()=>{let e=await r(`blob`);a(e instanceof Blob?`${e.size} bytes`:`No blob`)},children:`Request Blob`}),(0,V.jsxs)(je,{children:[t&&`Processing image...`,n&&n.message,!t&&!n&&i]})]}),e&&(0,V.jsx)(`img`,{className:`lumina-story-image-preview`,src:e,alt:`Processed useLumina result`})]})})}function Ne(){let{result:e,loading:t,error:n}=Se({source:Ie,resize:(0,B.useMemo)(()=>({width:80,height:44}),[]),operations:(0,B.useCallback)(e=>e.ascii(),[])});return(0,V.jsx)(z,{title:`ASCII Output`,description:`The hook can return non-image output when the Lumina chain operation returns text.`,children:(0,V.jsx)(`pre`,{className:`lumina-story-pre`,children:t?`Generating ASCII...`:n?.message||e})})}function Pe({aspect:e,lineColor:t,overlayOpacity:n}){let[r,i]=(0,B.useState)({x:0,y:0,width:0,height:0});return(0,V.jsx)(z,{title:`ImageAreaSelector`,description:`Drag on the image to create a crop region. Drag inside the region to move it.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsx)(Ee,{src:H,aspect:e,lineColor:t,overlayOpacity:n,onCropChange:i,onCropComplete:i,overlayControls:({width:e,height:t})=>(0,V.jsxs)(`span`,{className:`lumina-story-chip`,children:[Math.round(e),` x `,Math.round(t)]})}),(0,V.jsxs)(je,{children:[`x `,Math.round(r.x),`, y `,Math.round(r.y),`, w`,` `,Math.round(r.width),`, h `,Math.round(r.height)]})]})})}function Fe({aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r}){let[i,a]=(0,B.useState)(`No crop applied yet`),[o,s]=(0,B.useState)(null);return(0,V.jsx)(z,{title:`ImageCropper`,description:`Select an area, apply the crop, and inspect the returned Blob or Data URL.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,V.jsx)(`div`,{className:`lumina-story-panel`,children:(0,V.jsx)(Oe,{src:H,aspectRatio:e,outputFormat:t,buttonPosition:n,allowReset:r,maxWidth:520,maxHeight:360,onCropComplete:e=>{if(typeof e==`string`){s(e),a(`Data URL length: ${e.length}`);return}let t=URL.createObjectURL(e);s(e=>(e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),t)),a(`Blob size: ${e.size} bytes`)},onError:e=>a(e.message)})}),(0,V.jsxs)(`div`,{className:`lumina-story-panel lumina-story-stack`,children:[(0,V.jsx)(je,{children:i}),o&&(0,V.jsx)(`img`,{className:`lumina-story-image-preview`,src:o,alt:`Cropped output`})]})]})})}var B,V,H,Ie,Le,U,W,G,K,q,J,Y,X,Z,Q,$,Re;t((()=>{B=e(n(),1),Ae(),V=r(),H=`./sample.png`,Ie=`./lumina.png`,Le={title:`LuminaJS React/API Overview`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook coverage for the React exports in src/react: LuminaCanvas, useLumina, ImageAreaSelector, and ImageCropper. The stories also document the shared image editing options used by the component and hook APIs.`}}}},U={name:`React exports and functionality list`,render:()=>(0,V.jsx)(z,{title:`React Exports`,description:`The React entrypoint exposes component, hook, and crop-selection primitives over the LuminaJS chain API.`,children:(0,V.jsxs)(`div`,{className:`lumina-story-grid`,children:[(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`LuminaCanvas`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Renders a processed image to canvas.`}),(0,V.jsx)(`li`,{children:`Supports declarative editing props.`}),(0,V.jsx)(`li`,{children:`Accepts a custom chain callback through filter.`}),(0,V.jsx)(`li`,{children:`Returns canvas, dataUrl, blob, or ImageData through getImage.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`useLumina`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Processes images from a hook.`}),(0,V.jsx)(`li`,{children:`Provides result, loading, error, and getImage.`}),(0,V.jsx)(`li`,{children:`Supports deps for caller-controlled reprocessing.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`ImageAreaSelector`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Interactive selection rectangle over an image.`}),(0,V.jsx)(`li`,{children:`Optional aspect-ratio lock.`}),(0,V.jsx)(`li`,{children:`Selection styling and overlayControls render prop.`})]})]}),(0,V.jsxs)(`div`,{className:`lumina-story-panel`,children:[(0,V.jsx)(`h3`,{children:`ImageCropper`}),(0,V.jsxs)(`ul`,{className:`lumina-story-list`,children:[(0,V.jsx)(`li`,{children:`Complete crop workflow with apply and reset controls.`}),(0,V.jsx)(`li`,{children:`Blob or Data URL output.`}),(0,V.jsx)(`li`,{children:`Custom button classes, styles, positions, and callbacks.`})]})]})]})}),parameters:{docs:{source:{code:`import { LuminaCanvas, useLumina, ImageAreaSelector, ImageCropper } from '@gks101/luminajs/react';`}}}},W={name:`LuminaCanvas/basic canvas`,render:()=>(0,V.jsx)(z,{title:`LuminaCanvas Basic`,description:`Use source plus standard canvas attributes to render an image.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,width:520,height:360})}),parameters:{docs:{source:{code:`<LuminaCanvas source="/sample.png" width={520} height={360} />`}}}},G={name:`LuminaCanvas/adjustments and filters`,args:{brightness:12,contrast:18,grayscale:!1,sepia:!0,gaussianBlur:0,sharpen:!1,emboss:!1,edgeDetection:!1},render:e=>(0,V.jsx)(z,{title:`Adjustments And Filters`,description:`These props map to the shared ImageEditingOptions contract.`,children:(0,V.jsx)(P,{className:`lumina-story-canvas`,source:H,width:520,height:360,brightness:e.brightness,contrast:e.contrast,grayscale:e.grayscale,sepia:e.sepia,gaussianBlur:e.gaussianBlur||void 0,sharpen:e.sharpen,emboss:e.emboss,edgeDetection:e.edgeDetection})}),parameters:{docs:{source:{code:`<LuminaCanvas
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
/>`}}}},J={name:`useLumina/data URL and getImage`,render:()=>(0,V.jsx)(Me,{}),parameters:{docs:{source:{code:`const { result, loading, error, getImage } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 260, height: 180 },
  brightness: 8,
  contrast: 12,
  operations: (chain) => chain.sepia().watermark('useLumina', { x: 16, y: 34 }),
  outputType: 'dataUrl',
});

const blob = await getImage('blob');`}}}},Y={name:`useLumina/ASCII output`,render:()=>(0,V.jsx)(Ne,{}),parameters:{docs:{source:{code:`const { result, loading, error } = useLumina<string>({
  source: '/sample.png',
  resize: { width: 80, height: 44 },
  operations: (chain) => chain.ascii(),
});`}}}},X={name:`ImageAreaSelector/freeform selection`,args:{lineColor:`#1c64d1`,overlayOpacity:.55},render:e=>(0,V.jsx)(Pe,{lineColor:e.lineColor,overlayOpacity:e.overlayOpacity}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
  onCropChange={setCrop}
  onCropComplete={setCrop}
/>`}}}},Z={name:`ImageAreaSelector/aspect locked`,args:{aspect:16/9,lineColor:`#d14d1c`,overlayOpacity:.62},render:e=>(0,V.jsx)(Pe,{aspect:e.aspect,lineColor:e.lineColor,overlayOpacity:e.overlayOpacity}),parameters:{docs:{source:{code:`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
  overlayControls={({ width, height }) => (
    <span>{Math.round(width)} x {Math.round(height)}</span>
  )}
  onCropChange={setCrop}
/>`}}}},Q={name:`ImageCropper/blob output`,args:{aspectRatio:1,outputFormat:`blob`,buttonPosition:`top-left`,allowReset:!0},render:e=>(0,V.jsx)(Fe,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
  onCropComplete={(blob) => console.log(blob)}
  onError={(error) => console.error(error)}
/>`}}}},$={name:`ImageCropper/data URL output and custom controls`,args:{aspectRatio:16/9,outputFormat:`dataUrl`,buttonPosition:`bottom-left`,allowReset:!0},render:e=>(0,V.jsx)(Fe,{aspectRatio:e.aspectRatio,outputFormat:e.outputFormat,buttonPosition:e.buttonPosition,allowReset:e.allowReset}),parameters:{docs:{source:{code:`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  buttonPosition="bottom-right"
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
            <li>Optional aspect-ratio lock.</li>
            <li>Selection styling and overlayControls render prop.</li>
          </ul>
        </div>
        <div className="lumina-story-panel">
          <h3>ImageCropper</h3>
          <ul className="lumina-story-list">
            <li>Complete crop workflow with apply and reset controls.</li>
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
    overlayOpacity: 0.55
  },
  render: args => <ImageAreaSelectorDemo lineColor={args.lineColor} overlayOpacity={args.overlayOpacity} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageAreaSelector
  src="/sample.png"
  lineColor="#1c64d1"
  overlayOpacity={0.55}
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
    overlayOpacity: 0.62
  },
  render: args => <ImageAreaSelectorDemo aspect={args.aspect} lineColor={args.lineColor} overlayOpacity={args.overlayOpacity} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageAreaSelector
  src="/sample.png"
  aspect={16 / 9}
  lineColor="#d14d1c"
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
    allowReset: true
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={1}
  outputFormat="blob"
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
    allowReset: true
  },
  render: args => <ImageCropperDemo aspectRatio={args.aspectRatio} outputFormat={args.outputFormat} buttonPosition={args.buttonPosition} allowReset={args.allowReset} />,
  parameters: {
    docs: {
      source: {
        code: \`<ImageCropper
  src="/sample.png"
  aspectRatio={16 / 9}
  outputFormat="dataUrl"
  buttonPosition="bottom-right"
  applyButtonStyle={{ backgroundColor: '#1c64d1' }}
  resetButtonStyle={{ borderColor: '#c4ccda' }}
  onApply={(crop) => crop.width > 20}
/>\`
      }
    }
  }
}`,...$.parameters?.docs?.source}}},Re=[`ReactExports`,`LuminaCanvasBasic`,`LuminaCanvasAdjustments`,`LuminaCanvasTransformations`,`LuminaCanvasCustomChain`,`UseLuminaDataUrl`,`UseLuminaAscii`,`ImageAreaSelectorFreeform`,`ImageAreaSelectorAspectLocked`,`ImageCropperBlob`,`ImageCropperDataUrl`]}))();export{Z as ImageAreaSelectorAspectLocked,X as ImageAreaSelectorFreeform,Q as ImageCropperBlob,$ as ImageCropperDataUrl,G as LuminaCanvasAdjustments,W as LuminaCanvasBasic,q as LuminaCanvasCustomChain,K as LuminaCanvasTransformations,U as ReactExports,Y as UseLuminaAscii,J as UseLuminaDataUrl,Re as __namedExportsOrder,Le as default};