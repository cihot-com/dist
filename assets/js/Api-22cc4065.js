import{a as e}from"./axios-80c154f5.js";const t=e.create({baseURL:"http://localhost:3300",withCredentials:!1});t.interceptors.request.use((async e=>(e.headers["Content-Type"]="application/json",e)),(e=>Promise.reject(e))),t.interceptors.response.use((async function(e){return e.data}),(function(e){return e.response.data}));const s=t;export{s as A};