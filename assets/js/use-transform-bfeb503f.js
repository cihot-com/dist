import{b as t,e as n,c as r,C as o,u as e}from"./SVGVisualElement-210c37ed.js";import{u}from"./use-motion-value-cdb7a71a.js";import{u as s}from"./motion-abf7f7de.js";const c=t=>(t=>"object"==typeof t&&t.mix)(t)?t.mix:void 0;function i(t,o){const e=u(o()),c=()=>e.set(o());return c(),s((()=>{const o=()=>r.update(c,!1,!0),e=t.map((t=>t.on("change",o)));return()=>{e.forEach((t=>t())),n(c)}})),e}function a(n,r,e,u){if("function"==typeof n)return function(t){o.current=[],t();const n=i(o.current,t);return o.current=void 0,n}(n);const s="function"==typeof r?r:function(...n){const r=!Array.isArray(n[0]),o=r?0:-1,e=n[0+o],u=n[1+o],s=n[2+o],i=n[3+o],a=t(u,s,{mixer:c(s[0]),...i});return r?a(e):a}(r,e,u);return Array.isArray(n)?f(n,s):f([n],(([t])=>s(t)))}function f(t,n){const r=e((()=>[]));return i(t,(()=>{r.length=0;const o=t.length;for(let n=0;n<o;n++)r[n]=t[n].get();return n(r)}))}export{a,i as u};