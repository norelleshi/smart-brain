(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n.p+"static/media/logo.5249cbfe.png"},,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(15),n(3)),l=n(4),s=n(8),u=n(5),m=n(9),p=n(6),h=n.n(p),g=n(7),b=n.n(g),d=function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between",paddingLeft:40,paddingRight:40}},o.a.createElement("div",null,o.a.createElement("img",{src:b.a,alt:"logo",width:"170",height:"auto"})))},f=(n(16),function(t){var e=t.onInputChange,n=t.onButtonSubmit;return o.a.createElement("div",{className:"ml4 mr4"},o.a.createElement("p",{className:"f3 white"},"This magic brain will detect faces in your picture. Give it a try! (One face only for now)"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"mt3 shadow-5 form"},o.a.createElement("input",{className:"f4 pa2 w-75 br2-ns br--left-ns",type:"text",placeholder:"Paste URL",onChange:e}),o.a.createElement("button",{className:"br2-ns br--right-ns w-27 grow f3 link ph3 pv2 dib white bg-light-purple",onClick:n},"Detect"))))}),v=(n(17),function(t){var e=t.imageUrl,n=t.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"relative mt2"},o.a.createElement("img",{id:"inputimage",src:e,alt:"",width:"500px",heigh:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),w=(n(18),{particles:{number:{value:70,density:{enable:!0,value_area:600}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}),E={input:"",imageUrl:"",box:{}},y=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).calculateFaceLocation=function(t){var e=t.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return{leftCol:e.left_col*a,topRow:e.top_row*o,rightCol:a-e.right_col*a,bottomRow:o-e.bottom_row*o}},t.displayFaceBox=function(e){t.setState({box:e})},t.onInputChange=function(e){t.setState({input:e.target.value})},t.onButtonSubmit=function(){t.setState({imageUrl:t.state.input}),fetch("https://smartbrain-detect.herokuapp.com/imageurl",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({input:t.state.input})}).then((function(t){return t.json()})).then((function(e){t.displayFaceBox(t.calculateFaceLocation(e))})).catch((function(t){return console.log(t)}))},t.state=E,t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{className:"particles",params:w}),o.a.createElement(d,null),o.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(v,{imageUrl:this.state.imageUrl,box:this.state.box}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.87b9f0c4.chunk.js.map