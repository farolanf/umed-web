import{S as a,i as s,s as t,E as e,e as l,q as r,V as n,f as o,F as c,c as u,b as i,r as f,u as m,j as d,k as h,v as p,A as $,a1 as v,x as g,y as b,z as x,O as w,t as E,d as y,aa as j,ab as I}from"./client.6b6df5c9.js";import{I as N}from"./Input.9f93fc83.js";function k(a){let s,t,e;return{c(){s=l("button"),t=l("i"),e=E("forward"),this.h()},l(a){s=u(a,"BUTTON",{slot:!0,class:!0});var l=i(s);t=u(l,"I",{class:!0});var r=i(t);e=y(r,"forward"),r.forEach(o),l.forEach(o),this.h()},h(){m(t,"class","material-icons-outlined"),m(s,"slot","button"),m(s,"class","w-full h-full flex justify-center items-center")},m(a,l){d(a,s,l),h(s,t),h(t,e)},d(a){a&&o(s)}}}function O(a){let s,t,w,E,y,j,I;return E=new N({props:{id:"name",placeholder:"type your first and last name",value:a[0].fullName,autofocus:!0,required:!0,label:"Your first and last name",size:"xl",hasRightButton:!0,$$slots:{button:[k]},$$scope:{ctx:a}}}),E.$on("change",a[1]),{c(){s=e(),t=l("div"),w=l("form"),r(E.$$.fragment),this.h()},l(a){n('[data-svelte="svelte-vw7w1k"]',document.head).forEach(o),s=c(a),t=u(a,"DIV",{class:!0});var e=i(t);w=u(e,"FORM",{class:!0});var l=i(w);f(E.$$.fragment,l),l.forEach(o),e.forEach(o),this.h()},h(){document.title="Sign Up - UMedmarket",m(w,"class","signup-form"),m(t,"class","signup-content")},m(e,l){d(e,s,l),d(e,t,l),h(t,w),p(E,w,null),y=!0,j||(I=$(w,"submit",v(a[2])),j=!0)},p(a,[s]){const t={};1&s&&(t.value=a[0].fullName),8&s&&(t.$$scope={dirty:s,ctx:a}),E.$set(t)},i(a){y||(g(E.$$.fragment,a),y=!0)},o(a){b(E.$$.fragment,a),y=!1},d(a){a&&o(s),a&&o(t),x(E),j=!1,I()}}}function U(a,s,t){let e;w(a,j,(a=>t(0,e=a)));return[e,a=>{j.update((s=>({...s,fullName:a.target.value})))},()=>{I("/signup/email")}]}export default class extends a{constructor(a){super(),s(this,a,U,O,t,{})}}
