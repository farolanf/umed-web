import{S as s,i as t,s as e,e as l,y as a,f as r,g as n,z as i,d as o,j as c,k as h,m as f,J as g,a as u,b as d,F as m,n as p,W as b}from"./client.d4d04371.js";function y(s,t,e){const l=s.slice();return l[4]=t[e],l}function v(s){let t,e,u=s[4]+"";return{c(){t=l("div"),e=a(u),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=n(t);e=i(l,u),l.forEach(o),this.h()},h(){c(t,"class","mb-2")},m(s,l){h(s,t,l),f(t,e)},p(s,t){4&t&&u!==(u=s[4]+"")&&g(e,u)},d(s){s&&o(t)}}}function $(s){let t,e,$,x,A=s[2],D=[];for(let t=0;t<A.length;t+=1)D[t]=v(y(s,A,t));return{c(){t=l("div"),e=l("div"),$=a(s[0]),x=u();for(let s=0;s<D.length;s+=1)D[s].c();this.h()},l(l){t=r(l,"DIV",{class:!0});var a=n(t);e=r(a,"DIV",{class:!0});var c=n(e);$=i(c,s[0]),c.forEach(o),x=d(a);for(let s=0;s<D.length;s+=1)D[s].l(a);a.forEach(o),this.h()},h(){c(e,"class","text-lg mb-4"),c(t,"class","w-full text-white p-8 absolute top-0"),m(t,"bg-red-500","error"===s[1]),m(t,"bg-blue-500","info"===s[1])},m(s,l){h(s,t,l),f(t,e),f(e,$),f(t,x);for(let s=0;s<D.length;s+=1)D[s].m(t,null)},p(s,[e]){if(1&e&&g($,s[0]),4&e){let l;for(A=s[2],l=0;l<A.length;l+=1){const a=y(s,A,l);D[l]?D[l].p(a,e):(D[l]=v(a),D[l].c(),D[l].m(t,null))}for(;l<D.length;l+=1)D[l].d(1);D.length=A.length}2&e&&m(t,"bg-red-500","error"===s[1]),2&e&&m(t,"bg-blue-500","info"===s[1])},i:p,o:p,d(s){s&&o(t),b(D,s)}}}function x(s,t,e){let l,{title:a=""}=t,{messages:r=[]}=t,{type:n="info"}=t;return s.$$set=s=>{"title"in s&&e(0,a=s.title),"messages"in s&&e(3,r=s.messages),"type"in s&&e(1,n=s.type)},s.$$.update=()=>{8&s.$$.dirty&&e(2,l=Array.isArray(r)?r:[r])},[a,n,l,r]}class A extends s{constructor(s){super(),t(this,s,x,$,e,{title:0,messages:3,type:1})}}export{A};
