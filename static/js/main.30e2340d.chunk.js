(this.webpackJsonpknotted=this.webpackJsonpknotted||[]).push([[0],{31:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=(n(36),n(16)),u=n(5),l=n(46),d=n(28),s=n(8),p=n.n(s),m=n(47),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buffer,n=void 0===t?null:t,o=e.width,i=void 0===o?500:o,c=e.height,u=void 0===c?100:c,l=e.zoom,d=void 0===l?1:l,s=e.color,p=void 0===s?"black":s,m=e.onDone,f=void 0===m?null:m,v=e.pixelRatio,b=void 0===v?window.devicePixelRatio:v,h=Object(a.useRef)(null);Object(a.useLayoutEffect)((function(){var e=h.current.getContext("2d"),t=i*d,a=u/2,r=n.getChannelData(0),o=Math.ceil(r.length/t);e.fillStyle=p,g(i,o,a,r,e),f&&f()}));var E=Math.floor(b*i*d),O=Math.floor(b*u),y={width:i*d,height:u};return r.a.createElement("canvas",{ref:h,width:E,height:O,style:y})};function g(e,t,n,a,r){for(var o=0;o<e;o+=1)for(var i=1,c=-1,u=0;u<t;u+=1){var l=a[o*t+u];l<i?i=l:l>c&&(c=l),r.fillRect(o,(1+i)*n,1,Math.max(1,(c-i)*n))}}var v=Object(a.memo)((function(e){return r.a.createElement(f,e)}),(function(e,t){return e.id===t.id&&e.width===t.width&&e.height===t.height&&e.color===t.color})),b=n(49),h=n(27),E=n.n(h),O=function(e){return{type:"@GRID/CREATE_LOOP",payload:{buffer:e,color:E()(),id:Object(b.a)()}}},y="@GRID/TOGGLE_PLAY";function w(e){var t=e.id,n=e.index,a=(e.length,e.active),o=e.color,i=e.buffer,u=e.width,l=e.height,d=e.tempo,s=e.setActiveLoopA,p=60/d,f=Math.round(i.duration/p),g=Object(m.a)({item:{id:t,type:"LOOP"}}),b=Object(c.a)(g,2),h=b[0].opacity,E=b[1];return r.a.createElement("div",{ref:E,className:"Loop ".concat(a?"active":""),style:{opacity:h,height:l,width:u,paddingTop:20},onClick:function(){return s(t)}},r.a.createElement(v,{id:t,width:u,height:l-20,color:o,buffer:i}),r.a.createElement("div",null,"Loop ",n," ","//"," ",f," beats"))}var I=Object(u.b)((function(e){return{loops:e.loop.loops,activeLoop:e.grid.activeLoop,tempo:e.grid.tempo}}),(function(e){return{createLoopA:function(t){return e(O(t))},setActiveLoopA:function(t){return e(function(e){return{type:"@GRID/SET_ACTIVE_LOOP",payload:{loopId:e}}}(t))}}}))((function(e){var t=e.loops,n=e.width,a=e.tempo,o=e.activeLoop,i=(e.createLoopA,e.setActiveLoopA);return r.a.createElement("div",{className:"LoopPanel",style:{width:n}},t.map((function(e,t){return r.a.createElement(w,Object.assign({key:e.id,index:t,setActiveLoopA:i,active:o===e.id},e,{tempo:a,width:n-20,height:75}))})))})),A=n(2),j=n(48);function D(e){e.id;var t=e.color,n=e.soft,a=e.numMarkers,o=n?.3:1;return r.a.createElement("div",{className:"GridLoopMarker ".concat(a>4?"half":""),style:{backgroundColor:t,opacity:o}})}function L(e){var t=e.beat,n=(e.barBeat,e.loopTriggers),a=e.loopTails,o=(e.activeLoop,e.setGridElemA),i=e.addLoopInstanceA,c=e.onClick,u=Object(j.a)({accept:["LOOP"],drop:function(e){return i(t,e.id)}})[1],l=n.length+a.length;return r.a.createElement("div",{ref:function(e){o(t,e),u(e)},className:"Grid",onClick:c},n.map((function(e){return r.a.createElement(D,Object.assign({key:e.instanceId},e,{numMarkers:l}))})),a.map((function(e){return r.a.createElement(D,Object.assign({key:e.instanceId},e,{soft:!0,numMarkers:l}))})))}var T=Object(u.b)((function(e){var t=e.grid.tempo,n=e.grid.grid.map((function(n){return n.loopTriggers.map((function(a){var r=a.id,o=a.instanceId,i=e.loop.loops.find((function(e){return e.id===r})),c=60/t,u=Math.round(i.buffer.duration/c),l=[n.beat,(n.beat+u-1)%e.grid.grid.length];return Object(A.a)({range:l,instanceId:o},i)}))})).flat(),a=e.grid.grid.map((function(e){var t=n.filter((function(t){return t.range[0]===e.beat})),a=n.filter((function(t){return n=t.range[0]+1,a=t.range[1],(r=e.beat)>=n&&r<=a||t.range[0]>t.range[1]&&e.beat>t.range[0]||t.range[0]>t.range[1]&&e.beat<t.range[1];var n,a,r}));return Object(A.a)(Object(A.a)({},e),{},{loopTriggers:t,loopTails:a})}));return Object(A.a)(Object(A.a)({},e.grid),{},{grid:a})}),(function(e){return{setGridElemA:function(t,n){return e(function(e,t){return{type:"@GRID/SET_GRID_ELEM",payload:{index:e,domElem:t}}}(t,n))},addLoopInstanceA:function(t,n){return e(function(e,t){return{type:"@GRID/ADD_LOOP_INSTANCE",payload:{beat:e,loopId:t,instanceId:Object(b.a)()}}}(t,n))}}}))((function(e){var t=e.activeLoop,n=e.width,a=e.grid,o=(e.beats,e.beatsPerBar,e.setGridElemA),i=e.addLoopInstanceA;return r.a.createElement("div",{className:"GridPanel",style:{width:n,height:n}},a.map((function(e){return r.a.createElement(L,Object.assign({key:e.beat},e,{setGridElemA:o,addLoopInstanceA:i,onClick:function(){return t&&i(e.beat,t)}}))})))}));n(43);var G=Object(u.b)((function(e){return{playing:e.grid.playing,tempo:e.grid.tempo,metronome:e.grid.metronome,gain:e.grid.gain,inputDeviceList:e.grid.inputDeviceList,activeInputDevice:e.grid.activeInputDevice}}),(function(e){return{togglePlayA:function(){return e({type:y})},toggleMetronomeA:function(){return e({type:"@GRID/TOGGLE_METRONOME"})},setTempoA:function(t){return e(function(e){return{type:"@GRID/SET_TEMPO",payload:{tempo:e}}}(t))},setGainA:function(t){return e(function(e){return{type:"@GRID/SET_GAIN",payload:{gain:e}}}(t))},setInputDevicesA:function(t){return e(function(e){return{type:"@GRID/SET_INPUT_DEVICES",payload:{devices:e}}}(t))},setMediaStreamA:function(t){return e(function(e){return{type:"@GRID/SET_MEDIA_STREAM",payload:{stream:e}}}(t))}}}))((function(e){var t=e.playing,n=e.gain,o=e.tempo,i=e.metronome,u=e.mediaStream,m=e.activeInputDevice,f=e.togglePlayA,g=e.inputDeviceList,v=e.setGainA,b=e.setTempoA,h=e.toggleMetronomeA,E=e.setInputDevicesA,O=e.setMediaStreamA;Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({audio:{deviceId:m}}).then((function(e){return O(e)}))}),[O,m]),Object(a.useEffect)((function(){u&&navigator.mediaDevices.enumerateDevices().then((function(e){return E(e)}))}),[u,E]);var y=function(){var e="object"===typeof window,t=Object(a.useCallback)((function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}),[e]),n=Object(a.useState)(t),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){i(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[t,e]),o}(),w=y.width,A=y.height,j=Math.min(.75*w,A-120),D=g.reduce((function(e,t){return"audioinput"===t.kind&&(e[t.label]=t.deviceId),e}),{}),L=t?"pause":"";return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("header",{className:"Controls"},r.a.createElement("button",{className:"PlayButton ".concat(L),onClick:f}),r.a.createElement(p.a,{theme:"light",width:.6*w,onChange:function(e,t){"tempo"===e&&b(t),"metronome"===e&&h(),"gain"===e&&v(t)},state:{tempo:o,gain:n,metronome:i}},r.a.createElement(s.Range,{label:"tempo",min:40,max:260,step:1}),r.a.createElement(s.Range,{label:"gain",min:0,max:1}),r.a.createElement(s.Checkbox,{label:"metronome"}),r.a.createElement(s.Select,{label:"input",options:D}))),r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{backend:d.a},r.a.createElement(T,{width:j,activeBeat:0}),r.a.createElement(I,{width:w-j}))))})),R=n(4),M=n(12),S={loops:[]};window.gridElems=[];var _,C,k={beatsPerBar:4,beats:16,playing:!1,metronome:!0,tempo:136.55,quantizationBeats:4,gain:.2,activeLoop:null,activeInputDevice:null,inputDeviceList:[],mediaStream:null,grid:(_=16,C=4,Object(M.a)(Array(_).keys()).map((function(e){return{beat:e+1,barBeat:(e+1)%C,loopTriggers:[]}})))};var P=Object(R.c)({loop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@GRID/CREATE_LOOP":return Object(A.a)(Object(A.a)({},e),{},{loops:[t.payload].concat(Object(M.a)(e.loops))});default:return e}},grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@GRID/SET_GRID_ELEM":return window.gridElems[t.payload.index-1]=t.payload.domElem,e;case"@GRID/ADD_LOOP_INSTANCE":var n=Object(M.a)(e.grid),a=n[t.payload.beat-1];return a.loopTriggers.push({id:t.payload.loopId,instanceId:t.payload.instanceId}),Object(A.a)(Object(A.a)({},e),{},{grid:n});case"@GRID/TOGGLE_METRONOME":return Object(A.a)(Object(A.a)({},e),{},{metronome:!e.metronome});case y:return Object(A.a)(Object(A.a)({},e),{},{playing:!e.playing});case"@GRID/SET_ACTIVE_LOOP":return Object(A.a)(Object(A.a)({},e),{},{activeLoop:t.payload.loopId});case"@GRID/SET_GAIN":return Object(A.a)(Object(A.a)({},e),{},{gain:t.payload.gain});case"@GRID/SET_INPUT_DEVICES":return Object(A.a)(Object(A.a)({},e),{},{inputDeviceList:t.payload.devices});case"@GRID/SET_MEDIA_STREAM":return console.log(t.payload),Object(A.a)(Object(A.a)({},e),{},{mediaStream:t.payload.stream});case"@GRID/SET_TEMPO":return Object(A.a)(Object(A.a)({},e),{},{tempo:t.payload.tempo});default:return e}}});var N=function(e){return function(t){var n,a,r,o,i=null,c=function t(){var c=window.audioCtx||new AudioContext;window.audioCtx=c;var u=e.getState(),l=u.grid,d=l.mediaStream,s=l.playing,p=l.metronome,m=l.tempo,f=l.grid,g=l.gain,v=l.beats,b=l.beatsPerBar,h=l.quantizationBeats,E=u.loop.loops,y=60/m;try{var w=c.currentTime;if(s&&r<w+-.05){var I=o-1;-1===I&&(I=v-1),window.gridElems[I].classList.remove("active"),window.gridElems[o].classList.add("active"),o+=1,o%=v,r+=y}if(s&&n<w+.1){if(function(e,t,n,a,r,o,i){e[n%a].loopTriggers.map((function(e){var n=e.id;return t.find((function(e){return e.id===n}))})).forEach((function(e){var t=e.buffer,n=r.createBufferSource();n.buffer=t;var a=r.createGain();a.gain.setValueAtTime(o,r.currentTime),n.connect(a).connect(r.destination),n.start(i)}))}(f,E,a,v,c,g,n),a%h===0){var A=n,j=n+h*y;console.log("New loop - ".concat(A," / ").concat(j)),function(e,t,n,a){var r=new MediaRecorder(e),o=a-t.currentTime;return r.start(1e3*(o+.2)),new Promise((function(e){return r.ondataavailable=function(t){"recording"===r.state&&r.stop(),e(t.data)}})).then((function(e){return e.arrayBuffer()})).then((function(e){return new Promise((function(n,a){return t.decodeAudioData(e,n,a)}))})).then((function(e){for(var r=e.duration-o+.1,i=e.sampleRate,c=t.createBuffer(1,(a-n)*i,i),u=c.getChannelData(0),l=e.getChannelData(0),d=0;d<(a-n)*i;d++)u[d]=l[d+Math.floor(r*i)];return c}))}(d,c,A,j).then((function(t){return e.dispatch(O(t))}))}p&&function(e,t,n,a,r){var o=e.createOscillator();o.connect(e.destination),o.frequency.value=t%a===0?880:t%r===0?440:220,o.start(n),o.stop(n+.01)}(c,a,n,v,b),a+=1,a%=v,n+=y}}finally{i=requestAnimationFrame(t)}};return function(u){if(t(u),u.type===y&&e.getState().grid.playing){var l=window.audioCtx||new AudioContext;window.audioCtx=l,a=0,o=0,n=l.currentTime+.1,r=l.currentTime+.1,i=requestAnimationFrame(c)}else u.type===y&&i&&(window.gridElems.forEach((function(e){return e.classList.remove("active")})),cancelAnimationFrame(i))}}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(R.d)(P,e,Object(R.a)(N))}()},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.30e2340d.chunk.js.map