(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){},240:function(e,t,a){e.exports=a(424)},245:function(e,t,a){},258:function(e,t,a){},375:function(e,t,a){},402:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o),c=(a(245),a(21)),i=a(22),l=a(24),u=a(23),d=a(25),m=a(43),p=a(61),h=a(6),g=a(18),f=a(166),E=a.n(f),b=a(167),v=a.n(b),k=a(168),y=a.n(k),M=a(52);var F={toMoney:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?parseInt(e/100):parseInt(e/100)+"."+(e%100<10?"0"+e%100:e%100)}};function S(){for(var e={numDrinks:0,totalCost:0,drinkAvg:0,drinks:Array(7)},t=0;t<7;t++)e.drinks[t]=Array(24).fill(0);return e}function I(e,t){t.numDrinks+=1,t.totalCost+=e.price,t.drinkAvg=t.totalCost/t.numDrinks;var a=new Date(e.date);t.drinks[a.getDay()][a.getHours()-1]+=1}var N={getDefaultMetrics:S,liveReload:function(e,t){var a=[];return e.forEach(function(e){localStorage.hasOwnProperty(e.id)||(I(e,t),a.push(e.id),localStorage.setItem(e.id,JSON.stringify(e)))}),localStorage.setItem("drinksList",JSON.stringify(a)),t},recalculateMetrics:function(e){var t=[],a=S();return e.forEach(function(e){I(e,a),t.push(e.id),localStorage.setItem(e.id,JSON.stringify(e))}),localStorage.setItem("drinksList",JSON.stringify(t)),a},updateMetrics:I},O=a(16),w=a.n(O),D=(a(258),a(259),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),j=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"],T={title:"$3253",size:0,color:"#FFFFFF",animation:!0,children:[{title:"Progress",size:75,color:"#32de44",animation:!0,children:[{title:"Padding",size:0,color:"#FFFFFF",animation:!1}]},{title:"Until Limit",size:25,color:"#F4F4F4",animation:!0}]};function x(e){var t=[],a=[];e.drinks.forEach(function(e){a.push(Math.max.apply(null,e))});var n=Math.max.apply(null,a);return e.drinks.forEach(function(e,a){e.forEach(function(e,r){t.push({x:D[a],y:j[r],color:"rgba(246, 128, 128, ".concat(0===e?.1:e/n,")")})})}),t}var C=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateInfo=function(){fetch("https://api.boba.watch/drinks/user/"+a.props.userid,{}).then(function(e){return e.json()}).then(function(e){N.recalculateMetrics(e)}).catch(function(e){w()("Error!","Couldn't update data. Try again later! \nError: ".concat(e),"error")})},0===a.props.accessToken&&(window.location.href=window.origin.toString());var n=JSON.parse(localStorage.getItem("metrics"));return a.state={totalMoney:n.totalCost,totalDrinks:n.numDrinks,drinkPercentage:parseInt(n.numDrinks/15*100),userDrinkTotal:15,userCostTotal:75,monthSpendData:[{x:1,y:1},{x:2,y:2},{x:3,y:2}],time:x(n)},fetch("https://api.boba.watch/users/".concat(a.props.userId,"/").concat(a.props.accessToken)).then(function(e){return e.json()}).then(function(e){a.setState({userCostTotal:null==e.budget?100:e.budget,userDrinkTotal:null==e.maxDrinks?15:e.maxDrinks})}).catch(function(e){w()("Error!","I had trouble getting your settings.","error")}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=window.innerWidth-40;return r.a.createElement("div",{className:"dashboard-page"},r.a.createElement(h.g,{variant:"h4"},"Monthly Spending"),r.a.createElement(h.d,{className:"chart-holder"},r.a.createElement("div",{className:"chard-holder-description"},"MONTHLY LIMIT: $",this.state.userCostTotal,r.a.createElement("br",null),r.a.createElement("span",null,"$",F.toMoney(this.state.totalMoney,this.state.totalMoney/1e4>1)),r.a.createElement("br",null),"REMAINING: $",F.toMoney(100*this.state.userCostTotal-this.state.totalMoney)),r.a.createElement(M.b,{height:e-45,width:e-45,data:T,padAngle:.06,colorType:"literal"})),r.a.createElement("div",{className:"stats-holder"},r.a.createElement(h.d,{className:"month-total-money"},r.a.createElement("p",null,"This is how much you\u2019ve spent on boba this month:"),r.a.createElement(h.g,{variant:"h2"},"$",F.toMoney(this.state.totalMoney,this.state.totalMoney/1e4>1))),r.a.createElement(h.d,{className:"month-drink-limit"},r.a.createElement(h.g,{variant:"h3"},this.state.drinkPercentage,"%"),r.a.createElement("p",null,"to your max number of drinks this month")),r.a.createElement(h.d,{className:"month-total-drinks"},r.a.createElement(h.g,{variant:"h2"},this.state.totalDrinks),r.a.createElement("p",null,"drinks this month"))),r.a.createElement(h.d,{className:"daily-chart"},r.a.createElement(M.d,{xType:"ordinal",yType:"ordinal",margin:60,width:e,height:1.8*e},r.a.createElement(M.c,{orientation:"top"}),r.a.createElement(M.e,null),r.a.createElement(M.a,{colorType:"literal",style:{stroke:"white",strokeWidth:"2px",rectStyle:{rx:10,ry:10}},data:this.state.time}))))}}]),t}(n.Component),A=(a(375),a(169)),P=a(117),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date},a.handleDateChange=function(e){a.setState({selectedDate:e})},a.update=function(){fetch("https://api.boba.watch/drinks/user/"+a.props.userId,{}).then(function(e){return e.json()}).then(function(e){N.recalculateMetrics(e),w()("Done!","Drink has been added","success"),a.props.toggleSelf()}).catch(function(e){w()("Error!","Something Went Wrong: ".concat(e),"error")})},a.saveDrink=function(){var e={drink:{name:document.getElementById("name-value").value,location:document.getElementById("location-value").value,price:parseInt(100*document.getElementById("price-value").value),date:new Date(document.getElementById("date-value").value).toISOString(),photo:"",userId:parseInt(a.props.userId),description:document.getElementById("description-value").value}};""===document.getElementById("price-value").value||isNaN(parseInt(document.getElementById("price-value").value))||0===parseInt(document.getElementById("price-value").value)?w()("Error!","Please enter a price to add drink","error"):fetch("https://api.boba.watch/drinks/"+a.props.accessToken,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a.update()}).catch(function(e){w()("Error!","Couldn't update drinks. Error: ".concat(e),"error")})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-modal"},r.a.createElement(h.g,{variant:"h5"},"Add a purchase"),r.a.createElement(h.f,{id:"location-value",className:"add-input",label:"Location"}),r.a.createElement(h.f,{id:"name-value",className:"add-input",margin:"dense",label:"Drink name"}),r.a.createElement(h.f,{id:"price-value",className:"add-input",margin:"dense",label:"Price"}),r.a.createElement(P.b,{utils:A.a},r.a.createElement(P.a,{id:"date-value",className:"add-input",margin:"dense",format:"M/d/yyyy h:mm a",label:"Date picker",value:this.state.selectedDate,onChange:this.handleDateChange})),r.a.createElement(h.f,{id:"description-value",className:"add-input",label:"Description"}),r.a.createElement("div",{className:"add-button-holder"},r.a.createElement(h.c,{onClick:this.saveDrink,className:"add-button"},"ADD")))}}]),t}(n.Component),B=Object(m.f)(L),J=a(162),W=(a(402),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userSpendMax:100,userDrinkMax:15},a.updateUser=function(){var e={user:{budget:parseInt(a.state.userSpendMax),maxDrinks:parseInt(a.state.userDrinkMax)}};fetch("https://api.boba.watch/users/".concat(a.props.userId,"/").concat(a.props.accessToken),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){w()("Success!","Updated your settings successfully.","success")}).catch(function(e){w()("Error!","Error updating data","error")})},a.handleChange=function(e){return function(t){a.setState(Object(J.a)({},e,t.target.value))}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.boba.watch/users/".concat(this.props.userId,"/").concat(this.props.accessToken)).then(function(e){return e.json()}).then(function(t){e.setState({userSpendMax:null==t.budget?100:t.budget,userDrinkMax:null==t.maxDrinks?15:t.maxDrinks})}).catch(function(e){w()("Error!","I had trouble getting your settings.","error")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-modal"},r.a.createElement("img",{src:localStorage.getItem("avatar"),className:"user-avatar",alt:"user"}),r.a.createElement(h.g,{variant:"h5"},"User settings"),r.a.createElement(h.f,{id:"monthly-spending-input",className:"user-input",variant:"outlined",margin:"normal",onChange:this.handleChange("userSpendMax"),value:this.state.userSpendMax,label:"Monthly Spending Limit"}),r.a.createElement(h.f,{id:"monthly-drinking-limit",className:"user-input",margin:"dense",variant:"outlined",onChange:this.handleChange("userDrinkMax"),value:this.state.userDrinkMax,label:"Max of drinks / month"}),r.a.createElement("div",{className:"update-button-holder"},r.a.createElement(h.c,{className:"update-button",onClick:this.updateUser},"UPDATE")))}}]),t}(n.Component)),z=a(81),U=a.n(z),$=a(80),R=a.n($),H=a(164),G=a.n(H),V=a(163),Y=a.n(V),q=(a(157),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,add:!1},a.toggle=function(){a.setState(function(e){return{open:!e.open}})},a.toggleAdd=function(){a.setState(function(e){return{add:!e.add}})},a.hasImage=function(){if(""!==a.props.data.photo.trim()&&"asdf"!==a.props.data.photo)return r.a.createElement("img",{alt:"drink",src:a.props.data.photo})},a.delete=function(){U.a.post("https://api.boba.watch/drinks/delete/"+a.props.data.id+"/"+a.props.accessToken).then(function(e){a.props.getNewInfo()}).catch(function(e){w()("Error!","Couldn't delete your drink. Try again later!","error")})},a.edit=function(){a.toggleAdd(a.delete)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"thaman-color"},r.a.createElement("div",{className:"history-drink-label",onClick:this.toggle},r.a.createElement("p",{className:"drink-place"},this.props.data.location.length>13?this.props.data.location.substr(0,10)+"...":this.props.data.location),r.a.createElement("p",{className:"drink-price"},"$",F.toMoney(this.props.data.price)),r.a.createElement("div",{className:"expand-icon"},this.state.open?r.a.createElement(Y.a,null):r.a.createElement(G.a,null)),r.a.createElement("p",{className:"drink-name"},this.props.data.name.length>13?this.props.data.name.substr(0,10)+"...":this.props.data.name),r.a.createElement("p",{className:"drink-time"},new Date(this.props.data.date).toDateString().substr(4))),r.a.createElement(R.a,{in:this.state.open},this.hasImage(),r.a.createElement("p",{className:"drink-description"},this.props.data.description,JSON.stringify(new Date(this.props.data.date))),r.a.createElement("div",{className:"drink-options"},r.a.createElement(h.c,{onClick:this.delete},"DELETE"))))}}]),t}(n.Component)),K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).retrieveHistory=function(){fetch("https://api.boba.watch/drinks/user/"+a.props.userId,{}).then(function(e){return e.json()}).then(function(e){N.recalculateMetrics(e),w()("Done!","Drink has been deleted","success"),a.generate()}).catch(function(e){console.log(e)})},a.generate=function(){var e=JSON.parse(localStorage.getItem("drinksList"));e=e.map(function(e){return JSON.parse(localStorage.getItem(e))});var t=0,n=e.map(function(e,n){return t+=e.price,r.a.createElement(q,{key:e.id,data:e,getNewInfo:a.retrieveHistory,accessToken:a.props.accessToken})});a.setState({drinks:n,sum:t})},a.state={drinks:[r.a.createElement(h.g,{variant:"h3",key:1},"No Drinks")],sum:0},0===a.props.accessToken&&(window.location.href=window.origin.toString()),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.generate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"history-page"},r.a.createElement(h.g,{variant:"h3"}," Monthly Spending"),r.a.createElement("div",{id:"history-spending"},this.state.drinks),r.a.createElement(h.g,{variant:"h3",className:"history-total"}," ",r.a.createElement("span",null,"Monthly Total:")," $",F.toMoney(this.state.sum)," "))}}]),t}(n.Component),Q=a(165),X=a.n(Q),Z=(a(422),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).successfulLogin=function(e,t){a.props.successfulLogin(e,t),fetch("https://api.boba.watch/drinks/user/"+e,{}).then(function(e){return e.json()}).then(function(n){a.storeData(n,e,t.picture.data.url)}).catch(function(e){console.log("Error logging in: ",e)})},a.storeData=function(e,t,n){N.recalculateMetrics(e),localStorage.getItem("userId")!==t&&(localStorage.clear(),localStorage.setItem("userId",t)),localStorage.setItem("avatar",n),localStorage.setItem("metrics",JSON.stringify(N.recalculateMetrics(e))),a.props.history.push("./dash")},a.responseFacebook=function(e){U.a.post("https://api.boba.watch/users/login",{fbRes:e}).then(function(t){if(!t.data.hasOwnProperty("userId"))throw w()("Error!","Login Unsuccessful","error"),"Facebok Login Failed";a.setState(function(){return{userId:t.data.userId,accessToken:e.accessToken}},function(){a.successfulLogin(t.data.userId,e)})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-logo"}),r.a.createElement(h.g,{variant:"h1"},"boba watch"),r.a.createElement(X.a,{appId:"333104870889201",autoLoad:!0,cookies:!0,fields:"name,email,picture",callback:this.responseFacebook}))}}]),t}(n.Component)),_=Object(m.f)(Z),ee=Object(g.createMuiTheme)({overrides:{MuiButton:{text:{backgroundColor:"#F68080",borderRadius:3,border:0,color:"white",height:30,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",fontFamily:"Poppins",fontWeight:700,fontSize:14}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}}},palette:{primary:{main:"#F68080",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF",contrastText:"#F68080"}},typography:{useNextVariants:!0,h1:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:44,marginBottom:20},h2:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:48,margin:0},h3:{fontFamily:"Poppins",fontWeight:700,color:"#F68080",fontSize:24,marginBottom:"16px"},h4:{fontFamily:"Poppins",fontWeight:700,color:"#FFFFFF",fontSize:24},h5:{fontFamily:"Poppins",fontWeight:700,color:"#000000",fontSize:18},h6:{fontFamily:"Poppins",color:"#F68080",fontSize:12}}}),te=(a(423),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleAdd=function(){a.setState(function(e){return{add:!e.add}})},a.toggleUser=function(){a.setState(function(e){return{user:!e.user}})},a.handleChange=function(e,t){a.setState({value:t})},a.successfulLogin=function(e,t){a.setState({userId:e,accessToken:t.accessToken,fbRes:t})},a.state={add:!1,user:!1,value:"",userId:1,accessToken:0,metrics:N.getDefaultMetrics()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.MuiThemeProvider,{theme:ee},r.a.createElement(m.a,{basename:"",initialEntries:["/","/dash","/history"],initialIndex:0},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,strict:!0,path:"/",render:function(){return r.a.createElement(_,{successfulLogin:e.successfulLogin})}}),r.a.createElement(m.b,{strict:!0,path:"/:page",render:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page"},r.a.createElement("img",{src:localStorage.getItem("avatar"),alt:"user-settings",className:"avatar-button",onClick:e.toggleUser}),r.a.createElement(m.b,{exact:!0,path:"/dash",render:function(){return r.a.createElement(C,{userId:e.state.userId,accessToken:e.state.accessToken,metrics:e})}}),r.a.createElement(m.b,{exact:!0,path:"/history",render:function(){return r.a.createElement(K,{accessToken:e.state.accessToken,userId:e.state.userId})}})),r.a.createElement(h.e,{open:e.state.add,onBackdropClick:e.toggleAdd},r.a.createElement("div",null,r.a.createElement(B,{accessToken:e.state.accessToken,userId:e.state.userId,toggleSelf:e.toggleAdd}))),r.a.createElement(h.e,{open:e.state.user,onBackdropClick:e.toggleUser},r.a.createElement("div",null,r.a.createElement(W,{accessToken:e.state.accessToken,userId:e.state.userId}))),r.a.createElement(h.a,{value:e.state.value,onChange:e.handleChange,className:"bottom-nav"},r.a.createElement(h.b,{label:"Dashboard",value:"dash",component:p.a,to:"/dash",icon:r.a.createElement(E.a,null)}),r.a.createElement(h.b,{value:"add",disableRipple:!0,onClick:e.toggleAdd,onClose:e.refocus,icon:r.a.createElement("div",{className:"center-fab"}," ",r.a.createElement(v.a,{style:{fontSize:50}}))}),r.a.createElement(h.b,{label:"Spending",value:"history",component:p.a,to:"/history",icon:r.a.createElement(y.a,null)})))}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(_,{successfulLogin:e.successfulLogin})}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[240,1,2]]]);
//# sourceMappingURL=main.969e077c.chunk.js.map