import{r as e,e as n,j as r,b as t}from"./index-fd32b983.js";import{R as o}from"./ex.styled-5b8bbcdd.js";import{u as i}from"./use-animate-0b591f96.js";import{r as c}from"./resolve-element-fe803a1b.js";import"./SVGVisualElement-41b90df8.js";import"./index-7074372a.js";import"./use-unmount-effect-60e71a01.js";import"./animate-c430b10b.js";const s={any:0,all:1};function a(n,{root:r,margin:t,amount:o,once:i=!1}={}){const[a,l]=e.useState(!1);return e.useEffect((()=>{if(!n.current||i&&a)return;const e={root:r&&r.current||void 0,margin:t,amount:"some"===o?"any":o};return function(e,n,{root:r,margin:t,amount:o="any"}={}){const i=c(e),a=new WeakMap,l=new IntersectionObserver((e=>{e.forEach((e=>{const r=a.get(e.target);if(e.isIntersecting!==Boolean(r))if(e.isIntersecting){const r=n(e);"function"==typeof r?a.set(e.target,r):l.unobserve(e.target)}else r&&(r(e),a.delete(e.target))}))}),{root:r,rootMargin:t,threshold:"number"==typeof o?o:s[o]});return i.forEach((e=>l.observe(e))),()=>l.disconnect()}(n.current,(()=>(l(!0),i?void 0:()=>l(!1))),e)}),[r,n,t,i]),a}function l(){var c=e.useRef(null),s=e.useRef(null),l=i(),u=n(l,2),m=u[0],d=(u[1],a(m,{margin:"-49px"}));return e.useEffect((function(){}),[d]),r(o,{ref:c,children:[t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),t("div",{className:"block"}),r("div",{ref:s,children:[t("button",{onClick:function(){return m.current.remove()},children:"remove"}),t("button",{onClick:function(){var e;return null===(e=c.current)||void 0===e?void 0:e.appendChild(m.current)},children:"add"}),t("button",{onClick:function(){var e;null===(e=s.current)||void 0===e||e.insertAdjacentElement("beforebegin",m.current)},children:"beforebegin"})]}),r("ul",{ref:m,children:[t("li",{children:"1"}),t("li",{children:"2"}),t("li",{children:"3"})]})]})}export{l as default};
