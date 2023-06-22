import{r as t,j as e,b as n,_ as r,d as i}from"./index-fd32b983.js";import{u as s}from"./transform-94095f86.js";import{i as o,a,f as c,m as u}from"./SVGVisualElement-41b90df8.js";import{M as f,u as l,m}from"./motion-7eb3bcc0.js";import{u as d,a as g}from"./use-transform-31b631a0.js";import"./index-7074372a.js";function p(e){const n=s(e.getVelocity());return function(e,n,r){t.useInsertionEffect((()=>e.on(n,r)),[e,n,r])}(e,"velocityChange",(t=>{n.set(t)})),n}var h,x=i("figure",{target:"e4j1mx60"})({name:"1wuuvjl",styles:".item{width:100px;height:100px;background:#8888;display:flex;justify-content:center;align-items:center;cursor:move;user-select:none;}"});function j(){var i=s(0),j=p(function(e,n={}){const{isStatic:r}=t.useContext(f),i=t.useRef(null),m=s(o(e)?e.get():e),d=()=>{i.current&&i.current.stop()};return t.useInsertionEffect((()=>m.attach(((t,e)=>{if(r)return e(t);if(d(),i.current=a({keyframes:[m.get(),t],velocity:m.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:e}),!c.isProcessing){const t=performance.now()-c.timestamp;t<30&&(i.current.time=u(t))}return m.get()}),d)),[JSON.stringify(n)]),l((()=>{if(o(e))return e.on("change",(t=>m.set(parseFloat(t))))}),[m]),m}(i,{damping:50,stiffness:400})),v=g(j,[-3e3,0,3e3],[2,1,2],{clamp:!1});return function(t,...e){const n=t.length;d(e.filter(o),(function(){let r="";for(let i=0;i<n;i++){r+=t[i];const n=e[i];n&&(r+=o(n)?n.get():n)}return r}))}(h||(h=r(["content: ",""])),i),t.useEffect((function(){return i.on("change",(function(t){})),function(){}}),[]),e(x,{children:[n("figcaption",{children:"Example_5"}),n(m.div,{className:"item",drag:"x",dragElastic:1,dragConstraints:{left:-200,right:200},style:{x:i,scale:v},children:"div"}),n("button",{onClick:function(){i.set(100*Math.random())},children:"jump"}),e(m.button,{onClick:function(){return i.set(100*Math.random())},children:[n(m.div,{children:i}),n(m.div,{children:i.isAnimating()?"o":"x"}),n(m.div,{children:j})]})]})}function v(){return e("figure",{children:[n("figcaption",{children:"Examples"}),n(j,{})]})}export{v as default};
