import{d as c,i as d,a as m,f as n,E as s,g as r,t as a,o as i,_ as u}from"./index-740ddb12.js";const v=["innerHTML"],f=["textContent"],y=["textContent"],k=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(m),(e,t)=>e.noteHtml?(i(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,v)):e.note?(i(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,f)],2)):(i(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,y)],2))}}),g=u(k,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/registry.npmmirror.com+@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};