import{b as t,e as n,c as r,C as o,u as e}from"./SVGVisualElement-77214677.js";import{u}from"./use-motion-value-9c2a72a8.js";import{u as s}from"./motion-1e207df9.js";const c=t=>(t=>"object"==typeof t&&t.mix)(t)?t.mix:void 0;function a(t,o){const e=u(o()),c=()=>e.set(o());return c(),s((()=>{const o=()=>r.update(c,!1,!0),e=t.map((t=>t.on("change",o)));return()=>{e.forEach((t=>t())),n(c)}})),e}function i(n,r,e,u){if("function"==typeof n)return function(t){o.current=[],t();const n=a(o.current,t);return o.current=void 0,n}(n);const s="function"==typeof r?r:function(...n){const r=!Array.isArray(n[0]),o=r?0:-1,e=n[0+o],u=n[1+o],s=n[2+o],a=n[3+o],i=t(u,s,{mixer:c(s[0]),...a});return r?i(e):i}(r,e,u);return Array.isArray(n)?f(n,s):f([n],(([t])=>s(t)))}function f(t,n){const r=e((()=>[]));return a(t,(()=>{r.length=0;const o=t.length;for(let n=0;n<o;n++)r[n]=t[n].get();return n(r)}))}export{i as a,a as u};
