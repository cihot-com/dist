import{v as r,b as s,j as e}from"./index-890d70c3.js";const a=r=>Array.from(r.entries()).reduce(((r,[s,e])=>(s in r?Array.isArray(r[s])?r[s].push(e):r[s]=[r[s],e]:r[s]=e,r)),{});function n(){const[n,i]=r();return s.useEffect((()=>{i((r=>new URLSearchParams))}),[]),e.jsxs("div",{children:[e.jsx("h3",{children:"SearchParamsFigure"}),e.jsxs("pre",{children:["useSearchParams(): ",JSON.stringify(a(n),null,4)]})]})}export{n as default};
