(this["webpackJsonplearn-react-app"]=this["webpackJsonplearn-react-app"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"website":{"title":"imharshm","Employee":{"AddNew":{"title":"Add new employee","subTitle":"Add recently joined employees here","action":"Add","cancel":"Cancel"}}}}')},86:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=86},93:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(16),l=a.n(s),o=a(102),i=a(40),d=a.n(i),j=a(56),b=a(17),h=a(101),u=a(30),m=a.n(u),O=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(),l=Object(b.a)(s,2),o=l[0],i=l[1];Object(c.useEffect)((function(){u()}),[]);var u=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a="https://randomuser.me/api/",m.a.get(a).then((function(e){return e})).catch((function(e){return e}));case 2:(t=e.sent).data&&t.data.results?(r(t.data.results),console.log(t.data.results)):(i("API Error"),console.log("API Error"));case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"card border-0 p-4 persons-list",children:[Object(n.jsx)("h3",{className:"mb-3",children:"List of Persons"}),o?Object(n.jsx)("div",{children:o}):Object(n.jsxs)(h.a,{bordered:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Sr. NO"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Gender"}),Object(n.jsx)("th",{children:"DOB"}),Object(n.jsx)("th",{children:"User Image"})]})}),Object(n.jsx)("tbody",{children:a&&a.length?a.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:e.name.title+". "+e.name.first+" "+e.name.last}),Object(n.jsx)("td",{children:(a=e.gender,a.charAt(0).toUpperCase()+a.slice(1))}),Object(n.jsxs)("td",{children:["Date: ",e.dob.date,Object(n.jsx)("span",{className:"px-3"}),"Age: ",e.dob.age]}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture.medium,alt:"user"})})]},t);var a})):null})]})]})},x=a(13),g=Object(x.a)(),p=a(31),f=a(41),v=a(106),y=a(57),w=a(32),C=function(){var e=Object(c.useState)({}),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(),l=Object(b.a)(s,2),o=l[0],i=l[1],d=function(e){var t=e.target,n=t.name,c=t.value;r(Object(f.a)(Object(f.a)({},a),{},Object(p.a)({},n,c)))};return Object(c.useEffect)((function(){i([{id:"1",title:"blog title",blog_desc:"blog desc",image_path:"",auther:"Somanath",created_on:"2021-01-11 09:02:50",status:"1"},{id:"2",title:"blog title",blog_desc:"blog desc",image_path:"",auther:"image path",created_on:"2021-01-11 09:08:16",status:"1"},{id:"3",title:"blog title",blog_desc:"blog desc",image_path:"image path",auther:"Somanath",created_on:"2021-01-11 09:09:13",status:"1"},{id:"4",title:"blog title4",blog_desc:"blog desc4",image_path:"image path4",auther:"Somanath",created_on:"2021-01-11 09:10:34",status:"1"}])}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(v.a,{className:"bg-white p-5 rounded shadow-sm",onSubmit:function(e){console.log("Contact form data",a),e.preventDefault();var t=a;m.a.post("https://react.indexial.in/api/contacts.php/create",{contactData:t}).then((function(e){console.log(e),console.log(e.data)})).catch((function(e){console.log(e)}))},children:[Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{children:" Name:"}),Object(n.jsx)(v.a.Control,{type:"text",name:"name",placeholder:"Enter name",value:a.name,onChange:d}),Object(n.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{children:" Mobile:"}),Object(n.jsx)(v.a.Control,{type:"text",name:"mobile",placeholder:"Enter mobile",value:a.mobile,onChange:d}),Object(n.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{children:" Email:"}),Object(n.jsx)(v.a.Control,{type:"text",name:"email",placeholder:"Enter email",value:a.email,onChange:d}),Object(n.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{children:" Company:"}),Object(n.jsx)(v.a.Control,{type:"text",name:"company",placeholder:"Enter company",value:a.company,onChange:d}),Object(n.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{children:" Message:"}),Object(n.jsx)(v.a.Control,{type:"text",name:"message",as:"textarea",row:3,placeholder:"Enter message",value:a.message,onChange:d}),Object(n.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsx)(y.a,{type:"submit",className:"btn btn-lg btn-primary",children:w.website.Employee.AddNew.action})]}),Object(n.jsx)("ul",{children:o&&o.length>0&&o.map((function(e,t){return Object(n.jsx)("li",{children:e.title},t)}))})]})},k=function(){return Object(n.jsx)(o.b,{history:g,children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/user-list",component:O}),";",Object(n.jsx)(o.a,{path:"/contact",component:C})]})})},N=(a(93),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))}),T=a(105),E=a(103),S=a(107),_=a(104),L=a(27),I=a(44);function A(){var e=Object(I.a)(["\n  html {\n    body {\n      background: ",";\n      color: ",";\n    }\n  }\n"]);return A=function(){return e},e}function D(){var e=Object(I.a)(["\n","\n"]);return D=function(){return e},e}var P=Object(L.b)(D(),(function(e){var t=e.theme;return Object(L.c)(A(),t.colors.background,t.colors.black)})),B={lightTheme:{colors:{background:"#fafafa",black:"rgba(0, 0, 0, 0.87)",white:"white",blue:"#a0e9fd",lightBlue:"#caf3fe",secondary:"radial-gradient(green, yellow)"},transition:"0.3s"},darkTheme:{colors:{background:"#303030",black:"#ffffff",white:"black",blue:"#a0e9fd",lightBlue:"#caf3fe",secondary:"radial-gradient(yellow, green)"},transition:"0.3s"}},F=Object(c.createContext)(),G=function(e){var t=e.children,a=Object(c.useState)(localStorage.getItem("theme")||"lightTheme"),r=Object(b.a)(a,2),s=r[0],l=r[1];Object(c.useEffect)((function(){localStorage.setItem("theme",s)}),[s]);var o={themeMode:s,toggleTheme:function(){l((function(e){return"lightTheme"===e?"darkTheme":"lightTheme"}))}},i=B[s];return Object(n.jsx)(F.Provider,{value:o,children:Object(n.jsxs)(L.a,{theme:i,children:[Object(n.jsx)(P,{}),t]})})},M=function(){var e=function(e){g.push(e.target.attributes.getNamedItem("data-redirect").value)},t=Object(c.useContext)(F),a=t.toggleTheme,r=t.themeMode;return Object(n.jsx)(T.a,{bg:"dark",variant:"dark",children:Object(n.jsxs)(E.a,{className:"px-3",children:[Object(n.jsx)(T.a.Brand,{onClick:function(t){return e(t)},"data-redirect":"/",children:w.website.title}),Object(n.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(T.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(S.a,{className:"ml-auto",children:[Object(n.jsx)(S.a.Link,{button:!0,onClick:function(e){return function(e){console.log(e),a()}(e)},children:Object(n.jsx)("i",{className:"fa fa-".concat("darkTheme"===r?"sun-o":"moon-o")})}),Object(n.jsx)(S.a.Link,{onClick:function(t){return e(t)},"data-redirect":"/contact",children:"Contact"}),Object(n.jsx)(S.a.Link,{onClick:function(t){return e(t)},"data-redirect":"/user-list",children:"Users"}),Object(n.jsxs)(_.a,{title:"Profile",id:"basic-nav-dropdown",children:[Object(n.jsx)(_.a.Item,{children:"View"}),Object(n.jsx)(_.a.Divider,{}),Object(n.jsx)(_.a.Item,{children:"Logout"})]})]})})]})})};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsxs)(G,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(E.a,{className:"main-container",children:Object(n.jsx)(k,{})})]})}),document.getElementById("root")),N()}},[[95,1,2]]]);
//# sourceMappingURL=main.5be138cd.chunk.js.map