import{S as s,i as t,s as e,e as l,w as a,f as r,g as n,x as i,d as o,j as c,k as h,l as f,H as g,a as u,b as p,D as d,n as m,V as b}from"./client.1ffe736b.js";function y(s,t,e){const l=s.slice();return l[4]=t[e],l}function v(s){let t,e,u=s[4]+"";return{c(){t=l("div"),e=a(u),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=n(t);e=i(l,u),l.forEach(o),this.h()},h(){c(t,"class","mb-2")},m(s,l){h(s,t,l),f(t,e)},p(s,t){4&t&&u!==(u=s[4]+"")&&g(e,u)},d(s){s&&o(t)}}}function $(s){let t,e,$,x,D=s[2],V=[];for(let t=0;t<D.length;t+=1)V[t]=v(y(s,D,t));return{c(){t=l("div"),e=l("div"),$=a(s[0]),x=u();for(let s=0;s<V.length;s+=1)V[s].c();this.h()},l(l){t=r(l,"DIV",{class:!0});var a=n(t);e=r(a,"DIV",{class:!0});var c=n(e);$=i(c,s[0]),c.forEach(o),x=p(a);for(let s=0;s<V.length;s+=1)V[s].l(a);a.forEach(o),this.h()},h(){c(e,"class","text-lg mb-4"),c(t,"class","w-full text-white p-8 absolute top-0"),d(t,"bg-red-500","error"===s[1]),d(t,"bg-blue-500","info"===s[1])},m(s,l){h(s,t,l),f(t,e),f(e,$),f(t,x);for(let s=0;s<V.length;s+=1)V[s].m(t,null)},p(s,[e]){if(1&e&&g($,s[0]),4&e){let l;for(D=s[2],l=0;l<D.length;l+=1){const a=y(s,D,l);V[l]?V[l].p(a,e):(V[l]=v(a),V[l].c(),V[l].m(t,null))}for(;l<V.length;l+=1)V[l].d(1);V.length=D.length}2&e&&d(t,"bg-red-500","error"===s[1]),2&e&&d(t,"bg-blue-500","info"===s[1])},i:m,o:m,d(s){s&&o(t),b(V,s)}}}function x(s,t,e){let l,{title:a=""}=t,{messages:r=[]}=t,{type:n="info"}=t;return s.$$set=s=>{"title"in s&&e(0,a=s.title),"messages"in s&&e(3,r=s.messages),"type"in s&&e(1,n=s.type)},s.$$.update=()=>{8&s.$$.dirty&&e(2,l=Array.isArray(r)?r:[r])},[a,n,l,r]}class D extends s{constructor(s){super(),t(this,s,x,$,e,{title:0,messages:3,type:1})}}export{D as A};
