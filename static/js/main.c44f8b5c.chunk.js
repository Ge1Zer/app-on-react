(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var r=n(8),a=n.n(r),i=n(14),o=n(9),u=n(12),c={loading:!1,people:[]},s=function(e){return{type:"GET-USERS",people:e}},l=function(e){return{type:"LOADING",loading:e}},f=function(e){return{type:"CURRENT",current:e}},d=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(l(!0)),t.next=3,u.e.getPeople(e);case 3:(r=t.sent)&&(n(s(r)),n(l(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(l(!0)),t.next=3,u.e.subScribe(e);case 3:t.sent&&(n({type:"FOLLOW-PEOPLE",follow:e}),n(l(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-USERS":return Object(o.a)({},e,{people:t.people.people});case"FOLLOW-PEOPLE":var n=e.people.filter((function(e){return e._id===t.follow}));return n[0].friendStatus?n[0].friendStatus=!1:n[0].friendStatus=!0,Object(o.a)({},e);case"LOADING":return Object(o.a)({},e,{loading:t.loading});case"CURRENT":return Object(o.a)({},e,{current:t.current});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s}));var r=n(127),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://express-kuku.herokuapp.com/"}),i={exit:function(){return a.get("exit").then((function(e){return e.data}))},registration:function(e){return a.post("registration",{Login:e.login,Password:e.password,Nickname:e.name}).then((function(e){return e.data}))}},o={getUserFromServer:function(){return a.get("login").then((function(e){return e.data}))},sendUserFormServer:function(e){return a.post("login",{Login:e.login,Password:e.password}).then((function(e){return e.data}))}},u={getProfileFromServer:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},sendInformation:function(e){return a.post("update/info",{inform:e})}},c={messageListFriend:function(){return a.get("message/friend").then((function(e){return e.data}))},messageListParty:function(){return a.get("message/party").then((function(e){return e.data}))},messageListMessage:function(e){var t=e.id,n=e.list;return a.post("message/list",{id:t,list:n}).then((function(e){return e.data}))},SendMessage:function(e){return a.post("message/send",{profile:e}).then((function(e){return e.data}))},SendSetting:function(e){return a.post("message/setting",{setting:e}).then((function(e){return e.data}))}},s={getPeople:function(e){var t=e.tags,n=e.nickname,r=e.list;return a.post("people",{tags:t,nickname:n,list:r}).then((function(e){return e.data}))},subScribe:function(e){return a.post("subscribe",{id:e}).then((function(e){return e.data}))}}},131:function(e,t,n){e.exports=n.p+"static/media/829.14706964.svg"},133:function(e,t,n){},134:function(e,t,n){"use strict";var r=n(131),a=n.n(r),i=n(0),o=n.n(i);t.a=function(){return o.a.createElement("div",{id:"place-loading"},o.a.createElement("div",{className:"Loading"},o.a.createElement("img",{src:a.a,alt:"PIC"})))}},160:function(e,t,n){e.exports=n(286)},246:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p}));var r=n(8),a=n.n(r),i=n(14),o=n(9),u=n(12),c=n(43),s={status:!1,message:String,user:Object,loading:!1},l=function(e){return{type:"SET-LOGIN",user:e}},f=function(e){return{type:"LOADING",loading:e}},d=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getUserFromServer();case 2:n=e.sent,t(n?l(n):{type:"DEL-USER"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.sendUserFormServer(e);case 2:r=t.sent,n(r?l(r):Object(c.a)("login",{_error:r.mess}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(e){u.a.exit().then((function(t){t&&e({type:"DEL-USER"})}))}};t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOGIN":return Object(o.a)({},e,{status:t.user.status,message:t.user.message,user:t.user._id});case"DEL-USER":return Object(o.a)({},e,{status:!1,message:String,user:Object});case"LOADING":return Object(o.a)({},e,{loading:t.loading});default:return Object(o.a)({},e)}}},285:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(5),a=n(125),i=n(126),o=n(25),u=n(9),c=n(12),s={RegistrationStatus:!1,RegistrationMessage:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return"REGISTRATION-STATUS"===t.type?Object(u.a)({},e,{RegistrationStatus:t.registration.status,RegistrationMessage:t.registration.mess}):Object(u.a)({},e)},f=n(98),d=n(99),m=n(100),p=Object(r.c)({LoginReducer:o.e,RegistrationReducer:l,ProfileReducer:f.b,MessageReducer:d.f,PeopleReducer:m.d,form:a.a}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,E=Object(r.e)(p,g(Object(r.a)(i.a)));window.store=E;var v=E,b=n(0),h=n.n(b),O=n(59),S=n.n(O),j=n(11),y=n(27),P=n(10);n(133);var w=function(){return h.a.createElement("div",{className:"Logo"})},L=(n(246),Object(r.d)(Object(j.b)((function(e){return{state:e.LoginReducer}}),{Exit:o.a}))((function(e){return h.a.createElement("div",{className:"Menu"},h.a.createElement("div",null,h.a.createElement(y.b,{to:"/profile",className:"Button_item"},"\u041c\u043e\u044f \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ")),h.a.createElement("div",null,h.a.createElement(y.b,{to:"/message",className:"Button_item"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f ")),h.a.createElement("div",null,h.a.createElement(y.b,{to:"/people",className:"Button_item"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 ")),h.a.createElement("div",null,h.a.createElement("button",{onClick:function(){e.Exit()}},"Exit")))}))),R=function(){return h.a.createElement("div",{className:"Header"},h.a.createElement(w,null),h.a.createElement(L,null))},N=n(89),k=(n(134),n(45)),x=Object(b.lazy)((function(){return n.e(5).then(n.bind(null,291))})),T=Object(b.lazy)((function(){return n.e(3).then(n.bind(null,292))})),I=Object(b.lazy)((function(){return n.e(4).then(n.bind(null,293))})),M=Object(N.a)((function(){return h.a.createElement("div",{className:"cont_Section"},h.a.createElement("div",null,h.a.createElement(R,null)),h.a.createElement("div",null," ",h.a.createElement(A,null)))})),A=function(){return h.a.createElement(b.Suspense,{fallback:".... \u0447\u0443 \u0445\u0435\u0440\u043d\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u0434\u043e\u0436\u0434\u0435\u043c"},h.a.createElement("div",null,h.a.createElement(P.b,{path:"/profile/:profile?",render:function(){return h.a.createElement(x,null)}}),h.a.createElement(P.b,{path:"/message/:profile?",render:function(){return h.a.createElement(T,null)}}),h.a.createElement(P.b,{path:"/people",render:function(){return h.a.createElement(I,null)}})))},F=n(123),G=n(124),D=function(e){if(!e)return"Field is required"},U=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},_=function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}},C=(Object(r.d)(Object(j.b)((function(e){return{userEntry:e.LoginReducer.userEntry}}),null))((function(e){return function(t){return t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?"Invalid email address":e.status?void 0:h.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439")}})),n(87)),H=(n(80),function(e){var t=e.input,n=e.meta,r=(e.value,Object(C.a)(e,["input","meta","value"])),a=n.touched&&n.error;return h.a.createElement("div",null,h.a.createElement("div",null,h.a.createElement("input",Object.assign({},t,r,{className:a&&"formControl"}))),a&&h.a.createElement("span",{className:"formSpan"},n.error))}),B=(U(15),_(6)),q=Object(G.a)({form:"login"})((function(e){return h.a.createElement("div",{className:"login_Section"},h.a.createElement("div",null,"LOGIN"),h.a.createElement("div",null,"Entry Your Login & Password, please"),h.a.createElement("form",{onSubmit:e.handleSubmit},h.a.createElement("div",null,h.a.createElement(F.a,{required:!0,name:"login",component:H,placeholder:"Login",validate:[D,B]})),h.a.createElement("div",null,h.a.createElement(F.a,{required:!0,placeholder:"Password",component:H,name:"password",validate:[D,B]})),h.a.createElement("div",null,h.a.createElement(F.a,{component:"input",type:"checkbox",name:"rememberMe",validate:[]}),"Remember me"),e.error&&h.a.createElement("div",{className:"errorEmaOrPass"},e.error," \u042d\u0442\u043e \u0445\u0443\u0439\u043d\u044f, \u0434\u0430\u0432\u0430\u0439 \u0437\u0430\u043d\u043e\u0432\u043e "),h.a.createElement("div",null,h.a.createElement("button",{value:"Enter"},"Enter"),h.a.createElement("button",null,h.a.createElement(y.b,{to:"/registration",className:"Button_item"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f ")))))})),W=(n(285),n(28)),Y=n(29),z=n(30),Z=n(31),J=function(e){var t=function(t){Object(Z.a)(r,t);var n=Object(z.a)(r);function r(){var e;Object(W.a)(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={History:localStorage.History},e}return Object(Y.a)(r,[{key:"render",value:function(){if(!this.props.state.status)return h.a.createElement(e,this.props);switch(History){case"profile":return h.a.createElement(P.a,{to:"/profile/".concat(this.state.Profile)});case"message":return h.a.createElement(P.a,{to:"/message/".concat(this.state.Dialog)});case"people":return h.a.createElement(P.a,{to:"/people"});default:return h.a.createElement(P.a,{to:"/profile"})}}}]),r}(h.a.Component);return Object(j.b)((function(e){return{state:e.LoginReducer,userStatus:e.ProfileReducer.status}}))(t)},X=n(62),$=n.n(X),V=Object(r.d)(Object(j.b)((function(e){return{user:Object(k.b)(e),userEntry:Object(k.c)(e),loading:Object(k.a)(e)}}),{Exit:o.a,GetUserFromServer:o.b,SendUserFormForServer:o.d}),J)((function(e){Object(b.useEffect)((function(){e.GetUserFromServer()}),[]);return h.a.createElement("div",{className:"entry_Section"},h.a.createElement(q,{onSubmit:function(t){e.SendUserFormForServer(t),$.a.set("History","profile")}}))})),K=U(16),Q=_(6),ee=Object(G.a)({form:"registration"})((function(e){var t=e.handleSubmit;return h.a.createElement("div",{className:"reg_Section"},h.a.createElement("h1",null,"REGISTRATION"),h.a.createElement("div",null),h.a.createElement("form",{onSubmit:t},h.a.createElement("div",null,h.a.createElement("div",null,"Nickname"),h.a.createElement(F.a,{component:H,placeholder:"You`r Name",name:"name",validate:[D,Q,K]})),h.a.createElement("div",null,h.a.createElement("div",null,"Login"),h.a.createElement(F.a,{required:!0,name:"login",component:H,placeholder:"Login",validate:[D,Q]})),h.a.createElement("div",null,h.a.createElement("div",null,"Password"),h.a.createElement(F.a,{required:!0,placeholder:"Password",component:H,name:"password",validate:[D,Q,K]})),e.error&&h.a.createElement("div",{className:"errorEmaOrPass"},e.error," \u042d\u0442\u043e \u0445\u0443\u0439\u043d\u044f, \u0434\u0430\u0432\u0430\u0439 \u0437\u0430\u043d\u043e\u0432\u043e "),h.a.createElement("div",null,h.a.createElement("button",{value:"Enter"},"Enter"))))})),te=function(e){return e.RegistrationReducer.RegistrationMessage},ne=function(e){return e.RegistrationReducer.RegistrationStatus},re=function(e){return{status:e.RegistrationReducer.RegistrationStatus}},ae=function(e){Object(Z.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(W.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).EntryForm=function(t){t.name=t.name.match(/(\w+)/gim),console.log(t),e.props.RegistrationThunk(t)},e}return Object(Y.a)(n,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(ee,{onSubmit:this.EntryForm,userEntry:this.props.userEntry}))}}]),n}(b.PureComponent),ie=Object(r.d)((function(e){var t=function(t){Object(Z.a)(r,t);var n=Object(z.a)(r);function r(){return Object(W.a)(this,r),n.apply(this,arguments)}return Object(Y.a)(r,[{key:"render",value:function(){return this.props.status?h.a.createElement(P.a,{to:"/login"}):h.a.createElement(e,this.props)}}]),r}(h.a.Component);return Object(j.b)(re)(t)}),Object(j.b)((function(e){return{message:te(e),status:ne(e)}}),{RegistrationThunk:function(e){return function(t){c.a.registration(e).then((function(e){e.status&&t({type:"REGISTRATION-STATUS",registration:e})}))}}}))(ae),oe=function(){return h.a.createElement("div",{className:"base"},h.a.createElement("div",null,h.a.createElement(P.b,{path:"/login",render:function(){return h.a.createElement(V,null)}}),h.a.createElement(P.b,{path:"/registration",render:function(){return h.a.createElement(ie,null)}})),h.a.createElement("div",null,h.a.createElement(M,null)))};S.a.render(h.a.createElement(y.a,{basename:"/app-on-react"},h.a.createElement(j.a,{store:v},h.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(e){return e.LoginReducer.user},a=function(e){return e.LoginReducer.userEntry},i=function(e){return e.LoginReducer.loading}},80:function(e,t,n){},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(28),a=n(29),i=n(30),o=n(31),u=n(0),c=n.n(u),s=n(10),l=n(11),f=function(e){return{state:e.LoginReducer}},d=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(i.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.state.status?c.a.createElement(e,this.props):c.a.createElement(s.a,{to:"/login"})}}]),u}(c.a.Component);return Object(l.b)(f)(t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(8),a=n.n(r),i=n(14),o=n(9),u=n(12),c={status:!1,message:"Profile not entry",loading:!1},s=function(e){return{type:"EDIT-INFO",inform:e}},l=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfileFromServer(e);case 2:return(r=t.sent)&&n({type:"SET-PROFILE",profile:r}),t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,u.d.sendInformation(e);case 3:t.sent&&n(s(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROFILE":return Object(o.a)({},e,{status:t.profile.status,message:t.profile.mess,profileNickname:t.profile.Profile.Nickname,profilePhoto:""!==t.profile.Profile.Photo.origin?t.profile.Profile.Photo.origin:t.profile.Profile.Photo.default,profilePhotoMin:""!==t.profile.Profile.PhotoMin.origin?t.profile.Profile.PhotoMin.origin:t.profile.Profile.PhotoMin.default,profileStatus:t.profile.Profile.Status,profileLocation:t.profile.Profile.Location,profileAge:t.profile.Profile.Age,profileSkills:t.profile.Profile.Skills,profileTags:t.profile.Profile.Tags,profileGender:t.profile.Profile.Gender});case"LOADING":return Object(o.a)({},e,{loading:t.loading});case"EDIT-INFO":return Object(o.a)({},e,{profileNickname:t.inform.nickname,profilePhoto:t.inform.photo,profileStatus:t.inform.status,profileLocation:t.inform.location,profileAge:t.inform.age,profileSkills:t.inform.skills,profileTags:t.inform.tags,profileGender:t.inform.gender});default:return e}}},99:function(e,t,n){"use strict";n.d(t,"g",(function(){return g})),n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(8),a=n.n(r),i=n(14),o=n(132),u=n(9),c=n(12),s=n(62),l=n.n(s),f={Message:{ListMessage:[],AvaParty:"",NameParty:[]},Friend:[],Party:[],loading:!1},d=function(e){return{type:"SET-MESSAGE",message:e}},m=function(e){return{type:"LOADING",loading:e}},p=function(e){return{type:"PUSH-MESSAGE",message:e}},g=function(e){return{type:"DELETED-MESSAGE",deleted:e}},E=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return n(m(!0)),t.next=4,c.c.messageListMessage(e);case 4:(r=t.sent)&&(l.a.set("message",e),n(d(r)),n(m(!1)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0)),e.next=3,c.c.messageListFriend();case 3:(n=e.sent)&&(t({type:"SET-FRIEND",friend:n}),t(m(!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0)),e.next=3,c.c.messageListParty();case 3:(n=e.sent)&&(t({type:"SET-PARTY",friend:n}),t(m(!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0)),t.next=3,c.c.SendMessage(e);case 3:t.sent&&(n(p(e)),n(m(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.SendSetting(e);case 2:t.sent&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FRIEND":return Object(u.a)({},e,{Friend:t.friend.Friend});case"SET-PARTY":return Object(u.a)({},e,{Party:t.friend.Party});case"SET-MESSAGE":return Object(u.a)({},e,{Message:t.message});case"LOADING":return Object(u.a)({},e,{loading:t.loading});case"PUSH-MESSAGE":return Object(u.a)({},e,{Message:Object(u.a)({},e.Message,{ListMessage:[].concat(Object(o.a)(e.Message.ListMessage),[{user:t.message.user,text:t.message.text,img:t.message.img,date:t.message.date}])})});case"DELETED-MESSAGE":for(var n=function(n){var r=e.Party.findIndex((function(e){return e._id===t.deleted.list[n]}));e.Party.splice(r,r+1)},r=0;r<t.deleted.list.length;r++)n(r);return Object(u.a)({},e);default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.c44f8b5c.chunk.js.map