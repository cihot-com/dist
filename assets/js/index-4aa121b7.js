import{v as e,j as t,b as r,w as n,d as l,r as a,e as o,m as i,i as s,k as d}from"./index-d2e29b82.js";var c=["label"];function u(l){var a=l.label,o=e(l,c);return t(m,{className:"Input",children:[a&&r("label",{children:a}),r("input",n({},o))]})}var m=l("div",{target:"e14r2r530"})({name:"1xq9635",styles:"display:flex;flex-direction:column;label{margin-bottom:0.5rem;}input{border:2px solid #ccc;padding:0.3rem;background-color:#333;color:#fff;&:focus{outline:none;border-color:blue;}}"});function p(){var e,l=a.useState({}),c=o(l,2),m=c[0],p=c[1],f=function(e){var t=e.target,r=t.name,l=t.value;p(n(n({},m),{},i({},r,l)))},b=function(e){if(e.target instanceof HTMLSelectElement){var t=e.target,r=t.name;if(t.multiple){var l=Array.from(e.target.selectedOptions).map((function(e){return e.value}));p(n(n({},m),{},i({},r,l)))}else{var a=e.target.value;p(n(n({},m),{},i({},r,a)))}}else{var o=e.target,s=o.name,d=o.value,c=o.checked;m[s]=m[s]||new Set;var u=new Set(Array.isArray(m[s])?m[s]:void 0);c?u.add(d):u.delete(d),p(n(n({},m),{},i({},s,Array.from(u))))}};return t(h,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);fetch("http://localhost:3000/demo/pipe/upload",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:t})},noValidate:!0,method:"dialog",children:[r(u,{}),t("fieldset",{children:[r("legend",{children:"Form"}),r("label",{htmlFor:"name",children:"Name"}),r("input",{type:"text",id:"name",name:"name",onChange:f,placeholder:"name"}),r("label",{htmlFor:"email",children:"Email"}),r("input",{type:"email",id:"email",name:"email",onChange:f}),r("label",{htmlFor:"password",children:"Password"}),r("input",{type:"password",id:"password",name:"password"}),r("label",{htmlFor:"password",children:"Confirm Password"}),r("input",{type:"password",id:"password",name:"password",onChange:f})]}),t("fieldset",{children:["Role:",r("label",{htmlFor:"role-admin",children:"Admin"}),r("input",{type:"radio",id:"role-admin",name:"role",value:"admin",onChange:f}),r("label",{htmlFor:"role-user",children:"User"}),r("input",{type:"radio",id:"role-user",name:"role",value:"user",onChange:f}),r("label",{htmlFor:"role-guest",children:"Guest"}),r("input",{type:"radio",id:"role-guest",name:"role",value:"guest",onChange:f})]}),t("fieldset",{children:["Roles:",r("label",{htmlFor:"roles-admin",children:"Admin"}),r("input",{type:"checkbox",id:"roles-admin",name:"multiple",value:"admin",onChange:b}),r("label",{htmlFor:"roles-user",children:"User"}),r("input",{type:"checkbox",id:"roles-user",name:"multiple",value:"user",onChange:b}),r("label",{htmlFor:"roles-guest",children:"Guest"}),r("input",{type:"checkbox",id:"roles-guest",name:"multiple",value:"guest",onChange:b})]}),t("select",{id:"roles-select",name:"select",multiple:!0,onChange:b,children:[r("option",{value:"one",children:"one"}),r("option",{value:"two",children:"two"}),r("option",{value:"three",children:"three"})]}),r("input",{type:"file",name:"file",multiple:!0,onChange:(e=s(d().mark((function e(t){var r,n,l,a,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!(l=null===(r=t.currentTarget.files)||void 0===r?void 0:r[0])){e.next=18;break}return(a=new FormData).set("files",l),e.prev=5,e.next=8,fetch("http://localhost:3000/demo/pipe/upload",{method:"post",body:a,headers:n});case 8:return o=e.sent,e.next=11,o.text();case 11:e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5);case 18:case"end":return e.stop()}}),e,null,[[5,15]])}))),function(t){return e.apply(this,arguments)})}),r("button",{type:"submit",children:"Submit"}),r("br",{}),r("div",{children:JSON.stringify(m,null,2)})]})}var h=l("form",{target:"e7tegcf0"})({name:"16h45li",styles:"fieldset{display:flex;flex-direction:column;justify-content:center;label{cursor:pointer;}label:has(+ input[type='radio']:checked),label:has(+ input[type='checkbox']:checked){&,&::after{content:'•';color:red;display:inline-block;margin-left:4px;}}input,button{color:#fff;background-color:#111;outline:none;border:1px solid transparent;font-size:1em;font-family:mono-zh-ch,mono,sans-serif;&[type='radio'],&[type='checkbox']{display:none;}&:focus{border:1px solid red;}&::placeholder{color:#888;font-style:italic;text-indent:1em;opacity:0.8;font-size:1em;}&:-webkit-autofill{&,&:hover,&:focus,&:active{font-size:1em;-webkit-text-fill-color:red!important;background-color:transparent!important;}}}}"});export{p as default};
