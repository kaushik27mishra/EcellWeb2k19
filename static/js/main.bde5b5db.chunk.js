(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{28:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var a=t(11),l=t(12),r=t(14),c=t(13),o=t(15),u=t(0),s=t.n(u),m=(t(43),function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"l_main"},s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),n}(u.Component))},36:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(16),c=t.n(r),o=t(11),u=t(12),s=t(14),m=t(13),i=t(15),p=(t(42),t(24)),b=t(9),E=t(28),d=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(2),t.e(7),t.e(1),t.e(6)]).then(t.bind(null,175))}),h=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(17)]).then(t.bind(null,160))}),f=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,161))}),O=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,162))}),j=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,163))}),y=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,164))}),P=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,165))}),v=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(16)]).then(t.bind(null,166))}),z=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(15)]).then(t.bind(null,167))}),_=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(2),t.e(25),t.e(1),t.e(24)]).then(t.bind(null,168))}),g=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(22)]).then(t.bind(null,169))}),w=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,176))}),N=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(9),t.e(23)]).then(t.bind(null,174))}),k=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,170))}),q=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(21)]).then(t.bind(null,171))}),S=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,172))}),C=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,173))}),x=function(e){function n(){return Object(o.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement(E.a,{className:"page-loader"})},l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:"/",component:d}),l.a.createElement(b.b,{path:"/speakers",component:h}),l.a.createElement(b.b,{path:"/sponsors/sponsors_heads",component:C}),l.a.createElement(b.b,{path:"/sponsors/yearwise",component:S}),l.a.createElement(b.b,{path:"/sponsors/:year",component:f}),l.a.createElement(b.b,{path:"/sponsors",component:function(){return l.a.createElement(b.a,{to:"/sponsors/2018"})}}),l.a.createElement(b.b,{path:"/events/:id",component:j}),l.a.createElement(b.b,{path:"/events",component:O}),l.a.createElement(b.b,{path:"/startups/:year/:id",component:P}),l.a.createElement(b.b,{path:"/startups",component:y}),l.a.createElement(b.b,{path:"/mentors",component:v}),l.a.createElement(b.b,{path:"/gallery/:name",component:_}),l.a.createElement(b.b,{path:"/gallery",component:z}),l.a.createElement(b.b,{path:"/register",component:g}),l.a.createElement(b.b,{path:"/caportal_info",component:w}),l.a.createElement(b.b,{path:"/caportal",component:N}),l.a.createElement(b.b,{path:"/team/yearwise",component:q}),l.a.createElement(b.b,{path:"/team/:year",component:k}),l.a.createElement(b.b,{path:"/team",component:function(){return l.a.createElement(b.a,{to:"/team/2019"})}})))))}}]),n}(a.Component),D=(t(48),t(6)),I=t(27),J=t(32),T=t(23),X=t(33),A=t(34),B=t.n(A),L=t(35),M={loggedin:!1,first_name:"",last_name:""};t.d(n,"store",function(){return F});var R={key:"auth",storage:B.a,blacklist:[]},U=Object(D.c)({auth:Object(T.a)(R,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"update_user":return Object(L.a)({},e,n.payload);default:return e}})}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,F=Object(D.e)(U,{},V(Object(D.a)(J.a))),G=Object(T.b)(F);c.a.render(l.a.createElement(I.a,{store:F},l.a.createElement(X.a,{loading:"loading",persistor:G},l.a.createElement(x,null))),document.getElementById("root"))},37:function(e,n,t){e.exports=t(36)},42:function(e,n,t){},43:function(e,n,t){},48:function(e,n,t){}},[[37,4,5]]]);
//# sourceMappingURL=main.bde5b5db.chunk.js.map