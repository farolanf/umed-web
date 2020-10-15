import{S as a,i as s,s as t,t as e,e as r,c as n,a as l,b as o,d as c,f as i,g as u,h as m,j as f,k as d,n as h,q as p,l as $,m as g,o as N,p as v,R as y,r as w,u as b,v as x,w as O,x as S,y as k,z as E,A as J,B as R}from"./client.faf4649c.js";function j(a){let s,t,d,h=JSON.stringify(a[0].data.users,null,2)+"";return{c(){s=e("JSON "),t=r("pre"),d=e(h),this.h()},l(a){s=n(a,"JSON "),t=l(a,"PRE",{class:!0});var e=o(t);d=n(e,h),e.forEach(c),this.h()},h(){i(t,"class","svelte-1dpkbfh")},m(a,e){u(a,s,e),u(a,t,e),m(t,d)},p(a,s){1&s&&h!==(h=JSON.stringify(a[0].data.users,null,2)+"")&&f(d,h)},d(a){a&&c(s),a&&c(t)}}}function B(a){let s,t=a[0].data&&j(a);return{c(){t&&t.c(),s=d()},l(a){t&&t.l(a),s=d()},m(a,e){t&&t.m(a,e),u(a,s,e)},p(a,[e]){a[0].data?t?t.p(a,e):(t=j(a),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:h,o:h,d(a){t&&t.d(a),a&&c(s)}}}function P(a,s,t){let e;const r=p($`
    { 
      users { 
        firstName
        lastName
        email
        roles
      } 
    }
  `);return g(a,r,(a=>t(0,e=a))),[e,r]}class T extends a{constructor(a){super(),s(this,a,P,B,t,{})}}function U(a){let s,t,i,f;return{c(){s=r("button"),t=e("Register")},l(a){s=l(a,"BUTTON",{});var e=o(s);t=n(e,"Register"),e.forEach(c)},m(e,r){u(e,s,r),m(s,t),i||(f=N(s,"click",a[0]),i=!0)},p:h,i:h,o:h,d(a){a&&c(s),i=!1,f()}}}function _(a,s,t){let e;const r=v(y);let n=p($`
    {
      users {
        id
        first_name
        last_name
        email
        role
      }
    }
  `);return g(a,n,(a=>t(2,e=a))),a.$$.update=()=>{4&a.$$.dirty&&console.log(e.data)},[async()=>{r({variables:{fullName:"Patient1 Name",email:"patient1@test.com",password:"martapura",passwordConfirmation:"martapura",role:"patient"}}).then((a=>{console.log("new user",a)})).catch((a=>{console.log(a.message)}))},n]}class q extends a{constructor(a){super(),s(this,a,_,U,t,{})}}function z(a){let s,t,e,r,n;return t=new T({}),r=new q({}),{c(){s=w(),b(t.$$.fragment),e=w(),b(r.$$.fragment),this.h()},l(a){x('[data-svelte="svelte-ybyrev"]',document.head).forEach(c),s=O(a),S(t.$$.fragment,a),e=O(a),S(r.$$.fragment,a),this.h()},h(){document.title="UMedmarket"},m(a,l){u(a,s,l),k(t,a,l),u(a,e,l),k(r,a,l),n=!0},p:h,i(a){n||(E(t.$$.fragment,a),E(r.$$.fragment,a),n=!0)},o(a){J(t.$$.fragment,a),J(r.$$.fragment,a),n=!1},d(a){a&&c(s),R(t,a),a&&c(e),R(r,a)}}}export default class extends a{constructor(a){super(),s(this,a,null,z,t,{})}}
