import{b as e,j as t}from"./index-890d70c3.js";function n(){const n=e.useRef(null);return e.useEffect((()=>{const e=e=>{const t=document.createElement("div");t.textContent=`${e.data} ${e.type} ${e.lastEventId}`,n.current.prepend(t)},t=e=>{},s=e=>{e.readyState,EventSource.CLOSED},r=new EventSource("http://localhost:3300/sse/62",{Authorization:"Bearer token",withCredentials:!0});return r.addEventListener("message",e),r.addEventListener("list",e),r.addEventListener("open",t),r.addEventListener("error",s),()=>{r.removeEventListener("message",e),r.removeEventListener("list",e),r.removeEventListener("open",t),r.removeEventListener("error",s),r.close()}}),[]),e.useEffect((()=>{(async()=>{fetch("http://localhost:3300/sse/72",{method:"GET"}).then((e=>{e.body.getReader()})).catch((e=>{}))})()}),[]),t.jsxs("div",{children:[t.jsx("h3",{children:"SSE"}),t.jsx("div",{ref:n,className:"messages"})]})}export{n as default};
