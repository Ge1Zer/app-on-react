(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(6),a=n.n(r),i=n(13),o=n(10),c=n(12),u={status:!1,message:"Profile not entry",loading:!1},s=function(e){return{type:"EDIT-INFO",inform:e}},l=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.getProfileFromServer(e);case 2:(r=t.sent)&&n({type:"SET-PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.sendInformation(e);case 2:t.sent&&n(s(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROFILE":return Object(o.a)({},e,{status:t.profile.status,message:t.profile.mess,profileNickname:t.profile.Profile.Nickname,profilePhoto:""!==t.profile.Profile.Photo.origin?t.profile.Profile.Photo.origin:t.profile.Profile.Photo.default,profilePhotoMin:""!==t.profile.Profile.PhotoMin.origin?t.profile.Profile.PhotoMin.origin:t.profile.Profile.PhotoMin.default,profileStatus:t.profile.Profile.Status,profileLocation:t.profile.Profile.Location,profileAge:t.profile.Profile.Age,profileSkills:t.profile.Profile.Skills,profileTags:t.profile.Profile.Tags,profileGender:t.profile.Profile.Gender});case"LOADING":return Object(o.a)({},e,{loading:t.loading});case"EDIT-INFO":return Object(o.a)({},e,{profileNickname:t.inform.nickname,profilePhoto:t.inform.photo,profileStatus:t.inform.status,profileLocation:t.inform.location,profileAge:t.inform.age,profileSkills:t.inform.skills,profileTags:t.inform.tags,profileGender:t.inform.gender});default:return e}}},101:function(e,t,n){"use strict";n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return E})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return S}));var r,a=n(6),i=n.n(a),o=n(13),c=n(135),u=n(10),s=n(12),l=n(62),f=n.n(l),d={Message:{ListMessage:[],AvaParty:"",NameParty:[""]},Friend:[],Party:[],Profile:{id:!1,list:[]},Loading:!1},m=function(e){return{type:"SET-MESSAGE",message:e}},p=function(e){return{type:"PUSH-MESSAGE",message:e}},g=function(e){return{type:"DELETED-MESSAGE",deleted:e}},E=function(e){return{type:"PROFILE",profile:e}},v=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return u=function(){return(u=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,clearTimeout(r);case 2:return t.next=4,a(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},c=function(){return u.apply(this,arguments)},a=function(e){var t,a,c=1;r=window.setTimeout(t=function(){var u=Object(o.a)(i.a.mark((function o(){return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.c.messageListMessage(e);case 2:(a=i.sent)&&(f.a.set("message",e),n(m(a))),++c<3?r=setTimeout(t,2e4):(clearTimeout(r),console.log("\u0442\u0430\u0439\u043c\u0430\u044e\u0442 \u0447\u0438\u0441\u0442"));case 6:case"end":return i.stop()}}),o)})));return function(){return u.apply(this,arguments)}}())},t.next=6,c();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.messageListFriend();case 2:(n=e.sent)&&t({type:"SET-FRIEND",friend:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.messageListParty();case 2:(n=e.sent)&&t({type:"SET-PARTY",friend:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.SendMessage(e);case 2:t.sent&&n(p(e)),setTimeout((function(){var e=document.getElementById("mess");e.scrollTop=e.scrollHeight}),1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.SendSetting(e);case 2:t.sent&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FRIEND":return Object(u.a)({},e,{Friend:t.friend.Friend});case"SET-PARTY":return Object(u.a)({},e,{Party:t.friend.Party});case"SET-MESSAGE":return Object(u.a)({},e,{Message:t.message});case"PUSH-MESSAGE":return Object(u.a)({},e,{Message:Object(u.a)({},e.Message,{ListMessage:[].concat(Object(c.a)(e.Message.ListMessage),[{user:t.message.user,text:t.message.text,img:t.message.img,date:t.message.date}])})});case"DELETED-MESSAGE":for(var n=function(n){var r=e.Party.findIndex((function(e){return e._id===t.deleted.list[n]}));e.Party.splice(r,r+1)},r=0;r<t.deleted.list.length;r++)n(r);return Object(u.a)({},e);case"PROFILE":return Object(u.a)({},e,{Profile:t.profile});case"LOADING":return Object(u.a)({},e,{Loading:t.loading});default:return e}}},102:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(6),a=n.n(r),i=n(13),o=n(10),c=n(12),u={loading:!1,people:[]},s=function(e){return{type:"GET-USERS",people:e}},l=function(e){return{type:"CURRENT",current:e}},f=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.getPeople(e);case 2:(r=t.sent)&&n(s(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.subScribe(e);case 2:t.sent&&n({type:"FOLLOW-PEOPLE",follow:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-USERS":return Object(o.a)({},e,{people:t.people.people});case"FOLLOW-PEOPLE":var n=e.people.filter((function(e){return e._id===t.follow}));return n[0].friendStatus?n[0].friendStatus=!1:n[0].friendStatus=!0,Object(o.a)({},e);case"LOADING":return Object(o.a)({},e,{loading:t.loading});case"CURRENT":return Object(o.a)({},e,{current:t.current});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s}));var r=n(130),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://express-kuku.herokuapp.com/"}),i={exit:function(){return a.get("exit").then((function(e){return e.data}))},registration:function(e){return a.post("registration",{Login:e.login,Password:e.password,Nickname:e.name}).then((function(e){return e.data}))},potected:function(e){return a.post("protection",{key:e}).then((function(e){return e.data}))}},o={getUserFromServer:function(){return a.get("login").then((function(e){return e.data}))},sendUserFormServer:function(e){return a.post("login",{Login:e.login,Password:e.password}).then((function(e){return e.data}))}},c={getProfileFromServer:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},sendInformation:function(e){return a.post("update/info",{inform:e})}},u={messageListFriend:function(){return a.get("message/friend").then((function(e){return e.data}))},messageListParty:function(){return a.get("message/party").then((function(e){return e.data}))},messageListMessage:function(e){var t=e.id,n=e.list;return a.post("message/list",{id:t,list:n}).then((function(e){return e.data}))},SendMessage:function(e){return a.post("message/send",{profile:e}).then((function(e){return e.data}))},SendSetting:function(e){return a.post("message/setting",{setting:e}).then((function(e){return e.data}))}},s={getPeople:function(e){var t=e.tags,n=e.nickname,r=e.list;return a.post("people",{tags:t,nickname:n,list:r}).then((function(e){return e.data}))},subScribe:function(e){return a.post("subscribe",{id:e}).then((function(e){return e.data}))}}},125:function(e,t,n){},134:function(e,t,n){e.exports=n.p+"static/media/829.14706964.svg"},161:function(e,t,n){e.exports=n(287)},247:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(5),a=n(128),i=n(129),o=n(6),c=n.n(o),u=n(13),s=n(10),l=n(12),f=n(42),d={status:!1,message:String,user:Object},m=function(e){return{type:"SET-LOGIN",user:e}},p=function(){return function(e){l.a.exit().then((function(t){t&&e({type:"DEL-USER"})}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOGIN":return Object(s.a)({},e,{status:t.user.status,message:t.user.message,user:t.user._id});case"DEL-USER":return Object(s.a)({},e,{status:!1,message:String,user:Object});default:return Object(s.a)({},e)}},E={RegistrationStatus:!1,RegistrationMessage:"",RegAuthorization:!1},v=function(e){return function(t){l.a.registration(e).then((function(e){e.status&&t({type:"REGISTRATION-STATUS",registration:e})}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION-STATUS":return Object(s.a)({},e,{RegistrationStatus:t.registration.status,RegistrationMessage:t.registration.mess});case"AUTHORIZATION":return Object(s.a)({},e,{RegAuthorization:t.status.status});case"STATUS":return Object(s.a)({},e,{RegistrationStatus:!e.RegistrationStatus});default:return Object(s.a)({},e)}},h=n(100),O=n(101),S=n(102),y=Object(r.c)({LoginReducer:g,RegistrationReducer:b,ProfileReducer:h.b,MessageReducer:O.g,PeopleReducer:S.d,form:a.a}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,w=Object(r.e)(y,j(Object(r.a)(i.a)));window.store=w;var R=w,P=n(0),N=n.n(P),L=n(57),T=n.n(L),k=n(11),x=n(19),A=n(9),I=(n(247),Object(r.d)(Object(k.b)((function(e){return{state:e.LoginReducer}}),{Exit:p}))((function(e){return N.a.createElement("div",{className:"Menu"},N.a.createElement("div",null,N.a.createElement(x.b,{to:"/profile",className:"Button_item"},"\u041c\u043e\u044f \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ")),N.a.createElement("div",null,N.a.createElement(x.b,{to:"/message",className:"Button_item"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f ")),N.a.createElement("div",null,N.a.createElement(x.b,{to:"/people",className:"Button_item"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 ")),N.a.createElement("div",null,N.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/ISO_7010_E002_%2B_arrow_1.svg/240px-ISO_7010_E002_%2B_arrow_1.svg.png",onClick:function(){e.Exit()},className:"exit"})))})));n(89);var M,F,_=function(){return N.a.createElement("div",{className:"Logo"})},G=function(){return N.a.createElement("div",{className:"Header"},N.a.createElement(_,null),N.a.createElement(I,null))},U=n(90),D=n(91),C=n(58),H=Object(P.lazy)((function(){return n.e(5).then(n.bind(null,292))})),K=Object(P.lazy)((function(){return n.e(3).then(n.bind(null,293))})),z=Object(P.lazy)((function(){return n.e(4).then(n.bind(null,294))})),B=Object(r.d)(Object(k.b)((function(e){return{log:e.LoginReducer.loading,mess:e.MessageReducer.loading,peo:e.PeopleReducer.loading}})),U.a)((function(e){return N.a.createElement("div",{className:"cont_Section"},e.log&&e.mess&&e.peo&&N.a.createElement("div",null,N.a.createElement(D.a,null)),!e.log&&!e.mess&&!e.peo&&N.a.createElement("div",null,N.a.createElement(G,null)),!e.log&&!e.mess&&!e.peo&&N.a.createElement("div",null," ",N.a.createElement(q,null)))})),q=function(){return N.a.createElement(P.Suspense,{fallback:".... \u0447\u0443 \u0445\u0435\u0440\u043d\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u0434\u043e\u0436\u0434\u0435\u043c"},N.a.createElement("div",null,N.a.createElement(A.b,{path:"/profile/:profile?",render:function(){return N.a.createElement(H,null)}}),N.a.createElement(A.b,{path:"/message/:profile?",render:function(){return N.a.createElement(K,null)}}),N.a.createElement(A.b,{path:"/people",render:function(){return N.a.createElement(z,null)}})))},Y=n(126),Z=n(127),W=function(e){M=e},J=function(e){if(e!==M)return"passwords don't match"},X=function(e){if(!e)return"It`s password wrong "},$=function(e){if(!e)return"Field is required"},V=function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}},Q=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},ee=(Object(r.d)(Object(k.b)((function(e){return{userEntry:e.LoginReducer.userEntry}}),null))(Q),n(88)),te=(n(81),function(e){var t=e.input,n=e.meta,r=(e.value,Object(ee.a)(e,["input","meta","value"])),a=n.touched&&n.error;return N.a.createElement("div",null,N.a.createElement("div",null,N.a.createElement("input",Object.assign({},t,r,{className:a&&"formControl"}))),a&&N.a.createElement("span",{className:"formSpan"},n.error))}),ne=V(6),re=Object(Z.a)({form:"login"})((function(e){return N.a.createElement("div",{className:"login_Section"},N.a.createElement("div",{className:"desc-log"},N.a.createElement("h1",{className:"log"},"LOGIN"),N.a.createElement("div",null,"Entry Your Login & Password, please")),N.a.createElement("form",{onSubmit:e.handleSubmit,className:"field-log"},N.a.createElement("div",null,N.a.createElement(Y.a,{required:!0,name:"login",component:te,placeholder:"Login",validate:[$,ne]})),N.a.createElement("div",null,N.a.createElement(Y.a,{required:!0,placeholder:"Password",component:te,name:"password",type:"password",validate:[$,ne]})),e.error&&N.a.createElement("div",{className:"errorEmaOrPass"},e.error," \u042d\u0442\u043e \u0445\u0443\u0439\u043d\u044f, \u0434\u0430\u0432\u0430\u0439 \u0437\u0430\u043d\u043e\u0432\u043e "),N.a.createElement("div",{className:"but-log-reg"},N.a.createElement("div",{className:"but-prot-item"},N.a.createElement("button",{value:"Enter",id:"ent-but"},"Enter")),N.a.createElement("div",{className:"but-prot-item"},N.a.createElement(x.b,{to:"/registration",id:"as"},"Registration ")))))})),ae=(n(286),n(33)),ie=n(34),oe=n(38),ce=n(39),ue=function(e){var t=function(t){Object(ce.a)(r,t);var n=Object(oe.a)(r);function r(){var e;Object(ae.a)(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={History:localStorage.History},e}return Object(ie.a)(r,[{key:"render",value:function(){if(!this.props.state.status)return N.a.createElement(e,this.props);switch(History){case"profile":return N.a.createElement(A.a,{to:"/profile/".concat(this.state.Profile)});case"message":return N.a.createElement(A.a,{to:"/message/".concat(this.state.Dialog)});case"people":return N.a.createElement(A.a,{to:"/people"});default:return N.a.createElement(A.a,{to:"/profile"})}}}]),r}(N.a.Component);return Object(k.b)((function(e){return{state:e.LoginReducer,userStatus:e.ProfileReducer.status}}))(t)},se=n(62),le=n.n(se),fe=Object(r.d)(Object(k.b)((function(e){return{user:Object(C.b)(e),userEntry:Object(C.c)(e)}}),{Exit:p,GetUserFromServer:function(){return function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.getUserFromServer();case 2:n=e.sent,t(n?m(n):{type:"DEL-USER"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},SendUserFormForServer:function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.sendUserFormServer(e);case 2:r=t.sent,n(r?m(r):Object(f.a)("login",{_error:r.mess}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ue)((function(e){Object(P.useEffect)((function(){e.GetUserFromServer()}),[]);return N.a.createElement("div",{className:"entry_Section"},N.a.createElement(re,{onSubmit:function(t){e.SendUserFormForServer(t),le.a.set("History","profile")}}))})),de=(F=16,function(e){return e&&e.length>F?"Max length is ".concat(F," symbols"):void 0}),me=V(6),pe=Object(Z.a)({form:"registration"})((function(e){var t=e.handleSubmit;return N.a.createElement("div",{className:"reg_Section"},N.a.createElement("h1",{className:"text-regi"},"REGISTRATION"),N.a.createElement("form",{onSubmit:t},N.a.createElement("div",null,N.a.createElement("div",null,"Nickname"),N.a.createElement(Y.a,{component:te,placeholder:"You`r Name",name:"name",validate:[$,me,de]})),N.a.createElement("div",null,N.a.createElement("div",null,"Login"),N.a.createElement(Y.a,{required:!0,name:"login",component:te,placeholder:"Login",validate:[Q,$,me]})),N.a.createElement("div",null,N.a.createElement("div",null,"Password"),N.a.createElement(Y.a,{required:!0,placeholder:"Password",component:te,name:"repeat-password",type:"password",validate:[X,W,$,me,de]}),N.a.createElement("div",null,"Repeat the password"),N.a.createElement(Y.a,{required:!0,placeholder:"Password",component:te,type:"password",name:"password",validate:[J,$,me,de]})),e.error&&N.a.createElement("div",{className:"errorEmaOrPass"},e.error," \u042d\u0442\u043e \u0445\u0443\u0439\u043d\u044f, \u0434\u0430\u0432\u0430\u0439 \u0437\u0430\u043d\u043e\u0432\u043e "),N.a.createElement("div",{className:"but-prot"},N.a.createElement("div",{className:"but-prot-item"}," ",N.a.createElement("button",{value:"Enter",id:"ent-but"},"Enter")," "),N.a.createElement("div",{onClick:e.haveKey,className:"but-prot-item"},"You have a key "),N.a.createElement("div",{className:"but-prot-item"}," ",N.a.createElement(x.b,{to:"/login",id:"a"},"Go back to Login")))))})),ge=(n(125),function(e){return e.RegistrationReducer.RegistrationMessage}),Ee=function(e){return e.RegistrationReducer.RegistrationStatus},ve=function(e){return e.RegistrationReducer.RegAuthorization},be=n(66),he=Object(r.d)(Object(k.b)((function(e){return{statusA:ve(e)}}),{RegistrationThunk:v,SendKeyAuthorization:function(e){return function(t){l.a.potected(e).then((function(e){e.status&&t({type:"AUTHORIZATION",status:e})}))}}}))((function(e){var t=Object(P.useState)(""),n=Object(be.a)(t,2),r=n[0],a=n[1],i=Object(P.useState)(4),o=Object(be.a)(i,2);o[0],o[1];return N.a.createElement("div",{className:"prot"},N.a.createElement("h1",null,"KEY"),N.a.createElement("div",{className:"prot-text"},"Field for the key code"),N.a.createElement("input",{value:r,onChange:function(e){a(e.target.value)},className:"inpu-prot"}),e.statusA&&N.a.createElement("div",null,"Redirect to login in 4 seconds"),N.a.createElement("div",{className:"dis"},e.statusA&&setTimeout((function(){window.location="/app-on-react/#/login"}),4e3)),N.a.createElement("div",{className:"but-prot"},N.a.createElement("div",{className:"but-prot-item",onClick:function(){return a(""),void e.SendKeyAuthorization(r)}},"Enter"),N.a.createElement("div",{className:"but-prot-item",onClick:function(){return e.haveKey()}},"Come Back Authorization"),N.a.createElement("div",{className:"but-prot-item"},N.a.createElement(x.b,{to:"/login",onClick:function(){return e.haveKey()},id:"a"},"Go back to your Login"))))})),Oe=Object(r.d)(Object(k.b)((function(e){return{message:ge(e),statusREG:Ee(e)}}),{RegistrationThunk:v,HaveKeyDispatch:function(){return{type:"STATUS"}}}))((function(e){var t=function(){e.HaveKeyDispatch()};return N.a.createElement("div",null,e.statusREG&&N.a.createElement(he,{haveKey:t}),!e.statusREG&&N.a.createElement(pe,{onSubmit:function(t){return t.name=t.name.match(/(\w+)/gim),console.log(t),e.RegistrationThunk(t),N.a.createElement(A.a,{to:"/protected"})},userEntry:e.userEntry,haveKey:t}))})),Se=function(){return N.a.createElement("div",{className:"base"},N.a.createElement("div",null,N.a.createElement(A.b,{path:"/login",render:function(){return N.a.createElement(fe,null)}}),N.a.createElement(A.b,{path:"/registration",render:function(){return N.a.createElement(Oe,null)}})),N.a.createElement("div",null,N.a.createElement(B,null)))};T.a.render(N.a.createElement(x.a,null,N.a.createElement(k.a,{store:R},N.a.createElement(Se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(e){return e.LoginReducer.user},a=function(e){return e.LoginReducer.userEntry},i=function(e){return e.LoginReducer.loading}},81:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(33),a=n(34),i=n(38),o=n(39),c=n(0),u=n.n(c),s=n(9),l=n(11),f=function(e){return{state:e.LoginReducer}},d=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(i.a)(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.state.status?u.a.createElement(e,this.props):u.a.createElement(s.a,{to:"/login"})}}]),c}(u.a.Component);return Object(l.b)(f)(t)}},91:function(e,t,n){"use strict";var r=n(134),a=n.n(r),i=n(0),o=n.n(i);t.a=function(){return o.a.createElement("div",{id:"place-loading"},o.a.createElement("div",{className:"Loading"},o.a.createElement("img",{src:a.a,alt:"PIC"})))}}},[[161,1,2]]]);
//# sourceMappingURL=main.89fd6b97.chunk.js.map