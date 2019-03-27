(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),c=a(1),i=a(2),l=a(4),u=a(3),m=a(5),d=a(14),g=a(9),v=a.n(g),h=function(e){var t=e.size,a=e.topDisc,n=e.startDrag,s={width:25*(t+1.5)+"px",background:["linear-gradient(to right, black, gray)","linear-gradient(to right, yellow, red)","linear-gradient(to right, lime, green)","linear-gradient(to right, cyan, steelblue)","linear-gradient(to right, sandybrown, maroon)","linear-gradient(to right, orange, orangered)","linear-gradient(to right, magenta, indigo)","linear-gradient(to right, lightseagreen, navy)"][t%8]};return r.a.createElement("div",{className:"disc",style:s,draggable:a,onDragStart:n},r.a.createElement("span",{className:"disc-label"},t))},b=function(e){var t=e.towerDiscs,a=e.maxSize,n=e.startTopDiscDrag,s=e.dropDisc,o={width:25*(a+3)},c={height:100+20*a};return r.a.createElement("div",{className:"tower",style:o,onDragOver:function(e){e.preventDefault()},onDrop:s},r.a.createElement("div",{className:"tower-pillar",style:c}),r.a.createElement("div",{className:"tower-base"}),r.a.createElement("div",{className:"disc-group"},t.map(function(e,t){return r.a.createElement(h,{key:e.toString(),size:e,topDisc:0===t,startDrag:n})})))},f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Congratulations! You've won!")}}]),t}(n.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Wrong Move! Smaller disc are only allowed~")}}]),t}(n.Component),w=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetForm=function(){a.setState(a.baseState)},console.log(e.discNum);var n=e.discNum,r=e.towerNum,s=e.discMoves,o=a.createHanoiTower(n,r);return a.state={discs:o,discMoves:s,discNum:n,towerNum:r,alert_message:""},a.baseState=a.state,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"createHanoiTower",value:function(e,t){var a=v.a.range(1,e+1);return v.a.map(Array(t),function(e,t){return 0===t?a:[]})}},{key:"startTopDiscDrag",value:function(e){this.activeTower=e}},{key:"solutionTower",value:function(e,t){console.log("Moves from solution function",t)}},{key:"dropDisc",value:function(e,t){var a=this,n=this.activeTower;this.activeTower=null,n!==e&&null!==n&&this.setState(function(r){var s=r.discs[n][0];if(r.discs[e][0]<s)return console.log("you cant do that"),{state:r,alert_message:"error"};var o=Object(d.a)(r.discs);return o[n]=v.a.tail(o[n]),o[e]=[s].concat(Object(d.a)(r.discs[e])),t++,console.log("Moves",t),0!==e&&o[e].length===a.state.discNum?(console.log("You've Won with: ",t," Moves"),{discs:o,discMoves:a.state.discMoves+1,alert_message:"success"}):{discs:o,discMoves:a.state.discMoves+1,alert_message:""}})}},{key:"getMoveBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.discMoves?"warning":"success"===this.state.alert_message?"success":"primary"}},{key:"formatMoveCount",value:function(){var e=this.state.discMoves;return 0===e?"Zero":e}},{key:"getIncBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.discNum?"warning":"dark"}},{key:"formatIncCount",value:function(){var e=this.state.discNum;return 0===e?"Zero":e}},{key:"render",value:function(){var e=this,t=this.props;t.onReset,t.onIncrement;return r.a.createElement("div",null,r.a.createElement("hr",null),"success"===this.state.alert_message?r.a.createElement(f,null):null,"error"===this.state.alert_message?r.a.createElement(p,null):null,r.a.createElement("span",{className:this.getMoveBadgeClasses()},"Moves: ",this.formatMoveCount()),r.a.createElement("div",null,this.state.discs.map(function(t,a){return r.a.createElement(b,{key:a+1,towerDiscs:t,maxSize:8,startTopDiscDrag:function(){return e.startTopDiscDrag(a)},dropDisc:function(){return e.dropDisc(a,e.state.discMoves)},solutionTower:function(){return e.solutionTower(a)}})})),r.a.createElement("span",{className:this.getIncBadgeClasses()},"Disc Number: ",this.formatIncCount()),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.resetForm,className:"btn btn-sm btn-info ml-3"},"Reset")))}}]),t}(n.Component),N=function(e){e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand mx-auto"},"Emir's Hanoi Tower"," "))},y=a(8),E=a(18),O=function(e,t){return e},j=Object(y.b)(O),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={towerNum:3,discNum:3,discMoves:0},a.handleIncrement=function(){console.log("onIncrement is clicked");var e=a.state.discNum;a.setState({discNum:e+1}),console.log("onIncrement discNum",e)},a.handleReset=function(){console.log("onReset is clicked");var e=a.state.discNum;a.setState({discNum:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{store:j},r.a.createElement(N,null),r.a.createElement("main",{className:"container"},r.a.createElement(w,{towerNum:this.state.towerNum,discNum:this.state.discNum,discMoves:this.state.discMoves,onReset:this.handleReset,onIncrement:this.handleIncrement})))}}]),t}(n.Component);o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b6e23814.chunk.js.map