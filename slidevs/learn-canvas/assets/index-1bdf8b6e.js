var _m=Object.defineProperty;var bm=(e,t,n)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ye=(e,t,n)=>(bm(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function Kn(e,t){const n=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)n[o[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}const Ne=Object.freeze({}),Fs=Object.freeze([]),Ct=()=>{},Hd=()=>!1,wm=/^on[^a-z]/,Yo=e=>wm.test(e),Il=e=>e.startsWith("onUpdate:"),qe=Object.assign,ci=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Dm=Object.prototype.hasOwnProperty,Se=(e,t)=>Dm.call(e,t),ae=Array.isArray,ms=e=>Gs(e)==="[object Map]",qd=e=>Gs(e)==="[object Set]",pc=e=>Gs(e)==="[object Date]",xm=e=>Gs(e)==="[object RegExp]",fe=e=>typeof e=="function",Ve=e=>typeof e=="string",To=e=>typeof e=="symbol",Ie=e=>e!==null&&typeof e=="object",ui=e=>Ie(e)&&fe(e.then)&&fe(e.catch),Vd=Object.prototype.toString,Gs=e=>Vd.call(e),di=e=>Gs(e).slice(8,-1),zd=e=>Gs(e)==="[object Object]",pi=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xl=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cm=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},km=/-(\w)/g,rn=ar(e=>e.replace(km,(t,n)=>n?n.toUpperCase():"")),Am=/\B([A-Z])/g,Cn=ar(e=>e.replace(Am,"-$1").toLowerCase()),xs=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=ar(e=>e?`on${xs(e)}`:""),Po=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ol=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ra=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Sm=e=>{const t=Ve(e)?Number(e):NaN;return isNaN(t)?e:t};let fc;const jl=()=>fc||(fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ge(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],l=Ve(o)?Tm(o):Ge(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Ve(e))return e;if(Ie(e))return e}}const Bm=/;(?![^(]*\))/g,Em=/:([^]+)/,$m=/\/\*[^]*?\*\//g;function Tm(e){const t={};return e.replace($m,"").split(Bm).forEach(n=>{if(n){const o=n.split(Em);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Le(e){let t="";if(Ve(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const o=Le(e[n]);o&&(t+=o+" ")}else if(Ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function le(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ve(t)&&(e.class=Le(t)),n&&(e.style=Ge(n)),e}const Pm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Im="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Wd=Kn(Pm),Om=Kn(Im),jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mm=Kn(jm);function Ud(e){return!!e||e===""}function Lm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Ml(e[o],t[o]);return n}function Ml(e,t){if(e===t)return!0;let n=pc(e),o=pc(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=To(e),o=To(t),n||o)return e===t;if(n=ae(e),o=ae(t),n||o)return n&&o?Lm(e,t):!1;if(n=Ie(e),o=Ie(t),n||o){if(!n||!o)return!1;const l=Object.keys(e).length,r=Object.keys(t).length;if(l!==r)return!1;for(const a in e){const i=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(i&&!c||!i&&c||!Ml(e[a],t[a]))return!1}}return String(e)===String(t)}const Ht=e=>Ve(e)?e:e==null?"":ae(e)||Ie(e)&&(e.toString===Vd||!fe(e.toString))?JSON.stringify(e,Gd,2):String(e),Gd=(e,t)=>t&&t.__v_isRef?Gd(e,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,l])=>(n[`${o} =>`]=l,n),{})}:qd(t)?{[`Set(${t.size})`]:[...t.values()]}:Ie(t)&&!ae(t)&&!zd(t)?String(t):t;function Ll(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Bt;class Kd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!t&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Bt;try{return Bt=this,t()}finally{Bt=n}}else Ll("cannot run an inactive effect scope.")}on(){Bt=this}off(){Bt=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Rm(e){return new Kd(e)}function Fm(e,t=Bt){t&&t.active&&t.effects.push(e)}function fi(){return Bt}function Yd(e){Bt?Bt.cleanups.push(e):Ll("onScopeDispose() is called when there is no active effect scope to be associated with.")}const hi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xd=e=>(e.w&Wn)>0,Zd=e=>(e.n&Wn)>0,Nm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Wn},Hm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const l=t[o];Xd(l)&&!Zd(l)?l.delete(e):t[n++]=l,l.w&=~Wn,l.n&=~Wn}t.length=n}},Rl=new WeakMap;let po=0,Wn=1;const aa=30;let yt;const vs=Symbol("iterate"),ia=Symbol("Map key iterate");class mi{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fm(this,o)}run(){if(!this.active)return this.fn();let t=yt,n=Ln;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=yt,yt=this,Ln=!0,Wn=1<<++po,po<=aa?Nm(this):hc(this),this.fn()}finally{po<=aa&&Hm(this),Wn=1<<--po,yt=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(hc(this),this.onStop&&this.onStop(),this.active=!1)}}function hc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ln=!0;const Jd=[];function As(){Jd.push(Ln),Ln=!1}function Ss(){const e=Jd.pop();Ln=e===void 0?!0:e}function pt(e,t,n){if(Ln&&yt){let o=Rl.get(e);o||Rl.set(e,o=new Map);let l=o.get(n);l||o.set(n,l=hi()),Qd(l,{effect:yt,target:e,type:t,key:n})}}function Qd(e,t){let n=!1;po<=aa?Zd(e)||(e.n|=Wn,n=!Xd(e)):n=!e.has(yt),n&&(e.add(yt),yt.deps.push(e),yt.onTrack&&yt.onTrack(qe({effect:yt},t)))}function an(e,t,n,o,l,r){const a=Rl.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&ae(e)){const u=Number(o);a.forEach((d,p)=>{(p==="length"||p>=u)&&i.push(d)})}else switch(n!==void 0&&i.push(a.get(n)),t){case"add":ae(e)?pi(n)&&i.push(a.get("length")):(i.push(a.get(vs)),ms(e)&&i.push(a.get(ia)));break;case"delete":ae(e)||(i.push(a.get(vs)),ms(e)&&i.push(a.get(ia)));break;case"set":ms(e)&&i.push(a.get(vs));break}const c={target:e,type:t,key:n,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&ca(i[0],c);else{const u=[];for(const d of i)d&&u.push(...d);ca(hi(u),c)}}function ca(e,t){const n=ae(e)?e:[...e];for(const o of n)o.computed&&mc(o,t);for(const o of n)o.computed||mc(o,t)}function mc(e,t){(e!==yt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(qe({effect:e},t)),e.scheduler?e.scheduler():e.run())}function qm(e,t){var n;return(n=Rl.get(e))==null?void 0:n.get(t)}const Vm=Kn("__proto__,__v_isRef,__isVue"),ep=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(To)),zm=ir(),Wm=ir(!1,!0),Um=ir(!0),Gm=ir(!0,!0),vc=Km();function Km(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=ve(this);for(let r=0,a=this.length;r<a;r++)pt(o,"get",r+"");const l=o[t](...n);return l===-1||l===!1?o[t](...n.map(ve)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){As();const o=ve(this)[t].apply(this,n);return Ss(),o}}),e}function Ym(e){const t=ve(this);return pt(t,"has",e),t.hasOwnProperty(e)}function ir(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?ip:ap:t?rp:lp).get(o))return o;const a=ae(o);if(!e){if(a&&Se(vc,l))return Reflect.get(vc,l,r);if(l==="hasOwnProperty")return Ym}const i=Reflect.get(o,l,r);return(To(l)?ep.has(l):Vm(l))||(e||pt(o,"get",l),t)?i:Pe(i)?a&&pi(l)?i:i.value:Ie(i)?e?Kt(i):Ue(i):i}}const Xm=tp(),Zm=tp(!0);function tp(e=!1){return function(n,o,l,r){let a=n[o];if(Un(a)&&Pe(a)&&!Pe(l))return!1;if(!e&&(!Fl(l)&&!Un(l)&&(a=ve(a),l=ve(l)),!ae(n)&&Pe(a)&&!Pe(l)))return a.value=l,!0;const i=ae(n)&&pi(o)?Number(o)<n.length:Se(n,o),c=Reflect.set(n,o,l,r);return n===ve(r)&&(i?Po(l,a)&&an(n,"set",o,l,a):an(n,"add",o,l)),c}}function Jm(e,t){const n=Se(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&n&&an(e,"delete",t,void 0,o),l}function Qm(e,t){const n=Reflect.has(e,t);return(!To(t)||!ep.has(t))&&pt(e,"has",t),n}function ev(e){return pt(e,"iterate",ae(e)?"length":vs),Reflect.ownKeys(e)}const np={get:zm,set:Xm,deleteProperty:Jm,has:Qm,ownKeys:ev},sp={get:Um,set(e,t){return Ll(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ll(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},tv=qe({},np,{get:Wm,set:Zm}),nv=qe({},sp,{get:Gm}),vi=e=>e,cr=e=>Reflect.getPrototypeOf(e);function ll(e,t,n=!1,o=!1){e=e.__v_raw;const l=ve(e),r=ve(t);n||(t!==r&&pt(l,"get",t),pt(l,"get",r));const{has:a}=cr(l),i=o?vi:n?gi:Io;if(a.call(l,t))return i(e.get(t));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(t)}function rl(e,t=!1){const n=this.__v_raw,o=ve(n),l=ve(e);return t||(e!==l&&pt(o,"has",e),pt(o,"has",l)),e===l?n.has(e):n.has(e)||n.has(l)}function al(e,t=!1){return e=e.__v_raw,!t&&pt(ve(e),"iterate",vs),Reflect.get(e,"size",e)}function gc(e){e=ve(e);const t=ve(this);return cr(t).has.call(t,e)||(t.add(e),an(t,"add",e,e)),this}function yc(e,t){t=ve(t);const n=ve(this),{has:o,get:l}=cr(n);let r=o.call(n,e);r?op(n,o,e):(e=ve(e),r=o.call(n,e));const a=l.call(n,e);return n.set(e,t),r?Po(t,a)&&an(n,"set",e,t,a):an(n,"add",e,t),this}function _c(e){const t=ve(this),{has:n,get:o}=cr(t);let l=n.call(t,e);l?op(t,n,e):(e=ve(e),l=n.call(t,e));const r=o?o.call(t,e):void 0,a=t.delete(e);return l&&an(t,"delete",e,void 0,r),a}function bc(){const e=ve(this),t=e.size!==0,n=ms(e)?new Map(e):new Set(e),o=e.clear();return t&&an(e,"clear",void 0,void 0,n),o}function il(e,t){return function(o,l){const r=this,a=r.__v_raw,i=ve(a),c=t?vi:e?gi:Io;return!e&&pt(i,"iterate",vs),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function cl(e,t,n){return function(...o){const l=this.__v_raw,r=ve(l),a=ms(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=l[e](...o),d=n?vi:t?gi:Io;return!t&&pt(r,"iterate",c?ia:vs),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:i?[d(p[0]),d(p[1])]:d(p),done:h}},[Symbol.iterator](){return this}}}}function Sn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${xs(e)} operation ${n}failed: target is readonly.`,ve(this))}return e==="delete"?!1:this}}function sv(){const e={get(r){return ll(this,r)},get size(){return al(this)},has:rl,add:gc,set:yc,delete:_c,clear:bc,forEach:il(!1,!1)},t={get(r){return ll(this,r,!1,!0)},get size(){return al(this)},has:rl,add:gc,set:yc,delete:_c,clear:bc,forEach:il(!1,!0)},n={get(r){return ll(this,r,!0)},get size(){return al(this,!0)},has(r){return rl.call(this,r,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:il(!0,!1)},o={get(r){return ll(this,r,!0,!0)},get size(){return al(this,!0)},has(r){return rl.call(this,r,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:il(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=cl(r,!1,!1),n[r]=cl(r,!0,!1),t[r]=cl(r,!1,!0),o[r]=cl(r,!0,!0)}),[e,n,t,o]}const[ov,lv,rv,av]=sv();function ur(e,t){const n=t?e?av:rv:e?lv:ov;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(Se(n,l)&&l in o?n:o,l,r)}const iv={get:ur(!1,!1)},cv={get:ur(!1,!0)},uv={get:ur(!0,!1)},dv={get:ur(!0,!0)};function op(e,t,n){const o=ve(n);if(o!==n&&t.call(e,o)){const l=di(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const lp=new WeakMap,rp=new WeakMap,ap=new WeakMap,ip=new WeakMap;function pv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fv(e){return e.__v_skip||!Object.isExtensible(e)?0:pv(di(e))}function Ue(e){return Un(e)?e:dr(e,!1,np,iv,lp)}function cp(e){return dr(e,!1,tv,cv,rp)}function Kt(e){return dr(e,!0,sp,uv,ap)}function fo(e){return dr(e,!0,nv,dv,ip)}function dr(e,t,n,o,l){if(!Ie(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=fv(e);if(a===0)return e;const i=new Proxy(e,a===2?o:n);return l.set(e,i),i}function gs(e){return Un(e)?gs(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function Fl(e){return!!(e&&e.__v_isShallow)}function Nl(e){return gs(e)||Un(e)}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function pr(e){return Ol(e,"__v_skip",!0),e}const Io=e=>Ie(e)?Ue(e):e,gi=e=>Ie(e)?Kt(e):e;function yi(e){Ln&&yt&&(e=ve(e),Qd(e.dep||(e.dep=hi()),{target:e,type:"get",key:"value"}))}function _i(e,t){e=ve(e);const n=e.dep;n&&ca(n,{target:e,type:"set",key:"value",newValue:t})}function Pe(e){return!!(e&&e.__v_isRef===!0)}function F(e){return up(e,!1)}function cn(e){return up(e,!0)}function up(e,t){return Pe(e)?e:new hv(e,t)}class hv{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ve(t),this._value=n?t:Io(t)}get value(){return yi(this),this._value}set value(t){const n=this.__v_isShallow||Fl(t)||Un(t);t=n?t:ve(t),Po(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Io(t),_i(this,t))}}function S(e){return Pe(e)?e.value:e}const mv={get:(e,t,n)=>S(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const l=e[t];return Pe(l)&&!Pe(n)?(l.value=n,!0):Reflect.set(e,t,n,o)}};function dp(e){return gs(e)?e:new Proxy(e,mv)}class vv{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>yi(this),()=>_i(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function bi(e){return new vv(e)}function gv(e){Nl(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ae(e)?new Array(e.length):{};for(const n in e)t[n]=pp(e,n);return t}class yv{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return qm(ve(this._object),this._key)}}class _v{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function bv(e,t,n){return Pe(e)?e:fe(e)?new _v(e):Ie(e)&&arguments.length>1?pp(e,t,n):F(e)}function pp(e,t,n){const o=e[t];return Pe(o)?o:new yv(e,t,n)}class wv{constructor(t,n,o,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new mi(t,()=>{this._dirty||(this._dirty=!0,_i(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=ve(this);return yi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Dv(e,t,n=!1){let o,l;const r=fe(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new wv(o,l,r||!l,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ys=[];function Cl(e){ys.push(e)}function kl(){ys.pop()}function z(e,...t){As();const n=ys.length?ys[ys.length-1].component:null,o=n&&n.appContext.config.warnHandler,l=xv();if(o)Dn(o,n,11,[e+t.join(""),n&&n.proxy,l.map(({vnode:r})=>`at <${Dr(n,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...Cv(l)),console.warn(...r)}Ss()}function xv(){let e=ys[ys.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Cv(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...kv(n))}),t}function kv({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${Dr(e.component,e.type,o)}`,r=">"+n;return e.props?[l,...Av(e.props),r]:[l+r]}function Av(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...fp(o,e[o]))}),n.length>3&&t.push(" ..."),t}function fp(e,t,n){return Ve(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Pe(t)?(t=fp(e,ve(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):fe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=ve(t),n?t:[`${e}=`,t])}function Sv(e,t){e!==void 0&&(typeof e!="number"?z(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&z(`${t} is NaN - the duration expression might be incorrect.`))}const wi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Dn(e,t,n,o){let l;try{l=o?e(...o):e()}catch(r){fr(r,t,n)}return l}function Nt(e,t,n,o){if(fe(e)){const r=Dn(e,t,n,o);return r&&ui(r)&&r.catch(a=>{fr(a,t,n)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(Nt(e[r],t,n,o));return l}function fr(e,t,n,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,i=wi[n];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Dn(c,null,10,[e,a,i]);return}}Bv(e,n,l,o)}function Bv(e,t,n,o=!0){{const l=wi[t];if(n&&Cl(n),z(`Unhandled error${l?` during execution of ${l}`:""}`),n&&kl(),o)throw e;console.error(e)}}let Oo=!1,ua=!1;const at=[];let tn=0;const Ns=[];let en=null,Tn=0;const hp=Promise.resolve();let Di=null;const Ev=100;function it(e){const t=Di||hp;return e?t.then(this?e.bind(this):e):t}function $v(e){let t=tn+1,n=at.length;for(;t<n;){const o=t+n>>>1;jo(at[o])<e?t=o+1:n=o}return t}function hr(e){(!at.length||!at.includes(e,Oo&&e.allowRecurse?tn+1:tn))&&(e.id==null?at.push(e):at.splice($v(e.id),0,e),mp())}function mp(){!Oo&&!ua&&(ua=!0,Di=hp.then(yp))}function Tv(e){const t=at.indexOf(e);t>tn&&at.splice(t,1)}function vp(e){ae(e)?Ns.push(...e):(!en||!en.includes(e,e.allowRecurse?Tn+1:Tn))&&Ns.push(e),mp()}function wc(e,t=Oo?tn+1:0){for(e=e||new Map;t<at.length;t++){const n=at[t];if(n&&n.pre){if(xi(e,n))continue;at.splice(t,1),t--,n()}}}function gp(e){if(Ns.length){const t=[...new Set(Ns)];if(Ns.length=0,en){en.push(...t);return}for(en=t,e=e||new Map,en.sort((n,o)=>jo(n)-jo(o)),Tn=0;Tn<en.length;Tn++)xi(e,en[Tn])||en[Tn]();en=null,Tn=0}}const jo=e=>e.id==null?1/0:e.id,Pv=(e,t)=>{const n=jo(e)-jo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yp(e){ua=!1,Oo=!0,e=e||new Map,at.sort(Pv);const t=n=>xi(e,n);try{for(tn=0;tn<at.length;tn++){const n=at[tn];if(n&&n.active!==!1){if(t(n))continue;Dn(n,null,14)}}}finally{tn=0,at.length=0,gp(e),Oo=!1,Di=null,(at.length||Ns.length)&&yp(e)}}function xi(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Ev){const o=t.ownerInstance,l=o&&Ro(o.type);return z(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Rn=!1;const Ls=new Set;jl().__VUE_HMR_RUNTIME__={createRecord:Br(_p),rerender:Br(jv),reload:Br(Mv)};const Cs=new Map;function Iv(e){const t=e.type.__hmrId;let n=Cs.get(t);n||(_p(t,e.type),n=Cs.get(t)),n.instances.add(e)}function Ov(e){Cs.get(e.type.__hmrId).instances.delete(e)}function _p(e,t){return Cs.has(e)?!1:(Cs.set(e,{initialDef:_o(t),instances:new Set}),!0)}function _o(e){return Zp(e)?e.__vccOpts:e}function jv(e,t){const n=Cs.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,_o(o.type).render=t),o.renderCache=[],Rn=!0,o.update(),Rn=!1}))}function Mv(e,t){const n=Cs.get(e);if(!n)return;t=_o(t),Dc(n.initialDef,t);const o=[...n.instances];for(const l of o){const r=_o(l.type);Ls.has(r)||(r!==n.initialDef&&Dc(r,t),Ls.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ls.add(r),l.ceReload(t.styles),Ls.delete(r)):l.parent?hr(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}vp(()=>{for(const l of o)Ls.delete(_o(l.type))})}function Dc(e,t){qe(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Br(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nn,ho=[],da=!1;function Xo(e,...t){nn?nn.emit(e,...t):da||ho.push({event:e,args:t})}function bp(e,t){var n,o;nn=e,nn?(nn.enabled=!0,ho.forEach(({event:l,args:r})=>nn.emit(l,...r)),ho=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{bp(r,t)}),setTimeout(()=>{nn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,da=!0,ho=[])},3e3)):(da=!0,ho=[])}function Lv(e,t){Xo("app:init",e,t,{Fragment:$e,Text:Qo,Comment:ut,Static:Al})}function Rv(e){Xo("app:unmount",e)}const pa=Ci("component:added"),wp=Ci("component:updated"),Fv=Ci("component:removed"),Nv=e=>{nn&&typeof nn.cleanupBuffer=="function"&&!nn.cleanupBuffer(e)&&Fv(e)};function Ci(e){return t=>{Xo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Hv=Dp("perf:start"),qv=Dp("perf:end");function Dp(e){return(t,n,o)=>{Xo(e,t.appContext.app,t.uid,t,n,o)}}function Vv(e,t,n){Xo("component:emit",e.appContext.app,e,t,n)}function zv(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Ne;{const{emitsOptions:d,propsOptions:[p]}=e;if(d)if(!(t in d))(!p||!(ss(t)in p))&&z(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ss(t)}" prop.`);else{const h=d[t];fe(h)&&(h(...n)||z(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:h}=o[d]||Ne;h&&(l=n.map(f=>Ve(f)?f.trim():f)),p&&(l=n.map(ra))}Vv(e,t,l);{const d=t.toLowerCase();d!==t&&o[ss(d)]&&z(`Event "${d}" is emitted in component ${Dr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Cn(t)}" instead of "${t}".`)}let i,c=o[i=ss(t)]||o[i=ss(rn(t))];!c&&r&&(c=o[i=ss(Cn(t))]),c&&Nt(c,e,6,l);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Nt(u,e,6,l)}}function xp(e,t,n=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!fe(e)){const c=u=>{const d=xp(u,t,!0);d&&(i=!0,qe(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Ie(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):qe(a,r),Ie(e)&&o.set(e,a),a)}function mr(e,t){return!e||!Yo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,Cn(t))||Se(e,t))}let tt=null,vr=null;function Hl(e){const t=tt;return tt=e,vr=e&&e.type.__scopeId||null,t}function DO(e){vr=e}function xO(){vr=null}function j(e,t=tt,n){if(!t||e._n)return e;const o=(...l)=>{o._d&&Lc(-1);const r=Hl(t);let a;try{a=e(...l)}finally{Hl(r),o._d&&Lc(1)}return wp(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let fa=!1;function ql(){fa=!0}function Er(e){const{type:t,vnode:n,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:p,data:h,setupState:f,ctx:m,inheritAttrs:_}=e;let D,x;const C=Hl(e);fa=!1;try{if(n.shapeFlag&4){const $=l||o;D=Gt(d.call($,$,p,r,f,h,m)),x=c}else{const $=t;c===r&&ql(),D=Gt($.length>1?$(r,{get attrs(){return ql(),c},slots:i,emit:u}):$(r,null)),x=t.props?c:Uv(c)}}catch($){bo.length=0,fr($,e,1),D=k(ut)}let b=D,B;if(D.patchFlag>0&&D.patchFlag&2048&&([b,B]=Wv(D)),x&&_!==!1){const $=Object.keys(x),{shapeFlag:O}=b;if($.length){if(O&7)a&&$.some(Il)&&(x=Gv(x,a)),b=dn(b,x);else if(!fa&&b.type!==ut){const q=Object.keys(c),L=[],U=[];for(let se=0,de=q.length;se<de;se++){const Z=q[se];Yo(Z)?Il(Z)||L.push(Z[2].toLowerCase()+Z.slice(3)):U.push(Z)}U.length&&z(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),L.length&&z(`Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(xc(b)||z("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=dn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(xc(b)||z("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),B?B(b):D=b,Hl(C),D}const Wv=e=>{const t=e.children,n=e.dynamicChildren,o=Cp(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=n?n.indexOf(o):-1,a=i=>{t[l]=i,n&&(r>-1?n[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...n,i]))};return[Gt(o),a]};function Cp(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(un(o)){if(o.type!==ut||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Uv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yo(n))&&((t||(t={}))[n]=e[n]);return t},Gv=(e,t)=>{const n={};for(const o in e)(!Il(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},xc=e=>e.shapeFlag&7||e.type===ut;function Kv(e,t,n){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=t,u=r.emitsOptions;if((l||i)&&Rn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Cc(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const h=d[p];if(a[h]!==o[h]&&!mr(u,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Cc(o,a,u):!0:!!a;return!1}function Cc(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!mr(n,r))return!0}return!1}function Yv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kp=e=>e.__isSuspense;function Xv(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):vp(e)}function Bs(e,t){return ki(e,null,t)}const ul={};function _e(e,t,n){return fe(t)||z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ki(e,t,n)}function ki(e,t,{immediate:n,deep:o,flush:l,onTrack:r,onTrigger:a}=Ne){var i;t||(n!==void 0&&z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=$=>{z("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=fi()===((i=et)==null?void 0:i.scope)?et:null;let d,p=!1,h=!1;if(Pe(e)?(d=()=>e.value,p=Fl(e)):gs(e)?(d=()=>e,o=!0):ae(e)?(h=!0,p=e.some($=>gs($)||Fl($)),d=()=>e.map($=>{if(Pe($))return $.value;if(gs($))return ps($);if(fe($))return Dn($,u,2);c($)})):fe(e)?t?d=()=>Dn(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return f&&f(),Nt(e,u,3,[m])}:(d=Ct,c(e)),t&&o){const $=d;d=()=>ps($())}let f,m=$=>{f=b.onStop=()=>{Dn($,u,4)}},_;if(Lo)if(m=Ct,t?n&&Nt(t,u,3,[d(),h?[]:void 0,m]):d(),l==="sync"){const $=oy();_=$.__watcherHandles||($.__watcherHandles=[])}else return Ct;let D=h?new Array(e.length).fill(ul):ul;const x=()=>{if(b.active)if(t){const $=b.run();(o||p||(h?$.some((O,q)=>Po(O,D[q])):Po($,D)))&&(f&&f(),Nt(t,u,3,[$,D===ul?void 0:h&&D[0]===ul?[]:D,m]),D=$)}else b.run()};x.allowRecurse=!!t;let C;l==="sync"?C=x:l==="post"?C=()=>ot(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),C=()=>hr(x));const b=new mi(d,C);b.onTrack=r,b.onTrigger=a,t?n?x():D=b.run():l==="post"?ot(b.run.bind(b),u&&u.suspense):b.run();const B=()=>{b.stop(),u&&u.scope&&ci(u.scope.effects,b)};return _&&_.push(B),B}function Zv(e,t,n){const o=this.proxy,l=Ve(e)?e.includes(".")?Ap(o,e):()=>o[e]:e.bind(o,o);let r;fe(t)?r=t:(r=t.handler,n=t);const a=et;zs(this);const i=ki(l,r.bind(o),n);return a?zs(a):bs(),i}function Ap(e,t){const n=t.split(".");return()=>{let o=e;for(let l=0;l<n.length&&o;l++)o=o[n[l]];return o}}function ps(e,t){if(!Ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Pe(e))ps(e.value,t);else if(ae(e))for(let n=0;n<e.length;n++)ps(e[n],t);else if(qd(e)||ms(e))e.forEach(n=>{ps(n,t)});else if(zd(e))for(const n in e)ps(e[n],t);return e}function Sp(e){Cm(e)&&z("Do not use built-in directive ids as custom directive id: "+e)}function Zo(e,t){const n=tt;if(n===null)return z("withDirectives can only be used inside render functions."),e;const o=wr(n)||n.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,i,c,u=Ne]=t[r];a&&(fe(a)&&(a={mounted:a,updated:a}),a.deep&&ps(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function Jn(e,t,n,o){const l=e.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(As(),Nt(c,n,8,[e.el,i,e,t]),Ss())}}function Jv(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return We(()=>{e.isMounted=!0}),Jo(()=>{e.isUnmounting=!0}),e}const Mt=[Function,Array],Qv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt};function eg(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ha(e,t,n,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:h,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:_,onAppear:D,onAfterAppear:x,onAppearCancelled:C}=t,b=String(e.key),B=eg(n,e),$=(L,U)=>{L&&Nt(L,o,9,U)},O=(L,U)=>{const se=U[1];$(L,U),ae(L)?L.every(de=>de.length<=1)&&se():L.length<=1&&se()},q={mode:r,persisted:a,beforeEnter(L){let U=i;if(!n.isMounted)if(l)U=_||i;else return;L._leaveCb&&L._leaveCb(!0);const se=B[b];se&&ls(e,se)&&se.el._leaveCb&&se.el._leaveCb(),$(U,[L])},enter(L){let U=c,se=u,de=d;if(!n.isMounted)if(l)U=D||c,se=x||u,de=C||d;else return;let Z=!1;const ge=L._enterCb=we=>{Z||(Z=!0,we?$(de,[L]):$(se,[L]),q.delayedLeave&&q.delayedLeave(),L._enterCb=void 0)};U?O(U,[L,ge]):ge()},leave(L,U){const se=String(e.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return U();$(p,[L]);let de=!1;const Z=L._leaveCb=ge=>{de||(de=!0,U(),ge?$(m,[L]):$(f,[L]),L._leaveCb=void 0,B[se]===e&&delete B[se])};B[se]=e,h?O(h,[L,Z]):Z()},clone(L){return ha(L,t,n,o)}};return q}function Vl(e,t){e.shapeFlag&6&&e.component?Vl(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bp(e,t=!1,n){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===$e?(a.patchFlag&128&&l++,o=o.concat(Bp(a.children,t,i))):(t||a.type!==ut)&&o.push(i!=null?dn(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function X(e,t){return fe(e)?(()=>qe({name:e.name},t,{setup:e}))():e}const Hs=e=>!!e.type.__asyncLoader,Ai=e=>e.type.__isKeepAlive,tg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=It(),o=n.ctx;if(!o.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const l=new Map,r=new Set;let a=null;n.__v_cache=l;const i=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:p}}}=o,h=p("div");o.activate=(C,b,B,$,O)=>{const q=C.component;u(C,b,B,0,i),c(q.vnode,C,b,B,q,i,$,C.slotScopeIds,O),ot(()=>{q.isDeactivated=!1,q.a&&On(q.a);const L=C.props&&C.props.onVnodeMounted;L&&Lt(L,q.parent,C)},i),pa(q)},o.deactivate=C=>{const b=C.component;u(C,h,null,1,i),ot(()=>{b.da&&On(b.da);const B=C.props&&C.props.onVnodeUnmounted;B&&Lt(B,b.parent,C),b.isDeactivated=!0},i),pa(b)};function f(C){$r(C),d(C,n,i,!0)}function m(C){l.forEach((b,B)=>{const $=Ro(b.type);$&&(!C||!C($))&&_(B)})}function _(C){const b=l.get(C);!a||!ls(b,a)?f(b):a&&$r(a),l.delete(C),r.delete(C)}_e(()=>[e.include,e.exclude],([C,b])=>{C&&m(B=>mo(C,B)),b&&m(B=>!mo(b,B))},{flush:"post",deep:!0});let D=null;const x=()=>{D!=null&&l.set(D,Tr(n.subTree))};return We(x),yr(x),Jo(()=>{l.forEach(C=>{const{subTree:b,suspense:B}=n,$=Tr(b);if(C.type===$.type&&C.key===$.key){$r($);const O=$.component.da;O&&ot(O,B);return}f(C)})}),()=>{if(D=null,!t.default)return null;const C=t.default(),b=C[0];if(C.length>1)return z("KeepAlive should contain exactly one component child."),a=null,C;if(!un(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let B=Tr(b);const $=B.type,O=Ro(Hs(B)?B.type.__asyncResolved||{}:$),{include:q,exclude:L,max:U}=e;if(q&&(!O||!mo(q,O))||L&&O&&mo(L,O))return a=B,b;const se=B.key==null?$:B.key,de=l.get(se);return B.el&&(B=dn(B),b.shapeFlag&128&&(b.ssContent=B)),D=se,de?(B.el=de.el,B.component=de.component,B.transition&&Vl(B,B.transition),B.shapeFlag|=512,r.delete(se),r.add(se)):(r.add(se),U&&r.size>parseInt(U,10)&&_(r.values().next().value)),B.shapeFlag|=256,a=B,kp(b.type)?b:B}}},Ep=tg;function mo(e,t){return ae(e)?e.some(n=>mo(n,t)):Ve(e)?e.split(",").includes(t):xm(e)?e.test(t):!1}function $p(e,t){Pp(e,"a",t)}function Tp(e,t){Pp(e,"da",t)}function Pp(e,t,n=et){const o=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(gr(t,o,n),n){let l=n.parent;for(;l&&l.parent;)Ai(l.parent.vnode)&&ng(o,t,n,l),l=l.parent}}function ng(e,t,n,o){const l=gr(t,e,o,!0);_r(()=>{ci(o[t],l)},n)}function $r(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Tr(e){return e.shapeFlag&128?e.ssContent:e}function gr(e,t,n=et,o=!1){if(n){const l=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;As(),zs(n);const i=Nt(t,n,e,a);return bs(),Ss(),i});return o?l.unshift(r):l.push(r),r}else{const l=ss(wi[e].replace(/ hook$/,""));z(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const An=e=>(t,n=et)=>(!Lo||e==="sp")&&gr(e,(...o)=>t(...o),n),sg=An("bm"),We=An("m"),og=An("bu"),yr=An("u"),Jo=An("bum"),_r=An("um"),lg=An("sp"),rg=An("rtg"),ag=An("rtc");function ig(e,t=et){gr("ec",e,t)}const ma="components",cg="directives";function ks(e,t){return Ip(ma,e,!0,t)||e}const ug=Symbol.for("v-ndc");function kc(e){return Ip(cg,e)}function Ip(e,t,n=!0,o=!1){const l=tt||et;if(l){const r=l.type;if(e===ma){const i=Ro(r,!1);if(i&&(i===t||i===rn(t)||i===xs(rn(t))))return r}const a=Ac(l[e]||r[e],t)||Ac(l.appContext[e],t);if(!a&&o)return r;if(n&&!a){const i=e===ma?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";z(`Failed to resolve ${e.slice(0,-1)}: ${t}${i}`)}return a}else z(`resolve${xs(e.slice(0,-1))} can only be used in render() or setup().`)}function Ac(e,t){return e&&(e[t]||e[rn(t)]||e[xs(rn(t))])}function Yn(e,t,n,o){let l;const r=n&&n[o];if(ae(e)||Ve(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||z(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Ie(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=t(e[u],u,i,r&&r[i])}}else l=[];return n&&(n[o]=l),l}function bt(e,t,n={},o,l){if(tt.isCE||tt.parent&&Hs(tt.parent)&&tt.parent.isCE)return t!=="default"&&(n.name=t),k("slot",n,o&&o());let r=e[t];r&&r.length>1&&(z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),g();const a=r&&Op(r(n)),i=V($e,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Op(e){return e.some(t=>un(t)?!(t.type===ut||t.type===$e&&!Op(t.children)):!0)?e:null}const va=e=>e?Kp(e)?wr(e)||e.proxy:va(e.parent):null,_s=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>fo(e.props),$attrs:e=>fo(e.attrs),$slots:e=>fo(e.slots),$refs:e=>fo(e.refs),$parent:e=>va(e.parent),$root:e=>va(e.root),$emit:e=>e.emit,$options:e=>Bi(e),$forceUpdate:e=>e.f||(e.f=()=>hr(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>Zv.bind(e)}),Si=e=>e==="_"||e==="$",Pr=(e,t)=>e!==Ne&&!e.__isScriptSetup&&Se(e,t),jp={get({_:e},t){const{ctx:n,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return o[t];case 2:return l[t];case 4:return n[t];case 3:return r[t]}else{if(Pr(o,t))return a[t]=1,o[t];if(l!==Ne&&Se(l,t))return a[t]=2,l[t];if((u=e.propsOptions[0])&&Se(u,t))return a[t]=3,r[t];if(n!==Ne&&Se(n,t))return a[t]=4,n[t];ga&&(a[t]=0)}}const d=_s[t];let p,h;if(d)return t==="$attrs"?(pt(e,"get",t),ql()):t==="$slots"&&pt(e,"get",t),d(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(n!==Ne&&Se(n,t))return a[t]=4,n[t];if(h=c.config.globalProperties,Se(h,t))return h[t];tt&&(!Ve(t)||t.indexOf("__v")!==0)&&(l!==Ne&&Si(t[0])&&Se(l,t)?z(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===tt&&z(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:l,ctx:r}=e;return Pr(l,t)?(l[t]=n,!0):l.__isScriptSetup&&Se(l,t)?(z(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Ne&&Se(o,t)?(o[t]=n,!0):Se(e.props,t)?(z(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(z(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:n}):r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!n[a]||e!==Ne&&Se(e,a)||Pr(t,a)||(i=r[0])&&Se(i,a)||Se(o,a)||Se(_s,a)||Se(l.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};jp.ownKeys=e=>(z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function dg(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(_s).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>_s[n](e),set:Ct})}),t}function pg(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:Ct})})}function fg(e){const{ctx:t,setupState:n}=e;Object.keys(ve(n)).forEach(o=>{if(!n.__isScriptSetup){if(Si(o[0])){z(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:Ct})}})}function hg(){return mg().slots}function mg(){const e=It();return e||z("useContext() called without active instance."),e.setupContext||(e.setupContext=Xp(e))}function Sc(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function vg(){const e=Object.create(null);return(t,n)=>{e[n]?z(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ga=!0;function gg(e){const t=Bi(e),n=e.proxy,o=e.ctx;ga=!1,t.beforeCreate&&Bc(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:p,mounted:h,beforeUpdate:f,updated:m,activated:_,deactivated:D,beforeDestroy:x,beforeUnmount:C,destroyed:b,unmounted:B,render:$,renderTracked:O,renderTriggered:q,errorCaptured:L,serverPrefetch:U,expose:se,inheritAttrs:de,components:Z,directives:ge,filters:we}=t,xe=vg();{const[te]=e.propsOptions;if(te)for(const ce in te)xe("Props",ce)}if(u&&yg(u,o,xe),a)for(const te in a){const ce=a[te];fe(ce)?(Object.defineProperty(o,te,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",te)):z(`Method "${te}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(l){fe(l)||z("The data option must be a function. Plain object usage is no longer supported.");const te=l.call(n,n);if(ui(te)&&z("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ie(te))z("data() should return an object.");else{e.data=Ue(te);for(const ce in te)xe("Data",ce),Si(ce[0])||Object.defineProperty(o,ce,{configurable:!0,enumerable:!0,get:()=>te[ce],set:Ct})}}if(ga=!0,r)for(const te in r){const ce=r[te],Ae=fe(ce)?ce.bind(n,n):fe(ce.get)?ce.get.bind(n,n):Ct;Ae===Ct&&z(`Computed property "${te}" has no getter.`);const je=!fe(ce)&&fe(ce.set)?ce.set.bind(n):()=>{z(`Write operation failed: computed property "${te}" is readonly.`)},Ot=M({get:Ae,set:je});Object.defineProperty(o,te,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:rt=>Ot.value=rt}),xe("Computed",te)}if(i)for(const te in i)Mp(i[te],o,n,te);if(c){const te=fe(c)?c.call(n):c;Reflect.ownKeys(te).forEach(ce=>{Et(ce,te[ce])})}d&&Bc(d,e,"c");function Re(te,ce){ae(ce)?ce.forEach(Ae=>te(Ae.bind(n))):ce&&te(ce.bind(n))}if(Re(sg,p),Re(We,h),Re(og,f),Re(yr,m),Re($p,_),Re(Tp,D),Re(ig,L),Re(ag,O),Re(rg,q),Re(Jo,C),Re(_r,B),Re(lg,U),ae(se))if(se.length){const te=e.exposed||(e.exposed={});se.forEach(ce=>{Object.defineProperty(te,ce,{get:()=>n[ce],set:Ae=>n[ce]=Ae})})}else e.exposed||(e.exposed={});$&&e.render===Ct&&(e.render=$),de!=null&&(e.inheritAttrs=de),Z&&(e.components=Z),ge&&(e.directives=ge)}function yg(e,t,n=Ct){ae(e)&&(e=ya(e));for(const o in e){const l=e[o];let r;Ie(l)?"default"in l?r=E(l.from||o,l.default,!0):r=E(l.from||o):r=E(l),Pe(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[o]=r,n("Inject",o)}}function Bc(e,t,n){Nt(ae(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mp(e,t,n,o){const l=o.includes(".")?Ap(n,o):()=>n[o];if(Ve(e)){const r=t[e];fe(r)?_e(l,r):z(`Invalid watch handler specified by key "${e}"`,r)}else if(fe(e))_e(l,e.bind(n));else if(Ie(e))if(ae(e))e.forEach(r=>Mp(r,t,n,o));else{const r=fe(e.handler)?e.handler.bind(n):t[e.handler];fe(r)?_e(l,r,e):z(`Invalid watch handler specified by key "${e.handler}"`,r)}else z(`Invalid watch option: "${o}"`,e)}function Bi(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!n&&!o?c=t:(c={},l.length&&l.forEach(u=>zl(c,u,a,!0)),zl(c,t,a)),Ie(t)&&r.set(t,c),c}function zl(e,t,n,o=!1){const{mixins:l,extends:r}=t;r&&zl(e,r,n,!0),l&&l.forEach(a=>zl(e,a,n,!0));for(const a in t)if(o&&a==="expose")z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=_g[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const _g={data:Ec,props:$c,emits:$c,methods:vo,computed:vo,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:vo,directives:vo,watch:wg,provide:Ec,inject:bg};function Ec(e,t){return t?e?function(){return qe(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function bg(e,t){return vo(ya(e),ya(t))}function ya(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function vo(e,t){return e?qe(Object.create(null),e,t):t}function $c(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:qe(Object.create(null),Sc(e),Sc(t??{})):t}function wg(e,t){if(!e)return t;if(!t)return e;const n=qe(Object.create(null),e);for(const o in t)n[o]=mt(e[o],t[o]);return n}function Lp(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function xg(e,t){return function(o,l=null){fe(o)||(o=qe({},o)),l!=null&&!Ie(l)&&(z("root props passed to app.mount() must be an object."),l=null);const r=Lp();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){z("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=r.app={_uid:Dg++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Kl,get config(){return r.config},set config(u){z("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?z("Plugin has already been applied to target app."):u&&fe(u.install)?(a.add(u),u.install(c,...d)):fe(u)?(a.add(u),u(c,...d)):z('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?z("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return xa(u,r.config),d?(r.components[u]&&z(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return Sp(u),d?(r.directives[u]&&z(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(i)z("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&z("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=k(o,l);return h.appContext=r,r.reload=()=>{e(dn(h),u,p)},d&&t?t(h,u):e(h,u,p),i=!0,c._container=u,u.__vue_app__=c,c._instance=h.component,Lv(c,Kl),wr(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,Rv(c),delete c._container.__vue_app__):z("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&z(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c},runWithContext(u){Wl=c;try{return u()}finally{Wl=null}}};return c}}let Wl=null;function Et(e,t){if(!et)z("provide() can only be used inside setup().");else{let n=et.provides;const o=et.parent&&et.parent.provides;o===n&&(n=et.provides=Object.create(o)),n[e]=t}}function E(e,t,n=!1){const o=et||tt;if(o||Wl){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Wl._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return n&&fe(t)?t.call(o&&o.proxy):t;z(`injection "${String(e)}" not found.`)}else z("inject() can only be used inside setup() or functional components.")}function Cg(e,t,n,o=!1){const l={},r={};Ol(r,br,1),e.propsDefaults=Object.create(null),Rp(e,t,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);Np(t||{},l,e),n?e.props=o?l:cp(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function kg(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Ag(e,t,n,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=ve(l),[c]=e.propsOptions;let u=!1;if(!kg(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let h=d[p];if(mr(e.emitsOptions,h))continue;const f=t[h];if(c)if(Se(r,h))f!==r[h]&&(r[h]=f,u=!0);else{const m=rn(h);l[m]=_a(c,i,m,f,e,!1)}else f!==r[h]&&(r[h]=f,u=!0)}}}else{Rp(e,t,l,r)&&(u=!0);let d;for(const p in i)(!t||!Se(t,p)&&((d=Cn(p))===p||!Se(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(l[p]=_a(c,i,p,void 0,e,!0)):delete l[p]);if(r!==i)for(const p in r)(!t||!Se(t,p))&&(delete r[p],u=!0)}u&&an(e,"set","$attrs"),Np(t||{},l,e)}function Rp(e,t,n,o){const[l,r]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(xl(c))continue;const u=t[c];let d;l&&Se(l,d=rn(c))?!r||!r.includes(d)?n[d]=u:(i||(i={}))[d]=u:mr(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=ve(n),u=i||Ne;for(let d=0;d<r.length;d++){const p=r[d];n[p]=_a(l,c,p,u[p],e,!Se(u,p))}}return a}function _a(e,t,n,o,l,r){const a=e[n];if(a!=null){const i=Se(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:u}=l;n in u?o=u[n]:(zs(l),o=u[n]=c.call(null,t),bs())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===Cn(n))&&(o=!0))}return o}function Fp(e,t,n=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!fe(e)){const d=p=>{c=!0;const[h,f]=Fp(p,t,!0);qe(a,h),f&&i.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Ie(e)&&o.set(e,Fs),Fs;if(ae(r))for(let d=0;d<r.length;d++){Ve(r[d])||z("props must be strings when using array syntax.",r[d]);const p=rn(r[d]);Tc(p)&&(a[p]=Ne)}else if(r){Ie(r)||z("invalid props options",r);for(const d in r){const p=rn(d);if(Tc(p)){const h=r[d],f=a[p]=ae(h)||fe(h)?{type:h}:qe({},h);if(f){const m=Ic(Boolean,f.type),_=Ic(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||Se(f,"default"))&&i.push(p)}}}}const u=[a,i];return Ie(e)&&o.set(e,u),u}function Tc(e){return e[0]!=="$"?!0:(z(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ba(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Pc(e,t){return ba(e)===ba(t)}function Ic(e,t){return ae(t)?t.findIndex(n=>Pc(n,e)):fe(t)&&Pc(t,e)?0:-1}function Np(e,t,n){const o=ve(t),l=n.propsOptions[0];for(const r in l){let a=l[r];a!=null&&Sg(r,o[r],a,!Se(e,r)&&!Se(e,Cn(r)))}}function Sg(e,t,n,o){const{type:l,required:r,validator:a,skipCheck:i}=n;if(r&&o){z('Missing required prop: "'+e+'"');return}if(!(t==null&&!r)){if(l!=null&&l!==!0&&!i){let c=!1;const u=ae(l)?l:[l],d=[];for(let p=0;p<u.length&&!c;p++){const{valid:h,expectedType:f}=Eg(t,u[p]);d.push(f||""),c=h}if(!c){z($g(e,t,d));return}}a&&!a(t)&&z('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Bg=Kn("String,Number,Boolean,Function,Symbol,BigInt");function Eg(e,t){let n;const o=ba(t);if(Bg(o)){const l=typeof e;n=l===o.toLowerCase(),!n&&l==="object"&&(n=e instanceof t)}else o==="Object"?n=Ie(e):o==="Array"?n=ae(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function $g(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(xs).join(" | ")}`;const l=n[0],r=di(t),a=Oc(t,l),i=Oc(t,r);return n.length===1&&jc(l)&&!Tg(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,jc(r)&&(o+=`with value ${i}.`),o}function Oc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function jc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function Tg(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Hp=e=>e[0]==="_"||e==="$stable",Ei=e=>ae(e)?e.map(Gt):[Gt(e)],Pg=(e,t,n)=>{if(t._n)return t;const o=j((...l)=>(et&&z(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ei(t(...l))),n);return o._c=!1,o},qp=(e,t,n)=>{const o=e._ctx;for(const l in e){if(Hp(l))continue;const r=e[l];if(fe(r))t[l]=Pg(l,r,o);else if(r!=null){z(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Ei(r);t[l]=()=>a}}},Vp=(e,t)=>{Ai(e.vnode)||z("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ei(t);e.slots.default=()=>n},Ig=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ve(t),Ol(t,"_",n)):qp(t,e.slots={})}else e.slots={},t&&Vp(e,t);Ol(e.slots,br,1)},Og=(e,t,n)=>{const{vnode:o,slots:l}=e;let r=!0,a=Ne;if(o.shapeFlag&32){const i=t._;i?Rn?(qe(l,t),an(e,"set","$slots")):n&&i===1?r=!1:(qe(l,t),!n&&i===1&&delete l._):(r=!t.$stable,qp(t,l)),a=t}else t&&(Vp(e,t),a={default:1});if(r)for(const i in l)!Hp(i)&&!(i in a)&&delete l[i]};function wa(e,t,n,o,l=!1){if(ae(e)){e.forEach((h,f)=>wa(h,t&&(ae(t)?t[f]:t),n,o,l));return}if(Hs(o)&&!l)return;const r=o.shapeFlag&4?wr(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){z("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=i.refs===Ne?i.refs={}:i.refs,p=i.setupState;if(u!=null&&u!==c&&(Ve(u)?(d[u]=null,Se(p,u)&&(p[u]=null)):Pe(u)&&(u.value=null)),fe(c))Dn(c,i,12,[a,d]);else{const h=Ve(c),f=Pe(c);if(h||f){const m=()=>{if(e.f){const _=h?Se(p,c)?p[c]:d[c]:c.value;l?ae(_)&&ci(_,r):ae(_)?_.includes(r)||_.push(r):h?(d[c]=[r],Se(p,c)&&(p[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,Se(p,c)&&(p[c]=a)):f?(c.value=a,e.k&&(d[e.k]=a)):z("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,ot(m,n)):m()}else z("Invalid template ref type:",c,`(${typeof c})`)}}let Js,jn;function mn(e,t){e.appContext.config.performance&&Ul()&&jn.mark(`vue-${t}-${e.uid}`),Hv(e,t,Ul()?jn.now():Date.now())}function vn(e,t){if(e.appContext.config.performance&&Ul()){const n=`vue-${t}-${e.uid}`,o=n+":end";jn.mark(o),jn.measure(`<${Dr(e,e.type)}> ${t}`,n,o),jn.clearMarks(n),jn.clearMarks(o)}qv(e,t,Ul()?jn.now():Date.now())}function Ul(){return Js!==void 0||(typeof window<"u"&&window.performance?(Js=!0,jn=window.performance):Js=!1),Js}function jg(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ot=Xv;function Mg(e){return Lg(e)}function Lg(e,t){jg();const n=jl();n.__VUE__=!0,bp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:h,setScopeId:f=Ct,insertStaticContent:m}=e,_=(v,w,T,H=null,N=null,K=null,J=!1,G=null,Y=Rn?!1:!!w.dynamicChildren)=>{if(v===w)return;v&&!ls(v,w)&&(H=Q(v),wt(v,N,K,!0),v=null),w.patchFlag===-2&&(Y=!1,w.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:re}=w;switch(W){case Qo:D(v,w,T,H);break;case ut:x(v,w,T,H);break;case Al:v==null?C(w,T,H,J):b(v,w,T,J);break;case $e:ge(v,w,T,H,N,K,J,G,Y);break;default:re&1?O(v,w,T,H,N,K,J,G,Y):re&6?we(v,w,T,H,N,K,J,G,Y):re&64||re&128?W.process(v,w,T,H,N,K,J,G,Y,ne):z("Invalid VNode type:",W,`(${typeof W})`)}ie!=null&&N&&wa(ie,v&&v.ref,K,w||v,!w)},D=(v,w,T,H)=>{if(v==null)o(w.el=i(w.children),T,H);else{const N=w.el=v.el;w.children!==v.children&&u(N,w.children)}},x=(v,w,T,H)=>{v==null?o(w.el=c(w.children||""),T,H):w.el=v.el},C=(v,w,T,H)=>{[v.el,v.anchor]=m(v.children,w,T,H,v.el,v.anchor)},b=(v,w,T,H)=>{if(w.children!==v.children){const N=h(v.anchor);$(v),[w.el,w.anchor]=m(w.children,T,N,H)}else w.el=v.el,w.anchor=v.anchor},B=({el:v,anchor:w},T,H)=>{let N;for(;v&&v!==w;)N=h(v),o(v,T,H),v=N;o(w,T,H)},$=({el:v,anchor:w})=>{let T;for(;v&&v!==w;)T=h(v),l(v),v=T;l(w)},O=(v,w,T,H,N,K,J,G,Y)=>{J=J||w.type==="svg",v==null?q(w,T,H,N,K,J,G,Y):se(v,w,N,K,J,G,Y)},q=(v,w,T,H,N,K,J,G)=>{let Y,W;const{type:ie,props:re,shapeFlag:ue,transition:me,dirs:Be}=v;if(Y=v.el=a(v.type,K,re&&re.is,re),ue&8?d(Y,v.children):ue&16&&U(v.children,Y,null,H,N,K&&ie!=="foreignObject",J,G),Be&&Jn(v,null,H,"created"),L(Y,v,v.scopeId,J,H),re){for(const Fe in re)Fe!=="value"&&!xl(Fe)&&r(Y,Fe,null,re[Fe],K,v.children,H,N,R);"value"in re&&r(Y,"value",null,re.value),(W=re.onVnodeBeforeMount)&&Lt(W,H,v)}Object.defineProperty(Y,"__vnode",{value:v,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:H,enumerable:!1}),Be&&Jn(v,null,H,"beforeMount");const He=(!N||N&&!N.pendingBranch)&&me&&!me.persisted;He&&me.beforeEnter(Y),o(Y,w,T),((W=re&&re.onVnodeMounted)||He||Be)&&ot(()=>{W&&Lt(W,H,v),He&&me.enter(Y),Be&&Jn(v,null,H,"mounted")},N)},L=(v,w,T,H,N)=>{if(T&&f(v,T),H)for(let K=0;K<H.length;K++)f(v,H[K]);if(N){let K=N.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=Cp(K.children)||K),w===K){const J=N.vnode;L(v,J,J.scopeId,J.slotScopeIds,N.parent)}}},U=(v,w,T,H,N,K,J,G,Y=0)=>{for(let W=Y;W<v.length;W++){const ie=v[W]=G?Pn(v[W]):Gt(v[W]);_(null,ie,w,T,H,N,K,J,G)}},se=(v,w,T,H,N,K,J)=>{const G=w.el=v.el;let{patchFlag:Y,dynamicChildren:W,dirs:ie}=w;Y|=v.patchFlag&16;const re=v.props||Ne,ue=w.props||Ne;let me;T&&Qn(T,!1),(me=ue.onVnodeBeforeUpdate)&&Lt(me,T,w,v),ie&&Jn(w,v,T,"beforeUpdate"),T&&Qn(T,!0),Rn&&(Y=0,J=!1,W=null);const Be=N&&w.type!=="foreignObject";if(W?(de(v.dynamicChildren,W,G,T,H,Be,K),Gl(v,w)):J||Ae(v,w,G,null,T,H,Be,K,!1),Y>0){if(Y&16)Z(G,w,re,ue,T,H,N);else if(Y&2&&re.class!==ue.class&&r(G,"class",null,ue.class,N),Y&4&&r(G,"style",re.style,ue.style,N),Y&8){const He=w.dynamicProps;for(let Fe=0;Fe<He.length;Fe++){const Xe=He[Fe],zt=re[Xe],Ps=ue[Xe];(Ps!==zt||Xe==="value")&&r(G,Xe,zt,Ps,N,v.children,T,H,R)}}Y&1&&v.children!==w.children&&d(G,w.children)}else!J&&W==null&&Z(G,w,re,ue,T,H,N);((me=ue.onVnodeUpdated)||ie)&&ot(()=>{me&&Lt(me,T,w,v),ie&&Jn(w,v,T,"updated")},H)},de=(v,w,T,H,N,K,J)=>{for(let G=0;G<w.length;G++){const Y=v[G],W=w[G],ie=Y.el&&(Y.type===$e||!ls(Y,W)||Y.shapeFlag&70)?p(Y.el):T;_(Y,W,ie,null,H,N,K,J,!0)}},Z=(v,w,T,H,N,K,J)=>{if(T!==H){if(T!==Ne)for(const G in T)!xl(G)&&!(G in H)&&r(v,G,T[G],null,J,w.children,N,K,R);for(const G in H){if(xl(G))continue;const Y=H[G],W=T[G];Y!==W&&G!=="value"&&r(v,G,W,Y,J,w.children,N,K,R)}"value"in H&&r(v,"value",T.value,H.value)}},ge=(v,w,T,H,N,K,J,G,Y)=>{const W=w.el=v?v.el:i(""),ie=w.anchor=v?v.anchor:i("");let{patchFlag:re,dynamicChildren:ue,slotScopeIds:me}=w;(Rn||re&2048)&&(re=0,Y=!1,ue=null),me&&(G=G?G.concat(me):me),v==null?(o(W,T,H),o(ie,T,H),U(w.children,T,ie,N,K,J,G,Y)):re>0&&re&64&&ue&&v.dynamicChildren?(de(v.dynamicChildren,ue,T,N,K,J,G),Gl(v,w)):Ae(v,w,T,ie,N,K,J,G,Y)},we=(v,w,T,H,N,K,J,G,Y)=>{w.slotScopeIds=G,v==null?w.shapeFlag&512?N.ctx.activate(w,T,H,J,Y):xe(w,T,H,N,K,J,Y):Re(v,w,Y)},xe=(v,w,T,H,N,K,J)=>{const G=v.component=Kg(v,H,N);if(G.type.__hmrId&&Iv(G),Cl(v),mn(G,"mount"),Ai(v)&&(G.ctx.renderer=ne),mn(G,"init"),Xg(G),vn(G,"init"),G.asyncDep){if(N&&N.registerDep(G,te),!v.el){const Y=G.subTree=k(ut);x(null,Y,w,T)}return}te(G,v,w,T,N,K,J),kl(),vn(G,"mount")},Re=(v,w,T)=>{const H=w.component=v.component;if(Kv(v,w,T))if(H.asyncDep&&!H.asyncResolved){Cl(w),ce(H,w,T),kl();return}else H.next=w,Tv(H.update),H.update();else w.el=v.el,H.vnode=w},te=(v,w,T,H,N,K,J)=>{const G=()=>{if(v.isMounted){let{next:ie,bu:re,u:ue,parent:me,vnode:Be}=v,He=ie,Fe;Cl(ie||v.vnode),Qn(v,!1),ie?(ie.el=Be.el,ce(v,ie,J)):ie=Be,re&&On(re),(Fe=ie.props&&ie.props.onVnodeBeforeUpdate)&&Lt(Fe,me,ie,Be),Qn(v,!0),mn(v,"render");const Xe=Er(v);vn(v,"render");const zt=v.subTree;v.subTree=Xe,mn(v,"patch"),_(zt,Xe,p(zt.el),Q(zt),v,N,K),vn(v,"patch"),ie.el=Xe.el,He===null&&Yv(v,Xe.el),ue&&ot(ue,N),(Fe=ie.props&&ie.props.onVnodeUpdated)&&ot(()=>Lt(Fe,me,ie,Be),N),wp(v),kl()}else{let ie;const{el:re,props:ue}=w,{bm:me,m:Be,parent:He}=v,Fe=Hs(w);if(Qn(v,!1),me&&On(me),!Fe&&(ie=ue&&ue.onVnodeBeforeMount)&&Lt(ie,He,w),Qn(v,!0),re&&Me){const Xe=()=>{mn(v,"render"),v.subTree=Er(v),vn(v,"render"),mn(v,"hydrate"),Me(re,v.subTree,v,N,null),vn(v,"hydrate")};Fe?w.type.__asyncLoader().then(()=>!v.isUnmounted&&Xe()):Xe()}else{mn(v,"render");const Xe=v.subTree=Er(v);vn(v,"render"),mn(v,"patch"),_(null,Xe,T,H,v,N,K),vn(v,"patch"),w.el=Xe.el}if(Be&&ot(Be,N),!Fe&&(ie=ue&&ue.onVnodeMounted)){const Xe=w;ot(()=>Lt(ie,He,Xe),N)}(w.shapeFlag&256||He&&Hs(He.vnode)&&He.vnode.shapeFlag&256)&&v.a&&ot(v.a,N),v.isMounted=!0,pa(v),w=T=H=null}},Y=v.effect=new mi(G,()=>hr(W),v.scope),W=v.update=()=>Y.run();W.id=v.uid,Qn(v,!0),Y.onTrack=v.rtc?ie=>On(v.rtc,ie):void 0,Y.onTrigger=v.rtg?ie=>On(v.rtg,ie):void 0,W.ownerInstance=v,W()},ce=(v,w,T)=>{w.component=v;const H=v.vnode.props;v.vnode=w,v.next=null,Ag(v,w.props,H,T),Og(v,w.children,T),As(),wc(),Ss()},Ae=(v,w,T,H,N,K,J,G,Y=!1)=>{const W=v&&v.children,ie=v?v.shapeFlag:0,re=w.children,{patchFlag:ue,shapeFlag:me}=w;if(ue>0){if(ue&128){Ot(W,re,T,H,N,K,J,G,Y);return}else if(ue&256){je(W,re,T,H,N,K,J,G,Y);return}}me&8?(ie&16&&R(W,N,K),re!==W&&d(T,re)):ie&16?me&16?Ot(W,re,T,H,N,K,J,G,Y):R(W,N,K,!0):(ie&8&&d(T,""),me&16&&U(re,T,H,N,K,J,G,Y))},je=(v,w,T,H,N,K,J,G,Y)=>{v=v||Fs,w=w||Fs;const W=v.length,ie=w.length,re=Math.min(W,ie);let ue;for(ue=0;ue<re;ue++){const me=w[ue]=Y?Pn(w[ue]):Gt(w[ue]);_(v[ue],me,T,null,N,K,J,G,Y)}W>ie?R(v,N,K,!0,!1,re):U(w,T,H,N,K,J,G,Y,re)},Ot=(v,w,T,H,N,K,J,G,Y)=>{let W=0;const ie=w.length;let re=v.length-1,ue=ie-1;for(;W<=re&&W<=ue;){const me=v[W],Be=w[W]=Y?Pn(w[W]):Gt(w[W]);if(ls(me,Be))_(me,Be,T,null,N,K,J,G,Y);else break;W++}for(;W<=re&&W<=ue;){const me=v[re],Be=w[ue]=Y?Pn(w[ue]):Gt(w[ue]);if(ls(me,Be))_(me,Be,T,null,N,K,J,G,Y);else break;re--,ue--}if(W>re){if(W<=ue){const me=ue+1,Be=me<ie?w[me].el:H;for(;W<=ue;)_(null,w[W]=Y?Pn(w[W]):Gt(w[W]),T,Be,N,K,J,G,Y),W++}}else if(W>ue)for(;W<=re;)wt(v[W],N,K,!0),W++;else{const me=W,Be=W,He=new Map;for(W=Be;W<=ue;W++){const ht=w[W]=Y?Pn(w[W]):Gt(w[W]);ht.key!=null&&(He.has(ht.key)&&z("Duplicate keys found during update:",JSON.stringify(ht.key),"Make sure keys are unique."),He.set(ht.key,W))}let Fe,Xe=0;const zt=ue-Be+1;let Ps=!1,cc=0;const Zs=new Array(zt);for(W=0;W<zt;W++)Zs[W]=0;for(W=me;W<=re;W++){const ht=v[W];if(Xe>=zt){wt(ht,N,K,!0);continue}let Qt;if(ht.key!=null)Qt=He.get(ht.key);else for(Fe=Be;Fe<=ue;Fe++)if(Zs[Fe-Be]===0&&ls(ht,w[Fe])){Qt=Fe;break}Qt===void 0?wt(ht,N,K,!0):(Zs[Qt-Be]=W+1,Qt>=cc?cc=Qt:Ps=!0,_(ht,w[Qt],T,null,N,K,J,G,Y),Xe++)}const uc=Ps?Rg(Zs):Fs;for(Fe=uc.length-1,W=zt-1;W>=0;W--){const ht=Be+W,Qt=w[ht],dc=ht+1<ie?w[ht+1].el:H;Zs[W]===0?_(null,Qt,T,dc,N,K,J,G,Y):Ps&&(Fe<0||W!==uc[Fe]?rt(Qt,T,dc,2):Fe--)}}},rt=(v,w,T,H,N=null)=>{const{el:K,type:J,transition:G,children:Y,shapeFlag:W}=v;if(W&6){rt(v.component.subTree,w,T,H);return}if(W&128){v.suspense.move(w,T,H);return}if(W&64){J.move(v,w,T,ne);return}if(J===$e){o(K,w,T);for(let re=0;re<Y.length;re++)rt(Y[re],w,T,H);o(v.anchor,w,T);return}if(J===Al){B(v,w,T);return}if(H!==2&&W&1&&G)if(H===0)G.beforeEnter(K),o(K,w,T),ot(()=>G.enter(K),N);else{const{leave:re,delayLeave:ue,afterLeave:me}=G,Be=()=>o(K,w,T),He=()=>{re(K,()=>{Be(),me&&me()})};ue?ue(K,Be,He):He()}else o(K,w,T)},wt=(v,w,T,H=!1,N=!1)=>{const{type:K,props:J,ref:G,children:Y,dynamicChildren:W,shapeFlag:ie,patchFlag:re,dirs:ue}=v;if(G!=null&&wa(G,null,T,v,!0),ie&256){w.ctx.deactivate(v);return}const me=ie&1&&ue,Be=!Hs(v);let He;if(Be&&(He=J&&J.onVnodeBeforeUnmount)&&Lt(He,w,v),ie&6)jt(v.component,T,H);else{if(ie&128){v.suspense.unmount(T,H);return}me&&Jn(v,null,w,"beforeUnmount"),ie&64?v.type.remove(v,w,T,N,ne,H):W&&(K!==$e||re>0&&re&64)?R(W,w,T,!1,!0):(K===$e&&re&384||!N&&ie&16)&&R(Y,w,T),H&&Jt(v)}(Be&&(He=J&&J.onVnodeUnmounted)||me)&&ot(()=>{He&&Lt(He,w,v),me&&Jn(v,null,w,"unmounted")},T)},Jt=v=>{const{type:w,el:T,anchor:H,transition:N}=v;if(w===$e){v.patchFlag>0&&v.patchFlag&2048&&N&&!N.persisted?v.children.forEach(J=>{J.type===ut?l(J.el):Jt(J)}):Zn(T,H);return}if(w===Al){$(v);return}const K=()=>{l(T),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:J,delayLeave:G}=N,Y=()=>J(T,K);G?G(v.el,K,Y):Y()}else K()},Zn=(v,w)=>{let T;for(;v!==w;)T=h(v),l(v),v=T;l(w)},jt=(v,w,T)=>{v.type.__hmrId&&Ov(v);const{bum:H,scope:N,update:K,subTree:J,um:G}=v;H&&On(H),N.stop(),K&&(K.active=!1,wt(J,v,w,T)),G&&ot(G,w),ot(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve()),Nv(v)},R=(v,w,T,H=!1,N=!1,K=0)=>{for(let J=K;J<v.length;J++)wt(v[J],w,T,H,N)},Q=v=>v.shapeFlag&6?Q(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),ee=(v,w,T)=>{v==null?w._vnode&&wt(w._vnode,null,null,!0):_(w._vnode||null,v,w,null,null,null,T),wc(),gp(),w._vnode=v},ne={p:_,um:wt,m:rt,r:Jt,mt:xe,mc:U,pc:Ae,pbc:de,n:Q,o:e};let ke,Me;return t&&([ke,Me]=t(ne)),{render:ee,hydrate:ke,createApp:xg(ee,ke)}}function Qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Gl(e,t,n=!1){const o=e.children,l=t.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=Pn(l[r]),i.el=a.el),n||Gl(a,i)),i.type===Qo&&(i.el=a.el),i.type===ut&&!i.el&&(i.el=a.el)}}function Rg(e){const t=e.slice(),n=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(l=n[n.length-1],e[l]<u){t[o]=l,n.push(o);continue}for(r=0,a=n.length-1;r<a;)i=r+a>>1,e[n[i]]<u?r=i+1:a=i;u<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}const Fg=e=>e.__isTeleport,qs=e=>e&&(e.disabled||e.disabled===""),Mc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Da=(e,t)=>{const n=e&&e.to;if(Ve(n))if(t){const o=t(n);return o||z(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return z("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!qs(e)&&z(`Invalid Teleport target: ${n}`),n},Ng={__isTeleport:!0,process(e,t,n,o,l,r,a,i,c,u){const{mc:d,pc:p,pbc:h,o:{insert:f,querySelector:m,createText:_,createComment:D}}=u,x=qs(t.props);let{shapeFlag:C,children:b,dynamicChildren:B}=t;if(Rn&&(c=!1,B=null),e==null){const $=t.el=D("teleport start"),O=t.anchor=D("teleport end");f($,n,o),f(O,n,o);const q=t.target=Da(t.props,m),L=t.targetAnchor=_("");q?(f(L,q),a=a||Mc(q)):x||z("Invalid Teleport target on mount:",q,`(${typeof q})`);const U=(se,de)=>{C&16&&d(b,se,de,l,r,a,i,c)};x?U(n,O):q&&U(q,L)}else{t.el=e.el;const $=t.anchor=e.anchor,O=t.target=e.target,q=t.targetAnchor=e.targetAnchor,L=qs(e.props),U=L?n:O,se=L?$:q;if(a=a||Mc(O),B?(h(e.dynamicChildren,B,U,l,r,a,i),Gl(e,t,!0)):c||p(e,t,U,se,l,r,a,i,!1),x)L||dl(t,n,$,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=Da(t.props,m);de?dl(t,de,null,u,0):z("Invalid Teleport target on update:",O,`(${typeof O})`)}else L&&dl(t,O,q,u,1)}zp(t)},remove(e,t,n,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:p,props:h}=e;if(p&&r(d),(a||!qs(h))&&(r(u),i&16))for(let f=0;f<c.length;f++){const m=c[f];l(m,t,n,!0,!!m.dynamicChildren)}},move:dl,hydrate:Hg};function dl(e,t,n,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=e,p=r===2;if(p&&o(a,t,n),(!p||qs(d))&&c&16)for(let h=0;h<u.length;h++)l(u[h],t,n,2);p&&o(i,t,n)}function Hg(e,t,n,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=t.target=Da(t.props,c);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(qs(t.props))t.anchor=u(a(e),t,i(e),n,o,l,r),t.targetAnchor=p;else{t.anchor=a(e);let h=p;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(p,t,d,n,o,l,r)}zp(t)}return t.anchor&&a(t.anchor)}const qg=Ng;function zp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const $e=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Al=Symbol.for("v-stc"),bo=[];let Yt=null;function g(e=!1){bo.push(Yt=e?null:[])}function Vg(){bo.pop(),Yt=bo[bo.length-1]||null}let Mo=1;function Lc(e){Mo+=e}function Wp(e){return e.dynamicChildren=Mo>0?Yt||Fs:null,Vg(),Mo>0&&Yt&&Yt.push(e),e}function A(e,t,n,o,l,r){return Wp(s(e,t,n,o,l,r,!0))}function V(e,t,n,o,l){return Wp(k(e,t,n,o,l,!0))}function un(e){return e?e.__v_isVNode===!0:!1}function ls(e,t){return t.shapeFlag&6&&Ls.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const zg=(...e)=>Wg(...e),br="__vInternal",Up=({key:e})=>e??null,Sl=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||Pe(e)||fe(e)?{i:tt,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,o=0,l=null,r=e===$e?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Up(t),ref:t&&Sl(t),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:tt};return i?($i(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),c.key!==c.key&&z("VNode created with invalid key (NaN). VNode type:",c.type),Mo>0&&!a&&Yt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Yt.push(c),c}const k=zg;function Wg(e,t=null,n=null,o=0,l=null,r=!1){if((!e||e===ug)&&(e||z(`Invalid vnode type when creating vnode: ${e}.`),e=ut),un(e)){const i=dn(e,t,!0);return n&&$i(i,n),Mo>0&&!r&&Yt&&(i.shapeFlag&6?Yt[Yt.indexOf(e)]=i:Yt.push(i)),i.patchFlag|=-2,i}if(Zp(e)&&(e=e.__vccOpts),t){t=oe(t);let{class:i,style:c}=t;i&&!Ve(i)&&(t.class=Le(i)),Ie(c)&&(Nl(c)&&!ae(c)&&(c=qe({},c)),t.style=Ge(c))}const a=Ve(e)?1:kp(e)?128:Fg(e)?64:Ie(e)?4:fe(e)?2:0;return a&4&&Nl(e)&&(e=ve(e),z("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,t,n,o,l,a,r,!0)}function oe(e){return e?Nl(e)||br in e?qe({},e):e:null}function dn(e,t,n=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=t?ze(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Up(i),ref:t&&t.ref?n&&l?ae(l)?l.concat(Sl(t)):[l,Sl(t)]:Sl(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(Gp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dn(e.ssContent),ssFallback:e.ssFallback&&dn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gp(e){const t=dn(e);return ae(e.children)&&(t.children=e.children.map(Gp)),t}function y(e=" ",t=0){return k(Qo,null,e,t)}function ye(e="",t=!1){return t?(g(),V(ut,null,e)):k(ut,null,e)}function Gt(e){return e==null||typeof e=="boolean"?k(ut):ae(e)?k($e,null,e.slice()):typeof e=="object"?Pn(e):k(Qo,null,String(e))}function Pn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dn(e)}function $i(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),$i(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(br in t)?t._ctx=tt:l===3&&tt&&(tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:tt},n=32):(t=String(t),o&64?(n=16,t=[y(t)]):n=8);e.children=t,e.shapeFlag|=n}function ze(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Le([t.class,o.class]));else if(l==="style")t.style=Ge([t.style,o.style]);else if(Yo(l)){const r=t[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Lt(e,t,n,o=null){Nt(e,t,7,[n,o])}const Ug=Lp();let Gg=0;function Kg(e,t,n){const o=e.type,l=(t?t.appContext:e.appContext)||Ug,r={uid:Gg++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(o,l),emitsOptions:xp(o,l),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:o.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=dg(r),r.root=t?t.root:r,r.emit=zv.bind(null,r),e.ce&&e.ce(r),r}let et=null;const It=()=>et||tt;let Ti,Is,Rc="__VUE_INSTANCE_SETTERS__";(Is=jl()[Rc])||(Is=jl()[Rc]=[]),Is.push(e=>et=e),Ti=e=>{Is.length>1?Is.forEach(t=>t(e)):Is[0](e)};const zs=e=>{Ti(e),e.scope.on()},bs=()=>{et&&et.scope.off(),Ti(null)},Yg=Kn("slot,component");function xa(e,t){const n=t.isNativeTag||Hd;(Yg(e)||n(e))&&z("Do not use built-in or reserved HTML elements as component id: "+e)}function Kp(e){return e.vnode.shapeFlag&4}let Lo=!1;function Xg(e,t=!1){Lo=t;const{props:n,children:o}=e.vnode,l=Kp(e);Cg(e,n,l,t),Ig(e,o);const r=l?Zg(e,t):void 0;return Lo=!1,r}function Zg(e,t){var n;const o=e.type;{if(o.name&&xa(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)xa(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Sp(r[a])}o.compilerOptions&&Jg()&&z('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=pr(new Proxy(e.ctx,jp)),pg(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?Xp(e):null;zs(e),As();const a=Dn(l,e,0,[fo(e.props),r]);if(Ss(),bs(),ui(a)){if(a.then(bs,bs),t)return a.then(i=>{Fc(e,i,t)}).catch(i=>{fr(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(n=o.name)!=null?n:"Anonymous";z(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Fc(e,a,t)}else Yp(e,t)}function Fc(e,t,n){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ie(t)?(un(t)&&z("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=dp(t),fg(e)):t!==void 0&&z(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Yp(e,n)}let Ca;const Jg=()=>!Ca;function Yp(e,t,n){const o=e.type;if(!e.render){if(!t&&Ca&&!o.render){const l=o.template||Bi(e).template;if(l){mn(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=qe(qe({isCustomElement:r,delimiters:i},a),c);o.render=Ca(l,u),vn(e,"compile")}}e.render=o.render||Ct}zs(e),As(),gg(e),Ss(),bs(),!o.render&&e.render===Ct&&!t&&(o.template?z('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):z("Component is missing template or render function."))}function Qg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ql(),pt(e,"get","$attrs"),t[n]},set(){return z("setupContext.attrs is readonly."),!1},deleteProperty(){return z("setupContext.attrs is readonly."),!1}}))}function ey(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return pt(e,"get","$slots"),t[n]}}))}function Xp(e){return Object.freeze({get attrs(){return Qg(e)},get slots(){return ey(e)},get emit(){return(n,...o)=>e.emit(n,...o)},expose:n=>{if(e.exposed&&z("expose() should be called only once per setup()."),n!=null){let o=typeof n;o==="object"&&(ae(n)?o="array":Pe(n)&&(o="ref")),o!=="object"&&z(`expose() should be passed a plain object, received ${o}.`)}e.exposed=n||{}}})}function wr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(dp(pr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _s)return _s[n](e)},has(t,n){return n in t||n in _s}}))}const ty=/(?:^|[-_])(\w)/g,ny=e=>e.replace(ty,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ro(e,t=!0){return fe(e)?e.displayName||e.name:e.name||t&&e.__name}function Dr(e,t,n=!1){let o=Ro(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?ny(o):n?"App":"Anonymous"}function Zp(e){return fe(e)&&"__vccOpts"in e}const M=(e,t)=>Dv(e,t,Lo);function nt(e,t,n){const o=arguments.length;return o===2?Ie(t)&&!ae(t)?un(t)?k(e,null,[t]):k(e,t):k(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&un(n)&&(n=[n]),k(e,t,n))}const sy=Symbol.for("v-scx"),oy=()=>{{const e=E(sy);return e||z("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ir(e){return!!(e&&e.__v_isShallow)}function ly(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(p){return Ie(p)?p.__isVue?["div",e,"VueInstance"]:Pe(p)?["div",{},["span",e,d(p)],"<",i(p.value),">"]:gs(p)?["div",{},["span",e,Ir(p)?"ShallowReactive":"Reactive"],"<",i(p),`>${Un(p)?" (readonly)":""}`]:Un(p)?["div",{},["span",e,Ir(p)?"ShallowReadonly":"Readonly"],"<",i(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...r(p.$)]}};function r(p){const h=[];p.type.props&&p.props&&h.push(a("props",ve(p.props))),p.setupState!==Ne&&h.push(a("setup",p.setupState)),p.data!==Ne&&h.push(a("data",ve(p.data)));const f=c(p,"computed");f&&h.push(a("computed",f));const m=c(p,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),h}function a(p,h){return h=qe({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(f=>["div",{},["span",o,f+": "],i(h[f],!1)])]]:["span",{}]}function i(p,h=!0){return typeof p=="number"?["span",t,p]:typeof p=="string"?["span",n,JSON.stringify(p)]:typeof p=="boolean"?["span",o,p]:Ie(p)?["object",{object:h?ve(p):p}]:["span",n,String(p)]}function c(p,h){const f=p.type;if(fe(f))return;const m={};for(const _ in p.ctx)u(f,_,h)&&(m[_]=p.ctx[_]);return m}function u(p,h,f){const m=p[f];if(ae(m)&&m.includes(h)||Ie(m)&&h in m||p.extends&&u(p.extends,h,f)||p.mixins&&p.mixins.some(_=>u(_,h,f)))return!0}function d(p){return Ir(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Kl="3.3.4",ry="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,Nc=rs&&rs.createElement("template"),ay={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const l=t?rs.createElementNS(ry,e):rs.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>rs.createTextNode(e),createComment:e=>rs.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,l,r){const a=n?n.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===r||!(l=l.nextSibling)););else{Nc.innerHTML=o?`<svg>${e}</svg>`:e;const i=Nc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function iy(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function cy(e,t,n){const o=e.style,l=Ve(n);if(n&&!l){if(t&&!Ve(t))for(const r in t)n[r]==null&&ka(o,r,"");for(const r in n)ka(o,r,n[r])}else{const r=o.display;l?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const uy=/[^\\];\s*$/,Hc=/\s*!important$/;function ka(e,t,n){if(ae(n))n.forEach(o=>ka(e,t,o));else if(n==null&&(n=""),uy.test(n)&&z(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=dy(e,t);Hc.test(n)?e.setProperty(Cn(o),n.replace(Hc,""),"important"):e[o]=n}}const qc=["Webkit","Moz","ms"],Or={};function dy(e,t){const n=Or[t];if(n)return n;let o=rn(t);if(o!=="filter"&&o in e)return Or[t]=o;o=xs(o);for(let l=0;l<qc.length;l++){const r=qc[l]+o;if(r in e)return Or[t]=r}return t}const Vc="http://www.w3.org/1999/xlink";function py(e,t,n,o,l){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Vc,t.slice(6,t.length)):e.setAttributeNS(Vc,t,n);else{const r=Mm(t);n==null||r&&!Ud(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function fy(e,t,n,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),e[t]=n??"";return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=n;const u=i==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ud(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||z(`Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function as(e,t,n,o){e.addEventListener(t,n,o)}function hy(e,t,n,o){e.removeEventListener(t,n,o)}function my(e,t,n,o,l=null){const r=e._vei||(e._vei={}),a=r[t];if(o&&a)a.value=o;else{const[i,c]=vy(t);if(o){const u=r[t]=_y(o,l);as(e,i,u,c)}else a&&(hy(e,i,a,c),r[t]=void 0)}}const zc=/(?:Once|Passive|Capture)$/;function vy(e){let t;if(zc.test(e)){t={};let o;for(;o=e.match(zc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Cn(e.slice(2)),t]}let jr=0;const gy=Promise.resolve(),yy=()=>jr||(gy.then(()=>jr=0),jr=Date.now());function _y(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Nt(by(o,n.value),t,5,[o])};return n.value=e,n.attached=yy(),n}function by(e,t){if(ae(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Wc=/^on[a-z]/,wy=(e,t,n,o,l=!1,r,a,i,c)=>{t==="class"?iy(e,o,l):t==="style"?cy(e,n,o):Yo(t)?Il(t)||my(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Dy(e,t,o,l))?fy(e,t,o,r,a,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),py(e,t,o,l))};function Dy(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Wc.test(t)&&fe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Wc.test(t)&&Ve(n)?!1:t in e}const Bn="transition",Qs="animation",Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xy=qe({},Qv,Jp),es=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},Uc=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function Cy(e){const t={};for(const Z in e)Z in Jp||(t[Z]=e[Z]);if(e.css===!1)return t;const{name:n="v",type:o,duration:l,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=ky(l),_=m&&m[0],D=m&&m[1],{onBeforeEnter:x,onEnter:C,onEnterCancelled:b,onLeave:B,onLeaveCancelled:$,onBeforeAppear:O=x,onAppear:q=C,onAppearCancelled:L=b}=t,U=(Z,ge,we)=>{$n(Z,ge?d:i),$n(Z,ge?u:a),we&&we()},se=(Z,ge)=>{Z._isLeaving=!1,$n(Z,p),$n(Z,f),$n(Z,h),ge&&ge()},de=Z=>(ge,we)=>{const xe=Z?q:C,Re=()=>U(ge,Z,we);es(xe,[ge,Re]),Gc(()=>{$n(ge,Z?c:r),gn(ge,Z?d:i),Uc(xe)||Kc(ge,o,_,Re)})};return qe(t,{onBeforeEnter(Z){es(x,[Z]),gn(Z,r),gn(Z,a)},onBeforeAppear(Z){es(O,[Z]),gn(Z,c),gn(Z,u)},onEnter:de(!1),onAppear:de(!0),onLeave(Z,ge){Z._isLeaving=!0;const we=()=>se(Z,ge);gn(Z,p),ef(),gn(Z,h),Gc(()=>{Z._isLeaving&&($n(Z,p),gn(Z,f),Uc(B)||Kc(Z,o,D,we))}),es(B,[Z,we])},onEnterCancelled(Z){U(Z,!1),es(b,[Z])},onAppearCancelled(Z){U(Z,!0),es(L,[Z])},onLeaveCancelled(Z){se(Z),es($,[Z])}})}function ky(e){if(e==null)return null;if(Ie(e))return[Mr(e.enter),Mr(e.leave)];{const t=Mr(e);return[t,t]}}function Mr(e){const t=Sm(e);return Sv(t,"<transition> explicit duration"),t}function gn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function $n(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Gc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ay=0;function Kc(e,t,n,o){const l=e._endId=++Ay,r=()=>{l===e._endId&&o()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:c}=Qp(e,t);if(!a)return o();const u=a+"end";let d=0;const p=()=>{e.removeEventListener(u,h),r()},h=f=>{f.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},i+1),e.addEventListener(u,h)}function Qp(e,t){const n=window.getComputedStyle(e),o=m=>(n[m]||"").split(", "),l=o(`${Bn}Delay`),r=o(`${Bn}Duration`),a=Yc(l,r),i=o(`${Qs}Delay`),c=o(`${Qs}Duration`),u=Yc(i,c);let d=null,p=0,h=0;t===Bn?a>0&&(d=Bn,p=a,h=r.length):t===Qs?u>0&&(d=Qs,p=u,h=c.length):(p=Math.max(a,u),d=p>0?a>u?Bn:Qs:null,h=d?d===Bn?r.length:c.length:0);const f=d===Bn&&/\b(transform|all)(,|$)/.test(o(`${Bn}Property`).toString());return{type:d,timeout:p,propCount:h,hasTransform:f}}function Yc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Xc(n)+Xc(e[o])))}function Xc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ef(){return document.body.offsetHeight}const tf=new WeakMap,nf=new WeakMap,sf={name:"TransitionGroup",props:qe({},xy,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=It(),o=Jv();let l,r;return yr(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Py(l[0].el,n.vnode.el,a))return;l.forEach(Ey),l.forEach($y);const i=l.filter(Ty);ef(),i.forEach(c=>{const u=c.el,d=u.style;gn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const p=u._moveCb=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",p),u._moveCb=null,$n(u,a))};u.addEventListener("transitionend",p)})}),()=>{const a=ve(e),i=Cy(a);let c=a.tag||$e;l=r,r=t.default?Bp(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Vl(d,ha(d,i,o,n)):z("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Vl(d,ha(d,i,o,n)),tf.set(d,d.el.getBoundingClientRect())}return k(c,null,r)}}},Sy=e=>delete e.mode;sf.props;const By=sf;function Ey(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function $y(e){nf.set(e,e.el.getBoundingClientRect())}function Ty(e){const t=tf.get(e),n=nf.get(e),o=t.left-n.left,l=t.top-n.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function Py(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=Qp(o);return l.removeChild(o),r}const Yl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ae(t)?n=>On(t,n):t};function Iy(e){e.target.composing=!0}function Zc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Oy={created(e,{modifiers:{lazy:t,trim:n,number:o}},l){e._assign=Yl(l);const r=o||l.props&&l.props.type==="number";as(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),r&&(i=ra(i)),e._assign(i)}),n&&as(e,"change",()=>{e.value=e.value.trim()}),t||(as(e,"compositionstart",Iy),as(e,"compositionend",Zc),as(e,"change",Zc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:l}},r){if(e._assign=Yl(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(l||e.type==="number")&&ra(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},jy={created(e,{value:t},n){e.checked=Ml(t,n.props.value),e._assign=Yl(n),as(e,"change",()=>{e._assign(My(e))})},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=Yl(o),t!==n&&(e.checked=Ml(t,o.props.value))}};function My(e){return"_value"in e?e._value:e.value}const Ly=["ctrl","shift","alt","meta"],Ry={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ly.some(n=>e[`${n}Key`]&&!t.includes(n))},Fy=(e,t)=>(n,...o)=>{for(let l=0;l<t.length;l++){const r=Ry[t[l]];if(r&&r(n,t))return}return e(n,...o)},Ny={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pl=(e,t)=>n=>{if(!("key"in n))return;const o=Cn(n.key);if(t.some(l=>l===o||Ny[l]===o))return e(n)},of={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):eo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),eo(e,!0),o.enter(e)):o.leave(e,()=>{eo(e,!1)}):eo(e,t))},beforeUnmount(e,{value:t}){eo(e,t)}};function eo(e,t){e.style.display=t?e._vod:"none"}const Hy=qe({patchProp:wy},ay);let Jc;function qy(){return Jc||(Jc=Mg(Hy))}const Vy=(...e)=>{const t=qy().createApp(...e);zy(t),Wy(t);const{mount:n}=t;return t.mount=o=>{const l=Uy(o);if(!l)return;const r=t._component;!fe(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function zy(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Wd(t)||Om(t),writable:!1})}function Wy(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){z("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return z(o),n},set(){z(o)}})}}function Uy(e){if(Ve(e)){const t=document.querySelector(e);return t||z(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&z('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Gy(){ly()}Gy();function Aa(e,t={},n){for(const o in e){const l=e[o],r=n?`${n}:${o}`:o;typeof l=="object"&&l!==null?Aa(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Ky={run:e=>e()},Yy=()=>Ky,lf=typeof console.createTask<"u"?console.createTask:Yy;function Xy(e,t){const n=t.shift(),o=lf(n);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Zy(e,t){const n=t.shift(),o=lf(n);return Promise.all(e.map(l=>o.run(()=>l(...t))))}function Lr(e,t){for(const n of[...e])n(t)}class Jy{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,n(...r));return o=this.hook(t,l),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Aa(t),o=Object.keys(n).map(l=>this.hook(l,n[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const n=Aa(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Xy,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Zy,t,...n)}callHookWith(t,n,...o){const l=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&Lr(this._before,l);const r=t(n in this._hooks?[...this._hooks[n]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Lr(this._after,l)}):(this._after&&l&&Lr(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Qy(){return new Jy}function e0(e){return Array.isArray(e)?e:[e]}const rf=["title","script","style","noscript"],af=["base","meta","link","style","script","noscript"],t0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],n0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Qc=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function cf(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Sa(e){return cf(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function s0(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function uf(e,t){const{props:n,tag:o}=e;if(n0.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof n[r]<"u"){const a=String(n[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}function eu(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function fl(e,t=!1,n){const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;n&&n(e,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}n&&!r.startsWith("data-h-")&&n(e,i,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),rf.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let to=!1;async function df(e,t={}){var h,f;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(to=to||e._hash||!1,to)){const m=s0(l.map(_=>_.tag._h));if(to===m)return;to=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([_,D])=>{r[_]=D})});const a=(m,_,D)=>{_=`${m.renderId}:${_}`,m.entry&&(m.entry._sde[_]=D),delete r[_]};function i(m){const _=e.headEntries().find(x=>x._i===m._e),D={renderId:m._d||Sa(m),$el:null,shouldRender:!0,tag:m,entry:_,markSideEffect:(x,C)=>a(D,x,C)};return D}const c=[],u={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var _;(_=m.$el)==null||_.remove(),delete e._elMap[m.renderId]})};for(const m of l){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){o.title=_.textContent||"",c.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=o[_.tag==="htmlAttrs"?"documentElement":"body"],fl(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&_.key&&(m.$el=o.querySelector(`${(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),m.$el){m.tag._d&&fl(m),d(m);continue}u[(f=_.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(m)}const p={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,_])=>{var x;if(!_.length)return;const D=(x=o==null?void 0:o[m])==null?void 0:x.children;if(D){for(const C of[...D].reverse()){const b=C.tagName.toLowerCase();if(!af.includes(b))continue;const B=C.getAttributeNames().reduce((L,U)=>({...L,[U]:C.getAttribute(U)}),{}),$={tag:b,props:B};C.innerHTML&&($.innerHTML=C.innerHTML);const O=Sa($);let q=_.findIndex(L=>(L==null?void 0:L.renderId)===O);if(q===-1){const L=uf($);q=_.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===L)}if(q!==-1){const L=_[q];L.$el=C,fl(L),d(L),delete _[q]}}_.forEach(C=>{const b=C.tag.tagPosition||"head";p[b]=p[b]||o.createDocumentFragment(),C.$el||(C.$el=o.createElement(C.tag.tag),fl(C,!0)),p[b].appendChild(C.$el),d(C)})}}),p.head&&o.head.appendChild(p.head),p.bodyOpen&&o.body.insertBefore(p.bodyOpen,o.body.firstChild),p.bodyClose&&o.body.appendChild(p.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Rr=null;async function pf(e,t={}){function n(){return Rr=null,df(e,t)}const o=t.delayFn||(l=>setTimeout(l,10));return Rr=Rr||new Promise(l=>o(()=>l(n())))}function o0(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),pf(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function l0(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const tu={base:-1,title:1},nu={critical:-8,high:-1,low:2};function Xl(e){let t=10;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props.charset&&(t=-2),e.props["http-equiv"]==="content-security-policy"&&(t=0)):e.tag in tu&&(t=tu[e.tag]),typeof n=="string"&&n in nu?t+nu[n]:t)}const r0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function a0(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(l=>l._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of r0)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=t(l.tagPriority.replace(n,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>Xl(n)-Xl(o))}}}}function i0(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&n!==-1){const l=eu(t[n].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(n!==-1){const l=eu(t[n].textContent);l!==null&&(t[n].textContent=l,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function c0(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const u0=["link","style","script","noscript"];function d0(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=Sa(e)),e.key&&u0.includes(e.tag)&&(e._h=cf(e.key),e.props[`data-h-${e._h}`]="")}}}}const su=["script","link","bodyAttrs"];function p0(){const e=(t,n)=>{const o={},l={};Object.entries(n.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!su.includes(n.tag)||!Object.entries(n.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!su.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:o,delayedSrc:l}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=r;n.setAttribute(c,""),o.addEventListener(i,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const f0=["templateParams","htmlAttrs","bodyAttrs"];function h0(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const n=uf(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=t[l];if(r){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&f0.includes(o.tag)&&(i="merge"),i==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}else if(Xl(o)>Xl(r))return}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(af.includes(o.tag)&&a===0){delete t[l];return}t[l]=o});const n=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,n.push(o),l&&n.push(...l)}),e.tags=n}}}}function no(e,t){if(typeof e!="string")return e;function n(a){if(["s","pageTitle"].includes(a))return t.pageTitle;let i;return a.includes(".")?i=a.split(".").reduce((c,u)=>c&&c[u]||void 0,t):i=t[a],typeof i<"u"?i||"":!1}let o=e;try{o=decodeURI(e)}catch{}(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const i=n(a.slice(1));typeof i=="string"&&(e=e.replace(new RegExp(`\\${a}(\\W|$)`,"g"),`${i}$1`).trim())});const r=t.separator;return e.includes(r)&&(e.endsWith(r)&&(e=e.slice(0,-r.length).trim()),e.startsWith(r)&&(e=e.slice(r.length).trim()),e=e.replace(new RegExp(`\\${r}\\s*\\${r}`,"g"),r)),e}function m0(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,n=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].props:{};l.separator=l.separator||"|",l.pageTitle=no(l.pageTitle||n||"",l);for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=no(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=no(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=no(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?no(c,l):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const v0=typeof window<"u";let ff;function g0(e){return ff=e}function y0(){return ff}async function _0(e,t,n){const o={tag:e,props:{}};return t instanceof Promise&&(t=await t),e==="templateParams"?(o.props=t,o):["title","titleTemplate"].includes(e)?(t&&typeof t=="object"?(o.textContent=t.textContent,t.tagPriority&&(o.tagPriority=t.tagPriority)):o.textContent=t,o):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?o.props.src=t:o.innerHTML=t,o):!1:(o.props=await w0(e,{...t}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(l=>Qc.includes(l)).forEach(l=>{(!["innerHTML","textContent"].includes(l)||rf.includes(o.tag))&&(o[l]=o.props[l]),delete o.props[l]}),Qc.forEach(l=>{!o[l]&&n[l]&&(o[l]=n[l])}),["innerHTML","textContent"].forEach(l=>{if(o.tag==="script"&&typeof o[l]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[l]=JSON.parse(o[l])}catch{o[l]=""}typeof o[l]=="object"&&(o[l]=JSON.stringify(o[l]))}),o.props.class&&(o.props.class=b0(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(l=>({...o,props:{...o.props,content:l}})):o)}function b0(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function w0(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const D0=10;async function x0(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&t0.includes(n)).forEach(([n,o])=>{const l=e0(o);t.push(...l.map(r=>_0(n,r,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<D0)+o,n))}function C0(){return[h0(),a0(),m0(),i0(),d0(),p0(),c0()]}function k0(e={}){return[o0({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function A0(e={}){const t=S0({...e,plugins:[...k0(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=l0(t.resolvedOptions.document)),g0(t),t}function S0(e={}){let t=[],n={},o=0;const l=Qy();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...C0(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(v0?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{},...c},d=(u==null?void 0:u.mode)||e.mode;return d&&(u.mode=d),t.push(u),r(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},r(),!1))},patch(p){t=t.map(h=>(h._i===u._i&&(u.input=h.input=p,r()),h))}}},async resolveTags(){const i={tags:[],entries:[...t]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=c.transform?c.transform(u):u,c.resolvedInput)for(const d of await x0(c)){const p={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",p),i.tags.push(p.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...n};return n={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function B0(e){return typeof e=="function"?e():S(e)}function Zl(e,t=""){if(e instanceof Promise)return e;const n=B0(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Zl(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,S(l)]:[o,Zl(l,o)])):n}const E0=Kl.startsWith("3"),$0=typeof window<"u",hf="usehead";function Pi(){return It()&&E(hf)||y0()}function T0(e){return{install(n){E0&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(hf,e))}}.install}function P0(e={}){const t=A0({...e,domDelayFn:n=>setTimeout(()=>it(()=>n()),10),plugins:[I0(),...(e==null?void 0:e.plugins)||[]]});return t.install=T0(t),t}function I0(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Zl(t.input)}}}}function O0(e,t={}){const n=Pi(),o=F(!1),l=F({});Bs(()=>{l.value=o.value?{}:Zl(e)});const r=n.push(l.value,t);return _e(l,i=>{r.patch(i)}),It()&&(Jo(()=>{r.dispose()}),Tp(()=>{o.value=!0}),$p(()=>{o.value=!1})),r}function j0(e,t={}){return Pi().push(e,t)}function mf(e,t={}){var o;const n=Pi();if(n){const l=$0||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?O0(e,t):j0(e,t)}}function M0(e,t){const n=P0(t||{}),o={unhead:n,install(l){Kl.startsWith("3")&&(l.config.globalProperties.$head=n,l.provide("usehead",n))},use(l){n.use(l)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(l,r){return n.push(l,r)},addEntry(l,r){return n.push(l,r)},addHeadObjs(l,r){return n.push(l,r)},addReactiveEntry(l,r){const a=mf(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?df(n,{document:l}):pf(n,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const wo=Symbol("v-click-clicks"),is=Symbol("v-click-clicks-elements"),Ba=Symbol("v-click-clicks-order-map"),Do=Symbol("v-click-clicks-disabled"),vf=Symbol("slidev-slide-scale"),P=Symbol("slidev-slidev-context"),L0=Symbol("slidev-route"),R0=Symbol("slidev-slide-context"),os="slidev-vclick-target",Fr="slidev-vclick-hidden",F0="slidev-vclick-fade",Nr="slidev-vclick-hidden-explicitly",so="slidev-vclick-current",hl="slidev-vclick-prior",N0=["localhost","127.0.0.1"];let H0=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function gf(e){return e=e??[],Array.isArray(e)?e:[e]}function Ea(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function q0(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const l=[];let r=t;for(;r<n;)l.push(r),r+=o||1;return l}function V0(e){return e!=null}function z0(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(V0))}const go={theme:"seriph",title:"canvas 教程",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Te=go,Fn=Te.aspectRatio??16/9,Nn=Te.canvasWidth??980,Ii=Math.ceil(Nn/Fn),Oi=M(()=>z0(Te.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function yf(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Vt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Es=Ue({page:0,clicks:0});let W0=[],U0=[];Vt(Es,"$syncUp",!0);Vt(Es,"$syncDown",!0);Vt(Es,"$paused",!1);Vt(Es,"$onSet",e=>W0.push(e));Vt(Es,"$onPatch",e=>U0.push(e));yf();Vt(Es,"$patch",async()=>!1);function _f(e,t,n=!1){const o=[];let l=!1,r=!1,a,i;const c=Ue(t);function u(f){o.push(f)}function d(f,m){c[f]!==m&&(clearTimeout(a),l=!0,c[f]=m,a=setTimeout(()=>l=!1,0))}function p(f){l||(clearTimeout(i),r=!0,Object.entries(f).forEach(([m,_])=>{c[m]=_}),i=setTimeout(()=>r=!1,0))}function h(f){let m;n?n&&window.addEventListener("storage",D=>{D&&D.key===f&&D.newValue&&p(JSON.parse(D.newValue))}):(m=new BroadcastChannel(f),m.addEventListener("message",D=>p(D.data)));function _(){!n&&m&&!r?m.postMessage(ve(c)):n&&!r&&window.localStorage.setItem(f,JSON.stringify(c)),l||o.forEach(D=>D(c))}if(_e(c,_,{deep:!0,flush:"sync"}),n){const D=window.localStorage.getItem(f);D&&p(JSON.parse(D))}}return{init:h,onPatch:u,patch:d,state:c}}const{init:G0,onPatch:K0,patch:oo,state:Hr}=_f(Es,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),$s=Ue({});let Y0=[],X0=[];Vt($s,"$syncUp",!0);Vt($s,"$syncDown",!0);Vt($s,"$paused",!1);Vt($s,"$onSet",e=>Y0.push(e));Vt($s,"$onPatch",e=>X0.push(e));yf();Vt($s,"$patch",async()=>!1);const{init:Z0,onPatch:J0,patch:bf,state:Jl}=_f($s,{},!1),Q0="modulepreload",e_=function(e){return"/my-slidevs/slidevs/learn-canvas/"+e},ou={},Hn=function(t,n,o){if(!n||n.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=e_(r),r in ou)return;ou[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const p=l[d];if(p.href===r&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Q0,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};function t_(e,t){let n,o,l;const r=F(!0),a=()=>{r.value=!0,l()};_e(e,a,{flush:"sync"});const i=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=bi((d,p)=>(o=d,l=p,{get(){return r.value&&(n=i(),r.value=!1),o(),n},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function pn(e){return fi()?(Yd(e),!0):!1}function Ze(e){return typeof e=="function"?e():S(e)}function n_(e){if(!Pe(e))return Ue(e);const t=new Proxy({},{get(n,o,l){return S(Reflect.get(e.value,o,l))},set(n,o,l){return Pe(e.value[o])&&!Pe(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ue(t)}const Xt=typeof window<"u",s_=e=>typeof e<"u",o_=e=>e!=null,l_=Object.prototype.toString,$a=e=>l_.call(e)==="[object Object]",Ta=()=>+Date.now(),ws=()=>{},r_=a_();function a_(){var e;return Xt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function i_(e,t){function n(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return n}const wf=e=>e();function c_(e=wf){const t=F(!0);function n(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:Kt(t),pause:n,resume:o,eventFilter:l}}function u_(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=e.slice(o.length),r=Number.parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function Df(...e){if(e.length!==1)return bv(...e);const t=e[0];return typeof t=="function"?Kt(bi(()=>({get:t,set:ws}))):F(t)}var d_=Object.defineProperty,p_=Object.defineProperties,f_=Object.getOwnPropertyDescriptors,lu=Object.getOwnPropertySymbols,h_=Object.prototype.hasOwnProperty,m_=Object.prototype.propertyIsEnumerable,ru=(e,t,n)=>t in e?d_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v_=(e,t)=>{for(var n in t||(t={}))h_.call(t,n)&&ru(e,n,t[n]);if(lu)for(var n of lu(t))m_.call(t,n)&&ru(e,n,t[n]);return e},g_=(e,t)=>p_(e,f_(t));function y_(e){if(!Pe(e))return gv(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=bi(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[n]=o,e.value=l}else{const l=g_(v_({},e.value),{[n]:o});Object.setPrototypeOf(l,Object.getPrototypeOf(e.value)),e.value=l}}}));return t}function xf(e,t=!0){It()?We(e):t?e():it(e)}function __(e){It()&&_r(e)}function b_(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:l=!1}=n;let r=null;const a=F(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const d=Ze(t);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&Xt&&u(),Pe(t)||typeof t=="function"){const d=_e(t,()=>{a.value&&Xt&&u()});pn(d)}return pn(c),{isActive:a,pause:c,resume:u}}function w_(e,t,n={}){const{immediate:o=!0}=n,l=F(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...u)},Ze(t))}return o&&(l.value=!0,Xt&&c()),pn(i),{isPending:Kt(l),start:c,stop:i}}function Cf(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,l=Pe(e),r=F(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=Ze(n);return r.value=r.value===c?Ze(o):c,r.value}}return l?a:[r,a]}var au=Object.getOwnPropertySymbols,D_=Object.prototype.hasOwnProperty,x_=Object.prototype.propertyIsEnumerable,C_=(e,t)=>{var n={};for(var o in e)D_.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&au)for(var o of au(e))t.indexOf(o)<0&&x_.call(e,o)&&(n[o]=e[o]);return n};function k_(e,t,n={}){const o=n,{eventFilter:l=wf}=o,r=C_(o,["eventFilter"]);return _e(e,i_(l,t),r)}var A_=Object.defineProperty,S_=Object.defineProperties,B_=Object.getOwnPropertyDescriptors,Ql=Object.getOwnPropertySymbols,kf=Object.prototype.hasOwnProperty,Af=Object.prototype.propertyIsEnumerable,iu=(e,t,n)=>t in e?A_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E_=(e,t)=>{for(var n in t||(t={}))kf.call(t,n)&&iu(e,n,t[n]);if(Ql)for(var n of Ql(t))Af.call(t,n)&&iu(e,n,t[n]);return e},$_=(e,t)=>S_(e,B_(t)),T_=(e,t)=>{var n={};for(var o in e)kf.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ql)for(var o of Ql(e))t.indexOf(o)<0&&Af.call(e,o)&&(n[o]=e[o]);return n};function P_(e,t,n={}){const o=n,{eventFilter:l}=o,r=T_(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=c_(l);return{stop:k_(e,t,$_(E_({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function ct(e){var t;const n=Ze(e);return(t=n==null?void 0:n.$el)!=null?t:n}const st=Xt?window:void 0,Sf=Xt?window.document:void 0,I_=Xt?window.navigator:void 0;function Ce(...e){let t,n,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,l]=e,t=st):[t,n,o,l]=e,!t)return ws;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,p,h,f)=>(d.addEventListener(p,h,f),()=>d.removeEventListener(p,h,f)),c=_e(()=>[ct(t),Ze(l)],([d,p])=>{a(),d&&r.push(...n.flatMap(h=>o.map(f=>i(d,h,f,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return pn(u),u}let cu=!1;function O_(e,t,n={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:a=!1}=n;if(!o)return;r_&&!cu&&(cu=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",ws)));let i=!0;const c=h=>l.some(f=>{if(typeof f=="string")return Array.from(o.document.querySelectorAll(f)).some(m=>m===h.target||h.composedPath().includes(m));{const m=ct(f);return m&&(h.target===m||h.composedPath().includes(m))}}),d=[Ce(o,"click",h=>{const f=ct(e);if(!(!f||f===h.target||h.composedPath().includes(f))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}t(h)}},{passive:!0,capture:r}),Ce(o,"pointerdown",h=>{const f=ct(e);f&&(i=!h.composedPath().includes(f)&&!c(h))},{passive:!0}),a&&Ce(o,"blur",h=>{setTimeout(()=>{var f;const m=ct(e);((f=o.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(h)},0)})].filter(Boolean);return()=>d.forEach(h=>h())}function j_(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function M_(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:l=st,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=o,c=j_(t);return Ce(l,r,d=>{d.repeat&&Ze(i)||c(d)&&n(d)},a)}function L_(e={}){var t;const{window:n=st}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,l=t_(()=>null,()=>o==null?void 0:o.activeElement);return n&&(Ce(n,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Ce(n,"focus",l.trigger,!0)),l}function R_(){const e=F(!1);return It()&&We(()=>{e.value=!0}),e}function el(e){const t=R_();return M(()=>(t.value,!!e()))}function F_(e,t={}){const{immediate:n=!0,window:o=st}=t,l=F(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const p=d-(r||d);e({delta:p,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),pn(u),{isActive:Kt(l),pause:u,resume:c}}function cs(e,t={}){const{window:n=st}=t,o=el(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let l;const r=F(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=n.matchMedia(Df(e).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i)))};return Bs(i),pn(()=>a()),r}const N_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function H_(e,t={}){function n(i,c){let u=e[i];return c!=null&&(u=u_(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=st}=t;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>cs(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return cs(`(min-width: ${n(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return cs(`(max-width: ${n(i,-.1)})`,t)},smallerOrEqual(i){return cs(`(max-width: ${n(i)})`,t)},between(i,c){return cs(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${n(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${n(i)})`)},isSmaller(i){return l(`(max-width: ${n(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${n(i)})`)},isInBetween(i,c){return l(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)},current(){const i=Object.keys(e).map(c=>[c,r(c)]);return M(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function q_(e={}){const{navigator:t=I_,read:n=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=el(()=>t&&"clipboard"in t),c=M(()=>i.value||r),u=F(""),d=F(!1),p=w_(()=>d.value=!1,l);function h(){i.value?t.clipboard.readText().then(D=>{u.value=D}):u.value=_()}if(c.value&&n)for(const D of a)Ce(D,h);async function f(D=Ze(o)){c.value&&D!=null&&(i.value?await t.clipboard.writeText(D):m(D),u.value=D,d.value=!0,p.start())}function m(D){const x=document.createElement("textarea");x.value=D??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function _(){var D,x,C;return(C=(x=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:x.toString())!=null?C:""}return{isSupported:c,text:u,copied:d,copy:f}}function V_(e){return JSON.parse(JSON.stringify(e))}const ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vl="__vueuse_ssr_handlers__",z_=W_();function W_(){return vl in ml||(ml[vl]=ml[vl]||{}),ml[vl]}function U_(e,t){return z_[e]||t}function G_(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var K_=Object.defineProperty,uu=Object.getOwnPropertySymbols,Y_=Object.prototype.hasOwnProperty,X_=Object.prototype.propertyIsEnumerable,du=(e,t,n)=>t in e?K_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pu=(e,t)=>{for(var n in t||(t={}))Y_.call(t,n)&&du(e,n,t[n]);if(uu)for(var n of uu(t))X_.call(t,n)&&du(e,n,t[n]);return e};const Z_={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},fu="vueuse-storage";function J_(e,t,n,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=st,eventFilter:h,onError:f=L=>{console.error(L)}}=o,m=(d?cn:F)(t);if(!n)try{n=U_("getDefaultStorage",()=>{var L;return(L=st)==null?void 0:L.localStorage})()}catch(L){f(L)}if(!n)return m;const _=Ze(t),D=G_(_),x=(l=o.serializer)!=null?l:Z_[D],{pause:C,resume:b}=P_(m,()=>B(m.value),{flush:r,deep:a,eventFilter:h});return p&&i&&(Ce(p,"storage",q),Ce(p,fu,O)),q(),m;function B(L){try{if(L==null)n.removeItem(e);else{const U=x.write(L),se=n.getItem(e);se!==U&&(n.setItem(e,U),p&&p.dispatchEvent(new CustomEvent(fu,{detail:{key:e,oldValue:se,newValue:U,storageArea:n}})))}}catch(U){f(U)}}function $(L){const U=L?L.newValue:n.getItem(e);if(U==null)return c&&_!==null&&n.setItem(e,x.write(_)),_;if(!L&&u){const se=x.read(U);return typeof u=="function"?u(se,_):D==="object"&&!Array.isArray(se)?pu(pu({},_),se):se}else return typeof U!="string"?U:x.read(U)}function O(L){q(L.detail)}function q(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){m.value=_;return}if(!(L&&L.key!==e)){C();try{m.value=$(L)}catch(U){f(U)}finally{L?it(b):b()}}}}}function Q_(e){return cs("(prefers-color-scheme: dark)",e)}var e1=Object.defineProperty,t1=Object.defineProperties,n1=Object.getOwnPropertyDescriptors,hu=Object.getOwnPropertySymbols,s1=Object.prototype.hasOwnProperty,o1=Object.prototype.propertyIsEnumerable,mu=(e,t,n)=>t in e?e1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l1=(e,t)=>{for(var n in t||(t={}))s1.call(t,n)&&mu(e,n,t[n]);if(hu)for(var n of hu(t))o1.call(t,n)&&mu(e,n,t[n]);return e},r1=(e,t)=>t1(e,n1(t));function CO(e,t={}){var n,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:i,onMove:c,onEnd:u,onStart:d,initialValue:p,axis:h="both",draggingElement:f=st,handle:m=e}=t,_=F((n=Ze(p))!=null?n:{x:0,y:0}),D=F(),x=O=>l?l.includes(O.pointerType):!0,C=O=>{Ze(r)&&O.preventDefault(),Ze(a)&&O.stopPropagation()},b=O=>{if(!x(O)||Ze(i)&&O.target!==Ze(e))return;const q=Ze(e).getBoundingClientRect(),L={x:O.clientX-q.left,y:O.clientY-q.top};(d==null?void 0:d(L,O))!==!1&&(D.value=L,C(O))},B=O=>{if(!x(O)||!D.value)return;let{x:q,y:L}=_.value;(h==="x"||h==="both")&&(q=O.clientX-D.value.x),(h==="y"||h==="both")&&(L=O.clientY-D.value.y),_.value={x:q,y:L},c==null||c(_.value,O),C(O)},$=O=>{x(O)&&D.value&&(D.value=void 0,u==null||u(_.value,O),C(O))};if(Xt){const O={capture:(o=t.capture)!=null?o:!0};Ce(m,"pointerdown",b,O),Ce(f,"pointermove",B,O),Ce(f,"pointerup",$,O)}return r1(l1({},y_(_)),{position:_,isDragging:M(()=>!!D.value),style:M(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var vu=Object.getOwnPropertySymbols,a1=Object.prototype.hasOwnProperty,i1=Object.prototype.propertyIsEnumerable,c1=(e,t)=>{var n={};for(var o in e)a1.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&vu)for(var o of vu(e))t.indexOf(o)<0&&i1.call(e,o)&&(n[o]=e[o]);return n};function u1(e,t,n={}){const o=n,{window:l=st}=o,r=c1(o,["window"]);let a;const i=el(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=M(()=>Array.isArray(e)?e.map(h=>ct(h)):[ct(e)]),d=_e(u,h=>{if(c(),i.value&&l){a=new ResizeObserver(t);for(const f of h)f&&a.observe(f,r)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{c(),d()};return pn(p),{isSupported:i,stop:p}}function d1(e,t={width:0,height:0},n={}){const{window:o=st,box:l="content-box"}=n,r=M(()=>{var c,u;return(u=(c=ct(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=F(t.width),i=F(t.height);return u1(e,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=ct(e);if(d){const p=o.getComputedStyle(d);a.value=Number.parseFloat(p.width),i.value=Number.parseFloat(p.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((p,{inlineSize:h})=>p+h,0),i.value=d.reduce((p,{blockSize:h})=>p+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},n),_e(()=>ct(e),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}function p1(e,t,n={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=st,immediate:i=!0}=n,c=el(()=>a&&"IntersectionObserver"in a),u=M(()=>{const m=Ze(e);return(Array.isArray(m)?m:[m]).map(ct).filter(o_)});let d=ws;const p=F(i),h=c.value?_e(()=>[u.value,ct(o),p.value],([m,_])=>{if(d(),!p.value||!m.length)return;const D=new IntersectionObserver(t,{root:ct(_),rootMargin:l,threshold:r});m.forEach(x=>x&&D.observe(x)),d=()=>{D.disconnect(),d=ws}},{immediate:i,flush:"post"}):ws,f=()=>{d(),h(),p.value=!1};return pn(f),{isSupported:c,isActive:p,pause(){d(),p.value=!1},resume(){p.value=!0},stop:f}}const gu=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function f1(e,t={}){const{document:n=Sf,autoExit:o=!1}=t,l=M(()=>{var x;return(x=ct(e))!=null?x:n==null?void 0:n.querySelector("html")}),r=F(!1),a=M(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||l.value&&x in l.value)),i=M(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||l.value&&x in l.value)),c=M(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||l.value&&x in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),d=el(()=>l.value&&n&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),p=()=>u?(n==null?void 0:n[u])===l.value:!1,h=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const x=l.value;if((x==null?void 0:x[c.value])!=null)return!!x[c.value]}}return!1};async function f(){if(!(!d.value||!r.value)){if(i.value)if((n==null?void 0:n[i.value])!=null)await n[i.value]();else{const x=l.value;(x==null?void 0:x[i.value])!=null&&await x[i.value]()}r.value=!1}}async function m(){if(!d.value||r.value)return;h()&&await f();const x=l.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),r.value=!0)}async function _(){await(r.value?f():m())}const D=()=>{const x=h();(!x||x&&p())&&(r.value=x)};return Ce(n,gu,D,!1),Ce(()=>ct(l),gu,D,!1),o&&pn(f),{isSupported:d,isFullscreen:r,enter:m,exit:f,toggle:_}}function Zt(e,t,n={}){const{window:o=st}=n;return J_(e,t,o==null?void 0:o.localStorage,n)}const h1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function m1(e={}){const{reactive:t=!1,target:n=st,aliasMap:o=h1,passive:l=!0,onEventFired:r=ws}=e,a=Ue(new Set),i={toJSON(){return{}},current:a},c=t?Ue(i):i,u=new Set,d=new Set;function p(_,D){_ in c&&(t?c[_]=D:c[_].value=D)}function h(){a.clear();for(const _ of d)p(_,!1)}function f(_,D){var x,C;const b=(x=_.key)==null?void 0:x.toLowerCase(),$=[(C=_.code)==null?void 0:C.toLowerCase(),b].filter(Boolean);b&&(D?a.add(b):a.delete(b));for(const O of $)d.add(O),p(O,D);b==="meta"&&!D?(u.forEach(O=>{a.delete(O),p(O,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&D&&[...a,...$].forEach(O=>u.add(O))}Ce(n,"keydown",_=>(f(_,!0),r(_)),{passive:l}),Ce(n,"keyup",_=>(f(_,!1),r(_)),{passive:l}),Ce("blur",h,{passive:!0}),Ce("focus",h,{passive:!0});const m=new Proxy(c,{get(_,D,x){if(typeof D!="string")return Reflect.get(_,D,x);if(D=D.toLowerCase(),D in o&&(D=o[D]),!(D in c))if(/[+_-]/.test(D)){const b=D.split(/[+_-]/g).map(B=>B.trim());c[D]=M(()=>b.every(B=>Ze(m[B])))}else c[D]=F(!1);const C=Reflect.get(_,D,x);return t?Ze(C):C}});return m}const v1={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function kO(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,target:a=r,eventFilter:i}=e,c=F(l.x),u=F(l.y),d=F(null),p=typeof t=="function"?t:v1[t],h=x=>{const C=p(x);C&&([c.value,u.value]=C,d.value="mouse")},f=x=>{if(x.touches.length>0){const C=p(x.touches[0]);C&&([c.value,u.value]=C,d.value="touch")}},m=()=>{c.value=l.x,u.value=l.y},_=i?x=>i(()=>h(x),{}):x=>h(x),D=i?x=>i(()=>f(x),{}):x=>f(x);return a&&(Ce(a,"mousemove",_,{passive:!0}),Ce(a,"dragover",_,{passive:!0}),n&&t!=="movement"&&(Ce(a,"touchstart",D,{passive:!0}),Ce(a,"touchmove",D,{passive:!0}),o&&Ce(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:d}}function g1(e,t={}){const n=Df(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,i=Ue({x:0,y:0}),c=(O,q)=>{i.x=O,i.y=q},u=Ue({x:0,y:0}),d=(O,q)=>{u.x=O,u.y=q},p=M(()=>i.x-u.x),h=M(()=>i.y-u.y),{max:f,abs:m}=Math,_=M(()=>f(m(p.value),m(h.value))>=o),D=F(!1),x=F(!1),C=M(()=>_.value?m(p.value)>m(h.value)?p.value>0?"left":"right":h.value>0?"up":"down":"none"),b=O=>{var q,L,U;const se=O.buttons===0,de=O.buttons===1;return(U=(L=(q=t.pointerTypes)==null?void 0:q.includes(O.pointerType))!=null?L:se||de)!=null?U:!0},B=[Ce(e,"pointerdown",O=>{var q,L;if(!b(O))return;x.value=!0,(L=(q=n.value)==null?void 0:q.style)==null||L.setProperty("touch-action","none");const U=O.target;U==null||U.setPointerCapture(O.pointerId);const{clientX:se,clientY:de}=O;c(se,de),d(se,de),a==null||a(O)}),Ce(e,"pointermove",O=>{if(!b(O)||!x.value)return;const{clientX:q,clientY:L}=O;d(q,L),!D.value&&_.value&&(D.value=!0),D.value&&(l==null||l(O))}),Ce(e,"pointerup",O=>{var q,L;b(O)&&(D.value&&(r==null||r(O,C.value)),x.value=!1,D.value=!1,(L=(q=n.value)==null?void 0:q.style)==null||L.setProperty("touch-action","initial"))})],$=()=>B.forEach(O=>O());return{isSwiping:Kt(D),direction:Kt(C),posStart:Kt(i),posEnd:Kt(u),distanceX:p,distanceY:h,stop:$}}let y1=0;function AO(e,t={}){const n=F(!1),{document:o=Sf,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++y1}`}=t,i=F(e);let c=()=>{};const u=()=>{if(!o)return;const p=o.getElementById(a)||o.createElement("style");p.isConnected||(p.type="text/css",p.id=a,t.media&&(p.media=t.media),o.head.appendChild(p)),!n.value&&(c=_e(i,h=>{p.textContent=h},{immediate:!0}),n.value=!0)},d=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return l&&!r&&xf(u),r||pn(d),{id:a,css:i,unload:d,load:u,isLoaded:Kt(n)}}var _1=Object.defineProperty,yu=Object.getOwnPropertySymbols,b1=Object.prototype.hasOwnProperty,w1=Object.prototype.propertyIsEnumerable,_u=(e,t,n)=>t in e?_1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D1=(e,t)=>{for(var n in t||(t={}))b1.call(t,n)&&_u(e,n,t[n]);if(yu)for(var n of yu(t))w1.call(t,n)&&_u(e,n,t[n]);return e};function SO(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=F(Ta()+n),i=()=>a.value=Ta()+n,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?F_(c,{immediate:o}):b_(c,l,{immediate:o});return t?D1({timestamp:a},u):a}function sn(e,t,n,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:p,shouldEmit:h}=o,f=It(),m=n||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((a=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(f==null?void 0:f.proxy));let _=u;t||(t="modelValue"),_=_||`update:${t.toString()}`;const D=b=>i?typeof i=="function"?i(b):V_(b):b,x=()=>s_(e[t])?D(e[t]):p,C=b=>{h?h(b)&&m(_,b):m(_,b)};if(c){const b=x(),B=F(b);return _e(()=>e[t],$=>B.value=D($)),_e(B,$=>{($!==e[t]||d)&&C($)},{deep:d}),B}else return M({get(){return x()},set(b){C(b)}})}function BO({window:e=st}={}){if(!e)return F(!1);const t=F(e.document.hasFocus());return Ce(e,"blur",()=>{t.value=!1}),Ce(e,"focus",()=>{t.value=!0}),t}function x1(e={}){const{window:t=st,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=F(n),i=F(o),c=()=>{t&&(r?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};if(c(),xf(c),Ce("resize",c,{passive:!0}),l){const u=cs("(orientation: portrait)");_e(u,()=>c())}return{width:a,height:i}}function C1(){return Bf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Bf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const k1=typeof Proxy=="function",A1="devtools-plugin:setup",S1="plugin:settings:set";let Os,Pa;function B1(){var e;return Os!==void 0||(typeof window<"u"&&window.performance?(Os=!0,Pa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Os=!0,Pa=global.perf_hooks.performance):Os=!1),Os}function E1(){return B1()?Pa.now():Date.now()}class $1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return E1()}},n&&n.on(S1,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function T1(e,t){const n=e,o=Bf(),l=C1(),r=k1&&n.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(A1,e,t);else{const a=r?new $1(n,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function P1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function qr(e,t){const n={};for(const o in t){const l=t[o];n[o]=Pt(l)?l.map(e):e(l)}return n}const xo=()=>{},Pt=Array.isArray;function Ee(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const I1=/\/$/,O1=e=>e.replace(I1,"");function Vr(e,t,n="/"){let o,l={},r="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=e(r)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=L1(o??t,n),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function j1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function wu(e,t,n){const o=t.matched.length-1,l=n.matched.length-1;return o>-1&&o===l&&Gn(t.matched[o],n.matched[l])&&Ef(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ef(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!M1(e[n],t[n]))return!1;return!0}function M1(e,t){return Pt(e)?Du(e,t):Pt(t)?Du(t,e):e===t}function Du(e,t){return Pt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function L1(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=n.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Fo;(function(e){e.pop="pop",e.push="push"})(Fo||(Fo={}));var Co;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Co||(Co={}));function R1(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),O1(e)}const F1=/^[^#]+#/;function N1(e,t){return e.replace(F1,"#")+t}function H1(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const xr=()=>({left:window.pageXOffset,top:window.pageYOffset});function q1(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=H1(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xu(e,t){return(history.state?history.state.position-t:-1)+e}const Ia=new Map;function V1(e,t){Ia.set(e,t)}function z1(e){const t=Ia.get(e);return Ia.delete(e),t}let W1=()=>location.protocol+"//"+location.host;function $f(e,t){const{pathname:n,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),bu(c,"")}return bu(n,e)+o+l}function U1(e,t,n,o){let l=[],r=[],a=null;const i=({state:h})=>{const f=$f(e,location),m=n.value,_=t.value;let D=0;if(h){if(n.value=f,t.value=h,a&&a===m){a=null;return}D=_?h.position-_.position:0}else o(f);l.forEach(x=>{x(n.value,m,{delta:D,type:Fo.pop,direction:D?D>0?Co.forward:Co.back:Co.unknown})})};function c(){a=n.value}function u(h){l.push(h);const f=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(f),f}function d(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:xr()}),"")}function p(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Cu(e,t,n,o=!1,l=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:l?xr():null}}function G1(e){const{history:t,location:n}=window,o={value:$f(e,n)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=e.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:W1()+e+c;try{t[d?"replaceState":"pushState"](u,"",h),l.value=u}catch(f){Ee("Error with push/replace State",f),n[d?"replace":"assign"](h)}}function a(c,u){const d=Oe({},t.state,Cu(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=Oe({},l.value,t.state,{forward:c,scroll:xr()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const p=Oe({},Cu(o.value,c,null),{position:d.position+1},u);r(c,p,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function K1(e){e=R1(e);const t=G1(e),n=U1(e,t.state,t.location,t.replace);function o(r,a=!0){a||n.pauseListeners(),history.go(r)}const l=Oe({location:"",base:e,go:o,createHref:N1.bind(null,e)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Y1(e){return typeof e=="string"||e&&typeof e=="object"}function Tf(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pf=Symbol("navigation failure");var ku;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ku||(ku={}));const X1={1({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},2({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${J1(t)}" via a navigation guard.`},4({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},8({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},16({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ws(e,t){return Oe(new Error(X1[e](t)),{type:e,[Pf]:!0},t)}function hn(e,t){return e instanceof Error&&Pf in e&&(t==null||!!(e.type&t))}const Z1=["params","query","hash"];function J1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of Z1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Au="[^/]+?",Q1={sensitive:!1,strict:!1,start:!0,end:!0},e8=/[.+*?^${}()[\]/\\]/g;function t8(e,t){const n=Oe({},Q1,t),o=[];let l=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let p=0;p<u.length;p++){const h=u[p];let f=40+(n.sensitive?.25:0);if(h.type===0)p||(l+="/"),l+=h.value.replace(e8,"\\$&"),f+=40;else if(h.type===1){const{value:m,repeatable:_,optional:D,regexp:x}=h;r.push({name:m,repeatable:_,optional:D});const C=x||Au;if(C!==Au){f+=10;try{new RegExp(`(${C})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+B.message)}}let b=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;p||(b=D&&u.length<2?`(?:/${b})`:"/"+b),D&&(b+="?"),l+=b,f+=20,D&&(f+=-8),_&&(f+=-20),C===".*"&&(f+=-50)}d.push(f)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const a=new RegExp(l,n.sensitive?"":"i");function i(u){const d=u.match(a),p={};if(!d)return null;for(let h=1;h<d.length;h++){const f=d[h]||"",m=r[h-1];p[m.name]=f&&m.repeatable?f.split("/"):f}return p}function c(u){let d="",p=!1;for(const h of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const f of h)if(f.type===0)d+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:D}=f,x=m in u?u[m]:"";if(Pt(x)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Pt(x)?x.join("/"):x;if(!C)if(D)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${m}"`);d+=C}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function n8(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function s8(e,t){let n=0;const o=e.score,l=t.score;for(;n<o.length&&n<l.length;){const r=n8(o[n],l[n]);if(r)return r;n++}if(Math.abs(l.length-o.length)===1){if(Su(o))return 1;if(Su(l))return-1}return l.length-o.length}function Su(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const o8={type:0,value:""},l8=/[a-zA-Z0-9_]/;function r8(e){if(!e)return[[]];if(e==="/")return[[o8]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,o=n;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):h();break;case 4:h(),n=o;break;case 1:c==="("?n=2:l8.test(c)?h():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),a(),l}function a8(e,t,n){const o=t8(r8(e.path),n);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Ee(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Oe(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function i8(e,t){const n=[],o=new Map;t=$u({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,p,h){const f=!h,m=c8(d);f8(m,p),m.aliasOf=h&&h.record;const _=$u(t,d),D=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const B of b)D.push(Oe({},m,{components:h?h.record.components:m.components,path:B,aliasOf:h?h.record:m}))}let x,C;for(const b of D){const{path:B}=b;if(p&&B[0]!=="/"){const $=p.record.path,O=$[$.length-1]==="/"?"":"/";b.path=p.record.path+(B&&O+B)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=a8(b,p,_),p&&B[0]==="/"&&h8(x,p),h?(h.alias.push(x),p8(h,x)):(C=C||x,C!==x&&C.alias.push(x),f&&d.name&&!Eu(x)&&a(d.name)),m.children){const $=m.children;for(let O=0;O<$.length;O++)r($[O],x,h&&h.children[O])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return C?()=>{a(C)}:xo}function a(d){if(Tf(d)){const p=o.get(d);p&&(o.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return n}function c(d){let p=0;for(;p<n.length&&s8(d,n[p])>=0&&(d.record.path!==n[p].record.path||!If(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!Eu(d)&&o.set(d.record.name,d)}function u(d,p){let h,f={},m,_;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw Ws(1,{location:d});{const C=Object.keys(d.params||{}).filter(b=>!h.keys.find(B=>B.name===b));C.length&&Ee(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=h.record.name,f=Oe(Bu(p.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&Bu(d.params,h.keys.map(C=>C.name))),m=h.stringify(f)}else if("path"in d)m=d.path,m.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),h=n.find(C=>C.re.test(m)),h&&(f=h.parse(m),_=h.record.name);else{if(h=p.name?o.get(p.name):n.find(C=>C.re.test(p.path)),!h)throw Ws(1,{location:d,currentLocation:p});_=h.record.name,f=Oe({},p.params,d.params),m=h.stringify(f)}const D=[];let x=h;for(;x;)D.unshift(x.record),x=x.parent;return{name:_,path:m,params:f,matched:D,meta:d8(D)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Bu(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function c8(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:u8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function u8(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function Eu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function d8(e){return e.reduce((t,n)=>Oe(t,n.meta),{})}function $u(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Oa(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function p8(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Oa.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Oa.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function f8(e,t){t&&t.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function h8(e,t){for(const n of t.keys)if(!e.keys.find(Oa.bind(null,n)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function If(e,t){return t.children.some(n=>n===e||If(e,n))}const Of=/#/g,m8=/&/g,v8=/\//g,g8=/=/g,y8=/\?/g,jf=/\+/g,_8=/%5B/g,b8=/%5D/g,Mf=/%5E/g,w8=/%60/g,Lf=/%7B/g,D8=/%7C/g,Rf=/%7D/g,x8=/%20/g;function ji(e){return encodeURI(""+e).replace(D8,"|").replace(_8,"[").replace(b8,"]")}function C8(e){return ji(e).replace(Lf,"{").replace(Rf,"}").replace(Mf,"^")}function ja(e){return ji(e).replace(jf,"%2B").replace(x8,"+").replace(Of,"%23").replace(m8,"%26").replace(w8,"`").replace(Lf,"{").replace(Rf,"}").replace(Mf,"^")}function k8(e){return ja(e).replace(g8,"%3D")}function A8(e){return ji(e).replace(Of,"%23").replace(y8,"%3F")}function S8(e){return e==null?"":A8(e).replace(v8,"%2F")}function No(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function B8(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(jf," "),a=r.indexOf("="),i=No(a<0?r:r.slice(0,a)),c=a<0?null:No(r.slice(a+1));if(i in t){let u=t[i];Pt(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function Tu(e){let t="";for(let n in e){const o=e[n];if(n=k8(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Pt(o)?o.map(r=>r&&ja(r)):[o&&ja(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function E8(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Pt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const $8=Symbol("router view location matched"),Pu=Symbol("router view depth"),Mi=Symbol("router"),Ff=Symbol("route location"),Ma=Symbol("router view location");function lo(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function In(e,t,n,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=p=>{p===!1?i(Ws(4,{from:n,to:t})):p instanceof Error?i(p):Y1(p)?i(Ws(2,{from:t,to:p})):(r&&o.enterCallbacks[l]===r&&typeof p=="function"&&r.push(p),a())},u=e.call(o&&o.instances[l],t,n,T8(c,t,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const p=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(h=>c._called?h:(Ee(p),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ee(p),i(new Error("Invalid navigation guard"));return}}d.catch(p=>i(p))})}function T8(e,t,n){let o=0;return function(){o++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function zr(e,t,n,o){const l=[];for(const r of e){!r.components&&!r.children.length&&Ee(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ee(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ee(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ee(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(P8(i)){const u=(i.__vccOpts||i)[t];u&&l.push(In(u,n,o,r,a))}else{let c=i();"catch"in c||(Ee(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=P1(u)?u.default:u;r.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&In(h,n,o,r,a)()}))}}}return l}function P8(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Iu(e){const t=E(Mi),n=E(Ff),o=M(()=>t.resolve(S(e.to))),l=M(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const h=p.findIndex(Gn.bind(null,d));if(h>-1)return h;const f=Ou(c[u-2]);return u>1&&Ou(d)===f&&p[p.length-1].path!==f?p.findIndex(Gn.bind(null,c[u-2])):h}),r=M(()=>l.value>-1&&M8(n.params,o.value.params)),a=M(()=>l.value>-1&&l.value===n.matched.length-1&&Ef(n.params,o.value.params));function i(c={}){return j8(c)?t[S(e.replace)?"replace":"push"](S(e.to)).catch(xo):Promise.resolve()}if(bn){const c=It();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Bs(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:M(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const I8=X({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Iu,setup(e,{slots:t}){const n=Ue(Iu(e)),{options:o}=E(Mi),l=M(()=>({[ju(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ju(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:nt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}}),O8=I8;function j8(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function M8(e,t){for(const n in t){const o=t[n],l=e[n];if(typeof o=="string"){if(o!==l)return!1}else if(!Pt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function Ou(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ju=(e,t,n)=>e??t??n,L8=X({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){F8();const o=E(Ma),l=M(()=>e.route||o.value),r=E(Pu,0),a=M(()=>{let u=S(r);const{matched:d}=l.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),i=M(()=>l.value.matched[a.value]);Et(Pu,M(()=>a.value+1)),Et($8,i),Et(Ma,l);const c=F();return _e(()=>[c.value,i.value,e.name],([u,d,p],[h,f,m])=>{d&&(d.instances[p]=u,f&&f!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!Gn(d,f)||!h)&&(d.enterCallbacks[p]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=l.value,d=e.name,p=i.value,h=p&&p.components[d];if(!h)return Mu(n.default,{Component:h,route:u});const f=p.props[d],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,D=nt(h,Oe({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));if(bn&&D.ref){const x={depth:a.value,name:p.name,path:p.path,meta:p.meta};(Pt(D.ref)?D.ref.map(b=>b.i):[D.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return Mu(n.default,{Component:D,route:u})||D}}});function Mu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const R8=L8;function F8(){const e=It(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function ro(e,t){const n=Oe({},e,{matched:e.matched.map(o=>K8(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function gl(e){return{_custom:{display:e}}}let N8=0;function H8(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=N8++;T1({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,p)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ro(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:p})=>{if(p.__vrv_devtools){const h=p.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Nf})}Pt(p.__vrl_devtools)&&(p.__devtoolsApi=l,p.__vrl_devtools.forEach(h=>{let f=Vf,m="";h.isExactActive?(f=qf,m="This is exactly active"):h.isActive&&(f=Hf,m="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:f})}))}),_e(t.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,p)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:p.meta.__navigationId}})});let a=0;t.beforeEach((d,p)=>{const h={guard:gl("beforeEach"),from:ro(p,"Current Location during this navigation"),to:ro(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),t.afterEach((d,p,h)=>{const f={guard:gl("afterEach")};h?(f.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},f.status=gl("❌")):f.status=gl("✅"),f.from=ro(p,"Current Location during this navigation"),f.to=ro(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:f,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let p=n.getRoutes().filter(h=>!h.parent);p.forEach(Uf),d.filter&&(p=p.filter(h=>La(h,d.filter.toLowerCase()))),p.forEach(h=>Wf(h,t.currentRoute.value)),d.rootNodes=p.map(zf)}let u;l.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const h=n.getRoutes().find(f=>f.record.__vd_id===d.nodeId);h&&(d.state={options:V8(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function q8(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function V8(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${q8(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Nf=15485081,Hf=2450411,qf=8702998,z8=2282478,Vf=16486972,W8=6710886;function zf(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:z8}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Vf}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Nf}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:qf}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Hf}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:W8});let o=n.__vd_id;return o==null&&(o=String(U8++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map(zf)}}let U8=0;const G8=/^\/(.*)\/([a-z]*)$/;function Wf(e,t){const n=t.matched.length&&Gn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Gn(o,e.record))),e.children.forEach(o=>Wf(o,t))}function Uf(e){e.__vd_match=!1,e.children.forEach(Uf)}function La(e,t){const n=String(e.re).match(G8);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>La(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=No(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>La(a,t))}function K8(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function Y8(e){const t=i8(e.routes,e),n=e.parseQuery||B8,o=e.stringifyQuery||Tu,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=lo(),a=lo(),i=lo(),c=cn(En);let u=En;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=qr.bind(null,R=>""+R),p=qr.bind(null,S8),h=qr.bind(null,No);function f(R,Q){let ee,ne;return Tf(R)?(ee=t.getRecordMatcher(R),ne=Q):ne=R,t.addRoute(ne,ee)}function m(R){const Q=t.getRecordMatcher(R);Q?t.removeRoute(Q):Ee(`Cannot remove non-existent route "${String(R)}"`)}function _(){return t.getRoutes().map(R=>R.record)}function D(R){return!!t.getRecordMatcher(R)}function x(R,Q){if(Q=Oe({},Q||c.value),typeof R=="string"){const w=Vr(n,R,Q.path),T=t.resolve({path:w.path},Q),H=l.createHref(w.fullPath);return H.startsWith("//")?Ee(`Location "${R}" resolved to "${H}". A resolved location cannot start with multiple slashes.`):T.matched.length||Ee(`No match found for location with path "${R}"`),Oe(w,T,{params:h(T.params),hash:No(w.hash),redirectedFrom:void 0,href:H})}let ee;if("path"in R)"params"in R&&!("name"in R)&&Object.keys(R.params).length&&Ee(`Path "${R.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),ee=Oe({},R,{path:Vr(n,R.path,Q.path).path});else{const w=Oe({},R.params);for(const T in w)w[T]==null&&delete w[T];ee=Oe({},R,{params:p(w)}),Q.params=p(Q.params)}const ne=t.resolve(ee,Q),ke=R.hash||"";ke&&!ke.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`),ne.params=d(h(ne.params));const Me=j1(o,Oe({},R,{hash:C8(ke),path:ne.path})),v=l.createHref(Me);return v.startsWith("//")?Ee(`Location "${R}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):ne.matched.length||Ee(`No match found for location with path "${"path"in R?R.path:R}"`),Oe({fullPath:Me,hash:ke,query:o===Tu?E8(R.query):R.query||{}},ne,{redirectedFrom:void 0,href:v})}function C(R){return typeof R=="string"?Vr(n,R,c.value.path):Oe({},R)}function b(R,Q){if(u!==R)return Ws(8,{from:Q,to:R})}function B(R){return q(R)}function $(R){return B(Oe(C(R),{replace:!0}))}function O(R){const Q=R.matched[R.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let ne=typeof ee=="function"?ee(R):ee;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=C(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw Ee(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${R.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:R.query,hash:R.hash,params:"path"in ne?{}:R.params},ne)}}function q(R,Q){const ee=u=x(R),ne=c.value,ke=R.state,Me=R.force,v=R.replace===!0,w=O(ee);if(w)return q(Oe(C(w),{state:typeof w=="object"?Oe({},ke,w.state):ke,force:Me,replace:v}),Q||ee);const T=ee;T.redirectedFrom=Q;let H;return!Me&&wu(o,ne,ee)&&(H=Ws(16,{to:T,from:ne}),Ot(ne,ne,!0,!1)),(H?Promise.resolve(H):se(T,ne)).catch(N=>hn(N)?hn(N,2)?N:je(N):ce(N,T,ne)).then(N=>{if(N){if(hn(N,2))return wu(o,x(N.to),T)&&Q&&(Q._count=Q._count?Q._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${T.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):q(Oe({replace:v},C(N.to),{state:typeof N.to=="object"?Oe({},ke,N.to.state):ke,force:Me}),Q||T)}else N=Z(T,ne,!0,v,ke);return de(T,ne,N),N})}function L(R,Q){const ee=b(R,Q);return ee?Promise.reject(ee):Promise.resolve()}function U(R){const Q=Jt.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(R):R()}function se(R,Q){let ee;const[ne,ke,Me]=X8(R,Q);ee=zr(ne.reverse(),"beforeRouteLeave",R,Q);for(const w of ne)w.leaveGuards.forEach(T=>{ee.push(In(T,R,Q))});const v=L.bind(null,R,Q);return ee.push(v),jt(ee).then(()=>{ee=[];for(const w of r.list())ee.push(In(w,R,Q));return ee.push(v),jt(ee)}).then(()=>{ee=zr(ke,"beforeRouteUpdate",R,Q);for(const w of ke)w.updateGuards.forEach(T=>{ee.push(In(T,R,Q))});return ee.push(v),jt(ee)}).then(()=>{ee=[];for(const w of Me)if(w.beforeEnter)if(Pt(w.beforeEnter))for(const T of w.beforeEnter)ee.push(In(T,R,Q));else ee.push(In(w.beforeEnter,R,Q));return ee.push(v),jt(ee)}).then(()=>(R.matched.forEach(w=>w.enterCallbacks={}),ee=zr(Me,"beforeRouteEnter",R,Q),ee.push(v),jt(ee))).then(()=>{ee=[];for(const w of a.list())ee.push(In(w,R,Q));return ee.push(v),jt(ee)}).catch(w=>hn(w,8)?w:Promise.reject(w))}function de(R,Q,ee){i.list().forEach(ne=>U(()=>ne(R,Q,ee)))}function Z(R,Q,ee,ne,ke){const Me=b(R,Q);if(Me)return Me;const v=Q===En,w=bn?history.state:{};ee&&(ne||v?l.replace(R.fullPath,Oe({scroll:v&&w&&w.scroll},ke)):l.push(R.fullPath,ke)),c.value=R,Ot(R,Q,ee,v),je()}let ge;function we(){ge||(ge=l.listen((R,Q,ee)=>{if(!Zn.listening)return;const ne=x(R),ke=O(ne);if(ke){q(Oe(ke,{replace:!0}),ne).catch(xo);return}u=ne;const Me=c.value;bn&&V1(xu(Me.fullPath,ee.delta),xr()),se(ne,Me).catch(v=>hn(v,12)?v:hn(v,2)?(q(v.to,ne).then(w=>{hn(w,20)&&!ee.delta&&ee.type===Fo.pop&&l.go(-1,!1)}).catch(xo),Promise.reject()):(ee.delta&&l.go(-ee.delta,!1),ce(v,ne,Me))).then(v=>{v=v||Z(ne,Me,!1),v&&(ee.delta&&!hn(v,8)?l.go(-ee.delta,!1):ee.type===Fo.pop&&hn(v,20)&&l.go(-1,!1)),de(ne,Me,v)}).catch(xo)}))}let xe=lo(),Re=lo(),te;function ce(R,Q,ee){je(R);const ne=Re.list();return ne.length?ne.forEach(ke=>ke(R,Q,ee)):(Ee("uncaught error during route navigation:"),console.error(R)),Promise.reject(R)}function Ae(){return te&&c.value!==En?Promise.resolve():new Promise((R,Q)=>{xe.add([R,Q])})}function je(R){return te||(te=!R,we(),xe.list().forEach(([Q,ee])=>R?ee(R):Q()),xe.reset()),R}function Ot(R,Q,ee,ne){const{scrollBehavior:ke}=e;if(!bn||!ke)return Promise.resolve();const Me=!ee&&z1(xu(R.fullPath,0))||(ne||!ee)&&history.state&&history.state.scroll||null;return it().then(()=>ke(R,Q,Me)).then(v=>v&&q1(v)).catch(v=>ce(v,R,Q))}const rt=R=>l.go(R);let wt;const Jt=new Set,Zn={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:D,getRoutes:_,resolve:x,options:e,push:B,replace:$,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Re.add,isReady:Ae,install(R){const Q=this;R.component("RouterLink",O8),R.component("RouterView",R8),R.config.globalProperties.$router=Q,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>S(c)}),bn&&!wt&&c.value===En&&(wt=!0,B(l.location).catch(ke=>{Ee("Unexpected error when starting the router:",ke)}));const ee={};for(const ke in En)Object.defineProperty(ee,ke,{get:()=>c.value[ke],enumerable:!0});R.provide(Mi,Q),R.provide(Ff,cp(ee)),R.provide(Ma,c);const ne=R.unmount;Jt.add(R),R.unmount=function(){Jt.delete(R),Jt.size<1&&(u=En,ge&&ge(),ge=null,c.value=En,wt=!1,te=!1),ne()},bn&&H8(R,Q,t)}};function jt(R){return R.reduce((Q,ee)=>Q.then(()=>U(ee)),Promise.resolve())}return Zn}function X8(e,t){const n=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(e.matched.find(u=>Gn(u,i))?o.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(u=>Gn(u,c))||l.push(c))}return[n,o,l]}const Wr=F(!1),ko=F(!1),Rs=F(!1),Z8=F(!0),Ra=H_({xs:460,...N_}),Ds=x1(),Gf=m1(),J8=M(()=>Ds.height.value-Ds.width.value/Fn>180),Kf=f1(Xt?document.body:null),qn=L_(),Q8=M(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=qn.value)==null?void 0:e.tagName)||"")||((t=qn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),e2=M(()=>{var e;return["BUTTON","A"].includes(((e=qn.value)==null?void 0:e.tagName)||"")});Zt("slidev-camera","default");Zt("slidev-mic","default");const Bl=Zt("slidev-scale",0),vt=Zt("slidev-show-overview",!1),Ur=Zt("slidev-presenter-cursor",!0),Lu=Zt("slidev-show-editor",!1);Zt("slidev-editor-width",Xt?window.innerWidth*.4:100);const Yf=Cf(vt);var t2=Object.defineProperty,Ru=Object.getOwnPropertySymbols,n2=Object.prototype.hasOwnProperty,s2=Object.prototype.propertyIsEnumerable,Fu=(e,t,n)=>t in e?t2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fa=(e,t)=>{for(var n in t||(t={}))n2.call(t,n)&&Fu(e,n,t[n]);if(Ru)for(var n of Ru(t))s2.call(t,n)&&Fu(e,n,t[n]);return e},o2=()=>({emit(e,...t){let n=this.events[e]||[];for(let o=0,l=n.length;o<l;o++)n[o](...t)},events:{},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function Nu(e,t,n,o=l=>l){return e*o(.5-t*(.5-n))}function l2(e){return[-e[0],-e[1]]}function Ut(e,t){return[e[0]+t[0],e[1]+t[1]]}function Rt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Wt(e,t){return[e[0]*t,e[1]*t]}function r2(e,t){return[e[0]/t,e[1]/t]}function ao(e){return[e[1],-e[0]]}function Hu(e,t){return e[0]*t[0]+e[1]*t[1]}function a2(e,t){return e[0]===t[0]&&e[1]===t[1]}function i2(e){return Math.hypot(e[0],e[1])}function c2(e){return e[0]*e[0]+e[1]*e[1]}function qu(e,t){return c2(Rt(e,t))}function Xf(e){return r2(e,i2(e))}function u2(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function io(e,t,n){let o=Math.sin(n),l=Math.cos(n),r=e[0]-t[0],a=e[1]-t[1],i=r*l-a*o,c=r*o+a*l;return[i+t[0],c+t[1]]}function Na(e,t,n){return Ut(e,Wt(Rt(t,e),n))}function Vu(e,t,n){return Ut(e,Wt(t,n))}var{min:js,PI:d2}=Math,zu=.275,co=d2+1e-4;function p2(e,t={}){let{size:n=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=te=>te,start:i={},end:c={},last:u=!1}=t,{cap:d=!0,easing:p=te=>te*(2-te)}=i,{cap:h=!0,easing:f=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(n,m):i.taper,D=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,x=Math.pow(n*o,2),C=[],b=[],B=e.slice(0,10).reduce((te,ce)=>{let Ae=ce.pressure;if(r){let je=js(1,ce.distance/n),Ot=js(1,1-je);Ae=js(1,te+(Ot-te)*(je*zu))}return(te+Ae)/2},e[0].pressure),$=Nu(n,l,e[e.length-1].pressure,a),O,q=e[0].vector,L=e[0].point,U=L,se=L,de=U,Z=!1;for(let te=0;te<e.length;te++){let{pressure:ce}=e[te],{point:Ae,vector:je,distance:Ot,runningLength:rt}=e[te];if(te<e.length-1&&m-rt<3)continue;if(l){if(r){let ne=js(1,Ot/n),ke=js(1,1-ne);ce=js(1,B+(ke-B)*(ne*zu))}$=Nu(n,l,ce,a)}else $=n/2;O===void 0&&(O=$);let wt=rt<_?p(rt/_):1,Jt=m-rt<D?f((m-rt)/D):1;$=Math.max(.01,$*Math.min(wt,Jt));let Zn=(te<e.length-1?e[te+1]:e[te]).vector,jt=te<e.length-1?Hu(je,Zn):1,R=Hu(je,q)<0&&!Z,Q=jt!==null&&jt<0;if(R||Q){let ne=Wt(ao(q),$);for(let ke=1/13,Me=0;Me<=1;Me+=ke)se=io(Rt(Ae,ne),Ae,co*Me),C.push(se),de=io(Ut(Ae,ne),Ae,co*-Me),b.push(de);L=se,U=de,Q&&(Z=!0);continue}if(Z=!1,te===e.length-1){let ne=Wt(ao(je),$);C.push(Rt(Ae,ne)),b.push(Ut(Ae,ne));continue}let ee=Wt(ao(Na(Zn,je,jt)),$);se=Rt(Ae,ee),(te<=1||qu(L,se)>x)&&(C.push(se),L=se),de=Ut(Ae,ee),(te<=1||qu(U,de)>x)&&(b.push(de),U=de),B=ce,q=je}let ge=e[0].point.slice(0,2),we=e.length>1?e[e.length-1].point.slice(0,2):Ut(e[0].point,[1,1]),xe=[],Re=[];if(e.length===1){if(!(_||D)||u){let te=Vu(ge,Xf(ao(Rt(ge,we))),-(O||$)),ce=[];for(let Ae=1/13,je=Ae;je<=1;je+=Ae)ce.push(io(te,ge,co*2*je));return ce}}else{if(!(_||D&&e.length===1))if(d)for(let ce=1/13,Ae=ce;Ae<=1;Ae+=ce){let je=io(b[0],ge,co*Ae);xe.push(je)}else{let ce=Rt(C[0],b[0]),Ae=Wt(ce,.5),je=Wt(ce,.51);xe.push(Rt(ge,Ae),Rt(ge,je),Ut(ge,je),Ut(ge,Ae))}let te=ao(l2(e[e.length-1].vector));if(D||_&&e.length===1)Re.push(we);else if(h){let ce=Vu(we,te,$);for(let Ae=1/29,je=Ae;je<1;je+=Ae)Re.push(io(ce,we,co*3*je))}else Re.push(Ut(we,Wt(te,$)),Ut(we,Wt(te,$*.99)),Rt(we,Wt(te,$*.99)),Rt(we,Wt(te,$)))}return C.concat(Re,b.reverse(),xe)}function f2(e,t={}){var n;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:f,y:m,pressure:_=.5})=>[f,m,_]);if(i.length===2){let f=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Na(i[0],f,m/4))}i.length===1&&(i=[...i,[...Ut(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=c[0],h=i.length-1;for(let f=1;f<i.length;f++){let m=r&&f===h?i[f].slice(0,2):Na(p.point,i[f],a);if(a2(p.point,m))continue;let _=u2(m,p.point);if(d+=_,f<h&&!u){if(d<l)continue;u=!0}p={point:m,pressure:i[f][2]>=0?i[f][2]:.5,vector:Xf(Rt(p.point,m)),distance:_,runningLength:d},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function h2(e,t={}){return p2(f2(e,t),t)}function er(e,t){return e-t}function m2(e){return e<0?-1:1}function tr(e){return[Math.abs(e),m2(e)]}function Zf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var v2=2,wn=v2,Ks=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const o=this.drauu.el,l=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*l,y:(e.pageY-r.top)*l,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const a=r.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*l,y:a.y*l,pressure:e.pressure}}}createElement(e,t){var n;const o=document.createElementNS("http://www.w3.org/2000/svg",e),l=t?Fa(Fa({},this.brush),t):this.brush;return o.setAttribute("fill",(n=l.fill)!=null?n:"transparent"),o.setAttribute("stroke",l.color),o.setAttribute("stroke-width",l.size.toString()),o.setAttribute("stroke-linecap","round"),l.dasharray&&o.setAttribute("stroke-dasharray",l.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(wn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},g2=class extends Ks{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=h2(e,Fa({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},y2=class extends Ks{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=tr(e.x-this.start.x),[o,l]=tr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(er),[i,c]=[this.start.y,this.start.y+o*l].sort(er);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Jf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),n.appendChild(o),n}var _2=class extends Ks{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Zf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Jf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,n=this.start.y+l):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},b2=class extends Ks{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=tr(e.x-this.start.x),[o,l]=tr(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(er),[i,c]=[this.start.y,this.start.y+o*l].sort(er);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function w2(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function D2(e,t,n){let o=t.x,l=t.y,r=n.x-o,a=n.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=n.x,l=n.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function x2(e,t){let n=e[0];const o=[n];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],w2(l,n)>t&&(o.push(l),n=l);return n!==l&&l&&o.push(l),o}function Ha(e,t,n,o,l){let r=o,a=0;for(let i=t+1;i<n;i++){const c=D2(e[i],e[t],e[n]);c>r&&(a=i,r=c)}r>o&&(a-t>1&&Ha(e,t,a,o,l),l.push(e[a]),n-a>1&&Ha(e,a,n,o,l))}function C2(e,t){const n=e.length-1,o=[e[0]];return Ha(e,0,n,t,o),o.push(e[n]),o}function Wu(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:x2(e,o),e=C2(e,o),e}var k2=class extends Ks{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Zf();const t=Jf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Wu(this.points,1,!0),this.count=0),this.attr("d",Gu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Gu(Wu(this.points,1,!0))),!e.getTotalLength()))}};function A2(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function Uu(e,t,n,o){const l=t||e,r=n||e,a=.2,i=A2(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:d,y:p}}function S2(e,t,n){const o=Uu(n[t-1],n[t-2],e),l=Uu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(wn)},${o.y.toFixed(wn)} ${l.x.toFixed(wn)},${l.y.toFixed(wn)} ${e.x.toFixed(wn)},${e.y.toFixed(wn)}`}function Gu(e){return e.reduce((t,n,o,l)=>o===0?`M ${n.x.toFixed(wn)},${n.y.toFixed(wn)}`:`${t} ${S2(n,o,l)}`,"")}var B2=class extends Ks{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const r=n[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,l=t.x1,r=t.x2,a=e.y1,i=e.y2,c=t.y1,u=t.y2,d=(n-o)*(c-u)-(a-i)*(l-r),p=(n*i-a*o)*(l-r)-(n-o)*(l*u-c*r),h=(n*i-a*o)*(c-u)-(a-i)*(l*u-c*r),f=(m,_,D)=>m>=_&&m<=D?!0:m>=D&&m<=_;if(d===0)return!1;{const m={x:p/d,y:h/d};return f(m.x,n,o)&&f(m.y,a,i)&&f(m.x,l,r)&&f(m.y,c,u)}}};function E2(e){return{draw:new k2(e),stylus:new g2(e),line:new _2(e),rectangle:new b2(e),ellipse:new y2(e),eraseLine:new B2(e)}}var $2=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=o2(),this._models=E2(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function T2(e){return new $2(e)}const qa=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],on=Zt("slidev-drawing-enabled",!1),EO=Zt("slidev-drawing-pinned",!1),P2=F(!1),I2=F(!1),O2=F(!1),Ho=F(!1),fs=n_(Zt("slidev-drawing-brush",{color:qa[0],size:4,mode:"stylus"})),Ku=F("stylus"),Qf=M(()=>Te.drawings.syncAll||xt.value);let qo=!1;const uo=M({get(){return Ku.value},set(e){Ku.value=e,e==="arrow"?(fs.mode="line",fs.arrowEnd=!0):(fs.mode=e,fs.arrowEnd=!1)}}),j2=Ue({brush:fs,acceptsInputTypes:M(()=>on.value&&(!Te.drawings.presenterOnly||xt.value)?void 0:["pen"]),coordinateTransform:!1}),_t=pr(T2(j2));function M2(){_t.clear(),Qf.value&&bf(Ke.value,"")}function Li(){var e;I2.value=_t.canRedo(),P2.value=_t.canUndo(),O2.value=!!((e=_t.el)!=null&&e.children.length)}function L2(e){qo=!0;const t=Jl[e||Ke.value];t!=null?_t.load(t):_t.clear(),Li(),qo=!1}_t.on("changed",()=>{if(Li(),!qo){const e=_t.dump(),t=Ke.value;(Jl[t]||"")!==e&&Qf.value&&bf(t,_t.dump())}});J0(e=>{qo=!0,e[Ke.value]!=null&&_t.load(e[Ke.value]||""),qo=!1,Li()});it(()=>{_e(Ke,()=>{_t.mounted&&L2()},{immediate:!0})});_t.on("start",()=>Ho.value=!0);_t.on("end",()=>Ho.value=!1);window.addEventListener("keydown",e=>{if(!on.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?_t.redo():_t.undo():e.code==="Escape"?on.value=!1:e.code==="KeyL"&&t?uo.value="line":e.code==="KeyA"&&t?uo.value="arrow":e.code==="KeyS"&&t?uo.value="stylus":e.code==="KeyR"&&t?uo.value="rectangle":e.code==="KeyE"&&t?uo.value="ellipse":e.code==="KeyC"&&t?M2():e.code.startsWith("Digit")&&t&&+e.code[5]<=qa.length?fs.color=qa[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Qe(...e){return M(()=>e.every(t=>Ze(t)))}function St(e){return M(()=>!Ze(e))}const Yu=Q_(),Gr=Zt("slidev-color-schema","auto"),Va=M(()=>Te.colorSchema!=="auto"),Ri=M({get(){return Va.value?Te.colorSchema==="dark":Gr.value==="auto"?Yu.value:Gr.value==="dark"},set(e){Va.value||(Gr.value=e===Yu.value?"auto":e?"dark":"light")}}),eh=Cf(Ri);Xt&&_e(Ri,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const El=F(1),$l=M(()=>Je.length),Tt=F(0),Fi=F(0);function R2(){Tt.value>El.value&&(Tt.value-=1)}function F2(){Tt.value<$l.value&&(Tt.value+=1)}function N2(){if(Tt.value>El.value){let e=Tt.value-Fi.value;e<El.value&&(e=El.value),Tt.value=e}}function H2(){if(Tt.value<$l.value){let e=Tt.value+Fi.value;e>$l.value&&(e=$l.value),Tt.value=e}}function q2(){const{escape:e,space:t,shift:n,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:d}=Gf;let p=[{name:"next_space",key:Qe(t,St(n)),fn:Vn,autoRepeat:!0},{name:"prev_space",key:Qe(t,n),fn:zn,autoRepeat:!0},{name:"next_right",key:Qe(l,St(n),St(vt)),fn:Vn,autoRepeat:!0},{name:"prev_left",key:Qe(o,St(n),St(vt)),fn:zn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Vn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:zn,autoRepeat:!0},{name:"next_down",key:Qe(a,St(vt)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Qe(r,St(vt)),fn:()=>Wo(!1),autoRepeat:!0},{name:"next_shift",key:Qe(l,n),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Qe(o,n),fn:()=>Wo(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(c,St(on)),fn:eh},{name:"toggle_overview",key:Qe(d,St(on)),fn:Yf},{name:"hide_overview",key:Qe(e,St(on)),fn:()=>vt.value=!1},{name:"goto",key:Qe(u,St(on)),fn:()=>Rs.value=!Rs.value},{name:"next_overview",key:Qe(l,vt),fn:F2},{name:"prev_overview",key:Qe(o,vt),fn:R2},{name:"up_overview",key:Qe(r,vt),fn:N2},{name:"down_overview",key:Qe(a,vt),fn:H2},{name:"goto_from_overview",key:Qe(i,vt),fn:()=>{Us(Tt.value),vt.value=!1}}];const h=new Set(p.map(m=>m.name));if(p.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return p}const th=Qe(St(Q8),St(e2),Z8);function V2(e,t,n=!1){typeof e=="string"&&(e=Gf[e]);const o=Qe(e,th);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}n&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return _e(o,a,{flush:"sync"})}function z2(e,t){return M_(e,n=>{th.value&&(n.repeat||t())})}function W2(){const e=q2();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&V2(n.key,n.fn,n.autoRepeat)}),z2("f",()=>Kf.toggle())}const U2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G2=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),K2=[G2];function Y2(e,t){return g(),A("svg",U2,K2)}const X2={name:"carbon-close",render:Y2};function Ni(e,t=""){var l,r;const n=["slidev-page",t],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const Z2=X({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;E(P);const n=F(),o=d1(n),l=M(()=>t.width?t.width:o.width.value),r=M(()=>t.width?t.width/Fn:o.height.value);t.width&&Bs(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${r.value}px`)});const a=M(()=>l.value/r.value),i=M(()=>t.scale&&!xn.value?t.scale:a.value<Fn?l.value/Nn:r.value*Fn/Nn),c=M(()=>({height:`${Ii}px`,width:`${Nn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=M(()=>({"select-none":!Te.selectable}));return Et(vf,i),(d,p)=>(g(),A("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(u.value)},[s("div",{id:"slide-content",style:Ge(c.value)},[bt(d.$slots,"default")],4),bt(d.$slots,"controls")],2))}});const I=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n},nh=I(Z2,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Hi=X({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=sn(e,"clicks",t),o=sn(e,"clicksElements",t),l=sn(e,"clicksDisabled",t),r=sn(e,"clicksOrderMap",t);o.value.length=0,Et(L0,e.route),Et(R0,e.context),Et(wo,n),Et(Do,l),Et(is,o),Et(Ba,r)},render(){var e,t;return this.$props.is?nt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),J2=["innerHTML"],Q2=X({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return E(P),(t,n)=>S(Jl)[t.page]?(g(),A("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:S(Jl)[t.page]},null,8,J2)):ye("v-if",!0)}}),sh=I(Q2,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),e5=Object.freeze(Object.defineProperty({__proto__:null,default:sh},Symbol.toStringTag,{value:"Module"})),t5={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},n5=["onClick"],Kr=4*16*2,Xu=2*16,s5=X({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;E(P);const o=sn(n,"modelValue",t);function l(){o.value=!1}function r(p){Us(p),l()}function a(p){return p===Tt.value}const i=Ra.smaller("xs"),c=Ra.smaller("sm"),u=M(()=>i.value?Ds.width.value-Kr:c.value?(Ds.width.value-Kr-Xu)/2:300),d=M(()=>Math.floor((Ds.width.value-Kr)/(u.value+Xu)));return Bs(()=>{Tt.value=Ke.value,Fi.value=d.value}),(p,h)=>{const f=X2;return g(),A($e,null,[Zo(s("div",t5,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ge(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(g(!0),A($e,null,Yn(S(Je),(m,_)=>(g(),A("div",{key:m.path,class:"relative"},[s("div",{class:Le(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1),"border-gray-400":!a(_+1)}]),style:Ge(S(Oi)),onClick:D=>r(+m.path)},[(g(),V(nh,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:j(()=>[m!=null&&m.component?(g(),V(S(Hi),{key:0,is:m.component,"clicks-disabled":!0,class:Le(S(Ni)(m)),route:m,context:"overview"},null,8,["is","class","route"])):ye("v-if",!0),k(sh,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,n5),s("div",{class:"absolute top-0 opacity-50",style:Ge(`left: ${u.value+5}px`)},Ht(_+1),5)]))),128))],4)],512),[[of,S(o)]]),S(o)?(g(),A("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[k(f)])):ye("v-if",!0)],64)}}});const o5=I(s5,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),l5="/my-slidevs/slidevs/learn-canvas/assets/logo-b72bde5d.png",r5={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},a5=X({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;E(P);const o=sn(n,"modelValue",t);function l(){o.value=!1}return(r,a)=>(g(),V(Ep,null,[S(o)?(g(),A("div",r5,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),s("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[bt(r.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),i5=I(a5,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Modal.vue"]]),c5={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},u5=["innerHTML"],d5=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:l5,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),y("dev ")])])],-1),p5=X({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;E(P);const o=sn(n,"modelValue",t),l=M(()=>typeof Te.info=="string");return(r,a)=>(g(),V(i5,{modelValue:S(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Pe(o)?o.value=i:null),class:"px-6 py-4"},{default:j(()=>[s("div",c5,[l.value?(g(),A("div",{key:0,class:"mb-4",innerHTML:S(Te).info},null,8,u5)):ye("v-if",!0),d5])]),_:1},8,["modelValue"]))}});const f5=I(p5,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function kn(e){return Array.isArray?Array.isArray(e):rh(e)==="[object Array]"}const h5=1/0;function m5(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-h5?"-0":t}function v5(e){return e==null?"":m5(e)}function ln(e){return typeof e=="string"}function oh(e){return typeof e=="number"}function g5(e){return e===!0||e===!1||y5(e)&&rh(e)=="[object Boolean]"}function lh(e){return typeof e=="object"}function y5(e){return lh(e)&&e!==null}function $t(e){return e!=null}function Yr(e){return!e.trim().length}function rh(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const _5="Incorrect 'index' type",b5=e=>`Invalid value for key ${e}`,w5=e=>`Pattern length exceeds max of ${e}.`,D5=e=>`Missing ${e} property in key`,x5=e=>`Property 'weight' in key '${e}' must be a positive integer`,Zu=Object.prototype.hasOwnProperty;class C5{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let l=ah(o);n+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,n+=l.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ah(e){let t=null,n=null,o=null,l=1,r=null;if(ln(e)||kn(e))o=e,t=Ju(e),n=za(e);else{if(!Zu.call(e,"name"))throw new Error(D5("name"));const a=e.name;if(o=a,Zu.call(e,"weight")&&(l=e.weight,l<=0))throw new Error(x5(a));t=Ju(a),n=za(a),r=e.getFn}return{path:t,id:n,weight:l,src:o,getFn:r}}function Ju(e){return kn(e)?e:e.split(".")}function za(e){return kn(e)?e.join("."):e}function k5(e,t){let n=[],o=!1;const l=(r,a,i)=>{if($t(r))if(!a[i])n.push(r);else{let c=a[i];const u=r[c];if(!$t(u))return;if(i===a.length-1&&(ln(u)||oh(u)||g5(u)))n.push(v5(u));else if(kn(u)){o=!0;for(let d=0,p=u.length;d<p;d+=1)l(u[d],a,i+1)}else a.length&&l(u,a,i+1)}};return l(e,ln(t)?t.split("."):t,0),o?n:n[0]}const A5={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},S5={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},B5={location:0,threshold:.6,distance:100},E5={useExtendedSearch:!1,getFn:k5,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...S5,...A5,...B5,...E5};const $5=/[^ ]+/g;function T5(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(l){const r=l.match($5).length;if(n.has(r))return n.get(r);const a=1/Math.pow(r,.5*e),i=parseFloat(Math.round(a*o)/o);return n.set(r,i),i},clear(){n.clear()}}}class qi{constructor({getFn:t=he.getFn,fieldNormWeight:n=he.fieldNormWeight}={}){this.norm=T5(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ln(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();ln(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!$t(t)||Yr(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(t):this.getFn(t,l.path);if($t(a)){if(kn(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if($t(d))if(ln(d)&&!Yr(d)){let p={v:d,i:u,n:this.norm.get(d)};i.push(p)}else kn(d)&&d.forEach((p,h)=>{c.push({nestedArrIndex:h,value:p})})}o.$[r]=i}else if(ln(a)&&!Yr(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function ih(e,t,{getFn:n=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const l=new qi({getFn:n,fieldNormWeight:o});return l.setKeys(e.map(ah)),l.setSources(t),l.create(),l}function P5(e,{getFn:t=he.getFn,fieldNormWeight:n=he.fieldNormWeight}={}){const{keys:o,records:l}=e,r=new qi({getFn:t,fieldNormWeight:n});return r.setKeys(o),r.setIndexRecords(l),r}function yl(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:l=he.distance,ignoreLocation:r=he.ignoreLocation}={}){const a=t/e.length;if(r)return a;const i=Math.abs(o-n);return l?a+i/l:i?1:a}function I5(e=[],t=he.minMatchCharLength){let n=[],o=-1,l=-1,r=0;for(let a=e.length;r<a;r+=1){let i=e[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=t&&n.push([o,l]),o=-1)}return e[r-1]&&r-o>=t&&n.push([o,r-1]),n}const us=32;function O5(e,t,n,{location:o=he.location,distance:l=he.distance,threshold:r=he.threshold,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,includeMatches:c=he.includeMatches,ignoreLocation:u=he.ignoreLocation}={}){if(t.length>us)throw new Error(w5(us));const d=t.length,p=e.length,h=Math.max(0,Math.min(o,p));let f=r,m=h;const _=i>1||c,D=_?Array(p):[];let x;for(;(x=e.indexOf(t,m))>-1;){let q=yl(t,{currentLocation:x,expectedLocation:h,distance:l,ignoreLocation:u});if(f=Math.min(q,f),m=x+d,_){let L=0;for(;L<d;)D[x+L]=1,L+=1}}m=-1;let C=[],b=1,B=d+p;const $=1<<d-1;for(let q=0;q<d;q+=1){let L=0,U=B;for(;L<U;)yl(t,{errors:q,currentLocation:h+U,expectedLocation:h,distance:l,ignoreLocation:u})<=f?L=U:B=U,U=Math.floor((B-L)/2+L);B=U;let se=Math.max(1,h-U+1),de=a?p:Math.min(h+U,p)+d,Z=Array(de+2);Z[de+1]=(1<<q)-1;for(let we=de;we>=se;we-=1){let xe=we-1,Re=n[e.charAt(xe)];if(_&&(D[xe]=+!!Re),Z[we]=(Z[we+1]<<1|1)&Re,q&&(Z[we]|=(C[we+1]|C[we])<<1|1|C[we+1]),Z[we]&$&&(b=yl(t,{errors:q,currentLocation:xe,expectedLocation:h,distance:l,ignoreLocation:u}),b<=f)){if(f=b,m=xe,m<=h)break;se=Math.max(1,2*h-m)}}if(yl(t,{errors:q+1,currentLocation:h,expectedLocation:h,distance:l,ignoreLocation:u})>f)break;C=Z}const O={isMatch:m>=0,score:Math.max(.001,b)};if(_){const q=I5(D,i);q.length?c&&(O.indices=q):O.isMatch=!1}return O}function j5(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const l=e.charAt(n);t[l]=(t[l]||0)|1<<o-n-1}return t}class ch{constructor(t,{location:n=he.location,threshold:o=he.threshold,distance:l=he.distance,includeMatches:r=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,isCaseSensitive:c=he.isCaseSensitive,ignoreLocation:u=he.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(h,f)=>{this.chunks.push({pattern:h,alphabet:j5(h),startIndex:f})},p=this.pattern.length;if(p>us){let h=0;const f=p%us,m=p-f;for(;h<m;)d(this.pattern.substr(h,us),h),h+=us;if(f){const _=p-us;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,t.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],p=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:D})=>{const{isMatch:x,score:C,indices:b}=O5(t,m,_,{location:l+D,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});x&&(h=!0),p+=C,x&&b&&(d=[...d,...b])});let f={isMatch:h,score:h?p/this.chunks.length:1};return h&&o&&(f.indices=d),f}}class Xn{constructor(t){this.pattern=t}static isMultiMatch(t){return Qu(t,this.multiRegex)}static isSingleMatch(t){return Qu(t,this.singleRegex)}search(){}}function Qu(e,t){const n=e.match(t);return n?n[1]:null}class M5 extends Xn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class L5 extends Xn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class R5 extends Xn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class F5 extends Xn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class N5 extends Xn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class H5 extends Xn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class uh extends Xn{constructor(t,{location:n=he.location,threshold:o=he.threshold,distance:l=he.distance,includeMatches:r=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,isCaseSensitive:c=he.isCaseSensitive,ignoreLocation:u=he.ignoreLocation}={}){super(t),this._bitapSearch=new ch(t,{location:n,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class dh extends Xn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const l=[],r=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+r,l.push([o,n-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Wa=[M5,dh,R5,F5,H5,N5,L5,uh],ed=Wa.length,q5=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,V5="|";function z5(e,t={}){return e.split(V5).map(n=>{let o=n.trim().split(q5).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,u=-1;for(;!c&&++u<ed;){const d=Wa[u];let p=d.isMultiMatch(i);p&&(l.push(new d(p,t)),c=!0)}if(!c)for(u=-1;++u<ed;){const d=Wa[u];let p=d.isSingleMatch(i);if(p){l.push(new d(p,t));break}}}return l})}const W5=new Set([uh.type,dh.type]);class U5{constructor(t,{isCaseSensitive:n=he.isCaseSensitive,includeMatches:o=he.includeMatches,minMatchCharLength:l=he.minMatchCharLength,ignoreLocation:r=he.ignoreLocation,findAllMatches:a=he.findAllMatches,location:i=he.location,threshold:c=he.threshold,distance:u=he.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=z5(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;t=l?t:t.toLowerCase();let r=0,a=[],i=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,r=0;for(let p=0,h=d.length;p<h;p+=1){const f=d[p],{isMatch:m,indices:_,score:D}=f.search(t);if(m){if(r+=1,i+=D,o){const x=f.constructor.type;W5.has(x)?a=[...a,..._]:a.push(_)}}else{i=0,r=0,a.length=0;break}}if(r){let p={isMatch:!0,score:i/r};return o&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const Ua=[];function G5(...e){Ua.push(...e)}function Ga(e,t){for(let n=0,o=Ua.length;n<o;n+=1){let l=Ua[n];if(l.condition(e,t))return new l(e,t)}return new ch(e,t)}const nr={AND:"$and",OR:"$or"},Ka={PATH:"$path",PATTERN:"$val"},Ya=e=>!!(e[nr.AND]||e[nr.OR]),K5=e=>!!e[Ka.PATH],Y5=e=>!kn(e)&&lh(e)&&!Ya(e),td=e=>({[nr.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ph(e,t,{auto:n=!0}={}){const o=l=>{let r=Object.keys(l);const a=K5(l);if(!a&&r.length>1&&!Ya(l))return o(td(l));if(Y5(l)){const c=a?l[Ka.PATH]:r[0],u=a?l[Ka.PATTERN]:l[c];if(!ln(u))throw new Error(b5(c));const d={keyId:za(c),pattern:u};return n&&(d.searcher=Ga(u,t)),d}let i={children:[],operator:r[0]};return r.forEach(c=>{const u=l[c];kn(u)&&u.forEach(d=>{i.children.push(o(d))})}),i};return Ya(e)||(e=td(e)),o(e)}function X5(e,{ignoreFieldNorm:t=he.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(t?1:r))}),n.score=o})}function Z5(e,t){const n=e.matches;t.matches=[],$t(n)&&n.forEach(o=>{if(!$t(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function J5(e,t){t.score=e.score}function Q5(e,t,{includeMatches:n=he.includeMatches,includeScore:o=he.includeScore}={}){const l=[];return n&&l.push(Z5),o&&l.push(J5),e.map(r=>{const{idx:a}=r,i={item:t[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Ys{constructor(t,n={},o){this.options={...he,...n},this.options.useExtendedSearch,this._keyStore=new C5(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof qi))throw new Error(_5);this._myIndex=n||ih(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){$t(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];t(r,o)&&(this.removeAt(o),o-=1,l-=1,n.push(r))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=ln(t)?ln(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return X5(c,{ignoreFieldNorm:i}),r&&c.sort(a),oh(n)&&n>-1&&(c=c.slice(0,n)),Q5(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(t){const n=Ga(t,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!$t(r))return;const{isMatch:c,score:u,indices:d}=n.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:i,indices:d}]})}),l}_searchLogical(t){const n=ph(t,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:p,searcher:h}=i,f=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(c,p),searcher:h});return f&&f.length?[{idx:u,item:c,matches:f}]:[]}const d=[];for(let p=0,h=i.children.length;p<h;p+=1){const f=i.children[p],m=o(f,c,u);if(m.length)d.push(...m);else if(i.operator===nr.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if($t(i)){let u=o(n,i,c);u.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),u.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(t){const n=Ga(t,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!$t(a))return;let c=[];o.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:t,value:n,searcher:o}){if(!$t(n))return[];let l=[];if(kn(n))n.forEach(({v:r,i:a,n:i})=>{if(!$t(r))return;const{isMatch:c,score:u,indices:d}=o.searchIn(r);c&&l.push({score:u,key:t,value:r,idx:a,norm:i,indices:d})});else{const{v:r,n:a}=n,{isMatch:i,score:c,indices:u}=o.searchIn(r);i&&l.push({score:c,key:t,value:r,norm:a,indices:u})}return l}}Ys.version="6.6.2";Ys.createIndex=ih;Ys.parseIndex=P5;Ys.config=he;Ys.parseQuery=ph;G5(U5);const eb={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},tb=["value","disabled","onKeydown"],nb=["border","onClick"],sb={"w-4":"","text-right":"",op50:"","text-sm":""},ob=X({__name:"Goto",setup(e){E(P);const t=F(),n=F(),o=F(),l=F(),r=F(""),a=F(0);function i(b){return b!=null}const c=M(()=>new Ys(Je.map(b=>{var B;return(B=b.meta)==null?void 0:B.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=M(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=M(()=>c.value.search(u.value).map(b=>b.item)),p=M(()=>!!d.value.length);function h(){if(p.value){const b=d.value.at(a.value||0);b&&Us(b.no)}f()}function f(){r.value="",Rs.value=!1}function m(b){b.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),D()}function _(b){b.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),D()}function D(){var B;const b=(B=l.value)==null?void 0:B[a.value];b&&o.value&&(b.offsetTop+b.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-o.value.offsetHeight+1}):b.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){a.value=0,r.value=b.target.value}function C(b){Us(b),f()}return _e(Rs,async b=>{var B;b?(r.value="",a.value=0,setTimeout(()=>{var $;return($=n.value)==null?void 0:$.focus()},0)):(B=n.value)==null||B.blur()}),_e(qn,()=>{var b;(b=t.value)!=null&&b.contains(qn.value)||f()}),(b,B)=>(g(),A("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Le(["fixed right-5 transition-all",S(Rs)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[s("div",eb,[s("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:r.value,type:"text",disabled:!S(Rs),class:Le(["outline-none bg-transparent",{"text-red-400":!p.value&&r.value}]),placeholder:"Goto...",onKeydown:[pl(h,["enter"]),pl(f,["escape"]),pl(m,["down"]),pl(_,["up"])],onInput:x},null,42,tb)]),d.value.length>0?(g(),A("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(g(!0),A($e,null,Yn(d.value,($,O)=>(g(),A("li",{ref_for:!0,ref_key:"items",ref:l,key:$.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:O===0?"":"t main",class:Le(a.value===O?"bg-active op100":"op80"),onClick:Fy(q=>C($.no),["stop"])},[s("div",sb,Ht($.no),1),y(" "+Ht($.title),1)],10,nb))),128))],512)):ye("v-if",!0)],2))}});const lb=I(ob,[["__scopeId","data-v-6542f72c"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Goto.vue"]]),rb=X({__name:"Controls",setup(e){E(P);const t=cn(),n=cn();return(o,l)=>(g(),A($e,null,[k(o5,{modelValue:S(vt),"onUpdate:modelValue":l[0]||(l[0]=r=>Pe(vt)?vt.value=r:null)},null,8,["modelValue"]),k(lb),t.value?(g(),V(S(t),{key:0})):ye("v-if",!0),n.value?(g(),V(S(n),{key:1,modelValue:S(Wr),"onUpdate:modelValue":l[1]||(l[1]=r=>Pe(Wr)?Wr.value=r:null)},null,8,["modelValue"])):ye("v-if",!0),S(Te).info?(g(),V(f5,{key:2,modelValue:S(ko),"onUpdate:modelValue":l[2]||(l[2]=r=>Pe(ko)?ko.value=r:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),ab=I(rb,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Controls.vue"]]),ib={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cb=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),ub=[cb];function db(e,t){return g(),A("svg",ib,ub)}const pb={name:"carbon-settings-adjust",render:db},fb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hb=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),mb=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),vb=[hb,mb];function gb(e,t){return g(),A("svg",fb,vb)}const yb={name:"carbon-information",render:gb},_b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bb=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),wb=[bb];function Db(e,t){return g(),A("svg",_b,wb)}const xb={name:"carbon-download",render:Db},Cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kb=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ab=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Sb=[kb,Ab];function Bb(e,t){return g(),A("svg",Cb,Sb)}const Eb={name:"carbon-user-speaker",render:Bb},$b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tb=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Pb=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Ib=[Tb,Pb];function Ob(e,t){return g(),A("svg",$b,Ib)}const jb={name:"carbon-presentation-file",render:Ob},Mb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lb=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Rb=[Lb];function Fb(e,t){return g(),A("svg",Mb,Rb)}const Nb={name:"carbon-pen",render:Fb},Hb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qb=s("g",{fill:"currentColor"},[s("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),s("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Vb=[qb];function zb(e,t){return g(),A("svg",Hb,Vb)}const Wb={name:"ph-cursor-duotone",render:zb},Ub={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gb=s("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Kb=[Gb];function Yb(e,t){return g(),A("svg",Ub,Kb)}const fh={name:"ph-cursor-fill",render:Yb},Xb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zb=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Jb=[Zb];function Qb(e,t){return g(),A("svg",Xb,Jb)}const ew={name:"carbon-sun",render:Qb},tw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nw=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),sw=[nw];function ow(e,t){return g(),A("svg",tw,sw)}const lw={name:"carbon-moon",render:ow},rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},aw=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),iw=[aw];function cw(e,t){return g(),A("svg",rw,iw)}const uw={name:"carbon-apps",render:cw},dw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pw=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),fw=[pw];function hw(e,t){return g(),A("svg",dw,fw)}const hh={name:"carbon-arrow-right",render:hw},mw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vw=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),gw=[vw];function yw(e,t){return g(),A("svg",mw,gw)}const _w={name:"carbon-arrow-left",render:yw},bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ww=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Dw=[ww];function xw(e,t){return g(),A("svg",bw,Dw)}const Cw={name:"carbon-maximize",render:xw},kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Aw=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Sw=[Aw];function Bw(e,t){return g(),A("svg",kw,Sw)}const Ew={name:"carbon-minimize",render:Bw},$w={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tw=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Pw=[Tw];function Iw(e,t){return g(),A("svg",$w,Pw)}const Ow={name:"carbon-checkmark",render:Iw},jw={class:"select-list"},Mw={class:"title"},Lw={class:"items"},Rw=["onClick"],Fw=X({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;E(P);const o=sn(n,"modelValue",t,{passive:!0});return(l,r)=>{const a=Ow;return g(),A("div",jw,[s("div",Mw,Ht(e.title),1),s("div",Lw,[(g(!0),A($e,null,Yn(e.items,i=>(g(),A("div",{key:i.value,class:Le(["item",{active:S(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[k(a,{class:Le(["text-green-500",{"opacity-0":S(o)!==i.value}])},null,8,["class"]),y(" "+Ht(i.display||i.value),1)],10,Rw))),128))])])}}});const Nw=I(Fw,[["__scopeId","data-v-d9d0538e"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/SelectList.vue"]]),Hw={class:"text-sm"},qw=X({__name:"Settings",setup(e){E(P);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(g(),A("div",Hw,[k(Nw,{modelValue:S(Bl),"onUpdate:modelValue":o[0]||(o[0]=l=>Pe(Bl)?Bl.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Vw=I(qw,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Settings.vue"]]),zw={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Ww=X({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;E(P);const o=sn(n,"modelValue",t,{passive:!0}),l=F();return O_(l,()=>{o.value=!1}),(r,a)=>(g(),A("div",{ref_key:"el",ref:l,class:"flex relative"},[s("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!S(o))},[bt(r.$slots,"button",{class:Le({disabled:e.disabled})})],2),(g(),V(Ep,null,[S(o)?(g(),A("div",zw,[bt(r.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),Uw=I(Ww,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/MenuButton.vue"]]),Gw={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Kw={__name:"VerticalDivider",setup(e){return E(P),(t,n)=>(g(),A("div",Gw))}},_l=I(Kw,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Yw={render(){return[]}},Xw={class:"slidev-icon-btn"},Zw={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Jw={class:"my-auto"},Qw={class:"opacity-50"},eD=X({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;E(P);const n=Ra.smaller("md"),{isFullscreen:o,toggle:l}=Kf,r=M(()=>Za.value?`?password=${Za.value}`:""),a=M(()=>`/presenter/${Ke.value}${r.value}`),i=M(()=>`/${Ke.value}${r.value}`),c=F();function u(){c.value&&qn.value&&c.value.contains(qn.value)&&qn.value.blur()}const d=M(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=cn(),h=cn();return Hn(()=>import("./DrawingControls-08515e24.js"),[]).then(f=>h.value=f.default),(f,m)=>{const _=Ew,D=Cw,x=_w,C=hh,b=uw,B=lw,$=ew,O=fh,q=Wb,L=Nb,U=jb,se=ks("RouterLink"),de=Eb,Z=xb,ge=yb,we=pb;return g(),A("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[S(yn)?ye("v-if",!0):(g(),A("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...xe)=>S(l)&&S(l)(...xe))},[S(o)?(g(),V(_,{key:0})):(g(),V(D,{key:1}))])),s("button",{class:Le(["slidev-icon-btn",{disabled:!S(zP)}]),onClick:m[1]||(m[1]=(...xe)=>S(zn)&&S(zn)(...xe))},[k(x)],2),s("button",{class:Le(["slidev-icon-btn",{disabled:!S(VP)}]),title:"Next",onClick:m[2]||(m[2]=(...xe)=>S(Vn)&&S(Vn)(...xe))},[k(C)],2),S(yn)?ye("v-if",!0):(g(),A("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=xe=>S(Yf)())},[k(b)])),S(Va)?ye("v-if",!0):(g(),A("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=xe=>S(eh)())},[S(Ri)?(g(),V(B,{key:0})):(g(),V($,{key:1}))])),k(_l),S(yn)?ye("v-if",!0):(g(),A($e,{key:3},[!S(xt)&&!S(n)&&p.value?(g(),A($e,{key:0},[k(S(p)),k(_l)],64)):ye("v-if",!0),S(xt)?(g(),A("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=xe=>Ur.value=!S(Ur))},[S(Ur)?(g(),V(O,{key:0})):(g(),V(q,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),(!S(Te).drawings.presenterOnly||S(xt))&&!S(yn)?(g(),A($e,{key:4},[s("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=xe=>on.value=!S(on))},[k(L),S(on)?(g(),A("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ge({background:S(fs).color})},null,4)):ye("v-if",!0)]),k(_l)],64)):ye("v-if",!0),S(yn)?ye("v-if",!0):(g(),A($e,{key:5},[S(xt)?(g(),V(se,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:j(()=>[k(U)]),_:1},8,["to"])):ye("v-if",!0),S(RP)?(g(),V(se,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:j(()=>[k(de)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(g(),A($e,{key:6},[S(Te).download?(g(),A("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...xe)=>S(Ja)&&S(Ja)(...xe))},[k(Z)])):ye("v-if",!0)],64)),!S(xt)&&S(Te).info&&!S(yn)?(g(),A("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=xe=>ko.value=!S(ko))},[k(ge)])):ye("v-if",!0),!S(xt)&&!S(yn)?(g(),V(Uw,{key:8},{button:j(()=>[s("button",Xw,[k(we)])]),menu:j(()=>[k(Vw)]),_:1})):ye("v-if",!0),S(yn)?ye("v-if",!0):(g(),V(_l,{key:9})),s("div",Zw,[s("div",Jw,[y(Ht(S(Ke))+" ",1),s("span",Qw,"/ "+Ht(S(FP)),1)])]),k(S(Yw))],34)],512)}}}),tD=I(eD,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/NavControls.vue"]]),mh={render(){return[]}},vh={render(){return[]}},nD={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},sD=X({__name:"PresenterMouse",setup(e){return E(P),(t,n)=>{const o=fh;return S(Hr).cursor?(g(),A("div",nD,[k(o,{class:"absolute",style:Ge({left:`${S(Hr).cursor.x}%`,top:`${S(Hr).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),oD=I(sD,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),lD=X({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){E(P),_e(gt,()=>{var o,l;(o=gt.value)!=null&&o.meta&&gt.value.meta.preload!==!1&&(gt.value.meta.__preloaded=!0),(l=Xr.value)!=null&&l.meta&&Xr.value.meta.preload!==!1&&(Xr.value.meta.__preloaded=!0)},{immediate:!0});const t=cn();Hn(()=>import("./DrawingLayer-4fb09638.js"),[]).then(o=>t.value=o.default);const n=M(()=>Je.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===gt.value}));return(o,l)=>(g(),A($e,null,[ye(" Global Bottom "),k(S(vh)),ye(" Slides "),k(By,ze(S(GP),{id:"slideshow",tag:"div"}),{default:j(()=>[(g(!0),A($e,null,Yn(n.value,r=>{var a;return Zo((g(),V(S(Hi),{key:r.path,is:r==null?void 0:r.component,clicks:r===S(gt)?S(Ft):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(S(Ni)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[of,r===S(gt)]])}),128))]),_:1},16),ye(" Global Top "),k(S(mh)),t.value?(g(),V(S(t),{key:0})):ye("v-if",!0),S(xt)?ye("v-if",!0):(g(),V(oD,{key:1}))],64))}});const rD=I(lD,[["__scopeId","data-v-587ef205"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/SlidesShow.vue"]]),aD=X({__name:"PrintStyle",setup(e){E(P);function t(n,{slots:o}){if(o.default)return nt("style",o.default())}return(n,o)=>(g(),V(t,null,{default:j(()=>[y(" @page { size: "+Ht(S(Nn))+"px "+Ht(S(Ii))+"px; margin: 0px; } ",1)]),_:1}))}}),gh=I(aD,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/PrintStyle.vue"]]),iD=X({__name:"Play",setup(e){E(P),W2();const t=F();function n(r){var a;Lu.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Vn():zn())}KP(t);const o=M(()=>J8.value||Lu.value);cn();const l=cn();return Hn(()=>import("./DrawingControls-08515e24.js"),[]).then(r=>l.value=r.default),(r,a)=>(g(),A($e,null,[S(xn)?(g(),V(gh,{key:0})):ye("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ge(S(Oi))},[k(nh,{class:"w-full h-full",style:Ge({background:"var(--slidev-slide-container-background, black)"}),width:S(xn)?S(Ds).width.value:void 0,scale:S(Bl),onPointerdown:n},{default:j(()=>[k(rD,{context:"slide"})]),controls:j(()=>[s("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",S(Ho)?"pointer-events-none":""]])},[k(tD,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!S(Te).drawings.presenterOnly&&!S(yn)&&l.value?(g(),V(S(l),{key:0,class:"ml-0"})):ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),k(ab)],64))}}),cD=I(iD,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function yh(e){return typeof e>"u"||e===null}function uD(e){return typeof e=="object"&&e!==null}function dD(e){return Array.isArray(e)?e:yh(e)?[]:[e]}function pD(e,t){var n,o,l,r;if(t)for(r=Object.keys(t),n=0,o=r.length;n<o;n+=1)l=r[n],e[l]=t[l];return e}function fD(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function hD(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var mD=yh,vD=uD,gD=dD,yD=fD,_D=hD,bD=pD,Vi={isNothing:mD,isObject:vD,toArray:gD,repeat:yD,isNegativeZero:_D,extend:bD};function _h(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function Vo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=_h(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Vo.prototype=Object.create(Error.prototype);Vo.prototype.constructor=Vo;Vo.prototype.toString=function(t){return this.name+": "+_h(this,t)};var ds=Vo,wD=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],DD=["scalar","sequence","mapping"];function xD(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function CD(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(wD.indexOf(n)===-1)throw new ds('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=xD(t.styleAliases||null),DD.indexOf(this.kind)===-1)throw new ds('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var dt=CD;function nd(e,t){var n=[];return e[t].forEach(function(o){var l=n.length;n.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),n[l]=o}),n}function kD(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function Xa(e){return this.extend(e)}Xa.prototype.extend=function(t){var n=[],o=[];if(t instanceof dt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new ds("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof dt))throw new ds("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new ds("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new ds("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof dt))throw new ds("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Xa.prototype);return l.implicit=(this.implicit||[]).concat(n),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=nd(l,"implicit"),l.compiledExplicit=nd(l,"explicit"),l.compiledTypeMap=kD(l.compiledImplicit,l.compiledExplicit),l};var AD=Xa,SD=new dt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),BD=new dt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ED=new dt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),$D=new AD({explicit:[SD,BD,ED]});function TD(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function PD(){return null}function ID(e){return e===null}var OD=new dt("tag:yaml.org,2002:null",{kind:"scalar",resolve:TD,construct:PD,predicate:ID,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function jD(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function MD(e){return e==="true"||e==="True"||e==="TRUE"}function LD(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var RD=new dt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:jD,construct:MD,predicate:LD,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function FD(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function ND(e){return 48<=e&&e<=55}function HD(e){return 48<=e&&e<=57}function qD(e){if(e===null)return!1;var t=e.length,n=0,o=!1,l;if(!t)return!1;if(l=e[n],(l==="-"||l==="+")&&(l=e[++n]),l==="0"){if(n+1===t)return!0;if(l=e[++n],l==="b"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(!FD(e.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(!ND(e.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;n<t;n++)if(l=e[n],l!=="_"){if(!HD(e.charCodeAt(n)))return!1;o=!0}return!(!o||l==="_")}function VD(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function zD(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Vi.isNegativeZero(e)}var WD=new dt("tag:yaml.org,2002:int",{kind:"scalar",resolve:qD,construct:VD,predicate:zD,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),UD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function GD(e){return!(e===null||!UD.test(e)||e[e.length-1]==="_")}function KD(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var YD=/^[-+]?[0-9]+e/;function XD(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Vi.isNegativeZero(e))return"-0.0";return n=e.toString(10),YD.test(n)?n.replace("e",".e"):n}function ZD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Vi.isNegativeZero(e))}var JD=new dt("tag:yaml.org,2002:float",{kind:"scalar",resolve:GD,construct:KD,predicate:ZD,represent:XD,defaultStyle:"lowercase"}),QD=$D.extend({implicit:[OD,RD,WD,JD]}),ex=QD,bh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function tx(e){return e===null?!1:bh.exec(e)!==null||wh.exec(e)!==null}function nx(e){var t,n,o,l,r,a,i,c=0,u=null,d,p,h;if(t=bh.exec(e),t===null&&(t=wh.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(n,o,l));if(r=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],p=+(t[11]||0),u=(d*60+p)*6e4,t[9]==="-"&&(u=-u)),h=new Date(Date.UTC(n,o,l,r,a,i,c)),u&&h.setTime(h.getTime()-u),h}function sx(e){return e.toISOString()}var ox=new dt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:tx,construct:nx,instanceOf:Date,represent:sx});function lx(e){return e==="<<"||e===null}var rx=new dt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:lx}),zi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ax(e){if(e===null)return!1;var t,n,o=0,l=e.length,r=zi;for(n=0;n<l;n++)if(t=r.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function ix(e){var t,n,o=e.replace(/[\r\n=]/g,""),l=o.length,r=zi,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return n=l%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function cx(e){var t="",n=0,o,l,r=e.length,a=zi;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[o];return l=r%3,l===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):l===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):l===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function ux(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var dx=new dt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ax,construct:ix,predicate:ux,represent:cx}),px=Object.prototype.hasOwnProperty,fx=Object.prototype.toString;function hx(e){if(e===null)return!0;var t=[],n,o,l,r,a,i=e;for(n=0,o=i.length;n<o;n+=1){if(l=i[n],a=!1,fx.call(l)!=="[object Object]")return!1;for(r in l)if(px.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function mx(e){return e!==null?e:[]}var vx=new dt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:hx,construct:mx}),gx=Object.prototype.toString;function yx(e){if(e===null)return!0;var t,n,o,l,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],gx.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function _x(e){if(e===null)return[];var t,n,o,l,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var bx=new dt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:yx,construct:_x}),wx=Object.prototype.hasOwnProperty;function Dx(e){if(e===null)return!0;var t,n=e;for(t in n)if(wx.call(n,t)&&n[t]!==null)return!1;return!0}function xx(e){return e!==null?e:{}}var Cx=new dt("tag:yaml.org,2002:set",{kind:"mapping",resolve:Dx,construct:xx});ex.extend({implicit:[ox,rx],explicit:[dx,vx,bx,Cx]});function sd(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var kx=new Array(256),Ax=new Array(256);for(var Ms=0;Ms<256;Ms++)kx[Ms]=sd(Ms)?1:0,Ax[Ms]=sd(Ms);function Sx(e){return Array.from(new Set(e))}function od(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const l=[];let r=t;for(;r<n;)l.push(r),r+=o||1;return l}function Dh(e,t){if(!t||t==="all"||t==="*")return od(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[l,r]=o.split("-",2);n.push(...od(+l,r?+r+1:e+1))}return Sx(n).filter(o=>o<=e).sort((o,l)=>o-l)}function xh(e){const t=M(()=>e.value.path),n=M(()=>Je.length),o=M(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=M(()=>Cr(o.value)),r=M(()=>Je.find(h=>h.path===`${o.value}`)),a=M(()=>{var h,f,m;return(m=(f=(h=r.value)==null?void 0:h.meta)==null?void 0:f.slide)==null?void 0:m.id}),i=M(()=>{var h,f;return((f=(h=r.value)==null?void 0:h.meta)==null?void 0:f.layout)||(o.value===1?"cover":"default")}),c=M(()=>Je.find(h=>h.path===`${Math.min(Je.length,o.value+1)}`)),u=M(()=>Je.filter(h=>{var f,m;return(m=(f=h.meta)==null?void 0:f.slide)==null?void 0:m.title}).reduce((h,f)=>(Ki(h,f),h),[])),d=M(()=>Yi(u.value,r.value)),p=M(()=>Xi(d.value));return{route:e,path:t,total:n,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:p,downloadPDF:Ja,next:Vn,nextSlide:zo,openInEditor:YP,prev:zn,prevSlide:Wo}}function Ch(e,t,n){const o=F(0);it(()=>{kt.afterEach(async()=>{await it(),o.value+=1})});const l=M(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=M(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=M(()=>n.value<Je.length-1||e.value<r.value),i=M(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const Bx=["id"],Ex=X({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:Object,required:!0},route:{type:Object,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=sn(n,"clicksElements",t),l=M(()=>({height:`${Ii}px`,width:`${Nn}px`})),r=cn();Hn(()=>Promise.resolve().then(()=>e5),void 0).then(u=>r.value=u.default);const a=M(()=>n.clicks),i=Ch(a,n.nav.currentRoute,n.nav.currentPage),c=M(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Et(P,Ue({nav:{...n.nav,...i},configs:Te,themeConfigs:M(()=>Te.themeConfig)})),(u,d)=>{var p;return g(),A("div",{id:c.value,class:"print-slide-container",style:Ge(l.value)},[k(S(vh)),k(S(Hi),{is:(p=u.route)==null?void 0:p.component,"clicks-elements":S(o),"onUpdate:clicksElements":d[0]||(d[0]=h=>Pe(o)?o.value=h:null),clicks:a.value,"clicks-disabled":!1,class:Le(S(Ni)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(g(),V(S(r),{key:0,page:+u.route.path},null,8,["page"])):ye("v-if",!0),k(S(mh))],12,Bx)}}}),ld=I(Ex,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),$x=X({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(e){var r;const t=e;E(P);const n=F(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=M(()=>t.route),l=xh(o);return(a,i)=>(g(),A($e,null,[k(ld,{"clicks-elements":n.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>n.value=c),clicks:0,nav:S(l),route:o.value},null,8,["clicks-elements","nav","route"]),S(Ao)?ye("v-if",!0):(g(!0),A($e,{key:0},Yn(n.value.length,c=>(g(),V(ld,{key:c,clicks:c,nav:S(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),Tx=I($x,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Px={id:"print-content"},Ix=X({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;E(P);const n=M(()=>t.width),o=M(()=>t.width/Fn),l=M(()=>n.value/o.value),r=M(()=>l.value<Fn?n.value/Nn:o.value*Fn/Nn);let a=Je;qt.value.query.range&&(a=Dh(a.length,qt.value.query.range).map(u=>a[u-1]));const i=M(()=>({"select-none":!Te.selectable}));return Et(vf,r),(c,u)=>(g(),A("div",{id:"print-container",class:Le(i.value)},[s("div",Px,[(g(!0),A($e,null,Yn(S(a),d=>(g(),V(Tx,{key:d.path,route:d},null,8,["route"]))),128))]),bt(c.$slots,"controls")],2))}});const Ox=I(Ix,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/PrintContainer.vue"]]),jx=X({__name:"Print",setup(e){return E(P),Bs(()=>{xn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(g(),A($e,null,[S(xn)?(g(),V(gh,{key:0})):ye("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ge(S(Oi))},[k(Ox,{class:"w-full h-full",style:Ge({background:"var(--slidev-slide-container-background, black)"}),width:S(Ds).width.value},null,8,["style","width"])],4)],64))}});const Mx=I(jx,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/internals/Print.vue"]]);const Lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rx=s("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),Fx=[Rx];function Nx(e,t){return g(),A("svg",Lx,Fx)}const Hx={name:"carbon-edit",render:Nx};function rd(e){return e.startsWith("/")?"/my-slidevs/slidevs/learn-canvas"+e.slice(1):e}function qx(e,t=!1){const n=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${rd(e)})`:`url("${rd(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Vx={class:"my-auto w-full"},zx=X({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;E(P);const n=M(()=>qx(t.background,!0));return(o,l)=>(g(),A("div",{class:"slidev-layout cover text-center",style:Ge(n.value)},[s("div",Vx,[bt(o.$slots,"default")])],4))}}),Wx=I(zx,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+theme-seriph@0.21.3/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),Ux=s("h1",null,"canvas 教程",-1),Gx={class:"pt-12"},Kx={class:"abs-br m-6 flex gap-2"},Yx={__name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0,record:"dev"},n=E(P);return(o,l)=>{const r=hh,a=Hx;return g(),V(Wx,le(oe(t)),{default:j(()=>[Ux,s("div",Gx,[s("span",{onClick:l[0]||(l[0]=(...i)=>S(n).nav.next&&S(n).nav.next(...i)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[y(" Press Space for next page "),k(r,{class:"inline"})])]),s("div",Kx,[s("button",{onClick:l[1]||(l[1]=i=>S(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},[k(a)])])]),_:1},16)}}},Xx=I(Yx,[["__file","/@slidev/slides/1.md"]]),Zx=["href","innerHTML"],Jx=["href"],Qx=X({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return E(P),(t,n)=>{const o=ks("RouterLink");return!S(xn)&&t.title?(g(),V(o,{key:0,to:String(t.to),onClick:n[0]||(n[0]=l=>l.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!S(xn)&&!t.title?(g(),V(o,{key:1,to:String(t.to),onClick:n[1]||(n[1]=l=>l.target.blur())},{default:j(()=>[bt(t.$slots,"default")]),_:3},8,["to"])):S(xn)&&t.title?(g(),A("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,Zx)):(g(),A("a",{key:3,href:`#${t.to}`},[bt(t.$slots,"default")],8,Jx))}}}),kh=I(Qx,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/builtin/Link.vue"]]),e3={key:0},t3={key:1},n3={key:2},s3={key:3},o3={key:4},l3={key:5},r3={key:6},a3={key:7},i3={key:8},c3={key:9},u3={key:10},d3={key:11},p3={key:12},f3={key:13},h3={key:14},m3={key:15},v3={key:16},g3={key:17},y3={key:18},_3={key:19},b3={key:20},w3={key:21},D3={key:22},x3={key:23},C3={key:24},k3={key:25},A3={key:26},S3={key:27},B3={key:28},E3={key:29},$3={key:30},T3={key:31},P3={key:32},I3={key:33},O3={key:34},j3={key:35},M3={key:36},L3={key:37},R3={key:38},F3={key:39},N3={key:40},H3={key:41},q3={key:42},V3={key:43},z3={key:44},W3={key:45},U3={key:46},G3={key:47},K3={key:48},Y3={key:49},X3={key:50},Z3={key:51},J3={key:52},Q3={key:53},eC={key:54},tC={key:55},nC={key:56},sC={key:57},oC={key:58},lC={key:59},rC={key:60},aC={key:61},iC={key:62},cC={key:63},uC=X({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>(g(),A("div",null,[+t.no==1?(g(),A("p",e3,"canvas 教程")):+t.no==2?(g(),A("p",t3,"目录")):+t.no==3?(g(),A("p",n3,"什么是canvas?")):+t.no==4?(g(),A("p",s3,"canvas 元素")):+t.no==5?(g(),A("p",o3,"渲染上下文")):+t.no==6?(g(),A("p",l3,"Hello canvas")):+t.no==7?(g(),A("p",r3,"hello canvas demo")):+t.no==8?(g(),A("p",a3,"Vue3 中使用canvas")):+t.no==9?(g(),A("p",i3,"绘制形状")):+t.no==10?(g(),A("p",c3,"绘制矩形")):+t.no==11?(g(),A("p",u3,"绘制路径")):+t.no==12?(g(),A("p",d3,"圆弧")):+t.no==13?(g(),A("p",p3,"贝塞尔曲线")):+t.no==14?(g(),A("p",f3,"Path2D 对象")):+t.no==15?(g(),A("p",h3,"path2D使用SVG")):+t.no==16?(g(),A("p",m3,"示例全部")):+t.no==17?(g(),A("p",v3,"undefined")):+t.no==18?(g(),A("p",g3,"使用样式和颜色")):+t.no==19?(g(),A("p",y3,"色彩")):+t.no==20?(g(),A("p",_3,"透明度")):+t.no==21?(g(),A("p",b3,"线型")):+t.no==22?(g(),A("p",w3,"miterLimit")):+t.no==23?(g(),A("p",D3,"虚线")):+t.no==24?(g(),A("p",x3,"渐变")):+t.no==25?(g(),A("p",C3,"undefined")):+t.no==26?(g(),A("p",k3,"图案样式")):+t.no==27?(g(),A("p",A3,"阴影")):+t.no==28?(g(),A("p",S3,"填充规则")):+t.no==29?(g(),A("p",B3,"绘制文本")):+t.no==30?(g(),A("p",E3,"绘制文本")):+t.no==31?(g(),A("p",$3,"文本样式")):+t.no==32?(g(),A("p",T3,"预测文本宽度")):+t.no==33?(g(),A("p",P3,"使用图片")):+t.no==34?(g(),A("p",I3,"获取需要绘制的图片")):+t.no==35?(g(),A("p",O3,"绘制图片")):+t.no==36?(g(),A("p",j3,"缩放")):+t.no==37?(g(),A("p",M3,"切片")):+t.no==38?(g(),A("p",L3,"undefined")):+t.no==39?(g(),A("p",R3,"控制图像的缩放行为")):+t.no==40?(g(),A("p",F3,"变形")):+t.no==41?(g(),A("p",N3,"状态的保存和恢复")):+t.no==42?(g(),A("p",H3,"undefined")):+t.no==43?(g(),A("p",q3,"移动")):+t.no==44?(g(),A("p",V3,"旋转")):+t.no==45?(g(),A("p",z3,"缩放")):+t.no==46?(g(),A("p",W3,"Transforms")):+t.no==47?(g(),A("p",U3,"组合与裁切")):+t.no==48?(g(),A("p",G3,"globalCompositeOperation")):+t.no==49?(g(),A("p",K3,"裁切路径")):+t.no==50?(g(),A("p",Y3,"动画")):+t.no==51?(g(),A("p",X3,"动画的基本步骤")):+t.no==52?(g(),A("p",Z3,"更新动画")):+t.no==53?(g(),A("p",J3,"时钟案例")):+t.no==54?(g(),A("p",Q3,"循环全景照片案例")):+t.no==55?(g(),A("p",eC,"小球案例")):+t.no==56?(g(),A("p",tC,"像素操作")):+t.no==57?(g(),A("p",nC,"ImageData 对象")):+t.no==58?(g(),A("p",sC,"创建一个ImageData对象")):+t.no==59?(g(),A("p",oC,"从canvas获取ImageData")):+t.no==60?(g(),A("p",lC,"写入像素数据")):+t.no==61?(g(),A("p",rC,"保存图片")):+t.no==62?(g(),A("p",aC,"undefined")):+t.no==63?(g(),A("p",iC,"网页截图")):+t.no==64?(g(),A("p",cC,"其他案例")):ye("v-if",!0)]))}}),dC=I(uC,[["__file","/@slidev/titles.md"]]),pC=X({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;E(P);const n=M(()=>[...gf(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(o,l)=>{const r=kh,a=ks("TocList",!0);return o.list&&o.list.length>0?(g(),A("ol",{key:0,class:Le(n.value)},[(g(!0),A($e,null,Yn(o.list,i=>(g(),A("li",{key:i.path,class:Le(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[k(r,{to:i.path},{default:j(()=>[k(S(dC),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(g(),V(a,{key:0,level:o.level+1,list:i.children,"list-class":o.listClass},null,8,["level","list","list-class"])):ye("v-if",!0)],2))),128))],2)):ye("v-if",!0)}}});const fC=I(pC,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/builtin/TocList.vue"]]),hC=X({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=E(P);function o(i,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=i.find(d=>d.active||d.activeParent);return u?o(u.children,c+1):[]}return i.map(u=>({...u,children:o(u.children,c+1)}))}function l(i){return i.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:l(c.children)}))}function r(i){const c=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>c).map(u=>({...u,children:r(u.children)}))}const a=M(()=>{const i=n==null?void 0:n.nav.tree;if(!i)return[];let c=o(i);return t.mode==="onlyCurrentTree"?c=l(c):t.mode==="onlySiblings"&&(c=r(c)),c});return(i,c)=>{const u=fC;return g(),A("div",{class:"slidev-toc",style:Ge(`column-count:${i.columns}`)},[k(u,{level:1,list:a.value,"list-class":i.listClass},null,8,["list","list-class"])],4)}}}),mC=I(hC,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/builtin/Toc.vue"]]),vC={class:"slidev-layout default"},gC={__name:"default",setup(e){return E(P),(t,n)=>(g(),A("div",vC,[bt(t.$slots,"default")]))}},pe=I(gC,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/layouts/default.vue"]]),yC=s("h2",null,"目录",-1),_C={__name:"2",setup(e){const t={hideInToc:!0};return E(P),(n,o)=>{const l=mC;return g(),V(pe,le(oe(t)),{default:j(()=>[yC,k(l,{columns:"4"})]),_:1},16)}}},bC=I(_C,[["__file","/@slidev/slides/2.md"]]),wC=s("h2",null,"01.什么是canvas？",-1),DC=s("p",null,"canvas元素+相关的api",-1),xC=s("p",null,[y("Canvas API 提供了一个通过JavaScript 和 HTML的"),s("code",null,"<canvas>"),y("元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。")],-1),CC=s("p",null,[y("Canvas API 主要聚焦于 2D 图形。而同样使用"),s("code",null,"<canvas>"),y("元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。")],-1),kC=s("p",null,"兼容性：",-1),AC=s("p",null,[s("a",{href:"https://caniuse.com/canvas",target:"_blank",rel:"noopener"},"https://caniuse.com/canvas")],-1),SC={__name:"3",setup(e){const t={level:1};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[wC,DC,xC,CC,kC,AC]),_:1},16))}},BC=I(SC,[["__file","/@slidev/slides/3.md"]]),EC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},$C=s("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),TC=[$C];function PC(e,t){return g(),A("svg",EC,TC)}const IC={name:"ph-clipboard",render:PC},OC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jC=s("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),MC=[jC];function LC(e,t){return g(),A("svg",OC,MC)}const RC={name:"ph-check-circle",render:LC},FC=["title"],NC=X({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Te.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;E(P);const n=E(wo),o=E(is),l=E(Do);function r(p=5){const h=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=f.length;for(let _=0;_<p;_++)h.push(f.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=F(),i=It();We(()=>{const p=t.at==null?o==null?void 0:o.value.length:t.at,h=M(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(p||0)),t.ranges.length-1)),f=M(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),_=q0(t.ranges.length-1).map(D=>m+D);o!=null&&o.value&&(o.value.push(..._),_r(()=>_.forEach(D=>Ea(o.value,D)),i))}Bs(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],D=t.startLine;for(const x of _){const C=Array.from(x.querySelectorAll(".line")),b=Dh(C.length+D-1,f.value);if(C.forEach((B,$)=>{const O=b.includes($+D);B.classList.toggle(os,!0),B.classList.toggle("highlighted",O),B.classList.toggle("dishonored",!O)}),t.maxHeight){const B=Array.from(x.querySelectorAll(".line.highlighted"));B.reduce((O,q)=>q.offsetHeight+O,0)>a.value.offsetHeight?B[0].scrollIntoView({behavior:"smooth",block:"start"}):B.length>0&&B[Math.round((B.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=q_();function d(){var h,f;const p=(f=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:f.textContent;p&&u(p)}return(p,h)=>{const f=RC,m=IC;return g(),A("div",{ref_key:"el",ref:a,class:Le(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:Ge({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[bt(p.$slots,"default"),S(Te).codeCopy?(g(),A("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:S(c)?"Copied":"Copy",onClick:h[0]||(h[0]=_=>d())},[S(c)?(g(),V(f,{key:0,class:"p-2 w-8 h-8"})):(g(),V(m,{key:1,class:"p-2 w-8 h-8"}))],8,FC)):ye("v-if",!0)],6)}}}),lt=I(NC,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),HC=s("h2",null,"02.canvas元素",-1),qC=s("p",null,[y("canvas 的默认大小为"),s("code",null,"300*150"),y(" px,具有width和height属性，用于定义canvas的宽和高。")],-1),VC=s("p",null,"canvas标签内可以设置替换内容，不支持canvas的浏览器会显示替换内容(比如IE9之前的浏览器)，支持canvas的浏览器则显示canvas，忽略替换内容",-1),zC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<!"),s("span",{style:{color:"#429988"}},"DOCTYPE"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"html"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"html"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"lang"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"en"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"head"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"meta"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"charset"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"UTF-8"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"meta"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"http-equiv"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"X-UA-Compatible"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"content"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"IE=edge"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"meta"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"viewport"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"content"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},":width"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"="),s("span",{style:{color:"#C98A7D"}},"device-width,"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"initial-scale"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},"1.0"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},'"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"title"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"认识canvas标签"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"title"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"head"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"body"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"canvas"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":width"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"300"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":height"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"150"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    当前浏览器不支持canvas元素，请升级或更换浏览器！")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"canvas"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"body"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"html"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<!"),s("span",{style:{color:"#2F8A89"}},"DOCTYPE"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"html"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"html"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"lang"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"en"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"head"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"meta"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"charset"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"UTF-8"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"meta"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"http-equiv"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"X-UA-Compatible"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"content"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"IE=edge"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"meta"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"viewport"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"content"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},":width"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"="),s("span",{style:{color:"#B56959"}},"device-width,"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"initial-scale"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},"1.0"),s("span",{style:{color:"#B31D28","font-style":"italic"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"title"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"认识canvas标签"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"title"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"head"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"body"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"canvas"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":width"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"300"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":height"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"150"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    当前浏览器不支持canvas元素，请升级或更换浏览器！")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"canvas"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"body"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"html"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),WC=s("blockquote",null,[s("p",null,"可以用css定义大小，绘制时图像会伸缩以适应它的框架尺寸，但是如果css的尺寸和画布大小比例不一致，会出现扭曲变形")],-1),UC={__name:"4",setup(e){const t={level:1};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[HC,qC,VC,k(l,ze({},{ranges:[""]}),{default:j(()=>[zC]),_:1},16),WC]),_:1},16)}}},GC=I(UC,[["__file","/@slidev/slides/4.md"]]),KC=s("h2",null,"03.渲染上下文",-1),YC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"canvasDom"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"HTMLCanvasElement"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#B8A965"}},"document"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getElementById"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'canvas'"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"canvasDom"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"getContext"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ctx"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#A1B567"}},"CanvasRenderingContext2D"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"canvasDom"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getContext"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'2d'"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},"!")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"   "),s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"canvasDom"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"HTMLCanvasElement"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#8C862B"}},"document"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getElementById"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'canvas'"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"canvasDom"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"getContext"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ctx"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#6C7834"}},"CanvasRenderingContext2D"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"canvasDom"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getContext"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'2d'"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},"!")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"   "),s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),XC=s("p",null,[y("getContext 参数的"),s("code",null,"'2d'"),y("是contextType ，有以下几种类型")],-1),ZC=s("ul",null,[s("li",null,"2d，建立一个二维渲染上下文 CanvasRenderingContext2D。"),s("li",null,"webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象"),s("li",null,"webgl2 ： 创建一个 WebGL2RenderingContext 三维渲染上下文对象"),s("li",null,"webgpu 创建一个三维渲染上下文对象 GPUCanvasContext"),s("li",null,"bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。")],-1),JC={__name:"5",setup(e){const t={level:1};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[KC,k(l,ze({},{ranges:[""]}),{default:j(()=>[YC]),_:1},16),XC,ZC]),_:1},16)}}},QC=I(JC,[["__file","/@slidev/slides/5.md"]]),ek=s("h2",null,"04.hello canvas",-1),tk=s("ul",null,[s("li",null,"moveTo 移动画笔"),s("li",null,"lineTo 画线"),s("li",null,"fillRect 画矩形"),s("li",null,"fillText 在指定区域填充文字")],-1),nk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// 1. 获取canvas dom对象")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"canvasDom"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"HTMLCanvasElement"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#B8A965"}},"document"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getElementById"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'canvas'"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// 2、从HTMLCanvasElement获取上下文环境对象context")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ctx"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"canvasDom"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getContext"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'2d'"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},"!")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// 3. 绘制图形")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"moveTo"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"80"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"55"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"//左上角为坐标起点0.0")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"lineTo"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"900"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"150"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"stroke"),s("span",{style:{color:"#858585"}},"()")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// 绘制矩形")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"fillStyle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'green'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"fillRect"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"50"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"250"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"400"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"100"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// 绘制文字")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"fillStyle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'purple'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"font"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'50px Arial'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"fillText"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'hello canvas'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"200"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"400"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"400"),s("span",{style:{color:"#858585"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// 1. 获取canvas dom对象")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"canvasDom"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"HTMLCanvasElement"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#8C862B"}},"document"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getElementById"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'canvas'"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// 2、从HTMLCanvasElement获取上下文环境对象context")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ctx"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"canvasDom"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getContext"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'2d'"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},"!")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// 3. 绘制图形")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"moveTo"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"80"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"55"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"//左上角为坐标起点0.0")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"lineTo"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"900"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"150"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"stroke"),s("span",{style:{color:"#8E8F8B"}},"()")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// 绘制矩形")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"fillStyle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'green'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"fillRect"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"50"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"250"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"400"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"100"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// 绘制文字")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"fillStyle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'purple'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"font"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'50px Arial'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"fillText"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'hello canvas'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"200"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"400"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"400"),s("span",{style:{color:"#8E8F8B"}},")")])])])],-1),sk={__name:"6",setup(e){const t={level:1};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[ek,tk,k(l,ze({},{ranges:[""]}),{default:j(()=>[nk]),_:1},16)]),_:1},16)}}},ok=I(sk,[["__file","/@slidev/slides/6.md"]]),lk=s("canvas",{id:"canvasHello",width:"900.5",height:"450"}," 当前浏览器不支持canvas元素，请升级或更换浏览器！ ",-1),rk=[lk],ak=X({__name:"Demo001HelloCanvas",setup(e){return E(P),We(()=>{const t=document.getElementById("canvasHello");if(t!=null&&t.getContext){const n=t.getContext("2d");n.moveTo(80,55),n.lineTo(800,150),n.stroke(),n.fillStyle="green",n.fillRect(50,250,400,100),n.fillStyle="purple",n.font="50px Arial",n.fillText("hello canvas",200,400,400)}}),(t,n)=>(g(),A("div",null,rk))}});const ik=I(ak,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo001HelloCanvas.vue"]]),ck={__name:"7",setup(e){const t={hideInToc:!0};return E(P),(n,o)=>{const l=ik;return g(),V(pe,le(oe(t)),{default:j(()=>[k(l)]),_:1},16)}}},uk=I(ck,[["__file","/@slidev/slides/7.md"]]),dk=s("h2",null,"05.Vue3 中使用canvas",-1),pk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"canvas"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"ref"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"canvasDom"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":width"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"p.width"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":height"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"p.height"'),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    当前浏览器不支持canvas元素，请升级或更换浏览器！")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"canvas"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"lang"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"ts"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'vue'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"height"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"withDefaults"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"Props"),s("span",{style:{color:"#858585"}},">(),"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"width"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"900"),s("span",{style:{color:"#858585"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"height"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"450"),s("span",{style:{color:"#858585"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"})")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"canvasDom"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"defineExpose"),s("span",{style:{color:"#858585"}},"({")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canvasDom"),s("span",{style:{color:"#858585"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"})")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"lang"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"scss"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"scoped"),s("span",{style:{color:"#858585"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"canvas"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"border"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#CB7676"}},"px"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"solid"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#D4976C"}},"eee"),s("span",{style:{color:"#858585"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"canvas"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"canvasDom"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":width"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"p.width"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":height"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"p.height"'),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    当前浏览器不支持canvas元素，请升级或更换浏览器！")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"canvas"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"lang"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"ts"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'vue'")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"height"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"withDefaults"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"Props"),s("span",{style:{color:"#8E8F8B"}},">(),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"width"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"900"),s("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"height"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"450"),s("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"})")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"canvasDom"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"defineExpose"),s("span",{style:{color:"#8E8F8B"}},"({")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canvasDom"),s("span",{style:{color:"#8E8F8B"}},",")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"})")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"lang"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"scss"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"scoped"),s("span",{style:{color:"#8E8F8B"}},">")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"canvas"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"border"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#AB5959"}},"px"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"solid"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#A65E2B"}},"eee"),s("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),fk={__name:"8",setup(e){const t={level:1};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[dk,k(l,ze({},{ranges:[""]}),{default:j(()=>[pk]),_:1},16)]),_:1},16)}}},hk=I(fk,[["__file","/@slidev/slides/8.md"]]),mk="/my-slidevs/slidevs/learn-canvas/images/canvas_default_grid.png";function ad(e){return e.startsWith("/")?"/my-slidevs/slidevs/learn-canvas"+e.slice(1):e}function vk(e,t=!1){const n=e&&(e[0]==="#"||e.startsWith("rgb")),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ad(e)})`:`url("${ad(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const gk={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},yk=X({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;E(P);const n=M(()=>vk(t.image));return(o,l)=>(g(),A("div",gk,[s("div",{class:Le(["slidev-layout default",t.class])},[bt(o.$slots,"default")],2),s("div",{class:"w-full w-full",style:Ge(n.value)},null,4)]))}}),_k=I(yk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/layouts/image-right.vue"]]),bk=s("h2",null,"06.绘制形状",-1),wk=s("h3",null,"栅格",-1),Dk=s("p",null,"canvas绘制的原点（0,0）是左上角",-1),xk=s("p",null,[s("img",{src:mk,alt:"栅格"})],-1),Ck={__name:"9",setup(e){const t={level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>(g(),V(_k,le(oe(t)),{default:j(()=>[bk,wk,Dk,xk]),_:1},16))}},kk=I(Ck,[["__file","/@slidev/slides/9.md"]]),id=["ul","ol"],fn=X({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=kc("click"),t=kc("after"),n=(u,d,p)=>Zo(u,[[d,p,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=gf(o);const l=(u,d=1)=>{let p=0;return[u.map(f=>{if(!un(f))return f;if(id.includes(f.type)&&Array.isArray(f.children)){const[m,_]=a(f.children,d+1);return p+=_,nt(f,{},[m])}return nt(f)}),p]};let r=0;const a=(u,d=1)=>{let p=0;return[u.map(f=>{if(!un(f)||f.type===ut)return f;const m=p%this.every===0?e:t;let _,D=0;if(d<+this.depth&&Array.isArray(f.children)){const[C,b]=l(f.children,d);_=nt(f,{},[C]),D=b,p+=b+1}else _=nt(f),p++;const x=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-D).toString();return r++,n(_,m,typeof x=="string"&&!x.startsWith("-")?`+${x}`:x)}),p]};return o.length===1&&id.includes(o[0].type)&&Array.isArray(o[0].children)?nt(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),ft=X({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return k(fn,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),Ak=["width","height","id"],Sk=X({__name:"CanvasBoard",props:{id:{type:String,required:!1,default:void 0},width:{type:Number,required:!1,default:900},height:{type:Number,required:!1,default:450},drawFn:{type:Function,required:!1,default:void 0},title:{type:String,required:!1,default:void 0}},setup(e,{expose:t}){const n=e;E(P);const o=F();return We(()=>{if(n.drawFn){const l=o.value.getContext("2d");n.drawFn(l)}}),t({canvasDom:o}),(l,r)=>(g(),A("canvas",{ref_key:"canvasDom",ref:o,width:n.width,height:n.height,id:n.id}," 当前浏览器不支持canvas元素，请升级或更换浏览器！ ",8,Ak))}});const be=I(Sk,[["__scopeId","data-v-59a36514"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/CanvasBoard.vue"]]);function cd(e,t=100){let n;return(...o)=>{n||(e==null||e(...o),n=setTimeout(()=>{n=null},t))}}function Bk(e){e.fillRect(25,25,100,100),e.clearRect(45,45,60,60),e.strokeRect(50,50,50,50)}function Ek(e,t){const{startX:n=0,startY:o=0}=t||{};e.beginPath(),e.moveTo(n+75,o+50),e.lineTo(n+100,o+75),e.lineTo(n+100,o+25),e.fill()}function $k(e){e.beginPath(),e.arc(75,75,50,0,Math.PI*2,!0),e.moveTo(110,75),e.arc(75,75,35,0,Math.PI,!1),e.moveTo(65,65),e.arc(60,65,5,0,Math.PI*2,!0),e.moveTo(95,65),e.arc(90,65,5,0,Math.PI*2,!0),e.stroke()}function Tk(e){e.beginPath(),e.moveTo(50,50),e.arcTo(100,50,100,100,50),e.stroke()}function Pk(e){e.beginPath(),e.moveTo(75,25),e.quadraticCurveTo(25,25,25,62.5),e.quadraticCurveTo(25,100,50,100),e.quadraticCurveTo(50,120,30,125),e.quadraticCurveTo(60,120,65,100),e.quadraticCurveTo(125,100,125,62.5),e.quadraticCurveTo(125,25,75,25),e.stroke()}function Ik(e){e.beginPath(),e.moveTo(75,40),e.bezierCurveTo(75,37,70,25,50,25),e.bezierCurveTo(20,25,20,62.5,20,62.5),e.bezierCurveTo(20,80,40,102,75,120),e.bezierCurveTo(110,102,130,80,130,62.5),e.bezierCurveTo(130,62.5,130,25,100,25),e.bezierCurveTo(85,25,75,37,75,40),e.fill()}function Ok(e){const t=new Path2D;t.rect(10,10,50,50);const n=new Path2D;n.moveTo(125,35),n.arc(100,35,25,0,2*Math.PI),e.stroke(t),e.fill(n)}function jk(e){const t=new Path2D("M10 10 h 80 v 80 h -80 Z");e.stroke(t)}function Mk(e){for(let t=0;t<6;t++)for(let n=0;n<6;n++)e.fillStyle="rgb("+Math.floor(255-42.5*t)+","+Math.floor(255-42.5*n)+",0)",e.fillRect(n*25,t*25,25,25)}function Lk(e){for(let t=0;t<6;t++)for(let n=0;n<6;n++)e.strokeStyle="rgb(0,"+Math.floor(255-42.5*t)+","+Math.floor(255-42.5*n)+")",e.beginPath(),e.arc(12.5+n*25,12.5+t*25,10,0,Math.PI*2,!0),e.stroke()}function Rk(e){e.fillStyle="#FD0",e.fillRect(0,0,75,75),e.fillStyle="#6C0",e.fillRect(75,0,75,75),e.fillStyle="#09F",e.fillRect(0,75,75,75),e.fillStyle="#F30",e.fillRect(75,75,75,75),e.fillStyle="#FFF",e.globalAlpha=.2;for(let t=0;t<7;t++)e.beginPath(),e.arc(75,75,10+10*t,0,Math.PI*2,!0),e.fill()}function Fk(e){e.fillStyle="rgb(255,221,0)",e.fillRect(0,0,150,37.5),e.fillStyle="rgb(102,204,0)",e.fillRect(0,37.5,150,37.5),e.fillStyle="rgb(0,153,255)",e.fillRect(0,75,150,37.5),e.fillStyle="rgb(255,51,0)",e.fillRect(0,112.5,150,37.5);for(let t=0;t<10;t++){e.fillStyle="rgba(255,255,255,"+(t+1)/10+")";for(let n=0;n<4;n++)e.fillRect(5+t*14,5+n*37.5,14,27.5)}}function Nk(e){for(let t=0;t<10;t++)e.lineWidth=1+t,e.beginPath(),e.moveTo(5+t*14,5),e.lineTo(5+t*14,140),e.stroke()}function Hk(e){const t=["butt","round","square"];e.strokeStyle="#09f",e.beginPath(),e.moveTo(10,10),e.lineTo(140,10),e.moveTo(10,140),e.lineTo(140,140),e.stroke(),e.strokeStyle="black";for(let n=0;n<t.length;n++)e.lineWidth=15,e.lineCap=t[n],e.beginPath(),e.moveTo(25+n*50,10),e.lineTo(25+n*50,140),e.stroke()}function qk(e){const t=["round","bevel","miter"];e.lineWidth=10;for(let n=0;n<t.length;n++)e.lineJoin=t[n],e.beginPath(),e.moveTo(-5,5+n*40),e.lineTo(35,45+n*40),e.lineTo(75,5+n*40),e.lineTo(115,45+n*40),e.lineTo(155,5+n*40),e.stroke()}function ud(e,t=10){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="purple",e.font="16px Fira Sans",e.fillText(`miterLimit:${t}`,100,20,100),e.strokeStyle="#09f",e.lineWidth=2,e.strokeRect(-5,50,160,50),e.strokeStyle="#000",e.lineWidth=10,e.miterLimit=t,e.beginPath(),e.moveTo(0,100);for(let n=0;n<24;n++){const o=n%2==0?25:-25;e.lineTo(Math.pow(n,1.5)*2,75+o)}return e.stroke(),!1}function Vk(e){let t=0;function n(l){l.clearRect(0,0,l.canvas.width,l.canvas.height),l.setLineDash([4,2]),l.lineDashOffset=-t,l.strokeRect(10,10,100,100)}function o(){t++,t>16&&(t=0),n(e),setTimeout(o,20)}o()}function zk(e){let t=15;function n(o){e.beginPath(),e.setLineDash(o),e.moveTo(0,t),e.lineTo(e.canvas.width,t),e.stroke(),t+=20}n([]),n([1,1]),n([10,10]),n([20,5]),n([15,3,3,3]),n([20,3,3,3,3,3,3,3]),n([12,3,3])}function Wk(e){const t=e.createLinearGradient(0,0,0,150);t.addColorStop(0,"#00ABEB"),t.addColorStop(.5,"#fff"),t.addColorStop(.5,"#26C000"),t.addColorStop(1,"#fff");const n=e.createLinearGradient(0,50,0,95);n.addColorStop(.5,"#000"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.strokeStyle=n,e.fillRect(10,10,130,130),e.strokeRect(50,50,50,50)}function Uk(e){const t=e.createRadialGradient(45,45,10,52,50,30);t.addColorStop(0,"#A7D30C"),t.addColorStop(.9,"#019F62"),t.addColorStop(1,"rgba(1,159,98,0)");const n=e.createRadialGradient(105,105,20,112,120,50);n.addColorStop(0,"#FF5F98"),n.addColorStop(.75,"#FF0188"),n.addColorStop(1,"rgba(255,1,136,0)");const o=e.createRadialGradient(95,15,15,102,20,40);o.addColorStop(0,"#00C9FF"),o.addColorStop(.8,"#00B5E2"),o.addColorStop(1,"rgba(0,201,255,0)");const l=e.createRadialGradient(0,150,50,0,140,90);l.addColorStop(0,"#F4F201"),l.addColorStop(.8,"#E4C700"),l.addColorStop(1,"rgba(228,199,0,0)"),e.fillStyle=l,e.fillRect(0,0,150,150),e.fillStyle=o,e.fillRect(0,0,150,150),e.fillStyle=n,e.fillRect(0,0,150,150),e.fillStyle=t,e.fillRect(0,0,150,150)}function Gk(e){e.font="48px serif",e.fillText("Hello world",10,50)}function Kk(e){e.font="48px serif",e.strokeText("Hello world",10,50)}function Yk(e){e.fillRect(0,0,150,150),e.save(),e.fillStyle="#09F",e.fillRect(15,15,120,120),e.save(),e.fillStyle="#FFF",e.globalAlpha=.5,e.fillRect(30,30,90,90),e.restore(),e.fillRect(45,45,60,60),e.restore(),e.fillRect(60,60,30,30)}function Xk(e){for(let t=0;t<3;t++)for(let n=0;n<3;n++)e.save(),e.fillStyle="rgb("+51*t+", "+(255-51*t)+", 255)",e.translate(10+n*50,10+t*50),e.fillRect(0,0,25,25),e.restore()}function Zk(e){e.save(),e.fillStyle="#0095DD",e.fillRect(30,30,100,100),e.rotate(Math.PI/180*25),e.fillStyle="#4D4E53",e.fillRect(30,30,100,100),e.restore(),e.fillStyle="#0095DD",e.fillRect(150,30,100,100),e.translate(200,80),e.rotate(Math.PI/180*25),e.translate(-200,-80),e.fillStyle="#4D4E53",e.fillRect(150,30,100,100)}function Jk(e){e.save(),e.scale(10,3),e.fillRect(1,10,10,10),e.restore(),e.scale(-1,1),e.font="48px serif",e.fillText("SCALE",-135,120)}function Qk(e){const t=Math.sin(Math.PI/6),n=Math.cos(Math.PI/6);e.translate(100,100);let o=0;for(let l=0;l<=12;l++)o=Math.floor(255/12*l),e.fillStyle=`rgb(${o},${o},${o})`,e.fillRect(0,0,100,10),e.transform(n,t,-t,n,0,0);e.setTransform(-1,0,0,1,100,100),e.fillStyle="rgba(255, 128, 255, 0.5)",e.fillRect(0,50,100,100)}function eA(e){e.globalCompositeOperation="xor",e.fillStyle="blue",e.fillRect(10,10,100,100),e.fillStyle="red",e.fillRect(50,50,100,100)}function tA(e){e.fillRect(0,0,150,150),e.translate(75,75),e.beginPath(),e.arc(0,0,60,0,Math.PI*2,!0),e.clip();const t=e.createLinearGradient(0,-75,0,75);t.addColorStop(0,"#232256"),t.addColorStop(1,"#143778"),e.fillStyle=t,e.fillRect(-75,-75,150,150);for(let n=1;n<50;n++)e.save(),e.fillStyle="#fff",e.translate(75-Math.floor(Math.random()*150),75-Math.floor(Math.random()*150)),nA(e,Math.floor(Math.random()*4)+2),e.restore()}function nA(e,t){e.save(),e.beginPath(),e.moveTo(t,0);for(let n=0;n<9;n++)e.rotate(Math.PI/5),n%2==0?e.lineTo(t/.525731*.200811,0):e.lineTo(t,0);e.closePath(),e.fill(),e.restore()}class sA{constructor(t){Ye(this,"ctx");Ye(this,"imgSrc");Ye(this,"speed");Ye(this,"moveX");Ye(this,"scale");Ye(this,"img",new Image);Ye(this,"imgW");Ye(this,"imgH");Ye(this,"clearX");Ye(this,"clearY");Ye(this,"imgY");Ye(this,"imgX",0);const{ctx:n,imgSrc:o,speed:l=30,moveX:r=.75,scale:a=1,imgY:i=0}=t;this.ctx=n,this.imgSrc=o,this.speed=l,this.moveX=r,this.scale=a,this.imgY=i,this.img.src=this.imgSrc,this.init()}getClearImageArea(){this.clearX=Math.max(this.imgW,this.ctx.canvas.width),this.clearY=Math.max(this.imgH,this.ctx.canvas.height)}resetImgX(){this.imgW>this.ctx.canvas.width&&(this.imgX=this.ctx.canvas.width-this.imgW)}init(){this.img.onload=()=>{this.imgW=this.img.width*this.scale,this.imgH=this.img.height*this.scale,this.getClearImageArea(),this.resetImgX(),setInterval(this.draw.bind(this),this.speed)}}draw(){if(this.ctx.clearRect(0,0,this.clearX,this.clearY),this.imgW>this.ctx.canvas.width)this.imgX>this.ctx.canvas.width&&this.resetImgX(),this.ctx.drawImage(this.img,this.imgX-this.imgW+1,this.imgY,this.imgW,this.imgH);else throw Error("need image width lager than canvas");this.ctx.drawImage(this.img,this.imgX,this.imgY,this.imgW,this.imgH),this.imgX+=this.moveX}}class oA{constructor(t,n=100,o=100,l=6,r=2,a=25,i="red"){Ye(this,"raf");Ye(this,"running");this.ctx=t,this.x=n,this.y=o,this.vx=l,this.vy=r,this.radius=a,this.color=i,this.init()}init(){this.drawBall(),this.ctx.canvas.addEventListener("mouseout",()=>{window.cancelAnimationFrame(this.raf),this.running=!1}),this.ctx.canvas.addEventListener("mousemove",t=>{this.running||(this.clear(),this.x=t.offsetX,this.y=t.offsetY,this.drawBall())}),this.ctx.canvas.addEventListener("click",()=>{this.running||(this.draw(),this.running=!0)})}collisionDetection(){const t=this.y+this.vy,n=this.x+this.vx;(t>this.ctx.canvas.height||t<0)&&(this.vy=-this.vy),(n>this.ctx.canvas.width||n<0)&&(this.vx=-this.vx)}drawBall(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!0),this.ctx.closePath(),this.ctx.fillStyle=this.color,this.ctx.fill()}clear(){this.ctx.fillStyle="rgba(255,255,255,0.3)",this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}draw(){this.clear(),this.drawBall(),this.collisionDetection(),this.x+=this.vx,this.y+=this.vy,this.raf=window.requestAnimationFrame(this.draw.bind(this))}}const dd={r:0,g:0,b:0,a:0};function bl(e){return`rgba(${e.r},${e.g},${e.b},${e.a.toFixed(2)})`}class lA{constructor(t,n,o,l){Ye(this,"img",new Image);Ye(this,"hoverRGBA");Ye(this,"selectedRGBA");this.ctx=t,this.imgSrc=n,this.hoverCallBack=o,this.selectedCallBack=l,this.img.src=n,this.init()}init(){this.img.onload=()=>{this.ctx.drawImage(this.img,0,0),this.ctx.canvas.addEventListener("mousemove",cd(t=>{var n;this.hoverRGBA=this.pick(t),(n=this.hoverCallBack)==null||n.call(this,this.hoverRGBA)})),this.ctx.canvas.addEventListener("click",cd(t=>{var n;this.selectedRGBA=this.pick(t),(n=this.selectedCallBack)==null||n.call(this,this.selectedRGBA)}))}}pick(t){const n=Math.round(t.offsetX),o=Math.round(t.offsetY),r=this.ctx.getImageData(n,o,1,1).data;return{r:r[0],g:r[1],b:r[2],a:r[3]/255}}}var Wi=(e=>(e.original="original",e.invert="invert",e.grayscale="grayscale",e))(Wi||{});const rA=Object.values(Wi);class aA{constructor(t,n){Ye(this,"img",new Image);this.ctx=t,this.imgSrc=n,this.img.src=n,this.init()}init(){this.img.onload=()=>{this.original()}}original(){this.ctx.drawImage(this.img,0,0)}grayscale(){this.ctx.drawImage(this.img,0,0);const t=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height),n=t.data;for(let o=0;o<n.length;o+=4){const l=(n[o]+n[o+1]+n[o+2])/3;n[o]=l,n[o+1]=l,n[o+2]=l}this.ctx.putImageData(t,0,0)}invert(){this.ctx.drawImage(this.img,0,0);const t=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height),n=t.data;for(let o=0;o<n.length;o+=4)n[o]=255-n[o],n[o+1]=255-n[o+1],n[o+2]=255-n[o+2];this.ctx.putImageData(t,0,0)}convert(t){switch(t){case"invert":this.invert();break;case"grayscale":this.grayscale();break;default:this.original();break}}}class iA{constructor(t){Ye(this,"ctx");Ye(this,"isDrawing",!1);this.selector=t,this.ctx=this.getContext(t),this.init()}getContext(t){return document.querySelector(t).getContext("2d")}init(){this.ctx.fillStyle="darkgray",this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#fff";const t="刮刮卡",n=this.ctx.measureText(t);this.ctx.fillText(t,this.ctx.canvas.width/2-n.width/2,this.ctx.canvas.height/2),this.ctx.canvas.addEventListener("mousedown",this.startDrawing.bind(this)),this.ctx.canvas.addEventListener("mouseup",this.endDrawing.bind(this)),this.ctx.canvas.addEventListener("mousemove",this.drawing.bind(this))}startDrawing(){this.isDrawing=!0}endDrawing(){this.isDrawing=!1}drawing(t){if(!this.isDrawing)return;const n=t.offsetX,o=t.offsetY;this.ctx.globalCompositeOperation="destination-out",this.ctx.beginPath(),this.ctx.arc(n,o,10,0,2*Math.PI),this.ctx.fill()}}const cA=X({__name:"Demo002Rect1",props:{width:{type:Number,required:!1,default:900},height:{type:Number,required:!1,default:450}},setup(e){const t=e;E(P);const n=F();return We(()=>{const l=n.value.canvasDom.getContext("2d");Bk(l)}),(o,l)=>{const r=be;return g(),V(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])}}}),uA=I(cA,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002Rect1.vue"]]),dA=s("h3",null,"绘制矩形",-1),pA=s("p",null,"canvas 提供了三个方法绘制矩形：",-1),fA=s("li",null,[s("code",null,"fillRect(x, y, width, height)"),y(" 绘制一个填充的矩形")],-1),hA=s("li",null,[s("code",null,"strokeRect(x, y, width, height)"),y(" 绘制一个矩形的边框")],-1),mA=s("li",null,[s("code",null,"clearRect(x, y, width, height)"),y(" 清除指定矩形区域，让清除部分完全透明")],-1),vA=s("code",null,"rect(x, y, width, height)",-1),gA={__name:"10",setup(e){const t={level:2,srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=kh,r=uA,a=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[dA,pA,s("ol",null,[fA,hA,mA,s("li",null,[vA,y(" 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到"),k(l,{to:"12"},{default:j(()=>[y("路径")]),_:1}),y("中的)")])]),k(a,null,{default:j(()=>[k(r,{width:200,height:200})]),_:1})]),_:1},16)}}},yA=I(gA,[["__file","/@slidev/slides/10.md"]]),_A=X({__name:"Demo002PathTriangle",props:{width:{type:Number,required:!1,default:900},height:{type:Number,required:!1,default:450}},setup(e){const t=e;E(P);const n=F();return We(()=>{const l=n.value.canvasDom.getContext("2d");Ek(l)}),(o,l)=>{const r=be;return g(),V(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])}}}),bA=I(_A,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002PathTriangle.vue"]]),wA=s("h3",null,"绘制路径",-1),DA=s("p",null,"图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。",-1),xA=s("p",null,"使用路径绘制的步骤",-1),CA=s("ol",null,[s("li",null,[y("首先，你需要创建路径起始点。 "),s("code",null,"beginPath()")]),s("li",null,"然后你使用画图命令去画出路径。"),s("li",null,[y("之后你把路径封闭。 "),s("code",null,"closePath()")]),s("li",null,[y("一旦路径生成，你就能通过描边（"),s("code",null,"stroke"),y("）或填充路径区域("),s("code",null,"fill"),y(")来渲染图形。")])],-1),kA=s("p",null,[s("code",null,"lineTo(x, y)"),y(" 绘制一条从当前位置到指定 x 以及 y 位置的直线。")],-1),AA={__name:"11",setup(e){const t={level:2,srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=bA,r=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[wA,DA,xA,CA,kA,k(r,null,{default:j(()=>[k(l,{width:200,height:100})]),_:1})]),_:1},16)}}},SA=I(AA,[["__file","/@slidev/slides/11.md"]]),BA=X({__name:"Demo002ArcTo",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return We(()=>{const l=n.value.canvasDom.getContext("2d");Tk(l)}),(o,l)=>{const r=be;return g(),V(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])}}}),EA=I(BA,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002ArcTo.vue"]]),$A=X({__name:"Demo002Smile",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:150}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),V(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S($k)},null,8,["width","height","draw-fn"])}}}),TA=I($A,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002Smile.vue"]]),PA=s("h3",null,"圆弧",-1),IA=s("p",null,[s("code",null,"moveTo(x, y)"),y(" 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.")],-1),OA=s("p",null,[s("code",null,"arc(x, y, radius, startAngle, endAngle, anticlockwise)"),y(" 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针")],-1),jA=s("p",null,[s("code",null,"arcTo(x1, y1, x2, y2, radius)"),y(" 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)")],-1),MA={__name:"12",setup(e){const t={srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=TA,r=ft,a=EA;return g(),V(pe,le(oe(t)),{default:j(()=>[PA,IA,OA,jA,ye(" `ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)` 椭圆绘制还是略了 "),k(r,null,{default:j(()=>[k(l,{class:"inline-block"})]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"inline-block ml-10"})]),_:1})]),_:1},16)}}},LA=I(MA,[["__file","/@slidev/slides/12.md"]]),RA=s("div",{class:"text-[12px]"},"三次贝塞尔曲线 心形",-1),FA=X({__name:"Demo002BezierCurveTo",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:150}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",null,[RA,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Ik)},null,8,["width","height","draw-fn"])])}}}),NA=I(FA,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002BezierCurveTo.vue"]]),HA=s("div",{class:"text-[12px]"},"二次贝塞尔曲线 对话气泡",-1),qA=X({__name:"Demo002QuadraticCurveTo",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:150}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",null,[HA,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Pk)},null,8,["width","height","draw-fn"])])}}}),VA=I(qA,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002QuadraticCurveTo.vue"]]),zA=s("h3",null,"贝塞尔曲线",-1),WA=s("p",null,[s("a",{href:"https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A",target:"_blank",rel:"noopener"},"贝塞尔曲线"),y(" 可以用来绘制复杂有规律的图形。")],-1),UA=s("p",null,[s("code",null,"quadraticCurveTo(cp1x, cp1y, x, y)"),y(" 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。")],-1),GA=s("p",null,[s("code",null,"bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)"),y(" 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。")],-1),KA=s("p",null,[s("a",{href:"http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html",target:"_blank",rel:"noopener"},"二次贝塞尔曲线 示例"),s("br"),s("a",{href:"http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html",target:"_blank",rel:"noopener"},"三次贝塞尔曲线 示例")],-1),YA={__name:"13",setup(e){const t={srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=VA,r=ft,a=NA;return g(),V(pe,le(oe(t)),{default:j(()=>[zA,WA,UA,GA,KA,k(r,null,{default:j(()=>[k(l,{class:"inline-block ml-10"})]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"inline-block ml-5"})]),_:1})]),_:1},16)}}},XA=I(YA,[["__file","/@slidev/slides/13.md"]]),ZA=s("div",{class:"text-[12px]"},"Path2D例子",-1),JA=X({__name:"Demo002Path2D",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:150}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",null,[ZA,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Ok)},null,8,["width","height","draw-fn"])])}}}),QA=I(JA,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002Path2D.vue"]]),eS=X({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const t=e;return E(P),(n,o)=>(g(),A("div",{class:Le(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[s("div",{class:Le(["col-left",t.class])},[bt(n.$slots,"default")],2),s("div",{class:Le(["col-right",t.class])},[bt(n.$slots,"right")],2)],2))}}),Ui=I(eS,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/layouts/two-cols.vue"]]),tS=s("h2",null,"Path2D 对象",-1),nS=s("blockquote",null,[s("p",null,[y("这是一个实验性技术，使用前先 "),s("a",{href:"https://caniuse.com/?search=Path2D",target:"_blank",rel:"noopener"},"查看兼容性")])],-1),sS=s("p",null,"之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。 使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性",-1),oS=s("p",null,[s("code",null,"Path2D()"),y(" 会返回一个新初始化的 Path2D 对象")],-1),lS=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"();")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"path"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#758575"}},"//创建一个路径的拷贝")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"d"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#758575"}},"// 传入svg path")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"();")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"path"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#A0ADA0"}},"//创建一个路径的拷贝")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"d"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#A0ADA0"}},"// 传入svg path")])])])],-1),rS=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"rectangle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"rectangle"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"rect"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"50"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"50"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"circle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"circle"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"moveTo"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"125"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"35"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"circle"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"arc"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"100"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"35"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"25"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#D4976C"}},"PI"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"stroke"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"rectangle"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"fill"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"circle"),s("span",{style:{color:"#858585"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"rectangle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"rectangle"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"rect"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"50"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"50"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"circle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"()")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"circle"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"moveTo"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"125"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"35"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"circle"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"arc"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"100"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"35"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"25"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#A65E2B"}},"PI"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"stroke"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"rectangle"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"fill"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"circle"),s("span",{style:{color:"#8E8F8B"}},")")])])])],-1),aS=s("p",null,[s("code",null,"void path.addPath(path [, transform])"),y(" 可以组合两个路径，transform是可选参数，是一个变换矩阵"),s("code",null,"DOMMatrix")],-1),iS={__name:"14",setup(e){const t={level:2,layout:"two-cols",srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=lt,r=ft,a=QA;return g(),V(Ui,le(oe(t)),{right:j(i=>[k(r,null,{default:j(()=>[k(a)]),_:1}),k(r,null,{default:j(()=>[aS]),_:1})]),default:j(()=>[tS,nS,sS,oS,k(l,ze({},{ranges:[""]}),{default:j(()=>[lS]),_:1},16),k(r,null,{default:j(()=>[k(l,ze({},{ranges:[""]}),{default:j(()=>[rS]),_:1},16)]),_:1})]),_:1},16)}}},cS=I(iS,[["__file","/@slidev/slides/14.md"]]),uS=s("div",{class:"text-[12px]"},"Path2D例子",-1),dS=X({__name:"Demo002Path2DSvg",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:150}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",null,[uS,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(jk)},null,8,["width","height","draw-fn"])])}}}),pS=I(dS,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002Path2DSvg.vue"]]),fS=s("h3",null,"使用 SVG paths",-1),hS=s("p",null,"Path2D 可以使用 SVG path data 来初始化 canvas 上的路径",-1),mS=s("p",null,"这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)",-1),vS=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Path2D"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'M10 10 h 80 v 80 h -80 Z'"),s("span",{style:{color:"#858585"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Path2D"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'M10 10 h 80 v 80 h -80 Z'"),s("span",{style:{color:"#8E8F8B"}},")")])])])],-1),gS={__name:"15",setup(e){const t={hideInToc:!0,srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=lt,r=pS,a=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[fS,hS,mS,k(l,ze({},{ranges:[""]}),{default:j(()=>[vS]),_:1},16),k(a,null,{default:j(()=>[k(r)]),_:1})]),_:1},16)}}},yS=I(gS,[["__file","/@slidev/slides/15.md"]]);function _n(e,t,n){const{startX:o=0,startY:l=0}=n||{};e.save(),e.translate(o,l),t(e),e.restore()}const _S=X({__name:"Demo002Shape",setup(e){E(P);const t=F();function n(f){f.fillRect(25,25,100,100),f.clearRect(45,45,60,60),f.strokeRect(50,50,50,50)}function o(f,m){const{startX:_=0,startY:D=0}=m||{};f.beginPath(),f.moveTo(_+75,D+50),f.lineTo(_+100,D+75),f.lineTo(_+100,D+25),f.fill()}function l(f,m){const{startX:_=0,startY:D=0}=m||{};f.save(),f.translate(_,D),f.beginPath(),f.arc(75,75,50,0,Math.PI*2,!0),f.moveTo(110,75),f.arc(75,75,35,0,Math.PI,!1),f.moveTo(65,65),f.arc(60,65,5,0,Math.PI*2,!0),f.moveTo(95,65),f.arc(90,65,5,0,Math.PI*2,!0),f.stroke(),f.restore()}function r(f){f.beginPath(),f.moveTo(25,25),f.lineTo(105,25),f.lineTo(25,105),f.fill(),f.beginPath(),f.moveTo(125,125),f.lineTo(125,45),f.lineTo(45,125),f.closePath(),f.stroke()}function a(f){for(let m=0;m<4;m++)for(let _=0;_<3;_++){f.beginPath();let D=25+_*50,x=25+m*50,C=20,b=0,B=Math.PI+Math.PI*_/2,$=m%2!=0;f.arc(D,x,C,b,B,$),m>1?f.fill():f.stroke()}}function i(f){f.beginPath(),f.moveTo(75,25),f.quadraticCurveTo(25,25,25,62.5),f.quadraticCurveTo(25,100,50,100),f.quadraticCurveTo(50,120,30,125),f.quadraticCurveTo(60,120,65,100),f.quadraticCurveTo(125,100,125,62.5),f.quadraticCurveTo(125,25,75,25),f.stroke()}function c(f){f.beginPath(),f.moveTo(75,40),f.bezierCurveTo(75,37,70,25,50,25),f.bezierCurveTo(20,25,20,62.5,20,62.5),f.bezierCurveTo(20,80,40,102,75,120),f.bezierCurveTo(110,102,130,80,130,62.5),f.bezierCurveTo(130,62.5,130,25,100,25),f.bezierCurveTo(85,25,75,37,75,40),f.fill()}function u(f){d(f,12,12,150,150,15),d(f,19,19,150,150,9),d(f,53,53,49,33,10),d(f,53,119,49,16,6),d(f,135,53,49,33,10),d(f,135,119,25,49,10),f.beginPath(),f.arc(37,37,13,Math.PI/7,-Math.PI/7,!1),f.lineTo(31,37),f.fill();for(var m=0;m<8;m++)f.fillRect(51+m*16,35,4,4);for(m=0;m<6;m++)f.fillRect(115,51+m*16,4,4);for(m=0;m<8;m++)f.fillRect(51+m*16,99,4,4);f.beginPath(),f.moveTo(83,116),f.lineTo(83,102),f.bezierCurveTo(83,94,89,88,97,88),f.bezierCurveTo(105,88,111,94,111,102),f.lineTo(111,116),f.lineTo(106.333,111.333),f.lineTo(101.666,116),f.lineTo(97,111.333),f.lineTo(92.333,116),f.lineTo(87.666,111.333),f.lineTo(83,116),f.fill(),f.fillStyle="white",f.beginPath(),f.moveTo(91,96),f.bezierCurveTo(88,96,87,99,87,101),f.bezierCurveTo(87,103,88,106,91,106),f.bezierCurveTo(94,106,95,103,95,101),f.bezierCurveTo(95,99,94,96,91,96),f.moveTo(103,96),f.bezierCurveTo(100,96,99,99,99,101),f.bezierCurveTo(99,103,100,106,103,106),f.bezierCurveTo(106,106,107,103,107,101),f.bezierCurveTo(107,99,106,96,103,96),f.fill(),f.fillStyle="black",f.beginPath(),f.arc(101,102,2,0,Math.PI*2,!0),f.fill(),f.beginPath(),f.arc(89,102,2,0,Math.PI*2,!0),f.fill()}function d(f,m,_,D,x,C){f.beginPath(),f.moveTo(m,_+C),f.lineTo(m,_+x-C),f.quadraticCurveTo(m,_+x,m+C,_+x),f.lineTo(m+D-C,_+x),f.quadraticCurveTo(m+D,_+x,m+D,_+x-C),f.lineTo(m+D,_+C),f.quadraticCurveTo(m+D,_,m+D-C,_),f.lineTo(m+C,_),f.quadraticCurveTo(m,_,m,_+C),f.stroke()}function p(f){const m=new Path2D;m.rect(10,10,50,50);const _=new Path2D;_.moveTo(125,35),_.arc(100,35,25,0,2*Math.PI),f.stroke(m),f.fill(_)}function h(f){const m=new Path2D("M10 10 h 80 v 80 h -80 Z");f.fill(m)}return We(()=>{const m=t.value.canvasDom.getContext("2d");n(m),o(m,{startX:0,startY:150}),l(m,{startX:0,startY:250}),_n(m,r,{startX:250}),_n(m,a,{startX:250,startY:200}),_n(m,i,{startX:450}),_n(m,c,{startX:450,startY:200}),_n(m,u,{startX:650}),_n(m,p,{startX:650,startY:200}),_n(m,h,{startX:650,startY:300})}),(f,m)=>{const _=be;return g(),V(_,{ref_key:"canvasBoardRef",ref:t},null,512)}}}),bS=I(_S,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo002Shape.vue"]]),wS={__name:"16",setup(e){const t={hideInToc:!0,srcSequence:"./pages/01shape.md"};return E(P),(n,o)=>{const l=bS;return g(),V(pe,le(oe(t)),{default:j(()=>[k(l,{class:"inline-block"})]),_:1},16)}}},DS=I(wS,[["__file","/@slidev/slides/16.md"]]),xS={__name:"17",setup(e){const t={srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),null,16))}},CS=I(xS,[["__file","/@slidev/slides/17.md"]]),kS={class:"slidev-layout center h-full grid place-content-center"},AS={class:"my-auto"},SS={__name:"center",setup(e){return E(P),(t,n)=>(g(),A("div",kS,[s("div",AS,[bt(t.$slots,"default")])]))}},Ts=I(SS,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/layouts/center.vue"]]),BS=s("h1",null,"07.使用样式和颜色",-1),ES={__name:"18",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[BS]),_:1},16))}},$S=I(ES,[["__file","/@slidev/slides/18.md"]]),TS={class:"inline-block"},PS=s("div",{class:"text-[12px]"},"StrokeStyle 例子",-1),IS=X({__name:"Demo003StrokeStyle",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",TS,[PS,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Lk)},null,8,["width","height","draw-fn"])])}}}),OS=I(IS,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003StrokeStyle.vue"]]),jS={class:"inline-block"},MS=s("div",{class:"text-[12px]"},"fillStyle 例子",-1),LS=X({__name:"Demo003FillStyle",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",jS,[MS,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Mk)},null,8,["width","height","draw-fn"])])}}}),RS=I(LS,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003FillStyle.vue"]]),FS=s("h3",null,"色彩 Colors",-1),NS=s("p",null,"有两种方法给图形上色",-1),HS=s("ol",null,[s("li",null,[s("code",null,"fillStyle = color"),y(" 设置图形的填充颜色")]),s("li",null,[s("code",null,"strokeStyle = color"),y(" 设置图形轮廓的颜色")])],-1),qS=s("p",null,"color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。",-1),VS={__name:"19",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=RS,r=ft,a=OS;return g(),V(pe,le(oe(t)),{default:j(()=>[FS,NS,HS,qS,k(r,null,{default:j(()=>[k(l)]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"ml-10"})]),_:1})]),_:1},16)}}},zS=I(VS,[["__file","/@slidev/slides/19.md"]]),WS={class:"inline-block"},US=s("div",{class:"text-[12px]"},"rgba 例子",-1),GS=X({__name:"Demo003TransparencyRgba",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",WS,[US,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Fk)},null,8,["width","height","draw-fn"])])}}}),KS=I(GS,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003TransparencyRgba.vue"]]),YS={class:"inline-block"},XS=s("div",{class:"text-[12px]"},"global alpha 例子",-1),ZS=X({__name:"Demo003Transparency",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",YS,[XS,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Rk)},null,8,["width","height","draw-fn"])])}}}),JS=I(ZS,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003Transparency.vue"]]),QS=s("h3",null,"透明度 Transparency",-1),eB=s("p",null,"除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。",-1),tB=s("ol",null,[s("li",null,[s("p",null,"globalAlpha = transparencyValue 这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。")]),s("li",null,[s("p",null,"strokeStyle 和 fillStyle 接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色")])],-1),nB=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 指定透明颜色，用于描边和填充样式")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"strokeStyle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"rgba(255,0,0,0.5)"'),s("span",{style:{color:"#858585"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"fillStyle"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"rgba(255,0,0,0.5)"'),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 指定透明颜色，用于描边和填充样式")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"strokeStyle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"rgba(255,0,0,0.5)"'),s("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"fillStyle"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"rgba(255,0,0,0.5)"'),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),sB={__name:"20",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=lt,r=JS,a=ft,i=KS;return g(),V(pe,le(oe(t)),{default:j(()=>[QS,eB,tB,k(l,ze({},{ranges:[""]}),{default:j(()=>[nB]),_:1},16),k(a,null,{default:j(()=>[k(r)]),_:1}),k(a,null,{default:j(()=>[k(i,{class:"ml-10"})]),_:1})]),_:1},16)}}},oB=I(sB,[["__file","/@slidev/slides/20.md"]]),lB={class:"inline-block"},rB=s("div",{class:"text-[12px]"},"lineJoin 例子",-1),aB=X({__name:"Demo003LineJoin",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",lB,[rB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(qk)},null,8,["width","height","draw-fn"])])}}}),iB=I(aB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003LineJoin.vue"]]),cB={class:"inline-block"},uB=s("div",{class:"text-[12px]"},"lineCap 例子",-1),dB=X({__name:"Demo003LineCap",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",cB,[uB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Hk)},null,8,["width","height","draw-fn"])])}}}),pB=I(dB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003LineCap.vue"]]),fB={class:"inline-block"},hB=s("div",{class:"text-[12px]"},"lineWidth 例子",-1),mB=X({__name:"Demo003LineWidth",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",fB,[hB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Nk)},null,8,["width","height","draw-fn"])])}}}),vB=I(mB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003LineWidth.vue"]]),gB=s("h3",null,"线型 Line Style",-1),yB=s("ol",null,[s("li",null,"lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。"),s("li",null,"lineCap = type 设置线条末端样式。"),s("li",null,"lineJoin = type 设定线条与线条间接合处的样式。"),s("li",null,"miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。"),s("li",null,"getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。"),s("li",null,"setLineDash(segments) 设置当前虚线样式。"),s("li",null,"lineDashOffset = value 设置虚线样式的起始偏移量。")],-1),_B={__name:"21",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=vB,r=ft,a=pB,i=iB;return g(),V(pe,le(oe(t)),{default:j(()=>[gB,yB,k(r,null,{default:j(()=>[k(l)]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"ml-10"})]),_:1}),k(r,null,{default:j(()=>[k(i,{class:"ml-10"})]),_:1})]),_:1},16)}}},bB=I(_B,[["__file","/@slidev/slides/21.md"]]),wB={class:"inline-block"},DB=s("div",{class:"text-[12px]"},"MiterLimit 例子",-1),xB={class:"flex justify-between w-[300px] pb-1"},CB=X({__name:"Demo003MiterLimit",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F(),o=F(10),l=()=>{ud(n.value.canvasDom.getContext("2d"),o.value)};return We(()=>{ud(n.value.canvasDom.getContext("2d"),o.value)}),(r,a)=>{const i=be;return g(),A("div",wB,[DB,s("div",xB,[Zo(s("input",{class:"rounded border border-black",type:"number","onUpdate:modelValue":a[0]||(a[0]=c=>o.value=c)},null,512),[[Oy,o.value]]),s("button",{class:"btn-primary",onClick:l},"重绘")]),k(i,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),kB=I(CB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003MiterLimit.vue"]]),AB=s("h3",null,"miterLimit",-1),SB=s("p",null,"之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。",-1),BB=s("p",null,[y("miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量"),s("strong",null,[y("线宽与此miterLimit属性值（HTML "),s("code",null,"<canvas>"),y("默认为 10.0）的乘积")]),s("br"),y(" 可以用三角函数算出miterLimit对应的限定角度")],-1),EB=s("ul",null,[s("li",null,"斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。"),s("li",null,"1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。")],-1),$B={__name:"22",setup(e){const t={hideInToc:!0,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=kB,r=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[AB,SB,BB,EB,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},TB=I($B,[["__file","/@slidev/slides/22.md"]]),PB={class:"inline-block"},IB=s("div",{class:"text-[12px]"},"setLineDash 参数例子",-1),OB=X({__name:"Demo003LineDash2",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",PB,[IB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(zk)},null,8,["width","height","draw-fn"])])}}}),jB=I(OB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003LineDash2.vue"]]),MB={class:"inline-block"},LB=s("div",{class:"text-[12px]"},"lineDash 例子",-1),RB=X({__name:"Demo003LineDash",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",MB,[LB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Vk)},null,8,["width","height","draw-fn"])])}}}),FB=I(RB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo003LineDash.vue"]]),NB=s("h3",null,"虚线",-1),HB=s("p",null,[y("用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。"),s("br"),y(" setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]"),s("br"),y(" lineDashOffset 属性设置起始偏移量。")],-1),qB={__name:"23",setup(e){const t={hideInToc:!0,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=FB,r=ft,a=jB;return g(),V(pe,le(oe(t)),{default:j(()=>[NB,HB,k(r,null,{default:j(()=>[k(l)]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"ml-10",width:300})]),_:1})]),_:1},16)}}},VB=I(qB,[["__file","/@slidev/slides/23.md"]]),zB=s("h2",null,"渐变 Gradients",-1),WB=s("p",null,"我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。",-1),UB=s("ol",null,[s("li",null,[s("code",null,"createLinearGradient(x1, y1, x2, y2)"),y(" 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)")]),s("li",null,[s("code",null,"createRadialGradient(x1, y1, r1, x2, y2, r2)"),y("创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。")])],-1),GB=s("p",null,[y("创建出 "),s("code",null,"canvasGradient"),y(" 对象后，我们就可以用 "),s("code",null,"addColorStop"),y(" 方法给它上色了。")],-1),KB=s("p",null,[s("code",null,"gradient.addColorStop(position, color)"),y(" 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。")],-1),YB={__name:"24",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[zB,WB,UB,GB,KB]),_:1},16))}},XB=I(YB,[["__file","/@slidev/slides/24.md"]]),ZB={class:"inline-block"},JB=s("div",{class:"text-[12px]"},"createRadialGradient 例子",-1),QB=X({__name:"Demo005RadialGradient",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",ZB,[JB,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Uk)},null,8,["width","height","draw-fn"])])}}}),e6=I(QB,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo005RadialGradient.vue"]]),t6={class:"inline-block"},n6=s("div",{class:"text-[12px]"},"createLinearGradient 例子",-1),s6=X({__name:"Demo005LinearGradient1",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",t6,[n6,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Wk)},null,8,["width","height","draw-fn"])])}}}),o6=I(s6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo005LinearGradient1.vue"]]),l6={__name:"25",setup(e){const t={srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=o6,r=ft,a=e6;return g(),V(pe,le(oe(t)),{default:j(()=>[k(r,null,{default:j(()=>[k(l)]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"ml-10"})]),_:1})]),_:1},16)}}},r6=I(l6,[["__file","/@slidev/slides/25.md"]]),a6="/my-slidevs/slidevs/learn-canvas/images/canvas_createpattern.png",i6=s("div",null,"Demo006Patterns",-1),c6=X({__name:"Demo006Patterns",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();function o(l){var r=new Image;r.src=a6,r.onload=function(){const a=l.createPattern(r,"repeat");l.fillStyle=a,l.fillRect(0,0,l.canvas.width,l.canvas.height)}}return(l,r)=>{const a=be;return g(),A("div",null,[i6,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":o},null,8,["width","height"])])}}}),u6=I(c6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo006Patterns.vue"]]),d6=s("h2",null,"图案样式 Patterns",-1),p6=s("p",null,[s("code",null,"createPattern(image, type)"),y(",该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一："),s("code",null,"repeat"),y("，"),s("code",null,"repeat-x"),y("，"),s("code",null,"repeat-y"),y(" 和 "),s("code",null,"no-repeat"),y("。")],-1),f6=s("p",null,"图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可",-1),h6={__name:"26",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=u6,r=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[d6,p6,f6,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},m6=I(h6,[["__file","/@slidev/slides/26.md"]]),v6=s("div",null,"Demo007Shadows",-1),g6=X({__name:"Demo007Shadows",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();function o(l){l.shadowOffsetX=2,l.shadowOffsetY=2,l.shadowBlur=2,l.shadowColor="rgba(0, 0, 0, 0.5)",l.font="20px Times New Roman",l.fillStyle="Black",l.fillText("Sample String",5,30)}return We(()=>{const r=n.value.canvasDom.getContext("2d");_n(r,o,{startX:10,startY:10})}),(l,r)=>{const a=be;return g(),A("div",null,[v6,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),y6=I(g6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo007Shadows.vue"]]),_6=s("h2",null,"阴影 Shadows",-1),b6=s("p",null,[s("code",null,"shadowOffsetX = float"),s("br"),s("code",null,"shadowOffsetY = float"),s("br"),y(" shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。")],-1),w6=s("p",null,[s("code",null,"shadowBlur = float"),y(" shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。"),s("br"),s("code",null,"shadowColor = color"),y(" shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。")],-1),D6={__name:"27",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=y6,r=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[_6,b6,w6,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},x6=I(D6,[["__file","/@slidev/slides/27.md"]]),C6=s("div",null,"Demo008WindingRule",-1),k6=X({__name:"Demo008WindingRule",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();function o(l){l.beginPath(),l.arc(50,50,30,0,Math.PI*2,!0),l.arc(50,50,15,0,Math.PI*2,!0),l.fill("evenodd")}return We(()=>{const r=n.value.canvasDom.getContext("2d");_n(r,o,{startX:10,startY:10})}),(l,r)=>{const a=be;return g(),A("div",null,[C6,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),A6=I(k6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo008WindingRule.vue"]]),S6=s("h2",null,"填充规则",-1),B6=s("p",null,"当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。 两个可能的值：",-1),E6=s("ul",null,[s("li",null,[s("code",null,"nonzero"),y(" 默认值")]),s("li",null,[s("code",null,"evenodd")])],-1),$6={__name:"28",setup(e){const t={level:2,srcSequence:"./pages/02color-style.md"};return E(P),(n,o)=>{const l=A6,r=ft;return g(),V(pe,le(oe(t)),{default:j(()=>[S6,B6,E6,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},T6=I($6,[["__file","/@slidev/slides/28.md"]]),P6=s("h1",null,"08.绘制文本",-1),I6={__name:"29",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/03text.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[P6]),_:1},16))}},O6=I(I6,[["__file","/@slidev/slides/29.md"]]),j6={class:"inline-block"},M6=s("div",{class:"text-[12px]"},"strokeText 例子",-1),L6=X({__name:"Demo009StrokeText",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",j6,[M6,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Kk)},null,8,["width","height","draw-fn"])])}}}),R6=I(L6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo009StrokeText.vue"]]),F6={class:"inline-block"},N6=s("div",{class:"text-[12px]"},"fillText 例子",-1),H6=X({__name:"Demo009FillText",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",F6,[N6,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Gk)},null,8,["width","height","draw-fn"])])}}}),q6=I(H6,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo009FillText.vue"]]),V6=s("h2",null,"绘制文本",-1),z6=s("p",null,"canvas 提供了两种方法来渲染文本：",-1),W6=s("ol",null,[s("li",null,[s("code",null,"·fillText(text, x, y [, maxWidth])"),y(" 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。")]),s("li",null,[s("code",null,"strokeText(text, x, y [, maxWidth])"),y(" 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。")])],-1),U6={__name:"30",setup(e){const t={level:2,srcSequence:"./pages/03text.md"};return E(P),(n,o)=>{const l=q6,r=ft,a=R6;return g(),V(pe,le(oe(t)),{default:j(()=>[V6,z6,W6,k(r,null,{default:j(()=>[k(l)]),_:1}),k(r,null,{default:j(()=>[k(a,{class:"ml-10"})]),_:1})]),_:1},16)}}},G6=I(U6,[["__file","/@slidev/slides/30.md"]]),K6=s("h2",null,"文本样式",-1),Y6=s("p",null,[s("code",null,"font = value"),y(" 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。 "),s("code",null,"textAlign = value"),y(" 文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。 "),s("code",null,"textBaseline = value"),y(" 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。 "),s("code",null,"direction = value"),y(" 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。")],-1),X6={__name:"31",setup(e){const t={level:2,srcSequence:"./pages/03text.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[K6,Y6]),_:1},16))}},Z6=I(X6,[["__file","/@slidev/slides/31.md"]]),J6=s("h2",null,"预测文本宽度",-1),Q6=s("p",null,[s("code",null,"measureText()"),y(" 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。")],-1),e4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"draw"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ctx"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"document"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getElementById"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"canvas"'),s("span",{style:{color:"#858585"}},")."),s("span",{style:{color:"#A1B567"}},"getContext"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"2d"'),s("span",{style:{color:"#858585"}},");")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"measureText"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"foo"'),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// TextMetrics object")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 16;")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"draw"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ctx"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"document"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getElementById"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"canvas"'),s("span",{style:{color:"#8E8F8B"}},")."),s("span",{style:{color:"#6C7834"}},"getContext"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"2d"'),s("span",{style:{color:"#8E8F8B"}},");")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"measureText"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"foo"'),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// TextMetrics object")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 16;")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),t4={__name:"32",setup(e){const t={level:2,srcSequence:"./pages/03text.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[J6,Q6,k(l,ze({},{ranges:[""]}),{default:j(()=>[e4]),_:1},16)]),_:1},16)}}},n4=I(t4,[["__file","/@slidev/slides/32.md"]]),s4=s("h1",null,"09.使用图片",-1),o4={__name:"33",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/04image.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[s4]),_:1},16))}},l4=I(o4,[["__file","/@slidev/slides/33.md"]]),r4=s("h2",null,"获取需要绘制的图片",-1),a4=s("p",null,"canvas的API可以使用下面这些类型的一种作为图片的源",-1),i4=s("p",null,[s("strong",null,[s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement",target:"_blank",rel:"noopener"},[s("code",null,"HTMLImageElement")])])],-1),c4=s("p",null,[y("这些图片是由 "),s("code",null,"Image()"),y(" 函数构造出来的，或者任何的 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img",target:"_blank",rel:"noopener"},[s("code",null,"<img>")]),y(" 元素")],-1),u4=s("p",null,[s("strong",null,[s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement",target:"_blank",rel:"noopener"},[s("code",null,"HTMLVideoElement")])])],-1),d4=s("p",null,[y("用一个 HTML 的 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video",target:"_blank",rel:"noopener"},[s("code",null,"<video>")]),y("元素作为你的图片源，可以从视频中抓取当前帧作为一个图像")],-1),p4=s("p",null,[s("strong",null,[s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement",target:"_blank",rel:"noopener"},[s("code",null,"HTMLCanvasElement")])])],-1),f4=s("p",null,[y("可以使用另一个 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas",target:"_blank",rel:"noopener"},[s("code",null,"<canvas>")]),y(" 元素作为你的图片源。")],-1),h4=s("p",null,[s("strong",null,[s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap",target:"_blank",rel:"noopener"},[s("code",null,"ImageBitmap")])])],-1),m4=s("p",null,"这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。",-1),v4=s("p",null,[y("这些源统一由 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D",target:"_blank",rel:"noopener"},[s("code",null,"CanvasImageSource")]),y("类型来引用。")],-1),g4={__name:"34",setup(e){const t={level:2,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[r4,a4,i4,c4,u4,d4,p4,f4,h4,m4,v4]),_:1},16))}},y4=I(g4,[["__file","/@slidev/slides/34.md"]]),_4=s("h2",null,"绘制图片",-1),b4=s("p",null,"一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。",-1),w4=s("p",null,[s("code",null,"drawImage(image, x, y)"),y(" 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。")],-1),D4=s("p",null,"下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。",-1),x4={__name:"35",setup(e){const t={level:2,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>{const l=ks("Demo010DrawImage"),r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[_4,b4,w4,D4,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},C4=I(x4,[["__file","/@slidev/slides/35.md"]]),k4="/my-slidevs/slidevs/learn-canvas/images/canvas_backdrop.png",A4=X({__name:"Demo010DrawImageScale",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();function o(l){const r=new Image;r.onload=function(){for(let a=0;a<4;a++)for(let i=0;i<3;i++)l.drawImage(r,i*50,a*38,50,38)},r.src=k4}return(l,r)=>{const a=be;return g(),V(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":o},null,8,["width","height"])}}}),S4=I(A4,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo010DrawImageScale.vue"]]),B4=s("h2",null,"缩放",-1),E4=s("p",null,[y("drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。 "),s("code",null,"drawImage(image, x, y, width, height)"),y(" 这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小")],-1),$4=s("p",null,"下面是用一张图片缩放后在canvas中平铺的例子",-1),T4={__name:"36",setup(e){const t={level:2,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>{const l=S4,r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[B4,E4,$4,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},P4=I(T4,[["__file","/@slidev/slides/36.md"]]),I4="/my-slidevs/slidevs/learn-canvas/images/canvas_drawimage.jpg",O4=s("h2",null,"切片 Slicing",-1),j4=s("p",null,"drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。",-1),M4=s("p",null,[s("code",null,"drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)"),y(" 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。")],-1),L4=s("p",null,[s("img",{src:I4,alt:"drawImage slicing"})],-1),R4={__name:"37",setup(e){const t={level:2,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[O4,j4,M4,L4]),_:1},16))}},F4=I(R4,[["__file","/@slidev/slides/37.md"]]),N4="/my-slidevs/slidevs/learn-canvas/images/canvas_picture_frame.png",Gi="/my-slidevs/slidevs/learn-canvas/images/rhino.jpg",H4=["src"],q4=["src"],V4=s("div",null,"裁剪犀牛头部，放到相框里",-1),z4=X({__name:"Demo010DrawImageSlice",props:{width:{type:Number,required:!1,default:200},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();function o(l){const r=document.getElementById("source"),a=document.getElementById("frame");l.drawImage(r,33,71,104,124,21,20,87,104),l.drawImage(a,0,0)}return We(()=>{const l=n.value.canvasDom.getContext("2d");setTimeout(()=>{o(l)},2e3)}),(l,r)=>{const a=be;return g(),A("div",null,[s("div",null,[s("img",{class:"inline-block",id:"source",src:S(Gi),width:"300",height:"227"},null,8,H4),s("img",{class:"inline-block",id:"frame",src:S(N4),width:"132",height:"150"},null,8,q4)]),V4,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),W4=I(z4,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo010DrawImageSlice.vue"]]),U4={__name:"38",setup(e){const t={hideInToc:!0,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>{const l=W4;return g(),V(pe,le(oe(t)),{default:j(()=>[k(l,{class:"inline-block mt-10"})]),_:1},16)}}},G4=I(U4,[["__file","/@slidev/slides/38.md"]]),K4=s("h2",null,"控制图像的缩放行为",-1),Y4=s("p",null,"过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：",-1),X4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"mozImageSmoothingEnabled"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"webkitImageSmoothingEnabled"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"msImageSmoothingEnabled"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"imageSmoothingEnabled"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"mozImageSmoothingEnabled"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"webkitImageSmoothingEnabled"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"msImageSmoothingEnabled"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},";")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"imageSmoothingEnabled"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Z4={__name:"39",setup(e){const t={level:2,srcSequence:"./pages/04image.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[K4,Y4,k(l,ze({},{ranges:[""]}),{default:j(()=>[X4]),_:1},16)]),_:1},16)}}},J4=I(Z4,[["__file","/@slidev/slides/39.md"]]),Q4=s("h1",null,"10.变形 Transformations",-1),eE={__name:"40",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[Q4]),_:1},16))}},tE=I(eE,[["__file","/@slidev/slides/40.md"]]),nE=s("h2",null,"状态的保存和恢复",-1),sE=s("p",null,[s("code",null,"save()"),y(" 保存画布 (canvas) 的所有状态"),s("br"),s("code",null,"restore()"),y(" 恢复上一个保存的状态"),s("br"),y(" save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。")],-1),oE=s("p",null,"Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：",-1),lE=s("ul",null,[s("li",null,"当前应用的变形（即移动，旋转和缩放）"),s("li",null,"以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled"),s("li",null,"当前的裁切路径（clipping path）")],-1),rE=s("p",null,"你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。",-1),aE={__name:"41",setup(e){const t={level:2,srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[nE,sE,oE,lE,rE]),_:1},16))}},iE=I(aE,[["__file","/@slidev/slides/41.md"]]),cE={class:"inline-block"},uE=s("div",{class:"text-[12px]"},"Demo011SaveRestore",-1),dE=X({__name:"Demo011SaveRestore",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",cE,[uE,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Yk)},null,8,["width","height","draw-fn"])])}}}),pE=I(dE,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo011SaveRestore.vue"]]),fE=s("p",null,"下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。",-1),hE={__name:"42",setup(e){const t={srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>{const l=pE;return g(),V(pe,le(oe(t)),{default:j(()=>[fE,k(l)]),_:1},16)}}},mE=I(hE,[["__file","/@slidev/slides/42.md"]]),vE={class:"inline-block"},gE=s("div",{class:"text-[12px]"},"Demo012Translate",-1),yE=X({__name:"Demo012Translate",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",vE,[gE,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Xk)},null,8,["width","height","draw-fn"])])}}}),_E=I(yE,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo012Translate.vue"]]),bE="/my-slidevs/slidevs/learn-canvas/images/canvas_grid_translate.png",wE=s("h2",null,"移动 Translating",-1),DE=s("p",null,[s("code",null,"translate(x, y)"),y(" translate方法接受两个参数。x是左右偏移量，y 是上下偏移量")],-1),xE=s("p",null,[s("img",{src:bE,alt:"canvas_grid_translate"})],-1),CE={__name:"43",setup(e){const t={level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>{const l=_E,r=fn;return g(),V(Ui,le(oe(t)),{right:j(a=>[k(r,null,{default:j(()=>[k(l)]),_:1})]),default:j(()=>[wE,DE,xE]),_:1},16)}}},kE=I(CE,[["__file","/@slidev/slides/43.md"]]),AE={class:"inline-block"},SE=s("div",{class:"text-[12px]"},"Demo012Translate",-1),BE=X({__name:"Demo013Rotate",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",AE,[SE,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Zk)},null,8,["width","height","draw-fn"])])}}}),EE=I(BE,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo013Rotate.vue"]]),$E=s("h2",null,"旋转 Rotating",-1),TE=s("p",null,"以原点为中心旋转 canvas",-1),PE=s("p",null,[s("code",null,"rotate(angle)"),y(" 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。 旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。")],-1),IE={__name:"44",setup(e){const t={level:2,srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>{const l=EE,r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[$E,TE,PE,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},OE=I(IE,[["__file","/@slidev/slides/44.md"]]),jE={class:"inline-block"},ME=s("div",{class:"text-[12px]"},"Demo014Scale",-1),LE=X({__name:"Demo014Scale",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",jE,[ME,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Jk)},null,8,["width","height","draw-fn"])])}}}),RE=I(LE,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo014Scale.vue"]]),FE=s("h2",null,"缩放 Scaling",-1),NE=s("p",null,[s("code",null,"scale(x, y)"),y(" scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。")],-1),HE=s("p",null,"画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。",-1),qE={__name:"45",setup(e){const t={level:2,srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>{const l=RE,r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[FE,NE,HE,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},VE=I(qE,[["__file","/@slidev/slides/45.md"]]),zE={class:"inline-block"},WE=s("div",{class:"text-[12px]"},"Demo015Transforms",-1),UE=X({__name:"Demo015Transforms",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",zE,[WE,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(Qk)},null,8,["width","height","draw-fn"])])}}}),GE=I(UE,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo015Transforms.vue"]]),KE=s("h2",null,"变形 Transforms",-1),YE=s("p",null,[s("code",null,"transform(a, b, c, d, e, f)"),y(",这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：")],-1),XE=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",{fence:"true"},"["),s("mtable",{rowspacing:"0.16em",columnalign:"left left left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"a")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"c")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"e")])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"b")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"d")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,"f")])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"0")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"0")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"1")])])])]),s("mo",{fence:"true"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\left[\\begin{array}{l l l}{a}&{c}&{e}\\\\ {b}&{d}&{f}\\\\ {0}&{0}&{1}\\end{array}\\right] ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.6em","vertical-align":"-1.55em"}}),s("span",{class:"minner"},[s("span",{class:"mopen"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.05em"}},[s("span",{style:{top:"-4.05em"}},[s("span",{class:"pstrut",style:{height:"5.6em"}}),s("span",{style:{width:"0.667em",height:"3.600em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"},[s("path",{d:`M403 1759 V84 H666 V0 H319 V1759 v0 v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v0 v1759 h84z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.05em"}},[s("span",{style:{top:"-4.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"a")])])]),s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b")])])]),s("span",{style:{top:"-1.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},"0")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.05em"}},[s("span",{style:{top:"-4.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c")])])]),s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"d")])])]),s("span",{style:{top:"-1.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},"0")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.05em"}},[s("span",{style:{top:"-4.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e")])])]),s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),s("span",{style:{top:"-1.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}})])]),s("span",{class:"mclose"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.05em"}},[s("span",{style:{top:"-4.05em"}},[s("span",{class:"pstrut",style:{height:"5.6em"}}),s("span",{style:{width:"0.667em",height:"3.600em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"},[s("path",{d:`M347 1759 V0 H0 V84 H263 V1759 v0 v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v0 v1759 h84z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])])])])])])])])])])],-1),ZE=s("ol",null,[s("li",null,"a (m11) 水平方向的缩放"),s("li",null,"b(m12) 竖直方向的倾斜偏移"),s("li",null,"c(m21) 水平方向的倾斜偏移"),s("li",null,"d(m22) 竖直方向的缩放"),s("li",null,"e(dx) 水平方向的移动"),s("li",null,"f(dy) 竖直方向的移动")],-1),JE=s("p",null,[s("code",null,"setTransform(a, b, c, d, e, f)"),y(" 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。")],-1),QE=s("p",null,[s("code",null,"resetTransform()"),y(" 重置当前变形为单位矩阵，它和调用以下语句是一样的："),s("code",null,"ctx.setTransform(1, 0, 0, 1, 0, 0)"),y(";")],-1),e$={__name:"46",setup(e){const t={level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md"};return E(P),(n,o)=>{const l=GE,r=fn;return g(),V(Ui,le(oe(t)),{right:j(a=>[JE,QE,k(r,null,{default:j(()=>[k(l)]),_:1})]),default:j(()=>[KE,YE,XE,ZE]),_:1},16)}}},t$=I(e$,[["__file","/@slidev/slides/46.md"]]),n$=s("h1",null,"11.组合与裁切",-1),s$={__name:"47",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/06compositeAndCliping.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[n$]),_:1},16))}},o$=I(s$,[["__file","/@slidev/slides/47.md"]]),l$={class:"inline-block"},r$=s("div",{class:"text-[12px]"},"Demo016GlobalCompositeOperation",-1),a$=X({__name:"Demo016GlobalCompositeOperation",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",l$,[r$,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(eA)},null,8,["width","height","draw-fn"])])}}}),i$=I(a$,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo016GlobalCompositeOperation.vue"]]),c$=s("h2",null,"globalCompositeOperation",-1),u$=s("p",null,[s("code",null,"globalCompositeOperation = type"),y(" 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。")],-1),d$=s("p",null,"默认的情况是 source-over，会在现有画布之上绘制新图形。",-1),p$=s("p",null,[s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation",target:"_blank",rel:"noopener"},"globalCompositeOperation 文档")],-1),f$=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"globalCompositeOperation"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"globalCompositeOperation"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),h$={__name:"48",setup(e){const t={level:2,srcSequence:"./pages/06compositeAndCliping.md"};return E(P),(n,o)=>{const l=lt,r=i$,a=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[c$,u$,d$,p$,k(l,ze({},{ranges:[""]}),{default:j(()=>[f$]),_:1},16),k(a,null,{default:j(()=>[k(r)]),_:1})]),_:1},16)}}},m$=I(h$,[["__file","/@slidev/slides/48.md"]]),v$={class:"inline-block"},g$=s("div",{class:"text-[12px]"},"Demo016Clip",-1),y$=X({__name:"Demo016Clip",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return(o,l)=>{const r=be;return g(),A("div",v$,[g$,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":S(tA)},null,8,["width","height","draw-fn"])])}}}),_$=I(y$,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo016Clip.vue"]]),b$=s("h2",null,"裁切路径",-1),w$=s("p",null,"裁切路径的作用是遮罩，会隐藏不需要的部分 默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。",-1),D$=s("p",null,[s("code",null,"clip()"),y(" 将当前正在构建的路径转换为当前的裁剪路径。")],-1),x$={__name:"49",setup(e){const t={level:2,srcSequence:"./pages/06compositeAndCliping.md"};return E(P),(n,o)=>{const l=_$,r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[b$,w$,D$,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},C$=I(x$,[["__file","/@slidev/slides/49.md"]]),k$=s("h1",null,"12.动画",-1),A$={__name:"50",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[k$]),_:1},16))}},S$=I(A$,[["__file","/@slidev/slides/50.md"]]),B$=s("h2",null,"动画的基本步骤",-1),E$=s("p",null,"按照以下的步骤绘制每一帧",-1),$$=s("ol",null,[s("li",null,"清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。"),s("li",null,"保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。"),s("li",null,"绘制动画图形（animated shapes） 这一步才是重绘动画帧。"),s("li",null,"恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。")],-1),T$={__name:"51",setup(e){const t={level:2,hideInToc:!0,srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>(g(),V(pe,le(oe(t)),{default:j(()=>[B$,E$,$$]),_:1},16))}},P$=I(T$,[["__file","/@slidev/slides/51.md"]]),I$="/my-slidevs/slidevs/learn-canvas/images/canvas_earth.png",O$="/my-slidevs/slidevs/learn-canvas/images/canvas_moon.png",j$="/my-slidevs/slidevs/learn-canvas/images/canvas_sun.png",M$={class:"inline-block"},L$=s("div",{class:"text-[12px]"},"Demo017AnimationSolarSystem",-1),R$=X({__name:"Demo017AnimationSolarSystem",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:300}},setup(e){const t=e;E(P);const n=F();function o(l){const r=new Image,a=new Image,i=new Image;function c(){l.globalCompositeOperation="destination-over",l.clearRect(0,0,300,300),l.fillStyle="rgba(0,0,0,0.4)",l.strokeStyle="rgba(0,153,255,0.4)",l.save(),l.translate(150,150);var u=new Date;l.rotate(2*Math.PI/60*u.getSeconds()+2*Math.PI/6e4*u.getMilliseconds()),l.translate(105,0),l.fillRect(0,-12,50,24),l.drawImage(i,-12,-12),l.save(),l.rotate(2*Math.PI/6*u.getSeconds()+2*Math.PI/6e3*u.getMilliseconds()),l.translate(0,28.5),l.drawImage(a,-3.5,-3.5),l.restore(),l.restore(),l.beginPath(),l.arc(150,150,105,0,Math.PI*2,!1),l.stroke(),l.drawImage(r,0,0,300,300),window.requestAnimationFrame(c)}r.src=j$,a.src=O$,i.src=I$,window.requestAnimationFrame(c)}return We(()=>{const r=n.value.canvasDom.getContext("2d");o(r)}),(l,r)=>{const a=be;return g(),A("div",M$,[L$,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),F$=I(R$,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo017AnimationSolarSystem.vue"]]),N$=s("h2",null,"更新动画",-1),H$=s("p",null,[y("为了实现动画，我们需要一些可以定时执行重绘的方法。"),s("br"),s("code",null,"setInterval(function, delay)"),y(" 当设定好间隔时间后，function 会定期执行。 "),s("code",null,"setTimeout(function, delay)"),y(" 在设定好的时间之后执行函数"),s("br"),s("code",null,"requestAnimationFrame(callback)"),y(" 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。")],-1),q$={__name:"52",setup(e){const t={level:2,hideInToc:!0,srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>{const l=F$,r=fn;return g(),V(pe,le(oe(t)),{default:j(()=>[N$,H$,k(r,null,{default:j(()=>[k(l)]),_:1})]),_:1},16)}}},V$=I(q$,[["__file","/@slidev/slides/52.md"]]),z$={class:"inline-block"},W$=s("div",{class:"text-[12px]"},"Demo018AnimationsClock",-1),U$=X({__name:"Demo018AnimationsClock",props:{width:{type:Number,required:!1,default:400},height:{type:Number,required:!1,default:400}},setup(e){const t=e;E(P);const n=F();function o(l){function r(){const a=new Date;l.save(),l.clearRect(0,0,l.canvas.width,l.canvas.height),l.translate(l.canvas.width/2,l.canvas.height/2),l.scale(.8,.8),l.rotate(-Math.PI/2),l.strokeStyle="black",l.fillStyle="white",l.lineWidth=8,l.lineCap="round",l.save();for(var i=0;i<12;i++)l.beginPath(),l.rotate(Math.PI/6),l.moveTo(100,0),l.lineTo(120,0),l.stroke(),l.fillStyle="black",l.font="20px Fira Sans",l.fillText(`${i+1}`,150,0,50);for(l.restore(),l.save(),l.lineWidth=5,i=0;i<60;i++)i%5!=0&&(l.beginPath(),l.moveTo(117,0),l.lineTo(120,0),l.stroke()),l.rotate(Math.PI/30);l.restore();var c=a.getSeconds(),u=a.getMinutes(),d=a.getHours();d=d>=12?d-12:d,l.fillStyle="black",l.save(),l.rotate(d*(Math.PI/6)+Math.PI/360*u+Math.PI/21600*c),l.lineWidth=14,l.beginPath(),l.moveTo(-20,0),l.lineTo(80,0),l.stroke(),l.restore(),l.save(),l.rotate(Math.PI/30*u+Math.PI/1800*c),l.lineWidth=10,l.beginPath(),l.moveTo(-28,0),l.lineTo(112,0),l.stroke(),l.restore(),l.save(),l.rotate(c*Math.PI/30),l.strokeStyle="#D40000",l.fillStyle="#D40000",l.lineWidth=6,l.beginPath(),l.moveTo(-30,0),l.lineTo(83,0),l.stroke(),l.beginPath(),l.arc(0,0,10,0,Math.PI*2,!0),l.fill(),l.beginPath(),l.arc(95,0,10,0,Math.PI*2,!0),l.stroke(),l.fillStyle="rgba(0,0,0,0)",l.arc(0,0,3,0,Math.PI*2,!0),l.fill(),l.restore(),l.beginPath(),l.lineWidth=14,l.strokeStyle="#325FA2",l.arc(0,0,142,0,Math.PI*2,!0),l.stroke(),l.restore(),window.requestAnimationFrame(r)}window.requestAnimationFrame(r)}return We(()=>{const r=n.value.canvasDom.getContext("2d");o(r)}),(l,r)=>{const a=be;return g(),A("div",z$,[W$,k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,"draw-fn":o},null,8,["width","height"])])}}}),G$=I(U$,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo018AnimationsClock.vue"]]),K$=s("h2",null,"时钟案例",-1),Y$={__name:"53",setup(e){const t={srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>{const l=G$;return g(),V(pe,le(oe(t)),{default:j(()=>[K$,k(l)]),_:1},16)}}},X$=I(Y$,[["__file","/@slidev/slides/53.md"]]),Z$="/my-slidevs/slidevs/learn-canvas/images/national_park.jpg",J$={class:"inline-block"},Q$=s("div",{class:"text-[12px]"},"Demo019AnimationsNationalPark",-1),eT=X({__name:"Demo019AnimationsNationalPark",props:{width:{type:Number,required:!1,default:900},height:{type:Number,required:!1,default:300}},setup(e){const t=e;E(P);const n=F();return We(()=>{const l=n.value.canvasDom.getContext("2d");new sA({ctx:l,imgSrc:Z$})}),(o,l)=>{const r=be;return g(),A("div",J$,[Q$,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),tT=I(eT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo019AnimationsNationalPark.vue"]]),nT=s("h2",null,"循环全景照片案例",-1),sT={__name:"54",setup(e){const t={srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>{const l=tT;return g(),V(pe,le(oe(t)),{default:j(()=>[nT,k(l)]),_:1},16)}}},oT=I(sT,[["__file","/@slidev/slides/54.md"]]),lT={class:"inline-block"},rT=s("div",{class:"text-[12px]"},"Demo020Ball",-1),aT=X({__name:"Demo020Ball",props:{width:{type:Number,required:!1,default:900},height:{type:Number,required:!1,default:300}},setup(e){const t=e;E(P);const n=F();return We(()=>{const l=n.value.canvasDom.getContext("2d");new oA(l)}),(o,l)=>{const r=be;return g(),A("div",lT,[rT,k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])}}}),iT=I(aT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo020Ball.vue"]]),cT=s("h2",null,"小球案例",-1),uT={__name:"55",setup(e){const t={srcSequence:"./pages/07animation.md"};return E(P),(n,o)=>{const l=iT;return g(),V(pe,le(oe(t)),{default:j(()=>[cT,k(l)]),_:1},16)}}},dT=I(uT,[["__file","/@slidev/slides/55.md"]]),pT=s("h1",null,"13.像素操作",-1),fT={__name:"56",setup(e){const t={level:1,layout:"center",srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>(g(),V(Ts,le(oe(t)),{default:j(()=>[pT]),_:1},16))}},hT=I(fT,[["__file","/@slidev/slides/56.md"]]),mT=s("h2",null,"ImageData 对象",-1),vT=s("p",null,"ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：",-1),gT=s("p",null,[s("code",null,"width"),y(" 图片宽度，单位是像素"),s("br"),s("code",null,"height"),y(" 图片高度，单位是像素"),s("br"),s("code",null,"data"),y(" Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。")],-1),yT=s("p",null,'data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。',-1),_T=s("p",null,"Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1 例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：",-1),bT=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"blueComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"imageData"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},"[(("),s("span",{style:{color:"#6394BF"}},"50"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"imageData"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"200"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},"];")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"blueComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"imageData"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},"[(("),s("span",{style:{color:"#296AA3"}},"50"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"imageData"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"200"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),wT=s("p",null,"根据行、列读取某像素点的 R/G/B/A 值的公式：",-1),DT=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"imageData"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},"[(("),s("span",{style:{color:"#6394BF"}},"50"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"imageData"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"200"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},"];")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"imageData"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},"[(("),s("span",{style:{color:"#296AA3"}},"50"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"imageData"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"200"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),xT={__name:"57",setup(e){const t={level:2,hideInToc:!0,srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[mT,vT,gT,yT,_T,k(l,ze({},{ranges:[""]}),{default:j(()=>[bT]),_:1},16),wT,k(l,ze({},{ranges:[""]}),{default:j(()=>[DT]),_:1},16)]),_:1},16)}}},CT=I(xT,[["__file","/@slidev/slides/57.md"]]),kT=s("h2",null,"创建一个ImageData对象",-1),AT=s("p",null,[s("code",null,"CanvasRenderingContext2D.createImageData()"),y(" 有两个版本 下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑")],-1),ST=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"myImageData"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"createImageData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"height"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"myImageData"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"createImageData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"height"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),BT=s("p",null,"可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）",-1),ET=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"myImageData"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"createImageData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"anotherImageData"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"myImageData"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"createImageData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"anotherImageData"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),$T={__name:"58",setup(e){const t={hideInToc:!0,srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[kT,AT,k(l,ze({},{ranges:[""]}),{default:j(()=>[ST]),_:1},16),BT,k(l,ze({},{ranges:[""]}),{default:j(()=>[ET]),_:1},16)]),_:1},16)}}},TT=I($T,[["__file","/@slidev/slides/58.md"]]),PT={class:"inline-block"},IT=s("div",{class:"text-[12px]"},"Demo022ColorPicker",-1),OT={class:"flex justify-between space-x-10"},jT=s("div",null,"原图片",-1),MT={class:""},LT=s("div",null,"指针下的颜色",-1),RT={class:""},FT=s("div",null,"选中的颜色",-1),NT=X({__name:"Demo022ColorPicker",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F(),o=Ue({hoverRGBAStr:bl(dd),selectedRGBAStr:bl(dd)});return We(()=>{const r=n.value.canvasDom.getContext("2d");new lA(r,Gi,a=>{o.hoverRGBAStr=bl(a)},a=>{o.selectedRGBAStr=bl(a)})}),(l,r)=>{const a=be;return g(),A("div",PT,[IT,s("div",OT,[s("div",null,[jT,s("div",null,[k(a,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"])])]),s("div",MT,[LT,s("div",{style:Ge({backgroundColor:o.hoverRGBAStr}),class:"h-full w-[200px] flex items-center justify-center text-white"},Ht(o.hoverRGBAStr),5)]),s("div",RT,[FT,s("div",{style:Ge({backgroundColor:o.selectedRGBAStr}),class:"h-full w-[200px] flex items-center justify-center text-white"},Ht(o.selectedRGBAStr),5)])])])}}}),HT=I(NT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo022ColorPicker.vue"]]),qT=s("h2",null,"从canvas获取ImageData",-1),VT=s("p",null,"为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法： left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据",-1),zT=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"myImageData"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"getImageData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"left"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"top"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"width"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"height"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"myImageData"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"getImageData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"left"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"top"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"width"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"height"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),WT={__name:"59",setup(e){const t={srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt,r=HT;return g(),V(pe,le(oe(t)),{default:j(()=>[qT,VT,k(l,ze({},{ranges:[""]}),{default:j(()=>[zT]),_:1},16),k(r)]),_:1},16)}}},UT=I(WT,[["__file","/@slidev/slides/59.md"]]),GT={class:"space-x-5"},KT=["value"],YT=X({__name:"Demo023PutImage",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F(),o=F(Wi.original);let l;return We(()=>{const a=n.value.canvasDom.getContext("2d");l=new aA(a,Gi)}),_e(o,r=>{l.convert(r)}),(r,a)=>{const i=be;return g(),A("div",null,[k(i,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height},null,8,["width","height"]),s("div",GT,[(g(!0),A($e,null,Yn(S(rA),c=>(g(),A("label",{key:c},[Zo(s("input",{type:"radio",value:c,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value=u)},null,8,KT),[[jy,o.value]]),y(Ht(c),1)]))),128))])])}}}),XT=I(YT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo023PutImage.vue"]]),ZT=s("h2",null,"写入像素数据",-1),JT=s("p",null,[s("code",null,"putImageData()"),y("可以实现像素数据的写入")],-1),QT=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"putImageData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"myImageData"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"dx"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"dy"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"putImageData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"myImageData"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"dx"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"dy"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),eP=s("p",null,"下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。",-1),tP={__name:"60",setup(e){const t={srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt,r=XT;return g(),V(pe,le(oe(t)),{default:j(()=>[ZT,JT,k(l,ze({},{ranges:[""]}),{default:j(()=>[QT]),_:1},16),eP,k(r)]),_:1},16)}}},nP=I(tP,[["__file","/@slidev/slides/60.md"]]),sP=s("h2",null,"保存图片",-1),oP=s("p",null,[s("code",null,"HTMLCanvasElement.toDataURL()")],-1),lP=s("ul",null,[s("li",null,[y("如果画布的高度或宽度是 0，那么会返回字符串“"),s("code",null,"data:,”"),y("。")]),s("li",null,[y("如果传入的类型非“"),s("code",null,"image/png"),y("”，但是返回的值以“"),s("code",null,"data:image/png"),y("”开头，那么该传入的类型是不支持的。")]),s("li",null,[y("Chrome 支持“"),s("code",null,"image/webp"),y("”类型。")])],-1),rP=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"canvas"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"toDataURL"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"encoderOptions"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"canvas"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"toDataURL"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"encoderOptions"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),aP=s("p",null,[s("code",null,"type"),y(" 可选")],-1),iP=s("p",null,[y("图片格式，默认为 "),s("code",null,"image/png")],-1),cP=s("p",null,[s("code",null,"encoderOptions"),y(" 可选")],-1),uP=s("p",null,[y("在指定图片格式为 "),s("code",null,"image/jpeg"),y(" 或 "),s("code",null,"image/webp"),y(" 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 "),s("code",null,"0.92"),y("。其他参数会被忽略。返回值是包含dataURI的domstring")],-1),dP=s("blockquote",null,[s("p",null,"也就是说只有jpeg和 webp（chrome）支持质量选择")],-1),pP={__name:"61",setup(e){const t={srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[sP,oP,lP,k(l,ze({},{ranges:[""]}),{default:j(()=>[rP]),_:1},16),aP,iP,cP,uP,dP]),_:1},16)}}},fP=I(pP,[["__file","/@slidev/slides/61.md"]]),hP=s("p",null,[s("code",null,"HTMLCanvasElement.toBlob()")],-1),mP=s("p",null,[s("strong",null,[s("code",null,"HTMLCanvasElement.toBlob()")]),y(" 方法创造 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Blob",target:"_blank",rel:"noopener"},[s("code",null,"Blob")]),y(" 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。")],-1),vP=s("p",null,[y("可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 "),s("code",null,"image/png"),y(" 类型。浏览器需要支持 "),s("code",null,"image/png"),y("，大多数浏览器还支持额外的图片格式，包括 "),s("code",null,"image/jpeg"),y(" 和 "),s("code",null,"image/webp"),y("。 对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。")],-1),gP=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"toBlob"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"toBlob"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"toBlob"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"quality"),s("span",{style:{color:"#858585"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"toBlob"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"toBlob"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},")")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"toBlob"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"quality"),s("span",{style:{color:"#8E8F8B"}},")")])])])],-1),yP={__name:"62",setup(e){const t={srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[hP,mP,vP,k(l,ze({},{ranges:[""]}),{default:j(()=>[gP]),_:1},16)]),_:1},16)}}},_P=I(yP,[["__file","/@slidev/slides/62.md"]]),bP=s("h2",null,"网页截图",-1),wP=s("p",null,[y("html2canvas 这个库是把dom元素在canvas上绘制 "),s("a",{href:"https://github.com/niklasvh/html2canvas",target:"_blank",rel:"noopener"},"https://github.com/niklasvh/html2canvas")],-1),DP=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"html2canvas"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"document"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#858585"}},")."),s("span",{style:{color:"#A1B567"}},"then"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"canvas"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"document"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"appendChild"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"canvas"),s("span",{style:{color:"#858585"}},");")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"}),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"html2canvas"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"document"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"body"),s("span",{style:{color:"#8E8F8B"}},")."),s("span",{style:{color:"#6C7834"}},"then"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"canvas"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"document"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"body"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"appendChild"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"canvas"),s("span",{style:{color:"#8E8F8B"}},");")]),y(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),xP=s("p",null,[y("之后我们使用"),s("code",null,"canvas.toBlob"),y("之类保存图片的api下载到本地")],-1),CP=s("p",null,[y("还有另一个保存图片的库 "),s("a",{href:"https://github.com/bubkoo/html-to-image",target:"_blank",rel:"noopener"},"https://github.com/bubkoo/html-to-image")],-1),kP={__name:"63",setup(e){const t={srcSequence:"./pages/08pixel.md"};return E(P),(n,o)=>{const l=lt;return g(),V(pe,le(oe(t)),{default:j(()=>[bP,wP,k(l,ze({},{ranges:[""]}),{default:j(()=>[DP]),_:1},16),xP,CP]),_:1},16)}}},AP=I(kP,[["__file","/@slidev/slides/63.md"]]),SP=X({__name:"Demo024ScratchLottery",props:{width:{type:Number,required:!1,default:300},height:{type:Number,required:!1,default:200}},setup(e){const t=e;E(P);const n=F();return We(()=>{new iA("#scratchLottery")}),(o,l)=>{const r=be;return g(),A("div",null,[s("div",{style:Ge({width:t.width+"px",height:t.height+"px",position:"absolute",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center"})}," 恭喜您获得100w ",4),k(r,{ref_key:"canvasBoardRef",ref:n,width:t.width,height:t.height,id:"scratchLottery"},null,8,["width","height"])])}}}),BP=I(SP,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-canvas/components/Demo024ScratchLottery.vue"]]),EP=s("h2",null,"其他案例",-1),$P=s("h3",null,"刮刮卡",-1),TP={__name:"64",setup(e){const t={hideInToc:!0,srcSequence:"./pages/09examples.md"};return E(P),(n,o)=>{const l=BP;return g(),V(pe,le(oe(t)),{default:j(()=>[EP,$P,k(l)]),_:1},16)}}},PP=I(TP,[["__file","/@slidev/slides/64.md"]]),IP=[{path:"1",name:"page-1",component:Xx,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0,record:"dev",title:"canvas 教程",slide:{raw:`---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
hideInToc: true
record: dev
---


# canvas 教程

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>
<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>
`,title:"canvas 教程",level:1,content:`# canvas 教程

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>
<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",hideInToc:!0,record:"dev",title:"canvas 教程"},index:0,start:0,end:32,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:bC,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

## 目录

<Toc columns="4" />
`,title:"目录",level:2,content:`## 目录

<Toc columns="4" />`,frontmatter:{hideInToc:!0},index:1,start:32,end:40,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:BC,meta:{title:"什么是canvas?",level:1,slide:{raw:`---
title: 什么是canvas?
level: 1

---
## 01.什么是canvas？  

canvas元素+相关的api  

Canvas API 提供了一个通过JavaScript 和 HTML的\`<canvas>\`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用\`<canvas>\`元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。

兼容性：

<https://caniuse.com/canvas>
`,title:"什么是canvas?",level:1,content:`## 01.什么是canvas？  

canvas元素+相关的api  

Canvas API 提供了一个通过JavaScript 和 HTML的\`<canvas>\`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用\`<canvas>\`元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。

兼容性：

<https://caniuse.com/canvas>`,frontmatter:{title:"什么是canvas?",level:1},index:2,start:40,end:57,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:GC,meta:{title:"canvas 元素",level:1,slide:{raw:`---
title: canvas 元素
level: 1
---

## 02.canvas元素  

canvas 的默认大小为\`300*150\` px,具有width和height属性，用于定义canvas的宽和高。  

canvas标签内可以设置替换内容，不支持canvas的浏览器会显示替换内容(比如IE9之前的浏览器)，支持canvas的浏览器则显示canvas，忽略替换内容

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content= :width=device-width, initial-scale=1.0">
  <title>认识canvas标签</title>
</head>
<body>
  <canvas :width="300" :height="150">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</body>
</html>

\`\`\`

> 可以用css定义大小，绘制时图像会伸缩以适应它的框架尺寸，但是如果css的尺寸和画布大小比例不一致，会出现扭曲变形
`,title:"canvas 元素",level:1,content:`## 02.canvas元素  

canvas 的默认大小为\`300*150\` px,具有width和height属性，用于定义canvas的宽和高。  

canvas标签内可以设置替换内容，不支持canvas的浏览器会显示替换内容(比如IE9之前的浏览器)，支持canvas的浏览器则显示canvas，忽略替换内容

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content= :width=device-width, initial-scale=1.0">
  <title>认识canvas标签</title>
</head>
<body>
  <canvas :width="300" :height="150">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</body>
</html>

\`\`\`

> 可以用css定义大小，绘制时图像会伸缩以适应它的框架尺寸，但是如果css的尺寸和画布大小比例不一致，会出现扭曲变形`,frontmatter:{title:"canvas 元素",level:1},index:3,start:57,end:88,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:QC,meta:{title:"渲染上下文",level:1,slide:{raw:`---
title: 渲染上下文
level: 1
---

## 03.渲染上下文

\`\`\`ts
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  if (canvasDom.getContext) {
    const ctx:CanvasRenderingContext2D = canvasDom.getContext('2d')!
   }

\`\`\`

getContext 参数的\`'2d'\`是contextType ，有以下几种类型

- 2d，建立一个二维渲染上下文 CanvasRenderingContext2D。
- webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象
- webgl2 ： 创建一个 WebGL2RenderingContext 三维渲染上下文对象
- webgpu 创建一个三维渲染上下文对象 GPUCanvasContext
- bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。
`,title:"渲染上下文",level:1,content:`## 03.渲染上下文

\`\`\`ts
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  if (canvasDom.getContext) {
    const ctx:CanvasRenderingContext2D = canvasDom.getContext('2d')!
   }

\`\`\`

getContext 参数的\`'2d'\`是contextType ，有以下几种类型

- 2d，建立一个二维渲染上下文 CanvasRenderingContext2D。
- webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象
- webgl2 ： 创建一个 WebGL2RenderingContext 三维渲染上下文对象
- webgpu 创建一个三维渲染上下文对象 GPUCanvasContext
- bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。`,frontmatter:{title:"渲染上下文",level:1},index:4,start:88,end:111,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:ok,meta:{title:"Hello canvas",level:1,slide:{raw:`---
title: Hello canvas
level: 1
---

## 04.hello canvas

- moveTo 移动画笔
- lineTo 画线
- fillRect 画矩形
- fillText 在指定区域填充文字

\`\`\`ts
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  // 2、从HTMLCanvasElement获取上下文环境对象context
  const ctx = canvasDom.getContext('2d')!
  // 3. 绘制图形
  ctx.moveTo(80, 55) //左上角为坐标起点0.0
  ctx.lineTo(900, 150)
  ctx.stroke()

  // 绘制矩形
  ctx.fillStyle = 'green'
  ctx.fillRect(50, 250, 400, 100)
  // 绘制文字
  ctx.fillStyle = 'purple'
  ctx.font = '50px Arial'
  ctx.fillText('hello canvas', 200, 400, 400) 

\`\`\`
`,title:"Hello canvas",level:1,content:`## 04.hello canvas

- moveTo 移动画笔
- lineTo 画线
- fillRect 画矩形
- fillText 在指定区域填充文字

\`\`\`ts
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  // 2、从HTMLCanvasElement获取上下文环境对象context
  const ctx = canvasDom.getContext('2d')!
  // 3. 绘制图形
  ctx.moveTo(80, 55) //左上角为坐标起点0.0
  ctx.lineTo(900, 150)
  ctx.stroke()

  // 绘制矩形
  ctx.fillStyle = 'green'
  ctx.fillRect(50, 250, 400, 100)
  // 绘制文字
  ctx.fillStyle = 'purple'
  ctx.font = '50px Arial'
  ctx.fillText('hello canvas', 200, 400, 400) 

\`\`\``,frontmatter:{title:"Hello canvas",level:1},index:5,start:111,end:143,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:uk,meta:{hideInToc:!0,title:"hello canvas demo",slide:{raw:`---
hideInToc: true
title: hello canvas demo
---
<Demo001HelloCanvas/>
`,title:"hello canvas demo",content:"<Demo001HelloCanvas/>",frontmatter:{hideInToc:!0,title:"hello canvas demo"},index:6,start:143,end:149,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:hk,meta:{title:"Vue3 中使用canvas",level:1,slide:{raw:`---
title: Vue3 中使用canvas
level: 1
---
## 05.Vue3 中使用canvas

\`\`\`vue
<template>
  <canvas ref="canvasDom" :width="p.width" :height="p.height">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
})
const canvasDom = ref()
defineExpose({
  canvasDom,
})
<\/script>
<style lang="scss" scoped>
canvas {
  border: 1px solid #eee;
}
</style>
\`\`\`
`,title:"Vue3 中使用canvas",level:1,content:`## 05.Vue3 中使用canvas

\`\`\`vue
<template>
  <canvas ref="canvasDom" :width="p.width" :height="p.height">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
})
const canvasDom = ref()
defineExpose({
  canvasDom,
})
<\/script>
<style lang="scss" scoped>
canvas {
  border: 1px solid #eee;
}
</style>
\`\`\``,frontmatter:{title:"Vue3 中使用canvas",level:1},index:7,start:149,end:183,noteHTML:"",filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:kk,meta:{title:"绘制形状",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/01shape.md",slide:{raw:null,title:"绘制形状",level:1,content:`## 06.绘制形状

### 栅格

canvas绘制的原点（0,0）是左上角  

![栅格](/images/canvas_default_grid.png)`,frontmatter:{title:"绘制形状",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/01shape.md"},index:8,start:0,end:14,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
title: 绘制形状
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
## 06.绘制形状

### 栅格

canvas绘制的原点（0,0）是左上角  

![栅格](/images/canvas_default_grid.png)
`,title:"绘制形状",level:1,content:`## 06.绘制形状

### 栅格

canvas绘制的原点（0,0）是左上角  

![栅格](/images/canvas_default_grid.png)`,frontmatter:{title:"绘制形状",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:0,start:0,end:14},inline:{raw:`---
src: ./pages/01shape.md
---`,content:"",frontmatter:{},index:8,start:183,end:186},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:yA,meta:{title:"绘制矩形",level:2,srcSequence:"./pages/01shape.md",slide:{raw:`---
title: 绘制矩形
level: 2
---

### 绘制矩形
canvas 提供了三个方法绘制矩形：

1. \`fillRect(x, y, width, height)\`   绘制一个填充的矩形
2. \`strokeRect(x, y, width, height)\`  绘制一个矩形的边框
3. \`clearRect(x, y, width, height)\`  清除指定矩形区域，让清除部分完全透明
4. \`rect(x, y, width, height)\` 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到<Link to="12" >路径</Link>中的)

<v-click>

<Demo002Rect1 :width="200" :height="200"/>

</v-click>
`,title:"绘制矩形",level:2,content:`### 绘制矩形
canvas 提供了三个方法绘制矩形：

1. \`fillRect(x, y, width, height)\`   绘制一个填充的矩形
2. \`strokeRect(x, y, width, height)\`  绘制一个矩形的边框
3. \`clearRect(x, y, width, height)\`  清除指定矩形区域，让清除部分完全透明
4. \`rect(x, y, width, height)\` 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到<Link to="12" >路径</Link>中的)

<v-click>

<Demo002Rect1 :width="200" :height="200"/>

</v-click>`,frontmatter:{title:"绘制矩形",level:2,srcSequence:"./pages/01shape.md"},index:9,start:14,end:33,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
title: 绘制矩形
level: 2
---

### 绘制矩形
canvas 提供了三个方法绘制矩形：

1. \`fillRect(x, y, width, height)\`   绘制一个填充的矩形
2. \`strokeRect(x, y, width, height)\`  绘制一个矩形的边框
3. \`clearRect(x, y, width, height)\`  清除指定矩形区域，让清除部分完全透明
4. \`rect(x, y, width, height)\` 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到<Link to="12" >路径</Link>中的)

<v-click>

<Demo002Rect1 :width="200" :height="200"/>

</v-click>
`,title:"绘制矩形",level:2,content:`### 绘制矩形
canvas 提供了三个方法绘制矩形：

1. \`fillRect(x, y, width, height)\`   绘制一个填充的矩形
2. \`strokeRect(x, y, width, height)\`  绘制一个矩形的边框
3. \`clearRect(x, y, width, height)\`  清除指定矩形区域，让清除部分完全透明
4. \`rect(x, y, width, height)\` 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到<Link to="12" >路径</Link>中的)

<v-click>

<Demo002Rect1 :width="200" :height="200"/>

</v-click>`,frontmatter:{title:"绘制矩形",level:2},index:1,start:14,end:33},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:SA,meta:{title:"绘制路径",level:2,srcSequence:"./pages/01shape.md",slide:{raw:`---
title: 绘制路径
level: 2
---
### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。

使用路径绘制的步骤

1. 首先，你需要创建路径起始点。  \`beginPath()\`
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。 \`closePath()\`
4. 一旦路径生成，你就能通过描边（\`stroke\`）或填充路径区域(\`fill\`)来渲染图形。

\`lineTo(x, y)\` 绘制一条从当前位置到指定 x 以及 y 位置的直线。

<v-click>

<Demo002PathTriangle  :width="200" :height="100" />

</v-click>
<!-- <script setup lang="ts">
import {drawTriangle} from './example/examples'
<\/script>
<CanvasBoard :width="200" :height="200" :drawFn="drawTriangle"/> 
-->
`,title:"绘制路径",level:2,content:`### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。

使用路径绘制的步骤

1. 首先，你需要创建路径起始点。  \`beginPath()\`
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。 \`closePath()\`
4. 一旦路径生成，你就能通过描边（\`stroke\`）或填充路径区域(\`fill\`)来渲染图形。

\`lineTo(x, y)\` 绘制一条从当前位置到指定 x 以及 y 位置的直线。

<v-click>

<Demo002PathTriangle  :width="200" :height="100" />

</v-click>`,frontmatter:{title:"绘制路径",level:2,srcSequence:"./pages/01shape.md"},note:`<script setup lang="ts">
import {drawTriangle} from './example/examples'
<\/script>
<CanvasBoard :width="200" :height="200" :drawFn="drawTriangle"/>`,index:10,start:33,end:61,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
title: 绘制路径
level: 2
---
### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。

使用路径绘制的步骤

1. 首先，你需要创建路径起始点。  \`beginPath()\`
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。 \`closePath()\`
4. 一旦路径生成，你就能通过描边（\`stroke\`）或填充路径区域(\`fill\`)来渲染图形。

\`lineTo(x, y)\` 绘制一条从当前位置到指定 x 以及 y 位置的直线。

<v-click>

<Demo002PathTriangle  :width="200" :height="100" />

</v-click>
<!-- <script setup lang="ts">
import {drawTriangle} from './example/examples'
<\/script>
<CanvasBoard :width="200" :height="200" :drawFn="drawTriangle"/> 
-->
`,title:"绘制路径",level:2,content:`### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。

使用路径绘制的步骤

1. 首先，你需要创建路径起始点。  \`beginPath()\`
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。 \`closePath()\`
4. 一旦路径生成，你就能通过描边（\`stroke\`）或填充路径区域(\`fill\`)来渲染图形。

\`lineTo(x, y)\` 绘制一条从当前位置到指定 x 以及 y 位置的直线。

<v-click>

<Demo002PathTriangle  :width="200" :height="100" />

</v-click>`,frontmatter:{title:"绘制路径",level:2},note:`<script setup lang="ts">
import {drawTriangle} from './example/examples'
<\/script>
<CanvasBoard :width="200" :height="200" :drawFn="drawTriangle"/>`,index:2,start:33,end:61},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:`<script setup lang="ts">
import {drawTriangle} from './example/examples'
<\/script>
<CanvasBoard :width="200" :height="200" :drawFn="drawTriangle"/>`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:LA,meta:{srcSequence:"./pages/01shape.md",slide:{raw:`
### 圆弧

\`moveTo(x, y)\` 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.

\`arc(x, y, radius, startAngle, endAngle, anticlockwise)\` 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针

\`arcTo(x1, y1, x2, y2, radius)\`  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)

<!-- \`ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)\` 椭圆绘制还是略了 -->

<v-click>

<Demo002Smile class="inline-block"/>

</v-click>

<v-click>

<Demo002ArcTo class="inline-block ml-10" />

</v-click>
`,title:"圆弧",level:3,content:`### 圆弧

\`moveTo(x, y)\` 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.

\`arc(x, y, radius, startAngle, endAngle, anticlockwise)\` 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针

\`arcTo(x1, y1, x2, y2, radius)\`  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)

<!-- \`ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)\` 椭圆绘制还是略了 -->

<v-click>

<Demo002Smile class="inline-block"/>

</v-click>

<v-click>

<Demo002ArcTo class="inline-block ml-10" />

</v-click>`,frontmatter:{srcSequence:"./pages/01shape.md"},index:11,start:62,end:85,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`
### 圆弧

\`moveTo(x, y)\` 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.

\`arc(x, y, radius, startAngle, endAngle, anticlockwise)\` 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针

\`arcTo(x1, y1, x2, y2, radius)\`  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)

<!-- \`ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)\` 椭圆绘制还是略了 -->

<v-click>

<Demo002Smile class="inline-block"/>

</v-click>

<v-click>

<Demo002ArcTo class="inline-block ml-10" />

</v-click>
`,title:"圆弧",level:3,content:`### 圆弧

\`moveTo(x, y)\` 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.

\`arc(x, y, radius, startAngle, endAngle, anticlockwise)\` 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针

\`arcTo(x1, y1, x2, y2, radius)\`  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)

<!-- \`ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)\` 椭圆绘制还是略了 -->

<v-click>

<Demo002Smile class="inline-block"/>

</v-click>

<v-click>

<Demo002ArcTo class="inline-block ml-10" />

</v-click>`,frontmatter:{},index:3,start:62,end:85},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:XA,meta:{srcSequence:"./pages/01shape.md",slide:{raw:`
### 贝塞尔曲线
[贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 可以用来绘制复杂有规律的图形。

\`quadraticCurveTo(cp1x, cp1y, x, y)\` 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

\`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)\` 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  

[二次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)  
[三次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

<v-click>

<Demo002QuadraticCurveTo class="inline-block ml-10" />

</v-click>

<v-click>

<Demo002BezierCurveTo class="inline-block ml-5" />

</v-click>
`,title:"贝塞尔曲线",level:3,content:`### 贝塞尔曲线
[贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 可以用来绘制复杂有规律的图形。

\`quadraticCurveTo(cp1x, cp1y, x, y)\` 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

\`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)\` 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  

[二次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)  
[三次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

<v-click>

<Demo002QuadraticCurveTo class="inline-block ml-10" />

</v-click>

<v-click>

<Demo002BezierCurveTo class="inline-block ml-5" />

</v-click>`,frontmatter:{srcSequence:"./pages/01shape.md"},index:12,start:86,end:109,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`
### 贝塞尔曲线
[贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 可以用来绘制复杂有规律的图形。

\`quadraticCurveTo(cp1x, cp1y, x, y)\` 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

\`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)\` 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  

[二次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)  
[三次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

<v-click>

<Demo002QuadraticCurveTo class="inline-block ml-10" />

</v-click>

<v-click>

<Demo002BezierCurveTo class="inline-block ml-5" />

</v-click>
`,title:"贝塞尔曲线",level:3,content:`### 贝塞尔曲线
[贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 可以用来绘制复杂有规律的图形。

\`quadraticCurveTo(cp1x, cp1y, x, y)\` 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

\`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)\` 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  

[二次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)  
[三次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

<v-click>

<Demo002QuadraticCurveTo class="inline-block ml-10" />

</v-click>

<v-click>

<Demo002BezierCurveTo class="inline-block ml-5" />

</v-click>`,frontmatter:{},index:4,start:86,end:109},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:cS,meta:{title:"Path2D 对象",level:2,layout:"two-cols",srcSequence:"./pages/01shape.md",slide:{raw:`---
title: Path2D 对象
level: 2
layout: two-cols
---
## Path2D 对象

> 这是一个实验性技术，使用前先 [查看兼容性](https://caniuse.com/?search=Path2D)

之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。
使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性

\`Path2D()\` 会返回一个新初始化的 Path2D 对象

\`\`\`js
new Path2D();
new Path2D(path);//创建一个路径的拷贝
new Path2D(d);// 传入svg path
\`\`\`

<v-click>

\`\`\`js
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
\`\`\`

</v-click>

::right::

<v-click>

<Demo002Path2D/>

</v-click>

<v-click>

\`void path.addPath(path [, transform])\` 可以组合两个路径，transform是可选参数，是一个变换矩阵\`DOMMatrix\`

</v-click>
`,title:"Path2D 对象",level:2,content:`## Path2D 对象

> 这是一个实验性技术，使用前先 [查看兼容性](https://caniuse.com/?search=Path2D)

之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。
使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性

\`Path2D()\` 会返回一个新初始化的 Path2D 对象

\`\`\`js
new Path2D();
new Path2D(path);//创建一个路径的拷贝
new Path2D(d);// 传入svg path
\`\`\`

<v-click>

\`\`\`js
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
\`\`\`

</v-click>

::right::

<v-click>

<Demo002Path2D/>

</v-click>

<v-click>

\`void path.addPath(path [, transform])\` 可以组合两个路径，transform是可选参数，是一个变换矩阵\`DOMMatrix\`

</v-click>`,frontmatter:{title:"Path2D 对象",level:2,layout:"two-cols",srcSequence:"./pages/01shape.md"},index:13,start:109,end:159,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
title: Path2D 对象
level: 2
layout: two-cols
---
## Path2D 对象

> 这是一个实验性技术，使用前先 [查看兼容性](https://caniuse.com/?search=Path2D)

之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。
使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性

\`Path2D()\` 会返回一个新初始化的 Path2D 对象

\`\`\`js
new Path2D();
new Path2D(path);//创建一个路径的拷贝
new Path2D(d);// 传入svg path
\`\`\`

<v-click>

\`\`\`js
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
\`\`\`

</v-click>

::right::

<v-click>

<Demo002Path2D/>

</v-click>

<v-click>

\`void path.addPath(path [, transform])\` 可以组合两个路径，transform是可选参数，是一个变换矩阵\`DOMMatrix\`

</v-click>
`,title:"Path2D 对象",level:2,content:`## Path2D 对象

> 这是一个实验性技术，使用前先 [查看兼容性](https://caniuse.com/?search=Path2D)

之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。
使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性

\`Path2D()\` 会返回一个新初始化的 Path2D 对象

\`\`\`js
new Path2D();
new Path2D(path);//创建一个路径的拷贝
new Path2D(d);// 传入svg path
\`\`\`

<v-click>

\`\`\`js
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
\`\`\`

</v-click>

::right::

<v-click>

<Demo002Path2D/>

</v-click>

<v-click>

\`void path.addPath(path [, transform])\` 可以组合两个路径，transform是可选参数，是一个变换矩阵\`DOMMatrix\`

</v-click>`,frontmatter:{title:"Path2D 对象",level:2,layout:"two-cols"},index:5,start:109,end:159},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:yS,meta:{hideInToc:!0,title:"path2D使用SVG",srcSequence:"./pages/01shape.md",slide:{raw:`---
hideInToc: true
title: path2D使用SVG
---
### 使用 SVG paths
Path2D 可以使用 SVG path data 来初始化 canvas 上的路径

这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)

\`\`\`js
const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
\`\`\`

<v-click>

<Demo002Path2DSvg/>

</v-click>

<!-- 

常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径
 -->
`,title:"path2D使用SVG",content:`### 使用 SVG paths
Path2D 可以使用 SVG path data 来初始化 canvas 上的路径

这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)

\`\`\`js
const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
\`\`\`

<v-click>

<Demo002Path2DSvg/>

</v-click>`,frontmatter:{hideInToc:!0,title:"path2D使用SVG",srcSequence:"./pages/01shape.md"},note:`常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径`,index:14,start:159,end:189,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
hideInToc: true
title: path2D使用SVG
---
### 使用 SVG paths
Path2D 可以使用 SVG path data 来初始化 canvas 上的路径

这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)

\`\`\`js
const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
\`\`\`

<v-click>

<Demo002Path2DSvg/>

</v-click>

<!-- 

常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径
 -->
`,title:"path2D使用SVG",content:`### 使用 SVG paths
Path2D 可以使用 SVG path data 来初始化 canvas 上的路径

这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)

\`\`\`js
const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
\`\`\`

<v-click>

<Demo002Path2DSvg/>

</v-click>`,frontmatter:{hideInToc:!0,title:"path2D使用SVG"},note:`常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径`,index:6,start:159,end:189},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:`<p>常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:DS,meta:{hideInToc:!0,title:"示例全部",srcSequence:"./pages/01shape.md",slide:{raw:`---
hideInToc: true
title: 示例全部
---

<Demo002Shape class="inline-block"/>
`,title:"示例全部",content:'<Demo002Shape class="inline-block"/>',frontmatter:{hideInToc:!0,title:"示例全部",srcSequence:"./pages/01shape.md"},index:15,start:189,end:196,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",raw:`---
hideInToc: true
title: 示例全部
---

<Demo002Shape class="inline-block"/>
`,title:"示例全部",content:'<Demo002Shape class="inline-block"/>',frontmatter:{hideInToc:!0,title:"示例全部"},index:7,start:189,end:196},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\01shape.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:CS,meta:{srcSequence:"./pages/02color-style.md",slide:{raw:null,content:"",frontmatter:{srcSequence:"./pages/02color-style.md"},index:16,start:0,end:1,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:"",content:"",frontmatter:{},index:0,start:0,end:1},inline:{raw:`---
src: ./pages/02color-style.md
---
`,content:"",frontmatter:{},index:9,start:186,end:190},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:$S,meta:{title:"使用样式和颜色",level:1,layout:"center",srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 使用样式和颜色
level: 1
layout: center
---
# 07.使用样式和颜色
`,title:"使用样式和颜色",level:1,content:"# 07.使用样式和颜色",frontmatter:{title:"使用样式和颜色",level:1,layout:"center",srcSequence:"./pages/02color-style.md"},index:17,start:1,end:8,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 使用样式和颜色
level: 1
layout: center
---
# 07.使用样式和颜色
`,title:"使用样式和颜色",level:1,content:"# 07.使用样式和颜色",frontmatter:{title:"使用样式和颜色",level:1,layout:"center"},index:1,start:1,end:8},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:zS,meta:{title:"色彩",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 色彩
level: 2
---

### 色彩 Colors

有两种方法给图形上色

1. \`fillStyle = color\` 设置图形的填充颜色
2. \`strokeStyle = color\` 设置图形轮廓的颜色

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

<v-click>

<Demo003FillStyle/>

</v-click>

<v-click>

<Demo003StrokeStyle class=" ml-10" />

</v-click>
`,title:"色彩",level:2,content:`### 色彩 Colors

有两种方法给图形上色

1. \`fillStyle = color\` 设置图形的填充颜色
2. \`strokeStyle = color\` 设置图形轮廓的颜色

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

<v-click>

<Demo003FillStyle/>

</v-click>

<v-click>

<Demo003StrokeStyle class=" ml-10" />

</v-click>`,frontmatter:{title:"色彩",level:2,srcSequence:"./pages/02color-style.md"},index:18,start:8,end:34,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 色彩
level: 2
---

### 色彩 Colors

有两种方法给图形上色

1. \`fillStyle = color\` 设置图形的填充颜色
2. \`strokeStyle = color\` 设置图形轮廓的颜色

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

<v-click>

<Demo003FillStyle/>

</v-click>

<v-click>

<Demo003StrokeStyle class=" ml-10" />

</v-click>
`,title:"色彩",level:2,content:`### 色彩 Colors

有两种方法给图形上色

1. \`fillStyle = color\` 设置图形的填充颜色
2. \`strokeStyle = color\` 设置图形轮廓的颜色

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

<v-click>

<Demo003FillStyle/>

</v-click>

<v-click>

<Demo003StrokeStyle class=" ml-10" />

</v-click>`,frontmatter:{title:"色彩",level:2},index:2,start:8,end:34},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:oB,meta:{title:"透明度",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 透明度
level: 2
---

### 透明度 Transparency
除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。

1. globalAlpha = transparencyValue
   这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。

2. strokeStyle 和 fillStyle  接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色

\`\`\`js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";

\`\`\`

<v-click>

<Demo003Transparency  />

</v-click>

<v-click>

<Demo003TransparencyRgba class=" ml-10" />

</v-click>
`,title:"透明度",level:2,content:`### 透明度 Transparency
除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。

1. globalAlpha = transparencyValue
   这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。

2. strokeStyle 和 fillStyle  接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色

\`\`\`js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";

\`\`\`

<v-click>

<Demo003Transparency  />

</v-click>

<v-click>

<Demo003TransparencyRgba class=" ml-10" />

</v-click>`,frontmatter:{title:"透明度",level:2,srcSequence:"./pages/02color-style.md"},index:19,start:34,end:66,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 透明度
level: 2
---

### 透明度 Transparency
除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。

1. globalAlpha = transparencyValue
   这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。

2. strokeStyle 和 fillStyle  接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色

\`\`\`js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";

\`\`\`

<v-click>

<Demo003Transparency  />

</v-click>

<v-click>

<Demo003TransparencyRgba class=" ml-10" />

</v-click>
`,title:"透明度",level:2,content:`### 透明度 Transparency
除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。

1. globalAlpha = transparencyValue
   这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。

2. strokeStyle 和 fillStyle  接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色

\`\`\`js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";

\`\`\`

<v-click>

<Demo003Transparency  />

</v-click>

<v-click>

<Demo003TransparencyRgba class=" ml-10" />

</v-click>`,frontmatter:{title:"透明度",level:2},index:3,start:34,end:66},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:bB,meta:{title:"线型",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 线型
level: 2
---

### 线型 Line Style

1. lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。
2. lineCap = type 设置线条末端样式。
3. lineJoin = type 设定线条与线条间接合处的样式。
4. miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. setLineDash(segments) 设置当前虚线样式。
7. lineDashOffset = value 设置虚线样式的起始偏移量。

<v-click>

<Demo003LineWidth  />

</v-click>

<v-click>

<Demo003LineCap class=" ml-10" />

</v-click>

<v-click>

<Demo003LineJoin class=" ml-10" />

</v-click>
`,title:"线型",level:2,content:`### 线型 Line Style

1. lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。
2. lineCap = type 设置线条末端样式。
3. lineJoin = type 设定线条与线条间接合处的样式。
4. miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. setLineDash(segments) 设置当前虚线样式。
7. lineDashOffset = value 设置虚线样式的起始偏移量。

<v-click>

<Demo003LineWidth  />

</v-click>

<v-click>

<Demo003LineCap class=" ml-10" />

</v-click>

<v-click>

<Demo003LineJoin class=" ml-10" />

</v-click>`,frontmatter:{title:"线型",level:2,srcSequence:"./pages/02color-style.md"},index:20,start:66,end:99,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 线型
level: 2
---

### 线型 Line Style

1. lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。
2. lineCap = type 设置线条末端样式。
3. lineJoin = type 设定线条与线条间接合处的样式。
4. miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. setLineDash(segments) 设置当前虚线样式。
7. lineDashOffset = value 设置虚线样式的起始偏移量。

<v-click>

<Demo003LineWidth  />

</v-click>

<v-click>

<Demo003LineCap class=" ml-10" />

</v-click>

<v-click>

<Demo003LineJoin class=" ml-10" />

</v-click>
`,title:"线型",level:2,content:`### 线型 Line Style

1. lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。
2. lineCap = type 设置线条末端样式。
3. lineJoin = type 设定线条与线条间接合处的样式。
4. miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. setLineDash(segments) 设置当前虚线样式。
7. lineDashOffset = value 设置虚线样式的起始偏移量。

<v-click>

<Demo003LineWidth  />

</v-click>

<v-click>

<Demo003LineCap class=" ml-10" />

</v-click>

<v-click>

<Demo003LineJoin class=" ml-10" />

</v-click>`,frontmatter:{title:"线型",level:2},index:4,start:66,end:99},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:TB,meta:{hideInToc:!0,srcSequence:"./pages/02color-style.md",slide:{raw:`---
hideInToc: true
---

### miterLimit

之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。

miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量**线宽与此miterLimit属性值（HTML \`<canvas>\`默认为 10.0）的乘积**  
可以用三角函数算出miterLimit对应的限定角度

- 斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。

<v-click>

<Demo003MiterLimit  />

</v-click>
`,title:"miterLimit",level:3,content:`### miterLimit

之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。

miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量**线宽与此miterLimit属性值（HTML \`<canvas>\`默认为 10.0）的乘积**  
可以用三角函数算出miterLimit对应的限定角度

- 斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。

<v-click>

<Demo003MiterLimit  />

</v-click>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/02color-style.md"},index:21,start:99,end:119,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
hideInToc: true
---

### miterLimit

之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。

miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量**线宽与此miterLimit属性值（HTML \`<canvas>\`默认为 10.0）的乘积**  
可以用三角函数算出miterLimit对应的限定角度

- 斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。

<v-click>

<Demo003MiterLimit  />

</v-click>
`,title:"miterLimit",level:3,content:`### miterLimit

之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。

miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量**线宽与此miterLimit属性值（HTML \`<canvas>\`默认为 10.0）的乘积**  
可以用三角函数算出miterLimit对应的限定角度

- 斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。

<v-click>

<Demo003MiterLimit  />

</v-click>`,frontmatter:{hideInToc:!0},index:5,start:99,end:119},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:VB,meta:{hideInToc:!0,srcSequence:"./pages/02color-style.md",slide:{raw:`---
hideInToc: true
---

### 虚线

用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。  
setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]  
lineDashOffset 属性设置起始偏移量。

<v-click>

<Demo003LineDash />

</v-click>

<v-click>

<Demo003LineDash2 class=" ml-10"  :width="300"/>

</v-click>
`,title:"虚线",level:3,content:`### 虚线

用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。  
setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]  
lineDashOffset 属性设置起始偏移量。

<v-click>

<Demo003LineDash />

</v-click>

<v-click>

<Demo003LineDash2 class=" ml-10"  :width="300"/>

</v-click>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/02color-style.md"},index:22,start:119,end:141,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
hideInToc: true
---

### 虚线

用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。  
setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]  
lineDashOffset 属性设置起始偏移量。

<v-click>

<Demo003LineDash />

</v-click>

<v-click>

<Demo003LineDash2 class=" ml-10"  :width="300"/>

</v-click>
`,title:"虚线",level:3,content:`### 虚线

用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。  
setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]  
lineDashOffset 属性设置起始偏移量。

<v-click>

<Demo003LineDash />

</v-click>

<v-click>

<Demo003LineDash2 class=" ml-10"  :width="300"/>

</v-click>`,frontmatter:{hideInToc:!0},index:6,start:119,end:141},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:XB,meta:{title:"渐变",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 渐变
level: 2
---

## 渐变 Gradients
我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。

1. \`createLinearGradient(x1, y1, x2, y2)\` 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)
2. \`createRadialGradient(x1, y1, r1, x2, y2, r2)\`创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

创建出 \`canvasGradient\` 对象后，我们就可以用 \`addColorStop\` 方法给它上色了。  

\`gradient.addColorStop(position, color)\` 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。
`,title:"渐变",level:2,content:"## 渐变 Gradients\n我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。\n\n1. `createLinearGradient(x1, y1, x2, y2)` 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)\n2. `createRadialGradient(x1, y1, r1, x2, y2, r2)`创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。\n\n创建出 `canvasGradient` 对象后，我们就可以用 `addColorStop` 方法给它上色了。  \n\n`gradient.addColorStop(position, color)` 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。",frontmatter:{title:"渐变",level:2,srcSequence:"./pages/02color-style.md"},index:23,start:141,end:156,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 渐变
level: 2
---

## 渐变 Gradients
我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。

1. \`createLinearGradient(x1, y1, x2, y2)\` 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)
2. \`createRadialGradient(x1, y1, r1, x2, y2, r2)\`创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

创建出 \`canvasGradient\` 对象后，我们就可以用 \`addColorStop\` 方法给它上色了。  

\`gradient.addColorStop(position, color)\` 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。
`,title:"渐变",level:2,content:"## 渐变 Gradients\n我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。\n\n1. `createLinearGradient(x1, y1, x2, y2)` 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)\n2. `createRadialGradient(x1, y1, r1, x2, y2, r2)`创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。\n\n创建出 `canvasGradient` 对象后，我们就可以用 `addColorStop` 方法给它上色了。  \n\n`gradient.addColorStop(position, color)` 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。",frontmatter:{title:"渐变",level:2},index:7,start:141,end:156},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:r6,meta:{srcSequence:"./pages/02color-style.md",slide:{raw:`
<v-click>

<Demo005LinearGradient1 />

</v-click>

<v-click>

<Demo005RadialGradient class=" ml-10" />

</v-click>
`,content:`<v-click>

<Demo005LinearGradient1 />

</v-click>

<v-click>

<Demo005RadialGradient class=" ml-10" />

</v-click>`,frontmatter:{srcSequence:"./pages/02color-style.md"},index:24,start:157,end:170,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`
<v-click>

<Demo005LinearGradient1 />

</v-click>

<v-click>

<Demo005RadialGradient class=" ml-10" />

</v-click>
`,content:`<v-click>

<Demo005LinearGradient1 />

</v-click>

<v-click>

<Demo005RadialGradient class=" ml-10" />

</v-click>`,frontmatter:{},index:8,start:157,end:170},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:m6,meta:{title:"图案样式",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 图案样式
level: 2
---

## 图案样式 Patterns

\`createPattern(image, type)\`,该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：\`repeat\`，\`repeat-x\`，\`repeat-y\` 和 \`no-repeat\`。

图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可

<v-click>

<Demo006Patterns />

</v-click>
`,title:"图案样式",level:2,content:"## 图案样式 Patterns\n\n`createPattern(image, type)`,该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：`repeat`，`repeat-x`，`repeat-y` 和 `no-repeat`。\n\n图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可\n\n<v-click>\n\n<Demo006Patterns />\n\n</v-click>",frontmatter:{title:"图案样式",level:2,srcSequence:"./pages/02color-style.md"},index:25,start:170,end:187,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 图案样式
level: 2
---

## 图案样式 Patterns

\`createPattern(image, type)\`,该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：\`repeat\`，\`repeat-x\`，\`repeat-y\` 和 \`no-repeat\`。

图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可

<v-click>

<Demo006Patterns />

</v-click>
`,title:"图案样式",level:2,content:"## 图案样式 Patterns\n\n`createPattern(image, type)`,该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：`repeat`，`repeat-x`，`repeat-y` 和 `no-repeat`。\n\n图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可\n\n<v-click>\n\n<Demo006Patterns />\n\n</v-click>",frontmatter:{title:"图案样式",level:2},index:9,start:170,end:187},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:x6,meta:{title:"阴影",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 阴影
level: 2
---

## 阴影 Shadows

\`shadowOffsetX = float\`  
\`shadowOffsetY = float\`  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。  

\`shadowBlur = float\` shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。  
\`shadowColor = color\` shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。  

<v-click>

<Demo007Shadows />

</v-click>
`,title:"阴影",level:2,content:`## 阴影 Shadows

\`shadowOffsetX = float\`  
\`shadowOffsetY = float\`  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。  

\`shadowBlur = float\` shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。  
\`shadowColor = color\` shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。  

<v-click>

<Demo007Shadows />

</v-click>`,frontmatter:{title:"阴影",level:2,srcSequence:"./pages/02color-style.md"},index:26,start:187,end:207,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 阴影
level: 2
---

## 阴影 Shadows

\`shadowOffsetX = float\`  
\`shadowOffsetY = float\`  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。  

\`shadowBlur = float\` shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。  
\`shadowColor = color\` shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。  

<v-click>

<Demo007Shadows />

</v-click>
`,title:"阴影",level:2,content:`## 阴影 Shadows

\`shadowOffsetX = float\`  
\`shadowOffsetY = float\`  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。  

\`shadowBlur = float\` shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。  
\`shadowColor = color\` shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。  

<v-click>

<Demo007Shadows />

</v-click>`,frontmatter:{title:"阴影",level:2},index:10,start:187,end:207},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:T6,meta:{title:"填充规则",level:2,srcSequence:"./pages/02color-style.md",slide:{raw:`---
title: 填充规则
level: 2
---
## 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
两个可能的值：

- \`nonzero\` 默认值
- \`evenodd\`

<v-click>

<Demo008WindingRule />

</v-click>
`,title:"填充规则",level:2,content:`## 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
两个可能的值：

- \`nonzero\` 默认值
- \`evenodd\`

<v-click>

<Demo008WindingRule />

</v-click>`,frontmatter:{title:"填充规则",level:2,srcSequence:"./pages/02color-style.md"},index:27,start:207,end:225,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",raw:`---
title: 填充规则
level: 2
---
## 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
两个可能的值：

- \`nonzero\` 默认值
- \`evenodd\`

<v-click>

<Demo008WindingRule />

</v-click>
`,title:"填充规则",level:2,content:`## 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
两个可能的值：

- \`nonzero\` 默认值
- \`evenodd\`

<v-click>

<Demo008WindingRule />

</v-click>`,frontmatter:{title:"填充规则",level:2},index:11,start:207,end:225},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\02color-style.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:O6,meta:{title:"绘制文本",level:1,layout:"center",srcSequence:"./pages/03text.md",slide:{raw:null,title:"绘制文本",level:1,content:"# 08.绘制文本",frontmatter:{title:"绘制文本",level:1,layout:"center",srcSequence:"./pages/03text.md"},index:28,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",raw:`---
title: 绘制文本
level: 1
layout: center
---
# 08.绘制文本
`,title:"绘制文本",level:1,content:"# 08.绘制文本",frontmatter:{title:"绘制文本",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/03text.md
---`,content:"",frontmatter:{},index:10,start:190,end:193},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:G6,meta:{title:"绘制文本",level:2,srcSequence:"./pages/03text.md",slide:{raw:`---
title: 绘制文本
level: 2
---

## 绘制文本
canvas 提供了两种方法来渲染文本：

1. \`·fillText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. \`strokeText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

<v-click>

<Demo009FillText />

</v-click>

<v-click>

<Demo009StrokeText class=" ml-10" />

</v-click>
`,title:"绘制文本",level:2,content:`## 绘制文本
canvas 提供了两种方法来渲染文本：

1. \`·fillText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. \`strokeText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

<v-click>

<Demo009FillText />

</v-click>

<v-click>

<Demo009StrokeText class=" ml-10" />

</v-click>`,frontmatter:{title:"绘制文本",level:2,srcSequence:"./pages/03text.md"},index:29,start:7,end:30,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",raw:`---
title: 绘制文本
level: 2
---

## 绘制文本
canvas 提供了两种方法来渲染文本：

1. \`·fillText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. \`strokeText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

<v-click>

<Demo009FillText />

</v-click>

<v-click>

<Demo009StrokeText class=" ml-10" />

</v-click>
`,title:"绘制文本",level:2,content:`## 绘制文本
canvas 提供了两种方法来渲染文本：

1. \`·fillText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. \`strokeText(text, x, y [, maxWidth])\` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

<v-click>

<Demo009FillText />

</v-click>

<v-click>

<Demo009StrokeText class=" ml-10" />

</v-click>`,frontmatter:{title:"绘制文本",level:2},index:1,start:7,end:30},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Z6,meta:{title:"文本样式",level:2,srcSequence:"./pages/03text.md",slide:{raw:`---
title: 文本样式
level: 2
---

## 文本样式

\`font = value\` 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。
\`textAlign = value\`  文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。
\`textBaseline = value\` 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
\`direction = value\` 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
`,title:"文本样式",level:2,content:"## 文本样式\n\n`font = value` 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。\n`textAlign = value`  文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。\n`textBaseline = value` 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。\n`direction = value` 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。",frontmatter:{title:"文本样式",level:2,srcSequence:"./pages/03text.md"},index:30,start:30,end:42,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",raw:`---
title: 文本样式
level: 2
---

## 文本样式

\`font = value\` 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。
\`textAlign = value\`  文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。
\`textBaseline = value\` 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
\`direction = value\` 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
`,title:"文本样式",level:2,content:"## 文本样式\n\n`font = value` 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。\n`textAlign = value`  文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。\n`textBaseline = value` 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。\n`direction = value` 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。",frontmatter:{title:"文本样式",level:2},index:2,start:30,end:42},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:n4,meta:{title:"预测文本宽度",level:2,srcSequence:"./pages/03text.md",slide:{raw:`---
title: 预测文本宽度
level: 2
---

## 预测文本宽度

\`measureText()\` 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

\`\`\`js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}


\`\`\`
`,title:"预测文本宽度",level:2,content:`## 预测文本宽度

\`measureText()\` 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

\`\`\`js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}


\`\`\``,frontmatter:{title:"预测文本宽度",level:2,srcSequence:"./pages/03text.md"},index:31,start:42,end:61,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",raw:`---
title: 预测文本宽度
level: 2
---

## 预测文本宽度

\`measureText()\` 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

\`\`\`js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}


\`\`\`
`,title:"预测文本宽度",level:2,content:`## 预测文本宽度

\`measureText()\` 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

\`\`\`js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}


\`\`\``,frontmatter:{title:"预测文本宽度",level:2},index:3,start:42,end:61},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\03text.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:l4,meta:{title:"使用图片",level:1,layout:"center",srcSequence:"./pages/04image.md",slide:{raw:null,title:"使用图片",level:1,content:"# 09.使用图片",frontmatter:{title:"使用图片",level:1,layout:"center",srcSequence:"./pages/04image.md"},index:32,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 使用图片
level: 1
layout: center
---
# 09.使用图片
`,title:"使用图片",level:1,content:"# 09.使用图片",frontmatter:{title:"使用图片",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/04image.md
---
`,content:"",frontmatter:{},index:11,start:193,end:197},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:y4,meta:{title:"获取需要绘制的图片",level:2,srcSequence:"./pages/04image.md",slide:{raw:`---
title: 获取需要绘制的图片
level: 2

---

## 获取需要绘制的图片

canvas的API可以使用下面这些类型的一种作为图片的源

**[\`HTMLImageElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

这些图片是由 \`Image()\` 函数构造出来的，或者任何的 [\`<img>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素

**[\`HTMLVideoElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

用一个 HTML 的 [\`<video>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

**[\`HTMLCanvasElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

可以使用另一个 [\`<canvas>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

**[\`ImageBitmap\`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 [\`CanvasImageSource\`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)类型来引用。
`,title:"获取需要绘制的图片",level:2,content:`## 获取需要绘制的图片

canvas的API可以使用下面这些类型的一种作为图片的源

**[\`HTMLImageElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

这些图片是由 \`Image()\` 函数构造出来的，或者任何的 [\`<img>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素

**[\`HTMLVideoElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

用一个 HTML 的 [\`<video>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

**[\`HTMLCanvasElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

可以使用另一个 [\`<canvas>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

**[\`ImageBitmap\`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 [\`CanvasImageSource\`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)类型来引用。`,frontmatter:{title:"获取需要绘制的图片",level:2,srcSequence:"./pages/04image.md"},index:33,start:7,end:35,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 获取需要绘制的图片
level: 2

---

## 获取需要绘制的图片

canvas的API可以使用下面这些类型的一种作为图片的源

**[\`HTMLImageElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

这些图片是由 \`Image()\` 函数构造出来的，或者任何的 [\`<img>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素

**[\`HTMLVideoElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

用一个 HTML 的 [\`<video>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

**[\`HTMLCanvasElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

可以使用另一个 [\`<canvas>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

**[\`ImageBitmap\`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 [\`CanvasImageSource\`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)类型来引用。
`,title:"获取需要绘制的图片",level:2,content:`## 获取需要绘制的图片

canvas的API可以使用下面这些类型的一种作为图片的源

**[\`HTMLImageElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

这些图片是由 \`Image()\` 函数构造出来的，或者任何的 [\`<img>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素

**[\`HTMLVideoElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

用一个 HTML 的 [\`<video>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

**[\`HTMLCanvasElement\`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

可以使用另一个 [\`<canvas>\`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

**[\`ImageBitmap\`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 [\`CanvasImageSource\`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)类型来引用。`,frontmatter:{title:"获取需要绘制的图片",level:2},index:1,start:7,end:35},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:C4,meta:{title:"绘制图片",level:2,srcSequence:"./pages/04image.md",slide:{raw:`---
title: 绘制图片
level: 2
---

## 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

\`drawImage(image, x, y)\` 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。

<v-clicks>

<Demo010DrawImage />

</v-clicks>
`,title:"绘制图片",level:2,content:`## 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

\`drawImage(image, x, y)\` 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。

<v-clicks>

<Demo010DrawImage />

</v-clicks>`,frontmatter:{title:"绘制图片",level:2,srcSequence:"./pages/04image.md"},index:34,start:35,end:54,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 绘制图片
level: 2
---

## 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

\`drawImage(image, x, y)\` 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。

<v-clicks>

<Demo010DrawImage />

</v-clicks>
`,title:"绘制图片",level:2,content:`## 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

\`drawImage(image, x, y)\` 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。

<v-clicks>

<Demo010DrawImage />

</v-clicks>`,frontmatter:{title:"绘制图片",level:2},index:2,start:35,end:54},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:P4,meta:{title:"缩放",level:2,srcSequence:"./pages/04image.md",slide:{raw:`---
title: 缩放
level: 2
---

## 缩放
drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。
\`drawImage(image, x, y, width, height)\`
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

下面是用一张图片缩放后在canvas中平铺的例子

<v-clicks>

<Demo010DrawImageScale />

</v-clicks>
`,title:"缩放",level:2,content:`## 缩放
drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。
\`drawImage(image, x, y, width, height)\`
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

下面是用一张图片缩放后在canvas中平铺的例子

<v-clicks>

<Demo010DrawImageScale />

</v-clicks>`,frontmatter:{title:"缩放",level:2,srcSequence:"./pages/04image.md"},index:35,start:54,end:72,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 缩放
level: 2
---

## 缩放
drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。
\`drawImage(image, x, y, width, height)\`
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

下面是用一张图片缩放后在canvas中平铺的例子

<v-clicks>

<Demo010DrawImageScale />

</v-clicks>
`,title:"缩放",level:2,content:`## 缩放
drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。
\`drawImage(image, x, y, width, height)\`
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

下面是用一张图片缩放后在canvas中平铺的例子

<v-clicks>

<Demo010DrawImageScale />

</v-clicks>`,frontmatter:{title:"缩放",level:2},index:3,start:54,end:72},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:F4,meta:{title:"切片",level:2,srcSequence:"./pages/04image.md",slide:{raw:`---
title: 切片
level: 2
---

## 切片 Slicing
drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。  

\`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\` 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。

![drawImage slicing](/images/canvas_drawimage.jpg)
`,title:"切片",level:2,content:`## 切片 Slicing
drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。  

\`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\` 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。

![drawImage slicing](/images/canvas_drawimage.jpg)`,frontmatter:{title:"切片",level:2,srcSequence:"./pages/04image.md"},index:36,start:72,end:84,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 切片
level: 2
---

## 切片 Slicing
drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。  

\`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\` 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。

![drawImage slicing](/images/canvas_drawimage.jpg)
`,title:"切片",level:2,content:`## 切片 Slicing
drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。  

\`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\` 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。

![drawImage slicing](/images/canvas_drawimage.jpg)`,frontmatter:{title:"切片",level:2},index:4,start:72,end:84},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:G4,meta:{hideInToc:!0,srcSequence:"./pages/04image.md",slide:{raw:`---
hideInToc: true
---

<Demo010DrawImageSlice class="inline-block mt-10" />
`,content:'<Demo010DrawImageSlice class="inline-block mt-10" />',frontmatter:{hideInToc:!0,srcSequence:"./pages/04image.md"},index:37,start:84,end:90,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
hideInToc: true
---

<Demo010DrawImageSlice class="inline-block mt-10" />
`,content:'<Demo010DrawImageSlice class="inline-block mt-10" />',frontmatter:{hideInToc:!0},index:5,start:84,end:90},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:J4,meta:{title:"控制图像的缩放行为",level:2,srcSequence:"./pages/04image.md",slide:{raw:`---
title: 控制图像的缩放行为
level: 2
---

## 控制图像的缩放行为

过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：

\`\`\`js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


\`\`\`
`,title:"控制图像的缩放行为",level:2,content:`## 控制图像的缩放行为

过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：

\`\`\`js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


\`\`\``,frontmatter:{title:"控制图像的缩放行为",level:2,srcSequence:"./pages/04image.md"},index:38,start:90,end:108,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",raw:`---
title: 控制图像的缩放行为
level: 2
---

## 控制图像的缩放行为

过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：

\`\`\`js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


\`\`\`
`,title:"控制图像的缩放行为",level:2,content:`## 控制图像的缩放行为

过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：

\`\`\`js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


\`\`\``,frontmatter:{title:"控制图像的缩放行为",level:2},index:6,start:90,end:108},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\04image.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:tE,meta:{title:"变形",level:1,layout:"center",srcSequence:"./pages/05transformations.md",slide:{raw:null,title:"变形",level:1,content:"# 10.变形 Transformations",frontmatter:{title:"变形",level:1,layout:"center",srcSequence:"./pages/05transformations.md"},index:39,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: 变形
level: 1
layout: center
---
# 10.变形 Transformations
`,title:"变形",level:1,content:"# 10.变形 Transformations",frontmatter:{title:"变形",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/05transformations.md
---
`,content:"",frontmatter:{},index:12,start:197,end:201},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:iE,meta:{title:"状态的保存和恢复",level:2,srcSequence:"./pages/05transformations.md",slide:{raw:`---
title: 状态的保存和恢复
level: 2

---
## 状态的保存和恢复

\`save()\` 保存画布 (canvas) 的所有状态  
\`restore()\` 恢复上一个保存的状态  
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。
`,title:"状态的保存和恢复",level:2,content:`## 状态的保存和恢复

\`save()\` 保存画布 (canvas) 的所有状态  
\`restore()\` 恢复上一个保存的状态  
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。`,frontmatter:{title:"状态的保存和恢复",level:2,srcSequence:"./pages/05transformations.md"},index:40,start:7,end:26,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: 状态的保存和恢复
level: 2

---
## 状态的保存和恢复

\`save()\` 保存画布 (canvas) 的所有状态  
\`restore()\` 恢复上一个保存的状态  
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。
`,title:"状态的保存和恢复",level:2,content:`## 状态的保存和恢复

\`save()\` 保存画布 (canvas) 的所有状态  
\`restore()\` 恢复上一个保存的状态  
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。`,frontmatter:{title:"状态的保存和恢复",level:2},index:1,start:7,end:26},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:mE,meta:{srcSequence:"./pages/05transformations.md",slide:{raw:`
下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。

<Demo011SaveRestore />
`,content:`下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。

<Demo011SaveRestore />`,frontmatter:{srcSequence:"./pages/05transformations.md"},index:41,start:27,end:32,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`
下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。

<Demo011SaveRestore />
`,content:`下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。

<Demo011SaveRestore />`,frontmatter:{},index:2,start:27,end:32},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:kE,meta:{title:"移动",level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md",slide:{raw:`---
title: 移动
level: 2
layout: two-cols
---
## 移动 Translating

\`translate(x, y)\` translate方法接受两个参数。x是左右偏移量，y 是上下偏移量

![canvas_grid_translate](/images/canvas_grid_translate.png)

::right::

<v-clicks>

<Demo012Translate />

</v-clicks>
`,title:"移动",level:2,content:`## 移动 Translating

\`translate(x, y)\` translate方法接受两个参数。x是左右偏移量，y 是上下偏移量

![canvas_grid_translate](/images/canvas_grid_translate.png)

::right::

<v-clicks>

<Demo012Translate />

</v-clicks>`,frontmatter:{title:"移动",level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md"},index:42,start:32,end:51,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: 移动
level: 2
layout: two-cols
---
## 移动 Translating

\`translate(x, y)\` translate方法接受两个参数。x是左右偏移量，y 是上下偏移量

![canvas_grid_translate](/images/canvas_grid_translate.png)

::right::

<v-clicks>

<Demo012Translate />

</v-clicks>
`,title:"移动",level:2,content:`## 移动 Translating

\`translate(x, y)\` translate方法接受两个参数。x是左右偏移量，y 是上下偏移量

![canvas_grid_translate](/images/canvas_grid_translate.png)

::right::

<v-clicks>

<Demo012Translate />

</v-clicks>`,frontmatter:{title:"移动",level:2,layout:"two-cols"},index:3,start:32,end:51},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:OE,meta:{title:"旋转",level:2,srcSequence:"./pages/05transformations.md",slide:{raw:`---
title: 旋转
level: 2
---
## 旋转 Rotating
以原点为中心旋转 canvas

\`rotate(angle)\` 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

<v-clicks>

<Demo013Rotate />

</v-clicks>
`,title:"旋转",level:2,content:`## 旋转 Rotating
以原点为中心旋转 canvas

\`rotate(angle)\` 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

<v-clicks>

<Demo013Rotate />

</v-clicks>`,frontmatter:{title:"旋转",level:2,srcSequence:"./pages/05transformations.md"},index:43,start:51,end:67,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: 旋转
level: 2
---
## 旋转 Rotating
以原点为中心旋转 canvas

\`rotate(angle)\` 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

<v-clicks>

<Demo013Rotate />

</v-clicks>
`,title:"旋转",level:2,content:`## 旋转 Rotating
以原点为中心旋转 canvas

\`rotate(angle)\` 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

<v-clicks>

<Demo013Rotate />

</v-clicks>`,frontmatter:{title:"旋转",level:2},index:4,start:51,end:67},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:VE,meta:{title:"缩放",level:2,srcSequence:"./pages/05transformations.md",slide:{raw:`---
title: 缩放
level: 2
---
## 缩放 Scaling

\`scale(x, y)\` scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

<v-clicks>

<Demo014Scale />

</v-clicks>
`,title:"缩放",level:2,content:`## 缩放 Scaling

\`scale(x, y)\` scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

<v-clicks>

<Demo014Scale />

</v-clicks>`,frontmatter:{title:"缩放",level:2,srcSequence:"./pages/05transformations.md"},index:44,start:67,end:83,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: 缩放
level: 2
---
## 缩放 Scaling

\`scale(x, y)\` scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

<v-clicks>

<Demo014Scale />

</v-clicks>
`,title:"缩放",level:2,content:`## 缩放 Scaling

\`scale(x, y)\` scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

<v-clicks>

<Demo014Scale />

</v-clicks>`,frontmatter:{title:"缩放",level:2},index:5,start:67,end:83},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:t$,meta:{title:"Transforms",level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md",slide:{raw:`---
title: Transforms
level: 2
layout: two-cols
---
## 变形 Transforms

\`transform(a, b, c, d, e, f)\`,这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

$$
\\left[\\begin{array}{l l l}{a}&{c}&{e}\\\\ {b}&{d}&{f}\\\\ {0}&{0}&{1}\\end{array}\\right]
$$

1. a (m11) 水平方向的缩放
2. b(m12) 竖直方向的倾斜偏移
3. c(m21) 水平方向的倾斜偏移
4. d(m22) 竖直方向的缩放
5. e(dx) 水平方向的移动
6. f(dy) 竖直方向的移动

::right::

\`setTransform(a, b, c, d, e, f)\` 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。

\`resetTransform()\` 重置当前变形为单位矩阵，它和调用以下语句是一样的：\`ctx.setTransform(1, 0, 0, 1, 0, 0)\`;

<v-clicks>

<Demo015Transforms />

</v-clicks>
`,title:"Transforms",level:2,content:`## 变形 Transforms

\`transform(a, b, c, d, e, f)\`,这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

$$
\\left[\\begin{array}{l l l}{a}&{c}&{e}\\\\ {b}&{d}&{f}\\\\ {0}&{0}&{1}\\end{array}\\right]
$$

1. a (m11) 水平方向的缩放
2. b(m12) 竖直方向的倾斜偏移
3. c(m21) 水平方向的倾斜偏移
4. d(m22) 竖直方向的缩放
5. e(dx) 水平方向的移动
6. f(dy) 竖直方向的移动

::right::

\`setTransform(a, b, c, d, e, f)\` 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。

\`resetTransform()\` 重置当前变形为单位矩阵，它和调用以下语句是一样的：\`ctx.setTransform(1, 0, 0, 1, 0, 0)\`;

<v-clicks>

<Demo015Transforms />

</v-clicks>`,frontmatter:{title:"Transforms",level:2,layout:"two-cols",srcSequence:"./pages/05transformations.md"},index:45,start:83,end:115,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",raw:`---
title: Transforms
level: 2
layout: two-cols
---
## 变形 Transforms

\`transform(a, b, c, d, e, f)\`,这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

$$
\\left[\\begin{array}{l l l}{a}&{c}&{e}\\\\ {b}&{d}&{f}\\\\ {0}&{0}&{1}\\end{array}\\right]
$$

1. a (m11) 水平方向的缩放
2. b(m12) 竖直方向的倾斜偏移
3. c(m21) 水平方向的倾斜偏移
4. d(m22) 竖直方向的缩放
5. e(dx) 水平方向的移动
6. f(dy) 竖直方向的移动

::right::

\`setTransform(a, b, c, d, e, f)\` 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。

\`resetTransform()\` 重置当前变形为单位矩阵，它和调用以下语句是一样的：\`ctx.setTransform(1, 0, 0, 1, 0, 0)\`;

<v-clicks>

<Demo015Transforms />

</v-clicks>
`,title:"Transforms",level:2,content:`## 变形 Transforms

\`transform(a, b, c, d, e, f)\`,这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

$$
\\left[\\begin{array}{l l l}{a}&{c}&{e}\\\\ {b}&{d}&{f}\\\\ {0}&{0}&{1}\\end{array}\\right]
$$

1. a (m11) 水平方向的缩放
2. b(m12) 竖直方向的倾斜偏移
3. c(m21) 水平方向的倾斜偏移
4. d(m22) 竖直方向的缩放
5. e(dx) 水平方向的移动
6. f(dy) 竖直方向的移动

::right::

\`setTransform(a, b, c, d, e, f)\` 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。

\`resetTransform()\` 重置当前变形为单位矩阵，它和调用以下语句是一样的：\`ctx.setTransform(1, 0, 0, 1, 0, 0)\`;

<v-clicks>

<Demo015Transforms />

</v-clicks>`,frontmatter:{title:"Transforms",level:2,layout:"two-cols"},index:6,start:83,end:115},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\05transformations.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:o$,meta:{title:"组合与裁切",level:1,layout:"center",srcSequence:"./pages/06compositeAndCliping.md",slide:{raw:null,title:"组合与裁切",level:1,content:"# 11.组合与裁切",frontmatter:{title:"组合与裁切",level:1,layout:"center",srcSequence:"./pages/06compositeAndCliping.md"},index:46,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",raw:`---
title: 组合与裁切
level: 1
layout: center
---
# 11.组合与裁切
`,title:"组合与裁切",level:1,content:"# 11.组合与裁切",frontmatter:{title:"组合与裁切",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/06compositeAndCliping.md
---
`,content:"",frontmatter:{},index:13,start:201,end:205},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:m$,meta:{title:"globalCompositeOperation",level:2,srcSequence:"./pages/06compositeAndCliping.md",slide:{raw:`---
title: globalCompositeOperation
level: 2

---
## globalCompositeOperation

\`globalCompositeOperation = type\` 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

默认的情况是 source-over，会在现有画布之上绘制新图形。

[globalCompositeOperation
 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

\`\`\`js
ctx.globalCompositeOperation = type;
\`\`\`

<v-clicks>

<Demo016GlobalCompositeOperation />

</v-clicks>
`,title:"globalCompositeOperation",level:2,content:`## globalCompositeOperation

\`globalCompositeOperation = type\` 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

默认的情况是 source-over，会在现有画布之上绘制新图形。

[globalCompositeOperation
 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

\`\`\`js
ctx.globalCompositeOperation = type;
\`\`\`

<v-clicks>

<Demo016GlobalCompositeOperation />

</v-clicks>`,frontmatter:{title:"globalCompositeOperation",level:2,srcSequence:"./pages/06compositeAndCliping.md"},index:47,start:7,end:31,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",raw:`---
title: globalCompositeOperation
level: 2

---
## globalCompositeOperation

\`globalCompositeOperation = type\` 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

默认的情况是 source-over，会在现有画布之上绘制新图形。

[globalCompositeOperation
 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

\`\`\`js
ctx.globalCompositeOperation = type;
\`\`\`

<v-clicks>

<Demo016GlobalCompositeOperation />

</v-clicks>
`,title:"globalCompositeOperation",level:2,content:`## globalCompositeOperation

\`globalCompositeOperation = type\` 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

默认的情况是 source-over，会在现有画布之上绘制新图形。

[globalCompositeOperation
 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

\`\`\`js
ctx.globalCompositeOperation = type;
\`\`\`

<v-clicks>

<Demo016GlobalCompositeOperation />

</v-clicks>`,frontmatter:{title:"globalCompositeOperation",level:2},index:1,start:7,end:31},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:C$,meta:{title:"裁切路径",level:2,srcSequence:"./pages/06compositeAndCliping.md",slide:{raw:`---
title: 裁切路径
level: 2

---
## 裁切路径
裁切路径的作用是遮罩，会隐藏不需要的部分
默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

\`clip()\` 将当前正在构建的路径转换为当前的裁剪路径。

<v-clicks>

<Demo016Clip />

</v-clicks>
`,title:"裁切路径",level:2,content:`## 裁切路径
裁切路径的作用是遮罩，会隐藏不需要的部分
默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

\`clip()\` 将当前正在构建的路径转换为当前的裁剪路径。

<v-clicks>

<Demo016Clip />

</v-clicks>`,frontmatter:{title:"裁切路径",level:2,srcSequence:"./pages/06compositeAndCliping.md"},index:48,start:31,end:48,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",raw:`---
title: 裁切路径
level: 2

---
## 裁切路径
裁切路径的作用是遮罩，会隐藏不需要的部分
默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

\`clip()\` 将当前正在构建的路径转换为当前的裁剪路径。

<v-clicks>

<Demo016Clip />

</v-clicks>
`,title:"裁切路径",level:2,content:`## 裁切路径
裁切路径的作用是遮罩，会隐藏不需要的部分
默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

\`clip()\` 将当前正在构建的路径转换为当前的裁剪路径。

<v-clicks>

<Demo016Clip />

</v-clicks>`,frontmatter:{title:"裁切路径",level:2},index:2,start:31,end:48},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\06compositeAndCliping.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:S$,meta:{title:"动画",level:1,layout:"center",srcSequence:"./pages/07animation.md",slide:{raw:null,title:"动画",level:1,content:"# 12.动画",frontmatter:{title:"动画",level:1,layout:"center",srcSequence:"./pages/07animation.md"},index:49,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`---
title: 动画
level: 1
layout: center
---
# 12.动画
`,title:"动画",level:1,content:"# 12.动画",frontmatter:{title:"动画",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/07animation.md
---
`,content:"",frontmatter:{},index:14,start:205,end:209},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:P$,meta:{title:"动画的基本步骤",level:2,hideInToc:!0,srcSequence:"./pages/07animation.md",slide:{raw:`---
title: 动画的基本步骤
level: 2
hideInToc: true
---
## 动画的基本步骤
按照以下的步骤绘制每一帧

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。
`,title:"动画的基本步骤",level:2,content:`## 动画的基本步骤
按照以下的步骤绘制每一帧

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。`,frontmatter:{title:"动画的基本步骤",level:2,hideInToc:!0,srcSequence:"./pages/07animation.md"},index:50,start:7,end:20,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`---
title: 动画的基本步骤
level: 2
hideInToc: true
---
## 动画的基本步骤
按照以下的步骤绘制每一帧

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。
`,title:"动画的基本步骤",level:2,content:`## 动画的基本步骤
按照以下的步骤绘制每一帧

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。`,frontmatter:{title:"动画的基本步骤",level:2,hideInToc:!0},index:1,start:7,end:20},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:V$,meta:{title:"更新动画",level:2,hideInToc:!0,srcSequence:"./pages/07animation.md",slide:{raw:`---
title: 更新动画
level: 2
hideInToc: true
---

## 更新动画

为了实现动画，我们需要一些可以定时执行重绘的方法。  
\`setInterval(function, delay)\` 当设定好间隔时间后，function 会定期执行。
\`setTimeout(function, delay)\` 在设定好的时间之后执行函数  
\`requestAnimationFrame(callback)\` 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

<v-clicks>

<Demo017AnimationSolarSystem />

</v-clicks>
`,title:"更新动画",level:2,content:`## 更新动画

为了实现动画，我们需要一些可以定时执行重绘的方法。  
\`setInterval(function, delay)\` 当设定好间隔时间后，function 会定期执行。
\`setTimeout(function, delay)\` 在设定好的时间之后执行函数  
\`requestAnimationFrame(callback)\` 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

<v-clicks>

<Demo017AnimationSolarSystem />

</v-clicks>`,frontmatter:{title:"更新动画",level:2,hideInToc:!0,srcSequence:"./pages/07animation.md"},index:51,start:20,end:39,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`---
title: 更新动画
level: 2
hideInToc: true
---

## 更新动画

为了实现动画，我们需要一些可以定时执行重绘的方法。  
\`setInterval(function, delay)\` 当设定好间隔时间后，function 会定期执行。
\`setTimeout(function, delay)\` 在设定好的时间之后执行函数  
\`requestAnimationFrame(callback)\` 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

<v-clicks>

<Demo017AnimationSolarSystem />

</v-clicks>
`,title:"更新动画",level:2,content:`## 更新动画

为了实现动画，我们需要一些可以定时执行重绘的方法。  
\`setInterval(function, delay)\` 当设定好间隔时间后，function 会定期执行。
\`setTimeout(function, delay)\` 在设定好的时间之后执行函数  
\`requestAnimationFrame(callback)\` 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

<v-clicks>

<Demo017AnimationSolarSystem />

</v-clicks>`,frontmatter:{title:"更新动画",level:2,hideInToc:!0},index:2,start:20,end:39},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:X$,meta:{srcSequence:"./pages/07animation.md",slide:{raw:`
## 时钟案例

<Demo018AnimationsClock />
`,title:"时钟案例",level:2,content:`## 时钟案例

<Demo018AnimationsClock />`,frontmatter:{srcSequence:"./pages/07animation.md"},index:52,start:40,end:45,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`
## 时钟案例

<Demo018AnimationsClock />
`,title:"时钟案例",level:2,content:`## 时钟案例

<Demo018AnimationsClock />`,frontmatter:{},index:3,start:40,end:45},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:oT,meta:{srcSequence:"./pages/07animation.md",slide:{raw:`
## 循环全景照片案例

<Demo019AnimationsNationalPark />
`,title:"循环全景照片案例",level:2,content:`## 循环全景照片案例

<Demo019AnimationsNationalPark />`,frontmatter:{srcSequence:"./pages/07animation.md"},index:53,start:46,end:51,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`
## 循环全景照片案例

<Demo019AnimationsNationalPark />
`,title:"循环全景照片案例",level:2,content:`## 循环全景照片案例

<Demo019AnimationsNationalPark />`,frontmatter:{},index:4,start:46,end:51},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:dT,meta:{srcSequence:"./pages/07animation.md",slide:{raw:`
## 小球案例

<Demo020Ball />
`,title:"小球案例",level:2,content:`## 小球案例

<Demo020Ball />`,frontmatter:{srcSequence:"./pages/07animation.md"},index:54,start:52,end:57,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",raw:`
## 小球案例

<Demo020Ball />
`,title:"小球案例",level:2,content:`## 小球案例

<Demo020Ball />`,frontmatter:{},index:5,start:52,end:57},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\07animation.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:hT,meta:{title:"像素操作",level:1,layout:"center",srcSequence:"./pages/08pixel.md",slide:{raw:null,title:"像素操作",level:1,content:"# 13.像素操作",frontmatter:{title:"像素操作",level:1,layout:"center",srcSequence:"./pages/08pixel.md"},index:55,start:0,end:7,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`---
title: 像素操作
level: 1
layout: center
---
# 13.像素操作
`,title:"像素操作",level:1,content:"# 13.像素操作",frontmatter:{title:"像素操作",level:1,layout:"center"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/08pixel.md
---
`,content:"",frontmatter:{},index:15,start:209,end:213},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:CT,meta:{title:"ImageData 对象",level:2,hideInToc:!0,srcSequence:"./pages/08pixel.md",slide:{raw:`---
title: ImageData 对象
level: 2
hideInToc: true
---
## ImageData 对象
ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

\`width\` 图片宽度，单位是像素  
\`height\` 图片高度，单位是像素  
\`data\` Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。  

data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1
例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

\`\`\`js
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
\`\`\`

根据行、列读取某像素点的 R/G/B/A 值的公式：

\`\`\`js
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
\`\`\`
`,title:"ImageData 对象",level:2,content:`## ImageData 对象
ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

\`width\` 图片宽度，单位是像素  
\`height\` 图片高度，单位是像素  
\`data\` Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。  

data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1
例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

\`\`\`js
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
\`\`\`

根据行、列读取某像素点的 R/G/B/A 值的公式：

\`\`\`js
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
\`\`\``,frontmatter:{title:"ImageData 对象",level:2,hideInToc:!0,srcSequence:"./pages/08pixel.md"},index:56,start:7,end:34,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`---
title: ImageData 对象
level: 2
hideInToc: true
---
## ImageData 对象
ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

\`width\` 图片宽度，单位是像素  
\`height\` 图片高度，单位是像素  
\`data\` Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。  

data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1
例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

\`\`\`js
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
\`\`\`

根据行、列读取某像素点的 R/G/B/A 值的公式：

\`\`\`js
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
\`\`\`
`,title:"ImageData 对象",level:2,content:`## ImageData 对象
ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

\`width\` 图片宽度，单位是像素  
\`height\` 图片高度，单位是像素  
\`data\` Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。  

data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1
例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

\`\`\`js
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
\`\`\`

根据行、列读取某像素点的 R/G/B/A 值的公式：

\`\`\`js
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
\`\`\``,frontmatter:{title:"ImageData 对象",level:2,hideInToc:!0},index:1,start:7,end:34},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:TT,meta:{hideInToc:!0,srcSequence:"./pages/08pixel.md",slide:{raw:`---
hideInToc: true
---

## 创建一个ImageData对象
\`CanvasRenderingContext2D.createImageData()\`
有两个版本
下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑

\`\`\`js
const myImageData = ctx.createImageData(width, height);
\`\`\`

可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）

\`\`\`js
const myImageData = ctx.createImageData(anotherImageData);
\`\`\`
`,title:"创建一个ImageData对象",level:2,content:"## 创建一个ImageData对象\n`CanvasRenderingContext2D.createImageData()`\n有两个版本\n下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑\n\n```js\nconst myImageData = ctx.createImageData(width, height);\n```\n\n可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）\n\n```js\nconst myImageData = ctx.createImageData(anotherImageData);\n```",frontmatter:{hideInToc:!0,srcSequence:"./pages/08pixel.md"},index:57,start:34,end:53,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`---
hideInToc: true
---

## 创建一个ImageData对象
\`CanvasRenderingContext2D.createImageData()\`
有两个版本
下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑

\`\`\`js
const myImageData = ctx.createImageData(width, height);
\`\`\`

可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）

\`\`\`js
const myImageData = ctx.createImageData(anotherImageData);
\`\`\`
`,title:"创建一个ImageData对象",level:2,content:"## 创建一个ImageData对象\n`CanvasRenderingContext2D.createImageData()`\n有两个版本\n下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑\n\n```js\nconst myImageData = ctx.createImageData(width, height);\n```\n\n可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）\n\n```js\nconst myImageData = ctx.createImageData(anotherImageData);\n```",frontmatter:{hideInToc:!0},index:2,start:34,end:53},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:UT,meta:{srcSequence:"./pages/08pixel.md",slide:{raw:`
## 从canvas获取ImageData
为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法：
left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据

\`\`\`js
const myImageData = ctx.getImageData(left, top, width, height);

\`\`\`

<Demo022ColorPicker />
`,title:"从canvas获取ImageData",level:2,content:`## 从canvas获取ImageData
为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法：
left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据

\`\`\`js
const myImageData = ctx.getImageData(left, top, width, height);

\`\`\`

<Demo022ColorPicker />`,frontmatter:{srcSequence:"./pages/08pixel.md"},index:58,start:54,end:66,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`
## 从canvas获取ImageData
为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法：
left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据

\`\`\`js
const myImageData = ctx.getImageData(left, top, width, height);

\`\`\`

<Demo022ColorPicker />
`,title:"从canvas获取ImageData",level:2,content:`## 从canvas获取ImageData
为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法：
left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据

\`\`\`js
const myImageData = ctx.getImageData(left, top, width, height);

\`\`\`

<Demo022ColorPicker />`,frontmatter:{},index:3,start:54,end:66},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:nP,meta:{srcSequence:"./pages/08pixel.md",slide:{raw:`
## 写入像素数据

\`putImageData()\`可以实现像素数据的写入

\`\`\`js
ctx.putImageData(myImageData, dx, dy);

\`\`\`

下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。

<Demo023PutImage/>
`,title:"写入像素数据",level:2,content:`## 写入像素数据

\`putImageData()\`可以实现像素数据的写入

\`\`\`js
ctx.putImageData(myImageData, dx, dy);

\`\`\`

下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。

<Demo023PutImage/>`,frontmatter:{srcSequence:"./pages/08pixel.md"},index:59,start:67,end:81,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`
## 写入像素数据

\`putImageData()\`可以实现像素数据的写入

\`\`\`js
ctx.putImageData(myImageData, dx, dy);

\`\`\`

下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。

<Demo023PutImage/>
`,title:"写入像素数据",level:2,content:`## 写入像素数据

\`putImageData()\`可以实现像素数据的写入

\`\`\`js
ctx.putImageData(myImageData, dx, dy);

\`\`\`

下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。

<Demo023PutImage/>`,frontmatter:{},index:4,start:67,end:81},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:fP,meta:{srcSequence:"./pages/08pixel.md",slide:{raw:`---
## 缩放和反锯齿

<Link to="37">缩放和切片的方法</Link>在之前drawImage的章节提到过

反锯齿默认是开启的，是这个属性imageSmoothingEnabled

关闭以后我们就能看到清楚的像素

<Demo023imageSmoothingEnabled/>

---
## 保存图片

\`HTMLCanvasElement.toDataURL()\`

- 如果画布的高度或宽度是 0，那么会返回字符串“\`data:,”\`。
- 如果传入的类型非“\`image/png\`”，但是返回的值以“\`data:image/png\`”开头，那么该传入的类型是不支持的。
- Chrome 支持“\`image/webp\`”类型。

\`\`\`js
canvas.toDataURL(type, encoderOptions);
\`\`\`

\`type\` 可选

图片格式，默认为 \`image/png\`

\`encoderOptions\` 可选

在指定图片格式为 \`image/jpeg\` 或 \`image/webp\` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 \`0.92\`。其他参数会被忽略。返回值是包含dataURI的domstring
> 也就是说只有jpeg和 webp（chrome）支持质量选择
`,title:"保存图片",level:2,content:"## 保存图片\n\n`HTMLCanvasElement.toDataURL()`\n\n- 如果画布的高度或宽度是 0，那么会返回字符串“`data:,”`。\n- 如果传入的类型非“`image/png`”，但是返回的值以“`data:image/png`”开头，那么该传入的类型是不支持的。\n- Chrome 支持“`image/webp`”类型。\n\n```js\ncanvas.toDataURL(type, encoderOptions);\n```\n\n`type` 可选\n\n图片格式，默认为 `image/png`\n\n`encoderOptions` 可选\n\n在指定图片格式为 `image/jpeg` 或 `image/webp` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 `0.92`。其他参数会被忽略。返回值是包含dataURI的domstring\n> 也就是说只有jpeg和 webp（chrome）支持质量选择",frontmatter:{srcSequence:"./pages/08pixel.md"},index:60,start:81,end:114,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`---
## 缩放和反锯齿

<Link to="37">缩放和切片的方法</Link>在之前drawImage的章节提到过

反锯齿默认是开启的，是这个属性imageSmoothingEnabled

关闭以后我们就能看到清楚的像素

<Demo023imageSmoothingEnabled/>

---
## 保存图片

\`HTMLCanvasElement.toDataURL()\`

- 如果画布的高度或宽度是 0，那么会返回字符串“\`data:,”\`。
- 如果传入的类型非“\`image/png\`”，但是返回的值以“\`data:image/png\`”开头，那么该传入的类型是不支持的。
- Chrome 支持“\`image/webp\`”类型。

\`\`\`js
canvas.toDataURL(type, encoderOptions);
\`\`\`

\`type\` 可选

图片格式，默认为 \`image/png\`

\`encoderOptions\` 可选

在指定图片格式为 \`image/jpeg\` 或 \`image/webp\` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 \`0.92\`。其他参数会被忽略。返回值是包含dataURI的domstring
> 也就是说只有jpeg和 webp（chrome）支持质量选择
`,title:"保存图片",level:2,content:"## 保存图片\n\n`HTMLCanvasElement.toDataURL()`\n\n- 如果画布的高度或宽度是 0，那么会返回字符串“`data:,”`。\n- 如果传入的类型非“`image/png`”，但是返回的值以“`data:image/png`”开头，那么该传入的类型是不支持的。\n- Chrome 支持“`image/webp`”类型。\n\n```js\ncanvas.toDataURL(type, encoderOptions);\n```\n\n`type` 可选\n\n图片格式，默认为 `image/png`\n\n`encoderOptions` 可选\n\n在指定图片格式为 `image/jpeg` 或 `image/webp` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 `0.92`。其他参数会被忽略。返回值是包含dataURI的domstring\n> 也就是说只有jpeg和 webp（chrome）支持质量选择",frontmatter:{},index:5,start:81,end:114},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:_P,meta:{srcSequence:"./pages/08pixel.md",slide:{raw:"\n`HTMLCanvasElement.toBlob()`\n\n**`HTMLCanvasElement.toBlob()`** 方法创造 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。\n\n可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpeg` 和 `image/webp`。\n对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。\n\n```js\ntoBlob(callback)\ntoBlob(callback, type)\ntoBlob(callback, type, quality)\n\n```\n",content:"`HTMLCanvasElement.toBlob()`\n\n**`HTMLCanvasElement.toBlob()`** 方法创造 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。\n\n可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpeg` 和 `image/webp`。\n对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。\n\n```js\ntoBlob(callback)\ntoBlob(callback, type)\ntoBlob(callback, type, quality)\n\n```",frontmatter:{srcSequence:"./pages/08pixel.md"},index:61,start:115,end:130,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:"\n`HTMLCanvasElement.toBlob()`\n\n**`HTMLCanvasElement.toBlob()`** 方法创造 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。\n\n可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpeg` 和 `image/webp`。\n对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。\n\n```js\ntoBlob(callback)\ntoBlob(callback, type)\ntoBlob(callback, type, quality)\n\n```\n",content:"`HTMLCanvasElement.toBlob()`\n\n**`HTMLCanvasElement.toBlob()`** 方法创造 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。\n\n可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpeg` 和 `image/webp`。\n对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。\n\n```js\ntoBlob(callback)\ntoBlob(callback, type)\ntoBlob(callback, type, quality)\n\n```",frontmatter:{},index:6,start:115,end:130},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:AP,meta:{srcSequence:"./pages/08pixel.md",slide:{raw:`---
## 压缩图片的例子

<Demo021Compress/>

---

## 网页截图

html2canvas 这个库是把dom元素在canvas上绘制
<https://github.com/niklasvh/html2canvas>

\`\`\`js

html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

\`\`\`

之后我们使用\`canvas.toBlob\`之类保存图片的api下载到本地

还有另一个保存图片的库 https://github.com/bubkoo/html-to-image
`,title:"网页截图",level:2,content:`## 网页截图

html2canvas 这个库是把dom元素在canvas上绘制
<https://github.com/niklasvh/html2canvas>

\`\`\`js

html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

\`\`\`

之后我们使用\`canvas.toBlob\`之类保存图片的api下载到本地

还有另一个保存图片的库 https://github.com/bubkoo/html-to-image`,frontmatter:{srcSequence:"./pages/08pixel.md"},index:62,start:130,end:154,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",raw:`---
## 压缩图片的例子

<Demo021Compress/>

---

## 网页截图

html2canvas 这个库是把dom元素在canvas上绘制
<https://github.com/niklasvh/html2canvas>

\`\`\`js

html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

\`\`\`

之后我们使用\`canvas.toBlob\`之类保存图片的api下载到本地

还有另一个保存图片的库 https://github.com/bubkoo/html-to-image
`,title:"网页截图",level:2,content:`## 网页截图

html2canvas 这个库是把dom元素在canvas上绘制
<https://github.com/niklasvh/html2canvas>

\`\`\`js

html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

\`\`\`

之后我们使用\`canvas.toBlob\`之类保存图片的api下载到本地

还有另一个保存图片的库 https://github.com/bubkoo/html-to-image`,frontmatter:{},index:7,start:130,end:154},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\08pixel.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:PP,meta:{hideInToc:!0,title:"其他案例",srcSequence:"./pages/09examples.md",slide:{raw:null,title:"其他案例",level:2,content:`## 其他案例

### 刮刮卡

<Demo024ScratchLottery/>`,frontmatter:{hideInToc:!0,title:"其他案例",srcSequence:"./pages/09examples.md"},index:63,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\09examples.md",raw:`---
hideInToc: true
---
## 其他案例

### 刮刮卡

<Demo024ScratchLottery/>
`,title:"其他案例",level:2,content:`## 其他案例

### 刮刮卡

<Demo024ScratchLottery/>`,frontmatter:{hideInToc:!0,title:"其他案例"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/09examples.md
---
`,content:"",frontmatter:{},index:16,start:213,end:217},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-canvas\\pages\\09examples.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}}],OP=[],Je=IP,yo=[{name:"play",path:"/",component:cD,children:[...Je,...OP]},{name:"print",path:"/print",component:Mx},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!go.remote||go.remote===t.query.password)return!0;if(go.remote&&t.query.password===void 0){const n=prompt("Enter password");if(go.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};yo.push({path:"/presenter/print",component:()=>Hn(()=>import("./PresenterPrint-4e830c1f.js"),["assets/PresenterPrint-4e830c1f.js","assets/NoteDisplay-2bd88a5f.js"])}),yo.push({name:"notes",path:"/notes",component:()=>Hn(()=>import("./NotesView-7e207ace.js"),["assets/NotesView-7e207ace.js","assets/NoteDisplay-2bd88a5f.js"]),beforeEnter:e}),yo.push({name:"presenter",path:"/presenter/:no",component:()=>Hn(()=>import("./Presenter-f83bc368.js"),["assets/Presenter-f83bc368.js","assets/NoteDisplay-2bd88a5f.js","assets/DrawingControls-08515e24.js","assets/Presenter-59b9cc16.css"]),beforeEnter:e}),yo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const kt=Y8({history:K1("/my-slidevs/slidevs/learn-canvas"),routes:yo});function jP(e,t,{mode:n="replace"}={}){return M({get(){const o=kt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{kt[S(n)]({query:{...kt.currentRoute.value.query,[e]:o}})})}})}const Ah=F(0);it(()=>{kt.afterEach(async()=>{await it(),Ah.value+=1})});const Sh=F(0),qt=M(()=>kt.currentRoute.value),xn=M(()=>qt.value.query.print!==void 0),MP=M(()=>qt.value.query.print==="clicks"),yn=M(()=>qt.value.query.embedded!==void 0),xt=M(()=>qt.value.path.startsWith("/presenter")),LP=M(()=>qt.value.path.startsWith("/notes")),Ao=M(()=>xn.value&&!MP.value),Za=M(()=>qt.value.query.password),RP=M(()=>!xt.value&&(!Te.remote||Za.value===Te.remote)),pd=jP("clicks","0"),FP=M(()=>Je.length),NP=M(()=>qt.value.path),Ke=M(()=>Number.parseInt(NP.value.split(/\//g).slice(-1)[0])||1);M(()=>Cr(Ke.value));const gt=M(()=>Je.find(e=>e.path===`${Ke.value}`));M(()=>{var e,t,n;return(n=(t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});M(()=>{var e,t;return((t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ke.value===1?"cover":"default")});const Xr=M(()=>Je.find(e=>e.path===`${Math.min(Je.length,Ke.value+1)}`)),HP=M(()=>Je.find(e=>e.path===`${Math.max(1,Ke.value-1)}`)),qP=M(()=>{var e,t;return Ah.value,((t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=M({get(){if(Ao.value)return 99999;let e=+(pd.value||0);return Number.isNaN(e)&&(e=0),e},set(e){pd.value=e.toString()}}),sr=M(()=>{var e,t;return+(((t=(e=gt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??qP.value.length)}),VP=M(()=>Ke.value<Je.length||Ft.value<sr.value),zP=M(()=>Ke.value>1||Ft.value>0),WP=M(()=>Je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ki(e,t),e),[])),UP=M(()=>Yi(WP.value,gt.value));M(()=>Xi(UP.value));const GP=M(()=>JP(Sh.value,gt.value,HP.value));_e(gt,(e,t)=>{Sh.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Vn(){sr.value<=Ft.value?zo():Ft.value+=1}async function zn(){Ft.value<=0?await Wo():Ft.value-=1}function Cr(e){return xt.value?`/presenter/${e}`:`/${e}`}function zo(){const e=Math.min(Je.length,Ke.value+1);return Us(e)}async function Wo(e=!0){const t=Math.max(1,Ke.value-1);await Us(t),e&&sr.value&&kt.replace({query:{...qt.value.query,clicks:sr.value}})}function Us(e,t){return kt.push({path:Cr(e),query:{...qt.value.query,clicks:t}})}function KP(e){const t=F(0),{direction:n,distanceX:o,distanceY:l}=g1(e,{onSwipeStart(r){r.pointerType==="touch"&&(Ho.value||(t.value=Ta()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Ho.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?n.value==="left"?Vn():zn():(i/window.innerHeight>.4||i>200)&&(n.value==="down"?Wo():zo())}})}async function Ja(){const{saveAs:e}=await Hn(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Te.download=="string"?Te.download:Te.exportFilename?`${Te.exportFilename}.pdf`:"/my-slidevs/slidevs/learn-canvasslidev-exported.pdf",`${Te.title}.pdf`)}async function YP(e){var t,n;if(e==null){const o=(n=(t=gt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ki(e,t,n=1){var l,r,a,i,c;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>n&&e.length>0?Ki(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Yi(e,t,n=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=Yi(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Xi(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Xi(n.children,t+1)}))}const XP={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function ZP(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:XP[e.name]||e.name;if(n.includes("|")){const[o,l]=n.split("|").map(r=>r.trim());n=t?l:o}if(n)return{...e,name:n}}function JP(e,t,n){var l,r;let o=e>0?(l=n==null?void 0:n.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Te.transition),ZP(o,e<0)}function QP(){const e=Te.titleTemplate.replace("%s",Te.title||"Slidev");mf({title:e,htmlAttrs:Te.htmlAttrs}),G0(`${e} - shared`),Z0(`${e} - drawings`);const t=`${location.origin}_${H0()}`;function n(){LP.value||!xt.value&&!N0.includes(location.host.split(":")[0])||(xt.value?(oo("page",+Ke.value),oo("clicks",Ft.value)):(oo("viewerPage",+Ke.value),oo("viewerClicks",Ft.value)),oo("lastUpdate",{id:t,type:xt.value?"presenter":"viewer",time:new Date().getTime()}))}kt.afterEach(n),_e(Ft,n),K0(o=>{var r;kt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ke.value||+Ft.value!=+o.clicks)&&kt.replace({path:Cr(o.page),query:{...kt.currentRoute.value.query,clicks:o.clicks||0}})})}const e9=X({__name:"App",setup(e){return E(P),QP(),(t,n)=>{const o=ks("RouterView"),l=ks("StarportCarrier");return g(),A($e,null,[k(o),k(l)],64)}}}),t9=I(e9,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.27_vite@4.4.6/node_modules/@slidev/client/App.vue"]]);function Zr(e){return e!==null&&typeof e=="object"}function Qa(e,t,n=".",o){if(!Zr(t))return Qa(e,{},n,o);const l=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,n)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Zr(a)&&Zr(l[r])?l[r]=Qa(a,l[r],(n?`${n}.`:"")+r.toString(),o):l[r]=a))}return l}function n9(e){return(...t)=>t.reduce((n,o)=>Qa(n,o,"",e),{})}const s9=n9(),Bh=1/60*1e3,o9=typeof performance<"u"?()=>performance.now():()=>Date.now(),Eh=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(o9()),Bh);function l9(e){let t=[],n=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const p=d&&l,h=p?t:n;return u&&a.add(c),h.indexOf(c)===-1&&(h.push(c),p&&l&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(i.schedule(d),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const r9=40;let ei=!0,Uo=!1,ti=!1;const Vs={delta:0,timestamp:0},tl=["read","update","preRender","render","postRender"],kr=tl.reduce((e,t)=>(e[t]=l9(()=>Uo=!0),e),{}),ni=tl.reduce((e,t)=>{const n=kr[t];return e[t]=(o,l=!1,r=!1)=>(Uo||c9(),n.schedule(o,l,r)),e},{}),a9=tl.reduce((e,t)=>(e[t]=kr[t].cancel,e),{});tl.reduce((e,t)=>(e[t]=()=>kr[t].process(Vs),e),{});const i9=e=>kr[e].process(Vs),$h=e=>{Uo=!1,Vs.delta=ei?Bh:Math.max(Math.min(e-Vs.timestamp,r9),1),Vs.timestamp=e,ti=!0,tl.forEach(i9),ti=!1,Uo&&(ei=!1,Eh($h))},c9=()=>{Uo=!0,ei=!0,ti||Eh($h)},Th=()=>Vs;function Ph(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n}var Zi=function(){},Go=function(){};Zi=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Go=function(e,t){if(!e)throw new Error(t)};const si=(e,t,n)=>Math.min(Math.max(n,e),t),Jr=.001,u9=.01,fd=10,d9=.05,p9=1;function f9({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let l,r;Zi(e<=fd*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=si(d9,p9,a),e=si(u9,fd,e/1e3),a<1?(l=u=>{const d=u*a,p=d*e,h=d-n,f=oi(u,a),m=Math.exp(-p);return Jr-h/f*m},r=u=>{const p=u*a*e,h=p*n+n,f=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-p),_=oi(Math.pow(u,2),a);return(-l(u)+Jr>0?-1:1)*((h-f)*m)/_}):(l=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-Jr+d*p},r=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const i=5/e,c=m9(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const h9=12;function m9(e,t,n){let o=n;for(let l=1;l<h9;l++)o=o-e(o)/t(o);return o}function oi(e,t){return e*Math.sqrt(1-t*t)}const v9=["duration","bounce"],g9=["stiffness","damping","mass"];function hd(e,t){return t.some(n=>e[n]!==void 0)}function y9(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!hd(e,g9)&&hd(e,v9)){const n=f9(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Ji(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:l}=e,r=Ph(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:u,velocity:d,duration:p,isResolvedFromDuration:h}=y9(r),f=md,m=md;function _(){const D=d?-(d/1e3):0,x=n-t,C=c/(2*Math.sqrt(i*u)),b=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-t)/100,.4)),C<1){const B=oi(b,C);f=$=>{const O=Math.exp(-C*b*$);return n-O*((D+C*b*x)/B*Math.sin(B*$)+x*Math.cos(B*$))},m=$=>{const O=Math.exp(-C*b*$);return C*b*O*(Math.sin(B*$)*(D+C*b*x)/B+x*Math.cos(B*$))-O*(Math.cos(B*$)*(D+C*b*x)-B*x*Math.sin(B*$))}}else if(C===1)f=B=>n-Math.exp(-b*B)*(x+(D+b*x)*B);else{const B=b*Math.sqrt(C*C-1);f=$=>{const O=Math.exp(-C*b*$),q=Math.min(B*$,300);return n-O*((D+C*b*x)*Math.sinh(q)+B*x*Math.cosh(q))/B}}}return _(),{next:D=>{const x=f(D);if(h)a.done=D>=p;else{const C=m(D)*1e3,b=Math.abs(C)<=o,B=Math.abs(n-x)<=l;a.done=b&&B}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],_()}}}Ji.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const md=e=>0,Ih=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Qi=(e,t,n)=>-n*e+n*t+e,Oh=(e,t)=>n=>Math.max(Math.min(n,t),e),So=e=>e%1?Number(e.toFixed(5)):e,Ko=/(-)?([\d]*\.?[\d])+/g,li=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,_9=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function nl(e){return typeof e=="string"}const sl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Bo=Object.assign(Object.assign({},sl),{transform:Oh(0,1)}),wl=Object.assign(Object.assign({},sl),{default:1}),ec=e=>({test:t=>nl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ts=ec("deg"),Eo=ec("%"),De=ec("px"),vd=Object.assign(Object.assign({},Eo),{parse:e=>Eo.parse(e)/100,transform:e=>Eo.transform(e*100)}),tc=(e,t)=>n=>!!(nl(n)&&_9.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),jh=(e,t,n)=>o=>{if(!nl(o))return o;const[l,r,a,i]=o.match(Ko);return{[e]:parseFloat(l),[t]:parseFloat(r),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},hs={test:tc("hsl","hue"),parse:jh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Eo.transform(So(t))+", "+Eo.transform(So(n))+", "+So(Bo.transform(o))+")"},b9=Oh(0,255),Qr=Object.assign(Object.assign({},sl),{transform:e=>Math.round(b9(e))}),Mn={test:tc("rgb","red"),parse:jh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Qr.transform(e)+", "+Qr.transform(t)+", "+Qr.transform(n)+", "+So(Bo.transform(o))+")"};function w9(e){let t="",n="",o="",l="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),t+=t,n+=n,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const ri={test:tc("#"),parse:w9,transform:Mn.transform},Dt={test:e=>Mn.test(e)||ri.test(e)||hs.test(e),parse:e=>Mn.test(e)?Mn.parse(e):hs.test(e)?hs.parse(e):ri.parse(e),transform:e=>nl(e)?e:e.hasOwnProperty("red")?Mn.transform(e):hs.transform(e)},Mh="${c}",Lh="${n}";function D9(e){var t,n,o,l;return isNaN(e)&&nl(e)&&((n=(t=e.match(Ko))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(o=e.match(li))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Rh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(li);o&&(n=o.length,e=e.replace(li,Mh),t.push(...o.map(Dt.parse)));const l=e.match(Ko);return l&&(e=e.replace(Ko,Lh),t.push(...l.map(sl.parse))),{values:t,numColors:n,tokenised:e}}function Fh(e){return Rh(e).values}function Nh(e){const{values:t,numColors:n,tokenised:o}=Rh(e),l=t.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<n?Mh:Lh,i<n?Dt.transform(r[i]):So(r[i]));return a}}const x9=e=>typeof e=="number"?0:e;function C9(e){const t=Fh(e);return Nh(e)(t.map(x9))}const ol={test:D9,parse:Fh,createTransformer:Nh,getAnimatableNone:C9},k9=new Set(["brightness","contrast","saturate","opacity"]);function A9(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Ko)||[];if(!o)return e;const l=n.replace(o,"");let r=k9.has(t)?1:0;return o!==n&&(r*=100),t+"("+r+l+")"}const S9=/([a-z-]*)\(.*?\)/g,ai=Object.assign(Object.assign({},ol),{getAnimatableNone:e=>{const t=e.match(S9);return t?t.map(A9).join(" "):e}});function ea(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function gd({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let l=0,r=0,a=0;if(!t)l=r=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;l=ea(c,i,e+1/3),r=ea(c,i,e),a=ea(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const B9=(e,t,n)=>{const o=e*e,l=t*t;return Math.sqrt(Math.max(0,n*(l-o)+o))},E9=[ri,Mn,hs],yd=e=>E9.find(t=>t.test(e)),_d=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Hh=(e,t)=>{let n=yd(e),o=yd(t);Go(!!n,_d(e)),Go(!!o,_d(t));let l=n.parse(e),r=o.parse(t);n===hs&&(l=gd(l),n=Mn),o===hs&&(r=gd(r),o=Mn);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=B9(l[c],r[c],i));return a.alpha=Qi(l.alpha,r.alpha,i),n.transform(a)}},$9=e=>typeof e=="number",T9=(e,t)=>n=>t(e(n)),qh=(...e)=>e.reduce(T9);function Vh(e,t){return $9(e)?n=>Qi(e,t,n):Dt.test(e)?Hh(e,t):Wh(e,t)}const zh=(e,t)=>{const n=[...e],o=n.length,l=e.map((r,a)=>Vh(r,t[a]));return r=>{for(let a=0;a<o;a++)n[a]=l[a](r);return n}},P9=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const l in n)e[l]!==void 0&&t[l]!==void 0&&(o[l]=Vh(e[l],t[l]));return l=>{for(const r in o)n[r]=o[r](l);return n}};function bd(e){const t=ol.parse(e),n=t.length;let o=0,l=0,r=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const Wh=(e,t)=>{const n=ol.createTransformer(t),o=bd(e),l=bd(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?qh(zh(o.parsed,l.parsed),n):(Zi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},I9=(e,t)=>n=>Qi(e,t,n);function O9(e){if(typeof e=="number")return I9;if(typeof e=="string")return Dt.test(e)?Hh:Wh;if(Array.isArray(e))return zh;if(typeof e=="object")return P9}function j9(e,t,n){const o=[],l=n||O9(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=qh(c,i)}o.push(i)}return o}function M9([e,t],[n]){return o=>n(Ih(e,t,o))}function L9(e,t){const n=e.length,o=n-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>l||c===o);c++);r=c-1}const i=Ih(e[r],e[r+1],l);return t[r](i)}}function Uh(e,t,{clamp:n=!0,ease:o,mixer:l}={}){const r=e.length;Go(r===t.length,"Both input and output ranges must be the same length"),Go(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=j9(t,o,l),i=r===2?M9(e,a):L9(e,a);return n?c=>i(si(e[0],e[r-1],c)):i}const Ar=e=>t=>1-e(1-t),nc=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,R9=e=>t=>Math.pow(t,e),Gh=e=>t=>t*t*((e+1)*t-e),F9=e=>{const t=Gh(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Kh=1.525,N9=4/11,H9=8/11,q9=9/10,Yh=e=>e,sc=R9(2),V9=Ar(sc),Xh=nc(sc),Zh=e=>1-Math.sin(Math.acos(e)),Jh=Ar(Zh),z9=nc(Jh),oc=Gh(Kh),W9=Ar(oc),U9=nc(oc),G9=F9(Kh),K9=4356/361,Y9=35442/1805,X9=16061/1805,or=e=>{if(e===1||e===0)return e;const t=e*e;return e<N9?7.5625*t:e<H9?9.075*t-9.9*e+3.4:e<q9?K9*t-Y9*e+X9:10.8*e*e-20.52*e+10.72},Z9=Ar(or),J9=e=>e<.5?.5*(1-or(1-e*2)):.5*or(e*2-1)+.5;function Q9(e,t){return e.map(()=>t||Xh).splice(0,e.length-1)}function eI(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function tI(e,t){return e.map(n=>n*t)}function Tl({from:e=0,to:t=1,ease:n,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=tI(o&&o.length===a.length?o:eI(a),l);function c(){return Uh(i,a,{ease:Array.isArray(n)?n:Q9(a,n)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function nI({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let i=n*e;const c=t+i,u=r===void 0?c:r(c);return u!==c&&(i=u-t),{next:d=>{const p=-i*Math.exp(-d/o);return a.done=!(p>l||p<-l),a.value=a.done?u:u+p,a},flipTarget:()=>{}}}const wd={keyframes:Tl,spring:Ji,decay:nI};function sI(e){if(Array.isArray(e.to))return Tl;if(wd[e.type])return wd[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Tl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Ji:Tl}function Qh(e,t,n=0){return e-t-n}function oI(e,t,n=0,o=!0){return o?Qh(t+-e,t,n):t-(e-t)+n}function lI(e,t,n,o){return o?e>=t+n:e<=-n}const rI=e=>{const t=({delta:n})=>e(n);return{start:()=>ni.update(t,!0),stop:()=>a9.update(t)}};function em(e){var t,n,{from:o,autoplay:l=!0,driver:r=rI,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:p,onComplete:h,onRepeat:f,onUpdate:m}=e,_=Ph(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=_,x,C=0,b=_.duration,B,$=!1,O=!0,q;const L=sI(_);!((n=(t=L).needsInterpolation)===null||n===void 0)&&n.call(t,o,D)&&(q=Uh([0,100],[o,D],{clamp:!1}),o=0,D=100);const U=L(Object.assign(Object.assign({},_),{from:o,to:D}));function se(){C++,c==="reverse"?(O=C%2===0,a=oI(a,b,u,O)):(a=Qh(a,b,u),c==="mirror"&&U.flipTarget()),$=!1,f&&f()}function de(){x.stop(),h&&h()}function Z(we){if(O||(we=-we),a+=we,!$){const xe=U.next(Math.max(0,a));B=xe.value,q&&(B=q(B)),$=O?xe.done:a<=0}m==null||m(B),$&&(C===0&&(b??(b=a)),C<i?lI(a,b,u,O)&&se():de())}function ge(){d==null||d(),x=r(Z),x.start()}return l&&ge(),{stop:()=>{p==null||p(),x.stop()}}}function tm(e,t){return t?e*(1e3/t):0}function aI({from:e=0,velocity:t=0,min:n,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:p,onComplete:h,onStop:f}){let m;function _(b){return n!==void 0&&b<n||o!==void 0&&b>o}function D(b){return n===void 0?o:o===void 0||Math.abs(n-b)<Math.abs(o-b)?n:o}function x(b){m==null||m.stop(),m=em(Object.assign(Object.assign({},b),{driver:d,onUpdate:B=>{var $;p==null||p(B),($=b.onUpdate)===null||$===void 0||$.call(b,B)},onComplete:h,onStop:f}))}function C(b){x(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},b))}if(_(e))C({from:e,velocity:t,to:D(e)});else{let b=l*t+e;typeof u<"u"&&(b=u(b));const B=D(b),$=B===n?-1:1;let O,q;const L=U=>{O=q,q=U,t=tm(U-O,Th().delta),($===1&&U>B||$===-1&&U<B)&&C({from:U,to:B,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:_(b)?L:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const nm=(e,t)=>1-3*t+3*e,sm=(e,t)=>3*t-6*e,om=e=>3*e,lr=(e,t,n)=>((nm(t,n)*e+sm(t,n))*e+om(t))*e,lm=(e,t,n)=>3*nm(t,n)*e*e+2*sm(t,n)*e+om(t),iI=1e-7,cI=10;function uI(e,t,n,o,l){let r,a,i=0;do a=t+(n-t)/2,r=lr(a,o,l)-e,r>0?n=a:t=a;while(Math.abs(r)>iI&&++i<cI);return a}const dI=8,pI=.001;function fI(e,t,n,o){for(let l=0;l<dI;++l){const r=lm(t,n,o);if(r===0)return t;const a=lr(t,n,o)-e;t-=a/r}return t}const Pl=11,Dl=1/(Pl-1);function hI(e,t,n,o){if(e===t&&n===o)return Yh;const l=new Float32Array(Pl);for(let a=0;a<Pl;++a)l[a]=lr(a*Dl,e,n);function r(a){let i=0,c=1;const u=Pl-1;for(;c!==u&&l[c]<=a;++c)i+=Dl;--c;const d=(a-l[c])/(l[c+1]-l[c]),p=i+d*Dl,h=lm(p,e,n);return h>=pI?fI(a,p,e,n):h===0?p:uI(a,i,i+Dl,e,n)}return a=>a===0||a===1?a:lr(r(a),t,o)}const ta={};class mI{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,n,o)}clear(){this.subscriptions.clear()}}function Dd(e){return!isNaN(parseFloat(e))}class vI{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mI,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:l}=Th();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),ni.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ni.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Dd(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Dd(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?tm(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function gI(e){return new vI(e)}const{isArray:yI}=Array;function _I(){const e=F({}),t=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?yI(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},n=(o,l,r)=>{if(e.value[o])return e.value[o];const a=gI(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return __(t),{motionValues:e,get:n,stop:t}}function bI(e){return Array.isArray(e)}function ns(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function na(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function wI(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function sa(){return{type:"keyframes",ease:"linear",duration:300}}function DI(e){return{type:"keyframes",duration:800,values:e}}const xd={default:wI,x:ns,y:ns,z:ns,rotate:ns,rotateX:ns,rotateY:ns,rotateZ:ns,scaleX:na,scaleY:na,scale:na,backgroundColor:sa,color:sa,opacity:sa};function rm(e,t){let n;return bI(t)?n=DI:n=xd[e]||xd.default,{to:t,...n(t)}}const Cd={...sl,transform:Math.round},am={color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,size:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scale:wl,scaleX:wl,scaleY:wl,scaleZ:wl,skew:ts,skewX:ts,skewY:ts,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:Bo,originX:vd,originY:vd,originZ:De,zIndex:Cd,filter:ai,WebkitFilter:ai,fillOpacity:Bo,strokeOpacity:Bo,numOctaves:Cd},lc=e=>am[e];function im(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function xI(e,t){let n=lc(e);return n!==ai&&(n=ol),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const CI={linear:Yh,easeIn:sc,easeInOut:Xh,easeOut:V9,circIn:Zh,circInOut:z9,circOut:Jh,backIn:oc,backInOut:U9,backOut:W9,anticipate:G9,bounceIn:Z9,bounceInOut:J9,bounceOut:or};function kd(e){if(Array.isArray(e)){const[t,n,o,l]=e;return hI(t,n,o,l)}else if(typeof e=="string")return CI[e];return e}function kI(e){return Array.isArray(e)&&typeof e[0]!="number"}function Ad(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ol.test(t)&&!t.startsWith("url("))}function AI(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function SI({ease:e,times:t,delay:n,...o}){const l={...o};return t&&(l.offset=t),e&&(l.ease=kI(e)?e.map(kd):kd(e)),n&&(l.elapsed=-n),l}function BI(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),AI(t),EI(e)||(e={...e,...rm(n,t.to)}),{...t,...SI(e)}}function EI({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function $I(e,t){return e[t]||e.default||e}function TI(e,t,n,o,l){const r=$I(o,e);let a=r.from===null||r.from===void 0?t.get():r.from;const i=Ad(e,n);a==="none"&&i&&typeof n=="string"&&(a=xI(e,n));const c=Ad(e,a);function u(p){const h={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:f=>t.set(f)};return r.type==="inertia"||r.type==="decay"?aI({...h,...r}):em({...BI(r,h,e),onUpdate:f=>{h.onUpdate(f),r.onUpdate&&r.onUpdate(f)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),p&&p()}})}function d(p){return t.set(n),o.onComplete&&o.onComplete(),l&&l(),p&&p(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function PI(){const{motionValues:e,stop:t,get:n}=_I();return{motionValues:e,stop:t,push:(l,r,a,i={},c)=>{const u=a[l],d=n(l,u,a);if(i&&i.immediate){d.set(r);return}const p=TI(l,d,r,i,c);d.start(p)}}}function II(e,t={},{motionValues:n,push:o,stop:l}=PI()){const r=S(t),a=F(!1);_e(n,p=>{a.value=Object.values(p).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=p=>{if(!r||!r[p])throw new Error(`The variant ${p} does not exist.`);return r[p]},c=p=>(typeof p=="string"&&(p=i(p)),Promise.all(Object.entries(p).map(([h,f])=>{if(h!=="transition")return new Promise(m=>o(h,f,e,p.transition||rm(h,p[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:p=>{const h=$a(p)?p:i(p);Object.entries(h).forEach(([f,m])=>{f!=="transition"&&o(f,m,e,{immediate:!0})})},leave:async p=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){p();return}await c(h),p()},stop:l}}const rc=typeof window<"u",OI=()=>rc&&window.onpointerdown===null,jI=()=>rc&&window.ontouchstart===null,MI=()=>rc&&window.onmousedown===null;function LI({target:e,state:t,variants:n,apply:o}){const l=S(n),r=F(!1),a=F(!1),i=F(!1),c=M(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=M(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const p in d)c.value.includes(p)||delete d[p];return d});l.hovered&&(Ce(e,"mouseenter",()=>r.value=!0),Ce(e,"mouseleave",()=>{r.value=!1,a.value=!1}),Ce(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(MI()&&(Ce(e,"mousedown",()=>a.value=!0),Ce(e,"mouseup",()=>a.value=!1)),OI()&&(Ce(e,"pointerdown",()=>a.value=!0),Ce(e,"pointerup",()=>a.value=!1)),jI()&&(Ce(e,"touchstart",()=>a.value=!0),Ce(e,"touchend",()=>a.value=!1))),l.focused&&(Ce(e,"focus",()=>i.value=!0),Ce(e,"blur",()=>i.value=!1)),_e(u,o)}function RI({set:e,target:t,variants:n,variant:o}){const l=S(n);_e(()=>t,()=>{l&&(l.initial&&e("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function FI({state:e,apply:t}){_e(e,n=>{n&&t(n)},{immediate:!0})}function NI({target:e,variants:t,variant:n}){const o=S(t);o&&(o.visible||o.visibleOnce)&&p1(e,([{isIntersecting:l}])=>{o.visible?l?n.value="visible":n.value="initial":o.visibleOnce&&(l&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function HI(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&RI(e),t.syncVariants&&FI(e),t.visibilityHooks&&NI(e),t.eventListeners&&LI(e)}function cm(e={}){const t=Ue({...e}),n=F({});return _e(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=lc(l),i=im(r,a);o[l]=i}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function ac(e,t){_e(()=>ct(e),n=>{n&&t(n)},{immediate:!0})}const qI={x:"translateX",y:"translateY",z:"translateZ"};function um(e={},t=!0){const n=Ue({...e}),o=F("");return _e(n,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(De.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const u=lc(i),d=im(c,u);r+=`${qI[i]||i}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const VI=["","X","Y","Z"],zI=["perspective","translate","scale","rotate","skew"],dm=["transformPerspective","x","y","z"];zI.forEach(e=>{VI.forEach(t=>{const n=e+t;dm.push(n)})});const WI=new Set(dm);function ic(e){return WI.has(e)}const UI=new Set(["originX","originY","originZ"]);function pm(e){return UI.has(e)}function GI(e){const t={},n={};return Object.entries(e).forEach(([o,l])=>{ic(o)||pm(o)?t[o]=l:n[o]=l}),{transform:t,style:n}}function fm(e){const{transform:t,style:n}=GI(e),{transform:o}=um(t),{style:l}=cm(n);return o.value&&(l.value.transform=o.value),l.value}function KI(e,t){let n,o;const{state:l,style:r}=cm();return ac(e,a=>{o=a;for(const i of Object.keys(am))a.style[i]===null||a.style[i]===""||ic(i)||pm(i)||(l[i]=a.style[i]);n&&Object.entries(n).forEach(([i,c])=>a.style[i]=c),t&&t(l)}),_e(r,a=>{if(!o){n=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function YI(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function XI(e,t){Object.entries(YI(t)).forEach(([n,o])=>{const l=["x","y","z"];if(n==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function ZI(e,t){let n,o;const{state:l,transform:r}=um();return ac(e,a=>{o=a,a.style.transform&&XI(l,a.style.transform),n&&(a.style.transform=n),t&&t(l)}),_e(r,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function JI(e,t){const n=Ue({}),o=a=>Object.entries(a).forEach(([i,c])=>n[i]=c),{style:l}=KI(e,o),{transform:r}=ZI(e,o);return _e(n,a=>{Object.entries(a).forEach(([i,c])=>{const u=ic(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),ac(e,()=>t&&o(t)),{motionProperties:n,style:l,transform:r}}function QI(e={}){const t=S(e),n=F();return{state:M(()=>{if(n.value)return t[n.value]}),variant:n}}function hm(e,t={},n){const{motionProperties:o}=JI(e),{variant:l,state:r}=QI(t),a=II(o,t),i={target:e,variant:l,variants:t,state:r,motionProperties:o,...a};return HI(i,n),i}const e7=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function t7(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&$a(n.variants)&&(t.value={...t.value,...n.variants}),e7.forEach(o=>{if(o==="delay"){if(n&&n[o]&&typeof n[o]=="number"){const l=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&$a(n[o])&&(t.value[o]=n[o])}))}function oa(e){return{created:(n,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&ta[r]&&ta[r].stop();const a=F(e||{});typeof o.value=="object"&&(a.value=o.value),t7(l,a);const i=hm(n,a);n.motionInstance=i,r&&(ta[r]=i)},getSSRProps(n,o){let{initial:l}=n.value||o&&(o==null?void 0:o.props)||{};l=S(l);const r=s9((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:fm(r)}}}}const n7={initial:{opacity:0},enter:{opacity:1}},s7={initial:{opacity:0},visible:{opacity:1}},o7={initial:{opacity:0},visibleOnce:{opacity:1}},l7={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},r7={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},a7={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},i7={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},c7={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u7={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d7={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},p7={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},f7={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},h7={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},m7={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},v7={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},g7={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},y7={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_7={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},b7={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},w7={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},D7={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},x7={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},C7={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},k7={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},A7={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S7={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},B7={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},E7={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},$7={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},T7={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ii={__proto__:null,fade:n7,fadeVisible:s7,fadeVisibleOnce:o7,pop:l7,popVisible:r7,popVisibleOnce:a7,rollBottom:g7,rollLeft:i7,rollRight:d7,rollTop:h7,rollVisibleBottom:y7,rollVisibleLeft:c7,rollVisibleOnceBottom:_7,rollVisibleOnceLeft:u7,rollVisibleOnceRight:f7,rollVisibleOnceTop:v7,rollVisibleRight:p7,rollVisibleTop:m7,slideBottom:E7,slideLeft:b7,slideRight:x7,slideTop:A7,slideVisibleBottom:$7,slideVisibleLeft:w7,slideVisibleOnceBottom:T7,slideVisibleOnceLeft:D7,slideVisibleOnceRight:k7,slideVisibleOnceTop:B7,slideVisibleRight:C7,slideVisibleTop:S7},P7=X({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=hg(),n=Ue({});if(!e.is&&!t.default)return()=>nt("div",{});const o=M(()=>{let c;return e.preset&&(c=ii[e.preset]),c}),l=M(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=M(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=M(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Wd(c)&&(c=ks(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var p,h,f;(p=u.variants)!=null&&p.enter&&u.apply("enter"),(h=u.variants)!=null&&h.visible&&u.apply("visible"),(f=u.variants)!=null&&f.visibleOnce&&u.apply("visibleOnce")},10)};yr(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var i;const l=fm(t.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const p=hm(d,t);n[u]=p},c);if(o){const c=nt(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>r(c,u))}});function I7(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>n.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const O7={install(e,t){if(e.directive("motion",oa()),e.component("Motion",P7),!t||t&&!t.excludePresets)for(const n in ii){const o=ii[n];e.directive(`motion-${I7(n)}`,oa(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,oa(o))}}};var Sd;const $o=typeof window<"u",j7=Object.prototype.toString,M7=e=>j7.call(e)==="[object Object]";$o&&((Sd=window==null?void 0:window.navigator)!=null&&Sd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function L7(e){return fi()?(Yd(e),!0):!1}function R7(e){var t;const n=S(e);return(t=n==null?void 0:n.$el)!=null?t:n}const F7=$o?window:void 0,Bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ed="__vueuse_ssr_handlers__";Bd[Ed]=Bd[Ed]||{};function N7(e,t={}){const{immediate:n=!0,window:o=F7}=t,l=F(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return n&&i(),L7(c),{isActive:l,pause:c,resume:i}}var $d;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})($d||($d={}));const Sr="vue-starport-injection",mm="vue-starport-options",H7={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},vm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var q7=Object.defineProperty,rr=Object.getOwnPropertySymbols,gm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable,Td=(e,t,n)=>t in e?q7(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V7=(e,t)=>{for(var n in t||(t={}))gm.call(t,n)&&Td(e,n,t[n]);if(rr)for(var n of rr(t))ym.call(t,n)&&Td(e,n,t[n]);return e},Pd=(e,t)=>{var n={};for(var o in e)gm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&rr)for(var o of rr(e))t.indexOf(o)<0&&ym.call(e,o)&&(n[o]=e[o]);return n};const z7=X({name:"StarportProxy",props:V7({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},vm),setup(e,t){const n=E(Sr),o=M(()=>n.getInstance(e.port,e.component)),l=F(),r=o.value.generateId(),a=F(!1);return o.value.isVisible||(o.value.land(),a.value=!0),We(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await it(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Jo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&n.dispose(o.value.port))}),_e(()=>e,async()=>{o.value.props&&await it();const i=e,{props:c}=i,u=Pd(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,d=Pd(i,["initialProps","mountedProps"]),p=ze(d,(a.value?u:c)||{});return nt("div",ze(p,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?nt(t.slots.default):void 0)}}});var W7=Object.defineProperty,U7=Object.defineProperties,G7=Object.getOwnPropertyDescriptors,Id=Object.getOwnPropertySymbols,K7=Object.prototype.hasOwnProperty,Y7=Object.prototype.propertyIsEnumerable,Od=(e,t,n)=>t in e?W7(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X7=(e,t)=>{for(var n in t||(t={}))K7.call(t,n)&&Od(e,n,t[n]);if(Id)for(var n of Id(t))Y7.call(t,n)&&Od(e,n,t[n]);return e},Z7=(e,t)=>U7(e,G7(t));const J7=X({name:"Starport",inheritAttrs:!0,props:vm,setup(e,t){const n=F(!1);return We(()=>{if(n.value=!0,!E(Sr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!M7(r)||un(r))&&(r={render(){return o}}),nt(z7,Z7(X7({},e),{key:e.port,component:pr(r),props:l.props}))}}});function Q7(e){const t=Ue({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),n=$o?document.documentElement||document.body:void 0;function o(){if(!$o)return;const i=R7(e);if(!i)return;const{height:c,width:u,left:d,top:p}=i.getBoundingClientRect(),h=window.getComputedStyle(i),f=h.margin,m=h.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+p,margin:f,padding:m})}const l=N7(o,{immediate:!1});function r(){$o&&(o(),l.resume())}function a(){l.pause()}return t}let eO=(e,t=21)=>(n=t)=>{let o="",l=n;for(;l--;)o+=e[Math.random()*e.length|0];return o};const jd=eO("abcdefghijklmnopqrstuvwxyz",5);function Md(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function tO(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var nO=Object.defineProperty,Ld=Object.getOwnPropertySymbols,sO=Object.prototype.hasOwnProperty,oO=Object.prototype.propertyIsEnumerable,Rd=(e,t,n)=>t in e?nO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,la=(e,t)=>{for(var n in t||(t={}))sO.call(t,n)&&Rd(e,n,t[n]);if(Ld)for(var n of Ld(t))oO.call(t,n)&&Rd(e,n,t[n]);return e};function lO(e,t,n={}){const o=tO(t),l=Md(o)||jd(),r=F(),a=F(null),i=F(!1),c=F(!1),u=Rm(!0),d=F({}),p=M(()=>la(la(la({},H7),n),d.value)),h=F(0);let f;u.run(()=>{f=Q7(r),_e(r,async x=>{x&&(c.value=!0),await it(),r.value||(c.value=!1)})});const m=Md(e);function _(){return`starport-${l}-${m}-${jd()}`}const D=_();return Ue({el:r,id:D,port:e,props:a,rect:f,scope:u,isLanded:i,isVisible:c,options:p,liftOffTime:h,component:t,componentName:o,componentId:l,generateId:_,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),f.listen())},land(){i.value||(i.value=!0,f.pause())}})}function rO(e){const t=Ue(new Map);function n(l,r){let a=t.get(l);return a||(a=lO(l,r,e),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:n}}var aO=Object.defineProperty,iO=Object.defineProperties,cO=Object.getOwnPropertyDescriptors,Fd=Object.getOwnPropertySymbols,uO=Object.prototype.hasOwnProperty,dO=Object.prototype.propertyIsEnumerable,Nd=(e,t,n)=>t in e?aO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pO=(e,t)=>{for(var n in t||(t={}))uO.call(t,n)&&Nd(e,n,t[n]);if(Fd)for(var n of Fd(t))dO.call(t,n)&&Nd(e,n,t[n]);return e},fO=(e,t)=>iO(e,cO(t));const hO=X({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=E(Sr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=M(()=>t.getInstance(e.port,e.component)),o=M(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),l=M(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?fO(pO({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return nt("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},nt(qg,{to:a?`#${o.value}`:"body",disabled:!a},nt(n.value.component,ze(r,n.value.props))))}}}),mO=X({name:"StarportCarrier",setup(e,{slots:t}){const n=rO(E(mm,{}));return It().appContext.app.provide(Sr,n),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(n.portMap.entries()).map(([r,{component:a}])=>nt(hO,{key:r,port:r,component:a}))]}}});function vO(e={}){return{install(t){t.provide(mm,e),t.component("Starport",J7),t.component("StarportCarrier",mO)}}}function gO(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(O7),e.app.use(vO({keepAlive:!0}))}function At(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function yO(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,p,h,f,m,_;if(Ao.value||(d=At(n,Do))!=null&&d.value)return;const o=At(n,is),l=At(n,wo),r=At(n,Ba),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((p=o==null?void 0:o.value)==null?void 0:p.length)||0,u=i?F0:Fr;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(t))&&o.value.push(t),n.value==null&&(n.value=(f=o==null?void 0:o.value)==null?void 0:f.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(n.value)),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((_=r==null?void 0:r.value.get(n.value))!=null&&_.includes(t))){const D=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(D))}t==null||t.classList.toggle(os,!0),l&&_e(l,()=>{const D=(l==null?void 0:l.value)??0,x=n.value!=null?D>=n.value:D>c;t.classList.contains(Nr)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(so,!1);const C=r==null?void 0:r.value.get(D);C==null||C.forEach((b,B)=>{b.classList.toggle(hl,!1),B===C.length-1?b.classList.toggle(so,!0):b.classList.toggle(hl,!0)}),t.classList.contains(so)||t.classList.toggle(hl,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(os,!1);const o=At(n,is);o!=null&&o.value&&Ea(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c,u;if(Ao.value||(i=At(n,Do))!=null&&i.value)return;const o=At(n,is),l=At(n,wo),r=At(n,Ba),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(n.value)),r!=null&&r.value.has(n.value)?(u=r==null?void 0:r.value.get(n.value))==null||u.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(os,!0),l&&_e(l,()=>{const d=(l.value??0)>=(n.value??a??0);t.classList.contains(Nr)||t.classList.toggle(Fr,!d),t.classList.toggle(so,!1),t.classList.contains(so)||t.classList.toggle(hl,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(os,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(Ao.value||(a=At(n,Do))!=null&&a.value)return;const o=At(n,is),l=At(n,wo),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(os,!0),l&&_e(l,()=>{const u=(l==null?void 0:l.value)??0,d=n.value!=null?u>=n.value:u>r;t.classList.toggle(Fr,d),t.classList.toggle(Nr,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(os,!1);const o=At(n,is);o!=null&&o.value&&Ea(o.value,t)}})}}}function _O(e,t){const n=xh(e),o=Ch(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:Te,themeConfigs:M(()=>Te.themeConfig)}}function bO(){return{install(e){const t=_O(qt,Ft);e.provide(P,Ue(t))}}}const Xs=Vy(t9);Xs.use(kt);Xs.use(M0());Xs.use(yO());Xs.use(bO());gO({app:Xs,router:kt});Xs.mount("#app");export{rD as $,Cw as A,F as B,SO as C,gt as D,Le as E,$e as F,W2 as G,KP as H,Ft as I,sr as J,VP as K,Xr as L,We as M,Ue as N,kO as O,BO as P,_e as Q,j as R,nh as S,Pe as T,vt as U,o5 as V,DO as W,xO as X,Ho as Y,Ur as Z,I as _,P as a,Ni as a0,Hi as a1,tD as a2,Ke as a3,lb as a4,CO as a5,bt as a6,uo as a7,_l as a8,fs as a9,on as aa,qa as ab,P2 as ac,I2 as ad,O2 as ae,M2 as af,Zo as ag,of as ah,EO as ai,_t as aj,Nb as ak,vf as al,L2 as am,Jo as an,mf as b,Te as c,X as d,Dv as e,A as f,s as g,S as h,E as i,Je as j,FP as k,y as l,k as m,Ge as n,g as o,ye as p,Oi as q,Yn as r,Zt as s,Ht as t,AO as u,M as v,Hr as w,V as x,Kf as y,Ew as z};
