(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{50:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(66),r=n.n(a),i=n(35),o="http://localhost:8000";o="",t.b=function(){var e=void 0,t=i.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),r.a.create({baseURL:o,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},53:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"===typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var l,s=[],u=!1,m=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):m=-1,s.length&&d())}function d(){if(!u){var e=c(p);u=!0;for(var t=s.length;t;){for(l=s,s=[];++m<t;)l&&l[m].run();m=-1,t=s.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||u||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},531:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(11),r=n(12),i=n(14),o=n(13),c=n(15),l=n(0),s=n.n(l),u=n(50),m=n(59),p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).app_id=Number(n.props.match.params.application_id),n.state={application:{applicant_obj:{}}},n._update_status=function(e){e.preventDefault(),Object(u.b)().patch("/iportal/job_application/".concat(n.app_id,"/"),{status:n.status.value}).then(function(e){var t=e.data;console.log(t),n.props.history.goBack()})},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/iportal/job_application/".concat(this.app_id,"/")).then(function(t){var n=t.data;console.log(n),e.setState({application:n})})}},{key:"render",value:function(){var e=this,t=this.state.application,n=Object.keys(m.a).map(function(e){return s.a.createElement("option",{key:e,value:e},m.a[e])});return s.a.createElement("div",{className:"container jumbotron hoverable"},s.a.createElement("div",{style:{marginBottom:"50px"}},s.a.createElement("button",{style:{float:"left"},className:"btn btn-primary font-weight-bold",onClick:function(){return e.props.history.goBack()}},"Go back")),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("div",{className:"text-center my-3"},s.a.createElement("h1",{className:"text-center font-weight-bold flex-grow-1"},"Job Application")),s.a.createElement("div",{className:"text-center"},s.a.createElement("a",{href:t.resume,target:"_blank",className:"btn my-3 btn-danger font-weight-bold"},"Resume")),s.a.createElement("div",{className:"my-3"},s.a.createElement("span",{className:"font-weight-bold"},"Name: "),s.a.createElement("span",null,t.applicant_obj.first_name," ",t.applicant_obj.last_name)),s.a.createElement("div",{className:"my-3"},s.a.createElement("span",{className:"font-weight-bold"},"Email: "),s.a.createElement("span",null,t.applicant_obj.email)),s.a.createElement("div",{className:"my-3"},s.a.createElement("span",{className:"font-weight-bold"},"Contact: "),s.a.createElement("span",null,t.applicant_obj.contact)),s.a.createElement("div",{className:"my-3"},s.a.createElement("div",{className:"font-weight-bold"},"How you are suitable for this job?: "),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.ques1}})),s.a.createElement("div",{className:"my-3"},s.a.createElement("div",{className:"font-weight-bold"},"During what timeframe you are available for the job?"),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.ques2}})),s.a.createElement("div",{className:"my-3 d-flex justify-content-center"},s.a.createElement("div",null,s.a.createElement("select",{style:{maxWidth:"300px",border:"2px solid gray"},className:"text-center my-4 form-control",ref:function(t){return e.status=t}},n),s.a.createElement("button",{onClick:this._update_status,className:"btn btn-success font-weight-bold"},"Submit")))))}}]),t}(l.Component)},59:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l});var a,r=n(26),i=(a={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},Object(r.a)(a,"CAB","Campus Ambassador"),Object(r.a)(a,"DRT","Director"),a),o={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"},c=function(e){try{return e=(e=new Date(e)).toISOString(),"".concat(e.slice(8,10),"-").concat(e.slice(5,7),"-").concat(e.slice(0,4))}catch(t){return"invalid-format"}},l=["Accountancy","Banking","Finance","Business","Consulting","Management","Charity","Design","Engineering","Agriculture","Healthcare","Hospitality","IT","Law","Security","Leisure","Sport","Tourism","Marketing","Advertising","PR","Media","Construction","Public Services","Administration","Retail","Sales","Science","Social Care","Teacher Training","Education","Transport","Logistics","Others"]}}]);
//# sourceMappingURL=44.0bfc9458.chunk.js.map