(this.webpackJsonpreddify=this.webpackJsonpreddify||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(1),l=a.n(s),i=a(3),u=a(6),m=a(4),d=a(5),p=a.n(d),f=a(7),E={SCOPE:"identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread",REDIRECT_URI:Object({NODE_ENV:"production",PUBLIC_URL:"/reddify",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_REDDIT_CLIENT_ID:"R7tm6TdbzDZlOw",REACT_APP_REDDIT_CLIENT_SECRET:"5f6lWWZg1SxFjJVChX1sk8KivFE"}).REACT_APP_REDDIT_REDIRECT,CLIENT_ID:"R7tm6TdbzDZlOw",RESPONSE_TYPE:"code",STATE:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),DURATION:"permanent",CLIENT_SECRET:"5f6lWWZg1SxFjJVChX1sk8KivFE"},v=function(){return Object(f.load)("reddify_token")},b=function(e){var t=v();return t&&t[e]},h=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({url:"https://oauth.reddit.com/api/v1/me",method:"GET",headers:{Authorization:"".concat(t)}});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b("refresh_token")){e.next=2;break}return e.abrupt("return");case 2:return(t=new FormData).append("grant_type","refresh_token"),t.append("refresh_token",b("refresh_token")),t.append("duration","permanent"),e.next=8,p()({method:"POST",url:"https://www.reddit.com/api/v1/access_token",headers:{Authorization:"Basic "+btoa(E.CLIENT_ID+":"+E.CLIENT_SECRET),"Content-Type":"application/x-www-form-urlencoded"},data:t});case 8:a=e.sent,n=a.data,r=v(),Object(f.save)("reddify_token",Object(m.a)({},r,{},n));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){var t="?";return e&&Object.keys(e)&&Object.keys(e).forEach((function(a){t="".concat(t).concat(a,"=").concat(e[a],"&")})),t},_=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"GET",url:"https://www.reddit.com/search.json".concat(x(t))});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("grant_type","authorization_code"),a.append("code",t),a.append("redirect_uri",E.REDIRECT_URI),e.next=6,p()({method:"POST",url:"https://www.reddit.com/api/v1/access_token",headers:{Authorization:"Basic "+btoa(E.CLIENT_ID+":"+E.CLIENT_SECRET),"Content-Type":"application/x-www-form-urlencoded"},data:a});case 6:return n=e.sent,r=n.data,e.next=10,h("".concat(r.token_type," ").concat(r.access_token));case 10:c=e.sent,Object(f.save)("reddify_token",Object(m.a)({},r,{},{name:c.name})),w(),window.location.replace("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({url:"https://oauth.reddit.com/user/".concat(b("name"),"/saved"),method:"GET",headers:{Authorization:"".concat(b("token_type")," ").concat(b("access_token"))}});case 2:return t=e.sent,a=t.data,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var N=function(e){var t=e.login,a=e.loadPosts;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/",style:{borderRight:"none"}},"Reddify"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"}),b("access_token")?r.a.createElement("button",{className:"btn btn-outline-warning my-2 my-sm-0",onClick:a},r.a.createElement("i",{className:"fas fa-download"}),r.a.createElement("span",{className:"ml-2"},"Get Saved Posts")):r.a.createElement("button",{className:"btn btn-outline-warning my-2 my-sm-0",onClick:t},r.a.createElement("i",{className:"fab fa-reddit-alien"}),r.a.createElement("span",{className:"ml-2"},"Login"))))};var T=function(e){var t=e.posts;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-columns"},t.map((function(e){var t,a=e.data;return r.a.createElement("div",{className:"card",key:a.id},r.a.createElement("img",{src:a.url,className:"card-img-top",alt:""}),r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title"},r.a.createElement("a",{href:"".concat("https://reddit.com").concat(a.permalink)},a.title)),r.a.createElement("p",{className:"card-text"},(t=a.selftext).length>255?"".concat(t.substr(0,253)," ..."):t)),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("a",{className:"btn btn-outline-primary btn-sm",href:"".concat("https://reddit.com","/").concat(a.subreddit_name_prefixed)},a.subreddit_name_prefixed),r.a.createElement("button",{className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("span",{className:"fas fa-arrow-up"}),r.a.createElement("span",{className:"ml-1"},a.ups))))})))):""};var k=function(e){var t=e.search,a=Object(n.useState)({q:"",limit:25,sort:"hot"}),c=Object(u.a)(a,2),o=c[0],s=c[1],l=null;Object(n.useEffect)((function(){l.focus()}));var i=function(e){t(o),e.preventDefault()};return r.a.createElement("div",{className:"jumbotron mt-3"},r.a.createElement("form",{onSubmit:i,onKeyPress:function(e){"Enter"===e.key&&i(e)}},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Search"),r.a.createElement("input",{ref:function(e){l=e},type:"text",className:"form-control",id:"exampleInputEmail1",placeholder:"Search the whole of Reddit",onChange:function(e){s(Object(m.a)({},o,{q:e.target.value}))}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"type-selection"},"Type"),r.a.createElement("select",{className:"form-control",id:"type-selection",onChange:function(e){s(Object(m.a)({},o,{sort:e.target.value}))},defaultValue:o.sortOptions},[{value:"hot",label:"Hot"},{value:"relevance",label:"Related"},{value:"top",label:"Top"},{value:"new",label:"New"},{value:"comments",label:"Comments"}].map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)})))),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"no-of-results"},"Results"),r.a.createElement("select",{className:"form-control",id:"no-of-results",onChange:function(e){s(Object(m.a)({},o,{limit:e.target.value}))},defaultValue:o.limit},[{value:10,label:10},{value:25,label:25},{value:50,label:50},{value:75,label:75},{value:100,label:100}].map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)}))))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))};var O=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:a=e.sent,c(a.data.children);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,c(t.data.children);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code");e&&g(e)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{loadPosts:s,login:function(){!function(){var e=E.RESPONSE_TYPE,t=E.STATE,a=E.REDIRECT_URI,n=E.SCOPE,r=E.DURATION,c="https://www.reddit.com/api/v1/authorize?client_id=".concat(E.CLIENT_ID,"&response_type=").concat(e,"&state=").concat(t,"&duration=").concat(r,"&redirect_uri=").concat(a,"&scope=").concat(n);window.location.replace(c)}()}}),r.a.createElement("div",{className:"container"},r.a.createElement(k,{search:o}),r.a.createElement(T,{posts:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5c5d8605.chunk.js.map