(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Benjamin Franklin Pierce","image":"../../public/assets/images/Pierce.jpg","rank":"Captain","phone":"(555) 123-4567","email":"hawkeye@mash.gov","dob":"01/28/1936"},{"id":2,"name":"BJ Hunnicutt","image":".public/assets/images/Hunnicutt.jpg","rank":"Captain","phone":"(393) 667-1178","email":"hunnicutt@mash.gov","dob":"02/06/1939"},{"id":3,"name":"Margaret J Houlihan","image":".public/assets/images/Houlihan.jpg","rank":"Major","phone":"(079) 561-4028","email":"hotlips@mash.gov","dob":"11/04/1937"},{"id":4,"name":"Charles Emerson Winchester III","image":".public/assets/images/Winchester.jpg","rank":"Major","phone":"(650) 274-2412","email":"winchester@mash.gov","dob":"10/31/1942"},{"id":5,"name":"Sherman Tecumseh Potter","image":".public/assets/images/Potter.jpg","rank":"Colonel","phone":"(959) 248-9895","email":"mildred@mash.gov","dob":"04/10/1915"},{"id":6,"name":"Walter Eugene O\'Reilly","image":".public/assets/images/Radar.jpg","rank":"Corporel","phone":"(754) 307-8800","email":"radar@mash.gov","dob":"05/24/1943"},{"id":7,"name":"Francis John Patrick Mulcahy","image":".public/assets/images/Mulchahy.jpg","rank":"Father","phone":"(351) 215-3642","email":"heaven@mash.gov","dob":"10/20/1932"},{"id":8,"name":"Maxwell Q. Klinger","image":".public/assets/images/Klinger.jpg","rank":"Corporel","phone":"(069) 885-2055","email":"toledo@mash.gov","dob":"07/01/1934"},{"id":9,"name":"Kealani Kellye","image":".public/assets/images/Kellye.jpg","rank":"First Lieutenant","phone":"(064) 682-7339","email":"kellye@mash.gov","dob":"01/16/1948"},{"id":10,"name":"Franklin Delano Marion Burns","image":".public/assets/images/Burns.jpg","rank":"Major","phone":"(027) 619-3720","email":"burns@mash.gov","dob":"09/29/1939"},{"id":11,"name":"John Francis Xavier MacEntyre","image":".public/assets/images/MacEntyre.jpg","rank":"Captain","phone":"(592) 086-7112","email":"trapper@mash.gov","dob":"04/07/1933"},{"id":12,"name":"Henry Braymore Blake","image":".public/assets/images/Blake.jpg","rank":"Lieutenant Colonel","phone":"(625) 259-5513","email":"blake@mash.gov","dob":"11/14/1927"},{"id":13,"name":"Luther Wilson Rizzo","image":".public/assets/images/Rizzo.jpg","rank":"Sargeant","phone":"(505) 292-9532","email":"motorpool@mash.gov","dob":"08/27/1944"},{"id":14,"name":"Oliver Harmon Jones","image":".public/assets/images/Jones.jpg","rank":"Captain","phone":"(482) 377-5174","email":"spearchucker@mash.gov","dob":"05/24/1937"}]')},function(e,a,n){},,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(1),i=n(5),s=n.n(i);n(16);var c=function(){return Object(t.jsx)("h1",{className:"title",children:"Employee Directory"})},o=n(6),l=n(7),h=n(8),m=n(10),p=n(9);n(17);var d=function(e){return Object(t.jsx)("form",{id:"searchbox",children:Object(t.jsx)("div",{class:"form-row",children:Object(t.jsx)("div",{class:"col",children:Object(t.jsx)("input",{type:"search",onChange:e.handleInputchange,value:e.search,class:"form-control",name:"search",id:"searchFilter",placeholder:"Search Employee"})})})})},j=n(3);n(18);var b=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("tr",{scope:"row",children:[Object(t.jsx)("td",{children:Object(t.jsx)("img",{alt:e.name,src:e.image})}),Object(t.jsx)("td",{children:e.name}),Object(t.jsx)("td",{children:e.rank}),Object(t.jsx)("td",{children:e.phone}),Object(t.jsx)("td",{children:e.email}),Object(t.jsx)("td",{children:e.dob})]})})},g=(n(4),function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={employee:j,sortOrder:"ASC",search:""},e.handleClick=function(){e.setState({employee:e.state.employee.sort()}),"ASC"===sortOrder?sortOrder=!1:(sortOrder=!0,j.reverse())},e.handleInputChange=function(a){a.preventDefault();var n=a.target,t=n.value,r=n.name;e.state.employee.filter((function(a){return a.includes(e.state.search)}));e.setState(Object(o.a)({},r,t))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(d,{name:"search",onChange:this.handleInputChange,value:this.state.search}),Object(t.jsxs)("table",{class:"table",children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{scope:"col",children:"Photo"}),Object(t.jsx)("th",{scope:"col",children:"Name"}),Object(t.jsx)("th",{scope:"col",children:"Rank"}),Object(t.jsx)("th",{scope:"col",children:"Phone Number"}),Object(t.jsx)("th",{scope:"col",children:"e-mail Address"}),Object(t.jsx)("th",{scope:"col",children:"Date of Birth"})]})}),Object(t.jsx)("tbody",{children:this.state.employee.map((function(e){return Object(t.jsx)(b,{id:e.id,image:e.image,name:e.name,rank:e.rank,phone:e.phone,email:e.email,dob:e.dob},e.id)}))})]})]})}}]),n}(r.Component));n(19);var u=function(){return Object(t.jsx)("footer",{children:Object(t.jsx)("p",{children:"Copyright \xa9 2020"})})};var O=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(c,{}),Object(t.jsx)(g,{}),Object(t.jsx)(u,{})]})};s.a.render(Object(t.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.be8cc8c1.chunk.js.map