import{L as d}from"./BwmLPC1o.js";import{B as b}from"./CpjBa0M5.js";import"./CxgKJKif.js";import"./DlAUqK2U.js";const E={title:"Organisms/Login",component:d,argTypes:{email:{control:"text",description:"Email entered in the form"},emailError:{control:"text",description:"Error message for invalid or empty email"},handleSubmit:{action:"submit",description:"Triggered when the form is submitted"},googleLogin:{action:"login with Google",description:"Triggered when Google login is clicked"},facebookLogin:{action:"login with Facebook",description:"Triggered when Facebook login is clicked"},appleLogin:{action:"login with Apple",description:"Triggered when Apple login is clicked"}}},i=(u,{argTypes:L})=>({components:{Login:d,Button:b},props:Object.keys(L),template:`
    <Login
      v-bind="$props"
      @submit="handleSubmit"
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
  `}),o=i.bind({});o.args={email:"",emailError:""};const e=i.bind({});e.args={email:"invalid-email",emailError:"Please enter a valid email"};const n=i.bind({});n.args={email:"",emailError:"Email cannot be empty"};var a,r,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    Login,
    Button
  },
  props: Object.keys(argTypes),
  template: \`
    <Login
      v-bind="$props"
      @submit="handleSubmit"
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
  \`
})`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var g,s,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    Login,
    Button
  },
  props: Object.keys(argTypes),
  template: \`
    <Login
      v-bind="$props"
      @submit="handleSubmit"
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
  \`
})`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    Login,
    Button
  },
  props: Object.keys(argTypes),
  template: \`
    <Login
      v-bind="$props"
      @submit="handleSubmit"
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
  \`
})`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const T=["Default","InvalidEmail","EmptyEmail"];export{o as Default,n as EmptyEmail,e as InvalidEmail,T as __namedExportsOrder,E as default};
