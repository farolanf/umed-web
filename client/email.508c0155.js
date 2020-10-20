import{S as a,i as s,s as e,q as t,r as l,v as r,x as o,y as n,z as i,E as c,e as d,V as m,f as u,F as $,c as f,b as p,u as h,j as g,k as b,A as y,a1 as v,H as E,O as x,M as k,ac as w,aa as j,U as T,t as I,d as U,G as z,ab as M}from"./client.859ac31a.js";import{l as O}from"./lodash.5d5a6b59.js";import{I as q}from"./Input.3cb705ed.js";function B(a){let s,e;return s=new T({props:{type:"error",title:"Error",messages:[a[2]],rootClass:"absolute top-0"}}),{c(){t(s.$$.fragment)},l(a){l(s.$$.fragment,a)},m(a,t){r(s,a,t),e=!0},p(a,e){const t={};4&e&&(t.messages=[a[2]]),s.$set(t)},i(a){e||(o(s.$$.fragment,a),e=!0)},o(a){n(s.$$.fragment,a),e=!1},d(a){i(s,a)}}}function F(a){let s,e,t,l;return{c(){s=d("button"),e=d("i"),t=I("forward"),this.h()},l(a){s=f(a,"BUTTON",{slot:!0,class:!0,disabled:!0});var l=p(s);e=f(l,"I",{class:!0});var r=p(e);t=U(r,"forward"),r.forEach(u),l.forEach(u),this.h()},h(){h(e,"class","material-icons-outlined"),h(s,"slot","button"),h(s,"class","w-full h-full flex justify-center items-center svelte-16hbay0"),s.disabled=l=!a[1]},m(a,l){g(a,s,l),b(s,e),b(e,t)},p(a,e){2&e&&l!==(l=!a[1])&&(s.disabled=l)},d(a){a&&u(s)}}}function N(a){let s,e,x,k,w,j,T,I,U=a[2]&&B(a);return w=new q({props:{id:"email",type:"email",placeholder:"type your email address",value:a[0].email,autofocus:!0,required:!0,label:"Your email address",size:"xl",hasRightButton:!0,$$slots:{button:[F]},$$scope:{ctx:a}}}),w.$on("input",a[4]),{c(){s=c(),U&&U.c(),e=c(),x=d("div"),k=d("form"),t(w.$$.fragment),this.h()},l(a){m('[data-svelte="svelte-1om3z61"]',document.head).forEach(u),s=$(a),U&&U.l(a),e=$(a),x=f(a,"DIV",{class:!0});var t=p(x);k=f(t,"FORM",{});var r=p(k);l(w.$$.fragment,r),r.forEach(u),t.forEach(u),this.h()},h(){document.title="Sign Up - UMedmarket",h(x,"class","signup-content")},m(t,l){g(t,s,l),U&&U.m(t,l),g(t,e,l),g(t,x,l),b(x,k),r(w,k,null),j=!0,T||(I=y(k,"submit",v(a[5])),T=!0)},p(a,[s]){a[2]?U?(U.p(a,s),4&s&&o(U,1)):(U=B(a),U.c(),o(U,1),U.m(e.parentNode,e)):U&&(z(),n(U,1,1,(()=>{U=null})),E());const t={};1&s&&(t.value=a[0].email),258&s&&(t.$$scope={dirty:s,ctx:a}),w.$set(t)},i(a){j||(o(U),o(w.$$.fragment,a),j=!0)},o(a){n(U),n(w.$$.fragment,a),j=!1},d(a){a&&u(s),U&&U.d(a),a&&u(e),a&&u(x),i(w),T=!1,I()}}}function R(a,s,e){let t,l;x(a,j,(a=>e(0,t=a)));const r=k(w,{variables:{email:t.email}});x(a,r,(a=>e(6,l=a)));const o=O.debounce((a=>{j.update((s=>({...s,email:a})))}),300);let n,i;return a.$$.update=()=>{65&a.$$.dirty&&r.refetch({email:t.email}).then((a=>(e(1,n=!l.data.emailTaken),a))),64&a.$$.dirty&&e(1,n=!l.loading&&!l.data.emailTaken),64&a.$$.dirty&&e(2,i=O.get(l,"data.emailTaken")?"Email is already taken":null)},[t,n,i,r,async a=>{e(1,n=!1),o(a.target.value)},async()=>{n&&M("/signup/password")}]}export default class extends a{constructor(a){super(),s(this,a,R,N,e,{})}}
