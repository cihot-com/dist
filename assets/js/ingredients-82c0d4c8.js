import{b as e}from"./index-8f1f19a3.js";import{m as t}from"./motion-abf7f7de.js";import{q as r,A as n,u as a,i as o}from"./SVGVisualElement-210c37ed.js";import{u}from"./use-motion-value-cdb7a71a.js";import{a as i}from"./use-transform-bfeb503f.js";const s=e.createContext(null);function l(e){return e.value}function c(e,t){return e.layout.min-t.layout.min}function f(e,t=0){return o(e)?e:u(t)}const m={Group:e.forwardRef((function({children:o,as:u="ul",axis:i="y",onReorder:f,values:m,...d},x){const y=a((()=>t(u))),p=[],g=e.useRef(!1),v={axis:i,registerItem:(e,t)=>{t&&-1===p.findIndex((t=>e===t.value))&&(p.push({value:e,layout:t[i]}),p.sort(c))},updateOrder:(e,t,a)=>{if(g.current)return;const o=function(e,t,a,o){if(!o)return e;const u=e.findIndex((e=>e.value===t));if(-1===u)return e;const i=o>0?1:-1,s=e[u+i];if(!s)return e;const l=e[u],c=s.layout,f=r(c.min,c.max,.5);return 1===i&&l.layout.max+a>f||-1===i&&l.layout.min+a<f?n(e,u,u+i):e}(p,e,t,a);p!==o&&(g.current=!0,f(o.map(l).filter((e=>-1!==m.indexOf(e)))))}};return e.useEffect((()=>{g.current=!1})),e.createElement(y,{...d,ref:x,ignoreStrict:!0},e.createElement(s.Provider,{value:v},o))})),Item:e.forwardRef((function({children:r,style:n={},value:o,as:u="li",onDrag:l,layout:c=!0,...m},d){const x=a((()=>t(u))),y=e.useContext(s),p={x:f(n.x),y:f(n.y)},g=i([p.x,p.y],(([e,t])=>e||t?1:"unset")),v=e.useRef(null),{axis:b,registerItem:h,updateOrder:E}=y;return e.useEffect((()=>{h(o,v.current)}),[y]),e.createElement(x,{drag:b,...m,dragSnapToOrigin:!0,style:{...n,x:p.x,y:p.y,zIndex:g},layout:c,onDrag:(e,t)=>{const{velocity:r}=t;r[b]&&E(o,p[b].get(),r[b]),l&&l(e,t)},onLayoutMeasure:e=>{v.current=e},ref:d,ignoreStrict:!0},r)}))},d=[{icon:"🍅",label:"Tomato"},{icon:"🥬",label:"Lettuce"},{icon:"🧀",label:"Cheese"},{icon:"🥕",label:"Carrot"},{icon:"🍌",label:"Banana"},{icon:"🫐",label:"Blueberries"},{icon:"🥂",label:"Champers?"}],[x,y,p]=d,g=[x,y,p];function v(e){const t=new Set(e);return d.find((e=>!t.has(e)))}export{m as R,d as a,v as g,g as i};
