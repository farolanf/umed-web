import{O as t,P as n,_ as e,a as s,b as r,c as a,i as c,d as o,S as u,s as i,J as f,f as l,t as h,a1 as p,k as v,K as m,g as d,h as y,j as x,z as g,n as R,o as b,p as j,q as k,u as D}from"./client.ac6465c0.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=s(t);if(n){var c=s(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return r(this,e)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=f(),s=l("h1"),r=h(o),a=f(),c=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),e=m(t),s=d(t,"H1",{});var n=y(s);r=x(n,o),n.forEach(v),a=m(t),c=d(t,"DIV",{class:!0}),y(c).forEach(v),this.h()},h:function(){g(c,"class","content svelte-emm3f3")},m:function(t,n){R(t,e,n),R(t,s,n),b(s,r),R(t,a,n),R(t,c,n),c.innerHTML=u},p:function(t,e){var s=j(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&k(r,o),1&s&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:D,o:D,d:function(t){t&&v(e),t&&v(s),t&&v(a),t&&v(c)}}}function w(t){return L.apply(this,arguments)}function L(){return(L=t(n.mark((function t(e){var s,r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(t,n,e){var s=n.post;return t.$$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var P=function(t){e(s,u);var n=E(s);function s(t){var e;return a(this,s),e=n.call(this),c(o(e),t,M,H,i,{post:0}),e}return s}();export default P;export{w as preload};
