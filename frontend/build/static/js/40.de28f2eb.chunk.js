(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{135:function(e,a,t){},544:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var n=t(11),l=t(12),c=t(14),s=t(13),r=t(15),i=t(0),u=t.n(i),o=t(50),m=t(62),p=t(59),d=t(317),h=t.n(d),E=(t(320),t(135),t(58)),b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={pic:[],photos:[],year_name:"",success:!1,loading:!0},t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.name;this.setState({year_name:a}),Object(o.b)().get("/gallery/list/").then(function(t){var n=t.data.gallery[a];console.log(n),n.forEach(function(a){e.state.photos.push({thumbnail:a.small,original:a.big})}),e.setState({success:!0,loading:!1}),e.state.success&&(document.querySelector(".image-gallery-play-button").click(),document.querySelector(".image-gallery-play-button").click())})}},{key:"render",value:function(){return u.a.createElement("div",{className:"whole-gallery"},u.a.createElement(m.a,null),u.a.createElement("div",{style:{paddingTop:"200px"}},u.a.createElement("div",{className:"position11 shadow p-3 mb-5 bg-white rounded"},"Gallery of ",this.state.year_name),u.a.createElement("div",{className:"gallery container-fluid ctn20 shadow p-3 mb-5 bg-white rounded",style:{maxWidth:"1300px"}},this.state.loading?u.a.createElement(E.a,null):u.a.createElement(h.a,{className:"shadow-lg p-3 mb-5 bg-white rounded",items:this.state.photos}))),u.a.createElement(p.a,null))}}]),a}(i.Component)},58:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(11),l=t(12),c=t(14),s=t(13),r=t(15),i=t(0),u=t.n(i),o=(t(34),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"loader"},u.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},u.a.createElement("div",{className:"l_square"},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null)),u.a.createElement("div",{className:"l_square"},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null)),u.a.createElement("div",{className:"l_square"},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null)),u.a.createElement("div",{className:"l_square"},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null))))}}]),a}(i.Component))}}]);
//# sourceMappingURL=40.de28f2eb.chunk.js.map