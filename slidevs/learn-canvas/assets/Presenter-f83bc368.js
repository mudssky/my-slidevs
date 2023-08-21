import{o as d,f as k,g as e,B as y,C as z,v as h,d as T,i as M,a as B,D as S,x as p,E as D,_ as H,G as I,H as R,c as C,b as j,I as $,J as A,K as E,L,M as q,N as F,O,P as U,Q as W,h as i,m as u,t as Z,n as x,R as N,S as V,p as G,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as P,$ as oe,a0 as le,a1 as ne,a2 as ae,a3 as ie,k as ce,a4 as re}from"./index-1bdf8b6e.js";import{N as ue}from"./NoteDisplay-2bd88a5f.js";import de from"./DrawingControls-08515e24.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[ve];function pe(o,n){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:pe},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(o,n){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/my-slidevs/slidevs/learn-canvas/assets/logo-title-horizontal-96c3c915.png";function be(){const o=y(Date.now()),n=z({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function v(){o.value=n.value}return{timer:_,resetTimer:v}}const Ce=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;M(B);const _=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),v=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ue,{class:D(n.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),$e=H(Ce,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-e9a459b6"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Pe={class:"grid-section top flex"},Te=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},De=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},je=T({__name:"Presenter",setup(o){M(B);const n=y();I(),R(n);const _=C.titleTemplate.replace("%s",C.title||"Slidev");j({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=be(),l=y([]),s=h(()=>$.value<A.value?{route:S.value,clicks:$.value+1}:E.value?{route:L.value,clicks:0}:null);return q(()=>{const b=n.value.querySelector("#slide-content"),c=F(O()),g=U();W(()=>{if(!g.value||te.value||!se.value)return;const r=b.getBoundingClientRect(),a=(c.x-r.left)/r.width*100,m=(c.y-r.top)/r.height*100;if(!(a<0||a>100||m<0||m>100))return{x:a,y:m}},r=>{ee.cursor=r})}),(b,c)=>{const g=Se,r=he;return d(),k(Q,null,[e("div",Ne,[e("div",Ve,[e("div",Pe,[Te,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:c[0]||(c[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",Be,Z(i(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(P))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),De],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(P))},[s.value?(d(),p(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(ne),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":c[1]||(c[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:D(i(le)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),He],4),e("div",ze,[(d(),p($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ae,{persist:!0})]),(d(),p(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(ie)-1)/(i(ce)-1)*100}%`})},null,4)])]),u(re),u(K,{modelValue:i(w),"onUpdate:modelValue":c[2]||(c[2]=a=>J(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const qe=H(je,[["__scopeId","data-v-e9a459b6"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Presenter.vue"]]);export{qe as default};
