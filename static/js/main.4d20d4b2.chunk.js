(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={filterInput:"filter_filterInput__C1Cdi",filterLabel:"filter_filterLabel__7T-pT"}},16:function(e,t,n){e.exports={Modal__backdrop:"modal_Modal__backdrop__1jJ6y",Modal__content:"modal_Modal__content__fz9pQ"}},18:function(e,t,n){e.exports={contactList_item:"contactList_contactList_item__2clu3"}},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),i=n(10),s=n(14),l=n.n(s),u=n(3),b=n(4),d=Object(b.b)("contact/add"),j=Object(b.b)("contact/delete"),f=Object(b.b)("contact/filter"),m=n(1);function O(){var e=Object(u.c)((function(e){return e.contacts.filter})),t=Object(u.b)();return Object(m.jsxs)("label",{className:l.a.filterLabel,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return t(f(e.currentTarget.value))},className:l.a.filterInput})]})}var p=n(38),_=n(8),h=n.n(_);function v(e){var t=e.onSave,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),b=l[0],j=l[1],f=Object(u.b)(),O=Object(u.c)((function(e){return e.contacts.items})),_=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":return void o(c);case"number":return void j(c);default:return}},v=function(){o(""),j("")};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(p.a)(),name:r,number:b},c=O.find((function(e){var t=e.name;return n.name.toLowerCase()===t.toLowerCase()}));if(c){var a=c.name;alert("".concat(a," is already in contacts"))}else{f(d(n)),t(),v()}},className:h.a.form,children:[Object(m.jsxs)("label",{className:h.a.formLabel,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:r,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:h.a.formInput})]}),Object(m.jsxs)("label",{className:h.a.formLabel,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:b,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:h.a.formInput})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}var x=n(18),C=n.n(x);function k(){var e=Object(u.c)((function(e){var t=e.contacts;return function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t.filter,t.items)})),t=Object(u.b)();return Object(m.jsx)("ul",{children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(m.jsxs)("li",{className:C.a.contactList_item,children:[c,": ",a," ",Object(m.jsx)("button",{onClick:function(){return function(e){return t(j(e))}(n)},children:"Delete"})]},n)}))})}var L=n(16),w=n.n(L),y=document.querySelector("#modal-root");function g(e){var t=e.children,n=e.onClose,a=Object(c.useCallback)((function(e){"Escape"===e.code&&n()}),[n]);Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[a]);return Object(r.createPortal)(Object(m.jsx)("div",{className:w.a.Modal__backdrop,onClick:function(e){e.target===e.currentTarget&&n()},children:Object(m.jsx)("div",{className:w.a.Modal__content,children:t})}),y)}function N(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(){a(!n)};return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",onClick:r,children:"Add contacts"}),Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(O,{}),Object(m.jsx)(k,{}),n&&Object(m.jsx)(g,{onClose:r,children:Object(m.jsx)(v,{onSave:r})})]})}var A,I=n(12),M=n(7),S=n(2),z=Object(b.c)([],(A={},Object(M.a)(A,d,(function(e,t){var n=t.payload;return[].concat(Object(I.a)(e),[n])})),Object(M.a)(A,j,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),A)),E=Object(b.c)("",Object(M.a)({},f,(function(e,t){return t.payload}))),F=Object(S.b)({items:z,filter:E}),T=n(19),J=n.n(T),q=n(5),P=n(20),Z=n.n(P),B=[].concat(Object(I.a)(Object(b.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),[J.a]),D={key:"items",storage:Z.a,blacklist:["filter"]},U=Object(b.a)({reducer:{contacts:Object(q.g)(D,F)},middleware:B}),Q=Object(q.h)(U),W=n(21);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(W.a,{loading:null,persistor:Q,children:Object(m.jsx)(u.a,{store:U,children:Object(m.jsx)(N,{})})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"contactForm_form__Xf3UP",formInput:"contactForm_formInput__1NWn0",formLabel:"contactForm_formLabel__2YvUF"}}},[[36,1,2]]]);
//# sourceMappingURL=main.4d20d4b2.chunk.js.map