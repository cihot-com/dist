import{r as e,e as t,j as n,b as r}from"./index-d2e29b82.js";function l(){var l=e.useState(1e6),a=t(l,2),o=a[0],u=a[1],c=e.useState("a"),i=t(c,2),d=i[0],h=i[1],g=e.useMemo((function(){return d.repeat(o)}),[o,d]),s=e.useState(!0),f=t(s,2),m=f[0],v=f[1],b=e.useCallback((function(){return v((function(e){return!e}))}),[m]),S=e.useRef(null),p=e.useMemo((function(){for(var e=0,t=0;t<localStorage.length;t++){var n,r=localStorage.key(t),l=null!==(n=localStorage.getItem(null!=r?r:""))&&void 0!==n?n:"";l&&(e+=l.length)}return e}),[b]);return n("section",{children:[r("h3",{children:"Local Storage"}),n("label",{children:["repeat:"," ",r("input",{type:"number",value:o,min:1,onChange:function(e){u(Number(e.target.value))}})]}),n("label",{children:["text:"," ",r("input",{type:"text",value:d,onChange:function(e){return h(e.target.value)}})]}),r("button",{onClick:function(){localStorage.setItem("k-"+Date.now()+Math.random(),g),b()},children:"add"}),n("table",{children:[r("thead",{children:n("tr",{children:[r("th",{children:"key"}),n("th",{children:["value lanegth ",p]}),r("th",{})]})}),r("tbody",{ref:S,children:Object.keys(localStorage).map((function(e){var t;return n("tr",{children:[r("td",{children:e}),r("td",{children:null===(t=localStorage.getItem(e))||void 0===t?void 0:t.length}),r("td",{children:r("button",{onClick:function(){localStorage.removeItem(e),b()},children:"remove"})})]},e)}))})]})]})}export{l as default};
