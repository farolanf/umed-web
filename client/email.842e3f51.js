import{S as a,i as s,s as e,q as t,r,v as l,x as o,y as i,z as n,E as c,e as d,V as m,f as u,F as f,c as $,b as p,u as h,j as g,k as b,A as v,a1 as y,H as E,O as x,M as w,ac as j,aa as k,U as I,t as T,d as U,G as z,ab as M}from"./client.7f1c3f97.js";import{l as O}from"./lodash.7130e2d0.js";import{I as q}from"./Input.1f6bfb97.js";function B(a){let s,e;return s=new I({props:{type:"error",title:"Error",messages:[a[1]],rootClass:"absolute top-0"}}),{c(){t(s.$$.fragment)},l(a){r(s.$$.fragment,a)},m(a,t){l(s,a,t),e=!0},p(a,e){const t={};2&e&&(t.messages=[a[1]]),s.$set(t)},i(a){e||(o(s.$$.fragment,a),e=!0)},o(a){i(s.$$.fragment,a),e=!1},d(a){n(s,a)}}}function F(a){let s,e,t,r;return{c(){s=d("button"),e=d("i"),t=T("forward"),this.h()},l(a){s=$(a,"BUTTON",{slot:!0,class:!0,disabled:!0});var r=p(s);e=$(r,"I",{class:!0});var l=p(e);t=U(l,"forward"),l.forEach(u),r.forEach(u),this.h()},h(){h(e,"class","material-icons-outlined"),h(s,"slot","button"),h(s,"class","w-full h-full flex justify-center items-center svelte-16hbay0"),s.disabled=r=!a[2]},m(a,r){g(a,s,r),b(s,e),b(e,t)},p(a,e){4&e&&r!==(r=!a[2])&&(s.disabled=r)},d(a){a&&u(s)}}}function N(a){let s,e,x,w,j,k,I,T,U=a[1]&&B(a);return j=new q({props:{id:"email",type:"email",placeholder:"type your email address",value:a[0].email,autofocus:!0,required:!0,label:"Your email address",size:"xl",hasRightButton:!0,$$slots:{button:[F]},$$scope:{ctx:a}}}),j.$on("input",a[4]),{c(){s=c(),U&&U.c(),e=c(),x=d("div"),w=d("form"),t(j.$$.fragment),this.h()},l(a){m('[data-svelte="svelte-1om3z61"]',document.head).forEach(u),s=f(a),U&&U.l(a),e=f(a),x=$(a,"DIV",{class:!0});var t=p(x);w=$(t,"FORM",{});var l=p(w);r(j.$$.fragment,l),l.forEach(u),t.forEach(u),this.h()},h(){document.title="Sign Up - UMedmarket",h(x,"class","signup-content")},m(t,r){g(t,s,r),U&&U.m(t,r),g(t,e,r),g(t,x,r),b(x,w),l(j,w,null),k=!0,I||(T=v(w,"submit",y(a[5])),I=!0)},p(a,[s]){a[1]?U?(U.p(a,s),2&s&&o(U,1)):(U=B(a),U.c(),o(U,1),U.m(e.parentNode,e)):U&&(z(),i(U,1,1,(()=>{U=null})),E());const t={};1&s&&(t.value=a[0].email),260&s&&(t.$$scope={dirty:s,ctx:a}),j.$set(t)},i(a){k||(o(U),o(j.$$.fragment,a),k=!0)},o(a){i(U),i(j.$$.fragment,a),k=!1},d(a){a&&u(s),U&&U.d(a),a&&u(e),a&&u(x),n(j),I=!1,T()}}}function R(a,s,e){let t,r;x(a,k,(a=>e(0,t=a)));const l=w(j,{variables:{email:t.email}});x(a,l,(a=>e(6,r=a)));const o=O.debounce((a=>{k.update((s=>({...s,email:a.target.value})))}),300);let i,n;return a.$$.update=()=>{1&a.$$.dirty&&l.refetch({email:t.email}),64&a.$$.dirty&&e(1,i=O.get(r,"data.emailTaken")?"Email is already taken":null),64&a.$$.dirty&&e(2,n=!O.get(r,"data.emailTaken"))},[t,i,n,l,a=>{e(2,n=!1),o(a)},async()=>{n&&M("/signup/password")}]}export default class extends a{constructor(a){super(),s(this,a,R,N,e,{})}}
