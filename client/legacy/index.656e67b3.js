import{_ as t,a as e,b as n,c as r,i as a,d as s,S as o,s as c,p as u,l as i,f,q as l,e as p,w as h,r as m,u as d,g as v,x as b,z as y,A as g,m as O,J as j,P as $,h as w,t as P,j as D,k as x,D as E,o as R,v as S,ab as k,ac as I}from"./client.34e095e3.js";import{I as N}from"./Input.24eb630a.js";import{_ as U}from"./defineProperty.b786bad4.js";function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(r){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return n(this,a)}}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){U(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t){var e,n,r;return{c:function(){e=i("button"),n=i("i"),r=R("forward"),this.h()},l:function(t){e=m(t,"BUTTON",{slot:!0,class:!0});var a=d(e);n=m(a,"I",{class:!0});var s=d(n);r=S(s,"forward"),s.forEach(p),a.forEach(p),this.h()},h:function(){b(n,"class","material-icons-outlined"),b(e,"slot","button"),b(e,"class","w-full h-full flex justify-center items-center")},m:function(t,a){y(t,e,a),g(e,n),g(n,r)},d:function(t){t&&p(e)}}}function T(t){var e,n,r,a,s,o,c;return(a=new N({props:{id:"name",placeholder:"type your first and last name",value:t[0].fullName,autofocus:!0,required:!0,label:"Your first and last name",size:"xl",hasRightButton:!0,$$slots:{button:[M]},$$scope:{ctx:t}}})).$on("change",t[1]),{c:function(){e=u(),n=i("div"),r=i("form"),f(a.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-vw7w1k"]',document.head).forEach(p),e=h(t),n=m(t,"DIV",{class:!0});var s=d(n);r=m(s,"FORM",{class:!0});var o=d(r);v(a.$$.fragment,o),o.forEach(p),s.forEach(p),this.h()},h:function(){document.title="Sign Up - UMedmarket",b(r,"class","signup-form"),b(n,"class","signup-content")},m:function(u,i){y(u,e,i),y(u,n,i),g(n,r),O(a,r,null),s=!0,o||(c=j(r,"submit",$(t[2])),o=!0)},p:function(t,e){var n=w(e,1)[0],r={};1&n&&(r.value=t[0].fullName),8&n&&(r.$$scope={dirty:n,ctx:t}),a.$set(r)},i:function(t){s||(P(a.$$.fragment,t),s=!0)},o:function(t){D(a.$$.fragment,t),s=!1},d:function(t){t&&p(e),t&&p(n),x(a),o=!1,c()}}}function _(t,e,n){var r;E(t,k,(function(t){return n(0,r=t)}));return[r,function(t){k.update((function(e){return B(B({},e),{},{fullName:t.target.value})}))},function(){I("/signup/email")}]}var A=function(e){t(u,o);var n=q(u);function u(t){var e;return r(this,u),e=n.call(this),a(s(e),t,_,T,c,{}),e}return u}();export default A;
