import{r as e,j as t,b as n,e as r}from"./index-d2e29b82.js";import{p as o,o as s,q as i,g as c,t as l,w as a,x as f,u as d,y as h,z as g,A as u,m as p,B as m}from"./motion-f39b5207.js";import{r as v,w as y}from"./wrap-0000c392.js";import{u as w,a as x,b as L}from"./use-velocity-f1958fc3.js";import{b as E,t as W}from"./use-transform-f2526fd8.js";const z=new WeakMap;let b;function k({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=z.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function B(e){e.forEach(k)}function H(e,t){b||"undefined"!=typeof ResizeObserver&&(b=new ResizeObserver(B));const n=v(e);return n.forEach((e=>{let n=z.get(e);n||(n=new Set,z.set(e,n)),n.add(t),null==b||b.observe(e)})),()=>{n.forEach((e=>{const n=z.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==b||b.unobserve(e)}))}}const O=new Set;let S;function Y(e){return O.add(e),S||(S=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};O.forEach((e=>e(t)))},window.addEventListener("resize",S)),()=>{O.delete(e),!O.size&&S&&(S=void 0)}}const F=50,P=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),j={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function A(e,t,n,r){const i=n[t],{length:c,position:l}=j[t],a=i.current,f=n.time;i.current=e["scroll"+l],i.scrollLength=e["scroll"+c]-e["client"+c],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=o(0,i.scrollLength,i.current);const d=r-f;i.velocity=d>F?0:s(i.current-a,d)}const N={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},M={start:0,center:.5,end:1};function R(e,t,n=0){let r=0;if(void 0!==M[e]&&(e=M[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const X=[0,0];function T(e,t,n,r){let o=Array.isArray(e)?e:X,s=0,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,M[e]?e:"0"]),s=R(o[0],n,r),i=R(o[1],t),s-i}const V={x:0,y:0};function G(e,t,n){let{offset:r=N.All}=n;const{target:o=e,axis:s="y"}=n,l="y"===s?"height":"width",a=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):V,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},d={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let h=!t[s].interpolate;const g=r.length;for(let i=0;i<g;i++){const e=T(r[i],d[l],f[l],a[s]);h||e===t[s].interpolatorOffsets[i]||(h=!0),t[s].offset[i]=e}h&&(t[s].interpolate=i(t[s].offset,c(r)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function q(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){A(e,"x",t,n),A(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&G(e,n,r)},notify:()=>t(n)}}const C=new WeakMap,D=new WeakMap,I=new WeakMap,J=e=>e===document.documentElement?window:e;function K(e,{container:t=document.documentElement,...n}={}){let r=I.get(t);r||(r=new Set,I.set(t,r));const o=P(),s=q(t,e,o,n);if(r.add(s),!C.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(f.timestamp)},o=()=>{for(const e of r)e.notify()},s=()=>{l.read(e,!1,!0),l.update(n,!1,!0),l.update(o,!1,!0)};C.set(t,s);const a=J(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&D.set(t,(c=s,"function"==typeof(i=t)?Y(i):H(i,c))),a.addEventListener("scroll",s,{passive:!0})}var i,c;const d=C.get(t);return l.read(d,!1,!0),()=>{var e;a(d);const n=I.get(t);if(!n)return;if(n.delete(s),n.size)return;const r=C.get(t);C.delete(t),r&&(J(t).removeEventListener("scroll",r),null===(e=D.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function Q(e,t){h(Boolean(!t||t.current))}const U=()=>({scrollX:g(0),scrollY:g(0),scrollXProgress:g(0),scrollYProgress:g(0)});function Z({container:t,target:n,layoutEffect:r=!0,...o}={}){const s=d(U);return(r?u:e.useEffect)((()=>(Q(0,n),Q(0,t),K((({x:e,y:t})=>{s.scrollX.set(e.current),s.scrollXProgress.set(e.progress),s.scrollY.set(t.current),s.scrollYProgress.set(t.progress)}),{...o,container:(null==t?void 0:t.current)||void 0,target:(null==n?void 0:n.current)||void 0}))),[]),s}function $(r){var o=r.name,s=e.useRef(null),i=Z({target:s,offset:["0.1 1","1 1"]}).scrollYProgress;return t("div",{ref:s,style:{minHeight:"100vh",color:"#fff3"},children:[n("figure",{className:"progress",style:{position:"sticky",top:0,transform:"translationY(100px)"},children:t("svg",{width:"70",height:"70",viewBox:"0 0 100 100",style:{transform:"rotate(-90deg)"},children:[n("circle",{cx:"50",cy:"50",r:"30",stroke:"#FF03",strokeWidth:6}),n(p.circle,{cx:"50",cy:"50",r:"30",pathLength:"1",className:"indicator",stroke:"#FF0",strokeWidth:6,fill:"none",style:{pathLength:i}})]})}),n("h3",{children:o}),n("p",{children:"a".repeat(1024)}),n("p",{children:"b".repeat(2048)}),n("p",{children:"c".repeat(3072)}),n("p",{children:"d".repeat(4096)}),n(p.p,{children:i})]})}function _(){var r=e.useRef(null),o=Z(),s=w(o.scrollYProgress,{damping:50,stiffness:400,mass:.5}),i=x(o.scrollY),c=w(i,{damping:50,stiffness:400}),l=E(c,[0,2e4],[0,200]),a=Z().scrollY,f=E(a,(function(e){return y(0,360,W(e,[0,100],[0,360],{clamp:!1}))}));return L(f,"change",(function(e){})),t("div",{ref:r,children:[t("h3",{children:["Scroll",n(p.div,{className:"total-progress",style:{background:"#f00",scaleX:s,position:"fixed",width:"100%",height:10,transformOrigin:"left"}})]}),n($,{name:"ex1"}),n($,{name:"ex2"}),n($,{name:"ex3"}),t("figure",{className:"info-panel",children:[t("div",{children:["scrollVelocity: ",n(p.span,{children:i})]}),t("div",{children:["smoothVelocity: ",n(p.span,{children:c})]}),t("div",{children:["velocityFactor: ",n(p.span,{children:l})]}),n("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:n(p.circle,{cx:"50",cy:"50",r:"30",stroke:"#FF03",strokeWidth:6,style:{pathLength:f.get()/360}})}),n(ee,{})]})]})}var ee=function(){var e=w(0),o=w(0),s=E([e,o],(function(e){var t=r(e,2);return t[0]*t[1]}));return t(p.div,{drag:!0,style:{x:e,y:o,z:s,perspective:100},children:["mc (",n(p.span,{children:e}),",",n(p.span,{children:o}),",",n(p.span,{children:s}),")"]})};export{ee as MyComponent,_ as default};
