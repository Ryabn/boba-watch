(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,a){},364:function(e,t,a){e.exports=a(688)},369:function(e,t,a){},549:function(e,t,a){},663:function(e,t,a){},682:function(e,t,a){},688:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),c=a.n(o),i=(a(369),a(34)),l=a(35),s=a(37),d=a(36),p=a(38),u=a(118),m=a(57),h=a(20),f=a(21),g=a(267),v=a.n(g),E=a(268),b=a.n(E),y=a(269),k=a.n(y),O=a(119),j=(a(549),[{name:"Left",value:38,fill:"#cccccc"},{name:"Used",value:64}]),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard-page"},r.a.createElement(h.f,{variant:"h4"},"Monthly Spending"),r.a.createElement(h.c,{className:"chart-holder"},r.a.createElement(O.c,{height:"100%",width:"100%"},r.a.createElement(O.b,{width:730,height:250},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"10%",stopColor:"#2DA08E",stopOpacity:1}),r.a.createElement("stop",{offset:"90%",stopColor:"#aaFF88",stopOpacity:1}))),r.a.createElement(O.a,{data:j,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:70,outerRadius:100,fill:"url(#colorUv)",label:!1,startAngle:90,endAngle:450,paddingAngle:2}),r.a.createElement("svg",{viewBox:"0 0 500 500"},r.a.createElement("path",{id:"curve",d:"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97",fillOpacity:"0"}),r.a.createElement("text",{width:"500"},r.a.createElement("textPath",{href:"#curve"},"Total Amount Spent $",4.23)))))))}}]),t}(n.Component),F=(a(663),a(270)),N=a(173),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date},a.handleDateChange=function(e){a.setState({selectedDate:e})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-modal"},r.a.createElement(h.f,{variant:"h5"},"Add a purchase"),r.a.createElement(h.e,{id:"location-value",className:"add-input",label:"Location"}),r.a.createElement(h.e,{id:"location-value",className:"add-input",label:"Drink name"}),r.a.createElement(h.e,{id:"location-value",className:"add-input",label:"Date"}),r.a.createElement(N.b,{utils:F.a},r.a.createElement(N.a,{label:"Date picker",value:this.state.selectedDate,onChange:this.handleDateChange})),r.a.createElement(h.e,{id:"location-value",className:"add-input",label:"Description"}))}}]),t}(n.Component),x=a(114),S=a.n(x),A=a(265),D=a.n(A),B=(a(249),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.toggle=function(){a.setState(function(e){return{open:!e.open}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"history-drink-label",onClick:this.toggle},r.a.createElement("p",{className:"drink-place"},this.props.data.location.length>13?this.props.data.location.substr(0,10)+"...":this.props.data.location),r.a.createElement("p",{className:"drink-price"},"$",parseInt(this.props.data.price/100)+"."+(this.props.data.price%100<10?"0"+this.props.data.price%100:this.props.data.price%100)),r.a.createElement(D.a,null),r.a.createElement("p",{className:"drink-name"},this.props.data.name.length>13?this.props.data.name.substr(0,10)+"...":this.props.data.name),r.a.createElement("p",{className:"drink-time"},new Date(this.props.data.date).toDateString().substr(4))),r.a.createElement(S.a,{in:this.state.open},r.a.createElement("img",{alt:"drink",src:"https://images.pexels.com/photos/540533/pexels-photo-540533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),r.a.createElement("p",{className:"drink-description"},JSON.stringify(new Date(this.props.data.date)))),r.a.createElement("hr",{className:"thaman-color"}))}}]),t}(n.Component)),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={drinks:[r.a.createElement(h.f,{variant:"h3",key:1},"no u")]},a.componentDidMount=function(){a.retrieveHistory()},a.retrieveHistory=function(){fetch("http://35.235.110.247/drinks/user/1",{}).then(function(e){return e.json()}).then(function(e){a.generate(e)}).catch(function(e){console.log(e)})},a.generate=function(e){var t=e.map(function(e,t){return r.a.createElement(B,{key:t,data:e})});a.setState({drinks:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.drinks;return r.a.createElement("div",{className:"history-page"},r.a.createElement(h.f,{variant:"h3"}," Monthly Spending"),r.a.createElement("div",{id:"history-spending"},e),r.a.createElement(h.f,{variant:"h4"}," Monthly Total: "))}}]),t}(n.Component),z=(a(682),Object(f.createMuiTheme)({overrides:{MuiButton:{text:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",margin:"20px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}},MuiBottomNavigation:{root:{backgroundColor:"#FFAFA4"}},MuiBottomNavigationAction:{root:{color:"#000000"},iconOnly:{color:"#FF0000"},wrapper:{color:"#FFFFFF "}}},MuiFormControl:{root:{fontSize:10}},typography:{useNextVariants:!0,h3:{fontFamily:"Poppins",fontWeight:700,color:"#F68080",fontSize:24,marginBottom:"16px"},h4:{fontFamily:"Poppins",fontWeight:700,color:"white",fontSize:24},h5:{fontFamily:"Poppins",fontWeight:700,color:"black",fontSize:16},h6:{fontFamily:"Poppins",color:"#F68080",fontSize:12}}})),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={add:!1,user:!1,value:"dash"},a.toggleAdd=function(){a.setState(function(e){return{add:!e.add}})},a.toggleUser=function(){a.setState(function(e){return{add:!e.user}})},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.MuiThemeProvider,{theme:z},r.a.createElement(u.a,{basename:""},r.a.createElement("div",{className:"page"},r.a.createElement(m.a,{exact:!0,path:"/dash",component:w}),r.a.createElement(m.a,{path:"/history",component:M})),r.a.createElement(h.d,{open:this.state.add,onBackdropClick:this.toggleAdd},r.a.createElement("div",null,r.a.createElement(C,null))),r.a.createElement(h.d,{open:this.state.user,onBackdropClick:this.toggleUser},r.a.createElement("div",null,r.a.createElement(C,null))),r.a.createElement(h.a,{value:this.state.value,onChange:this.handleChange,className:"bottom-nav"},r.a.createElement(h.b,{label:"Dashboard",value:"dash",component:u.b,to:"/dash",icon:r.a.createElement(v.a,null)}),r.a.createElement(h.b,{value:"add",disableRipple:!0,onClick:this.toggleAdd,onClose:this.refocus,icon:r.a.createElement("div",{className:"center-fab"}," ",r.a.createElement(b.a,{style:{fontSize:50}}))}),r.a.createElement(h.b,{label:"Spending",value:"history",component:u.b,to:"/history",icon:r.a.createElement(k.a,null)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[364,1,2]]]);
//# sourceMappingURL=main.195aa4fb.chunk.js.map