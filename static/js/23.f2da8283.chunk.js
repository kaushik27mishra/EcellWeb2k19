(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(e,t,a){"use strict";a.r(t);var n=a(87),r=a(11),s=a(12),l=a(14),i=a(13),c=a(15),o=a(0),u=a.n(o),m=a(50),d=a(89),f=(a(67),a(56)),p=a(25),g=a(72),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).isEdit=a.props.location.pathname.indexOf("edit")>-1,a.state={errors:{},requesting:!1,success:!1,startup:{},validate:!0,err_num:[],email_check:!0,contact_check:!0},a._register_startup=function(e){if(e.preventDefault(),a.setState({requesting:!0}),a.name.value.length<1)return a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[0]),validate:!1,requesting:!1}),void console.log("This runs 0");if(a.email.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[11]),validate:!1,requesting:!1});else{var t=a.email.value,r=function(e){return/\S+@\S+\.\S+/.test(String(e).toLowerCase())};if(!1!==r(t))if(!0===r(t)&&a.setState({email_check:!1}),a.contact.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[9]),validate:!1,requesting:!1});else{var s=a.contact.value,l=function(e){return/^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(String(e))};if(!1!==l(s))if(!0===l(s)&&a.setState({contact_check:!1}),a.brief.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[1]),validate:!1,requesting:!1});else{if(a.description.get_value().length<9)return a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[2]),validate:!1,requesting:!1}),void console.log("This runs 2");if(""!==a.sector.value)if(a.address1.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[3]),validate:!1,requesting:!1});else if(a.district.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[4]),validate:!1,requesting:!1});else if(a.lstate.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[15]),validate:!1,requesting:!1});else if(a.country.value.length<1)a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[16]),validate:!1,requesting:!1});else{var i=Object(m.b)().post,c="/iportal/startup/";a.props.auth.startup_id&&(i=Object(m.b)().put,c="/iportal/startup/".concat(a.props.auth.startup_id,"/")),i(c,{name:a.name.value,email:a.email.value,contact:a.contact.value,brief:a.brief.value,description:a.description.get_value(),sector:a.sector.value,address1:a.address1.value,address2:a.address2.value,district:a.district.value,state:a.lstate.value,country:a.country.value,user:a.props.auth.id}).then(function(e){var t=e.data;console.log(t),a.isEdit?a.props.history.goBack():a.setState({success:!0,requesting:!1})}).catch(function(e){var t=e.response.data;console.log(t),a.setState({errors:t,requesting:!1}),t.user&&(alert("your startup is already registered"),a.props.history.push("/startups"))})}else a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[6]),validate:!1,requesting:!1})}else a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[10]),validate:!1,requesting:!1})}else a.setState({success:!1,err_num:[].concat(Object(n.a)(a.state.err_num),[12]),validate:!1,requesting:!1})}},a._reset_form=function(e){e.preventDefault(),a.name.value="",a.email.value="",a.contact.value="",a.brief.value="",a.sector.value="",a.address1.value="",a.address2.value="",a.district.value="",a.lstate.value="",a.country.value="",a.description.set_value("")},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){var a=t.data;e.setState({startup:a}),console.log(a,"running"),e.name.value=a.name,e.email.value=a.email,e.contact.value=a.contact,e.brief.value=a.brief,e.sector.value=a.sector,e.address1.value=a.address1,e.address2.value=a.address2,e.district.value=a.district,e.lstate.value=a.state,e.country.value=a.country,e.description.set_value(a.description)})}},{key:"render",value:function(){var e=this,t=f.c.map(function(e){return u.a.createElement("option",{value:e},e)});if(this.state.success&&!this.state.startup.can_hire_interns)return u.a.createElement("div",null,u.a.createElement("h2",{className:"mt-5 text-center"},"Successfully submited for verification"),u.a.createElement("h4",{className:"text-center mt-3"},"You will receive confirmation by E-mail and SMS once the verification is complete."),u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{className:"btn btn-primary mt-5",onClick:function(){return e.props.history.goBack()}},"Go to homepage")));if(this.state.success&&this.state.startup.can_hire_interns)return u.a.createElement("div",null,u.a.createElement("h2",{className:"mt-5 text-center font-weight-bold"},"Successfully edited the details!!"),u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{className:"btn btn-primary mt-5",onClick:function(){return e.props.history.goBack()}},"Go to homepage")));var a={};return Object.keys(this.state.errors).forEach(function(t){a[t]=e.state.errors[t].map(function(e,t){return u.a.createElement("div",{key:t,className:"text-danger"},e)})}),u.a.createElement("div",{className:"reg-pad"},u.a.createElement("div",{className:"container hoverable jumbotron"},u.a.createElement("div",{className:""},u.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/idea/")},className:"btn font-weight-bold btn-primary"},"Go Back")),u.a.createElement("div",null,u.a.createElement("h1",{className:"open text-center font-weight-bold my-5"},this.isEdit?"Edit Startup Profile":u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold"},"Startup Profile"),u.a.createElement("h6",null,u.a.createElement("i",{className:"font-weight-bold"},"(All fields are mandatory)")))),u.a.createElement("div",{className:"text-center"},u.a.createElement(d.a,null)),u.a.createElement("form",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Name"),u.a.createElement("input",{type:"text",ref:function(t){return e.name=t},className:"form-control"}),-1!=this.state.err_num.indexOf(0)&&0==this.state.validate&&0===this.name.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Email"),u.a.createElement("input",{type:"email",ref:function(t){return e.email=t},className:"form-control"}),-1!=this.state.err_num.indexOf(11)&&0==this.state.validate&&0===this.email.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null,-1!=this.state.err_num.indexOf(12)&&0==this.state.validate&&0!==this.email.value.length&&this.state.email_check?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"Email provided is invalid")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Contact"),u.a.createElement("input",{type:"text",ref:function(t){return e.contact=t},className:"form-control"}),-1!=this.state.err_num.indexOf(9)&&0==this.state.validate&&0===this.contact.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null,-1!=this.state.err_num.indexOf(10)&&0==this.state.validate&&0!==this.contact.value.length&&this.state.contact_check?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"Contact is invalid")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Brief"),u.a.createElement("input",{type:"text",ref:function(t){return e.brief=t},className:"form-control"}),-1!=this.state.err_num.indexOf(1)&&0==this.state.validate&&0===this.brief.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Description"),u.a.createElement(g.a,{onRef:function(t){return e.description=t}}),-1!=this.state.err_num.indexOf(2)&&0==this.state.validate&&8===this.description.get_value().length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,u.a.createElement("span",{className:"font-weight-bold"},"Sector"),"*\xa0 ",u.a.createElement("i",null,"(eg: technical, education)")),u.a.createElement("select",{className:"form-control",ref:function(t){return e.sector=t}},t),-1!=this.state.err_num.indexOf(6)&&0==this.state.validate&&""===this.sector.value?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Address line 1"),u.a.createElement("input",{type:"text",ref:function(t){return e.address1=t},className:"form-control"}),-1!=this.state.err_num.indexOf(3)&&0==this.state.validate&&0===this.address1.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Address line 2"),u.a.createElement("input",{type:"text",ref:function(t){return e.address2=t},className:"form-control"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"District"),u.a.createElement("input",{type:"text",ref:function(t){return e.district=t},className:"form-control"}),-1!=this.state.err_num.indexOf(4)&&0==this.state.validate&&0===this.district.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"State"),u.a.createElement("input",{type:"text",ref:function(t){return e.lstate=t},className:"form-control"}),-1!=this.state.err_num.indexOf(15)&&0==this.state.validate&&0===this.lstate.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"font-weight-bold"},"Country"),u.a.createElement("input",{type:"text",ref:function(t){return e.country=t},className:"form-control"}),-1!=this.state.err_num.indexOf(16)&&0==this.state.validate&&0===this.country.value.length?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),u.a.createElement("div",{className:"text-center"},0==this.state.validate?u.a.createElement("div",null,u.a.createElement("i",{className:"font-weight-bold text-danger"},"(Some fields are empty or invalid, recheck and try again)")):null,u.a.createElement("button",{disabled:this.state.requesting||this.state.success,onClick:this._register_startup,className:"btn font-weight-bold btn-primary"},this.state.requesting?u.a.createElement("i",{className:"fa fa-spinner fa-spin"}):"submit"),u.a.createElement("button",{onClick:this._reset_form,className:"btn font-weight-bold btn-danger"},"reset"))))))}}]),t}(o.Component);t.default=Object(p.b)(function(e){return e})(h)},56:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return o});var n,r=a(26),s=(n={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},Object(r.a)(n,"CAB","Campus Ambassador"),Object(r.a)(n,"DRT","Director"),Object(r.a)(n,"CDC","CDC Admin"),n),l={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"},i=function(e){try{return e=(e=new Date(e)).toISOString(),"".concat(e.slice(8,10),"-").concat(e.slice(5,7),"-").concat(e.slice(0,4))}catch(t){return"invalid-format"}},c=["Accountancy","Banking","Finance","Business","Consulting","Management","Charity","Design","Engineering","Agriculture","Healthcare","Hospitality","IT","Law","Security","Leisure","Sport","Tourism","Marketing","Advertising","PR","Media","Construction","Public Services","Administration","Retail","Sales","Science","Social Care","Teacher Training","Education","Transport","Logistics","Others"],o=["Select","Student","Faculty"]},72:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(11),r=a(12),s=a(14),l=a(13),i=a(15),c=a(0),o=a.n(c),u=(a(73),a(96),a(97)),m=a(86),d=a(98),f=a.n(d),p=a(99),g=a.n(p),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={editorState:m.EditorState.createEmpty()},a.set_value=function(e){var t=g()(e);if(t){var n=m.ContentState.createFromBlockArray(t.contentBlocks),r=m.EditorState.createWithContent(n);a.setState({editorState:r})}},a.get_value=function(){return f()(Object(m.convertToRaw)(a.state.editorState.getCurrentContent()))},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wysiwyg"},o.a.createElement(u.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),t}(c.Component)},73:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/no_pic.86bd217e.svg"},89:function(e,t,a){"use strict";var n=a(122),r=a.n(n),s=a(27),l=a(123),i=a(11),c=a(12),o=a(14),u=a(13),m=a(15),d=a(0),f=a.n(d),p=a(50),g=a(25),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={progress:0,uploading:!1,startup:{}},a._upload_logo=function(){var e=Object(l.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.startup.logo_id){e.next=4;break}return e.next=4,Object(p.b)().delete("/iportal/logo/".concat(a.state.startup.logo_id,"/")).then(function(e){a.setState({startup:Object(s.a)({},a.state.startup,{logo_id:null,logo:null})})});case 4:(n=document.createElement("input")).type="file",n.accept="image/x-png,image/gif,image/jpeg,image/svg+xml",n.click(),n.addEventListener("change",function(e){var t=e.target.files,n=new FileReader;n.readAsDataURL(t[0]),n.addEventListener("load",function(e){a.setState({startup:Object(s.a)({},a.state.startup,{logo:n.result})});var r=new FormData,l=new XMLHttpRequest;r.append("logo",t[0]),r.append("startup",a.props.auth.startup_id),l.addEventListener("load",function(e){var t=JSON.parse(e.target.response);console.log(t),a.setState({uploading:!1,progress:0,startup:Object(s.a)({},a.state.startup,{logo:t.logo,logo_id:t.id})})}),l.upload.addEventListener("progress",function(e){var t=Math.round(e.loaded/e.total*100);console.log({progress:t}),a.setState({progress:t})}),l.open("post",p.a+"/iportal/logo/"),l.setRequestHeader("Authorization",a.props.auth.token),l.send(r),a.setState({uploading:!0})})});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){if(!this.props.auth.startup_id)return null;var e=this.state.startup.logo?this.state.startup.logo:a(82);return f.a.createElement("div",null,f.a.createElement("img",{style:{outline:"4px solid #57C952",outlineOffset:"12px",maxWidth:"300px",maxHeight:"250px"},className:"logo_img",src:e,alt:""}),f.a.createElement("div",null,f.a.createElement("button",{disabled:this.state.uploading,onClick:this._upload_logo,className:"btn font-weight-bold btn-success"},this.state.uploading?"uploading":"Change logo",this.state.uploading?f.a.createElement("span",null,f.a.createElement("i",{className:"fa fa-spinner fa-spin"}),this.state.progress?this.state.progress:null):null)))}}]),t}(d.Component);t.a=Object(g.b)(function(e){return e})(h)}}]);
//# sourceMappingURL=23.f2da8283.chunk.js.map