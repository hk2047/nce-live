(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,t,a){e.exports=a(93)},74:function(e,t,a){},78:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),s=(a(74),a(27)),c=a.n(s),l=a(33),u=a(41),h=a(11),d=a(12),p=a(14),f=a(13),m=a(15),b=a(116),v=a(53),g=a.n(v),O=a(65),j=(a(78),a(64)),y=Object(j.a)({palette:{type:"dark"},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),w=a(39),E=a(7),R=a(114),k=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1}}},C=a(23),D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).resize=function(e){console.log("resize",e),a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight,i=this.state.dimensions,o=i.width,s=i.height;return console.log("render FBPlayer",this.state.dimensions),r.a.createElement(C.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return r.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},r.a.createElement("div",{className:"player facebook"},r.a.createElement("iframe",{src:encodeURI("https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",t["#id"]))+"&height="+parseInt(s)+"&width="+parseInt(o),className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1},initCompleted:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({initCompleted:!0})},1e4)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.containerWidth,i=t.containerHeight;return r.a.createElement(C.a,{bounds:!0,onResize:this.resize},function(t){var o=t.measureRef;return r.a.createElement("div",{className:"playerContainer",style:{width:n+"%",height:i+"%"}},r.a.createElement("div",{className:"player yahoo"},r.a.createElement("iframe",{ref:o,onMouseOver:function(){e.setState({initCompleted:!0})},src:a["#id"],className:a["#v"]?"v":"h",title:a["#title"],frameBorder:"0",scrolling:"no",style:e.state.initCompleted?{}:{flex:0,width:320}})))})}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight;return r.a.createElement(C.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return r.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},r.a.createElement("div",{className:"player"},r.a.createElement("iframe",{src:t["#id"],className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return null;var t=this.state.dimensions,a=t.width,n=t.height,i=e.length,o=1,s=1;i>1&&(2===i?o=2:(1.2*a<n?(o=1,s=i):(o=2,s=2),i>4&&(i<=6?o=3:(o=3,s=3))));var c=100/o,u=100/s;return(1.2*a>=n||2===i)&&a<n&&(c=100/s,u=100/o),r.a.createElement(C.a,{bounds:!0,onResize:this.resize},function(t){var a=t.measureRef;return r.a.createElement("div",{ref:a,className:"playerList"},e.map(function(e,t){var a=e.type,n=Object(l.a)(e,["type"]),i={player:n,containerWidth:c,containerHeight:u};switch(a){case"facebook":return r.a.createElement(D,Object.assign({key:n["#id"]},i));case"yahoo":return r.a.createElement(N,Object.assign({key:n["#id"]},i));default:return r.a.createElement(x,Object.assign({key:n["#id"]},i))}}))})}}]),t}(n.Component),z=a(115),J=a(110),W=a(111),F=a(112),I=a(113),B=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preloadReady,a=e.handleNewDataDialogResult;return r.a.createElement(z.a,{open:t,onClose:a({confirmed:!1}),TransitionComponent:function(e){return r.a.createElement(J.a,Object.assign({},e,{direction:"up"}))},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[r.a.createElement(W.a,{color:"secondary",onClick:a({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),r.a.createElement(F.a,{color:"inherit",onClick:a({confirmed:!1})},r.a.createElement(I.a,null,"close"))]})}}]),t}(n.Component),H=Object(w.a)(Object(E.a)(k,{withTheme:!0}))(B),T=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).state={currentLink:null,mobileOpen:!1},e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=e.loading,i={preloadReady:e.preloadReady,preloadData:e.preloadData,handleNewDataDialogResult:e.handleNewDataDialogResult};return r.a.createElement("div",{className:a.root},n?r.a.createElement("div",{className:a.progress},r.a.createElement(R.a,null)):r.a.createElement(S,{data:t}),r.a.createElement(H,i))}}]),t}(n.Component),L=Object(w.a)(Object(E.a)(k,{withTheme:!0}))(T),M=Object(O.a)(),P="https://ncehk2019.github.io/nce-live-datasrc/lives.json",U=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).refresh=Object(u.a)(c.a.mark(function t(){var a,n,r,i,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,fetch(P+"?time="+new Date);case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,r=n.visibleCount,i=n.lives,o=[],e.options&&e.options.visibleCount&&(r=e.options.visibleCount),i.forEach(function(e){var t=e.active,a=Object(l.a)(e,["active"]);t&&o.length<r&&o.push(a)}),e.setState({loading:!1,data:o}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0),e.setState({loading:!1,data:[]});case 19:case"end":return t.stop()}},t,null,[[1,15]])})),e.autoRefresh=function(){e.autoRefreshJob=setInterval(Object(u.a)(c.a.mark(function t(){var a,n,r,i,o,s,u;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.data,!a.preloadReady&&!e.preloadFetching){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.preloadFetching=!0,t.next=7,fetch(P+"?time="+new Date);case 7:return r=t.sent,t.next=10,r.json();case 10:i=t.sent,o=i.visibleCount,s=i.lives,e.options&&e.options.visibleCount&&(o=e.options.visibleCount),u=[],s.forEach(function(e){var t=e.active,a=Object(l.a)(e,["active"]);t&&u.length<o&&u.push(a)}),JSON.stringify(n)!==JSON.stringify(u)&&e.setState({preloadReady:!0,preloadData:u}),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(3),console.log("autoRefresh error",t.t0),e.setState({preloadReady:!1,preloadData:[]});case 22:e.preloadFetching=!1;case 23:case"end":return t.stop()}},t,null,[[3,18]])})),3e4)},e.handleNewDataDialogResult=function(t){var a=t.confirmed;return function(){a?e.setState({data:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.autoRefreshJob&&clearInterval(e.autoRefreshJob),e.setState({preloadReady:!1,preloadData:[]}))}},e.state={loading:!1,data:[],preloadReady:!1,preloadData:[]},e.preloadFetching=!1,e.options=g.a.parse(M.location.search,{ignoreQueryPrefix:!0}),e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoRefresh();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.autoRefreshJob&&clearInterval(this.autoRefreshJob)}},{key:"render",value:function(){return r.a.createElement(b.a,{theme:y},r.a.createElement(L,Object.assign({},this.state,{handleNewDataDialogResult:this.handleNewDataDialogResult})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[69,1,2]]]);