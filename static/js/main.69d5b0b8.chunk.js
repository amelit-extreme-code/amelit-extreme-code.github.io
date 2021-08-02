(this["webpackJsonpmango-ui-ts"]=this["webpackJsonpmango-ui-ts"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(25),a=n.n(r),i=(n(55),n(28)),o=n(4),c=n(24),u=n(9),l=(n(56),n(1)),p=function(e){var t=e.title,n=e.leftItems,s=e.rightItems;return Object(l.jsxs)("div",{className:"toolbar",children:[Object(l.jsx)("div",{className:"left-items",children:n}),Object(l.jsx)("h1",{className:"toolbar-title",children:t}),Object(l.jsx)("div",{className:"right-items",children:s})]})},b=(n(58),function(e){var t=e.icon;return Object(l.jsx)("i",{className:"toolbar-button ".concat(t)})}),h=(n(59),function(){return Object(l.jsx)("div",{className:"conversation-search",children:Object(l.jsx)("input",{type:"search",className:"conversation-search-input",placeholder:"Search Messages"})})}),d=n(27),j=n.n(d),f=(n(77),n(46)),m=(n(78),function(e){Object(s.useEffect)((function(){Object(f.a)(".conversation-snippet",20)}));var t=e.data,n=t.photo,r=t.name,a=t.text;return Object(l.jsxs)("div",{className:"conversation-list-item",children:[Object(l.jsx)("img",{className:"conversation-photo",src:n,alt:"conversation"}),Object(l.jsxs)("div",{className:"conversation-info",children:[Object(l.jsx)("h1",{className:"conversation-title",children:r}),Object(l.jsx)("p",{className:"conversation-snippet",children:a})]})]})}),g=function(e){var t=Object(s.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1];Object(s.useEffect)((function(){i()}));var i=function(){j.a.get("https://randomuser.me/api/?results=20").then((function(e){var t=e.data.results.map((function(e){return{photo:e.picture.large,name:"".concat(e.name.first," ").concat(e.name.last),text:"Hello world! This is a long message that needs to be truncated."}}));a([].concat(Object(c.a)(r),Object(c.a)(t)))}))};return Object(l.jsxs)("div",{className:"conversation-list",children:[Object(l.jsx)(p,{title:"Messenger",leftItems:[Object(l.jsx)(b,{icon:"ion-ios-cog"},"cog")],rightItems:[Object(l.jsx)(b,{icon:"ion-ios-add-circle-outline"},"add")]}),Object(l.jsx)(h,{}),r.map((function(e){return Object(l.jsx)(m,{data:e},e.name)}))]})},O=n(18),v=n.n(O),x=(n(80),function(e){var t=e.data,n=e.isMine,s=e.startsSequence,r=e.endsSequence,a=e.showTimestamp,i=v()(t.timestamp).format("LLLL");return Object(l.jsxs)("div",{className:["message","".concat(n?"mine":""),"".concat(s?"start":""),"".concat(r?"end":"")].join(" "),children:[a&&Object(l.jsx)("div",{className:"timestamp",children:i}),Object(l.jsx)("div",{className:"bubble-container",children:Object(l.jsx)("div",{className:"bubble",title:i,children:t.message})})]})}),w=(n(81),n(82),function(e){return Object(l.jsxs)("div",{className:"compose",children:[Object(l.jsx)("input",{type:"text",className:"compose-input",placeholder:"Type a message, @name"}),e.rightItems]})}),y=function(e){var t=Object(s.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1];Object(s.useEffect)((function(){i()}));var i=function(){var e=[{id:1,author:"apple",message:"Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",timestamp:(new Date).getTime()},{id:2,author:"orange",message:"It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",timestamp:(new Date).getTime()},{id:3,author:"orange",message:"Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",timestamp:(new Date).getTime()},{id:4,author:"apple",message:"It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",timestamp:(new Date).getTime()},{id:5,author:"apple",message:"Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",timestamp:(new Date).getTime()},{id:6,author:"apple",message:"It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",timestamp:(new Date).getTime()},{id:7,author:"orange",message:"Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",timestamp:(new Date).getTime()},{id:8,author:"orange",message:"It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",timestamp:(new Date).getTime()},{id:9,author:"apple",message:"Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",timestamp:(new Date).getTime()},{id:10,author:"orange",message:"It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",timestamp:(new Date).getTime()}];a([].concat(Object(c.a)(r),e))};return Object(l.jsxs)("div",{className:"message-list",children:[Object(l.jsx)(p,{title:"Conversation Title",rightItems:[Object(l.jsx)(b,{icon:"ion-ios-information-circle-outline"},"info"),Object(l.jsx)(b,{icon:"ion-ios-videocam"},"video"),Object(l.jsx)(b,{icon:"ion-ios-call"},"phone")]}),Object(l.jsx)("div",{className:"message-list-container",children:function(){for(var e=0,t=r.length,n=[];e<t;){var s=r[e-1],a=r[e],i=r[e+1],o="apple"===a.author,c=v()(a.timestamp),u=!0,p=!0,b=!0;if(s){var h=v()(s.timestamp),d=v.a.duration(c.diff(h));s.author===a.author&&d.as("hours")<1&&(u=!1),d.as("hours")<1&&(b=!1)}if(i){var j=v()(i.timestamp),f=v.a.duration(j.diff(c));i.author===a.author&&f.as("hours")<1&&(p=!1)}n.push(Object(l.jsx)(x,{isMine:o,startsSequence:u,endsSequence:p,showTimestamp:b,data:a},e)),e+=1}return n}()}),Object(l.jsx)(w,{rightItems:[Object(l.jsx)(b,{icon:"ion-ios-camera"},"photo"),Object(l.jsx)(b,{icon:"ion-ios-image"},"image"),Object(l.jsx)(b,{icon:"ion-ios-mic"},"audio"),Object(l.jsx)(b,{icon:"ion-ios-card"},"money"),Object(l.jsx)(b,{icon:"ion-logo-game-controller-b"},"games"),Object(l.jsx)(b,{icon:"ion-ios-happy"},"emoji")]})]})},k=(n(83),function(e){return Object(l.jsxs)("div",{className:"messenger",children:[Object(l.jsx)("div",{className:"scrollable sidebar",children:Object(l.jsx)(g,{})}),Object(l.jsx)("div",{className:"scrollable content",children:Object(l.jsx)(y,{})})]})}),T=n(14),I=n(7),N=n(15),_=n(8),S=function e(t,n,s,r,a,i){Object(_.a)(this,e),this.phoneNumber=void 0,this.email=void 0,this.displayName=void 0,this.password=void 0,this.verificationMethod=void 0,this.termsAccepted=void 0,this.phoneNumber=t,this.email=n,this.displayName=s,this.password=r,this.verificationMethod=a,this.termsAccepted=i},E=n(3),C=n.n(E),P=n(16),z=n(10),A=n(20),D=n(5),M=(n(45),n(2)),L=function e(){Object(_.a)(this,e)};L.apiDomain="https://mango-messenger-app.herokuapp.com";var R=function e(){Object(_.a)(this,e)};R.postRegister="/api/auth/register",R.postLogin="/api/auth/login",R.postRefreshToken="/api/auth/refresh-token",R.getVerifyPhone="/api/auth/verify-phone",R.verifyEmail="/api/auth/verify-email";var q=function e(){Object(_.a)(this,e)};q.getChats="/api/chats",q.postGroup="/api/chats/group",q.postDirectChat="/api/chats/direct-chat",q.postJoinGroup="/api/chats/group/join/{chatId}";var W=function e(){Object(_.a)(this,e)};W.getChatMessages="/api/messages/{chatId}",W.postMessage="/api/messages",W.putMessage="/api/messages",W.deleteMessage="/api/messages/{messageId}";var U,H,B,J,G,V,F,K,Q,X,Y,Z,$,ee,te,ne,se,re,ae,ie,oe,ce,ue,le,pe,be,he=function(){function e(){Object(_.a)(this,e),this.headers={"Content-Type":"application/json"},this.apiConnector=void 0,this.apiConnector=j.a.create({headers:this.headers,baseURL:L.apiDomain})}return Object(A.a)(e,[{key:"register",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.apiConnector.post(R.postRegister,{phoneNumber:t.phoneNumber,email:t.email,displayName:t.displayName,password:t.password,verificationMethod:t.verificationMethod,termsAccepted:t.termsAccepted},{headers:this.headers});case 3:return n=e.sent,e.abrupt("return",Promise.resolve(n.data));case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0||!e.t0.response){e.next=25;break}s="",e.t1=e.t0.response.status,e.next=400===e.t1?14:401===e.t1?16:403===e.t1?18:409===e.t1?20:22;break;case 14:return s="Bad Request",e.abrupt("break",24);case 16:return s="Wrong login or password",e.abrupt("break",24);case 18:return s="Access denied",e.abrupt("break",24);case 20:return s="Conflict",e.abrupt("break",24);case 22:return s=e.t0.response.status,e.abrupt("break",24);case 24:console.log("One of the Error messages from Register Request: ",s);case 25:return e.abrupt("return",Promise.reject(e.t0));case 26:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.apiConnector.post(R.postLogin,{email:t.email,password:t.password},{headers:this.headers});case 3:return n=e.sent,e.abrupt("return",Promise.resolve(n.data));case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0||!e.t0.response){e.next=21;break}s="",e.t1=e.t0.response.status,e.next=401===e.t1?14:403===e.t1?16:18;break;case 14:return s="Wrong login or password",e.abrupt("break",20);case 16:return s="Access denied",e.abrupt("break",20);case 18:return s=e.t0.response.status,e.abrupt("break",20);case 20:console.log("One of the Error messages from Register Request: ",s);case 21:return e.abrupt("return",Promise.reject(e.t0));case 22:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"verifyEmail",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.apiConnector.post(R.verifyEmail,{email:t.email,userId:t.userId},{headers:this.headers});case 3:return n=e.sent,e.abrupt("return",Promise.resolve(n.data));case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0||!e.t0.response){e.next=21;break}s="",e.t1=e.t0.response.status,e.next=401===e.t1?14:403===e.t1?16:18;break;case 14:return s="Wrong login or password",e.abrupt("break",20);case 16:return s="Access denied",e.abrupt("break",20);case 18:return s=e.t0.response.status,e.abrupt("break",20);case 20:console.log("One of the Error messages from Register Request: ",s);case 21:return e.abrupt("return",Promise.reject(e.t0));case 22:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"verifyPhone",value:function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshToken",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.apiConnector.post(R.postRefreshToken,{refreshTokenId:t.refreshTokenId},{headers:this.headers});case 3:return e.sent,e.abrupt("return",Promise.resolve());case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0||!e.t0.response){e.next=21;break}n="",e.t1=e.t0.response.status,e.next=401===e.t1?14:403===e.t1?16:18;break;case 14:return n="Wrong login or password",e.abrupt("break",20);case 16:return n="Access denied",e.abrupt("break",20);case 18:return n=e.t0.response.status,e.abrupt("break",20);case 20:console.log("One of the Error messages from Register Request: ",n);case 21:return e.abrupt("return",Promise.reject(e.t0));case 22:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logoutAll",value:function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),de=(U=function(){function e(t){Object(_.a)(this,e),Object(z.a)(this,"_userId",H,this),Object(z.a)(this,"_refreshToken",B,this),Object(z.a)(this,"_accessToken",J,this),Object(z.a)(this,"setAccessToken",G,this),Object(z.a)(this,"setRefreshToken",V,this),Object(z.a)(this,"setUserId",F,this),this.setAccessToken(t.accessToken),this.setRefreshToken(t.refreshToken),this.setUserId(t.userId)}return Object(A.a)(e,[{key:"accessToken",get:function(){return this._accessToken}},{key:"refreshToken",get:function(){return this._refreshToken}},{key:"userId",get:function(){return this._userId}}]),e}(),H=Object(D.a)(U.prototype,"_userId",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=Object(D.a)(U.prototype,"_refreshToken",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=Object(D.a)(U.prototype,"_accessToken",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=Object(D.a)(U.prototype,"setAccessToken",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._accessToken=t}}}),V=Object(D.a)(U.prototype,"setRefreshToken",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._refreshToken=t}}}),F=Object(D.a)(U.prototype,"setUserId",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._userId=t}}}),Object(D.a)(U.prototype,"accessToken",[M.g],Object.getOwnPropertyDescriptor(U.prototype,"accessToken"),U.prototype),Object(D.a)(U.prototype,"refreshToken",[M.g],Object.getOwnPropertyDescriptor(U.prototype,"refreshToken"),U.prototype),Object(D.a)(U.prototype,"userId",[M.g],Object.getOwnPropertyDescriptor(U.prototype,"userId"),U.prototype),U),je=(K=function(){function e(){Object(_.a)(this,e),this.registrationApi=new he,Object(z.a)(this,"_message",Q,this),Object(z.a)(this,"_success",X,this),Object(z.a)(this,"_userId",Y,this),Object(z.a)(this,"_login",Z,this),Object(z.a)(this,"_isLogged",$,this),Object(z.a)(this,"_session",ee,this),Object(z.a)(this,"setMessage",te,this),Object(z.a)(this,"setSuccess",ne,this),Object(z.a)(this,"setUserId",se,this),Object(M.n)(this)}return Object(A.a)(e,[{key:"registration",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.registrationApi.register(t);case 3:return n=e.sent,this.setMessage(n.message),this.setSuccess(n.success),this.setUserId(n.userId),e.abrupt("return",Promise.resolve());case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"verifyEmail",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.registrationApi.verifyEmail(t);case 3:return n=e.sent,this.setMessage(n.message),this.setSuccess(n.success),e.abrupt("return",Promise.resolve());case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(P.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.registrationApi.login(t);case 3:return n=e.sent,this._session=new de(n),e.abrupt("return",Promise.resolve());case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Q=Object(D.a)(K.prototype,"_message",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=Object(D.a)(K.prototype,"_success",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Y=Object(D.a)(K.prototype,"_userId",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=Object(D.a)(K.prototype,"_login",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=Object(D.a)(K.prototype,"_isLogged",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ee=Object(D.a)(K.prototype,"_session",[M.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),te=Object(D.a)(K.prototype,"setMessage",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._message=t}}}),ne=Object(D.a)(K.prototype,"setSuccess",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._success=t}}}),se=Object(D.a)(K.prototype,"setUserId",[M.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e._userId=t,localStorage.setItem("userId",t)}}}),K),fe=Object(I.c)((function(){var e=new je,t=s.useState(""),n=Object(u.a)(t,2),r=n[0],a=n[1],i=s.useState(""),o=Object(u.a)(i,2),c=o[0],p=o[1],b=s.useState(""),h=Object(u.a)(b,2),d=h[0],j=h[1],f=s.useState(""),m=Object(u.a)(f,2),g=m[0],O=m[1],v=s.useState(!0),x=Object(u.a)(v,2),w=x[0],y=x[1],k=s.useState(1),T=Object(u.a)(k,2),I=T[0],N=T[1];return Object(l.jsx)(me,{onSubmit:function(t){t.preventDefault(),y(!0),e.registration(new S(r,c,d,g,I,w))},children:Object(l.jsxs)(ge,{children:[Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Phone Number:",Object(l.jsx)(ve,{type:"text",value:r,onChange:function(e){return a(e.target.value)},placeholder:"Enter your phone number"})]})}),Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Email:",Object(l.jsx)(ve,{type:"e-mail",value:c,onChange:function(e){return p(e.target.value)},placeholder:"Enter your E-MAIL"})]})}),Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)(ve,{type:"text",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Enter your name"})]})}),Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Password:",Object(l.jsx)(ve,{type:"password",value:g,onChange:function(e){return O(e.target.value)},placeholder:"Enter your password"})]})}),Object(l.jsxs)("label",{style:{margin:"0 0 15px 0"},children:["Authorization method:",Object(l.jsxs)(we,{onChange:function(e){"phone"===e.target.value?N(1):"email"===e.target.value&&N(2)},children:[Object(l.jsx)("option",{value:"phone",children:"Phone number"}),Object(l.jsx)("option",{value:"email",children:"E-Mail"})]})]}),Object(l.jsxs)("label",{children:["By clicking submit you are agreeing to the Terms and Conditions.",Object(l.jsx)(xe,{type:"submit",value:"submit"})]})]})})})),me=Object(N.a)("div")(re||(re=Object(T.a)(["\n    height: 100vh;\n    width: 100vw;\n    font-family: 'Open Sans',sans-serif;\n    color: #fff;\n    background: linear-gradient(#141e30, #243b55);    \n    display: flex;\n    justify-content: center;\n"]))),ge=Object(N.a)("form")(ae||(ae=Object(T.a)(["\n    width: 400px;\n    height: fit-content;\n    padding: 40px;\n    background: rgba(0,0,0,.5);\n    box-sizing: border-box;\n    box-shadow: 0 15px 25px rgba(0,0,0,.6);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n"]))),Oe=Object(N.a)("div")(ie||(ie=Object(T.a)(["\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  outline: none;\n  background: transparent;\n    \n"]))),ve=Object(N.a)("input")(oe||(oe=Object(T.a)(["\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n"]))),xe=Object(N.a)("input")(ce||(ce=Object(T.a)(["\n    background: linear-gradient(#243B6B, #8951e9);\n    width: 100%;\n    height: 8.5%;\n    padding: 10px 20px;\n    color: #f1ecf2;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    overflow: hidden;\n    transition: 0.6s;\n    cursor: pointer;\n    margin-top: 40px;\n    letter-spacing: 2px;\n    border: 2px solid;\n    &:hover {\n    background: #243b55;\n    color: #fff;\n    border-radius: 5px;\n    }\n    \n"]))),we=Object(N.a)("select")(ue||(ue=Object(T.a)(["\n    padding: 5px;\n    width: 100%;\n    cursor: pointer;\n    border-radius: 5px;\n    background-color: #ddd;\n"]))),ye=function e(t,n){Object(_.a)(this,e),this.email=void 0,this.password=void 0,this.email=t,this.password=n},ke=function(){var e=new je,t=s.useState(""),n=Object(u.a)(t,2),r=n[0],a=n[1],i=s.useState(""),o=Object(u.a)(i,2),c=o[0],p=o[1];return Object(l.jsxs)(ge,{onSubmit:function(t){t.preventDefault(),e.login(new ye(r,c))},children:[Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Enter your E-MAIL",Object(l.jsx)(ve,{value:r,type:"text",onChange:function(e){a(e.target.value)}})]})}),Object(l.jsx)(Oe,{children:Object(l.jsxs)("label",{children:["Enter your password",Object(l.jsx)(ve,{value:c,type:"password",onChange:function(e){p(e.target.value)}})]})}),Object(l.jsx)(Te,{type:"submit",value:"submit"})]})},Te=Object(N.a)("input")(le||(le=Object(T.a)(["\n    background: linear-gradient(#020024, #8951e9);\n    width: 100%;\n    height: 8.5%;\n    padding: 10px 20px;\n    color: #f1ecf2;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    overflow: hidden;\n    transition: 0.6s;\n    cursor: pointer;\n    margin-top: 40px;\n    letter-spacing: 2px;\n    border: 2px solid;\n    &:hover {\n    background: #243b55;\n    color: #fff;\n    border-radius: 5px;\n    }\n"]))),Ie=function(){var e=s.useState(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(Ne,{children:[Object(l.jsx)("button",{onClick:function(e){r(!0)},onDoubleClick:function(){r(!1)},children:"Login"}),Object(l.jsx)(_e,{children:n&&Object(l.jsx)(ke,{})}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"}),Object(l.jsx)("div",{children:"asdfsadf"})]})},Ne=Object(N.a)("div")(pe||(pe=Object(T.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),_e=Object(N.a)("div")(be||(be=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    \n"]))),Se=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(Ie,{})})},Ee=n(50),Ce=function e(t,n){Object(_.a)(this,e),this.email=void 0,this.userId=void 0,this.email=t,this.userId=n},Pe=Object(Ee.a)((function(){var e=s.useState(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=new je,i=localStorage.getItem("userId")||"";return Object(l.jsx)(ge,{onSubmit:function(e){e.preventDefault(),a.verifyEmail(new Ce(n,i))},children:Object(l.jsxs)(Oe,{children:[Object(l.jsxs)("label",{children:["Please enter your E-MAIL",Object(l.jsx)(ve,{value:n,type:"text",onChange:function(e){return r(e.target.value)}})]}),Object(l.jsx)("input",{type:"submit"})]})})}));function ze(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(l.jsx)(o.a,{exact:!0,path:"/main",component:Se}),Object(l.jsx)(o.a,{exact:!0,path:"/registration",component:fe}),Object(l.jsx)(o.a,{exact:!0,path:"/verification",component:Pe})]})})})}a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(ze,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.69d5b0b8.chunk.js.map