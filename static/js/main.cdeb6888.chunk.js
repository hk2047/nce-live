(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a(87)},70:function(e,t,a){},72:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),s=(a(70),a(27)),c=a.n(s),l=a(32),u=a(41),h=a(11),d=a(12),p=a(14),m=a(13),f=a(15),b=a(110),v=(a(72),a(61)),g=Object(v.a)({palette:{type:"dark"},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),O=a(39),j=a(7),y=a(108),w=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1}}},E=a(23),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight,i=this.state.dimensions;i.width,i.height;return r.a.createElement(E.a,{bounds:!0,onResize:this.resize},function(e){e.measureRef;return r.a.createElement("div",{className:"playerContainer",style:{width:a+"%",height:n+"%"}},r.a.createElement("div",{className:"player facebook"},r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",t["#id"]),className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1},initCompleted:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({initCompleted:!0})},1e4)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.containerWidth,i=t.containerHeight,o=this.state.dimensions;o.width,o.height;return r.a.createElement(E.a,{bounds:!0,onResize:this.resize},function(t){t.measureRef;return r.a.createElement("div",{className:"playerContainer",style:{width:n+"%",height:i+"%"}},r.a.createElement("div",{className:"player yahoo"},r.a.createElement("iframe",{onMouseOver:function(){e.setState({initCompleted:!0})},src:a["#id"],className:a["#v"]?"v":"h",title:a["#title"],frameBorder:"0",scrolling:"no",style:e.state.initCompleted?{}:{flex:0,width:320}})))})}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight,i=this.state.dimensions;i.width,i.height;return r.a.createElement(E.a,{bounds:!0,onResize:this.resize},function(e){e.measureRef;return r.a.createElement("div",{className:"playerContainer",style:{width:a+"%",height:n+"%"}},r.a.createElement("div",{className:"player"},r.a.createElement("iframe",{src:t["#id"],className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return null;var t=this.state.dimensions,a=t.width,n=t.height,i=e.length,o=1,s=1;i>1&&(2===i?o=2:(1.2*a<n?(o=1,s=i):(o=2,s=2),i>4&&(i<=6?o=3:(o=3,s=3))));var c=100/o,u=100/s;return(1.2*a>=n||2===i)&&a<n&&(c=100/s,u=100/o),r.a.createElement(E.a,{bounds:!0,onResize:this.resize},function(t){var a=t.measureRef;return r.a.createElement("div",{ref:a,className:"playerList"},e.map(function(e,t){var a=e.type,n={player:Object(l.a)(e,["type"]),containerWidth:c,containerHeight:u};switch(a){case"facebook":return r.a.createElement(k,Object.assign({key:t},n));case"yahoo":return r.a.createElement(R,Object.assign({key:t},n));default:return r.a.createElement(D,Object.assign({key:t},n))}}))})}}]),t}(n.Component),C=a(109),S=a(104),x=a(105),z=a(106),J=a(107),W=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preloadReady,a=e.handleNewDataDialogResult;return r.a.createElement(C.a,{open:t,onClose:a({confirmed:!1}),TransitionComponent:function(e){return r.a.createElement(S.a,Object.assign({},e,{direction:"up"}))},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[r.a.createElement(x.a,{color:"secondary",onClick:a({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),r.a.createElement(z.a,{color:"inherit",onClick:a({confirmed:!1})},r.a.createElement(J.a,null,"close"))]})}}]),t}(n.Component),F=Object(O.a)(Object(j.a)(w,{withTheme:!0}))(W),B=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={currentLink:null,mobileOpen:!1},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=e.loading,i={preloadReady:e.preloadReady,preloadData:e.preloadData,handleNewDataDialogResult:e.handleNewDataDialogResult};return r.a.createElement("div",{className:a.root},n?r.a.createElement("div",{className:a.progress},r.a.createElement(y.a,null)):r.a.createElement(N,{data:t}),r.a.createElement(F,i))}}]),t}(n.Component),H=Object(O.a)(Object(j.a)(w,{withTheme:!0}))(B),T="https://ncehk2019.github.io/nce-live-datasrc/lives.json",I=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).refresh=Object(u.a)(c.a.mark(function t(){var a,n,r,i,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,fetch(T+"?time="+new Date);case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,r=n.visibleCount,i=n.lives,o=[],i.forEach(function(e){var t=e.active,a=Object(l.a)(e,["active"]);t&&o.length<r&&o.push(a)}),e.setState({loading:!1,data:o}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e.setState({loading:!1,data:[]});case 18:case"end":return t.stop()}},t,null,[[1,14]])})),e.autoRefresh=function(){e.autoRefreshJob=setInterval(Object(u.a)(c.a.mark(function t(){var a,n,r,i,o,s,u;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.data,a.preloadData,!a.preloadReady&&!e.preloadFetching){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.preloadFetching=!0,t.next=7,fetch(T+"?time="+new Date);case 7:return r=t.sent,t.next=10,r.json();case 10:i=t.sent,o=i.visibleCount,s=i.lives,u=[],s.forEach(function(e){var t=e.active,a=Object(l.a)(e,["active"]);t&&u.length<o&&u.push(a)}),JSON.stringify(n)!==JSON.stringify(u)&&e.setState({preloadReady:!0,preloadData:u}),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(3),console.log("autoRefresh error",t.t0),e.setState({preloadReady:!1,preloadData:[]});case 21:e.preloadFetching=!1;case 22:case"end":return t.stop()}},t,null,[[3,17]])})),3e4)},e.handleNewDataDialogResult=function(t){var a=t.confirmed;return function(){a?e.setState({data:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.autoRefreshJob&&clearInterval(e.autoRefreshJob),e.setState({preloadReady:!1,preloadData:[]}))}},e.state={loading:!1,data:[],preloadReady:!1,preloadData:[]},e.preloadFetching=!1,e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoRefresh();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.autoRefreshJob&&clearInterval(this.autoRefreshJob)}},{key:"render",value:function(){return r.a.createElement(b.a,{theme:g},r.a.createElement(H,Object.assign({},this.state,{handleNewDataDialogResult:this.handleNewDataDialogResult})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,1,2]]]);