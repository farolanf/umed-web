import{S as s,i as t,s as e,e as a,y as l,f as r,g as n,z as i,d as o,j as c,k as h,m as f,J as g,a as u,b as m,F as p,n as d,W as b}from"./client.84ab7982.js";function y(s,t,e){const a=s.slice();return a[4]=t[e],a}function v(s){let t,e,u=s[4]+"";return{c(){t=a("div"),e=l(u),this.h()},l(s){t=r(s,"DIV",{class:!0});var a=n(t);e=i(a,u),a.forEach(o),this.h()},h(){c(t,"class","mb-2")},m(s,a){h(s,t,a),f(t,e)},p(s,t){4&t&&u!==(u=s[4]+"")&&g(e,u)},d(s){s&&o(t)}}}function $(s){let t,e,$,x,A=s[2],D=[];for(let t=0;t<A.length;t+=1)D[t]=v(y(s,A,t));return{c(){t=a("div"),e=a("div"),$=l(s[0]),x=u();for(let s=0;s<D.length;s+=1)D[s].c();this.h()},l(a){t=r(a,"DIV",{class:!0});var l=n(t);e=r(l,"DIV",{class:!0});var c=n(e);$=i(c,s[0]),c.forEach(o),x=m(l);for(let s=0;s<D.length;s+=1)D[s].l(l);l.forEach(o),this.h()},h(){c(e,"class","text-lg mb-4"),c(t,"class","w-full text-white p-8 absolute top-0"),p(t,"bg-red-500","error"===s[1]),p(t,"bg-blue-500","info"===s[1])},m(s,a){h(s,t,a),f(t,e),f(e,$),f(t,x);for(let s=0;s<D.length;s+=1)D[s].m(t,null)},p(s,[e]){if(1&e&&g($,s[0]),4&e){let a;for(A=s[2],a=0;a<A.length;a+=1){const l=y(s,A,a);D[a]?D[a].p(l,e):(D[a]=v(l),D[a].c(),D[a].m(t,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=A.length}2&e&&p(t,"bg-red-500","error"===s[1]),2&e&&p(t,"bg-blue-500","info"===s[1])},i:d,o:d,d(s){s&&o(t),b(D,s)}}}function x(s,t,e){let a,{title:l=""}=t,{messages:r=[]}=t,{type:n="info"}=t;return s.$$set=s=>{"title"in s&&e(0,l=s.title),"messages"in s&&e(3,r=s.messages),"type"in s&&e(1,n=s.type)},s.$$.update=()=>{8&s.$$.dirty&&e(2,a=Array.isArray(r)?r:[r])},[l,n,a,r]}class A extends s{constructor(s){super(),t(this,s,x,$,e,{title:0,messages:3,type:1})}}export{A};
