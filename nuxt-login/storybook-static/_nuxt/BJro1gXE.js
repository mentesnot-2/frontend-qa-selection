import{v as q,x as y,r as k,y as P,o as T,k as _,d as z,e as R,h as A,s as g,t as b,u as V,z as E,A as B}from"./CxgKJKif.js";import{u as C,a as I,o as L,b as w,n as j}from"./BT1UWUYV.js";import{h as U,p as D,a as M,w as $,b as F}from"./D9rSyKX4.js";import{u as H}from"./BIA313qT.js";import{_ as O}from"./DlAUqK2U.js";import"./suuP9-Lk.js";import"./RCxfibSf.js";import"../sb-preview/runtime.js";async function S(t,a=C()){const{path:l,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>S(t,a));a._routePreloaded.add(l);const s=e.map(n=>{var i;return(i=n.components)==null?void 0:i.default}).filter(n=>typeof n=="function");for(const n of s){const i=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(i)));r.push(i)}await Promise.all(r)}const G=(...t)=>t.find(a=>a!==void 0),Q="noopener noreferrer",X=globalThis.requestIdleCallback||(t=>{const a=Date.now(),l={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(l)},1)}),J=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});/*! @__NO_SIDE_EFFECTS__ */function K(t){const a=t.componentName||"NuxtLink",l=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const s=t.trailingSlash==="append"?$:F;if(typeof e=="string")return s(e,!0);const n="path"in e?e.path:r(e).path;return{...e,name:void 0,path:s(n,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=C()??I(),n=y(()=>{const o=e.to||e.href||"";return l(o,s.resolve)}),i=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||U(n.value,{acceptRelative:!0})),m=k(!1),d=k(null),x=o=>{var f;d.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Z()){const f=w();let p,u=null;P(()=>{const v=Y();L(()=>{p=X(()=>{var h;(h=d==null?void 0:d.value)!=null&&h.tagName&&(u=v.observe(d.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!i.value&&S(n.value,s).catch(()=>{})]),m.value=!0}))})})}),T(()=>{p&&J(p),u==null||u(),u=null})}return()=>{var v,h;if(!i.value){const c={ref:x,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(m.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(z("RouterLink"),c,r.default)}const o=typeof n.value=="object"?((v=s.resolve(n.value))==null?void 0:v.href)??null:n.value||null,f=e.target||null,p=e.noRel?null:G(e.rel,t.externalRelAttribute,o?Q:"")||null,u=()=>j(o,{replace:e.replace});return e.custom?r.default?r.default({href:o,navigate:u,get route(){if(!o)return;const c=D(o);return{path:c.pathname,fullPath:c.pathname,get query(){return M(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:p,target:f,isExternal:i.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:d,href:o,rel:p,target:f},(h=r.default)==null?void 0:h.call(r))}}})}const W=K({componentName:"NuxtLink"});function Y(){const t=w();if(t._observer)return t._observer;let a=null;const l=new Map,e=(s,n)=>(a||(a=new IntersectionObserver(i=>{for(const m of i){const d=l.get(m.target);(m.isIntersecting||m.intersectionRatio>0)&&d&&d()}})),l.set(s,n),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function Z(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ee={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},te={class:"max-w-520px text-center z-20"},ae=["textContent"],ne=["textContent"],re={class:"w-full flex items-center justify-center"},N={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return H({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(l,e)=>{const r=W;return R(),A("div",ee,[e[0]||(e[0]=g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),g("div",te,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:b(t.statusCode)},null,8,ae),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:b(t.description)},null,8,ne),g("div",re,[V(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:E(()=>[B(b(t.backHome),1)]),_:1})])])])}}},me=O(N,[["__scopeId","data-v-71447f4e"]]);N.__docgenInfo={exportName:"default",displayName:"error-404",description:"",tags:{},props:[{name:"appName",type:{name:"string"},defaultValue:{func:!1,value:'"Nuxt"'}},{name:"version",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"statusCode",type:{name:"number"},defaultValue:{func:!1,value:"404"}},{name:"statusMessage",type:{name:"string"},defaultValue:{func:!1,value:'"Not Found"'}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:'"Sorry, the page you are looking for could not be found."'}},{name:"backHome",type:{name:"string"},defaultValue:{func:!1,value:'"Go back home"'}}],sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/node_modules/.pnpm/@nuxt+ui-templates@1.3.4/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]};export{me as default};
