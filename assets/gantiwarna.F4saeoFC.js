import ee from"./Icon.BR5FLYFp.js";import{d as I,A as O,B as f,o as y,C as v,k,D as S,v as _,E as x,F as P,G as M,H as C,I as re,l as j,P as te,J as ae,K as B,M as J,i as D,N as ne,O as ie,Q as G,U as q,V as oe,W as se,X as A,Y as z,m as b,e as le,Z as de,x as N,$ as m,a0 as ue,a1 as ce,q as ge}from"./entry.CGPWgqs3.js";import{_ as U}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{_ as fe}from"./nuxt-link.BjamoLT3.js";import{clientOnlySymbol as ye}from"./client-only._0-cD1Xc.js";import{u as pe}from"./composables.DaTaPqJD.js";import"./index.DKzsDYrr.js";const K=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function E(e,n){n?n={...K,...n}:n=K;const a=Q(n);return a.dispatch(e),a.toString()}const be=Object.freeze(["prototype","__proto__","constructor"]);function Q(e){let n="",a=new Map;const t=r=>{n+=r};return{toString(){return n},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let o="";const d=i.length;d<10?o="unknown:["+i+"]":o=i.slice(8,d-1),o=o.toLowerCase();let c=null;if((c=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):e.ignoreUnknown||this.unkown(r,o);else{let s=Object.keys(r);e.unorderedObjects&&(s=s.sort());let l=[];e.respectType!==!1&&!R(r)&&(l=be),e.excludeKeys&&(s=s.filter(u=>!e.excludeKeys(u)),l=l.filter(u=>!e.excludeKeys(u))),t("object:"+(s.length+l.length)+":");const g=u=>{this.dispatch(u),t(":"),e.excludeValues||this.dispatch(r[u]),t(",")};for(const u of s)g(u);for(const u of l)g(u)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const c of r)this.dispatch(c);return}const o=new Map,d=r.map(c=>{const s=Q(e);s.dispatch(c);for(const[l,g]of s.getContext())o.set(l,g);return s.toString()});return a=o,d.sort(),this.array(d,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),R(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const W="[native code] }",ve=W.length;function R(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-ve)===W}function he(e,n,a={}){return e===n||E(e,a)===E(n,a)}function me(e,n){const a={...e};for(const t of n)delete a[t];return a}function ke(e,n,a){typeof n=="string"&&(n=n.split(".").map(r=>{const i=Number(r);return isNaN(i)?r:i}));let t=e;for(const r of n){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const L={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},xe=e=>Object.keys(L).reduce((a,t)=>(e[t]!==void 0&&(a[t]=e[t]),a),{}),we=I({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=O();return{dynamic:f(()=>{var t,r;return e.dynamic||((r=(t=n.ui)==null?void 0:t.icons)==null?void 0:r.dynamic)})}}});function Se(e,n,a,t,r,i){const o=ee;return e.dynamic?(y(),v(o,{key:0,name:e.name},null,8,["name"])):(y(),k("span",{key:1,class:S(e.name)},null,2))}const Y=U(we,[["render",Se]]),Ce=I({inheritAttrs:!1,props:{...L,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:r,isExactActive:i}){return e.exactQuery&&!he(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),Ie=["href","aria-disabled","role","rel","target","onClick"];function $e(e,n,a,t,r,i){const o=fe;return e.to?(y(),v(o,C({key:1},e.$props,{custom:""}),{default:_(({route:d,href:c,target:s,rel:l,navigate:g,isActive:u,isExactActive:w,isExternal:$})=>[j("a",C(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:l,target:s,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(d,e._.provides[te]||e.$route,{isActive:u,isExactActive:w}),onClick:h=>!$&&!e.disabled&&g(h)}),[x(e.$slots,"default",P(M({isActive:e.active!==void 0?e.active:e.exact?w:u})))],16,Ie)]),_:3},16)):(y(),v(re(e.as),C({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:_(()=>[x(e.$slots,"default",P(M({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const X=U(Ce,[["render",$e]]),Be=(e,n,a,t,r=!1)=>{const i=ae(),o=O(),d=f(()=>{var u;const s=B(n),l=B(a),g=B(t);return J((s==null?void 0:s.strategy)||((u=o.ui)==null?void 0:u.strategy),g?{wrapper:g}:{},s||{},r?ke(o.ui,e,{}):{},l||{})}),c=f(()=>me(i,["class"]));return{ui:d,attrs:c}};function Ae({ui:e,props:n}){const a=G();let t=a.parent,r;for(;t&&!r;){if(t.type.name==="ButtonGroup"){r=D(`group-${t.uid}`);break}t=t.parent}const i=f(()=>r==null?void 0:r.value.children.indexOf(a));return ne(()=>{r==null||r.value.register(a)}),ie(()=>{r==null||r.value.unregister(a)}),{size:f(()=>(r==null?void 0:r.value.size)||n.size),rounded:f(()=>!r||i.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:i.value===0?r.value.rounded.start:i.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ze={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Z={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},V={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...Z,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...V,option:{...V.option},arrow:{...Z}});const p=J(q.ui.strategy,q.ui.button,ze),Ne=I({components:{UIcon:Y,ULink:X},inheritAttrs:!1,props:{...L,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>p.default.size,validator(e){return Object.keys(p.size).includes(e)}},color:{type:String,default:()=>p.default.color,validator(e){return[...q.ui.colors,...Object.keys(p.color)].includes(e)}},variant:{type:String,default:()=>p.default.variant,validator(e){return[...Object.keys(p.variant),...Object.values(p.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>p.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:a,attrs:t}=Be("button",oe(e,"ui"),p),{size:r,rounded:i}=Ae({ui:a,props:e}),o=f(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=f(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=f(()=>e.square||!n.default&&!e.label),s=f(()=>{var T,F;const h=((F=(T=a.value.color)==null?void 0:T[e.color])==null?void 0:F[e.variant])||a.value.variant[e.variant];return se(A(a.value.base,a.value.font,i.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[c.value?"square":"padding"][r.value],h==null?void 0:h.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),l=f(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),g=f(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),u=f(()=>A(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),w=f(()=>A(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!o.value&&a.value.icon.loading)),$=f(()=>xe(e));return{ui:a,attrs:t,isLeading:o,isTrailing:d,isSquare:c,buttonClass:s,leadingIconName:l,trailingIconName:g,leadingIconClass:u,trailingIconClass:w,linkProps:$}}});function _e(e,n,a,t,r,i){const o=Y,d=X;return y(),v(d,C({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:_(()=>[x(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(y(),v(o,{key:0,name:e.leadingIconName,class:S(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)]),x(e.$slots,"default",{},()=>[e.label?(y(),k("span",{key:0,class:S([e.truncate?e.ui.truncate:""])},b(e.label),3)):z("",!0)]),x(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(y(),v(o,{key:0,name:e.trailingIconName,class:S(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)])]),_:3},16,["type","disabled","class"])}const qe=U(Ne,[["render",_e]]),Oe="data-n-ids";function H(e){var r,i,o,d,c,s;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=e.slice(1);const n=le(),a=G();if(!a)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");n._id||(n._id=0),a._nuxtIdIndex||(a._nuxtIdIndex={}),(r=a._nuxtIdIndex)[e]||(r[e]=0);const t=e+":"+a._nuxtIdIndex[e]++;if(n.payload.serverRendered&&n.isHydrating&&!D(ye,!1)){const l=((i=a.vnode.el)==null?void 0:i.nodeType)===8&&((d=(o=a.vnode.el)==null?void 0:o.nextElementSibling)!=null&&d.getAttribute)?(c=a.vnode.el)==null?void 0:c.nextElementSibling:a.vnode.el,g=JSON.parse(((s=l==null?void 0:l.getAttribute)==null?void 0:s.call(l,Oe))||"{}");if(g[t])return g[t]}return e+"_"+n._id++}const je=j("hr",null,null,-1),Ee=I({__name:"gantiwarna",setup(e){const n=H("$y9J5iIhew4"),a=H("$IydpYNDbWr"),t=pe(),r=O();console.log(t.preference);const i=de(["system","light","zvi_qdh","frcmx_a"]),o=d=>{console.log(d),t.preference=d};return(d,c)=>{const s=qe;return y(),k("div",null,[N(b(m(n))+" "+b(m(a))+" ",1),j("ul",null,[(y(!0),k(ue,null,ce(m(i),(l,g)=>(y(),k("li",{key:g},[ge(s,{color:"gray",variant:"ghost","aria-label":"Theme",onClick:u=>o(l)},null,8,["onClick"]),N(" "+b(l),1)]))),128))]),je,N(" "+b(m(r))+" "+b(m(t)),1)])}}});export{Ee as default};