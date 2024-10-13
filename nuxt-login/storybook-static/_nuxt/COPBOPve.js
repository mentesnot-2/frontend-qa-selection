import{e as p,h as u,s as t,j as b,d as m,u as i,z as r,A as f,t as k,H as S,I,L as C,n as N,B as $}from"./CxgKJKif.js";import{_ as c}from"./DlAUqK2U.js";import{B as F}from"./CpjBa0M5.js";import{C as P}from"./BUoPjb_D.js";import"./D9rSyKX4.js";const v={props:{profileImage:{type:String,default:"https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"}}},B={class:"relative h-24 w-24 rounded-full transition-all hover:border-white cursor-pointer rounded-sm"},U=["src"];function j(d,e,s,g,o,n){return p(),u("div",B,[e[0]||(e[0]=t("div",{class:"gradient absolute inset-0 opacity-20"},null,-1)),t("img",{src:s.profileImage,alt:"Profile",class:"absolute inset-0 h-full w-full rounded-full object-cover"},null,8,U),e[1]||(e[1]=t("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer"},null,-1))])}const q=c(v,[["render",j],["__scopeId","data-v-375ec3f3"]]);v.__docgenInfo={exportName:"default",displayName:"ProfileImageUploader",description:"",tags:{},props:[{name:"profileImage",type:{name:"string"},defaultValue:{func:!1,value:"'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png'"}}],sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/components/molecules/ProfileImageUploader.vue"]};const h={props:{type:{type:String,default:"text"},maxlength:{type:Number,default:100},modelValue:String,placeholder:String},emits:["update:modelValue"]},A={class:"group relative mb-4 flex h-10 w-[20rem] rounded bg-white"},H={class:"flex items-center justify-center text-xl mx-6"},E=["type","maxlength","value","placeholder"];function z(d,e,s,g,o,n){return p(),u("div",A,[t("div",H,[b(d.$slots,"icon")]),t("input",{type:s.type,maxlength:s.maxlength,value:s.modelValue,placeholder:s.placeholder,class:"h-full flex-1 rounded bg-transparent text-sm text-black outline-none w-full"},null,8,E),b(d.$slots,"toggle-icon")])}const L=c(h,[["render",z]]);h.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"maxlength",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"modelValue",type:{name:"string"}},{name:"placeholder",type:{name:"string"}}],events:[{name:"update:modelValue"}],slots:[{name:"icon"},{name:"toggle-icon"}],sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/components/atoms/Input.vue"]};const _={components:{InputField:L,Button:F},props:{loading:Boolean,acceptTerms:Boolean},data(){return{name:"",surname:"",email:this.$route.query.email||"",password:"",confirmPassword:""}},methods:{async signup(){setTimeout(()=>{this.$router.push("/VerificationPage")},1e3)}}};function D(d,e,s,g,o,n){const a=m("InputField"),x=m("Button");return p(),u("form",{onSubmit:e[5]||(e[5]=S((...l)=>n.signup&&n.signup(...l),["prevent"]))},[i(a,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.name=l),placeholder:"Name"},{icon:r(()=>e[6]||(e[6]=[t("i",{class:"fa-solid fa-user text-base text-black/70"},null,-1)])),_:1},8,["modelValue"]),i(a,{modelValue:o.surname,"onUpdate:modelValue":e[1]||(e[1]=l=>o.surname=l),placeholder:"Surname"},{icon:r(()=>e[7]||(e[7]=[t("i",{class:"fa-solid fa-user text-base text-black/70"},null,-1)])),_:1},8,["modelValue"]),i(a,{modelValue:o.email,"onUpdate:modelValue":e[2]||(e[2]=l=>o.email=l),placeholder:"Email",disabled:!0},{icon:r(()=>e[8]||(e[8]=[t("i",{class:"fa-solid fa-envelope text-base text-black/70"},null,-1)])),_:1},8,["modelValue"]),i(a,{modelValue:o.password,"onUpdate:modelValue":e[3]||(e[3]=l=>o.password=l),placeholder:"Password",type:"password"},{icon:r(()=>e[9]||(e[9]=[t("i",{class:"fa-solid fa-key text-base text-black/70"},null,-1)])),"toggle-icon":r(()=>e[10]||(e[10]=[t("i",{class:"fa-solid fa-eye-slash absolute right-3 top-[0.7rem] text-base text-black/50 cursor-pointer"},null,-1)])),_:1},8,["modelValue"]),i(a,{modelValue:o.confirmPassword,"onUpdate:modelValue":e[4]||(e[4]=l=>o.confirmPassword=l),placeholder:"Confirm Password",type:"password"},{icon:r(()=>e[11]||(e[11]=[t("i",{class:"fa-solid fa-key text-base text-black/70"},null,-1)])),"toggle-icon":r(()=>e[12]||(e[12]=[t("i",{class:"fa-solid fa-eye-slash absolute right-3 top-[0.7rem] text-base text-black/50 cursor-pointer"},null,-1)])),_:1},8,["modelValue"]),i(x,{disabled:!s.acceptTerms,clickHandler:n.signup,class:"bg-[url('assets/bg-img.jpg')]"},{default:r(()=>[f(k(s.loading?"Signing up...":"Enter"),1)]),_:1},8,["disabled","clickHandler"])],32)}const Q=c(_,[["render",D]]);_.__docgenInfo={exportName:"default",displayName:"SignupForm",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"}},{name:"acceptTerms",type:{name:"boolean"}}],sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/components/molecules/SignupForm.vue"]};const y={props:{acceptTerms:Boolean},methods:{toggleTerms(){this.$emit("toggle")}}},W={class:"mb-4 flex items-center gap-2 w-full px-6"},G={class:"fa-solid fa-check tex-sm"};function M(d,e,s,g,o,n){return p(),u("div",W,[t("div",{class:N(["flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white",{"border-red-500":!s.acceptTerms,"border-white/50":s.acceptTerms}]),onClick:e[0]||(e[0]=(...a)=>n.toggleTerms&&n.toggleTerms(...a))},[I(t("i",G,null,512),[[C,s.acceptTerms]])],2),e[1]||(e[1]=t("div",{class:"text-xs text-white/70"},[f(" I accept "),t("span",{class:"underline text-white"},"Terms & Conditions"),f(" and "),t("span",{class:"underline text-white"},"Privacy Policy")],-1))])}const R=c(y,[["render",M],["__scopeId","data-v-9d62dc44"]]);y.__docgenInfo={exportName:"default",displayName:"TermsAndConditions",description:"",tags:{},props:[{name:"acceptTerms",type:{name:"boolean"}}],events:[{name:"toggle"}],sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/components/molecules/TermsAndConditions.vue"]};const J=""+new URL("left-removed.CerEGCEo.png",import.meta.url).href,w={components:{ProfileImageUploader:q,SignupForm:Q,Checkbox:P,TermsAndConditions:R},data(){return{email:this.$route.query.email||"",acceptTerms:!1,loading:!1}},methods:{goToHome(){this.$router.push("/")},toggleTerms(){this.acceptTerms=!this.acceptTerms}}},K={class:"fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur"},O={class:"relative flex h-[40rem] w-[24rem] flex-col rounded-md border border-white/20 bg-black/50 opacity-100 backdrop-blur transition-all duration-300 p-5"},X={class:"flex flex-col items-center justify-center"},Y={class:"flex items-center gap-8 mb-4 w-full pl-4"};function Z(d,e,s,g,o,n){const a=m("ProfileImageUploader"),x=m("TermsAndConditions"),l=m("SignupForm");return p(),u("div",K,[t("div",O,[e[4]||(e[4]=$('<div class="pointer-events-none absolute inset-0 opacity-70"><div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div><div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div><div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div><div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div></div>',1)),t("div",{class:"next-icon flex h-8 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 mt-6 text-sm",onClick:e[0]||(e[0]=(...V)=>n.goToHome&&n.goToHome(...V))},e[1]||(e[1]=[t("img",{src:J,alt:"Back to Log in",class:"h-4 w-4"},null,-1),f(" Back to Log in ")])),t("div",X,[t("div",Y,[i(a),e[2]||(e[2]=t("div",{class:"flex flex-col text-left w-2/5 flex-end"},[t("div",{class:"text-base text-white mb-1"},"Nice to meet you!"),t("div",{class:"text-xs text-white/70"}," Upload a profile picture and complete your presentation ")],-1))]),i(x,{acceptTerms:o.acceptTerms,onToggle:n.toggleTerms},null,8,["acceptTerms","onToggle"]),i(l,{loading:o.loading,acceptTerms:o.acceptTerms},null,8,["loading","acceptTerms"]),e[3]||(e[3]=t("div",{class:"cursor-pointer text-center text-white/40 mt-4"}," Terms & Conditions ",-1))])])])}const ee=c(w,[["render",Z]]);w.__docgenInfo={exportName:"default",displayName:"SignupContainer",description:"",tags:{},sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/components/organisms/SignupContainer.vue"]};const T={components:{SignupForm:ee}},te={class:"fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black text-white backdrop-blur"};function oe(d,e,s,g,o,n){const a=m("SignupForm");return p(),u("div",te,[i(a)])}const re=c(T,[["render",oe]]);T.__docgenInfo={exportName:"default",displayName:"SignupPage",description:"",tags:{},sourceFiles:["/home/mente/frontend-qa-selection/nuxt-login/pages/SignupPage.vue"]};export{re as default};
