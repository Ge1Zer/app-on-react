(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(87);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},286:function(e,t,n){},287:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI8SURBVHhe7dTLbcMwEEXRVJCdN6ktXbjn1BEFChzn6mM+iRyS4gPOyhDJmbvw29f9ZokcS+BYAscSOJagxVifH+/4pRGOJWgu1lRqht9b4FiCtmI9SrXZy7EEDcVCqRm+qcuxBK3EQqNn+LIixxI0EQt1lvB9LY4lqB8LXbbgVBWOJegm1gQH41WOhRz7cDZeT7EmOB6sZiyESIEbgnUWa4JLIlWLhQTpcE8kxxLUiYX9VbgtjGMJKsTC5sfgzhiOJYiOhZ3PwM0BHEsQGgvbnof7S3MsQVws7JkLXinKsQRBsbBhXnirHMcSRMTCbiXgxUIcS1A8FrYqB++W4FiCsrGwT2l4PTvHEhSMhU1iYIa8HEtQKhZ2iIRJMnIsQZFYmD4e5snFsQT5Y2HuWjBVFo4lyBwLE9eF2c5zLEHOWJi1BZjwJMcSZIuFKduBOc9wLEGeWJivNZj2MMcSZIiFydqEmY9xLMHZWJipZZj8AMcSnIqFadqH+VWOJTgeC3P0AltIHEswXKwJFkl3MBae7wt2STdirAnWSXQkFh7uETZKNGisCZZKIcfCk/3CXikcS6DFwnu9w3YvOZZAiIWXrgE77nMsrrkjNRbeuBJsusOxcsfC7deDfbc41g/su+V1LNx7Vdh6lWP9wtarXsTCjdeG3Zcc6w92X9qLhbtGgALgWP+gAGzGwi3jQIdnjkXo8Gw9Fs6PBjUeHGsFajysxMLJMaHJzLHWocls8w/elhxL4FgCxxI4VrL77Rsi9L7omLLyZgAAAABJRU5ErkJggg=="},290:function(e,t,n){"use strict";n.r(t);var a=n(284),i=n(0),r=n.n(i),s=(n(286),n(11)),c=n(9),l=n(88),u=n(5),m=(n(86),r.a.memo((function(e){var t=e.friend.map((function(t){return r.a.createElement("div",{className:"List-item-Party-Friend"},r.a.createElement("img",{id:"ava-min",src:t.Description.PhotoMin.origin||t.Description.PhotoMin.default,alt:"Pic"}),r.a.createElement("div",{id:"text-description-friend-party"},r.a.createElement("div",null,t.Description.Nickname.map((function(e){return e})).join(" ")),r.a.createElement("div",null,t.Description.Status)),e.setting&&r.a.createElement("input",{type:"checkbox",onClick:function(){e.itsRename("SELECTED-FRIEND",t._id)}}))}));return r.a.createElement("div",null,t)}))),o=(n(89),n(99)),d=function(e){return e.MessageReducer.Message},E=function(e){return e.MessageReducer.Friend},f=function(e){return e.MessageReducer.Party},g=n(287),v=n.n(g),A=function(e){return Object(i.useEffect)((function(){return document.addEventListener("keypress",(function(t){t.ctrlKey&&"Enter"===t.code&&e.itsRename("SEND")}))}),[]),r.a.createElement("form",{onChange:function(t){e.itsRename("TEXT",t.target.value)}},r.a.createElement("textarea",{className:"text-area"},e.text),r.a.createElement("img",{src:v.a,className:"send-mess",onClick:function(){e.itsRename("SEND")},value:"send"}))},b=r.a.memo((function(e){var t=e.party.map((function(t){return r.a.createElement("div",{className:"List-item-Party-Friend",onClick:function(){e.itsRename("PROFILE",{list:t.ListPeople,id:t._id})}},r.a.createElement("div",null,r.a.createElement("img",{id:"ava-min",src:t.AvaParty,alt:"Pic"})),r.a.createElement("div",null,r.a.createElement("div",null,t.NameParty.map((function(e){return e})).join(" ")||"Name Party"," , ",t.NumberOfPerson)),0!==t.admin.filter((function(t){return t===e.user})).length?e.setting&&r.a.createElement("input",{type:"checkbox",onClick:function(){e.itsRename("SELECTED-PARTY",t._id)}}):e.setting&&r.a.createElement("button",{onClick:function(){e.itsRename("LEAVING-THE-PARTY",t._id)}},"Leave"))}));return r.a.createElement("div",null,t)})),S=r.a.memo((function(e){var t=e.profile.id&&0!==e.message&&e.message.ListMessage.map((function(t){return r.a.createElement("div",null,e.user===t.user?r.a.createElement("div",{className:"MESSAGE_ITEM",id:"USER"},r.a.createElement("div",null,t.text,""!==t.img&&r.a.createElement("img",{alt:"Pic Send for you",src:t.img})),r.a.createElement("div",null,t.date)):r.a.createElement("div",{className:"MESSAGE_ITEM",id:"PROFILE"},r.a.createElement("div",null,t.text),r.a.createElement("div",null,t.date)))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"mess_List_Desc"},!e.profile.id&&r.a.createElement("div",null,r.a.createElement("img",{id:"mess_img",src:"https://avatars.mds.yandex.net/get-pdb/34158/6e006c76-9b84-4ad1-8d07-b31e7e8d284b/s600",alt:"Pic"})),e.profile.id&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{id:"ava-min",src:e.message.AvaParty,alt:"Pic"})),r.a.createElement("div",null,"Name Party",e.message.NameParty.map((function(e){return e})).join(" "),", numb Person ",e.message.NumberOfPerson,", numb message ",e.message.NumberMessage)),r.a.createElement("div",{className:"mess_List_List"},e.profile.id&&r.a.createElement("div",null,t)))))}));t.default=Object(u.d)(Object(s.b)((function(e){return{state:e.LoginReducer.user,message:d(e),friend:E(e),party:f(e)}}),{GetListFriend:o.a,GetListMessages:o.b,SendMessage:o.d,SendSetting:o.e,GetListParty:o.c,deleteParty:o.g}),c.f,l.a)((function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),s=n[0],c=n[1],l=Object(i.useState)(""),u=Object(a.a)(l,2),o=u[0],d=u[1],E=Object(i.useState)(""),f=Object(a.a)(E,2),g=f[0],v=f[1],L=Object(i.useState)([e.state.user]),P=Object(a.a)(L,2),p=P[0],O=P[1],y=Object(i.useState)([]),R=Object(a.a)(y,2),j=R[0],D=R[1],M=Object(i.useState)([]),N=Object(a.a)(M,2),T=N[0],h=N[1],C=Object(i.useState)([]),I=Object(a.a)(C,2),F=I[0],x=I[1],B=Object(i.useState)([]),k=Object(a.a)(B,2),G=k[0],w=k[1],J=Object(i.useState)(e.state.user),Y=Object(a.a)(J,2),_=Y[0],Z=(Y[1],Object(i.useState)({id:!1,list:[]})),H=Object(a.a)(Z,2),X=H[0],Q=H[1],V=Object(i.useState)(!1),W=Object(a.a)(V,2),U=W[0],q=W[1],K=Object(i.useState)(!1),z=Object(a.a)(K,2),$=z[0],ee=z[1];Object(i.useEffect)((function(){$?e.GetListFriend():e.GetListParty()}),[$,U]),Object(i.useEffect)((function(){e.GetListMessages(X)}),[X]),X&&setTimeout((function(){e.GetListMessages(X),console.log(1)}),5e3),Object(i.useEffect)((function(){c(s)}),[s]),Object(i.useEffect)((function(){h(e.message),x(e.friend),w(e.party)}),[e.message,e.friend,e.party]);var te=function(t,n){switch(t){case"TEXT":return c(n);case"IMG":return d(n);case"PROFILE":return Q(n);case"NAME-PARTY":return v(n);case"SEND":return e.SendMessage({idParty:X.id,dialog:X.list,user:_,text:s,img:o,date:(new Date).toTimeString().replace(/ .*/,"")});case"SETTING":return q(n);case"SELECTED-FRIEND":var a=p;if(0!==a.filter((function(e){return e===n})).length){var i=a.indexOf(n);a.splice(i,i+1)}else a.push(n);return O(a);case"SELECTED-FRIEND-ADD-PARTY":return p.length>1&&e.SendSetting({command:"FRI-ADD-PARTY",list:p,nameParty:g}),q(!0);case"SELECTED-PARTY":var r=j;if(0!==r.filter((function(e){return e===n})).length){var l=r.indexOf(n);r.splice(l,l+1)}else r.push(n);return D(r);case"SELECTED-PARTY-DEL":return q(!0),e.SendSetting({command:"PAR-DEL",list:j}),Q({id:!1,list:[]});case"LEAVING-THE-PARTY":return e.SendSetting({command:"LEAVING-THE-PARTY",list:n}),q(!0);default:return"null method"}};return r.a.createElement("div",{className:"mess_Section"},r.a.createElement("div",{className:"mess-List_Mess"},r.a.createElement(S,{message:T,user:_,profile:X}),r.a.createElement("div",{className:"mess_List_Form"},X.id&&r.a.createElement(A,{itsRename:te,text:s}))),r.a.createElement("div",{className:"mess_List_Dia"},r.a.createElement("div",{className:"mess_List_Dia_Panel"},r.a.createElement("div",{onClick:function(){ee(!$)},id:"Button-Message"},$?"Friend":"Party"),r.a.createElement("div",null,$?r.a.createElement("div",null,U?r.a.createElement("div",{className:"Button-Flex"},r.a.createElement("div",{onClick:function(){te("SELECTED-FRIEND-ADD-PARTY")},id:"Button-Message"},"Done"),r.a.createElement("div",{onClick:function(){q(!U)},id:"Button-Message"},"Cancel")):r.a.createElement("div",{onClick:function(){q(!0)},id:"Button-Message",className:"Create-Place"},"Create Party"),r.a.createElement("div",null,U&&r.a.createElement("input",{onChange:function(e){te(e.target.name,e.target.value)},name:"NAME-PARTY",value:g,id:"input-name",placeholder:"Entry nickname Party"}))):r.a.createElement("span",null,U?r.a.createElement("div",{className:"Button-Flex"},r.a.createElement("div",{onClick:function(){te("SELECTED-PARTY-DEL")},id:"Button-Message"},"Done"),r.a.createElement("div",{onClick:function(){q(!U)},id:"Button-Message"},"Cancel")):r.a.createElement("span",null,r.a.createElement("div",{onClick:function(){q(!0)},id:"Button-Message"},U?"Done":"Deleted Party"))))),r.a.createElement("div",{className:"mess_List_Dia_List"},$&&r.a.createElement(m,{friend:F,itsRename:te,selectedFriend:p,setting:U}),!$&&r.a.createElement(b,{party:G,user:_,itsRename:te,selectedParty:j,setting:U}))))}))}}]);
//# sourceMappingURL=3.1860ef20.chunk.js.map