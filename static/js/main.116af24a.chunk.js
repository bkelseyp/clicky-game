(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),c=a.n(r),i=(a(29),a(9)),s=a(5),l=a(17),m=a(18),p=a(22),u=a(19),g=a(23),d=(a(30),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name||"",src:e.image||"",onClick:e.imgClick})))});a(31),a(32);var h=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};a(33);var w=function(e){return o.a.createElement("nav",{className:"navbar navi sticky-top navbar-light bg-warning"},o.a.createElement(i.b,{className:"navbar-brand mb-0 h1 text-white brandFont",to:"/"},"Clicky Game"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",null,"Click an image to begin!"),o.a.createElement("li",{className:"nav-item brand2"},"Score: ",e.score," \xa0 |\xa0  Top Score: ",e.topScore)))};a(38);var v=function(){return o.a.createElement("footer",{className:"footer text-center pt-4 pb-4"},o.a.createElement("span",{className:"pt-2 pb-2"},"  Art Clicky Game"))},k=a(8),b=function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),n=e[--t];e[t]=e[a],e[a]=n}return e},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={topScore:0,score:0,result:"",clicked:[],imageGroup:Array(17).fill({}),artwork:k,gameOver:!1},a.imageClick=function(e){console.log("Picture clicked with id is: ".concat(e)),a.state.clicked.includes(e)?a.resetGame():(a.pointIncrease(),a.state.clicked.push(e),a.setState({gameOver:!1}))},a.pointIncrease=function(){var e=a.state.currentScore+2;console.log("the score is ".concat(e)),e===a.state.imageGroup.length?a.setState({result:"You win! Start clicking to play again!",topScore:e,currentScore:0,clicked:[],artwork:k,gameOver:!1}):e>a.state.topScore?a.setState({topScore:e,currentScore:e,result:"Correct! New high score!"}):a.setState({currentScore:e,result:"Correct!"}),a.resetArtArray()},a.resetGame=function(){a.setState({points:0,currentScore:0,topScore:a.state.topScore,result:"You Lose!",clicked:[],artwork:k,gameOver:!0}),console.log("Game Over? ",a.state.gameOver),a.resetArtArray()},a.resetArtArray=function(){var e=b(k);a.setState({artwork:e})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click a card to get started"})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{topScore:this.state.topScore,score:this.state.currentScore,status:this.state.result}),o.a.createElement(h,null,this.state.imageGroup.map(function(t,a){return o.a.createElement(d,{id:t.id,name:t.name,imgClick:e.imageClick,image:"/images/art-0".concat(a+1,".png")})})),o.a.createElement(v,null))}}]),t}(n.Component);var S=function(){return o.a.createElement(i.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null,o.a.createElement(s.a,{exact:!0,path:"/",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{id:1,name:"Bear",image:"https://pajulahti.com/wp-content/uploads/2017/04/500x500.jpeg"},{id:2,name:"JavaScript",image:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/06/Blog_Heavy-js2-500x500.jpg"},{id:3,name:"Bloc",image:"https://cdn1.bloc.io/assets/logos/bloc-logo-square-500x500-white-89a5e06a1e88862ab355ddc3a163032c.jpg"},{id:4,name:"Resume",image:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2017/09/infographic-resume-tips-500x500.jpg"},{id:5,name:"Pork",image:"https://www.kitchensanctuary.com/wp-content/uploads/2015/03/Asian-Belly-Pork-square-FS-500x500.jpg"},{id:6,name:"Unibet",image:"https://www.unibetopen.com/wp-content/uploads/2019/02/1500x1000-sep-unibet-open-malta-v2-option2-2-2019-500x500.jpg"},{id:7,name:"Dinner Rolls",image:"https://thestayathomechef.com/wp-content/uploads/2019/05/Homemade-Dinner-Rolls-1-500x500.jpg"},{id:8,name:"Broccolio",image:"https://www.twopeasandtheirpod.com/wp-content/uploads/2015/12/Roasted-Broccoli-4-500x500.jpg"},{id:9,name:"Biscotti",image:"https://www.shelovesbiscotti.com/wp-content/uploads/2018/02/Italian-Anise-Biscotti-2-500x500.jpg"},{id:10,name:"Pesto",image:"https://yupitsvegan.com/wp-content/uploads/2018/04/carrot-top-pesto-4-500x500.jpg",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{id:12,name:"Corn",image:"https://cookinglsl.com/wp-content/uploads/2014/08/boiled-corn-on-the-cob-3-500x500.jpg"}]}},[[24,1,2]]]);
//# sourceMappingURL=main.116af24a.chunk.js.map