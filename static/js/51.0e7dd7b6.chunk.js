(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{558:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(12),r=a(14),o=a(13),c=a(15),s=a(0),i=a.n(s),p=a(50),m=a(24),u=(a(72),a(25)),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={jobs:[]},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.b)().get("/iportal/job/?startup=".concat(this.props.auth.startup_id)).then(function(t){var a=t.data.results;console.log({jobs:a}),e.setState({jobs:a})})}},{key:"render",value:function(){var e=this,t=this.state.jobs.map(function(t,a){return i.a.createElement("tr",{key:t.id},i.a.createElement("th",{scope:"row"},a+1),i.a.createElement("td",null,i.a.createElement(m.b,{class:"text-primary font-weight-bold",to:"/internship/startup/openings/".concat(t.id,"/")},t.name)),i.a.createElement("td",null,t.job_type),i.a.createElement("td",null,t.total_applicants),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/startup/application/".concat(t.id,"/"))},className:"btn py-1 px-2"},"list")))});return i.a.createElement("div",{className:"container jumbotron hoverable"},i.a.createElement("div",{style:{float:"right"}},i.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/startup/openings/new/")},className:"btn font-weight-bold align-self-center btn-primary"},"New Work Profile")),i.a.createElement("br",null),i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-center font-weight-bold flex-grow-1 my-5 open"},"Work Profiles")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"font-weight-bold"},"#"),i.a.createElement("th",{className:"font-weight-bold"},"Work Profile name"),i.a.createElement("th",{className:"font-weight-bold"},"Type"),i.a.createElement("th",{className:"font-weight-bold"},"no. applied"),i.a.createElement("th",{className:"font-weight-bold"},"Applicants"))),i.a.createElement("tbody",null,t))))}}]),t}(s.Component);t.default=Object(u.b)(function(e){return e})(b)}}]);
//# sourceMappingURL=51.0e7dd7b6.chunk.js.map