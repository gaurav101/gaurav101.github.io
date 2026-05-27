(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`sandboxImage`),t=document.getElementById(`sandboxFrame`),n=document.getElementById(`codeOutput`),r=document.getElementById(`codeHeaderLabel`),i=document.getElementById(`btnCopy`),a=document.getElementById(`btnCopyClassList`),o=document.getElementById(`activeClassList`),s=document.getElementById(`toast`),c=document.querySelectorAll(`[data-markup-mode]`),l=document.querySelectorAll(`[data-category="filter"]`),u=document.querySelectorAll(`[data-category="transform"]`),d=document.querySelectorAll(`[data-category="animation"]`),f=document.querySelectorAll(`[data-category="aspect"]`),p=document.querySelectorAll(`[data-category="fit"]`),m=document.querySelectorAll(`[data-category="hover"]`),h=document.querySelectorAll(`[data-preset]`),g=document.getElementById(`classSearchInput`),_=document.getElementById(`classSearchResults`),v=document.getElementById(`btnClearClassSearch`),y=document.getElementById(`btnRandomizeSandbox`),b=document.getElementById(`btnResetSandbox`),x=Array.from(document.querySelectorAll(`.control-btn[data-class]`)),ee=new Map(x.map(e=>[e.dataset.class,e])),S=Array.from(new Set(x.map(e=>e.dataset.class))).sort(),C,w=`html`,T=new Set,E=null,D=null,O=null,k=`lum-fit-cover`,A=null,j={imgClasses:[],frameClasses:[],needsFrameWrapper:!1},M=[`zoom`,`shrink`,`rotate`,`tilt`,`flip`,`grayscale`,`blur`,`bright`,`sepia`,`invert`],N={portraitPop:{filters:[`lum-bright-125`,`lum-contrast-125`,`lum-shadow`],transform:`lum-scale-105`,animation:`lum-animate-float`,aspect:`lum-aspect-portrait`,fit:`lum-fit-cover`,hover:`lum-hover-grayscale-off`},cinematicHero:{filters:[`lum-contrast-150`,`lum-shadow-lg`],transform:null,animation:`lum-animate-kenburns`,aspect:`lum-aspect-cinematic`,fit:`lum-fit-cover`,hover:`lum-hover-bright-on`},productCard:{filters:[`lum-bright-110`,`lum-shadow`],transform:null,animation:null,aspect:`lum-aspect-square`,fit:`lum-fit-contain`,hover:`lum-hover-zoom`},monoEditorial:{filters:[`lum-grayscale`,`lum-contrast-150`,`lum-bright-75`],transform:null,animation:`lum-animate-pulse`,aspect:`lum-aspect-standard`,fit:`lum-fit-cover`,hover:`lum-hover-grayscale-off`},neonShowcase:{filters:[`lum-hue-90`,`lum-saturate-200`,`lum-shadow-glow`],transform:`lum-tilt-r`,animation:`lum-animate-breathe`,aspect:`lum-aspect-video`,fit:`lum-fit-cover`,hover:`lum-hover-rotate-3d`}},P=e=>M.some(t=>e.includes(t)),F=e=>e[Math.floor(Math.random()*e.length)];function I(e){s&&(s.textContent=e,s.classList.add(`show`),clearTimeout(C),C=setTimeout(()=>s.classList.remove(`show`),1800))}async function L(e,t){if(e)try{await navigator.clipboard.writeText(e),I(t)}catch(e){console.error(`Failed to copy:`,e),I(`Copy failed`)}}function R(){c.forEach(e=>{e.classList.toggle(`active`,e.dataset.markupMode===w)}),r.textContent=w===`jsx`?`Generated JSX Markup`:`Generated HTML Markup`}function z(){l.forEach(e=>{e.classList.toggle(`active`,T.has(e.dataset.class))}),u.forEach(e=>{e.classList.toggle(`active`,E===e.dataset.class)}),d.forEach(e=>{e.classList.toggle(`active`,D===e.dataset.class)}),f.forEach(e=>{e.classList.toggle(`active`,O===e.dataset.class)}),p.forEach(e=>{e.classList.toggle(`active`,k===e.dataset.class)}),m.forEach(e=>{e.classList.toggle(`active`,A===e.dataset.class)})}function B(){let e=[`lum-img`],t=[`lum-frame`];return k&&e.push(k),T.size&&e.push(...Array.from(T)),E&&e.push(E),D&&e.push(D),O&&t.push(O),A&&(P(A)?e.push(A):t.push(A)),{imgClasses:e,frameClasses:t,needsFrameWrapper:t.length>1}}function V(){if(!o)return;let e=[];j.imgClasses.forEach(t=>{e.push(`
        <button
          class="class-chip"
          type="button"
          data-copy-value="${t}"
          data-copy-label="Class copied: ${t}"
          title="Copy ${t}"
        >
          .${t}
        </button>
      `)}),j.needsFrameWrapper&&j.frameClasses.forEach(t=>{e.push(`
          <button
            class="class-chip"
            type="button"
            data-copy-value="${t}"
            data-copy-label="Class copied: ${t}"
            title="Copy ${t}"
          >
            .${t}
          </button>
        `)}),o.innerHTML=e.join(``)}function H(e=``){if(!_)return;let t=e.trim().toLowerCase(),n=t?S.filter(e=>e.toLowerCase().includes(t)):S;if(!n.length){_.innerHTML=`<div class="class-result-empty">No class matches found.</div>`;return}_.innerHTML=n.map(e=>`
        <div class="class-result-row">
          <span class="class-result-name">.${e}</span>
          <button
            type="button"
            class="class-result-btn"
            data-class-apply="${e}"
          >
            Apply
          </button>
          <button
            type="button"
            class="class-result-btn"
            data-class-copy="${e}"
          >
            Copy
          </button>
        </div>
      `).join(``)}function U(){j=B();let r=j.imgClasses.join(` `),i=j.frameClasses.join(` `);e.className=r,t.className=i;let a=``;a=w===`jsx`?j.needsFrameWrapper?`<div className="${i}">
  <img
    className="${r}"
    src="landscape.jpg"
    alt="Demo Image"
  />
</div>`:`<img
  className="${r}"
  src="landscape.jpg"
  alt="Demo Image"
/>`:j.needsFrameWrapper?`<div class="${i}">
  <img
    class="${r}"
    src="landscape.jpg"
    alt="Demo Image"
  />
</div>`:`<img
  class="${r}"
  src="landscape.jpg"
  alt="Demo Image"
/>`,n.textContent=a,V()}function W(e){let t=N[e];t&&(T=new Set(t.filters||[]),E=t.transform||null,D=t.animation||null,O=t.aspect||null,k=t.fit||`lum-fit-cover`,A=t.hover||null,z(),U(),I(`Preset applied: ${e}`))}function G(){let e=Array.from(l).map(e=>e.dataset.class),t=Array.from(u).map(e=>e.dataset.class),n=Array.from(d).map(e=>e.dataset.class),r=Array.from(f).map(e=>e.dataset.class),i=Array.from(p).map(e=>e.dataset.class),a=Array.from(m).map(e=>e.dataset.class),o=Math.floor(Math.random()*4),s=[...e].sort(()=>Math.random()-.5);T=new Set(s.slice(0,o)),E=Math.random()>.45?F(t):null,D=Math.random()>.4?F(n):null,O=Math.random()>.4?F(r):null,k=F(i),A=Math.random()>.35?F(a):null,z(),U(),I(`Sandbox randomized`)}function K(){T=new Set,E=null,D=null,O=null,k=`lum-fit-cover`,A=null,z(),U()}R(),z(),U(),H(),c.forEach(e=>{e.addEventListener(`click`,()=>{w=e.dataset.markupMode||`html`,R(),U()})}),l.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.class;T.has(t)?T.delete(t):T.add(t),z(),U()})}),u.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.class;E=E===t?null:t,z(),U()})}),d.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.class;D=D===t?null:t,z(),U()})}),f.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.class;O=O===t?null:t,z(),U()})}),p.forEach(e=>{e.addEventListener(`click`,()=>{k=e.dataset.class,z(),U()})}),m.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.class;A=A===t?null:t,z(),U()})}),h.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.preset;W(t)})}),y.addEventListener(`click`,G),b.addEventListener(`click`,K),g.addEventListener(`input`,()=>{H(g.value)}),g.addEventListener(`keydown`,e=>{e.key===`Escape`&&(g.value=``,H(``))}),v.addEventListener(`click`,()=>{g.value=``,g.focus(),H(``)}),_.addEventListener(`click`,e=>{let t=e.target.getAttribute(`data-class-apply`),n=e.target.getAttribute(`data-class-copy`);if(t){let e=ee.get(t);e&&e.click(),I(`Applied .${t}`);return}n&&L(n,`Class copied: ${n}`)}),i.addEventListener(`click`,()=>{let e=w===`jsx`?`Generated JSX copied`:`Generated HTML copied`;L(n.textContent,e)}),a.addEventListener(`click`,()=>{let e=[`img: ${j.imgClasses.join(` `)}`];j.needsFrameWrapper&&e.push(`frame: ${j.frameClasses.join(` `)}`),L(e.join(`
`),`Class list copied`)}),o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-copy-value]`);t&&L(t.getAttribute(`data-copy-value`),t.getAttribute(`data-copy-label`)||`Class copied`)}),document.querySelectorAll(`[data-copy-target]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-copy-target`),n=t?document.getElementById(t):null;if(!n)return;let r=e.getAttribute(`data-copy-label`)||`Snippet copied`;L(n.textContent.trim(),r)})}),document.querySelectorAll(`[data-copy-value]`).forEach(e=>{e.addEventListener(`click`,()=>{L(e.getAttribute(`data-copy-value`),e.getAttribute(`data-copy-label`)||`Class copied`)})});let q=document.getElementById(`customScale`),J=document.getElementById(`customRotate`),Y=document.getElementById(`customBlur`),X=document.getElementById(`customGray`),Z=document.getElementById(`customRotateY`),te=document.getElementById(`customScaleVal`),ne=document.getElementById(`customRotateVal`),re=document.getElementById(`customBlurVal`),ie=document.getElementById(`customGrayVal`),ae=document.getElementById(`customRotateYVal`),Q=document.getElementById(`customizerImage`);function oe(){let e=q.value,t=J.value,n=Y.value,r=X.value,i=Z.value;te.textContent=e,ne.textContent=`${t}deg`,re.textContent=`${n}px`,ie.textContent=`${r}%`,ae.textContent=`${i}deg`,Q.style.setProperty(`--lum-scale`,e),Q.style.setProperty(`--lum-rotate`,`${t}deg`),Q.style.setProperty(`--lum-blur`,`blur(${n}px)`),Q.style.setProperty(`--lum-grayscale`,`grayscale(${r}%)`),Q.style.setProperty(`--lum-rotate-y`,`${i}deg`)}[q,J,Y,X,Z].forEach(e=>{e.addEventListener(`input`,oe)});let $=document.querySelectorAll(`.lum-frame, .lum-img`);$.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.classList.contains(`lum-touch-active`);$.forEach(e=>e.classList.remove(`lum-touch-active`)),n||e.classList.add(`lum-touch-active`)})}),document.addEventListener(`click`,e=>{!e.target.closest(`.lum-frame`)&&!e.target.closest(`.lum-img`)&&$.forEach(e=>e.classList.remove(`lum-touch-active`))}),document.addEventListener(`keydown`,e=>{e.key===`/`&&document.activeElement!==g&&(e.preventDefault(),g.focus())})});