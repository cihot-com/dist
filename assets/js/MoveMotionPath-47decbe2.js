import{r as t,e,j as r,b as n,d as o}from"./index-d2e29b82.js";import{g as i}from"./index-457de83b.js";function a(){var o=t.useRef(),a=t.useRef(null),c=t.useState(0),l=e(c,2),s=l[0],d=l[1];t.useEffect((function(){var t=i.context((function(){var t=i.timeline({paused:!0,onUpdate:function(){Number(t.time().toFixed(2)),Number(t.globalTime().toFixed(2)),Number(t.progress().toFixed(2))}}),e=a.current;t.set(e,{xPercent:-150,yPercent:-50,transformOrigin:"50% 50%"}).to(e,{duration:10,motionPath:{path:"M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 1",autoRotate:!0}}).to(e,{rotate:0}),o.current=t}));return function(){t.revert()}}),[]);return r(u,{className:"container",children:[n("h2",{children:"Timeline"}),r("div",{children:[r("button",{onClick:function(){return d((function(t){return t+1}))},children:["count: ",s]}),n("button",{onClick:function(){var t;null===(t=o.current)||void 0===t||t.restart()},children:"restart"}),n("button",{onClick:function(){var t;null===(t=o.current)||void 0===t||t.pause()},children:"pause"}),n("button",{onClick:function(){var t;null===(t=o.current)||void 0===t||t.play()},children:"play"}),n("button",{onClick:function(){var t;null===(t=o.current)||void 0===t||t.seek(10*Math.random())},children:"seek"}),n("button",{onClick:function(){var t;null===(t=o.current)||void 0===t||t.progress(Math.random())},children:"progress"})]}),n(u,{className:"target",ref:a,children:"^_^"})]})}var u=o("div",{target:"ecpa78m0"})({name:"1yy24v0",styles:"width:500px;height:500px;border:1px solid #888;position:relative;.target{--gap-b:4px;width:30px;height:30px;display:flex;justify-content:center;align-items:center;background-color:#888;color:#fff;position:absolute;left:0;top:50%;transform:translate(-50%, -50%);cursor:pointer;border-radius:var(--gap-b);padding:var(--gap-b);}"});export{a as default};
