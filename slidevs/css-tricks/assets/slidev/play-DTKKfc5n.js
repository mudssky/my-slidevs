const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-D0yHfnib.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Bpeacxvc.js","assets/modules/vue-Ba7U_aMa.js","assets/modules/shiki-Bpdc4GVC.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-DUWk_PUR.js","assets/index-Dgj8W5Xr.js","assets/index-ByHh-D51.css","assets/SlideWrapper-CjZb27Vo.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-DL_YOPq9.js","assets/slidev/shortcuts-CckmK_lA.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-CzMrF4ng.js","assets/slidev/context-_iZsAegV.js","assets/modules/unplugin-icons-25mLIR4r.js","assets/shortcuts-DUMA92tM.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as P,ao as N,d as h,ad as T,o as a,c as v,B as e,b as g,e as i,f as H,i as E,g as d,ap as L,k as D,ac as A,an as M,Q as w,l as _,F as z,h as F,t as O}from"../modules/vue-Ba7U_aMa.js";import{c as U,a as W}from"./SlideWrapper-DUWk_PUR.js";import{q as G,v as x,a as B,w as j,x as V,y as C,d as $,z as q,k as S,A as m,B as k,D as K}from"../index-Dgj8W5Xr.js";import{c as Q,G as X,d as Y,u as J,r as Z,a as ee,S as te,b as se,o as oe}from"./shortcuts-CckmK_lA.js";import{b as ae}from"../modules/unplugin-icons-25mLIR4r.js";import"../modules/shiki-Bpdc4GVC.js";import"./title-renderer.md_vue_type_script_setup_true_lang-CzMrF4ng.js";import"./context-_iZsAegV.js";import"./IconButton.vue_vue_type_script_setup_true_lang-DL_YOPq9.js";const ne=2e3;function le(f){const n=b(()=>f.value&&G.value);function r(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}let t=null;P(n,u=>{u||s()}),N(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),n.value&&(t=setTimeout(r,ne))},{passive:!0})}const ie="/my-slidevs/slidevs/css-tricks/assets/logo-BYkHSa_O.png",re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:n}){const r=f,t=T(r,"modelValue",n);function u(){t.value=!1}return(p,o)=>(a(),v(L,null,[e(t)?(a(),g("div",re,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[H(p.$slots,"default")],2)])):d("v-if",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:n}){const t=T(f,"modelValue",n),u=b(()=>typeof x.info=="string");return(p,o)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=c=>M(t)?t.value=c:null),class:"px-6 py-4"},{default:D(()=>[i("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("v-if",!0),o[1]||(o[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ie,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),A("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),fe=h({__name:"Controls",setup(f){const{isEmbedded:n}=B(),r=!x.drawings.presenterOnly&&!n.value,s=w();r&&j(()=>import("./DrawingControls-D0yHfnib.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(p=>s.value=p.default);const t=w(),u=w();return(p,o)=>(a(),g(z,null,[s.value?(a(),v(e(s),{key:0})):d("v-if",!0),_(Q),_(X),t.value?(a(),v(e(t),{key:1})):d("v-if",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":o[0]||(o[0]=c=>M(V)?V.value=c:null)},null,8,["modelValue"])):d("v-if",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=c=>M(C)?C.value=c:null)},null,8,["modelValue"])):d("v-if",!0),_(Y)],64))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(f){return(n,r)=>{const s=ae;return e($).cursor?(a(),g("div",pe,[_(s,{class:"absolute stroke-white dark:stroke-black",style:F({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),Ce=h({__name:"play",setup(f){const{next:n,prev:r,isPrintMode:s,isPresenter:t}=B(),{isDrawing:u}=U(),p=O();function o(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}J(p),Z(),ee(),le(b(()=>!t.value&&!s.value));const c=b(()=>q.value||S.value),R=w(),I=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(z,null,[i("div",{id:"page-root",ref_key:"root",ref:p,class:E(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(W,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":I.value,onPointerdown:o,onContextmenu:e(oe)},{default:D(()=>[_(te,{"render-context":"slide"}),_(ve)]),controls:D(()=>[e(s)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(se,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),R.value&&e(S)?(a(),v(e(R),{key:0,resize:!0})):d("v-if",!0)],2),e(s)?d("v-if",!0):(a(),v(fe,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{Ce as default};
