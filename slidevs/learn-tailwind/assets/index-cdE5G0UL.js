(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ii(e,t){const l=new Set(e.split(","));return t?o=>l.has(o.toLowerCase()):o=>l.has(o)}const Ye=Object.freeze({}),jr=Object.freeze([]),gt=()=>{},dh=()=>!1,Ca=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yc=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Ku=(e,t)=>{const l=e.indexOf(t);l>-1&&e.splice(l,1)},W_=Object.prototype.hasOwnProperty,Ie=(e,t)=>W_.call(e,t),_e=Array.isArray,er=e=>Ea(e)==="[object Map]",uh=e=>Ea(e)==="[object Set]",U_=e=>Ea(e)==="[object RegExp]",xe=e=>typeof e=="function",Ze=e=>typeof e=="string",Br=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",Yu=e=>(ze(e)||xe(e))&&xe(e.then)&&xe(e.catch),fh=Object.prototype.toString,Ea=e=>fh.call(e),Ju=e=>Ea(e).slice(8,-1),ph=e=>Ea(e)==="[object Object]",Zu=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ic=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K_=ii("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Gc=e=>{const t=Object.create(null);return l=>t[l]||(t[l]=e(l))},Y_=/-(\w)/g,No=Gc(e=>e.replace(Y_,(t,l)=>l?l.toUpperCase():"")),J_=/\B([A-Z])/g,li=Gc(e=>e.replace(J_,"-$1").toLowerCase()),ar=Gc(e=>e.charAt(0).toUpperCase()+e.slice(1)),qi=Gc(e=>e?`on${ar(e)}`:""),Ci=(e,t)=>!Object.is(e,t),Wi=(e,t)=>{for(let l=0;l<e.length;l++)e[l](t)},bc=(e,t,l)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:l})},Z_=e=>{const t=parseFloat(e);return isNaN(t)?e:t},X_=e=>{const t=Ze(e)?Number(e):NaN;return isNaN(t)?e:t};let lp;const Xu=()=>lp||(lp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function st(e){if(_e(e)){const t={};for(let l=0;l<e.length;l++){const o=e[l],s=Ze(o)?n0(o):st(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ze(e)||ze(e))return e}const Q_=/;(?![^(]*\))/g,e0=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function n0(e){const t={};return e.replace(t0,"").split(Q_).forEach(l=>{if(l){const o=l.split(e0);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ve(e){let t="";if(Ze(e))t=e;else if(_e(e))for(let l=0;l<e.length;l++){const o=Ve(e[l]);o&&(t+=o+" ")}else if(ze(e))for(const l in e)e[l]&&(t+=l+" ");return t.trim()}function R(e){if(!e)return null;let{class:t,style:l}=e;return t&&!Ze(t)&&(e.class=Ve(t)),l&&(e.style=st(l)),e}const s0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",l0="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",o0="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",mh=ii(s0),i0=ii(l0),r0=ii(o0),a0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c0=ii(a0);function hh(e){return!!e||e===""}const Ht=e=>Ze(e)?e:e==null?"":_e(e)||ze(e)&&(e.toString===fh||!xe(e.toString))?JSON.stringify(e,vh,2):String(e),vh=(e,t)=>t&&t.__v_isRef?vh(e,t.value):er(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((l,[o,s],i)=>(l[md(o,i)+" =>"]=s,l),{})}:uh(t)?{[`Set(${t.size})`]:[...t.values()].map(l=>md(l))}:Br(t)?md(t):ze(t)&&!_e(t)&&!ph(t)?String(t):t,md=(e,t="")=>{var l;return Br(e)?`Symbol(${(l=e.description)!=null?l:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wc(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let It;class gh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!t&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const l=It;try{return It=this,t()}finally{It=l}}else wc("cannot run an inactive effect scope.")}on(){It=this}off(){It=this.parent}stop(t){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function d0(e){return new gh(e)}function u0(e,t=It){t&&t.active&&t.effects.push(e)}function _h(){return It}function f0(e){It?It.cleanups.push(e):wc("onScopeDispose() is called when there is no active effect scope to be associated with.")}let tr;class Qu{constructor(t,l,o,s){this.fn=t,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,u0(this,s)}get dirty(){if(this._dirtyLevel===1){Di();for(let t=0;t<this._depsLength;t++){const l=this.deps[t];if(l.computed&&(p0(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Bi()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=wi,l=tr;try{return wi=!0,tr=this,this._runnings++,op(this),this.fn()}finally{ip(this),this._runnings--,tr=l,wi=t}}stop(){var t;this.active&&(op(this),ip(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function p0(e){return e.value}function op(e){e._trackId++,e._depsLength=0}function ip(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)yh(e.deps[t],e);e.deps.length=e._depsLength}}function yh(e,t){const l=e.get(t);l!==void 0&&t._trackId!==l&&(e.delete(t),e.size===0&&e.cleanup())}let wi=!0,Kd=0;const bh=[];function Di(){bh.push(wi),wi=!1}function Bi(){const e=bh.pop();wi=e===void 0?!0:e}function ef(){Kd++}function tf(){for(Kd--;!Kd&&Yd.length;)Yd.shift()()}function wh(e,t,l){var o;if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&yh(s,e),e.deps[e._depsLength++]=t):e._depsLength++,(o=e.onTrack)==null||o.call(e,Xe({effect:e},l))}}const Yd=[];function xh(e,t,l){var o;ef();for(const s of e.keys())if(s._dirtyLevel<t&&e.get(s)===s._trackId){const i=s._dirtyLevel;s._dirtyLevel=t,i===0&&(s._shouldSchedule=!0,(o=s.onTrigger)==null||o.call(s,Xe({effect:s},l)),s.trigger())}kh(e),tf()}function kh(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Yd.push(t.scheduler))}const $h=(e,t)=>{const l=new Map;return l.cleanup=e,l.computed=t,l},xc=new WeakMap,nr=Symbol("iterate"),Jd=Symbol("Map key iterate");function yt(e,t,l){if(wi&&tr){let o=xc.get(e);o||xc.set(e,o=new Map);let s=o.get(l);s||o.set(l,s=$h(()=>o.delete(l))),wh(tr,s,{target:e,type:t,key:l})}}function zo(e,t,l,o,s,i){const a=xc.get(e);if(!a)return;let r=[];if(t==="clear")r=[...a.values()];else if(l==="length"&&_e(e)){const d=Number(o);a.forEach((f,p)=>{(p==="length"||!Br(p)&&p>=d)&&r.push(f)})}else switch(l!==void 0&&r.push(a.get(l)),t){case"add":_e(e)?Zu(l)&&r.push(a.get("length")):(r.push(a.get(nr)),er(e)&&r.push(a.get(Jd)));break;case"delete":_e(e)||(r.push(a.get(nr)),er(e)&&r.push(a.get(Jd)));break;case"set":er(e)&&r.push(a.get(nr));break}ef();for(const d of r)d&&xh(d,2,{target:e,type:t,key:l,newValue:o,oldValue:s,oldTarget:i});tf()}function m0(e,t){var l;return(l=xc.get(e))==null?void 0:l.get(t)}const h0=ii("__proto__,__v_isRef,__isVue"),Sh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Br)),rp=v0();function v0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...l){const o=$e(this);for(let i=0,a=this.length;i<a;i++)yt(o,"get",i+"");const s=o[t](...l);return s===-1||s===!1?o[t](...l.map($e)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...l){Di(),ef();const o=$e(this)[t].apply(this,l);return tf(),Bi(),o}}),e}function g0(e){const t=$e(this);return yt(t,"has",e),t.hasOwnProperty(e)}class jh{constructor(t=!1,l=!1){this._isReadonly=t,this._shallow=l}get(t,l,o){const s=this._isReadonly,i=this._shallow;if(l==="__v_isReactive")return!s;if(l==="__v_isReadonly")return s;if(l==="__v_isShallow")return i;if(l==="__v_raw")return o===(s?i?Dh:Oh:i?Ah:Eh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=_e(t);if(!s){if(a&&Ie(rp,l))return Reflect.get(rp,l,o);if(l==="hasOwnProperty")return g0}const r=Reflect.get(t,l,o);return(Br(l)?Sh.has(l):h0(l))||(s||yt(t,"get",l),i)?r:Ne(r)?a&&Zu(l)?r:r.value:ze(r)?s?Oo(r):g(r):r}}class Ph extends jh{constructor(t=!1){super(!1,t)}set(t,l,o,s){let i=t[l];if(!this._shallow){const d=Ei(i);if(!kc(o)&&!Ei(o)&&(i=$e(i),o=$e(o)),!_e(t)&&Ne(i)&&!Ne(o))return d?!1:(i.value=o,!0)}const a=_e(t)&&Zu(l)?Number(l)<t.length:Ie(t,l),r=Reflect.set(t,l,o,s);return t===$e(s)&&(a?Ci(o,i)&&zo(t,"set",l,o,i):zo(t,"add",l,o)),r}deleteProperty(t,l){const o=Ie(t,l),s=t[l],i=Reflect.deleteProperty(t,l);return i&&o&&zo(t,"delete",l,void 0,s),i}has(t,l){const o=Reflect.has(t,l);return(!Br(l)||!Sh.has(l))&&yt(t,"has",l),o}ownKeys(t){return yt(t,"iterate",_e(t)?"length":nr),Reflect.ownKeys(t)}}class Th extends jh{constructor(t=!1){super(!0,t)}set(t,l){return wc(`Set operation on key "${String(l)}" failed: target is readonly.`,t),!0}deleteProperty(t,l){return wc(`Delete operation on key "${String(l)}" failed: target is readonly.`,t),!0}}const _0=new Ph,y0=new Th,b0=new Ph(!0),w0=new Th(!0),nf=e=>e,Wc=e=>Reflect.getPrototypeOf(e);function qa(e,t,l=!1,o=!1){e=e.__v_raw;const s=$e(e),i=$e(t);l||(Ci(t,i)&&yt(s,"get",t),yt(s,"get",i));const{has:a}=Wc(s),r=o?nf:l?sf:fa;if(a.call(s,t))return r(e.get(t));if(a.call(s,i))return r(e.get(i));e!==s&&e.get(t)}function Va(e,t=!1){const l=this.__v_raw,o=$e(l),s=$e(e);return t||(Ci(e,s)&&yt(o,"has",e),yt(o,"has",s)),e===s?l.has(e):l.has(e)||l.has(s)}function Ga(e,t=!1){return e=e.__v_raw,!t&&yt($e(e),"iterate",nr),Reflect.get(e,"size",e)}function ap(e){e=$e(e);const t=$e(this);return Wc(t).has.call(t,e)||(t.add(e),zo(t,"add",e,e)),this}function cp(e,t){t=$e(t);const l=$e(this),{has:o,get:s}=Wc(l);let i=o.call(l,e);i?Ch(l,o,e):(e=$e(e),i=o.call(l,e));const a=s.call(l,e);return l.set(e,t),i?Ci(t,a)&&zo(l,"set",e,t,a):zo(l,"add",e,t),this}function dp(e){const t=$e(this),{has:l,get:o}=Wc(t);let s=l.call(t,e);s?Ch(t,l,e):(e=$e(e),s=l.call(t,e));const i=o?o.call(t,e):void 0,a=t.delete(e);return s&&zo(t,"delete",e,void 0,i),a}function up(){const e=$e(this),t=e.size!==0,l=er(e)?new Map(e):new Set(e),o=e.clear();return t&&zo(e,"clear",void 0,void 0,l),o}function Wa(e,t){return function(o,s){const i=this,a=i.__v_raw,r=$e(a),d=t?nf:e?sf:fa;return!e&&yt(r,"iterate",nr),a.forEach((f,p)=>o.call(s,d(f),d(p),i))}}function Ua(e,t,l){return function(...o){const s=this.__v_raw,i=$e(s),a=er(i),r=e==="entries"||e===Symbol.iterator&&a,d=e==="keys"&&a,f=s[e](...o),p=l?nf:t?sf:fa;return!t&&yt(i,"iterate",d?Jd:nr),{next(){const{value:m,done:v}=f.next();return v?{value:m,done:v}:{value:r?[p(m[0]),p(m[1])]:p(m),done:v}},[Symbol.iterator](){return this}}}}function ai(e){return function(...t){{const l=t[0]?`on key "${t[0]}" `:"";console.warn(`${ar(e)} operation ${l}failed: target is readonly.`,$e(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function x0(){const e={get(i){return qa(this,i)},get size(){return Ga(this)},has:Va,add:ap,set:cp,delete:dp,clear:up,forEach:Wa(!1,!1)},t={get(i){return qa(this,i,!1,!0)},get size(){return Ga(this)},has:Va,add:ap,set:cp,delete:dp,clear:up,forEach:Wa(!1,!0)},l={get(i){return qa(this,i,!0)},get size(){return Ga(this,!0)},has(i){return Va.call(this,i,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:Wa(!0,!1)},o={get(i){return qa(this,i,!0,!0)},get size(){return Ga(this,!0)},has(i){return Va.call(this,i,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ua(i,!1,!1),l[i]=Ua(i,!0,!1),t[i]=Ua(i,!1,!0),o[i]=Ua(i,!0,!0)}),[e,l,t,o]}const[k0,$0,S0,j0]=x0();function Uc(e,t){const l=t?e?j0:S0:e?$0:k0;return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Ie(l,s)&&s in o?l:o,s,i)}const P0={get:Uc(!1,!1)},T0={get:Uc(!1,!0)},C0={get:Uc(!0,!1)},E0={get:Uc(!0,!0)};function Ch(e,t,l){const o=$e(l);if(o!==l&&t.call(e,o)){const s=Ju(e);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Eh=new WeakMap,Ah=new WeakMap,Oh=new WeakMap,Dh=new WeakMap;function A0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O0(e){return e.__v_skip||!Object.isExtensible(e)?0:A0(Ju(e))}function g(e){return Ei(e)?e:Kc(e,!1,_0,P0,Eh)}function Bh(e){return Kc(e,!1,b0,T0,Ah)}function Oo(e){return Kc(e,!0,y0,C0,Oh)}function $r(e){return Kc(e,!0,w0,E0,Dh)}function Kc(e,t,l,o,s){if(!ze(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=O0(e);if(a===0)return e;const r=new Proxy(e,a===2?o:l);return s.set(e,r),r}function sr(e){return Ei(e)?sr(e.__v_raw):!!(e&&e.__v_isReactive)}function Ei(e){return!!(e&&e.__v_isReadonly)}function kc(e){return!!(e&&e.__v_isShallow)}function $c(e){return sr(e)||Ei(e)}function $e(e){const t=e&&e.__v_raw;return t?$e(t):e}function Yc(e){return bc(e,"__v_skip",!0),e}const fa=e=>ze(e)?g(e):e,sf=e=>ze(e)?Oo(e):e;class Mh{constructor(t,l,o,s){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qu(()=>t(this._value),()=>na(this,1),()=>this.dep&&kh(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=$e(this);return(!t._cacheable||t.effect.dirty)&&Ci(t._value,t._value=t.effect.run())&&na(t,2),lf(t),t.effect._dirtyLevel>=1&&na(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function D0(e,t,l=!1){let o,s;const i=xe(e);i?(o=e,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,s=e.set);const a=new Mh(o,s,i||!s,l);return t&&!l&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}function lf(e){wi&&tr&&(e=$e(e),wh(tr,e.dep||(e.dep=$h(()=>e.dep=void 0,e instanceof Mh?e:void 0)),{target:e,type:"get",key:"value"}))}function na(e,t=2,l){e=$e(e);const o=e.dep;o&&xh(o,t,{target:e,type:"set",key:"value",newValue:l})}function Ne(e){return!!(e&&e.__v_isRef===!0)}function le(e){return Fh(e,!1)}function qo(e){return Fh(e,!0)}function Fh(e,t){return Ne(e)?e:new B0(e,t)}class B0{constructor(t,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?t:$e(t),this._value=l?t:fa(t)}get value(){return lf(this),this._value}set value(t){const l=this.__v_isShallow||kc(t)||Ei(t);t=l?t:$e(t),Ci(t,this._rawValue)&&(this._rawValue=t,this._value=l?t:fa(t),na(this,2,t))}}function y(e){return Ne(e)?e.value:e}const M0={get:(e,t,l)=>y(Reflect.get(e,t,l)),set:(e,t,l,o)=>{const s=e[t];return Ne(s)&&!Ne(l)?(s.value=l,!0):Reflect.set(e,t,l,o)}};function Ih(e){return sr(e)?e:new Proxy(e,M0)}class F0{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=t(()=>lf(this),()=>na(this));this._get=l,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function of(e){return new F0(e)}function I0(e){$c(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=_e(e)?new Array(e.length):{};for(const l in e)t[l]=Lh(e,l);return t}class L0{constructor(t,l,o){this._object=t,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return m0($e(this._object),this._key)}}class R0{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function B(e,t,l){return Ne(e)?e:xe(e)?new R0(e):ze(e)&&arguments.length>1?Lh(e,t,l):le(e)}function Lh(e,t,l){const o=e[t];return Ne(o)?o:new L0(e,t,l)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lr=[];function rc(e){lr.push(e)}function ac(){lr.pop()}function te(e,...t){Di();const l=lr.length?lr[lr.length-1].component:null,o=l&&l.appContext.config.warnHandler,s=H0();if(o)ti(o,l,11,[e+t.join(""),l&&l.proxy,s.map(({vnode:i})=>`at <${od(l,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...z0(s)),console.warn(...i)}Bi()}function H0(){let e=lr[lr.length-1];if(!e)return[];const t=[];for(;e;){const l=t[0];l&&l.vnode===e?l.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function z0(e){const t=[];return e.forEach((l,o)=>{t.push(...o===0?[]:[`
`],...N0(l))}),t}function N0({vnode:e,recurseCount:t}){const l=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${od(e.component,e.type,o)}`,i=">"+l;return e.props?[s,...q0(e.props),i]:[s+i]}function q0(e){const t=[],l=Object.keys(e);return l.slice(0,3).forEach(o=>{t.push(...Rh(o,e[o]))}),l.length>3&&t.push(" ..."),t}function Rh(e,t,l){return Ze(t)?(t=JSON.stringify(t),l?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?l?t:[`${e}=${t}`]:Ne(t)?(t=Rh(e,$e(t.value),!0),l?t:[`${e}=Ref<`,t,">"]):xe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=$e(t),l?t:[`${e}=`,t])}function V0(e,t){e!==void 0&&(typeof e!="number"?te(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&te(`${t} is NaN - the duration expression might be incorrect.`))}const rf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ti(e,t,l,o){let s;try{s=o?e(...o):e()}catch(i){Aa(i,t,l)}return s}function Yt(e,t,l,o){if(xe(e)){const i=ti(e,t,l,o);return i&&Yu(i)&&i.catch(a=>{Aa(a,t,l)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Yt(e[i],t,l,o));return s}function Aa(e,t,l,o=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,r=rf[l];for(;i;){const f=i.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,r)===!1)return}i=i.parent}const d=t.appContext.config.errorHandler;if(d){ti(d,null,10,[e,a,r]);return}}G0(e,l,s,o)}function G0(e,t,l,o=!0){{const s=rf[t];if(l&&rc(l),te(`Unhandled error${s?` during execution of ${s}`:""}`),l&&ac(),o)throw e;console.error(e)}}let pa=!1,Zd=!1;const ht=[];let Io=0;const Pr=[];let Qo=null,pi=0;const Hh=Promise.resolve();let af=null;const W0=100;function ut(e){const t=af||Hh;return e?t.then(this?e.bind(this):e):t}function U0(e){let t=Io+1,l=ht.length;for(;t<l;){const o=t+l>>>1,s=ht[o],i=ma(s);i<e||i===e&&s.pre?t=o+1:l=o}return t}function Jc(e){(!ht.length||!ht.includes(e,pa&&e.allowRecurse?Io+1:Io))&&(e.id==null?ht.push(e):ht.splice(U0(e.id),0,e),zh())}function zh(){!pa&&!Zd&&(Zd=!0,af=Hh.then(Vh))}function K0(e){const t=ht.indexOf(e);t>Io&&ht.splice(t,1)}function Nh(e){_e(e)?Pr.push(...e):(!Qo||!Qo.includes(e,e.allowRecurse?pi+1:pi))&&Pr.push(e),zh()}function fp(e,t,l=pa?Io+1:0){for(t=t||new Map;l<ht.length;l++){const o=ht[l];if(o&&o.pre){if(e&&o.id!==e.uid||cf(t,o))continue;ht.splice(l,1),l--,o()}}}function qh(e){if(Pr.length){const t=[...new Set(Pr)].sort((l,o)=>ma(l)-ma(o));if(Pr.length=0,Qo){Qo.push(...t);return}for(Qo=t,e=e||new Map,pi=0;pi<Qo.length;pi++)cf(e,Qo[pi])||Qo[pi]();Qo=null,pi=0}}const ma=e=>e.id==null?1/0:e.id,Y0=(e,t)=>{const l=ma(e)-ma(t);if(l===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return l};function Vh(e){Zd=!1,pa=!0,e=e||new Map,ht.sort(Y0);const t=l=>cf(e,l);try{for(Io=0;Io<ht.length;Io++){const l=ht[Io];if(l&&l.active!==!1){if(t(l))continue;ti(l,null,14)}}}finally{Io=0,ht.length=0,qh(e),pa=!1,af=null,(ht.length||Pr.length)&&Vh(e)}}function cf(e,t){if(!e.has(t))e.set(t,1);else{const l=e.get(t);if(l>W0){const o=t.ownerInstance,s=o&&ga(o.type);return Aa(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else e.set(t,l+1)}}let xi=!1;const kr=new Set;Xu().__VUE_HMR_RUNTIME__={createRecord:hd(Gh),rerender:hd(X0),reload:hd(Q0)};const cr=new Map;function J0(e){const t=e.type.__hmrId;let l=cr.get(t);l||(Gh(t,e.type),l=cr.get(t)),l.instances.add(e)}function Z0(e){cr.get(e.type.__hmrId).instances.delete(e)}function Gh(e,t){return cr.has(e)?!1:(cr.set(e,{initialDef:sa(t),instances:new Set}),!0)}function sa(e){return Tv(e)?e.__vccOpts:e}function X0(e,t){const l=cr.get(e);l&&(l.initialDef.render=t,[...l.instances].forEach(o=>{t&&(o.render=t,sa(o.type).render=t),o.renderCache=[],xi=!0,o.effect.dirty=!0,o.update(),xi=!1}))}function Q0(e,t){const l=cr.get(e);if(!l)return;t=sa(t),pp(l.initialDef,t);const o=[...l.instances];for(const s of o){const i=sa(s.type);kr.has(i)||(i!==l.initialDef&&pp(i,t),kr.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(kr.add(i),s.ceReload(t.styles),kr.delete(i)):s.parent?(s.parent.effect.dirty=!0,Jc(s.parent.update)):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Nh(()=>{for(const s of o)kr.delete(sa(s.type))})}function pp(e,t){Xe(e,t);for(const l in e)l!=="__file"&&!(l in t)&&delete e[l]}function hd(e){return(t,l)=>{try{return e(t,l)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Lo,Zr=[],Xd=!1;function Oa(e,...t){Lo?Lo.emit(e,...t):Xd||Zr.push({event:e,args:t})}function Wh(e,t){var l,o;Lo=e,Lo?(Lo.enabled=!0,Zr.forEach(({event:s,args:i})=>Lo.emit(s,...i)),Zr=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Wh(i,t)}),setTimeout(()=>{Lo||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xd=!0,Zr=[])},3e3)):(Xd=!0,Zr=[])}function e1(e,t){Oa("app:init",e,t,{Fragment:Pe,Text:Ma,Comment:at,Static:cc})}function t1(e){Oa("app:unmount",e)}const Qd=df("component:added"),Uh=df("component:updated"),n1=df("component:removed"),s1=e=>{Lo&&typeof Lo.cleanupBuffer=="function"&&!Lo.cleanupBuffer(e)&&n1(e)};function df(e){return t=>{Oa(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const l1=Kh("perf:start"),o1=Kh("perf:end");function Kh(e){return(t,l,o)=>{Oa(e,t.appContext.app,t.uid,t,l,o)}}function i1(e,t,l){Oa("component:emit",e.appContext.app,e,t,l)}function r1(e,t,...l){if(e.isUnmounted)return;const o=e.vnode.props||Ye;{const{emitsOptions:p,propsOptions:[m]}=e;if(p)if(!(t in p))(!m||!(qi(t)in m))&&te(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${qi(t)}" prop.`);else{const v=p[t];xe(v)&&(v(...l)||te(`Invalid event arguments: event validation failed for event "${t}".`))}}let s=l;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:v}=o[p]||Ye;v&&(s=l.map(_=>Ze(_)?_.trim():_)),m&&(s=l.map(Z_))}i1(e,t,s);{const p=t.toLowerCase();p!==t&&o[qi(p)]&&te(`Event "${p}" is emitted in component ${od(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${li(t)}" instead of "${t}".`)}let r,d=o[r=qi(t)]||o[r=qi(No(t))];!d&&i&&(d=o[r=qi(li(t))]),d&&Yt(d,e,6,s);const f=o[r+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Yt(f,e,6,s)}}function Yh(e,t,l=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let a={},r=!1;if(!xe(e)){const d=f=>{const p=Yh(f,t,!0);p&&(r=!0,Xe(a,p))};!l&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!i&&!r?(ze(e)&&o.set(e,null),null):(_e(i)?i.forEach(d=>a[d]=null):Xe(a,i),ze(e)&&o.set(e,a),a)}function Zc(e,t){return!e||!Ca(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ie(e,t[0].toLowerCase()+t.slice(1))||Ie(e,li(t))||Ie(e,t))}let nt=null,Xc=null;function Sc(e){const t=nt;return nt=e,Xc=e&&e.type.__scopeId||null,t}function Dt(e){Xc=e}function Bt(){Xc=null}function C(e,t=nt,l){if(!t||e._n)return e;const o=(...s)=>{o._d&&Cp(-1);const i=Sc(t);let a;try{a=e(...s)}finally{Sc(i),o._d&&Cp(1)}return Uh(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let eu=!1;function jc(){eu=!0}function vd(e){const{type:t,vnode:l,proxy:o,withProxy:s,props:i,propsOptions:[a],slots:r,attrs:d,emit:f,render:p,renderCache:m,data:v,setupState:_,ctx:b,inheritAttrs:$}=e;let T,E;const z=Sc(e);eu=!1;try{if(l.shapeFlag&4){const V=s||o,X=_.__isScriptSetup?new Proxy(V,{get(q,J,U){return te(`Property '${String(J)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(q,J,U)}}):V;T=Ao(p.call(X,V,m,i,_,v,b)),E=d}else{const V=t;d===i&&jc(),T=Ao(V.length>1?V(i,{get attrs(){return jc(),d},slots:r,emit:f}):V(i,null)),E=t.props?d:a1(d)}}catch(V){la.length=0,Aa(V,e,1),T=Z(at)}let j=T,N;if(T.patchFlag>0&&T.patchFlag&2048&&([j,N]=Jh(T)),E&&$!==!1){const V=Object.keys(E),{shapeFlag:X}=j;if(V.length){if(X&7)a&&V.some(yc)&&(E=c1(E,a)),j=Bo(j,E);else if(!eu&&j.type!==at){const q=Object.keys(d),J=[],U=[];for(let ie=0,pe=q.length;ie<pe;ie++){const ne=q[ie];Ca(ne)?yc(ne)||J.push(ne[2].toLowerCase()+ne.slice(3)):U.push(ne)}U.length&&te(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),J.length&&te(`Extraneous non-emits event listeners (${J.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return l.dirs&&(mp(j)||te("Runtime directive used on component with non-element root node. The directives will not function as intended."),j=Bo(j),j.dirs=j.dirs?j.dirs.concat(l.dirs):l.dirs),l.transition&&(mp(j)||te("Component inside <Transition> renders non-element root node that cannot be animated."),j.transition=l.transition),N?N(j):T=j,Sc(z),T}const Jh=e=>{const t=e.children,l=e.dynamicChildren,o=uf(t,!1);if(o){if(o.patchFlag>0&&o.patchFlag&2048)return Jh(o)}else return[e,void 0];const s=t.indexOf(o),i=l?l.indexOf(o):-1,a=r=>{t[s]=r,l&&(i>-1?l[i]=r:r.patchFlag>0&&(e.dynamicChildren=[...l,r]))};return[Ao(o),a]};function uf(e,t=!0){let l;for(let o=0;o<e.length;o++){const s=e[o];if(Ai(s)){if(s.type!==at||s.children==="v-if"){if(l)return;if(l=s,t&&l.patchFlag>0&&l.patchFlag&2048)return uf(l.children)}}else return}return l}const a1=e=>{let t;for(const l in e)(l==="class"||l==="style"||Ca(l))&&((t||(t={}))[l]=e[l]);return t},c1=(e,t)=>{const l={};for(const o in e)(!yc(o)||!(o.slice(9)in t))&&(l[o]=e[o]);return l},mp=e=>e.shapeFlag&7||e.type===at;function d1(e,t,l){const{props:o,children:s,component:i}=e,{props:a,children:r,patchFlag:d}=t,f=i.emitsOptions;if((s||r)&&xi||t.dirs||t.transition)return!0;if(l&&d>=0){if(d&1024)return!0;if(d&16)return o?hp(o,a,f):!!a;if(d&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const v=p[m];if(a[v]!==o[v]&&!Zc(f,v))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?hp(o,a,f):!0:!!a;return!1}function hp(e,t,l){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Zc(l,i))return!0}return!1}function u1({vnode:e,parent:t},l){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=l,t=t.parent;else break}}const Pc="components";function dr(e,t){return Xh(Pc,e,!0,t)||e}const Zh=Symbol.for("v-ndc");function f1(e){return Ze(e)?Xh(Pc,e,!1)||e:e||Zh}function Xh(e,t,l=!0,o=!1){const s=nt||ot;if(s){const i=s.type;if(e===Pc){const r=ga(i,!1);if(r&&(r===t||r===No(t)||r===ar(No(t))))return i}const a=vp(s[e]||i[e],t)||vp(s.appContext[e],t);if(!a&&o)return i;if(l&&!a){const r=e===Pc?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";te(`Failed to resolve ${e.slice(0,-1)}: ${t}${r}`)}return a}else te(`resolve${ar(e.slice(0,-1))} can only be used in render() or setup().`)}function vp(e,t){return e&&(e[t]||e[No(t)]||e[ar(No(t))])}const Qh=e=>e.__isSuspense;function p1(e,t){t&&t.pendingBranch?_e(e)?t.effects.push(...e):t.effects.push(e):Nh(e)}const m1=Symbol.for("v-scx"),h1=()=>{{const e=u(m1);return e||te("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function pr(e,t){return ff(e,null,t)}const Ka={};function Ae(e,t,l){return xe(t)||te("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ff(e,t,l)}function ff(e,t,{immediate:l,deep:o,flush:s,once:i,onTrack:a,onTrigger:r}=Ye){if(t&&i){const q=t;t=(...J)=>{q(...J),X()}}o!==void 0&&typeof o=="number"&&te('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),t||(l!==void 0&&te('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&te('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&te('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const d=q=>{te("Invalid watch source: ",q,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},f=ot,p=q=>o===!0?q:Zi(q,o===!1?1:void 0);let m,v=!1,_=!1;if(Ne(e)?(m=()=>e.value,v=kc(e)):sr(e)?(m=()=>p(e),v=!0):_e(e)?(_=!0,v=e.some(q=>sr(q)||kc(q)),m=()=>e.map(q=>{if(Ne(q))return q.value;if(sr(q))return p(q);if(xe(q))return ti(q,f,2);d(q)})):xe(e)?t?m=()=>ti(e,f,2):m=()=>(b&&b(),Yt(e,f,3,[$])):(m=gt,d(e)),t&&o){const q=m;m=()=>Zi(q())}let b,$=q=>{b=N.onStop=()=>{ti(q,f,4),b=N.onStop=void 0}},T;if(sd)if($=gt,t?l&&Yt(t,f,3,[m(),_?[]:void 0,$]):m(),s==="sync"){const q=h1();T=q.__watcherHandles||(q.__watcherHandles=[])}else return gt;let E=_?new Array(e.length).fill(Ka):Ka;const z=()=>{if(!(!N.active||!N.dirty))if(t){const q=N.run();(o||v||(_?q.some((J,U)=>Ci(J,E[U])):Ci(q,E)))&&(b&&b(),Yt(t,f,3,[q,E===Ka?void 0:_&&E[0]===Ka?[]:E,$]),E=q)}else N.run()};z.allowRecurse=!!t;let j;s==="sync"?j=z:s==="post"?j=()=>dt(z,f&&f.suspense):(z.pre=!0,f&&(z.id=f.uid),j=()=>Jc(z));const N=new Qu(m,gt,j),V=_h(),X=()=>{N.stop(),V&&Ku(V.effects,N)};return N.onTrack=a,N.onTrigger=r,t?l?z():E=N.run():s==="post"?dt(N.run.bind(N),f&&f.suspense):N.run(),T&&T.push(X),X}function v1(e,t,l){const o=this.proxy,s=Ze(e)?e.includes(".")?ev(o,e):()=>o[e]:e.bind(o,o);let i;xe(t)?i=t:(i=t.handler,l=t);const a=Fa(this),r=ff(s,i.bind(o),l);return a(),r}function ev(e,t){const l=t.split(".");return()=>{let o=e;for(let s=0;s<l.length&&o;s++)o=o[l[s]];return o}}function Zi(e,t,l=0,o){if(!ze(e)||e.__v_skip)return e;if(t&&t>0){if(l>=t)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),Ne(e))Zi(e.value,t,l,o);else if(_e(e))for(let s=0;s<e.length;s++)Zi(e[s],t,l,o);else if(uh(e)||er(e))e.forEach(s=>{Zi(s,t,l,o)});else if(ph(e))for(const s in e)Zi(e[s],t,l,o);return e}function tv(e){K_(e)&&te("Do not use built-in directive ids as custom directive id: "+e)}function nv(e,t){if(nt===null)return te("withDirectives can only be used inside render functions."),e;const l=ld(nt)||nt.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,r,d=Ye]=t[s];i&&(xe(i)&&(i={mounted:i,updated:i}),i.deep&&Zi(a),o.push({dir:i,instance:l,value:a,oldValue:void 0,arg:r,modifiers:d}))}return e}function Li(e,t,l,o){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const r=s[a];i&&(r.oldValue=i[a].value);let d=r.dir[o];d&&(Di(),Yt(d,l,8,[e.el,r,e,t]),Bi())}}const mi=Symbol("_leaveCb"),Ya=Symbol("_enterCb");function sv(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wo(()=>{e.isMounted=!0}),Ba(()=>{e.isUnmounting=!0}),e}const Gt=[Function,Array],lv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},g1={name:"BaseTransition",props:lv,setup(e,{slots:t}){const l=jt(),o=sv();let s;return()=>{const i=t.default&&pf(t.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){let $=!1;for(const T of i)if(T.type!==at){if($){te("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=T,$=!0}}const r=$e(e),{mode:d}=r;if(d&&d!=="in-out"&&d!=="out-in"&&d!=="default"&&te(`invalid <transition> mode: ${d}`),o.isLeaving)return gd(a);const f=gp(a);if(!f)return gd(a);const p=ha(f,r,o,l);Ar(f,p);const m=l.subTree,v=m&&gp(m);let _=!1;const{getTransitionKey:b}=f.type;if(b){const $=b();s===void 0?s=$:$!==s&&(s=$,_=!0)}if(v&&v.type!==at&&(!yi(f,v)||_)){const $=ha(v,r,o,l);if(Ar(v,$),d==="out-in")return o.isLeaving=!0,$.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},gd(a);d==="in-out"&&f.type!==at&&($.delayLeave=(T,E,z)=>{const j=ov(o,v);j[String(v.key)]=v,T[mi]=()=>{E(),T[mi]=void 0,delete p.delayedLeave},p.delayedLeave=z})}return a}}},_1=g1;function ov(e,t){const{leavingVNodes:l}=e;let o=l.get(t.type);return o||(o=Object.create(null),l.set(t.type,o)),o}function ha(e,t,l,o){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:r,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:_,onLeaveCancelled:b,onBeforeAppear:$,onAppear:T,onAfterAppear:E,onAppearCancelled:z}=t,j=String(e.key),N=ov(l,e),V=(J,U)=>{J&&Yt(J,o,9,U)},X=(J,U)=>{const ie=U[1];V(J,U),_e(J)?J.every(pe=>pe.length<=1)&&ie():J.length<=1&&ie()},q={mode:i,persisted:a,beforeEnter(J){let U=r;if(!l.isMounted)if(s)U=$||r;else return;J[mi]&&J[mi](!0);const ie=N[j];ie&&yi(e,ie)&&ie.el[mi]&&ie.el[mi](),V(U,[J])},enter(J){let U=d,ie=f,pe=p;if(!l.isMounted)if(s)U=T||d,ie=E||f,pe=z||p;else return;let ne=!1;const be=J[Ya]=Se=>{ne||(ne=!0,Se?V(pe,[J]):V(ie,[J]),q.delayedLeave&&q.delayedLeave(),J[Ya]=void 0)};U?X(U,[J,be]):be()},leave(J,U){const ie=String(e.key);if(J[Ya]&&J[Ya](!0),l.isUnmounting)return U();V(m,[J]);let pe=!1;const ne=J[mi]=be=>{pe||(pe=!0,U(),be?V(b,[J]):V(_,[J]),J[mi]=void 0,N[ie]===e&&delete N[ie])};N[ie]=e,v?X(v,[J,ne]):ne()},clone(J){return ha(J,t,l,o)}};return q}function gd(e){if(Da(e))return e=Bo(e),e.children=null,e}function gp(e){return Da(e)?e.component?e.component.subTree:e.children?e.children[0]:void 0:e}function Ar(e,t){e.shapeFlag&6&&e.component?Ar(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pf(e,t=!1,l){let o=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const r=l==null?a.key:String(l)+String(a.key!=null?a.key:i);a.type===Pe?(a.patchFlag&128&&s++,o=o.concat(pf(a.children,t,r))):(t||a.type!==at)&&o.push(r!=null?Bo(a,{key:r}):a)}if(s>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function Me(e,t){return xe(e)?Xe({name:e.name},t,{setup:e}):e}const Tr=e=>!!e.type.__asyncLoader,Da=e=>e.type.__isKeepAlive,y1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const l=jt(),o=l.ctx;if(!o.renderer)return()=>{const z=t.default&&t.default();return z&&z.length===1?z[0]:z};const s=new Map,i=new Set;let a=null;l.__v_cache=s;const r=l.suspense,{renderer:{p:d,m:f,um:p,o:{createElement:m}}}=o,v=m("div");o.activate=(z,j,N,V,X)=>{const q=z.component;f(z,j,N,0,r),d(q.vnode,z,j,N,q,r,V,z.slotScopeIds,X),dt(()=>{q.isDeactivated=!1,q.a&&Wi(q.a);const J=z.props&&z.props.onVnodeMounted;J&&Wt(J,q.parent,z)},r),Qd(q)},o.deactivate=z=>{const j=z.component;f(z,v,null,1,r),dt(()=>{j.da&&Wi(j.da);const N=z.props&&z.props.onVnodeUnmounted;N&&Wt(N,j.parent,z),j.isDeactivated=!0},r),Qd(j)};function _(z){_d(z),p(z,l,r,!0)}function b(z){s.forEach((j,N)=>{const V=ga(j.type);V&&(!z||!z(V))&&$(N)})}function $(z){const j=s.get(z);!a||!yi(j,a)?_(j):a&&_d(a),s.delete(z),i.delete(z)}Ae(()=>[e.include,e.exclude],([z,j])=>{z&&b(N=>Xr(z,N)),j&&b(N=>!Xr(j,N))},{flush:"post",deep:!0});let T=null;const E=()=>{T!=null&&s.set(T,yd(l.subTree))};return Wo(E),ed(E),Ba(()=>{s.forEach(z=>{const{subTree:j,suspense:N}=l,V=yd(j);if(z.type===V.type&&z.key===V.key){_d(V);const X=V.component.da;X&&dt(X,N);return}_(z)})}),()=>{if(T=null,!t.default)return null;const z=t.default(),j=z[0];if(z.length>1)return te("KeepAlive should contain exactly one component child."),a=null,z;if(!Ai(j)||!(j.shapeFlag&4)&&!(j.shapeFlag&128))return a=null,j;let N=yd(j);const V=N.type,X=ga(Tr(N)?N.type.__asyncResolved||{}:V),{include:q,exclude:J,max:U}=e;if(q&&(!X||!Xr(q,X))||J&&X&&Xr(J,X))return a=N,j;const ie=N.key==null?V:N.key,pe=s.get(ie);return N.el&&(N=Bo(N),j.shapeFlag&128&&(j.ssContent=N)),T=ie,pe?(N.el=pe.el,N.component=pe.component,N.transition&&Ar(N,N.transition),N.shapeFlag|=512,i.delete(ie),i.add(ie)):(i.add(ie),U&&i.size>parseInt(U,10)&&$(i.values().next().value)),N.shapeFlag|=256,a=N,Qh(j.type)?j:N}}},iv=y1;function Xr(e,t){return _e(e)?e.some(l=>Xr(l,t)):Ze(e)?e.split(",").includes(t):U_(e)?e.test(t):!1}function rv(e,t){cv(e,"a",t)}function av(e,t){cv(e,"da",t)}function cv(e,t,l=ot){const o=e.__wdc||(e.__wdc=()=>{let s=l;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Qc(t,o,l),l){let s=l.parent;for(;s&&s.parent;)Da(s.parent.vnode)&&b1(o,t,l,s),s=s.parent}}function b1(e,t,l,o){const s=Qc(t,e,o,!0);td(()=>{Ku(o[t],s)},l)}function _d(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function yd(e){return e.shapeFlag&128?e.ssContent:e}function Qc(e,t,l=ot,o=!1){if(l){const s=l[e]||(l[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(l.isUnmounted)return;Di();const r=Fa(l),d=Yt(t,l,e,a);return r(),Bi(),d});return o?s.unshift(i):s.push(i),i}else{const s=qi(rf[e].replace(/ hook$/,""));te(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ri=e=>(t,l=ot)=>(!sd||e==="sp")&&Qc(e,(...o)=>t(...o),l),w1=ri("bm"),Wo=ri("m"),x1=ri("bu"),ed=ri("u"),Ba=ri("bum"),td=ri("um"),k1=ri("sp"),$1=ri("rtg"),S1=ri("rtc");function j1(e,t=ot){Qc("ec",e,t)}function mr(e,t,l,o){let s;const i=l&&l[o];if(_e(e)||Ze(e)){s=new Array(e.length);for(let a=0,r=e.length;a<r;a++)s[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){Number.isInteger(e)||te(`The v-for range expect an integer value but got ${e}.`),s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i&&i[a])}else if(ze(e))if(e[Symbol.iterator])s=Array.from(e,(a,r)=>t(a,r,void 0,i&&i[r]));else{const a=Object.keys(e);s=new Array(a.length);for(let r=0,d=a.length;r<d;r++){const f=a[r];s[r]=t(e[f],f,r,i&&i[r])}}else s=[];return l&&(l[o]=s),s}function St(e,t,l={},o,s){if(nt.isCE||nt.parent&&Tr(nt.parent)&&nt.parent.isCE)return t!=="default"&&(l.name=t),Z("slot",l,o&&o());let i=e[t];i&&i.length>1&&(te("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),h();const a=i&&dv(i(l)),r=S(Pe,{key:l.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!s&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),i&&i._c&&(i._d=!0),r}function dv(e){return e.some(t=>Ai(t)?!(t.type===at||t.type===Pe&&!dv(t.children)):!0)?e:null}const tu=e=>e?Sv(e)?ld(e)||e.proxy:tu(e.parent):null,or=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>$r(e.props),$attrs:e=>$r(e.attrs),$slots:e=>$r(e.slots),$refs:e=>$r(e.refs),$parent:e=>tu(e.parent),$root:e=>tu(e.root),$emit:e=>e.emit,$options:e=>hf(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Jc(e.update)}),$nextTick:e=>e.n||(e.n=ut.bind(e.proxy)),$watch:e=>v1.bind(e)}),mf=e=>e==="_"||e==="$",bd=(e,t)=>e!==Ye&&!e.__isScriptSetup&&Ie(e,t),uv={get({_:e},t){const{ctx:l,setupState:o,data:s,props:i,accessCache:a,type:r,appContext:d}=e;if(t==="__isVue")return!0;let f;if(t[0]!=="$"){const _=a[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return s[t];case 4:return l[t];case 3:return i[t]}else{if(bd(o,t))return a[t]=1,o[t];if(s!==Ye&&Ie(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&Ie(f,t))return a[t]=3,i[t];if(l!==Ye&&Ie(l,t))return a[t]=4,l[t];nu&&(a[t]=0)}}const p=or[t];let m,v;if(p)return t==="$attrs"?(yt(e,"get",t),jc()):t==="$slots"&&yt(e,"get",t),p(e);if((m=r.__cssModules)&&(m=m[t]))return m;if(l!==Ye&&Ie(l,t))return a[t]=4,l[t];if(v=d.config.globalProperties,Ie(v,t))return v[t];nt&&(!Ze(t)||t.indexOf("__v")!==0)&&(s!==Ye&&mf(t[0])&&Ie(s,t)?te(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===nt&&te(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,l){const{data:o,setupState:s,ctx:i}=e;return bd(s,t)?(s[t]=l,!0):s.__isScriptSetup&&Ie(s,t)?(te(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Ye&&Ie(o,t)?(o[t]=l,!0):Ie(e.props,t)?(te(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(te(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:l}):i[t]=l,!0)},has({_:{data:e,setupState:t,accessCache:l,ctx:o,appContext:s,propsOptions:i}},a){let r;return!!l[a]||e!==Ye&&Ie(e,a)||bd(t,a)||(r=i[0])&&Ie(r,a)||Ie(o,a)||Ie(or,a)||Ie(s.config.globalProperties,a)},defineProperty(e,t,l){return l.get!=null?e._.accessCache[t]=0:Ie(l,"value")&&this.set(e,t,l.value,null),Reflect.defineProperty(e,t,l)}};uv.ownKeys=e=>(te("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function P1(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(or).forEach(l=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,get:()=>or[l](e),set:gt})}),t}function T1(e){const{ctx:t,propsOptions:[l]}=e;l&&Object.keys(l).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:gt})})}function C1(e){const{ctx:t,setupState:l}=e;Object.keys($e(l)).forEach(o=>{if(!l.__isScriptSetup){if(mf(o[0])){te(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l[o],set:gt})}})}function E1(){return A1().slots}function A1(){const e=jt();return e||te("useContext() called without active instance."),e.setupContext||(e.setupContext=Pv(e))}function _p(e){return _e(e)?e.reduce((t,l)=>(t[l]=null,t),{}):e}function O1(){const e=Object.create(null);return(t,l)=>{e[l]?te(`${t} property "${l}" is already defined in ${e[l]}.`):e[l]=t}}let nu=!0;function D1(e){const t=hf(e),l=e.proxy,o=e.ctx;nu=!1,t.beforeCreate&&yp(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:r,provide:d,inject:f,created:p,beforeMount:m,mounted:v,beforeUpdate:_,updated:b,activated:$,deactivated:T,beforeDestroy:E,beforeUnmount:z,destroyed:j,unmounted:N,render:V,renderTracked:X,renderTriggered:q,errorCaptured:J,serverPrefetch:U,expose:ie,inheritAttrs:pe,components:ne,directives:be,filters:Se}=t,Ge=O1();{const[ue]=e.propsOptions;if(ue)for(const ve in ue)Ge("Props",ve)}if(f&&B1(f,o,Ge),a)for(const ue in a){const ve=a[ue];xe(ve)?(Object.defineProperty(o,ue,{value:ve.bind(l),configurable:!0,enumerable:!0,writable:!0}),Ge("Methods",ue)):te(`Method "${ue}" has type "${typeof ve}" in the component definition. Did you reference the function correctly?`)}if(s){xe(s)||te("The data option must be a function. Plain object usage is no longer supported.");const ue=s.call(l,l);if(Yu(ue)&&te("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ze(ue))te("data() should return an object.");else{e.data=g(ue);for(const ve in ue)Ge("Data",ve),mf(ve[0])||Object.defineProperty(o,ve,{configurable:!0,enumerable:!0,get:()=>ue[ve],set:gt})}}if(nu=!0,i)for(const ue in i){const ve=i[ue],Fe=xe(ve)?ve.bind(l,l):xe(ve.get)?ve.get.bind(l,l):gt;Fe===gt&&te(`Computed property "${ue}" has no getter.`);const We=!xe(ve)&&xe(ve.set)?ve.set.bind(l):()=>{te(`Write operation failed: computed property "${ue}" is readonly.`)},qt=c({get:Fe,set:We});Object.defineProperty(o,ue,{enumerable:!0,configurable:!0,get:()=>qt.value,set:ft=>qt.value=ft}),Ge("Computed",ue)}if(r)for(const ue in r)fv(r[ue],o,l,ue);if(d){const ue=xe(d)?d.call(l):d;Reflect.ownKeys(ue).forEach(ve=>{A(ve,ue[ve])})}p&&yp(p,e,"c");function Te(ue,ve){_e(ve)?ve.forEach(Fe=>ue(Fe.bind(l))):ve&&ue(ve.bind(l))}if(Te(w1,m),Te(Wo,v),Te(x1,_),Te(ed,b),Te(rv,$),Te(av,T),Te(j1,J),Te(S1,X),Te($1,q),Te(Ba,z),Te(td,N),Te(k1,U),_e(ie))if(ie.length){const ue=e.exposed||(e.exposed={});ie.forEach(ve=>{Object.defineProperty(ue,ve,{get:()=>l[ve],set:Fe=>l[ve]=Fe})})}else e.exposed||(e.exposed={});V&&e.render===gt&&(e.render=V),pe!=null&&(e.inheritAttrs=pe),ne&&(e.components=ne),be&&(e.directives=be)}function B1(e,t,l=gt){_e(e)&&(e=su(e));for(const o in e){const s=e[o];let i;ze(s)?"default"in s?i=u(s.from||o,s.default,!0):i=u(s.from||o):i=u(s),Ne(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i,l("Inject",o)}}function yp(e,t,l){Yt(_e(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,l)}function fv(e,t,l,o){const s=o.includes(".")?ev(l,o):()=>l[o];if(Ze(e)){const i=t[e];xe(i)?Ae(s,i):te(`Invalid watch handler specified by key "${e}"`,i)}else if(xe(e))Ae(s,e.bind(l));else if(ze(e))if(_e(e))e.forEach(i=>fv(i,t,l,o));else{const i=xe(e.handler)?e.handler.bind(l):t[e.handler];xe(i)?Ae(s,i,e):te(`Invalid watch handler specified by key "${e.handler}"`,i)}else te(`Invalid watch option: "${o}"`,e)}function hf(e){const t=e.type,{mixins:l,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,r=i.get(t);let d;return r?d=r:!s.length&&!l&&!o?d=t:(d={},s.length&&s.forEach(f=>Tc(d,f,a,!0)),Tc(d,t,a)),ze(t)&&i.set(t,d),d}function Tc(e,t,l,o=!1){const{mixins:s,extends:i}=t;i&&Tc(e,i,l,!0),s&&s.forEach(a=>Tc(e,a,l,!0));for(const a in t)if(o&&a==="expose")te('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const r=M1[a]||l&&l[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const M1={data:bp,props:wp,emits:wp,methods:Qr,computed:Qr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Qr,directives:Qr,watch:I1,provide:bp,inject:F1};function bp(e,t){return t?e?function(){return Xe(xe(e)?e.call(this,this):e,xe(t)?t.call(this,this):t)}:t:e}function F1(e,t){return Qr(su(e),su(t))}function su(e){if(_e(e)){const t={};for(let l=0;l<e.length;l++)t[e[l]]=e[l];return t}return e}function wt(e,t){return e?[...new Set([].concat(e,t))]:t}function Qr(e,t){return e?Xe(Object.create(null),e,t):t}function wp(e,t){return e?_e(e)&&_e(t)?[...new Set([...e,...t])]:Xe(Object.create(null),_p(e),_p(t??{})):t}function I1(e,t){if(!e)return t;if(!t)return e;const l=Xe(Object.create(null),e);for(const o in t)l[o]=wt(e[o],t[o]);return l}function pv(){return{app:null,config:{isNativeTag:dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L1=0;function R1(e,t){return function(o,s=null){xe(o)||(o=Xe({},o)),s!=null&&!ze(s)&&(te("root props passed to app.mount() must be an object."),s=null);const i=pv(),a=new WeakSet;let r=!1;const d=i.app={_uid:L1++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:uu,get config(){return i.config},set config(f){te("app.config cannot be replaced. Modify individual options instead.")},use(f,...p){return a.has(f)?te("Plugin has already been applied to target app."):f&&xe(f.install)?(a.add(f),f.install(d,...p)):xe(f)?(a.add(f),f(d,...p)):te('A plugin must either be a function or an object with an "install" function.'),d},mixin(f){return i.mixins.includes(f)?te("Mixin has already been applied to target app"+(f.name?`: ${f.name}`:"")):i.mixins.push(f),d},component(f,p){return cu(f,i.config),p?(i.components[f]&&te(`Component "${f}" has already been registered in target app.`),i.components[f]=p,d):i.components[f]},directive(f,p){return tv(f),p?(i.directives[f]&&te(`Directive "${f}" has already been registered in target app.`),i.directives[f]=p,d):i.directives[f]},mount(f,p,m){if(r)te("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{f.__vue_app__&&te("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const v=Z(o,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),i.reload=()=>{e(Bo(v),f,m)},p&&t?t(v,f):e(v,f,m),r=!0,d._container=f,f.__vue_app__=d,d._instance=v.component,e1(d,uu),ld(v.component)||v.component.proxy}},unmount(){r?(e(null,d._container),d._instance=null,t1(d),delete d._container.__vue_app__):te("Cannot unmount an app that is not mounted.")},provide(f,p){return f in i.provides&&te(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`),i.provides[f]=p,d},runWithContext(f){Cc=d;try{return f()}finally{Cc=null}}};return d}}let Cc=null;function A(e,t){if(!ot)te("provide() can only be used inside setup().");else{let l=ot.provides;const o=ot.parent&&ot.parent.provides;o===l&&(l=ot.provides=Object.create(o)),l[e]=t}}function u(e,t,l=!1){const o=ot||nt;if(o||Cc){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Cc._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return l&&xe(t)?t.call(o&&o.proxy):t;te(`injection "${String(e)}" not found.`)}else te("inject() can only be used inside setup() or functional components.")}function H1(e,t,l,o=!1){const s={},i={};bc(i,nd,1),e.propsDefaults=Object.create(null),mv(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);vv(t||{},s,e),l?e.props=o?s:Bh(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function z1(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function N1(e,t,l,o){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,r=$e(s),[d]=e.propsOptions;let f=!1;if(!z1(e)&&(o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let v=p[m];if(Zc(e.emitsOptions,v))continue;const _=t[v];if(d)if(Ie(i,v))_!==i[v]&&(i[v]=_,f=!0);else{const b=No(v);s[b]=lu(d,r,b,_,e,!1)}else _!==i[v]&&(i[v]=_,f=!0)}}}else{mv(e,t,s,i)&&(f=!0);let p;for(const m in r)(!t||!Ie(t,m)&&((p=li(m))===m||!Ie(t,p)))&&(d?l&&(l[m]!==void 0||l[p]!==void 0)&&(s[m]=lu(d,r,m,void 0,e,!0)):delete s[m]);if(i!==r)for(const m in i)(!t||!Ie(t,m))&&(delete i[m],f=!0)}f&&zo(e,"set","$attrs"),vv(t||{},s,e)}function mv(e,t,l,o){const[s,i]=e.propsOptions;let a=!1,r;if(t)for(let d in t){if(ic(d))continue;const f=t[d];let p;s&&Ie(s,p=No(d))?!i||!i.includes(p)?l[p]=f:(r||(r={}))[p]=f:Zc(e.emitsOptions,d)||(!(d in o)||f!==o[d])&&(o[d]=f,a=!0)}if(i){const d=$e(l),f=r||Ye;for(let p=0;p<i.length;p++){const m=i[p];l[m]=lu(s,d,m,f[m],e,!Ie(f,m))}}return a}function lu(e,t,l,o,s,i){const a=e[l];if(a!=null){const r=Ie(a,"default");if(r&&o===void 0){const d=a.default;if(a.type!==Function&&!a.skipFactory&&xe(d)){const{propsDefaults:f}=s;if(l in f)o=f[l];else{const p=Fa(s);o=f[l]=d.call(null,t),p()}}else o=d}a[0]&&(i&&!r?o=!1:a[1]&&(o===""||o===li(l))&&(o=!0))}return o}function hv(e,t,l=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const i=e.props,a={},r=[];let d=!1;if(!xe(e)){const p=m=>{d=!0;const[v,_]=hv(m,t,!0);Xe(a,v),_&&r.push(..._)};!l&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!d)return ze(e)&&o.set(e,jr),jr;if(_e(i))for(let p=0;p<i.length;p++){Ze(i[p])||te("props must be strings when using array syntax.",i[p]);const m=No(i[p]);xp(m)&&(a[m]=Ye)}else if(i){ze(i)||te("invalid props options",i);for(const p in i){const m=No(p);if(xp(m)){const v=i[p],_=a[m]=_e(v)||xe(v)?{type:v}:Xe({},v);if(_){const b=$p(Boolean,_.type),$=$p(String,_.type);_[0]=b>-1,_[1]=$<0||b<$,(b>-1||Ie(_,"default"))&&r.push(m)}}}}const f=[a,r];return ze(e)&&o.set(e,f),f}function xp(e){return e[0]!=="$"?!0:(te(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ou(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function kp(e,t){return ou(e)===ou(t)}function $p(e,t){return _e(t)?t.findIndex(l=>kp(l,e)):xe(t)&&kp(t,e)?0:-1}function vv(e,t,l){const o=$e(t),s=l.propsOptions[0];for(const i in s){let a=s[i];a!=null&&q1(i,o[i],a,$r(o),!Ie(e,i)&&!Ie(e,li(i)))}}function q1(e,t,l,o,s){const{type:i,required:a,validator:r,skipCheck:d}=l;if(a&&s){te('Missing required prop: "'+e+'"');return}if(!(t==null&&!a)){if(i!=null&&i!==!0&&!d){let f=!1;const p=_e(i)?i:[i],m=[];for(let v=0;v<p.length&&!f;v++){const{valid:_,expectedType:b}=G1(t,p[v]);m.push(b||""),f=_}if(!f){te(W1(e,t,m));return}}r&&!r(t,o)&&te('Invalid prop: custom validator check failed for prop "'+e+'".')}}const V1=ii("String,Number,Boolean,Function,Symbol,BigInt");function G1(e,t){let l;const o=ou(t);if(V1(o)){const s=typeof e;l=s===o.toLowerCase(),!l&&s==="object"&&(l=e instanceof t)}else o==="Object"?l=ze(e):o==="Array"?l=_e(e):o==="null"?l=e===null:l=e instanceof t;return{valid:l,expectedType:o}}function W1(e,t,l){if(l.length===0)return`Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;let o=`Invalid prop: type check failed for prop "${e}". Expected ${l.map(ar).join(" | ")}`;const s=l[0],i=Ju(t),a=Sp(t,s),r=Sp(t,i);return l.length===1&&jp(s)&&!U1(s,i)&&(o+=` with value ${a}`),o+=`, got ${i} `,jp(i)&&(o+=`with value ${r}.`),o}function Sp(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function jp(e){return["string","number","boolean"].some(l=>e.toLowerCase()===l)}function U1(...e){return e.some(t=>t.toLowerCase()==="boolean")}const gv=e=>e[0]==="_"||e==="$stable",vf=e=>_e(e)?e.map(Ao):[Ao(e)],K1=(e,t,l)=>{if(t._n)return t;const o=C((...s)=>(ot&&(!l||l.root===ot.root)&&te(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vf(t(...s))),l);return o._c=!1,o},_v=(e,t,l)=>{const o=e._ctx;for(const s in e){if(gv(s))continue;const i=e[s];if(xe(i))t[s]=K1(s,i,o);else if(i!=null){te(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const a=vf(i);t[s]=()=>a}}},yv=(e,t)=>{Da(e.vnode)||te("Non-function value encountered for default slot. Prefer function slots for better performance.");const l=vf(t);e.slots.default=()=>l},Y1=(e,t)=>{if(e.vnode.shapeFlag&32){const l=t._;l?(e.slots=$e(t),bc(t,"_",l)):_v(t,e.slots={})}else e.slots={},t&&yv(e,t);bc(e.slots,nd,1)},J1=(e,t,l)=>{const{vnode:o,slots:s}=e;let i=!0,a=Ye;if(o.shapeFlag&32){const r=t._;r?xi?(Xe(s,t),zo(e,"set","$slots")):l&&r===1?i=!1:(Xe(s,t),!l&&r===1&&delete s._):(i=!t.$stable,_v(t,s)),a=t}else t&&(yv(e,t),a={default:1});if(i)for(const r in s)!gv(r)&&a[r]==null&&delete s[r]};function iu(e,t,l,o,s=!1){if(_e(e)){e.forEach((v,_)=>iu(v,t&&(_e(t)?t[_]:t),l,o,s));return}if(Tr(o)&&!s)return;const i=o.shapeFlag&4?ld(o.component)||o.component.proxy:o.el,a=s?null:i,{i:r,r:d}=e;if(!r){te("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const f=t&&t.r,p=r.refs===Ye?r.refs={}:r.refs,m=r.setupState;if(f!=null&&f!==d&&(Ze(f)?(p[f]=null,Ie(m,f)&&(m[f]=null)):Ne(f)&&(f.value=null)),xe(d))ti(d,r,12,[a,p]);else{const v=Ze(d),_=Ne(d),b=e.f;if(v||_){const $=()=>{if(b){const T=v?Ie(m,d)?m[d]:p[d]:d.value;s?_e(T)&&Ku(T,i):_e(T)?T.includes(i)||T.push(i):v?(p[d]=[i],Ie(m,d)&&(m[d]=p[d])):(d.value=[i],e.k&&(p[e.k]=d.value))}else v?(p[d]=a,Ie(m,d)&&(m[d]=a)):_?(d.value=a,e.k&&(p[e.k]=a)):te("Invalid template ref type:",d,`(${typeof d})`)};s||b?$():($.id=-1,dt($,l))}else te("Invalid template ref type:",d,`(${typeof d})`)}}let Hr,_i;function Ko(e,t){e.appContext.config.performance&&Ec()&&_i.mark(`vue-${t}-${e.uid}`),l1(e,t,Ec()?_i.now():Date.now())}function Yo(e,t){if(e.appContext.config.performance&&Ec()){const l=`vue-${t}-${e.uid}`,o=l+":end";_i.mark(o),_i.measure(`<${od(e,e.type)}> ${t}`,l,o),_i.clearMarks(l),_i.clearMarks(o)}o1(e,t,Ec()?_i.now():Date.now())}function Ec(){return Hr!==void 0||(typeof window<"u"&&window.performance?(Hr=!0,_i=window.performance):Hr=!1),Hr}function Z1(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const dt=p1;function X1(e){return Q1(e)}function Q1(e,t){Z1();const l=Xu();l.__VUE__=!0,Wh(l.__VUE_DEVTOOLS_GLOBAL_HOOK__,l);const{insert:o,remove:s,patchProp:i,createElement:a,createText:r,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:v,setScopeId:_=gt,insertStaticContent:b}=e,$=(w,P,G,K=null,Q=null,oe=null,ae=void 0,se=null,re=xi?!1:!!P.dynamicChildren)=>{if(w===P)return;w&&!yi(w,P)&&(K=de(w),Tt(w,Q,oe,!0),w=null),P.patchFlag===-2&&(re=!1,P.dynamicChildren=null);const{type:ee,ref:fe,shapeFlag:ye}=P;switch(ee){case Ma:T(w,P,G,K);break;case at:E(w,P,G,K);break;case cc:w==null?z(P,G,K,ae):j(w,P,G,ae);break;case Pe:be(w,P,G,K,Q,oe,ae,se,re);break;default:ye&1?X(w,P,G,K,Q,oe,ae,se,re):ye&6?Se(w,P,G,K,Q,oe,ae,se,re):ye&64||ye&128?ee.process(w,P,G,K,Q,oe,ae,se,re,Ee):te("Invalid VNode type:",ee,`(${typeof ee})`)}fe!=null&&Q&&iu(fe,w&&w.ref,oe,P||w,!P)},T=(w,P,G,K)=>{if(w==null)o(P.el=r(P.children),G,K);else{const Q=P.el=w.el;P.children!==w.children&&f(Q,P.children)}},E=(w,P,G,K)=>{w==null?o(P.el=d(P.children||""),G,K):P.el=w.el},z=(w,P,G,K)=>{[w.el,w.anchor]=b(w.children,P,G,K,w.el,w.anchor)},j=(w,P,G,K)=>{if(P.children!==w.children){const Q=v(w.anchor);V(w),[P.el,P.anchor]=b(P.children,G,Q,K)}else P.el=w.el,P.anchor=w.anchor},N=({el:w,anchor:P},G,K)=>{let Q;for(;w&&w!==P;)Q=v(w),o(w,G,K),w=Q;o(P,G,K)},V=({el:w,anchor:P})=>{let G;for(;w&&w!==P;)G=v(w),s(w),w=G;s(P)},X=(w,P,G,K,Q,oe,ae,se,re)=>{P.type==="svg"?ae="svg":P.type==="math"&&(ae="mathml"),w==null?q(P,G,K,Q,oe,ae,se,re):ie(w,P,Q,oe,ae,se,re)},q=(w,P,G,K,Q,oe,ae,se)=>{let re,ee;const{props:fe,shapeFlag:ye,transition:ge,dirs:je}=w;if(re=w.el=a(w.type,oe,fe&&fe.is,fe),ye&8?p(re,w.children):ye&16&&U(w.children,re,null,K,Q,wd(w,oe),ae,se),je&&Li(w,null,K,"created"),J(re,w,w.scopeId,ae,K),fe){for(const Ke in fe)Ke!=="value"&&!ic(Ke)&&i(re,Ke,null,fe[Ke],oe,w.children,K,Q,W);"value"in fe&&i(re,"value",null,fe.value,oe),(ee=fe.onVnodeBeforeMount)&&Wt(ee,K,w)}Object.defineProperty(re,"__vnode",{value:w,enumerable:!1}),Object.defineProperty(re,"__vueParentComponent",{value:K,enumerable:!1}),je&&Li(w,null,K,"beforeMount");const Le=ey(Q,ge);Le&&ge.beforeEnter(re),o(re,P,G),((ee=fe&&fe.onVnodeMounted)||Le||je)&&dt(()=>{ee&&Wt(ee,K,w),Le&&ge.enter(re),je&&Li(w,null,K,"mounted")},Q)},J=(w,P,G,K,Q)=>{if(G&&_(w,G),K)for(let oe=0;oe<K.length;oe++)_(w,K[oe]);if(Q){let oe=Q.subTree;if(oe.patchFlag>0&&oe.patchFlag&2048&&(oe=uf(oe.children)||oe),P===oe){const ae=Q.vnode;J(w,ae,ae.scopeId,ae.slotScopeIds,Q.parent)}}},U=(w,P,G,K,Q,oe,ae,se,re=0)=>{for(let ee=re;ee<w.length;ee++){const fe=w[ee]=se?hi(w[ee]):Ao(w[ee]);$(null,fe,P,G,K,Q,oe,ae,se)}},ie=(w,P,G,K,Q,oe,ae)=>{const se=P.el=w.el;let{patchFlag:re,dynamicChildren:ee,dirs:fe}=P;re|=w.patchFlag&16;const ye=w.props||Ye,ge=P.props||Ye;let je;if(G&&Ri(G,!1),(je=ge.onVnodeBeforeUpdate)&&Wt(je,G,P,w),fe&&Li(P,w,G,"beforeUpdate"),G&&Ri(G,!0),xi&&(re=0,ae=!1,ee=null),ee?(pe(w.dynamicChildren,ee,se,G,K,wd(P,Q),oe),Ac(w,P)):ae||Fe(w,P,se,null,G,K,wd(P,Q),oe,!1),re>0){if(re&16)ne(se,P,ye,ge,G,K,Q);else if(re&2&&ye.class!==ge.class&&i(se,"class",null,ge.class,Q),re&4&&i(se,"style",ye.style,ge.style,Q),re&8){const Le=P.dynamicProps;for(let Ke=0;Ke<Le.length;Ke++){const Qe=Le[Ke],it=ye[Qe],Xt=ge[Qe];(Xt!==it||Qe==="value")&&i(se,Qe,it,Xt,Q,w.children,G,K,W)}}re&1&&w.children!==P.children&&p(se,P.children)}else!ae&&ee==null&&ne(se,P,ye,ge,G,K,Q);((je=ge.onVnodeUpdated)||fe)&&dt(()=>{je&&Wt(je,G,P,w),fe&&Li(P,w,G,"updated")},K)},pe=(w,P,G,K,Q,oe,ae)=>{for(let se=0;se<P.length;se++){const re=w[se],ee=P[se],fe=re.el&&(re.type===Pe||!yi(re,ee)||re.shapeFlag&70)?m(re.el):G;$(re,ee,fe,null,K,Q,oe,ae,!0)}},ne=(w,P,G,K,Q,oe,ae)=>{if(G!==K){if(G!==Ye)for(const se in G)!ic(se)&&!(se in K)&&i(w,se,G[se],null,ae,P.children,Q,oe,W);for(const se in K){if(ic(se))continue;const re=K[se],ee=G[se];re!==ee&&se!=="value"&&i(w,se,ee,re,ae,P.children,Q,oe,W)}"value"in K&&i(w,"value",G.value,K.value,ae)}},be=(w,P,G,K,Q,oe,ae,se,re)=>{const ee=P.el=w?w.el:r(""),fe=P.anchor=w?w.anchor:r("");let{patchFlag:ye,dynamicChildren:ge,slotScopeIds:je}=P;(xi||ye&2048)&&(ye=0,re=!1,ge=null),je&&(se=se?se.concat(je):je),w==null?(o(ee,G,K),o(fe,G,K),U(P.children||[],G,fe,Q,oe,ae,se,re)):ye>0&&ye&64&&ge&&w.dynamicChildren?(pe(w.dynamicChildren,ge,G,Q,oe,ae,se),Ac(w,P)):Fe(w,P,G,fe,Q,oe,ae,se,re)},Se=(w,P,G,K,Q,oe,ae,se,re)=>{P.slotScopeIds=se,w==null?P.shapeFlag&512?Q.ctx.activate(P,G,K,ae,re):Ge(P,G,K,Q,oe,ae,re):Te(w,P,re)},Ge=(w,P,G,K,Q,oe,ae)=>{const se=w.component=uy(w,K,Q);if(se.type.__hmrId&&J0(se),rc(w),Ko(se,"mount"),Da(w)&&(se.ctx.renderer=Ee),Ko(se,"init"),py(se),Yo(se,"init"),se.asyncDep){if(Q&&Q.registerDep(se,ue),!w.el){const re=se.subTree=Z(at);E(null,re,P,G)}}else ue(se,w,P,G,Q,oe,ae);ac(),Yo(se,"mount")},Te=(w,P,G)=>{const K=P.component=w.component;if(d1(w,P,G))if(K.asyncDep&&!K.asyncResolved){rc(P),ve(K,P,G),ac();return}else K.next=P,K0(K.update),K.effect.dirty=!0,K.update();else P.el=w.el,K.vnode=P},ue=(w,P,G,K,Q,oe,ae)=>{const se=()=>{if(w.isMounted){let{next:fe,bu:ye,u:ge,parent:je,vnode:Le}=w;{const yr=bv(w);if(yr){fe&&(fe.el=Le.el,ve(w,fe,ae)),yr.asyncDep.then(()=>{w.isUnmounted||se()});return}}let Ke=fe,Qe;rc(fe||w.vnode),Ri(w,!1),fe?(fe.el=Le.el,ve(w,fe,ae)):fe=Le,ye&&Wi(ye),(Qe=fe.props&&fe.props.onVnodeBeforeUpdate)&&Wt(Qe,je,fe,Le),Ri(w,!0),Ko(w,"render");const it=vd(w);Yo(w,"render");const Xt=w.subTree;w.subTree=it,Ko(w,"patch"),$(Xt,it,m(Xt.el),de(Xt),w,Q,oe),Yo(w,"patch"),fe.el=it.el,Ke===null&&u1(w,it.el),ge&&dt(ge,Q),(Qe=fe.props&&fe.props.onVnodeUpdated)&&dt(()=>Wt(Qe,je,fe,Le),Q),Uh(w),ac()}else{let fe;const{el:ye,props:ge}=P,{bm:je,m:Le,parent:Ke}=w,Qe=Tr(P);if(Ri(w,!1),je&&Wi(je),!Qe&&(fe=ge&&ge.onVnodeBeforeMount)&&Wt(fe,Ke,P),Ri(w,!0),ye&&Be){const it=()=>{Ko(w,"render"),w.subTree=vd(w),Yo(w,"render"),Ko(w,"hydrate"),Be(ye,w.subTree,w,Q,null),Yo(w,"hydrate")};Qe?P.type.__asyncLoader().then(()=>!w.isUnmounted&&it()):it()}else{Ko(w,"render");const it=w.subTree=vd(w);Yo(w,"render"),Ko(w,"patch"),$(null,it,G,K,w,Q,oe),Yo(w,"patch"),P.el=it.el}if(Le&&dt(Le,Q),!Qe&&(fe=ge&&ge.onVnodeMounted)){const it=P;dt(()=>Wt(fe,Ke,it),Q)}(P.shapeFlag&256||Ke&&Tr(Ke.vnode)&&Ke.vnode.shapeFlag&256)&&w.a&&dt(w.a,Q),w.isMounted=!0,Qd(w),P=G=K=null}},re=w.effect=new Qu(se,gt,()=>Jc(ee),w.scope),ee=w.update=()=>{re.dirty&&re.run()};ee.id=w.uid,Ri(w,!0),re.onTrack=w.rtc?fe=>Wi(w.rtc,fe):void 0,re.onTrigger=w.rtg?fe=>Wi(w.rtg,fe):void 0,ee.ownerInstance=w,ee()},ve=(w,P,G)=>{P.component=w;const K=w.vnode.props;w.vnode=P,w.next=null,N1(w,P.props,K,G),J1(w,P.children,G),Di(),fp(w),Bi()},Fe=(w,P,G,K,Q,oe,ae,se,re=!1)=>{const ee=w&&w.children,fe=w?w.shapeFlag:0,ye=P.children,{patchFlag:ge,shapeFlag:je}=P;if(ge>0){if(ge&128){qt(ee,ye,G,K,Q,oe,ae,se,re);return}else if(ge&256){We(ee,ye,G,K,Q,oe,ae,se,re);return}}je&8?(fe&16&&W(ee,Q,oe),ye!==ee&&p(G,ye)):fe&16?je&16?qt(ee,ye,G,K,Q,oe,ae,se,re):W(ee,Q,oe,!0):(fe&8&&p(G,""),je&16&&U(ye,G,K,Q,oe,ae,se,re))},We=(w,P,G,K,Q,oe,ae,se,re)=>{w=w||jr,P=P||jr;const ee=w.length,fe=P.length,ye=Math.min(ee,fe);let ge;for(ge=0;ge<ye;ge++){const je=P[ge]=re?hi(P[ge]):Ao(P[ge]);$(w[ge],je,G,null,Q,oe,ae,se,re)}ee>fe?W(w,Q,oe,!0,!1,ye):U(P,G,K,Q,oe,ae,se,re,ye)},qt=(w,P,G,K,Q,oe,ae,se,re)=>{let ee=0;const fe=P.length;let ye=w.length-1,ge=fe-1;for(;ee<=ye&&ee<=ge;){const je=w[ee],Le=P[ee]=re?hi(P[ee]):Ao(P[ee]);if(yi(je,Le))$(je,Le,G,null,Q,oe,ae,se,re);else break;ee++}for(;ee<=ye&&ee<=ge;){const je=w[ye],Le=P[ge]=re?hi(P[ge]):Ao(P[ge]);if(yi(je,Le))$(je,Le,G,null,Q,oe,ae,se,re);else break;ye--,ge--}if(ee>ye){if(ee<=ge){const je=ge+1,Le=je<fe?P[je].el:K;for(;ee<=ge;)$(null,P[ee]=re?hi(P[ee]):Ao(P[ee]),G,Le,Q,oe,ae,se,re),ee++}}else if(ee>ge)for(;ee<=ye;)Tt(w[ee],Q,oe,!0),ee++;else{const je=ee,Le=ee,Ke=new Map;for(ee=Le;ee<=ge;ee++){const bt=P[ee]=re?hi(P[ee]):Ao(P[ee]);bt.key!=null&&(Ke.has(bt.key)&&te("Duplicate keys found during update:",JSON.stringify(bt.key),"Make sure keys are unique."),Ke.set(bt.key,ee))}let Qe,it=0;const Xt=ge-Le+1;let yr=!1,tp=0;const Rr=new Array(Xt);for(ee=0;ee<Xt;ee++)Rr[ee]=0;for(ee=je;ee<=ye;ee++){const bt=w[ee];if(it>=Xt){Tt(bt,Q,oe,!0);continue}let Fo;if(bt.key!=null)Fo=Ke.get(bt.key);else for(Qe=Le;Qe<=ge;Qe++)if(Rr[Qe-Le]===0&&yi(bt,P[Qe])){Fo=Qe;break}Fo===void 0?Tt(bt,Q,oe,!0):(Rr[Fo-Le]=ee+1,Fo>=tp?tp=Fo:yr=!0,$(bt,P[Fo],G,null,Q,oe,ae,se,re),it++)}const np=yr?ty(Rr):jr;for(Qe=np.length-1,ee=Xt-1;ee>=0;ee--){const bt=Le+ee,Fo=P[bt],sp=bt+1<fe?P[bt+1].el:K;Rr[ee]===0?$(null,Fo,G,sp,Q,oe,ae,se,re):yr&&(Qe<0||ee!==np[Qe]?ft(Fo,G,sp,2):Qe--)}}},ft=(w,P,G,K,Q=null)=>{const{el:oe,type:ae,transition:se,children:re,shapeFlag:ee}=w;if(ee&6){ft(w.component.subTree,P,G,K);return}if(ee&128){w.suspense.move(P,G,K);return}if(ee&64){ae.move(w,P,G,Ee);return}if(ae===Pe){o(oe,P,G);for(let ye=0;ye<re.length;ye++)ft(re[ye],P,G,K);o(w.anchor,P,G);return}if(ae===cc){N(w,P,G);return}if(K!==2&&ee&1&&se)if(K===0)se.beforeEnter(oe),o(oe,P,G),dt(()=>se.enter(oe),Q);else{const{leave:ye,delayLeave:ge,afterLeave:je}=se,Le=()=>o(oe,P,G),Ke=()=>{ye(oe,()=>{Le(),je&&je()})};ge?ge(oe,Le,Ke):Ke()}else o(oe,P,G)},Tt=(w,P,G,K=!1,Q=!1)=>{const{type:oe,props:ae,ref:se,children:re,dynamicChildren:ee,shapeFlag:fe,patchFlag:ye,dirs:ge}=w;if(se!=null&&iu(se,null,G,w,!0),fe&256){P.ctx.deactivate(w);return}const je=fe&1&&ge,Le=!Tr(w);let Ke;if(Le&&(Ke=ae&&ae.onVnodeBeforeUnmount)&&Wt(Ke,P,w),fe&6)Vt(w.component,G,K);else{if(fe&128){w.suspense.unmount(G,K);return}je&&Li(w,null,P,"beforeUnmount"),fe&64?w.type.remove(w,P,G,Q,Ee,K):ee&&(oe!==Pe||ye>0&&ye&64)?W(ee,P,G,!1,!0):(oe===Pe&&ye&384||!Q&&fe&16)&&W(re,P,G),K&&Mo(w)}(Le&&(Ke=ae&&ae.onVnodeUnmounted)||je)&&dt(()=>{Ke&&Wt(Ke,P,w),je&&Li(w,null,P,"unmounted")},G)},Mo=w=>{const{type:P,el:G,anchor:K,transition:Q}=w;if(P===Pe){w.patchFlag>0&&w.patchFlag&2048&&Q&&!Q.persisted?w.children.forEach(ae=>{ae.type===at?s(ae.el):Mo(ae)}):Ii(G,K);return}if(P===cc){V(w);return}const oe=()=>{s(G),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(w.shapeFlag&1&&Q&&!Q.persisted){const{leave:ae,delayLeave:se}=Q,re=()=>ae(G,oe);se?se(w.el,oe,re):re()}else oe()},Ii=(w,P)=>{let G;for(;w!==P;)G=v(w),s(w),w=G;s(P)},Vt=(w,P,G)=>{w.type.__hmrId&&Z0(w);const{bum:K,scope:Q,update:oe,subTree:ae,um:se}=w;K&&Wi(K),Q.stop(),oe&&(oe.active=!1,Tt(ae,w,P,G)),se&&dt(se,P),dt(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve()),s1(w)},W=(w,P,G,K=!1,Q=!1,oe=0)=>{for(let ae=oe;ae<w.length;ae++)Tt(w[ae],P,G,K,Q)},de=w=>w.shapeFlag&6?de(w.component.subTree):w.shapeFlag&128?w.suspense.next():v(w.anchor||w.el);let ce=!1;const me=(w,P,G)=>{w==null?P._vnode&&Tt(P._vnode,null,null,!0):$(P._vnode||null,w,P,null,null,null,G),ce||(ce=!0,fp(),qh(),ce=!1),P._vnode=w},Ee={p:$,um:Tt,m:ft,r:Mo,mt:Ge,mc:U,pc:Fe,pbc:pe,n:de,o:e};let Ue,Be;return t&&([Ue,Be]=t(Ee)),{render:me,hydrate:Ue,createApp:R1(me,Ue)}}function wd({type:e,props:t},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:l}function Ri({effect:e,update:t},l){e.allowRecurse=t.allowRecurse=l}function ey(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ac(e,t,l=!1){const o=e.children,s=t.children;if(_e(o)&&_e(s))for(let i=0;i<o.length;i++){const a=o[i];let r=s[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[i]=hi(s[i]),r.el=a.el),l||Ac(a,r)),r.type===Ma&&(r.el=a.el),r.type===at&&!r.el&&(r.el=a.el)}}function ty(e){const t=e.slice(),l=[0];let o,s,i,a,r;const d=e.length;for(o=0;o<d;o++){const f=e[o];if(f!==0){if(s=l[l.length-1],e[s]<f){t[o]=s,l.push(o);continue}for(i=0,a=l.length-1;i<a;)r=i+a>>1,e[l[r]]<f?i=r+1:a=r;f<e[l[i]]&&(i>0&&(t[o]=l[i-1]),l[i]=o)}}for(i=l.length,a=l[i-1];i-- >0;)l[i]=a,a=t[a];return l}function bv(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bv(t)}const ny=e=>e.__isTeleport,Cr=e=>e&&(e.disabled||e.disabled===""),Pp=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Tp=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ru=(e,t)=>{const l=e&&e.to;if(Ze(l))if(t){const o=t(l);return o||te(`Failed to locate Teleport target with selector "${l}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return te("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!l&&!Cr(e)&&te(`Invalid Teleport target: ${l}`),l},sy={name:"Teleport",__isTeleport:!0,process(e,t,l,o,s,i,a,r,d,f){const{mc:p,pc:m,pbc:v,o:{insert:_,querySelector:b,createText:$,createComment:T}}=f,E=Cr(t.props);let{shapeFlag:z,children:j,dynamicChildren:N}=t;if(xi&&(d=!1,N=null),e==null){const V=t.el=T("teleport start"),X=t.anchor=T("teleport end");_(V,l,o),_(X,l,o);const q=t.target=ru(t.props,b),J=t.targetAnchor=$("");q?(_(J,q),a==="svg"||Pp(q)?a="svg":(a==="mathml"||Tp(q))&&(a="mathml")):E||te("Invalid Teleport target on mount:",q,`(${typeof q})`);const U=(ie,pe)=>{z&16&&p(j,ie,pe,s,i,a,r,d)};E?U(l,X):q&&U(q,J)}else{t.el=e.el;const V=t.anchor=e.anchor,X=t.target=e.target,q=t.targetAnchor=e.targetAnchor,J=Cr(e.props),U=J?l:X,ie=J?V:q;if(a==="svg"||Pp(X)?a="svg":(a==="mathml"||Tp(X))&&(a="mathml"),N?(v(e.dynamicChildren,N,U,s,i,a,r),Ac(e,t,!0)):d||m(e,t,U,ie,s,i,a,r,!1),E)J?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ja(t,l,V,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const pe=t.target=ru(t.props,b);pe?Ja(t,pe,null,f,0):te("Invalid Teleport target on update:",X,`(${typeof X})`)}else J&&Ja(t,X,q,f,1)}wv(t)},remove(e,t,l,o,{um:s,o:{remove:i}},a){const{shapeFlag:r,children:d,anchor:f,targetAnchor:p,target:m,props:v}=e;if(m&&i(p),a&&i(f),r&16){const _=a||!Cr(v);for(let b=0;b<d.length;b++){const $=d[b];s($,t,l,_,!!$.dynamicChildren)}}},move:Ja,hydrate:ly};function Ja(e,t,l,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,l);const{el:a,anchor:r,shapeFlag:d,children:f,props:p}=e,m=i===2;if(m&&o(a,t,l),(!m||Cr(p))&&d&16)for(let v=0;v<f.length;v++)s(f[v],t,l,2);m&&o(r,t,l)}function ly(e,t,l,o,s,i,{o:{nextSibling:a,parentNode:r,querySelector:d}},f){const p=t.target=ru(t.props,d);if(p){const m=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Cr(t.props))t.anchor=f(a(e),t,r(e),l,o,s,i),t.targetAnchor=m;else{t.anchor=a(e);let v=m;for(;v;)if(v=a(v),v&&v.nodeType===8&&v.data==="teleport anchor"){t.targetAnchor=v,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}f(m,t,p,l,o,s,i)}wv(t)}return t.anchor&&a(t.anchor)}const oy=sy;function wv(e){const t=e.ctx;if(t&&t.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",t.uid),l=l.nextSibling;t.ut()}}const Pe=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),la=[];let Do=null;function h(e=!1){la.push(Do=e?null:[])}function iy(){la.pop(),Do=la[la.length-1]||null}let va=1;function Cp(e){va+=e}function xv(e){return e.dynamicChildren=va>0?Do||jr:null,iy(),va>0&&Do&&Do.push(e),e}function x(e,t,l,o,s,i){return xv(n(e,t,l,o,s,i,!0))}function S(e,t,l,o,s){return xv(Z(e,t,l,o,s,!0))}function Ai(e){return e?e.__v_isVNode===!0:!1}function yi(e,t){return t.shapeFlag&6&&kr.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const ry=(...e)=>ay(...e),nd="__vInternal",kv=({key:e})=>e??null,dc=({ref:e,ref_key:t,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||Ne(e)||xe(e)?{i:nt,r:e,k:t,f:!!l}:e:null);function n(e,t=null,l=null,o=0,s=null,i=e===Pe?0:1,a=!1,r=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kv(t),ref:t&&dc(t),scopeId:Xc,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return r?(gf(d,l),i&128&&e.normalize(d)):l&&(d.shapeFlag|=Ze(l)?8:16),d.key!==d.key&&te("VNode created with invalid key (NaN). VNode type:",d.type),va>0&&!a&&Do&&(d.patchFlag>0||i&6)&&d.patchFlag!==32&&Do.push(d),d}const Z=ry;function ay(e,t=null,l=null,o=0,s=null,i=!1){if((!e||e===Zh)&&(e||te(`Invalid vnode type when creating vnode: ${e}.`),e=at),Ai(e)){const r=Bo(e,t,!0);return l&&gf(r,l),va>0&&!i&&Do&&(r.shapeFlag&6?Do[Do.indexOf(e)]=r:Do.push(r)),r.patchFlag|=-2,r}if(Tv(e)&&(e=e.__vccOpts),t){t=L(t);let{class:r,style:d}=t;r&&!Ze(r)&&(t.class=Ve(r)),ze(d)&&($c(d)&&!_e(d)&&(d=Xe({},d)),t.style=st(d))}const a=Ze(e)?1:Qh(e)?128:ny(e)?64:ze(e)?4:xe(e)?2:0;return a&4&&$c(e)&&(e=$e(e),te("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,l,o,s,a,i,!0)}function L(e){return e?$c(e)||nd in e?Xe({},e):e:null}function Bo(e,t,l=!1){const{props:o,ref:s,patchFlag:i,children:a}=e,r=t?Vo(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&kv(r),ref:t&&t.ref?l&&s?_e(s)?s.concat(dc(t)):[s,dc(t)]:dc(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&_e(a)?a.map($v):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bo(e.ssContent),ssFallback:e.ssFallback&&Bo(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $v(e){const t=Bo(e);return _e(e.children)&&(t.children=e.children.map($v)),t}function H(e=" ",t=0){return Z(Ma,null,e,t)}function we(e="",t=!1){return t?(h(),S(at,null,e)):Z(at,null,e)}function Ao(e){return e==null||typeof e=="boolean"?Z(at):_e(e)?Z(Pe,null,e.slice()):typeof e=="object"?hi(e):Z(Ma,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bo(e)}function gf(e,t){let l=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(_e(t))l=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),gf(e,s()),s._c&&(s._d=!0));return}else{l=32;const s=t._;!s&&!(nd in t)?t._ctx=nt:s===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else xe(t)?(t={default:t,_ctx:nt},l=32):(t=String(t),o&64?(l=16,t=[H(t)]):l=8);e.children=t,e.shapeFlag|=l}function Vo(...e){const t={};for(let l=0;l<e.length;l++){const o=e[l];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Ve([t.class,o.class]));else if(s==="style")t.style=st([t.style,o.style]);else if(Ca(s)){const i=t[s],a=o[s];a&&i!==a&&!(_e(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=o[s])}return t}function Wt(e,t,l,o=null){Yt(e,t,7,[l,o])}const cy=pv();let dy=0;function uy(e,t,l){const o=e.type,s=(t?t.appContext:e.appContext)||cy,i={uid:dy++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hv(o,s),emitsOptions:Yh(o,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:o.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=P1(i),i.root=t?t.root:i,i.emit=r1.bind(null,i),e.ce&&e.ce(i),i}let ot=null;const jt=()=>ot||nt;let Oc,au;{const e=Xu(),t=(l,o)=>{let s;return(s=e[l])||(s=e[l]=[]),s.push(o),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Oc=t("__VUE_INSTANCE_SETTERS__",l=>ot=l),au=t("__VUE_SSR_SETTERS__",l=>sd=l)}const Fa=e=>{const t=ot;return Oc(e),e.scope.on(),()=>{e.scope.off(),Oc(t)}},Ep=()=>{ot&&ot.scope.off(),Oc(null)},fy=ii("slot,component");function cu(e,t){const l=t.isNativeTag||dh;(fy(e)||l(e))&&te("Do not use built-in or reserved HTML elements as component id: "+e)}function Sv(e){return e.vnode.shapeFlag&4}let sd=!1;function py(e,t=!1){t&&au(t);const{props:l,children:o}=e.vnode,s=Sv(e);H1(e,l,s,t),Y1(e,o);const i=s?my(e,t):void 0;return t&&au(!1),i}function my(e,t){var l;const o=e.type;{if(o.name&&cu(o.name,e.appContext.config),o.components){const i=Object.keys(o.components);for(let a=0;a<i.length;a++)cu(i[a],e.appContext.config)}if(o.directives){const i=Object.keys(o.directives);for(let a=0;a<i.length;a++)tv(i[a])}o.compilerOptions&&hy()&&te('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Yc(new Proxy(e.ctx,uv)),T1(e);const{setup:s}=o;if(s){const i=e.setupContext=s.length>1?Pv(e):null,a=Fa(e);Di();const r=ti(s,e,0,[$r(e.props),i]);if(Bi(),a(),Yu(r)){if(r.then(Ep,Ep),t)return r.then(d=>{Ap(e,d,t)}).catch(d=>{Aa(d,e,0)});if(e.asyncDep=r,!e.suspense){const d=(l=o.name)!=null?l:"Anonymous";te(`Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ap(e,r,t)}else jv(e,t)}function Ap(e,t,l){xe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ze(t)?(Ai(t)&&te("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Ih(t),C1(e)):t!==void 0&&te(`setup() should return an object. Received: ${t===null?"null":typeof t}`),jv(e,l)}let du;const hy=()=>!du;function jv(e,t,l){const o=e.type;if(!e.render){if(!t&&du&&!o.render){const s=o.template||hf(e).template;if(s){Ko(e,"compile");const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:r,compilerOptions:d}=o,f=Xe(Xe({isCustomElement:i,delimiters:r},a),d);o.render=du(s,f),Yo(e,"compile")}}e.render=o.render||gt}{const s=Fa(e);Di();try{D1(e)}finally{Bi(),s()}}!o.render&&e.render===gt&&!t&&(o.template?te('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):te("Component is missing template or render function."))}function vy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,l){return jc(),yt(e,"get","$attrs"),t[l]},set(){return te("setupContext.attrs is readonly."),!1},deleteProperty(){return te("setupContext.attrs is readonly."),!1}}))}function gy(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,l){return yt(e,"get","$slots"),t[l]}}))}function Pv(e){return Object.freeze({get attrs(){return vy(e)},get slots(){return gy(e)},get emit(){return(l,...o)=>e.emit(l,...o)},expose:l=>{if(e.exposed&&te("expose() should be called only once per setup()."),l!=null){let o=typeof l;o==="object"&&(_e(l)?o="array":Ne(l)&&(o="ref")),o!=="object"&&te(`expose() should be passed a plain object, received ${o}.`)}e.exposed=l||{}}})}function ld(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ih(Yc(e.exposed)),{get(t,l){if(l in t)return t[l];if(l in or)return or[l](e)},has(t,l){return l in t||l in or}}))}const _y=/(?:^|[-_])(\w)/g,yy=e=>e.replace(_y,t=>t.toUpperCase()).replace(/[-_]/g,"");function ga(e,t=!0){return xe(e)?e.displayName||e.name:e.name||t&&e.__name}function od(e,t,l=!1){let o=ga(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e&&e.parent){const s=i=>{for(const a in i)if(i[a]===t)return a};o=s(e.components||e.parent.type.components)||s(e.appContext.components)}return o?yy(o):l?"App":"Anonymous"}function Tv(e){return xe(e)&&"__vccOpts"in e}const c=(e,t)=>D0(e,t,sd);function At(e,t,l){const o=arguments.length;return o===2?ze(t)&&!_e(t)?Ai(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&Ai(l)&&(l=[l]),Z(e,t,l))}function xd(e){return!!(e&&e.__v_isShallow)}function by(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#1677ff"},l={style:"color:#f5222d"},o={style:"color:#eb2f96"},s={header(m){return ze(m)?m.__isVue?["div",e,"VueInstance"]:Ne(m)?["div",{},["span",e,p(m)],"<",r(m.value),">"]:sr(m)?["div",{},["span",e,xd(m)?"ShallowReactive":"Reactive"],"<",r(m),`>${Ei(m)?" (readonly)":""}`]:Ei(m)?["div",{},["span",e,xd(m)?"ShallowReadonly":"Readonly"],"<",r(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...i(m.$)]}};function i(m){const v=[];m.type.props&&m.props&&v.push(a("props",$e(m.props))),m.setupState!==Ye&&v.push(a("setup",m.setupState)),m.data!==Ye&&v.push(a("data",$e(m.data)));const _=d(m,"computed");_&&v.push(a("computed",_));const b=d(m,"inject");return b&&v.push(a("injected",b)),v.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),v}function a(m,v){return v=Xe({},v),Object.keys(v).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(v).map(_=>["div",{},["span",o,_+": "],r(v[_],!1)])]]:["span",{}]}function r(m,v=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",l,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:ze(m)?["object",{object:v?$e(m):m}]:["span",l,String(m)]}function d(m,v){const _=m.type;if(xe(_))return;const b={};for(const $ in m.ctx)f(_,$,v)&&(b[$]=m.ctx[$]);return b}function f(m,v,_){const b=m[_];if(_e(b)&&b.includes(v)||ze(b)&&v in b||m.extends&&f(m.extends,v,_)||m.mixins&&m.mixins.some($=>f($,v,_)))return!0}function p(m){return xd(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const uu="3.4.15",ki=te;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wy="http://www.w3.org/2000/svg",xy="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,Op=vi&&vi.createElement("template"),ky={insert:(e,t,l)=>{t.insertBefore(e,l||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,l,o)=>{const s=t==="svg"?vi.createElementNS(wy,e):t==="mathml"?vi.createElementNS(xy,e):vi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>vi.createTextNode(e),createComment:e=>vi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,l,o,s,i){const a=l?l.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),l),!(s===i||!(s=s.nextSibling)););else{Op.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const r=Op.content;if(o==="svg"||o==="mathml"){const d=r.firstChild;for(;d.firstChild;)r.appendChild(d.firstChild);r.removeChild(d)}t.insertBefore(r,l)}return[a?a.nextSibling:t.firstChild,l?l.previousSibling:t.lastChild]}},ci="transition",zr="animation",Or=Symbol("_vtc"),_f=(e,{slots:t})=>At(_1,Ev(e),t);_f.displayName="Transition";const Cv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$y=_f.props=Xe({},lv,Cv),Hi=(e,t=[])=>{_e(e)?e.forEach(l=>l(...t)):e&&e(...t)},Dp=e=>e?_e(e)?e.some(t=>t.length>1):e.length>1:!1;function Ev(e){const t={};for(const ne in e)ne in Cv||(t[ne]=e[ne]);if(e.css===!1)return t;const{name:l="v",type:o,duration:s,enterFromClass:i=`${l}-enter-from`,enterActiveClass:a=`${l}-enter-active`,enterToClass:r=`${l}-enter-to`,appearFromClass:d=i,appearActiveClass:f=a,appearToClass:p=r,leaveFromClass:m=`${l}-leave-from`,leaveActiveClass:v=`${l}-leave-active`,leaveToClass:_=`${l}-leave-to`}=e,b=Sy(s),$=b&&b[0],T=b&&b[1],{onBeforeEnter:E,onEnter:z,onEnterCancelled:j,onLeave:N,onLeaveCancelled:V,onBeforeAppear:X=E,onAppear:q=z,onAppearCancelled:J=j}=t,U=(ne,be,Se)=>{fi(ne,be?p:r),fi(ne,be?f:a),Se&&Se()},ie=(ne,be)=>{ne._isLeaving=!1,fi(ne,m),fi(ne,_),fi(ne,v),be&&be()},pe=ne=>(be,Se)=>{const Ge=ne?q:z,Te=()=>U(be,ne,Se);Hi(Ge,[be,Te]),Bp(()=>{fi(be,ne?d:i),Jo(be,ne?p:r),Dp(Ge)||Mp(be,o,$,Te)})};return Xe(t,{onBeforeEnter(ne){Hi(E,[ne]),Jo(ne,i),Jo(ne,a)},onBeforeAppear(ne){Hi(X,[ne]),Jo(ne,d),Jo(ne,f)},onEnter:pe(!1),onAppear:pe(!0),onLeave(ne,be){ne._isLeaving=!0;const Se=()=>ie(ne,be);Jo(ne,m),Ov(),Jo(ne,v),Bp(()=>{ne._isLeaving&&(fi(ne,m),Jo(ne,_),Dp(N)||Mp(ne,o,T,Se))}),Hi(N,[ne,Se])},onEnterCancelled(ne){U(ne,!1),Hi(j,[ne])},onAppearCancelled(ne){U(ne,!0),Hi(J,[ne])},onLeaveCancelled(ne){ie(ne),Hi(V,[ne])}})}function Sy(e){if(e==null)return null;if(ze(e))return[kd(e.enter),kd(e.leave)];{const t=kd(e);return[t,t]}}function kd(e){const t=X_(e);return V0(t,"<transition> explicit duration"),t}function Jo(e,t){t.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Or]||(e[Or]=new Set)).add(t)}function fi(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Or];l&&(l.delete(t),l.size||(e[Or]=void 0))}function Bp(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jy=0;function Mp(e,t,l,o){const s=e._endId=++jy,i=()=>{s===e._endId&&o()};if(l)return setTimeout(i,l);const{type:a,timeout:r,propCount:d}=Av(e,t);if(!a)return o();const f=a+"end";let p=0;const m=()=>{e.removeEventListener(f,v),i()},v=_=>{_.target===e&&++p>=d&&m()};setTimeout(()=>{p<d&&m()},r+1),e.addEventListener(f,v)}function Av(e,t){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),s=o(`${ci}Delay`),i=o(`${ci}Duration`),a=Fp(s,i),r=o(`${zr}Delay`),d=o(`${zr}Duration`),f=Fp(r,d);let p=null,m=0,v=0;t===ci?a>0&&(p=ci,m=a,v=i.length):t===zr?f>0&&(p=zr,m=f,v=d.length):(m=Math.max(a,f),p=m>0?a>f?ci:zr:null,v=p?p===ci?i.length:d.length:0);const _=p===ci&&/\b(transform|all)(,|$)/.test(o(`${ci}Property`).toString());return{type:p,timeout:m,propCount:v,hasTransform:_}}function Fp(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((l,o)=>Ip(l)+Ip(e[o])))}function Ip(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ov(){return document.body.offsetHeight}function Py(e,t,l){const o=e[Or];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):l?e.setAttribute("class",t):e.className=t}const yf=Symbol("_vod"),bf={beforeMount(e,{value:t},{transition:l}){e[yf]=e.style.display==="none"?"":e.style.display,l&&t?l.beforeEnter(e):Nr(e,t)},mounted(e,{value:t},{transition:l}){l&&t&&l.enter(e)},updated(e,{value:t,oldValue:l},{transition:o}){!t!=!l&&(o?t?(o.beforeEnter(e),Nr(e,!0),o.enter(e)):o.leave(e,()=>{Nr(e,!1)}):Nr(e,t))},beforeUnmount(e,{value:t}){Nr(e,t)}};bf.name="show";function Nr(e,t){e.style.display=t?e[yf]:"none"}const Ty=Symbol("CSS_VAR_TEXT");function Cy(e,t,l){const o=e.style,s=o.display,i=Ze(l);if(l&&!i){if(t&&!Ze(t))for(const a in t)l[a]==null&&fu(o,a,"");for(const a in l)fu(o,a,l[a])}else if(i){if(t!==l){const a=o[Ty];a&&(l+=";"+a),o.cssText=l}}else t&&e.removeAttribute("style");yf in e&&(o.display=s)}const Ey=/[^\\];\s*$/,Lp=/\s*!important$/;function fu(e,t,l){if(_e(l))l.forEach(o=>fu(e,t,o));else if(l==null&&(l=""),Ey.test(l)&&ki(`Unexpected semicolon at the end of '${t}' style value: '${l}'`),t.startsWith("--"))e.setProperty(t,l);else{const o=Ay(e,t);Lp.test(l)?e.setProperty(li(o),l.replace(Lp,""),"important"):e[o]=l}}const Rp=["Webkit","Moz","ms"],$d={};function Ay(e,t){const l=$d[t];if(l)return l;let o=No(t);if(o!=="filter"&&o in e)return $d[t]=o;o=ar(o);for(let s=0;s<Rp.length;s++){const i=Rp[s]+o;if(i in e)return $d[t]=i}return t}const Hp="http://www.w3.org/1999/xlink";function Oy(e,t,l,o,s){if(o&&t.startsWith("xlink:"))l==null?e.removeAttributeNS(Hp,t.slice(6,t.length)):e.setAttributeNS(Hp,t,l);else{const i=c0(t);l==null||i&&!hh(l)?e.removeAttribute(t):e.setAttribute(t,i?"":l)}}function Dy(e,t,l,o,s,i,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,s,i),e[t]=l??"";return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=l;const f=r==="OPTION"?e.getAttribute("value"):e.value,p=l??"";f!==p&&(e.value=p),l==null&&e.removeAttribute(t);return}let d=!1;if(l===""||l==null){const f=typeof e[t];f==="boolean"?l=hh(l):l==null&&f==="string"?(l="",d=!0):f==="number"&&(l=0,d=!0)}try{e[t]=l}catch(f){d||ki(`Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${l} is invalid.`,f)}d&&e.removeAttribute(t)}function By(e,t,l,o){e.addEventListener(t,l,o)}function My(e,t,l,o){e.removeEventListener(t,l,o)}const zp=Symbol("_vei");function Fy(e,t,l,o,s=null){const i=e[zp]||(e[zp]={}),a=i[t];if(o&&a)a.value=o;else{const[r,d]=Iy(t);if(o){const f=i[t]=Hy(o,s);By(e,r,f,d)}else a&&(My(e,r,a,d),i[t]=void 0)}}const Np=/(?:Once|Passive|Capture)$/;function Iy(e){let t;if(Np.test(e)){t={};let o;for(;o=e.match(Np);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):li(e.slice(2)),t]}let Sd=0;const Ly=Promise.resolve(),Ry=()=>Sd||(Ly.then(()=>Sd=0),Sd=Date.now());function Hy(e,t){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;Yt(zy(o,l.value),t,5,[o])};return l.value=e,l.attached=Ry(),l}function zy(e,t){if(_e(t)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const qp=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ny=(e,t,l,o,s,i,a,r,d)=>{const f=s==="svg";t==="class"?Py(e,o,f):t==="style"?Cy(e,l,o):Ca(t)?yc(t)||Fy(e,t,l,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qy(e,t,o,f))?Dy(e,t,o,i,a,r,d):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Oy(e,t,o,f))};function qy(e,t,l,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&qp(t)&&xe(l));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qp(t)&&Ze(l)?!1:t in e}const Dv=new WeakMap,Bv=new WeakMap,Dc=Symbol("_moveCb"),Vp=Symbol("_enterCb"),Mv={name:"TransitionGroup",props:Xe({},$y,{tag:String,moveClass:String}),setup(e,{slots:t}){const l=jt(),o=sv();let s,i;return ed(()=>{if(!s.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Yy(s[0].el,l.vnode.el,a))return;s.forEach(Wy),s.forEach(Uy);const r=s.filter(Ky);Ov(),r.forEach(d=>{const f=d.el,p=f.style;Jo(f,a),p.transform=p.webkitTransform=p.transitionDuration="";const m=f[Dc]=v=>{v&&v.target!==f||(!v||/transform$/.test(v.propertyName))&&(f.removeEventListener("transitionend",m),f[Dc]=null,fi(f,a))};f.addEventListener("transitionend",m)})}),()=>{const a=$e(e),r=Ev(a);let d=a.tag||Pe;s=i,i=t.default?pf(t.default()):[];for(let f=0;f<i.length;f++){const p=i[f];p.key!=null?Ar(p,ha(p,r,o,l)):ki("<TransitionGroup> children must be keyed.")}if(s)for(let f=0;f<s.length;f++){const p=s[f];Ar(p,ha(p,r,o,l)),Dv.set(p,p.el.getBoundingClientRect())}return Z(d,null,i)}}},Vy=e=>delete e.mode;Mv.props;const Gy=Mv;function Wy(e){const t=e.el;t[Dc]&&t[Dc](),t[Vp]&&t[Vp]()}function Uy(e){Bv.set(e,e.el.getBoundingClientRect())}function Ky(e){const t=Dv.get(e),l=Bv.get(e),o=t.left-l.left,s=t.top-l.top;if(o||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${s}px)`,i.transitionDuration="0s",e}}function Yy(e,t,l){const o=e.cloneNode(),s=e[Or];s&&s.forEach(r=>{r.split(/\s+/).forEach(d=>d&&o.classList.remove(d))}),l.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:a}=Av(o);return i.removeChild(o),a}const Jy=["ctrl","shift","alt","meta"],Zy={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jy.some(l=>e[`${l}Key`]&&!t.includes(l))},Xy=(e,t)=>{const l=e._withMods||(e._withMods={}),o=t.join(".");return l[o]||(l[o]=(s,...i)=>{for(let a=0;a<t.length;a++){const r=Zy[t[a]];if(r&&r(s,t))return}return e(s,...i)})},Qy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Za=(e,t)=>{const l=e._withKeys||(e._withKeys={}),o=t.join(".");return l[o]||(l[o]=s=>{if(!("key"in s))return;const i=li(s.key);if(t.some(a=>a===i||Qy[a]===i))return e(s)})},eb=Xe({patchProp:Ny},ky);let Gp;function tb(){return Gp||(Gp=X1(eb))}const nb=(...e)=>{const t=tb().createApp(...e);lb(t),ob(t);const{mount:l}=t;return t.mount=o=>{const s=ib(o);if(!s)return;const i=t._component;!xe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=l(s,!1,sb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function sb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lb(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>mh(t)||i0(t)||r0(t),writable:!1})}function ob(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){ki("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const l=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return ki(o),l},set(){ki(o)}})}}function ib(e){if(Ze(e)){const t=document.querySelector(e);return t||ki(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&ki('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rb(){by()}rb();function pu(e,t={},l){for(const o in e){const s=e[o],i=l?`${l}:${o}`:o;typeof s=="object"&&s!==null?pu(s,t,i):typeof s=="function"&&(t[i]=s)}return t}const ab={run:e=>e()},cb=()=>ab,Fv=typeof console.createTask<"u"?console.createTask:cb;function db(e,t){const l=t.shift(),o=Fv(l);return e.reduce((s,i)=>s.then(()=>o.run(()=>i(...t))),Promise.resolve())}function ub(e,t){const l=t.shift(),o=Fv(l);return Promise.all(e.map(s=>o.run(()=>s(...t))))}function jd(e,t){for(const l of[...e])l(t)}class fb{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,l,o={}){if(!t||typeof l!="function")return()=>{};const s=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!o.allowDeprecated){let a=i.message;a||(a=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!l.name)try{Object.defineProperty(l,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(l),()=>{l&&(this.removeHook(t,l),l=void 0)}}hookOnce(t,l){let o,s=(...i)=>(typeof o=="function"&&o(),o=void 0,s=void 0,l(...i));return o=this.hook(t,s),o}removeHook(t,l){if(this._hooks[t]){const o=this._hooks[t].indexOf(l);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,l){this._deprecatedHooks[t]=typeof l=="string"?{to:l}:l;const o=this._hooks[t]||[];delete this._hooks[t];for(const s of o)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const l in t)this.deprecateHook(l,t[l])}addHooks(t){const l=pu(t),o=Object.keys(l).map(s=>this.hook(s,l[s]));return()=>{for(const s of o.splice(0,o.length))s()}}removeHooks(t){const l=pu(t);for(const o in l)this.removeHook(o,l[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...l){return l.unshift(t),this.callHookWith(db,t,...l)}callHookParallel(t,...l){return l.unshift(t),this.callHookWith(ub,t,...l)}callHookWith(t,l,...o){const s=this._before||this._after?{name:l,args:o,context:{}}:void 0;this._before&&jd(this._before,s);const i=t(l in this._hooks?[...this._hooks[l]]:[],o);return i instanceof Promise?i.finally(()=>{this._after&&s&&jd(this._after,s)}):(this._after&&s&&jd(this._after,s),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const l=this._before.indexOf(t);l!==-1&&this._before.splice(l,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const l=this._after.indexOf(t);l!==-1&&this._after.splice(l,1)}}}}function pb(){return new fb}function mb(e){return Array.isArray(e)?e:[e]}const hb=["title","titleTemplate","script","style","noscript"],uc=["base","meta","link","style","script","noscript"],vb=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],gb=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Iv=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],_b=typeof window<"u";function wf(e){let t=9;for(let l=0;l<e.length;)t=Math.imul(t^e.charCodeAt(l++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Wp(e){return e._h||wf(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,l])=>`${t}:${String(l)}`).join(",")}`)}function Lv(e,t){const{props:l,tag:o}=e;if(gb.includes(o))return o;if(o==="link"&&l.rel==="canonical")return"canonical";if(l.charset)return"charset";const s=["id"];o==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof l[i]<"u"){const a=String(l[i]);return t&&!t(a)?!1:`${o}:${i}:${a}`}return!1}function Up(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function yb(e,t,l){const o={tag:e,props:await Rv(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(e)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(e))};return Iv.forEach(s=>{const i=typeof o.props[s]<"u"?o.props[s]:l[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||hb.includes(o.tag))&&(o[s==="children"?"innerHTML":s]=i),delete o.props[s])}),o.props.body&&(o.tagPosition="bodyClose",delete o.props.body),o.tag==="script"&&typeof o.innerHTML=="object"&&(o.innerHTML=JSON.stringify(o.innerHTML),o.props.type=o.props.type||"application/json"),Array.isArray(o.props.content)?o.props.content.map(s=>({...o,props:{...o.props,content:s}})):o}function bb(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Rv(e,t){for(const l of Object.keys(e)){if(l==="class"){e[l]=bb(e[l]);continue}if(e[l]instanceof Promise&&(e[l]=await e[l]),!t&&!Iv.includes(l)){const o=String(e[l]),s=l.startsWith("data-");o==="true"||o===""?e[l]=s?"true":!0:e[l]||(s&&o==="false"?e[l]="false":delete e[l])}}return e}const wb=10;async function xb(e){const t=[];return Object.entries(e.resolvedInput).filter(([l,o])=>typeof o<"u"&&vb.includes(l)).forEach(([l,o])=>{const s=mb(o);t.push(...s.map(i=>yb(l,i,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((l,o)=>(l._e=e._i,e.mode&&(l._m=e.mode),l._p=(e._i<<wb)+o,l))}const Kp={base:-10,title:10},Yp={critical:-80,high:-10,low:20};function Bc(e){let t=100;const l=e.tagPriority;return typeof l=="number"?l:(e.tag==="meta"?(e.props["http-equiv"]==="content-security-policy"&&(t=-30),e.props.charset&&(t=-20),e.props.name==="viewport"&&(t=-15)):e.tag==="link"&&e.props.rel==="preconnect"?t=20:e.tag in Kp&&(t=Kp[e.tag]),typeof l=="string"&&l in Yp?t+Yp[l]:t)}const kb=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Hv=["onload","onerror","onabort","onprogress","onloadstart"],di="%separator";function fc(e,t,l){if(typeof e!="string"||!e.includes("%"))return e;function o(a){let r;return["s","pageTitle"].includes(a)?r=t.pageTitle:a.includes(".")?r=a.split(".").reduce((d,f)=>d&&d[f]||void 0,t):r=t[a],typeof r<"u"?(r||"").replace(/"/g,'\\"'):!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const r=o(a.slice(1));typeof r=="string"&&(e=e.replace(new RegExp(`\\${a}(\\W|$)`,"g"),(d,f)=>`${r}${f}`).trim())}),e.includes(di)&&(e.endsWith(di)&&(e=e.slice(0,-di.length).trim()),e.startsWith(di)&&(e=e.slice(di.length).trim()),e=e.replace(new RegExp(`\\${di}\\s*\\${di}`,"g"),di),e=fc(e,{separator:l},l)),e}async function $b(e){const t={tag:e.tagName.toLowerCase(),props:await Rv(e.getAttributeNames().reduce((l,o)=>({...l,[o]:e.getAttribute(o)}),{})),innerHTML:e.innerHTML};return t._d=Lv(t),t}async function Sb(e,t={}){var p;const l=t.document||e.resolvedOptions.document;if(!l)return;const o={shouldRender:e.dirty,tags:[]};if(await e.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const s=(await e.resolveTags()).map(m=>({tag:m,id:uc.includes(m.tag)?Wp(m):m.tag,shouldRender:!0}));let i=e._dom;if(!i){i={elMap:{htmlAttrs:l.documentElement,bodyAttrs:l.body}};for(const m of["body","head"]){const v=(p=l==null?void 0:l[m])==null?void 0:p.children;for(const _ of[...v].filter(b=>uc.includes(b.tagName.toLowerCase())))i.elMap[_.getAttribute("data-hid")||Wp(await $b(_))]=_}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function a(m,v,_){const b=`${m}:${v}`;i.sideEffects[b]=_,delete i.pendingSideEffects[b]}function r({id:m,$el:v,tag:_}){const b=_.tag.endsWith("Attrs");i.elMap[m]=v,b||(["textContent","innerHTML"].forEach($=>{_[$]&&_[$]!==v[$]&&(v[$]=_[$])}),a(m,"el",()=>{i.elMap[m].remove(),delete i.elMap[m]})),Object.entries(_.props).forEach(([$,T])=>{const E=`attr:${$}`;if($==="class")for(const z of(T||"").split(" ").filter(Boolean))b&&a(m,`${E}:${z}`,()=>v.classList.remove(z)),!v.classList.contains(z)&&v.classList.add(z);else v.getAttribute($)!==T&&v.setAttribute($,T===!0?"":String(T)),b&&a(m,E,()=>v.removeAttribute($))})}const d=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of s){const{tag:v,shouldRender:_,id:b}=m;if(_){if(v.tag==="title"){l.title=v.textContent;continue}m.$el=m.$el||i.elMap[b],m.$el?r(m):uc.includes(v.tag)&&d.push(m)}}for(const m of d){const v=m.tag.tagPosition||"head";m.$el=l.createElement(m.tag.tag),r(m),f[v]=f[v]||l.createDocumentFragment(),f[v].appendChild(m.$el)}for(const m of s)await e.hooks.callHook("dom:renderTag",m,l,a);f.head&&l.head.appendChild(f.head),f.bodyOpen&&l.body.insertBefore(f.bodyOpen,l.body.firstChild),f.bodyClose&&l.body.appendChild(f.bodyClose),Object.values(i.pendingSideEffects).forEach(m=>m()),e._dom=i,e.dirty=!1,await e.hooks.callHook("dom:rendered",{renders:s})}async function jb(e,t={}){const l=t.delayFn||(o=>setTimeout(o,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(o=>l(async()=>{await Sb(e,t),delete e._domUpdatePromise,o()}))}function Pb(e){return t=>{var o,s;const l=((s=(o=t.resolvedOptions.document)==null?void 0:o.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return l&&t.push(JSON.parse(l)),{mode:"client",hooks:{"entries:updated":function(i){jb(i,e)}}}}}const Tb=["templateParams","htmlAttrs","bodyAttrs"],Cb={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const l=Lv(e)||(e.key?`${e.tag}:${e.key}`:!1);l&&(e._d=l)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const s=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,i=t[s];if(i){let r=o==null?void 0:o.tagDuplicateStrategy;if(!r&&Tb.includes(o.tag)&&(r="merge"),r==="merge"){const d=i.props;["class","style"].forEach(f=>{d[f]&&(o.props[f]?(f==="style"&&!d[f].endsWith(";")&&(d[f]+=";"),o.props[f]=`${d[f]} ${o.props[f]}`):o.props[f]=d[f])}),t[s].props={...d,...o.props};return}else if(o._e===i._e){i._duped=i._duped||[],o._d=`${i._d}:${i._duped.length+1}`,i._duped.push(o);return}else if(Bc(o)>Bc(i))return}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(uc.includes(o.tag)&&a===0){delete t[s];return}t[s]=o});const l=[];Object.values(t).forEach(o=>{const s=o._duped;delete o._duped,l.push(o),s&&l.push(...s)}),e.tags=l,e.tags=e.tags.filter(o=>!(o.tag==="meta"&&(o.props.name||o.props.property)&&!o.props.content))}}},Eb={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(l=>["titleTemplate","templateParams","title"].includes(l.tag)&&l._m==="server").forEach(l=>{t[l.tag]=l.tag.startsWith("title")?l.textContent:l.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Ab=["script","link","bodyAttrs"];function Ob(e){const t={},l={};return Object.entries(e.props).forEach(([o,s])=>{o.startsWith("on")&&typeof s=="function"?(Hv.includes(o)&&(t[o]=`this.dataset.${o} = true`),l[o]=s):t[o]=s}),{props:t,eventHandlers:l}}const Db=e=>({hooks:{"tags:resolve":function(t){for(const l of t.tags)if(Ab.includes(l.tag)){const{props:o,eventHandlers:s}=Ob(l);l.props=o,Object.keys(s).length&&((l.props.src||l.props.href)&&(l.key=l.key||wf(l.props.src||l.props.href)),l._eventHandlers=s)}},"dom:renderTag":function(t,l,o){if(!t.tag._eventHandlers)return;const s=t.tag.tag==="bodyAttrs"?l.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([i,a])=>{const r=`${t.tag._d||t.tag._p}:${i}`,d=i.slice(2).toLowerCase(),f=`data-h-${d}`;if(o(t.id,r,()=>{}),t.$el.hasAttribute(f))return;t.$el.setAttribute(f,"");let p;const m=v=>{a(v),p==null||p.disconnect()};i in t.$el.dataset?m(new Event(i.replace("on",""))):Hv.includes(i)&&typeof MutationObserver<"u"?(p=new MutationObserver(v=>{v.some(b=>b.attributeName===`data-${i}`)&&(m(new Event(i.replace("on",""))),p==null||p.disconnect())}),p.observe(t.$el,{attributes:!0})):s.addEventListener(d,m),o(t.id,r,()=>{p==null||p.disconnect(),s.removeEventListener(d,m),t.$el.removeAttribute(f)})})}}}),Bb=["link","style","script","noscript"],Mb={hooks:{"tag:normalise":({tag:e})=>{e.key&&Bb.includes(e.tag)&&(e.props["data-hid"]=e._h=wf(e.key))}}},Fb={hooks:{"tags:resolve":e=>{const t=l=>{var o;return(o=e.tags.find(s=>s._d===l))==null?void 0:o._p};for(const{prefix:l,offset:o}of kb)for(const s of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(l))){const i=t(s.tagPriority.replace(l,""));typeof i<"u"&&(s._p=i+o)}e.tags.sort((l,o)=>l._p-o._p).sort((l,o)=>Bc(l)-Bc(o))}}},Ib={meta:"content",link:"href",htmlAttrs:"lang"},Lb=e=>({hooks:{"tags:resolve":t=>{var r;const{tags:l}=t,o=(r=l.find(d=>d.tag==="title"))==null?void 0:r.textContent,s=l.findIndex(d=>d.tag==="templateParams"),i=s!==-1?l[s].props:{},a=i.separator||"|";delete i.separator,i.pageTitle=fc(i.pageTitle||o||"",i,a);for(const d of l.filter(f=>f.processTemplateParams!==!1)){const f=Ib[d.tag];f&&typeof d.props[f]=="string"?d.props[f]=fc(d.props[f],i,a):(d.processTemplateParams===!0||["titleTemplate","title"].includes(d.tag))&&["innerHTML","textContent"].forEach(p=>{typeof d[p]=="string"&&(d[p]=fc(d[p],i,a))})}e._templateParams=i,e._separator=a,t.tags=l.filter(d=>d.tag!=="templateParams")}}}),Rb={hooks:{"tags:resolve":e=>{const{tags:t}=e;let l=t.findIndex(s=>s.tag==="titleTemplate");const o=t.findIndex(s=>s.tag==="title");if(o!==-1&&l!==-1){const s=Up(t[l].textContent,t[o].textContent);s!==null?t[o].textContent=s||t[o].textContent:delete t[o]}else if(l!==-1){const s=Up(t[l].textContent);s!==null&&(t[l].textContent=s,t[l].tag="title",l=-1)}l!==-1&&delete t[l],e.tags=t.filter(Boolean)}}},Hb={hooks:{"tags:afterResolve":function(e){for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let zv;function zb(e={}){const t=Nb(e);return t.use(Pb()),zv=t}function Jp(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Nb(e={}){const t=pb();t.addHooks(e.hooks||{}),e.document=e.document||(_b?document:void 0);const l=!e.document,o=()=>{r.dirty=!0,t.callHook("entries:updated",r)};let s=0,i=[];const a=[],r={plugins:a,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return i},use(d){const f=typeof d=="function"?d(r):d;(!f.key||!a.some(p=>p.key===f.key))&&(a.push(f),Jp(f.mode,l)&&t.addHooks(f.hooks||{}))},push(d,f){f==null||delete f.head;const p={_i:s++,input:d,...f};return Jp(p.mode,l)&&(i.push(p),o()),{dispose(){i=i.filter(m=>m._i!==p._i),t.callHook("entries:updated",r),o()},patch(m){i=i.map(v=>(v._i===p._i&&(v.input=p.input=m),v)),o()}}},async resolveTags(){const d={tags:[],entries:[...i]};await t.callHook("entries:resolve",d);for(const f of d.entries){const p=f.resolvedInput||f.input;if(f.resolvedInput=await(f.transform?f.transform(p):p),f.resolvedInput)for(const m of await xb(f)){const v={tag:m,entry:f,resolvedOptions:r.resolvedOptions};await t.callHook("tag:normalise",v),d.tags.push(v.tag)}}return await t.callHook("tags:beforeResolve",d),await t.callHook("tags:resolve",d),await t.callHook("tags:afterResolve",d),d.tags},ssr:l};return[Cb,Eb,Db,Mb,Fb,Lb,Rb,Hb,...(e==null?void 0:e.plugins)||[]].forEach(d=>r.use(d)),r.hooks.callHook("init",r),r}function qb(){return zv}const Vb=uu.startsWith("3");function Gb(e){return typeof e=="function"?e():y(e)}function Mc(e,t=""){if(e instanceof Promise)return e;const l=Gb(e);return!e||!l?l:Array.isArray(l)?l.map(o=>Mc(o,t)):typeof l=="object"?Object.fromEntries(Object.entries(l).map(([o,s])=>o==="titleTemplate"||o.startsWith("on")?[o,y(s)]:[o,Mc(s,o)])):l}const Wb={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Mc(t.input)}}},Nv="usehead";function Ub(e){return{install(l){Vb&&(l.config.globalProperties.$unhead=e,l.config.globalProperties.$head=e,l.provide(Nv,e))}}.install}function Kb(e={}){e.domDelayFn=e.domDelayFn||(l=>ut(()=>setTimeout(()=>l(),0)));const t=zb(e);return t.use(Wb),t.install=Ub(t),t}const Zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xp="__unhead_injection_handler__";function Yb(){if(Xp in Zp)return Zp[Xp]();const e=u(Nv);return e||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),e||qb()}function Jb(e,t={}){const l=t.head||Yb();if(l)return l.ssr?l.push(e,t):Zb(l,e,t)}function Zb(e,t,l={}){const o=le(!1),s=le({});pr(()=>{s.value=o.value?{}:Mc(t)});const i=e.push(s.value,l);return Ae(s,r=>{i.patch(r)}),jt()&&(Ba(()=>{i.dispose()}),av(()=>{o.value=!0}),rv(()=>{o.value=!1})),i}let Xb=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,l)=>(l&=63,l<36?t+=l.toString(36):l<62?t+=(l-26).toString(36).toUpperCase():l>62?t+="-":t+="_",t),"");function Qp(e){return e=e??[],Array.isArray(e)?e:[e]}function mu(e,t){if(!e)return!1;const l=e.indexOf(t);return l>=0?(e.splice(l,1),!0):!1}function Qb(...e){let t,l,o;e.length===1?(t=0,o=1,[l]=e):[t,l,o=1]=e;const s=[];let i=t;for(;i<l;)s.push(i),i+=o||1;return s}function ew(e){return e!=null}function tw(e,t){return Object.fromEntries(Object.entries(e).map(([l,o])=>t(l,o)).filter(ew))}const ea={theme:"default",title:"Welcome to Slidev",titleTemplate:"%s - Slidev",addons:["@mudssky/slidev-addon-default"],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shikiji",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",editor:!0,background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0,mdc:!0},He=ea,$i=He.aspectRatio??16/9,Si=He.canvasWidth??980,xf=Math.ceil(Si/$i),kf=c(()=>tw(He.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function qv(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Zt(e,t,l){Object.defineProperty(e,t,{value:l,writable:!0,enumerable:!1})}const hr=g({page:0,clicks:0});let nw=[],sw=[];Zt(hr,"$syncUp",!0);Zt(hr,"$syncDown",!0);Zt(hr,"$paused",!1);Zt(hr,"$onSet",e=>nw.push(e));Zt(hr,"$onPatch",e=>sw.push(e));qv();Zt(hr,"$patch",async()=>!1);function Vv(e,t,l=!1){const o=[];let s=!1,i=!1,a,r;const d=g(t);function f(_){o.push(_)}function p(_,b){d[_]!==b&&(clearTimeout(a),s=!0,d[_]=b,a=setTimeout(()=>s=!1,0))}function m(_){s||(clearTimeout(r),i=!0,Object.entries(_).forEach(([b,$])=>{d[b]=$}),r=setTimeout(()=>i=!1,0))}function v(_){let b;l?l&&window.addEventListener("storage",T=>{T&&T.key===_&&T.newValue&&m(JSON.parse(T.newValue))}):(b=new BroadcastChannel(_),b.addEventListener("message",T=>m(T.data)));function $(){!l&&b&&!i?b.postMessage($e(d)):l&&!i&&window.localStorage.setItem(_,JSON.stringify(d)),s||o.forEach(T=>T(d))}if(Ae(d,$,{deep:!0,flush:"sync"}),l){const T=window.localStorage.getItem(_);T&&m(JSON.parse(T))}}return{init:v,onPatch:f,patch:p,state:d}}const{init:lw,onPatch:ow,patch:qr,state:Pd}=Vv(hr,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),vr=g({});let iw=[],rw=[];Zt(vr,"$syncUp",!0);Zt(vr,"$syncDown",!0);Zt(vr,"$paused",!1);Zt(vr,"$onSet",e=>iw.push(e));Zt(vr,"$onPatch",e=>rw.push(e));qv();Zt(vr,"$patch",async()=>!1);const{init:aw,onPatch:cw,patch:Gv,state:Fc}=Vv(vr,{},!1),dw="modulepreload",uw=function(e){return"/my-slidevs/slidevs/learn-tailwind/"+e},em={},ur=function(t,l,o){let s=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link");s=Promise.all(l.map(a=>{if(a=uw(a),a in em)return;em[a]=!0;const r=a.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!o)for(let m=i.length-1;m>=0;m--){const v=i[m];if(v.href===a&&(!r||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":dw,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};function fw(e,t){let l,o,s;const i=le(!0),a=()=>{i.value=!0,s()};Ae(e,a,{flush:"sync"});const r=typeof t=="function"?t:t.get,d=typeof t=="function"?void 0:t.set,f=of((p,m)=>(o=p,s=m,{get(){return i.value&&(l=r(),i.value=!1),o(),l},set(v){d==null||d(v)}}));return Object.isExtensible(f)&&(f.trigger=a),f}function Go(e){return _h()?(f0(e),!0):!1}function Je(e){return typeof e=="function"?e():y(e)}function pw(e){if(!Ne(e))return g(e);const t=new Proxy({},{get(l,o,s){return y(Reflect.get(e.value,o,s))},set(l,o,s){return Ne(e.value[o])&&!Ne(s)?e.value[o].value=s:e.value[o]=s,!0},deleteProperty(l,o){return Reflect.deleteProperty(e.value,o)},has(l,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return g(t)}const Ot=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mw=e=>typeof e<"u",hw=e=>e!=null,vw=Object.prototype.toString,_a=e=>vw.call(e)==="[object Object]",hu=()=>+Date.now(),ni=()=>{},gw=_w();function _w(){var e,t;return Ot&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function yw(e,t){function l(...o){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(i)})}return l}const Wv=e=>e();function bw(e=Wv){const t=le(!0);function l(){t.value=!1}function o(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:Oo(t),pause:l,resume:o,eventFilter:s}}function ww(e){let t;function l(){return t||(t=e()),t}return l.reset=async()=>{const o=t;t=void 0,o&&await o},l}function xw(e,t){var l;if(typeof e=="number")return e+t;const o=((l=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:l[0])||"",s=e.slice(o.length),i=Number.parseFloat(o)+t;return Number.isNaN(i)?e:i+s}function Uv(e){return e||jt()}function kw(...e){if(e.length!==1)return B(...e);const t=e[0];return typeof t=="function"?Oo(of(()=>({get:t,set:ni}))):le(t)}function $w(e,t,l={}){const{eventFilter:o=Wv,...s}=l;return Ae(e,yw(o,t),s)}function Sw(e,t,l={}){const{eventFilter:o,...s}=l,{eventFilter:i,pause:a,resume:r,isActive:d}=bw(o);return{stop:$w(e,t,{...s,eventFilter:i}),pause:a,resume:r,isActive:d}}function jw(e,t={}){if(!Ne(e))return I0(e);const l=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const o in e.value)l[o]=of(()=>({get(){return e.value[o]},set(s){var i;if((i=Je(t.replaceRef))!=null?i:!0)if(Array.isArray(e.value)){const r=[...e.value];r[o]=s,e.value=r}else{const r={...e.value,[o]:s};Object.setPrototypeOf(r,Object.getPrototypeOf(e.value)),e.value=r}else e.value[o]=s}}));return l}function Ia(e,t=!0,l){Uv()?Wo(e,l):t?e():ut(e)}function Pw(e,t){Uv(t)&&td(e,t)}function Tw(e,t=1e3,l={}){const{immediate:o=!0,immediateCallback:s=!1}=l;let i=null;const a=le(!1);function r(){i&&(clearInterval(i),i=null)}function d(){a.value=!1,r()}function f(){const p=Je(t);p<=0||(a.value=!0,s&&e(),r(),i=setInterval(e,p))}if(o&&Ot&&f(),Ne(t)||typeof t=="function"){const p=Ae(t,()=>{a.value&&Ot&&f()});Go(p)}return Go(d),{isActive:a,pause:d,resume:f}}function Cw(e,t,l={}){const{immediate:o=!0}=l,s=le(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function r(){s.value=!1,a()}function d(...f){a(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,e(...f)},Je(t))}return o&&(s.value=!0,Ot&&d()),Go(r),{isPending:Oo(s),start:d,stop:r}}function Kv(e=!1,t={}){const{truthyValue:l=!0,falsyValue:o=!1}=t,s=Ne(e),i=le(e);function a(r){if(arguments.length)return i.value=r,i.value;{const d=Je(l);return i.value=i.value===d?Je(o):d,i.value}}return s?a:[i,a]}function rt(e){var t;const l=Je(e);return(t=l==null?void 0:l.$el)!=null?t:l}const ct=Ot?window:void 0,Yv=Ot?window.document:void 0,Jv=Ot?window.navigator:void 0;function De(...e){let t,l,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,s]=e,t=ct):[t,l,o,s]=e,!t)return ni;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const i=[],a=()=>{i.forEach(p=>p()),i.length=0},r=(p,m,v,_)=>(p.addEventListener(m,v,_),()=>p.removeEventListener(m,v,_)),d=Ae(()=>[rt(t),Je(s)],([p,m])=>{if(a(),!p)return;const v=_a(m)?{...m}:m;i.push(...l.flatMap(_=>o.map(b=>r(p,_,b,v))))},{immediate:!0,flush:"post"}),f=()=>{d(),a()};return Go(f),f}let tm=!1;function Ew(e,t,l={}){const{window:o=ct,ignore:s=[],capture:i=!0,detectIframe:a=!1}=l;if(!o)return ni;gw&&!tm&&(tm=!0,Array.from(o.document.body.children).forEach(v=>v.addEventListener("click",ni)),o.document.documentElement.addEventListener("click",ni));let r=!0;const d=v=>s.some(_=>{if(typeof _=="string")return Array.from(o.document.querySelectorAll(_)).some(b=>b===v.target||v.composedPath().includes(b));{const b=rt(_);return b&&(v.target===b||v.composedPath().includes(b))}}),p=[De(o,"click",v=>{const _=rt(e);if(!(!_||_===v.target||v.composedPath().includes(_))){if(v.detail===0&&(r=!d(v)),!r){r=!0;return}t(v)}},{passive:!0,capture:i}),De(o,"pointerdown",v=>{const _=rt(e);r=!d(v)&&!!(_&&!v.composedPath().includes(_))},{passive:!0}),a&&De(o,"blur",v=>{setTimeout(()=>{var _;const b=rt(e);((_=o.document.activeElement)==null?void 0:_.tagName)==="IFRAME"&&!(b!=null&&b.contains(o.document.activeElement))&&t(v)},0)})].filter(Boolean);return()=>p.forEach(v=>v())}function Aw(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Ow(...e){let t,l,o={};e.length===3?(t=e[0],l=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,l=e[0],o=e[1]):(t=e[0],l=e[1]):(t=!0,l=e[0]);const{target:s=ct,eventName:i="keydown",passive:a=!1,dedupe:r=!1}=o,d=Aw(t);return De(s,i,p=>{p.repeat&&Je(r)||d(p)&&l(p)},a)}function Dw(e={}){var t;const{window:l=ct,deep:o=!0}=e,s=(t=e.document)!=null?t:l==null?void 0:l.document,i=()=>{var r;let d=s==null?void 0:s.activeElement;if(o)for(;d!=null&&d.shadowRoot;)d=(r=d==null?void 0:d.shadowRoot)==null?void 0:r.activeElement;return d},a=fw(()=>null,()=>i());return l&&(De(l,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),De(l,"focus",a.trigger,!0)),a}function Bw(){const e=le(!1);return jt()&&Wo(()=>{e.value=!0}),e}function Mr(e){const t=Bw();return c(()=>(t.value,!!e()))}function Zv(e,t={}){const{immediate:l=!0,fpsLimit:o=void 0,window:s=ct}=t,i=le(!1),a=o?1e3/o:null;let r=0,d=null;function f(v){if(!i.value||!s)return;const _=v-(r||v);if(a&&_<a){d=s.requestAnimationFrame(f);return}e({delta:_,timestamp:v}),r=v,d=s.requestAnimationFrame(f)}function p(){!i.value&&s&&(i.value=!0,d=s.requestAnimationFrame(f))}function m(){i.value=!1,d!=null&&s&&(s.cancelAnimationFrame(d),d=null)}return l&&p(),Go(m),{isActive:Oo(i),pause:m,resume:p}}function Ui(e,t={}){const{window:l=ct}=t,o=Mr(()=>l&&"matchMedia"in l&&typeof l.matchMedia=="function");let s;const i=le(!1),a=f=>{i.value=f.matches},r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",a):s.removeListener(a))},d=pr(()=>{o.value&&(r(),s=l.matchMedia(Je(e)),"addEventListener"in s?s.addEventListener("change",a):s.addListener(a),i.value=s.matches)});return Go(()=>{d(),r(),s=void 0}),i}const Mw={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Fw(e,t={}){function l(r,d){let f=Je(e[r]);return d!=null&&(f=xw(f,d)),typeof f=="number"&&(f=`${f}px`),f}const{window:o=ct}=t;function s(r){return o?o.matchMedia(r).matches:!1}const i=r=>Ui(()=>`(min-width: ${l(r)})`,t),a=Object.keys(e).reduce((r,d)=>(Object.defineProperty(r,d,{get:()=>i(d),enumerable:!0,configurable:!0}),r),{});return Object.assign(a,{greater(r){return Ui(()=>`(min-width: ${l(r,.1)})`,t)},greaterOrEqual:i,smaller(r){return Ui(()=>`(max-width: ${l(r,-.1)})`,t)},smallerOrEqual(r){return Ui(()=>`(max-width: ${l(r)})`,t)},between(r,d){return Ui(()=>`(min-width: ${l(r)}) and (max-width: ${l(d,-.1)})`,t)},isGreater(r){return s(`(min-width: ${l(r,.1)})`)},isGreaterOrEqual(r){return s(`(min-width: ${l(r)})`)},isSmaller(r){return s(`(max-width: ${l(r,-.1)})`)},isSmallerOrEqual(r){return s(`(max-width: ${l(r)})`)},isInBetween(r,d){return s(`(min-width: ${l(r)}) and (max-width: ${l(d,-.1)})`)},current(){const r=Object.keys(e).map(d=>[d,i(d)]);return c(()=>r.filter(([,d])=>d.value).map(([d])=>d))}})}function nm(e,t={}){const{controls:l=!1,navigator:o=Jv}=t,s=Mr(()=>o&&"permissions"in o);let i;const a=typeof e=="string"?{name:e}:e,r=le(),d=()=>{i&&(r.value=i.state)},f=ww(async()=>{if(s.value){if(!i)try{i=await o.permissions.query(a),De(i,"change",d),d()}catch{r.value="prompt"}return i}});return f(),l?{state:r,isSupported:s,query:f}:r}function Iw(e={}){const{navigator:t=Jv,read:l=!1,source:o,copiedDuring:s=1500,legacy:i=!1}=e,a=Mr(()=>t&&"clipboard"in t),r=nm("clipboard-read"),d=nm("clipboard-write"),f=c(()=>a.value||i),p=le(""),m=le(!1),v=Cw(()=>m.value=!1,s);function _(){a.value&&r.value!=="denied"?t.clipboard.readText().then(E=>{p.value=E}):p.value=T()}f.value&&l&&De(["copy","cut"],_);async function b(E=Je(o)){f.value&&E!=null&&(a.value&&d.value!=="denied"?await t.clipboard.writeText(E):$(E),p.value=E,m.value=!0,v.start())}function $(E){const z=document.createElement("textarea");z.value=E??"",z.style.position="absolute",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),z.remove()}function T(){var E,z,j;return(j=(z=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:z.toString())!=null?j:""}return{isSupported:f,text:p,copied:m,copy:b}}function Lw(e){return JSON.parse(JSON.stringify(e))}const Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qa="__vueuse_ssr_handlers__",Rw=Hw();function Hw(){return Qa in Xa||(Xa[Qa]=Xa[Qa]||{}),Xa[Qa]}function zw(e,t){return Rw[e]||t}function Nw(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const qw={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},sm="vueuse-storage";function Vw(e,t,l,o={}){var s;const{flush:i="pre",deep:a=!0,listenToStorageChanges:r=!0,writeDefaults:d=!0,mergeDefaults:f=!1,shallow:p,window:m=ct,eventFilter:v,onError:_=U=>{console.error(U)},initOnMounted:b}=o,$=(p?qo:le)(typeof t=="function"?t():t);if(!l)try{l=zw("getDefaultStorage",()=>{var U;return(U=ct)==null?void 0:U.localStorage})()}catch(U){_(U)}if(!l)return $;const T=Je(t),E=Nw(T),z=(s=o.serializer)!=null?s:qw[E],{pause:j,resume:N}=Sw($,()=>V($.value),{flush:i,deep:a,eventFilter:v});return m&&r&&Ia(()=>{De(m,"storage",J),De(m,sm,q),b&&J()}),b||J(),$;function V(U){try{if(U==null)l.removeItem(e);else{const ie=z.write(U),pe=l.getItem(e);pe!==ie&&(l.setItem(e,ie),m&&m.dispatchEvent(new CustomEvent(sm,{detail:{key:e,oldValue:pe,newValue:ie,storageArea:l}})))}}catch(ie){_(ie)}}function X(U){const ie=U?U.newValue:l.getItem(e);if(ie==null)return d&&T!=null&&l.setItem(e,z.write(T)),T;if(!U&&f){const pe=z.read(ie);return typeof f=="function"?f(pe,T):E==="object"&&!Array.isArray(pe)?{...T,...pe}:pe}else return typeof ie!="string"?ie:z.read(ie)}function q(U){J(U.detail)}function J(U){if(!(U&&U.storageArea!==l)){if(U&&U.key==null){$.value=T;return}if(!(U&&U.key!==e)){j();try{(U==null?void 0:U.newValue)!==z.write($.value)&&($.value=X(U))}catch(ie){_(ie)}finally{U?ut(N):N()}}}}}function Gw(e){return Ui("(prefers-color-scheme: dark)",e)}function eQ(e,t={}){var l,o;const{pointerTypes:s,preventDefault:i,stopPropagation:a,exact:r,onMove:d,onEnd:f,onStart:p,initialValue:m,axis:v="both",draggingElement:_=ct,containerElement:b,handle:$=e}=t,T=le((l=Je(m))!=null?l:{x:0,y:0}),E=le(),z=q=>s?s.includes(q.pointerType):!0,j=q=>{Je(i)&&q.preventDefault(),Je(a)&&q.stopPropagation()},N=q=>{var J;if(!z(q)||Je(r)&&q.target!==Je(e))return;const U=Je(b),ie=(J=U==null?void 0:U.getBoundingClientRect)==null?void 0:J.call(U),pe=Je(e).getBoundingClientRect(),ne={x:q.clientX-(U?pe.left-ie.left+U.scrollLeft:pe.left),y:q.clientY-(U?pe.top-ie.top+U.scrollTop:pe.top)};(p==null?void 0:p(ne,q))!==!1&&(E.value=ne,j(q))},V=q=>{var J;if(!z(q)||!E.value)return;const U=Je(b),ie=(J=U==null?void 0:U.getBoundingClientRect)==null?void 0:J.call(U),pe=Je(e).getBoundingClientRect();let{x:ne,y:be}=T.value;(v==="x"||v==="both")&&(ne=q.clientX-E.value.x,U&&(ne=Math.min(Math.max(0,ne),ie.width+U.scrollLeft-pe.width))),(v==="y"||v==="both")&&(be=q.clientY-E.value.y,U&&(be=Math.min(Math.max(0,be),ie.height+U.scrollTop-pe.height))),T.value={x:ne,y:be},d==null||d(T.value,q),j(q)},X=q=>{z(q)&&E.value&&(E.value=void 0,f==null||f(T.value,q),j(q))};if(Ot){const q={capture:(o=t.capture)!=null?o:!0};De($,"pointerdown",N,q),De(_,"pointermove",V,q),De(_,"pointerup",X,q)}return{...jw(T),position:T,isDragging:c(()=>!!E.value),style:c(()=>`left:${T.value.x}px;top:${T.value.y}px;`)}}function Ww(e,t,l={}){const{window:o=ct,...s}=l;let i;const a=Mr(()=>o&&"ResizeObserver"in o),r=()=>{i&&(i.disconnect(),i=void 0)},d=c(()=>Array.isArray(e)?e.map(m=>rt(m)):[rt(e)]),f=Ae(d,m=>{if(r(),a.value&&o){i=new ResizeObserver(t);for(const v of m)v&&i.observe(v,s)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{r(),f()};return Go(p),{isSupported:a,stop:p}}function Uw(e,t={width:0,height:0},l={}){const{window:o=ct,box:s="content-box"}=l,i=c(()=>{var m,v;return(v=(m=rt(e))==null?void 0:m.namespaceURI)==null?void 0:v.includes("svg")}),a=le(t.width),r=le(t.height),{stop:d}=Ww(e,([m])=>{const v=s==="border-box"?m.borderBoxSize:s==="content-box"?m.contentBoxSize:m.devicePixelContentBoxSize;if(o&&i.value){const _=rt(e);if(_){const b=o.getComputedStyle(_);a.value=Number.parseFloat(b.width),r.value=Number.parseFloat(b.height)}}else if(v){const _=Array.isArray(v)?v:[v];a.value=_.reduce((b,{inlineSize:$})=>b+$,0),r.value=_.reduce((b,{blockSize:$})=>b+$,0)}else a.value=m.contentRect.width,r.value=m.contentRect.height},l);Ia(()=>{const m=rt(e);m&&(a.value="offsetWidth"in m?m.offsetWidth:t.width,r.value="offsetHeight"in m?m.offsetHeight:t.height)});const f=Ae(()=>rt(e),m=>{a.value=m?t.width:0,r.value=m?t.height:0});function p(){d(),f()}return{width:a,height:r,stop:p}}function Kw(e,t,l={}){const{root:o,rootMargin:s="0px",threshold:i=.1,window:a=ct,immediate:r=!0}=l,d=Mr(()=>a&&"IntersectionObserver"in a),f=c(()=>{const b=Je(e);return(Array.isArray(b)?b:[b]).map(rt).filter(hw)});let p=ni;const m=le(r),v=d.value?Ae(()=>[f.value,rt(o),m.value],([b,$])=>{if(p(),!m.value||!b.length)return;const T=new IntersectionObserver(t,{root:rt($),rootMargin:s,threshold:i});b.forEach(E=>E&&T.observe(E)),p=()=>{T.disconnect(),p=ni}},{immediate:r,flush:"post"}):ni,_=()=>{p(),v(),m.value=!1};return Go(_),{isSupported:d,isActive:m,pause(){p(),m.value=!1},resume(){m.value=!0},stop:_}}const lm=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Yw(e,t={}){const{document:l=Yv,autoExit:o=!1}=t,s=c(()=>{var E;return(E=rt(e))!=null?E:l==null?void 0:l.querySelector("html")}),i=le(!1),a=c(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>l&&E in l||s.value&&E in s.value)),r=c(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>l&&E in l||s.value&&E in s.value)),d=c(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>l&&E in l||s.value&&E in s.value)),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>l&&E in l),p=Mr(()=>s.value&&l&&a.value!==void 0&&r.value!==void 0&&d.value!==void 0),m=()=>f?(l==null?void 0:l[f])===s.value:!1,v=()=>{if(d.value){if(l&&l[d.value]!=null)return l[d.value];{const E=s.value;if((E==null?void 0:E[d.value])!=null)return!!E[d.value]}}return!1};async function _(){if(!(!p.value||!i.value)){if(r.value)if((l==null?void 0:l[r.value])!=null)await l[r.value]();else{const E=s.value;(E==null?void 0:E[r.value])!=null&&await E[r.value]()}i.value=!1}}async function b(){if(!p.value||i.value)return;v()&&await _();const E=s.value;a.value&&(E==null?void 0:E[a.value])!=null&&(await E[a.value](),i.value=!0)}async function $(){await(i.value?_():b())}const T=()=>{const E=v();(!E||E&&m())&&(i.value=E)};return De(l,lm,T,!1),De(()=>rt(s),lm,T,!1),o&&Go(_),{isSupported:p,isFullscreen:i,enter:b,exit:_,toggle:$}}function Nt(e,t,l={}){const{window:o=ct}=l;return Vw(e,t,o==null?void 0:o.localStorage,l)}const Jw={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Zw(e={}){const{reactive:t=!1,target:l=ct,aliasMap:o=Jw,passive:s=!0,onEventFired:i=ni}=e,a=g(new Set),r={toJSON(){return{}},current:a},d=t?g(r):r,f=new Set,p=new Set;function m($,T){$ in d&&(t?d[$]=T:d[$].value=T)}function v(){a.clear();for(const $ of p)m($,!1)}function _($,T){var E,z;const j=(E=$.key)==null?void 0:E.toLowerCase(),V=[(z=$.code)==null?void 0:z.toLowerCase(),j].filter(Boolean);j&&(T?a.add(j):a.delete(j));for(const X of V)p.add(X),m(X,T);j==="meta"&&!T?(f.forEach(X=>{a.delete(X),m(X,!1)}),f.clear()):typeof $.getModifierState=="function"&&$.getModifierState("Meta")&&T&&[...a,...V].forEach(X=>f.add(X))}De(l,"keydown",$=>(_($,!0),i($)),{passive:s}),De(l,"keyup",$=>(_($,!1),i($)),{passive:s}),De("blur",v,{passive:!0}),De("focus",v,{passive:!0});const b=new Proxy(d,{get($,T,E){if(typeof T!="string")return Reflect.get($,T,E);if(T=T.toLowerCase(),T in o&&(T=o[T]),!(T in d))if(/[+_-]/.test(T)){const j=T.split(/[+_-]/g).map(N=>N.trim());d[T]=c(()=>j.every(N=>Je(b[N])))}else d[T]=le(!1);const z=Reflect.get($,T,E);return t?Je(z):z}});return b}const Xw={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function tQ(e={}){const{type:t="page",touch:l=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:i=ct,target:a=i,scroll:r=!0,eventFilter:d}=e;let f=null;const p=le(s.x),m=le(s.y),v=le(null),_=typeof t=="function"?t:Xw[t],b=V=>{const X=_(V);f=V,X&&([p.value,m.value]=X,v.value="mouse")},$=V=>{if(V.touches.length>0){const X=_(V.touches[0]);X&&([p.value,m.value]=X,v.value="touch")}},T=()=>{if(!f||!i)return;const V=_(f);f instanceof MouseEvent&&V&&(p.value=V[0]+i.scrollX,m.value=V[1]+i.scrollY)},E=()=>{p.value=s.x,m.value=s.y},z=d?V=>d(()=>b(V),{}):V=>b(V),j=d?V=>d(()=>$(V),{}):V=>$(V),N=d?()=>d(()=>T(),{}):()=>T();if(a){const V={passive:!0};De(a,["mousemove","dragover"],z,V),l&&t!=="movement"&&(De(a,["touchstart","touchmove"],j,V),o&&De(a,"touchend",E,V)),r&&t==="page"&&De(i,"scroll",N,{passive:!0})}return{x:p,y:m,sourceType:v}}function Qw(e,t={}){const l=kw(e),{threshold:o=50,onSwipe:s,onSwipeEnd:i,onSwipeStart:a,disableTextSelect:r=!1}=t,d=g({x:0,y:0}),f=(q,J)=>{d.x=q,d.y=J},p=g({x:0,y:0}),m=(q,J)=>{p.x=q,p.y=J},v=c(()=>d.x-p.x),_=c(()=>d.y-p.y),{max:b,abs:$}=Math,T=c(()=>b($(v.value),$(_.value))>=o),E=le(!1),z=le(!1),j=c(()=>T.value?$(v.value)>$(_.value)?v.value>0?"left":"right":_.value>0?"up":"down":"none"),N=q=>{var J,U,ie;const pe=q.buttons===0,ne=q.buttons===1;return(ie=(U=(J=t.pointerTypes)==null?void 0:J.includes(q.pointerType))!=null?U:pe||ne)!=null?ie:!0},V=[De(e,"pointerdown",q=>{if(!N(q))return;z.value=!0;const J=q.target;J==null||J.setPointerCapture(q.pointerId);const{clientX:U,clientY:ie}=q;f(U,ie),m(U,ie),a==null||a(q)}),De(e,"pointermove",q=>{if(!N(q)||!z.value)return;const{clientX:J,clientY:U}=q;m(J,U),!E.value&&T.value&&(E.value=!0),E.value&&(s==null||s(q))}),De(e,"pointerup",q=>{N(q)&&(E.value&&(i==null||i(q,j.value)),z.value=!1,E.value=!1)})];Ia(()=>{var q,J,U,ie,pe,ne,be,Se;(J=(q=l.value)==null?void 0:q.style)==null||J.setProperty("touch-action","none"),r&&((ie=(U=l.value)==null?void 0:U.style)==null||ie.setProperty("-webkit-user-select","none"),(ne=(pe=l.value)==null?void 0:pe.style)==null||ne.setProperty("-ms-user-select","none"),(Se=(be=l.value)==null?void 0:be.style)==null||Se.setProperty("user-select","none"))});const X=()=>V.forEach(q=>q());return{isSwiping:Oo(E),direction:Oo(j),posStart:Oo(d),posEnd:Oo(p),distanceX:v,distanceY:_,stop:X}}let e2=0;function nQ(e,t={}){const l=le(!1),{document:o=Yv,immediate:s=!0,manual:i=!1,id:a=`vueuse_styletag_${++e2}`}=t,r=le(e);let d=()=>{};const f=()=>{if(!o)return;const m=o.getElementById(a)||o.createElement("style");m.isConnected||(m.id=a,t.media&&(m.media=t.media),o.head.appendChild(m)),!l.value&&(d=Ae(r,v=>{m.textContent=v},{immediate:!0}),l.value=!0)},p=()=>{!o||!l.value||(d(),o.head.removeChild(o.getElementById(a)),l.value=!1)};return s&&!i&&Ia(f),i||Go(p),{id:a,css:r,unload:p,load:f,isLoaded:Oo(l)}}function t2(e={}){const{controls:t=!1,offset:l=0,immediate:o=!0,interval:s="requestAnimationFrame",callback:i}=e,a=le(hu()+l),r=()=>a.value=hu()+l,d=i?()=>{r(),i(a.value)}:r,f=s==="requestAnimationFrame"?Zv(d,{immediate:o}):Tw(d,s,{immediate:o});return t?{timestamp:a,...f}:a}function Ro(e,t,l,o={}){var s,i,a;const{clone:r=!1,passive:d=!1,eventName:f,deep:p=!1,defaultValue:m,shouldEmit:v}=o,_=jt(),b=l||(_==null?void 0:_.emit)||((s=_==null?void 0:_.$emit)==null?void 0:s.bind(_))||((a=(i=_==null?void 0:_.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(_==null?void 0:_.proxy));let $=f;t||(t="modelValue"),$=$||`update:${t.toString()}`;const T=j=>r?typeof r=="function"?r(j):Lw(j):j,E=()=>mw(e[t])?T(e[t]):m,z=j=>{v?v(j)&&b($,j):b($,j)};if(d){const j=E(),N=le(j);let V=!1;return Ae(()=>e[t],X=>{V||(V=!0,N.value=T(X),ut(()=>V=!1))}),Ae(N,X=>{!V&&(X!==e[t]||p)&&z(X)},{deep:p}),N}else return c({get(){return E()},set(j){z(j)}})}function sQ(e={}){const{window:t=ct}=e;if(!t)return le(!1);const l=le(t.document.hasFocus());return De(t,"blur",()=>{l.value=!1}),De(t,"focus",()=>{l.value=!0}),l}function n2(e={}){const{window:t=ct,initialWidth:l=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:i=!0}=e,a=le(l),r=le(o),d=()=>{t&&(i?(a.value=t.innerWidth,r.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(d(),Ia(d),De("resize",d,{passive:!0}),s){const f=Ui("(orientation: portrait)");Ae(f,()=>d())}return{width:a,height:r}}function s2(){return Xv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const l2=typeof Proxy=="function",o2="devtools-plugin:setup",i2="plugin:settings:set";let br,vu;function r2(){var e;return br!==void 0||(typeof window<"u"&&window.performance?(br=!0,vu=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(br=!0,vu=global.perf_hooks.performance):br=!1),br}function a2(){return r2()?vu.now():Date.now()}class c2{constructor(t,l){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=l;const o={};if(t.settings)for(const a in t.settings){const r=t.settings[a];o[a]=r.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},o);try{const a=localStorage.getItem(s),r=JSON.parse(a);Object.assign(i,r)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(s,JSON.stringify(a))}catch{}i=a},now(){return a2()}},l&&l.on(i2,(a,r)=>{a===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(a,r)=>this.target?this.target.on[r]:(...d)=>{this.onQueue.push({method:r,args:d})}}),this.proxiedTarget=new Proxy({},{get:(a,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...d)=>(this.targetQueue.push({method:r,args:d,resolve:()=>{}}),this.fallbacks[r](...d)):(...d)=>new Promise(f=>{this.targetQueue.push({method:r,args:d,resolve:f})})})}async setRealTarget(t){this.target=t;for(const l of this.onQueue)this.target.on[l.method](...l.args);for(const l of this.targetQueue)l.resolve(await this.target[l.method](...l.args))}}function d2(e,t){const l=e,o=Xv(),s=s2(),i=l2&&l.enableEarlyProxy;if(s&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(o2,e,t);else{const a=i?new c2(l,s):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:l,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ei=typeof window<"u";function u2(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const qe=Object.assign;function Td(e,t){const l={};for(const o in t){const s=t[o];l[o]=zt(s)?s.map(e):e(s)}return l}const oa=()=>{},zt=Array.isArray;function Re(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const f2=/\/$/,p2=e=>e.replace(f2,"");function Cd(e,t,l="/"){let o,s={},i="",a="";const r=t.indexOf("#");let d=t.indexOf("?");return r<d&&r>=0&&(d=-1),d>-1&&(o=t.slice(0,d),i=t.slice(d+1,r>-1?r:t.length),s=e(i)),r>-1&&(o=o||t.slice(0,r),a=t.slice(r,t.length)),o=v2(o??t,l),{fullPath:o+(i&&"?")+i+a,path:o,query:s,hash:a}}function m2(e,t){const l=t.query?e(t.query):"";return t.path+(l&&"?")+l+(t.hash||"")}function om(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function im(e,t,l){const o=t.matched.length-1,s=l.matched.length-1;return o>-1&&o===s&&Oi(t.matched[o],l.matched[s])&&Qv(t.params,l.params)&&e(t.query)===e(l.query)&&t.hash===l.hash}function Oi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qv(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(!h2(e[l],t[l]))return!1;return!0}function h2(e,t){return zt(e)?rm(e,t):zt(t)?rm(t,e):e===t}function rm(e,t){return zt(t)?e.length===t.length&&e.every((l,o)=>l===t[o]):e.length===1&&e[0]===t}function v2(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Re(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const l=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let i=l.length-1,a,r;for(a=0;a<o.length;a++)if(r=o[a],r!==".")if(r==="..")i>1&&i--;else break;return l.slice(0,i).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var ya;(function(e){e.pop="pop",e.push="push"})(ya||(ya={}));var ia;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ia||(ia={}));function g2(e){if(!e)if(ei){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),p2(e)}const _2=/^[^#]+#/;function y2(e,t){return e.replace(_2,"#")+t}function b2(e,t){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-l.left-(t.left||0),top:o.top-l.top-(t.top||0)}}const id=()=>({left:window.pageXOffset,top:window.pageYOffset});function w2(e){let t;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(o&&i){Re(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Re(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!s){Re(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=b2(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function am(e,t){return(history.state?history.state.position-t:-1)+e}const gu=new Map;function x2(e,t){gu.set(e,t)}function k2(e){const t=gu.get(e);return gu.delete(e),t}let $2=()=>location.protocol+"//"+location.host;function eg(e,t){const{pathname:l,search:o,hash:s}=t,i=e.indexOf("#");if(i>-1){let r=s.includes(e.slice(i))?e.slice(i).length:1,d=s.slice(r);return d[0]!=="/"&&(d="/"+d),om(d,"")}return om(l,e)+o+s}function S2(e,t,l,o){let s=[],i=[],a=null;const r=({state:v})=>{const _=eg(e,location),b=l.value,$=t.value;let T=0;if(v){if(l.value=_,t.value=v,a&&a===b){a=null;return}T=$?v.position-$.position:0}else o(_);s.forEach(E=>{E(l.value,b,{delta:T,type:ya.pop,direction:T?T>0?ia.forward:ia.back:ia.unknown})})};function d(){a=l.value}function f(v){s.push(v);const _=()=>{const b=s.indexOf(v);b>-1&&s.splice(b,1)};return i.push(_),_}function p(){const{history:v}=window;v.state&&v.replaceState(qe({},v.state,{scroll:id()}),"")}function m(){for(const v of i)v();i=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:d,listen:f,destroy:m}}function cm(e,t,l,o=!1,s=!1){return{back:e,current:t,forward:l,replaced:o,position:window.history.length,scroll:s?id():null}}function j2(e){const{history:t,location:l}=window,o={value:eg(e,l)},s={value:t.state};s.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(d,f,p){const m=e.indexOf("#"),v=m>-1?(l.host&&document.querySelector("base")?e:e.slice(m))+d:$2()+e+d;try{t[p?"replaceState":"pushState"](f,"",v),s.value=f}catch(_){Re("Error with push/replace State",_),l[p?"replace":"assign"](v)}}function a(d,f){const p=qe({},t.state,cm(s.value.back,d,s.value.forward,!0),f,{position:s.value.position});i(d,p,!0),o.value=d}function r(d,f){const p=qe({},s.value,t.state,{forward:d,scroll:id()});t.state||Re(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(p.current,p,!0);const m=qe({},cm(o.value,d,null),{position:p.position+1},f);i(d,m,!1),o.value=d}return{location:o,state:s,push:r,replace:a}}function P2(e){e=g2(e);const t=j2(e),l=S2(e,t.state,t.location,t.replace);function o(i,a=!0){a||l.pauseListeners(),history.go(i)}const s=qe({location:"",base:e,go:o,createHref:y2.bind(null,e)},t,l);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function T2(e){return typeof e=="string"||e&&typeof e=="object"}function tg(e){return typeof e=="string"||typeof e=="symbol"}const ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ng=Symbol("navigation failure");var dm;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(dm||(dm={}));const C2={1({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},2({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${A2(t)}" via a navigation guard.`},4({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},8({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},16({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Dr(e,t){return qe(new Error(C2[e](t)),{type:e,[ng]:!0},t)}function Uo(e,t){return e instanceof Error&&ng in e&&(t==null||!!(e.type&t))}const E2=["params","query","hash"];function A2(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const l of E2)l in e&&(t[l]=e[l]);return JSON.stringify(t,null,2)}const um="[^/]+?",O2={sensitive:!1,strict:!1,start:!0,end:!0},D2=/[.+*?^${}()[\]/\\]/g;function B2(e,t){const l=qe({},O2,t),o=[];let s=l.start?"^":"";const i=[];for(const f of e){const p=f.length?[]:[90];l.strict&&!f.length&&(s+="/");for(let m=0;m<f.length;m++){const v=f[m];let _=40+(l.sensitive?.25:0);if(v.type===0)m||(s+="/"),s+=v.value.replace(D2,"\\$&"),_+=40;else if(v.type===1){const{value:b,repeatable:$,optional:T,regexp:E}=v;i.push({name:b,repeatable:$,optional:T});const z=E||um;if(z!==um){_+=10;try{new RegExp(`(${z})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${b}" (${z}): `+N.message)}}let j=$?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;m||(j=T&&f.length<2?`(?:/${j})`:"/"+j),T&&(j+="?"),s+=j,_+=20,T&&(_+=-8),$&&(_+=-20),z===".*"&&(_+=-50)}p.push(_)}o.push(p)}if(l.strict&&l.end){const f=o.length-1;o[f][o[f].length-1]+=.7000000000000001}l.strict||(s+="/?"),l.end?s+="$":l.strict&&(s+="(?:/|$)");const a=new RegExp(s,l.sensitive?"":"i");function r(f){const p=f.match(a),m={};if(!p)return null;for(let v=1;v<p.length;v++){const _=p[v]||"",b=i[v-1];m[b.name]=_&&b.repeatable?_.split("/"):_}return m}function d(f){let p="",m=!1;for(const v of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const _ of v)if(_.type===0)p+=_.value;else if(_.type===1){const{value:b,repeatable:$,optional:T}=_,E=b in f?f[b]:"";if(zt(E)&&!$)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const z=zt(E)?E.join("/"):E;if(!z)if(T)v.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);p+=z}}return p||"/"}return{re:a,score:o,keys:i,parse:r,stringify:d}}function M2(e,t){let l=0;for(;l<e.length&&l<t.length;){const o=t[l]-e[l];if(o)return o;l++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function F2(e,t){let l=0;const o=e.score,s=t.score;for(;l<o.length&&l<s.length;){const i=M2(o[l],s[l]);if(i)return i;l++}if(Math.abs(s.length-o.length)===1){if(fm(o))return 1;if(fm(s))return-1}return s.length-o.length}function fm(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const I2={type:0,value:""},L2=/[a-zA-Z0-9_]/;function R2(e){if(!e)return[[]];if(e==="/")return[[I2]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(_){throw new Error(`ERR (${l})/"${f}": ${_}`)}let l=0,o=l;const s=[];let i;function a(){i&&s.push(i),i=[]}let r=0,d,f="",p="";function m(){f&&(l===0?i.push({type:0,value:f}):l===1||l===2||l===3?(i.length>1&&(d==="*"||d==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:p,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):t("Invalid state to consume buffer"),f="")}function v(){f+=d}for(;r<e.length;){if(d=e[r++],d==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:d==="/"?(f&&m(),a()):d===":"?(m(),l=1):v();break;case 4:v(),l=o;break;case 1:d==="("?l=2:L2.test(d)?v():(m(),l=0,d!=="*"&&d!=="?"&&d!=="+"&&r--);break;case 2:d===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+d:l=3:p+=d;break;case 3:m(),l=0,d!=="*"&&d!=="?"&&d!=="+"&&r--,p="";break;default:t("Unknown state");break}}return l===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),a(),s}function H2(e,t,l){const o=B2(R2(e.path),l);{const i=new Set;for(const a of o.keys)i.has(a.name)&&Re(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(a.name)}const s=qe(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function z2(e,t){const l=[],o=new Map;t=hm({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function i(p,m,v){const _=!v,b=N2(p);W2(b,m),b.aliasOf=v&&v.record;const $=hm(t,p),T=[b];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const N of j)T.push(qe({},b,{components:v?v.record.components:b.components,path:N,aliasOf:v?v.record:b}))}let E,z;for(const j of T){const{path:N}=j;if(m&&N[0]!=="/"){const V=m.record.path,X=V[V.length-1]==="/"?"":"/";j.path=m.record.path+(N&&X+N)}if(j.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(E=H2(j,m,$),m&&N[0]==="/"&&U2(E,m),v?(v.alias.push(E),G2(v,E)):(z=z||E,z!==E&&z.alias.push(E),_&&p.name&&!mm(E)&&a(p.name)),b.children){const V=b.children;for(let X=0;X<V.length;X++)i(V[X],E,v&&v.children[X])}v=v||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&d(E)}return z?()=>{a(z)}:oa}function a(p){if(tg(p)){const m=o.get(p);m&&(o.delete(p),l.splice(l.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=l.indexOf(p);m>-1&&(l.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function r(){return l}function d(p){let m=0;for(;m<l.length&&F2(p,l[m])>=0&&(p.record.path!==l[m].record.path||!sg(p,l[m]));)m++;l.splice(m,0,p),p.record.name&&!mm(p)&&o.set(p.record.name,p)}function f(p,m){let v,_={},b,$;if("name"in p&&p.name){if(v=o.get(p.name),!v)throw Dr(1,{location:p});{const z=Object.keys(p.params||{}).filter(j=>!v.keys.find(N=>N.name===j));z.length&&Re(`Discarded invalid param(s) "${z.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}$=v.record.name,_=qe(pm(m.params,v.keys.filter(z=>!z.optional).map(z=>z.name)),p.params&&pm(p.params,v.keys.map(z=>z.name))),b=v.stringify(_)}else if("path"in p)b=p.path,b.startsWith("/")||Re(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),v=l.find(z=>z.re.test(b)),v&&(_=v.parse(b),$=v.record.name);else{if(v=m.name?o.get(m.name):l.find(z=>z.re.test(m.path)),!v)throw Dr(1,{location:p,currentLocation:m});$=v.record.name,_=qe({},m.params,p.params),b=v.stringify(_)}const T=[];let E=v;for(;E;)T.unshift(E.record),E=E.parent;return{name:$,path:b,params:_,matched:T,meta:V2(T)}}return e.forEach(p=>i(p)),{addRoute:i,resolve:f,removeRoute:a,getRoutes:r,getRecordMatcher:s}}function pm(e,t){const l={};for(const o of t)o in e&&(l[o]=e[o]);return l}function N2(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:q2(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function q2(e){const t={},l=e.props||!1;if("component"in e)t.default=l;else for(const o in e.components)t[o]=typeof l=="object"?l[o]:l;return t}function mm(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function V2(e){return e.reduce((t,l)=>qe(t,l.meta),{})}function hm(e,t){const l={};for(const o in e)l[o]=o in t?t[o]:e[o];return l}function _u(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function G2(e,t){for(const l of e.keys)if(!l.optional&&!t.keys.find(_u.bind(null,l)))return Re(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${l.name}"`);for(const l of t.keys)if(!l.optional&&!e.keys.find(_u.bind(null,l)))return Re(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${l.name}"`)}function W2(e,t){t&&t.record.name&&!e.name&&!e.path&&Re(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function U2(e,t){for(const l of t.keys)if(!e.keys.find(_u.bind(null,l)))return Re(`Absolute path "${e.record.path}" must have the exact same param named "${l.name}" as its parent "${t.record.path}".`)}function sg(e,t){return t.children.some(l=>l===e||sg(e,l))}const lg=/#/g,K2=/&/g,Y2=/\//g,J2=/=/g,Z2=/\?/g,og=/\+/g,X2=/%5B/g,Q2=/%5D/g,ig=/%5E/g,ex=/%60/g,rg=/%7B/g,tx=/%7C/g,ag=/%7D/g,nx=/%20/g;function $f(e){return encodeURI(""+e).replace(tx,"|").replace(X2,"[").replace(Q2,"]")}function sx(e){return $f(e).replace(rg,"{").replace(ag,"}").replace(ig,"^")}function yu(e){return $f(e).replace(og,"%2B").replace(nx,"+").replace(lg,"%23").replace(K2,"%26").replace(ex,"`").replace(rg,"{").replace(ag,"}").replace(ig,"^")}function lx(e){return yu(e).replace(J2,"%3D")}function ox(e){return $f(e).replace(lg,"%23").replace(Z2,"%3F")}function ix(e){return e==null?"":ox(e).replace(Y2,"%2F")}function ba(e){try{return decodeURIComponent(""+e)}catch{Re(`Error decoding "${e}". Using original value`)}return""+e}function rx(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const i=o[s].replace(og," "),a=i.indexOf("="),r=ba(a<0?i:i.slice(0,a)),d=a<0?null:ba(i.slice(a+1));if(r in t){let f=t[r];zt(f)||(f=t[r]=[f]),f.push(d)}else t[r]=d}return t}function vm(e){let t="";for(let l in e){const o=e[l];if(l=lx(l),o==null){o!==void 0&&(t+=(t.length?"&":"")+l);continue}(zt(o)?o.map(i=>i&&yu(i)):[o&&yu(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+l,i!=null&&(t+="="+i))})}return t}function ax(e){const t={};for(const l in e){const o=e[l];o!==void 0&&(t[l]=zt(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const cx=Symbol("router view location matched"),gm=Symbol("router view depth"),rd=Symbol("router"),cg=Symbol("route location"),bu=Symbol("router view location");function Vr(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function l(){e=[]}return{add:t,list:()=>e.slice(),reset:l}}function gi(e,t,l,o,s){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((a,r)=>{const d=m=>{m===!1?r(Dr(4,{from:l,to:t})):m instanceof Error?r(m):T2(m)?r(Dr(2,{from:t,to:m})):(i&&o.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},f=e.call(o&&o.instances[s],t,l,dx(d,t,l));let p=Promise.resolve(f);if(e.length<3&&(p=p.then(d)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof f=="object"&&"then"in f)p=p.then(v=>d._called?v:(Re(m),Promise.reject(new Error("Invalid navigation guard"))));else if(f!==void 0&&!d._called){Re(m),r(new Error("Invalid navigation guard"));return}}p.catch(m=>r(m))})}function dx(e,t,l){let o=0;return function(){o++===1&&Re(`The "next" callback was called more than once in one navigation guard when going from "${l.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Ed(e,t,l,o){const s=[];for(const i of e){!i.components&&!i.children.length&&Re(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const a in i.components){let r=i.components[a];{if(!r||typeof r!="object"&&typeof r!="function")throw Re(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(r)}".`),new Error("Invalid route component");if("then"in r){Re(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const d=r;r=()=>d}else r.__asyncLoader&&!r.__warnedDefineAsync&&(r.__warnedDefineAsync=!0,Re(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(ux(r)){const f=(r.__vccOpts||r)[t];f&&s.push(gi(f,l,o,i,a))}else{let d=r();"catch"in d||(Re(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),d=Promise.resolve(d)),s.push(()=>d.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const p=u2(f)?f.default:f;i.components[a]=p;const v=(p.__vccOpts||p)[t];return v&&gi(v,l,o,i,a)()}))}}}return s}function ux(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _m(e){const t=u(rd),l=u(cg),o=c(()=>t.resolve(y(e.to))),s=c(()=>{const{matched:d}=o.value,{length:f}=d,p=d[f-1],m=l.matched;if(!p||!m.length)return-1;const v=m.findIndex(Oi.bind(null,p));if(v>-1)return v;const _=ym(d[f-2]);return f>1&&ym(p)===_&&m[m.length-1].path!==_?m.findIndex(Oi.bind(null,d[f-2])):v}),i=c(()=>s.value>-1&&hx(l.params,o.value.params)),a=c(()=>s.value>-1&&s.value===l.matched.length-1&&Qv(l.params,o.value.params));function r(d={}){return mx(d)?t[y(e.replace)?"replace":"push"](y(e.to)).catch(oa):Promise.resolve()}if(ei){const d=jt();if(d){const f={route:o.value,isActive:i.value,isExactActive:a.value};d.__vrl_devtools=d.__vrl_devtools||[],d.__vrl_devtools.push(f),pr(()=>{f.route=o.value,f.isActive=i.value,f.isExactActive=a.value},{flush:"post"})}}return{route:o,href:c(()=>o.value.href),isActive:i,isExactActive:a,navigate:r}}const fx=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_m,setup(e,{slots:t}){const l=g(_m(e)),{options:o}=u(rd),s=c(()=>({[bm(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[bm(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const i=t.default&&t.default(l);return e.custom?i:At("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:s.value},i)}}}),px=fx;function mx(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hx(e,t){for(const l in t){const o=t[l],s=e[l];if(typeof o=="string"){if(o!==s)return!1}else if(!zt(s)||s.length!==o.length||o.some((i,a)=>i!==s[a]))return!1}return!0}function ym(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bm=(e,t,l)=>e??t??l,vx=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:l}){_x();const o=u(bu),s=c(()=>e.route||o.value),i=u(gm,0),a=c(()=>{let f=y(i);const{matched:p}=s.value;let m;for(;(m=p[f])&&!m.components;)f++;return f}),r=c(()=>s.value.matched[a.value]);A(gm,c(()=>a.value+1)),A(cx,r),A(bu,s);const d=le();return Ae(()=>[d.value,r.value,e.name],([f,p,m],[v,_,b])=>{p&&(p.instances[m]=f,_&&_!==p&&f&&f===v&&(p.leaveGuards.size||(p.leaveGuards=_.leaveGuards),p.updateGuards.size||(p.updateGuards=_.updateGuards))),f&&p&&(!_||!Oi(p,_)||!v)&&(p.enterCallbacks[m]||[]).forEach($=>$(f))},{flush:"post"}),()=>{const f=s.value,p=e.name,m=r.value,v=m&&m.components[p];if(!v)return wm(l.default,{Component:v,route:f});const _=m.props[p],b=_?_===!0?f.params:typeof _=="function"?_(f):_:null,T=At(v,qe({},b,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(m.instances[p]=null)},ref:d}));if(ei&&T.ref){const E={depth:a.value,name:m.name,path:m.path,meta:m.meta};(zt(T.ref)?T.ref.map(j=>j.i):[T.ref.i]).forEach(j=>{j.__vrv_devtools=E})}return wm(l.default,{Component:T,route:f})||T}}});function wm(e,t){if(!e)return null;const l=e(t);return l.length===1?l[0]:l}const gx=vx;function _x(){const e=jt(),t=e.parent&&e.parent.type.name,l=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof l=="object"&&l.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Re(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Gr(e,t){const l=qe({},e,{matched:e.matched.map(o=>Px(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:l}}}function ec(e){return{_custom:{display:e}}}let yx=0;function bx(e,t,l){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=yx++;d2({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((p,m)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Gr(t.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:p,componentInstance:m})=>{if(m.__vrv_devtools){const v=m.__vrv_devtools;p.tags.push({label:(v.name?`${v.name.toString()}: `:"")+v.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:dg})}zt(m.__vrl_devtools)&&(m.__devtoolsApi=s,m.__vrl_devtools.forEach(v=>{let _=pg,b="";v.isExactActive?(_=fg,b="This is exactly active"):v.isActive&&(_=ug,b="This link is active"),p.tags.push({label:v.route.path,textColor:0,tooltip:b,backgroundColor:_})}))}),Ae(t.currentRoute,()=>{d(),s.notifyComponentUpdate(),s.sendInspectorTree(r),s.sendInspectorState(r)});const i="router:navigations:"+o;s.addTimelineLayer({id:i,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((p,m)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:s.now(),data:{error:p},groupId:m.meta.__navigationId}})});let a=0;t.beforeEach((p,m)=>{const v={guard:ec("beforeEach"),from:Gr(m,"Current Location during this navigation"),to:Gr(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:p.fullPath,data:v,groupId:p.meta.__navigationId}})}),t.afterEach((p,m,v)=>{const _={guard:ec("afterEach")};v?(_.failure={_custom:{type:Error,readOnly:!0,display:v?v.message:"",tooltip:"Navigation Failure",value:v}},_.status=ec("❌")):_.status=ec("✅"),_.from=Gr(m,"Current Location during this navigation"),_.to=Gr(p,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:p.fullPath,time:s.now(),data:_,logType:v?"warning":"default",groupId:p.meta.__navigationId}})});const r="router-inspector:"+o;s.addInspector({id:r,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function d(){if(!f)return;const p=f;let m=l.getRoutes().filter(v=>!v.parent||!v.parent.record.components);m.forEach(vg),p.filter&&(m=m.filter(v=>wu(v,p.filter.toLowerCase()))),m.forEach(v=>hg(v,t.currentRoute.value)),p.rootNodes=m.map(mg)}let f;s.on.getInspectorTree(p=>{f=p,p.app===e&&p.inspectorId===r&&d()}),s.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===r){const v=l.getRoutes().find(_=>_.record.__vd_id===p.nodeId);v&&(p.state={options:xx(v)})}}),s.sendInspectorTree(r),s.sendInspectorState(r)})}function wx(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function xx(e){const{record:t}=e,l=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&l.push({editable:!1,key:"name",value:t.name}),l.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&l.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${wx(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&l.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&l.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&l.push({editable:!1,key:"meta",value:e.record.meta}),l.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),l}const dg=15485081,ug=2450411,fg=8702998,kx=2282478,pg=16486972,$x=6710886;function mg(e){const t=[],{record:l}=e;l.name!=null&&t.push({label:String(l.name),textColor:0,backgroundColor:kx}),l.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:pg}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:dg}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:fg}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:ug}),l.redirect&&t.push({label:typeof l.redirect=="string"?`redirect: ${l.redirect}`:"redirects",textColor:16777215,backgroundColor:$x});let o=l.__vd_id;return o==null&&(o=String(Sx++),l.__vd_id=o),{id:o,label:l.path,tags:t,children:e.children.map(mg)}}let Sx=0;const jx=/^\/(.*)\/([a-z]*)$/;function hg(e,t){const l=t.matched.length&&Oi(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=l,l||(e.__vd_active=t.matched.some(o=>Oi(o,e.record))),e.children.forEach(o=>hg(o,t))}function vg(e){e.__vd_match=!1,e.children.forEach(vg)}function wu(e,t){const l=String(e.re).match(jx);if(e.__vd_match=!1,!l||l.length<3)return!1;if(new RegExp(l[1].replace(/\$$/,""),l[2]).test(t))return e.children.forEach(a=>wu(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const s=e.record.path.toLowerCase(),i=ba(s);return!t.startsWith("/")&&(i.includes(t)||s.includes(t))||i.startsWith(t)||s.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>wu(a,t))}function Px(e,t){const l={};for(const o in e)t.includes(o)||(l[o]=e[o]);return l}function Tx(e){const t=z2(e.routes,e),l=e.parseQuery||rx,o=e.stringifyQuery||vm,s=e.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Vr(),a=Vr(),r=Vr(),d=qo(ui);let f=ui;ei&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Td.bind(null,W=>""+W),m=Td.bind(null,ix),v=Td.bind(null,ba);function _(W,de){let ce,me;return tg(W)?(ce=t.getRecordMatcher(W),me=de):me=W,t.addRoute(me,ce)}function b(W){const de=t.getRecordMatcher(W);de?t.removeRoute(de):Re(`Cannot remove non-existent route "${String(W)}"`)}function $(){return t.getRoutes().map(W=>W.record)}function T(W){return!!t.getRecordMatcher(W)}function E(W,de){if(de=qe({},de||d.value),typeof W=="string"){const w=Cd(l,W,de.path),P=t.resolve({path:w.path},de),G=s.createHref(w.fullPath);return G.startsWith("//")?Re(`Location "${W}" resolved to "${G}". A resolved location cannot start with multiple slashes.`):P.matched.length||Re(`No match found for location with path "${W}"`),qe(w,P,{params:v(P.params),hash:ba(w.hash),redirectedFrom:void 0,href:G})}let ce;if("path"in W)"params"in W&&!("name"in W)&&Object.keys(W.params).length&&Re(`Path "${W.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),ce=qe({},W,{path:Cd(l,W.path,de.path).path});else{const w=qe({},W.params);for(const P in w)w[P]==null&&delete w[P];ce=qe({},W,{params:m(w)}),de.params=m(de.params)}const me=t.resolve(ce,de),Ee=W.hash||"";Ee&&!Ee.startsWith("#")&&Re(`A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`),me.params=p(v(me.params));const Ue=m2(o,qe({},W,{hash:sx(Ee),path:me.path})),Be=s.createHref(Ue);return Be.startsWith("//")?Re(`Location "${W}" resolved to "${Be}". A resolved location cannot start with multiple slashes.`):me.matched.length||Re(`No match found for location with path "${"path"in W?W.path:W}"`),qe({fullPath:Ue,hash:Ee,query:o===vm?ax(W.query):W.query||{}},me,{redirectedFrom:void 0,href:Be})}function z(W){return typeof W=="string"?Cd(l,W,d.value.path):qe({},W)}function j(W,de){if(f!==W)return Dr(8,{from:de,to:W})}function N(W){return q(W)}function V(W){return N(qe(z(W),{replace:!0}))}function X(W){const de=W.matched[W.matched.length-1];if(de&&de.redirect){const{redirect:ce}=de;let me=typeof ce=="function"?ce(W):ce;if(typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=z(me):{path:me},me.params={}),!("path"in me)&&!("name"in me))throw Re(`Invalid redirect found:
${JSON.stringify(me,null,2)}
 when navigating to "${W.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return qe({query:W.query,hash:W.hash,params:"path"in me?{}:W.params},me)}}function q(W,de){const ce=f=E(W),me=d.value,Ee=W.state,Ue=W.force,Be=W.replace===!0,w=X(ce);if(w)return q(qe(z(w),{state:typeof w=="object"?qe({},Ee,w.state):Ee,force:Ue,replace:Be}),de||ce);const P=ce;P.redirectedFrom=de;let G;return!Ue&&im(o,me,ce)&&(G=Dr(16,{to:P,from:me}),qt(me,me,!0,!1)),(G?Promise.resolve(G):ie(P,me)).catch(K=>Uo(K)?Uo(K,2)?K:We(K):ve(K,P,me)).then(K=>{if(K){if(Uo(K,2))return im(o,E(K.to),P)&&de&&(de._count=de._count?de._count+1:1)>30?(Re(`Detected a possibly infinite redirection in a navigation guard when going from "${me.fullPath}" to "${P.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):q(qe({replace:Be},z(K.to),{state:typeof K.to=="object"?qe({},Ee,K.to.state):Ee,force:Ue}),de||P)}else K=ne(P,me,!0,Be,Ee);return pe(P,me,K),K})}function J(W,de){const ce=j(W,de);return ce?Promise.reject(ce):Promise.resolve()}function U(W){const de=Mo.values().next().value;return de&&typeof de.runWithContext=="function"?de.runWithContext(W):W()}function ie(W,de){let ce;const[me,Ee,Ue]=Cx(W,de);ce=Ed(me.reverse(),"beforeRouteLeave",W,de);for(const w of me)w.leaveGuards.forEach(P=>{ce.push(gi(P,W,de))});const Be=J.bind(null,W,de);return ce.push(Be),Vt(ce).then(()=>{ce=[];for(const w of i.list())ce.push(gi(w,W,de));return ce.push(Be),Vt(ce)}).then(()=>{ce=Ed(Ee,"beforeRouteUpdate",W,de);for(const w of Ee)w.updateGuards.forEach(P=>{ce.push(gi(P,W,de))});return ce.push(Be),Vt(ce)}).then(()=>{ce=[];for(const w of Ue)if(w.beforeEnter)if(zt(w.beforeEnter))for(const P of w.beforeEnter)ce.push(gi(P,W,de));else ce.push(gi(w.beforeEnter,W,de));return ce.push(Be),Vt(ce)}).then(()=>(W.matched.forEach(w=>w.enterCallbacks={}),ce=Ed(Ue,"beforeRouteEnter",W,de),ce.push(Be),Vt(ce))).then(()=>{ce=[];for(const w of a.list())ce.push(gi(w,W,de));return ce.push(Be),Vt(ce)}).catch(w=>Uo(w,8)?w:Promise.reject(w))}function pe(W,de,ce){r.list().forEach(me=>U(()=>me(W,de,ce)))}function ne(W,de,ce,me,Ee){const Ue=j(W,de);if(Ue)return Ue;const Be=de===ui,w=ei?history.state:{};ce&&(me||Be?s.replace(W.fullPath,qe({scroll:Be&&w&&w.scroll},Ee)):s.push(W.fullPath,Ee)),d.value=W,qt(W,de,ce,Be),We()}let be;function Se(){be||(be=s.listen((W,de,ce)=>{if(!Ii.listening)return;const me=E(W),Ee=X(me);if(Ee){q(qe(Ee,{replace:!0}),me).catch(oa);return}f=me;const Ue=d.value;ei&&x2(am(Ue.fullPath,ce.delta),id()),ie(me,Ue).catch(Be=>Uo(Be,12)?Be:Uo(Be,2)?(q(Be.to,me).then(w=>{Uo(w,20)&&!ce.delta&&ce.type===ya.pop&&s.go(-1,!1)}).catch(oa),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),ve(Be,me,Ue))).then(Be=>{Be=Be||ne(me,Ue,!1),Be&&(ce.delta&&!Uo(Be,8)?s.go(-ce.delta,!1):ce.type===ya.pop&&Uo(Be,20)&&s.go(-1,!1)),pe(me,Ue,Be)}).catch(oa)}))}let Ge=Vr(),Te=Vr(),ue;function ve(W,de,ce){We(W);const me=Te.list();return me.length?me.forEach(Ee=>Ee(W,de,ce)):(Re("uncaught error during route navigation:"),console.error(W)),Promise.reject(W)}function Fe(){return ue&&d.value!==ui?Promise.resolve():new Promise((W,de)=>{Ge.add([W,de])})}function We(W){return ue||(ue=!W,Se(),Ge.list().forEach(([de,ce])=>W?ce(W):de()),Ge.reset()),W}function qt(W,de,ce,me){const{scrollBehavior:Ee}=e;if(!ei||!Ee)return Promise.resolve();const Ue=!ce&&k2(am(W.fullPath,0))||(me||!ce)&&history.state&&history.state.scroll||null;return ut().then(()=>Ee(W,de,Ue)).then(Be=>Be&&w2(Be)).catch(Be=>ve(Be,W,de))}const ft=W=>s.go(W);let Tt;const Mo=new Set,Ii={currentRoute:d,listening:!0,addRoute:_,removeRoute:b,hasRoute:T,getRoutes:$,resolve:E,options:e,push:N,replace:V,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:i.add,beforeResolve:a.add,afterEach:r.add,onError:Te.add,isReady:Fe,install(W){const de=this;W.component("RouterLink",px),W.component("RouterView",gx),W.config.globalProperties.$router=de,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>y(d)}),ei&&!Tt&&d.value===ui&&(Tt=!0,N(s.location).catch(Ee=>{Re("Unexpected error when starting the router:",Ee)}));const ce={};for(const Ee in ui)Object.defineProperty(ce,Ee,{get:()=>d.value[Ee],enumerable:!0});W.provide(rd,de),W.provide(cg,Bh(ce)),W.provide(bu,d);const me=W.unmount;Mo.add(W),W.unmount=function(){Mo.delete(W),Mo.size<1&&(f=ui,be&&be(),be=null,d.value=ui,Tt=!1,ue=!1),me()},ei&&bx(W,de,t)}};function Vt(W){return W.reduce((de,ce)=>de.then(()=>U(ce)),Promise.resolve())}return Ii}function Cx(e,t){const l=[],o=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const r=t.matched[a];r&&(e.matched.find(f=>Oi(f,r))?o.push(r):l.push(r));const d=e.matched[a];d&&(t.matched.find(f=>Oi(f,d))||s.push(d))}return[l,o,s]}function Ex(){return u(rd)}const Ad=le(!1),ra=le(!1),Sr=le(!1),Ax=le(!0),xu=Fw({xs:460,...Mw}),ir=n2(),gg=Zw(),Ox=c(()=>ir.height.value-ir.width.value/$i>180),_g=Yw(Ot?document.body:null),ji=Dw(),Dx=c(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ji.value)==null?void 0:e.tagName)||"")||((t=ji.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Bx=c(()=>{var e;return["BUTTON","A"].includes(((e=ji.value)==null?void 0:e.tagName)||"")});Nt("slidev-camera","default");Nt("slidev-mic","default");const pc=Nt("slidev-scale",0),pt=Nt("slidev-show-overview",!1),Od=Nt("slidev-presenter-cursor",!0),xm=Nt("slidev-show-editor",!1);Nt("slidev-editor-width",Ot?window.innerWidth*.4:100);const Ic=Nt("slidev-presenter-font-size",1),ta=Nt("slidev-presenter-layout",1);function km(){ta.value=ta.value+1,ta.value>2&&(ta.value=1)}function lQ(){Ic.value=Math.min(2,Ic.value+.1)}function oQ(){Ic.value=Math.max(.5,Ic.value-.1)}const yg=Kv(pt);var Mx=Object.defineProperty,$m=Object.getOwnPropertySymbols,Fx=Object.prototype.hasOwnProperty,Ix=Object.prototype.propertyIsEnumerable,Sm=(e,t,l)=>t in e?Mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,ku=(e,t)=>{for(var l in t||(t={}))Fx.call(t,l)&&Sm(e,l,t[l]);if($m)for(var l of $m(t))Ix.call(t,l)&&Sm(e,l,t[l]);return e},Lx=()=>({emit(e,...t){let l=this.events[e]||[];for(let o=0,s=l.length;o<s;o++)l[o](...t)},events:{},on(e,t){var l;return(l=this.events[e])!=null&&l.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(s=>t!==s)}}});function jm(e,t,l,o=s=>s){return e*o(.5-t*(.5-l))}function Rx(e){return[-e[0],-e[1]]}function en(e,t){return[e[0]+t[0],e[1]+t[1]]}function Ut(e,t){return[e[0]-t[0],e[1]-t[1]]}function Qt(e,t){return[e[0]*t,e[1]*t]}function Hx(e,t){return[e[0]/t,e[1]/t]}function Wr(e){return[e[1],-e[0]]}function Pm(e,t){return e[0]*t[0]+e[1]*t[1]}function zx(e,t){return e[0]===t[0]&&e[1]===t[1]}function Nx(e){return Math.hypot(e[0],e[1])}function qx(e){return e[0]*e[0]+e[1]*e[1]}function Tm(e,t){return qx(Ut(e,t))}function bg(e){return Hx(e,Nx(e))}function Vx(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ur(e,t,l){let o=Math.sin(l),s=Math.cos(l),i=e[0]-t[0],a=e[1]-t[1],r=i*s-a*o,d=i*o+a*s;return[r+t[0],d+t[1]]}function $u(e,t,l){return en(e,Qt(Ut(t,e),l))}function Cm(e,t,l){return en(e,Qt(t,l))}var{min:wr,PI:Gx}=Math,Em=.275,Kr=Gx+1e-4;function Wx(e,t={}){let{size:l=16,smoothing:o=.5,thinning:s=.5,simulatePressure:i=!0,easing:a=ue=>ue,start:r={},end:d={},last:f=!1}=t,{cap:p=!0,easing:m=ue=>ue*(2-ue)}=r,{cap:v=!0,easing:_=ue=>--ue*ue*ue+1}=d;if(e.length===0||l<=0)return[];let b=e[e.length-1].runningLength,$=r.taper===!1?0:r.taper===!0?Math.max(l,b):r.taper,T=d.taper===!1?0:d.taper===!0?Math.max(l,b):d.taper,E=Math.pow(l*o,2),z=[],j=[],N=e.slice(0,10).reduce((ue,ve)=>{let Fe=ve.pressure;if(i){let We=wr(1,ve.distance/l),qt=wr(1,1-We);Fe=wr(1,ue+(qt-ue)*(We*Em))}return(ue+Fe)/2},e[0].pressure),V=jm(l,s,e[e.length-1].pressure,a),X,q=e[0].vector,J=e[0].point,U=J,ie=J,pe=U,ne=!1;for(let ue=0;ue<e.length;ue++){let{pressure:ve}=e[ue],{point:Fe,vector:We,distance:qt,runningLength:ft}=e[ue];if(ue<e.length-1&&b-ft<3)continue;if(s){if(i){let me=wr(1,qt/l),Ee=wr(1,1-me);ve=wr(1,N+(Ee-N)*(me*Em))}V=jm(l,s,ve,a)}else V=l/2;X===void 0&&(X=V);let Tt=ft<$?m(ft/$):1,Mo=b-ft<T?_((b-ft)/T):1;V=Math.max(.01,V*Math.min(Tt,Mo));let Ii=(ue<e.length-1?e[ue+1]:e[ue]).vector,Vt=ue<e.length-1?Pm(We,Ii):1,W=Pm(We,q)<0&&!ne,de=Vt!==null&&Vt<0;if(W||de){let me=Qt(Wr(q),V);for(let Ee=1/13,Ue=0;Ue<=1;Ue+=Ee)ie=Ur(Ut(Fe,me),Fe,Kr*Ue),z.push(ie),pe=Ur(en(Fe,me),Fe,Kr*-Ue),j.push(pe);J=ie,U=pe,de&&(ne=!0);continue}if(ne=!1,ue===e.length-1){let me=Qt(Wr(We),V);z.push(Ut(Fe,me)),j.push(en(Fe,me));continue}let ce=Qt(Wr($u(Ii,We,Vt)),V);ie=Ut(Fe,ce),(ue<=1||Tm(J,ie)>E)&&(z.push(ie),J=ie),pe=en(Fe,ce),(ue<=1||Tm(U,pe)>E)&&(j.push(pe),U=pe),N=ve,q=We}let be=e[0].point.slice(0,2),Se=e.length>1?e[e.length-1].point.slice(0,2):en(e[0].point,[1,1]),Ge=[],Te=[];if(e.length===1){if(!($||T)||f){let ue=Cm(be,bg(Wr(Ut(be,Se))),-(X||V)),ve=[];for(let Fe=1/13,We=Fe;We<=1;We+=Fe)ve.push(Ur(ue,be,Kr*2*We));return ve}}else{if(!($||T&&e.length===1))if(p)for(let ve=1/13,Fe=ve;Fe<=1;Fe+=ve){let We=Ur(j[0],be,Kr*Fe);Ge.push(We)}else{let ve=Ut(z[0],j[0]),Fe=Qt(ve,.5),We=Qt(ve,.51);Ge.push(Ut(be,Fe),Ut(be,We),en(be,We),en(be,Fe))}let ue=Wr(Rx(e[e.length-1].vector));if(T||$&&e.length===1)Te.push(Se);else if(v){let ve=Cm(Se,ue,V);for(let Fe=1/29,We=Fe;We<1;We+=Fe)Te.push(Ur(ve,Se,Kr*3*We))}else Te.push(en(Se,Qt(ue,V)),en(Se,Qt(ue,V*.99)),Ut(Se,Qt(ue,V*.99)),Ut(Se,Qt(ue,V)))}return z.concat(Te,j.reverse(),Ge)}function Ux(e,t={}){var l;let{streamline:o=.5,size:s=16,last:i=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,r=Array.isArray(e[0])?e:e.map(({x:_,y:b,pressure:$=.5})=>[_,b,$]);if(r.length===2){let _=r[1];r=r.slice(0,-1);for(let b=1;b<5;b++)r.push($u(r[0],_,b/4))}r.length===1&&(r=[...r,[...en(r[0],[1,1]),...r[0].slice(2)]]);let d=[{point:[r[0][0],r[0][1]],pressure:r[0][2]>=0?r[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],f=!1,p=0,m=d[0],v=r.length-1;for(let _=1;_<r.length;_++){let b=i&&_===v?r[_].slice(0,2):$u(m.point,r[_],a);if(zx(m.point,b))continue;let $=Vx(b,m.point);if(p+=$,_<v&&!f){if(p<s)continue;f=!0}m={point:b,pressure:r[_][2]>=0?r[_][2]:.5,vector:bg(Ut(m.point,b)),distance:$,runningLength:p},d.push(m)}return d[0].vector=((l=d[1])==null?void 0:l.vector)||[0,0],d}function Kx(e,t={}){return Wx(Ux(e,t),t)}function Lc(e,t){return e-t}function Yx(e){return e<0?-1:1}function Rc(e){return[Math.abs(e),Yx(e)]}function wg(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Jx=2,Zo=Jx,Fr=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,l;const o=this.drauu.el,s=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*s,y:(e.pageY-i.top)*s,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const a=i.matrixTransform((l=o.getScreenCTM())==null?void 0:l.inverse());return{x:a.x*s,y:a.y*s,pressure:e.pressure}}}createElement(e,t){var l;const o=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?ku(ku({},this.brush),t):this.brush;return o.setAttribute("fill",(l=s.fill)!=null?l:"transparent"),o.setAttribute("stroke",s.color),o.setAttribute("stroke-width",s.size.toString()),o.setAttribute("stroke-linecap","round"),s.dasharray&&o.setAttribute("stroke-dasharray",s.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Zo))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Zx=class xg extends Fr{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){return xg.getSvgData(t,this.brush)}static getSvgData(t,l){const o=Kx(t,ku({size:l.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},l.stylusOptions));if(!o.length)return"";const s=o.reduce((i,[a,r],d,f)=>{const[p,m]=f[(d+1)%f.length];return i.push(a,r,(a+p)/2,(r+m)/2),i},["M",...o[0],"Q"]);return s.push("Z"),s.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},Xx=class extends Fr{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,l]=Rc(e.x-this.start.x),[o,s]=Rc(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[i,a]=[this.start.x,this.start.x+t*l].sort(Lc),[r,d]=[this.start.y,this.start.y+o*s].sort(Lc);this.attr("cx",(i+a)/2),this.attr("cy",(r+d)/2),this.attr("rx",(a-i)/2),this.attr("ry",(d-r)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function kg(e,t){const l=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),s.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(s),l.appendChild(o),l}var Qx=class extends Fr{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=wg(),l=document.createElementNS("http://www.w3.org/2000/svg","g");return l.append(kg(t,this.brush.color)),l.append(this.el),this.attr("marker-end",`url(#${t})`),l}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:l}=e;if(this.shiftPressed){const o=e.x-this.start.x,s=e.y-this.start.y;if(s!==0){let i=o/s;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+s*i,l=this.start.y+s):(t=this.start.x+o,l=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-l),this.attr("x2",t),this.attr("y2",l)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",l)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},ek=class extends Fr{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,l]=Rc(e.x-this.start.x),[o,s]=Rc(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[i,a]=[this.start.x,this.start.x+t*l].sort(Lc),[r,d]=[this.start.y,this.start.y+o*s].sort(Lc);this.attr("x",i),this.attr("y",r),this.attr("width",a-i),this.attr("height",d-r)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function tk(e,t){const l=e.x-t.x,o=e.y-t.y;return l*l+o*o}function nk(e,t,l){let o=t.x,s=t.y,i=l.x-o,a=l.y-s;if(i!==0||a!==0){const r=((e.x-o)*i+(e.y-s)*a)/(i*i+a*a);r>1?(o=l.x,s=l.y):r>0&&(o+=i*r,s+=a*r)}return i=e.x-o,a=e.y-s,i*i+a*a}function sk(e,t){let l=e[0];const o=[l];let s;for(let i=1,a=e.length;i<a;i++)s=e[i],tk(s,l)>t&&(o.push(s),l=s);return l!==s&&s&&o.push(s),o}function Su(e,t,l,o,s){let i=o,a=0;for(let r=t+1;r<l;r++){const d=nk(e[r],e[t],e[l]);d>i&&(a=r,i=d)}i>o&&(a-t>1&&Su(e,t,a,o,s),s.push(e[a]),l-a>1&&Su(e,a,l,o,s))}function lk(e,t){const l=e.length-1,o=[e[0]];return Su(e,0,l,t,o),o.push(e[l]),o}function Am(e,t,l=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=l?e:sk(e,o),e=lk(e,o),e}var ok=class Vi extends Fr{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=wg();const l=kg(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Am(this.points,1,!0),this.count=0),this.attr("d",Vi.toSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Vi.toSvgData(Am(this.points,1,!0))),!t.getTotalLength()))}static line(t,l){const o=l.x-t.x,s=l.y-t.y;return{length:Math.sqrt(o**2+s**2),angle:Math.atan2(s,o)}}static controlPoint(t,l,o,s){const i=l||t,a=o||t,r=.2,d=Vi.line(i,a),f=d.angle+(s?Math.PI:0),p=d.length*r,m=t.x+Math.cos(f)*p,v=t.y+Math.sin(f)*p;return{x:m,y:v}}static bezierCommand(t,l,o){const s=Vi.controlPoint(o[l-1],o[l-2],t),i=Vi.controlPoint(t,o[l-1],o[l+1],!0);return`C ${s.x.toFixed(Zo)},${s.y.toFixed(Zo)} ${i.x.toFixed(Zo)},${i.y.toFixed(Zo)} ${t.x.toFixed(Zo)},${t.y.toFixed(Zo)}`}static toSvgData(t){return t.reduce((l,o,s,i)=>s===0?`M ${o.x.toFixed(Zo)},${o.y.toFixed(Zo)}`:`${l} ${Vi.bezierCommand(o,s,i)}`,"")}},ik=class extends Fr{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(l,o)=>{if(l&&l.length)for(let s=0;s<l.length;s++){const i=l[s];if(i.getTotalLength){const a=i.getTotalLength();for(let r=0;r<this.pathSubFactor;r++){const d=i.getPointAtLength(a*r/this.pathSubFactor),f=i.getPointAtLength(a*(r+1)/this.pathSubFactor);this.pathFragments.push({x1:d.x,x2:f.x,y1:d.y,y2:f.y,segment:r,element:o||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const l=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(l,o)&&(l.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,l)=>!e.includes(l))),e.length>0}lineLineIntersect(e,t){const l=e.x1,o=e.x2,s=t.x1,i=t.x2,a=e.y1,r=e.y2,d=t.y1,f=t.y2,p=(l-o)*(d-f)-(a-r)*(s-i),m=(l*r-a*o)*(s-i)-(l-o)*(s*f-d*i),v=(l*r-a*o)*(d-f)-(a-r)*(s*f-d*i),_=(b,$,T)=>b>=$&&b<=T?!0:b>=T&&b<=$;if(p===0)return!1;{const b={x:m/p,y:v/p};return _(b.x,l,o)&&_(b.y,a,r)&&_(b.x,s,i)&&_(b.y,d,f)}}};function rk(e){return{draw:new ok(e),stylus:new Zx(e),line:new Qx(e),rectangle:new ek(e),ellipse:new Xx(e),eraseLine:new ik(e)}}var ak=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Lx(),this._originalPointerId=null,this._models=rk(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const l=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),s=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);l.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",s,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{l.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=e.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(e){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==e.pointerId)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function ck(e){return new ak(e)}const ju=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Kt=Nt("slidev-drawing-enabled",!1),iQ=Nt("slidev-drawing-pinned",!1),dk=le(!1),uk=le(!1),fk=le(!1),wa=le(!1),Xi=pw(Nt("slidev-drawing-brush",{color:ju[0],size:4,mode:"stylus"})),Om=le("stylus"),$g=c(()=>He.drawings.syncAll||xt.value);let xa=!1;const Yr=c({get(){return Om.value},set(e){Om.value=e,e==="arrow"?(Xi.mode="line",Xi.arrowEnd=!0):(Xi.mode=e,Xi.arrowEnd=!1)}}),pk=g({brush:Xi,acceptsInputTypes:c(()=>Kt.value&&(!He.drawings.presenterOnly||xt.value)?void 0:["pen"]),coordinateTransform:!1}),$t=Yc(ck(pk));function mk(){$t.clear(),$g.value&&Gv(tt.value,"")}function Sf(){var e;uk.value=$t.canRedo(),dk.value=$t.canUndo(),fk.value=!!((e=$t.el)!=null&&e.children.length)}function hk(e){xa=!0;const t=Fc[e||tt.value];t!=null?$t.load(t):$t.clear(),Sf(),xa=!1}$t.on("changed",()=>{if(Sf(),!xa){const e=$t.dump(),t=tt.value;(Fc[t]||"")!==e&&$g.value&&Gv(t,$t.dump())}});cw(e=>{xa=!0,e[tt.value]!=null&&$t.load(e[tt.value]||""),xa=!1,Sf()});ut(()=>{Ae(tt,()=>{$t.mounted&&hk()},{immediate:!0})});$t.on("start",()=>wa.value=!0);$t.on("end",()=>wa.value=!1);window.addEventListener("keydown",e=>{if(!Kt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let l=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?$t.redo():$t.undo():e.code==="Escape"?Kt.value=!1:e.code==="KeyL"&&t?Yr.value="line":e.code==="KeyA"&&t?Yr.value="arrow":e.code==="KeyS"&&t?Yr.value="stylus":e.code==="KeyR"&&t?Yr.value="rectangle":e.code==="KeyE"&&t?Yr.value="ellipse":e.code==="KeyC"&&t?mk():e.code.startsWith("Digit")&&t&&+e.code[5]<=ju.length?Xi.color=ju[+e.code[5]-1]:l=!1,l&&(e.preventDefault(),e.stopPropagation())},!1);function lt(...e){return c(()=>e.every(t=>Je(t)))}function Ft(e){return c(()=>!Je(e))}function vk(...e){return c(()=>e.some(t=>Je(t)))}const Dm=Gw(),Dd=Nt("slidev-color-schema","auto"),Pu=c(()=>He.colorSchema!=="auto"),jf=c({get(){return Pu.value?He.colorSchema==="dark":Dd.value==="auto"?Dm.value:Dd.value==="dark"},set(e){Pu.value||(Dd.value=e===Dm.value?"auto":e?"dark":"light")}}),Sg=Kv(jf);Ot&&Ae(jf,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const mc=le(1),hc=c(()=>et.length),vt=le(0),Pf=le(0);function gk(){vt.value>mc.value&&(vt.value-=1)}function _k(){vt.value<hc.value&&(vt.value+=1)}function yk(){if(vt.value>mc.value){let e=vt.value-Pf.value;e<mc.value&&(e=mc.value),vt.value=e}}function bk(){if(vt.value<hc.value){let e=vt.value+Pf.value;e>hc.value&&(e=hc.value),vt.value=e}}function wk(){const{escape:e,space:t,shift:l,left:o,right:s,up:i,down:a,enter:r,d,g:f,o:p,"`":m}=gg;let v=[{name:"next_space",key:lt(t,Ft(l)),fn:Pi,autoRepeat:!0},{name:"prev_space",key:lt(t,l),fn:Ti,autoRepeat:!0},{name:"next_right",key:lt(s,Ft(l),Ft(pt)),fn:Pi,autoRepeat:!0},{name:"prev_left",key:lt(o,Ft(l),Ft(pt)),fn:Ti,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pi,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ti,autoRepeat:!0},{name:"next_down",key:lt(a,Ft(pt)),fn:$a,autoRepeat:!0},{name:"prev_up",key:lt(i,Ft(pt)),fn:()=>Sa(!1),autoRepeat:!0},{name:"next_shift",key:lt(s,l),fn:$a,autoRepeat:!0},{name:"prev_shift",key:lt(o,l),fn:()=>Sa(!1),autoRepeat:!0},{name:"toggle_dark",key:lt(d,Ft(Kt)),fn:Sg},{name:"toggle_overview",key:lt(vk(p,m),Ft(Kt)),fn:yg},{name:"hide_overview",key:lt(e,Ft(Kt)),fn:()=>pt.value=!1},{name:"goto",key:lt(f,Ft(Kt)),fn:()=>Sr.value=!Sr.value},{name:"next_overview",key:lt(s,pt),fn:_k},{name:"prev_overview",key:lt(o,pt),fn:gk},{name:"up_overview",key:lt(i,pt),fn:yk},{name:"down_overview",key:lt(a,pt),fn:bk},{name:"goto_from_overview",key:lt(r,pt),fn:()=>{fr(vt.value),pt.value=!1}}];const _=new Set(v.map($=>$.name));if(v.filter($=>$.name&&_.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return v}const jg=lt(Ft(Dx),Ft(Bx),Ax);function xk(e,t,l=!1){typeof e=="string"&&(e=gg[e]);const o=lt(e,jg);let s=0,i;const a=()=>{if(clearTimeout(i),!o.value){s=0;return}l&&(i=setTimeout(a,Math.max(1e3-s*250,150)),s++),t()};return Ae(o,a,{flush:"sync"})}function kk(e,t){return Ow(e,l=>{jg.value&&(l.repeat||t())})}function $k(){const e=wk();new Map(e.map(l=>[l.key,l])).forEach(l=>{l.fn&&xk(l.key,l.fn,l.autoRepeat)}),kk("f",()=>_g.toggle())}const Sk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jk=n("path",{fill:"currentColor",d:"M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"},null,-1),Pk=[jk];function Tk(e,t){return h(),x("svg",Sk,[...Pk])}const Ck={name:"carbon-close",render:Tk};function Tf(e,t=""){var s,i;const l=["slidev-page",t],o=(i=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:i.no;return o!=null&&l.push(`slidev-page-${o}`),l.filter(Boolean).join(" ")}const O=Symbol("v-click-clicks"),Ki=Symbol("v-click-clicks-elements"),aa=Symbol("v-click-clicks-disabled"),Tu=Symbol("v-click-clicks-order-map"),M=Symbol("slidev-page"),Pg=Symbol("slidev-slide-scale"),D=Symbol("slidev-slidev-context"),Ek=Symbol("slidev-route"),F=Symbol("slidev-render-context"),Ak=Symbol("slidev-active"),I=Symbol("slidev-fontmatter"),Gi="slidev-vclick-target",Bd="slidev-vclick-hidden",Ok="slidev-vclick-fade",Md="slidev-vclick-hidden-explicitly",Jr="slidev-vclick-current",tc="slidev-vclick-prior",Dk=["localhost","127.0.0.1"],Bk=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e,l=le(),o=Uw(l),s=c(()=>t.width?t.width:o.width.value),i=c(()=>t.width?t.width/$i:o.height.value);t.width&&pr(()=>{l.value&&(l.value.style.width=`${s.value}px`,l.value.style.height=`${i.value}px`)});const a=c(()=>s.value/i.value),r=c(()=>t.scale&&!si.value?t.scale:a.value<$i?s.value/Si:i.value*$i/Si),d=c(()=>({height:`${xf}px`,width:`${Si}px`,transform:`translate(-50%, -50%) scale(${r.value})`})),f=c(()=>({"select-none":!He.selectable}));return A(Pg,r),(p,m)=>(h(),x("div",{id:"slide-container",ref_key:"root",ref:l,class:Ve(f.value)},[n("div",{id:"slide-content",style:st(d.value)},[St(p.$slots,"default")],4),St(p.$slots,"controls")],2))}}),k=(e,t)=>{const l=e.__vccOpts||e;for(const[o,s]of t)l[o]=s;return l},Tg=k(Bk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Cf=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},renderContext:{type:String,default:"main"},active:{type:Boolean,default:!1},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){var r;const l=Ro(e,"clicks",t),o=Ro(e,"clicksElements",t),s=Ro(e,"clicksDisabled",t),i=Ro(e,"clicksOrderMap",t);o.value.length=0;const a=c({get(){return s.value?9999999:+l.value},set(d){l.value=d}});A(Ek,e.route),A(M,le(+((r=e.route)==null?void 0:r.path))),A(F,le(e.renderContext)),A(Ak,B(e,"active")),A(O,a),A(aa,s),A(Ki,o),A(Tu,i)},render(){var e,t;return this.$props.is?At(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Mk=["innerHTML"],Fk=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return(t,l)=>y(Fc)[t.page]?(h(),x("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:y(Fc)[t.page]},null,8,Mk)):we("v-if",!0)}}),Cg=k(Fk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),Lk={class:"sr-only"},Rk=Me({__name:"HiddenText",props:{text:{type:String,required:!0}},setup(e){return(t,l)=>(h(),x("span",Lk,Ht(t.text),1))}}),Ct=k(Rk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/HiddenText.vue"]]),Hk=["onClick"],zk={class:"text-green font-bold"},Nk={class:"opacity-50"},qk={key:1,class:"opacity-50"},Fd=4*16*2,Bm=2*16,Vk=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const s=Ro(e,"modelValue",t);function i(){s.value=!1}function a(_){fr(_),i()}function r(_){return _===vt.value}const d=xu.smaller("xs"),f=xu.smaller("sm"),p=c(()=>d.value?ir.width.value-Fd:f.value?(ir.width.value-Fd-Bm)/2:300),m=c(()=>Math.floor((ir.width.value-Fd)/(p.value+Bm))),v=le("");return De("keypress",_=>{if(!pt.value){v.value="";return}if(_.key==="Enter"){_.preventDefault(),v.value?(a(+v.value),v.value=""):a(vt.value);return}const b=Number.parseInt(_.key.replace(/[^0-9]/g,""));if(Number.isNaN(b)){v.value="";return}if(!v.value&&b===0)return;if(v.value+=String(b),+v.value>=et.length){v.value="";return}const $=et.findIndex(T=>T.path===v.value);$!==-1&&(vt.value=$+1),+v.value*10>et.length&&(a(+v.value),v.value="")}),pr(()=>{vt.value=tt.value,Pf.value=m.value}),(_,b)=>{const $=Ck;return h(),x(Pe,null,[Z(_f,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:C(()=>[nv(n("div",{class:"bg-main !bg-opacity-75 p-16 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:b[0]||(b[0]=T=>i())},[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(h(!0),x(Pe,null,mr(y(et),(T,E)=>(h(),x("div",{key:T.path,class:"relative"},[n("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary transition",r(E+1)||y(vt)===E+1?"border-$slidev-theme-primary":"border-gray-400"]),style:st(y(kf)),onClick:z=>a(+T.path)},[(h(),S(Tg,{key:T.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:C(()=>[T!=null&&T.component?(h(),S(y(Cf),{key:0,is:T.component,"clicks-disabled":!0,class:Ve(y(Tf)(T)),route:T,"render-context":"overview"},null,8,["is","class","route"])):we("v-if",!0),Z(Cg,{page:+T.path},null,8,["page"])]),_:2},1032,["width"]))],14,Hk),n("div",{class:"absolute top-0",style:st(`left: ${p.value+5}px`)},[v.value&&String(E+1).startsWith(v.value)?(h(),x(Pe,{key:0},[n("span",zk,Ht(v.value),1),n("span",Nk,Ht(String(E+1).slice(v.value.length)),1)],64)):(h(),x("span",qk,Ht(E+1),1))],4)]))),128))],4)],512),[[bf,y(s)]])]),_:1}),y(s)?(h(),x("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[Z(Ct,{text:"Close"}),Z($)])):we("v-if",!0)],64)}}}),Gk=k(Vk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Wk="/my-slidevs/slidevs/learn-tailwind/assets/logo-WJB0mvzm.png",Uk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Kk=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const l=e,s=Ro(l,"modelValue",t);function i(){s.value=!1}return(a,r)=>(h(),S(iv,null,[y(s)?(h(),x("div",Uk,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=d=>i())}),n("div",{class:Ve(["m-auto rounded-md bg-main shadow",l.class]),"dark:border":"~ main"},[St(a.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Yk=k(Kk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Modal.vue"]]),Jk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Zk=["innerHTML"],Xk=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Wk,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),H("dev ")])])],-1),Qk=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=Ro(e,"modelValue",t),i=c(()=>typeof He.info=="string");return(a,r)=>(h(),S(Yk,{modelValue:y(s),"onUpdate:modelValue":r[0]||(r[0]=d=>Ne(s)?s.value=d:null),class:"px-6 py-4"},{default:C(()=>[n("div",Jk,[i.value?(h(),x("div",{key:0,class:"mb-4",innerHTML:y(He).info},null,8,Zk)):we("v-if",!0),Xk])]),_:1},8,["modelValue"]))}}),e$=k(Qk,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function oi(e){return Array.isArray?Array.isArray(e):Og(e)==="[object Array]"}const t$=1/0;function n$(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-t$?"-0":t}function s$(e){return e==null?"":n$(e)}function Ho(e){return typeof e=="string"}function Eg(e){return typeof e=="number"}function l$(e){return e===!0||e===!1||o$(e)&&Og(e)=="[object Boolean]"}function Ag(e){return typeof e=="object"}function o$(e){return Ag(e)&&e!==null}function Lt(e){return e!=null}function Id(e){return!e.trim().length}function Og(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const i$="Incorrect 'index' type",r$=e=>`Invalid value for key ${e}`,a$=e=>`Pattern length exceeds max of ${e}.`,c$=e=>`Missing ${e} property in key`,d$=e=>`Property 'weight' in key '${e}' must be a positive integer`,Mm=Object.prototype.hasOwnProperty;class u${constructor(t){this._keys=[],this._keyMap={};let l=0;t.forEach(o=>{let s=Dg(o);this._keys.push(s),this._keyMap[s.id]=s,l+=s.weight}),this._keys.forEach(o=>{o.weight/=l})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Dg(e){let t=null,l=null,o=null,s=1,i=null;if(Ho(e)||oi(e))o=e,t=Fm(e),l=Cu(e);else{if(!Mm.call(e,"name"))throw new Error(c$("name"));const a=e.name;if(o=a,Mm.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(d$(a));t=Fm(a),l=Cu(a),i=e.getFn}return{path:t,id:l,weight:s,src:o,getFn:i}}function Fm(e){return oi(e)?e:e.split(".")}function Cu(e){return oi(e)?e.join("."):e}function f$(e,t){let l=[],o=!1;const s=(i,a,r)=>{if(Lt(i))if(!a[r])l.push(i);else{let d=a[r];const f=i[d];if(!Lt(f))return;if(r===a.length-1&&(Ho(f)||Eg(f)||l$(f)))l.push(s$(f));else if(oi(f)){o=!0;for(let p=0,m=f.length;p<m;p+=1)s(f[p],a,r+1)}else a.length&&s(f,a,r+1)}};return s(e,Ho(t)?t.split("."):t,0),o?l:l[0]}const p$={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},m$={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},h$={location:0,threshold:.6,distance:100},v$={useExtendedSearch:!1,getFn:f$,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ke={...m$,...p$,...h$,...v$};const g$=/[^ ]+/g;function _$(e=1,t=3){const l=new Map,o=Math.pow(10,t);return{get(s){const i=s.match(g$).length;if(l.has(i))return l.get(i);const a=1/Math.pow(i,.5*e),r=parseFloat(Math.round(a*o)/o);return l.set(i,r),r},clear(){l.clear()}}}class Ef{constructor({getFn:t=ke.getFn,fieldNormWeight:l=ke.fieldNormWeight}={}){this.norm=_$(l,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((l,o)=>{this._keysMap[l.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ho(this.docs[0])?this.docs.forEach((t,l)=>{this._addString(t,l)}):this.docs.forEach((t,l)=>{this._addObject(t,l)}),this.norm.clear())}add(t){const l=this.size();Ho(t)?this._addString(t,l):this._addObject(t,l)}removeAt(t){this.records.splice(t,1);for(let l=t,o=this.size();l<o;l+=1)this.records[l].i-=1}getValueForItemAtKeyId(t,l){return t[this._keysMap[l]]}size(){return this.records.length}_addString(t,l){if(!Lt(t)||Id(t))return;let o={v:t,i:l,n:this.norm.get(t)};this.records.push(o)}_addObject(t,l){let o={i:l,$:{}};this.keys.forEach((s,i)=>{let a=s.getFn?s.getFn(t):this.getFn(t,s.path);if(Lt(a)){if(oi(a)){let r=[];const d=[{nestedArrIndex:-1,value:a}];for(;d.length;){const{nestedArrIndex:f,value:p}=d.pop();if(Lt(p))if(Ho(p)&&!Id(p)){let m={v:p,i:f,n:this.norm.get(p)};r.push(m)}else oi(p)&&p.forEach((m,v)=>{d.push({nestedArrIndex:v,value:m})})}o.$[i]=r}else if(Ho(a)&&!Id(a)){let r={v:a,n:this.norm.get(a)};o.$[i]=r}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Bg(e,t,{getFn:l=ke.getFn,fieldNormWeight:o=ke.fieldNormWeight}={}){const s=new Ef({getFn:l,fieldNormWeight:o});return s.setKeys(e.map(Dg)),s.setSources(t),s.create(),s}function y$(e,{getFn:t=ke.getFn,fieldNormWeight:l=ke.fieldNormWeight}={}){const{keys:o,records:s}=e,i=new Ef({getFn:t,fieldNormWeight:l});return i.setKeys(o),i.setIndexRecords(s),i}function nc(e,{errors:t=0,currentLocation:l=0,expectedLocation:o=0,distance:s=ke.distance,ignoreLocation:i=ke.ignoreLocation}={}){const a=t/e.length;if(i)return a;const r=Math.abs(o-l);return s?a+r/s:r?1:a}function b$(e=[],t=ke.minMatchCharLength){let l=[],o=-1,s=-1,i=0;for(let a=e.length;i<a;i+=1){let r=e[i];r&&o===-1?o=i:!r&&o!==-1&&(s=i-1,s-o+1>=t&&l.push([o,s]),o=-1)}return e[i-1]&&i-o>=t&&l.push([o,i-1]),l}const Yi=32;function w$(e,t,l,{location:o=ke.location,distance:s=ke.distance,threshold:i=ke.threshold,findAllMatches:a=ke.findAllMatches,minMatchCharLength:r=ke.minMatchCharLength,includeMatches:d=ke.includeMatches,ignoreLocation:f=ke.ignoreLocation}={}){if(t.length>Yi)throw new Error(a$(Yi));const p=t.length,m=e.length,v=Math.max(0,Math.min(o,m));let _=i,b=v;const $=r>1||d,T=$?Array(m):[];let E;for(;(E=e.indexOf(t,b))>-1;){let q=nc(t,{currentLocation:E,expectedLocation:v,distance:s,ignoreLocation:f});if(_=Math.min(q,_),b=E+p,$){let J=0;for(;J<p;)T[E+J]=1,J+=1}}b=-1;let z=[],j=1,N=p+m;const V=1<<p-1;for(let q=0;q<p;q+=1){let J=0,U=N;for(;J<U;)nc(t,{errors:q,currentLocation:v+U,expectedLocation:v,distance:s,ignoreLocation:f})<=_?J=U:N=U,U=Math.floor((N-J)/2+J);N=U;let ie=Math.max(1,v-U+1),pe=a?m:Math.min(v+U,m)+p,ne=Array(pe+2);ne[pe+1]=(1<<q)-1;for(let Se=pe;Se>=ie;Se-=1){let Ge=Se-1,Te=l[e.charAt(Ge)];if($&&(T[Ge]=+!!Te),ne[Se]=(ne[Se+1]<<1|1)&Te,q&&(ne[Se]|=(z[Se+1]|z[Se])<<1|1|z[Se+1]),ne[Se]&V&&(j=nc(t,{errors:q,currentLocation:Ge,expectedLocation:v,distance:s,ignoreLocation:f}),j<=_)){if(_=j,b=Ge,b<=v)break;ie=Math.max(1,2*v-b)}}if(nc(t,{errors:q+1,currentLocation:v,expectedLocation:v,distance:s,ignoreLocation:f})>_)break;z=ne}const X={isMatch:b>=0,score:Math.max(.001,j)};if($){const q=b$(T,r);q.length?d&&(X.indices=q):X.isMatch=!1}return X}function x$(e){let t={};for(let l=0,o=e.length;l<o;l+=1){const s=e.charAt(l);t[s]=(t[s]||0)|1<<o-l-1}return t}class Mg{constructor(t,{location:l=ke.location,threshold:o=ke.threshold,distance:s=ke.distance,includeMatches:i=ke.includeMatches,findAllMatches:a=ke.findAllMatches,minMatchCharLength:r=ke.minMatchCharLength,isCaseSensitive:d=ke.isCaseSensitive,ignoreLocation:f=ke.ignoreLocation}={}){if(this.options={location:l,threshold:o,distance:s,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:d,ignoreLocation:f},this.pattern=d?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,_)=>{this.chunks.push({pattern:v,alphabet:x$(v),startIndex:_})},m=this.pattern.length;if(m>Yi){let v=0;const _=m%Yi,b=m-_;for(;v<b;)p(this.pattern.substr(v,Yi),v),v+=Yi;if(_){const $=m-Yi;p(this.pattern.substr($),$)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:l,includeMatches:o}=this.options;if(l||(t=t.toLowerCase()),this.pattern===t){let b={isMatch:!0,score:0};return o&&(b.indices=[[0,t.length-1]]),b}const{location:s,distance:i,threshold:a,findAllMatches:r,minMatchCharLength:d,ignoreLocation:f}=this.options;let p=[],m=0,v=!1;this.chunks.forEach(({pattern:b,alphabet:$,startIndex:T})=>{const{isMatch:E,score:z,indices:j}=w$(t,b,$,{location:s+T,distance:i,threshold:a,findAllMatches:r,minMatchCharLength:d,includeMatches:o,ignoreLocation:f});E&&(v=!0),m+=z,E&&j&&(p=[...p,...j])});let _={isMatch:v,score:v?m/this.chunks.length:1};return v&&o&&(_.indices=p),_}}class Mi{constructor(t){this.pattern=t}static isMultiMatch(t){return Im(t,this.multiRegex)}static isSingleMatch(t){return Im(t,this.singleRegex)}search(){}}function Im(e,t){const l=e.match(t);return l?l[1]:null}class k$ extends Mi{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const l=t===this.pattern;return{isMatch:l,score:l?0:1,indices:[0,this.pattern.length-1]}}}class $$ extends Mi{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class S$ extends Mi{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const l=t.startsWith(this.pattern);return{isMatch:l,score:l?0:1,indices:[0,this.pattern.length-1]}}}class j$ extends Mi{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const l=!t.startsWith(this.pattern);return{isMatch:l,score:l?0:1,indices:[0,t.length-1]}}}class P$ extends Mi{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const l=t.endsWith(this.pattern);return{isMatch:l,score:l?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class T$ extends Mi{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const l=!t.endsWith(this.pattern);return{isMatch:l,score:l?0:1,indices:[0,t.length-1]}}}class Fg extends Mi{constructor(t,{location:l=ke.location,threshold:o=ke.threshold,distance:s=ke.distance,includeMatches:i=ke.includeMatches,findAllMatches:a=ke.findAllMatches,minMatchCharLength:r=ke.minMatchCharLength,isCaseSensitive:d=ke.isCaseSensitive,ignoreLocation:f=ke.ignoreLocation}={}){super(t),this._bitapSearch=new Mg(t,{location:l,threshold:o,distance:s,includeMatches:i,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:d,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ig extends Mi{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let l=0,o;const s=[],i=this.pattern.length;for(;(o=t.indexOf(this.pattern,l))>-1;)l=o+i,s.push([o,l-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const Eu=[k$,Ig,S$,j$,T$,P$,$$,Fg],Lm=Eu.length,C$=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,E$="|";function A$(e,t={}){return e.split(E$).map(l=>{let o=l.trim().split(C$).filter(i=>i&&!!i.trim()),s=[];for(let i=0,a=o.length;i<a;i+=1){const r=o[i];let d=!1,f=-1;for(;!d&&++f<Lm;){const p=Eu[f];let m=p.isMultiMatch(r);m&&(s.push(new p(m,t)),d=!0)}if(!d)for(f=-1;++f<Lm;){const p=Eu[f];let m=p.isSingleMatch(r);if(m){s.push(new p(m,t));break}}}return s})}const O$=new Set([Fg.type,Ig.type]);class D${constructor(t,{isCaseSensitive:l=ke.isCaseSensitive,includeMatches:o=ke.includeMatches,minMatchCharLength:s=ke.minMatchCharLength,ignoreLocation:i=ke.ignoreLocation,findAllMatches:a=ke.findAllMatches,location:r=ke.location,threshold:d=ke.threshold,distance:f=ke.distance}={}){this.query=null,this.options={isCaseSensitive:l,includeMatches:o,minMatchCharLength:s,findAllMatches:a,ignoreLocation:i,location:r,threshold:d,distance:f},this.pattern=l?t:t.toLowerCase(),this.query=A$(this.pattern,this.options)}static condition(t,l){return l.useExtendedSearch}searchIn(t){const l=this.query;if(!l)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let i=0,a=[],r=0;for(let d=0,f=l.length;d<f;d+=1){const p=l[d];a.length=0,i=0;for(let m=0,v=p.length;m<v;m+=1){const _=p[m],{isMatch:b,indices:$,score:T}=_.search(t);if(b){if(i+=1,r+=T,o){const E=_.constructor.type;O$.has(E)?a=[...a,...$]:a.push($)}}else{r=0,i=0,a.length=0;break}}if(i){let m={isMatch:!0,score:r/i};return o&&(m.indices=a),m}}return{isMatch:!1,score:1}}}const Au=[];function B$(...e){Au.push(...e)}function Ou(e,t){for(let l=0,o=Au.length;l<o;l+=1){let s=Au[l];if(s.condition(e,t))return new s(e,t)}return new Mg(e,t)}const Hc={AND:"$and",OR:"$or"},Du={PATH:"$path",PATTERN:"$val"},Bu=e=>!!(e[Hc.AND]||e[Hc.OR]),M$=e=>!!e[Du.PATH],F$=e=>!oi(e)&&Ag(e)&&!Bu(e),Rm=e=>({[Hc.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Lg(e,t,{auto:l=!0}={}){const o=s=>{let i=Object.keys(s);const a=M$(s);if(!a&&i.length>1&&!Bu(s))return o(Rm(s));if(F$(s)){const d=a?s[Du.PATH]:i[0],f=a?s[Du.PATTERN]:s[d];if(!Ho(f))throw new Error(r$(d));const p={keyId:Cu(d),pattern:f};return l&&(p.searcher=Ou(f,t)),p}let r={children:[],operator:i[0]};return i.forEach(d=>{const f=s[d];oi(f)&&f.forEach(p=>{r.children.push(o(p))})}),r};return Bu(e)||(e=Rm(e)),o(e)}function I$(e,{ignoreFieldNorm:t=ke.ignoreFieldNorm}){e.forEach(l=>{let o=1;l.matches.forEach(({key:s,norm:i,score:a})=>{const r=s?s.weight:null;o*=Math.pow(a===0&&r?Number.EPSILON:a,(r||1)*(t?1:i))}),l.score=o})}function L$(e,t){const l=e.matches;t.matches=[],Lt(l)&&l.forEach(o=>{if(!Lt(o.indices)||!o.indices.length)return;const{indices:s,value:i}=o;let a={indices:s,value:i};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function R$(e,t){t.score=e.score}function H$(e,t,{includeMatches:l=ke.includeMatches,includeScore:o=ke.includeScore}={}){const s=[];return l&&s.push(L$),o&&s.push(R$),e.map(i=>{const{idx:a}=i,r={item:t[a],refIndex:a};return s.length&&s.forEach(d=>{d(i,r)}),r})}class Ir{constructor(t,l={},o){this.options={...ke,...l},this.options.useExtendedSearch,this._keyStore=new u$(this.options.keys),this.setCollection(t,o)}setCollection(t,l){if(this._docs=t,l&&!(l instanceof Ef))throw new Error(i$);this._myIndex=l||Bg(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Lt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const l=[];for(let o=0,s=this._docs.length;o<s;o+=1){const i=this._docs[o];t(i,o)&&(this.removeAt(o),o-=1,s-=1,l.push(i))}return l}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:l=-1}={}){const{includeMatches:o,includeScore:s,shouldSort:i,sortFn:a,ignoreFieldNorm:r}=this.options;let d=Ho(t)?Ho(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return I$(d,{ignoreFieldNorm:r}),i&&d.sort(a),Eg(l)&&l>-1&&(d=d.slice(0,l)),H$(d,this._docs,{includeMatches:o,includeScore:s})}_searchStringList(t){const l=Ou(t,this.options),{records:o}=this._myIndex,s=[];return o.forEach(({v:i,i:a,n:r})=>{if(!Lt(i))return;const{isMatch:d,score:f,indices:p}=l.searchIn(i);d&&s.push({item:i,idx:a,matches:[{score:f,value:i,norm:r,indices:p}]})}),s}_searchLogical(t){const l=Lg(t,this.options),o=(r,d,f)=>{if(!r.children){const{keyId:m,searcher:v}=r,_=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(d,m),searcher:v});return _&&_.length?[{idx:f,item:d,matches:_}]:[]}const p=[];for(let m=0,v=r.children.length;m<v;m+=1){const _=r.children[m],b=o(_,d,f);if(b.length)p.push(...b);else if(r.operator===Hc.AND)return[]}return p},s=this._myIndex.records,i={},a=[];return s.forEach(({$:r,i:d})=>{if(Lt(r)){let f=o(l,r,d);f.length&&(i[d]||(i[d]={idx:d,item:r,matches:[]},a.push(i[d])),f.forEach(({matches:p})=>{i[d].matches.push(...p)}))}}),a}_searchObjectList(t){const l=Ou(t,this.options),{keys:o,records:s}=this._myIndex,i=[];return s.forEach(({$:a,i:r})=>{if(!Lt(a))return;let d=[];o.forEach((f,p)=>{d.push(...this._findMatches({key:f,value:a[p],searcher:l}))}),d.length&&i.push({idx:r,item:a,matches:d})}),i}_findMatches({key:t,value:l,searcher:o}){if(!Lt(l))return[];let s=[];if(oi(l))l.forEach(({v:i,i:a,n:r})=>{if(!Lt(i))return;const{isMatch:d,score:f,indices:p}=o.searchIn(i);d&&s.push({score:f,key:t,value:i,idx:a,norm:r,indices:p})});else{const{v:i,n:a}=l,{isMatch:r,score:d,indices:f}=o.searchIn(i);r&&s.push({score:d,key:t,value:i,norm:a,indices:f})}return s}}Ir.version="7.0.0";Ir.createIndex=Bg;Ir.parseIndex=y$;Ir.config=ke;Ir.parseQuery=Lg;B$(D$);const z$={key:0},N$={key:1},q$={key:2},V$={key:3},G$={key:4},W$={key:5},U$={key:6},K$={key:7},Y$={key:8},J$={key:9},Z$={key:10},X$={key:11},Q$={key:12},e3={key:13},t3={key:14},n3={key:15},s3={key:16},l3={key:17},o3={key:18},i3={key:19},r3={key:20},a3={key:21},c3={key:22},d3={key:23},u3={key:24},f3={key:25},p3={key:26},m3={key:27},h3={key:28},v3={key:29},g3={key:30},_3={key:31},y3={key:32},b3={key:33},w3={key:34},x3={key:35},k3={key:36},$3={key:37},S3={key:38},j3={key:39},P3={key:40},T3={key:41},C3={key:42},E3={key:43},A3={key:44},O3={key:45},D3={key:46},B3={key:47},M3={key:48},F3={key:49},I3={key:50},L3={key:51},R3={key:52},H3={key:53},z3={key:54},N3={key:55},q3={key:56},V3={key:57},G3={key:58},W3={key:59},U3={key:60},K3={key:61},Y3={key:62},J3={key:63},Z3={key:64},X3={key:65},Q3={key:66},eS={key:67},tS={key:68},nS={key:69},sS={key:70},lS={key:71},oS={key:72},iS={key:73},rS={key:74},aS={key:75},cS={key:76},dS={key:77},uS={key:78},fS={key:79},pS={key:80},mS={key:81},hS={key:82},vS={key:83},gS={key:84},_S={key:85},yS={key:86},bS={key:87},wS={key:88},xS={key:89},kS={key:90},$S={key:91},SS={key:92},jS={key:93},PS={key:94},TS={key:95},CS={key:96},ES={key:97},AS={key:98},OS={key:99},DS={key:100},BS={key:101},MS={key:102},FS={key:103},IS={key:104},LS={key:105},RS={key:106},HS={key:107},zS={key:108},NS={key:109},qS={key:110},VS={key:111},GS={key:112},WS={key:113},US={key:114},KS={key:115},YS={key:116},JS={key:117},ZS={key:118},XS={key:119},QS={key:120},ej={key:121},tj={key:122},nj={key:123},sj={key:124},lj={key:125},oj={key:126},ij={key:127},rj={key:128},aj={key:129},cj={key:130},dj={key:131},uj={key:132},fj={key:133},pj={key:134},mj={key:135},hj={key:136},vj={key:137},gj={key:138},_j={key:139},yj={key:140},bj={key:141},wj={key:142},xj={key:143},kj={key:144},$j={key:145},Sj={key:146},jj={key:147},Pj={key:148},Tj={key:149},Cj={key:150},Ej={key:151},Aj={key:152},Oj={key:153},Dj={key:154},Bj={key:155},Mj={key:156},Fj={key:157},Ij={key:158},Lj={key:159},Rj={key:160},Hj={key:161},zj={key:162},Nj={key:163},qj={key:164},Vj={key:165},Gj={key:166},Wj={key:167},Uj={key:168},Kj={key:169},Yj={key:170},Jj={key:171},Zj={key:172},Xj={key:173},Qj={key:174},e5={key:175},t5={key:176},n5={key:177},s5={key:178},l5={key:179},o5={key:180},i5={key:181},r5={key:182},a5={key:183},c5={key:184},d5={key:185},u5={key:186},f5={key:187},p5={key:188},m5={key:189},h5=Me({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,l)=>(h(),x("div",null,[+t.no==1?(h(),x("p",z$,"Welcome to Slidev")):+t.no==2?(h(),x("p",N$,"undefined")):+t.no==3?(h(),x("p",q$,"目录")):+t.no==4?(h(),x("p",V$,"Layout 布局")):+t.no==5?(h(),x("p",G$,"Aspect Ratio")):+t.no==6?(h(),x("p",W$,"Container")):+t.no==7?(h(),x("p",U$,"Column")):+t.no==8?(h(),x("p",K$,"Break After")):+t.no==9?(h(),x("p",Y$,"Break Before")):+t.no==10?(h(),x("p",J$,"Break Inside")):+t.no==11?(h(),x("p",Z$,"Box Decoration Break")):+t.no==12?(h(),x("p",X$,"Box Sizing")):+t.no==13?(h(),x("p",Q$,"Display")):+t.no==14?(h(),x("p",e3,"undefined")):+t.no==15?(h(),x("p",t3,"undefined")):+t.no==16?(h(),x("p",n3,"undefined")):+t.no==17?(h(),x("p",s3,"undefined")):+t.no==18?(h(),x("p",l3,"Floats")):+t.no==19?(h(),x("p",o3,"Clear")):+t.no==20?(h(),x("p",i3,"Isolation")):+t.no==21?(h(),x("p",r3,"Object Fit")):+t.no==22?(h(),x("p",a3,"undefined")):+t.no==23?(h(),x("p",c3,"undefined")):+t.no==24?(h(),x("p",d3,"undefined")):+t.no==25?(h(),x("p",u3,"Object Position")):+t.no==26?(h(),x("p",f3,"undefined")):+t.no==27?(h(),x("p",p3,"Overflow")):+t.no==28?(h(),x("p",m3,"Overscroll Behavior")):+t.no==29?(h(),x("p",h3,"Position")):+t.no==30?(h(),x("p",v3,"Top,Right,Bottom,Left")):+t.no==31?(h(),x("p",g3,"Visibility")):+t.no==32?(h(),x("p",_3,"Z-Index")):+t.no==33?(h(),x("p",y3,"Flexbox & Grid 弹性盒和网格")):+t.no==34?(h(),x("p",b3,"Flex Basis")):+t.no==35?(h(),x("p",w3,"Flex Direction")):+t.no==36?(h(),x("p",x3,"Flex Wrap")):+t.no==37?(h(),x("p",k3,"Flex")):+t.no==38?(h(),x("p",$3,"undefined")):+t.no==39?(h(),x("p",S3,"Flex Grow")):+t.no==40?(h(),x("p",j3,"Flex Shrink")):+t.no==41?(h(),x("p",P3,"Flex Order")):+t.no==42?(h(),x("p",T3,"Grid Template Columns")):+t.no==43?(h(),x("p",C3,"undefined")):+t.no==44?(h(),x("p",E3,"Grid Column Start / End")):+t.no==45?(h(),x("p",A3,"undefined")):+t.no==46?(h(),x("p",O3,"Grid Template Rows")):+t.no==47?(h(),x("p",D3,"Grid Row Start / End")):+t.no==48?(h(),x("p",B3,"Grid Auto Flow")):+t.no==49?(h(),x("p",M3,"Grid Auto Columns")):+t.no==50?(h(),x("p",F3,"Grid Auto Rows")):+t.no==51?(h(),x("p",I3,"Gap")):+t.no==52?(h(),x("p",L3,"Justify Content")):+t.no==53?(h(),x("p",R3,"Justify Items")):+t.no==54?(h(),x("p",H3,"undefined")):+t.no==55?(h(),x("p",z3,"Justify Self")):+t.no==56?(h(),x("p",N3,"Align Content")):+t.no==57?(h(),x("p",q3,"Align Items")):+t.no==58?(h(),x("p",V3,"Align Self")):+t.no==59?(h(),x("p",G3,"Place Content")):+t.no==60?(h(),x("p",W3,"undefined")):+t.no==61?(h(),x("p",U3,"Place Items")):+t.no==62?(h(),x("p",K3,"undefined")):+t.no==63?(h(),x("p",Y3,"Place Self")):+t.no==64?(h(),x("p",J3,"Spacing")):+t.no==65?(h(),x("p",Z3,"Padding")):+t.no==66?(h(),x("p",X3,"Margin")):+t.no==67?(h(),x("p",Q3,"Space Between")):+t.no==68?(h(),x("p",eS,"Sizing")):+t.no==69?(h(),x("p",tS,"Width")):+t.no==70?(h(),x("p",nS,"Size")):+t.no==71?(h(),x("p",sS,"Typography")):+t.no==72?(h(),x("p",lS,"Font Family")):+t.no==73?(h(),x("p",oS,"Font Size")):+t.no==74?(h(),x("p",iS,"Font Smoothing")):+t.no==75?(h(),x("p",rS,"Font Style")):+t.no==76?(h(),x("p",aS,"Font Weight")):+t.no==77?(h(),x("p",cS,"Font Variant Numeric")):+t.no==78?(h(),x("p",dS,"Letter Spacing")):+t.no==79?(h(),x("p",uS,"Line Clamp")):+t.no==80?(h(),x("p",fS,"Line Height")):+t.no==81?(h(),x("p",pS,"List Style Image")):+t.no==82?(h(),x("p",mS,"List Style Position")):+t.no==83?(h(),x("p",hS,"List Style Type")):+t.no==84?(h(),x("p",vS,"Text Align")):+t.no==85?(h(),x("p",gS,"Text Color")):+t.no==86?(h(),x("p",_S,"Text Decoration")):+t.no==87?(h(),x("p",yS,"Text Decoration Color")):+t.no==88?(h(),x("p",bS,"Text Decoration Style")):+t.no==89?(h(),x("p",wS,"Text Decoration Thickness")):+t.no==90?(h(),x("p",xS,"Text Underline Offset")):+t.no==91?(h(),x("p",kS,"Text Transform")):+t.no==92?(h(),x("p",$S,"Text Overflow")):+t.no==93?(h(),x("p",SS,"Text Wrap")):+t.no==94?(h(),x("p",jS,"Text Indent")):+t.no==95?(h(),x("p",PS,"Vertical Align")):+t.no==96?(h(),x("p",TS,"Whitespace")):+t.no==97?(h(),x("p",CS,"Word Break")):+t.no==98?(h(),x("p",ES,"Hyphens")):+t.no==99?(h(),x("p",AS,"Content")):+t.no==100?(h(),x("p",OS,"Backgrounds")):+t.no==101?(h(),x("p",DS,"Background Attachment")):+t.no==102?(h(),x("p",BS,"Background Clip")):+t.no==103?(h(),x("p",MS,"Background Color")):+t.no==104?(h(),x("p",FS,"Background Origin")):+t.no==105?(h(),x("p",IS,"Background Position")):+t.no==106?(h(),x("p",LS,"Background Repeat")):+t.no==107?(h(),x("p",RS,"Background Size")):+t.no==108?(h(),x("p",HS,"Background Image")):+t.no==109?(h(),x("p",zS,"undefined")):+t.no==110?(h(),x("p",NS,"Gradient Color Stops")):+t.no==111?(h(),x("p",qS,"Borders")):+t.no==112?(h(),x("p",VS,"Border Radius")):+t.no==113?(h(),x("p",GS,"Border Width")):+t.no==114?(h(),x("p",WS,"Border Color")):+t.no==115?(h(),x("p",US,"Border Style")):+t.no==116?(h(),x("p",KS,"Divide Width")):+t.no==117?(h(),x("p",YS,"Divide Color")):+t.no==118?(h(),x("p",JS,"Divide Style")):+t.no==119?(h(),x("p",ZS,"Outline Width")):+t.no==120?(h(),x("p",XS,"Outline Color")):+t.no==121?(h(),x("p",QS,"Outline Style")):+t.no==122?(h(),x("p",ej,"Outline Offset")):+t.no==123?(h(),x("p",tj,"Ring Width")):+t.no==124?(h(),x("p",nj,"Effects")):+t.no==125?(h(),x("p",sj,"Box Shadow")):+t.no==126?(h(),x("p",lj,"Box Shadow Color")):+t.no==127?(h(),x("p",oj,"Opacity")):+t.no==128?(h(),x("p",ij,"Mix Blend Mode")):+t.no==129?(h(),x("p",rj,"undefined")):+t.no==130?(h(),x("p",aj,"Background Blend Mode")):+t.no==131?(h(),x("p",cj,"Filter")):+t.no==132?(h(),x("p",dj,"Blur")):+t.no==133?(h(),x("p",uj,"Brightness")):+t.no==134?(h(),x("p",fj,"Contrast")):+t.no==135?(h(),x("p",pj,"Drop Shadow")):+t.no==136?(h(),x("p",mj,"Grayscale")):+t.no==137?(h(),x("p",hj,"Hue Rotate")):+t.no==138?(h(),x("p",vj,"Invert")):+t.no==139?(h(),x("p",gj,"Saturate")):+t.no==140?(h(),x("p",_j,"Sepia")):+t.no==141?(h(),x("p",yj,"Backdrop Blur")):+t.no==142?(h(),x("p",bj,"Backdrop Brightness")):+t.no==143?(h(),x("p",wj,"Backdrop Contrast")):+t.no==144?(h(),x("p",xj,"Backdrop Grayscale")):+t.no==145?(h(),x("p",kj,"Backdrop Hue Rotate")):+t.no==146?(h(),x("p",$j,"Backdrop Invert")):+t.no==147?(h(),x("p",Sj,"Backdrop Opacity")):+t.no==148?(h(),x("p",jj,"Backdrop Saturate")):+t.no==149?(h(),x("p",Pj,"Backdrop Sepia")):+t.no==150?(h(),x("p",Tj,"Tables")):+t.no==151?(h(),x("p",Cj,"Border Collapse")):+t.no==152?(h(),x("p",Ej,"Border Spacing")):+t.no==153?(h(),x("p",Aj,"Table Layout")):+t.no==154?(h(),x("p",Oj,"Caption Side")):+t.no==155?(h(),x("p",Dj,"undefined")):+t.no==156?(h(),x("p",Bj,"Transitions & Animation")):+t.no==157?(h(),x("p",Mj,"Transition Property")):+t.no==158?(h(),x("p",Fj,"undefined")):+t.no==159?(h(),x("p",Ij,"Transition Duration")):+t.no==160?(h(),x("p",Lj,"Transition Timing Function")):+t.no==161?(h(),x("p",Rj,"Transition Delay")):+t.no==162?(h(),x("p",Hj,"Animation")):+t.no==163?(h(),x("p",zj,"undefined")):+t.no==164?(h(),x("p",Nj,"Transform")):+t.no==165?(h(),x("p",qj,"Scale")):+t.no==166?(h(),x("p",Vj,"Transform Origin")):+t.no==167?(h(),x("p",Gj,"Interactivity")):+t.no==168?(h(),x("p",Wj,"Accent Color")):+t.no==169?(h(),x("p",Uj,"Appearance")):+t.no==170?(h(),x("p",Kj,"Cursor")):+t.no==171?(h(),x("p",Yj,"undefined")):+t.no==172?(h(),x("p",Jj,"Caret Color")):+t.no==173?(h(),x("p",Zj,"Pointer Events")):+t.no==174?(h(),x("p",Xj,"Resize")):+t.no==175?(h(),x("p",Qj,"Scroll Behavior")):+t.no==176?(h(),x("p",e5,"Scroll Margin")):+t.no==177?(h(),x("p",t5,"Scroll Padding")):+t.no==178?(h(),x("p",n5,"Scroll Align")):+t.no==179?(h(),x("p",s5,"Scroll Snap Stop")):+t.no==180?(h(),x("p",l5,"Scroll Snap Type")):+t.no==181?(h(),x("p",o5,"Touch Action")):+t.no==182?(h(),x("p",i5,"User Select")):+t.no==183?(h(),x("p",r5,"Will Change")):+t.no==184?(h(),x("p",a5,"Svg")):+t.no==185?(h(),x("p",c5,"Fill")):+t.no==186?(h(),x("p",d5,"Stroke")):+t.no==187?(h(),x("p",u5,"Stroke Width")):+t.no==188?(h(),x("p",f5,"Accessibility")):+t.no==189?(h(),x("p",p5,"Screen Readers")):+t.no==190?(h(),x("p",m5,"Forced Color Adjust")):we("v-if",!0)]))}}),Rg=k(h5,[["__file","/@slidev/titles.md"]]),v5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},g5=["value","disabled"],_5=["border","onClick"],y5={"w-4":"","text-right":"",op50:"","text-sm":""},b5=Me({__name:"Goto",setup(e){const t=le(),l=le(),o=le(),s=le(),i=le(""),a=le(0);function r(j){return j!=null}const d=c(()=>new Ir(et.map(j=>{var N;return(N=j.meta)==null?void 0:N.slide}).filter(r),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),f=c(()=>i.value.startsWith("/")?i.value.substring(1):i.value),p=c(()=>d.value.search(f.value).map(j=>j.item)),m=c(()=>!!p.value.length);function v(){if(m.value){const j=p.value.at(a.value||0);j&&fr(j.no)}_()}function _(){i.value="",Sr.value=!1}function b(j){j.preventDefault(),a.value++,a.value>=p.value.length&&(a.value=0),T()}function $(j){j.preventDefault(),a.value--,a.value<=-2&&(a.value=p.value.length-1),T()}function T(){var N;const j=(N=s.value)==null?void 0:N[a.value];j&&o.value&&(j.offsetTop+j.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:j.offsetTop+j.offsetHeight-o.value.offsetHeight+1}):j.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:j.offsetTop}))}function E(j){a.value=0,i.value=j.target.value}function z(j){fr(j),_()}return Ae(Sr,async j=>{var N;j?(i.value="",a.value=0,setTimeout(()=>{var V;return(V=l.value)==null?void 0:V.focus()},0)):(N=l.value)==null||N.blur()}),Ae(ji,()=>{var j;(j=t.value)!=null&&j.contains(ji.value)||_()}),(j,N)=>(h(),x("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ve(["fixed right-5 transition-all",y(Sr)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[n("div",v5,[n("input",{id:"slidev-goto-input",ref_key:"input",ref:l,value:i.value,type:"text",disabled:!y(Sr),class:Ve(["outline-none bg-transparent",{"text-red-400":!m.value&&i.value}]),placeholder:"Goto...",onKeydown:[Za(v,["enter"]),Za(_,["escape"]),Za(b,["down"]),Za($,["up"])],onInput:E},null,42,g5)]),p.value.length>0?(h(),x("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(h(!0),x(Pe,null,mr(p.value,(V,X)=>(h(),x("li",{ref_for:!0,ref_key:"items",ref:s,key:V.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:X===0?"":"t main",class:Ve(a.value===X?"bg-active op100":"op80"),onClick:Xy(q=>z(V.no),["stop","prevent"])},[n("div",y5,Ht(V.no),1),Z(y(Rg),{no:V.no},null,8,["no"])],10,_5))),128))],512)):we("v-if",!0)],2))}}),w5=k(b5,[["__scopeId","data-v-6ee32503"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Goto.vue"]]),x5=Me({__name:"Controls",setup(e){const t=qo(),l=qo();return(o,s)=>(h(),x(Pe,null,[Z(Gk,{modelValue:y(pt),"onUpdate:modelValue":s[0]||(s[0]=i=>Ne(pt)?pt.value=i:null)},null,8,["modelValue"]),Z(w5),t.value?(h(),S(y(t),{key:0})):we("v-if",!0),l.value?(h(),S(y(l),{key:1,modelValue:y(Ad),"onUpdate:modelValue":s[1]||(s[1]=i=>Ne(Ad)?Ad.value=i:null)},null,8,["modelValue"])):we("v-if",!0),y(He).info?(h(),S(e$,{key:2,modelValue:y(ra),"onUpdate:modelValue":s[2]||(s[2]=i=>Ne(ra)?ra.value=i:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),k5=k(x5,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Controls.vue"]]),$5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S5=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"},null,-1),j5=[S5];function P5(e,t){return h(),x("svg",$5,[...j5])}const T5={name:"carbon-settings-adjust",render:P5},C5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E5=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8"},null,-1),A5=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),O5=[E5,A5];function D5(e,t){return h(),x("svg",C5,[...O5])}const B5={name:"carbon-information",render:D5},M5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F5=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"},null,-1),I5=[F5];function L5(e,t){return h(),x("svg",M5,[...I5])}const R5={name:"carbon-download",render:L5},H5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z5=n("path",{fill:"currentColor",d:"M26 6v4H6V6zm0-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 16v10H6V16zm0-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m16 2v10H16V16zm0-2H16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2"},null,-1),N5=[z5];function q5(e,t){return h(),x("svg",H5,[...N5])}const V5={name:"carbon-template",render:q5},G5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19M4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),U5=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"},null,-1),K5=[W5,U5];function Y5(e,t){return h(),x("svg",G5,[...K5])}const J5={name:"carbon-user-speaker",render:Y5},Z5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X5=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Q5=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H7V6h18Z"},null,-1),e4=[X5,Q5];function t4(e,t){return h(),x("svg",Z5,[...e4])}const n4={name:"carbon-presentation-file",render:t4},s4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l4=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),o4=[l4];function i4(e,t){return h(),x("svg",s4,[...o4])}const r4={name:"carbon-pen",render:i4},a4={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},c4=n("g",{fill:"currentColor"},[n("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33",opacity:".2"}),n("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),d4=[c4];function u4(e,t){return h(),x("svg",a4,[...d4])}const f4={name:"ph-cursor-duotone",render:u4},p4={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},m4=n("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),h4=[m4];function v4(e,t){return h(),x("svg",p4,[...h4])}const Hg={name:"ph-cursor-fill",render:v4},g4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_4=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),y4=[_4];function b4(e,t){return h(),x("svg",g4,[...y4])}const w4={name:"carbon-sun",render:b4},x4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k4=n("path",{fill:"currentColor",d:"M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"},null,-1),$4=[k4];function S4(e,t){return h(),x("svg",x4,[...$4])}const j4={name:"carbon-moon",render:S4},P4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T4=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),C4=[T4];function E4(e,t){return h(),x("svg",P4,[...C4])}const A4={name:"carbon-apps",render:E4},O4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D4=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"},null,-1),B4=[D4];function M4(e,t){return h(),x("svg",O4,[...B4])}const F4={name:"carbon-arrow-right",render:M4},I4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L4=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16z"},null,-1),R4=[L4];function H4(e,t){return h(),x("svg",I4,[...R4])}const z4={name:"carbon-arrow-left",render:H4},N4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q4=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414z"},null,-1),V4=[q4];function G4(e,t){return h(),x("svg",N4,[...V4])}const W4={name:"carbon-maximize",render:G4},U4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K4=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586z"},null,-1),Y4=[K4];function J4(e,t){return h(),x("svg",U4,[...Y4])}const Z4={name:"carbon-minimize",render:J4},X4={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q4=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"},null,-1),e8=[Q4];function t8(e,t){return h(),x("svg",X4,[...e8])}const n8={name:"carbon-checkmark",render:t8},s8={class:"select-list"},l8={class:"title"},o8={class:"items"},i8=["onClick"],r8=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=Ro(e,"modelValue",t,{passive:!0});return(i,a)=>{const r=n8;return h(),x("div",s8,[n("div",l8,Ht(e.title),1),n("div",o8,[(h(!0),x(Pe,null,mr(e.items,d=>(h(),x("div",{key:d.value,class:Ve(["item",{active:y(s)===d.value}]),onClick:()=>{var f;s.value=d.value,(f=d.onClick)==null||f.call(d)}},[Z(r,{class:Ve(["text-green-500",{"opacity-0":y(s)!==d.value}])},null,8,["class"]),H(" "+Ht(d.display||d.value),1)],10,i8))),128))])])}}}),a8=k(r8,[["__scopeId","data-v-daf2a06f"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/SelectList.vue"]]),c8={class:"text-sm"},d8=Me({__name:"Settings",setup(e){const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(l,o)=>(h(),x("div",c8,[Z(a8,{modelValue:y(pc),"onUpdate:modelValue":o[0]||(o[0]=s=>Ne(pc)?pc.value=s:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),u8=k(d8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Settings.vue"]]),f8={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},p8=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=Ro(e,"modelValue",t,{passive:!0}),i=le();return Ew(i,()=>{s.value=!1}),(a,r)=>(h(),x("div",{ref_key:"el",ref:i,class:"flex relative"},[n("button",{class:Ve({disabled:e.disabled}),onClick:r[0]||(r[0]=d=>s.value=!y(s))},[St(a.$slots,"button",{class:Ve({disabled:e.disabled})})],2),(h(),S(iv,null,[y(s)?(h(),x("div",f8,[St(a.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),m8=k(p8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/MenuButton.vue"]]),h8={},v8={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function g8(e,t){return h(),x("div",v8)}const sc=k(h8,[["render",g8],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),_8={render(){return[]}},y8={class:"slidev-icon-btn"},b8={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},w8={class:"my-auto"},x8={class:"opacity-50"},k8=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e,l=xu.smaller("md"),{isFullscreen:o,toggle:s}=_g,i=c(()=>Fu.value?`?password=${Fu.value}`:""),a=c(()=>`/presenter/${tt.value}${i.value}`),r=c(()=>`/${tt.value}${i.value}`),d=le();function f(){d.value&&ji.value&&d.value.contains(ji.value)&&ji.value.blur()}const p=c(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=qo(),v=qo();return ur(()=>import("./DrawingControls-qCC7iUTI.js"),__vite__mapDeps([])).then(_=>v.value=_.default),(_,b)=>{const $=Z4,T=W4,E=z4,z=F4,j=A4,N=j4,V=w4,X=Hg,q=f4,J=r4,U=n4,ie=dr("RouterLink"),pe=J5,ne=V5,be=R5,Se=B5,Ge=T5;return h(),x("nav",{ref_key:"root",ref:d,class:"flex flex-col"},[n("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:f},[y(Xo)?we("v-if",!0):(h(),x("button",{key:0,class:"slidev-icon-btn",onClick:b[0]||(b[0]=(...Te)=>y(s)&&y(s)(...Te))},[y(o)?(h(),x(Pe,{key:0},[Z(Ct,{text:"Close fullscreen"}),Z($)],64)):(h(),x(Pe,{key:1},[Z(Ct,{text:"Enter fullscreen"}),Z(T)],64))])),n("button",{class:Ve(["slidev-icon-btn",{disabled:!y(KY)}]),onClick:b[1]||(b[1]=(...Te)=>y(Ti)&&y(Ti)(...Te))},[Z(Ct,{text:"Go to previous slide"}),Z(E)],2),n("button",{class:Ve(["slidev-icon-btn",{disabled:!y(UY)}]),title:"Next",onClick:b[2]||(b[2]=(...Te)=>y(Pi)&&y(Pi)(...Te))},[Z(Ct,{text:"Go to next slide"}),Z(z)],2),y(Xo)?we("v-if",!0):(h(),x("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:b[3]||(b[3]=Te=>y(yg)())},[Z(Ct,{text:"Show slide overview"}),Z(j)])),y(Pu)?we("v-if",!0):(h(),x("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:b[4]||(b[4]=Te=>y(Sg)())},[y(jf)?(h(),x(Pe,{key:0},[Z(Ct,{text:"Switch to light theme"}),Z(N)],64)):(h(),x(Pe,{key:1},[Z(Ct,{text:"Switch to dark mode theme"}),Z(V)],64))])),Z(sc),y(Xo)?we("v-if",!0):(h(),x(Pe,{key:3},[!y(xt)&&!y(l)&&m.value?(h(),x(Pe,{key:0},[Z(y(m)),Z(sc)],64)):we("v-if",!0),y(xt)?(h(),x("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:b[5]||(b[5]=Te=>Od.value=!y(Od))},[y(Od)?(h(),x(Pe,{key:0},[Z(Ct,{text:"Hide presenter cursor"}),Z(X)],64)):(h(),x(Pe,{key:1},[Z(Ct,{text:"Show presenter cursor"}),Z(q)],64))])):we("v-if",!0)],64)),(!y(He).drawings.presenterOnly||y(xt))&&!y(Xo)?(h(),x(Pe,{key:4},[n("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:b[6]||(b[6]=Te=>Kt.value=!y(Kt))},[y(Kt)?(h(),S(Ct,{key:0,text:y(Kt)?"Hide drawing toolbar":"Show drawing toolbar"},null,8,["text"])):we("v-if",!0),Z(J),y(Kt)?(h(),x("div",{key:1,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:y(Xi).color})},null,4)):we("v-if",!0)]),Z(sc)],64)):we("v-if",!0),y(Xo)?we("v-if",!0):(h(),x(Pe,{key:5},[y(xt)?(h(),S(ie,{key:0,to:r.value,class:"slidev-icon-btn",title:"Play Mode"},{default:C(()=>[Z(U)]),_:1},8,["to"])):we("v-if",!0),y(NY)?(h(),S(ie,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:C(()=>[Z(pe)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0),y(xt)?(h(),x("button",{key:3,class:"slidev-icon-btn",title:"Toggle Presenter Layout",onClick:b[8]||(b[8]=(...Te)=>y(km)&&y(km)(...Te))},[Z(ne),H(" "+Ht(y(ta)),1)])):we("v-if",!0)],64)),(h(),x(Pe,{key:6},[y(He).download?(h(),x("button",{key:0,class:"slidev-icon-btn",onClick:b[9]||(b[9]=(...Te)=>y(Iu)&&y(Iu)(...Te))},[Z(Ct,{text:"Download as PDF"}),Z(be)])):we("v-if",!0)],64)),!y(xt)&&y(He).info&&!y(Xo)?(h(),x("button",{key:7,class:"slidev-icon-btn",onClick:b[10]||(b[10]=Te=>ra.value=!y(ra))},[Z(Ct,{text:"Show info"}),Z(Se)])):we("v-if",!0),!y(xt)&&!y(Xo)?(h(),S(m8,{key:8},{button:C(()=>[n("button",y8,[Z(Ct,{text:"Adjust settings"}),Z(Ge)])]),menu:C(()=>[Z(u8)]),_:1})):we("v-if",!0),y(Xo)?we("v-if",!0):(h(),S(sc,{key:9})),n("div",b8,[n("div",w8,[H(Ht(y(tt))+" ",1),n("span",x8,"/ "+Ht(y(qY)),1)])]),Z(y(_8))],34)],512)}}}),$8=k(k8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/NavControls.vue"]]);function S8(){const e=Ex(),t=le(!1);let l,o;const s=typeof document<"u"&&"startViewTransition"in document;return e.beforeResolve((i,a)=>{var _,b;const r=(_=a.meta.slide)==null?void 0:_.no,d=(b=i.meta.slide)==null?void 0:b.no;if(!(r!==void 0&&d!==void 0&&(a.meta.transition==="view-transition"&&r<d||i.meta.transition==="view-transition"&&d<r))){t.value=!1;return}if(!s){t.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}t.value=!0;const f=new Promise(($,T)=>{l=$,o=T});let p;const m=new Promise($=>p=$);return document.startViewTransition(()=>(p(),f)).finished.then(()=>{o=void 0,l=void 0}),m}),s&&e.afterEach(()=>{l==null||l(),o==null||o()}),t}const zc=le(!1),zg={render(){return[]}},Ng={render(){return[]}},j8={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},P8=Me({__name:"PresenterMouse",setup(e){return(t,l)=>{const o=Hg;return y(Pd).cursor?(h(),x("div",j8,[Z(o,{class:"absolute",style:st({left:`${y(Pd).cursor.x}%`,top:`${y(Pd).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),T8=k(P8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),C8=Me({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(e){Ae(mt,()=>{var a,r;(a=mt.value)!=null&&a.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),(r=Rd.value)!=null&&r.meta&&Rd.value.meta.preload!==!1&&(Rd.value.meta.__preloaded=!0)},{immediate:!0});const t=S8();let l=[];kt.beforeEach(()=>{var a;l=[(a=mt.value)==null?void 0:a.path,Rt.value]});const o=qo();ur(()=>import("./DrawingLayer-sRZSOlYN.js"),__vite__mapDeps([])).then(a=>o.value=a.default);const s=c(()=>et.filter(a=>{var r;return((r=a.meta)==null?void 0:r.__preloaded)||a===mt.value}));function i(){zc.value=!0}return(a,r)=>(h(),x(Pe,null,[we(" Global Bottom "),Z(y(Ng)),we(" Slides "),(h(),S(f1(y(t)?"div":Gy),Vo(y(zc)?{}:y(ZY),{id:"slideshow",tag:"div",onAfterLeave:i}),{default:C(()=>[(h(!0),x(Pe,null,mr(s.value,d=>{var f;return nv((h(),S(y(Cf),{key:d.path,is:d==null?void 0:d.component,clicks:d===y(mt)?y(Rt):d.path===y(l)[0]?y(l)[1]:0,"clicks-elements":((f=d.meta)==null?void 0:f.__clicksElements)||[],"clicks-disabled":!1,class:Ve(y(Tf)(d)),route:d,"render-context":a.renderContext},null,8,["is","clicks","clicks-elements","class","route","render-context"])),[[bf,d===y(mt)]])}),128))]),_:1},16)),we(" Global Top "),Z(y(zg)),o.value?(h(),S(y(o),{key:0})):we("v-if",!0),y(xt)?we("v-if",!0):(h(),S(T8,{key:1}))],64))}}),E8=k(C8,[["__scopeId","data-v-aaccc4a0"],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/SlidesShow.vue"]]),A8=Me({__name:"PrintStyle",setup(e){function t(l,{slots:o}){if(o.default)return At("style",o.default())}return(l,o)=>(h(),S(t,null,{default:C(()=>[H(" @page { size: "+Ht(y(Si))+"px "+Ht(y(xf))+"px; margin: 0px; } ",1)]),_:1}))}}),qg=k(A8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/PrintStyle.vue"]]),O8=Me({__name:"Play",setup(e){$k();const t=le();function l(i){var a;xm.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Pi():Ti())}XY(t);const o=c(()=>Ox.value||xm.value);qo();const s=qo();return ur(()=>import("./DrawingControls-qCC7iUTI.js"),__vite__mapDeps([])).then(i=>s.value=i.default),(i,a)=>(h(),x(Pe,null,[y(si)?(h(),S(qg,{key:0})):we("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:st(y(kf))},[Z(Tg,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:y(si)?y(ir).width.value:void 0,scale:y(pc),onPointerdown:l},{default:C(()=>[Z(E8,{"render-context":"slide"})]),controls:C(()=>[n("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",y(wa)?"pointer-events-none":""]])},[Z($8,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!y(He).drawings.presenterOnly&&!y(Xo)&&s.value?(h(),S(y(s),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),Z(k5)],64))}}),D8=k(O8,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Vg(e){return typeof e>"u"||e===null}function B8(e){return typeof e=="object"&&e!==null}function M8(e){return Array.isArray(e)?e:Vg(e)?[]:[e]}function F8(e,t){var l,o,s,i;if(t)for(i=Object.keys(t),l=0,o=i.length;l<o;l+=1)s=i[l],e[s]=t[s];return e}function I8(e,t){var l="",o;for(o=0;o<t;o+=1)l+=e;return l}function L8(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var R8=Vg,H8=B8,z8=M8,N8=I8,q8=L8,V8=F8,Af={isNothing:R8,isObject:H8,toArray:z8,repeat:N8,isNegativeZero:q8,extend:V8};function Gg(e,t){var l="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(l+='in "'+e.mark.name+'" '),l+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(l+=`

`+e.mark.snippet),o+" "+l):o}function ka(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Gg(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ka.prototype=Object.create(Error.prototype);ka.prototype.constructor=ka;ka.prototype.toString=function(t){return this.name+": "+Gg(this,t)};var Ji=ka,G8=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],W8=["scalar","sequence","mapping"];function U8(e){var t={};return e!==null&&Object.keys(e).forEach(function(l){e[l].forEach(function(o){t[String(o)]=l})}),t}function K8(e,t){if(t=t||{},Object.keys(t).forEach(function(l){if(G8.indexOf(l)===-1)throw new Ji('Unknown option "'+l+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(l){return l},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=U8(t.styleAliases||null),W8.indexOf(this.kind)===-1)throw new Ji('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var _t=K8;function Hm(e,t){var l=[];return e[t].forEach(function(o){var s=l.length;l.forEach(function(i,a){i.tag===o.tag&&i.kind===o.kind&&i.multi===o.multi&&(s=a)}),l[s]=o}),l}function Y8(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,l;function o(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(t=0,l=arguments.length;t<l;t+=1)arguments[t].forEach(o);return e}function Mu(e){return this.extend(e)}Mu.prototype.extend=function(t){var l=[],o=[];if(t instanceof _t)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(l=l.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Ji("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(i){if(!(i instanceof _t))throw new Ji("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new Ji("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new Ji("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(i){if(!(i instanceof _t))throw new Ji("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Mu.prototype);return s.implicit=(this.implicit||[]).concat(l),s.explicit=(this.explicit||[]).concat(o),s.compiledImplicit=Hm(s,"implicit"),s.compiledExplicit=Hm(s,"explicit"),s.compiledTypeMap=Y8(s.compiledImplicit,s.compiledExplicit),s};var J8=Mu,Z8=new _t("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),X8=new _t("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Q8=new _t("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),e6=new J8({explicit:[Z8,X8,Q8]});function t6(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function n6(){return null}function s6(e){return e===null}var l6=new _t("tag:yaml.org,2002:null",{kind:"scalar",resolve:t6,construct:n6,predicate:s6,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function o6(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function i6(e){return e==="true"||e==="True"||e==="TRUE"}function r6(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var a6=new _t("tag:yaml.org,2002:bool",{kind:"scalar",resolve:o6,construct:i6,predicate:r6,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function c6(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function d6(e){return 48<=e&&e<=55}function u6(e){return 48<=e&&e<=57}function f6(e){if(e===null)return!1;var t=e.length,l=0,o=!1,s;if(!t)return!1;if(s=e[l],(s==="-"||s==="+")&&(s=e[++l]),s==="0"){if(l+1===t)return!0;if(s=e[++l],s==="b"){for(l++;l<t;l++)if(s=e[l],s!=="_"){if(s!=="0"&&s!=="1")return!1;o=!0}return o&&s!=="_"}if(s==="x"){for(l++;l<t;l++)if(s=e[l],s!=="_"){if(!c6(e.charCodeAt(l)))return!1;o=!0}return o&&s!=="_"}if(s==="o"){for(l++;l<t;l++)if(s=e[l],s!=="_"){if(!d6(e.charCodeAt(l)))return!1;o=!0}return o&&s!=="_"}}if(s==="_")return!1;for(;l<t;l++)if(s=e[l],s!=="_"){if(!u6(e.charCodeAt(l)))return!1;o=!0}return!(!o||s==="_")}function p6(e){var t=e,l=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(l=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return l*parseInt(t.slice(2),2);if(t[1]==="x")return l*parseInt(t.slice(2),16);if(t[1]==="o")return l*parseInt(t.slice(2),8)}return l*parseInt(t,10)}function m6(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Af.isNegativeZero(e)}var h6=new _t("tag:yaml.org,2002:int",{kind:"scalar",resolve:f6,construct:p6,predicate:m6,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),v6=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function g6(e){return!(e===null||!v6.test(e)||e[e.length-1]==="_")}function _6(e){var t,l;return t=e.replace(/_/g,"").toLowerCase(),l=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?l===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:l*parseFloat(t,10)}var y6=/^[-+]?[0-9]+e/;function b6(e,t){var l;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Af.isNegativeZero(e))return"-0.0";return l=e.toString(10),y6.test(l)?l.replace("e",".e"):l}function w6(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Af.isNegativeZero(e))}var x6=new _t("tag:yaml.org,2002:float",{kind:"scalar",resolve:g6,construct:_6,predicate:w6,represent:b6,defaultStyle:"lowercase"}),k6=e6.extend({implicit:[l6,a6,h6,x6]}),$6=k6,Wg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ug=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function S6(e){return e===null?!1:Wg.exec(e)!==null||Ug.exec(e)!==null}function j6(e){var t,l,o,s,i,a,r,d=0,f=null,p,m,v;if(t=Wg.exec(e),t===null&&(t=Ug.exec(e)),t===null)throw new Error("Date resolve error");if(l=+t[1],o=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(l,o,s));if(i=+t[4],a=+t[5],r=+t[6],t[7]){for(d=t[7].slice(0,3);d.length<3;)d+="0";d=+d}return t[9]&&(p=+t[10],m=+(t[11]||0),f=(p*60+m)*6e4,t[9]==="-"&&(f=-f)),v=new Date(Date.UTC(l,o,s,i,a,r,d)),f&&v.setTime(v.getTime()-f),v}function P6(e){return e.toISOString()}var T6=new _t("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:S6,construct:j6,instanceOf:Date,represent:P6});function C6(e){return e==="<<"||e===null}var E6=new _t("tag:yaml.org,2002:merge",{kind:"scalar",resolve:C6}),Of=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function A6(e){if(e===null)return!1;var t,l,o=0,s=e.length,i=Of;for(l=0;l<s;l++)if(t=i.indexOf(e.charAt(l)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function O6(e){var t,l,o=e.replace(/[\r\n=]/g,""),s=o.length,i=Of,a=0,r=[];for(t=0;t<s;t++)t%4===0&&t&&(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)),a=a<<6|i.indexOf(o.charAt(t));return l=s%4*6,l===0?(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)):l===18?(r.push(a>>10&255),r.push(a>>2&255)):l===12&&r.push(a>>4&255),new Uint8Array(r)}function D6(e){var t="",l=0,o,s,i=e.length,a=Of;for(o=0;o<i;o++)o%3===0&&o&&(t+=a[l>>18&63],t+=a[l>>12&63],t+=a[l>>6&63],t+=a[l&63]),l=(l<<8)+e[o];return s=i%3,s===0?(t+=a[l>>18&63],t+=a[l>>12&63],t+=a[l>>6&63],t+=a[l&63]):s===2?(t+=a[l>>10&63],t+=a[l>>4&63],t+=a[l<<2&63],t+=a[64]):s===1&&(t+=a[l>>2&63],t+=a[l<<4&63],t+=a[64],t+=a[64]),t}function B6(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var M6=new _t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:A6,construct:O6,predicate:B6,represent:D6}),F6=Object.prototype.hasOwnProperty,I6=Object.prototype.toString;function L6(e){if(e===null)return!0;var t=[],l,o,s,i,a,r=e;for(l=0,o=r.length;l<o;l+=1){if(s=r[l],a=!1,I6.call(s)!=="[object Object]")return!1;for(i in s)if(F6.call(s,i))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(i)===-1)t.push(i);else return!1}return!0}function R6(e){return e!==null?e:[]}var H6=new _t("tag:yaml.org,2002:omap",{kind:"sequence",resolve:L6,construct:R6}),z6=Object.prototype.toString;function N6(e){if(e===null)return!0;var t,l,o,s,i,a=e;for(i=new Array(a.length),t=0,l=a.length;t<l;t+=1){if(o=a[t],z6.call(o)!=="[object Object]"||(s=Object.keys(o),s.length!==1))return!1;i[t]=[s[0],o[s[0]]]}return!0}function q6(e){if(e===null)return[];var t,l,o,s,i,a=e;for(i=new Array(a.length),t=0,l=a.length;t<l;t+=1)o=a[t],s=Object.keys(o),i[t]=[s[0],o[s[0]]];return i}var V6=new _t("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:N6,construct:q6}),G6=Object.prototype.hasOwnProperty;function W6(e){if(e===null)return!0;var t,l=e;for(t in l)if(G6.call(l,t)&&l[t]!==null)return!1;return!0}function U6(e){return e!==null?e:{}}var K6=new _t("tag:yaml.org,2002:set",{kind:"mapping",resolve:W6,construct:U6});$6.extend({implicit:[T6,E6],explicit:[M6,H6,V6,K6]});function zm(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Y6=new Array(256),J6=new Array(256);for(var xr=0;xr<256;xr++)Y6[xr]=zm(xr)?1:0,J6[xr]=zm(xr);function Z6(e){return Array.from(new Set(e))}function Nm(...e){let t,l,o;e.length===1?(t=0,o=1,[l]=e):[t,l,o=1]=e;const s=[];let i=t;for(;i<l;)s.push(i),i+=o||1;return s}function Kg(e,t){if(!t||t==="all"||t==="*")return Nm(1,e+1);const l=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))l.push(+o);else{const[s,i]=o.split("-",2);l.push(...Nm(+s,i?+i+1:e+1))}return Z6(l).filter(o=>o<=e).sort((o,s)=>o-s)}function Yg(e){const t=c(()=>e.value.path),l=c(()=>et.length),o=c(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),s=c(()=>dd(o.value)),i=c(()=>et.find(v=>v.path===`${o.value}`)),a=c(()=>{var v,_,b;return(b=(_=(v=i.value)==null?void 0:v.meta)==null?void 0:_.slide)==null?void 0:b.id}),r=c(()=>{var v,_;return((_=(v=i.value)==null?void 0:v.meta)==null?void 0:_.layout)||(o.value===1?"cover":"default")}),d=c(()=>et.find(v=>v.path===`${Math.min(et.length,o.value+1)}`)),f=c(()=>et.filter(v=>{var _,b;return(b=(_=v.meta)==null?void 0:_.slide)==null?void 0:b.title}).reduce((v,_)=>(Hf(v,_),v),[])),p=c(()=>zf(f.value,i.value)),m=c(()=>Nf(p.value));return{rawRoutes:et,route:e,path:t,total:l,currentPage:o,currentPath:s,currentRoute:i,currentSlideId:a,currentLayout:r,nextRoute:d,rawTree:f,treeWithActiveStatuses:p,tree:m,go:fr,downloadPDF:Iu,next:Pi,nextSlide:$a,openInEditor:QY,prev:Ti,prevSlide:Sa}}function Jg(e,t,l){const o=le(0);ut(()=>{kt.afterEach(async()=>{await ut(),o.value+=1})});const s=c(()=>{var d,f;return o.value,((f=(d=t.value)==null?void 0:d.meta)==null?void 0:f.__clicksElements)||[]}),i=c(()=>{var d,f;return+(((f=(d=t.value)==null?void 0:d.meta)==null?void 0:f.clicks)??s.value.length)}),a=c(()=>l.value<et.length-1||e.value<i.value),r=c(()=>l.value>1||e.value>0);return{clicks:e,clicksElements:s,clicksTotal:i,hasNext:a,hasPrev:r}}const X6=["id"],Q6=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:Object,required:!0},route:{type:Object,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const l=e,s=Ro(l,"clicksElements",t),i=c(()=>({height:`${xf}px`,width:`${Si}px`})),a=qo();ur(()=>Promise.resolve().then(()=>Ik),void 0).then(p=>a.value=p.default);const r=c(()=>l.clicks),d=Jg(r,l.nav.currentRoute,l.nav.currentPage),f=c(()=>`${l.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return A(D,g({nav:{...l.nav,...d},configs:He,themeConfigs:c(()=>He.themeConfig)})),(p,m)=>{var v;return h(),x("div",{id:f.value,class:"print-slide-container",style:st(i.value)},[Z(y(Ng)),Z(y(Cf),{is:(v=p.route)==null?void 0:v.component,"clicks-elements":y(s),"onUpdate:clicksElements":m[0]||(m[0]=_=>Ne(s)?s.value=_:null),clicks:y(rr)?void 0:r.value,"clicks-disabled":y(rr),class:Ve(y(Tf)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","clicks-disabled","class","route"]),a.value?(h(),S(y(a),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),Z(y(zg))],12,X6)}}}),qm=k(Q6,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),eP=Me({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(e){var a;const t=e,l=le(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),o=c(()=>{var r;return((r=t.route.meta)==null?void 0:r.clicks)??l.value.length}),s=c(()=>t.route),i=Yg(s);return(r,d)=>(h(),x(Pe,null,[Z(qm,{"clicks-elements":l.value,"onUpdate:clicksElements":d[0]||(d[0]=f=>l.value=f),clicks:0,nav:y(i),route:s.value},null,8,["clicks-elements","nav","route"]),y(rr)?we("v-if",!0):(h(!0),x(Pe,{key:0},mr(o.value,f=>(h(),S(qm,{key:f,clicks:f,nav:y(i),route:s.value},null,8,["clicks","nav","route"]))),128))],64))}}),tP=k(eP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/PrintSlide.vue"]]),nP={id:"print-content"},sP=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e,l=c(()=>t.width),o=c(()=>t.width/$i),s=c(()=>l.value/o.value),i=c(()=>s.value<$i?l.value/Si:o.value*$i/Si);let a=et;Jt.value.query.range&&(a=Kg(a.length,Jt.value.query.range).map(f=>a[f-1]));const r=c(()=>({"select-none":!He.selectable}));return A(Pg,i),(d,f)=>(h(),x("div",{id:"print-container",class:Ve(r.value)},[n("div",nP,[(h(!0),x(Pe,null,mr(y(a),p=>(h(),S(tP,{key:p.path,route:p},null,8,["route"]))),128))]),St(d.$slots,"controls")],2))}}),lP=k(sP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/PrintContainer.vue"]]),oP=Me({__name:"Print",setup(e){return pr(()=>{si?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,l)=>(h(),x(Pe,null,[y(si)?(h(),S(qg,{key:0})):we("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:st(y(kf))},[Z(lP,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:y(ir).width.value},null,8,["style","width"])],4)],64))}}),iP=k(oP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/internals/Print.vue"]]);function Vm(e){return e.startsWith("/")?"/my-slidevs/slidevs/learn-tailwind"+e.slice(1):e}function rP(e,t=!1){const l=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),o={background:l?e:void 0,color:e&&!l?"white":void 0,backgroundImage:l?void 0:e?t?`linear-gradient(#0005, #0008), url(${Vm(e)})`:`url("${Vm(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const aP={class:"my-auto w-full"},cP=Me({__name:"cover",props:{background:{default:""}},setup(e){const t=u(D);B(t,"nav"),u(O),u(M),u(F),u(I);const l=e,o=c(()=>rP(l.background,!0));return(s,i)=>(h(),x("div",{class:"slidev-layout cover",style:st(o.value)},[n("div",aP,[St(s.$slots,"default")])],4))}}),dP=k(cP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+theme-default@0.21.2/node_modules/@slidev/theme-default/layouts/cover.vue"]]),tn=g({theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shikiji",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",title:"Welcome to Slidev",hideInToc:!0,mdc:!0,addons:["@mudssky/slidev-addon-default"]}),uP=g({layout:c(()=>tn.layout),transition:c(()=>tn.transition),class:c(()=>tn.class),clicks:c(()=>tn.clicks),name:c(()=>tn.name),preload:c(()=>tn.preload),slide:{raw:"",title:"Welcome to Slidev",content:"",frontmatterStyle:"frontmatter",note:"",index:0,start:0,end:25,noteHTML:"",frontmatter:tn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}),fP=n("h1",null,"Tailwind 指南",-1),pP={__name:"1",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=tn;return A(I,tn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,tn))})(),(s,i)=>(h(),S(dP,R(L(y(tn))),{default:C(()=>[fP]),_:1},16))}},mP=k(pP,[["__file","/@slidev/slides/1.md"]]),hP={},vP={class:"slidev-layout default"};function gP(e,t){return h(),x("div",vP,[St(e.$slots,"default")])}const he=k(hP,[["render",gP],["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/layouts/default.vue"]]),nn=g({}),_P=g({layout:c(()=>nn.layout),transition:c(()=>nn.transition),class:c(()=>nn.class),clicks:c(()=>nn.clicks),name:c(()=>nn.name),preload:c(()=>nn.preload),slide:{raw:"",content:"",note:"",index:1,start:26,end:39,noteHTML:"",frontmatter:nn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}),yP=n("p",null,"目前决定跟着tailwind把css的属性都梳理一遍，这应该就是最实用最快的学习了。 之后就是学一些案例，做一些花里胡哨的东西。",-1),bP=n("p",null,"css杂七杂八的东西太多了，比如选择器，大部分情况就用一个类选择器，还有嵌套。浏览器里面的css，支持嵌套还没多久。 然而至少有几十个选择器。 主要还是平时开发的内容涉及的css偏少。",-1),wP=n("p",null,"如果只考虑tailwind的话，要学的东西就少了很多。甚至选择器都不太需要考虑了。",-1),xP=n("p",null,"本来我想找点书看，但是张鑫旭的css系列书籍，一方面很罗嗦。。。另一方面，感觉很多内容都过时了（书都是好几年前的），没必要学， 看了也记不住。 前端的有些东西就是新的出了以后，以前的学习就毫无价值了",-1),kP={__name:"2",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=nn;return A(I,nn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,nn))})(),(s,i)=>(h(),S(he,R(L(y(nn))),{default:C(()=>[yP,bP,wP,xP]),_:1},16))}},$P=k(kP,[["__file","/@slidev/slides/2.md"]]),SP=["href","innerHTML"],jP=["href"],PP=Me({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return(t,l)=>{const o=dr("RouterLink");return!y(si)&&t.title?(h(),S(o,{key:0,to:String(t.to),onClick:l[0]||(l[0]=s=>s.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!y(si)&&!t.title?(h(),S(o,{key:1,to:String(t.to),onClick:l[1]||(l[1]=s=>s.target.blur())},{default:C(()=>[St(t.$slots,"default")]),_:3},8,["to"])):y(si)&&t.title?(h(),x("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,SP)):(h(),x("a",{key:3,href:`#${t.to}`},[St(t.$slots,"default")],8,jP))}}}),TP=k(PP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/builtin/Link.vue"]]),CP=["start"],EP=Me({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e,l=c(()=>[...Qp(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]),o=c(()=>[...Qp(t.listStyle||[])]);return(s,i)=>{const a=TP,r=dr("TocList",!0);return s.list&&s.list.length>0?(h(),x("ol",{key:0,class:Ve(l.value),start:s.level===1?s.start:void 0,style:st(o.value.length>=s.level?`list-style:${o.value[s.level-1]}`:void 0)},[(h(!0),x(Pe,null,mr(s.list,d=>(h(),x("li",{key:d.path,class:Ve(["slidev-toc-item",[{"slidev-toc-item-active":d.active},{"slidev-toc-item-parent-active":d.activeParent}]])},[Z(a,{to:d.path},{default:C(()=>[Z(y(Rg),{no:d.path},null,8,["no"])]),_:2},1032,["to"]),d.children.length>0?(h(),S(r,{key:0,level:s.level+1,"list-style":s.listStyle,list:d.children,"list-class":s.listClass},null,8,["level","list-style","list","list-class"])):we("v-if",!0)],2))),128))],14,CP)):we("v-if",!0)}}}),AP=k(EP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/builtin/TocList.vue"]]),OP=Me({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,l=u(D);function o(r,d=1){if(d>Number(t.maxDepth))return[];if(d<Number(t.minDepth)){const f=r.find(p=>p.active||p.activeParent);return f?o(f.children,d+1):[]}return r.map(f=>({...f,children:o(f.children,d+1)}))}function s(r){return r.filter(d=>d.active||d.activeParent||d.hasActiveParent).map(d=>({...d,children:s(d.children)}))}function i(r){const d=r.some(f=>f.active||f.activeParent||f.hasActiveParent);return r.filter(()=>d).map(f=>({...f,children:i(f.children)}))}const a=c(()=>{const r=l==null?void 0:l.nav.tree;if(!r)return[];let d=o(r);return t.mode==="onlyCurrentTree"?d=s(d):t.mode==="onlySiblings"&&(d=i(d)),d});return(r,d)=>{const f=AP;return h(),x("div",{class:"slidev-toc",style:st(`column-count:${r.columns}`)},[Z(f,{level:1,start:r.start,"list-style":r.listStyle,list:a.value,"list-class":r.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),DP=k(OP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/builtin/Toc.vue"]]),sn=g({}),BP=g({layout:c(()=>sn.layout),transition:c(()=>sn.transition),class:c(()=>sn.class),clicks:c(()=>sn.clicks),name:c(()=>sn.name),preload:c(()=>sn.preload),slide:{raw:"",title:"目录",level:2,content:"",note:"",index:2,start:40,end:51,noteHTML:"",frontmatter:sn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}),MP=e=>(Dt("data-v-bb8a831f"),e=e(),Bt(),e),FP=MP(()=>n("h2",null,"目录",-1)),IP={__name:"3",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=sn;return A(I,sn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,sn))})(),(s,i)=>{const a=DP;return h(),S(he,R(L(y(sn))),{default:C(()=>[FP,Z(a,{columns:"4"})]),_:1},16)}}},LP=k(IP,[["__scopeId","data-v-bb8a831f"],["__file","/@slidev/slides/3.md"]]);function Gm(e){return e.startsWith("/")?"/my-slidevs/slidevs/learn-tailwind"+e.slice(1):e}function RP(e,t=!1,l="cover"){const o=e&&(e[0]==="#"||e.startsWith("rgb")),s={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?t?`linear-gradient(#0005, #0008), url(${Gm(e)})`:`url("${Gm(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:l};return s.background||delete s.background,s}const HP={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},zP=Me({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const t=e,l=c(()=>RP(t.image,!1,t.backgroundSize));return(o,s)=>(h(),x("div",HP,[n("div",{class:Ve(["slidev-layout default",t.class])},[St(o.$slots,"default")],2),n("div",{class:"w-full h-full",style:st(l.value)},null,4)]))}}),Pt=k(zP,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/layouts/image-right.vue"]]),ln=g({title:"Layout 布局",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/001layout.md"}),NP=g({layout:c(()=>ln.layout),transition:c(()=>ln.transition),class:c(()=>ln.class),clicks:c(()=>ln.clicks),name:c(()=>ln.name),preload:c(()=>ln.preload),slide:{raw:"",title:"Layout 布局",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:3,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Layout 布局
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## 布局
`,title:"Layout 布局",level:1,content:"## 布局",frontmatter:{title:"Layout 布局",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/001layout.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:4,start:56,end:60},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:ln,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:3,no:4},__clicksElements:[],__preloaded:!1}),qP=n("h2",null,"布局",-1),VP={__name:"4",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ln;return A(I,ln),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ln))})(),(s,i)=>(h(),S(Pt,R(L(y(ln))),{default:C(()=>[qP]),_:1},16))}},GP=k(VP,[["__file","/@slidev/slides/4.md"]]),WP={},Df=e=>(Dt("data-v-cad2971d"),e=e(),Bt(),e),UP={class:"box-container"},KP=Df(()=>n("div",{class:"box1"},"auto",-1)),YP=Df(()=>n("div",{class:"box2"},"1/1",-1)),JP=Df(()=>n("div",{class:"box3"},"16/9",-1)),ZP=[KP,YP,JP];function XP(e,t){return h(),x("div",UP,[...ZP])}const QP=k(WP,[["render",XP],["__scopeId","data-v-cad2971d"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo001AspectRatio.vue"]]),eT={class:"w-full h-full rounded-lg p-3 overflow-hidden"},tT=["src"],nT=Me({__name:"CanIUse",props:{src:{type:String,required:!0},buttonText:{type:String,required:!0,default:"查看canIUse"}},setup(e){const t=u(D);B(t,"nav"),u(O),u(M),u(F),u(I);const l=e,o=le(),s=()=>{o.value.showModal()},i=()=>{o.value.close()},a=r=>{r.target.tagName.toLowerCase()=="dialog"&&i()};return Wo(()=>{var r;console.log("attrs",(r=jt())==null?void 0:r.attrs)}),(r,d)=>(h(),x(Pe,null,[n("button",{class:"btn-primary",onClick:s},Ht(l.buttonText),1),n("dialog",{ref_key:"dialogDomRef",ref:o,class:"w-11/12 h-full border-none",onClick:a},[n("div",eT,[n("div",{class:"flex justify-end"},[n("button",{onClick:i},"x")]),n("iframe",{src:l.src,class:"w-full h-full",frameborder:"0"},null,8,tT)])],512)],64))}}),gr=k(nT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/CanIUse.vue"]]),sT=Me({__name:"CanIUseCssProperty",props:{cssProperty:{type:String,required:!0}},setup(e){const t=u(D);B(t,"nav"),u(O),u(M),u(F),u(I);const l=e,o=c(()=>"https://caniuse.com/mdn-css_properties_"+l.cssProperty);return(s,i)=>{const a=gr;return h(),S(a,{src:o.value,buttonText:"can I use "+l.cssProperty},null,8,["src","buttonText"])}}}),La=k(sT,[["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/CanIUseCssProperty.vue"]]);function Zg(e){var t,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(l=Zg(e[t]))&&(o&&(o+=" "),o+=l)}else for(l in e)e[l]&&(o&&(o+=" "),o+=l);return o}function Ld(){for(var e,t,l=0,o="",s=arguments.length;l<s;l++)(e=arguments[l])&&(t=Zg(e))&&(o&&(o+=" "),o+=t);return o}const lT={class:"slidev-layout default overflow-y-auto"},oT=Me({__name:"slim-table",setup(e){const t=u(D);B(t,"nav"),u(O),u(M),u(F),u(I);const l=le("");return Wo(()=>{const o=jt().attrs.tableSize??"middle",s=jt().attrs.tableContainerClass??"";switch(o){case"middle":l.value=Ld("slim-table-middle",s);break;case"small":l.value=Ld("slim-table-small",s);break}}),(o,s)=>(h(),x("div",lT,[n("div",{class:Ve(y(Ld)(l.value))},[St(o.$slots,"default")],2)]))}}),Y=k(oT,[["__file","D:/coding/Projects/frontend/my-slidevs/packages/slidev-addon-default/layouts/slim-table.vue"]]),on=g({title:"Aspect Ratio",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),iT=g({layout:c(()=>on.layout),transition:c(()=>on.transition),class:c(()=>on.class),clicks:c(()=>on.clicks),name:c(()=>on.name),preload:c(()=>on.preload),slide:{raw:"",title:"Aspect Ratio",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:4,start:9,end:38,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Aspect Ratio
level: 2
layout: slim-table
---
### Aspect Ratio 高宽比

| Class         | Properties            |
| ------------- | --------------------- |
| aspect-auto   | aspect-ratio: auto;   |
| aspect-square | aspect-ratio: 1 / 1;  |
| aspect-video  | aspect-ratio: 16 / 9; |

这个属性chrome 21年才开始支持。目前覆盖率才94%.
不是很适合在项目中使用，还要安装插件解决兼容性问题

<CanIUseCssProperty cssProperty="aspect-ratio" />

参数有两种形式，一个是auto，另一个是宽高的比值形式

<Demo001AspectRatio/>
<style>
   .slidev-layout p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
}
</style>
`,title:"Aspect Ratio",level:2,content:`### Aspect Ratio 高宽比

| Class         | Properties            |
| ------------- | --------------------- |
| aspect-auto   | aspect-ratio: auto;   |
| aspect-square | aspect-ratio: 1 / 1;  |
| aspect-video  | aspect-ratio: 16 / 9; |

这个属性chrome 21年才开始支持。目前覆盖率才94%.
不是很适合在项目中使用，还要安装插件解决兼容性问题

<CanIUseCssProperty cssProperty="aspect-ratio" />

参数有两种形式，一个是auto，另一个是宽高的比值形式

<Demo001AspectRatio/>
<style>
   .slidev-layout p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
}
</style>`,frontmatter:{title:"Aspect Ratio",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:38},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:on,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:4,no:5},__clicksElements:[],__preloaded:!1}),ad=e=>(Dt("data-v-381a2d6a"),e=e(),Bt(),e),rT=ad(()=>n("h3",null,"Aspect Ratio 高宽比",-1)),aT=ad(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"aspect-auto"),n("td",null,"aspect-ratio: auto;")]),n("tr",null,[n("td",null,"aspect-square"),n("td",null,"aspect-ratio: 1 / 1;")]),n("tr",null,[n("td",null,"aspect-video"),n("td",null,"aspect-ratio: 16 / 9;")])])],-1)),cT=ad(()=>n("p",null,"这个属性chrome 21年才开始支持。目前覆盖率才94%. 不是很适合在项目中使用，还要安装插件解决兼容性问题",-1)),dT=ad(()=>n("p",null,"参数有两种形式，一个是auto，另一个是宽高的比值形式",-1)),uT={__name:"5",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=on;return A(I,on),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,on))})(),(s,i)=>{const a=La,r=QP;return h(),S(Y,R(L(y(on))),{default:C(()=>[rT,aT,cT,Z(a,{cssProperty:"aspect-ratio"}),dT,Z(r)]),_:1},16)}}},fT=k(uT,[["__scopeId","data-v-381a2d6a"],["__file","/@slidev/slides/5.md"]]),pT={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mT=n("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),hT=[mT];function vT(e,t){return h(),x("svg",pT,[...hT])}const gT={name:"ph-clipboard",render:vT},_T={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yT=n("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"},null,-1),bT=[yT];function wT(e,t){return h(),x("svg",_T,[...bT])}const xT={name:"ph-check-circle",render:wT};function rQ(){const e=le(Date.now()),t=t2({interval:1e3}),l=c(()=>{const s=(t.value-e.value)/1e3,i=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${i}`});function o(){e.value=t.value}return{timer:l,resetTimer:o}}function kT(e=5){const t=[],l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=l.length;for(let s=0;s<e;s++)t.push(l.charAt(Math.floor(Math.random()*o)));return t.join("")}const $T=["title"],ST=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:He.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e,l=u(O),o=u(Ki),s=u(aa),i=le(),a=jt();Wo(()=>{const p=t.at==null?o==null?void 0:o.value.length:t.at,m=c(()=>s!=null&&s.value?t.ranges.length-1:Math.min(Math.max(0,((l==null?void 0:l.value)||0)-(p||0)),t.ranges.length-1)),v=c(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(s!=null&&s.value)){const _=kT(),b=Qb(t.ranges.length-1).map($=>_+$);o!=null&&o.value&&(o.value.push(...b),td(()=>b.forEach($=>mu(o.value,$)),a))}pr(()=>{if(!i.value)return;const b=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value],$=t.startLine;for(const T of b){const E=Array.from(T.querySelectorAll("code > .line")),z=Kg(E.length+$-1,v.value);if(E.forEach((j,N)=>{const V=z.includes(N+$);j.classList.toggle(Gi,!0),j.classList.toggle("highlighted",V),j.classList.toggle("dishonored",!V)}),t.maxHeight){const j=Array.from(T.querySelectorAll(".line.highlighted"));j.reduce((V,X)=>X.offsetHeight+V,0)>i.value.offsetHeight?j[0].scrollIntoView({behavior:"smooth",block:"start"}):j.length>0&&j[Math.round((j.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:r,copy:d}=Iw();function f(){var m,v;const p=(v=(m=i.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:v.textContent;p&&d(p)}return(p,m)=>{const v=xT,_=gT;return h(),x("div",{ref_key:"el",ref:i,class:Ve(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:st({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[St(p.$slots,"default"),y(He).codeCopy?(h(),x("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:y(r)?"Copied":"Copy",onClick:m[0]||(m[0]=b=>f())},[y(r)?(h(),S(v,{key:0,class:"p-2 w-8 h-8"})):(h(),S(_,{key:1,class:"p-2 w-8 h-8"}))],8,$T)):we("v-if",!0)],6)}}}),cd=k(ST,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),jT={},PT={class:"container h-[200px] bg-red-200"},TT=n("br",null,null,-1);function CT(e,t){return h(),x("div",PT,[H(" 设置了不同响应式节点的宽度， 最小的情况，宽度是100%，其余使用媒体查询，对应的节点，设置对应的最大宽度。 "),TT,H(" 一系列查询按照顺序排列，这样随着容器增大，max-width会达到特定的宽度 ")])}const ET=k(jT,[["render",CT],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo002Container.vue"]]),rn=g({title:"Container",level:2,srcSequence:"./pages/001layout.md"}),AT=g({layout:c(()=>rn.layout),transition:c(()=>rn.transition),class:c(()=>rn.class),clicks:c(()=>rn.clicks),name:c(()=>rn.name),preload:c(()=>rn.preload),slide:{raw:"",title:"Container",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:5,start:38,end:85,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Container
level: 2
---

### Container 响应式容器
tailwind中的容器是响应式设计的
<Demo002Container/>

\`\`\`css
.container {
    width: 100%;
}
@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}
\`\`\`

<style>
 pre{
 @apply !h-[180px] overflow-auto;

 }
</style>
`,title:"Container",level:2,content:`### Container 响应式容器
tailwind中的容器是响应式设计的
<Demo002Container/>

\`\`\`css
.container {
    width: 100%;
}
@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}
\`\`\`

<style>
 pre{
 @apply !h-[180px] overflow-auto;

 }
</style>`,frontmatter:{title:"Container",level:2},frontmatterStyle:"frontmatter",index:2,start:38,end:85},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:rn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:5,no:6},__clicksElements:[],__preloaded:!1}),Bf=e=>(Dt("data-v-56e11b48"),e=e(),Bt(),e),OT=Bf(()=>n("h3",null,"Container 响应式容器",-1)),DT=Bf(()=>n("p",null,"tailwind中的容器是响应式设计的",-1)),BT=Bf(()=>n("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code shikiji",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[n("code",{class:"language-css"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"    width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 100"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"%"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"@"),n("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"media"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," ("),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"min-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 640"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    ."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"        max-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 640"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    }")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"@"),n("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"media"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," ("),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"min-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 768"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    ."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"        max-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 768"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    }")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"@"),n("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"media"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," ("),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"min-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1024"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    ."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"        max-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1024"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    }")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"@"),n("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"media"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," ("),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"min-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1280"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    ."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"        max-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1280"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    }")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"@"),n("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"media"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," ("),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"min-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1536"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    ."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"container"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"        max-width"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1536"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    }")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"})])],-1)),MT={__name:"6",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=rn;return A(I,rn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,rn))})(),(s,i)=>{const a=ET,r=cd;return h(),S(he,R(L(y(rn))),{default:C(()=>[OT,DT,Z(a),Z(r,Vo({},{ranges:[""]}),{default:C(()=>[BT]),_:1},16)]),_:1},16)}}},FT=k(MT,[["__scopeId","data-v-56e11b48"],["__file","/@slidev/slides/6.md"]]),IT={},Mf=e=>(Dt("data-v-bccf1cb7"),e=e(),Bt(),e),LT={class:"box-container"},RT=Mf(()=>n("div",{class:"box1"},"box1",-1)),HT=Mf(()=>n("div",{class:"box2"},"box2",-1)),zT=Mf(()=>n("div",{class:"box3"},"box3",-1));function NT(e,t){return h(),x("div",LT,[RT,HT,zT,we(' <div class="box4">box4</div> ')])}const qT=k(IT,[["render",NT],["__scopeId","data-v-bccf1cb7"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo003Column.vue"]]),an=g({title:"Column",level:2,srcSequence:"./pages/001layout.md"}),VT=g({layout:c(()=>an.layout),transition:c(()=>an.transition),class:c(()=>an.class),clicks:c(()=>an.clicks),name:c(()=>an.name),preload:c(()=>an.preload),slide:{raw:"",title:"Column",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:6,start:85,end:107,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Column
level: 2
---

### Column
可以设置列数和列宽，是column-with和column-count的结合

\`\`\`css
columns = 
  <'column-width'>  ||
  <'column-count'>  
\`\`\`

可以看出他是把子元素数量按列数平分，然后从上到下，从左到右排列
gap可以设置列间隙

<CanIUseCssProperty cssProperty="columns" />
兼容性上，从2016年开始支持，目前覆盖97%，属于可用了，因为flex的一些常用属性也才这个覆盖率。
(我觉得大部分情况还是用flex和grid布局吧，那些更通用)
<Demo003Column />
`,title:"Column",level:2,content:`### Column
可以设置列数和列宽，是column-with和column-count的结合

\`\`\`css
columns = 
  <'column-width'>  ||
  <'column-count'>  
\`\`\`

可以看出他是把子元素数量按列数平分，然后从上到下，从左到右排列
gap可以设置列间隙

<CanIUseCssProperty cssProperty="columns" />
兼容性上，从2016年开始支持，目前覆盖97%，属于可用了，因为flex的一些常用属性也才这个覆盖率。
(我觉得大部分情况还是用flex和grid布局吧，那些更通用)
<Demo003Column />`,frontmatter:{title:"Column",level:2},frontmatterStyle:"frontmatter",index:3,start:85,end:107},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:an,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:6,no:7},__clicksElements:[],__preloaded:!1}),GT=n("h3",null,"Column",-1),WT=n("p",null,"可以设置列数和列宽，是column-with和column-count的结合",-1),UT=n("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code shikiji",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[n("code",{class:"language-css"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"columns = ")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"  <'"),n("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"column-width"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"'"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"  |"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"|")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"  <'"),n("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"column-count"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"'"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},">")]),H(`
`),n("span",{class:"line"})])],-1),KT=n("p",null,"可以看出他是把子元素数量按列数平分，然后从上到下，从左到右排列 gap可以设置列间隙",-1),YT=n("p",null,"兼容性上，从2016年开始支持，目前覆盖97%，属于可用了，因为flex的一些常用属性也才这个覆盖率。 (我觉得大部分情况还是用flex和grid布局吧，那些更通用)",-1),JT={__name:"7",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=an;return A(I,an),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,an))})(),(s,i)=>{const a=cd,r=La,d=qT;return h(),S(he,R(L(y(an))),{default:C(()=>[GT,WT,Z(a,Vo({},{ranges:[""]}),{default:C(()=>[UT]),_:1},16),KT,Z(r,{cssProperty:"columns"}),YT,Z(d)]),_:1},16)}}},ZT=k(JT,[["__file","/@slidev/slides/7.md"]]),XT={},QT=n("div",{class:"columns-2"},[n("p",{class:"break-after-column"},"Well, let me tell you something, ..."),n("p",null,"Sure, go ahead, laugh..."),n("p",null,"Maybe we can live without..."),n("p",null,"Look. If you think this is...")],-1),eC=n("br",null,null,-1);function tC(e,t){return h(),x(Pe,null,[QT,eC],64)}const nC=k(XT,[["render",tC],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo004BreakAfter.vue"]]),cn=g({title:"Break After",level:2,srcSequence:"./pages/001layout.md"}),sC=g({layout:c(()=>cn.layout),transition:c(()=>cn.transition),class:c(()=>cn.class),clicks:c(()=>cn.clicks),name:c(()=>cn.name),preload:c(()=>cn.preload),slide:{raw:"",title:"Break After",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:7,start:107,end:128,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Break After
level: 2
---

### Break After

用于控制列或页面在元素之后如何分隔。
#### break-after-column
控制分栏的方式，比如\`break-after:column\`,设置后，那个元素后会强制分栏
也是和column结合使用的属性

比如下面我在第一个p元素上设置了\`break-after:column\`，如果设置为auto，应该在第二个元素之后再换栏

<Demo004BreakAfter/>

#### break-after-page
控制打印时分页的样式

因为目前没碰到实用场景，暂时只了解这些，碰到之后再深入了解。
`,title:"Break After",level:2,content:`### Break After

用于控制列或页面在元素之后如何分隔。
#### break-after-column
控制分栏的方式，比如\`break-after:column\`,设置后，那个元素后会强制分栏
也是和column结合使用的属性

比如下面我在第一个p元素上设置了\`break-after:column\`，如果设置为auto，应该在第二个元素之后再换栏

<Demo004BreakAfter/>

#### break-after-page
控制打印时分页的样式

因为目前没碰到实用场景，暂时只了解这些，碰到之后再深入了解。`,frontmatter:{title:"Break After",level:2},frontmatterStyle:"frontmatter",index:4,start:107,end:128},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:cn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:7,no:8},__clicksElements:[],__preloaded:!1}),lC=n("h3",null,"Break After",-1),oC=n("p",null,"用于控制列或页面在元素之后如何分隔。",-1),iC=n("h4",null,"break-after-column",-1),rC=n("p",null,[H("控制分栏的方式，比如"),n("code",null,"break-after:column"),H(",设置后，那个元素后会强制分栏 也是和column结合使用的属性")],-1),aC=n("p",null,[H("比如下面我在第一个p元素上设置了"),n("code",null,"break-after:column"),H("，如果设置为auto，应该在第二个元素之后再换栏")],-1),cC=n("h4",null,"break-after-page",-1),dC=n("p",null,"控制打印时分页的样式",-1),uC=n("p",null,"因为目前没碰到实用场景，暂时只了解这些，碰到之后再深入了解。",-1),fC={__name:"8",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=cn;return A(I,cn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,cn))})(),(s,i)=>{const a=nC;return h(),S(he,R(L(y(cn))),{default:C(()=>[lC,oC,iC,rC,aC,Z(a),cC,dC,uC]),_:1},16)}}},pC=k(fC,[["__file","/@slidev/slides/8.md"]]),mC={},hC=n("div",{class:"columns-2"},[n("p",null,"Well, let me tell you something, ..."),n("p",{class:"break-before-column"},"Sure, go ahead, laugh..."),n("p",null,"Maybe we can live without..."),n("p",null,"Look. If you think this is...")],-1),vC=n("br",null,null,-1);function gC(e,t){return h(),x(Pe,null,[hC,vC],64)}const _C=k(mC,[["render",gC],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo005BreakBefore.vue"]]),dn=g({title:"Break Before",level:2,srcSequence:"./pages/001layout.md"}),yC=g({layout:c(()=>dn.layout),transition:c(()=>dn.transition),class:c(()=>dn.class),clicks:c(()=>dn.clicks),name:c(()=>dn.name),preload:c(()=>dn.preload),slide:{raw:"",title:"Break Before",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:8,start:128,end:140,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Break Before
level: 2
---

### Break Before
和Break After 配套的

用于控制列或页面如何在元素之前分隔
\`break-before-column\`就和之前那个一样，分隔应用于前一个元素
<Demo005BreakBefore/>
`,title:"Break Before",level:2,content:`### Break Before
和Break After 配套的

用于控制列或页面如何在元素之前分隔
\`break-before-column\`就和之前那个一样，分隔应用于前一个元素
<Demo005BreakBefore/>`,frontmatter:{title:"Break Before",level:2},frontmatterStyle:"frontmatter",index:5,start:128,end:140},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:dn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:8,no:9},__clicksElements:[],__preloaded:!1}),bC=n("h3",null,"Break Before",-1),wC=n("p",null,"和Break After 配套的",-1),xC=n("p",null,[H("用于控制列或页面如何在元素之前分隔 "),n("code",null,"break-before-column"),H("就和之前那个一样，分隔应用于前一个元素")],-1),kC={__name:"9",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=dn;return A(I,dn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,dn))})(),(s,i)=>{const a=_C;return h(),S(he,R(L(y(dn))),{default:C(()=>[bC,wC,xC,Z(a)]),_:1},16)}}},$C=k(kC,[["__file","/@slidev/slides/9.md"]]),SC={},jC=n("div",{class:"columns-2"},[n("p",null,"Well, let me tell you something, ..."),n("p",{class:"break-inside-avoid-column"},"Sure, go ahead, laugh..."),n("p",null,"Maybe we can live without..."),n("p",null,"Look. If you think this is...")],-1),PC=n("br",null,null,-1);function TC(e,t){return h(),x(Pe,null,[jC,PC],64)}const CC=k(SC,[["render",TC],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo006BreakInside.vue"]]),un=g({title:"Break Inside",level:2,srcSequence:"./pages/001layout.md"}),EC=g({layout:c(()=>un.layout),transition:c(()=>un.transition),class:c(()=>un.class),clicks:c(()=>un.clicks),name:c(()=>un.name),preload:c(()=>un.preload),slide:{raw:"",title:"Break Inside",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:9,start:140,end:150,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Break Inside
level: 2
---

### Break Inside
用于控制列或页面在元素内的分隔方式

<Demo006BreakInside/>
`,title:"Break Inside",level:2,content:`### Break Inside
用于控制列或页面在元素内的分隔方式

<Demo006BreakInside/>`,frontmatter:{title:"Break Inside",level:2},frontmatterStyle:"frontmatter",index:6,start:140,end:150},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:un,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:9,no:10},__clicksElements:[],__preloaded:!1}),AC=n("h3",null,"Break Inside",-1),OC=n("p",null,"用于控制列或页面在元素内的分隔方式",-1),DC={__name:"10",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=un;return A(I,un),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,un))})(),(s,i)=>{const a=CC;return h(),S(he,R(L(y(un))),{default:C(()=>[AC,OC,Z(a)]),_:1},16)}}},BC=k(DC,[["__file","/@slidev/slides/10.md"]]),MC={},Xg=e=>(Dt("data-v-5ccff1f1"),e=e(),Bt(),e),FC={class:"box-container"},IC=Xg(()=>n("div",null,[n("span",null,[H("ABCD "),n("br"),H("EFG "),n("br"),H(" HI"),n("br"),H(" JKLMN")])],-1)),LC=Xg(()=>n("span",null,[H("ABCD "),n("br"),H("EFG "),n("br"),H(" HI"),n("br"),H(" JKLMN")],-1));function RC(e,t){return h(),x("div",FC,[we(` <span\r
      class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"\r
    >\r
      Hello<br />\r
      World\r
    </span> `),we(` <span\r
      class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"\r
    >\r
      Hello<br />\r
      World\r
    </span> `),IC,LC])}const HC=k(MC,[["render",RC],["__scopeId","data-v-5ccff1f1"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo007BoxDecoration.vue"]]),fn=g({title:"Box Decoration Break",level:2,srcSequence:"./pages/001layout.md"}),zC=g({layout:c(()=>fn.layout),transition:c(()=>fn.transition),class:c(()=>fn.class),clicks:c(()=>fn.clicks),name:c(()=>fn.name),preload:c(()=>fn.preload),slide:{raw:"",title:"Box Decoration Break",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:10,start:150,end:166,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Box Decoration Break
level: 2
---
### Box Decoration Break
这个部分支持，甚至chrome里面也不识别，需要添加webkit前缀，不建议使用

控制background, border, border-image, box-shadow, clip-path, margin, and padding等属性在换行时的效果
默认是
\`--webkit-box-decoration-break: slice;\`
换成 \`--webkit-box-decoration-break: clone;\`就可以在换行出连续
<CanIUse src="https://caniuse.com/css-boxdecorationbreak" />

下面是边框换行的效果
<Demo007BoxDecoration/>
`,title:"Box Decoration Break",level:2,content:`### Box Decoration Break
这个部分支持，甚至chrome里面也不识别，需要添加webkit前缀，不建议使用

控制background, border, border-image, box-shadow, clip-path, margin, and padding等属性在换行时的效果
默认是
\`--webkit-box-decoration-break: slice;\`
换成 \`--webkit-box-decoration-break: clone;\`就可以在换行出连续
<CanIUse src="https://caniuse.com/css-boxdecorationbreak" />

下面是边框换行的效果
<Demo007BoxDecoration/>`,frontmatter:{title:"Box Decoration Break",level:2},frontmatterStyle:"frontmatter",index:7,start:150,end:166},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:fn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:10,no:11},__clicksElements:[],__preloaded:!1}),NC=n("h3",null,"Box Decoration Break",-1),qC=n("p",null,"这个部分支持，甚至chrome里面也不识别，需要添加webkit前缀，不建议使用",-1),VC=n("p",null,[H("控制background, border, border-image, box-shadow, clip-path, margin, and padding等属性在换行时的效果 默认是 "),n("code",null,"--webkit-box-decoration-break: slice;"),H(" 换成 "),n("code",null,"--webkit-box-decoration-break: clone;"),H("就可以在换行出连续")],-1),GC=n("p",null,"下面是边框换行的效果",-1),WC={__name:"11",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=fn;return A(I,fn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,fn))})(),(s,i)=>{const a=gr,r=HC;return h(),S(he,R(L(y(fn))),{default:C(()=>[NC,qC,VC,Z(a,{src:"https://caniuse.com/css-boxdecorationbreak"}),GC,Z(r)]),_:1},16)}}},UC=k(WC,[["__file","/@slidev/slides/11.md"]]),KC={},Qg=e=>(Dt("data-v-4988819d"),e=e(),Bt(),e),YC={class:"box-container"},JC=Qg(()=>n("div",{class:"box-border"},"box-border",-1)),ZC=Qg(()=>n("div",{class:"box-content"},"box-content",-1)),XC=[JC,ZC];function QC(e,t){return h(),x("div",YC,[...XC])}const eE=k(KC,[["render",QC],["__scopeId","data-v-4988819d"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo008BoxSizing.vue"]]),pn=g({title:"Box Sizing",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),tE=g({layout:c(()=>pn.layout),transition:c(()=>pn.transition),class:c(()=>pn.class),clicks:c(()=>pn.clicks),name:c(()=>pn.name),preload:c(()=>pn.preload),slide:{raw:"",title:"Box Sizing",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:11,start:166,end:186,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Box Sizing
level: 2
layout: slim-table
---
### Box Sizing

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

设置盒模型
border-box 元素指定宽或高时包含元素的border和padding
tailwind初始化里面使用的就是border-box。

content-box 则是宽和高只包含元素的内容，不包含border和padding

<Demo008BoxSizing />
`,title:"Box Sizing",level:2,content:`### Box Sizing

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

设置盒模型
border-box 元素指定宽或高时包含元素的border和padding
tailwind初始化里面使用的就是border-box。

content-box 则是宽和高只包含元素的内容，不包含border和padding

<Demo008BoxSizing />`,frontmatter:{title:"Box Sizing",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:166,end:186},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:pn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:11,no:12},__clicksElements:[],__preloaded:!1}),nE=n("h3",null,"Box Sizing",-1),sE=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"box-border"),n("td",null,"box-sizing: border-box;")]),n("tr",null,[n("td",null,"box-content"),n("td",null,"box-sizing: content-box;")])])],-1),lE=n("p",null,"设置盒模型 border-box 元素指定宽或高时包含元素的border和padding tailwind初始化里面使用的就是border-box。",-1),oE=n("p",null,"content-box 则是宽和高只包含元素的内容，不包含border和padding",-1),iE={__name:"12",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=pn;return A(I,pn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,pn))})(),(s,i)=>{const a=eE;return h(),S(Y,R(L(y(pn))),{default:C(()=>[nE,sE,lE,oE,Z(a)]),_:1},16)}}},rE=k(iE,[["__file","/@slidev/slides/12.md"]]),mn=g({title:"Display",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/001layout.md"}),aE=g({layout:c(()=>mn.layout),transition:c(()=>mn.transition),class:c(()=>mn.class),clicks:c(()=>mn.clicks),name:c(()=>mn.name),preload:c(()=>mn.preload),slide:{raw:"",title:"Display",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:12,start:186,end:226,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Display
level: 2
layout: slim-table
tableSize: small
---
### Display

display可以设置的属性太多了

| Class        | Properties               |
| ------------------ | ---------------------------- |
| block              | display: block;              |
| inline-block       | display: inline-block;       |
| inline             | display: inline;             |
| flex               | display: flex;               |
| inline-flex        | display: inline-flex;        |
| table              | display: table;              |
| inline-table       | display: inline-table;       |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| grid               | display: grid;               |
| inline-grid        | display: inline-grid;        |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| hidden             | display: none;               |

<style>
.slidev-layout{
    overflow: auto;
}
</style>
`,title:"Display",level:2,content:`### Display

display可以设置的属性太多了

| Class        | Properties               |
| ------------------ | ---------------------------- |
| block              | display: block;              |
| inline-block       | display: inline-block;       |
| inline             | display: inline;             |
| flex               | display: flex;               |
| inline-flex        | display: inline-flex;        |
| table              | display: table;              |
| inline-table       | display: inline-table;       |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| grid               | display: grid;               |
| inline-grid        | display: inline-grid;        |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| hidden             | display: none;               |

<style>
.slidev-layout{
    overflow: auto;
}
</style>`,frontmatter:{title:"Display",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:9,start:186,end:226},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:mn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:12,no:13},__clicksElements:[],__preloaded:!1}),Ff=e=>(Dt("data-v-4954b5ee"),e=e(),Bt(),e),cE=Ff(()=>n("h3",null,"Display",-1)),dE=Ff(()=>n("p",null,"display可以设置的属性太多了",-1)),uE=Ff(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"block"),n("td",null,"display: block;")]),n("tr",null,[n("td",null,"inline-block"),n("td",null,"display: inline-block;")]),n("tr",null,[n("td",null,"inline"),n("td",null,"display: inline;")]),n("tr",null,[n("td",null,"flex"),n("td",null,"display: flex;")]),n("tr",null,[n("td",null,"inline-flex"),n("td",null,"display: inline-flex;")]),n("tr",null,[n("td",null,"table"),n("td",null,"display: table;")]),n("tr",null,[n("td",null,"inline-table"),n("td",null,"display: inline-table;")]),n("tr",null,[n("td",null,"table-caption"),n("td",null,"display: table-caption;")]),n("tr",null,[n("td",null,"table-cell"),n("td",null,"display: table-cell;")]),n("tr",null,[n("td",null,"table-column"),n("td",null,"display: table-column;")]),n("tr",null,[n("td",null,"table-column-group"),n("td",null,"display: table-column-group;")]),n("tr",null,[n("td",null,"table-footer-group"),n("td",null,"display: table-footer-group;")]),n("tr",null,[n("td",null,"table-header-group"),n("td",null,"display: table-header-group;")]),n("tr",null,[n("td",null,"table-row-group"),n("td",null,"display: table-row-group;")]),n("tr",null,[n("td",null,"table-row"),n("td",null,"display: table-row;")]),n("tr",null,[n("td",null,"flow-root"),n("td",null,"display: flow-root;")]),n("tr",null,[n("td",null,"grid"),n("td",null,"display: grid;")]),n("tr",null,[n("td",null,"inline-grid"),n("td",null,"display: inline-grid;")]),n("tr",null,[n("td",null,"contents"),n("td",null,"display: contents;")]),n("tr",null,[n("td",null,"list-item"),n("td",null,"display: list-item;")]),n("tr",null,[n("td",null,"hidden"),n("td",null,"display: none;")])])],-1)),fE={__name:"13",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=mn;return A(I,mn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,mn))})(),(s,i)=>(h(),S(Y,R(L(y(mn))),{default:C(()=>[cE,dE,uE]),_:1},16))}},pE=k(fE,[["__scopeId","data-v-4954b5ee"],["__file","/@slidev/slides/13.md"]]),mE={},If=e=>(Dt("data-v-b7ef2999"),e=e(),Bt(),e),hE={class:"w-[200px]"},vE=If(()=>n("span",{class:"inline"},"display: inline",-1)),gE=If(()=>n("span",{class:"inline-block"},"display: inline-block",-1)),_E=If(()=>n("span",{class:"block"},"display: block",-1));function yE(e,t){return h(),x("div",hE,[H(" When controlling the flow of text, using the CSS property "),vE,H(" will cause the text inside the element to wrap normally. While using the property "),gE,H(" will wrap the element to prevent the text inside from extending beyond its parent. Lastly, using the property "),_E,H(" will put the element on its own line and fill its parent. ")])}const bE=k(mE,[["render",yE],["__scopeId","data-v-b7ef2999"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo009Display1.vue"]]),wE=Me({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(e){const t=e;return(l,o)=>(h(),x("div",{class:Ve(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[n("div",{class:Ve(["col-left",t.class])},[St(l.$slots,"default")],2),n("div",{class:Ve(["col-right",t.class])},[St(l.$slots,"right")],2)],2))}}),xE=k(wE,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/layouts/two-cols.vue"]]),hn=g({layout:"two-cols",srcSequence:"./pages/001layout.md"}),kE=g({layout:c(()=>hn.layout),transition:c(()=>hn.transition),class:c(()=>hn.class),clicks:c(()=>hn.clicks),name:c(()=>hn.name),preload:c(()=>hn.preload),slide:{raw:"",content:"",frontmatterStyle:"frontmatter",note:"",index:13,start:226,end:239,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
layout: two-cols
---

\`inline\` 、 \`inline-block\` 和 \`block\`
行内元素，行内块元素，块元素，是比较的常用的
这个例子就能明显看出区别，inline文字会正常换行
inline-block则是整体包裹住文字
block元素会独占一行

::right::
<Demo009Display1/>
`,content:`\`inline\` 、 \`inline-block\` 和 \`block\`
行内元素，行内块元素，块元素，是比较的常用的
这个例子就能明显看出区别，inline文字会正常换行
inline-block则是整体包裹住文字
block元素会独占一行

::right::
<Demo009Display1/>`,frontmatter:{layout:"two-cols"},frontmatterStyle:"frontmatter",index:10,start:226,end:239},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:hn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:13,no:14},__clicksElements:[],__preloaded:!1}),$E=n("p",null,[n("code",null,"inline"),H(" 、 "),n("code",null,"inline-block"),H(" 和 "),n("code",null,"block"),H(" 行内元素，行内块元素，块元素，是比较的常用的 这个例子就能明显看出区别，inline文字会正常换行 inline-block则是整体包裹住文字 block元素会独占一行")],-1),SE={__name:"14",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=hn;return A(I,hn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,hn))})(),(s,i)=>{const a=bE;return h(),S(xE,R(L(y(hn))),{right:C(r=>[Z(a)]),default:C(()=>[$E]),_:1},16)}}},jE=k(SE,[["__file","/@slidev/slides/14.md"]]),vn=g({srcSequence:"./pages/001layout.md"}),PE=g({layout:c(()=>vn.layout),transition:c(()=>vn.transition),class:c(()=>vn.class),clicks:c(()=>vn.clicks),name:c(()=>vn.name),preload:c(()=>vn.preload),slide:{raw:"",content:"",note:"",index:14,start:240,end:252,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
\`flow-root\` ,创建BFC（块级格式化上下文），可以解决margin塌陷问题

<div class="p-4">
  <div class="flow-root bg-red-300">
    <div class="my-4 ">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root  bg-blue-300">
    <div class="my-4 ">Sure, go ahead, laugh if you want...</div>
  </div>
</div>
`,content:`\`flow-root\` ,创建BFC（块级格式化上下文），可以解决margin塌陷问题

<div class="p-4">
  <div class="flow-root bg-red-300">
    <div class="my-4 ">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root  bg-blue-300">
    <div class="my-4 ">Sure, go ahead, laugh if you want...</div>
  </div>
</div>`,frontmatter:{},index:11,start:240,end:252},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:vn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:14,no:15},__clicksElements:[],__preloaded:!1}),TE=n("p",null,[n("code",null,"flow-root"),H(" ,创建BFC（块级格式化上下文），可以解决margin塌陷问题")],-1),CE=n("div",{class:"p-4"},[n("div",{class:"flow-root bg-red-300"},[n("div",{class:"my-4"},"Well, let me tell you something, ...")]),n("div",{class:"flow-root bg-blue-300"},[n("div",{class:"my-4"},"Sure, go ahead, laugh if you want...")])],-1),EE={__name:"15",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=vn;return A(I,vn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,vn))})(),(s,i)=>(h(),S(he,R(L(y(vn))),{default:C(()=>[TE,CE]),_:1},16))}},AE=k(EE,[["__file","/@slidev/slides/15.md"]]),gn=g({srcSequence:"./pages/001layout.md"}),OE=g({layout:c(()=>gn.layout),transition:c(()=>gn.transition),class:c(()=>gn.class),clicks:c(()=>gn.clicks),name:c(()=>gn.name),preload:c(()=>gn.preload),slide:{raw:"",content:"",note:"",index:15,start:253,end:301,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
flex 就不用在这里多说了
\`inline-flex\` 创建一个随文本流动的内联flex容器

似乎是和inline-box类似，会根据内容决定容器大小。。。
因为没有碰到使用场景，所以demo略了

grid也略

inline-grid， 和inline-flex类似，不会占据一整行，根据内容决定容器大小

<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>

\`contents\`, 这个可以创建一个虚拟容器，他本身会隐藏，不会被渲染。但是子级内容不会受到影响(就类似于display:none.但是子级不隐藏)

<div class="flex box-container">
  <div class="flex-1">01</div>
  <div class="contents bg-red-200">
    <div class="flex-1">02</div>
    <div class="flex-1">03</div>
  </div>
  <div class="flex-1">04</div>
</div>

<style>
    .inline-grid span{
        @apply bg-blue-300;
    }
    .box-container div{
        @apply bg-purple-400;
    }
</style>
`,content:`flex 就不用在这里多说了
\`inline-flex\` 创建一个随文本流动的内联flex容器

似乎是和inline-box类似，会根据内容决定容器大小。。。
因为没有碰到使用场景，所以demo略了

grid也略

inline-grid， 和inline-flex类似，不会占据一整行，根据内容决定容器大小

<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>

\`contents\`, 这个可以创建一个虚拟容器，他本身会隐藏，不会被渲染。但是子级内容不会受到影响(就类似于display:none.但是子级不隐藏)

<div class="flex box-container">
  <div class="flex-1">01</div>
  <div class="contents bg-red-200">
    <div class="flex-1">02</div>
    <div class="flex-1">03</div>
  </div>
  <div class="flex-1">04</div>
</div>

<style>
    .inline-grid span{
        @apply bg-blue-300;
    }
    .box-container div{
        @apply bg-purple-400;
    }
</style>`,frontmatter:{},index:12,start:253,end:301},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:gn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:15,no:16},__clicksElements:[],__preloaded:!1}),Fi=e=>(Dt("data-v-d82e9fe0"),e=e(),Bt(),e),DE=Fi(()=>n("p",null,[H("flex 就不用在这里多说了 "),n("code",null,"inline-flex"),H(" 创建一个随文本流动的内联flex容器")],-1)),BE=Fi(()=>n("p",null,"似乎是和inline-box类似，会根据内容决定容器大小。。。 因为没有碰到使用场景，所以demo略了",-1)),ME=Fi(()=>n("p",null,"grid也略",-1)),FE=Fi(()=>n("p",null,"inline-grid， 和inline-flex类似，不会占据一整行，根据内容决定容器大小",-1)),IE=Fi(()=>n("span",{class:"inline-grid grid-cols-3 gap-4"},[n("span",null,"01"),n("span",null,"02"),n("span",null,"03"),n("span",null,"04"),n("span",null,"05"),n("span",null,"06")],-1)),LE=Fi(()=>n("span",{class:"inline-grid grid-cols-3 gap-4"},[n("span",null,"01"),n("span",null,"02"),n("span",null,"03"),n("span",null,"04"),n("span",null,"05"),n("span",null,"06")],-1)),RE=Fi(()=>n("p",null,[n("code",null,"contents"),H(", 这个可以创建一个虚拟容器，他本身会隐藏，不会被渲染。但是子级内容不会受到影响(就类似于display:none.但是子级不隐藏)")],-1)),HE=Fi(()=>n("div",{class:"flex box-container"},[n("div",{class:"flex-1"},"01"),n("div",{class:"contents bg-red-200"},[n("div",{class:"flex-1"},"02"),n("div",{class:"flex-1"},"03")]),n("div",{class:"flex-1"},"04")],-1)),zE={__name:"16",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=gn;return A(I,gn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,gn))})(),(s,i)=>(h(),S(he,R(L(y(gn))),{default:C(()=>[DE,BE,ME,FE,IE,LE,RE,HE]),_:1},16))}},NE=k(zE,[["__scopeId","data-v-d82e9fe0"],["__file","/@slidev/slides/16.md"]]),_n=g({srcSequence:"./pages/001layout.md"}),qE=g({layout:c(()=>_n.layout),transition:c(()=>_n.transition),class:c(()=>_n.class),clicks:c(()=>_n.clicks),name:c(()=>_n.name),preload:c(()=>_n.preload),slide:{raw:"",content:"",note:"",index:16,start:302,end:335,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
\`Table\`, table布局以前还有一点应用场景，
这个布局比较繁琐，因此我也不想用

<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>

\`display:none\` 很实用了。
`,content:`\`Table\`, table布局以前还有一点应用场景，
这个布局比较繁琐，因此我也不想用

<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>

\`display:none\` 很实用了。`,frontmatter:{},index:13,start:302,end:335},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:_n,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:16,no:17},__clicksElements:[],__preloaded:!1}),VE=n("p",null,[n("code",null,"Table"),H(", table布局以前还有一点应用场景， 这个布局比较繁琐，因此我也不想用")],-1),GE=n("div",{class:"table w-full ..."},[n("div",{class:"table-header-group ..."},[n("div",{class:"table-row"},[n("div",{class:"table-cell text-left ..."},"Song"),n("div",{class:"table-cell text-left ..."},"Artist"),n("div",{class:"table-cell text-left ..."},"Year")])]),n("div",{class:"table-row-group"},[n("div",{class:"table-row"},[n("div",{class:"table-cell ..."},"The Sliding Mr. Bones (Next Stop, Pottersville)"),n("div",{class:"table-cell ..."},"Malcolm Lockyer"),n("div",{class:"table-cell ..."},"1961")]),n("div",{class:"table-row"},[n("div",{class:"table-cell ..."},"Witchy Woman"),n("div",{class:"table-cell ..."},"The Eagles"),n("div",{class:"table-cell ..."},"1972")]),n("div",{class:"table-row"},[n("div",{class:"table-cell ..."},"Shining Star"),n("div",{class:"table-cell ..."},"Earth, Wind, and Fire"),n("div",{class:"table-cell ..."},"1975")])])],-1),WE=n("p",null,[n("code",null,"display:none"),H(" 很实用了。")],-1),UE={__name:"17",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=_n;return A(I,_n),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,_n))})(),(s,i)=>(h(),S(he,R(L(y(_n))),{default:C(()=>[VE,GE,WE]),_:1},16))}},KE=k(UE,[["__file","/@slidev/slides/17.md"]]),yn=g({title:"Floats",level:2,srcSequence:"./pages/001layout.md"}),YE=g({layout:c(()=>yn.layout),transition:c(()=>yn.transition),class:c(()=>yn.class),clicks:c(()=>yn.clicks),name:c(()=>yn.name),preload:c(()=>yn.preload),slide:{raw:"",title:"Floats",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:17,start:335,end:354,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Floats
level: 2
---

### Floats

浮动布局现在也不常用了，这个也比较麻烦，还要考虑清除浮动的问题。

可以实现文字环绕图片的效果

| Class       | Properties           |
| ----------- | -------------------- |
| float-start | float: inline-start; |
| float-end   | float: inline-end;   |
| float-right | float: right;        |
| float-left  | float: left;         |
| float-none  | float: none;         |
`,title:"Floats",level:2,content:`### Floats

浮动布局现在也不常用了，这个也比较麻烦，还要考虑清除浮动的问题。

可以实现文字环绕图片的效果

| Class       | Properties           |
| ----------- | -------------------- |
| float-start | float: inline-start; |
| float-end   | float: inline-end;   |
| float-right | float: right;        |
| float-left  | float: left;         |
| float-none  | float: none;         |`,frontmatter:{title:"Floats",level:2},frontmatterStyle:"frontmatter",index:14,start:335,end:354},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:yn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:17,no:18},__clicksElements:[],__preloaded:!1}),JE=n("h3",null,"Floats",-1),ZE=n("p",null,"浮动布局现在也不常用了，这个也比较麻烦，还要考虑清除浮动的问题。",-1),XE=n("p",null,"可以实现文字环绕图片的效果",-1),QE=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"float-start"),n("td",null,"float: inline-start;")]),n("tr",null,[n("td",null,"float-end"),n("td",null,"float: inline-end;")]),n("tr",null,[n("td",null,"float-right"),n("td",null,"float: right;")]),n("tr",null,[n("td",null,"float-left"),n("td",null,"float: left;")]),n("tr",null,[n("td",null,"float-none"),n("td",null,"float: none;")])])],-1),e9={__name:"18",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=yn;return A(I,yn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,yn))})(),(s,i)=>(h(),S(he,R(L(y(yn))),{default:C(()=>[JE,ZE,XE,QE]),_:1},16))}},t9=k(e9,[["__file","/@slidev/slides/18.md"]]),bn=g({title:"Clear",level:2,srcSequence:"./pages/001layout.md"}),n9=g({layout:c(()=>bn.layout),transition:c(()=>bn.transition),class:c(()=>bn.class),clicks:c(()=>bn.clicks),name:c(()=>bn.name),preload:c(()=>bn.preload),slide:{raw:"",title:"Clear",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:18,start:354,end:372,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Clear
level: 2
---

### Clear

和浮动配套的属性，也没什么必要研究了。

| Class       | Properties           |
| ----------- | -------------------- |
| clear-start | clear: inline-start; |
| clear-end   | clear: inline-end;   |
| clear-left  | clear: left;         |
| clear-right | clear: right;        |
| clear-both  | clear: both;         |
| clear-none  | clear: none;         |
`,title:"Clear",level:2,content:`### Clear

和浮动配套的属性，也没什么必要研究了。

| Class       | Properties           |
| ----------- | -------------------- |
| clear-start | clear: inline-start; |
| clear-end   | clear: inline-end;   |
| clear-left  | clear: left;         |
| clear-right | clear: right;        |
| clear-both  | clear: both;         |
| clear-none  | clear: none;         |`,frontmatter:{title:"Clear",level:2},frontmatterStyle:"frontmatter",index:15,start:354,end:372},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:bn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:18,no:19},__clicksElements:[],__preloaded:!1}),s9=n("h3",null,"Clear",-1),l9=n("p",null,"和浮动配套的属性，也没什么必要研究了。",-1),o9=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"clear-start"),n("td",null,"clear: inline-start;")]),n("tr",null,[n("td",null,"clear-end"),n("td",null,"clear: inline-end;")]),n("tr",null,[n("td",null,"clear-left"),n("td",null,"clear: left;")]),n("tr",null,[n("td",null,"clear-right"),n("td",null,"clear: right;")]),n("tr",null,[n("td",null,"clear-both"),n("td",null,"clear: both;")]),n("tr",null,[n("td",null,"clear-none"),n("td",null,"clear: none;")])])],-1),i9={__name:"19",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=bn;return A(I,bn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,bn))})(),(s,i)=>(h(),S(he,R(L(y(bn))),{default:C(()=>[s9,l9,o9]),_:1},16))}},r9=k(i9,[["__file","/@slidev/slides/19.md"]]),a9={},e_=e=>(Dt("data-v-caac0f48"),e=e(),Bt(),e),c9={class:"box-container"},d9=e_(()=>n("section",null,[n("h1",null,[n("span",null,"Elaborate title")])],-1)),u9=e_(()=>n("article",null,[H(" This is a "),n("span",{class:"tooltip-parent"},[n("u",null,"tooltip"),n("span",{class:"tooltip"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac vulputate augue, sed consequat velit. Praesent rhoncus viverra ullamcorper. ")]),H(" that is in a hovered state for your convinience. "),n("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac vulputate augue, sed consequat velit. Praesent rhoncus viverra ullamcorper. "),n("p",null," In eu erat commodo enim varius feugiat ac vitae arcu. Aenean id varius justo. Curabitur eget mollis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eu sapien sed lorem imperdiet auctor sit amet in felis. Donec non sem vel turpis laoreet pretium vitae sit amet odio. In sit amet fermentum arcu. Ut fringilla risus ac venenatis euismod. Donec non eleifend purus. Suspendisse a aliquet tellus. Maecenas bibendum commodo augue et porta. ")],-1)),f9=[d9,u9];function p9(e,t){return h(),x("div",c9,[...f9])}const m9=k(a9,[["render",p9],["__scopeId","data-v-caac0f48"],["__file","D:/coding/Projects/frontend/my-slidevs/projects/slidevs/learn-tailwind/components/Demo010Isolation.vue"]]),wn=g({title:"Isolation",level:2,srcSequence:"./pages/001layout.md"}),h9=g({layout:c(()=>wn.layout),transition:c(()=>wn.transition),class:c(()=>wn.class),clicks:c(()=>wn.clicks),name:c(()=>wn.name),preload:c(()=>wn.preload),slide:{raw:"",title:"Isolation",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:19,start:372,end:383,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Isolation
level: 2
---

### Isolation

创建新的堆叠上下文，适用于解决z-index遮挡的问题。它可以创建新的堆叠上下文，而无需z-index将元素放在彼此的前面。
默认是 \`isolation: auto\`，通常我们需要的时候会设置为\`isolation: isolate;\`
<Demo010Isolation/>
`,title:"Isolation",level:2,content:"### Isolation\n\n创建新的堆叠上下文，适用于解决z-index遮挡的问题。它可以创建新的堆叠上下文，而无需z-index将元素放在彼此的前面。\n默认是 `isolation: auto`，通常我们需要的时候会设置为`isolation: isolate;`\n<Demo010Isolation/>",frontmatter:{title:"Isolation",level:2},frontmatterStyle:"frontmatter",index:16,start:372,end:383},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:wn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:19,no:20},__clicksElements:[],__preloaded:!1}),v9=n("h3",null,"Isolation",-1),g9=n("p",null,[H("创建新的堆叠上下文，适用于解决z-index遮挡的问题。它可以创建新的堆叠上下文，而无需z-index将元素放在彼此的前面。 默认是 "),n("code",null,"isolation: auto"),H("，通常我们需要的时候会设置为"),n("code",null,"isolation: isolate;")],-1),_9={__name:"20",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=wn;return A(I,wn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,wn))})(),(s,i)=>{const a=m9;return h(),S(he,R(L(y(wn))),{default:C(()=>[v9,g9,Z(a)]),_:1},16)}}},y9=k(_9,[["__file","/@slidev/slides/20.md"]]),xn=g({title:"Object Fit",level:2,srcSequence:"./pages/001layout.md"}),b9=g({layout:c(()=>xn.layout),transition:c(()=>xn.transition),class:c(()=>xn.class),clicks:c(()=>xn.clicks),name:c(()=>xn.name),preload:c(()=>xn.preload),slide:{raw:"",title:"Object Fit",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:20,start:383,end:399,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Object Fit
level: 2
---
### Object Fit

主要是调整图片适应容器的方式。

| Class             | Properties              |
| ----------------- | ----------------------- |
| object-contain    | object-fit: contain;    |
| object-cover      | object-fit: cover;      |
| object-fill       | object-fit: fill;       |
| object-none       | object-fit: none;       |
| object-scale-down | object-fit: scale-down; |
`,title:"Object Fit",level:2,content:`### Object Fit

主要是调整图片适应容器的方式。

| Class             | Properties              |
| ----------------- | ----------------------- |
| object-contain    | object-fit: contain;    |
| object-cover      | object-fit: cover;      |
| object-fill       | object-fit: fill;       |
| object-none       | object-fit: none;       |
| object-scale-down | object-fit: scale-down; |`,frontmatter:{title:"Object Fit",level:2},frontmatterStyle:"frontmatter",index:17,start:383,end:399},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:xn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:20,no:21},__clicksElements:[],__preloaded:!1}),w9=n("h3",null,"Object Fit",-1),x9=n("p",null,"主要是调整图片适应容器的方式。",-1),k9=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"object-contain"),n("td",null,"object-fit: contain;")]),n("tr",null,[n("td",null,"object-cover"),n("td",null,"object-fit: cover;")]),n("tr",null,[n("td",null,"object-fill"),n("td",null,"object-fit: fill;")]),n("tr",null,[n("td",null,"object-none"),n("td",null,"object-fit: none;")]),n("tr",null,[n("td",null,"object-scale-down"),n("td",null,"object-fit: scale-down;")])])],-1),$9={__name:"21",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=xn;return A(I,xn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,xn))})(),(s,i)=>(h(),S(he,R(L(y(xn))),{default:C(()=>[w9,x9,k9]),_:1},16))}},S9=k($9,[["__file","/@slidev/slides/21.md"]]),Ce="/my-slidevs/slidevs/learn-tailwind/assets/dust-mountain.avif",kn=g({srcSequence:"./pages/001layout.md"}),j9=g({layout:c(()=>kn.layout),transition:c(()=>kn.transition),class:c(()=>kn.class),clicks:c(()=>kn.clicks),name:c(()=>kn.name),preload:c(()=>kn.preload),slide:{raw:"",content:"",note:"",index:21,start:400,end:413,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
object-cover 调整元素内容的大小以覆盖其容器。

<div class="bg-indigo-300">
  <img class="object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

object-contain 调整元素内容的大小以使其包含在其容器内。

<div class="bg-purple-300">
  <img class="object-contain h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
`,content:`object-cover 调整元素内容的大小以覆盖其容器。

<div class="bg-indigo-300">
  <img class="object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

object-contain 调整元素内容的大小以使其包含在其容器内。

<div class="bg-purple-300">
  <img class="object-contain h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>`,frontmatter:{},index:18,start:400,end:413},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:kn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:21,no:22},__clicksElements:[],__preloaded:!1}),P9=n("p",null,"object-cover 调整元素内容的大小以覆盖其容器。",-1),T9=n("div",{class:"bg-indigo-300"},[n("img",{class:"object-cover h-48 w-96",alt:"mountain",src:Ce})],-1),C9=n("p",null,"object-contain 调整元素内容的大小以使其包含在其容器内。",-1),E9=n("div",{class:"bg-purple-300"},[n("img",{class:"object-contain h-48 w-96",alt:"mountain",src:Ce})],-1),A9={__name:"22",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=kn;return A(I,kn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,kn))})(),(s,i)=>(h(),S(he,R(L(y(kn))),{default:C(()=>[P9,T9,C9,E9]),_:1},16))}},O9=k(A9,[["__file","/@slidev/slides/22.md"]]),$n=g({srcSequence:"./pages/001layout.md"}),D9=g({layout:c(()=>$n.layout),transition:c(()=>$n.transition),class:c(()=>$n.class),clicks:c(()=>$n.clicks),name:c(()=>$n.name),preload:c(()=>$n.preload),slide:{raw:"",content:"",note:"",index:22,start:414,end:427,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
object-fill  拉伸元素的内容以适合其容器。

<div class="bg-sky-300">
  <img class="object-fill h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

object-scale-down 缩小以适合其容器。

<div class="bg-cyan-300">
  <img class="object-scale-down h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
`,content:`object-fill  拉伸元素的内容以适合其容器。

<div class="bg-sky-300">
  <img class="object-fill h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

object-scale-down 缩小以适合其容器。

<div class="bg-cyan-300">
  <img class="object-scale-down h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>`,frontmatter:{},index:19,start:414,end:427},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:$n,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:22,no:23},__clicksElements:[],__preloaded:!1}),B9=n("p",null,"object-fill 拉伸元素的内容以适合其容器。",-1),M9=n("div",{class:"bg-sky-300"},[n("img",{class:"object-fill h-48 w-96",alt:"mountain",src:Ce})],-1),F9=n("p",null,"object-scale-down 缩小以适合其容器。",-1),I9=n("div",{class:"bg-cyan-300"},[n("img",{class:"object-scale-down h-48 w-96",alt:"mountain",src:Ce})],-1),L9={__name:"23",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=$n;return A(I,$n),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,$n))})(),(s,i)=>(h(),S(he,R(L(y($n))),{default:C(()=>[B9,M9,F9,I9]),_:1},16))}},R9=k(L9,[["__file","/@slidev/slides/23.md"]]),Sn=g({srcSequence:"./pages/001layout.md"}),H9=g({layout:c(()=>Sn.layout),transition:c(()=>Sn.transition),class:c(()=>Sn.class),clicks:c(()=>Sn.clicks),name:c(()=>Sn.name),preload:c(()=>Sn.preload),slide:{raw:"",content:"",note:"",index:23,start:428,end:435,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
object-none 以原始大小显示元素的内容，忽略容器大小

<div class="bg-yellow-300">
  <img class="object-none h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
`,content:`object-none 以原始大小显示元素的内容，忽略容器大小

<div class="bg-yellow-300">
  <img class="object-none h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>`,frontmatter:{},index:20,start:428,end:435},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:Sn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:23,no:24},__clicksElements:[],__preloaded:!1}),z9=n("p",null,"object-none 以原始大小显示元素的内容，忽略容器大小",-1),N9=n("div",{class:"bg-yellow-300"},[n("img",{class:"object-none h-48 w-96",alt:"mountain",src:Ce})],-1),q9={__name:"24",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Sn;return A(I,Sn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Sn))})(),(s,i)=>(h(),S(he,R(L(y(Sn))),{default:C(()=>[z9,N9]),_:1},16))}},V9=k(q9,[["__file","/@slidev/slides/24.md"]]),jn=g({title:"Object Position",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),G9=g({layout:c(()=>jn.layout),transition:c(()=>jn.transition),class:c(()=>jn.class),clicks:c(()=>jn.clicks),name:c(()=>jn.name),preload:c(()=>jn.preload),slide:{raw:"",title:"Object Position",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:24,start:435,end:455,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Object Position
level: 2
layout: slim-table
---
### Object Position
和Object Fit 配套的属性

| Class               | Properties                     |
| ------------------- | ------------------------------ |
| object-bottom       | object-position: bottom;       |
| object-center       | object-position: center;       |
| object-left         | object-position: left;         |
| object-left-bottom  | object-position: left bottom;  |
| object-left-top     | object-position: left top;     |
| object-right        | object-position: right;        |
| object-right-bottom | object-position: right bottom; |
| object-right-top    | object-position: right top;    |
| object-top          | object-position: top;          |
`,title:"Object Position",level:2,content:`### Object Position
和Object Fit 配套的属性

| Class               | Properties                     |
| ------------------- | ------------------------------ |
| object-bottom       | object-position: bottom;       |
| object-center       | object-position: center;       |
| object-left         | object-position: left;         |
| object-left-bottom  | object-position: left bottom;  |
| object-left-top     | object-position: left top;     |
| object-right        | object-position: right;        |
| object-right-bottom | object-position: right bottom; |
| object-right-top    | object-position: right top;    |
| object-top          | object-position: top;          |`,frontmatter:{title:"Object Position",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:21,start:435,end:455},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:jn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:24,no:25},__clicksElements:[],__preloaded:!1}),W9=n("h3",null,"Object Position",-1),U9=n("p",null,"和Object Fit 配套的属性",-1),K9=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"object-bottom"),n("td",null,"object-position: bottom;")]),n("tr",null,[n("td",null,"object-center"),n("td",null,"object-position: center;")]),n("tr",null,[n("td",null,"object-left"),n("td",null,"object-position: left;")]),n("tr",null,[n("td",null,"object-left-bottom"),n("td",null,"object-position: left bottom;")]),n("tr",null,[n("td",null,"object-left-top"),n("td",null,"object-position: left top;")]),n("tr",null,[n("td",null,"object-right"),n("td",null,"object-position: right;")]),n("tr",null,[n("td",null,"object-right-bottom"),n("td",null,"object-position: right bottom;")]),n("tr",null,[n("td",null,"object-right-top"),n("td",null,"object-position: right top;")]),n("tr",null,[n("td",null,"object-top"),n("td",null,"object-position: top;")])])],-1),Y9={__name:"25",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=jn;return A(I,jn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,jn))})(),(s,i)=>(h(),S(Y,R(L(y(jn))),{default:C(()=>[W9,U9,K9]),_:1},16))}},J9=k(Y9,[["__file","/@slidev/slides/25.md"]]),Pn=g({srcSequence:"./pages/001layout.md"}),Z9=g({layout:c(()=>Pn.layout),transition:c(()=>Pn.transition),class:c(()=>Pn.class),clicks:c(()=>Pn.clicks),name:c(()=>Pn.name),preload:c(()=>Pn.preload),slide:{raw:"",content:"",note:"",index:25,start:456,end:469,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`
<div class="grid grid-cols-3 gap-8">
<img class="object-none object-left-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-left bg-yellow-300 w-[120px] aspect-square" alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-center bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-left-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
</div>
`,content:`<div class="grid grid-cols-3 gap-8">
<img class="object-none object-left-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right-top bg-yellow-300 w-[120px] aspect-square"  alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-left bg-yellow-300 w-[120px] aspect-square" alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-center bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-left-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
<img class="object-none object-right-bottom bg-yellow-300 w-[120px] aspect-square " alt="mountain" src="/assets/dust-mountain.avif"/>
</div>`,frontmatter:{},index:22,start:456,end:469},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:Pn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:25,no:26},__clicksElements:[],__preloaded:!1}),X9=n("div",{class:"grid grid-cols-3 gap-8"},[n("img",{class:"object-none object-left-top bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-top bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-right-top bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-left bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-center bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-right bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-left-bottom bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-bottom bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce}),n("img",{class:"object-none object-right-bottom bg-yellow-300 w-[120px] aspect-square",alt:"mountain",src:Ce})],-1),Q9={__name:"26",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Pn;return A(I,Pn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Pn))})(),(s,i)=>(h(),S(he,R(L(y(Pn))),{default:C(()=>[X9]),_:1},16))}},eA=k(Q9,[["__file","/@slidev/slides/26.md"]]),Tn=g({title:"Overflow",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/001layout.md"}),tA=g({layout:c(()=>Tn.layout),transition:c(()=>Tn.transition),class:c(()=>Tn.class),clicks:c(()=>Tn.clicks),name:c(()=>Tn.name),preload:c(()=>Tn.preload),slide:{raw:"",title:"Overflow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:26,start:469,end:506,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Overflow
level: 2
layout: slim-table
tableSize: small
---

### Overflow 溢出
用于控制元素如何处理对于容器来说太大的内容的实用程序

| Class              | Properties           |
| ------------------ | -------------------- |
| overflow-auto      | overflow: auto;      |
| overflow-hidden    | overflow: hidden;    |
| overflow-clip      | overflow: clip;      |
| overflow-visible   | overflow: visible;   |
| overflow-scroll    | overflow: scroll;    |
| overflow-x-auto    | overflow-x: auto;    |
| overflow-y-auto    | overflow-y: auto;    |
| overflow-x-hidden  | overflow-x: hidden;  |
| overflow-y-hidden  | overflow-y: hidden;  |
| overflow-x-clip    | overflow-x: clip;    |
| overflow-y-clip    | overflow-y: clip;    |
| overflow-x-visible | overflow-x: visible; |
| overflow-y-visible | overflow-y: visible; |
| overflow-x-scroll  | overflow-x: scroll;  |
| overflow-y-scroll  | overflow-y: scroll;  |

<style>
.slidev-layout{
    overflow: auto;
    /* table{
        @apply h-full overflow-auto;
    } */
}
</style>
`,title:"Overflow",level:2,content:`### Overflow 溢出
用于控制元素如何处理对于容器来说太大的内容的实用程序

| Class              | Properties           |
| ------------------ | -------------------- |
| overflow-auto      | overflow: auto;      |
| overflow-hidden    | overflow: hidden;    |
| overflow-clip      | overflow: clip;      |
| overflow-visible   | overflow: visible;   |
| overflow-scroll    | overflow: scroll;    |
| overflow-x-auto    | overflow-x: auto;    |
| overflow-y-auto    | overflow-y: auto;    |
| overflow-x-hidden  | overflow-x: hidden;  |
| overflow-y-hidden  | overflow-y: hidden;  |
| overflow-x-clip    | overflow-x: clip;    |
| overflow-y-clip    | overflow-y: clip;    |
| overflow-x-visible | overflow-x: visible; |
| overflow-y-visible | overflow-y: visible; |
| overflow-x-scroll  | overflow-x: scroll;  |
| overflow-y-scroll  | overflow-y: scroll;  |

<style>
.slidev-layout{
    overflow: auto;
    /* table{
        @apply h-full overflow-auto;
    } */
}
</style>`,frontmatter:{title:"Overflow",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:23,start:469,end:506},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:Tn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:26,no:27},__clicksElements:[],__preloaded:!1}),Lf=e=>(Dt("data-v-ea692773"),e=e(),Bt(),e),nA=Lf(()=>n("h3",null,"Overflow 溢出",-1)),sA=Lf(()=>n("p",null,"用于控制元素如何处理对于容器来说太大的内容的实用程序",-1)),lA=Lf(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"overflow-auto"),n("td",null,"overflow: auto;")]),n("tr",null,[n("td",null,"overflow-hidden"),n("td",null,"overflow: hidden;")]),n("tr",null,[n("td",null,"overflow-clip"),n("td",null,"overflow: clip;")]),n("tr",null,[n("td",null,"overflow-visible"),n("td",null,"overflow: visible;")]),n("tr",null,[n("td",null,"overflow-scroll"),n("td",null,"overflow: scroll;")]),n("tr",null,[n("td",null,"overflow-x-auto"),n("td",null,"overflow-x: auto;")]),n("tr",null,[n("td",null,"overflow-y-auto"),n("td",null,"overflow-y: auto;")]),n("tr",null,[n("td",null,"overflow-x-hidden"),n("td",null,"overflow-x: hidden;")]),n("tr",null,[n("td",null,"overflow-y-hidden"),n("td",null,"overflow-y: hidden;")]),n("tr",null,[n("td",null,"overflow-x-clip"),n("td",null,"overflow-x: clip;")]),n("tr",null,[n("td",null,"overflow-y-clip"),n("td",null,"overflow-y: clip;")]),n("tr",null,[n("td",null,"overflow-x-visible"),n("td",null,"overflow-x: visible;")]),n("tr",null,[n("td",null,"overflow-y-visible"),n("td",null,"overflow-y: visible;")]),n("tr",null,[n("td",null,"overflow-x-scroll"),n("td",null,"overflow-x: scroll;")]),n("tr",null,[n("td",null,"overflow-y-scroll"),n("td",null,"overflow-y: scroll;")])])],-1)),oA={__name:"27",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Tn;return A(I,Tn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Tn))})(),(s,i)=>(h(),S(Y,R(L(y(Tn))),{default:C(()=>[nA,sA,lA]),_:1},16))}},iA=k(oA,[["__scopeId","data-v-ea692773"],["__file","/@slidev/slides/27.md"]]),Cn=g({title:"Overscroll Behavior",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/001layout.md"}),rA=g({layout:c(()=>Cn.layout),transition:c(()=>Cn.transition),class:c(()=>Cn.class),clicks:c(()=>Cn.clicks),name:c(()=>Cn.name),preload:c(()=>Cn.preload),slide:{raw:"",title:"Overscroll Behavior",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:27,start:506,end:530,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Overscroll Behavior
level: 2
layout: slim-table
tableSize: small
---

### Overscroll Behavior
用于控制浏览器到达滚动区域边界时的行为方式  
兼容性比较差，不建议使用
<CanIUse src="https://caniuse.com/css-overscroll-behavior" />

| Class                | Properties                      |
| -------------------- | ------------------------------- |
| overscroll-auto      | overscroll-behavior: auto;      |
| overscroll-contain   | overscroll-behavior: contain;   |
| overscroll-none      | overscroll-behavior: none;      |
| overscroll-y-auto    | overscroll-behavior-y: auto;    |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none    | overscroll-behavior-y: none;    |
| overscroll-x-auto    | overscroll-behavior-x: auto;    |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none    | overscroll-behavior-x: none;    |
`,title:"Overscroll Behavior",level:2,content:`### Overscroll Behavior
用于控制浏览器到达滚动区域边界时的行为方式  
兼容性比较差，不建议使用
<CanIUse src="https://caniuse.com/css-overscroll-behavior" />

| Class                | Properties                      |
| -------------------- | ------------------------------- |
| overscroll-auto      | overscroll-behavior: auto;      |
| overscroll-contain   | overscroll-behavior: contain;   |
| overscroll-none      | overscroll-behavior: none;      |
| overscroll-y-auto    | overscroll-behavior-y: auto;    |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none    | overscroll-behavior-y: none;    |
| overscroll-x-auto    | overscroll-behavior-x: auto;    |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none    | overscroll-behavior-x: none;    |`,frontmatter:{title:"Overscroll Behavior",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:24,start:506,end:530},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:Cn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:27,no:28},__clicksElements:[],__preloaded:!1}),aA=n("h3",null,"Overscroll Behavior",-1),cA=n("p",null,[H("用于控制浏览器到达滚动区域边界时的行为方式"),n("br"),H(" 兼容性比较差，不建议使用")],-1),dA=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"overscroll-auto"),n("td",null,"overscroll-behavior: auto;")]),n("tr",null,[n("td",null,"overscroll-contain"),n("td",null,"overscroll-behavior: contain;")]),n("tr",null,[n("td",null,"overscroll-none"),n("td",null,"overscroll-behavior: none;")]),n("tr",null,[n("td",null,"overscroll-y-auto"),n("td",null,"overscroll-behavior-y: auto;")]),n("tr",null,[n("td",null,"overscroll-y-contain"),n("td",null,"overscroll-behavior-y: contain;")]),n("tr",null,[n("td",null,"overscroll-y-none"),n("td",null,"overscroll-behavior-y: none;")]),n("tr",null,[n("td",null,"overscroll-x-auto"),n("td",null,"overscroll-behavior-x: auto;")]),n("tr",null,[n("td",null,"overscroll-x-contain"),n("td",null,"overscroll-behavior-x: contain;")]),n("tr",null,[n("td",null,"overscroll-x-none"),n("td",null,"overscroll-behavior-x: none;")])])],-1),uA={__name:"28",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Cn;return A(I,Cn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Cn))})(),(s,i)=>{const a=gr;return h(),S(Y,R(L(y(Cn))),{default:C(()=>[aA,cA,Z(a,{src:"https://caniuse.com/css-overscroll-behavior"}),dA]),_:1},16)}}},fA=k(uA,[["__file","/@slidev/slides/28.md"]]),En=g({title:"Position",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),pA=g({layout:c(()=>En.layout),transition:c(()=>En.transition),class:c(()=>En.class),clicks:c(()=>En.clicks),name:c(()=>En.name),preload:c(()=>En.preload),slide:{raw:"",title:"Position",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:28,start:530,end:549,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Position
level: 2
layout: slim-table
---

### Position
定位还是很常用的

里面就只有sticky我没怎么用过，这个是粘性定位，vscode也有这个设置，可以一直把上一个函数名固定在顶部

| Class    | Properties          |
| -------- | ------------------- |
| static   | position: static;   |
| fixed    | position: fixed;    |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky   | position: sticky;   |
`,title:"Position",level:2,content:`### Position
定位还是很常用的

里面就只有sticky我没怎么用过，这个是粘性定位，vscode也有这个设置，可以一直把上一个函数名固定在顶部

| Class    | Properties          |
| -------- | ------------------- |
| static   | position: static;   |
| fixed    | position: fixed;    |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky   | position: sticky;   |`,frontmatter:{title:"Position",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:25,start:530,end:549},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:En,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:28,no:29},__clicksElements:[],__preloaded:!1}),mA=n("h3",null,"Position",-1),hA=n("p",null,"定位还是很常用的",-1),vA=n("p",null,"里面就只有sticky我没怎么用过，这个是粘性定位，vscode也有这个设置，可以一直把上一个函数名固定在顶部",-1),gA=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"static"),n("td",null,"position: static;")]),n("tr",null,[n("td",null,"fixed"),n("td",null,"position: fixed;")]),n("tr",null,[n("td",null,"absolute"),n("td",null,"position: absolute;")]),n("tr",null,[n("td",null,"relative"),n("td",null,"position: relative;")]),n("tr",null,[n("td",null,"sticky"),n("td",null,"position: sticky;")])])],-1),_A={__name:"29",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=En;return A(I,En),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,En))})(),(s,i)=>(h(),S(Y,R(L(y(En))),{default:C(()=>[mA,hA,vA,gA]),_:1},16))}},yA=k(_A,[["__file","/@slidev/slides/29.md"]]),An=g({title:"Top,Right,Bottom,Left",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),bA=g({layout:c(()=>An.layout),transition:c(()=>An.transition),class:c(()=>An.class),clicks:c(()=>An.clicks),name:c(()=>An.name),preload:c(()=>An.preload),slide:{raw:"",title:"Top,Right,Bottom,Left",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:29,start:549,end:585,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Top,Right,Bottom,Left
level: 2
layout: slim-table
---
### Top,Right,Bottom,Left
inset 属性倒是没用过，其实就是把Top,Right,Bottom,Left可以写到一行里。

\`\`\`css
/* 长度值 */
inset: 10px; /* 应用于所有边 */
inset: 4px 8px; /* 上下 | 左右 */
inset: 5px 15px 10px; /* 上 | 左右 | 下 */
inset: 2.4em 3em 3em 3em; /* 上 | 右 | 下 | 左 */

/* 包含块的宽度（左或右）或高度（上或下）的百分比 */
inset: 10% 5% 5% 5%;

/* 关键词值 */
inset: auto;

/* 全局值 */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;

\`\`\`

<style>
.slidev-layout{
    overflow: auto;
}
</style>
`,title:"Top,Right,Bottom,Left",level:2,content:`### Top,Right,Bottom,Left
inset 属性倒是没用过，其实就是把Top,Right,Bottom,Left可以写到一行里。

\`\`\`css
/* 长度值 */
inset: 10px; /* 应用于所有边 */
inset: 4px 8px; /* 上下 | 左右 */
inset: 5px 15px 10px; /* 上 | 左右 | 下 */
inset: 2.4em 3em 3em 3em; /* 上 | 右 | 下 | 左 */

/* 包含块的宽度（左或右）或高度（上或下）的百分比 */
inset: 10% 5% 5% 5%;

/* 关键词值 */
inset: auto;

/* 全局值 */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;

\`\`\`

<style>
.slidev-layout{
    overflow: auto;
}
</style>`,frontmatter:{title:"Top,Right,Bottom,Left",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:26,start:549,end:585},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:An,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:29,no:30},__clicksElements:[],__preloaded:!1}),Rf=e=>(Dt("data-v-7df063df"),e=e(),Bt(),e),wA=Rf(()=>n("h3",null,"Top,Right,Bottom,Left",-1)),xA=Rf(()=>n("p",null,"inset 属性倒是没用过，其实就是把Top,Right,Bottom,Left可以写到一行里。",-1)),kA=Rf(()=>n("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code shikiji",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[n("code",{class:"language-css"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 长度值 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: 10px; "),n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 应用于所有边 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: 4px 8px; "),n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 上下 | 左右 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: 5px 15px 10px; "),n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 上 | 左右 | 下 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: 2"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"4em"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," 3em 3em 3em; "),n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 上 | 右 | 下 | 左 */")]),H(`
`),n("span",{class:"line"}),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 包含块的宽度（左或右）或高度（上或下）的百分比 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: 10% 5% 5% 5%;")]),H(`
`),n("span",{class:"line"}),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 关键词值 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: auto;")]),H(`
`),n("span",{class:"line"}),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"/* 全局值 */")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: inherit;")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: initial;")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: revert;")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: "),n("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"revert-layer"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"inset: unset;")]),H(`
`),n("span",{class:"line"})])],-1)),$A={__name:"30",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=An;return A(I,An),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,An))})(),(s,i)=>{const a=cd;return h(),S(Y,R(L(y(An))),{default:C(()=>[wA,xA,Z(a,Vo({},{ranges:[""]}),{default:C(()=>[kA]),_:1},16)]),_:1},16)}}},SA=k($A,[["__scopeId","data-v-7df063df"],["__file","/@slidev/slides/30.md"]]),On=g({title:"Visibility",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),jA=g({layout:c(()=>On.layout),transition:c(()=>On.transition),class:c(()=>On.class),clicks:c(()=>On.clicks),name:c(()=>On.name),preload:c(()=>On.preload),slide:{raw:"",title:"Visibility",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:30,start:585,end:627,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Visibility
level: 2
layout: slim-table
---
### Visibility

collapse似乎是应用于表格比较合适，其他情况和display:none差不多

| Class     | Properties            |
| --------- | --------------------- |
| visible   | visibility: visible;  |
| invisible | visibility: hidden;   |
| collapse  | visibility: collapse; |

<table class="mt-5">
  <thead>
    <tr>
      <th>Invoice #</th>
      <th>Client</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#100</td>
      <td>Pendant Publishing</td>
      <td>$2,000.00</td>
    </tr>
    <tr class="collapse">
      <td>#101</td>
      <td>Kruger Industrial Smoothing</td>
      <td>$545.00</td>
    </tr>
    <tr>
      <td>#102</td>
      <td>J. Peterman</td>
      <td>$10,000.25</td>
    </tr>
  </tbody>
</table>
`,title:"Visibility",level:2,content:`### Visibility

collapse似乎是应用于表格比较合适，其他情况和display:none差不多

| Class     | Properties            |
| --------- | --------------------- |
| visible   | visibility: visible;  |
| invisible | visibility: hidden;   |
| collapse  | visibility: collapse; |

<table class="mt-5">
  <thead>
    <tr>
      <th>Invoice #</th>
      <th>Client</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#100</td>
      <td>Pendant Publishing</td>
      <td>$2,000.00</td>
    </tr>
    <tr class="collapse">
      <td>#101</td>
      <td>Kruger Industrial Smoothing</td>
      <td>$545.00</td>
    </tr>
    <tr>
      <td>#102</td>
      <td>J. Peterman</td>
      <td>$10,000.25</td>
    </tr>
  </tbody>
</table>`,frontmatter:{title:"Visibility",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:27,start:585,end:627},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:On,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:30,no:31},__clicksElements:[],__preloaded:!1}),PA=n("h3",null,"Visibility",-1),TA=n("p",null,"collapse似乎是应用于表格比较合适，其他情况和display:none差不多",-1),CA=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"visible"),n("td",null,"visibility: visible;")]),n("tr",null,[n("td",null,"invisible"),n("td",null,"visibility: hidden;")]),n("tr",null,[n("td",null,"collapse"),n("td",null,"visibility: collapse;")])])],-1),EA=n("table",{class:"mt-5"},[n("thead",null,[n("tr",null,[n("th",null,"Invoice #"),n("th",null,"Client"),n("th",null,"Amount")])]),n("tbody",null,[n("tr",null,[n("td",null,"#100"),n("td",null,"Pendant Publishing"),n("td",null,"$2,000.00")]),n("tr",{class:"collapse"},[n("td",null,"#101"),n("td",null,"Kruger Industrial Smoothing"),n("td",null,"$545.00")]),n("tr",null,[n("td",null,"#102"),n("td",null,"J. Peterman"),n("td",null,"$10,000.25")])])],-1),AA={__name:"31",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=On;return A(I,On),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,On))})(),(s,i)=>(h(),S(Y,R(L(y(On))),{default:C(()=>[PA,TA,CA,EA]),_:1},16))}},OA=k(AA,[["__file","/@slidev/slides/31.md"]]),Dn=g({title:"Z-Index",level:2,layout:"slim-table",srcSequence:"./pages/001layout.md"}),DA=g({layout:c(()=>Dn.layout),transition:c(()=>Dn.transition),class:c(()=>Dn.class),clicks:c(()=>Dn.clicks),name:c(()=>Dn.name),preload:c(()=>Dn.preload),slide:{raw:"",title:"Z-Index",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:31,start:627,end:636,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",raw:`---
title: Z-Index
level: 2
layout: slim-table
---
### Z-Index

这个就不需要多言了。
`,title:"Z-Index",level:2,content:`### Z-Index

这个就不需要多言了。`,frontmatter:{title:"Z-Index",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:28,start:627,end:636},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",noteHTML:"",frontmatter:Dn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\001layout.md",id:31,no:32},__clicksElements:[],__preloaded:!1}),BA=n("h3",null,"Z-Index",-1),MA=n("p",null,"这个就不需要多言了。",-1),FA={__name:"32",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Dn;return A(I,Dn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Dn))})(),(s,i)=>(h(),S(Y,R(L(y(Dn))),{default:C(()=>[BA,MA]),_:1},16))}},IA=k(FA,[["__file","/@slidev/slides/32.md"]]),Bn=g({title:"Flexbox & Grid 弹性盒和网格",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/002FlexAndGrid.md"}),LA=g({layout:c(()=>Bn.layout),transition:c(()=>Bn.transition),class:c(()=>Bn.class),clicks:c(()=>Bn.clicks),name:c(()=>Bn.name),preload:c(()=>Bn.preload),slide:{raw:"",title:"Flexbox & Grid 弹性盒和网格",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:32,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flexbox & Grid 弹性盒和网格
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Flexbox & Grid 弹性盒和网格
`,title:"Flexbox & Grid 弹性盒和网格",level:1,content:"## Flexbox & Grid 弹性盒和网格",frontmatter:{title:"Flexbox & Grid 弹性盒和网格",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/002FlexAndGrid.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:5,start:60,end:64},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Bn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:32,no:33},__clicksElements:[],__preloaded:!1}),RA=n("h2",null,"Flexbox & Grid 弹性盒和网格",-1),HA={__name:"33",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Bn;return A(I,Bn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Bn))})(),(s,i)=>(h(),S(Pt,R(L(y(Bn))),{default:C(()=>[RA]),_:1},16))}},zA=k(HA,[["__file","/@slidev/slides/33.md"]]),Mn=g({title:"Flex Basis",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),NA=g({layout:c(()=>Mn.layout),transition:c(()=>Mn.transition),class:c(()=>Mn.class),clicks:c(()=>Mn.clicks),name:c(()=>Mn.name),preload:c(()=>Mn.preload),slide:{raw:"",title:"Flex Basis",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:33,start:9,end:25,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Basis
level: 2
---

### Flex Basis  

flex-basis 定义元素空间大小，默认是auto, 即元素内容大小。
这样就解释了为什么父元素设置为flex以后，子元素自动排成一排，因为flex-basis默认是auto，他们会自动缩到内容大小  

<div class="[&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 space-x-2  flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
`,title:"Flex Basis",level:2,content:`### Flex Basis  

flex-basis 定义元素空间大小，默认是auto, 即元素内容大小。
这样就解释了为什么父元素设置为flex以后，子元素自动排成一排，因为flex-basis默认是auto，他们会自动缩到内容大小  

<div class="[&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 space-x-2  flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>`,frontmatter:{title:"Flex Basis",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:25},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Mn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:33,no:34},__clicksElements:[],__preloaded:!1}),qA=n("h3",null,"Flex Basis",-1),VA=n("p",null,"flex-basis 定义元素空间大小，默认是auto, 即元素内容大小。 这样就解释了为什么父元素设置为flex以后，子元素自动排成一排，因为flex-basis默认是auto，他们会自动缩到内容大小",-1),GA=n("div",{class:"[&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 space-x-2 flex flex-row"},[n("div",{class:"basis-1/4"},"01"),n("div",{class:"basis-1/4"},"02"),n("div",{class:"basis-1/2"},"03")],-1),WA={__name:"34",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Mn;return A(I,Mn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Mn))})(),(s,i)=>(h(),S(he,R(L(y(Mn))),{default:C(()=>[qA,VA,GA]),_:1},16))}},UA=k(WA,[["__file","/@slidev/slides/34.md"]]),Fn=g({title:"Flex Direction",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),KA=g({layout:c(()=>Fn.layout),transition:c(()=>Fn.transition),class:c(()=>Fn.class),clicks:c(()=>Fn.clicks),name:c(()=>Fn.name),preload:c(()=>Fn.preload),slide:{raw:"",title:"Flex Direction",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:34,start:25,end:55,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Direction
level: 2
---

### Flex Direction

| Class            | Properties                      |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

flex-row  

<div class="mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

flex-row-reverse ，完全镜像了。  

<div class="mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row-reverse ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
`,title:"Flex Direction",level:2,content:`### Flex Direction

| Class            | Properties                      |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

flex-row  

<div class="mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

flex-row-reverse ，完全镜像了。  

<div class="mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row-reverse ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`,frontmatter:{title:"Flex Direction",level:2},frontmatterStyle:"frontmatter",index:2,start:25,end:55},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Fn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:34,no:35},__clicksElements:[],__preloaded:!1}),YA=n("h3",null,"Flex Direction",-1),JA=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"flex-row"),n("td",null,"flex-direction: row;")]),n("tr",null,[n("td",null,"flex-row-reverse"),n("td",null,"flex-direction: row-reverse;")]),n("tr",null,[n("td",null,"flex-col"),n("td",null,"flex-direction: column;")]),n("tr",null,[n("td",null,"flex-col-reverse"),n("td",null,"flex-direction: column-reverse;")])])],-1),ZA=n("p",null,"flex-row",-1),XA=n("div",{class:"mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),QA=n("p",null,"flex-row-reverse ，完全镜像了。",-1),eO=n("div",{class:"mt-2 [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 gap-2 flex flex-row-reverse"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),tO={__name:"35",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Fn;return A(I,Fn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Fn))})(),(s,i)=>(h(),S(he,R(L(y(Fn))),{default:C(()=>[YA,JA,ZA,XA,QA,eO]),_:1},16))}},nO=k(tO,[["__file","/@slidev/slides/35.md"]]),In=g({title:"Flex Wrap",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),sO=g({layout:c(()=>In.layout),transition:c(()=>In.transition),class:c(()=>In.class),clicks:c(()=>In.clicks),name:c(()=>In.name),preload:c(()=>In.preload),slide:{raw:"",title:"Flex Wrap",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:35,start:55,end:69,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Wrap
level: 2
---
### Flex Wrap

这个属性也很好理解

| Class             | Properties               |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |
`,title:"Flex Wrap",level:2,content:`### Flex Wrap

这个属性也很好理解

| Class             | Properties               |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |`,frontmatter:{title:"Flex Wrap",level:2},frontmatterStyle:"frontmatter",index:3,start:55,end:69},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:In,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:35,no:36},__clicksElements:[],__preloaded:!1}),lO=n("h3",null,"Flex Wrap",-1),oO=n("p",null,"这个属性也很好理解",-1),iO=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"flex-wrap"),n("td",null,"flex-wrap: wrap;")]),n("tr",null,[n("td",null,"flex-wrap-reverse"),n("td",null,"flex-wrap: wrap-reverse;")]),n("tr",null,[n("td",null,"flex-nowrap"),n("td",null,"flex-wrap: nowrap;")])])],-1),rO={__name:"36",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=In;return A(I,In),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,In))})(),(s,i)=>(h(),S(he,R(L(y(In))),{default:C(()=>[lO,oO,iO]),_:1},16))}},aO=k(rO,[["__file","/@slidev/slides/36.md"]]),Ln=g({title:"Flex",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),cO=g({layout:c(()=>Ln.layout),transition:c(()=>Ln.transition),class:c(()=>Ln.class),clicks:c(()=>Ln.clicks),name:c(()=>Ln.name),preload:c(()=>Ln.preload),slide:{raw:"",title:"Flex",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:36,start:69,end:91,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex
level: 2
---

### Flex
flex 是flex-grow，flex-shrink，flex-basis三个数值的简写
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

flex-shrink是空间不足的情况缩短的比例，设置为0则表示不缩短

下面是flex的几种预设值

| Class        | Properties      |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |
`,title:"Flex",level:2,content:`### Flex
flex 是flex-grow，flex-shrink，flex-basis三个数值的简写
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

flex-shrink是空间不足的情况缩短的比例，设置为0则表示不缩短

下面是flex的几种预设值

| Class        | Properties      |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |`,frontmatter:{title:"Flex",level:2},frontmatterStyle:"frontmatter",index:4,start:69,end:91},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Ln,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:36,no:37},__clicksElements:[],__preloaded:!1}),dO=n("h3",null,"Flex",-1),uO=n("p",null,"flex 是flex-grow，flex-shrink，flex-basis三个数值的简写 flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。",-1),fO=n("p",null,"flex-shrink是空间不足的情况缩短的比例，设置为0则表示不缩短",-1),pO=n("p",null,"下面是flex的几种预设值",-1),mO=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"flex-1"),n("td",null,"flex: 1 1 0%;")]),n("tr",null,[n("td",null,"flex-auto"),n("td",null,"flex: 1 1 auto;")]),n("tr",null,[n("td",null,"flex-initial"),n("td",null,"flex: 0 1 auto;")]),n("tr",null,[n("td",null,"flex-none"),n("td",null,"flex: none;")])])],-1),hO={__name:"37",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ln;return A(I,Ln),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ln))})(),(s,i)=>(h(),S(he,R(L(y(Ln))),{default:C(()=>[dO,uO,fO,pO,mO]),_:1},16))}},vO=k(hO,[["__file","/@slidev/slides/37.md"]]),Rn=g({srcSequence:"./pages/002FlexAndGrid.md"}),gO=g({layout:c(()=>Rn.layout),transition:c(()=>Rn.transition),class:c(()=>Rn.class),clicks:c(()=>Rn.clicks),name:c(()=>Rn.name),preload:c(()=>Rn.preload),slide:{raw:"",content:"",note:"",index:37,start:92,end:136,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
flex-none 是项目原本的大小，没有伸缩  
flex-initial 可以缩短，但是不延伸,这个也是flex属性的默认值

<div class="flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-initial w-64 ...">
    02 flex-initial
  </div>
  <div class="flex-initial w-32 ...">
    03 flex-initial
  </div>
</div>

flex-1 这里有多余的空间，所以多余的空间会被两个flex-grow 1的元素均分

<div class="flex [&_div]:bg-red-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-1 w-64 ...">
    02 flex-1
  </div>
  <div class="flex-1 w-32 ...">
    03 flex-1
  </div>
</div>

flex-auto 和flex-1的区别是，会考虑到初始大小，因此会除去初始大小后平分空间，因此初始更大的元素会占据更多的空间

<div class="flex [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-auto w-64 ...">
    02 flex-auto
  </div>
  <div class="flex-auto w-32 ...">
    03 flex-auto
  </div>
</div>
`,content:`flex-none 是项目原本的大小，没有伸缩  
flex-initial 可以缩短，但是不延伸,这个也是flex属性的默认值

<div class="flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-initial w-64 ...">
    02 flex-initial
  </div>
  <div class="flex-initial w-32 ...">
    03 flex-initial
  </div>
</div>

flex-1 这里有多余的空间，所以多余的空间会被两个flex-grow 1的元素均分

<div class="flex [&_div]:bg-red-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-1 w-64 ...">
    02 flex-1
  </div>
  <div class="flex-1 w-32 ...">
    03 flex-1
  </div>
</div>

flex-auto 和flex-1的区别是，会考虑到初始大小，因此会除去初始大小后平分空间，因此初始更大的元素会占据更多的空间

<div class="flex [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-auto w-64 ...">
    02 flex-auto
  </div>
  <div class="flex-auto w-32 ...">
    03 flex-auto
  </div>
</div>`,frontmatter:{},index:5,start:92,end:136},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Rn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:37,no:38},__clicksElements:[],__preloaded:!1}),_O=n("p",null,[H("flex-none 是项目原本的大小，没有伸缩"),n("br"),H(" flex-initial 可以缩短，但是不延伸,这个也是flex属性的默认值")],-1),yO=n("div",{class:"flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-none w-14 h-14"}," 01 none "),n("div",{class:"flex-initial w-64 ..."}," 02 flex-initial "),n("div",{class:"flex-initial w-32 ..."}," 03 flex-initial ")],-1),bO=n("p",null,"flex-1 这里有多余的空间，所以多余的空间会被两个flex-grow 1的元素均分",-1),wO=n("div",{class:"flex [&_div]:bg-red-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-none w-14 h-14"}," 01 none "),n("div",{class:"flex-1 w-64 ..."}," 02 flex-1 "),n("div",{class:"flex-1 w-32 ..."}," 03 flex-1 ")],-1),xO=n("p",null,"flex-auto 和flex-1的区别是，会考虑到初始大小，因此会除去初始大小后平分空间，因此初始更大的元素会占据更多的空间",-1),kO=n("div",{class:"flex [&_div]:bg-purple-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-none w-14 h-14"}," 01 none "),n("div",{class:"flex-auto w-64 ..."}," 02 flex-auto "),n("div",{class:"flex-auto w-32 ..."}," 03 flex-auto ")],-1),$O={__name:"38",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Rn;return A(I,Rn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Rn))})(),(s,i)=>(h(),S(he,R(L(y(Rn))),{default:C(()=>[_O,yO,bO,wO,xO,kO]),_:1},16))}},SO=k($O,[["__file","/@slidev/slides/38.md"]]),Hn=g({title:"Flex Grow",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),jO=g({layout:c(()=>Hn.layout),transition:c(()=>Hn.transition),class:c(()=>Hn.class),clicks:c(()=>Hn.clicks),name:c(()=>Hn.name),preload:c(()=>Hn.preload),slide:{raw:"",title:"Flex Grow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:38,start:136,end:177,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Grow
level: 2
---

### Flex Grow
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

| Class  | Properties    |
| ------ | ------------- |
| grow   | flex-grow: 1; |
| grow-0 | flex-grow: 0; |

<div class="flex [&_div]:bg-cyan-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="grow h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>

grow-0 的效果，因为flex-basis是默认值auto，按照元素大小来。

<div class="flex [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="grow w-14 h-14">
    01
  </div>
  <div class="grow-0 h-14">
    02
  </div>
  <div class="grow w-14 h-14">
    03
  </div>
</div>
`,title:"Flex Grow",level:2,content:`### Flex Grow
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

| Class  | Properties    |
| ------ | ------------- |
| grow   | flex-grow: 1; |
| grow-0 | flex-grow: 0; |

<div class="flex [&_div]:bg-cyan-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="grow h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>

grow-0 的效果，因为flex-basis是默认值auto，按照元素大小来。

<div class="flex [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="grow w-14 h-14">
    01
  </div>
  <div class="grow-0 h-14">
    02
  </div>
  <div class="grow w-14 h-14">
    03
  </div>
</div>`,frontmatter:{title:"Flex Grow",level:2},frontmatterStyle:"frontmatter",index:6,start:136,end:177},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Hn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:38,no:39},__clicksElements:[],__preloaded:!1}),PO=n("h3",null,"Flex Grow",-1),TO=n("p",null,"flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。",-1),CO=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"grow"),n("td",null,"flex-grow: 1;")]),n("tr",null,[n("td",null,"grow-0"),n("td",null,"flex-grow: 0;")])])],-1),EO=n("div",{class:"flex [&_div]:bg-cyan-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-none w-14 h-14"}," 01 "),n("div",{class:"grow h-14"}," 02 "),n("div",{class:"flex-none w-14 h-14"}," 03 ")],-1),AO=n("p",null,"grow-0 的效果，因为flex-basis是默认值auto，按照元素大小来。",-1),OO=n("div",{class:"flex [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"grow w-14 h-14"}," 01 "),n("div",{class:"grow-0 h-14"}," 02 "),n("div",{class:"grow w-14 h-14"}," 03 ")],-1),DO={__name:"39",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Hn;return A(I,Hn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Hn))})(),(s,i)=>(h(),S(he,R(L(y(Hn))),{default:C(()=>[PO,TO,CO,EO,AO,OO]),_:1},16))}},BO=k(DO,[["__file","/@slidev/slides/39.md"]]),zn=g({title:"Flex Shrink",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),MO=g({layout:c(()=>zn.layout),transition:c(()=>zn.transition),class:c(()=>zn.class),clicks:c(()=>zn.clicks),name:c(()=>zn.name),preload:c(()=>zn.preload),slide:{raw:"",title:"Flex Shrink",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:39,start:177,end:219,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Shrink
level: 2
---

### Flex Shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

| Class    | Properties      |
| -------- | --------------- |
| shrink   | flex-shrink: 1; |
| shrink-0 | flex-shrink: 0; |

这是原本大小
<div class="flex [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="shrink w-64 h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>  

shrink-0防止收缩  

<div class="flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-1 h-16">
    01
  </div>
  <div class="shrink-0 w-64 h-16">
    02
  </div>
  <div class="flex-1 h-16">
    03
  </div>
</div>
`,title:"Flex Shrink",level:2,content:`### Flex Shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

| Class    | Properties      |
| -------- | --------------- |
| shrink   | flex-shrink: 1; |
| shrink-0 | flex-shrink: 0; |

这是原本大小
<div class="flex [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="shrink w-64 h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>  

shrink-0防止收缩  

<div class="flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center">
  <div class="flex-1 h-16">
    01
  </div>
  <div class="shrink-0 w-64 h-16">
    02
  </div>
  <div class="flex-1 h-16">
    03
  </div>
</div>`,frontmatter:{title:"Flex Shrink",level:2},frontmatterStyle:"frontmatter",index:7,start:177,end:219},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:zn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:39,no:40},__clicksElements:[],__preloaded:!1}),FO=n("h3",null,"Flex Shrink",-1),IO=n("p",null,"flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。",-1),LO=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"shrink"),n("td",null,"flex-shrink: 1;")]),n("tr",null,[n("td",null,"shrink-0"),n("td",null,"flex-shrink: 0;")])])],-1),RO=n("p",null,"这是原本大小",-1),HO=n("div",{class:"flex [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-none w-14 h-14"}," 01 "),n("div",{class:"shrink w-64 h-14"}," 02 "),n("div",{class:"flex-none w-14 h-14"}," 03 ")],-1),zO=n("p",null,"shrink-0防止收缩",-1),NO=n("div",{class:"flex [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-2 mt-2 gap-2 text-center"},[n("div",{class:"flex-1 h-16"}," 01 "),n("div",{class:"shrink-0 w-64 h-16"}," 02 "),n("div",{class:"flex-1 h-16"}," 03 ")],-1),qO={__name:"40",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=zn;return A(I,zn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,zn))})(),(s,i)=>(h(),S(he,R(L(y(zn))),{default:C(()=>[FO,IO,LO,RO,HO,zO,NO]),_:1},16))}},VO=k(qO,[["__file","/@slidev/slides/40.md"]]),Nn=g({title:"Flex Order",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),GO=g({layout:c(()=>Nn.layout),transition:c(()=>Nn.transition),class:c(()=>Nn.class),clicks:c(()=>Nn.clicks),name:c(()=>Nn.name),preload:c(()=>Nn.preload),slide:{raw:"",title:"Flex Order",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:40,start:219,end:233,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Flex Order
level: 2
---
### Order 排序  

可以定制flex布局的元素顺序  

<div class="flex justify-between [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 mt-2 gap-2 text-center">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>
`,title:"Flex Order",level:2,content:`### Order 排序  

可以定制flex布局的元素顺序  

<div class="flex justify-between [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 mt-2 gap-2 text-center">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>`,frontmatter:{title:"Flex Order",level:2},frontmatterStyle:"frontmatter",index:8,start:219,end:233},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Nn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:40,no:41},__clicksElements:[],__preloaded:!1}),WO=n("h3",null,"Order 排序",-1),UO=n("p",null,"可以定制flex布局的元素顺序",-1),KO=n("div",{class:"flex justify-between [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 mt-2 gap-2 text-center"},[n("div",{class:"order-last"},"01"),n("div",null,"02"),n("div",null,"03")],-1),YO={__name:"41",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Nn;return A(I,Nn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Nn))})(),(s,i)=>(h(),S(he,R(L(y(Nn))),{default:C(()=>[WO,UO,KO]),_:1},16))}},JO=k(YO,[["__file","/@slidev/slides/41.md"]]),qn=g({title:"Grid Template Columns",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),ZO=g({layout:c(()=>qn.layout),transition:c(()=>qn.transition),class:c(()=>qn.class),clicks:c(()=>qn.clicks),name:c(()=>qn.name),preload:c(()=>qn.preload),slide:{raw:"",title:"Grid Template Columns",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:41,start:233,end:255,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Template Columns
level: 2
---

### Grid 一些grid栏排列模板
用类似\`grid-template-columns: repeat(2, minmax(0, 1fr));\`的样式实现分栏。
fr（fraction）是分数单位，minmax是=为长度设置最小值和最大值。  
repeat是减少重复样式书写的，也可以手动把样式写几遍,比如 \`grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);\`
<div class="grid grid-cols-4 gap-4 [&_div]:bg-fuchsia-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>
`,title:"Grid Template Columns",level:2,content:`### Grid 一些grid栏排列模板
用类似\`grid-template-columns: repeat(2, minmax(0, 1fr));\`的样式实现分栏。
fr（fraction）是分数单位，minmax是=为长度设置最小值和最大值。  
repeat是减少重复样式书写的，也可以手动把样式写几遍,比如 \`grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);\`
<div class="grid grid-cols-4 gap-4 [&_div]:bg-fuchsia-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>`,frontmatter:{title:"Grid Template Columns",level:2},frontmatterStyle:"frontmatter",index:9,start:233,end:255},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:qn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:41,no:42},__clicksElements:[],__preloaded:!1}),XO=n("h3",null,"Grid 一些grid栏排列模板",-1),QO=n("p",null,[H("用类似"),n("code",null,"grid-template-columns: repeat(2, minmax(0, 1fr));"),H("的样式实现分栏。 fr（fraction）是分数单位，minmax是=为长度设置最小值和最大值。"),n("br"),H(" repeat是减少重复样式书写的，也可以手动把样式写几遍,比如 "),n("code",null,"grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);")],-1),eD=n("div",{class:"grid grid-cols-4 gap-4 [&_div]:bg-fuchsia-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06"),n("div",null,"07"),n("div",null,"08"),n("div",null,"09"),n("div",null,"10")],-1),tD={__name:"42",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=qn;return A(I,qn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,qn))})(),(s,i)=>(h(),S(he,R(L(y(qn))),{default:C(()=>[XO,QO,eD]),_:1},16))}},nD=k(tD,[["__file","/@slidev/slides/42.md"]]),Vn=g({srcSequence:"./pages/002FlexAndGrid.md"}),sD=g({layout:c(()=>Vn.layout),transition:c(()=>Vn.transition),class:c(()=>Vn.class),clicks:c(()=>Vn.clicks),name:c(()=>Vn.name),preload:c(()=>Vn.preload),slide:{raw:"",content:"",note:"",index:42,start:256,end:272,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
下面是subgrid的例子  它允许网格项拥有自己的网格，并继承父网格的网格线。  
2023年才开始支持， 暂不建议使用
<CanIUse src="https://caniuse.com/css-subgrid"/>

<div class="grid grid-cols-4 gap-4 [&_div:not(:last-child)]:bg-fuchsia-400 [&_div:not(:last-child)]:rounded [&_div:not(:last-child)]:p-4 [&_div:not(:last-child)]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="grid grid-cols-subgrid gap-4 col-span-3 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="col-start-2">06</div>
  </div>
</div>
`,content:`下面是subgrid的例子  它允许网格项拥有自己的网格，并继承父网格的网格线。  
2023年才开始支持， 暂不建议使用
<CanIUse src="https://caniuse.com/css-subgrid"/>

<div class="grid grid-cols-4 gap-4 [&_div:not(:last-child)]:bg-fuchsia-400 [&_div:not(:last-child)]:rounded [&_div:not(:last-child)]:p-4 [&_div:not(:last-child)]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="grid grid-cols-subgrid gap-4 col-span-3 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="col-start-2">06</div>
  </div>
</div>`,frontmatter:{},index:10,start:256,end:272},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Vn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:42,no:43},__clicksElements:[],__preloaded:!1}),lD=n("p",null,[H("下面是subgrid的例子 它允许网格项拥有自己的网格，并继承父网格的网格线。"),n("br"),H(" 2023年才开始支持， 暂不建议使用")],-1),oD=n("div",{class:"grid grid-cols-4 gap-4 [&_div:not(:last-child)]:bg-fuchsia-400 [&_div:not(:last-child)]:rounded [&_div:not(:last-child)]:p-4 [&_div:not(:last-child)]:text-center mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",{class:"grid grid-cols-subgrid gap-4 col-span-3 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center"},[n("div",{class:"col-start-2"},"06")])],-1),iD={__name:"43",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Vn;return A(I,Vn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Vn))})(),(s,i)=>{const a=gr;return h(),S(he,R(L(y(Vn))),{default:C(()=>[lD,Z(a,{src:"https://caniuse.com/css-subgrid"}),oD]),_:1},16)}}},rD=k(iD,[["__file","/@slidev/slides/43.md"]]),Gn=g({title:"Grid Column Start / End",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),aD=g({layout:c(()=>Gn.layout),transition:c(()=>Gn.transition),class:c(()=>Gn.class),clicks:c(()=>Gn.clicks),name:c(()=>Gn.name),preload:c(()=>Gn.preload),slide:{raw:"",title:"Grid Column Start / End",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:43,start:272,end:290,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Column Start / End
level: 2
---
### Grid Column Start / End

 \`grid-column: span 2 / span 2\` 这个样式可以让grid栏跨越2个栏位。

<div class="grid grid-cols-3 gap-4 [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="">01</div>
  <div class="">02</div>
  <div class="">03</div>
  <div class="col-span-2">04</div>
  <div class="">05</div>
  <div class="">06</div>
  <div class="col-span-2">07</div>
</div>
`,title:"Grid Column Start / End",level:2,content:`### Grid Column Start / End

 \`grid-column: span 2 / span 2\` 这个样式可以让grid栏跨越2个栏位。

<div class="grid grid-cols-3 gap-4 [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="">01</div>
  <div class="">02</div>
  <div class="">03</div>
  <div class="col-span-2">04</div>
  <div class="">05</div>
  <div class="">06</div>
  <div class="col-span-2">07</div>
</div>`,frontmatter:{title:"Grid Column Start / End",level:2},frontmatterStyle:"frontmatter",index:11,start:272,end:290},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Gn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:43,no:44},__clicksElements:[],__preloaded:!1}),cD=n("h3",null,"Grid Column Start / End",-1),dD=n("p",null,[n("code",null,"grid-column: span 2 / span 2"),H(" 这个样式可以让grid栏跨越2个栏位。")],-1),uD=n("div",{class:"grid grid-cols-3 gap-4 [&_div]:bg-indigo-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center"},[n("div",{class:""},"01"),n("div",{class:""},"02"),n("div",{class:""},"03"),n("div",{class:"col-span-2"},"04"),n("div",{class:""},"05"),n("div",{class:""},"06"),n("div",{class:"col-span-2"},"07")],-1),fD={__name:"44",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Gn;return A(I,Gn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Gn))})(),(s,i)=>(h(),S(he,R(L(y(Gn))),{default:C(()=>[cD,dD,uD]),_:1},16))}},pD=k(fD,[["__file","/@slidev/slides/44.md"]]),Wn=g({srcSequence:"./pages/002FlexAndGrid.md"}),mD=g({layout:c(()=>Wn.layout),transition:c(()=>Wn.transition),class:c(()=>Wn.class),clicks:c(()=>Wn.clicks),name:c(()=>Wn.name),preload:c(()=>Wn.preload),slide:{raw:"",content:"",note:"",index:44,start:291,end:301,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
\`grid-column-start\`和\`grid-column-end\`控制起始位置

<div class="grid grid-cols-6 gap-4 [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="col-start-2 col-span-4 ">01</div>
  <div class="col-start-1 col-end-3 ">02</div>
  <div class="col-end-7 col-span-2 ">03</div>
  <div class="col-start-1 col-end-7 ">04</div>
</div>
`,content:`\`grid-column-start\`和\`grid-column-end\`控制起始位置

<div class="grid grid-cols-6 gap-4 [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="col-start-2 col-span-4 ">01</div>
  <div class="col-start-1 col-end-3 ">02</div>
  <div class="col-end-7 col-span-2 ">03</div>
  <div class="col-start-1 col-end-7 ">04</div>
</div>`,frontmatter:{},index:12,start:291,end:301},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Wn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:44,no:45},__clicksElements:[],__preloaded:!1}),hD=n("p",null,[n("code",null,"grid-column-start"),H("和"),n("code",null,"grid-column-end"),H("控制起始位置")],-1),vD=n("div",{class:"grid grid-cols-6 gap-4 [&_div]:bg-blue-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center"},[n("div",{class:"col-start-2 col-span-4"},"01"),n("div",{class:"col-start-1 col-end-3"},"02"),n("div",{class:"col-end-7 col-span-2"},"03"),n("div",{class:"col-start-1 col-end-7"},"04")],-1),gD={__name:"45",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Wn;return A(I,Wn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Wn))})(),(s,i)=>(h(),S(he,R(L(y(Wn))),{default:C(()=>[hD,vD]),_:1},16))}},_D=k(gD,[["__file","/@slidev/slides/45.md"]]),Un=g({title:"Grid Template Rows",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),yD=g({layout:c(()=>Un.layout),transition:c(()=>Un.transition),class:c(()=>Un.class),clicks:c(()=>Un.clicks),name:c(()=>Un.name),preload:c(()=>Un.preload),slide:{raw:"",title:"Grid Template Rows",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:45,start:301,end:323,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Template Rows
level: 2
---

### Grid 一些grid行排列模板

\`grid-flow-col\` 这个也就是样式\`grid-auto-flow:col\`,也就是告诉自动放置算法怎么排列项目
因为grid的布局，需要设置grid-template-columns和grid-template-rows，这里也可以用 grid-cols-3代替是一样的效果
<div class="grid grid-rows-4 grid-flow-col gap-4 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>
`,title:"Grid Template Rows",level:2,content:`### Grid 一些grid行排列模板

\`grid-flow-col\` 这个也就是样式\`grid-auto-flow:col\`,也就是告诉自动放置算法怎么排列项目
因为grid的布局，需要设置grid-template-columns和grid-template-rows，这里也可以用 grid-cols-3代替是一样的效果
<div class="grid grid-rows-4 grid-flow-col gap-4 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>`,frontmatter:{title:"Grid Template Rows",level:2},frontmatterStyle:"frontmatter",index:13,start:301,end:323},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Un,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:45,no:46},__clicksElements:[],__preloaded:!1}),bD=n("h3",null,"Grid 一些grid行排列模板",-1),wD=n("p",null,[n("code",null,"grid-flow-col"),H(" 这个也就是样式"),n("code",null,"grid-auto-flow:col"),H(",也就是告诉自动放置算法怎么排列项目 因为grid的布局，需要设置grid-template-columns和grid-template-rows，这里也可以用 grid-cols-3代替是一样的效果")],-1),xD=n("div",{class:"grid grid-rows-4 grid-flow-col gap-4 [&_div]:bg-pink-400 [&_div]:rounded [&_div]:p-4 [&_div]:text-center mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06"),n("div",null,"07"),n("div",null,"08"),n("div",null,"09"),n("div",null,"10")],-1),kD={__name:"46",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Un;return A(I,Un),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Un))})(),(s,i)=>(h(),S(he,R(L(y(Un))),{default:C(()=>[bD,wD,xD]),_:1},16))}},$D=k(kD,[["__file","/@slidev/slides/46.md"]]),Kn=g({title:"Grid Row Start / End",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),SD=g({layout:c(()=>Kn.layout),transition:c(()=>Kn.transition),class:c(()=>Kn.class),clicks:c(()=>Kn.clicks),name:c(()=>Kn.name),preload:c(()=>Kn.preload),slide:{raw:"",title:"Grid Row Start / End",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:46,start:323,end:345,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Row Start / End
level: 2
---
### Grid Row Start / End

跨行  \`grid-row: span 2 / span 2;\`

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="row-span-3">01</div>
  <div class="col-span-2">02</div>
  <div class="row-span-2 col-span-2">03</div>
</div>

\`grid-row-start\`  

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="row-start-2 row-span-2 ">01</div>
  <div class="row-end-3 row-span-2 ">02</div>
  <div class="row-start-1 row-end-4 ">03</div>
</div>
`,title:"Grid Row Start / End",level:2,content:`### Grid Row Start / End

跨行  \`grid-row: span 2 / span 2;\`

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="row-span-3">01</div>
  <div class="col-span-2">02</div>
  <div class="row-span-2 col-span-2">03</div>
</div>

\`grid-row-start\`  

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center">
  <div class="row-start-2 row-span-2 ">01</div>
  <div class="row-end-3 row-span-2 ">02</div>
  <div class="row-start-1 row-end-4 ">03</div>
</div>`,frontmatter:{title:"Grid Row Start / End",level:2},frontmatterStyle:"frontmatter",index:14,start:323,end:345},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Kn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:46,no:47},__clicksElements:[],__preloaded:!1}),jD=n("h3",null,"Grid Row Start / End",-1),PD=n("p",null,[H("跨行 "),n("code",null,"grid-row: span 2 / span 2;")],-1),TD=n("div",{class:"grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center"},[n("div",{class:"row-span-3"},"01"),n("div",{class:"col-span-2"},"02"),n("div",{class:"row-span-2 col-span-2"},"03")],-1),CD=n("p",null,[n("code",null,"grid-row-start")],-1),ED=n("div",{class:"grid grid-rows-3 grid-flow-col gap-4 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-4 [&_div]:text-center"},[n("div",{class:"row-start-2 row-span-2"},"01"),n("div",{class:"row-end-3 row-span-2"},"02"),n("div",{class:"row-start-1 row-end-4"},"03")],-1),AD={__name:"47",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Kn;return A(I,Kn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Kn))})(),(s,i)=>(h(),S(he,R(L(y(Kn))),{default:C(()=>[jD,PD,TD,CD,ED]),_:1},16))}},OD=k(AD,[["__file","/@slidev/slides/47.md"]]),Yn=g({title:"Grid Auto Flow",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/002FlexAndGrid.md"}),DD=g({layout:c(()=>Yn.layout),transition:c(()=>Yn.transition),class:c(()=>Yn.class),clicks:c(()=>Yn.clicks),name:c(()=>Yn.name),preload:c(()=>Yn.preload),slide:{raw:"",title:"Grid Auto Flow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:47,start:345,end:373,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Auto Flow
level: 2
layout: slim-table
tableSize: small
---

### Grid Auto Flow
用于控制网格中元素如何自动放置

| Class               | Properties                    |
| ------------------- | ----------------------------- |
| grid-flow-row       | grid-auto-flow: row;          |
| grid-flow-col       | grid-auto-flow: column;       |
| grid-flow-dense     | grid-auto-flow: dense;        |
| grid-flow-row-dense | grid-auto-flow: row dense;    |
| grid-flow-col-dense | grid-auto-flow: column dense; |

\`grid-auto-flow: row dense;\` 告诉自动排序算法，果后面出现较小的项目，则尝试在网格中较早的位置填孔

<div class="grid  grid-cols-3 grid-rows-3 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
`,title:"Grid Auto Flow",level:2,content:`### Grid Auto Flow
用于控制网格中元素如何自动放置

| Class               | Properties                    |
| ------------------- | ----------------------------- |
| grid-flow-row       | grid-auto-flow: row;          |
| grid-flow-col       | grid-auto-flow: column;       |
| grid-flow-dense     | grid-auto-flow: dense;        |
| grid-flow-row-dense | grid-auto-flow: row dense;    |
| grid-flow-col-dense | grid-auto-flow: column dense; |

\`grid-auto-flow: row dense;\` 告诉自动排序算法，果后面出现较小的项目，则尝试在网格中较早的位置填孔

<div class="grid  grid-cols-3 grid-rows-3 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>`,frontmatter:{title:"Grid Auto Flow",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:15,start:345,end:373},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Yn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:47,no:48},__clicksElements:[],__preloaded:!1}),BD=n("h3",null,"Grid Auto Flow",-1),MD=n("p",null,"用于控制网格中元素如何自动放置",-1),FD=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"grid-flow-row"),n("td",null,"grid-auto-flow: row;")]),n("tr",null,[n("td",null,"grid-flow-col"),n("td",null,"grid-auto-flow: column;")]),n("tr",null,[n("td",null,"grid-flow-dense"),n("td",null,"grid-auto-flow: dense;")]),n("tr",null,[n("td",null,"grid-flow-row-dense"),n("td",null,"grid-auto-flow: row dense;")]),n("tr",null,[n("td",null,"grid-flow-col-dense"),n("td",null,"grid-auto-flow: column dense;")])])],-1),ID=n("p",null,[n("code",null,"grid-auto-flow: row dense;"),H(" 告诉自动排序算法，果后面出现较小的项目，则尝试在网格中较早的位置填孔")],-1),LD=n("div",{class:"grid grid-cols-3 grid-rows-3 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4"},[n("div",{class:"col-span-2"},"01"),n("div",{class:"col-span-2"},"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05")],-1),RD={__name:"48",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Yn;return A(I,Yn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Yn))})(),(s,i)=>(h(),S(Y,R(L(y(Yn))),{default:C(()=>[BD,MD,FD,ID,LD]),_:1},16))}},HD=k(RD,[["__file","/@slidev/slides/48.md"]]),Jn=g({title:"Grid Auto Columns",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),zD=g({layout:c(()=>Jn.layout),transition:c(()=>Jn.transition),class:c(()=>Jn.class),clicks:c(()=>Jn.clicks),name:c(()=>Jn.name),preload:c(()=>Jn.preload),slide:{raw:"",title:"Grid Auto Columns",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:48,start:373,end:401,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Auto Columns
level: 2
layout: slim-table
---
### Grid Auto Columns

用于控制隐式创建的网格列的大小

| Class          | Properties                         |
| -------------- | ---------------------------------- |
| auto-cols-auto | grid-auto-columns: auto;           |
| auto-cols-min  | grid-auto-columns: min-content;    |
| auto-cols-max  | grid-auto-columns: max-content;    |
| auto-cols-fr   | grid-auto-columns: minmax(0, 1fr); |

<div class="grid grid-flow-col auto-cols-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

<div class="grid grid-flow-col auto-cols-fr [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
`,title:"Grid Auto Columns",level:2,content:`### Grid Auto Columns

用于控制隐式创建的网格列的大小

| Class          | Properties                         |
| -------------- | ---------------------------------- |
| auto-cols-auto | grid-auto-columns: auto;           |
| auto-cols-min  | grid-auto-columns: min-content;    |
| auto-cols-max  | grid-auto-columns: max-content;    |
| auto-cols-fr   | grid-auto-columns: minmax(0, 1fr); |

<div class="grid grid-flow-col auto-cols-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

<div class="grid grid-flow-col auto-cols-fr [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`,frontmatter:{title:"Grid Auto Columns",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:16,start:373,end:401},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Jn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:48,no:49},__clicksElements:[],__preloaded:!1}),ND=n("h3",null,"Grid Auto Columns",-1),qD=n("p",null,"用于控制隐式创建的网格列的大小",-1),VD=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"auto-cols-auto"),n("td",null,"grid-auto-columns: auto;")]),n("tr",null,[n("td",null,"auto-cols-min"),n("td",null,"grid-auto-columns: min-content;")]),n("tr",null,[n("td",null,"auto-cols-max"),n("td",null,"grid-auto-columns: max-content;")]),n("tr",null,[n("td",null,"auto-cols-fr"),n("td",null,"grid-auto-columns: minmax(0, 1fr);")])])],-1),GD=n("div",{class:"grid grid-flow-col auto-cols-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),WD=n("div",{class:"grid grid-flow-col auto-cols-fr [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),UD={__name:"49",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Jn;return A(I,Jn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Jn))})(),(s,i)=>(h(),S(Y,R(L(y(Jn))),{default:C(()=>[ND,qD,VD,GD,WD]),_:1},16))}},KD=k(UD,[["__file","/@slidev/slides/49.md"]]),Zn=g({title:"Grid Auto Rows",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),YD=g({layout:c(()=>Zn.layout),transition:c(()=>Zn.transition),class:c(()=>Zn.class),clicks:c(()=>Zn.clicks),name:c(()=>Zn.name),preload:c(()=>Zn.preload),slide:{raw:"",title:"Grid Auto Rows",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:49,start:401,end:422,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Grid Auto Rows
level: 2
layout: slim-table
---
### Grid Auto Rows
用于控制隐式创建的网格行的大小

| Class          | Properties                      |
| -------------- | ------------------------------- |
| auto-rows-auto | grid-auto-rows: auto;           |
| auto-rows-min  | grid-auto-rows: min-content;    |
| auto-rows-max  | grid-auto-rows: max-content;    |
| auto-rows-fr   | grid-auto-rows: minmax(0, 1fr); |

<div class="grid grid-flow-row auto-rows-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
`,title:"Grid Auto Rows",level:2,content:`### Grid Auto Rows
用于控制隐式创建的网格行的大小

| Class          | Properties                      |
| -------------- | ------------------------------- |
| auto-rows-auto | grid-auto-rows: auto;           |
| auto-rows-min  | grid-auto-rows: min-content;    |
| auto-rows-max  | grid-auto-rows: max-content;    |
| auto-rows-fr   | grid-auto-rows: minmax(0, 1fr); |

<div class="grid grid-flow-row auto-rows-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`,frontmatter:{title:"Grid Auto Rows",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:17,start:401,end:422},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Zn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:49,no:50},__clicksElements:[],__preloaded:!1}),JD=n("h3",null,"Grid Auto Rows",-1),ZD=n("p",null,"用于控制隐式创建的网格行的大小",-1),XD=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"auto-rows-auto"),n("td",null,"grid-auto-rows: auto;")]),n("tr",null,[n("td",null,"auto-rows-min"),n("td",null,"grid-auto-rows: min-content;")]),n("tr",null,[n("td",null,"auto-rows-max"),n("td",null,"grid-auto-rows: max-content;")]),n("tr",null,[n("td",null,"auto-rows-fr"),n("td",null,"grid-auto-rows: minmax(0, 1fr);")])])],-1),QD=n("div",{class:"grid grid-flow-row auto-rows-max [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center gap-4 mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),e7={__name:"50",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Zn;return A(I,Zn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Zn))})(),(s,i)=>(h(),S(Y,R(L(y(Zn))),{default:C(()=>[JD,ZD,XD,QD]),_:1},16))}},t7=k(e7,[["__file","/@slidev/slides/50.md"]]),Xn=g({title:"Gap",level:2,srcSequence:"./pages/002FlexAndGrid.md"}),n7=g({layout:c(()=>Xn.layout),transition:c(()=>Xn.transition),class:c(()=>Xn.class),clicks:c(()=>Xn.clicks),name:c(()=>Xn.name),preload:c(()=>Xn.preload),slide:{raw:"",title:"Gap",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:50,start:422,end:437,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Gap
level: 2
---
### Gap

设置行和列的间距 \`row-gap\` \`column-gap\`

<div class="grid gap-4 grid-cols-2 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
`,title:"Gap",level:2,content:`### Gap

设置行和列的间距 \`row-gap\` \`column-gap\`

<div class="grid gap-4 grid-cols-2 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`,frontmatter:{title:"Gap",level:2},frontmatterStyle:"frontmatter",index:18,start:422,end:437},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Xn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:50,no:51},__clicksElements:[],__preloaded:!1}),s7=n("h3",null,"Gap",-1),l7=n("p",null,[H("设置行和列的间距 "),n("code",null,"row-gap"),H(),n("code",null,"column-gap")],-1),o7=n("div",{class:"grid gap-4 grid-cols-2 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04")],-1),i7={__name:"51",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Xn;return A(I,Xn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Xn))})(),(s,i)=>(h(),S(he,R(L(y(Xn))),{default:C(()=>[s7,l7,o7]),_:1},16))}},r7=k(i7,[["__file","/@slidev/slides/51.md"]]),Qn=g({title:"Justify Content",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),a7=g({layout:c(()=>Qn.layout),transition:c(()=>Qn.transition),class:c(()=>Qn.class),clicks:c(()=>Qn.clicks),name:c(()=>Qn.name),preload:c(()=>Qn.preload),slide:{raw:"",title:"Justify Content",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:51,start:437,end:455,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Justify Content
level: 2
layout: slim-table
---
### Justify Content

| Class           | Properties                      |
| --------------- | ------------------------------- |
| justify-normal  | justify-content: normal;        |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |
| justify-stretch | justify-content: stretch;       |
`,title:"Justify Content",level:2,content:`### Justify Content

| Class           | Properties                      |
| --------------- | ------------------------------- |
| justify-normal  | justify-content: normal;        |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |
| justify-stretch | justify-content: stretch;       |`,frontmatter:{title:"Justify Content",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:19,start:437,end:455},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:Qn,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:51,no:52},__clicksElements:[],__preloaded:!1}),c7=n("h3",null,"Justify Content",-1),d7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"justify-normal"),n("td",null,"justify-content: normal;")]),n("tr",null,[n("td",null,"justify-start"),n("td",null,"justify-content: flex-start;")]),n("tr",null,[n("td",null,"justify-end"),n("td",null,"justify-content: flex-end;")]),n("tr",null,[n("td",null,"justify-center"),n("td",null,"justify-content: center;")]),n("tr",null,[n("td",null,"justify-between"),n("td",null,"justify-content: space-between;")]),n("tr",null,[n("td",null,"justify-around"),n("td",null,"justify-content: space-around;")]),n("tr",null,[n("td",null,"justify-evenly"),n("td",null,"justify-content: space-evenly;")]),n("tr",null,[n("td",null,"justify-stretch"),n("td",null,"justify-content: stretch;")])])],-1),u7={__name:"52",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Qn;return A(I,Qn),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Qn))})(),(s,i)=>(h(),S(Y,R(L(y(Qn))),{default:C(()=>[c7,d7]),_:1},16))}},f7=k(u7,[["__file","/@slidev/slides/52.md"]]),es=g({title:"Justify Items",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/002FlexAndGrid.md"}),p7=g({layout:c(()=>es.layout),transition:c(()=>es.transition),class:c(()=>es.class),clicks:c(()=>es.clicks),name:c(()=>es.name),preload:c(()=>es.preload),slide:{raw:"",title:"Justify Items",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:52,start:455,end:489,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Justify Items
level: 2
layout: slim-table
tableSize: small
---
这些是针对grid布局的参数

| Class                 | Properties              |
| --------------------- | ----------------------- |
| justify-items-start   | justify-items: start;   |
| justify-items-end     | justify-items: end;     |
| justify-items-center  | justify-items: center;  |
| justify-items-stretch | justify-items: stretch; |

justify-items-start  
<div class="grid justify-items-start grid-cols-3 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
justify-items-end  
<div class="grid justify-items-end grid-cols-3   [&_div]:bg-cyan-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
`,title:"Justify Items",level:2,content:`这些是针对grid布局的参数

| Class                 | Properties              |
| --------------------- | ----------------------- |
| justify-items-start   | justify-items: start;   |
| justify-items-end     | justify-items: end;     |
| justify-items-center  | justify-items: center;  |
| justify-items-stretch | justify-items: stretch; |

justify-items-start  
<div class="grid justify-items-start grid-cols-3 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
justify-items-end  
<div class="grid justify-items-end grid-cols-3   [&_div]:bg-cyan-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`,frontmatter:{title:"Justify Items",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:20,start:455,end:489},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:es,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:52,no:53},__clicksElements:[],__preloaded:!1}),m7=n("p",null,"这些是针对grid布局的参数",-1),h7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"justify-items-start"),n("td",null,"justify-items: start;")]),n("tr",null,[n("td",null,"justify-items-end"),n("td",null,"justify-items: end;")]),n("tr",null,[n("td",null,"justify-items-center"),n("td",null,"justify-items: center;")]),n("tr",null,[n("td",null,"justify-items-stretch"),n("td",null,"justify-items: stretch;")])])],-1),v7=n("p",null,"justify-items-start",-1),g7=n("div",{class:"grid justify-items-start grid-cols-3 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),_7=n("div",{class:"grid justify-items-end grid-cols-3 [&_div]:bg-cyan-500 [&_div]:rounded [&_div]:p-2 [&_div]:text-center mt-2 gap-4"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),y7={__name:"53",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=es;return A(I,es),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,es))})(),(s,i)=>(h(),S(Y,R(L(y(es))),{default:C(()=>[m7,h7,v7,g7,H(" justify-items-end "),_7]),_:1},16))}},b7=k(y7,[["__file","/@slidev/slides/53.md"]]),ts=g({srcSequence:"./pages/002FlexAndGrid.md"}),w7=g({layout:c(()=>ts.layout),transition:c(()=>ts.transition),class:c(()=>ts.class),clicks:c(()=>ts.clicks),name:c(()=>ts.name),preload:c(()=>ts.preload),slide:{raw:"",content:"",note:"",index:53,start:490,end:513,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
justify-items-center  

<div class="grid justify-items-center grid-cols-3   [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

justify-items-stretch  

<div class="grid justify-items-stretch grid-cols-3   [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
`,content:`justify-items-center  

<div class="grid justify-items-center grid-cols-3   [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

justify-items-stretch  

<div class="grid justify-items-stretch grid-cols-3   [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`,frontmatter:{},index:21,start:490,end:513},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:ts,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:53,no:54},__clicksElements:[],__preloaded:!1}),x7=n("p",null,"justify-items-center",-1),k7=n("div",{class:"grid justify-items-center grid-cols-3 [&_div]:bg-fuchsia-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),$7=n("p",null,"justify-items-stretch",-1),S7=n("div",{class:"grid justify-items-stretch grid-cols-3 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center mt-2 gap-4"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),j7={__name:"54",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ts;return A(I,ts),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ts))})(),(s,i)=>(h(),S(he,R(L(y(ts))),{default:C(()=>[x7,k7,$7,S7]),_:1},16))}},P7=k(j7,[["__file","/@slidev/slides/54.md"]]),ns=g({title:"Justify Self",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),T7=g({layout:c(()=>ns.layout),transition:c(()=>ns.transition),class:c(()=>ns.class),clicks:c(()=>ns.clicks),name:c(()=>ns.name),preload:c(()=>ns.preload),slide:{raw:"",title:"Justify Self",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:54,start:513,end:529,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Justify Self
level: 2
layout: slim-table
---
用于控制单个网格项如何沿其内联轴对齐  
这个和 justify-items系列参数的区别是，它是作用于具体的元素的，而不是所有子元素

| Class                | Properties             |
| -------------------- | ---------------------- |
| justify-self-auto    | justify-self: auto;    |
| justify-self-start   | justify-self: start;   |
| justify-self-end     | justify-self: end;     |
| justify-self-center  | justify-self: center;  |
| justify-self-stretch | justify-self: stretch; |
`,title:"Justify Self",level:2,content:`用于控制单个网格项如何沿其内联轴对齐  
这个和 justify-items系列参数的区别是，它是作用于具体的元素的，而不是所有子元素

| Class                | Properties             |
| -------------------- | ---------------------- |
| justify-self-auto    | justify-self: auto;    |
| justify-self-start   | justify-self: start;   |
| justify-self-end     | justify-self: end;     |
| justify-self-center  | justify-self: center;  |
| justify-self-stretch | justify-self: stretch; |`,frontmatter:{title:"Justify Self",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:22,start:513,end:529},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:ns,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:54,no:55},__clicksElements:[],__preloaded:!1}),C7=n("p",null,[H("用于控制单个网格项如何沿其内联轴对齐"),n("br"),H(" 这个和 justify-items系列参数的区别是，它是作用于具体的元素的，而不是所有子元素")],-1),E7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"justify-self-auto"),n("td",null,"justify-self: auto;")]),n("tr",null,[n("td",null,"justify-self-start"),n("td",null,"justify-self: start;")]),n("tr",null,[n("td",null,"justify-self-end"),n("td",null,"justify-self: end;")]),n("tr",null,[n("td",null,"justify-self-center"),n("td",null,"justify-self: center;")]),n("tr",null,[n("td",null,"justify-self-stretch"),n("td",null,"justify-self: stretch;")])])],-1),A7={__name:"55",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ns;return A(I,ns),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ns))})(),(s,i)=>(h(),S(Y,R(L(y(ns))),{default:C(()=>[C7,E7]),_:1},16))}},O7=k(A7,[["__file","/@slidev/slides/55.md"]]),ss=g({title:"Align Content",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),D7=g({layout:c(()=>ss.layout),transition:c(()=>ss.transition),class:c(()=>ss.class),clicks:c(()=>ss.clicks),name:c(()=>ss.name),preload:c(()=>ss.preload),slide:{raw:"",title:"Align Content",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:55,start:529,end:551,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Align Content
level: 2
layout: slim-table
---

### Align Content

用于控制行网格容器中的定位方式的实用程序。 这个是垂直方向，控制子元素

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| content-normal   | align-content: normal;        |
| content-center   | align-content: center;        |
| content-start    | align-content: flex-start;    |
| content-end      | align-content: flex-end;      |
| content-between  | align-content: space-between; |
| content-around   | align-content: space-around;  |
| content-evenly   | align-content: space-evenly;  |
| content-baseline | align-content: baseline;      |
| content-stretch  | align-content: stretch;       |
`,title:"Align Content",level:2,content:`### Align Content

用于控制行网格容器中的定位方式的实用程序。 这个是垂直方向，控制子元素

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| content-normal   | align-content: normal;        |
| content-center   | align-content: center;        |
| content-start    | align-content: flex-start;    |
| content-end      | align-content: flex-end;      |
| content-between  | align-content: space-between; |
| content-around   | align-content: space-around;  |
| content-evenly   | align-content: space-evenly;  |
| content-baseline | align-content: baseline;      |
| content-stretch  | align-content: stretch;       |`,frontmatter:{title:"Align Content",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:23,start:529,end:551},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:ss,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:55,no:56},__clicksElements:[],__preloaded:!1}),B7=n("h3",null,"Align Content",-1),M7=n("p",null,"用于控制行网格容器中的定位方式的实用程序。 这个是垂直方向，控制子元素",-1),F7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"content-normal"),n("td",null,"align-content: normal;")]),n("tr",null,[n("td",null,"content-center"),n("td",null,"align-content: center;")]),n("tr",null,[n("td",null,"content-start"),n("td",null,"align-content: flex-start;")]),n("tr",null,[n("td",null,"content-end"),n("td",null,"align-content: flex-end;")]),n("tr",null,[n("td",null,"content-between"),n("td",null,"align-content: space-between;")]),n("tr",null,[n("td",null,"content-around"),n("td",null,"align-content: space-around;")]),n("tr",null,[n("td",null,"content-evenly"),n("td",null,"align-content: space-evenly;")]),n("tr",null,[n("td",null,"content-baseline"),n("td",null,"align-content: baseline;")]),n("tr",null,[n("td",null,"content-stretch"),n("td",null,"align-content: stretch;")])])],-1),I7={__name:"56",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ss;return A(I,ss),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ss))})(),(s,i)=>(h(),S(Y,R(L(y(ss))),{default:C(()=>[B7,M7,F7]),_:1},16))}},L7=k(I7,[["__file","/@slidev/slides/56.md"]]),ls=g({title:"Align Items",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),R7=g({layout:c(()=>ls.layout),transition:c(()=>ls.transition),class:c(()=>ls.class),clicks:c(()=>ls.clicks),name:c(()=>ls.name),preload:c(()=>ls.preload),slide:{raw:"",title:"Align Items",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:56,start:551,end:568,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Align Items
level: 2
layout: slim-table
---
### Align Items

用于控制 Flex 如何沿容器的横轴定位，这个是控制子元素

| Class          | Properties               |
| -------------- | ------------------------ |
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end;   |
| items-center   | align-items: center;     |
| items-baseline | align-items: baseline;   |
| items-stretch  | align-items: stretch;    |
`,title:"Align Items",level:2,content:`### Align Items

用于控制 Flex 如何沿容器的横轴定位，这个是控制子元素

| Class          | Properties               |
| -------------- | ------------------------ |
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end;   |
| items-center   | align-items: center;     |
| items-baseline | align-items: baseline;   |
| items-stretch  | align-items: stretch;    |`,frontmatter:{title:"Align Items",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:24,start:551,end:568},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:ls,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:56,no:57},__clicksElements:[],__preloaded:!1}),H7=n("h3",null,"Align Items",-1),z7=n("p",null,"用于控制 Flex 如何沿容器的横轴定位，这个是控制子元素",-1),N7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"items-start"),n("td",null,"align-items: flex-start;")]),n("tr",null,[n("td",null,"items-end"),n("td",null,"align-items: flex-end;")]),n("tr",null,[n("td",null,"items-center"),n("td",null,"align-items: center;")]),n("tr",null,[n("td",null,"items-baseline"),n("td",null,"align-items: baseline;")]),n("tr",null,[n("td",null,"items-stretch"),n("td",null,"align-items: stretch;")])])],-1),q7={__name:"57",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ls;return A(I,ls),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ls))})(),(s,i)=>(h(),S(Y,R(L(y(ls))),{default:C(()=>[H7,z7,N7]),_:1},16))}},V7=k(q7,[["__file","/@slidev/slides/57.md"]]),os=g({title:"Align Self",level:2,layout:"slim-table",srcSequence:"./pages/002FlexAndGrid.md"}),G7=g({layout:c(()=>os.layout),transition:c(()=>os.transition),class:c(()=>os.class),clicks:c(()=>os.clicks),name:c(()=>os.name),preload:c(()=>os.preload),slide:{raw:"",title:"Align Self",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:57,start:568,end:586,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Align Self
level: 2
layout: slim-table
---

## Align Self
控制grid中具体元素

| Class         | Properties              |
| ------------- | ----------------------- |
| self-auto     | align-self: auto;       |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end;   |
| self-center   | align-self: center;     |
| self-stretch  | align-self: stretch;    |
| self-baseline | align-self: baseline;   |
`,title:"Align Self",level:2,content:`## Align Self
控制grid中具体元素

| Class         | Properties              |
| ------------- | ----------------------- |
| self-auto     | align-self: auto;       |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end;   |
| self-center   | align-self: center;     |
| self-stretch  | align-self: stretch;    |
| self-baseline | align-self: baseline;   |`,frontmatter:{title:"Align Self",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:25,start:568,end:586},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:os,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:57,no:58},__clicksElements:[],__preloaded:!1}),W7=n("h2",null,"Align Self",-1),U7=n("p",null,"控制grid中具体元素",-1),K7=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"self-auto"),n("td",null,"align-self: auto;")]),n("tr",null,[n("td",null,"self-start"),n("td",null,"align-self: flex-start;")]),n("tr",null,[n("td",null,"self-end"),n("td",null,"align-self: flex-end;")]),n("tr",null,[n("td",null,"self-center"),n("td",null,"align-self: center;")]),n("tr",null,[n("td",null,"self-stretch"),n("td",null,"align-self: stretch;")]),n("tr",null,[n("td",null,"self-baseline"),n("td",null,"align-self: baseline;")])])],-1),Y7={__name:"58",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=os;return A(I,os),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,os))})(),(s,i)=>(h(),S(Y,R(L(y(os))),{default:C(()=>[W7,U7,K7]),_:1},16))}},J7=k(Y7,[["__file","/@slidev/slides/58.md"]]),is=g({title:"Place Content",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/002FlexAndGrid.md"}),Z7=g({layout:c(()=>is.layout),transition:c(()=>is.transition),class:c(()=>is.class),clicks:c(()=>is.clicks),name:c(()=>is.name),preload:c(()=>is.preload),slide:{raw:"",title:"Place Content",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:58,start:586,end:616,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Place Content
level: 2
layout: slim-table
tableSize: small
---

### Place Content
控制整个内容

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| place-content-center   | place-content: center;        |
| place-content-start    | place-content: start;         |
| place-content-end      | place-content: end;           |
| place-content-between  | place-content: space-between; |
| place-content-around   | place-content: space-around;  |
| place-content-evenly   | place-content: space-evenly;  |
| place-content-baseline | place-content: baseline;      |
| place-content-stretch  | place-content: stretch;       |

使用 place-content-center 将项目打包到块轴的中心：  

<div class="grid grid-cols-2 gap-3 place-content-center h-48 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
`,title:"Place Content",level:2,content:`### Place Content
控制整个内容

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| place-content-center   | place-content: center;        |
| place-content-start    | place-content: start;         |
| place-content-end      | place-content: end;           |
| place-content-between  | place-content: space-between; |
| place-content-around   | place-content: space-around;  |
| place-content-evenly   | place-content: space-evenly;  |
| place-content-baseline | place-content: baseline;      |
| place-content-stretch  | place-content: stretch;       |

使用 place-content-center 将项目打包到块轴的中心：  

<div class="grid grid-cols-2 gap-3 place-content-center h-48 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`,frontmatter:{title:"Place Content",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:26,start:586,end:616},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:is,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:58,no:59},__clicksElements:[],__preloaded:!1}),X7=n("h3",null,"Place Content",-1),Q7=n("p",null,"控制整个内容",-1),eB=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"place-content-center"),n("td",null,"place-content: center;")]),n("tr",null,[n("td",null,"place-content-start"),n("td",null,"place-content: start;")]),n("tr",null,[n("td",null,"place-content-end"),n("td",null,"place-content: end;")]),n("tr",null,[n("td",null,"place-content-between"),n("td",null,"place-content: space-between;")]),n("tr",null,[n("td",null,"place-content-around"),n("td",null,"place-content: space-around;")]),n("tr",null,[n("td",null,"place-content-evenly"),n("td",null,"place-content: space-evenly;")]),n("tr",null,[n("td",null,"place-content-baseline"),n("td",null,"place-content: baseline;")]),n("tr",null,[n("td",null,"place-content-stretch"),n("td",null,"place-content: stretch;")])])],-1),tB=n("p",null,"使用 place-content-center 将项目打包到块轴的中心：",-1),nB=n("div",{class:"grid grid-cols-2 gap-3 place-content-center h-48 [&_div]:bg-blue-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04")],-1),sB={__name:"59",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=is;return A(I,is),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,is))})(),(s,i)=>(h(),S(Y,R(L(y(is))),{default:C(()=>[X7,Q7,eB,tB,nB]),_:1},16))}},lB=k(sB,[["__file","/@slidev/slides/59.md"]]),rs=g({srcSequence:"./pages/002FlexAndGrid.md"}),oB=g({layout:c(()=>rs.layout),transition:c(()=>rs.transition),class:c(()=>rs.class),clicks:c(()=>rs.clicks),name:c(()=>rs.name),preload:c(()=>rs.preload),slide:{raw:"",content:"",note:"",index:59,start:617,end:627,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
place-content-between  

<div class="grid grid-cols-2 gap-3 place-content-between h-48 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
`,content:`place-content-between  

<div class="grid grid-cols-2 gap-3 place-content-between h-48 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`,frontmatter:{},index:27,start:617,end:627},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:rs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:59,no:60},__clicksElements:[],__preloaded:!1}),iB=n("p",null,"place-content-between",-1),rB=n("div",{class:"grid grid-cols-2 gap-3 place-content-between h-48 [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04")],-1),aB={__name:"60",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=rs;return A(I,rs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,rs))})(),(s,i)=>(h(),S(he,R(L(y(rs))),{default:C(()=>[iB,rB]),_:1},16))}},cB=k(aB,[["__file","/@slidev/slides/60.md"]]),as=g({title:"Place Items",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/002FlexAndGrid.md"}),dB=g({layout:c(()=>as.layout),transition:c(()=>as.transition),class:c(()=>as.class),clicks:c(()=>as.clicks),name:c(()=>as.name),preload:c(()=>as.preload),slide:{raw:"",title:"Place Items",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:60,start:627,end:656,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Place Items
level: 2
layout: slim-table
tableSize: small
---

### Place Items
控制每个项目

| Class                | Properties             |
| -------------------- | ---------------------- |
| place-items-start    | place-items: start;    |
| place-items-end      | place-items: end;      |
| place-items-center   | place-items: center;   |
| place-items-baseline | place-items: baseline; |
| place-items-stretch  | place-items: stretch;  |

place-items-start  

<div class="grid grid-cols-3 gap-4 place-items-start  [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
`,title:"Place Items",level:2,content:`### Place Items
控制每个项目

| Class                | Properties             |
| -------------------- | ---------------------- |
| place-items-start    | place-items: start;    |
| place-items-end      | place-items: end;      |
| place-items-center   | place-items: center;   |
| place-items-baseline | place-items: baseline; |
| place-items-stretch  | place-items: stretch;  |

place-items-start  

<div class="grid grid-cols-3 gap-4 place-items-start  [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`,frontmatter:{title:"Place Items",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:28,start:627,end:656},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:as,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:60,no:61},__clicksElements:[],__preloaded:!1}),uB=n("h3",null,"Place Items",-1),fB=n("p",null,"控制每个项目",-1),pB=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"place-items-start"),n("td",null,"place-items: start;")]),n("tr",null,[n("td",null,"place-items-end"),n("td",null,"place-items: end;")]),n("tr",null,[n("td",null,"place-items-center"),n("td",null,"place-items: center;")]),n("tr",null,[n("td",null,"place-items-baseline"),n("td",null,"place-items: baseline;")]),n("tr",null,[n("td",null,"place-items-stretch"),n("td",null,"place-items: stretch;")])])],-1),mB=n("p",null,"place-items-start",-1),hB=n("div",{class:"grid grid-cols-3 gap-4 place-items-start [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),vB={__name:"61",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=as;return A(I,as),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,as))})(),(s,i)=>(h(),S(Y,R(L(y(as))),{default:C(()=>[uB,fB,pB,mB,hB]),_:1},16))}},gB=k(vB,[["__file","/@slidev/slides/61.md"]]),cs=g({srcSequence:"./pages/002FlexAndGrid.md"}),_B=g({layout:c(()=>cs.layout),transition:c(()=>cs.transition),class:c(()=>cs.class),clicks:c(()=>cs.clicks),name:c(()=>cs.name),preload:c(()=>cs.preload),slide:{raw:"",content:"",note:"",index:61,start:657,end:669,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`
place-items-end  

<div class="grid grid-cols-3 gap-4 place-items-end  [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
`,content:`place-items-end  

<div class="grid grid-cols-3 gap-4 place-items-end  [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`,frontmatter:{},index:29,start:657,end:669},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:cs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:61,no:62},__clicksElements:[],__preloaded:!1}),yB=n("p",null,"place-items-end",-1),bB=n("div",{class:"grid grid-cols-3 gap-4 place-items-end [&_div]:bg-purple-500 [&_div]:rounded [&_div]:p-3 [&_div]:text-center"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03"),n("div",null,"04"),n("div",null,"05"),n("div",null,"06")],-1),wB={__name:"62",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=cs;return A(I,cs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,cs))})(),(s,i)=>(h(),S(he,R(L(y(cs))),{default:C(()=>[yB,bB]),_:1},16))}},xB=k(wB,[["__file","/@slidev/slides/62.md"]]),ds=g({title:"Place Self",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/002FlexAndGrid.md"}),kB=g({layout:c(()=>ds.layout),transition:c(()=>ds.transition),class:c(()=>ds.class),clicks:c(()=>ds.clicks),name:c(()=>ds.name),preload:c(()=>ds.preload),slide:{raw:"",title:"Place Self",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:62,start:669,end:686,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",raw:`---
title: Place Self
level: 2
layout: slim-table
tableSize: small
---
### Place Self
grid布局中 针对特定项目

| Class              | Properties           |
| ------------------ | -------------------- |
| place-self-auto    | place-self: auto;    |
| place-self-start   | place-self: start;   |
| place-self-end     | place-self: end;     |
| place-self-center  | place-self: center;  |
| place-self-stretch | place-self: stretch; |
`,title:"Place Self",level:2,content:`### Place Self
grid布局中 针对特定项目

| Class              | Properties           |
| ------------------ | -------------------- |
| place-self-auto    | place-self: auto;    |
| place-self-start   | place-self: start;   |
| place-self-end     | place-self: end;     |
| place-self-center  | place-self: center;  |
| place-self-stretch | place-self: stretch; |`,frontmatter:{title:"Place Self",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:30,start:669,end:686},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",noteHTML:"",frontmatter:ds,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\002FlexAndGrid.md",id:62,no:63},__clicksElements:[],__preloaded:!1}),$B=n("h3",null,"Place Self",-1),SB=n("p",null,"grid布局中 针对特定项目",-1),jB=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"place-self-auto"),n("td",null,"place-self: auto;")]),n("tr",null,[n("td",null,"place-self-start"),n("td",null,"place-self: start;")]),n("tr",null,[n("td",null,"place-self-end"),n("td",null,"place-self: end;")]),n("tr",null,[n("td",null,"place-self-center"),n("td",null,"place-self: center;")]),n("tr",null,[n("td",null,"place-self-stretch"),n("td",null,"place-self: stretch;")])])],-1),PB={__name:"63",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ds;return A(I,ds),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ds))})(),(s,i)=>(h(),S(Y,R(L(y(ds))),{default:C(()=>[$B,SB,jB]),_:1},16))}},TB=k(PB,[["__file","/@slidev/slides/63.md"]]),us=g({title:"Spacing",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/003Spacing.md"}),CB=g({layout:c(()=>us.layout),transition:c(()=>us.transition),class:c(()=>us.class),clicks:c(()=>us.clicks),name:c(()=>us.name),preload:c(()=>us.preload),slide:{raw:"",title:"Spacing",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:63,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",raw:`---
title: Spacing
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Spacing
`,title:"Spacing",level:1,content:"## Spacing",frontmatter:{title:"Spacing",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/003Spacing.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:6,start:64,end:68},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",noteHTML:"",frontmatter:us,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",id:63,no:64},__clicksElements:[],__preloaded:!1}),EB=n("h2",null,"Spacing",-1),AB={__name:"64",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=us;return A(I,us),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,us))})(),(s,i)=>(h(),S(Pt,R(L(y(us))),{default:C(()=>[EB]),_:1},16))}},OB=k(AB,[["__file","/@slidev/slides/64.md"]]),fs=g({title:"Padding",level:2,srcSequence:"./pages/003Spacing.md"}),DB=g({layout:c(()=>fs.layout),transition:c(()=>fs.transition),class:c(()=>fs.class),clicks:c(()=>fs.clicks),name:c(()=>fs.name),preload:c(()=>fs.preload),slide:{raw:"",title:"Padding",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:64,start:9,end:25,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",raw:`---
title: Padding
level: 2
---
### Padding

了解一下逻辑属性，也就是\`*-inline\`或则\`*-block\`的属性，比如padding-inline-start

writing-model可以改变文字的排版方向，比如write-vertical-left,可以实现竖向排版
这个padding在writing-model变为竖向时，也能随着变成上下边距，有利于排版

这里使用\`ps-2 pe-2\`也就是 \`padding-inline-start  padding-inline-end\`
<div class="write-vertical-left h-[230px] ps-2 pe-2 bg-orange-200 ">
<p class="">你好，我是哈哈哈，很高兴认识你！</p>
</div>
`,title:"Padding",level:2,content:`### Padding

了解一下逻辑属性，也就是\`*-inline\`或则\`*-block\`的属性，比如padding-inline-start

writing-model可以改变文字的排版方向，比如write-vertical-left,可以实现竖向排版
这个padding在writing-model变为竖向时，也能随着变成上下边距，有利于排版

这里使用\`ps-2 pe-2\`也就是 \`padding-inline-start  padding-inline-end\`
<div class="write-vertical-left h-[230px] ps-2 pe-2 bg-orange-200 ">
<p class="">你好，我是哈哈哈，很高兴认识你！</p>
</div>`,frontmatter:{title:"Padding",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:25},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",noteHTML:"",frontmatter:fs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",id:64,no:65},__clicksElements:[],__preloaded:!1}),BB=n("h3",null,"Padding",-1),MB=n("p",null,[H("了解一下逻辑属性，也就是"),n("code",null,"*-inline"),H("或则"),n("code",null,"*-block"),H("的属性，比如padding-inline-start")],-1),FB=n("p",null,"writing-model可以改变文字的排版方向，比如write-vertical-left,可以实现竖向排版 这个padding在writing-model变为竖向时，也能随着变成上下边距，有利于排版",-1),IB=n("p",null,[H("这里使用"),n("code",null,"ps-2 pe-2"),H("也就是 "),n("code",null,"padding-inline-start padding-inline-end")],-1),LB=n("div",{class:"write-vertical-left h-[230px] ps-2 pe-2 bg-orange-200"},[n("p",{class:""},"你好，我是哈哈哈，很高兴认识你！")],-1),RB={__name:"65",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=fs;return A(I,fs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,fs))})(),(s,i)=>(h(),S(he,R(L(y(fs))),{default:C(()=>[BB,MB,FB,IB,LB]),_:1},16))}},HB=k(RB,[["__file","/@slidev/slides/65.md"]]),ps=g({title:"Margin",level:2,srcSequence:"./pages/003Spacing.md"}),zB=g({layout:c(()=>ps.layout),transition:c(()=>ps.transition),class:c(()=>ps.class),clicks:c(()=>ps.clicks),name:c(()=>ps.name),preload:c(()=>ps.preload),slide:{raw:"",title:"Margin",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:65,start:25,end:33,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",raw:`---
title: Margin
level: 2
---
### margin

类似padding就不多说了
`,title:"Margin",level:2,content:`### margin

类似padding就不多说了`,frontmatter:{title:"Margin",level:2},frontmatterStyle:"frontmatter",index:2,start:25,end:33},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",noteHTML:"",frontmatter:ps,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",id:65,no:66},__clicksElements:[],__preloaded:!1}),NB=n("h3",null,"margin",-1),qB=n("p",null,"类似padding就不多说了",-1),VB={__name:"66",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ps;return A(I,ps),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ps))})(),(s,i)=>(h(),S(he,R(L(y(ps))),{default:C(()=>[NB,qB]),_:1},16))}},GB=k(VB,[["__file","/@slidev/slides/66.md"]]),ms=g({title:"Space Between",level:2,srcSequence:"./pages/003Spacing.md"}),WB=g({layout:c(()=>ms.layout),transition:c(()=>ms.transition),class:c(()=>ms.class),clicks:c(()=>ms.clicks),name:c(()=>ms.name),preload:c(()=>ms.preload),slide:{raw:"",title:"Space Between",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:66,start:33,end:42,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",raw:`---
title: Space Between
level: 2
---

其实就是 设置margin-left 或者margin-top,可以达到设置元素间距的效果

space-x-reverse还能将间距添加到相反方向
`,title:"Space Between",level:2,content:`其实就是 设置margin-left 或者margin-top,可以达到设置元素间距的效果

space-x-reverse还能将间距添加到相反方向`,frontmatter:{title:"Space Between",level:2},frontmatterStyle:"frontmatter",index:3,start:33,end:42},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",noteHTML:"",frontmatter:ms,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\003Spacing.md",id:66,no:67},__clicksElements:[],__preloaded:!1}),UB=n("p",null,"其实就是 设置margin-left 或者margin-top,可以达到设置元素间距的效果",-1),KB=n("p",null,"space-x-reverse还能将间距添加到相反方向",-1),YB={__name:"67",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ms;return A(I,ms),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ms))})(),(s,i)=>(h(),S(he,R(L(y(ms))),{default:C(()=>[UB,KB]),_:1},16))}},JB=k(YB,[["__file","/@slidev/slides/67.md"]]),hs=g({title:"Sizing",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/004Sizing.md"}),ZB=g({layout:c(()=>hs.layout),transition:c(()=>hs.transition),class:c(()=>hs.class),clicks:c(()=>hs.clicks),name:c(()=>hs.name),preload:c(()=>hs.preload),slide:{raw:"",title:"Sizing",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:67,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",raw:`---
title: Sizing
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Sizing
`,title:"Sizing",level:1,content:"## Sizing",frontmatter:{title:"Sizing",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/004Sizing.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:7,start:68,end:72},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",noteHTML:"",frontmatter:hs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",id:67,no:68},__clicksElements:[],__preloaded:!1}),XB=n("h2",null,"Sizing",-1),QB={__name:"68",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=hs;return A(I,hs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,hs))})(),(s,i)=>(h(),S(Pt,R(L(y(hs))),{default:C(()=>[XB]),_:1},16))}},eM=k(QB,[["__file","/@slidev/slides/68.md"]]),vs=g({title:"Width",level:2,srcSequence:"./pages/004Sizing.md"}),tM=g({layout:c(()=>vs.layout),transition:c(()=>vs.transition),class:c(()=>vs.class),clicks:c(()=>vs.clicks),name:c(()=>vs.name),preload:c(()=>vs.preload),slide:{raw:"",title:"Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:68,start:9,end:35,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",raw:`---
title: Width
level: 2
---
### Width

有px，百分比,rem，vw，vh几种单位

还有min-content，max-content fit-content
这三个是css3随着出现的属性，目前兼容度96%  
这几个和文字换行有关，min-content,容器宽度会是内容中最短单词的宽度，  
max-content,容器宽度会是内容最长的宽度  
fit-content,容器宽度初始会是内容宽度，小于min-content时采用min-content

<CanIUseCssProperty cssProperty="width_min-content" />

svw,lvw,dvw 是2023年新出的属性，不建议使用  
动态视口单位可以解决IOS上100vh不准确的问题（会忽略UI的一些部分）

- 小视口高度和宽度（svh 和 svw），代表最小的活动视口尺寸。
- 大视口高度和宽度（lvh 和 lvw），代表最大的尺寸。
- 动态视口高度和宽度（dvh 和 dvw）。

min-width,max-width单位都是一样的，不细说了。  
高度对应的一样，略
`,title:"Width",level:2,content:`### Width

有px，百分比,rem，vw，vh几种单位

还有min-content，max-content fit-content
这三个是css3随着出现的属性，目前兼容度96%  
这几个和文字换行有关，min-content,容器宽度会是内容中最短单词的宽度，  
max-content,容器宽度会是内容最长的宽度  
fit-content,容器宽度初始会是内容宽度，小于min-content时采用min-content

<CanIUseCssProperty cssProperty="width_min-content" />

svw,lvw,dvw 是2023年新出的属性，不建议使用  
动态视口单位可以解决IOS上100vh不准确的问题（会忽略UI的一些部分）

- 小视口高度和宽度（svh 和 svw），代表最小的活动视口尺寸。
- 大视口高度和宽度（lvh 和 lvw），代表最大的尺寸。
- 动态视口高度和宽度（dvh 和 dvw）。

min-width,max-width单位都是一样的，不细说了。  
高度对应的一样，略`,frontmatter:{title:"Width",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:35},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",noteHTML:"",frontmatter:vs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",id:68,no:69},__clicksElements:[],__preloaded:!1}),nM=n("h3",null,"Width",-1),sM=n("p",null,"有px，百分比,rem，vw，vh几种单位",-1),lM=n("p",null,[H("还有min-content，max-content fit-content 这三个是css3随着出现的属性，目前兼容度96%"),n("br"),H(" 这几个和文字换行有关，min-content,容器宽度会是内容中最短单词的宽度，"),n("br"),H(" max-content,容器宽度会是内容最长的宽度"),n("br"),H(" fit-content,容器宽度初始会是内容宽度，小于min-content时采用min-content")],-1),oM=n("p",null,[H("svw,lvw,dvw 是2023年新出的属性，不建议使用"),n("br"),H(" 动态视口单位可以解决IOS上100vh不准确的问题（会忽略UI的一些部分）")],-1),iM=n("ul",null,[n("li",null,"小视口高度和宽度（svh 和 svw），代表最小的活动视口尺寸。"),n("li",null,"大视口高度和宽度（lvh 和 lvw），代表最大的尺寸。"),n("li",null,"动态视口高度和宽度（dvh 和 dvw）。")],-1),rM=n("p",null,[H("min-width,max-width单位都是一样的，不细说了。"),n("br"),H(" 高度对应的一样，略")],-1),aM={__name:"69",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=vs;return A(I,vs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,vs))})(),(s,i)=>{const a=La;return h(),S(he,R(L(y(vs))),{default:C(()=>[nM,sM,lM,Z(a,{cssProperty:"width_min-content"}),oM,iM,rM]),_:1},16)}}},cM=k(aM,[["__file","/@slidev/slides/69.md"]]),gs=g({srcSequence:"./pages/004Sizing.md"}),dM=g({layout:c(()=>gs.layout),transition:c(()=>gs.transition),class:c(()=>gs.class),clicks:c(()=>gs.clicks),name:c(()=>gs.name),preload:c(()=>gs.preload),slide:{raw:"",title:"Size",level:3,content:"",note:"",index:69,start:36,end:41,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",raw:`
### Size

这是tailwind提供的一些使用的类，可以同时设置宽高。
`,title:"Size",level:3,content:`### Size

这是tailwind提供的一些使用的类，可以同时设置宽高。`,frontmatter:{},index:2,start:36,end:41},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",noteHTML:"",frontmatter:gs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\004Sizing.md",id:69,no:70},__clicksElements:[],__preloaded:!1}),uM=n("h3",null,"Size",-1),fM=n("p",null,"这是tailwind提供的一些使用的类，可以同时设置宽高。",-1),pM={__name:"70",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=gs;return A(I,gs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,gs))})(),(s,i)=>(h(),S(he,R(L(y(gs))),{default:C(()=>[uM,fM]),_:1},16))}},mM=k(pM,[["__file","/@slidev/slides/70.md"]]),_s=g({title:"Typography",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/005Typography.md"}),hM=g({layout:c(()=>_s.layout),transition:c(()=>_s.transition),class:c(()=>_s.class),clicks:c(()=>_s.clicks),name:c(()=>_s.name),preload:c(()=>_s.preload),slide:{raw:"",title:"Typography",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:70,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Typography
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Typography
`,title:"Typography",level:1,content:"## Typography",frontmatter:{title:"Typography",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/005Typography.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:8,start:72,end:76},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:_s,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:70,no:71},__clicksElements:[],__preloaded:!1}),vM=n("h2",null,"Typography",-1),gM={__name:"71",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=_s;return A(I,_s),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,_s))})(),(s,i)=>(h(),S(Pt,R(L(y(_s))),{default:C(()=>[vM]),_:1},16))}},_M=k(gM,[["__file","/@slidev/slides/71.md"]]),ys=g({title:"Font Family",level:2,srcSequence:"./pages/005Typography.md"}),yM=g({layout:c(()=>ys.layout),transition:c(()=>ys.transition),class:c(()=>ys.class),clicks:c(()=>ys.clicks),name:c(()=>ys.name),preload:c(()=>ys.preload),slide:{raw:"",title:"Font Family",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:71,start:9,end:29,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Family
level: 2
---

### Font Family
这些是tailwind默认提供的字体

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

<div class="border-1 border-gray-100 rounded-lg p-2">
<p class="font-sans ...">The quick brown fox </p>
<p class="font-serif ...">The quick brown fox </p>
<p class="font-mono ...">The quick brown fox </p>
</div>
`,title:"Font Family",level:2,content:`### Font Family
这些是tailwind默认提供的字体

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

<div class="border-1 border-gray-100 rounded-lg p-2">
<p class="font-sans ...">The quick brown fox </p>
<p class="font-serif ...">The quick brown fox </p>
<p class="font-mono ...">The quick brown fox </p>
</div>`,frontmatter:{title:"Font Family",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:29},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:ys,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:71,no:72},__clicksElements:[],__preloaded:!1}),bM=n("h3",null,"Font Family",-1),wM=n("p",null,"这些是tailwind默认提供的字体",-1),xM=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"font-sans"),n("td",null,'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";')]),n("tr",null,[n("td",null,"font-serif"),n("td",null,'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;')]),n("tr",null,[n("td",null,"font-mono"),n("td",null,'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;')])])],-1),kM=n("div",{class:"border-1 border-gray-100 rounded-lg p-2"},[n("p",{class:"font-sans ..."},"The quick brown fox "),n("p",{class:"font-serif ..."},"The quick brown fox "),n("p",{class:"font-mono ..."},"The quick brown fox ")],-1),$M={__name:"72",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ys;return A(I,ys),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ys))})(),(s,i)=>(h(),S(he,R(L(y(ys))),{default:C(()=>[bM,wM,xM,kM]),_:1},16))}},SM=k($M,[["__file","/@slidev/slides/72.md"]]),bs=g({title:"Font Size",level:2,srcSequence:"./pages/005Typography.md"}),jM=g({layout:c(()=>bs.layout),transition:c(()=>bs.transition),class:c(()=>bs.class),clicks:c(()=>bs.clicks),name:c(()=>bs.name),preload:c(()=>bs.preload),slide:{raw:"",title:"Font Size",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:72,start:29,end:41,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Size
level: 2
---
### Font Size

这里可以设置字体，同时也设置行高

<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/loose ...">So I started to walk into the water...</p>
`,title:"Font Size",level:2,content:`### Font Size

这里可以设置字体，同时也设置行高

<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/loose ...">So I started to walk into the water...</p>`,frontmatter:{title:"Font Size",level:2},frontmatterStyle:"frontmatter",index:2,start:29,end:41},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:bs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:72,no:73},__clicksElements:[],__preloaded:!1}),PM=n("h3",null,"Font Size",-1),TM=n("p",null,"这里可以设置字体，同时也设置行高",-1),CM=n("p",{class:"text-base/6 ..."},"So I started to walk into the water...",-1),EM=n("p",{class:"text-base/7 ..."},"So I started to walk into the water...",-1),AM=n("p",{class:"text-base/loose ..."},"So I started to walk into the water...",-1),OM={__name:"73",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=bs;return A(I,bs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,bs))})(),(s,i)=>(h(),S(he,R(L(y(bs))),{default:C(()=>[PM,TM,CM,EM,AM]),_:1},16))}},DM=k(OM,[["__file","/@slidev/slides/73.md"]]),ws=g({title:"Font Smoothing",level:2,srcSequence:"./pages/005Typography.md"}),BM=g({layout:c(()=>ws.layout),transition:c(()=>ws.transition),class:c(()=>ws.class),clicks:c(()=>ws.clicks),name:c(()=>ws.name),preload:c(()=>ws.preload),slide:{raw:"",title:"Font Smoothing",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:73,start:41,end:55,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Smoothing
level: 2
---

### Font Smoothing

应用字体平滑，但是这两个兼容性都不行，不建议使用  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |
`,title:"Font Smoothing",level:2,content:`### Font Smoothing

应用字体平滑，但是这两个兼容性都不行，不建议使用  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |`,frontmatter:{title:"Font Smoothing",level:2},frontmatterStyle:"frontmatter",index:3,start:41,end:55},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:ws,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:73,no:74},__clicksElements:[],__preloaded:!1}),MM=n("h3",null,"Font Smoothing",-1),FM=n("p",null,"应用字体平滑，但是这两个兼容性都不行，不建议使用",-1),IM=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"antialiased"),n("td",null,"-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;")]),n("tr",null,[n("td",null,"subpixel-antialiased"),n("td",null,"-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;")])])],-1),LM={__name:"74",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ws;return A(I,ws),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ws))})(),(s,i)=>(h(),S(he,R(L(y(ws))),{default:C(()=>[MM,FM,IM]),_:1},16))}},RM=k(LM,[["__file","/@slidev/slides/74.md"]]),xs=g({title:"Font Style",level:2,srcSequence:"./pages/005Typography.md"}),HM=g({layout:c(()=>xs.layout),transition:c(()=>xs.transition),class:c(()=>xs.class),clicks:c(()=>xs.clicks),name:c(()=>xs.name),preload:c(()=>xs.preload),slide:{raw:"",title:"Font Style",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:74,start:55,end:69,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Style
level: 2
---

### Font Style

可以设置斜体

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |
`,title:"Font Style",level:2,content:`### Font Style

可以设置斜体

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |`,frontmatter:{title:"Font Style",level:2},frontmatterStyle:"frontmatter",index:4,start:55,end:69},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:xs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:74,no:75},__clicksElements:[],__preloaded:!1}),zM=n("h3",null,"Font Style",-1),NM=n("p",null,"可以设置斜体",-1),qM=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"italic"),n("td",null,"font-style: italic;")]),n("tr",null,[n("td",null,"not-italic"),n("td",null,"font-style: normal;")])])],-1),VM={__name:"75",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=xs;return A(I,xs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,xs))})(),(s,i)=>(h(),S(he,R(L(y(xs))),{default:C(()=>[zM,NM,qM]),_:1},16))}},GM=k(VM,[["__file","/@slidev/slides/75.md"]]),ks=g({title:"Font Weight",level:2,srcSequence:"./pages/005Typography.md"}),WM=g({layout:c(()=>ks.layout),transition:c(()=>ks.transition),class:c(()=>ks.class),clicks:c(()=>ks.clicks),name:c(()=>ks.name),preload:c(()=>ks.preload),slide:{raw:"",title:"Font Weight",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:75,start:69,end:78,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Weight
level: 2
---

### Font Weight

设置字重
`,title:"Font Weight",level:2,content:`### Font Weight

设置字重`,frontmatter:{title:"Font Weight",level:2},frontmatterStyle:"frontmatter",index:5,start:69,end:78},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:ks,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:75,no:76},__clicksElements:[],__preloaded:!1}),UM=n("h3",null,"Font Weight",-1),KM=n("p",null,"设置字重",-1),YM={__name:"76",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ks;return A(I,ks),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ks))})(),(s,i)=>(h(),S(he,R(L(y(ks))),{default:C(()=>[UM,KM]),_:1},16))}},JM=k(YM,[["__file","/@slidev/slides/76.md"]]),$s=g({title:"Font Variant Numeric",level:2,srcSequence:"./pages/005Typography.md"}),ZM=g({layout:c(()=>$s.layout),transition:c(()=>$s.transition),class:c(()=>$s.class),clicks:c(()=>$s.clicks),name:c(()=>$s.name),preload:c(()=>$s.preload),slide:{raw:"",title:"Font Variant Numeric",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:76,start:78,end:87,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Font Variant Numeric
level: 2
---

### Font Variant Numeric

控制字体数字的变体，需要看你的字体是否支持。
`,title:"Font Variant Numeric",level:2,content:`### Font Variant Numeric

控制字体数字的变体，需要看你的字体是否支持。`,frontmatter:{title:"Font Variant Numeric",level:2},frontmatterStyle:"frontmatter",index:6,start:78,end:87},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:$s,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:76,no:77},__clicksElements:[],__preloaded:!1}),XM=n("h3",null,"Font Variant Numeric",-1),QM=n("p",null,"控制字体数字的变体，需要看你的字体是否支持。",-1),eF={__name:"77",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=$s;return A(I,$s),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,$s))})(),(s,i)=>(h(),S(he,R(L(y($s))),{default:C(()=>[XM,QM]),_:1},16))}},tF=k(eF,[["__file","/@slidev/slides/77.md"]]),Ss=g({title:"Letter Spacing",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),nF=g({layout:c(()=>Ss.layout),transition:c(()=>Ss.transition),class:c(()=>Ss.class),clicks:c(()=>Ss.clicks),name:c(()=>Ss.name),preload:c(()=>Ss.preload),slide:{raw:"",title:"Letter Spacing",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:77,start:87,end:110,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Letter Spacing
level: 2
layout: slim-table
---

### Letter Spacing

设置字母间距

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>
`,title:"Letter Spacing",level:2,content:`### Letter Spacing

设置字母间距

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>`,frontmatter:{title:"Letter Spacing",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:7,start:87,end:110},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ss,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:77,no:78},__clicksElements:[],__preloaded:!1}),sF=n("h3",null,"Letter Spacing",-1),lF=n("p",null,"设置字母间距",-1),oF=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"tracking-tighter"),n("td",null,"letter-spacing: -0.05em;")]),n("tr",null,[n("td",null,"tracking-tight"),n("td",null,"letter-spacing: -0.025em;")]),n("tr",null,[n("td",null,"tracking-normal"),n("td",null,"letter-spacing: 0em;")]),n("tr",null,[n("td",null,"tracking-wide"),n("td",null,"letter-spacing: 0.025em;")]),n("tr",null,[n("td",null,"tracking-wider"),n("td",null,"letter-spacing: 0.05em;")]),n("tr",null,[n("td",null,"tracking-widest"),n("td",null,"letter-spacing: 0.1em;")])])],-1),iF=n("p",{class:"tracking-tight ..."},"The quick brown fox ...",-1),rF=n("p",{class:"tracking-normal ..."},"The quick brown fox ...",-1),aF=n("p",{class:"tracking-wide ..."},"The quick brown fox ...",-1),cF={__name:"78",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ss;return A(I,Ss),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ss))})(),(s,i)=>(h(),S(Y,R(L(y(Ss))),{default:C(()=>[sF,lF,oF,iF,rF,aF]),_:1},16))}},dF=k(cF,[["__file","/@slidev/slides/78.md"]]),js=g({title:"Line Clamp",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),uF=g({layout:c(()=>js.layout),transition:c(()=>js.transition),class:c(()=>js.class),clicks:c(()=>js.clicks),name:c(()=>js.name),preload:c(()=>js.preload),slide:{raw:"",title:"Line Clamp",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:78,start:110,end:120,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Line Clamp
level: 2
layout: slim-table
---

### Line Clamp

设置文字省略溢出的
`,title:"Line Clamp",level:2,content:`### Line Clamp

设置文字省略溢出的`,frontmatter:{title:"Line Clamp",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:110,end:120},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:js,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:78,no:79},__clicksElements:[],__preloaded:!1}),fF=n("h3",null,"Line Clamp",-1),pF=n("p",null,"设置文字省略溢出的",-1),mF={__name:"79",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=js;return A(I,js),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,js))})(),(s,i)=>(h(),S(Y,R(L(y(js))),{default:C(()=>[fF,pF]),_:1},16))}},hF=k(mF,[["__file","/@slidev/slides/79.md"]]),Ps=g({title:"Line Height",level:2,srcSequence:"./pages/005Typography.md"}),vF=g({layout:c(()=>Ps.layout),transition:c(()=>Ps.transition),class:c(()=>Ps.class),clicks:c(()=>Ps.clicks),name:c(()=>Ps.name),preload:c(()=>Ps.preload),slide:{raw:"",title:"Line Height",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:79,start:120,end:131,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Line Height
level: 2
---

### Line Height

用于控制元素的行距（行高）

相对行高，比如 \`leading-normal:line-height: 1.5;\`，行高为字体大小的倍数
`,title:"Line Height",level:2,content:`### Line Height

用于控制元素的行距（行高）

相对行高，比如 \`leading-normal:line-height: 1.5;\`，行高为字体大小的倍数`,frontmatter:{title:"Line Height",level:2},frontmatterStyle:"frontmatter",index:9,start:120,end:131},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ps,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:79,no:80},__clicksElements:[],__preloaded:!1}),gF=n("h3",null,"Line Height",-1),_F=n("p",null,"用于控制元素的行距（行高）",-1),yF=n("p",null,[H("相对行高，比如 "),n("code",null,"leading-normal:line-height: 1.5;"),H("，行高为字体大小的倍数")],-1),bF={__name:"80",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ps;return A(I,Ps),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ps))})(),(s,i)=>(h(),S(he,R(L(y(Ps))),{default:C(()=>[gF,_F,yF]),_:1},16))}},wF=k(bF,[["__file","/@slidev/slides/80.md"]]),Ts=g({title:"List Style Image",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),xF=g({layout:c(()=>Ts.layout),transition:c(()=>Ts.transition),class:c(()=>Ts.class),clicks:c(()=>Ts.clicks),name:c(()=>Ts.name),preload:c(()=>Ts.preload),slide:{raw:"",title:"List Style Image",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:80,start:131,end:149,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: List Style Image
level: 2
layout: slim-table
---

### List Style Image

| Class           | Properties              |
| --------------- | ----------------------- |
| list-image-none | list-style-image: none; |

<CanIUseCssProperty cssProperty="list-style-image" />

这个属性的兼容性还可以

这个最常用的就是设置为none，会去掉ul或者ol列表前面的标记，但是也可以设置成图片url
`,title:"List Style Image",level:2,content:`### List Style Image

| Class           | Properties              |
| --------------- | ----------------------- |
| list-image-none | list-style-image: none; |

<CanIUseCssProperty cssProperty="list-style-image" />

这个属性的兼容性还可以

这个最常用的就是设置为none，会去掉ul或者ol列表前面的标记，但是也可以设置成图片url`,frontmatter:{title:"List Style Image",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:10,start:131,end:149},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ts,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:80,no:81},__clicksElements:[],__preloaded:!1}),kF=n("h3",null,"List Style Image",-1),$F=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"list-image-none"),n("td",null,"list-style-image: none;")])])],-1),SF=n("p",null,"这个属性的兼容性还可以",-1),jF=n("p",null,"这个最常用的就是设置为none，会去掉ul或者ol列表前面的标记，但是也可以设置成图片url",-1),PF={__name:"81",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ts;return A(I,Ts),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ts))})(),(s,i)=>{const a=La;return h(),S(Y,R(L(y(Ts))),{default:C(()=>[kF,$F,Z(a,{cssProperty:"list-style-image"}),SF,jF]),_:1},16)}}},TF=k(PF,[["__file","/@slidev/slides/81.md"]]),Cs=g({title:"List Style Position",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),CF=g({layout:c(()=>Cs.layout),transition:c(()=>Cs.transition),class:c(()=>Cs.class),clicks:c(()=>Cs.clicks),name:c(()=>Cs.name),preload:c(()=>Cs.preload),slide:{raw:"",title:"List Style Position",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:81,start:149,end:180,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: List Style Position
level: 2
layout: slim-table
---

### List Style Position

是控制列表标记的位置的。

| Class        | Properties                    |
| ------------ | ----------------------------- |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

list-inside  

<ul class="!list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

list-outside 似乎是默认值

<ul class="!list-outside ">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>
`,title:"List Style Position",level:2,content:`### List Style Position

是控制列表标记的位置的。

| Class        | Properties                    |
| ------------ | ----------------------------- |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

list-inside  

<ul class="!list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

list-outside 似乎是默认值

<ul class="!list-outside ">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>`,frontmatter:{title:"List Style Position",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:11,start:149,end:180},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Cs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:81,no:82},__clicksElements:[],__preloaded:!1}),EF=n("h3",null,"List Style Position",-1),AF=n("p",null,"是控制列表标记的位置的。",-1),OF=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"list-inside"),n("td",null,"list-style-position: inside;")]),n("tr",null,[n("td",null,"list-outside"),n("td",null,"list-style-position: outside;")])])],-1),DF=n("p",null,"list-inside",-1),BF=n("ul",{class:"!list-inside"},[n("li",null,"5 cups chopped Porcini mushrooms"),n("li",null,"5 cups chopped Porcini mushrooms"),n("li",null,"5 cups chopped Porcini mushrooms")],-1),MF=n("p",null,"list-outside 似乎是默认值",-1),FF=n("ul",{class:"!list-outside"},[n("li",null,"5 cups chopped Porcini mushrooms"),n("li",null,"5 cups chopped Porcini mushrooms"),n("li",null,"5 cups chopped Porcini mushrooms")],-1),IF={__name:"82",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Cs;return A(I,Cs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Cs))})(),(s,i)=>(h(),S(Y,R(L(y(Cs))),{default:C(()=>[EF,AF,OF,DF,BF,MF,FF]),_:1},16))}},LF=k(IF,[["__file","/@slidev/slides/82.md"]]),Es=g({title:"List Style Type",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),RF=g({layout:c(()=>Es.layout),transition:c(()=>Es.transition),class:c(()=>Es.class),clicks:c(()=>Es.clicks),name:c(()=>Es.name),preload:c(()=>Es.preload),slide:{raw:"",title:"List Style Type",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:82,start:180,end:195,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: List Style Type
level: 2
layout: slim-table
---

### List Style Type
控制列表的类型，也就是markdown里面两种列表样式

| Class        | Properties                |
| ------------ | ------------------------- |
| list-none    | list-style-type: none;    |
| list-disc    | list-style-type: disc;    |
| list-decimal | list-style-type: decimal; |
`,title:"List Style Type",level:2,content:`### List Style Type
控制列表的类型，也就是markdown里面两种列表样式

| Class        | Properties                |
| ------------ | ------------------------- |
| list-none    | list-style-type: none;    |
| list-disc    | list-style-type: disc;    |
| list-decimal | list-style-type: decimal; |`,frontmatter:{title:"List Style Type",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:12,start:180,end:195},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Es,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:82,no:83},__clicksElements:[],__preloaded:!1}),HF=n("h3",null,"List Style Type",-1),zF=n("p",null,"控制列表的类型，也就是markdown里面两种列表样式",-1),NF=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"list-none"),n("td",null,"list-style-type: none;")]),n("tr",null,[n("td",null,"list-disc"),n("td",null,"list-style-type: disc;")]),n("tr",null,[n("td",null,"list-decimal"),n("td",null,"list-style-type: decimal;")])])],-1),qF={__name:"83",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Es;return A(I,Es),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Es))})(),(s,i)=>(h(),S(Y,R(L(y(Es))),{default:C(()=>[HF,zF,NF]),_:1},16))}},VF=k(qF,[["__file","/@slidev/slides/83.md"]]),As=g({title:"Text Align",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),GF=g({layout:c(()=>As.layout),transition:c(()=>As.transition),class:c(()=>As.class),clicks:c(()=>As.clicks),name:c(()=>As.name),preload:c(()=>As.preload),slide:{raw:"",title:"Text Align",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:83,start:195,end:214,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Align
level: 2
layout: slim-table
---

### Text Align

前三个常用一些，后面的等用到再说吧。

| Class        | Properties           |
| ------------ | -------------------- |
| text-left    | text-align: left;    |
| text-center  | text-align: center;  |
| text-right   | text-align: right;   |
| text-justify | text-align: justify; |
| text-start   | text-align: start;   |
| text-end     | text-align: end;     |
`,title:"Text Align",level:2,content:`### Text Align

前三个常用一些，后面的等用到再说吧。

| Class        | Properties           |
| ------------ | -------------------- |
| text-left    | text-align: left;    |
| text-center  | text-align: center;  |
| text-right   | text-align: right;   |
| text-justify | text-align: justify; |
| text-start   | text-align: start;   |
| text-end     | text-align: end;     |`,frontmatter:{title:"Text Align",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:13,start:195,end:214},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:As,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:83,no:84},__clicksElements:[],__preloaded:!1}),WF=n("h3",null,"Text Align",-1),UF=n("p",null,"前三个常用一些，后面的等用到再说吧。",-1),KF=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"text-left"),n("td",null,"text-align: left;")]),n("tr",null,[n("td",null,"text-center"),n("td",null,"text-align: center;")]),n("tr",null,[n("td",null,"text-right"),n("td",null,"text-align: right;")]),n("tr",null,[n("td",null,"text-justify"),n("td",null,"text-align: justify;")]),n("tr",null,[n("td",null,"text-start"),n("td",null,"text-align: start;")]),n("tr",null,[n("td",null,"text-end"),n("td",null,"text-align: end;")])])],-1),YF={__name:"84",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=As;return A(I,As),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,As))})(),(s,i)=>(h(),S(Y,R(L(y(As))),{default:C(()=>[WF,UF,KF]),_:1},16))}},JF=k(YF,[["__file","/@slidev/slides/84.md"]]),Os=g({title:"Text Color",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),ZF=g({layout:c(()=>Os.layout),transition:c(()=>Os.transition),class:c(()=>Os.class),clicks:c(()=>Os.clicks),name:c(()=>Os.name),preload:c(()=>Os.preload),slide:{raw:"",title:"Text Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:84,start:214,end:251,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Color
level: 2
layout: slim-table
---

有几个颜色比较特殊
currentColor属性比较实用，可以使用当前的color值来设置颜色
<CanIUse src="https://caniuse.com/currentcolor" buttonText="can I use currentColor"/>

| Class            | Properties           |
| ---------------- | -------------------- |
| text-inherit     | color: inherit;      |
| text-current     | color: currentColor; |
| text-transparent | color: transparent;  |

currentColor 的例子,可以减少颜色的重复写
比较实用的例子，比如svg图标颜色随着color改变

\`\`\`css
div { 
  color: red; 
  border: 5px solid red;
  box-shadow: 0 0 5px solid red;
}

\`\`\`

\`\`\`css
div { 
  color: red; 
  border: 5px solid currentcolor;
  box-shadow: 0 0 5px solid currentcolor;
}

\`\`\`
`,title:"Text Color",level:2,content:`有几个颜色比较特殊
currentColor属性比较实用，可以使用当前的color值来设置颜色
<CanIUse src="https://caniuse.com/currentcolor" buttonText="can I use currentColor"/>

| Class            | Properties           |
| ---------------- | -------------------- |
| text-inherit     | color: inherit;      |
| text-current     | color: currentColor; |
| text-transparent | color: transparent;  |

currentColor 的例子,可以减少颜色的重复写
比较实用的例子，比如svg图标颜色随着color改变

\`\`\`css
div { 
  color: red; 
  border: 5px solid red;
  box-shadow: 0 0 5px solid red;
}

\`\`\`

\`\`\`css
div { 
  color: red; 
  border: 5px solid currentcolor;
  box-shadow: 0 0 5px solid currentcolor;
}

\`\`\``,frontmatter:{title:"Text Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:14,start:214,end:251},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Os,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:84,no:85},__clicksElements:[],__preloaded:!1}),XF=n("p",null,"有几个颜色比较特殊 currentColor属性比较实用，可以使用当前的color值来设置颜色",-1),QF=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"text-inherit"),n("td",null,"color: inherit;")]),n("tr",null,[n("td",null,"text-current"),n("td",null,"color: currentColor;")]),n("tr",null,[n("td",null,"text-transparent"),n("td",null,"color: transparent;")])])],-1),eI=n("p",null,"currentColor 的例子,可以减少颜色的重复写 比较实用的例子，比如svg图标颜色随着color改变",-1),tI=n("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code shikiji",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[n("code",{class:"language-css"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"div"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  color"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," red"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  border"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 5"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," solid"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," red"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  box-shadow"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 0"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 0"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 5"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," solid"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," red"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"})])],-1),nI=n("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code shikiji",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[n("code",{class:"language-css"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"div"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}}," {"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  color"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," red"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";"),n("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  border"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 5"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," solid"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," currentcolor"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#E0A569","--shiki-light":"#B58451"}},"  box-shadow"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 0"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 0"),n("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 5"),n("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"px"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," solid"),n("span",{style:{"--shiki-dark":"#D4976C","--shiki-light":"#A65E2B"}}," currentcolor"),n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},";")]),H(`
`),n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"}")]),H(`
`),n("span",{class:"line"})])],-1),sI={__name:"85",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Os;return A(I,Os),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Os))})(),(s,i)=>{const a=gr,r=cd;return h(),S(Y,R(L(y(Os))),{default:C(()=>[XF,Z(a,{src:"https://caniuse.com/currentcolor",buttonText:"can I use currentColor"}),QF,eI,Z(r,Vo({},{ranges:[""]}),{default:C(()=>[tI]),_:1},16),Z(r,Vo({},{ranges:[""]}),{default:C(()=>[nI]),_:1},16)]),_:1},16)}}},lI=k(sI,[["__file","/@slidev/slides/85.md"]]),Ds=g({title:"Text Decoration",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),oI=g({layout:c(()=>Ds.layout),transition:c(()=>Ds.transition),class:c(()=>Ds.class),clicks:c(()=>Ds.clicks),name:c(()=>Ds.name),preload:c(()=>Ds.preload),slide:{raw:"",title:"Text Decoration",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:85,start:251,end:272,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Decoration
level: 2
layout: slim-table
---
### Text Decoration

| Class        | Properties                          |
| ------------ | ----------------------------------- |
| underline    | text-decoration-line: underline;    |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |

下面是例子：

<p class="underline ...">The quick brown fox ...</p>
<p class="overline ...">The quick brown fox ...</p>
<p class="line-through ...">The quick brown fox ...</p>
<p class="no-underline ...">The quick brown fox ...</p>
`,title:"Text Decoration",level:2,content:`### Text Decoration

| Class        | Properties                          |
| ------------ | ----------------------------------- |
| underline    | text-decoration-line: underline;    |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |

下面是例子：

<p class="underline ...">The quick brown fox ...</p>
<p class="overline ...">The quick brown fox ...</p>
<p class="line-through ...">The quick brown fox ...</p>
<p class="no-underline ...">The quick brown fox ...</p>`,frontmatter:{title:"Text Decoration",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:15,start:251,end:272},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ds,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:85,no:86},__clicksElements:[],__preloaded:!1}),iI=n("h3",null,"Text Decoration",-1),rI=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"underline"),n("td",null,"text-decoration-line: underline;")]),n("tr",null,[n("td",null,"overline"),n("td",null,"text-decoration-line: overline;")]),n("tr",null,[n("td",null,"line-through"),n("td",null,"text-decoration-line: line-through;")]),n("tr",null,[n("td",null,"no-underline"),n("td",null,"text-decoration-line: none;")])])],-1),aI=n("p",null,"下面是例子：",-1),cI=n("p",{class:"underline ..."},"The quick brown fox ...",-1),dI=n("p",{class:"overline ..."},"The quick brown fox ...",-1),uI=n("p",{class:"line-through ..."},"The quick brown fox ...",-1),fI=n("p",{class:"no-underline ..."},"The quick brown fox ...",-1),pI={__name:"86",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ds;return A(I,Ds),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ds))})(),(s,i)=>(h(),S(Y,R(L(y(Ds))),{default:C(()=>[iI,rI,aI,cI,dI,uI,fI]),_:1},16))}},mI=k(pI,[["__file","/@slidev/slides/86.md"]]),Bs=g({title:"Text Decoration Color",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),hI=g({layout:c(()=>Bs.layout),transition:c(()=>Bs.transition),class:c(()=>Bs.class),clicks:c(()=>Bs.clicks),name:c(()=>Bs.name),preload:c(()=>Bs.preload),slide:{raw:"",title:"Text Decoration Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:86,start:272,end:300,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Decoration Color
level: 2
layout: slim-table
---

### Text Decoration Color

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>
</div>

还能调整透明度

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500/30">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500/30">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.
  </p>
</div>
`,title:"Text Decoration Color",level:2,content:`### Text Decoration Color

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>
</div>

还能调整透明度

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500/30">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500/30">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.
  </p>
</div>`,frontmatter:{title:"Text Decoration Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:16,start:272,end:300},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Bs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:86,no:87},__clicksElements:[],__preloaded:!1}),vI=n("h3",null,"Text Decoration Color",-1),gI=n("div",null,[n("p",null,[H(" I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at "),n("a",{class:"underline decoration-sky-500"},"My Company, Inc"),H(". Outside of work, I like to "),n("a",{class:"underline decoration-pink-500"},"watch pod-racing"),H(" and have "),n("a",{class:"underline decoration-indigo-500"},"light-saber"),H(" fights. ")])],-1),_I=n("p",null,"还能调整透明度",-1),yI=n("div",null,[n("p",null,[H(" I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at "),n("a",{class:"underline decoration-sky-500/30"},"My Company, Inc"),H(". Outside of work, I like to "),n("a",{class:"underline decoration-pink-500/30"},"watch pod-racing"),H(" and have "),n("a",{class:"underline decoration-indigo-500/30"},"light-saber"),H(" fights. ")])],-1),bI={__name:"87",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Bs;return A(I,Bs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Bs))})(),(s,i)=>(h(),S(Y,R(L(y(Bs))),{default:C(()=>[vI,gI,_I,yI]),_:1},16))}},wI=k(bI,[["__file","/@slidev/slides/87.md"]]),Ms=g({title:"Text Decoration Style",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),xI=g({layout:c(()=>Ms.layout),transition:c(()=>Ms.transition),class:c(()=>Ms.class),clicks:c(()=>Ms.clicks),name:c(()=>Ms.name),preload:c(()=>Ms.preload),slide:{raw:"",title:"Text Decoration Style",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:87,start:300,end:324,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Decoration Style
level: 2
layout: slim-table
---

### Text Decoration Style

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| decoration-solid  | text-decoration-style: solid;  |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |

下面是例子：

<p class="underline decoration-solid ...">The quick brown fox...</p>
<p class="underline decoration-double ...">The quick brown fox...</p>
<p class="underline decoration-dotted ...">The quick brown fox...</p>
<p class="underline decoration-dashed ...">The quick brown fox...</p>
<p class="underline decoration-wavy ...">The quick brown fox...</p>
`,title:"Text Decoration Style",level:2,content:`### Text Decoration Style

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| decoration-solid  | text-decoration-style: solid;  |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |

下面是例子：

<p class="underline decoration-solid ...">The quick brown fox...</p>
<p class="underline decoration-double ...">The quick brown fox...</p>
<p class="underline decoration-dotted ...">The quick brown fox...</p>
<p class="underline decoration-dashed ...">The quick brown fox...</p>
<p class="underline decoration-wavy ...">The quick brown fox...</p>`,frontmatter:{title:"Text Decoration Style",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:17,start:300,end:324},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ms,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:87,no:88},__clicksElements:[],__preloaded:!1}),kI=n("h3",null,"Text Decoration Style",-1),$I=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"decoration-solid"),n("td",null,"text-decoration-style: solid;")]),n("tr",null,[n("td",null,"decoration-double"),n("td",null,"text-decoration-style: double;")]),n("tr",null,[n("td",null,"decoration-dotted"),n("td",null,"text-decoration-style: dotted;")]),n("tr",null,[n("td",null,"decoration-dashed"),n("td",null,"text-decoration-style: dashed;")]),n("tr",null,[n("td",null,"decoration-wavy"),n("td",null,"text-decoration-style: wavy;")])])],-1),SI=n("p",null,"下面是例子：",-1),jI=n("p",{class:"underline decoration-solid ..."},"The quick brown fox...",-1),PI=n("p",{class:"underline decoration-double ..."},"The quick brown fox...",-1),TI=n("p",{class:"underline decoration-dotted ..."},"The quick brown fox...",-1),CI=n("p",{class:"underline decoration-dashed ..."},"The quick brown fox...",-1),EI=n("p",{class:"underline decoration-wavy ..."},"The quick brown fox...",-1),AI={__name:"88",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ms;return A(I,Ms),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ms))})(),(s,i)=>(h(),S(Y,R(L(y(Ms))),{default:C(()=>[kI,$I,SI,jI,PI,TI,CI,EI]),_:1},16))}},OI=k(AI,[["__file","/@slidev/slides/88.md"]]),Fs=g({title:"Text Decoration Thickness",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),DI=g({layout:c(()=>Fs.layout),transition:c(()=>Fs.transition),class:c(()=>Fs.class),clicks:c(()=>Fs.clicks),name:c(()=>Fs.name),preload:c(()=>Fs.preload),slide:{raw:"",title:"Text Decoration Thickness",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:88,start:324,end:338,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Decoration Thickness
level: 2
layout: slim-table
---

### Text Decoration Thickness

调整文本装饰线的粗细

<p class="underline decoration-1 ...">The quick brown fox...</p>
<p class="underline decoration-2 ...">The quick brown fox...</p>
<p class="underline decoration-4 ...">The quick brown fox...</p>
`,title:"Text Decoration Thickness",level:2,content:`### Text Decoration Thickness

调整文本装饰线的粗细

<p class="underline decoration-1 ...">The quick brown fox...</p>
<p class="underline decoration-2 ...">The quick brown fox...</p>
<p class="underline decoration-4 ...">The quick brown fox...</p>`,frontmatter:{title:"Text Decoration Thickness",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:18,start:324,end:338},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Fs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:88,no:89},__clicksElements:[],__preloaded:!1}),BI=n("h3",null,"Text Decoration Thickness",-1),MI=n("p",null,"调整文本装饰线的粗细",-1),FI=n("p",{class:"underline decoration-1 ..."},"The quick brown fox...",-1),II=n("p",{class:"underline decoration-2 ..."},"The quick brown fox...",-1),LI=n("p",{class:"underline decoration-4 ..."},"The quick brown fox...",-1),RI={__name:"89",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Fs;return A(I,Fs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Fs))})(),(s,i)=>(h(),S(Y,R(L(y(Fs))),{default:C(()=>[BI,MI,FI,II,LI]),_:1},16))}},HI=k(RI,[["__file","/@slidev/slides/89.md"]]),Is=g({title:"Text Underline Offset",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),zI=g({layout:c(()=>Is.layout),transition:c(()=>Is.transition),class:c(()=>Is.class),clicks:c(()=>Is.clicks),name:c(()=>Is.name),preload:c(()=>Is.preload),slide:{raw:"",title:"Text Underline Offset",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:89,start:338,end:353,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Underline Offset
level: 2
layout: slim-table
---

### Text Underline Offset

调整文本下划线的偏移量

<p class="underline underline-offset-1 ...">The quick brown fox...</p>
<p class="underline underline-offset-2 ...">The quick brown fox...</p>
<p class="underline underline-offset-4 ...">The quick brown fox...</p>
<p class="underline underline-offset-8 ...">The quick brown fox...</p>
`,title:"Text Underline Offset",level:2,content:`### Text Underline Offset

调整文本下划线的偏移量

<p class="underline underline-offset-1 ...">The quick brown fox...</p>
<p class="underline underline-offset-2 ...">The quick brown fox...</p>
<p class="underline underline-offset-4 ...">The quick brown fox...</p>
<p class="underline underline-offset-8 ...">The quick brown fox...</p>`,frontmatter:{title:"Text Underline Offset",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:19,start:338,end:353},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Is,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:89,no:90},__clicksElements:[],__preloaded:!1}),NI=n("h3",null,"Text Underline Offset",-1),qI=n("p",null,"调整文本下划线的偏移量",-1),VI=n("p",{class:"underline underline-offset-1 ..."},"The quick brown fox...",-1),GI=n("p",{class:"underline underline-offset-2 ..."},"The quick brown fox...",-1),WI=n("p",{class:"underline underline-offset-4 ..."},"The quick brown fox...",-1),UI=n("p",{class:"underline underline-offset-8 ..."},"The quick brown fox...",-1),KI={__name:"90",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Is;return A(I,Is),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Is))})(),(s,i)=>(h(),S(Y,R(L(y(Is))),{default:C(()=>[NI,qI,VI,GI,WI,UI]),_:1},16))}},YI=k(KI,[["__file","/@slidev/slides/90.md"]]),Ls=g({title:"Text Transform",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),JI=g({layout:c(()=>Ls.layout),transition:c(()=>Ls.transition),class:c(()=>Ls.class),clicks:c(()=>Ls.clicks),name:c(()=>Ls.name),preload:c(()=>Ls.preload),slide:{raw:"",title:"Text Transform",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:90,start:353,end:374,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Transform
level: 2
layout: slim-table
---

### Text Transform
对于英文比较实用，直接帮你调整大小写

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |

<p class="normal-case ...">The quick brown fox ...</p>
<p class="uppercase ...">The quick brown fox ...</p>
<p class="lowercase ...">The quick brown fox ...</p>
<p class="capitalize ...">The quick brown fox ...</p>
`,title:"Text Transform",level:2,content:`### Text Transform
对于英文比较实用，直接帮你调整大小写

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |

<p class="normal-case ...">The quick brown fox ...</p>
<p class="uppercase ...">The quick brown fox ...</p>
<p class="lowercase ...">The quick brown fox ...</p>
<p class="capitalize ...">The quick brown fox ...</p>`,frontmatter:{title:"Text Transform",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:20,start:353,end:374},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ls,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:90,no:91},__clicksElements:[],__preloaded:!1}),ZI=n("h3",null,"Text Transform",-1),XI=n("p",null,"对于英文比较实用，直接帮你调整大小写",-1),QI=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"uppercase"),n("td",null,"text-transform: uppercase;")]),n("tr",null,[n("td",null,"lowercase"),n("td",null,"text-transform: lowercase;")]),n("tr",null,[n("td",null,"capitalize"),n("td",null,"text-transform: capitalize;")]),n("tr",null,[n("td",null,"normal-case"),n("td",null,"text-transform: none;")])])],-1),eL=n("p",{class:"normal-case ..."},"The quick brown fox ...",-1),tL=n("p",{class:"uppercase ..."},"The quick brown fox ...",-1),nL=n("p",{class:"lowercase ..."},"The quick brown fox ...",-1),sL=n("p",{class:"capitalize ..."},"The quick brown fox ...",-1),lL={__name:"91",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ls;return A(I,Ls),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ls))})(),(s,i)=>(h(),S(Y,R(L(y(Ls))),{default:C(()=>[ZI,XI,QI,eL,tL,nL,sL]),_:1},16))}},oL=k(lL,[["__file","/@slidev/slides/91.md"]]),Rs=g({title:"Text Overflow",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),iL=g({layout:c(()=>Rs.layout),transition:c(()=>Rs.transition),class:c(()=>Rs.class),clicks:c(()=>Rs.clicks),name:c(()=>Rs.name),preload:c(()=>Rs.preload),slide:{raw:"",title:"Text Overflow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:91,start:374,end:395,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Overflow
level: 2
layout: slim-table
---

### Text Overflow

很实用了，两种文本溢出的处理方式，一个是clip也就是截断，另一个是省略号
truncate 是方便的一行文本溢出省略的总结

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| truncate      | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; |
| text-ellipsis | text-overflow: ellipsis;                                     |
| text-clip     | text-overflow: clip;                                         |

<p class="truncate ..."><p class="truncate">
      The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p></p>
`,title:"Text Overflow",level:2,content:`### Text Overflow

很实用了，两种文本溢出的处理方式，一个是clip也就是截断，另一个是省略号
truncate 是方便的一行文本溢出省略的总结

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| truncate      | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; |
| text-ellipsis | text-overflow: ellipsis;                                     |
| text-clip     | text-overflow: clip;                                         |

<p class="truncate ..."><p class="truncate">
      The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p></p>`,frontmatter:{title:"Text Overflow",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:21,start:374,end:395},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Rs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:91,no:92},__clicksElements:[],__preloaded:!1}),rL=n("h3",null,"Text Overflow",-1),aL=n("p",null,"很实用了，两种文本溢出的处理方式，一个是clip也就是截断，另一个是省略号 truncate 是方便的一行文本溢出省略的总结",-1),cL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"truncate"),n("td",null,"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;")]),n("tr",null,[n("td",null,"text-ellipsis"),n("td",null,"text-overflow: ellipsis;")]),n("tr",null,[n("td",null,"text-clip"),n("td",null,"text-overflow: clip;")])])],-1),dL=n("p",{class:"truncate ..."},[n("p",{class:"truncate"},[H(" The longest word in any of the major English language dictionaries is "),n("span",{class:"text-slate-900 font-medium"},"pneumonoultramicroscopicsilicovolcanoconiosis,"),H(" a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. ")])],-1),uL={__name:"92",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Rs;return A(I,Rs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Rs))})(),(s,i)=>(h(),S(Y,R(L(y(Rs))),{default:C(()=>[rL,aL,cL,dL]),_:1},16))}},fL=k(uL,[["__file","/@slidev/slides/92.md"]]),Hs=g({title:"Text Wrap",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),pL=g({layout:c(()=>Hs.layout),transition:c(()=>Hs.transition),class:c(()=>Hs.class),clicks:c(()=>Hs.clicks),name:c(()=>Hs.name),preload:c(()=>Hs.preload),slide:{raw:"",title:"Text Wrap",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:92,start:395,end:413,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Wrap
level: 2
layout: slim-table
---

### Text Wrap

前两个就不说了，balance是让文本均匀分布在每一行  
pretty防止末尾出现孤立词，应该是针对英文的  

| Class        | Properties          |
| ------------ | ------------------- |
| text-wrap    | text-wrap: wrap;    |
| text-nowrap  | text-wrap: nowrap;  |
| text-balance | text-wrap: balance; |
| text-pretty  | text-wrap: pretty;  |
`,title:"Text Wrap",level:2,content:`### Text Wrap

前两个就不说了，balance是让文本均匀分布在每一行  
pretty防止末尾出现孤立词，应该是针对英文的  

| Class        | Properties          |
| ------------ | ------------------- |
| text-wrap    | text-wrap: wrap;    |
| text-nowrap  | text-wrap: nowrap;  |
| text-balance | text-wrap: balance; |
| text-pretty  | text-wrap: pretty;  |`,frontmatter:{title:"Text Wrap",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:22,start:395,end:413},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Hs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:92,no:93},__clicksElements:[],__preloaded:!1}),mL=n("h3",null,"Text Wrap",-1),hL=n("p",null,[H("前两个就不说了，balance是让文本均匀分布在每一行"),n("br"),H(" pretty防止末尾出现孤立词，应该是针对英文的")],-1),vL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"text-wrap"),n("td",null,"text-wrap: wrap;")]),n("tr",null,[n("td",null,"text-nowrap"),n("td",null,"text-wrap: nowrap;")]),n("tr",null,[n("td",null,"text-balance"),n("td",null,"text-wrap: balance;")]),n("tr",null,[n("td",null,"text-pretty"),n("td",null,"text-wrap: pretty;")])])],-1),gL={__name:"93",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Hs;return A(I,Hs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Hs))})(),(s,i)=>(h(),S(Y,R(L(y(Hs))),{default:C(()=>[mL,hL,vL]),_:1},16))}},_L=k(gL,[["__file","/@slidev/slides/93.md"]]),zs=g({title:"Text Indent",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),yL=g({layout:c(()=>zs.layout),transition:c(()=>zs.transition),class:c(()=>zs.class),clicks:c(()=>zs.clicks),name:c(()=>zs.name),preload:c(()=>zs.preload),slide:{raw:"",title:"Text Indent",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:93,start:413,end:423,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Text Indent
level: 2
layout: slim-table
---

### Text Indent

文本缩进，不多说
`,title:"Text Indent",level:2,content:`### Text Indent

文本缩进，不多说`,frontmatter:{title:"Text Indent",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:23,start:413,end:423},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:zs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:93,no:94},__clicksElements:[],__preloaded:!1}),bL=n("h3",null,"Text Indent",-1),wL=n("p",null,"文本缩进，不多说",-1),xL={__name:"94",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=zs;return A(I,zs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,zs))})(),(s,i)=>(h(),S(Y,R(L(y(zs))),{default:C(()=>[bL,wL]),_:1},16))}},kL=k(xL,[["__file","/@slidev/slides/94.md"]]),Ns=g({title:"Vertical Align",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),$L=g({layout:c(()=>Ns.layout),transition:c(()=>Ns.transition),class:c(()=>Ns.class),clicks:c(()=>Ns.clicks),name:c(()=>Ns.name),preload:c(()=>Ns.preload),slide:{raw:"",title:"Vertical Align",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:94,start:423,end:445,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Vertical Align
level: 2
layout: slim-table
---

### Vertical Align

用于控制内联或表格单元格框的垂直对齐
总之文本垂直对齐的时候考虑使用

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |
`,title:"Vertical Align",level:2,content:`### Vertical Align

用于控制内联或表格单元格框的垂直对齐
总之文本垂直对齐的时候考虑使用

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |`,frontmatter:{title:"Vertical Align",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:24,start:423,end:445},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ns,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:94,no:95},__clicksElements:[],__preloaded:!1}),SL=n("h3",null,"Vertical Align",-1),jL=n("p",null,"用于控制内联或表格单元格框的垂直对齐 总之文本垂直对齐的时候考虑使用",-1),PL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"align-baseline"),n("td",null,"vertical-align: baseline;")]),n("tr",null,[n("td",null,"align-top"),n("td",null,"vertical-align: top;")]),n("tr",null,[n("td",null,"align-middle"),n("td",null,"vertical-align: middle;")]),n("tr",null,[n("td",null,"align-bottom"),n("td",null,"vertical-align: bottom;")]),n("tr",null,[n("td",null,"align-text-top"),n("td",null,"vertical-align: text-top;")]),n("tr",null,[n("td",null,"align-text-bottom"),n("td",null,"vertical-align: text-bottom;")]),n("tr",null,[n("td",null,"align-sub"),n("td",null,"vertical-align: sub;")]),n("tr",null,[n("td",null,"align-super"),n("td",null,"vertical-align: super;")])])],-1),TL={__name:"95",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ns;return A(I,Ns),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ns))})(),(s,i)=>(h(),S(Y,R(L(y(Ns))),{default:C(()=>[SL,jL,PL]),_:1},16))}},CL=k(TL,[["__file","/@slidev/slides/95.md"]]),qs=g({title:"Whitespace",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),EL=g({layout:c(()=>qs.layout),transition:c(()=>qs.transition),class:c(()=>qs.class),clicks:c(()=>qs.clicks),name:c(()=>qs.name),preload:c(()=>qs.preload),slide:{raw:"",title:"Whitespace",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:95,start:445,end:465,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Whitespace
level: 2
layout: slim-table
---

### Whitespace

normal是最常用的，默认值，文本会正常换行，换行符和空格将被折叠
nowrap不换行
后面的没碰到应用场景就先略过。
| Class                   | Properties                 |
| ----------------------- | -------------------------- |
| whitespace-normal       | white-space: normal;       |
| whitespace-nowrap       | white-space: nowrap;       |
| whitespace-pre          | white-space: pre;          |
| whitespace-pre-line     | white-space: pre-line;     |
| whitespace-pre-wrap     | white-space: pre-wrap;     |
| whitespace-break-spaces | white-space: break-spaces; |
`,title:"Whitespace",level:2,content:`### Whitespace

normal是最常用的，默认值，文本会正常换行，换行符和空格将被折叠
nowrap不换行
后面的没碰到应用场景就先略过。
| Class                   | Properties                 |
| ----------------------- | -------------------------- |
| whitespace-normal       | white-space: normal;       |
| whitespace-nowrap       | white-space: nowrap;       |
| whitespace-pre          | white-space: pre;          |
| whitespace-pre-line     | white-space: pre-line;     |
| whitespace-pre-wrap     | white-space: pre-wrap;     |
| whitespace-break-spaces | white-space: break-spaces; |`,frontmatter:{title:"Whitespace",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:25,start:445,end:465},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:qs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:95,no:96},__clicksElements:[],__preloaded:!1}),AL=n("h3",null,"Whitespace",-1),OL=n("p",null,"normal是最常用的，默认值，文本会正常换行，换行符和空格将被折叠 nowrap不换行 后面的没碰到应用场景就先略过。",-1),DL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"whitespace-normal"),n("td",null,"white-space: normal;")]),n("tr",null,[n("td",null,"whitespace-nowrap"),n("td",null,"white-space: nowrap;")]),n("tr",null,[n("td",null,"whitespace-pre"),n("td",null,"white-space: pre;")]),n("tr",null,[n("td",null,"whitespace-pre-line"),n("td",null,"white-space: pre-line;")]),n("tr",null,[n("td",null,"whitespace-pre-wrap"),n("td",null,"white-space: pre-wrap;")]),n("tr",null,[n("td",null,"whitespace-break-spaces"),n("td",null,"white-space: break-spaces;")])])],-1),BL={__name:"96",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=qs;return A(I,qs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,qs))})(),(s,i)=>(h(),S(Y,R(L(y(qs))),{default:C(()=>[AL,OL,DL]),_:1},16))}},ML=k(BL,[["__file","/@slidev/slides/96.md"]]),Vs=g({title:"Word Break",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),FL=g({layout:c(()=>Vs.layout),transition:c(()=>Vs.transition),class:c(()=>Vs.class),clicks:c(()=>Vs.clicks),name:c(()=>Vs.name),preload:c(()=>Vs.preload),slide:{raw:"",title:"Word Break",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:96,start:465,end:488,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Word Break
level: 2
layout: slim-table
---

### Word Break

控制在换行的地方断词的
break-normal 仅在正常单词断点处添加换行符。(也就是有一个特别长的单词不会换行) \`overflow-wrap: normal; word-break: normal;\`
break-words \`overflow-wrap: break-word;\` 就是会换行
break-all 全部换行
break-keep 针对CJK，防止文本中间换行，对于非CJK文本和break-normal一样

一般我们固定宽度的情况是希望break-all的

| Class        | Properties                                 |
| ------------ | ------------------------------------------ |
| break-normal | overflow-wrap: normal; word-break: normal; |
| break-words  | overflow-wrap: break-word;                 |
| break-all    | word-break: break-all;                     |
| break-keep   | word-break: keep-all;                      |
`,title:"Word Break",level:2,content:`### Word Break

控制在换行的地方断词的
break-normal 仅在正常单词断点处添加换行符。(也就是有一个特别长的单词不会换行) \`overflow-wrap: normal; word-break: normal;\`
break-words \`overflow-wrap: break-word;\` 就是会换行
break-all 全部换行
break-keep 针对CJK，防止文本中间换行，对于非CJK文本和break-normal一样

一般我们固定宽度的情况是希望break-all的

| Class        | Properties                                 |
| ------------ | ------------------------------------------ |
| break-normal | overflow-wrap: normal; word-break: normal; |
| break-words  | overflow-wrap: break-word;                 |
| break-all    | word-break: break-all;                     |
| break-keep   | word-break: keep-all;                      |`,frontmatter:{title:"Word Break",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:26,start:465,end:488},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Vs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:96,no:97},__clicksElements:[],__preloaded:!1}),IL=n("h3",null,"Word Break",-1),LL=n("p",null,[H("控制在换行的地方断词的 break-normal 仅在正常单词断点处添加换行符。(也就是有一个特别长的单词不会换行) "),n("code",null,"overflow-wrap: normal; word-break: normal;"),H(" break-words "),n("code",null,"overflow-wrap: break-word;"),H(" 就是会换行 break-all 全部换行 break-keep 针对CJK，防止文本中间换行，对于非CJK文本和break-normal一样")],-1),RL=n("p",null,"一般我们固定宽度的情况是希望break-all的",-1),HL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"break-normal"),n("td",null,"overflow-wrap: normal; word-break: normal;")]),n("tr",null,[n("td",null,"break-words"),n("td",null,"overflow-wrap: break-word;")]),n("tr",null,[n("td",null,"break-all"),n("td",null,"word-break: break-all;")]),n("tr",null,[n("td",null,"break-keep"),n("td",null,"word-break: keep-all;")])])],-1),zL={__name:"97",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Vs;return A(I,Vs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Vs))})(),(s,i)=>(h(),S(Y,R(L(y(Vs))),{default:C(()=>[IL,LL,RL,HL]),_:1},16))}},NL=k(zL,[["__file","/@slidev/slides/97.md"]]),Gs=g({title:"Hyphens",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),qL=g({layout:c(()=>Gs.layout),transition:c(()=>Gs.transition),class:c(()=>Gs.class),clicks:c(()=>Gs.clicks),name:c(()=>Gs.name),preload:c(()=>Gs.preload),slide:{raw:"",title:"Hyphens",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:97,start:488,end:504,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Hyphens
level: 2
layout: slim-table
---

### Hyphens 连字符

这个似乎也是英语专用的，可以用\`-\`连接换行处的单词  

| Class          | Properties       |
| -------------- | ---------------- |
| hyphens-none   | hyphens: none;   |
| hyphens-manual | hyphens: manual; |
| hyphens-auto   | hyphens: auto;   |
`,title:"Hyphens",level:2,content:`### Hyphens 连字符

这个似乎也是英语专用的，可以用\`-\`连接换行处的单词  

| Class          | Properties       |
| -------------- | ---------------- |
| hyphens-none   | hyphens: none;   |
| hyphens-manual | hyphens: manual; |
| hyphens-auto   | hyphens: auto;   |`,frontmatter:{title:"Hyphens",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:27,start:488,end:504},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Gs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:97,no:98},__clicksElements:[],__preloaded:!1}),VL=n("h3",null,"Hyphens 连字符",-1),GL=n("p",null,[H("这个似乎也是英语专用的，可以用"),n("code",null,"-"),H("连接换行处的单词")],-1),WL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"hyphens-none"),n("td",null,"hyphens: none;")]),n("tr",null,[n("td",null,"hyphens-manual"),n("td",null,"hyphens: manual;")]),n("tr",null,[n("td",null,"hyphens-auto"),n("td",null,"hyphens: auto;")])])],-1),UL={__name:"98",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Gs;return A(I,Gs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Gs))})(),(s,i)=>(h(),S(Y,R(L(y(Gs))),{default:C(()=>[VL,GL,WL]),_:1},16))}},KL=k(UL,[["__file","/@slidev/slides/98.md"]]),Ws=g({title:"Content",level:2,layout:"slim-table",srcSequence:"./pages/005Typography.md"}),YL=g({layout:c(()=>Ws.layout),transition:c(()=>Ws.transition),class:c(()=>Ws.class),clicks:c(()=>Ws.clicks),name:c(()=>Ws.name),preload:c(()=>Ws.preload),slide:{raw:"",title:"Content",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:98,start:504,end:513,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",raw:`---
title: Content
level: 2
layout: slim-table
---
### Content

用于控制前后伪元素
`,title:"Content",level:2,content:`### Content

用于控制前后伪元素`,frontmatter:{title:"Content",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:28,start:504,end:513},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",noteHTML:"",frontmatter:Ws,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\005Typography.md",id:98,no:99},__clicksElements:[],__preloaded:!1}),JL=n("h3",null,"Content",-1),ZL=n("p",null,"用于控制前后伪元素",-1),XL={__name:"99",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ws;return A(I,Ws),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ws))})(),(s,i)=>(h(),S(Y,R(L(y(Ws))),{default:C(()=>[JL,ZL]),_:1},16))}},QL=k(XL,[["__file","/@slidev/slides/99.md"]]),Us=g({title:"Backgrounds",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/006Backgrounds.md"}),eR=g({layout:c(()=>Us.layout),transition:c(()=>Us.transition),class:c(()=>Us.class),clicks:c(()=>Us.clicks),name:c(()=>Us.name),preload:c(()=>Us.preload),slide:{raw:"",title:"Backgrounds",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:99,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Backgrounds
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Backgrounds
`,title:"Backgrounds",level:1,content:"## Backgrounds",frontmatter:{title:"Backgrounds",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/006Backgrounds.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:9,start:76,end:80},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Us,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:99,no:100},__clicksElements:[],__preloaded:!1}),tR=n("h2",null,"Backgrounds",-1),nR={__name:"100",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Us;return A(I,Us),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Us))})(),(s,i)=>(h(),S(Pt,R(L(y(Us))),{default:C(()=>[tR]),_:1},16))}},sR=k(nR,[["__file","/@slidev/slides/100.md"]]),Ks=g({title:"Background Attachment",level:2,srcSequence:"./pages/006Backgrounds.md"}),lR=g({layout:c(()=>Ks.layout),transition:c(()=>Ks.transition),class:c(()=>Ks.class),clicks:c(()=>Ks.clicks),name:c(()=>Ks.name),preload:c(()=>Ks.preload),slide:{raw:"",title:"Background Attachment",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:100,start:9,end:39,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Attachment
level: 2
---

### Background Attachment

| Class     | Properties                     |
| --------- | ------------------------------ |
| bg-fixed  | background-attachment: fixed;  |
| bg-local  | background-attachment: local;  |
| bg-scroll | background-attachment: scroll; |

bg-fixed 背景图片相对于视口固定，不会随滚动条滚动而滚动。可以做一些视差效果

<div class="max-w-lg mx-auto h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg" style="background-image:url('/assets/dust-mountain.webp'); background-position: center -80px;" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
    <div class="mt-40" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
      <div class="bg-white p-4 sm:p-8" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
        <div class="font-inter font-extrabold text-2xl text-black tracking-tight" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">My trip to the summit</div>
        <div class="mt-1 font-medium text-sm text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">November 16, 2021 · 4 min read</div>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
      </div>
    </div>
  </div>

使用 \`bg-local\` 使背景图像与容器和视口一起滚动。  

使用 \`bg-scroll\` 随视口滚动背景图像，但不随容器滚动。
`,title:"Background Attachment",level:2,content:`### Background Attachment

| Class     | Properties                     |
| --------- | ------------------------------ |
| bg-fixed  | background-attachment: fixed;  |
| bg-local  | background-attachment: local;  |
| bg-scroll | background-attachment: scroll; |

bg-fixed 背景图片相对于视口固定，不会随滚动条滚动而滚动。可以做一些视差效果

<div class="max-w-lg mx-auto h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg" style="background-image:url('/assets/dust-mountain.webp'); background-position: center -80px;" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
    <div class="mt-40" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
      <div class="bg-white p-4 sm:p-8" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
        <div class="font-inter font-extrabold text-2xl text-black tracking-tight" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">My trip to the summit</div>
        <div class="mt-1 font-medium text-sm text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">November 16, 2021 · 4 min read</div>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
      </div>
    </div>
  </div>

使用 \`bg-local\` 使背景图像与容器和视口一起滚动。  

使用 \`bg-scroll\` 随视口滚动背景图像，但不随容器滚动。`,frontmatter:{title:"Background Attachment",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:39},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Ks,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:100,no:101},__clicksElements:[],__preloaded:!1}),oR=n("h3",null,"Background Attachment",-1),iR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-fixed"),n("td",null,"background-attachment: fixed;")]),n("tr",null,[n("td",null,"bg-local"),n("td",null,"background-attachment: local;")]),n("tr",null,[n("td",null,"bg-scroll"),n("td",null,"background-attachment: scroll;")])])],-1),rR=n("p",null,"bg-fixed 背景图片相对于视口固定，不会随滚动条滚动而滚动。可以做一些视差效果",-1),aR=n("div",{class:"max-w-lg mx-auto h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg",style:{"background-image":"url('/assets/dust-mountain.webp')","background-position":"center -80px"},"data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2"},[n("div",{class:"mt-40","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2"},[n("div",{class:"bg-white p-4 sm:p-8","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2"},[n("div",{class:"font-inter font-extrabold text-2xl text-black tracking-tight","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2","data-immersive-translate-paragraph":"1"},"My trip to the summit"),n("div",{class:"mt-1 font-medium text-sm text-slate-500","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2","data-immersive-translate-paragraph":"1"},"November 16, 2021 · 4 min read"),n("p",{class:"mt-4 leading-7 text-slate-500","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2","data-immersive-translate-paragraph":"1"},"Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?"),n("p",{class:"mt-4 leading-7 text-slate-500","data-immersive-translate-walked":"fa59d778-8f3f-44a4-af7c-5473f68357f2","data-immersive-translate-paragraph":"1"},"Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.")])])],-1),cR=n("p",null,[H("使用 "),n("code",null,"bg-local"),H(" 使背景图像与容器和视口一起滚动。")],-1),dR=n("p",null,[H("使用 "),n("code",null,"bg-scroll"),H(" 随视口滚动背景图像，但不随容器滚动。")],-1),uR={__name:"101",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ks;return A(I,Ks),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ks))})(),(s,i)=>(h(),S(he,R(L(y(Ks))),{default:C(()=>[oR,iR,rR,aR,cR,dR]),_:1},16))}},fR=k(uR,[["__file","/@slidev/slides/101.md"]]),Ys=g({title:"Background Clip",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),pR=g({layout:c(()=>Ys.layout),transition:c(()=>Ys.transition),class:c(()=>Ys.class),clicks:c(()=>Ys.clicks),name:c(()=>Ys.name),preload:c(()=>Ys.preload),slide:{raw:"",title:"Background Clip",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:101,start:39,end:72,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Clip
level: 2

layout: slim-table
---

### Background Clip 背景裁剪

用于控制元素背景边界框

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-clip-border  | background-clip: border-box;  |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text    | background-clip: text;        |

可以裁剪边框，内容，或者padding
<div class="flex space-x-5 [&_div]:w-[100px]">
<div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-padding p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
</div>

可以使用 bg-clip-text 裁剪背景匹配文本的形状

<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div>
`,title:"Background Clip",level:2,content:`### Background Clip 背景裁剪

用于控制元素背景边界框

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-clip-border  | background-clip: border-box;  |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text    | background-clip: text;        |

可以裁剪边框，内容，或者padding
<div class="flex space-x-5 [&_div]:w-[100px]">
<div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-padding p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
</div>

可以使用 bg-clip-text 裁剪背景匹配文本的形状

<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div>`,frontmatter:{title:"Background Clip",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:39,end:72},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Ys,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:101,no:102},__clicksElements:[],__preloaded:!1}),mR=n("h3",null,"Background Clip 背景裁剪",-1),hR=n("p",null,"用于控制元素背景边界框",-1),vR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-clip-border"),n("td",null,"background-clip: border-box;")]),n("tr",null,[n("td",null,"bg-clip-padding"),n("td",null,"background-clip: padding-box;")]),n("tr",null,[n("td",null,"bg-clip-content"),n("td",null,"background-clip: content-box;")]),n("tr",null,[n("td",null,"bg-clip-text"),n("td",null,"background-clip: text;")])])],-1),gR=n("p",null,"可以裁剪边框，内容，或者padding",-1),_R=n("div",{class:"flex space-x-5 [&_div]:w-[100px]"},[n("div",{class:"bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"}),n("div",{class:"bg-clip-padding p-6 bg-violet-600 border-4 border-violet-300 border-dashed"}),n("div",{class:"bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"})],-1),yR=n("p",null,"可以使用 bg-clip-text 裁剪背景匹配文本的形状",-1),bR=n("div",{class:"text-5xl font-extrabold ..."},[n("span",{class:"bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"}," Hello world ")],-1),wR={__name:"102",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ys;return A(I,Ys),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ys))})(),(s,i)=>(h(),S(Y,R(L(y(Ys))),{default:C(()=>[mR,hR,vR,gR,_R,yR,bR]),_:1},16))}},xR=k(wR,[["__file","/@slidev/slides/102.md"]]),Js=g({title:"Background Color",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),kR=g({layout:c(()=>Js.layout),transition:c(()=>Js.transition),class:c(()=>Js.class),clicks:c(()=>Js.clicks),name:c(()=>Js.name),preload:c(()=>Js.preload),slide:{raw:"",title:"Background Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:102,start:72,end:82,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Color
level: 2
layout: slim-table
---

### Background Color

背景颜色就不用多说了
`,title:"Background Color",level:2,content:`### Background Color

背景颜色就不用多说了`,frontmatter:{title:"Background Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:72,end:82},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Js,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:102,no:103},__clicksElements:[],__preloaded:!1}),$R=n("h3",null,"Background Color",-1),SR=n("p",null,"背景颜色就不用多说了",-1),jR={__name:"103",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Js;return A(I,Js),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Js))})(),(s,i)=>(h(),S(Y,R(L(y(Js))),{default:C(()=>[$R,SR]),_:1},16))}},PR=k(jR,[["__file","/@slidev/slides/103.md"]]),Zs=g({title:"Background Origin",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),TR=g({layout:c(()=>Zs.layout),transition:c(()=>Zs.transition),class:c(()=>Zs.class),clicks:c(()=>Zs.clicks),name:c(()=>Zs.name),preload:c(()=>Zs.preload),slide:{raw:"",title:"Background Origin",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:103,start:82,end:98,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Origin
level: 2
layout: slim-table
---

### Background Origin

用于控制元素背景相对于边框、填充和内容的定位方式

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| bg-origin-border  | background-origin: border-box;  |
| bg-origin-padding | background-origin: padding-box; |
| bg-origin-content | background-origin: content-box; |
`,title:"Background Origin",level:2,content:`### Background Origin

用于控制元素背景相对于边框、填充和内容的定位方式

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| bg-origin-border  | background-origin: border-box;  |
| bg-origin-padding | background-origin: padding-box; |
| bg-origin-content | background-origin: content-box; |`,frontmatter:{title:"Background Origin",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:4,start:82,end:98},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Zs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:103,no:104},__clicksElements:[],__preloaded:!1}),CR=n("h3",null,"Background Origin",-1),ER=n("p",null,"用于控制元素背景相对于边框、填充和内容的定位方式",-1),AR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-origin-border"),n("td",null,"background-origin: border-box;")]),n("tr",null,[n("td",null,"bg-origin-padding"),n("td",null,"background-origin: padding-box;")]),n("tr",null,[n("td",null,"bg-origin-content"),n("td",null,"background-origin: content-box;")])])],-1),OR={__name:"104",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Zs;return A(I,Zs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Zs))})(),(s,i)=>(h(),S(Y,R(L(y(Zs))),{default:C(()=>[CR,ER,AR]),_:1},16))}},DR=k(OR,[["__file","/@slidev/slides/104.md"]]),Xs=g({title:"Background Position",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),BR=g({layout:c(()=>Xs.layout),transition:c(()=>Xs.transition),class:c(()=>Xs.class),clicks:c(()=>Xs.clicks),name:c(()=>Xs.name),preload:c(()=>Xs.preload),slide:{raw:"",title:"Background Position",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:104,start:98,end:120,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Position
level: 2
layout: slim-table
---

### Background Position

用于控制元素背景图像位置  

| Class           | Properties                         |
| --------------- | ---------------------------------- |
| bg-bottom       | background-position: bottom;       |
| bg-center       | background-position: center;       |
| bg-left         | background-position: left;         |
| bg-left-bottom  | background-position: left bottom;  |
| bg-left-top     | background-position: left top;     |
| bg-right        | background-position: right;        |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top    | background-position: right top;    |
| bg-top          | background-position: top;          |
`,title:"Background Position",level:2,content:`### Background Position

用于控制元素背景图像位置  

| Class           | Properties                         |
| --------------- | ---------------------------------- |
| bg-bottom       | background-position: bottom;       |
| bg-center       | background-position: center;       |
| bg-left         | background-position: left;         |
| bg-left-bottom  | background-position: left bottom;  |
| bg-left-top     | background-position: left top;     |
| bg-right        | background-position: right;        |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top    | background-position: right top;    |
| bg-top          | background-position: top;          |`,frontmatter:{title:"Background Position",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:5,start:98,end:120},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Xs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:104,no:105},__clicksElements:[],__preloaded:!1}),MR=n("h3",null,"Background Position",-1),FR=n("p",null,"用于控制元素背景图像位置",-1),IR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-bottom"),n("td",null,"background-position: bottom;")]),n("tr",null,[n("td",null,"bg-center"),n("td",null,"background-position: center;")]),n("tr",null,[n("td",null,"bg-left"),n("td",null,"background-position: left;")]),n("tr",null,[n("td",null,"bg-left-bottom"),n("td",null,"background-position: left bottom;")]),n("tr",null,[n("td",null,"bg-left-top"),n("td",null,"background-position: left top;")]),n("tr",null,[n("td",null,"bg-right"),n("td",null,"background-position: right;")]),n("tr",null,[n("td",null,"bg-right-bottom"),n("td",null,"background-position: right bottom;")]),n("tr",null,[n("td",null,"bg-right-top"),n("td",null,"background-position: right top;")]),n("tr",null,[n("td",null,"bg-top"),n("td",null,"background-position: top;")])])],-1),LR={__name:"105",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Xs;return A(I,Xs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Xs))})(),(s,i)=>(h(),S(Y,R(L(y(Xs))),{default:C(()=>[MR,FR,IR]),_:1},16))}},RR=k(LR,[["__file","/@slidev/slides/105.md"]]),Qs=g({title:"Background Repeat",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),HR=g({layout:c(()=>Qs.layout),transition:c(()=>Qs.transition),class:c(()=>Qs.class),clicks:c(()=>Qs.clicks),name:c(()=>Qs.name),preload:c(()=>Qs.preload),slide:{raw:"",title:"Background Repeat",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:105,start:120,end:137,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Repeat
level: 2
layout: slim-table
---

### Background Repeat

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-repeat       | background-repeat: repeat;    |
| bg-no-repeat    | background-repeat: no-repeat; |
| bg-repeat-x     | background-repeat: repeat-x;  |
| bg-repeat-y     | background-repeat: repeat-y;  |
| bg-repeat-round | background-repeat: round;     |
| bg-repeat-space | background-repeat: space;     |
`,title:"Background Repeat",level:2,content:`### Background Repeat

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-repeat       | background-repeat: repeat;    |
| bg-no-repeat    | background-repeat: no-repeat; |
| bg-repeat-x     | background-repeat: repeat-x;  |
| bg-repeat-y     | background-repeat: repeat-y;  |
| bg-repeat-round | background-repeat: round;     |
| bg-repeat-space | background-repeat: space;     |`,frontmatter:{title:"Background Repeat",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:6,start:120,end:137},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:Qs,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:105,no:106},__clicksElements:[],__preloaded:!1}),zR=n("h3",null,"Background Repeat",-1),NR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-repeat"),n("td",null,"background-repeat: repeat;")]),n("tr",null,[n("td",null,"bg-no-repeat"),n("td",null,"background-repeat: no-repeat;")]),n("tr",null,[n("td",null,"bg-repeat-x"),n("td",null,"background-repeat: repeat-x;")]),n("tr",null,[n("td",null,"bg-repeat-y"),n("td",null,"background-repeat: repeat-y;")]),n("tr",null,[n("td",null,"bg-repeat-round"),n("td",null,"background-repeat: round;")]),n("tr",null,[n("td",null,"bg-repeat-space"),n("td",null,"background-repeat: space;")])])],-1),qR={__name:"106",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Qs;return A(I,Qs),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Qs))})(),(s,i)=>(h(),S(Y,R(L(y(Qs))),{default:C(()=>[zR,NR]),_:1},16))}},VR=k(qR,[["__file","/@slidev/slides/106.md"]]),el=g({title:"Background Size",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),GR=g({layout:c(()=>el.layout),transition:c(()=>el.transition),class:c(()=>el.class),clicks:c(()=>el.clicks),name:c(()=>el.name),preload:c(()=>el.preload),slide:{raw:"",title:"Background Size",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:106,start:137,end:153,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Size
level: 2
layout: slim-table
---

### Background Size

用于控制元素背景图像的背景大小

| Class      | Properties                |
| ---------- | ------------------------- |
| bg-auto    | background-size: auto;    |
| bg-cover   | background-size: cover;   |
| bg-contain | background-size: contain; |
`,title:"Background Size",level:2,content:`### Background Size

用于控制元素背景图像的背景大小

| Class      | Properties                |
| ---------- | ------------------------- |
| bg-auto    | background-size: auto;    |
| bg-cover   | background-size: cover;   |
| bg-contain | background-size: contain; |`,frontmatter:{title:"Background Size",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:7,start:137,end:153},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:el,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:106,no:107},__clicksElements:[],__preloaded:!1}),WR=n("h3",null,"Background Size",-1),UR=n("p",null,"用于控制元素背景图像的背景大小",-1),KR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-auto"),n("td",null,"background-size: auto;")]),n("tr",null,[n("td",null,"bg-cover"),n("td",null,"background-size: cover;")]),n("tr",null,[n("td",null,"bg-contain"),n("td",null,"background-size: contain;")])])],-1),YR={__name:"107",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=el;return A(I,el),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,el))})(),(s,i)=>(h(),S(Y,R(L(y(el))),{default:C(()=>[WR,UR,KR]),_:1},16))}},JR=k(YR,[["__file","/@slidev/slides/107.md"]]),tl=g({title:"Background Image",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),ZR=g({layout:c(()=>tl.layout),transition:c(()=>tl.transition),class:c(()=>tl.class),clicks:c(()=>tl.clicks),name:c(()=>tl.name),preload:c(()=>tl.preload),slide:{raw:"",title:"Background Image",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:107,start:153,end:174,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Background Image
level: 2
layout: slim-table
---

这个是设置背景图片，可以设置url
预设了一些渐变效果

| Class             | Properties                                                   |
| ----------------- | ------------------------------------------------------------ |
| bg-none           | background-image: none;                                      |
| bg-gradient-to-t  | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r  | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b  | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l  | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |
`,title:"Background Image",level:2,content:`这个是设置背景图片，可以设置url
预设了一些渐变效果

| Class             | Properties                                                   |
| ----------------- | ------------------------------------------------------------ |
| bg-none           | background-image: none;                                      |
| bg-gradient-to-t  | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r  | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b  | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l  | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |`,frontmatter:{title:"Background Image",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:153,end:174},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:tl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:107,no:108},__clicksElements:[],__preloaded:!1}),XR=n("p",null,"这个是设置背景图片，可以设置url 预设了一些渐变效果",-1),QR=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-none"),n("td",null,"background-image: none;")]),n("tr",null,[n("td",null,"bg-gradient-to-t"),n("td",null,"background-image: linear-gradient(to top, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-tr"),n("td",null,"background-image: linear-gradient(to top right, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-r"),n("td",null,"background-image: linear-gradient(to right, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-br"),n("td",null,"background-image: linear-gradient(to bottom right, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-b"),n("td",null,"background-image: linear-gradient(to bottom, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-bl"),n("td",null,"background-image: linear-gradient(to bottom left, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-l"),n("td",null,"background-image: linear-gradient(to left, var(–tw-gradient-stops));")]),n("tr",null,[n("td",null,"bg-gradient-to-tl"),n("td",null,"background-image: linear-gradient(to top left, var(–tw-gradient-stops));")])])],-1),eH={__name:"108",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=tl;return A(I,tl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,tl))})(),(s,i)=>(h(),S(Y,R(L(y(tl))),{default:C(()=>[XR,QR]),_:1},16))}},tH=k(eH,[["__file","/@slidev/slides/108.md"]]),nl=g({srcSequence:"./pages/006Backgrounds.md"}),nH=g({layout:c(()=>nl.layout),transition:c(()=>nl.transition),class:c(()=>nl.class),clicks:c(()=>nl.clicks),name:c(()=>nl.name),preload:c(()=>nl.preload),slide:{raw:"",content:"",note:"",index:108,start:175,end:181,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`
<div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
<div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
<div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
`,content:`<div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
<div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
<div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>`,frontmatter:{},index:9,start:175,end:181},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:nl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:108,no:109},__clicksElements:[],__preloaded:!1}),sH=n("div",{class:"h-14 bg-gradient-to-r from-cyan-500 to-blue-500"},null,-1),lH=n("div",{class:"h-14 bg-gradient-to-r from-sky-500 to-indigo-500"},null,-1),oH=n("div",{class:"h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"},null,-1),iH=n("div",{class:"h-14 bg-gradient-to-r from-purple-500 to-pink-500"},null,-1),rH={__name:"109",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=nl;return A(I,nl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,nl))})(),(s,i)=>(h(),S(he,R(L(y(nl))),{default:C(()=>[sH,lH,oH,iH]),_:1},16))}},aH=k(rH,[["__file","/@slidev/slides/109.md"]]),sl=g({title:"Gradient Color Stops",level:2,layout:"slim-table",srcSequence:"./pages/006Backgrounds.md"}),cH=g({layout:c(()=>sl.layout),transition:c(()=>sl.transition),class:c(()=>sl.class),clicks:c(()=>sl.clicks),name:c(()=>sl.name),preload:c(()=>sl.preload),slide:{raw:"",title:"Gradient Color Stops",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:109,start:181,end:195,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",raw:`---
title: Gradient Color Stops
level: 2
layout: slim-table
---

### Gradient Color Stops

配置渐变的颜色节点。

可以配置多个颜色节点

<div class="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
`,title:"Gradient Color Stops",level:2,content:`### Gradient Color Stops

配置渐变的颜色节点。

可以配置多个颜色节点

<div class="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>`,frontmatter:{title:"Gradient Color Stops",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:10,start:181,end:195},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",noteHTML:"",frontmatter:sl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\006Backgrounds.md",id:109,no:110},__clicksElements:[],__preloaded:!1}),dH=n("h3",null,"Gradient Color Stops",-1),uH=n("p",null,"配置渐变的颜色节点。",-1),fH=n("p",null,"可以配置多个颜色节点",-1),pH=n("div",{class:"h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."},null,-1),mH={__name:"110",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=sl;return A(I,sl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,sl))})(),(s,i)=>(h(),S(Y,R(L(y(sl))),{default:C(()=>[dH,uH,fH,pH]),_:1},16))}},hH=k(mH,[["__file","/@slidev/slides/110.md"]]),ll=g({title:"Borders",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/007Borders.md"}),vH=g({layout:c(()=>ll.layout),transition:c(()=>ll.transition),class:c(()=>ll.class),clicks:c(()=>ll.clicks),name:c(()=>ll.name),preload:c(()=>ll.preload),slide:{raw:"",title:"Borders",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:110,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Borders
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Borders
`,title:"Borders",level:1,content:"## Borders",frontmatter:{title:"Borders",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/007Borders.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:10,start:80,end:84},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:ll,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:110,no:111},__clicksElements:[],__preloaded:!1}),gH=n("h2",null,"Borders",-1),_H={__name:"111",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ll;return A(I,ll),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ll))})(),(s,i)=>(h(),S(Pt,R(L(y(ll))),{default:C(()=>[gH]),_:1},16))}},yH=k(_H,[["__file","/@slidev/slides/111.md"]]),ol=g({title:"Border Radius",level:2,srcSequence:"./pages/007Borders.md"}),bH=g({layout:c(()=>ol.layout),transition:c(()=>ol.transition),class:c(()=>ol.class),clicks:c(()=>ol.clicks),name:c(()=>ol.name),preload:c(()=>ol.preload),slide:{raw:"",title:"Border Radius",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:111,start:9,end:22,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Border Radius
level: 2
---

### Border Radius

rounded-full 可以作为药丸按钮的样式

<button class="rounded-full bg-cyan p-2 text-white">Save Changes</button>

也可以分别设置每个圆角，或者对角线圆角，同时也有逻辑属性。
`,title:"Border Radius",level:2,content:`### Border Radius

rounded-full 可以作为药丸按钮的样式

<button class="rounded-full bg-cyan p-2 text-white">Save Changes</button>

也可以分别设置每个圆角，或者对角线圆角，同时也有逻辑属性。`,frontmatter:{title:"Border Radius",level:2},frontmatterStyle:"frontmatter",index:1,start:9,end:22},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:ol,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:111,no:112},__clicksElements:[],__preloaded:!1}),wH=n("h3",null,"Border Radius",-1),xH=n("p",null,"rounded-full 可以作为药丸按钮的样式",-1),kH=n("p",null,[n("button",{class:"rounded-full bg-cyan p-2 text-white"},"Save Changes")],-1),$H=n("p",null,"也可以分别设置每个圆角，或者对角线圆角，同时也有逻辑属性。",-1),SH={__name:"112",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ol;return A(I,ol),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ol))})(),(s,i)=>(h(),S(he,R(L(y(ol))),{default:C(()=>[wH,xH,kH,$H]),_:1},16))}},jH=k(SH,[["__file","/@slidev/slides/112.md"]]),il=g({title:"Border Width",level:2,srcSequence:"./pages/007Borders.md"}),PH=g({layout:c(()=>il.layout),transition:c(()=>il.transition),class:c(()=>il.class),clicks:c(()=>il.clicks),name:c(()=>il.name),preload:c(()=>il.preload),slide:{raw:"",title:"Border Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:112,start:22,end:31,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Border Width
level: 2
---

### Border Width

不用多说
`,title:"Border Width",level:2,content:`### Border Width

不用多说`,frontmatter:{title:"Border Width",level:2},frontmatterStyle:"frontmatter",index:2,start:22,end:31},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:il,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:112,no:113},__clicksElements:[],__preloaded:!1}),TH=n("h3",null,"Border Width",-1),CH=n("p",null,"不用多说",-1),EH={__name:"113",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=il;return A(I,il),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,il))})(),(s,i)=>(h(),S(he,R(L(y(il))),{default:C(()=>[TH,CH]),_:1},16))}},AH=k(EH,[["__file","/@slidev/slides/113.md"]]),rl=g({title:"Border Color",level:2,srcSequence:"./pages/007Borders.md"}),OH=g({layout:c(()=>rl.layout),transition:c(()=>rl.transition),class:c(()=>rl.class),clicks:c(()=>rl.clicks),name:c(()=>rl.name),preload:c(()=>rl.preload),slide:{raw:"",title:"Border Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:113,start:31,end:40,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Border Color
level: 2
---

### Border Color

不用多说
`,title:"Border Color",level:2,content:`### Border Color

不用多说`,frontmatter:{title:"Border Color",level:2},frontmatterStyle:"frontmatter",index:3,start:31,end:40},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:rl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:113,no:114},__clicksElements:[],__preloaded:!1}),DH=n("h3",null,"Border Color",-1),BH=n("p",null,"不用多说",-1),MH={__name:"114",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=rl;return A(I,rl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,rl))})(),(s,i)=>(h(),S(he,R(L(y(rl))),{default:C(()=>[DH,BH]),_:1},16))}},FH=k(MH,[["__file","/@slidev/slides/114.md"]]),al=g({title:"Border Style",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),IH=g({layout:c(()=>al.layout),transition:c(()=>al.transition),class:c(()=>al.class),clicks:c(()=>al.clicks),name:c(()=>al.name),preload:c(()=>al.preload),slide:{raw:"",title:"Border Style",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:114,start:40,end:66,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Border Style
level: 2
layout: slim-table
---

### Border Style

| Class         | Properties            |
| ------------- | --------------------- |
| border-solid  | border-style: solid;  |
| border-dashed | border-style: dashed; |
| border-dotted | border-style: dotted; |
| border-double | border-style: double; |
| border-hidden | border-style: hidden; |
| border-none   | border-style: none;   |

下面是几种边框

<div class="flex space-x-5 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center mt-10 ">
<div class="border-solid border-2 border-indigo-600 ...">solid</div>
<div class="border-dashed border-2 border-indigo-600 ...">dash</div>
<div class="border-dotted border-2 border-indigo-600 ...">dotted</div>
<div class="border-double border-4 border-indigo-600 ...">double</div>
</div>
`,title:"Border Style",level:2,content:`### Border Style

| Class         | Properties            |
| ------------- | --------------------- |
| border-solid  | border-style: solid;  |
| border-dashed | border-style: dashed; |
| border-dotted | border-style: dotted; |
| border-double | border-style: double; |
| border-hidden | border-style: hidden; |
| border-none   | border-style: none;   |

下面是几种边框

<div class="flex space-x-5 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center mt-10 ">
<div class="border-solid border-2 border-indigo-600 ...">solid</div>
<div class="border-dashed border-2 border-indigo-600 ...">dash</div>
<div class="border-dotted border-2 border-indigo-600 ...">dotted</div>
<div class="border-double border-4 border-indigo-600 ...">double</div>
</div>`,frontmatter:{title:"Border Style",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:4,start:40,end:66},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:al,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:114,no:115},__clicksElements:[],__preloaded:!1}),LH=n("h3",null,"Border Style",-1),RH=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"border-solid"),n("td",null,"border-style: solid;")]),n("tr",null,[n("td",null,"border-dashed"),n("td",null,"border-style: dashed;")]),n("tr",null,[n("td",null,"border-dotted"),n("td",null,"border-style: dotted;")]),n("tr",null,[n("td",null,"border-double"),n("td",null,"border-style: double;")]),n("tr",null,[n("td",null,"border-hidden"),n("td",null,"border-style: hidden;")]),n("tr",null,[n("td",null,"border-none"),n("td",null,"border-style: none;")])])],-1),HH=n("p",null,"下面是几种边框",-1),zH=n("div",{class:"flex space-x-5 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center mt-10"},[n("div",{class:"border-solid border-2 border-indigo-600 ..."},"solid"),n("div",{class:"border-dashed border-2 border-indigo-600 ..."},"dash"),n("div",{class:"border-dotted border-2 border-indigo-600 ..."},"dotted"),n("div",{class:"border-double border-4 border-indigo-600 ..."},"double")],-1),NH={__name:"115",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=al;return A(I,al),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,al))})(),(s,i)=>(h(),S(Y,R(L(y(al))),{default:C(()=>[LH,RH,HH,zH]),_:1},16))}},qH=k(NH,[["__file","/@slidev/slides/115.md"]]),cl=g({title:"Divide Width",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),VH=g({layout:c(()=>cl.layout),transition:c(()=>cl.transition),class:c(()=>cl.class),clicks:c(()=>cl.clicks),name:c(()=>cl.name),preload:c(()=>cl.preload),slide:{raw:"",title:"Divide Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:115,start:66,end:81,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Divide Width
level: 2
layout: slim-table
---
### Divide Width

可以用border实现分割线

<div class="grid grid-cols-3 divide-x [&_div]:w-[50px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center shadow">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
`,title:"Divide Width",level:2,content:`### Divide Width

可以用border实现分割线

<div class="grid grid-cols-3 divide-x [&_div]:w-[50px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center shadow">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`,frontmatter:{title:"Divide Width",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:5,start:66,end:81},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:cl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:115,no:116},__clicksElements:[],__preloaded:!1}),GH=n("h3",null,"Divide Width",-1),WH=n("p",null,"可以用border实现分割线",-1),UH=n("div",{class:"grid grid-cols-3 divide-x [&_div]:w-[50px] [&_div]:aspect-square [&_div]:flex [&_div]:justify-center [&_div]:items-center shadow"},[n("div",null,"01"),n("div",null,"02"),n("div",null,"03")],-1),KH={__name:"116",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=cl;return A(I,cl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,cl))})(),(s,i)=>(h(),S(Y,R(L(y(cl))),{default:C(()=>[GH,WH,UH]),_:1},16))}},YH=k(KH,[["__file","/@slidev/slides/116.md"]]),dl=g({title:"Divide Color",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),JH=g({layout:c(()=>dl.layout),transition:c(()=>dl.transition),class:c(()=>dl.class),clicks:c(()=>dl.clicks),name:c(()=>dl.name),preload:c(()=>dl.preload),slide:{raw:"",title:"Divide Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:116,start:81,end:91,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Divide Color
level: 2
layout: slim-table
---

### Divide Color

实际上就是边框颜色
`,title:"Divide Color",level:2,content:`### Divide Color

实际上就是边框颜色`,frontmatter:{title:"Divide Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:6,start:81,end:91},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:dl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:116,no:117},__clicksElements:[],__preloaded:!1}),ZH=n("h3",null,"Divide Color",-1),XH=n("p",null,"实际上就是边框颜色",-1),QH={__name:"117",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=dl;return A(I,dl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,dl))})(),(s,i)=>(h(),S(Y,R(L(y(dl))),{default:C(()=>[ZH,XH]),_:1},16))}},ez=k(QH,[["__file","/@slidev/slides/117.md"]]),ul=g({title:"Divide Style",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),tz=g({layout:c(()=>ul.layout),transition:c(()=>ul.transition),class:c(()=>ul.class),clicks:c(()=>ul.clicks),name:c(()=>ul.name),preload:c(()=>ul.preload),slide:{raw:"",title:"Divide Style",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:117,start:91,end:101,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Divide Style
level: 2
layout: slim-table
---

### Divide Style

实际上就是边框样式
`,title:"Divide Style",level:2,content:`### Divide Style

实际上就是边框样式`,frontmatter:{title:"Divide Style",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:7,start:91,end:101},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:ul,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:117,no:118},__clicksElements:[],__preloaded:!1}),nz=n("h3",null,"Divide Style",-1),sz=n("p",null,"实际上就是边框样式",-1),lz={__name:"118",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ul;return A(I,ul),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ul))})(),(s,i)=>(h(),S(Y,R(L(y(ul))),{default:C(()=>[nz,sz]),_:1},16))}},oz=k(lz,[["__file","/@slidev/slides/118.md"]]),fl=g({title:"Outline Width",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),iz=g({layout:c(()=>fl.layout),transition:c(()=>fl.transition),class:c(()=>fl.class),clicks:c(()=>fl.clicks),name:c(()=>fl.name),preload:c(()=>fl.preload),slide:{raw:"",title:"Outline Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:118,start:101,end:118,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Outline Width
level: 2
layout: slim-table
---

### Outline Width

控制元素轮廓宽度
比如按钮

<div class="space-x-5">
<button class="outline outline-offset-2 outline-1 ...">Button A</button>
<button class="outline outline-offset-2 outline-2 ...">Button B</button>
<button class="outline outline-offset-2 outline-4 ...">Button C</button>
</div>
`,title:"Outline Width",level:2,content:`### Outline Width

控制元素轮廓宽度
比如按钮

<div class="space-x-5">
<button class="outline outline-offset-2 outline-1 ...">Button A</button>
<button class="outline outline-offset-2 outline-2 ...">Button B</button>
<button class="outline outline-offset-2 outline-4 ...">Button C</button>
</div>`,frontmatter:{title:"Outline Width",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:101,end:118},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:fl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:118,no:119},__clicksElements:[],__preloaded:!1}),rz=n("h3",null,"Outline Width",-1),az=n("p",null,"控制元素轮廓宽度 比如按钮",-1),cz=n("div",{class:"space-x-5"},[n("button",{class:"outline outline-offset-2 outline-1 ..."},"Button A"),n("button",{class:"outline outline-offset-2 outline-2 ..."},"Button B"),n("button",{class:"outline outline-offset-2 outline-4 ..."},"Button C")],-1),dz={__name:"119",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=fl;return A(I,fl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,fl))})(),(s,i)=>(h(),S(Y,R(L(y(fl))),{default:C(()=>[rz,az,cz]),_:1},16))}},uz=k(dz,[["__file","/@slidev/slides/119.md"]]),pl=g({title:"Outline Color",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),fz=g({layout:c(()=>pl.layout),transition:c(()=>pl.transition),class:c(()=>pl.class),clicks:c(()=>pl.clicks),name:c(()=>pl.name),preload:c(()=>pl.preload),slide:{raw:"",title:"Outline Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:119,start:118,end:134,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Outline Color
level: 2
layout: slim-table
---

### Outline Color

没什么可讲的

<div class="space-x-5">
<button class="outline outline-offset-2 outline-blue-500 ...">Button A</button>
<button class="outline outline-offset-2 outline-cyan-500 ...">Button B</button>
<button class="outline outline-offset-2 outline-pink-500 ...">Button C</button>
</div>
`,title:"Outline Color",level:2,content:`### Outline Color

没什么可讲的

<div class="space-x-5">
<button class="outline outline-offset-2 outline-blue-500 ...">Button A</button>
<button class="outline outline-offset-2 outline-cyan-500 ...">Button B</button>
<button class="outline outline-offset-2 outline-pink-500 ...">Button C</button>
</div>`,frontmatter:{title:"Outline Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:9,start:118,end:134},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:pl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:119,no:120},__clicksElements:[],__preloaded:!1}),pz=n("h3",null,"Outline Color",-1),mz=n("p",null,"没什么可讲的",-1),hz=n("div",{class:"space-x-5"},[n("button",{class:"outline outline-offset-2 outline-blue-500 ..."},"Button A"),n("button",{class:"outline outline-offset-2 outline-cyan-500 ..."},"Button B"),n("button",{class:"outline outline-offset-2 outline-pink-500 ..."},"Button C")],-1),vz={__name:"120",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=pl;return A(I,pl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,pl))})(),(s,i)=>(h(),S(Y,R(L(y(pl))),{default:C(()=>[pz,mz,hz]),_:1},16))}},gz=k(vz,[["__file","/@slidev/slides/120.md"]]),ml=g({title:"Outline Style",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),_z=g({layout:c(()=>ml.layout),transition:c(()=>ml.transition),class:c(()=>ml.class),clicks:c(()=>ml.clicks),name:c(()=>ml.name),preload:c(()=>ml.preload),slide:{raw:"",title:"Outline Style",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:120,start:134,end:151,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Outline Style
level: 2
layout: slim-table
---

### Outline Style

没什么可讲的

<div class="space-x-5">
<button class="outline outline-2 outline-offset-2 ...">Button A</button>
<button class="outline-dashed outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-dotted outline-2 outline-offset-2 ...">Button C</button>
<button class="outline-double outline-3 outline-offset-2 ...">Button D</button>
</div>
`,title:"Outline Style",level:2,content:`### Outline Style

没什么可讲的

<div class="space-x-5">
<button class="outline outline-2 outline-offset-2 ...">Button A</button>
<button class="outline-dashed outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-dotted outline-2 outline-offset-2 ...">Button C</button>
<button class="outline-double outline-3 outline-offset-2 ...">Button D</button>
</div>`,frontmatter:{title:"Outline Style",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:10,start:134,end:151},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:ml,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:120,no:121},__clicksElements:[],__preloaded:!1}),yz=n("h3",null,"Outline Style",-1),bz=n("p",null,"没什么可讲的",-1),wz=n("div",{class:"space-x-5"},[n("button",{class:"outline outline-2 outline-offset-2 ..."},"Button A"),n("button",{class:"outline-dashed outline-2 outline-offset-2 ..."},"Button B"),n("button",{class:"outline-dotted outline-2 outline-offset-2 ..."},"Button C"),n("button",{class:"outline-double outline-3 outline-offset-2 ..."},"Button D")],-1),xz={__name:"121",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ml;return A(I,ml),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ml))})(),(s,i)=>(h(),S(Y,R(L(y(ml))),{default:C(()=>[yz,bz,wz]),_:1},16))}},kz=k(xz,[["__file","/@slidev/slides/121.md"]]),hl=g({title:"Outline Offset",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),$z=g({layout:c(()=>hl.layout),transition:c(()=>hl.transition),class:c(()=>hl.class),clicks:c(()=>hl.clicks),name:c(()=>hl.name),preload:c(()=>hl.preload),slide:{raw:"",title:"Outline Offset",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:121,start:151,end:160,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Outline Offset
level: 2
layout: slim-table
---

### Outline Offset
没什么可讲的
`,title:"Outline Offset",level:2,content:`### Outline Offset
没什么可讲的`,frontmatter:{title:"Outline Offset",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:11,start:151,end:160},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:hl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:121,no:122},__clicksElements:[],__preloaded:!1}),Sz=n("h3",null,"Outline Offset",-1),jz=n("p",null,"没什么可讲的",-1),Pz={__name:"122",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=hl;return A(I,hl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,hl))})(),(s,i)=>(h(),S(Y,R(L(y(hl))),{default:C(()=>[Sz,jz]),_:1},16))}},Tz=k(Pz,[["__file","/@slidev/slides/122.md"]]),vl=g({title:"Ring Width",level:2,layout:"slim-table",srcSequence:"./pages/007Borders.md"}),Cz=g({layout:c(()=>vl.layout),transition:c(()=>vl.transition),class:c(()=>vl.class),clicks:c(()=>vl.clicks),name:c(()=>vl.name),preload:c(()=>vl.preload),slide:{raw:"",title:"Ring Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:122,start:160,end:178,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",raw:`---
title: Ring Width
level: 2
layout: slim-table
---

### Ring Width

用于创建带有盒子阴影的轮廓环

<div class="space-x-5">
<button class="... ring-offset-2 ring-2">Button A</button>
<button class="... ring-offset-2 ring">Button B</button>
<button class="... ring-offset-2 ring-4">Button C</button>
</div>

后面轮廓环系列样式也略了，看起来这系列的样式适合按钮用
`,title:"Ring Width",level:2,content:`### Ring Width

用于创建带有盒子阴影的轮廓环

<div class="space-x-5">
<button class="... ring-offset-2 ring-2">Button A</button>
<button class="... ring-offset-2 ring">Button B</button>
<button class="... ring-offset-2 ring-4">Button C</button>
</div>

后面轮廓环系列样式也略了，看起来这系列的样式适合按钮用`,frontmatter:{title:"Ring Width",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:12,start:160,end:178},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",noteHTML:"",frontmatter:vl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\007Borders.md",id:122,no:123},__clicksElements:[],__preloaded:!1}),Ez=n("h3",null,"Ring Width",-1),Az=n("p",null,"用于创建带有盒子阴影的轮廓环",-1),Oz=n("div",{class:"space-x-5"},[n("button",{class:"... ring-offset-2 ring-2"},"Button A"),n("button",{class:"... ring-offset-2 ring"},"Button B"),n("button",{class:"... ring-offset-2 ring-4"},"Button C")],-1),Dz=n("p",null,"后面轮廓环系列样式也略了，看起来这系列的样式适合按钮用",-1),Bz={__name:"123",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=vl;return A(I,vl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,vl))})(),(s,i)=>(h(),S(Y,R(L(y(vl))),{default:C(()=>[Ez,Az,Oz,Dz]),_:1},16))}},Mz=k(Bz,[["__file","/@slidev/slides/123.md"]]),gl=g({title:"Effects",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/008Effects.md"}),Fz=g({layout:c(()=>gl.layout),transition:c(()=>gl.transition),class:c(()=>gl.class),clicks:c(()=>gl.clicks),name:c(()=>gl.name),preload:c(()=>gl.preload),slide:{raw:"",title:"Effects",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:123,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Effects
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Effects
`,title:"Effects",level:1,content:"## Effects",frontmatter:{title:"Effects",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/008Effects.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:11,start:84,end:88},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:gl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:123,no:124},__clicksElements:[],__preloaded:!1}),Iz=n("h2",null,"Effects",-1),Lz={__name:"124",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=gl;return A(I,gl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,gl))})(),(s,i)=>(h(),S(Pt,R(L(y(gl))),{default:C(()=>[Iz]),_:1},16))}},Rz=k(Lz,[["__file","/@slidev/slides/124.md"]]),_l=g({title:"Box Shadow",level:2,layout:"slim-table",srcSequence:"./pages/008Effects.md"}),Hz=g({layout:c(()=>_l.layout),transition:c(()=>_l.transition),class:c(()=>_l.class),clicks:c(()=>_l.clicks),name:c(()=>_l.name),preload:c(()=>_l.preload),slide:{raw:"",title:"Box Shadow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:124,start:9,end:35,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Box Shadow
level: 2
layout: slim-table
---

### Box Shadow

| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| ------------ | ------------------------------------------------------------ |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;                                       |

<div class="[&_div]:w-[100px] [&_div]:aspect-square space-x-5 flex mt-10">
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
<div class="shadow-2xl ..."></div>
<div class="shadow-inner ...">内嵌阴影</div>
</div>
`,title:"Box Shadow",level:2,content:`### Box Shadow

| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| ------------ | ------------------------------------------------------------ |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;                                       |

<div class="[&_div]:w-[100px] [&_div]:aspect-square space-x-5 flex mt-10">
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
<div class="shadow-2xl ..."></div>
<div class="shadow-inner ...">内嵌阴影</div>
</div>`,frontmatter:{title:"Box Shadow",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:35},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:_l,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:124,no:125},__clicksElements:[],__preloaded:!1}),zz=n("h3",null,"Box Shadow",-1),Nz=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"shadow-sm"),n("th",null,"box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);")])]),n("tbody",null,[n("tr",null,[n("td",null,"shadow"),n("td",null,"box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);")]),n("tr",null,[n("td",null,"shadow-md"),n("td",null,"box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);")]),n("tr",null,[n("td",null,"shadow-lg"),n("td",null,"box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);")]),n("tr",null,[n("td",null,"shadow-xl"),n("td",null,"box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);")]),n("tr",null,[n("td",null,"shadow-2xl"),n("td",null,"box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);")]),n("tr",null,[n("td",null,"shadow-inner"),n("td",null,"box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);")]),n("tr",null,[n("td",null,"shadow-none"),n("td",null,"box-shadow: 0 0 #0000;")])])],-1),qz=n("div",{class:"[&_div]:w-[100px] [&_div]:aspect-square space-x-5 flex mt-10"},[n("div",{class:"shadow-md ..."}),n("div",{class:"shadow-lg ..."}),n("div",{class:"shadow-xl ..."}),n("div",{class:"shadow-2xl ..."}),n("div",{class:"shadow-inner ..."},"内嵌阴影")],-1),Vz={__name:"125",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=_l;return A(I,_l),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,_l))})(),(s,i)=>(h(),S(Y,R(L(y(_l))),{default:C(()=>[zz,Nz,qz]),_:1},16))}},Gz=k(Vz,[["__file","/@slidev/slides/125.md"]]),yl=g({title:"Box Shadow Color",level:2,layout:"slim-table",srcSequence:"./pages/008Effects.md"}),Wz=g({layout:c(()=>yl.layout),transition:c(()=>yl.transition),class:c(()=>yl.class),clicks:c(()=>yl.clicks),name:c(()=>yl.name),preload:c(()=>yl.preload),slide:{raw:"",title:"Box Shadow Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:125,start:35,end:51,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Box Shadow Color
level: 2
layout: slim-table
---

### Box Shadow Color

颜色的使用都是一样的

<div class="[&_button]:p-2 [&_button]:rounded [&_button]:text-white space-x-5 flex mt-10">
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
</div>
`,title:"Box Shadow Color",level:2,content:`### Box Shadow Color

颜色的使用都是一样的

<div class="[&_button]:p-2 [&_button]:rounded [&_button]:text-white space-x-5 flex mt-10">
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
</div>`,frontmatter:{title:"Box Shadow Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:35,end:51},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:yl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:125,no:126},__clicksElements:[],__preloaded:!1}),Uz=n("h3",null,"Box Shadow Color",-1),Kz=n("p",null,"颜色的使用都是一样的",-1),Yz=n("div",{class:"[&_button]:p-2 [&_button]:rounded [&_button]:text-white space-x-5 flex mt-10"},[n("button",{class:"bg-cyan-500 shadow-lg shadow-cyan-500/50 ..."},"Subscribe"),n("button",{class:"bg-blue-500 shadow-lg shadow-blue-500/50 ..."},"Subscribe"),n("button",{class:"bg-indigo-500 shadow-lg shadow-indigo-500/50 ..."},"Subscribe")],-1),Jz={__name:"126",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=yl;return A(I,yl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,yl))})(),(s,i)=>(h(),S(Y,R(L(y(yl))),{default:C(()=>[Uz,Kz,Yz]),_:1},16))}},Zz=k(Jz,[["__file","/@slidev/slides/126.md"]]),bl=g({title:"Opacity",level:2,layout:"slim-table",srcSequence:"./pages/008Effects.md"}),Xz=g({layout:c(()=>bl.layout),transition:c(()=>bl.transition),class:c(()=>bl.class),clicks:c(()=>bl.clicks),name:c(()=>bl.name),preload:c(()=>bl.preload),slide:{raw:"",title:"Opacity",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:126,start:51,end:61,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Opacity
level: 2
layout: slim-table
---

### Opacity 不透明度

不用多说了
`,title:"Opacity",level:2,content:`### Opacity 不透明度

不用多说了`,frontmatter:{title:"Opacity",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:51,end:61},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:bl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:126,no:127},__clicksElements:[],__preloaded:!1}),Qz=n("h3",null,"Opacity 不透明度",-1),eN=n("p",null,"不用多说了",-1),tN={__name:"127",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=bl;return A(I,bl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,bl))})(),(s,i)=>(h(),S(Y,R(L(y(bl))),{default:C(()=>[Qz,eN]),_:1},16))}},nN=k(tN,[["__file","/@slidev/slides/127.md"]]),wl=g({title:"Mix Blend Mode",level:2,layout:"slim-table",srcSequence:"./pages/008Effects.md"}),sN=g({layout:c(()=>wl.layout),transition:c(()=>wl.transition),class:c(()=>wl.class),clicks:c(()=>wl.clicks),name:c(()=>wl.name),preload:c(()=>wl.preload),slide:{raw:"",title:"Mix Blend Mode",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:127,start:61,end:91,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Mix Blend Mode
level: 2
layout: slim-table
---

### Mix Blend Mode  

控制元素和背景颜色怎么混合

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |
`,title:"Mix Blend Mode",level:2,content:`### Mix Blend Mode  

控制元素和背景颜色怎么混合

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |`,frontmatter:{title:"Mix Blend Mode",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:4,start:61,end:91},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:wl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:127,no:128},__clicksElements:[],__preloaded:!1}),lN=n("h3",null,"Mix Blend Mode",-1),oN=n("p",null,"控制元素和背景颜色怎么混合",-1),iN=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"mix-blend-normal"),n("td",null,"mix-blend-mode: normal;")]),n("tr",null,[n("td",null,"mix-blend-multiply"),n("td",null,"mix-blend-mode: multiply;")]),n("tr",null,[n("td",null,"mix-blend-screen"),n("td",null,"mix-blend-mode: screen;")]),n("tr",null,[n("td",null,"mix-blend-overlay"),n("td",null,"mix-blend-mode: overlay;")]),n("tr",null,[n("td",null,"mix-blend-darken"),n("td",null,"mix-blend-mode: darken;")]),n("tr",null,[n("td",null,"mix-blend-lighten"),n("td",null,"mix-blend-mode: lighten;")]),n("tr",null,[n("td",null,"mix-blend-color-dodge"),n("td",null,"mix-blend-mode: color-dodge;")]),n("tr",null,[n("td",null,"mix-blend-color-burn"),n("td",null,"mix-blend-mode: color-burn;")]),n("tr",null,[n("td",null,"mix-blend-hard-light"),n("td",null,"mix-blend-mode: hard-light;")]),n("tr",null,[n("td",null,"mix-blend-soft-light"),n("td",null,"mix-blend-mode: soft-light;")]),n("tr",null,[n("td",null,"mix-blend-difference"),n("td",null,"mix-blend-mode: difference;")]),n("tr",null,[n("td",null,"mix-blend-exclusion"),n("td",null,"mix-blend-mode: exclusion;")]),n("tr",null,[n("td",null,"mix-blend-hue"),n("td",null,"mix-blend-mode: hue;")]),n("tr",null,[n("td",null,"mix-blend-saturation"),n("td",null,"mix-blend-mode: saturation;")]),n("tr",null,[n("td",null,"mix-blend-color"),n("td",null,"mix-blend-mode: color;")]),n("tr",null,[n("td",null,"mix-blend-luminosity"),n("td",null,"mix-blend-mode: luminosity;")]),n("tr",null,[n("td",null,"mix-blend-plus-lighter"),n("td",null,"mix-blend-mode: plus-lighter;")])])],-1),rN={__name:"128",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=wl;return A(I,wl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,wl))})(),(s,i)=>(h(),S(Y,R(L(y(wl))),{default:C(()=>[lN,oN,iN]),_:1},16))}},aN=k(rN,[["__file","/@slidev/slides/128.md"]]),xl=g({srcSequence:"./pages/008Effects.md"}),cN=g({layout:c(()=>xl.layout),transition:c(()=>xl.transition),class:c(()=>xl.class),clicks:c(()=>xl.clicks),name:c(()=>xl.name),preload:c(()=>xl.preload),slide:{raw:"",content:"",note:"",index:128,start:92,end:100,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`
可以试一试不同混合模式的效果  

<div class="flex justify-center -space-x-14 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:rounded-50">
  <div class="mix-blend-multiply bg-blue-400 ..."></div>
  <div class="mix-blend-multiply bg-pink-400 ..."></div>
</div>
`,content:`可以试一试不同混合模式的效果  

<div class="flex justify-center -space-x-14 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:rounded-50">
  <div class="mix-blend-multiply bg-blue-400 ..."></div>
  <div class="mix-blend-multiply bg-pink-400 ..."></div>
</div>`,frontmatter:{},index:5,start:92,end:100},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:xl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:128,no:129},__clicksElements:[],__preloaded:!1}),dN=n("p",null,"可以试一试不同混合模式的效果",-1),uN=n("div",{class:"flex justify-center -space-x-14 [&_div]:w-[100px] [&_div]:aspect-square [&_div]:rounded-50"},[n("div",{class:"mix-blend-multiply bg-blue-400 ..."}),n("div",{class:"mix-blend-multiply bg-pink-400 ..."})],-1),fN={__name:"129",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=xl;return A(I,xl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,xl))})(),(s,i)=>(h(),S(he,R(L(y(xl))),{default:C(()=>[dN,uN]),_:1},16))}},pN=k(fN,[["__file","/@slidev/slides/129.md"]]),kl=g({title:"Background Blend Mode",level:2,layout:"slim-table",srcSequence:"./pages/008Effects.md"}),mN=g({layout:c(()=>kl.layout),transition:c(()=>kl.transition),class:c(()=>kl.class),clicks:c(()=>kl.clicks),name:c(()=>kl.name),preload:c(()=>kl.preload),slide:{raw:"",title:"Background Blend Mode",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:129,start:100,end:128,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",raw:`---
title: Background Blend Mode
level: 2
layout: slim-table
---

### Background Blend Mode
设置背景色混合模式  

| Class                | Properties                          |
| -------------------- | ----------------------------------- |
| bg-blend-normal      | background-blend-mode: normal;      |
| bg-blend-multiply    | background-blend-mode: multiply;    |
| bg-blend-screen      | background-blend-mode: screen;      |
| bg-blend-overlay     | background-blend-mode: overlay;     |
| bg-blend-darken      | background-blend-mode: darken;      |
| bg-blend-lighten     | background-blend-mode: lighten;     |
| bg-blend-color-dodge | background-blend-mode: color-dodge; |
| bg-blend-color-burn  | background-blend-mode: color-burn;  |
| bg-blend-hard-light  | background-blend-mode: hard-light;  |
| bg-blend-soft-light  | background-blend-mode: soft-light;  |
| bg-blend-difference  | background-blend-mode: difference;  |
| bg-blend-exclusion   | background-blend-mode: exclusion;   |
| bg-blend-hue         | background-blend-mode: hue;         |
| bg-blend-saturation  | background-blend-mode: saturation;  |
| bg-blend-color       | background-blend-mode: color;       |
| bg-blend-luminosity  | background-blend-mode: luminosity;  |
`,title:"Background Blend Mode",level:2,content:`### Background Blend Mode
设置背景色混合模式  

| Class                | Properties                          |
| -------------------- | ----------------------------------- |
| bg-blend-normal      | background-blend-mode: normal;      |
| bg-blend-multiply    | background-blend-mode: multiply;    |
| bg-blend-screen      | background-blend-mode: screen;      |
| bg-blend-overlay     | background-blend-mode: overlay;     |
| bg-blend-darken      | background-blend-mode: darken;      |
| bg-blend-lighten     | background-blend-mode: lighten;     |
| bg-blend-color-dodge | background-blend-mode: color-dodge; |
| bg-blend-color-burn  | background-blend-mode: color-burn;  |
| bg-blend-hard-light  | background-blend-mode: hard-light;  |
| bg-blend-soft-light  | background-blend-mode: soft-light;  |
| bg-blend-difference  | background-blend-mode: difference;  |
| bg-blend-exclusion   | background-blend-mode: exclusion;   |
| bg-blend-hue         | background-blend-mode: hue;         |
| bg-blend-saturation  | background-blend-mode: saturation;  |
| bg-blend-color       | background-blend-mode: color;       |
| bg-blend-luminosity  | background-blend-mode: luminosity;  |`,frontmatter:{title:"Background Blend Mode",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:6,start:100,end:128},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",noteHTML:"",frontmatter:kl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\008Effects.md",id:129,no:130},__clicksElements:[],__preloaded:!1}),hN=n("h3",null,"Background Blend Mode",-1),vN=n("p",null,"设置背景色混合模式",-1),gN=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"bg-blend-normal"),n("td",null,"background-blend-mode: normal;")]),n("tr",null,[n("td",null,"bg-blend-multiply"),n("td",null,"background-blend-mode: multiply;")]),n("tr",null,[n("td",null,"bg-blend-screen"),n("td",null,"background-blend-mode: screen;")]),n("tr",null,[n("td",null,"bg-blend-overlay"),n("td",null,"background-blend-mode: overlay;")]),n("tr",null,[n("td",null,"bg-blend-darken"),n("td",null,"background-blend-mode: darken;")]),n("tr",null,[n("td",null,"bg-blend-lighten"),n("td",null,"background-blend-mode: lighten;")]),n("tr",null,[n("td",null,"bg-blend-color-dodge"),n("td",null,"background-blend-mode: color-dodge;")]),n("tr",null,[n("td",null,"bg-blend-color-burn"),n("td",null,"background-blend-mode: color-burn;")]),n("tr",null,[n("td",null,"bg-blend-hard-light"),n("td",null,"background-blend-mode: hard-light;")]),n("tr",null,[n("td",null,"bg-blend-soft-light"),n("td",null,"background-blend-mode: soft-light;")]),n("tr",null,[n("td",null,"bg-blend-difference"),n("td",null,"background-blend-mode: difference;")]),n("tr",null,[n("td",null,"bg-blend-exclusion"),n("td",null,"background-blend-mode: exclusion;")]),n("tr",null,[n("td",null,"bg-blend-hue"),n("td",null,"background-blend-mode: hue;")]),n("tr",null,[n("td",null,"bg-blend-saturation"),n("td",null,"background-blend-mode: saturation;")]),n("tr",null,[n("td",null,"bg-blend-color"),n("td",null,"background-blend-mode: color;")]),n("tr",null,[n("td",null,"bg-blend-luminosity"),n("td",null,"background-blend-mode: luminosity;")])])],-1),_N={__name:"130",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=kl;return A(I,kl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,kl))})(),(s,i)=>(h(),S(Y,R(L(y(kl))),{default:C(()=>[hN,vN,gN]),_:1},16))}},yN=k(_N,[["__file","/@slidev/slides/130.md"]]),$l=g({title:"Filter",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/009Filters.md"}),bN=g({layout:c(()=>$l.layout),transition:c(()=>$l.transition),class:c(()=>$l.class),clicks:c(()=>$l.clicks),name:c(()=>$l.name),preload:c(()=>$l.preload),slide:{raw:"",title:"Filter",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:130,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Filter
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Filter
`,title:"Filter",level:1,content:"## Filter",frontmatter:{title:"Filter",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/009Filters.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:12,start:88,end:92},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:$l,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:130,no:131},__clicksElements:[],__preloaded:!1}),wN=n("h2",null,"Filter",-1),xN={__name:"131",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=$l;return A(I,$l),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,$l))})(),(s,i)=>(h(),S(Pt,R(L(y($l))),{default:C(()=>[wN]),_:1},16))}},kN=k(xN,[["__file","/@slidev/slides/131.md"]]),Sl=g({title:"Blur",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),$N=g({layout:c(()=>Sl.layout),transition:c(()=>Sl.transition),class:c(()=>Sl.class),clicks:c(()=>Sl.clicks),name:c(()=>Sl.name),preload:c(()=>Sl.preload),slide:{raw:"",title:"Blur",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:131,start:9,end:37,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Blur
level: 2
layout: slim-table
---
### Blur

模糊滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>blur-none</p>
 <img class="blur-none object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>blur-sm</p>
 <img class="blur-sm object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>blur-lg</p>
 <img class="blur-lg object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>blur-2xl</p>
  <img class="blur-2xl object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Blur",level:2,content:`### Blur

模糊滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>blur-none</p>
 <img class="blur-none object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>blur-sm</p>
 <img class="blur-sm object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>blur-lg</p>
 <img class="blur-lg object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>blur-2xl</p>
  <img class="blur-2xl object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Blur",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:37},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Sl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:131,no:132},__clicksElements:[],__preloaded:!1}),SN=n("h3",null,"Blur",-1),jN=n("p",null,"模糊滤镜",-1),PN=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"blur-none"),n("img",{class:"blur-none object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"blur-sm"),n("img",{class:"blur-sm object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"blur-lg"),n("img",{class:"blur-lg object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"blur-2xl"),n("img",{class:"blur-2xl object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),TN={__name:"132",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Sl;return A(I,Sl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Sl))})(),(s,i)=>(h(),S(Y,R(L(y(Sl))),{default:C(()=>[SN,jN,PN]),_:1},16))}},CN=k(TN,[["__file","/@slidev/slides/132.md"]]),jl=g({title:"Brightness",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),EN=g({layout:c(()=>jl.layout),transition:c(()=>jl.transition),class:c(()=>jl.class),clicks:c(()=>jl.clicks),name:c(()=>jl.name),preload:c(()=>jl.preload),slide:{raw:"",title:"Brightness",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:132,start:37,end:64,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Brightness
level: 2
layout: slim-table
---

### Brightness 亮度滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>brightness-50</p>
 <img class="brightness-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>brightness-100</p>
 <img class="brightness-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>brightness-125</p>
 <img class="brightness-125 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>brightness-200</p>
  <img class="brightness-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Brightness",level:2,content:`### Brightness 亮度滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>brightness-50</p>
 <img class="brightness-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>brightness-100</p>
 <img class="brightness-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>brightness-125</p>
 <img class="brightness-125 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>brightness-200</p>
  <img class="brightness-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Brightness",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:37,end:64},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:jl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:132,no:133},__clicksElements:[],__preloaded:!1}),AN=n("h3",null,"Brightness 亮度滤镜",-1),ON=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"brightness-50"),n("img",{class:"brightness-50 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"brightness-100"),n("img",{class:"brightness-100 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"brightness-125"),n("img",{class:"brightness-125 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"brightness-200"),n("img",{class:"brightness-200 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),DN={__name:"133",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=jl;return A(I,jl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,jl))})(),(s,i)=>(h(),S(Y,R(L(y(jl))),{default:C(()=>[AN,ON]),_:1},16))}},BN=k(DN,[["__file","/@slidev/slides/133.md"]]),Pl=g({title:"Contrast",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),MN=g({layout:c(()=>Pl.layout),transition:c(()=>Pl.transition),class:c(()=>Pl.class),clicks:c(()=>Pl.clicks),name:c(()=>Pl.name),preload:c(()=>Pl.preload),slide:{raw:"",title:"Contrast",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:133,start:64,end:91,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Contrast
level: 2
layout: slim-table
---

### Contrast 对比度滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>contrast-50</p>
 <img class="contrast-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>contrast-100</p>
 <img class="contrast-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>contrast-125</p>
 <img class="contrast-125 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>contrast-200</p>
  <img class="contrast-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Contrast",level:2,content:`### Contrast 对比度滤镜

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>contrast-50</p>
 <img class="contrast-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>contrast-100</p>
 <img class="contrast-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>contrast-125</p>
 <img class="contrast-125 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>contrast-200</p>
  <img class="contrast-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Contrast",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:64,end:91},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Pl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:133,no:134},__clicksElements:[],__preloaded:!1}),FN=n("h3",null,"Contrast 对比度滤镜",-1),IN=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"contrast-50"),n("img",{class:"contrast-50 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"contrast-100"),n("img",{class:"contrast-100 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"contrast-125"),n("img",{class:"contrast-125 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"contrast-200"),n("img",{class:"contrast-200 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),LN={__name:"134",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Pl;return A(I,Pl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Pl))})(),(s,i)=>(h(),S(Y,R(L(y(Pl))),{default:C(()=>[FN,IN]),_:1},16))}},RN=k(LN,[["__file","/@slidev/slides/134.md"]]),Tl=g({title:"Drop Shadow",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),HN=g({layout:c(()=>Tl.layout),transition:c(()=>Tl.transition),class:c(()=>Tl.class),clicks:c(()=>Tl.clicks),name:c(()=>Tl.name),preload:c(()=>Tl.preload),slide:{raw:"",title:"Drop Shadow",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:134,start:91,end:116,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Drop Shadow
level: 2
layout: slim-table
---

### Drop Shadow  
这个滤镜主要用于把阴影应用于复杂不规则形状，比如svg和文本。
对于一般矩形，box-shadow 代替更好

<div class="flex [&_div]:w-[180px] [&_div]:aspect-square [&_div]:bg-blue-100 space-x-5">
<div class="drop-shadow-md ...">
  <!-- ... -->
</div>
<div class="drop-shadow-lg ...">
  <!-- ... -->
</div>
<div class="drop-shadow-xl ...">
  <!-- ... -->
</div>
<div class="drop-shadow-2xl ...">
  <!-- ... -->
</div>
</div>
`,title:"Drop Shadow",level:2,content:`### Drop Shadow  
这个滤镜主要用于把阴影应用于复杂不规则形状，比如svg和文本。
对于一般矩形，box-shadow 代替更好

<div class="flex [&_div]:w-[180px] [&_div]:aspect-square [&_div]:bg-blue-100 space-x-5">
<div class="drop-shadow-md ...">
  <!-- ... -->
</div>
<div class="drop-shadow-lg ...">
  <!-- ... -->
</div>
<div class="drop-shadow-xl ...">
  <!-- ... -->
</div>
<div class="drop-shadow-2xl ...">
  <!-- ... -->
</div>
</div>`,frontmatter:{title:"Drop Shadow",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:4,start:91,end:116},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Tl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:134,no:135},__clicksElements:[],__preloaded:!1}),zN=n("h3",null,"Drop Shadow",-1),NN=n("p",null,"这个滤镜主要用于把阴影应用于复杂不规则形状，比如svg和文本。 对于一般矩形，box-shadow 代替更好",-1),qN=n("div",{class:"flex [&_div]:w-[180px] [&_div]:aspect-square [&_div]:bg-blue-100 space-x-5"},[n("div",{class:"drop-shadow-md ..."},[we(" ... ")]),n("div",{class:"drop-shadow-lg ..."},[we(" ... ")]),n("div",{class:"drop-shadow-xl ..."},[we(" ... ")]),n("div",{class:"drop-shadow-2xl ..."},[we(" ... ")])],-1),VN={__name:"135",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Tl;return A(I,Tl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Tl))})(),(s,i)=>(h(),S(Y,R(L(y(Tl))),{default:C(()=>[zN,NN,qN]),_:1},16))}},GN=k(VN,[["__file","/@slidev/slides/135.md"]]),Cl=g({title:"Grayscale",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),WN=g({layout:c(()=>Cl.layout),transition:c(()=>Cl.transition),class:c(()=>Cl.class),clicks:c(()=>Cl.clicks),name:c(()=>Cl.name),preload:c(()=>Cl.preload),slide:{raw:"",title:"Grayscale",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:135,start:116,end:135,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Grayscale
level: 2
layout: slim-table
---

### Grayscale

<div class="flex [&_div]:w-[200px] space-x-5">
<div class="">
 <p>grayscale-0</p>
 <img class="grayscale-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>grayscale-0</p>
 <img class="grayscale-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

</div>`,title:"Grayscale",level:2,content:`### Grayscale

<div class="flex [&_div]:w-[200px] space-x-5">
<div class="">
 <p>grayscale-0</p>
 <img class="grayscale-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>grayscale-0</p>
 <img class="grayscale-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>

</div>`,frontmatter:{title:"Grayscale",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:5,start:116,end:135},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Cl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:135,no:136},__clicksElements:[],__preloaded:!1}),UN=n("h3",null,"Grayscale",-1),KN=n("div",{class:"flex [&_div]:w-[200px] space-x-5"},[n("div",{class:""},[n("p",null,"grayscale-0"),n("img",{class:"grayscale-0 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"grayscale-0"),n("img",{class:"grayscale-100 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),YN={__name:"136",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Cl;return A(I,Cl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Cl))})(),(s,i)=>(h(),S(Y,R(L(y(Cl))),{default:C(()=>[UN,KN]),_:1},16))}},JN=k(YN,[["__file","/@slidev/slides/136.md"]]),El=g({title:"Hue Rotate",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),ZN=g({layout:c(()=>El.layout),transition:c(()=>El.transition),class:c(()=>El.class),clicks:c(()=>El.clicks),name:c(()=>El.name),preload:c(()=>El.preload),slide:{raw:"",title:"Hue Rotate",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:136,start:135,end:161,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Hue Rotate
level: 2
layout: slim-table
---
### Hue Rotate

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>hue-rotate-15</p>
 <img class="hue-rotate-90 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>hue-rotate-90</p>
 <img class="hue-rotate-90 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>hue-rotate-180</p>
 <img class="hue-rotate-180 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>hue-rotate-60</p>
  <img class="hue-rotate-60 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Hue Rotate",level:2,content:`### Hue Rotate

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>hue-rotate-15</p>
 <img class="hue-rotate-90 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>hue-rotate-90</p>
 <img class="hue-rotate-90 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>hue-rotate-180</p>
 <img class="hue-rotate-180 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>hue-rotate-60</p>
  <img class="hue-rotate-60 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Hue Rotate",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:6,start:135,end:161},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:El,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:136,no:137},__clicksElements:[],__preloaded:!1}),XN=n("h3",null,"Hue Rotate",-1),QN=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"hue-rotate-15"),n("img",{class:"hue-rotate-90 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"hue-rotate-90"),n("img",{class:"hue-rotate-90 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"hue-rotate-180"),n("img",{class:"hue-rotate-180 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"hue-rotate-60"),n("img",{class:"hue-rotate-60 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),eq={__name:"137",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=El;return A(I,El),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,El))})(),(s,i)=>(h(),S(Y,R(L(y(El))),{default:C(()=>[XN,QN]),_:1},16))}},tq=k(eq,[["__file","/@slidev/slides/137.md"]]),Al=g({title:"Invert",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),nq=g({layout:c(()=>Al.layout),transition:c(()=>Al.transition),class:c(()=>Al.class),clicks:c(()=>Al.clicks),name:c(()=>Al.name),preload:c(()=>Al.preload),slide:{raw:"",title:"Invert",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:137,start:161,end:179,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Invert
level: 2
layout: slim-table
---
### Invert

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>invert-0</p>
 <img class="invert-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>invert</p>
 <img class="invert object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Invert",level:2,content:`### Invert

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>invert-0</p>
 <img class="invert-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>invert</p>
 <img class="invert object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Invert",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:7,start:161,end:179},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Al,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:137,no:138},__clicksElements:[],__preloaded:!1}),sq=n("h3",null,"Invert",-1),lq=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"invert-0"),n("img",{class:"invert-0 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"invert"),n("img",{class:"invert object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),oq={__name:"138",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Al;return A(I,Al),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Al))})(),(s,i)=>(h(),S(Y,R(L(y(Al))),{default:C(()=>[sq,lq]),_:1},16))}},iq=k(oq,[["__file","/@slidev/slides/138.md"]]),Ol=g({title:"Saturate",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),rq=g({layout:c(()=>Ol.layout),transition:c(()=>Ol.transition),class:c(()=>Ol.class),clicks:c(()=>Ol.clicks),name:c(()=>Ol.name),preload:c(()=>Ol.preload),slide:{raw:"",title:"Saturate",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:138,start:179,end:206,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Saturate
level: 2
layout: slim-table
---

### Saturate

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>saturate-50</p>
 <img class="saturate-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>saturate-100</p>
 <img class="saturate-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>saturate-150</p>
 <img class="saturate-150 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>saturate-200</p>
  <img class="saturate-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Saturate",level:2,content:`### Saturate

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>saturate-50</p>
 <img class="saturate-50 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>saturate-100</p>
 <img class="saturate-100 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>saturate-150</p>
 <img class="saturate-150 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
<p>saturate-200</p>
  <img class="saturate-200 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Saturate",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:179,end:206},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Ol,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:138,no:139},__clicksElements:[],__preloaded:!1}),aq=n("h3",null,"Saturate",-1),cq=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"saturate-50"),n("img",{class:"saturate-50 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"saturate-100"),n("img",{class:"saturate-100 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"saturate-150"),n("img",{class:"saturate-150 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"saturate-200"),n("img",{class:"saturate-200 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),dq={__name:"139",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ol;return A(I,Ol),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ol))})(),(s,i)=>(h(),S(Y,R(L(y(Ol))),{default:C(()=>[aq,cq]),_:1},16))}},uq=k(dq,[["__file","/@slidev/slides/139.md"]]),Dl=g({title:"Sepia",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),fq=g({layout:c(()=>Dl.layout),transition:c(()=>Dl.transition),class:c(()=>Dl.class),clicks:c(()=>Dl.clicks),name:c(()=>Dl.name),preload:c(()=>Dl.preload),slide:{raw:"",title:"Sepia",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:139,start:206,end:224,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Sepia  
level: 2
layout: slim-table
---
### Sepia

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>sepia-0</p>
 <img class="sepia-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>sepia</p>
 <img class="sepia object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Sepia",level:2,content:`### Sepia

<div class="flex [&_div]:w-[180px] space-x-5">
<div class="">
 <p>sepia-0</p>
 <img class="sepia-0 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>sepia</p>
 <img class="sepia object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Sepia",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:9,start:206,end:224},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Dl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:139,no:140},__clicksElements:[],__preloaded:!1}),pq=n("h3",null,"Sepia",-1),mq=n("div",{class:"flex [&_div]:w-[180px] space-x-5"},[n("div",{class:""},[n("p",null,"sepia-0"),n("img",{class:"sepia-0 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"sepia"),n("img",{class:"sepia object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),hq={__name:"140",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Dl;return A(I,Dl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Dl))})(),(s,i)=>(h(),S(Y,R(L(y(Dl))),{default:C(()=>[pq,mq]),_:1},16))}},vq=k(hq,[["__file","/@slidev/slides/140.md"]]),Bl=g({title:"Backdrop Blur",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),gq=g({layout:c(()=>Bl.layout),transition:c(()=>Bl.transition),class:c(()=>Bl.class),clicks:c(()=>Bl.clicks),name:c(()=>Bl.name),preload:c(()=>Bl.preload),slide:{raw:"",title:"Backdrop Blur",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:140,start:224,end:253,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Blur
level: 2
layout: slim-table
---
### Backdrop Blur

### Backdrop Blur 背景模糊  

可以用来做毛玻璃效果

<div class="flex [&_div]:w-[180px] [&_div]:aspect-square space-x-5">
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-sm border-1 border-blue text-center ">
   backdrop-blur-sm
 </div>
</div>
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-md border-1 border-blue text-center ">
   backdrop-blur-md
 </div>
</div>
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-xl border-1 border-blue text-center ">
   backdrop-blur-xl
 </div>
</div>
</div>
`,title:"Backdrop Blur",level:2,content:`### Backdrop Blur

### Backdrop Blur 背景模糊  

可以用来做毛玻璃效果

<div class="flex [&_div]:w-[180px] [&_div]:aspect-square space-x-5">
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-sm border-1 border-blue text-center ">
   backdrop-blur-sm
 </div>
</div>
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-md border-1 border-blue text-center ">
   backdrop-blur-md
 </div>
</div>
<div class="bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center">
 <div class="!w-2/3 aspect-square backdrop-blur-xl border-1 border-blue text-center ">
   backdrop-blur-xl
 </div>
</div>
</div>`,frontmatter:{title:"Backdrop Blur",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:10,start:224,end:253},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Bl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:140,no:141},__clicksElements:[],__preloaded:!1}),_q=n("h3",null,"Backdrop Blur",-1),yq=n("h3",null,"Backdrop Blur 背景模糊",-1),bq=n("p",null,"可以用来做毛玻璃效果",-1),wq=n("div",{class:"flex [&_div]:w-[180px] [&_div]:aspect-square space-x-5"},[n("div",{class:"bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center"},[n("div",{class:"!w-2/3 aspect-square backdrop-blur-sm border-1 border-blue text-center"}," backdrop-blur-sm ")]),n("div",{class:"bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center"},[n("div",{class:"!w-2/3 aspect-square backdrop-blur-md border-1 border-blue text-center"}," backdrop-blur-md ")]),n("div",{class:"bg-[url(/assets/dust-mountain.avif)] bg-cover flex justify-center items-center"},[n("div",{class:"!w-2/3 aspect-square backdrop-blur-xl border-1 border-blue text-center"}," backdrop-blur-xl ")])],-1),xq={__name:"141",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Bl;return A(I,Bl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Bl))})(),(s,i)=>(h(),S(Y,R(L(y(Bl))),{default:C(()=>[_q,yq,bq,wq]),_:1},16))}},kq=k(xq,[["__file","/@slidev/slides/141.md"]]),Ml=g({title:"Backdrop Brightness",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),$q=g({layout:c(()=>Ml.layout),transition:c(()=>Ml.transition),class:c(()=>Ml.class),clicks:c(()=>Ml.clicks),name:c(()=>Ml.name),preload:c(()=>Ml.preload),slide:{raw:"",title:"Backdrop Brightness",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:141,start:253,end:261,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Brightness
level: 2
layout: slim-table
---
### Backdrop Brightness
和背景滤镜配套的
`,title:"Backdrop Brightness",level:2,content:`### Backdrop Brightness
和背景滤镜配套的`,frontmatter:{title:"Backdrop Brightness",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:11,start:253,end:261},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Ml,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:141,no:142},__clicksElements:[],__preloaded:!1}),Sq=n("h3",null,"Backdrop Brightness",-1),jq=n("p",null,"和背景滤镜配套的",-1),Pq={__name:"142",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ml;return A(I,Ml),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ml))})(),(s,i)=>(h(),S(Y,R(L(y(Ml))),{default:C(()=>[Sq,jq]),_:1},16))}},Tq=k(Pq,[["__file","/@slidev/slides/142.md"]]),Fl=g({title:"Backdrop Contrast",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),Cq=g({layout:c(()=>Fl.layout),transition:c(()=>Fl.transition),class:c(()=>Fl.class),clicks:c(()=>Fl.clicks),name:c(()=>Fl.name),preload:c(()=>Fl.preload),slide:{raw:"",title:"Backdrop Contrast",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:142,start:261,end:270,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Contrast
level: 2
layout: slim-table
---
### Backdrop Contrast

和背景滤镜配套的
`,title:"Backdrop Contrast",level:2,content:`### Backdrop Contrast

和背景滤镜配套的`,frontmatter:{title:"Backdrop Contrast",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:12,start:261,end:270},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Fl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:142,no:143},__clicksElements:[],__preloaded:!1}),Eq=n("h3",null,"Backdrop Contrast",-1),Aq=n("p",null,"和背景滤镜配套的",-1),Oq={__name:"143",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Fl;return A(I,Fl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Fl))})(),(s,i)=>(h(),S(Y,R(L(y(Fl))),{default:C(()=>[Eq,Aq]),_:1},16))}},Dq=k(Oq,[["__file","/@slidev/slides/143.md"]]),Il=g({title:"Backdrop Grayscale",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),Bq=g({layout:c(()=>Il.layout),transition:c(()=>Il.transition),class:c(()=>Il.class),clicks:c(()=>Il.clicks),name:c(()=>Il.name),preload:c(()=>Il.preload),slide:{raw:"",title:"Backdrop Grayscale",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:143,start:270,end:279,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Grayscale
level: 2
layout: slim-table
---

### Backdrop Grayscale
和背景滤镜配套的
`,title:"Backdrop Grayscale",level:2,content:`### Backdrop Grayscale
和背景滤镜配套的`,frontmatter:{title:"Backdrop Grayscale",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:13,start:270,end:279},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Il,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:143,no:144},__clicksElements:[],__preloaded:!1}),Mq=n("h3",null,"Backdrop Grayscale",-1),Fq=n("p",null,"和背景滤镜配套的",-1),Iq={__name:"144",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Il;return A(I,Il),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Il))})(),(s,i)=>(h(),S(Y,R(L(y(Il))),{default:C(()=>[Mq,Fq]),_:1},16))}},Lq=k(Iq,[["__file","/@slidev/slides/144.md"]]),Ll=g({title:"Backdrop Hue Rotate",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),Rq=g({layout:c(()=>Ll.layout),transition:c(()=>Ll.transition),class:c(()=>Ll.class),clicks:c(()=>Ll.clicks),name:c(()=>Ll.name),preload:c(()=>Ll.preload),slide:{raw:"",title:"Backdrop Hue Rotate",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:144,start:279,end:288,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Hue Rotate
level: 2
layout: slim-table
---

### Backdrop Hue Rotate
和背景滤镜配套的
`,title:"Backdrop Hue Rotate",level:2,content:`### Backdrop Hue Rotate
和背景滤镜配套的`,frontmatter:{title:"Backdrop Hue Rotate",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:14,start:279,end:288},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Ll,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:144,no:145},__clicksElements:[],__preloaded:!1}),Hq=n("h3",null,"Backdrop Hue Rotate",-1),zq=n("p",null,"和背景滤镜配套的",-1),Nq={__name:"145",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ll;return A(I,Ll),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ll))})(),(s,i)=>(h(),S(Y,R(L(y(Ll))),{default:C(()=>[Hq,zq]),_:1},16))}},qq=k(Nq,[["__file","/@slidev/slides/145.md"]]),Rl=g({title:"Backdrop Invert",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),Vq=g({layout:c(()=>Rl.layout),transition:c(()=>Rl.transition),class:c(()=>Rl.class),clicks:c(()=>Rl.clicks),name:c(()=>Rl.name),preload:c(()=>Rl.preload),slide:{raw:"",title:"Backdrop Invert",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:145,start:288,end:297,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Invert
level: 2
layout: slim-table
---

### Backdrop Invert
和背景滤镜配套的
`,title:"Backdrop Invert",level:2,content:`### Backdrop Invert
和背景滤镜配套的`,frontmatter:{title:"Backdrop Invert",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:15,start:288,end:297},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Rl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:145,no:146},__clicksElements:[],__preloaded:!1}),Gq=n("h3",null,"Backdrop Invert",-1),Wq=n("p",null,"和背景滤镜配套的",-1),Uq={__name:"146",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Rl;return A(I,Rl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Rl))})(),(s,i)=>(h(),S(Y,R(L(y(Rl))),{default:C(()=>[Gq,Wq]),_:1},16))}},Kq=k(Uq,[["__file","/@slidev/slides/146.md"]]),Hl=g({title:"Backdrop Opacity",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),Yq=g({layout:c(()=>Hl.layout),transition:c(()=>Hl.transition),class:c(()=>Hl.class),clicks:c(()=>Hl.clicks),name:c(()=>Hl.name),preload:c(()=>Hl.preload),slide:{raw:"",title:"Backdrop Opacity",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:146,start:297,end:306,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Opacity
level: 2
layout: slim-table
---

### Backdrop Opacity
和背景滤镜配套的
`,title:"Backdrop Opacity",level:2,content:`### Backdrop Opacity
和背景滤镜配套的`,frontmatter:{title:"Backdrop Opacity",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:16,start:297,end:306},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Hl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:146,no:147},__clicksElements:[],__preloaded:!1}),Jq=n("h3",null,"Backdrop Opacity",-1),Zq=n("p",null,"和背景滤镜配套的",-1),Xq={__name:"147",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Hl;return A(I,Hl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Hl))})(),(s,i)=>(h(),S(Y,R(L(y(Hl))),{default:C(()=>[Jq,Zq]),_:1},16))}},Qq=k(Xq,[["__file","/@slidev/slides/147.md"]]),zl=g({title:"Backdrop Saturate",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),eV=g({layout:c(()=>zl.layout),transition:c(()=>zl.transition),class:c(()=>zl.class),clicks:c(()=>zl.clicks),name:c(()=>zl.name),preload:c(()=>zl.preload),slide:{raw:"",title:"Backdrop Saturate",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:147,start:306,end:315,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Saturate
level: 2
layout: slim-table
---

### Backdrop Saturate
和背景滤镜配套的
`,title:"Backdrop Saturate",level:2,content:`### Backdrop Saturate
和背景滤镜配套的`,frontmatter:{title:"Backdrop Saturate",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:17,start:306,end:315},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:zl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:147,no:148},__clicksElements:[],__preloaded:!1}),tV=n("h3",null,"Backdrop Saturate",-1),nV=n("p",null,"和背景滤镜配套的",-1),sV={__name:"148",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=zl;return A(I,zl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,zl))})(),(s,i)=>(h(),S(Y,R(L(y(zl))),{default:C(()=>[tV,nV]),_:1},16))}},lV=k(sV,[["__file","/@slidev/slides/148.md"]]),Nl=g({title:"Backdrop Sepia",level:2,layout:"slim-table",srcSequence:"./pages/009Filters.md"}),oV=g({layout:c(()=>Nl.layout),transition:c(()=>Nl.transition),class:c(()=>Nl.class),clicks:c(()=>Nl.clicks),name:c(()=>Nl.name),preload:c(()=>Nl.preload),slide:{raw:"",title:"Backdrop Sepia",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:148,start:315,end:324,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",raw:`---
title: Backdrop Sepia
level: 2
layout: slim-table
---

### Backdrop Sepia
和背景滤镜配套的
`,title:"Backdrop Sepia",level:2,content:`### Backdrop Sepia
和背景滤镜配套的`,frontmatter:{title:"Backdrop Sepia",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:18,start:315,end:324},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",noteHTML:"",frontmatter:Nl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\009Filters.md",id:148,no:149},__clicksElements:[],__preloaded:!1}),iV=n("h3",null,"Backdrop Sepia",-1),rV=n("p",null,"和背景滤镜配套的",-1),aV={__name:"149",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Nl;return A(I,Nl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Nl))})(),(s,i)=>(h(),S(Y,R(L(y(Nl))),{default:C(()=>[iV,rV]),_:1},16))}},cV=k(aV,[["__file","/@slidev/slides/149.md"]]),ql=g({title:"Tables",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/010Tables.md"}),dV=g({layout:c(()=>ql.layout),transition:c(()=>ql.transition),class:c(()=>ql.class),clicks:c(()=>ql.clicks),name:c(()=>ql.name),preload:c(()=>ql.preload),slide:{raw:"",title:"Tables",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:149,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`---
title: Tables
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Tables
`,title:"Tables",level:1,content:"## Tables",frontmatter:{title:"Tables",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/010Tables.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:13,start:92,end:96},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:ql,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:149,no:150},__clicksElements:[],__preloaded:!1}),uV=n("h2",null,"Tables",-1),fV={__name:"150",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ql;return A(I,ql),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ql))})(),(s,i)=>(h(),S(Pt,R(L(y(ql))),{default:C(()=>[uV]),_:1},16))}},pV=k(fV,[["__file","/@slidev/slides/150.md"]]),Vl=g({title:"Border Collapse",level:2,layout:"slim-table",srcSequence:"./pages/010Tables.md"}),mV=g({layout:c(()=>Vl.layout),transition:c(()=>Vl.transition),class:c(()=>Vl.class),clicks:c(()=>Vl.clicks),name:c(()=>Vl.name),preload:c(()=>Vl.preload),slide:{raw:"",title:"Border Collapse",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:150,start:9,end:68,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`---
title: Border Collapse
level: 2
layout: slim-table
---
### Border Collapse

用于控制表格边框是否应折叠或分离

使用 \`border-collapse\` 将相邻单元格边框合并为单个边框。请注意，这包括顶级 \`<table>\` 标记上的折叠边框。

<table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>

使用 \`border-separate\` 强制每个单元格显示自己单独的边框

<table class="border-separate border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
`,title:"Border Collapse",level:2,content:`### Border Collapse

用于控制表格边框是否应折叠或分离

使用 \`border-collapse\` 将相邻单元格边框合并为单个边框。请注意，这包括顶级 \`<table>\` 标记上的折叠边框。

<table class="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>

使用 \`border-separate\` 强制每个单元格显示自己单独的边框

<table class="border-separate border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>`,frontmatter:{title:"Border Collapse",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:68},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:Vl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:150,no:151},__clicksElements:[],__preloaded:!1}),hV=n("h3",null,"Border Collapse",-1),vV=n("p",null,"用于控制表格边框是否应折叠或分离",-1),gV=n("p",null,[H("使用 "),n("code",null,"border-collapse"),H(" 将相邻单元格边框合并为单个边框。请注意，这包括顶级 "),n("code",null,"<table>"),H(" 标记上的折叠边框。")],-1),_V=n("table",{class:"border-collapse border border-slate-400 ..."},[n("thead",null,[n("tr",null,[n("th",{class:"border border-slate-300 ..."},"State"),n("th",{class:"border border-slate-300 ..."},"City")])]),n("tbody",null,[n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Indiana"),n("td",{class:"border border-slate-300 ..."},"Indianapolis")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Ohio"),n("td",{class:"border border-slate-300 ..."},"Columbus")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Michigan"),n("td",{class:"border border-slate-300 ..."},"Detroit")])])],-1),yV=n("p",null,[H("使用 "),n("code",null,"border-separate"),H(" 强制每个单元格显示自己单独的边框")],-1),bV=n("table",{class:"border-separate border border-slate-400 ..."},[n("thead",null,[n("tr",null,[n("th",{class:"border border-slate-300 ..."},"State"),n("th",{class:"border border-slate-300 ..."},"City")])]),n("tbody",null,[n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Indiana"),n("td",{class:"border border-slate-300 ..."},"Indianapolis")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Ohio"),n("td",{class:"border border-slate-300 ..."},"Columbus")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Michigan"),n("td",{class:"border border-slate-300 ..."},"Detroit")])])],-1),wV={__name:"151",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Vl;return A(I,Vl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Vl))})(),(s,i)=>(h(),S(Y,R(L(y(Vl))),{default:C(()=>[hV,vV,gV,_V,yV,bV]),_:1},16))}},xV=k(wV,[["__file","/@slidev/slides/151.md"]]),Gl=g({title:"Border Spacing",level:2,layout:"slim-table",srcSequence:"./pages/010Tables.md"}),kV=g({layout:c(()=>Gl.layout),transition:c(()=>Gl.transition),class:c(()=>Gl.class),clicks:c(()=>Gl.clicks),name:c(()=>Gl.name),preload:c(()=>Gl.preload),slide:{raw:"",title:"Border Spacing",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:151,start:68,end:100,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`---
title: Border Spacing
level: 2
layout: slim-table
---

### Border Spacing
可以设置边框间距  

<table class="border-separate border-spacing-2 border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
`,title:"Border Spacing",level:2,content:`### Border Spacing
可以设置边框间距  

<table class="border-separate border-spacing-2 border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>`,frontmatter:{title:"Border Spacing",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:68,end:100},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:Gl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:151,no:152},__clicksElements:[],__preloaded:!1}),$V=n("h3",null,"Border Spacing",-1),SV=n("p",null,"可以设置边框间距",-1),jV=n("table",{class:"border-separate border-spacing-2 border border-slate-400 ..."},[n("thead",null,[n("tr",null,[n("th",{class:"border border-slate-300 ..."},"State"),n("th",{class:"border border-slate-300 ..."},"City")])]),n("tbody",null,[n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Indiana"),n("td",{class:"border border-slate-300 ..."},"Indianapolis")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Ohio"),n("td",{class:"border border-slate-300 ..."},"Columbus")]),n("tr",null,[n("td",{class:"border border-slate-300 ..."},"Michigan"),n("td",{class:"border border-slate-300 ..."},"Detroit")])])],-1),PV={__name:"152",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Gl;return A(I,Gl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Gl))})(),(s,i)=>(h(),S(Y,R(L(y(Gl))),{default:C(()=>[$V,SV,jV]),_:1},16))}},TV=k(PV,[["__file","/@slidev/slides/152.md"]]),Wl=g({title:"Table Layout",level:2,layout:"slim-table",srcSequence:"./pages/010Tables.md"}),CV=g({layout:c(()=>Wl.layout),transition:c(()=>Wl.transition),class:c(()=>Wl.class),clicks:c(()=>Wl.clicks),name:c(()=>Wl.name),preload:c(()=>Wl.preload),slide:{raw:"",title:"Table Layout",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:152,start:100,end:170,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`---
title: Table Layout
level: 2
layout: slim-table
---

### Table Layout

| Class       | Properties           |
| ----------- | -------------------- |
| table-auto  | table-layout: auto;  |
| table-fixed | table-layout: fixed; |

使用 \`table-auto\` 允许表格自动调整列大小以适合单元格的内容。

<table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

使用 \`table-fixed\` 允许表格忽略内容并使用固定的列宽度。第一行的宽度将设置整个表格的列宽度。
<table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
`,title:"Table Layout",level:2,content:`### Table Layout

| Class       | Properties           |
| ----------- | -------------------- |
| table-auto  | table-layout: auto;  |
| table-fixed | table-layout: fixed; |

使用 \`table-auto\` 允许表格自动调整列大小以适合单元格的内容。

<table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

使用 \`table-fixed\` 允许表格忽略内容并使用固定的列宽度。第一行的宽度将设置整个表格的列宽度。
<table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>`,frontmatter:{title:"Table Layout",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:100,end:170},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:Wl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:152,no:153},__clicksElements:[],__preloaded:!1}),EV=n("h3",null,"Table Layout",-1),AV=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"table-auto"),n("td",null,"table-layout: auto;")]),n("tr",null,[n("td",null,"table-fixed"),n("td",null,"table-layout: fixed;")])])],-1),OV=n("p",null,[H("使用 "),n("code",null,"table-auto"),H(" 允许表格自动调整列大小以适合单元格的内容。")],-1),DV=n("table",{class:"table-auto"},[n("thead",null,[n("tr",null,[n("th",null,"Song"),n("th",null,"Artist"),n("th",null,"Year")])]),n("tbody",null,[n("tr",null,[n("td",null,"The Sliding Mr. Bones (Next Stop, Pottersville)"),n("td",null,"Malcolm Lockyer"),n("td",null,"1961")]),n("tr",null,[n("td",null,"Witchy Woman"),n("td",null,"The Eagles"),n("td",null,"1972")]),n("tr",null,[n("td",null,"Shining Star"),n("td",null,"Earth, Wind, and Fire"),n("td",null,"1975")])])],-1),BV=n("p",null,[H("使用 "),n("code",null,"table-fixed"),H(" 允许表格忽略内容并使用固定的列宽度。第一行的宽度将设置整个表格的列宽度。")],-1),MV=n("table",{class:"table-fixed"},[n("thead",null,[n("tr",null,[n("th",null,"Song"),n("th",null,"Artist"),n("th",null,"Year")])]),n("tbody",null,[n("tr",null,[n("td",null,"The Sliding Mr. Bones (Next Stop, Pottersville)"),n("td",null,"Malcolm Lockyer"),n("td",null,"1961")]),n("tr",null,[n("td",null,"Witchy Woman"),n("td",null,"The Eagles"),n("td",null,"1972")]),n("tr",null,[n("td",null,"Shining Star"),n("td",null,"Earth, Wind, and Fire"),n("td",null,"1975")])])],-1),FV={__name:"153",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Wl;return A(I,Wl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Wl))})(),(s,i)=>(h(),S(Y,R(L(y(Wl))),{default:C(()=>[EV,AV,OV,DV,BV,MV]),_:1},16))}},IV=k(FV,[["__file","/@slidev/slides/153.md"]]),Ul=g({title:"Caption Side",level:2,layout:"slim-table",srcSequence:"./pages/010Tables.md"}),LV=g({layout:c(()=>Ul.layout),transition:c(()=>Ul.transition),class:c(()=>Ul.class),clicks:c(()=>Ul.clicks),name:c(()=>Ul.name),preload:c(()=>Ul.preload),slide:{raw:"",title:"Caption Side",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:153,start:170,end:212,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`---
title: Caption Side
level: 2
layout: slim-table
---
### Caption Side

| Class          | Properties            |
| -------------- | --------------------- |
| caption-top    | caption-side: top;    |
| caption-bottom | caption-side: bottom; |

这个属性设置表格标题的位置

caption-top

<table>
  <caption class="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td >The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
`,title:"Caption Side",level:2,content:`### Caption Side

| Class          | Properties            |
| -------------- | --------------------- |
| caption-top    | caption-side: top;    |
| caption-bottom | caption-side: bottom; |

这个属性设置表格标题的位置

caption-top

<table>
  <caption class="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td >The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>`,frontmatter:{title:"Caption Side",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:4,start:170,end:212},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:Ul,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:153,no:154},__clicksElements:[],__preloaded:!1}),RV=n("h3",null,"Caption Side",-1),HV=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"caption-top"),n("td",null,"caption-side: top;")]),n("tr",null,[n("td",null,"caption-bottom"),n("td",null,"caption-side: bottom;")])])],-1),zV=n("p",null,"这个属性设置表格标题的位置",-1),NV=n("p",null,"caption-top",-1),qV=n("table",null,[n("caption",{class:"caption-top"}," Table 3.1: Professional wrestlers and their signature moves. "),n("thead",null,[n("tr",null,[n("th",null,"Wrestler"),n("th",null,"Signature Move(s)")])]),n("tbody",null,[n("tr",null,[n("td",null,'"Stone Cold" Steve Austin'),n("td",null,"Stone Cold Stunner, Lou Thesz Press")]),n("tr",null,[n("td",null,'Bret "The Hitman" Hart'),n("td",null,"The Sharpshooter")]),n("tr",null,[n("td",null,"Razor Ramon"),n("td",null,"Razor's Edge, Fallaway Slam")])])],-1),VV={__name:"154",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ul;return A(I,Ul),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ul))})(),(s,i)=>(h(),S(Y,R(L(y(Ul))),{default:C(()=>[RV,HV,zV,NV,qV]),_:1},16))}},GV=k(VV,[["__file","/@slidev/slides/154.md"]]),Kl=g({srcSequence:"./pages/010Tables.md"}),WV=g({layout:c(()=>Kl.layout),transition:c(()=>Kl.transition),class:c(()=>Kl.class),clicks:c(()=>Kl.clicks),name:c(()=>Kl.name),preload:c(()=>Kl.preload),slide:{raw:"",content:"",note:"",index:154,start:213,end:242,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",raw:`
caption-bottom

<table>
  <caption class="caption-bottom">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td >The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
`,content:`caption-bottom

<table>
  <caption class="caption-bottom">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td >The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>`,frontmatter:{},index:5,start:213,end:242},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",noteHTML:"",frontmatter:Kl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\010Tables.md",id:154,no:155},__clicksElements:[],__preloaded:!1}),UV=n("p",null,"caption-bottom",-1),KV=n("table",null,[n("caption",{class:"caption-bottom"}," Table 3.1: Professional wrestlers and their signature moves. "),n("thead",null,[n("tr",null,[n("th",null,"Wrestler"),n("th",null,"Signature Move(s)")])]),n("tbody",null,[n("tr",null,[n("td",null,'"Stone Cold" Steve Austin'),n("td",null,"Stone Cold Stunner, Lou Thesz Press")]),n("tr",null,[n("td",null,'Bret "The Hitman" Hart'),n("td",null,"The Sharpshooter")]),n("tr",null,[n("td",null,"Razor Ramon"),n("td",null,"Razor's Edge, Fallaway Slam")])])],-1),YV={__name:"155",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Kl;return A(I,Kl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Kl))})(),(s,i)=>(h(),S(he,R(L(y(Kl))),{default:C(()=>[UV,KV]),_:1},16))}},JV=k(YV,[["__file","/@slidev/slides/155.md"]]),Yl=g({title:"Transitions & Animation",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/011TransitionAndAnimation.md"}),ZV=g({layout:c(()=>Yl.layout),transition:c(()=>Yl.transition),class:c(()=>Yl.class),clicks:c(()=>Yl.clicks),name:c(()=>Yl.name),preload:c(()=>Yl.preload),slide:{raw:"",title:"Transitions & Animation",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:155,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Transitions & Animation
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Transitions & Animation
`,title:"Transitions & Animation",level:1,content:"## Transitions & Animation",frontmatter:{title:"Transitions & Animation",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/011TransitionAndAnimation.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:14,start:96,end:100},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:Yl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:155,no:156},__clicksElements:[],__preloaded:!1}),XV=n("h2",null,"Transitions & Animation",-1),QV={__name:"156",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Yl;return A(I,Yl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Yl))})(),(s,i)=>(h(),S(Pt,R(L(y(Yl))),{default:C(()=>[XV]),_:1},16))}},eG=k(QV,[["__file","/@slidev/slides/156.md"]]),Jl=g({title:"Transition Property",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/011TransitionAndAnimation.md"}),tG=g({layout:c(()=>Jl.layout),transition:c(()=>Jl.transition),class:c(()=>Jl.class),clicks:c(()=>Jl.clicks),name:c(()=>Jl.name),preload:c(()=>Jl.preload),slide:{raw:"",title:"Transition Property",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:156,start:9,end:30,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Transition Property
level: 2
layout: slim-table
tableSize: small
---

### Transition Property

过度动画有多种属性可以设置  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| transition-none      | transition-property: none;                                   |
| transition-all       | transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-colors    | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-opacity   | transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-shadow    | transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-transform | transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
`,title:"Transition Property",level:2,content:`### Transition Property

过度动画有多种属性可以设置  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| transition-none      | transition-property: none;                                   |
| transition-all       | transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-colors    | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-opacity   | transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-shadow    | transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-transform | transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |`,frontmatter:{title:"Transition Property",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:1,start:9,end:30},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:Jl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:156,no:157},__clicksElements:[],__preloaded:!1}),nG=n("h3",null,"Transition Property",-1),sG=n("p",null,"过度动画有多种属性可以设置",-1),lG=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"transition-none"),n("td",null,"transition-property: none;")]),n("tr",null,[n("td",null,"transition-all"),n("td",null,"transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")]),n("tr",null,[n("td",null,"transition"),n("td",null,"transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")]),n("tr",null,[n("td",null,"transition-colors"),n("td",null,"transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")]),n("tr",null,[n("td",null,"transition-opacity"),n("td",null,"transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")]),n("tr",null,[n("td",null,"transition-shadow"),n("td",null,"transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")]),n("tr",null,[n("td",null,"transition-transform"),n("td",null,"transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;")])])],-1),oG={__name:"157",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Jl;return A(I,Jl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Jl))})(),(s,i)=>(h(),S(Y,R(L(y(Jl))),{default:C(()=>[nG,sG,lG]),_:1},16))}},iG=k(oG,[["__file","/@slidev/slides/157.md"]]),Zl=g({srcSequence:"./pages/011TransitionAndAnimation.md"}),rG=g({layout:c(()=>Zl.layout),transition:c(()=>Zl.transition),class:c(()=>Zl.class),clicks:c(()=>Zl.clicks),name:c(()=>Zl.name),preload:c(()=>Zl.preload),slide:{raw:"",content:"",note:"",index:157,start:31,end:107,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`
给按钮添加颜色过渡动画  

<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white">
  Save Changes
</button>

prefers-reduced-motion是媒体查询，当用户设备上开启了减少动画的设置时，就会匹配到。

<CanIUse src="https://caniuse.com/prefers-reduced-motion" buttonText="can I use prefers-reduced-motion"/>  
<br/>  
<button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-5 ">
  Hover me
</button>

比如下面这个例子，可能会让患有前庭运动障碍的患者感到不适。可能就是所谓的晕3D吧
用户设置了减少动画以后，通过媒体查询匹配到，就可以减少动画，提升这部分用户的体验

<div class="animation">animated box</div>

<style>
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}

.animation {
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

</style>
`,content:`给按钮添加颜色过渡动画  

<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white">
  Save Changes
</button>

prefers-reduced-motion是媒体查询，当用户设备上开启了减少动画的设置时，就会匹配到。

<CanIUse src="https://caniuse.com/prefers-reduced-motion" buttonText="can I use prefers-reduced-motion"/>  
<br/>  
<button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-5 ">
  Hover me
</button>

比如下面这个例子，可能会让患有前庭运动障碍的患者感到不适。可能就是所谓的晕3D吧
用户设置了减少动画以后，通过媒体查询匹配到，就可以减少动画，提升这部分用户的体验

<div class="animation">animated box</div>

<style>
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}

.animation {
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

</style>`,frontmatter:{},index:2,start:31,end:107},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:Zl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:157,no:158},__clicksElements:[],__preloaded:!1}),_r=e=>(Dt("data-v-64a755ff"),e=e(),Bt(),e),aG=_r(()=>n("p",null,"给按钮添加颜色过渡动画",-1)),cG=_r(()=>n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white"}," Save Changes ",-1)),dG=_r(()=>n("p",null,"prefers-reduced-motion是媒体查询，当用户设备上开启了减少动画的设置时，就会匹配到。",-1)),uG=_r(()=>n("br",null,null,-1)),fG=_r(()=>n("button",{class:"transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-5"}," Hover me ",-1)),pG=_r(()=>n("p",null,"比如下面这个例子，可能会让患有前庭运动障碍的患者感到不适。可能就是所谓的晕3D吧 用户设置了减少动画以后，通过媒体查询匹配到，就可以减少动画，提升这部分用户的体验",-1)),mG=_r(()=>n("div",{class:"animation"},"animated box",-1)),hG={__name:"158",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Zl;return A(I,Zl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Zl))})(),(s,i)=>{const a=gr;return h(),S(he,R(L(y(Zl))),{default:C(()=>[aG,cG,dG,Z(a,{src:"https://caniuse.com/prefers-reduced-motion",buttonText:"can I use prefers-reduced-motion"}),H(),uG,fG,pG,mG]),_:1},16)}}},vG=k(hG,[["__scopeId","data-v-64a755ff"],["__file","/@slidev/slides/158.md"]]),Xl=g({title:"Transition Duration",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/011TransitionAndAnimation.md"}),gG=g({layout:c(()=>Xl.layout),transition:c(()=>Xl.transition),class:c(()=>Xl.class),clicks:c(()=>Xl.clicks),name:c(()=>Xl.name),preload:c(()=>Xl.preload),slide:{raw:"",title:"Transition Duration",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:158,start:107,end:129,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Transition Duration
level: 2
layout: slim-table
tableSize: small
---

### Transition Duration
过渡动画持续时间

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-150 ">
Button A
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
Button B
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-700 ">
Button C
</button>
</div>
`,title:"Transition Duration",level:2,content:`### Transition Duration
过渡动画持续时间

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-150 ">
Button A
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
Button B
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-700 ">
Button C
</button>
</div>`,frontmatter:{title:"Transition Duration",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:3,start:107,end:129},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:Xl,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:158,no:159},__clicksElements:[],__preloaded:!1}),_G=n("h3",null,"Transition Duration",-1),yG=n("p",null,"过渡动画持续时间",-1),bG=n("div",{class:"space-x-5"},[n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-150"}," Button A "),n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," Button B "),n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-700"}," Button C ")],-1),wG={__name:"159",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Xl;return A(I,Xl),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Xl))})(),(s,i)=>(h(),S(Y,R(L(y(Xl))),{default:C(()=>[_G,yG,bG]),_:1},16))}},xG=k(wG,[["__file","/@slidev/slides/159.md"]]),Ql=g({title:"Transition Timing Function",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/011TransitionAndAnimation.md"}),kG=g({layout:c(()=>Ql.layout),transition:c(()=>Ql.transition),class:c(()=>Ql.class),clicks:c(()=>Ql.clicks),name:c(()=>Ql.name),preload:c(()=>Ql.preload),slide:{raw:"",title:"Transition Timing Function",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:159,start:129,end:159,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Transition Timing Function
level: 2
layout: slim-table
tableSize: small
---

### Transition Timing Function

时间函数  

| Class       | Properties                                                |
| ----------- | --------------------------------------------------------- |
| ease-linear | transition-timing-function: linear;                       |
| ease-in     | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| ease-out    | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

<div class="space-x-5">
<button class="transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in
</button>
<button class="transition ease-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-out
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in-out
</button>
</div>
`,title:"Transition Timing Function",level:2,content:`### Transition Timing Function

时间函数  

| Class       | Properties                                                |
| ----------- | --------------------------------------------------------- |
| ease-linear | transition-timing-function: linear;                       |
| ease-in     | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| ease-out    | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

<div class="space-x-5">
<button class="transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in
</button>
<button class="transition ease-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-out
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in-out
</button>
</div>`,frontmatter:{title:"Transition Timing Function",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:4,start:129,end:159},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:Ql,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:159,no:160},__clicksElements:[],__preloaded:!1}),$G=n("h3",null,"Transition Timing Function",-1),SG=n("p",null,"时间函数",-1),jG=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"ease-linear"),n("td",null,"transition-timing-function: linear;")]),n("tr",null,[n("td",null,"ease-in"),n("td",null,"transition-timing-function: cubic-bezier(0.4, 0, 1, 1);")]),n("tr",null,[n("td",null,"ease-out"),n("td",null,"transition-timing-function: cubic-bezier(0, 0, 0.2, 1);")]),n("tr",null,[n("td",null,"ease-in-out"),n("td",null,"transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);")])])],-1),PG=n("div",{class:"space-x-5"},[n("button",{class:"transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," ease-in "),n("button",{class:"transition ease-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," ease-out "),n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," ease-in-out ")],-1),TG={__name:"160",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Ql;return A(I,Ql),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Ql))})(),(s,i)=>(h(),S(Y,R(L(y(Ql))),{default:C(()=>[$G,SG,jG,PG]),_:1},16))}},CG=k(TG,[["__file","/@slidev/slides/160.md"]]),eo=g({title:"Transition Delay",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/011TransitionAndAnimation.md"}),EG=g({layout:c(()=>eo.layout),transition:c(()=>eo.transition),class:c(()=>eo.class),clicks:c(()=>eo.clicks),name:c(()=>eo.name),preload:c(()=>eo.preload),slide:{raw:"",title:"Transition Delay",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:160,start:159,end:182,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Transition Delay
level: 2
layout: slim-table
tableSize: small
---

### Transition Delay

过渡动画延迟  

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-150
</button>
<button class="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-300
</button>
<button class="transition ease-in-out delay-700 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-700
</button>
</div>
`,title:"Transition Delay",level:2,content:`### Transition Delay

过渡动画延迟  

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-150
</button>
<button class="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-300
</button>
<button class="transition ease-in-out delay-700 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-700
</button>
</div>`,frontmatter:{title:"Transition Delay",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:5,start:159,end:182},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:eo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:160,no:161},__clicksElements:[],__preloaded:!1}),AG=n("h3",null,"Transition Delay",-1),OG=n("p",null,"过渡动画延迟",-1),DG=n("div",{class:"space-x-5"},[n("button",{class:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," delay-150 "),n("button",{class:"transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," delay-300 "),n("button",{class:"transition ease-in-out delay-700 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300"}," delay-700 ")],-1),BG={__name:"161",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=eo;return A(I,eo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,eo))})(),(s,i)=>(h(),S(Y,R(L(y(eo))),{default:C(()=>[AG,OG,DG]),_:1},16))}},MG=k(BG,[["__file","/@slidev/slides/161.md"]]),to=g({title:"Animation",level:2,layout:"slim-table",tableSize:"small",srcSequence:"./pages/011TransitionAndAnimation.md"}),FG=g({layout:c(()=>to.layout),transition:c(()=>to.transition),class:c(()=>to.class),clicks:c(()=>to.clicks),name:c(()=>to.name),preload:c(()=>to.preload),slide:{raw:"",title:"Animation",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:161,start:182,end:211,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`---
title: Animation
level: 2
layout: slim-table
tableSize: small
---

### Animation

内置了一些实用的动画样式  

| Class          | Properties                                                   |
| -------------- | ------------------------------------------------------------ |
| animate-none   | animation: none;                                             |
| animate-spin   | \`animation: spin 1s linear infinite; @keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  } }\` |
| animate-ping   | \`animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  } }\` |
| animate-pulse  | \`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  } }\` |
| animate-bounce | \`animation: bounce 1s infinite; @keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } }\`|

动画默认都是1s  
animate-spin  

<button type="button" class="bg-indigo-500 flex p-2 rounded-lg text-white space-x-2" disabled>
<div class="animate-spin w-[30px] aspect-square  rounded-50 border-[6px] border-solid relative">
<div class="absolute top-[-6px] h-[6px] w-full rounded-full bg-red"></div>
</div>
  <div>Processing...</div>
</button>
`,title:"Animation",level:2,content:`### Animation

内置了一些实用的动画样式  

| Class          | Properties                                                   |
| -------------- | ------------------------------------------------------------ |
| animate-none   | animation: none;                                             |
| animate-spin   | \`animation: spin 1s linear infinite; @keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  } }\` |
| animate-ping   | \`animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  } }\` |
| animate-pulse  | \`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  } }\` |
| animate-bounce | \`animation: bounce 1s infinite; @keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } }\`|

动画默认都是1s  
animate-spin  

<button type="button" class="bg-indigo-500 flex p-2 rounded-lg text-white space-x-2" disabled>
<div class="animate-spin w-[30px] aspect-square  rounded-50 border-[6px] border-solid relative">
<div class="absolute top-[-6px] h-[6px] w-full rounded-full bg-red"></div>
</div>
  <div>Processing...</div>
</button>`,frontmatter:{title:"Animation",level:2,layout:"slim-table",tableSize:"small"},frontmatterStyle:"frontmatter",index:6,start:182,end:211},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:to,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:161,no:162},__clicksElements:[],__preloaded:!1}),IG=n("h3",null,"Animation",-1),LG=n("p",null,"内置了一些实用的动画样式",-1),RG=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"animate-none"),n("td",null,"animation: none;")]),n("tr",null,[n("td",null,"animate-spin"),n("td",null,[n("code",null,"animation: spin 1s linear infinite; @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }")])]),n("tr",null,[n("td",null,"animate-ping"),n("td",null,[n("code",null,"animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }")])]),n("tr",null,[n("td",null,"animate-pulse"),n("td",null,[n("code",null,"animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }")])]),n("tr",null,[n("td",null,"animate-bounce"),n("td",null,[n("code",null,"animation: bounce 1s infinite; @keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }")])])])],-1),HG=n("p",null,[H("动画默认都是1s"),n("br"),H(" animate-spin")],-1),zG=n("button",{type:"button",class:"bg-indigo-500 flex p-2 rounded-lg text-white space-x-2",disabled:""},[n("div",{class:"animate-spin w-[30px] aspect-square rounded-50 border-[6px] border-solid relative"},[n("div",{class:"absolute top-[-6px] h-[6px] w-full rounded-full bg-red"})]),n("div",null,"Processing...")],-1),NG={__name:"162",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=to;return A(I,to),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,to))})(),(s,i)=>(h(),S(Y,R(L(y(to))),{default:C(()=>[IG,LG,RG,HG,zG]),_:1},16))}},qG=k(NG,[["__file","/@slidev/slides/162.md"]]),no=g({srcSequence:"./pages/011TransitionAndAnimation.md"}),VG=g({layout:c(()=>no.layout),transition:c(()=>no.transition),class:c(()=>no.class),clicks:c(()=>no.clicks),name:c(()=>no.name),preload:c(()=>no.preload),slide:{raw:"",content:"",note:"",index:162,start:212,end:238,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",raw:`
animate-ping  

<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

animate-pulse 淡入淡出，对骨架屏比较实用  

<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
`,content:`animate-ping  

<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

animate-pulse 淡入淡出，对骨架屏比较实用  

<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>`,frontmatter:{},index:7,start:212,end:238},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",noteHTML:"",frontmatter:no,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\011TransitionAndAnimation.md",id:162,no:163},__clicksElements:[],__preloaded:!1}),GG=n("p",null,"animate-ping",-1),WG=n("span",{class:"relative flex h-3 w-3"},[n("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})],-1),UG=n("p",null,"animate-pulse 淡入淡出，对骨架屏比较实用",-1),KG=n("div",{class:"border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},[n("div",{class:"animate-pulse flex space-x-4"},[n("div",{class:"rounded-full bg-slate-200 h-10 w-10"}),n("div",{class:"flex-1 space-y-6 py-1"},[n("div",{class:"h-2 bg-slate-200 rounded"}),n("div",{class:"space-y-3"},[n("div",{class:"grid grid-cols-3 gap-4"},[n("div",{class:"h-2 bg-slate-200 rounded col-span-2"}),n("div",{class:"h-2 bg-slate-200 rounded col-span-1"})]),n("div",{class:"h-2 bg-slate-200 rounded"})])])])],-1),YG={__name:"163",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=no;return A(I,no),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,no))})(),(s,i)=>(h(),S(he,R(L(y(no))),{default:C(()=>[GG,WG,UG,KG]),_:1},16))}},JG=k(YG,[["__file","/@slidev/slides/163.md"]]),so=g({title:"Transform",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/012Transforms.md"}),ZG=g({layout:c(()=>so.layout),transition:c(()=>so.transition),class:c(()=>so.class),clicks:c(()=>so.clicks),name:c(()=>so.name),preload:c(()=>so.preload),slide:{raw:"",title:"Transform",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:163,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",raw:`---
title: Transform
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Transform
`,title:"Transform",level:1,content:"## Transform",frontmatter:{title:"Transform",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/012Transforms.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:15,start:100,end:104},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",noteHTML:"",frontmatter:so,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",id:163,no:164},__clicksElements:[],__preloaded:!1}),XG=n("h2",null,"Transform",-1),QG={__name:"164",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=so;return A(I,so),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,so))})(),(s,i)=>(h(),S(Pt,R(L(y(so))),{default:C(()=>[XG]),_:1},16))}},eW=k(QG,[["__file","/@slidev/slides/164.md"]]),lo=g({title:"Scale",level:2,layout:"slim-table",srcSequence:"./pages/012Transforms.md"}),tW=g({layout:c(()=>lo.layout),transition:c(()=>lo.transition),class:c(()=>lo.class),clicks:c(()=>lo.clicks),name:c(()=>lo.name),preload:c(()=>lo.preload),slide:{raw:"",title:"Scale",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:164,start:9,end:20,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",raw:`---
title: Scale
level: 2
layout: slim-table
---
### Scale

缩放，旋转，位移，倾斜
依次是 Scale，Rotate，Translate，Skew
感觉不用多说了。
`,title:"Scale",level:2,content:`### Scale

缩放，旋转，位移，倾斜
依次是 Scale，Rotate，Translate，Skew
感觉不用多说了。`,frontmatter:{title:"Scale",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:20},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",noteHTML:"",frontmatter:lo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",id:164,no:165},__clicksElements:[],__preloaded:!1}),nW=n("h3",null,"Scale",-1),sW=n("p",null,"缩放，旋转，位移，倾斜 依次是 Scale，Rotate，Translate，Skew 感觉不用多说了。",-1),lW={__name:"165",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=lo;return A(I,lo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,lo))})(),(s,i)=>(h(),S(Y,R(L(y(lo))),{default:C(()=>[nW,sW]),_:1},16))}},oW=k(lW,[["__file","/@slidev/slides/165.md"]]),oo=g({title:"Transform Origin",level:2,layout:"slim-table",srcSequence:"./pages/012Transforms.md"}),iW=g({layout:c(()=>oo.layout),transition:c(()=>oo.transition),class:c(()=>oo.class),clicks:c(()=>oo.clicks),name:c(()=>oo.name),preload:c(()=>oo.preload),slide:{raw:"",title:"Transform Origin",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:165,start:20,end:45,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",raw:`---
title: Transform Origin
level: 2
layout: slim-table
---

### Transform Origin  

变形原点，对旋转影响比较大  

<div class="flex [&_div]:w-[180px] space-x-20">
<div class="">
 <p>origin-center</p>
 <img class="origin-center rotate-45 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>origin-top-left</p>
 <img class="origin-top-left rotate-12 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>origin-bottom</p>
 <img class="origin-bottom -rotate-12 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>
`,title:"Transform Origin",level:2,content:`### Transform Origin  

变形原点，对旋转影响比较大  

<div class="flex [&_div]:w-[180px] space-x-20">
<div class="">
 <p>origin-center</p>
 <img class="origin-center rotate-45 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class="">
 <p>origin-top-left</p>
 <img class="origin-top-left rotate-12 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
<div class=" ...">
<p>origin-bottom</p>
 <img class="origin-bottom -rotate-12 object-cover h-48 w-96"  alt="mountain" src="/assets/dust-mountain.avif" />
</div>
</div>`,frontmatter:{title:"Transform Origin",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:20,end:45},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",noteHTML:"",frontmatter:oo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\012Transforms.md",id:165,no:166},__clicksElements:[],__preloaded:!1}),rW=n("h3",null,"Transform Origin",-1),aW=n("p",null,"变形原点，对旋转影响比较大",-1),cW=n("div",{class:"flex [&_div]:w-[180px] space-x-20"},[n("div",{class:""},[n("p",null,"origin-center"),n("img",{class:"origin-center rotate-45 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:""},[n("p",null,"origin-top-left"),n("img",{class:"origin-top-left rotate-12 object-cover h-48 w-96",alt:"mountain",src:Ce})]),n("div",{class:"..."},[n("p",null,"origin-bottom"),n("img",{class:"origin-bottom -rotate-12 object-cover h-48 w-96",alt:"mountain",src:Ce})])],-1),dW={__name:"166",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=oo;return A(I,oo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,oo))})(),(s,i)=>(h(),S(Y,R(L(y(oo))),{default:C(()=>[rW,aW,cW]),_:1},16))}},uW=k(dW,[["__file","/@slidev/slides/166.md"]]),io=g({title:"Interactivity",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/013Interactivity.md"}),fW=g({layout:c(()=>io.layout),transition:c(()=>io.transition),class:c(()=>io.class),clicks:c(()=>io.clicks),name:c(()=>io.name),preload:c(()=>io.preload),slide:{raw:"",title:"Interactivity",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:166,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Interactivity
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Interactivity
`,title:"Interactivity",level:1,content:"## Interactivity",frontmatter:{title:"Interactivity",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/013Interactivity.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:16,start:104,end:108},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:io,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:166,no:167},__clicksElements:[],__preloaded:!1}),pW=n("h2",null,"Interactivity",-1),mW={__name:"167",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=io;return A(I,io),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,io))})(),(s,i)=>(h(),S(Pt,R(L(y(io))),{default:C(()=>[pW]),_:1},16))}},hW=k(mW,[["__file","/@slidev/slides/167.md"]]),ro=g({title:"Accent Color",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),vW=g({layout:c(()=>ro.layout),transition:c(()=>ro.transition),class:c(()=>ro.class),clicks:c(()=>ro.clicks),name:c(()=>ro.name),preload:c(()=>ro.preload),slide:{raw:"",title:"Accent Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:167,start:9,end:29,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Accent Color
level: 2
layout: slim-table
---
### Accent Color

### 强调色
用于控制表单控件的强调色 兼容性还不行 93% 2021年chrome才发布这个属性
<CanIUseCssProperty cssProperty="accent-color" />  

使用 \`accent-{color}\` 更改元素的强调色。这对于通过覆盖浏览器的默认颜色来设置复选框和单选按钮组等元素的样式很有帮助。  

<label>
  <input type="checkbox" checked> Browser default
</label>
<label>
  <input type="checkbox" class="accent-pink-500" checked> Customized
</label>
`,title:"Accent Color",level:2,content:`### Accent Color

### 强调色
用于控制表单控件的强调色 兼容性还不行 93% 2021年chrome才发布这个属性
<CanIUseCssProperty cssProperty="accent-color" />  

使用 \`accent-{color}\` 更改元素的强调色。这对于通过覆盖浏览器的默认颜色来设置复选框和单选按钮组等元素的样式很有帮助。  

<label>
  <input type="checkbox" checked> Browser default
</label>
<label>
  <input type="checkbox" class="accent-pink-500" checked> Customized
</label>`,frontmatter:{title:"Accent Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:29},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:ro,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:167,no:168},__clicksElements:[],__preloaded:!1}),gW=n("h3",null,"Accent Color",-1),_W=n("h3",null,"强调色",-1),yW=n("p",null,"用于控制表单控件的强调色 兼容性还不行 93% 2021年chrome才发布这个属性",-1),bW=n("p",null,[H("使用 "),n("code",null,"accent-{color}"),H(" 更改元素的强调色。这对于通过覆盖浏览器的默认颜色来设置复选框和单选按钮组等元素的样式很有帮助。")],-1),wW=n("label",null,[n("input",{type:"checkbox",checked:""}),H(" Browser default ")],-1),xW=n("label",null,[n("input",{type:"checkbox",class:"accent-pink-500",checked:""}),H(" Customized ")],-1),kW={__name:"168",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ro;return A(I,ro),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ro))})(),(s,i)=>{const a=La;return h(),S(Y,R(L(y(ro))),{default:C(()=>[gW,_W,yW,Z(a,{cssProperty:"accent-color"}),H(),bW,wW,xW]),_:1},16)}}},$W=k(kW,[["__file","/@slidev/slides/168.md"]]),ao=g({title:"Appearance",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),SW=g({layout:c(()=>ao.layout),transition:c(()=>ao.transition),class:c(()=>ao.class),clicks:c(()=>ao.clicks),name:c(()=>ao.name),preload:c(()=>ao.preload),slide:{raw:"",title:"Appearance",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:168,start:29,end:58,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Appearance
level: 2

layout: slim-table
---
### Appearance

| Class           | Properties        |
| --------------- | ----------------- |
| appearance-none | appearance: none; |
| appearance-auto | appearance: auto; |

用于抑制本机表单控制样式  

使用 \`appearance-none\` 重置元素上任何浏览器特定的样式。创建自定义表单组件时经常使用此实用程序。

<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>

  <select class="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>
`,title:"Appearance",level:2,content:`### Appearance

| Class           | Properties        |
| --------------- | ----------------- |
| appearance-none | appearance: none; |
| appearance-auto | appearance: auto; |

用于抑制本机表单控制样式  

使用 \`appearance-none\` 重置元素上任何浏览器特定的样式。创建自定义表单组件时经常使用此实用程序。

<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>

  <select class="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>`,frontmatter:{title:"Appearance",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:29,end:58},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:ao,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:168,no:169},__clicksElements:[],__preloaded:!1}),jW=n("h3",null,"Appearance",-1),PW=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"appearance-none"),n("td",null,"appearance: none;")]),n("tr",null,[n("td",null,"appearance-auto"),n("td",null,"appearance: auto;")])])],-1),TW=n("p",null,"用于抑制本机表单控制样式",-1),CW=n("p",null,[H("使用 "),n("code",null,"appearance-none"),H(" 重置元素上任何浏览器特定的样式。创建自定义表单组件时经常使用此实用程序。")],-1),EW=n("select",null,[n("option",null,"Yes"),n("option",null,"No"),n("option",null,"Maybe")],-1),AW=n("select",{class:"appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ..."},[n("option",null,"Yes"),n("option",null,"No"),n("option",null,"Maybe")],-1),OW={__name:"169",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ao;return A(I,ao),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ao))})(),(s,i)=>(h(),S(Y,R(L(y(ao))),{default:C(()=>[jW,PW,TW,CW,EW,AW]),_:1},16))}},DW=k(OW,[["__file","/@slidev/slides/169.md"]]),BW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-auto.svg",MW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-default.svg",FW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-pointer.svg",IW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-wait.svg",LW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-text.svg",RW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-move.svg",HW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-help.svg",zW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-not-allowed.svg",NW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-context-menu.svg",qW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-progress.svg",VW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-cell.svg",GW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-crosshair.svg",WW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-vertical-text.svg",UW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-alias.svg",KW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-copy.svg",YW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-no-drop.svg",JW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-grab.svg",ZW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-grabbing.svg",XW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-all-scroll.svg",QW="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-col-resize.svg",eU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-row-resize.svg",tU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-n-resize.svg",nU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-e-resize.svg",sU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-s-resize.svg",lU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-w-resize.svg",oU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-ne-resize.svg",iU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-nw-resize.svg",rU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-se-resize.svg",aU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-sw-resize.svg",cU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-ew-resize.svg",dU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-ns-resize.svg",uU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-nesw-resize.svg",fU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-nwse-resize.svg",pU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-zoom-in.svg",mU="/my-slidevs/slidevs/learn-tailwind/assets/cursor/cursor-zoom-out.svg",co=g({title:"Cursor",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),hU=g({layout:c(()=>co.layout),transition:c(()=>co.transition),class:c(()=>co.class),clicks:c(()=>co.clicks),name:c(()=>co.name),preload:c(()=>co.preload),slide:{raw:"",title:"Cursor",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:169,start:58,end:107,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Cursor
level: 2

layout: slim-table
---
### Cursor

鼠标的样式还挺多。

| Class                | Properties             | Preview                                                      |
| -------------------- | ---------------------- | ------------------------------------------------------------ |
| cursor-auto          | cursor: auto;          | ![img](/assets/cursor/cursor-auto.svg) |
| cursor-default       | cursor: default;       | ![img](/assets/cursor/cursor-default.svg) |
| cursor-pointer       | cursor: pointer;       | ![img](/assets/cursor/cursor-pointer.svg) |
| cursor-wait          | cursor: wait;          | ![img](/assets/cursor/cursor-wait.svg)          |
| cursor-text          | cursor: text;          | ![img](/assets/cursor/cursor-text.svg)          |
| cursor-move          | cursor: move;          | ![img](/assets/cursor/cursor-move.svg)          |
| cursor-help          | cursor: help;          | ![img](/assets/cursor/cursor-help.svg)          |
| cursor-not-allowed   | cursor: not-allowed;   | ![img](/assets/cursor/cursor-not-allowed.svg)   |
| cursor-none          | cursor: none;          |                                                              |
| cursor-context-menu  | cursor: context-menu;  | ![img](/assets/cursor/cursor-context-menu.svg)  |
| cursor-progress      | cursor: progress;      | ![img](/assets/cursor/cursor-progress.svg)      |
| cursor-cell          | cursor: cell;          | ![img](/assets/cursor/cursor-cell.svg)          |
| cursor-crosshair     | cursor: crosshair;     | ![img](/assets/cursor/cursor-crosshair.svg)     |
| cursor-vertical-text | cursor: vertical-text; | ![img](/assets/cursor/cursor-vertical-text.svg) |
| cursor-alias         | cursor: alias;         | ![img](/assets/cursor/cursor-alias.svg)         |
| cursor-copy          | cursor: copy;          | ![img](/assets/cursor/cursor-copy.svg)          |
| cursor-no-drop       | cursor: no-drop;       | ![img](/assets/cursor/cursor-no-drop.svg)       |
| cursor-grab          | cursor: grab;          | ![img](/assets/cursor/cursor-grab.svg)          |
| cursor-grabbing      | cursor: grabbing;      | ![img](/assets/cursor/cursor-grabbing.svg)      |
| cursor-all-scroll    | cursor: all-scroll;    | ![img](/assets/cursor/cursor-all-scroll.svg)    |
| cursor-col-resize    | cursor: col-resize;    | ![img](/assets/cursor/cursor-col-resize.svg)    |
| cursor-row-resize    | cursor: row-resize;    | ![img](/assets/cursor/cursor-row-resize.svg)    |
| cursor-n-resize      | cursor: n-resize;      | ![img](/assets/cursor/cursor-n-resize.svg)      |
| cursor-e-resize      | cursor: e-resize;      | ![img](/assets/cursor/cursor-e-resize.svg)      |
| cursor-s-resize      | cursor: s-resize;      | ![img](/assets/cursor/cursor-s-resize.svg)      |
| cursor-w-resize      | cursor: w-resize;      | ![img](/assets/cursor/cursor-w-resize.svg)      |
| cursor-ne-resize     | cursor: ne-resize;     | ![img](/assets/cursor/cursor-ne-resize.svg)     |
| cursor-nw-resize     | cursor: nw-resize;     | ![img](/assets/cursor/cursor-nw-resize.svg)     |
| cursor-se-resize     | cursor: se-resize;     | ![img](/assets/cursor/cursor-se-resize.svg)     |
| cursor-sw-resize     | cursor: sw-resize;     | ![img](/assets/cursor/cursor-sw-resize.svg)     |
| cursor-ew-resize     | cursor: ew-resize;     | ![img](/assets/cursor/cursor-ew-resize.svg)     |
| cursor-ns-resize     | cursor: ns-resize;     | ![img](/assets/cursor/cursor-ns-resize.svg)     |
| cursor-nesw-resize   | cursor: nesw-resize;   | ![img](/assets/cursor/cursor-nesw-resize.svg)   |
| cursor-nwse-resize   | cursor: nwse-resize;   | ![img](/assets/cursor/cursor-nwse-resize.svg)   |
| cursor-zoom-in       | cursor: zoom-in;       | ![img](/assets/cursor/cursor-zoom-in.svg)       |
| cursor-zoom-out      | cursor: zoom-out;      | ![img](/assets/cursor/cursor-zoom-out.svg)      |
`,title:"Cursor",level:2,content:`### Cursor

鼠标的样式还挺多。

| Class                | Properties             | Preview                                                      |
| -------------------- | ---------------------- | ------------------------------------------------------------ |
| cursor-auto          | cursor: auto;          | ![img](/assets/cursor/cursor-auto.svg) |
| cursor-default       | cursor: default;       | ![img](/assets/cursor/cursor-default.svg) |
| cursor-pointer       | cursor: pointer;       | ![img](/assets/cursor/cursor-pointer.svg) |
| cursor-wait          | cursor: wait;          | ![img](/assets/cursor/cursor-wait.svg)          |
| cursor-text          | cursor: text;          | ![img](/assets/cursor/cursor-text.svg)          |
| cursor-move          | cursor: move;          | ![img](/assets/cursor/cursor-move.svg)          |
| cursor-help          | cursor: help;          | ![img](/assets/cursor/cursor-help.svg)          |
| cursor-not-allowed   | cursor: not-allowed;   | ![img](/assets/cursor/cursor-not-allowed.svg)   |
| cursor-none          | cursor: none;          |                                                              |
| cursor-context-menu  | cursor: context-menu;  | ![img](/assets/cursor/cursor-context-menu.svg)  |
| cursor-progress      | cursor: progress;      | ![img](/assets/cursor/cursor-progress.svg)      |
| cursor-cell          | cursor: cell;          | ![img](/assets/cursor/cursor-cell.svg)          |
| cursor-crosshair     | cursor: crosshair;     | ![img](/assets/cursor/cursor-crosshair.svg)     |
| cursor-vertical-text | cursor: vertical-text; | ![img](/assets/cursor/cursor-vertical-text.svg) |
| cursor-alias         | cursor: alias;         | ![img](/assets/cursor/cursor-alias.svg)         |
| cursor-copy          | cursor: copy;          | ![img](/assets/cursor/cursor-copy.svg)          |
| cursor-no-drop       | cursor: no-drop;       | ![img](/assets/cursor/cursor-no-drop.svg)       |
| cursor-grab          | cursor: grab;          | ![img](/assets/cursor/cursor-grab.svg)          |
| cursor-grabbing      | cursor: grabbing;      | ![img](/assets/cursor/cursor-grabbing.svg)      |
| cursor-all-scroll    | cursor: all-scroll;    | ![img](/assets/cursor/cursor-all-scroll.svg)    |
| cursor-col-resize    | cursor: col-resize;    | ![img](/assets/cursor/cursor-col-resize.svg)    |
| cursor-row-resize    | cursor: row-resize;    | ![img](/assets/cursor/cursor-row-resize.svg)    |
| cursor-n-resize      | cursor: n-resize;      | ![img](/assets/cursor/cursor-n-resize.svg)      |
| cursor-e-resize      | cursor: e-resize;      | ![img](/assets/cursor/cursor-e-resize.svg)      |
| cursor-s-resize      | cursor: s-resize;      | ![img](/assets/cursor/cursor-s-resize.svg)      |
| cursor-w-resize      | cursor: w-resize;      | ![img](/assets/cursor/cursor-w-resize.svg)      |
| cursor-ne-resize     | cursor: ne-resize;     | ![img](/assets/cursor/cursor-ne-resize.svg)     |
| cursor-nw-resize     | cursor: nw-resize;     | ![img](/assets/cursor/cursor-nw-resize.svg)     |
| cursor-se-resize     | cursor: se-resize;     | ![img](/assets/cursor/cursor-se-resize.svg)     |
| cursor-sw-resize     | cursor: sw-resize;     | ![img](/assets/cursor/cursor-sw-resize.svg)     |
| cursor-ew-resize     | cursor: ew-resize;     | ![img](/assets/cursor/cursor-ew-resize.svg)     |
| cursor-ns-resize     | cursor: ns-resize;     | ![img](/assets/cursor/cursor-ns-resize.svg)     |
| cursor-nesw-resize   | cursor: nesw-resize;   | ![img](/assets/cursor/cursor-nesw-resize.svg)   |
| cursor-nwse-resize   | cursor: nwse-resize;   | ![img](/assets/cursor/cursor-nwse-resize.svg)   |
| cursor-zoom-in       | cursor: zoom-in;       | ![img](/assets/cursor/cursor-zoom-in.svg)       |
| cursor-zoom-out      | cursor: zoom-out;      | ![img](/assets/cursor/cursor-zoom-out.svg)      |`,frontmatter:{title:"Cursor",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:58,end:107},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:co,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:169,no:170},__clicksElements:[],__preloaded:!1}),vU=n("h3",null,"Cursor",-1),gU=n("p",null,"鼠标的样式还挺多。",-1),_U=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties"),n("th",null,"Preview")])]),n("tbody",null,[n("tr",null,[n("td",null,"cursor-auto"),n("td",null,"cursor: auto;"),n("td",null,[n("img",{src:BW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-default"),n("td",null,"cursor: default;"),n("td",null,[n("img",{src:MW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-pointer"),n("td",null,"cursor: pointer;"),n("td",null,[n("img",{src:FW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-wait"),n("td",null,"cursor: wait;"),n("td",null,[n("img",{src:IW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-text"),n("td",null,"cursor: text;"),n("td",null,[n("img",{src:LW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-move"),n("td",null,"cursor: move;"),n("td",null,[n("img",{src:RW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-help"),n("td",null,"cursor: help;"),n("td",null,[n("img",{src:HW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-not-allowed"),n("td",null,"cursor: not-allowed;"),n("td",null,[n("img",{src:zW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-none"),n("td",null,"cursor: none;"),n("td")]),n("tr",null,[n("td",null,"cursor-context-menu"),n("td",null,"cursor: context-menu;"),n("td",null,[n("img",{src:NW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-progress"),n("td",null,"cursor: progress;"),n("td",null,[n("img",{src:qW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-cell"),n("td",null,"cursor: cell;"),n("td",null,[n("img",{src:VW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-crosshair"),n("td",null,"cursor: crosshair;"),n("td",null,[n("img",{src:GW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-vertical-text"),n("td",null,"cursor: vertical-text;"),n("td",null,[n("img",{src:WW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-alias"),n("td",null,"cursor: alias;"),n("td",null,[n("img",{src:UW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-copy"),n("td",null,"cursor: copy;"),n("td",null,[n("img",{src:KW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-no-drop"),n("td",null,"cursor: no-drop;"),n("td",null,[n("img",{src:YW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-grab"),n("td",null,"cursor: grab;"),n("td",null,[n("img",{src:JW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-grabbing"),n("td",null,"cursor: grabbing;"),n("td",null,[n("img",{src:ZW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-all-scroll"),n("td",null,"cursor: all-scroll;"),n("td",null,[n("img",{src:XW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-col-resize"),n("td",null,"cursor: col-resize;"),n("td",null,[n("img",{src:QW,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-row-resize"),n("td",null,"cursor: row-resize;"),n("td",null,[n("img",{src:eU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-n-resize"),n("td",null,"cursor: n-resize;"),n("td",null,[n("img",{src:tU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-e-resize"),n("td",null,"cursor: e-resize;"),n("td",null,[n("img",{src:nU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-s-resize"),n("td",null,"cursor: s-resize;"),n("td",null,[n("img",{src:sU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-w-resize"),n("td",null,"cursor: w-resize;"),n("td",null,[n("img",{src:lU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-ne-resize"),n("td",null,"cursor: ne-resize;"),n("td",null,[n("img",{src:oU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-nw-resize"),n("td",null,"cursor: nw-resize;"),n("td",null,[n("img",{src:iU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-se-resize"),n("td",null,"cursor: se-resize;"),n("td",null,[n("img",{src:rU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-sw-resize"),n("td",null,"cursor: sw-resize;"),n("td",null,[n("img",{src:aU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-ew-resize"),n("td",null,"cursor: ew-resize;"),n("td",null,[n("img",{src:cU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-ns-resize"),n("td",null,"cursor: ns-resize;"),n("td",null,[n("img",{src:dU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-nesw-resize"),n("td",null,"cursor: nesw-resize;"),n("td",null,[n("img",{src:uU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-nwse-resize"),n("td",null,"cursor: nwse-resize;"),n("td",null,[n("img",{src:fU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-zoom-in"),n("td",null,"cursor: zoom-in;"),n("td",null,[n("img",{src:pU,alt:"img"})])]),n("tr",null,[n("td",null,"cursor-zoom-out"),n("td",null,"cursor: zoom-out;"),n("td",null,[n("img",{src:mU,alt:"img"})])])])],-1),yU={__name:"170",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=co;return A(I,co),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,co))})(),(s,i)=>(h(),S(Y,R(L(y(co))),{default:C(()=>[vU,gU,_U]),_:1},16))}},bU=k(yU,[["__file","/@slidev/slides/170.md"]]),uo=g({srcSequence:"./pages/013Interactivity.md"}),wU=g({layout:c(()=>uo.layout),transition:c(()=>uo.transition),class:c(()=>uo.class),clicks:c(()=>uo.clicks),name:c(()=>uo.name),preload:c(()=>uo.preload),slide:{raw:"",content:"",note:"",index:170,start:108,end:123,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`
下面是三个常用鼠标样式  

<div class="flex [&_button]:w-[180px] [&_button]:bg-blue [&_button]:rounded [&_button]:text-white space-x-20">
<button type="button" class="cursor-pointer ...">
  Submit
</button>
<button type="button" class="cursor-progress ...">
  Saving...
</button>
<button type="button" disabled class="cursor-not-allowed ...">
  Confirm
</button>
</div>
`,content:`下面是三个常用鼠标样式  

<div class="flex [&_button]:w-[180px] [&_button]:bg-blue [&_button]:rounded [&_button]:text-white space-x-20">
<button type="button" class="cursor-pointer ...">
  Submit
</button>
<button type="button" class="cursor-progress ...">
  Saving...
</button>
<button type="button" disabled class="cursor-not-allowed ...">
  Confirm
</button>
</div>`,frontmatter:{},index:4,start:108,end:123},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:uo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:170,no:171},__clicksElements:[],__preloaded:!1}),xU=n("p",null,"下面是三个常用鼠标样式",-1),kU=n("div",{class:"flex [&_button]:w-[180px] [&_button]:bg-blue [&_button]:rounded [&_button]:text-white space-x-20"},[n("button",{type:"button",class:"cursor-pointer ..."}," Submit "),n("button",{type:"button",class:"cursor-progress ..."}," Saving... "),n("button",{type:"button",disabled:"",class:"cursor-not-allowed ..."}," Confirm ")],-1),$U={__name:"171",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=uo;return A(I,uo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,uo))})(),(s,i)=>(h(),S(he,R(L(y(uo))),{default:C(()=>[xU,kU]),_:1},16))}},SU=k($U,[["__file","/@slidev/slides/171.md"]]),fo=g({title:"Caret Color",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),jU=g({layout:c(()=>fo.layout),transition:c(()=>fo.transition),class:c(()=>fo.class),clicks:c(()=>fo.clicks),name:c(()=>fo.name),preload:c(()=>fo.preload),slide:{raw:"",title:"Caret Color",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:171,start:123,end:134,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Caret Color
level: 2
layout: slim-table
---
### Caret Color

控制文本输入框光标的颜色

<textarea class="caret-pink-500 ..."></textarea>
`,title:"Caret Color",level:2,content:`### Caret Color

控制文本输入框光标的颜色

<textarea class="caret-pink-500 ..."></textarea>`,frontmatter:{title:"Caret Color",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:5,start:123,end:134},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:fo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:171,no:172},__clicksElements:[],__preloaded:!1}),PU=n("h3",null,"Caret Color",-1),TU=n("p",null,"控制文本输入框光标的颜色",-1),CU=n("p",null,[n("textarea",{class:"caret-pink-500 ..."})],-1),EU={__name:"172",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=fo;return A(I,fo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,fo))})(),(s,i)=>(h(),S(Y,R(L(y(fo))),{default:C(()=>[PU,TU,CU]),_:1},16))}},AU=k(EU,[["__file","/@slidev/slides/172.md"]]),po=g({title:"Pointer Events",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),OU=g({layout:c(()=>po.layout),transition:c(()=>po.transition),class:c(()=>po.class),clicks:c(()=>po.clicks),name:c(()=>po.name),preload:c(()=>po.preload),slide:{raw:"",title:"Pointer Events",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:172,start:134,end:147,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Pointer Events
level: 2
layout: slim-table
---

### Pointer Events

就是可以取消鼠标指针事件 （点击，hover等）

使用 \`pointer-events-auto\` 恢复指针事件的默认浏览器行为（如 :hover 和 click ）。  
使用 \`pointer-events-none\` 使元素忽略指针事件。指针事件仍将在子元素上触发，并传递到目标“下方”的元素。
`,title:"Pointer Events",level:2,content:`### Pointer Events

就是可以取消鼠标指针事件 （点击，hover等）

使用 \`pointer-events-auto\` 恢复指针事件的默认浏览器行为（如 :hover 和 click ）。  
使用 \`pointer-events-none\` 使元素忽略指针事件。指针事件仍将在子元素上触发，并传递到目标“下方”的元素。`,frontmatter:{title:"Pointer Events",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:6,start:134,end:147},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:po,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:172,no:173},__clicksElements:[],__preloaded:!1}),DU=n("h3",null,"Pointer Events",-1),BU=n("p",null,"就是可以取消鼠标指针事件 （点击，hover等）",-1),MU=n("code",null,"pointer-events-auto",-1),FU=n("br",null,null,-1),IU=n("code",null,"pointer-events-none",-1),LU={__name:"173",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=po;return A(I,po),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,po))})(),(s,i)=>{const a=dr("hover");return h(),S(Y,R(L(y(po))),{default:C(()=>[DU,BU,n("p",null,[H("使用 "),MU,H(" 恢复指针事件的默认浏览器行为（如 "),Z(a),H(" 和 click ）。"),FU,H(" 使用 "),IU,H(" 使元素忽略指针事件。指针事件仍将在子元素上触发，并传递到目标“下方”的元素。")])]),_:1},16)}}},RU=k(LU,[["__file","/@slidev/slides/173.md"]]),mo=g({title:"Resize",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),HU=g({layout:c(()=>mo.layout),transition:c(()=>mo.transition),class:c(()=>mo.class),clicks:c(()=>mo.clicks),name:c(()=>mo.name),preload:c(()=>mo.preload),slide:{raw:"",title:"Resize",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:173,start:147,end:165,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Resize
level: 2
layout: slim-table
---
### Resize

控制元素怎么被缩放，可以控制只允许水平或垂直方向的缩放

| Class       | Properties          |
| ----------- | ------------------- |
| resize-none | resize: none;       |
| resize-y    | resize: vertical;   |
| resize-x    | resize: horizontal; |
| resize      | resize: both;       |

<textarea class="resize rounded-md border-pink-500 border-1 focus:outline-none focus-visible:outline-pink-700 focus-visible:border-pink-700 focus-visible:text-red"></textarea>
`,title:"Resize",level:2,content:`### Resize

控制元素怎么被缩放，可以控制只允许水平或垂直方向的缩放

| Class       | Properties          |
| ----------- | ------------------- |
| resize-none | resize: none;       |
| resize-y    | resize: vertical;   |
| resize-x    | resize: horizontal; |
| resize      | resize: both;       |

<textarea class="resize rounded-md border-pink-500 border-1 focus:outline-none focus-visible:outline-pink-700 focus-visible:border-pink-700 focus-visible:text-red"></textarea>`,frontmatter:{title:"Resize",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:7,start:147,end:165},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:mo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:173,no:174},__clicksElements:[],__preloaded:!1}),zU=n("h3",null,"Resize",-1),NU=n("p",null,"控制元素怎么被缩放，可以控制只允许水平或垂直方向的缩放",-1),qU=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"resize-none"),n("td",null,"resize: none;")]),n("tr",null,[n("td",null,"resize-y"),n("td",null,"resize: vertical;")]),n("tr",null,[n("td",null,"resize-x"),n("td",null,"resize: horizontal;")]),n("tr",null,[n("td",null,"resize"),n("td",null,"resize: both;")])])],-1),VU=n("p",null,[n("textarea",{class:"resize rounded-md border-pink-500 border-1 focus:outline-none focus-visible:outline-pink-700 focus-visible:border-pink-700 focus-visible:text-red"})],-1),GU={__name:"174",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=mo;return A(I,mo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,mo))})(),(s,i)=>(h(),S(Y,R(L(y(mo))),{default:C(()=>[zU,NU,qU,VU]),_:1},16))}},WU=k(GU,[["__file","/@slidev/slides/174.md"]]),ho=g({title:"Scroll Behavior",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),UU=g({layout:c(()=>ho.layout),transition:c(()=>ho.transition),class:c(()=>ho.class),clicks:c(()=>ho.clicks),name:c(()=>ho.name),preload:c(()=>ho.preload),slide:{raw:"",title:"Scroll Behavior",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:174,start:165,end:179,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Behavior
level: 2
layout: slim-table
---
### Scroll Behavior

控制滚动行为，比如让滚动更平滑  

| Class         | Properties               |
| ------------- | ------------------------ |
| scroll-auto   | scroll-behavior: auto;   |
| scroll-smooth | scroll-behavior: smooth; |
`,title:"Scroll Behavior",level:2,content:`### Scroll Behavior

控制滚动行为，比如让滚动更平滑  

| Class         | Properties               |
| ------------- | ------------------------ |
| scroll-auto   | scroll-behavior: auto;   |
| scroll-smooth | scroll-behavior: smooth; |`,frontmatter:{title:"Scroll Behavior",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:8,start:165,end:179},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:ho,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:174,no:175},__clicksElements:[],__preloaded:!1}),KU=n("h3",null,"Scroll Behavior",-1),YU=n("p",null,"控制滚动行为，比如让滚动更平滑",-1),JU=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"scroll-auto"),n("td",null,"scroll-behavior: auto;")]),n("tr",null,[n("td",null,"scroll-smooth"),n("td",null,"scroll-behavior: smooth;")])])],-1),ZU={__name:"175",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ho;return A(I,ho),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ho))})(),(s,i)=>(h(),S(Y,R(L(y(ho))),{default:C(()=>[KU,YU,JU]),_:1},16))}},XU=k(ZU,[["__file","/@slidev/slides/175.md"]]),vo=g({title:"Scroll Margin",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),QU=g({layout:c(()=>vo.layout),transition:c(()=>vo.transition),class:c(()=>vo.class),clicks:c(()=>vo.clicks),name:c(()=>vo.name),preload:c(()=>vo.preload),slide:{raw:"",title:"Scroll Margin",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:175,start:179,end:187,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Margin
level: 2
layout: slim-table
---
### Scroll Margin

用于控制捕捉容器中项目周围滚动偏移`,title:"Scroll Margin",level:2,content:`### Scroll Margin

用于控制捕捉容器中项目周围滚动偏移`,frontmatter:{title:"Scroll Margin",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:9,start:179,end:187},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:vo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:175,no:176},__clicksElements:[],__preloaded:!1}),eK=n("h3",null,"Scroll Margin",-1),tK=n("p",null,"用于控制捕捉容器中项目周围滚动偏移",-1),nK={__name:"176",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=vo;return A(I,vo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,vo))})(),(s,i)=>(h(),S(Y,R(L(y(vo))),{default:C(()=>[eK,tK]),_:1},16))}},sK=k(nK,[["__file","/@slidev/slides/176.md"]]),go=g({title:"Scroll Padding",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),lK=g({layout:c(()=>go.layout),transition:c(()=>go.transition),class:c(()=>go.class),clicks:c(()=>go.clicks),name:c(()=>go.name),preload:c(()=>go.preload),slide:{raw:"",title:"Scroll Padding",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:176,start:187,end:195,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Padding
level: 2
layout: slim-table
---
### Scroll Padding
滚动条相关参数
`,title:"Scroll Padding",level:2,content:`### Scroll Padding
滚动条相关参数`,frontmatter:{title:"Scroll Padding",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:10,start:187,end:195},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:go,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:176,no:177},__clicksElements:[],__preloaded:!1}),oK=n("h3",null,"Scroll Padding",-1),iK=n("p",null,"滚动条相关参数",-1),rK={__name:"177",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=go;return A(I,go),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,go))})(),(s,i)=>(h(),S(Y,R(L(y(go))),{default:C(()=>[oK,iK]),_:1},16))}},aK=k(rK,[["__file","/@slidev/slides/177.md"]]),_o=g({title:"Scroll Align",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),cK=g({layout:c(()=>_o.layout),transition:c(()=>_o.transition),class:c(()=>_o.class),clicks:c(()=>_o.clicks),name:c(()=>_o.name),preload:c(()=>_o.preload),slide:{raw:"",title:"Scroll Align",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:177,start:195,end:212,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Align
level: 2
layout: slim-table
---

### Scroll Align

滚动条相关参数

| Class           | Properties                 |
| --------------- | -------------------------- |
| snap-start      | scroll-snap-align: start;  |
| snap-end        | scroll-snap-align: end;    |
| snap-center     | scroll-snap-align: center; |
| snap-align-none | scroll-snap-align: none;   |
`,title:"Scroll Align",level:2,content:`### Scroll Align

滚动条相关参数

| Class           | Properties                 |
| --------------- | -------------------------- |
| snap-start      | scroll-snap-align: start;  |
| snap-end        | scroll-snap-align: end;    |
| snap-center     | scroll-snap-align: center; |
| snap-align-none | scroll-snap-align: none;   |`,frontmatter:{title:"Scroll Align",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:11,start:195,end:212},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:_o,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:177,no:178},__clicksElements:[],__preloaded:!1}),dK=n("h3",null,"Scroll Align",-1),uK=n("p",null,"滚动条相关参数",-1),fK=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"snap-start"),n("td",null,"scroll-snap-align: start;")]),n("tr",null,[n("td",null,"snap-end"),n("td",null,"scroll-snap-align: end;")]),n("tr",null,[n("td",null,"snap-center"),n("td",null,"scroll-snap-align: center;")]),n("tr",null,[n("td",null,"snap-align-none"),n("td",null,"scroll-snap-align: none;")])])],-1),pK={__name:"178",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=_o;return A(I,_o),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,_o))})(),(s,i)=>(h(),S(Y,R(L(y(_o))),{default:C(()=>[dK,uK,fK]),_:1},16))}},mK=k(pK,[["__file","/@slidev/slides/178.md"]]),yo=g({title:"Scroll Snap Stop",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),hK=g({layout:c(()=>yo.layout),transition:c(()=>yo.transition),class:c(()=>yo.class),clicks:c(()=>yo.clicks),name:c(()=>yo.name),preload:c(()=>yo.preload),slide:{raw:"",title:"Scroll Snap Stop",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:178,start:212,end:228,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Snap Stop
level: 2
layout: slim-table
---
### Scroll Snap Stop

用于控制是否可以跳过可能的捕捉位置

| Class       | Properties                |
| ----------- | ------------------------- |
| snap-normal | scroll-snap-stop: normal; |
| snap-always | scroll-snap-stop: always; |

将 snap-always 实用程序与 snap-mandatory 实用程序一起使用，可以强制捕捉容器始终停在某个元素上，然后用户才能继续滚动到下一个项目。
`,title:"Scroll Snap Stop",level:2,content:`### Scroll Snap Stop

用于控制是否可以跳过可能的捕捉位置

| Class       | Properties                |
| ----------- | ------------------------- |
| snap-normal | scroll-snap-stop: normal; |
| snap-always | scroll-snap-stop: always; |

将 snap-always 实用程序与 snap-mandatory 实用程序一起使用，可以强制捕捉容器始终停在某个元素上，然后用户才能继续滚动到下一个项目。`,frontmatter:{title:"Scroll Snap Stop",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:12,start:212,end:228},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:yo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:178,no:179},__clicksElements:[],__preloaded:!1}),vK=n("h3",null,"Scroll Snap Stop",-1),gK=n("p",null,"用于控制是否可以跳过可能的捕捉位置",-1),_K=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"snap-normal"),n("td",null,"scroll-snap-stop: normal;")]),n("tr",null,[n("td",null,"snap-always"),n("td",null,"scroll-snap-stop: always;")])])],-1),yK=n("p",null,"将 snap-always 实用程序与 snap-mandatory 实用程序一起使用，可以强制捕捉容器始终停在某个元素上，然后用户才能继续滚动到下一个项目。",-1),bK={__name:"179",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=yo;return A(I,yo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,yo))})(),(s,i)=>(h(),S(Y,R(L(y(yo))),{default:C(()=>[vK,gK,_K,yK]),_:1},16))}},wK=k(bK,[["__file","/@slidev/slides/179.md"]]),bo=g({title:"Scroll Snap Type",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),xK=g({layout:c(()=>bo.layout),transition:c(()=>bo.transition),class:c(()=>bo.class),clicks:c(()=>bo.clicks),name:c(()=>bo.name),preload:c(()=>bo.preload),slide:{raw:"",title:"Scroll Snap Type",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:179,start:228,end:246,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Scroll Snap Type
level: 2
layout: slim-table
---

### Scroll Snap Type
用于控制捕捉点在捕捉容器中执行的严格程度

| Class          | Properties                                               |
| -------------- | -------------------------------------------------------- |
| snap-none      | scroll-snap-type: none;                                  |
| snap-x         | scroll-snap-type: x var(--tw-scroll-snap-strictness);    |
| snap-y         | scroll-snap-type: y var(--tw-scroll-snap-strictness);    |
| snap-both      | scroll-snap-type: both var(--tw-scroll-snap-strictness); |
| snap-mandatory | --tw-scroll-snap-strictness: mandatory;                  |
| snap-proximity | --tw-scroll-snap-strictness: proximity;                  |
`,title:"Scroll Snap Type",level:2,content:`### Scroll Snap Type
用于控制捕捉点在捕捉容器中执行的严格程度

| Class          | Properties                                               |
| -------------- | -------------------------------------------------------- |
| snap-none      | scroll-snap-type: none;                                  |
| snap-x         | scroll-snap-type: x var(--tw-scroll-snap-strictness);    |
| snap-y         | scroll-snap-type: y var(--tw-scroll-snap-strictness);    |
| snap-both      | scroll-snap-type: both var(--tw-scroll-snap-strictness); |
| snap-mandatory | --tw-scroll-snap-strictness: mandatory;                  |
| snap-proximity | --tw-scroll-snap-strictness: proximity;                  |`,frontmatter:{title:"Scroll Snap Type",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:13,start:228,end:246},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:bo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:179,no:180},__clicksElements:[],__preloaded:!1}),kK=n("h3",null,"Scroll Snap Type",-1),$K=n("p",null,"用于控制捕捉点在捕捉容器中执行的严格程度",-1),SK=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"snap-none"),n("td",null,"scroll-snap-type: none;")]),n("tr",null,[n("td",null,"snap-x"),n("td",null,"scroll-snap-type: x var(–tw-scroll-snap-strictness);")]),n("tr",null,[n("td",null,"snap-y"),n("td",null,"scroll-snap-type: y var(–tw-scroll-snap-strictness);")]),n("tr",null,[n("td",null,"snap-both"),n("td",null,"scroll-snap-type: both var(–tw-scroll-snap-strictness);")]),n("tr",null,[n("td",null,"snap-mandatory"),n("td",null,"–tw-scroll-snap-strictness: mandatory;")]),n("tr",null,[n("td",null,"snap-proximity"),n("td",null,"–tw-scroll-snap-strictness: proximity;")])])],-1),jK={__name:"180",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=bo;return A(I,bo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,bo))})(),(s,i)=>(h(),S(Y,R(L(y(bo))),{default:C(()=>[kK,$K,SK]),_:1},16))}},PK=k(jK,[["__file","/@slidev/slides/180.md"]]),wo=g({title:"Touch Action",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),TK=g({layout:c(()=>wo.layout),transition:c(()=>wo.transition),class:c(()=>wo.class),clicks:c(()=>wo.clicks),name:c(()=>wo.name),preload:c(()=>wo.preload),slide:{raw:"",title:"Touch Action",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:180,start:246,end:268,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Touch Action
level: 2
layout: slim-table
---
### Touch Action

移动端代码不怎么写，暂时略过这个

| Class              | Properties                  |
| ------------------ | --------------------------- |
| touch-auto         | touch-action: auto;         |
| touch-none         | touch-action: none;         |
| touch-pan-x        | touch-action: pan-x;        |
| touch-pan-left     | touch-action: pan-left;     |
| touch-pan-right    | touch-action: pan-right;    |
| touch-pan-y        | touch-action: pan-y;        |
| touch-pan-up       | touch-action: pan-up;       |
| touch-pan-down     | touch-action: pan-down;     |
| touch-pinch-zoom   | touch-action: pinch-zoom;   |
| touch-manipulation | touch-action: manipulation; |
`,title:"Touch Action",level:2,content:`### Touch Action

移动端代码不怎么写，暂时略过这个

| Class              | Properties                  |
| ------------------ | --------------------------- |
| touch-auto         | touch-action: auto;         |
| touch-none         | touch-action: none;         |
| touch-pan-x        | touch-action: pan-x;        |
| touch-pan-left     | touch-action: pan-left;     |
| touch-pan-right    | touch-action: pan-right;    |
| touch-pan-y        | touch-action: pan-y;        |
| touch-pan-up       | touch-action: pan-up;       |
| touch-pan-down     | touch-action: pan-down;     |
| touch-pinch-zoom   | touch-action: pinch-zoom;   |
| touch-manipulation | touch-action: manipulation; |`,frontmatter:{title:"Touch Action",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:14,start:246,end:268},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:wo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:180,no:181},__clicksElements:[],__preloaded:!1}),CK=n("h3",null,"Touch Action",-1),EK=n("p",null,"移动端代码不怎么写，暂时略过这个",-1),AK=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"touch-auto"),n("td",null,"touch-action: auto;")]),n("tr",null,[n("td",null,"touch-none"),n("td",null,"touch-action: none;")]),n("tr",null,[n("td",null,"touch-pan-x"),n("td",null,"touch-action: pan-x;")]),n("tr",null,[n("td",null,"touch-pan-left"),n("td",null,"touch-action: pan-left;")]),n("tr",null,[n("td",null,"touch-pan-right"),n("td",null,"touch-action: pan-right;")]),n("tr",null,[n("td",null,"touch-pan-y"),n("td",null,"touch-action: pan-y;")]),n("tr",null,[n("td",null,"touch-pan-up"),n("td",null,"touch-action: pan-up;")]),n("tr",null,[n("td",null,"touch-pan-down"),n("td",null,"touch-action: pan-down;")]),n("tr",null,[n("td",null,"touch-pinch-zoom"),n("td",null,"touch-action: pinch-zoom;")]),n("tr",null,[n("td",null,"touch-manipulation"),n("td",null,"touch-action: manipulation;")])])],-1),OK={__name:"181",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=wo;return A(I,wo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,wo))})(),(s,i)=>(h(),S(Y,R(L(y(wo))),{default:C(()=>[CK,EK,AK]),_:1},16))}},DK=k(OK,[["__file","/@slidev/slides/181.md"]]),xo=g({title:"User Select",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),BK=g({layout:c(()=>xo.layout),transition:c(()=>xo.transition),class:c(()=>xo.class),clicks:c(()=>xo.clicks),name:c(()=>xo.name),preload:c(()=>xo.preload),slide:{raw:"",title:"User Select",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:181,start:268,end:300,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: User Select
level: 2
layout: slim-table
---

### User Select
控制用户能否选中文本  

一般情况都不用设置，因为一般让用户能选中文本体验才比较好

| Class       | Properties         |
| ----------- | ------------------ |
| select-none | user-select: none; |
| select-text | user-select: text; |
| select-all  | user-select: all;  |
| select-auto | user-select: auto; |

不允许用户选择
<div class="select-none  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

一键选择所有文本

<div class="select-all  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

select-text 允许文本选择  
select-auto 浏览器默认值
`,title:"User Select",level:2,content:`### User Select
控制用户能否选中文本  

一般情况都不用设置，因为一般让用户能选中文本体验才比较好

| Class       | Properties         |
| ----------- | ------------------ |
| select-none | user-select: none; |
| select-text | user-select: text; |
| select-all  | user-select: all;  |
| select-auto | user-select: auto; |

不允许用户选择
<div class="select-none  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

一键选择所有文本

<div class="select-all  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

select-text 允许文本选择  
select-auto 浏览器默认值`,frontmatter:{title:"User Select",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:15,start:268,end:300},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:xo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:181,no:182},__clicksElements:[],__preloaded:!1}),MK=n("h3",null,"User Select",-1),FK=n("p",null,"控制用户能否选中文本",-1),IK=n("p",null,"一般情况都不用设置，因为一般让用户能选中文本体验才比较好",-1),LK=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"select-none"),n("td",null,"user-select: none;")]),n("tr",null,[n("td",null,"select-text"),n("td",null,"user-select: text;")]),n("tr",null,[n("td",null,"select-all"),n("td",null,"user-select: all;")]),n("tr",null,[n("td",null,"select-auto"),n("td",null,"user-select: auto;")])])],-1),RK=n("p",null,"不允许用户选择",-1),HK=n("div",{class:"select-none shadow-lg p-2"}," The quick brown fox jumps over the lazy dog. ",-1),zK=n("p",null,"一键选择所有文本",-1),NK=n("div",{class:"select-all shadow-lg p-2"}," The quick brown fox jumps over the lazy dog. ",-1),qK=n("p",null,[H("select-text 允许文本选择"),n("br"),H(" select-auto 浏览器默认值")],-1),VK={__name:"182",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=xo;return A(I,xo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,xo))})(),(s,i)=>(h(),S(Y,R(L(y(xo))),{default:C(()=>[MK,FK,IK,LK,RK,HK,zK,NK,qK]),_:1},16))}},GK=k(VK,[["__file","/@slidev/slides/182.md"]]),ko=g({title:"Will Change",level:2,layout:"slim-table",srcSequence:"./pages/013Interactivity.md"}),WK=g({layout:c(()=>ko.layout),transition:c(()=>ko.transition),class:c(()=>ko.class),clicks:c(()=>ko.clicks),name:c(()=>ko.name),preload:c(()=>ko.preload),slide:{raw:"",title:"Will Change",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:182,start:300,end:323,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",raw:`---
title: Will Change
level: 2
layout: slim-table
---

### Will Change

用于优化即将发生变化的元素的动画

<CanIUse src="https://caniuse.com/will-change" buttonText="can i use will-change"/>

| Class                 | Properties                    |
| --------------------- | ----------------------------- |
| will-change-auto      | will-change: auto;            |
| will-change-scroll    | will-change: scroll-position; |
| will-change-contents  | will-change: contents;        |
| will-change-transform | will-change: transform;       |

使用 \`will-change-scroll\` 、 \`will-change-contents\` 和 \`will-change-transform\` 通过指示浏览器在实际开始之前准备必要的动画来优化预计在不久的将来发生变化的元素。

css出现性能问题时才考虑时候，感觉除非开发游戏之类的重前端场景应该是用不到的
`,title:"Will Change",level:2,content:`### Will Change

用于优化即将发生变化的元素的动画

<CanIUse src="https://caniuse.com/will-change" buttonText="can i use will-change"/>

| Class                 | Properties                    |
| --------------------- | ----------------------------- |
| will-change-auto      | will-change: auto;            |
| will-change-scroll    | will-change: scroll-position; |
| will-change-contents  | will-change: contents;        |
| will-change-transform | will-change: transform;       |

使用 \`will-change-scroll\` 、 \`will-change-contents\` 和 \`will-change-transform\` 通过指示浏览器在实际开始之前准备必要的动画来优化预计在不久的将来发生变化的元素。

css出现性能问题时才考虑时候，感觉除非开发游戏之类的重前端场景应该是用不到的`,frontmatter:{title:"Will Change",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:16,start:300,end:323},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",noteHTML:"",frontmatter:ko,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\013Interactivity.md",id:182,no:183},__clicksElements:[],__preloaded:!1}),UK=n("h3",null,"Will Change",-1),KK=n("p",null,"用于优化即将发生变化的元素的动画",-1),YK=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"will-change-auto"),n("td",null,"will-change: auto;")]),n("tr",null,[n("td",null,"will-change-scroll"),n("td",null,"will-change: scroll-position;")]),n("tr",null,[n("td",null,"will-change-contents"),n("td",null,"will-change: contents;")]),n("tr",null,[n("td",null,"will-change-transform"),n("td",null,"will-change: transform;")])])],-1),JK=n("p",null,[H("使用 "),n("code",null,"will-change-scroll"),H(" 、 "),n("code",null,"will-change-contents"),H(" 和 "),n("code",null,"will-change-transform"),H(" 通过指示浏览器在实际开始之前准备必要的动画来优化预计在不久的将来发生变化的元素。")],-1),ZK=n("p",null,"css出现性能问题时才考虑时候，感觉除非开发游戏之类的重前端场景应该是用不到的",-1),XK={__name:"183",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=ko;return A(I,ko),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,ko))})(),(s,i)=>{const a=gr;return h(),S(Y,R(L(y(ko))),{default:C(()=>[UK,KK,Z(a,{src:"https://caniuse.com/will-change",buttonText:"can i use will-change"}),YK,JK,ZK]),_:1},16)}}},QK=k(XK,[["__file","/@slidev/slides/183.md"]]),$o=g({title:"Svg",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/014Svg.md"}),eY=g({layout:c(()=>$o.layout),transition:c(()=>$o.transition),class:c(()=>$o.class),clicks:c(()=>$o.clicks),name:c(()=>$o.name),preload:c(()=>$o.preload),slide:{raw:"",title:"Svg",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:183,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",raw:`---
title: Svg
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Svg
`,title:"Svg",level:1,content:"## Svg",frontmatter:{title:"Svg",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/014Svg.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:17,start:108,end:112},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",noteHTML:"",frontmatter:$o,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",id:183,no:184},__clicksElements:[],__preloaded:!1}),tY=n("h2",null,"Svg",-1),nY={__name:"184",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=$o;return A(I,$o),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,$o))})(),(s,i)=>(h(),S(Pt,R(L(y($o))),{default:C(()=>[tY]),_:1},16))}},sY=k(nY,[["__file","/@slidev/slides/184.md"]]),So=g({title:"Fill",level:2,layout:"slim-table",srcSequence:"./pages/014Svg.md"}),lY=g({layout:c(()=>So.layout),transition:c(()=>So.transition),class:c(()=>So.class),clicks:c(()=>So.clicks),name:c(()=>So.name),preload:c(()=>So.preload),slide:{raw:"",title:"Fill",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:184,start:9,end:19,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",raw:`---
title: Fill
level: 2
layout: slim-table
---

### Fill

控制svg的颜色填充
`,title:"Fill",level:2,content:`### Fill

控制svg的颜色填充`,frontmatter:{title:"Fill",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:19},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",noteHTML:"",frontmatter:So,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",id:184,no:185},__clicksElements:[],__preloaded:!1}),oY=n("h3",null,"Fill",-1),iY=n("p",null,"控制svg的颜色填充",-1),rY={__name:"185",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=So;return A(I,So),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,So))})(),(s,i)=>(h(),S(Y,R(L(y(So))),{default:C(()=>[oY,iY]),_:1},16))}},aY=k(rY,[["__file","/@slidev/slides/185.md"]]),jo=g({title:"Stroke",level:2,layout:"slim-table",srcSequence:"./pages/014Svg.md"}),cY=g({layout:c(()=>jo.layout),transition:c(()=>jo.transition),class:c(()=>jo.class),clicks:c(()=>jo.clicks),name:c(()=>jo.name),preload:c(()=>jo.preload),slide:{raw:"",title:"Stroke",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:185,start:19,end:29,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",raw:`---
title: Stroke
level: 2
layout: slim-table
---

### Stroke

控制svg的描边颜色
`,title:"Stroke",level:2,content:`### Stroke

控制svg的描边颜色`,frontmatter:{title:"Stroke",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:19,end:29},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",noteHTML:"",frontmatter:jo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",id:185,no:186},__clicksElements:[],__preloaded:!1}),dY=n("h3",null,"Stroke",-1),uY=n("p",null,"控制svg的描边颜色",-1),fY={__name:"186",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=jo;return A(I,jo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,jo))})(),(s,i)=>(h(),S(Y,R(L(y(jo))),{default:C(()=>[dY,uY]),_:1},16))}},pY=k(fY,[["__file","/@slidev/slides/186.md"]]),Po=g({title:"Stroke Width",level:2,layout:"slim-table",srcSequence:"./pages/014Svg.md"}),mY=g({layout:c(()=>Po.layout),transition:c(()=>Po.transition),class:c(()=>Po.class),clicks:c(()=>Po.clicks),name:c(()=>Po.name),preload:c(()=>Po.preload),slide:{raw:"",title:"Stroke Width",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:186,start:29,end:39,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",raw:`---
title: Stroke Width
level: 2
layout: slim-table
---

### Stroke Width

控制svg的描边宽度
`,title:"Stroke Width",level:2,content:`### Stroke Width

控制svg的描边宽度`,frontmatter:{title:"Stroke Width",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:3,start:29,end:39},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",noteHTML:"",frontmatter:Po,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\014Svg.md",id:186,no:187},__clicksElements:[],__preloaded:!1}),hY=n("h3",null,"Stroke Width",-1),vY=n("p",null,"控制svg的描边宽度",-1),gY={__name:"187",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Po;return A(I,Po),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Po))})(),(s,i)=>(h(),S(Y,R(L(y(Po))),{default:C(()=>[hY,vY]),_:1},16))}},_Y=k(gY,[["__file","/@slidev/slides/187.md"]]),To=g({title:"Accessibility",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./pages/015Accessibility.md"}),yY=g({layout:c(()=>To.layout),transition:c(()=>To.transition),class:c(()=>To.class),clicks:c(()=>To.clicks),name:c(()=>To.name),preload:c(()=>To.preload),slide:{raw:"",title:"Accessibility",level:1,content:"",frontmatterStyle:"frontmatter",note:"",index:187,start:0,end:9,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",raw:`---
title: Accessibility
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Accessibility
`,title:"Accessibility",level:1,content:"## Accessibility",frontmatter:{title:"Accessibility",level:1,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},frontmatterStyle:"frontmatter",index:0,start:0,end:9},inline:{raw:`---
src: ./pages/015Accessibility.md
---
`,content:"",frontmatter:{},frontmatterStyle:"frontmatter",index:18,start:112,end:116},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",noteHTML:"",frontmatter:To,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",id:187,no:188},__clicksElements:[],__preloaded:!1}),bY=n("h2",null,"Accessibility",-1),wY={__name:"188",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=To;return A(I,To),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,To))})(),(s,i)=>(h(),S(Pt,R(L(y(To))),{default:C(()=>[bY]),_:1},16))}},xY=k(wY,[["__file","/@slidev/slides/188.md"]]),Co=g({title:"Screen Readers",level:2,layout:"slim-table",srcSequence:"./pages/015Accessibility.md"}),kY=g({layout:c(()=>Co.layout),transition:c(()=>Co.transition),class:c(()=>Co.class),clicks:c(()=>Co.clicks),name:c(()=>Co.name),preload:c(()=>Co.preload),slide:{raw:"",title:"Screen Readers",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:188,start:9,end:27,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",raw:`---
title: Screen Readers
level: 2
layout: slim-table
---

### Screen Readers
用于提高屏幕阅读器可访问性

| Class       | Properties                                                   |
| ----------- | ------------------------------------------------------------ |
| sr-only     | \`position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;\` |
| not-sr-only | position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; |

使用 sr-only 在视觉上隐藏元素，而不对屏幕阅读器隐藏它：

not-sr-only撤销sr-only的效果
`,title:"Screen Readers",level:2,content:`### Screen Readers
用于提高屏幕阅读器可访问性

| Class       | Properties                                                   |
| ----------- | ------------------------------------------------------------ |
| sr-only     | \`position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;\` |
| not-sr-only | position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; |

使用 sr-only 在视觉上隐藏元素，而不对屏幕阅读器隐藏它：

not-sr-only撤销sr-only的效果`,frontmatter:{title:"Screen Readers",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:1,start:9,end:27},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",noteHTML:"",frontmatter:Co,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",id:188,no:189},__clicksElements:[],__preloaded:!1}),$Y=n("h3",null,"Screen Readers",-1),SY=n("p",null,"用于提高屏幕阅读器可访问性",-1),jY=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"sr-only"),n("td",null,[n("code",null,"position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;")])]),n("tr",null,[n("td",null,"not-sr-only"),n("td",null,"position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;")])])],-1),PY=n("p",null,"使用 sr-only 在视觉上隐藏元素，而不对屏幕阅读器隐藏它：",-1),TY=n("p",null,"not-sr-only撤销sr-only的效果",-1),CY={__name:"189",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Co;return A(I,Co),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Co))})(),(s,i)=>(h(),S(Y,R(L(y(Co))),{default:C(()=>[$Y,SY,jY,PY,TY]),_:1},16))}},EY=k(CY,[["__file","/@slidev/slides/189.md"]]),Eo=g({title:"Forced Color Adjust",level:2,layout:"slim-table",srcSequence:"./pages/015Accessibility.md"}),AY=g({layout:c(()=>Eo.layout),transition:c(()=>Eo.transition),class:c(()=>Eo.class),clicks:c(()=>Eo.clicks),name:c(()=>Eo.name),preload:c(()=>Eo.preload),slide:{raw:"",title:"Forced Color Adjust",level:2,content:"",frontmatterStyle:"frontmatter",note:"",index:189,start:27,end:42,source:{filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",raw:`---
title: Forced Color Adjust
level: 2
layout: slim-table
---

### Forced Color Adjust

可能是对视障患者有用的。。。

| Class                    | Properties                 |
| ------------------------ | -------------------------- |
| forced-color-adjust-auto | forced-color-adjust: auto; |
| forced-color-adjust-none | forced-color-adjust: none; |
`,title:"Forced Color Adjust",level:2,content:`### Forced Color Adjust

可能是对视障患者有用的。。。

| Class                    | Properties                 |
| ------------------------ | -------------------------- |
| forced-color-adjust-auto | forced-color-adjust: auto; |
| forced-color-adjust-none | forced-color-adjust: none; |`,frontmatter:{title:"Forced Color Adjust",level:2,layout:"slim-table"},frontmatterStyle:"frontmatter",index:2,start:27,end:42},filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",noteHTML:"",frontmatter:Eo,filepath:"D:\\coding\\Projects\\frontend\\my-slidevs\\projects\\slidevs\\learn-tailwind\\pages\\015Accessibility.md",id:189,no:190},__clicksElements:[],__preloaded:!1}),OY=n("h3",null,"Forced Color Adjust",-1),DY=n("p",null,"可能是对视障患者有用的。。。",-1),BY=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Class"),n("th",null,"Properties")])]),n("tbody",null,[n("tr",null,[n("td",null,"forced-color-adjust-auto"),n("td",null,"forced-color-adjust: auto;")]),n("tr",null,[n("td",null,"forced-color-adjust-none"),n("td",null,"forced-color-adjust: none;")])])],-1),MY={__name:"190",setup(e){const t=u(D);B(t,"nav"),u(O);const l=u(M);u(F);const o=Eo;return A(I,Eo),(()=>{var i,a;const s=t.nav.rawRoutes.find(r=>r.path===String(l.value));(a=(i=s==null?void 0:s.meta)==null?void 0:i.slide)!=null&&a.frontmatter&&(Object.keys(s.meta.slide.frontmatter).forEach(r=>{r in o||delete s.meta.slide.frontmatter[r]}),Object.assign(s.meta.slide.frontmatter,Eo))})(),(s,i)=>(h(),S(Y,R(L(y(Eo))),{default:C(()=>[OY,DY,BY]),_:1},16))}},FY=k(MY,[["__file","/@slidev/slides/190.md"]]),IY=[{path:"1",name:"page-1",component:mP,meta:uP},{path:"2",name:"page-2",component:$P,meta:_P},{path:"3",name:"page-3",component:LP,meta:BP},{path:"4",name:"page-4",component:GP,meta:NP},{path:"5",name:"page-5",component:fT,meta:iT},{path:"6",name:"page-6",component:FT,meta:AT},{path:"7",name:"page-7",component:ZT,meta:VT},{path:"8",name:"page-8",component:pC,meta:sC},{path:"9",name:"page-9",component:$C,meta:yC},{path:"10",name:"page-10",component:BC,meta:EC},{path:"11",name:"page-11",component:UC,meta:zC},{path:"12",name:"page-12",component:rE,meta:tE},{path:"13",name:"page-13",component:pE,meta:aE},{path:"14",name:"page-14",component:jE,meta:kE},{path:"15",name:"page-15",component:AE,meta:PE},{path:"16",name:"page-16",component:NE,meta:OE},{path:"17",name:"page-17",component:KE,meta:qE},{path:"18",name:"page-18",component:t9,meta:YE},{path:"19",name:"page-19",component:r9,meta:n9},{path:"20",name:"page-20",component:y9,meta:h9},{path:"21",name:"page-21",component:S9,meta:b9},{path:"22",name:"page-22",component:O9,meta:j9},{path:"23",name:"page-23",component:R9,meta:D9},{path:"24",name:"page-24",component:V9,meta:H9},{path:"25",name:"page-25",component:J9,meta:G9},{path:"26",name:"page-26",component:eA,meta:Z9},{path:"27",name:"page-27",component:iA,meta:tA},{path:"28",name:"page-28",component:fA,meta:rA},{path:"29",name:"page-29",component:yA,meta:pA},{path:"30",name:"page-30",component:SA,meta:bA},{path:"31",name:"page-31",component:OA,meta:jA},{path:"32",name:"page-32",component:IA,meta:DA},{path:"33",name:"page-33",component:zA,meta:LA},{path:"34",name:"page-34",component:UA,meta:NA},{path:"35",name:"page-35",component:nO,meta:KA},{path:"36",name:"page-36",component:aO,meta:sO},{path:"37",name:"page-37",component:vO,meta:cO},{path:"38",name:"page-38",component:SO,meta:gO},{path:"39",name:"page-39",component:BO,meta:jO},{path:"40",name:"page-40",component:VO,meta:MO},{path:"41",name:"page-41",component:JO,meta:GO},{path:"42",name:"page-42",component:nD,meta:ZO},{path:"43",name:"page-43",component:rD,meta:sD},{path:"44",name:"page-44",component:pD,meta:aD},{path:"45",name:"page-45",component:_D,meta:mD},{path:"46",name:"page-46",component:$D,meta:yD},{path:"47",name:"page-47",component:OD,meta:SD},{path:"48",name:"page-48",component:HD,meta:DD},{path:"49",name:"page-49",component:KD,meta:zD},{path:"50",name:"page-50",component:t7,meta:YD},{path:"51",name:"page-51",component:r7,meta:n7},{path:"52",name:"page-52",component:f7,meta:a7},{path:"53",name:"page-53",component:b7,meta:p7},{path:"54",name:"page-54",component:P7,meta:w7},{path:"55",name:"page-55",component:O7,meta:T7},{path:"56",name:"page-56",component:L7,meta:D7},{path:"57",name:"page-57",component:V7,meta:R7},{path:"58",name:"page-58",component:J7,meta:G7},{path:"59",name:"page-59",component:lB,meta:Z7},{path:"60",name:"page-60",component:cB,meta:oB},{path:"61",name:"page-61",component:gB,meta:dB},{path:"62",name:"page-62",component:xB,meta:_B},{path:"63",name:"page-63",component:TB,meta:kB},{path:"64",name:"page-64",component:OB,meta:CB},{path:"65",name:"page-65",component:HB,meta:DB},{path:"66",name:"page-66",component:GB,meta:zB},{path:"67",name:"page-67",component:JB,meta:WB},{path:"68",name:"page-68",component:eM,meta:ZB},{path:"69",name:"page-69",component:cM,meta:tM},{path:"70",name:"page-70",component:mM,meta:dM},{path:"71",name:"page-71",component:_M,meta:hM},{path:"72",name:"page-72",component:SM,meta:yM},{path:"73",name:"page-73",component:DM,meta:jM},{path:"74",name:"page-74",component:RM,meta:BM},{path:"75",name:"page-75",component:GM,meta:HM},{path:"76",name:"page-76",component:JM,meta:WM},{path:"77",name:"page-77",component:tF,meta:ZM},{path:"78",name:"page-78",component:dF,meta:nF},{path:"79",name:"page-79",component:hF,meta:uF},{path:"80",name:"page-80",component:wF,meta:vF},{path:"81",name:"page-81",component:TF,meta:xF},{path:"82",name:"page-82",component:LF,meta:CF},{path:"83",name:"page-83",component:VF,meta:RF},{path:"84",name:"page-84",component:JF,meta:GF},{path:"85",name:"page-85",component:lI,meta:ZF},{path:"86",name:"page-86",component:mI,meta:oI},{path:"87",name:"page-87",component:wI,meta:hI},{path:"88",name:"page-88",component:OI,meta:xI},{path:"89",name:"page-89",component:HI,meta:DI},{path:"90",name:"page-90",component:YI,meta:zI},{path:"91",name:"page-91",component:oL,meta:JI},{path:"92",name:"page-92",component:fL,meta:iL},{path:"93",name:"page-93",component:_L,meta:pL},{path:"94",name:"page-94",component:kL,meta:yL},{path:"95",name:"page-95",component:CL,meta:$L},{path:"96",name:"page-96",component:ML,meta:EL},{path:"97",name:"page-97",component:NL,meta:FL},{path:"98",name:"page-98",component:KL,meta:qL},{path:"99",name:"page-99",component:QL,meta:YL},{path:"100",name:"page-100",component:sR,meta:eR},{path:"101",name:"page-101",component:fR,meta:lR},{path:"102",name:"page-102",component:xR,meta:pR},{path:"103",name:"page-103",component:PR,meta:kR},{path:"104",name:"page-104",component:DR,meta:TR},{path:"105",name:"page-105",component:RR,meta:BR},{path:"106",name:"page-106",component:VR,meta:HR},{path:"107",name:"page-107",component:JR,meta:GR},{path:"108",name:"page-108",component:tH,meta:ZR},{path:"109",name:"page-109",component:aH,meta:nH},{path:"110",name:"page-110",component:hH,meta:cH},{path:"111",name:"page-111",component:yH,meta:vH},{path:"112",name:"page-112",component:jH,meta:bH},{path:"113",name:"page-113",component:AH,meta:PH},{path:"114",name:"page-114",component:FH,meta:OH},{path:"115",name:"page-115",component:qH,meta:IH},{path:"116",name:"page-116",component:YH,meta:VH},{path:"117",name:"page-117",component:ez,meta:JH},{path:"118",name:"page-118",component:oz,meta:tz},{path:"119",name:"page-119",component:uz,meta:iz},{path:"120",name:"page-120",component:gz,meta:fz},{path:"121",name:"page-121",component:kz,meta:_z},{path:"122",name:"page-122",component:Tz,meta:$z},{path:"123",name:"page-123",component:Mz,meta:Cz},{path:"124",name:"page-124",component:Rz,meta:Fz},{path:"125",name:"page-125",component:Gz,meta:Hz},{path:"126",name:"page-126",component:Zz,meta:Wz},{path:"127",name:"page-127",component:nN,meta:Xz},{path:"128",name:"page-128",component:aN,meta:sN},{path:"129",name:"page-129",component:pN,meta:cN},{path:"130",name:"page-130",component:yN,meta:mN},{path:"131",name:"page-131",component:kN,meta:bN},{path:"132",name:"page-132",component:CN,meta:$N},{path:"133",name:"page-133",component:BN,meta:EN},{path:"134",name:"page-134",component:RN,meta:MN},{path:"135",name:"page-135",component:GN,meta:HN},{path:"136",name:"page-136",component:JN,meta:WN},{path:"137",name:"page-137",component:tq,meta:ZN},{path:"138",name:"page-138",component:iq,meta:nq},{path:"139",name:"page-139",component:uq,meta:rq},{path:"140",name:"page-140",component:vq,meta:fq},{path:"141",name:"page-141",component:kq,meta:gq},{path:"142",name:"page-142",component:Tq,meta:$q},{path:"143",name:"page-143",component:Dq,meta:Cq},{path:"144",name:"page-144",component:Lq,meta:Bq},{path:"145",name:"page-145",component:qq,meta:Rq},{path:"146",name:"page-146",component:Kq,meta:Vq},{path:"147",name:"page-147",component:Qq,meta:Yq},{path:"148",name:"page-148",component:lV,meta:eV},{path:"149",name:"page-149",component:cV,meta:oV},{path:"150",name:"page-150",component:pV,meta:dV},{path:"151",name:"page-151",component:xV,meta:mV},{path:"152",name:"page-152",component:TV,meta:kV},{path:"153",name:"page-153",component:IV,meta:CV},{path:"154",name:"page-154",component:GV,meta:LV},{path:"155",name:"page-155",component:JV,meta:WV},{path:"156",name:"page-156",component:eG,meta:ZV},{path:"157",name:"page-157",component:iG,meta:tG},{path:"158",name:"page-158",component:vG,meta:rG},{path:"159",name:"page-159",component:xG,meta:gG},{path:"160",name:"page-160",component:CG,meta:kG},{path:"161",name:"page-161",component:MG,meta:EG},{path:"162",name:"page-162",component:qG,meta:FG},{path:"163",name:"page-163",component:JG,meta:VG},{path:"164",name:"page-164",component:eW,meta:ZG},{path:"165",name:"page-165",component:oW,meta:tW},{path:"166",name:"page-166",component:uW,meta:iW},{path:"167",name:"page-167",component:hW,meta:fW},{path:"168",name:"page-168",component:$W,meta:vW},{path:"169",name:"page-169",component:DW,meta:SW},{path:"170",name:"page-170",component:bU,meta:hU},{path:"171",name:"page-171",component:SU,meta:wU},{path:"172",name:"page-172",component:AU,meta:jU},{path:"173",name:"page-173",component:RU,meta:OU},{path:"174",name:"page-174",component:WU,meta:HU},{path:"175",name:"page-175",component:XU,meta:UU},{path:"176",name:"page-176",component:sK,meta:QU},{path:"177",name:"page-177",component:aK,meta:lK},{path:"178",name:"page-178",component:mK,meta:cK},{path:"179",name:"page-179",component:wK,meta:hK},{path:"180",name:"page-180",component:PK,meta:xK},{path:"181",name:"page-181",component:DK,meta:TK},{path:"182",name:"page-182",component:GK,meta:BK},{path:"183",name:"page-183",component:QK,meta:WK},{path:"184",name:"page-184",component:sY,meta:eY},{path:"185",name:"page-185",component:aY,meta:lY},{path:"186",name:"page-186",component:pY,meta:cY},{path:"187",name:"page-187",component:_Y,meta:mY},{path:"188",name:"page-188",component:xY,meta:yY},{path:"189",name:"page-189",component:EY,meta:kY},{path:"190",name:"page-190",component:FY,meta:AY}],LY=[],et=IY,vc=[{name:"play",path:"/",component:D8,children:[...et,...LY]},{name:"print",path:"/print",component:iP},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!ea.remote||ea.remote===t.query.password)return!0;if(ea.remote&&t.query.password===void 0){const l=prompt("Enter password");if(ea.remote===l)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};vc.push({path:"/presenter/print",component:()=>ur(()=>import("./PresenterPrint-yUqshNd7.js"),__vite__mapDeps([0,1]))}),vc.push({name:"presenter",path:"/presenter/:no",component:()=>ur(()=>import("./Presenter-t5lmtnDy.js"),__vite__mapDeps([2,1,3,4])),beforeEnter:e}),vc.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const kt=Tx({history:P2("/my-slidevs/slidevs/learn-tailwind"),routes:vc});function RY(e,t,{mode:l="replace"}={}){return c({get(){const o=kt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){ut(()=>{kt[y(l)]({query:{...kt.currentRoute.value.query,[e]:o}})})}})}const t_=le(0);ut(()=>{kt.afterEach(async()=>{await ut(),t_.value+=1})});const n_=le(0),Jt=c(()=>kt.currentRoute.value),si=c(()=>Jt.value.query.print!==void 0),HY=c(()=>Jt.value.query.print==="clicks"),Xo=c(()=>Jt.value.query.embedded!==void 0),xt=c(()=>Jt.value.path.startsWith("/presenter")),zY=c(()=>Jt.value.path.startsWith("/notes")),rr=c(()=>si.value&&!HY.value),Fu=c(()=>Jt.value.query.password),NY=c(()=>!xt.value&&(!He.remote||Fu.value===He.remote)),Wm=RY("clicks","0"),qY=c(()=>et.length),VY=c(()=>Jt.value.path),tt=c(()=>Number.parseInt(VY.value.split(/\//g).slice(-1)[0])||1);c(()=>dd(tt.value));const mt=c(()=>et.find(e=>e.path===`${tt.value}`));c(()=>{var e,t,l;return(l=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:l.id});c(()=>{var e,t;return((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(tt.value===1?"cover":"default")});const Rd=c(()=>et.find(e=>e.path===`${Math.min(et.length,tt.value+1)}`)),GY=c(()=>et.find(e=>e.path===`${Math.max(1,tt.value-1)}`)),WY=c(()=>{var e,t;return t_.value,((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Rt=c({get(){if(rr.value)return 99999;let e=+(Wm.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Wm.value=e.toString()}}),Nc=c(()=>{var e,t;return+(((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??WY.value.length)}),UY=c(()=>tt.value<et.length||Rt.value<Nc.value),KY=c(()=>tt.value>1||Rt.value>0),YY=c(()=>et.filter(e=>{var t,l;return(l=(t=e.meta)==null?void 0:t.slide)==null?void 0:l.title}).reduce((e,t)=>(Hf(e,t),e),[])),JY=c(()=>zf(YY.value,mt.value));c(()=>Nf(JY.value));const ZY=c(()=>nJ(n_.value,mt.value,GY.value));Ae(mt,(e,t)=>{n_.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Pi(){Nc.value<=Rt.value?$a():Rt.value+=1}async function Ti(){Rt.value<=0?await Sa():Rt.value-=1}function dd(e){return xt.value?`/presenter/${e}`:`/${e}`}function $a(){const e=Math.min(et.length,tt.value+1);return fr(e)}async function Sa(e=!0){const t=Math.max(1,tt.value-1);await fr(t),e&&Nc.value&&kt.replace({query:{...Jt.value.query,clicks:Nc.value}})}function fr(e,t){return zc.value=!1,kt.push({path:dd(e),query:{...Jt.value.query,clicks:t}})}function XY(e){const t=le(0),{direction:l,distanceX:o,distanceY:s}=Qw(e,{onSwipeStart(i){i.pointerType==="touch"&&(wa.value||(t.value=hu()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||wa.value)return;const a=Math.abs(o.value),r=Math.abs(s.value);a/window.innerWidth>.3||a>75?l.value==="left"?Pi():Ti():(r/window.innerHeight>.4||r>200)&&(l.value==="down"?Sa():$a())}})}async function Iu(){const{saveAs:e}=await ur(()=>import("./FileSaver.min-LVY1lggI.js").then(t=>t.F),__vite__mapDeps([]));e(typeof He.download=="string"?He.download:He.exportFilename?`${He.exportFilename}.pdf`:"/my-slidevs/slidevs/learn-tailwindslidev-exported.pdf",`${He.title}.pdf`)}async function QY(e){var t,l;if(e==null){const o=(l=(t=mt.value)==null?void 0:t.meta)==null?void 0:l.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Hf(e,t,l=1){var s,i,a,r,d,f,p;const o=(i=(s=t.meta)==null?void 0:s.slide)==null?void 0:i.level;o&&o>l&&e.length>0?Hf(e[e.length-1].children,t,l+1):e.push({children:[],level:l,path:t.path,hideInToc:!!((d=(r=(a=t.meta)==null?void 0:a.slide)==null?void 0:r.frontmatter)!=null&&d.hideInToc),title:(p=(f=t.meta)==null?void 0:f.slide)==null?void 0:p.title})}function zf(e,t,l=!1,o){return e.map(s=>{const i={...s,active:s.path===(t==null?void 0:t.path),hasActiveParent:l};return i.children.length>0&&(i.children=zf(i.children,t,i.active||i.hasActiveParent,i)),o&&(i.active||i.activeParent)&&(o.activeParent=!0),i})}function Nf(e,t=1){return e.filter(l=>!l.hideInToc).map(l=>({...l,children:Nf(l.children,t+1)}))}const eJ={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function tJ(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let l=e.name.includes("|")?e.name:eJ[e.name]||e.name;if(l.includes("|")){const[o,s]=l.split("|").map(i=>i.trim());l=t?s:o}if(l)return{...e,name:l}}function nJ(e,t,l){var s,i;let o=e>0?(s=l==null?void 0:l.meta)==null?void 0:s.transition:(i=t==null?void 0:t.meta)==null?void 0:i.transition;return o||(o=He.transition),tJ(o,e<0)}function sJ(){const e=He.titleTemplate.replace("%s",He.title||"Slidev");Jb({title:e,htmlAttrs:He.htmlAttrs}),lw(`${e} - shared`),aw(`${e} - drawings`);const t=`${location.origin}_${Xb()}`;function l(){zY.value||!xt.value&&!Dk.includes(location.host.split(":")[0])||(xt.value?(qr("page",+tt.value),qr("clicks",Rt.value)):(qr("viewerPage",+tt.value),qr("viewerClicks",Rt.value)),qr("lastUpdate",{id:t,type:xt.value?"presenter":"viewer",time:new Date().getTime()}))}kt.afterEach(l),Ae(Rt,l),ow(o=>{var i;kt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=o.lastUpdate)==null?void 0:i.type)==="presenter"&&(+o.page!=+tt.value||+Rt.value!=+o.clicks)&&(zc.value=!1,kt.replace({path:dd(o.page),query:{...kt.currentRoute.value.query,clicks:o.clicks||0}}))})}const lJ=Me({__name:"App",setup(e){return sJ(),(t,l)=>{const o=dr("RouterView"),s=dr("StarportCarrier");return h(),x(Pe,null,[Z(o),Z(s)],64)}}}),oJ=k(lJ,[["__file","D:/coding/Projects/frontend/my-slidevs/node_modules/.pnpm/@slidev+client@0.46.3_postcss@8.4.33_typescript@5.3.3_vite@5.0.12/node_modules/@slidev/client/App.vue"]]);function Hd(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Lu(e,t,l=".",o){if(!Hd(t))return Lu(e,{},l,o);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(o&&o(s,i,a,l)||(Array.isArray(a)&&Array.isArray(s[i])?s[i]=[...a,...s[i]]:Hd(a)&&Hd(s[i])?s[i]=Lu(a,s[i],(l?`${l}.`:"")+i.toString(),o):s[i]=a))}return s}function iJ(e){return(...t)=>t.reduce((l,o)=>Lu(l,o,"",e),{})}const rJ=iJ(),s_=1/60*1e3,aJ=typeof performance<"u"?()=>performance.now():()=>Date.now(),l_=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(aJ()),s_);function cJ(e){let t=[],l=[],o=0,s=!1,i=!1;const a=new WeakSet,r={schedule:(d,f=!1,p=!1)=>{const m=p&&s,v=m?t:l;return f&&a.add(d),v.indexOf(d)===-1&&(v.push(d),m&&s&&(o=t.length)),d},cancel:d=>{const f=l.indexOf(d);f!==-1&&l.splice(f,1),a.delete(d)},process:d=>{if(s){i=!0;return}if(s=!0,[t,l]=[l,t],l.length=0,o=t.length,o)for(let f=0;f<o;f++){const p=t[f];p(d),a.has(p)&&(r.schedule(p),e())}s=!1,i&&(i=!1,r.process(d))}};return r}const dJ=40;let Ru=!0,ja=!1,Hu=!1;const Er={delta:0,timestamp:0},Ra=["read","update","preRender","render","postRender"],ud=Ra.reduce((e,t)=>(e[t]=cJ(()=>ja=!0),e),{}),zu=Ra.reduce((e,t)=>{const l=ud[t];return e[t]=(o,s=!1,i=!1)=>(ja||pJ(),l.schedule(o,s,i)),e},{}),uJ=Ra.reduce((e,t)=>(e[t]=ud[t].cancel,e),{});Ra.reduce((e,t)=>(e[t]=()=>ud[t].process(Er),e),{});const fJ=e=>ud[e].process(Er),o_=e=>{ja=!1,Er.delta=Ru?s_:Math.max(Math.min(e-Er.timestamp,dJ),1),Er.timestamp=e,Hu=!0,Ra.forEach(fJ),Hu=!1,ja&&(Ru=!1,l_(o_))},pJ=()=>{ja=!0,Ru=!0,Hu||l_(o_)},i_=()=>Er;function r_(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(l[o[s]]=e[o[s]]);return l}var qf=function(){},Pa=function(){};qf=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Pa=function(e,t){if(!e)throw new Error(t)};const Nu=(e,t,l)=>Math.min(Math.max(l,e),t),zd=.001,mJ=.01,Um=10,hJ=.05,vJ=1;function gJ({duration:e=800,bounce:t=.25,velocity:l=0,mass:o=1}){let s,i;qf(e<=Um*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Nu(hJ,vJ,a),e=Nu(mJ,Um,e/1e3),a<1?(s=f=>{const p=f*a,m=p*e,v=p-l,_=qu(f,a),b=Math.exp(-m);return zd-v/_*b},i=f=>{const m=f*a*e,v=m*l+l,_=Math.pow(a,2)*Math.pow(f,2)*e,b=Math.exp(-m),$=qu(Math.pow(f,2),a);return(-s(f)+zd>0?-1:1)*((v-_)*b)/$}):(s=f=>{const p=Math.exp(-f*e),m=(f-l)*e+1;return-zd+p*m},i=f=>{const p=Math.exp(-f*e),m=(l-f)*(e*e);return p*m});const r=5/e,d=yJ(s,i,r);if(e=e*1e3,isNaN(d))return{stiffness:100,damping:10,duration:e};{const f=Math.pow(d,2)*o;return{stiffness:f,damping:a*2*Math.sqrt(o*f),duration:e}}}const _J=12;function yJ(e,t,l){let o=l;for(let s=1;s<_J;s++)o=o-e(o)/t(o);return o}function qu(e,t){return e*Math.sqrt(1-t*t)}const bJ=["duration","bounce"],wJ=["stiffness","damping","mass"];function Km(e,t){return t.some(l=>e[l]!==void 0)}function xJ(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Km(e,wJ)&&Km(e,bJ)){const l=gJ(e);t=Object.assign(Object.assign(Object.assign({},t),l),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Vf(e){var{from:t=0,to:l=1,restSpeed:o=2,restDelta:s}=e,i=r_(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:r,damping:d,mass:f,velocity:p,duration:m,isResolvedFromDuration:v}=xJ(i),_=Ym,b=Ym;function $(){const T=p?-(p/1e3):0,E=l-t,z=d/(2*Math.sqrt(r*f)),j=Math.sqrt(r/f)/1e3;if(s===void 0&&(s=Math.min(Math.abs(l-t)/100,.4)),z<1){const N=qu(j,z);_=V=>{const X=Math.exp(-z*j*V);return l-X*((T+z*j*E)/N*Math.sin(N*V)+E*Math.cos(N*V))},b=V=>{const X=Math.exp(-z*j*V);return z*j*X*(Math.sin(N*V)*(T+z*j*E)/N+E*Math.cos(N*V))-X*(Math.cos(N*V)*(T+z*j*E)-N*E*Math.sin(N*V))}}else if(z===1)_=N=>l-Math.exp(-j*N)*(E+(T+j*E)*N);else{const N=j*Math.sqrt(z*z-1);_=V=>{const X=Math.exp(-z*j*V),q=Math.min(N*V,300);return l-X*((T+z*j*E)*Math.sinh(q)+N*E*Math.cosh(q))/N}}}return $(),{next:T=>{const E=_(T);if(v)a.done=T>=m;else{const z=b(T)*1e3,j=Math.abs(z)<=o,N=Math.abs(l-E)<=s;a.done=j&&N}return a.value=a.done?l:E,a},flipTarget:()=>{p=-p,[t,l]=[l,t],$()}}}Vf.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Ym=e=>0,a_=(e,t,l)=>{const o=t-e;return o===0?1:(l-e)/o},Gf=(e,t,l)=>-l*e+l*t+e,c_=(e,t)=>l=>Math.max(Math.min(l,t),e),ca=e=>e%1?Number(e.toFixed(5)):e,Ta=/(-)?([\d]*\.?[\d])+/g,Vu=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,kJ=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ha(e){return typeof e=="string"}const za={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},da=Object.assign(Object.assign({},za),{transform:c_(0,1)}),lc=Object.assign(Object.assign({},za),{default:1}),Wf=e=>({test:t=>Ha(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),zi=Wf("deg"),ua=Wf("%"),Oe=Wf("px"),Jm=Object.assign(Object.assign({},ua),{parse:e=>ua.parse(e)/100,transform:e=>ua.transform(e*100)}),Uf=(e,t)=>l=>!!(Ha(l)&&kJ.test(l)&&l.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(l,t)),d_=(e,t,l)=>o=>{if(!Ha(o))return o;const[s,i,a,r]=o.match(Ta);return{[e]:parseFloat(s),[t]:parseFloat(i),[l]:parseFloat(a),alpha:r!==void 0?parseFloat(r):1}},Qi={test:Uf("hsl","hue"),parse:d_("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:l,alpha:o=1})=>"hsla("+Math.round(e)+", "+ua.transform(ca(t))+", "+ua.transform(ca(l))+", "+ca(da.transform(o))+")"},$J=c_(0,255),Nd=Object.assign(Object.assign({},za),{transform:e=>Math.round($J(e))}),bi={test:Uf("rgb","red"),parse:d_("red","green","blue"),transform:({red:e,green:t,blue:l,alpha:o=1})=>"rgba("+Nd.transform(e)+", "+Nd.transform(t)+", "+Nd.transform(l)+", "+ca(da.transform(o))+")"};function SJ(e){let t="",l="",o="",s="";return e.length>5?(t=e.substr(1,2),l=e.substr(3,2),o=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),l=e.substr(2,1),o=e.substr(3,1),s=e.substr(4,1),t+=t,l+=l,o+=o,s+=s),{red:parseInt(t,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:s?parseInt(s,16)/255:1}}const Gu={test:Uf("#"),parse:SJ,transform:bi.transform},Et={test:e=>bi.test(e)||Gu.test(e)||Qi.test(e),parse:e=>bi.test(e)?bi.parse(e):Qi.test(e)?Qi.parse(e):Gu.parse(e),transform:e=>Ha(e)?e:e.hasOwnProperty("red")?bi.transform(e):Qi.transform(e)},u_="${c}",f_="${n}";function jJ(e){var t,l,o,s;return isNaN(e)&&Ha(e)&&((l=(t=e.match(Ta))===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0)+((s=(o=e.match(Vu))===null||o===void 0?void 0:o.length)!==null&&s!==void 0?s:0)>0}function p_(e){typeof e=="number"&&(e=`${e}`);const t=[];let l=0;const o=e.match(Vu);o&&(l=o.length,e=e.replace(Vu,u_),t.push(...o.map(Et.parse)));const s=e.match(Ta);return s&&(e=e.replace(Ta,f_),t.push(...s.map(za.parse))),{values:t,numColors:l,tokenised:e}}function m_(e){return p_(e).values}function h_(e){const{values:t,numColors:l,tokenised:o}=p_(e),s=t.length;return i=>{let a=o;for(let r=0;r<s;r++)a=a.replace(r<l?u_:f_,r<l?Et.transform(i[r]):ca(i[r]));return a}}const PJ=e=>typeof e=="number"?0:e;function TJ(e){const t=m_(e);return h_(e)(t.map(PJ))}const Na={test:jJ,parse:m_,createTransformer:h_,getAnimatableNone:TJ},CJ=new Set(["brightness","contrast","saturate","opacity"]);function EJ(e){let[t,l]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=l.match(Ta)||[];if(!o)return e;const s=l.replace(o,"");let i=CJ.has(t)?1:0;return o!==l&&(i*=100),t+"("+i+s+")"}const AJ=/([a-z-]*)\(.*?\)/g,Wu=Object.assign(Object.assign({},Na),{getAnimatableNone:e=>{const t=e.match(AJ);return t?t.map(EJ).join(" "):e}});function qd(e,t,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?e+(t-e)*6*l:l<1/2?t:l<2/3?e+(t-e)*(2/3-l)*6:e}function Zm({hue:e,saturation:t,lightness:l,alpha:o}){e/=360,t/=100,l/=100;let s=0,i=0,a=0;if(!t)s=i=a=l;else{const r=l<.5?l*(1+t):l+t-l*t,d=2*l-r;s=qd(d,r,e+1/3),i=qd(d,r,e),a=qd(d,r,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:o}}const OJ=(e,t,l)=>{const o=e*e,s=t*t;return Math.sqrt(Math.max(0,l*(s-o)+o))},DJ=[Gu,bi,Qi],Xm=e=>DJ.find(t=>t.test(e)),Qm=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,v_=(e,t)=>{let l=Xm(e),o=Xm(t);Pa(!!l,Qm(e)),Pa(!!o,Qm(t));let s=l.parse(e),i=o.parse(t);l===Qi&&(s=Zm(s),l=bi),o===Qi&&(i=Zm(i),o=bi);const a=Object.assign({},s);return r=>{for(const d in a)d!=="alpha"&&(a[d]=OJ(s[d],i[d],r));return a.alpha=Gf(s.alpha,i.alpha,r),l.transform(a)}},BJ=e=>typeof e=="number",MJ=(e,t)=>l=>t(e(l)),g_=(...e)=>e.reduce(MJ);function __(e,t){return BJ(e)?l=>Gf(e,t,l):Et.test(e)?v_(e,t):b_(e,t)}const y_=(e,t)=>{const l=[...e],o=l.length,s=e.map((i,a)=>__(i,t[a]));return i=>{for(let a=0;a<o;a++)l[a]=s[a](i);return l}},FJ=(e,t)=>{const l=Object.assign(Object.assign({},e),t),o={};for(const s in l)e[s]!==void 0&&t[s]!==void 0&&(o[s]=__(e[s],t[s]));return s=>{for(const i in o)l[i]=o[i](s);return l}};function eh(e){const t=Na.parse(e),l=t.length;let o=0,s=0,i=0;for(let a=0;a<l;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?i++:s++;return{parsed:t,numNumbers:o,numRGB:s,numHSL:i}}const b_=(e,t)=>{const l=Na.createTransformer(t),o=eh(e),s=eh(t);return o.numHSL===s.numHSL&&o.numRGB===s.numRGB&&o.numNumbers>=s.numNumbers?g_(y_(o.parsed,s.parsed),l):(qf(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},IJ=(e,t)=>l=>Gf(e,t,l);function LJ(e){if(typeof e=="number")return IJ;if(typeof e=="string")return Et.test(e)?v_:b_;if(Array.isArray(e))return y_;if(typeof e=="object")return FJ}function RJ(e,t,l){const o=[],s=l||LJ(e[0]),i=e.length-1;for(let a=0;a<i;a++){let r=s(e[a],e[a+1]);if(t){const d=Array.isArray(t)?t[a]:t;r=g_(d,r)}o.push(r)}return o}function HJ([e,t],[l]){return o=>l(a_(e,t,o))}function zJ(e,t){const l=e.length,o=l-1;return s=>{let i=0,a=!1;if(s<=e[0]?a=!0:s>=e[o]&&(i=o-1,a=!0),!a){let d=1;for(;d<l&&!(e[d]>s||d===o);d++);i=d-1}const r=a_(e[i],e[i+1],s);return t[i](r)}}function w_(e,t,{clamp:l=!0,ease:o,mixer:s}={}){const i=e.length;Pa(i===t.length,"Both input and output ranges must be the same length"),Pa(!o||!Array.isArray(o)||o.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=RJ(t,o,s),r=i===2?HJ(e,a):zJ(e,a);return l?d=>r(Nu(e[0],e[i-1],d)):r}const fd=e=>t=>1-e(1-t),Kf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,NJ=e=>t=>Math.pow(t,e),x_=e=>t=>t*t*((e+1)*t-e),qJ=e=>{const t=x_(e);return l=>(l*=2)<1?.5*t(l):.5*(2-Math.pow(2,-10*(l-1)))},k_=1.525,VJ=4/11,GJ=8/11,WJ=9/10,$_=e=>e,Yf=NJ(2),UJ=fd(Yf),S_=Kf(Yf),j_=e=>1-Math.sin(Math.acos(e)),P_=fd(j_),KJ=Kf(P_),Jf=x_(k_),YJ=fd(Jf),JJ=Kf(Jf),ZJ=qJ(k_),XJ=4356/361,QJ=35442/1805,eZ=16061/1805,qc=e=>{if(e===1||e===0)return e;const t=e*e;return e<VJ?7.5625*t:e<GJ?9.075*t-9.9*e+3.4:e<WJ?XJ*t-QJ*e+eZ:10.8*e*e-20.52*e+10.72},tZ=fd(qc),nZ=e=>e<.5?.5*(1-qc(1-e*2)):.5*qc(e*2-1)+.5;function sZ(e,t){return e.map(()=>t||S_).splice(0,e.length-1)}function lZ(e){const t=e.length;return e.map((l,o)=>o!==0?o/(t-1):0)}function oZ(e,t){return e.map(l=>l*t)}function gc({from:e=0,to:t=1,ease:l,offset:o,duration:s=300}){const i={done:!1,value:e},a=Array.isArray(t)?t:[e,t],r=oZ(o&&o.length===a.length?o:lZ(a),s);function d(){return w_(r,a,{ease:Array.isArray(l)?l:sZ(a,l)})}let f=d();return{next:p=>(i.value=f(p),i.done=p>=s,i),flipTarget:()=>{a.reverse(),f=d()}}}function iZ({velocity:e=0,from:t=0,power:l=.8,timeConstant:o=350,restDelta:s=.5,modifyTarget:i}){const a={done:!1,value:t};let r=l*e;const d=t+r,f=i===void 0?d:i(d);return f!==d&&(r=f-t),{next:p=>{const m=-r*Math.exp(-p/o);return a.done=!(m>s||m<-s),a.value=a.done?f:f+m,a},flipTarget:()=>{}}}const th={keyframes:gc,spring:Vf,decay:iZ};function rZ(e){if(Array.isArray(e.to))return gc;if(th[e.type])return th[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?gc:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Vf:gc}function T_(e,t,l=0){return e-t-l}function aZ(e,t,l=0,o=!0){return o?T_(t+-e,t,l):t-(e-t)+l}function cZ(e,t,l,o){return o?e>=t+l:e<=-l}const dZ=e=>{const t=({delta:l})=>e(l);return{start:()=>zu.update(t,!0),stop:()=>uJ.update(t)}};function C_(e){var t,l,{from:o,autoplay:s=!0,driver:i=dZ,elapsed:a=0,repeat:r=0,repeatType:d="loop",repeatDelay:f=0,onPlay:p,onStop:m,onComplete:v,onRepeat:_,onUpdate:b}=e,$=r_(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:T}=$,E,z=0,j=$.duration,N,V=!1,X=!0,q;const J=rZ($);!((l=(t=J).needsInterpolation)===null||l===void 0)&&l.call(t,o,T)&&(q=w_([0,100],[o,T],{clamp:!1}),o=0,T=100);const U=J(Object.assign(Object.assign({},$),{from:o,to:T}));function ie(){z++,d==="reverse"?(X=z%2===0,a=aZ(a,j,f,X)):(a=T_(a,j,f),d==="mirror"&&U.flipTarget()),V=!1,_&&_()}function pe(){E.stop(),v&&v()}function ne(Se){if(X||(Se=-Se),a+=Se,!V){const Ge=U.next(Math.max(0,a));N=Ge.value,q&&(N=q(N)),V=X?Ge.done:a<=0}b==null||b(N),V&&(z===0&&(j??(j=a)),z<r?cZ(a,j,f,X)&&ie():pe())}function be(){p==null||p(),E=i(ne),E.start()}return s&&be(),{stop:()=>{m==null||m(),E.stop()}}}function E_(e,t){return t?e*(1e3/t):0}function uZ({from:e=0,velocity:t=0,min:l,max:o,power:s=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:r=10,restDelta:d=1,modifyTarget:f,driver:p,onUpdate:m,onComplete:v,onStop:_}){let b;function $(j){return l!==void 0&&j<l||o!==void 0&&j>o}function T(j){return l===void 0?o:o===void 0||Math.abs(l-j)<Math.abs(o-j)?l:o}function E(j){b==null||b.stop(),b=C_(Object.assign(Object.assign({},j),{driver:p,onUpdate:N=>{var V;m==null||m(N),(V=j.onUpdate)===null||V===void 0||V.call(j,N)},onComplete:v,onStop:_}))}function z(j){E(Object.assign({type:"spring",stiffness:a,damping:r,restDelta:d},j))}if($(e))z({from:e,velocity:t,to:T(e)});else{let j=s*t+e;typeof f<"u"&&(j=f(j));const N=T(j),V=N===l?-1:1;let X,q;const J=U=>{X=q,q=U,t=E_(U-X,i_().delta),(V===1&&U>N||V===-1&&U<N)&&z({from:U,to:N,velocity:t})};E({type:"decay",from:e,velocity:t,timeConstant:i,power:s,restDelta:d,modifyTarget:f,onUpdate:$(j)?J:void 0})}return{stop:()=>b==null?void 0:b.stop()}}const A_=(e,t)=>1-3*t+3*e,O_=(e,t)=>3*t-6*e,D_=e=>3*e,Vc=(e,t,l)=>((A_(t,l)*e+O_(t,l))*e+D_(t))*e,B_=(e,t,l)=>3*A_(t,l)*e*e+2*O_(t,l)*e+D_(t),fZ=1e-7,pZ=10;function mZ(e,t,l,o,s){let i,a,r=0;do a=t+(l-t)/2,i=Vc(a,o,s)-e,i>0?l=a:t=a;while(Math.abs(i)>fZ&&++r<pZ);return a}const hZ=8,vZ=.001;function gZ(e,t,l,o){for(let s=0;s<hZ;++s){const i=B_(t,l,o);if(i===0)return t;const a=Vc(t,l,o)-e;t-=a/i}return t}const _c=11,oc=1/(_c-1);function _Z(e,t,l,o){if(e===t&&l===o)return $_;const s=new Float32Array(_c);for(let a=0;a<_c;++a)s[a]=Vc(a*oc,e,l);function i(a){let r=0,d=1;const f=_c-1;for(;d!==f&&s[d]<=a;++d)r+=oc;--d;const p=(a-s[d])/(s[d+1]-s[d]),m=r+p*oc,v=B_(m,e,l);return v>=vZ?gZ(a,m,e,l):v===0?m:mZ(a,r,r+oc,e,l)}return a=>a===0||a===1?a:Vc(i(a),t,o)}const Vd={};class yZ{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,l,o){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,l,o)}clear(){this.subscriptions.clear()}}function nh(e){return!isNaN(parseFloat(e))}class bZ{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new yZ,this.canTrackVelocity=!1,this.updateAndNotify=l=>{this.prev=this.current,this.current=l;const{delta:o,timestamp:s}=i_();this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s),zu.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>zu.postRender(this.velocityCheck),this.velocityCheck=({timestamp:l})=>{this.canTrackVelocity||(this.canTrackVelocity=nh(this.current)),l!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=nh(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?E_(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(l=>{const{stop:o}=t(l);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function wZ(e){return new bZ(e)}const{isArray:xZ}=Array;function kZ(){const e=le({}),t=o=>{const s=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};o?xZ(o)?o.forEach(s):s(o):Object.keys(e.value).forEach(s)},l=(o,s,i)=>{if(e.value[o])return e.value[o];const a=wZ(s);return a.onChange(r=>i[o]=r),e.value[o]=a,a};return Pw(t),{motionValues:e,get:l,stop:t}}function $Z(e){return Array.isArray(e)}function Ni(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Gd(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function SZ(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Wd(){return{type:"keyframes",ease:"linear",duration:300}}function jZ(e){return{type:"keyframes",duration:800,values:e}}const sh={default:SZ,x:Ni,y:Ni,z:Ni,rotate:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scaleX:Gd,scaleY:Gd,scale:Gd,backgroundColor:Wd,color:Wd,opacity:Wd};function M_(e,t){let l;return $Z(t)?l=jZ:l=sh[e]||sh.default,{to:t,...l(t)}}const lh={...za,transform:Math.round},F_={color:Et,backgroundColor:Et,outlineColor:Et,fill:Et,stroke:Et,borderColor:Et,borderTopColor:Et,borderRightColor:Et,borderBottomColor:Et,borderLeftColor:Et,borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,size:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,rotate:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:lc,scaleX:lc,scaleY:lc,scaleZ:lc,skew:zi,skewX:zi,skewY:zi,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:da,originX:Jm,originY:Jm,originZ:Oe,zIndex:lh,filter:Wu,WebkitFilter:Wu,fillOpacity:da,strokeOpacity:da,numOctaves:lh},Zf=e=>F_[e];function I_(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function PZ(e,t){let l=Zf(e);return l!==Wu&&(l=Na),l.getAnimatableNone?l.getAnimatableNone(t):void 0}const TZ={linear:$_,easeIn:Yf,easeInOut:S_,easeOut:UJ,circIn:j_,circInOut:KJ,circOut:P_,backIn:Jf,backInOut:JJ,backOut:YJ,anticipate:ZJ,bounceIn:tZ,bounceInOut:nZ,bounceOut:qc};function oh(e){if(Array.isArray(e)){const[t,l,o,s]=e;return _Z(t,l,o,s)}else if(typeof e=="string")return TZ[e];return e}function CZ(e){return Array.isArray(e)&&typeof e[0]!="number"}function ih(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Na.test(t)&&!t.startsWith("url("))}function EZ(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function AZ({ease:e,times:t,delay:l,...o}){const s={...o};return t&&(s.offset=t),e&&(s.ease=CZ(e)?e.map(oh):oh(e)),l&&(s.elapsed=-l),s}function OZ(e,t,l){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),EZ(t),DZ(e)||(e={...e,...M_(l,t.to)}),{...t,...AZ(e)}}function DZ({delay:e,repeat:t,repeatType:l,repeatDelay:o,from:s,...i}){return!!Object.keys(i).length}function BZ(e,t){return e[t]||e.default||e}function MZ(e,t,l,o,s){const i=BZ(o,e);let a=i.from===null||i.from===void 0?t.get():i.from;const r=ih(e,l);a==="none"&&r&&typeof l=="string"&&(a=PZ(e,l));const d=ih(e,a);function f(m){const v={from:a,to:l,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:_=>t.set(_)};return i.type==="inertia"||i.type==="decay"?uZ({...v,...i}):C_({...OZ(i,v,e),onUpdate:_=>{v.onUpdate(_),i.onUpdate&&i.onUpdate(_)},onComplete:()=>{o.onComplete&&o.onComplete(),s&&s(),m&&m()}})}function p(m){return t.set(l),o.onComplete&&o.onComplete(),s&&s(),m&&m(),{stop:()=>{}}}return!d||!r||i.type===!1?p:f}function FZ(){const{motionValues:e,stop:t,get:l}=kZ();return{motionValues:e,stop:t,push:(s,i,a,r={},d)=>{const f=a[s],p=l(s,f,a);if(r&&r.immediate){p.set(i);return}const m=MZ(s,p,i,r,d);p.start(m)}}}function IZ(e,t={},{motionValues:l,push:o,stop:s}=FZ()){const i=y(t),a=le(!1);Ae(l,m=>{a.value=Object.values(m).filter(v=>v.isAnimating()).length>0},{immediate:!0,deep:!0});const r=m=>{if(!i||!i[m])throw new Error(`The variant ${m} does not exist.`);return i[m]},d=m=>(typeof m=="string"&&(m=r(m)),Promise.all(Object.entries(m).map(([v,_])=>{if(v!=="transition")return new Promise(b=>o(v,_,e,m.transition||M_(v,m[v]),b))}).filter(Boolean)));return{isAnimating:a,apply:d,set:m=>{const v=_a(m)?m:r(m);Object.entries(v).forEach(([_,b])=>{_!=="transition"&&o(_,b,e,{immediate:!0})})},leave:async m=>{let v;if(i&&(i.leave&&(v=i.leave),!i.leave&&i.initial&&(v=i.initial)),!v){m();return}await d(v),m()},stop:s}}const Xf=typeof window<"u",LZ=()=>Xf&&window.onpointerdown===null,RZ=()=>Xf&&window.ontouchstart===null,HZ=()=>Xf&&window.onmousedown===null;function zZ({target:e,state:t,variants:l,apply:o}){const s=y(l),i=le(!1),a=le(!1),r=le(!1),d=c(()=>{let p=[];return s&&(s.hovered&&(p=[...p,...Object.keys(s.hovered)]),s.tapped&&(p=[...p,...Object.keys(s.tapped)]),s.focused&&(p=[...p,...Object.keys(s.focused)])),p}),f=c(()=>{const p={};Object.assign(p,t.value),i.value&&s.hovered&&Object.assign(p,s.hovered),a.value&&s.tapped&&Object.assign(p,s.tapped),r.value&&s.focused&&Object.assign(p,s.focused);for(const m in p)d.value.includes(m)||delete p[m];return p});s.hovered&&(De(e,"mouseenter",()=>i.value=!0),De(e,"mouseleave",()=>{i.value=!1,a.value=!1}),De(e,"mouseout",()=>{i.value=!1,a.value=!1})),s.tapped&&(HZ()&&(De(e,"mousedown",()=>a.value=!0),De(e,"mouseup",()=>a.value=!1)),LZ()&&(De(e,"pointerdown",()=>a.value=!0),De(e,"pointerup",()=>a.value=!1)),RZ()&&(De(e,"touchstart",()=>a.value=!0),De(e,"touchend",()=>a.value=!1))),s.focused&&(De(e,"focus",()=>r.value=!0),De(e,"blur",()=>r.value=!1)),Ae(f,o)}function NZ({set:e,target:t,variants:l,variant:o}){const s=y(l);Ae(()=>t,()=>{s&&(s.initial&&e("initial"),s.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function qZ({state:e,apply:t}){Ae(e,l=>{l&&t(l)},{immediate:!0})}function VZ({target:e,variants:t,variant:l}){const o=y(t);o&&(o.visible||o.visibleOnce)&&Kw(e,([{isIntersecting:s}])=>{o.visible?s?l.value="visible":l.value="initial":o.visibleOnce&&(s&&l.value!=="visibleOnce"?l.value="visibleOnce":l.value||(l.value="initial"))})}function GZ(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&NZ(e),t.syncVariants&&qZ(e),t.visibilityHooks&&VZ(e),t.eventListeners&&zZ(e)}function L_(e={}){const t=g({...e}),l=le({});return Ae(t,()=>{const o={};for(const[s,i]of Object.entries(t)){const a=Zf(s),r=I_(i,a);o[s]=r}l.value=o},{immediate:!0,deep:!0}),{state:t,style:l}}function Qf(e,t){Ae(()=>rt(e),l=>{l&&t(l)},{immediate:!0})}const WZ={x:"translateX",y:"translateY",z:"translateZ"};function R_(e={},t=!0){const l=g({...e}),o=le("");return Ae(l,s=>{let i="",a=!1;if(t&&(s.x||s.y||s.z)){const r=[s.x||0,s.y||0,s.z||0].map(Oe.transform).join(",");i+=`translate3d(${r}) `,a=!0}for(const[r,d]of Object.entries(s)){if(t&&(r==="x"||r==="y"||r==="z"))continue;const f=Zf(r),p=I_(d,f);i+=`${WZ[r]||r}(${p}) `}t&&!a&&(i+="translateZ(0px) "),o.value=i.trim()},{immediate:!0,deep:!0}),{state:l,transform:o}}const UZ=["","X","Y","Z"],KZ=["perspective","translate","scale","rotate","skew"],H_=["transformPerspective","x","y","z"];KZ.forEach(e=>{UZ.forEach(t=>{const l=e+t;H_.push(l)})});const YZ=new Set(H_);function ep(e){return YZ.has(e)}const JZ=new Set(["originX","originY","originZ"]);function z_(e){return JZ.has(e)}function ZZ(e){const t={},l={};return Object.entries(e).forEach(([o,s])=>{ep(o)||z_(o)?t[o]=s:l[o]=s}),{transform:t,style:l}}function N_(e){const{transform:t,style:l}=ZZ(e),{transform:o}=R_(t),{style:s}=L_(l);return o.value&&(s.value.transform=o.value),s.value}function XZ(e,t){let l,o;const{state:s,style:i}=L_();return Qf(e,a=>{o=a;for(const r of Object.keys(F_))a.style[r]===null||a.style[r]===""||ep(r)||z_(r)||(s[r]=a.style[r]);l&&Object.entries(l).forEach(([r,d])=>a.style[r]=d),t&&t(s)}),Ae(i,a=>{if(!o){l=a;return}for(const r in a)o.style[r]=a[r]},{immediate:!0}),{style:s}}function QZ(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const l=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,s)=>{if(!s)return o;const[i,a]=s.split("("),d=a.split(",").map(p=>l(p.endsWith(")")?p.replace(")",""):p.trim())),f=d.length===1?d[0]:d;return{...o,[i]:f}},{})}function eX(e,t){Object.entries(QZ(t)).forEach(([l,o])=>{const s=["x","y","z"];if(l==="translate3d"){if(o===0){s.forEach(i=>e[i]=0);return}o.forEach((i,a)=>e[s[a]]=i);return}if(o=parseFloat(o),l==="translateX"){e.x=o;return}if(l==="translateY"){e.y=o;return}if(l==="translateZ"){e.z=o;return}e[l]=o})}function tX(e,t){let l,o;const{state:s,transform:i}=R_();return Qf(e,a=>{o=a,a.style.transform&&eX(s,a.style.transform),l&&(a.style.transform=l),t&&t(s)}),Ae(i,a=>{if(!o){l=a;return}o.style.transform=a},{immediate:!0}),{transform:s}}function nX(e,t){const l=g({}),o=a=>Object.entries(a).forEach(([r,d])=>l[r]=d),{style:s}=XZ(e,o),{transform:i}=tX(e,o);return Ae(l,a=>{Object.entries(a).forEach(([r,d])=>{const f=ep(r)?i:s;f[r]&&f[r]===d||(f[r]=d)})},{immediate:!0,deep:!0}),Qf(e,()=>t&&o(t)),{motionProperties:l,style:s,transform:i}}function sX(e={}){const t=y(e),l=le();return{state:c(()=>{if(l.value)return t[l.value]}),variant:l}}function q_(e,t={},l){const{motionProperties:o}=nX(e),{variant:s,state:i}=sX(t),a=IZ(o,t),r={target:e,variant:s,variants:t,state:i,motionProperties:o,...a};return GZ(r,l),r}const lX=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function oX(e,t){const l=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};l&&(l.variants&&_a(l.variants)&&(t.value={...t.value,...l.variants}),lX.forEach(o=>{if(o==="delay"){if(l&&l[o]&&typeof l[o]=="number"){const s=l[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:s,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:s,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:s,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),l&&l[o]&&_a(l[o])&&(t.value[o]=l[o])}))}function Ud(e){return{created:(l,o,s)=>{const i=o.value&&typeof o.value=="string"?o.value:s.key;i&&Vd[i]&&Vd[i].stop();const a=le(e||{});typeof o.value=="object"&&(a.value=o.value),oX(s,a);const r=q_(l,a);l.motionInstance=r,i&&(Vd[i]=r)},getSSRProps(l,o){let{initial:s}=l.value||o&&(o==null?void 0:o.props)||{};s=y(s);const i=rJ((e==null?void 0:e.initial)||{},s||{});return!i||Object.keys(i).length===0?void 0:{style:N_(i)}}}}const iX={initial:{opacity:0},enter:{opacity:1}},rX={initial:{opacity:0},visible:{opacity:1}},aX={initial:{opacity:0},visibleOnce:{opacity:1}},cX={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},dX={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},uX={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},fX={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},pX={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},mX={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},hX={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},vX={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},gX={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},_X={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},yX={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},bX={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},wX={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xX={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},kX={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$X={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},SX={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},jX={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},PX={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},TX={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},CX={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},EX={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},AX={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},OX={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},DX={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},BX={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},MX={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Uu={__proto__:null,fade:iX,fadeVisible:rX,fadeVisibleOnce:aX,pop:cX,popVisible:dX,popVisibleOnce:uX,rollBottom:wX,rollLeft:fX,rollRight:hX,rollTop:_X,rollVisibleBottom:xX,rollVisibleLeft:pX,rollVisibleOnceBottom:kX,rollVisibleOnceLeft:mX,rollVisibleOnceRight:gX,rollVisibleOnceTop:bX,rollVisibleRight:vX,rollVisibleTop:yX,slideBottom:DX,slideLeft:$X,slideRight:PX,slideTop:EX,slideVisibleBottom:BX,slideVisibleLeft:SX,slideVisibleOnceBottom:MX,slideVisibleOnceLeft:jX,slideVisibleOnceRight:CX,slideVisibleOnceTop:OX,slideVisibleRight:TX,slideVisibleTop:AX},FX=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){const t=E1(),l=g({});if(!e.is&&!t.default)return()=>At("div",{});const o=c(()=>{let r;return e.preset&&(r=Uu[e.preset]),r}),s=c(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=c(()=>{const r={...s.value,...o.value||{},...e.variants||{}};return e.delay&&(r.enter.transition={...r.enter.transition},r.enter.transition.delay=parseInt(e.delay)),r}),a=c(()=>{if(!e.is)return;let r=e.is;return typeof a.value=="string"&&!mh(r)&&(r=dr(r)),r});{const r=d=>{var f;(f=d.variants)!=null&&f.initial&&d.set("initial"),setTimeout(()=>{var p,m,v;(p=d.variants)!=null&&p.enter&&d.apply("enter"),(m=d.variants)!=null&&m.visible&&d.apply("visible"),(v=d.variants)!=null&&v.visibleOnce&&d.apply("visibleOnce")},10)};ed(()=>Object.entries(l).forEach(([d,f])=>r(f)))}return{slots:t,component:a,motionConfig:i,instances:l}},render({slots:e,motionConfig:t,instances:l,component:o}){var r;const s=N_(t.initial||{}),i=(d,f)=>(d.props||(d.props={}),d.props.style=s,d.props.onVnodeMounted=({el:p})=>{const m=q_(p,t);l[f]=m},d);if(o){const d=At(o,void 0,e);return i(d,0),d}return(((r=e.default)==null?void 0:r.call(e))||[]).map((d,f)=>i(d,f))}});function IX(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",l="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(o,s=>l.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const LX={install(e,t){if(e.directive("motion",Ud()),e.component("Motion",FX),!t||t&&!t.excludePresets)for(const l in Uu){const o=Uu[l];e.directive(`motion-${IX(l)}`,Ud(o))}if(t&&t.directives)for(const l in t.directives){const o=t.directives[l];o.initial,e.directive(`motion-${l}`,Ud(o))}}},pd="vue-starport-injection",V_="vue-starport-options",RX={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},G_={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}},HX=Me({name:"StarportProxy",props:{props:{type:Object,default:()=>({})},component:{type:Object,required:!0},...G_},setup(e,t){const l=u(pd),o=c(()=>l.getInstance(e.port,e.component)),s=le(),i=o.value.generateId(),a=le(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Wo(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=s.value,await ut(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const r=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${r} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Ba(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await ut(),await ut(),!o.value.el&&l.dispose(o.value.port))}),Ae(()=>e,async()=>{o.value.props&&await ut();const{props:r,...d}=e;o.value.props=r||{},o.value.setLocalOptions(d)},{deep:!0,immediate:!0}),()=>{const{initialProps:r,mountedProps:d,...f}=e,p=Vo(f,(a.value?d:r)||{});return At("div",Vo(p,{id:i,ref:s,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?At(t.slots.default):void 0)}}}),zX=Me({name:"Starport",inheritAttrs:!0,props:G_,setup(e,t){const l=le(!1);return Wo(()=>{if(l.value=!0,!u(pd))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,r;const o=(r=(a=t.slots).default)==null?void 0:r.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const s=o[0];let i=s.type;return(!_a(i)||Ai(i))&&(i={render(){return o}}),At(HX,{...e,key:e.port,component:Yc(i),props:s.props})}}});function NX(e){const t=g({height:0,width:0,left:0,top:0,update:o,listen:i,pause:a,marginTop:"0px",marginLeft:"0px",margin:"0px",padding:"0px"}),l=Ot?document.documentElement||document.body:void 0;function o(){if(!Ot)return;const r=rt(e);if(!r)return;const{height:d,width:f,left:p,top:m}=r.getBoundingClientRect(),v=window.getComputedStyle(r),_=v.marginTop,b=v.marginLeft,$=v.margin,T=v.padding;Object.assign(t,{height:d,width:f,left:p,top:l.scrollTop+m,marginTop:_,marginLeft:b,margin:$,padding:T})}const s=Zv(o,{immediate:!1});function i(){Ot&&(o(),s.resume())}function a(){s.pause()}return t}let qX=(e,t=21)=>(l=t)=>{let o="",s=l;for(;s--;)o+=e[Math.random()*e.length|0];return o};const rh=qX("abcdefghijklmnopqrstuvwxyz",5);function ah(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function VX(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}function GX(e,t,l={}){const o=VX(t),s=ah(o)||rh(),i=le(),a=le(null),r=le(!1),d=le(!1),f=d0(!0),p=le({}),m=c(()=>({...RX,...l,...p.value})),v=le(0);let _;f.run(()=>{_=NX(i),Ae(i,async E=>{E&&(d.value=!0),await ut(),i.value||(d.value=!1)})});const b=ah(e);function $(){return`starport-${s}-${b}-${rh()}`}const T=$();return g({el:i,id:T,port:e,props:a,rect:_,scope:f,isLanded:r,isVisible:d,options:m,liftOffTime:v,component:t,componentName:o,componentId:s,generateId:$,setLocalOptions(E={}){p.value=JSON.parse(JSON.stringify(E))},elRef(){return i},liftOff(){r.value&&(r.value=!1,v.value=Date.now(),_.listen())},land(){r.value||(r.value=!0,_.pause())}})}function WX(e){const t=g(new Map);function l(s,i){let a=t.get(s);return a||(a=GX(s,i,e),t.set(s,a)),a.component=i,a}function o(s){var i;(i=t.get(s))==null||i.scope.stop(),t.delete(s)}return{portMap:t,dispose:o,getInstance:l}}const UX=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=u(pd);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const l=c(()=>t.getInstance(e.port,e.component)),o=c(()=>{var a;return((a=l.value.el)==null?void 0:a.id)||l.value.id}),s=c(()=>{const a=Date.now()-l.value.liftOffTime,r=Math.max(0,l.value.options.duration-a),d=l.value.rect,f={position:"absolute",left:0,top:0,width:`${d.width}px`,height:`${d.height}px`,margin:d.margin,padding:d.padding,transform:`translate3d(calc(${d.left}px - ${d.marginLeft}),calc(${d.top}px - ${d.marginTop}),0px)`};return!l.value.isVisible||!l.value.el?{...f,zIndex:-1,display:"none"}:(l.value.isLanded?f.display="none":Object.assign(f,{transitionProperty:"all",transitionDuration:`${r}ms`,transitionTimingFunction:l.value.options.easing}),f)}),i={onTransitionend(a){l.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${l.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${l.value.options.duration/1e3}s).`)}};return()=>{const a=!!(l.value.isLanded&&l.value.el);return At("div",{style:s.value,"data-starport-craft":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true",onTransitionend:l.value.land},At(oy,{to:a?`#${o.value}`:"body",disabled:!a},At(l.value.component,Vo(i,l.value.props))))}}}),KX=Me({name:"StarportCarrier",setup(e,{slots:t}){const l=WX(u(V_,{}));return jt().appContext.app.provide(pd,l),()=>{var s;return[(s=t.default)==null?void 0:s.call(t),Array.from(l.portMap.entries()).map(([i,{component:a}])=>At(UX,{key:i,port:i,component:a}))]}}});function YX(e={}){return{install(t){t.provide(V_,e),t.component("Starport",zX),t.component("StarportCarrier",KX)}}}function JX(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(LX),e.app.use(YX({keepAlive:!0}))}function Mt(e,t,l){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??l}function ZX(){return{install(e){e.directive("click",{name:"v-click",mounted(t,l){var p,m,v,_;if(rr.value||(p=Mt(l,aa))!=null&&p.value||l.value===!1||l.value==="false")return;const o=Mt(l,Ki),s=Mt(l,O),i=Mt(l,Tu),a=l.modifiers.hide!==!1&&l.modifiers.hide!=null,d=l.modifiers.fade!==!1&&l.modifiers.fade!=null?Ok:Bd;o&&!((m=o==null?void 0:o.value)!=null&&m.includes(t))&&o.value.push(t);const f=((v=o==null?void 0:o.value)==null?void 0:v.length)||0;if(ch(l,f),!(i!=null&&i.value.has(l.value)))i==null||i.value.set(l.value,[t]);else if(!((_=i==null?void 0:i.value.get(l.value))!=null&&_.includes(t))){const b=(i==null?void 0:i.value.get(l.value))||[];i==null||i.value.set(l.value,[t].concat(b))}t==null||t.classList.toggle(Gi,!0),s&&Ae(s,()=>{const b=(s==null?void 0:s.value)??0,$=l.value!=null?Array.isArray(l.value)?b>=l.value[0]&&b<l.value[1]:b>=l.value:b>f;t.classList.contains(Md)||t.classList.toggle(d,!$),a!==!1&&a!==void 0&&t.classList.toggle(d,$),t.classList.toggle(Jr,!1);const T=i==null?void 0:i.value.get(b);T==null||T.forEach((E,z)=>{E.classList.toggle(tc,!1),z===T.length-1?E.classList.toggle(Jr,!0):E.classList.toggle(tc,!0)}),t.classList.contains(Jr)||t.classList.toggle(tc,$)},{immediate:!0})},unmounted(t,l){t==null||t.classList.toggle(Gi,!1);const o=Mt(l,Ki);o!=null&&o.value&&mu(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,l){var r,d;if(rr.value||(r=Mt(l,aa))!=null&&r.value||l.value===!1||l.value==="false")return;const o=Mt(l,Ki),s=Mt(l,O),i=Mt(l,Tu),a=(o==null?void 0:o.value.length)||0;ch(l,a),i!=null&&i.value.has(l.value)?(d=i==null?void 0:i.value.get(l.value))==null||d.push(t):i==null||i.value.set(l.value,[t]),t==null||t.classList.toggle(Gi,!0),s&&Ae(s,()=>{const f=s.value??0,p=l.value!=null?Array.isArray(l.value)?f>=l.value[0]&&f<l.value[1]:f>=l.value:f>=a;t.classList.contains(Md)||t.classList.toggle(Bd,!p),t.classList.toggle(Jr,!1),t.classList.contains(Jr)||t.classList.toggle(tc,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Gi,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,l){var a,r,d;if(rr.value||(a=Mt(l,aa))!=null&&a.value)return;const o=Mt(l,Ki),s=Mt(l,O),i=((r=o==null?void 0:o.value)==null?void 0:r.length)||0;o&&!((d=o==null?void 0:o.value)!=null&&d.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Gi,!0),s&&Ae(s,()=>{const f=(s==null?void 0:s.value)??0,p=l.value!=null?f>=l.value:f>i;t.classList.toggle(Bd,p),t.classList.toggle(Md,p)},{immediate:!0})},unmounted(t,l){t==null||t.classList.toggle(Gi,!1);const o=Mt(l,Ki);o!=null&&o.value&&mu(o.value,t)}})}}}function ch(e,t){(e.value==null||e.value===!0||e.value==="true")&&(e.value=t),typeof e.value=="string"&&(e.value.startsWith("+")||e.value.startsWith("-"))&&(e.value=t+Number(e.value))}function XX(e,t){const l=Yg(e),o=Jg(t,l.currentRoute,l.currentPage);return{nav:{...l,...o},configs:He,themeConfigs:c(()=>He.themeConfig)}}function QX(){return{install(e){const t=g(XX(Jt,Rt));e.provide(D,t),e.provide(M,c(()=>t.nav.currentPage)),e.provide(O,c(()=>t.nav.clicks))}}}const Lr=nb(oJ);Lr.use(kt);Lr.use(Kb());Lr.use(ZX());Lr.use(QX());JX({app:Lr,router:kt});Lr.mount("#app");export{Ct as $,Nc as A,UY as B,Rd as C,qo as D,Wo as E,Pe as F,g as G,tQ as H,sQ as I,Ae as J,Pd as K,wa as L,Od as M,ta as N,C as O,Ic as P,lQ as Q,oQ as R,Tg as S,tt as T,pt as U,Ne as V,Gk as W,E8 as X,Tf as Y,Cf as Z,k as _,Jb as a,$8 as a0,w5 as a1,Dt as a2,Bt as a3,Nt as a4,eQ as a5,St as a6,Kt as a7,iQ as a8,Yr as a9,sc as aa,Xi as ab,ju as ac,dk as ad,uk as ae,fk as af,mk as ag,nv as ah,bf as ai,$t as aj,r4 as ak,u as al,Pg as am,hk as an,Ba as ao,c as b,He as c,Me as d,x as e,n as f,y as g,mr as h,kf as i,qY as j,H as k,Z as l,we as m,st as n,h as o,mt as p,S as q,et as r,Ve as s,Ht as t,nQ as u,le as v,$k as w,XY as x,rQ as y,Rt as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PresenterPrint-yUqshNd7.js","assets/NoteDisplay-aRcm1aKO.js","assets/Presenter-t5lmtnDy.js","assets/DrawingControls-qCC7iUTI.js","assets/Presenter-uYISLrSy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
