import{j as n,b as t,_ as e,r as i,d as r}from"./index-d2e29b82.js";import{u as s,a,b as o}from"./use-transform-f2526fd8.js";import{u as c,a as l}from"./use-velocity-f1958fc3.js";import{i as u,m as f}from"./motion-f39b5207.js";var d,m=r("figure",{target:"e4j1mx60"})({name:"1wuuvjl",styles:".item{width:100px;height:100px;background:#8888;display:flex;justify-content:center;align-items:center;cursor:move;user-select:none;}"});function h(){var r=a(0),h=c(r,{damping:50,stiffness:400}),g=l(h),p=o(g,[-3e3,0,3e3],[2,1,2],{clamp:!1});return function(n,...t){const e=n.length;s(t.filter(u),(function(){let i="";for(let r=0;r<e;r++){i+=n[r];const e=t[r];e&&(i+=u(e)?e.get():e)}return i}))}(d||(d=e(["content: ",""])),r),i.useEffect((function(){return r.on("change",(function(n){})),function(){}}),[]),n(m,{children:[t("figcaption",{children:"Example_5"}),t(f.div,{className:"item",drag:"x",dragElastic:1,dragConstraints:{left:-200,right:200},style:{x:r,scale:p},children:"div"}),t("button",{onClick:function(){r.set(100*Math.random())},children:"jump"}),n(f.button,{onClick:function(){return r.set(100*Math.random())},children:[t(f.div,{children:r}),t(f.div,{children:r.isAnimating()?"o":"x"}),t(f.div,{children:g})]})]})}function g(){return n("figure",{children:[t("figcaption",{children:"Examples"}),t(h,{})]})}export{g as default};
