import{_ as e,n as t,b as r,T as n}from"./index-890d70c3.js";const o={black:"#000",white:"#fff"},i={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},a={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},s={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},p={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},f={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},c={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function u(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function d(e){if(!u(e))return e;const t={};return Object.keys(e).forEach((r=>{t[r]=d(e[r])})),t}function m(t,r,n={clone:!0}){const o=n.clone?e({},t):t;return u(t)&&u(r)&&Object.keys(r).forEach((e=>{"__proto__"!==e&&(u(r[e])&&e in t&&u(t[e])?o[e]=m(t[e],r[e],n):n.clone?o[e]=u(r[e])?d(r[e]):r[e]:o[e]=r[e])})),o}function g(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function y(e){if("string"!=typeof e)throw new Error(g(7));return e.charAt(0).toUpperCase()+e.slice(1)}const h=e=>e,b=(()=>{let e=h;return{configure(t){e=t},generate:t=>e(t),reset(){e=h}}})(),x="$$material";function k(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function v(e,r){return t(e,r)}const A=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},O=["values","unit","step"],w=t=>{const r=Object.keys(t).map((e=>({key:e,val:t[e]})))||[];return r.sort(((e,t)=>e.val-t.val)),r.reduce(((t,r)=>e({},t,{[r.key]:r.val})),{})};const $={borderRadius:4};function S(e,t){return t?m(e,t,{clone:!1}):e}const j={xs:0,sm:600,md:900,lg:1200,xl:1536},T={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${j[e]}px)`};function K(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const e=n.breakpoints||T;return t.reduce(((n,o,i)=>(n[e.up(e.keys[i])]=r(t[i]),n)),{})}if("object"==typeof t){const e=n.breakpoints||T;return Object.keys(t).reduce(((n,o)=>{if(-1!==Object.keys(e.values||j).indexOf(o)){n[e.up(o)]=r(t[o],o)}else{const e=o;n[e]=t[e]}return n}),{})}return r(t)}function R(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce(((t,r)=>(t[e.up(r)]={},t)),{}))||{}}function C(e,t){return e.reduce(((e,t)=>{const r=e[t];return(!r||0===Object.keys(r).length)&&delete e[t],e}),t)}function B(e,...t){const r=R(e),n=[r,...t].reduce(((e,t)=>m(e,t)),{});return C(Object.keys(r),n)}function I({values:e,breakpoints:t,base:r}){const n=r||function(e,t){if("object"!=typeof e)return{};const r={},n=Object.keys(t);return Array.isArray(e)?n.forEach(((t,n)=>{n<e.length&&(r[t]=!0)})):n.forEach((t=>{null!=e[t]&&(r[t]=!0)})),r}(e,t),o=Object.keys(n);if(0===o.length)return e;let i;return o.reduce(((t,r,n)=>(Array.isArray(e)?(t[r]=null!=e[n]?e[n]:e[i],i=n):"object"==typeof e?(t[r]=null!=e[r]?e[r]:e[i],i=r):t[r]=e,t)),{})}function W(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){const r=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=r)return r}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function P(e,t,r,n=r){let o;return o="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:W(e,r)||n,t&&(o=t(o,n,e)),o}function _(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:o}=e,i=e=>{if(null==e[t])return null;const i=e[t],a=W(e.theme,n)||{};return K(e,i,(e=>{let n=P(a,o,e);return e===n&&"string"==typeof e&&(n=P(a,o,`${t}${"default"===e?"":y(e)}`,e)),!1===r?n:{[r]:n}}))};return i.propTypes={},i.filterProps=[t],i}const z={m:"margin",p:"padding"},E={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},M={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},F=function(e){const t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}((e=>{if(e.length>2){if(!M[e])return[e];e=M[e]}const[t,r]=e.split(""),n=z[t],o=E[r]||"";return Array.isArray(o)?o.map((e=>n+e)):[n+o]})),G=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],L=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];function H(e,t,r,n){var o;const i=null!=(o=W(e,t,!1))?o:r;return"number"==typeof i?e=>"string"==typeof e?e:i*e:Array.isArray(i)?e=>"string"==typeof e?e:i[e]:"function"==typeof i?i:()=>{}}function X(e){return H(e,"spacing",8)}function Y(e,t){if("string"==typeof t||null==t)return t;const r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}function D(e,t,r,n){if(-1===t.indexOf(r))return null;const o=function(e,t){return r=>e.reduce(((e,n)=>(e[n]=Y(t,r),e)),{})}(F(r),n);return K(e,e[r],o)}function U(e,t){const r=X(e.theme);return Object.keys(e).map((n=>D(e,t,n,r))).reduce(S,{})}function N(e){return U(e,G)}function V(e){return U(e,L)}function q(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((r=>{e[r]=t})),e)),{}),r=e=>Object.keys(e).reduce(((r,n)=>t[n]?S(r,t[n](e)):r),{});return r.propTypes={},r.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),r}function J(e){return"number"!=typeof e?e:`${e}px solid`}N.propTypes={},N.filterProps=G,V.propTypes={},V.filterProps=L;const Q=_({prop:"border",themeKey:"borders",transform:J}),Z=_({prop:"borderTop",themeKey:"borders",transform:J}),ee=_({prop:"borderRight",themeKey:"borders",transform:J}),te=_({prop:"borderBottom",themeKey:"borders",transform:J}),re=_({prop:"borderLeft",themeKey:"borders",transform:J}),ne=_({prop:"borderColor",themeKey:"palette"}),oe=_({prop:"borderTopColor",themeKey:"palette"}),ie=_({prop:"borderRightColor",themeKey:"palette"}),ae=_({prop:"borderBottomColor",themeKey:"palette"}),se=_({prop:"borderLeftColor",themeKey:"palette"}),le=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=H(e.theme,"shape.borderRadius",4),r=e=>({borderRadius:Y(t,e)});return K(e,e.borderRadius,r)}return null};le.propTypes={},le.filterProps=["borderRadius"],q(Q,Z,ee,te,re,ne,oe,ie,ae,se,le);const pe=e=>{if(void 0!==e.gap&&null!==e.gap){const t=H(e.theme,"spacing",8),r=e=>({gap:Y(t,e)});return K(e,e.gap,r)}return null};pe.propTypes={},pe.filterProps=["gap"];const fe=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=H(e.theme,"spacing",8),r=e=>({columnGap:Y(t,e)});return K(e,e.columnGap,r)}return null};fe.propTypes={},fe.filterProps=["columnGap"];const ce=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=H(e.theme,"spacing",8),r=e=>({rowGap:Y(t,e)});return K(e,e.rowGap,r)}return null};ce.propTypes={},ce.filterProps=["rowGap"];function ue(e,t){return"grey"===t?t:e}q(pe,fe,ce,_({prop:"gridColumn"}),_({prop:"gridRow"}),_({prop:"gridAutoFlow"}),_({prop:"gridAutoColumns"}),_({prop:"gridAutoRows"}),_({prop:"gridTemplateColumns"}),_({prop:"gridTemplateRows"}),_({prop:"gridTemplateAreas"}),_({prop:"gridArea"}));function de(e){return e<=1&&0!==e?100*e+"%":e}q(_({prop:"color",themeKey:"palette",transform:ue}),_({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ue}),_({prop:"backgroundColor",themeKey:"palette",transform:ue}));const me=_({prop:"width",transform:de}),ge=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var r;return{maxWidth:(null==(r=e.theme)||null==(r=r.breakpoints)||null==(r=r.values)?void 0:r[t])||j[t]||de(t)}};return K(e,e.maxWidth,t)}return null};ge.filterProps=["maxWidth"];const ye=_({prop:"minWidth",transform:de}),he=_({prop:"height",transform:de}),be=_({prop:"maxHeight",transform:de}),xe=_({prop:"minHeight",transform:de});_({prop:"size",cssProperty:"width",transform:de}),_({prop:"size",cssProperty:"height",transform:de});q(me,ge,ye,he,be,xe,_({prop:"boxSizing"}));const ke={border:{themeKey:"borders",transform:J},borderTop:{themeKey:"borders",transform:J},borderRight:{themeKey:"borders",transform:J},borderBottom:{themeKey:"borders",transform:J},borderLeft:{themeKey:"borders",transform:J},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:le},color:{themeKey:"palette",transform:ue},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ue},backgroundColor:{themeKey:"palette",transform:ue},p:{style:V},pt:{style:V},pr:{style:V},pb:{style:V},pl:{style:V},px:{style:V},py:{style:V},padding:{style:V},paddingTop:{style:V},paddingRight:{style:V},paddingBottom:{style:V},paddingLeft:{style:V},paddingX:{style:V},paddingY:{style:V},paddingInline:{style:V},paddingInlineStart:{style:V},paddingInlineEnd:{style:V},paddingBlock:{style:V},paddingBlockStart:{style:V},paddingBlockEnd:{style:V},m:{style:N},mt:{style:N},mr:{style:N},mb:{style:N},ml:{style:N},mx:{style:N},my:{style:N},margin:{style:N},marginTop:{style:N},marginRight:{style:N},marginBottom:{style:N},marginLeft:{style:N},marginX:{style:N},marginY:{style:N},marginInline:{style:N},marginInlineStart:{style:N},marginInlineEnd:{style:N},marginBlock:{style:N},marginBlockStart:{style:N},marginBlockEnd:{style:N},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:pe},rowGap:{style:ce},columnGap:{style:fe},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:de},maxWidth:{style:ge},minWidth:{transform:de},height:{transform:de},maxHeight:{transform:de},minHeight:{transform:de},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};const ve=function(){function e(e,t,r,n){const o={[e]:t,theme:r},i=n[e];if(!i)return{[e]:t};const{cssProperty:a=e,themeKey:s,transform:l,style:p}=i;if(null==t)return null;if("typography"===s&&"inherit"===t)return{[e]:t};const f=W(r,s)||{};if(p)return p(o);return K(o,t,(t=>{let r=P(f,l,t);return t===r&&"string"==typeof t&&(r=P(f,l,`${e}${"default"===t?"":y(t)}`,t)),!1===a?r:{[a]:r}}))}return function t(r){var n;const{sx:o,theme:i={}}=r||{};if(!o)return null;const a=null!=(n=i.unstable_sxConfig)?n:ke;function s(r){let n=r;if("function"==typeof r)n=r(i);else if("object"!=typeof r)return r;if(!n)return null;const o=R(i.breakpoints),s=Object.keys(o);let l=o;return Object.keys(n).forEach((r=>{const o=(s=n[r],p=i,"function"==typeof s?s(p):s);var s,p;if(null!=o)if("object"==typeof o)if(a[r])l=S(l,e(r,o,i,a));else{const e=K({theme:i},o,(e=>({[r]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),r=new Set(t);return e.every((e=>r.size===Object.keys(e).length))}(e,o)?l=S(l,e):l[r]=t({sx:o,theme:i})}else l=S(l,e(r,o,i,a))})),C(s,l)}return Array.isArray(o)?o.map(s):s(o)}}();ve.filterProps=["sx"];const Ae=ve,Oe=["breakpoints","palette","spacing","shape"];function we(t={},...r){const{breakpoints:n={},palette:o={},spacing:i,shape:a={}}=t,s=k(t,Oe),l=function(t){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:o=5}=t,i=k(t,O),a=w(r),s=Object.keys(a);function l(e){return`@media (min-width:${"number"==typeof r[e]?r[e]:e}${n})`}function p(e){return`@media (max-width:${("number"==typeof r[e]?r[e]:e)-o/100}${n})`}function f(e,t){const i=s.indexOf(t);return`@media (min-width:${"number"==typeof r[e]?r[e]:e}${n}) and (max-width:${(-1!==i&&"number"==typeof r[s[i]]?r[s[i]]:t)-o/100}${n})`}return e({keys:s,values:a,up:l,down:p,between:f,only:function(e){return s.indexOf(e)+1<s.length?f(e,s[s.indexOf(e)+1]):l(e)},not:function(e){const t=s.indexOf(e);return 0===t?l(s[1]):t===s.length-1?p(s[t]):f(e,s[s.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},i)}(n),p=function(e=8){if(e.mui)return e;const t=X({spacing:e}),r=(...e)=>(0===e.length?[1]:e).map((e=>{const r=t(e);return"number"==typeof r?`${r}px`:r})).join(" ");return r.mui=!0,r}(i);let f=m({breakpoints:l,direction:"ltr",components:{},palette:e({mode:"light"},o),spacing:p,shape:e({},$,a)},s);return f=r.reduce(((e,t)=>m(e,t)),f),f.unstable_sxConfig=e({},ke,null==s?void 0:s.unstable_sxConfig),f.unstable_sx=function(e){return Ae({sx:e,theme:this})},f}function $e(e=null){const t=r.useContext(n);return t&&(o=t,0!==Object.keys(o).length)?t:e;var o}const Se=we();function je(e=Se){return $e(e)}function Te(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Te(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function Ke(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Te(e))&&(n&&(n+=" "),n+=t);return n}function Re(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function Ce(e){if(e.type)return e;if("#"===e.charAt(0))return Ce(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&1===r[0].length&&(r=r.map((e=>e+e))),r?`rgb${4===r.length?"a":""}(${r.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(r))throw new Error(g(9,e));let n,o=e.substring(t+1,e.length-1);if("color"===r){if(o=o.split(" "),n=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n))throw new Error(g(10,n))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:r,values:o,colorSpace:n}}function Be(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return-1!==t.indexOf("rgb")?n=n.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function Ie(e){let t="hsl"===(e=Ce(e)).type||"hsla"===e.type?Ce(function(e){e=Ce(e);const{values:t}=e,r=t[0],n=t[1]/100,o=t[2]/100,i=n*Math.min(o,1-o),a=(e,t=(e+r/30)%12)=>o-i*Math.max(Math.min(t-3,9-t,1),-1);let s="rgb";const l=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(s+="a",l.push(t[3])),Be({type:s,values:l})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function We(e,t){return e=Ce(e),t=Re(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,Be(e)}const Pe=["mode","contrastThreshold","tonalOffset"],_e={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:o.white,default:o.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ze={text:{primary:o.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:o.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ee(e,t,r,n){const o=n.light||n,i=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=function(e,t){if(e=Ce(e),t=Re(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return Be(e)}(e.main,o):"dark"===t&&(e.dark=function(e,t){if(e=Ce(e),t=Re(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return Be(e)}(e.main,i)))}function Me(t){const{mode:r="light",contrastThreshold:n=3,tonalOffset:u=.2}=t,d=k(t,Pe),y=t.primary||function(e="light"){return"dark"===e?{main:s[200],light:s[50],dark:s[400]}:{main:s[700],light:s[400],dark:s[800]}}(r),h=t.secondary||function(e="light"){return"dark"===e?{main:a[200],light:a[50],dark:a[400]}:{main:a[500],light:a[300],dark:a[700]}}(r),b=t.error||function(e="light"){return"dark"===e?{main:i[500],light:i[300],dark:i[700]}:{main:i[700],light:i[400],dark:i[800]}}(r),x=t.info||function(e="light"){return"dark"===e?{main:l[400],light:l[300],dark:l[700]}:{main:l[700],light:l[500],dark:l[900]}}(r),v=t.success||function(e="light"){return"dark"===e?{main:p[400],light:p[300],dark:p[700]}:{main:p[800],light:p[500],dark:p[900]}}(r),A=t.warning||function(e="light"){return"dark"===e?{main:f[400],light:f[300],dark:f[700]}:{main:"#ed6c02",light:f[500],dark:f[900]}}(r);function O(e){const t=function(e,t){const r=Ie(e),n=Ie(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}(e,ze.text.primary)>=n?ze.text.primary:_e.text.primary;return t}const w=({color:t,name:r,mainShade:n=500,lightShade:o=300,darkShade:i=700})=>{if(!(t=e({},t)).main&&t[n]&&(t.main=t[n]),!t.hasOwnProperty("main"))throw new Error(g(11,r?` (${r})`:"",n));if("string"!=typeof t.main)throw new Error(g(12,r?` (${r})`:"",JSON.stringify(t.main)));return Ee(t,"light",o,u),Ee(t,"dark",i,u),t.contrastText||(t.contrastText=O(t.main)),t},$={dark:ze,light:_e};return m(e({common:e({},o),mode:r,primary:w({color:y,name:"primary"}),secondary:w({color:h,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:b,name:"error"}),warning:w({color:A,name:"warning"}),info:w({color:x,name:"info"}),success:w({color:v,name:"success"}),grey:c,contrastThreshold:n,getContrastText:O,augmentColor:w,tonalOffset:u},$[r]),d)}const Fe=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const Ge={textTransform:"uppercase"},Le='"Roboto", "Helvetica", "Arial", sans-serif';function He(t,r){const n="function"==typeof r?r(t):r,{fontFamily:o=Le,fontSize:i=14,fontWeightLight:a=300,fontWeightRegular:s=400,fontWeightMedium:l=500,fontWeightBold:p=700,htmlFontSize:f=16,allVariants:c,pxToRem:u}=n,d=k(n,Fe),g=i/14,y=u||(e=>e/f*g+"rem"),h=(t,r,n,i,a)=>{return e({fontFamily:o,fontWeight:t,fontSize:y(r),lineHeight:n},o===Le?{letterSpacing:(s=i/r,Math.round(1e5*s)/1e5)+"em"}:{},a,c);var s},b={h1:h(a,96,1.167,-1.5),h2:h(a,60,1.2,-.5),h3:h(s,48,1.167,0),h4:h(s,34,1.235,.25),h5:h(s,24,1.334,0),h6:h(l,20,1.6,.15),subtitle1:h(s,16,1.75,.15),subtitle2:h(l,14,1.57,.1),body1:h(s,16,1.5,.15),body2:h(s,14,1.43,.15),button:h(l,14,1.75,.4,Ge),caption:h(s,12,1.66,.4),overline:h(s,12,2.66,1,Ge),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return m(e({htmlFontSize:f,pxToRem:y,fontFamily:o,fontSize:i,fontWeightLight:a,fontWeightRegular:s,fontWeightMedium:l,fontWeightBold:p},b),d,{clone:!1})}function Xe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}const Ye=["none",Xe(0,2,1,-1,0,1,1,0,0,1,3,0),Xe(0,3,1,-2,0,2,2,0,0,1,5,0),Xe(0,3,3,-2,0,3,4,0,0,1,8,0),Xe(0,2,4,-1,0,4,5,0,0,1,10,0),Xe(0,3,5,-1,0,5,8,0,0,1,14,0),Xe(0,3,5,-1,0,6,10,0,0,1,18,0),Xe(0,4,5,-2,0,7,10,1,0,2,16,1),Xe(0,5,5,-3,0,8,10,1,0,3,14,2),Xe(0,5,6,-3,0,9,12,1,0,3,16,2),Xe(0,6,6,-3,0,10,14,1,0,4,18,3),Xe(0,6,7,-4,0,11,15,1,0,4,20,3),Xe(0,7,8,-4,0,12,17,2,0,5,22,4),Xe(0,7,8,-4,0,13,19,2,0,5,24,4),Xe(0,7,9,-4,0,14,21,2,0,5,26,4),Xe(0,8,9,-5,0,15,22,2,0,6,28,5),Xe(0,8,10,-5,0,16,24,2,0,6,30,5),Xe(0,8,11,-5,0,17,26,2,0,6,32,5),Xe(0,9,11,-5,0,18,28,2,0,7,34,6),Xe(0,9,12,-6,0,19,29,2,0,7,36,6),Xe(0,10,13,-6,0,20,31,3,0,8,38,7),Xe(0,10,13,-6,0,21,33,3,0,8,40,7),Xe(0,10,14,-6,0,22,35,3,0,8,42,7),Xe(0,11,14,-7,0,23,36,3,0,9,44,8),Xe(0,11,15,-7,0,24,38,3,0,9,46,8)],De=["duration","easing","delay"],Ue={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Ne={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ve(e){return`${Math.round(e)}ms`}function qe(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Je(t){const r=e({},Ue,t.easing),n=e({},Ne,t.duration);return e({getAutoHeightDuration:qe,create:(e=["all"],t={})=>{const{duration:o=n.standard,easing:i=r.easeInOut,delay:a=0}=t;return k(t,De),(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:Ve(o)} ${i} ${"string"==typeof a?a:Ve(a)}`)).join(",")}},t,{easing:r,duration:n})}const Qe={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Ze=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function et(t={},...r){const{mixins:n={},palette:o={},transitions:i={},typography:a={}}=t,s=k(t,Ze);if(t.vars)throw new Error(g(18));const l=Me(o),p=we(t);let f=m(p,{mixins:(c=p.breakpoints,u=n,e({toolbar:{minHeight:56,[c.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[c.up("sm")]:{minHeight:64}}},u)),palette:l,shadows:Ye.slice(),typography:He(l,a),transitions:Je(i),zIndex:e({},Qe)});var c,u;return f=m(f,s),f=r.reduce(((e,t)=>m(e,t)),f),f.unstable_sxConfig=e({},ke,null==s?void 0:s.unstable_sxConfig),f.unstable_sx=function(e){return Ae({sx:e,theme:this})},f}export{b as C,x as T,k as _,We as a,Ke as b,y as c,we as d,Ae as e,et as f,ke as g,u as h,A as i,je as j,K as k,X as l,m,B as n,Y as o,g as p,W as q,I as r,v as s,$e as u};
