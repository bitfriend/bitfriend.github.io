(this["webpackJsonpclosecross-trades-react"]=this["webpackJsonpclosecross-trades-react"]||[]).push([[0],{1903:function(e,t,a){e.exports=a.p+"static/media/speed.5298b72d.png"},1905:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(21),o=a.n(s),i=(a(266),a(31)),l=a(32),c=a(33),p=a(34),m=a(246),d=a(1949),u=(a(267),a(11)),h=a(1957),g=a(65),f=a(41),b=a(1907),E=a(1937),v=a(1938),y=a(1952),C=a(1939),k=a(1940),x=a(1941),O=a(105),w=a(48),S=Object(u.a)((function(e){return{contained:{backgroundColor:"#fff",color:"#111112"},label:{fontSize:e.spacing(1.5),lineHeight:e.spacing(2)+"px",fontWeight:"500",whiteSpace:"nowrap"}}}))(b.a),j=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={mode:"training",showAllChecked:!1,cryptoChecked:!0,commoditiesChecked:!1,stockChecked:!0,indexChecked:!1,currencyChecked:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{position:"fixed",className:this.props.classes.root},r.a.createElement(v.a,null,r.a.createElement(y.a,{flexGrow:1},r.a.createElement(C.a,{edge:"start",className:this.props.classes.button,onClick:this.props.onMenuClicked},r.a.createElement("img",{alt:"",src:a(273),className:this.props.classes.icon})),r.a.createElement(k.a,null,r.a.createElement(S,{className:this.props.classes.groupButton,onClick:function(){return e.setState({mode:"training"})},variant:"training"===this.state.mode&&"contained"},"Training Mode"),r.a.createElement(S,{className:this.props.classes.groupButton,onClick:function(){return e.setState({mode:"live"})},variant:"live"===this.state.mode&&"contained"},"Live Mode"))),r.a.createElement(y.a,{display:{xs:"none",md:"block"}},r.a.createElement(S,{className:this.props.classes.button,onClick:function(){return e.setState({showAllChecked:!e.state.showAllChecked})},variant:this.state.showAllChecked?"contained":"outlined"},"Show All"),r.a.createElement(S,{className:this.props.classes.button,onClick:function(){return e.setState({cryptoChecked:!e.state.cryptoChecked})},variant:this.state.cryptoChecked?"contained":"outlined"},"Crypto"),r.a.createElement(S,{className:this.props.classes.button,onClick:function(){return e.setState({commoditiesChecked:!e.state.commoditiesChecked})},variant:this.state.commoditiesChecked?"contained":"outlined"},"Commodities"),r.a.createElement(S,{className:this.props.classes.button,onClick:function(){return e.setState({stockChecked:!e.state.stockChecked})},variant:this.state.stockChecked?"contained":"outlined"},"Stock"),r.a.createElement(S,{className:this.props.classes.button,onClick:function(){return e.setState({indexChecked:!e.state.indexChecked})},variant:this.state.indexChecked?"contained":"outlined"},"Index"),r.a.createElement(S,{onClick:function(){return e.setState({currencyChecked:!e.state.currencyChecked})},variant:this.state.currencyChecked?"contained":"outlined"},"Currency")),r.a.createElement(y.a,{textAlign:"right",flexGrow:1,display:{xs:"none",sm:"block"}},r.a.createElement(C.a,{edge:"start",className:this.props.classes.button},r.a.createElement(O.a,{fontSize:this.props.theme.spacing(3),opacity:.6})),r.a.createElement(C.a,{edge:"start",className:this.props.classes.button},r.a.createElement(O.b,{fontSize:this.props.theme.spacing(3),opacity:.6})),r.a.createElement(C.a,{edge:"start",className:this.props.classes.button},r.a.createElement(w.d,{fontSize:this.props.theme.spacing(3),opacity:.6}))),r.a.createElement(x.a,{badgeContent:12,color:"primary",classes:{anchorOriginTopRightRectangle:this.props.classes.badgeAnchor,colorPrimary:this.props.classes.badgeColor,colorSecondary:this.props.classes.badgeColor,colorError:this.props.classes.badgeColor}},r.a.createElement(C.a,{edge:"start"},r.a.createElement("img",{alt:"",src:a(275),className:this.props.classes.icon})))))}}]),n}(n.PureComponent),A=Object(g.a)(Object(u.a)((function(e){return{root:{zIndex:e.zIndex.drawer+1,backgroundColor:"#272A2D",borderBottomColor:"#9AC802",borderBottomWidth:"2px",borderBottomStyle:"solid"},button:{marginRight:e.spacing(1)},icon:{width:e.spacing(4),height:e.spacing(4)},groupButton:Object(f.a)({},e.breakpoints.down("md"),{padding:e.spacing(.75,1)}),badgeAnchor:{transform:"scale(1) translate(-10%, 10%)"},badgeColor:{backgroundColor:"#1C9DE8"}}}),{withTheme:!0}),Object(h.a)())(j),N=a(1947),I=a(1958),T=a(1955),D=a(1948),z=a(1942),H=a(1943),W=a(248),F=a(86),M=a(39),R=a.n(M),B=a(76),G=a.n(B),P=a(43),L=a.n(P),U=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).ascendingGradient=G()(),n.descendingGradient=G()(),n.end=Math.round((new Date).getTime()/1e3),n.start=Math.round(R()(1e3*n.end).add(-3,"months").toDate().getTime()/1e3),n.state={series:n.generateSeries(n.start,n.end,14400)},n}return Object(l.a)(a,[{key:"generateSeries",value:function(e,t,a){for(var n=[],r=e;r<t;r+=a)n.push({time:r,value:L.a.datatype.number({min:100,max:900})});return n}},{key:"handleSeries",value:function(){for(var e=[],t=Object(F.cloneDeep)(this.state.series),a=0;a<t.length;a++){var n=!1;switch(this.props.duration){case"day":n=t[a].time>=this.end-86400;break;case"week":n=t[a].time>=this.end-604800;break;case"month":var r=Math.round(R()(1e3*this.end).add(-1,"month").toDate().getTime()/1e3);n=t[a].time>=r;break;case"all":n=!0;break;default:n=!1}n&&e.push(t[a])}var s=[];if(e.length>1){for(var o=0,i=-1,l=0;l<e.length-1;l++){if(e[l].value<e[l+1].value){o=l,i=0;break}if(e[l].value>e[l+1].value){o=l,i=1;break}}if(-1===i);else{for(var c=0;c<o;c++)e[c].value0=e[c].value;for(var p=o;p<e.length-1;p++)e[p].value<e[p+1].value?(p===o&&s.push(0),e[p]["value".concat(s.length-1)]=e[p].value,0!==i&&(e[p]["value".concat(s.length)]=e[p].value,s.push(0),i=0)):e[p].value>e[p+1].value?(p===o&&s.push(1),e[p]["value".concat(s.length-1)]=e[p].value,1!==i&&(e[p]["value".concat(s.length)]=e[p].value,s.push(1),i=1)):e[p]["value".concat(s.length-1)]=e[p].value;e[e.length-1]["value".concat(s.length-1)]=e[e.length-1].value}}return{result:e,directions:s}}},{key:"render",value:function(){for(var e=this,t=this.handleSeries(),a=t.result,n=t.directions,s=[],o=0;o<n.length;o++)s.push("value".concat(o));return r.a.createElement(z.a,{height:this.props.height},r.a.createElement(H.a,{data:a},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:this.ascendingGradient,x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"0%",stopColor:"#9AC802",stopOpacity:.5}),r.a.createElement("stop",{offset:"100%",stopColor:"#9AC802",stopOpacity:0})),r.a.createElement("linearGradient",{id:this.descendingGradient,x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"0%",stopColor:"#FA4F4F",stopOpacity:.5}),r.a.createElement("stop",{offset:"100%",stopColor:"#FA4F4F",stopOpacity:0}))),0===n.length?r.a.createElement(W.a,{type:"monotone",dataKey:"value",stroke:"#9AC802",fill:"url(#".concat(this.ascendingGradient,")")}):s.map((function(t,a){return r.a.createElement(W.a,{key:a,type:"monotone",dataKey:t,stroke:n[a]%2===0?"#9AC802":"#FA4F4F",fill:n[a]%2===0?"url(#".concat(e.ascendingGradient,")"):"url(#".concat(e.descendingGradient,")")})}))))}}]),a}(n.PureComponent),K=a(244);a.n(K)()(R.a);var $=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function J(e){return $.format(e).replace(/^(\D+)/,"$1 ")}var Y=Object(u.a)({root:{backgroundColor:"#272A2D"}})(N.a),q=Object(u.a)((function(e){return{root:{height:e.spacing(3),borderRadius:e.spacing(.5)},colorPrimary:{backgroundColor:"#9AC802",color:"#181B1C","&:hover":{backgroundColor:"#9AC802"},"&:focus":{backgroundColor:"#9AC802"}},label:{paddingLeft:e.spacing(.75),paddingRight:e.spacing(.75)}}}))(I.a),Q=Object(u.a)((function(e){return{root:{width:e.spacing(8)},contained:{backgroundColor:"#9AC802",color:"#111112","&:hover":{backgroundColor:"#9AC802"},"&:focus":{backgroundColor:"#9AC802"}},outlined:{borderColor:"#9AC802",color:"#9AC802"},label:{fontSize:e.spacing(1.125),lineHeight:e.spacing(1.25)+"px",fontWeight:"500",whiteSpace:"nowrap"}}}))(b.a),V=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleDurationChange=function(t){return function(){e.props.onDurationChanged&&e.props.onDurationChanged(t)}},e}return Object(l.a)(a,[{key:"render",value:function(){return"xs"===this.props.width||"sm"===this.props.width?r.a.createElement(T.a,{className:this.props.classes.root,variant:"temporary",classes:{paper:this.props.classes.paper},anchor:"left",open:this.props.open,onClose:this.props.onClose},r.a.createElement(y.a,{mx:2},this.renderOpenTrades(),r.a.createElement(Y,null),this.renderTradingHistory(),r.a.createElement(Y,null),this.renderTrainingWallet())):r.a.createElement(T.a,{className:this.props.classes.root,variant:"permanent",classes:{paper:this.props.classes.paper}},r.a.createElement(v.a,null),r.a.createElement(y.a,{mx:2},this.renderOpenTrades(),r.a.createElement(Y,null),this.renderTradingHistory(),r.a.createElement(Y,null),this.renderTrainingWallet()))}},{key:"renderOpenTrades",value:function(){return r.a.createElement(y.a,{width:"100%",mt:4,mb:3},r.a.createElement(y.a,{display:"flex",alignItems:"center",mb:2.5},r.a.createElement(w.c,{color:"#9AC802"}),r.a.createElement(y.a,{mx:2,className:this.props.classes.title},"OPEN TRADES"),r.a.createElement(w.b,{color:"#9AC802"})),r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{className:this.props.classes.label},"Trades in progress")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{className:this.props.classes.label},"Closest outcome")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{mt:.5,className:this.props.classes.value},"15")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{mt:.5,fontWeight:"500",fontSize:this.props.theme.spacing(2.5),lineHeight:this.props.theme.spacing(3)+"px"},"25m 40s")),r.a.createElement(D.a,{item:!0,xs:6}),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{mt:.5,fontSize:this.props.theme.spacing(1.5),lineHeight:this.props.theme.spacing(2)+"px"},"ETH 48 hour"))))}},{key:"renderTradingHistory",value:function(){return r.a.createElement(y.a,{width:"100%",mt:4,mb:3},r.a.createElement(y.a,{display:"flex",alignItems:"center",mb:2.5},r.a.createElement(w.e,{color:"#9AC802"}),r.a.createElement(y.a,{mx:2,className:this.props.classes.title},"TRADING HISTORY"),r.a.createElement(w.b,{color:"#9AC802"})),r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2},r.a.createElement(q,{label:"Day",variant:"day"===this.props.duration?"default":"outlined",size:"medium",color:"day"===this.props.duration?"primary":"default",onClick:this.handleDurationChange("day")}),r.a.createElement(q,{label:"Week",variant:"week"===this.props.duration?"default":"outlined",size:"medium",color:"week"===this.props.duration?"primary":"default",onClick:this.handleDurationChange("week")}),r.a.createElement(q,{label:"Month",variant:"month"===this.props.duration?"default":"outlined",size:"medium",color:"month"===this.props.duration?"primary":"default",onClick:this.handleDurationChange("month")}),r.a.createElement(q,{label:"All",variant:"all"===this.props.duration?"default":"outlined",size:"medium",color:"all"===this.props.duration?"primary":"default",onClick:this.handleDurationChange("all")})),r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{className:this.props.classes.label},"Total trades")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{className:this.props.classes.label},"Profit")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{mt:.5,className:this.props.classes.value},"245")),r.a.createElement(D.a,{item:!0,xs:6},r.a.createElement(y.a,{mt:.5,className:this.props.classes.value},"+21.5%"))),r.a.createElement(y.a,{mt:2.5},r.a.createElement(U,{height:this.props.theme.spacing(10),duration:this.props.duration})))}},{key:"renderTrainingWallet",value:function(){return r.a.createElement(y.a,{width:"100%",mt:4,mb:5},r.a.createElement(y.a,{display:"flex",alignItems:"center"},r.a.createElement(w.f,{color:"#9AC802"}),r.a.createElement(y.a,{mx:2,className:this.props.classes.title},"TRAINING WALLET"),r.a.createElement(w.b,{color:"#9AC802"})),r.a.createElement(y.a,{mt:2.5,className:this.props.classes.label},"Trading"),r.a.createElement(y.a,{display:"flex",alignItems:"center"},r.a.createElement(y.a,{flex:1,mt:.5,className:this.props.classes.value},J(34752)),r.a.createElement(Q,{variant:"outlined"},"TOP UP")),r.a.createElement(y.a,{mt:2,className:this.props.classes.label},"Holding"),r.a.createElement(y.a,{display:"flex",alignItems:"center"},r.a.createElement(y.a,{flex:1,mt:.5,fontFamily:"Roboto Mono",fontSize:this.props.theme.spacing(1.75),lineHeight:this.props.theme.spacing(2.5)+"px"},J(4102)),r.a.createElement(Q,{variant:"contained"},"BUY DAI")))}}]),a}(n.PureComponent),X=Object(g.a)(Object(u.a)((function(e){return{root:{width:260,flexShrink:0},paper:{width:260,backgroundColor:"#181B1C"},title:{flex:1,color:"#9AC802",fontSize:e.spacing(1.5),lineHeight:e.spacing(2.25)+"px"},label:{color:"#666E79",fontSize:e.spacing(1.125),lineHeight:e.spacing(1.5)+"px"},value:{fontFamily:"Roboto Mono",fontWeight:"500",fontSize:e.spacing(2.25),lineHeight:e.spacing(3)+"px"}}}),{withTheme:!0}),Object(h.a)())(V),Z=a(1950),_=a(1956),ee=a(242),te=a(243),ae=a(234),ne=a(114),re=a(245),se=a.n(re),oe=function(e){return R()(1e3*e).format("MMM DD")},ie=function(e){return se()(e).format("0,0")},le=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).gradient=G()(),n.end=Math.round((new Date).getTime()/1e3),n.start=Math.round(R()(1e3*n.end).add(-3,"months").toDate().getTime()/1e3),n.state={series:n.generateSeries(n.start,n.end,14400)},n}return Object(l.a)(a,[{key:"generateSeries",value:function(e,t,a){for(var n=[],r=e;r<t;r+=a)n.push({time:r,value:L.a.datatype.number({min:100,max:900})});return n}},{key:"handleSeries",value:function(){for(var e=[],t=Object(F.cloneDeep)(this.state.series),a=0;a<t.length;a++){var n=!1;switch(this.props.duration){case"day":n=t[a].time>=this.end-86400;break;case"week":n=t[a].time>=this.end-604800;break;case"month":var r=Math.round(R()(1e3*this.end).add(-1,"month").toDate().getTime()/1e3);n=t[a].time>=r;break;case"all":n=!0;break;default:n=!1}n&&e.push(t[a])}var s=null;if(e.length>1){var o=Math.round(.3*e.length);s={time:e[o].time,value:e[o].value}}var i=null,l=null;if(s)for(var c=0;c<e.length;c++)e[c].value-=s.value,(null===i||i>e[c].value)&&(i=e[c].value),(null===l||l<e[c].value)&&(l=e[c].value);return{result:e,refPoint:s,min:i,max:l,color:e[e.length-1].value>0?"#9AC802":"#FA4F4F",tooltipWrapper:e[e.length-1].value>0?this.props.classes.tooltipUpper:this.props.classes.tooltipLower}}},{key:"render",value:function(){var e=this.handleSeries(),t=e.result,a=e.refPoint,n=e.min,s=e.max,o=e.color,i=e.tooltipWrapper;return r.a.createElement(z.a,{height:this.props.height},r.a.createElement(H.a,{data:t},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:this.gradient,x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:0,stopColor:o,stopOpacity:.5}),r.a.createElement("stop",{offset:s/(s-n),stopColor:o,stopOpacity:0}),r.a.createElement("stop",{offset:s/(s-n),stopColor:o,stopOpacity:0}),r.a.createElement("stop",{offset:1,stopColor:o,stopOpacity:.5}))),r.a.createElement(ee.a,{dataKey:"time",hide:!0}),r.a.createElement(te.a,{hide:!0}),a&&r.a.createElement(ae.a,{x:a.time,stroke:"rgba(102, 110, 121, 0.5)",strokeDasharray:"3 3"}),a&&r.a.createElement(ae.a,{y:0,stroke:"rgba(102, 110, 121, 0.5)",strokeDasharray:"3 3"}),r.a.createElement(ne.a,{labelFormatter:oe,formatter:ie,wrapperClassName:i,labelClassName:this.props.classes.tooltipLabel,itemStyle:{paddingTop:0,paddingBottom:0,color:"#fff",fontWeight:"500",fontSize:this.props.theme.spacing(1.125),lineHeight:this.props.theme.spacing(1.5)+"px"}}),r.a.createElement(W.a,{type:"monotone",dataKey:"value",stroke:o,fill:"url(#".concat(this.gradient,")")})))}}]),a}(n.PureComponent),ce=Object(u.a)((function(e){return{tooltipUpper:{border:"none !important",borderRadius:e.spacing(.25),backgroundColor:"#9AC802 !important",padding:"".concat(e.spacing(.25),"px !important")},tooltipLower:{border:"none !important",borderRadius:e.spacing(.25),backgroundColor:"#FA4F4F !important",padding:"".concat(e.spacing(.25),"px !important")},tooltipLabel:{display:"none"}}}),{withTheme:!0})(le),pe=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).gradient=G()(),n.end=Math.round((new Date).getTime()/1e3),n.start=Math.round(R()(1e3*n.end).add(-3,"months").toDate().getTime()/1e3),n.state={series:n.generateSeries(n.start,n.end,14400)},n}return Object(l.a)(a,[{key:"generateSeries",value:function(e,t,a){for(var n=[],r=e;r<t;r+=a)n.push({time:r,value:L.a.datatype.number({min:100,max:900})});return n}},{key:"handleSeries",value:function(){for(var e=[],t=Object(F.cloneDeep)(this.state.series),a=0;a<t.length;a++){var n=!1;switch(this.props.duration){case"day":n=t[a].time>=this.end-86400;break;case"week":n=t[a].time>=this.end-604800;break;case"month":var r=Math.round(R()(1e3*this.end).add(-1,"month").toDate().getTime()/1e3);n=t[a].time>=r;break;case"all":n=!0;break;default:n=!1}n&&e.push(t[a])}return e}},{key:"render",value:function(){return r.a.createElement(z.a,{height:this.props.height},r.a.createElement(H.a,{data:this.handleSeries(),layout:"vertical"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:this.gradient,x1:"1",y1:"0",x2:"0",y2:"0"},r.a.createElement("stop",{offset:"0%",stopColor:"#9AC802",stopOpacity:.5}),r.a.createElement("stop",{offset:"100%",stopColor:"#9AC802",stopOpacity:0}))),r.a.createElement(ee.a,{type:"number",hide:!0}),r.a.createElement(te.a,{dataKey:"time",type:"category",hide:!0}),r.a.createElement(W.a,{type:"monotone",dataKey:"value",stroke:"#9AC802",fill:"url(#".concat(this.gradient,")")})))}}]),a}(n.PureComponent),me=Object(u.a)((function(e){return{root:{width:e.spacing(8)},contained:{backgroundColor:"#9AC802",color:"#111112","&:hover":{backgroundColor:"#9AC802"},"&:focus":{backgroundColor:"#9AC802"}},outlined:{borderColor:"#9AC802",color:"#9AC802"},label:{fontSize:e.spacing(1.125)+"px",lineHeight:e.spacing(1.25)+"px",fontWeight:"500",whiteSpace:"nowrap"}}}))(b.a),de=Object(u.a)((function(e){return{root:{width:e.spacing(16.5),borderColor:"rgba(102, 110, 121, 0.5)",borderStyle:"solid",borderWidth:1,borderRaduis:e.spacing(.5),paddingLeft:e.spacing(1.5),paddingRight:e.spacing(3),fontWeight:"500",fontSize:e.spacing(1.5)+"px",lineHeight:e.spacing(2)+"px"}}}))(Z.a),ue=function(e){return r.a.createElement("div",{style:{position:"absolute",right:4}},r.a.createElement(w.a,{color:"#666E79",fontSize:16}))},he=function(e){Object(c.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).renderRecord=function(e,t){return r.a.createElement(y.a,{key:t,border:"1px solid rgba(102, 110, 121, 0.5)",mb:{xs:1.5,sm:2,md:2.5},bgcolor:"#272A2D",borderRadius:a.props.theme.spacing(1),position:"relative"},r.a.createElement(y.a,{px:{xs:.5,sm:1,md:1.5}},"xs"===a.props.width||"sm"===a.props.width?r.a.createElement(n.Fragment,null,r.a.createElement(D.a,{container:!0,alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:6},a.renderItem1(e)),r.a.createElement(D.a,{item:!0,xs:6},a.renderItem5(e))),r.a.createElement(y.a,{mt:1},r.a.createElement(N.a,null)),r.a.createElement(D.a,{container:!0,alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:4},a.renderItem2(e)),r.a.createElement(D.a,{item:!0,xs:4},a.renderItem3(e)),r.a.createElement(D.a,{item:!0,xs:4},a.renderItem4(e)))):r.a.createElement(D.a,{container:!0,alignItems:"center"},r.a.createElement(D.a,{item:!0,md:3},a.renderItem1(e)),r.a.createElement(D.a,{item:!0,md:2},a.renderItem2(e)),r.a.createElement(D.a,{item:!0,md:2},a.renderItem3(e)),r.a.createElement(D.a,{item:!0,md:2},a.renderItem4(e)),r.a.createElement(D.a,{item:!0,md:3},a.renderItem5(e)))),e.badge>0&&r.a.createElement(y.a,{className:a.props.classes.badge},e.badge))},a.state={unit:"$",sortBy:"trending",records:a.generateData()},a}return Object(l.a)(s,[{key:"generateData",value:function(){for(var e=[],t=0;t<5;t++)e.push({speed:L.a.datatype.number({min:1,max:10,precision:.1}),remainingSeconds:L.a.datatype.number({min:1e3,max:1e4}),amount:L.a.datatype.number({min:0,max:1e6}),badge:L.a.datatype.boolean()?L.a.datatype.number({min:1,max:10}):0});return e}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{style:{flexGrow:1}},r.a.createElement(v.a,null),r.a.createElement(y.a,{className:this.props.classes.root},r.a.createElement(D.a,{container:!0,alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{display:"flex",alignItems:"center",mb:{xs:1.5,sm:2.5,md:3.5}},r.a.createElement(y.a,{mr:1,className:this.props.classes.label},"Select assets, types and period:"),r.a.createElement(me,{variant:"outlined"},"FILTER"))),r.a.createElement(D.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{display:"flex",alignItems:"center",mb:{xs:1.5,sm:2.5,md:3.5},className:this.props.classes.tool1},r.a.createElement(y.a,{mr:1,className:this.props.classes.label},"Units:"),r.a.createElement(k.a,null,r.a.createElement(me,{className:this.props.classes.groupButton,onClick:function(){return e.setState({unit:"%"})},variant:"%"===this.state.unit&&"contained"},"%"),r.a.createElement(me,{className:this.props.classes.groupButton,onClick:function(){return e.setState({unit:"$"})},variant:"$"===this.state.unit&&"contained"},"$")),r.a.createElement(y.a,{ml:{xs:2,sm:3,md:4},mr:1,whiteSpace:"nowrap",className:this.props.classes.label},"Sort by:"),r.a.createElement(de,{value:this.state.sortBy,onChange:function(t){return e.setState({sortBy:t.target.value})},disableUnderline:!0,IconComponent:ue},r.a.createElement(_.a,{value:"trending"},"Trending"),r.a.createElement(_.a,{value:"amount"},"Amount"),r.a.createElement(_.a,{value:"time"},"Time"))))),this.state.records.map(this.renderRecord)))}},{key:"renderItem1",value:function(e){return r.a.createElement(y.a,{display:"flex",py:2},r.a.createElement(O.b,{color:"#9AC802",fontSize:this.props.theme.spacing(3)}),r.a.createElement(y.a,{flex:1,ml:1,mr:{xs:1,sm:1.5,md:2}},r.a.createElement(y.a,{fontWeight:"500",fontSize:this.props.theme.spacing(2.5)+"px",lineHeight:this.props.theme.spacing(3)+"px",color:"#fff"},"ETH 48 hours"),r.a.createElement(y.a,{fontWeight:"500",fontSize:this.props.theme.spacing(1.5)+"px",lineHeight:this.props.theme.spacing(2)+"px",color:"#666E79",mt:.5},"Crypto")),r.a.createElement(N.a,{orientation:"vertical",flexItem:!0}))}},{key:"renderItem2",value:function(e){return r.a.createElement(y.a,{px:{xs:1,md:1.5},py:2},r.a.createElement(y.a,{display:"flex",mb:1},r.a.createElement("img",{alt:"",src:a(1903),className:this.props.classes.speedIcon}),r.a.createElement(y.a,{ml:{xs:1,md:1.5},fontWeight:"300",fontSize:this.props.theme.spacing(1.75),lineHeight:this.props.theme.spacing(3)+"px",color:"#fff"},"2,2x")),r.a.createElement(y.a,{fontWeight:"500",fontSize:this.props.theme.spacing(1.5),lineHeight:this.props.theme.spacing(2)+"px",color:"#666E79"},"Outcome in ",(t=e.remainingSeconds,R.a.duration(t,"minutes").format("h[h] m[m]"))));var t}},{key:"renderItem3",value:function(e){return r.a.createElement(ce,{duration:this.props.duration,height:this.props.theme.spacing(7.5)})}},{key:"renderItem4",value:function(e){return r.a.createElement(y.a,{px:{xs:1,md:1.5}},r.a.createElement(pe,{duration:this.props.duration,height:this.props.theme.spacing(7.5)}))}},{key:"renderItem5",value:function(e){return r.a.createElement(y.a,{px:{xs:1,md:1.5},py:2},r.a.createElement(y.a,{textAlign:"right",fontFamily:"Roboto Mono",fontWeight:"500",fontSize:this.props.theme.spacing(2.5),lineHeight:this.props.theme.spacing(3)+"px",color:"#fff"},J(e.amount)),r.a.createElement(y.a,{mt:.5,textAlign:"right",fontWeight:"500",fontSize:this.props.theme.spacing(1.5),lineHeight:this.props.theme.spacing(2)+"px",color:"#666E79"},"Total commitment funds"))}}]),s}(n.PureComponent),ge=Object(g.a)(Object(u.a)((function(e){var t,a;return{root:(t={padding:e.spacing(4.5,7,4.5,5)},Object(f.a)(t,e.breakpoints.only("xs"),{padding:e.spacing(1.5,1)}),Object(f.a)(t,e.breakpoints.only("sm"),{padding:e.spacing(3,2)}),t),label:{color:"#666E79",fontSize:e.spacing(1.125)+"px",lineHeight:e.spacing(1.5)+"px"},groupButton:{width:e.spacing(5)},tool1:Object(f.a)({},e.breakpoints.up("md"),{justifyContent:"flex-end"}),speedIcon:{width:e.spacing(3),height:e.spacing(3)},badge:(a={position:"absolute",top:0,right:e.spacing(3)},Object(f.a)(a,e.breakpoints.only("xs"),{right:e.spacing(1)}),Object(f.a)(a,e.breakpoints.only("sm"),{right:e.spacing(2)}),Object(f.a)(a,"backgroundColor","#1C9DE8"),Object(f.a)(a,"color","#fff"),Object(f.a)(a,"padding",e.spacing(.25,1,.5,1)),Object(f.a)(a,"borderRadius",e.spacing(0,0,1,1)),Object(f.a)(a,"fontSize",e.spacing(1.125)),Object(f.a)(a,"lineHeight",e.spacing(1.5)+"px"),a)}}),{withTheme:!0}),Object(h.a)())(he);a(1904);var fe=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={drawerOpened:!1,duration:"week"},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){"xs"!==this.props.width&&"sm"!==this.props.width&&("xs"!==e.width&&"sm"!==e.width||this.setState({drawerOpened:!1}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App ".concat(this.props.classes.root)},r.a.createElement(A,{onMenuClicked:function(){"xs"!==e.props.width&&"sm"!==e.props.width||e.setState({drawerOpened:!0})}}),r.a.createElement(X,{open:this.state.drawerOpened,onClose:function(){return e.setState({drawerOpened:!1})},duration:this.state.duration,onDurationChanged:function(t){return e.setState({duration:t})}}),r.a.createElement(ge,{duration:this.state.duration}))}}]),a}(n.PureComponent),be=Object(g.a)(Object(u.a)((function(e){return{root:{backgroundColor:"#1E2122",display:"flex"},"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0, 0, 0, 0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:"10px",boxShadow:"0 0 6px rgba(0, 0, 0, .5)"}}}})),Object(h.a)())(fe),Ee=Object(m.a)({palette:{type:"dark"},overrides:{MuiButton:{root:{textTransform:"unset"}}}}),ve=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{theme:Ee},r.a.createElement(be,null))}}]),a}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},261:function(e,t,a){e.exports=a(1905)},266:function(e,t,a){},267:function(e,t,a){},273:function(e,t,a){e.exports=a.p+"static/media/logo.b785a6f6.svg"},275:function(e,t,a){e.exports=a.p+"static/media/user-avatar.1f816109.png"}},[[261,1,2]]]);
//# sourceMappingURL=main.5aca9aca.chunk.js.map