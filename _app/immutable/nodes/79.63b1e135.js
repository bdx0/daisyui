import{s as U,a as $,f as p,c as E,g,h as v,d as u,j as m,i as w,D as q,l as S,m as j,x as d,Y as G,y as P}from"../chunks/scheduler.cc1ce551.js";import{S as V,i as z,b as C,d as F,m as H,a as M,t as O,e as Y}from"../chunks/index.ffedd617.js";import{e as A}from"../chunks/each.e59479a4.js";import{S as B}from"../chunks/SEO.17c967f1.js";function D(n,e,l){const a=n.slice();return a[2]=e[l],a}function J(n){let e,l,a;return{c(){e=p("figure"),l=p("img"),this.h()},l(i){e=g(i,"FIGURE",{class:!0});var o=v(e);l=g(o,"IMG",{loading:!0,src:!0,class:!0,alt:!0,style:!0}),o.forEach(u),this.h()},h(){m(l,"loading","lazy"),G(l.src,a=n[2].thumbnail)||m(l,"src",a),m(l,"class","border-base-content bg-base-300 rounded-btn border border-opacity-5"),m(l,"alt",n[2].title),m(l,"style",`view-transition-name: ${encodeURI(n[2].slug).replaceAll("%20","-")}-img`),m(e,"class","sm:max-w-[12rem] w-full object-cover mx-auto sm:pr-0 p-6 max-sm:pb-0")},m(i,o){w(i,e,o),d(e,l)},p:P,d(i){i&&u(e)}}}function R(n){let e,l,a,i,o=n[2].title+"",r,t,c,s=n[2].desc+"",b,x,f=n[2].thumbnail&&J(n);return{c(){e=p("a"),f&&f.c(),l=$(),a=p("div"),i=p("h2"),r=S(o),t=$(),c=p("p"),b=S(s),x=$(),this.h()},l(_){e=g(_,"A",{class:!0,href:!0});var h=v(e);f&&f.l(h),l=E(h),a=g(h,"DIV",{class:!0,style:!0});var y=v(a);i=g(y,"H2",{class:!0});var I=v(i);r=j(I,o),I.forEach(u),t=E(y),c=g(y,"P",{class:!0});var k=v(c);b=j(k,s),k.forEach(u),y.forEach(u),x=E(h),h.forEach(u),this.h()},h(){m(i,"class","card-title"),m(c,"class","text-xs opacity-60"),m(a,"class","card-body"),m(a,"style",`view-transition-name: ${encodeURI(n[2].slug).replaceAll("%20","-")}-text`),m(e,"class","card sm:card-side max-w-sm sm:max-w-none hover:bg-base-200 transition-colors"),m(e,"href",`/blog/${n[2].slug}`)},m(_,h){w(_,e,h),f&&f.m(e,null),d(e,l),d(e,a),d(a,i),d(i,r),d(a,t),d(a,c),d(c,b),d(e,x)},p(_,h){_[2].thumbnail&&f.p(_,h)},d(_){_&&u(e),f&&f.d()}}}function K(n){let e,l,a,i;e=new B({props:{title:"title",desc:"desc"}});let o=A(n[0]),r=[];for(let t=0;t<o.length;t+=1)r[t]=R(D(n,o,t));return{c(){C(e.$$.fragment),l=$(),a=p("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){F(e.$$.fragment,t),l=E(t),a=g(t,"DIV",{class:!0});var c=v(a);for(let s=0;s<r.length;s+=1)r[s].l(c);c.forEach(u),this.h()},h(){m(a,"class","grid gap-6 justify-items-stretch")},m(t,c){H(e,t,c),w(t,l,c),w(t,a,c);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(a,null);i=!0},p(t,[c]){if(c&1){o=A(t[0]);let s;for(s=0;s<o.length;s+=1){const b=D(t,o,s);r[s]?r[s].p(b,c):(r[s]=R(b),r[s].c(),r[s].m(a,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){O(e.$$.fragment,t),i=!1},d(t){t&&(u(l),u(a)),Y(e,t),q(r,t)}}}function L(n,e,l){let{data:a}=e,{posts:i}=a;return n.$$set=o=>{"data"in o&&l(1,a=o.data)},[i,a]}class X extends V{constructor(e){super(),z(this,e,L,K,U,{data:1})}}export{X as component};
