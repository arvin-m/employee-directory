(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r);t(23);var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("nav",{className:" view navbar-expand-lg navbar-dark indigo col-12"},l.a.createElement("div",{className:"intro-2"},l.a.createElement("div",{className:"full-bg-img"},l.a.createElement("div",{className:"mask rgba-black-light flex-center"},l.a.createElement("div",{className:"container text-center white-text"},l.a.createElement("div",{className:"white-text text-center wow fadeInUp"},l.a.createElement("br",null),l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("h5",null,"Click on carrots to filter by heading or use the search box to narrow your result ."),l.a.createElement("br",null)))))))))},s=t(17),m=t(5),i=t(3),u=(t(24),t(16)),d=t.n(u),h={getUsers:function(e){return d.a.get("https://randomuser.me/api/?results=200&nat=us")}};var E=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),u=o[0],d=o[1],E=Object(n.useState)([{id:"",picture:"",name:"",phone:"",email:"",dob:""}]),p=Object(i.a)(E,2),f=p[0],b=p[1],g=Object(n.useState)({order:"asc"}),v=Object(i.a)(g,2),N=v[0],w=v[1];Object(n.useEffect)((function(){h.getUsers().then((function(e){var a=e.data.results,t=a.map((function(e){return{id:a.indexOf(e),picture:e.picture.medium,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date.slice(0,10)}}));console.log("this is all users on first update!!",t),b(t)}))}),[]);var y,O=function(e){"asc"===N.order?(y.sort((function(a,t){return a[e]<t[e]?-1:a[e]>t[e]?1:0})),w(Object(m.a)({},N,{order:"dsc"}))):(y.sort((function(a,t){return a[e]>t[e]?-1:a[e]<t[e]?1:0})),w(Object(m.a)({},N,{order:"asc"}))),b(Object(s.a)(f))};console.log("Search ",u),console.log("users ",f);var k=(y=0===u.length&&t.length>0?[]:u.length>0?u:f).map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement("img",{src:e.picture,alt:"img",className:"rounded-circle",style:{height:70,width:70}})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob))}));return console.log("Thos is the users state!!!",f),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-row search-wrapper col-md-12 col-sm-12"},l.a.createElement("div",{className:"col-md-6"}),l.a.createElement("div",{className:"col-md-6 mb-3 "},l.a.createElement("label",null,"Search"),l.a.createElement("div",{className:"input-group "},l.a.createElement("input",{type:"text",className:"form-control shadow-lg p-3 mb-5 bg-white rounded ",name:"search",placeholder:"Search By users Name ...",onChange:function(e){return function(e,a){e.preventDefault();var t=a.toLowerCase(),n=f.filter((function(e){return e.name.substring(0,t.length).toLowerCase()===t}));r(t),d(n)}(e,e.target.value)}})))),l.a.createElement("table",{className:"table table-striped table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",className:""},"Image ",l.a.createElement("span",null)),l.a.createElement("th",{scope:"col",className:""},"Name ",l.a.createElement("span",{name:"name",className:"fas fa-sort ml-1",onClick:function(e){O("name")}})),l.a.createElement("th",{scope:"col",className:""},"Phone ",l.a.createElement("span",{name:"phone",className:"fas fa-sort ml-1",onClick:function(e){O("phone")}})),l.a.createElement("th",{scope:"col",className:""},"Email ",l.a.createElement("span",{name:"email",className:"fas fa-sort ml-1",onClick:function(e){O("email")}})),l.a.createElement("th",{scope:"col",className:""},"DBO "))),l.a.createElement("tbody",null,l.a.createElement(l.a.Fragment,null,k))))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement("div",{className:"container"},l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c03fa40f.chunk.js.map