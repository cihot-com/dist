import{_ as e,c as t,i as o,s as n,d as r,e as s,f as a,T as i}from"./Box-ff359d21.js";import{C as l}from"./index-fd32b983.js";const m=["variant"];function u(e){return 0===e.length}function c(o){const{variant:n}=o,r=e(o,m);let s=n||"";return Object.keys(r).sort().forEach((e=>{s+="color"===e?u(s)?o[e]:t(o[e]):`${u(s)?e:t(e)}${t(o[e].toString())}`})),s}const h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function p(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const d=r();function f({defaultTheme:e,theme:t,themeId:o}){return n=t,0===Object.keys(n).length?e:t[o]||t;var n}const v=a(),y=e=>p(e)&&"classes"!==e,_=function(t={}){const{themeId:r,defaultTheme:a=d,rootShouldForwardProp:i=p,slotShouldForwardProp:m=p}=t,u=e=>s(l({},e,{theme:f(l({},e,{defaultTheme:a,themeId:r}))}));return u.__mui_systemSx=!0,(t,s={})=>{o(t,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:d,slot:v,skipVariantsResolver:y,skipSx:_,overridesResolver:w}=s,S=e(s,h),g=void 0!==y?y:v&&"Root"!==v||!1,T=_||!1;let x=p;"Root"===v?x=i:v?x=m:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(t)&&(x=void 0);const I=n(t,l({shouldForwardProp:x,label:undefined},S)),k=(e,...o)=>{const n=o?o.map((e=>"function"==typeof e&&e.__emotion_real!==e?t=>e(l({},t,{theme:f(l({},t,{defaultTheme:a,themeId:r}))})):e)):[];let s=e;d&&w&&n.push((e=>{const t=f(l({},e,{defaultTheme:a,themeId:r})),o=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(d,t);if(o){const n={};return Object.entries(o).forEach((([o,r])=>{n[o]="function"==typeof r?r(l({},e,{theme:t})):r})),w(e,n)}return null})),d&&!g&&n.push((e=>{const t=f(l({},e,{defaultTheme:a,themeId:r}));return((e,t,o,n)=>{var r,s;const{ownerState:a={}}=e,i=[],l=null==o||null==(r=o.components)||null==(s=r[n])?void 0:s.variants;return l&&l.forEach((o=>{let n=!0;Object.keys(o.props).forEach((t=>{a[t]!==o.props[t]&&e[t]!==o.props[t]&&(n=!1)})),n&&i.push(t[c(o.props)])})),i})(e,((e,t)=>{let o=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(o=t.components[e].variants);const n={};return o.forEach((e=>{const t=c(e.props);n[t]=e.style})),n})(d,t),t,d)})),T||n.push(u);const i=n.length-o.length;if(Array.isArray(e)&&i>0){const t=new Array(i).fill("");s=[...e,...t],s.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(s=t=>e(l({},t,{theme:f(l({},t,{defaultTheme:a,themeId:r}))})));const m=I(s,...n);return t.muiName&&(m.muiName=t.muiName),m};return I.withConfig&&(k.withConfig=I.withConfig),k}}({themeId:i,defaultTheme:v,rootShouldForwardProp:y});export{v as d,y as r,_ as s};
