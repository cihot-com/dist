import{r as t}from"./index-d2e29b82.js";import{M as e,i as r,C as s,x as n,d as o,A as i}from"./motion-f39b5207.js";import{a}from"./use-transform-f2526fd8.js";function c(c,u={}){const{isStatic:f}=t.useContext(e),m=t.useRef(null),p=a(r(c)?c.get():c),g=()=>{m.current&&m.current.stop()};return t.useInsertionEffect((()=>p.attach(((t,e)=>{if(f)return e(t);if(g(),m.current=s({keyframes:[p.get(),t],velocity:p.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...u,onUpdate:e}),!n.isProcessing){const t=performance.now()-n.timestamp;t<30&&(m.current.time=o(t))}return p.get()}),g)),[JSON.stringify(u)]),i((()=>{if(r(c))return c.on("change",(t=>p.set(parseFloat(t))))}),[p]),p}function u(e,r,s){t.useInsertionEffect((()=>e.on(r,s)),[e,r,s])}function f(t){const e=a(t.getVelocity());return u(t,"velocityChange",(t=>{e.set(t)})),e}export{f as a,u as b,c as u};
