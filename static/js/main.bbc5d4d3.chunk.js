(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){},243:function(e,t,a){e.exports=a(437)},248:function(e,t,a){},260:function(e,t,a){},386:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),s=a.n(o),c=(a(248),a(19)),i=a(20),l=a(21),u=a(23),d=a(22),p=a(24),m=a(45),h=a(63),g=a(6),f=a(174),b=a.n(f),k=a(175),E=a.n(k),v=a(176),y=a.n(v),S=a(54);var F={toMoney:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?parseInt(e/100):parseInt(e/100)+"."+(e%100<10?"0"+e%100:e%100)}},M=(a(260),a(261),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),I=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"];function N(e){var t=[],a=[];e.drinks.forEach(function(e){a.push(Math.max.apply(null,e))});var n=Math.max.apply(null,a);return e.drinks.forEach(function(e,a){e.forEach(function(e,r){t.push({x:M[a],y:I[r],color:"rgba(246, 128, 128, ".concat(0===e?.1:e/n,")")})})}),t}var O=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).update=function(){var e=JSON.parse(localStorage.getItem("metrics")),t=localStorage.getItem("userDrinkMax");a.setState({totalCost:e.totalCost,totalDrinks:e.totalDrinks,drinkPercentage:parseInt(e.totalDrinks/t*100),userDrinkMax:t,userSpendMax:localStorage.getItem("userSpendMax"),time:N(e),sunburstData:{size:0,color:"#FFFFFF",children:[{title:"Progress",size:e.totalCost,color:"#32de44",children:[{title:"Padding",size:0,color:"#FFFFFF"}]},{title:"Until Limit",size:100*localStorage.getItem("userSpendMax")-e.totalCost,color:"#F4F4F4"}]}})},0===a.props.accessToken&&(window.location.href=window.origin.toString());var n=JSON.parse(localStorage.getItem("metrics")),r=localStorage.getItem("userDrinkMax");return a.state={totalCost:n.totalCost,totalDrinks:n.totalDrinks,drinkPercentage:parseInt(n.totalDrinks/r*100),userDrinkMax:r,userSpendMax:localStorage.getItem("userSpendMax"),time:N(n),sunburstData:{size:0,color:"#FFFFFF",children:[{title:"Progress",size:n.totalCost,color:"#32de44",children:[{title:"Padding",size:0,color:"#FFFFFF"}]},{title:"Until Limit",size:100*localStorage.getItem("userSpendMax")-n.totalCost,color:"#F4F4F4"}]}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=window.innerWidth-40;return r.a.createElement("div",{className:"dashboard-page"},r.a.createElement(g.k,{variant:"h4"},"Monthly Spending"),r.a.createElement(g.d,{className:"chart-holder"},r.a.createElement("div",{className:"chard-holder-description"},"MONTHLY LIMIT: $",this.state.userSpendMax,r.a.createElement("br",null),r.a.createElement("span",null,"$",F.toMoney(this.state.totalCost,this.state.totalCost/1e4>1)),r.a.createElement("br",null),"REMAINING: $",F.toMoney(100*this.state.userSpendMax-this.state.totalCost)),r.a.createElement(S.b,{height:e-45,width:e-45,data:this.state.sunburstData,padAngle:.06,animation:!0,colorType:"literal"})),r.a.createElement("div",{className:"stats-holder"},r.a.createElement(g.d,{className:"month-total-money"},r.a.createElement("p",null,"This is how much you\u2019ve spent on boba this month:"),r.a.createElement(g.k,{variant:"h2"},"$",F.toMoney(this.state.totalCost,this.state.totalCost/1e4>1))),r.a.createElement(g.d,{className:"month-drink-limit",style:{backgroundPositionY:3*(100-this.state.drinkPercentage)}},r.a.createElement(g.k,{variant:"h3"},this.state.drinkPercentage,"%"),r.a.createElement("p",null,"to your max number of drinks this month")),r.a.createElement(g.d,{className:"month-total-drinks"},r.a.createElement(g.k,{variant:"h2"},this.state.totalDrinks),r.a.createElement("p",null,"drinks this month"))),r.a.createElement(g.d,{className:"daily-chart"},r.a.createElement(S.d,{xType:"ordinal",yType:"ordinal",margin:60,width:e,height:1.8*e},r.a.createElement(S.c,{orientation:"top"}),r.a.createElement(S.e,null),r.a.createElement(S.a,{colorType:"literal",style:{stroke:"white",strokeWidth:"2px",rectStyle:{rx:10,ry:10}},data:this.state.time}))))}}]),t}(n.Component),j=a(16),x=a.n(j),D=(a(386),a(177)),C=a(121),w=a(85),P=a.n(w);function T(){for(var e={totalDrinks:0,totalCost:0,drinkAvg:0,drinks:Array(7)},t=0;t<7;t++)e.drinks[t]=Array(24).fill(0);return e}function A(e,t){t.totalDrinks+=1,t.totalCost+=e.price,t.drinkAvg=t.totalCost/t.totalDrinks;var a=new Date(e.date);t.drinks[a.getDay()][a.getHours()-1]+=1}var L={getDefaultMetrics:T,liveReload:function(e,t){var a=[];return e.forEach(function(e){localStorage.hasOwnProperty(e.id)||(A(e,t),a.push(e.id),localStorage.setItem(e.id,JSON.stringify(e)))}),localStorage.setItem("drinksList",JSON.stringify(a)),t},recalculateMetrics:function(e){var t=[],a=T();return e.forEach(function(e){A(e,a),t.push(e.id),localStorage.setItem(e.id,JSON.stringify(e))}),localStorage.setItem("drinksList",JSON.stringify(t)),localStorage.setItem("metrics",JSON.stringify(a)),a},updateMetrics:A},z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date},a.handleDateChange=function(e){a.setState({selectedDate:e})},a.update=function(){fetch("https://api.boba.watch/drinks/user/"+a.props.userId,{}).then(function(e){return e.json()}).then(function(e){L.recalculateMetrics(e),x()("Done!","Drink has been added","success"),a.props.close()}).catch(function(e){x()("Error!","Something Went Wrong: ".concat(e),"error")})},a.saveDrink=function(){var e={drink:{name:document.getElementById("name-value").value,location:document.getElementById("location-value").value,price:parseInt(100*document.getElementById("price-value").value),date:new Date(document.getElementById("date-value").value).toISOString(),photo:"",userId:parseInt(a.props.userId),description:document.getElementById("description-value").value}};""===document.getElementById("price-value").value||isNaN(parseInt(document.getElementById("price-value").value))||0===parseInt(document.getElementById("price-value").value)?x()("Error!","Please enter a price to add drink","error"):fetch("https://api.boba.watch/drinks/"+a.props.accessToken,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a.update()}).catch(function(e){x()("Error!","Couldn't update drinks. Error: ".concat(e),"error")})},a.close=function(){a.props.close()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-modal"},r.a.createElement(g.f,{color:"secondary",className:"close-button",onClick:this.close},r.a.createElement(P.a,{color:"secondary",style:{fontSize:14}})),r.a.createElement(g.k,{variant:"h5",style:{textAlign:"center"}},"Add a purchase"),r.a.createElement(g.j,{id:"location-value",className:"add-input",label:"Location"}),r.a.createElement(g.j,{id:"name-value",className:"add-input",margin:"dense",label:"Drink name"}),r.a.createElement(g.j,{id:"price-value",className:"add-input",margin:"dense",label:"Price"}),r.a.createElement(C.b,{utils:D.a},r.a.createElement(C.a,{id:"date-value",className:"add-input",margin:"dense",format:"M/d/yyyy h:mm a",label:"Date picker",value:this.state.selectedDate,onChange:this.handleDateChange})),r.a.createElement(g.j,{id:"description-value",className:"add-input",label:"Description"}),r.a.createElement("div",{className:"add-button-holder"},r.a.createElement(g.c,{onClick:this.saveDrink,className:"add-button"},"ADD")))}}]),t}(n.Component),B=Object(m.f)(z),J=a(168),W=a(169),U=a(170),H=a.n(U),R=(a(415),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={copiedNotification:!1},a.closeSnackbar=function(){a.setState({copiedNotification:!1})},a.copy=function(){a.setState({copiedNotification:!0})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"clipboard"},r.a.createElement("div",{className:"clipboard-text",id:"copy-me"},this.props.text),r.a.createElement(W.CopyToClipboard,{text:this.props.text},r.a.createElement(g.f,{style:{padding:0},className:"clipboard-icon",onClick:this.copy},r.a.createElement(H.a,{style:{fontSize:14}}))),r.a.createElement(g.h,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.copiedNotification,autoHideDuration:6e3,onClose:this.closeSnackbar,message:r.a.createElement("span",null,"Link Copied!")}))}}]),t}(n.Component)),$=(a(416),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={userSpendMax:localStorage.getItem("userSpendMax"),userDrinkMax:localStorage.getItem("userDrinkMax"),userPublic:"true"===localStorage.getItem("userPublic")},a.updateUser=function(){var e={user:{budget:parseInt(a.state.userSpendMax),maxDrinks:parseInt(a.state.userDrinkMax)}};fetch("https://api.boba.watch/users/".concat(a.props.userId,"/").concat(a.props.accessToken),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("userSpendMax",a.state.userSpendMax),localStorage.setItem("userDrinkMax",a.state.userDrinkMax),x()("Success!","Updated your settings successfully.","success"),a.props.close()}).catch(function(e){x()("Error!","Error updating data","error")})},a.makePublic=function(){var e={user:{public:a.state.userPublic.toString()}};fetch("https://api.boba.watch/users/".concat(a.props.userId,"/").concat(a.props.accessToken),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("userPublic",a.state.userPublic),x()("Success!","Your privacy settings have been changed","success")}).catch(function(e){x()("Error!","Error changing privacy setting","error")})},a.handleChange=function(e){return function(t){a.setState(Object(J.a)({},e,t.target.value))}},a.handleToggle=function(){a.setState(function(e){return{userPublic:!e.userPublic}},function(){a.makePublic()})},a.close=function(){a.props.close()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-modal",style:{height:this.state.userPublic?385:350}},r.a.createElement(g.f,{color:"secondary",className:"close-button",onClick:this.close},r.a.createElement(P.a,{color:"secondary",style:{fontSize:14}})),r.a.createElement("img",{src:localStorage.getItem("avatar"),className:"user-avatar",alt:"user"}),r.a.createElement(g.k,{variant:"h5",style:{textAlign:"center"}},"User settings"),r.a.createElement(g.j,{id:"monthly-spending-input",className:"user-input",variant:"outlined",margin:"normal",onChange:this.handleChange("userSpendMax"),value:this.state.userSpendMax,label:"Monthly Spending Limit"}),r.a.createElement(g.j,{id:"monthly-drinking-limit",className:"user-input",margin:"dense",variant:"outlined",onChange:this.handleChange("userDrinkMax"),value:this.state.userDrinkMax,label:"Max of drinks / month"}),r.a.createElement("div",{className:"user-share-profile"},"Share Profile:",r.a.createElement(g.i,{checked:this.state.userPublic,onClick:this.handleToggle,label:"Share Profile",color:"primary"})),r.a.createElement(g.e,{in:this.state.userPublic},r.a.createElement(R,{text:"https://share.boba.watch/#/".concat(this.props.userId)})),r.a.createElement("div",{className:"update-button-holder"},r.a.createElement(g.c,{className:"update-button",onClick:this.updateUser},"UPDATE")))}}]),t}(n.Component)),Y=a(86),G=a.n(Y),V=a(77),q=a.n(V),K=a(172),Q=a.n(K),X=a(171),Z=a.n(X),_=(a(163),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,add:!1},a.toggle=function(){a.setState(function(e){return{open:!e.open}})},a.toggleAdd=function(){a.setState(function(e){return{add:!e.add}})},a.hasImage=function(){if(null!==a.props.data.photo&&""!==a.props.data.photo.trim()&&"asdf"!==a.props.data.photo)return r.a.createElement("img",{alt:"drink",src:a.props.data.photo})},a.delete=function(){G.a.post("https://api.boba.watch/drinks/delete/"+a.props.data.id+"/"+a.props.accessToken).then(function(e){a.props.retrieveHistory()}).catch(function(e){x()("Error!","Couldn't delete your drink. Try again later!","error")})},a.edit=function(){a.toggleAdd(a.delete)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"thaman-color"},r.a.createElement("div",{className:"history-drink-label",onClick:this.toggle},r.a.createElement("p",{className:"drink-place"},this.props.data.location.length>13?this.props.data.location.substr(0,10)+"...":this.props.data.location),r.a.createElement("p",{className:"drink-price"},"$",F.toMoney(this.props.data.price)),r.a.createElement("div",{className:"expand-icon"},this.state.open?r.a.createElement(Z.a,null):r.a.createElement(Q.a,null)),r.a.createElement("p",{className:"drink-name"},this.props.data.name.length>13?this.props.data.name.substr(0,10)+"...":this.props.data.name),r.a.createElement("p",{className:"drink-time"},new Date(this.props.data.date).toDateString().substr(4))),r.a.createElement(q.a,{in:this.state.open},r.a.createElement("p",{className:"drink-description"},this.props.data.description,JSON.stringify(new Date(this.props.data.date))),r.a.createElement("div",{className:"drink-options"},r.a.createElement(g.c,{onClick:this.delete},"DELETE"))))}}]),t}(n.Component)),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).update=function(){a.generate()},a.retrieveHistory=function(){fetch("https://api.boba.watch/drinks/user/"+a.props.userId,{}).then(function(e){return e.json()}).then(function(e){L.recalculateMetrics(e),x()("Done!","Drink has been deleted","success"),a.generate()}).catch(function(e){console.log(e)})},a.generate=function(){var e=JSON.parse(localStorage.getItem("drinksList"));e=e.map(function(e){return JSON.parse(localStorage.getItem(e))});var t=0,n=e.map(function(e,n){return t+=e.price,r.a.createElement(_,{key:e.id,data:e,retrieveHistory:a.retrieveHistory,accessToken:a.props.accessToken})});a.setState({drinks:n,sum:t})},a.state={drinks:[r.a.createElement(g.k,{variant:"h3",key:1},"No Drinks")],sum:0},0===a.props.accessToken&&(window.location.href=window.origin.toString()),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"history-page"},r.a.createElement(g.k,{variant:"h3"}," Monthly Spending"),r.a.createElement("div",{id:"history-spending"},this.state.drinks),r.a.createElement(g.k,{variant:"h3",className:"history-total"}," ",r.a.createElement("span",null,"Monthly Total:")," $",F.toMoney(this.state.sum)," "))}}]),t}(n.Component),te=a(173),ae=a.n(te),ne=(a(435),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).successfulLogin=function(e,t){localStorage.getItem("userId")!==e&&(localStorage.clear(),localStorage.setItem("userId",e)),localStorage.setItem("avatar",t.picture.data.url),a.props.successfulLogin(e,t),fetch("https://api.boba.watch/drinks/user/".concat(e),{}).then(function(e){return e.json()}).then(function(n){a.storeData(n,e,t.accessToken)}).catch(function(e){x()("Whoops!","Error logging you in: ".concat(e),"error")})},a.storeData=function(e,t,n){L.recalculateMetrics(e),fetch("https://api.boba.watch/users/".concat(t,"/").concat(n)).then(function(e){return e.json()}).then(function(e){localStorage.setItem("userSpendMax",e.budget),localStorage.setItem("userDrinkMax",e.maxDrinks),localStorage.setItem("userPublic",!0),a.props.history.push("./dash")}).catch(function(e){x()("Error!","I had trouble getting your settings.","error")})},a.responseFacebook=function(e){G.a.post("https://api.boba.watch/users/login",{fbRes:e}).then(function(t){if(!t.data.hasOwnProperty("userId"))throw x()("Error!","Login Unsuccessful","error"),"Facebok Login Failed";a.setState(function(){return{userId:t.data.userId,accessToken:e.accessToken}},function(){a.successfulLogin(t.data.userId,e)})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-logo"}),r.a.createElement(g.k,{variant:"h1"},"boba watch"),r.a.createElement(ae.a,{appId:"333104870889201",autoLoad:!0,cookies:!0,fields:"name,email,picture",callback:this.responseFacebook}))}}]),t}(n.Component)),re=Object(m.f)(ne),oe=(a(436),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggleAdd=function(){a.setState(function(e){return{add:!e.add}}),a.update.current.update()},a.toggleUser=function(){a.setState(function(e){return{user:!e.user}}),a.update.current.update()},a.handleChange=function(e,t){a.setState({value:t})},a.successfulLogin=function(e,t){a.setState({userId:e,accessToken:t.accessToken,fbRes:t})},a.state={add:!1,user:!1,value:"",userId:1,accessToken:0,metrics:L.getDefaultMetrics()},a.update=r.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{basename:"",initialEntries:["/","/dash","/history"],initialIndex:0},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,strict:!0,path:"/",render:function(){return r.a.createElement(re,{successfulLogin:e.successfulLogin})}}),r.a.createElement(m.b,{strict:!0,path:"/:page",render:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page"},r.a.createElement("img",{src:localStorage.getItem("avatar"),alt:"user-settings",className:"avatar-button",onClick:e.toggleUser}),r.a.createElement(m.b,{exact:!0,path:"/dash",render:function(){return r.a.createElement(O,{userId:e.state.userId,accessToken:e.state.accessToken,metrics:e,ref:e.update})}}),r.a.createElement(m.b,{exact:!0,path:"/history",render:function(){return r.a.createElement(ee,{accessToken:e.state.accessToken,userId:e.state.userId,ref:e.update})}})),r.a.createElement(g.g,{open:e.state.add},r.a.createElement("div",null,r.a.createElement(B,{accessToken:e.state.accessToken,userId:e.state.userId,close:e.toggleAdd}))),r.a.createElement(g.g,{open:e.state.user},r.a.createElement("div",null,r.a.createElement($,{accessToken:e.state.accessToken,userId:e.state.userId,close:e.toggleUser}))),r.a.createElement(g.a,{value:e.state.value,onChange:e.handleChange,className:"bottom-nav"},r.a.createElement(g.b,{label:"Dashboard",value:"dash",component:h.a,to:"/dash",icon:r.a.createElement(b.a,null)}),r.a.createElement(g.b,{value:"add",disableRipple:!0,onClick:e.toggleAdd,onClose:e.refocus,icon:r.a.createElement("div",{className:"center-fab"}," ",r.a.createElement(E.a,{style:{fontSize:50}}))}),r.a.createElement(g.b,{label:"Spending",value:"history",component:h.a,to:"/history",icon:r.a.createElement(y.a,null)})))}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(re,{successfulLogin:e.successfulLogin})}})))}}]),t}(n.Component)),se=Object(c.createMuiTheme)({overrides:{MuiButton:{text:{backgroundColor:"#F68080",borderRadius:3,border:0,color:"white",height:30,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",fontFamily:"Poppins",fontWeight:700,fontSize:14}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}}},palette:{primary:{main:"#F68080",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF",contrastText:"#F68080"}},typography:{useNextVariants:!0,h1:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:44,marginBottom:20},h2:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:48,margin:0},h3:{fontFamily:"Poppins",fontWeight:700,color:"#F68080",fontSize:24,marginBottom:"16px"},h4:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:24},h5:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:18},h6:{fontFamily:"Poppins",color:"#F68080",fontSize:12}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(c.MuiThemeProvider,{theme:se},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[243,1,2]]]);
//# sourceMappingURL=main.bbc5d4d3.chunk.js.map