import{D as r}from"./motion-f39b5207.js";function e(e,t,o){var n;if("string"==typeof e){let l=document;t&&(r(Boolean(t.current)),l=t.current),o?(null!==(n=o[e])&&void 0!==n||(o[e]=l.querySelectorAll(e)),e=o[e]):e=l.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const t=(r,e,t)=>{const o=e-r;return((t-r)%o+o)%o+r};export{e as r,t as w};
