import{c as a,_ as t,b as r}from"./createTheme-1031cd5a.js";import{_ as o,b as n,j as i}from"./index-890d70c3.js";import{s as e}from"./styled-8412bb65.js";import{g as p,a as s,d as h,c as g}from"./Button-3c46eb6f.js";import{e as m}from"./Box-243453ed.js";function l(a){return p("MuiTypography",a)}s("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const c=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],u=e("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],"inherit"!==o.align&&r[`align${a(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})((({theme:a,ownerState:t})=>o({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&a.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},d=n.forwardRef((function(n,e){const p=h({props:n,name:"MuiTypography"}),s=(a=>v[a]||a)(p.color),d=m(o({},p,{color:s})),{align:f="inherit",className:B,component:b,gutterBottom:x=!1,noWrap:W=!1,paragraph:w=!1,variant:j="body1",variantMapping:M=y}=d,T=t(d,c),S=o({},d,{align:f,color:s,className:B,component:b,gutterBottom:x,noWrap:W,paragraph:w,variant:j,variantMapping:M}),N=b||(w?"p":M[j]||y[j])||"span",R=(t=>{const{align:r,gutterBottom:o,noWrap:n,paragraph:i,variant:e,classes:p}=t,s={root:["root",e,"inherit"!==t.align&&`align${a(r)}`,o&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return g(s,l,p)})(S);return i.jsx(u,o({as:N,ref:e,ownerState:S,className:r(R.root,B)},T))}));export{d as T};
