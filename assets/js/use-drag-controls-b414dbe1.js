import{u as t}from"./SVGVisualElement-77214677.js";class DragControls{constructor(){this.componentControls=new Set}subscribe(t){return this.componentControls.add(t),()=>this.componentControls.delete(t)}start(t,o){this.componentControls.forEach((n=>{n.start(t.nativeEvent||t,o)}))}}const o=()=>new DragControls;function n(){return t(o)}export{n as u};
