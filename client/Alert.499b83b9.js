import{S as s,i as t,s as e,e as a,t as l,a as r,b as n,c as i,d as o,f as c,g as h,h as f,j as g,r as u,w as p,I as d,n as m,Y as b}from"./client.faf4649c.js";function y(s,t,e){const a=s.slice();return a[4]=t[e],a}function v(s){let t,e,u=s[4]+"";return{c(){t=a("div"),e=l(u),this.h()},l(s){t=r(s,"DIV",{class:!0});var a=n(t);e=i(a,u),a.forEach(o),this.h()},h(){c(t,"class","mb-2")},m(s,a){h(s,t,a),f(t,e)},p(s,t){4&t&&u!==(u=s[4]+"")&&g(e,u)},d(s){s&&o(t)}}}function $(s){let t,e,$,x,I=s[2],w=[];for(let t=0;t<I.length;t+=1)w[t]=v(y(s,I,t));return{c(){t=a("div"),e=a("div"),$=l(s[0]),x=u();for(let s=0;s<w.length;s+=1)w[s].c();this.h()},l(a){t=r(a,"DIV",{class:!0});var l=n(t);e=r(l,"DIV",{class:!0});var c=n(e);$=i(c,s[0]),c.forEach(o),x=p(l);for(let s=0;s<w.length;s+=1)w[s].l(l);l.forEach(o),this.h()},h(){c(e,"class","text-lg mb-4"),c(t,"class","w-full text-white p-8 absolute top-0"),d(t,"bg-red-500","error"===s[1]),d(t,"bg-blue-500","info"===s[1])},m(s,a){h(s,t,a),f(t,e),f(e,$),f(t,x);for(let s=0;s<w.length;s+=1)w[s].m(t,null)},p(s,[e]){if(1&e&&g($,s[0]),4&e){let a;for(I=s[2],a=0;a<I.length;a+=1){const l=y(s,I,a);w[a]?w[a].p(l,e):(w[a]=v(l),w[a].c(),w[a].m(t,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=I.length}2&e&&d(t,"bg-red-500","error"===s[1]),2&e&&d(t,"bg-blue-500","info"===s[1])},i:m,o:m,d(s){s&&o(t),b(w,s)}}}function x(s,t,e){let a,{title:l=""}=t,{messages:r=[]}=t,{type:n="info"}=t;return s.$$set=s=>{"title"in s&&e(0,l=s.title),"messages"in s&&e(3,r=s.messages),"type"in s&&e(1,n=s.type)},s.$$.update=()=>{8&s.$$.dirty&&e(2,a=Array.isArray(r)?r:[r])},[l,n,a,r]}class I extends s{constructor(s){super(),t(this,s,x,$,e,{title:0,messages:3,type:1})}}export{I as A};
