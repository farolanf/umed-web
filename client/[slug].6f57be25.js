import{S as t,i as s,s as a,r as e,e as n,t as o,v as i,d as r,w as c,a as l,b as h,c as u,f,g as m,h as p,j as d,n as v}from"./client.faf4649c.js";function g(t){let s,a,g,j,w,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(E),w=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,E),s.forEach(r),w=c(t),x=l(t,"DIV",{class:!0}),h(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,g,s),p(g,j),m(t,w,s),m(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&d(j,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(w),t&&r(x)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function w(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,w,g,a,{post:0})}}export{j as preload};
