(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(44),a(2)),l=a(10),i=a(11),u=a(13),m=a(12),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"This is a About page")}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"This is a home page")}}]),a}(n.Component),h=a(17),v=a(18),E=a(36),f=a.n(E);function g(e){return{type:"login_user",payload:f.a.post("/api/users/login",e).then((function(e){return e.data}))}}var b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",errors:[]},e.displayErrors=function(e){return e.map((function(e,t){return r.a.createElement("p",{key:t},e)}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.submitform=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.isformvalid(e.state)&&(e.setState({errors:[]}),e.props.dispatch(g(a)).then((function(e){return console.log(e)})))},e.isformvalid=function(e){var t=e.email,a=e.password;return t&&a},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Login"),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},id:"email",type:"email",className:"validate"}),r.a.createElement("label",{htmlFor:"email"}," Email"),r.a.createElement("span",{className:"helper-text","data-error":"typea right type email","data-success":"right"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},id:"password",type:"password",className:"validate"}),r.a.createElement("label",{htmlFor:"email"}," Password"),r.a.createElement("span",{className:"helper-text","data-error":"wrong password","data-success":"right"}))),this.state.errors.length>0&&r.a.createElement("div",null,this.displayErrors(this.state.errors)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col 12"},r.a.createElement("button",{className:"btn waves-effect red",type:"submit",name:"action",onClick:this.submitform},"Login")))))))}}]),a}(n.Component);var w=Object(v.b)((function(e){return{user:e.user}}))(b);var O=function(){return r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:d}),r.a.createElement(o.a,{exact:!0,path:"/about",component:p}),r.a.createElement(o.a,{exact:!0,path:"/login",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(21),j=(a(67),a(8)),N=a(37),_=a.n(N),k=a(38),C=a(25),x=Object(j.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login_user":return Object(C.a)(Object(C.a)({},e),{},{loginSuccess:t.payload});default:return e}}}),S=Object(j.a)(_.a,k.a)(j.d);s.a.render(r.a.createElement(v.a,{store:S(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(y.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.875a97d7.chunk.js.map