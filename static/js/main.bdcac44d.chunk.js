(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__bvUls",label:"ContactForm_label__3RaEZ",input:"ContactForm_input__Z-DHl",submitButton:"ContactForm_submitButton__3qlmp"}},,,function(t,e,n){t.exports={app:"App_app__jlbGF",title:"App_title__V9X9f",notification:"App_notification__3PWq-"}},function(t,e,n){t.exports={contactList:"ContactList_contactList__vCqac",contactItem:"ContactList_contactItem__1tcDQ",contactInfo:"ContactList_contactInfo__1t2lm",deleteButton:"ContactList_deleteButton__2Rz32"}},,function(t,e,n){t.exports={filter:"Filter_filter__1CrPe",label:"Filter_label__xlGeZ",input:"Filter_input__3oM8D"}},,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":4591256},{"id":"id-2","name":"Hermione Kline","number":4438912},{"id":"id-3","name":"Eden Clements","number":6451779},{"id":"id-4","name":"Annie Copeland","number":2279126}]')},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),i=n.n(o),r=(n(17),n(12)),s=n(3),l=n(21),u=n(5),m=n.n(u),b=n(11),d=n(2),j=n.n(d),p=n(0);function f(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),u=l[0],m=l[1],b=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},d=function(){i(""),m("")};return Object(p.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault(),e({name:o,number:u}),d()},children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:o,onChange:b,required:!0})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:u,onChange:b,required:!0})]}),Object(p.jsx)("button",{className:j.a.submitButton,type:"submit",children:"Add contact"})]})}var _=n(6),O=n.n(_);function h(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("ol",{className:O.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:O.a.contactItem,children:[Object(p.jsxs)("p",{className:O.a.contactInfo,children:[a,": ",c]}),Object(p.jsx)("button",{className:O.a.deleteButton,id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var x=n(8),v=n.n(x);function C(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:v.a.filter,children:Object(p.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:v.a.input,type:"text",value:e,onChange:n})]})})}function N(t){t.onSubmit;var e=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:b})),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),d=u[0],j=u[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var _=function(){var t=d.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(t)}))};return Object(p.jsxs)("div",{className:m.a.app,children:[Object(p.jsx)("h1",{className:m.a.title,children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:function(t){var e=t.name,n=t.number,a={id:Object(l.a)(),name:e,number:n};c.some((function(t){return t.name===e}))?alert("".concat(e," is already exist")):o([a].concat(Object(r.a)(c)))}}),Object(p.jsx)("h2",{className:m.a.title,children:"Contacts"}),Object(p.jsx)(C,{value:d,onChange:function(t){j(t.currentTarget.value)}}),0!==_().length?Object(p.jsx)(h,{contacts:_(),onDelete:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}}):Object(p.jsx)("p",{className:m.a.notification,children:"There are no contacts yet..."})]})}i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.bdcac44d.chunk.js.map