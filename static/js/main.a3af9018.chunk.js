(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"1",name:"Bear",image:"/images/art-01.png"},{id:"2",name:"JavaScript",image:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/06/Blog_Heavy-js2-500x500.jpg"},{id:"3",name:"Bloc",image:"https://cdn1.bloc.io/assets/logos/bloc-logo-square-500x500-white-89a5e06a1e88862ab355ddc3a163032c.jpg"},{id:"4",name:"Resume",image:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2017/09/infographic-resume-tips-500x500.jpg"},{id:"5",name:"Pork",image:"https://www.kitchensanctuary.com/wp-content/uploads/2015/03/Asian-Belly-Pork-square-FS-500x500.jpg"},{id:"6",name:"Unibet",image:"https://www.unibetopen.com/wp-content/uploads/2019/02/1500x1000-sep-unibet-open-malta-v2-option2-2-2019-500x500.jpg"},{id:"7",name:"Dinner Rolls",image:"https://thestayathomechef.com/wp-content/uploads/2019/05/Homemade-Dinner-Rolls-1-500x500.jpg"},{id:"8",name:"Broccolio",image:"https://www.twopeasandtheirpod.com/wp-content/uploads/2015/12/Roasted-Broccoli-4-500x500.jpg"},{id:"9",name:"Biscotti",image:"https://www.shelovesbiscotti.com/wp-content/uploads/2018/02/Italian-Anise-Biscotti-2-500x500.jpg"},{id:"10",name:"Pesto",image:"https://yupitsvegan.com/wp-content/uploads/2018/04/carrot-top-pesto-4-500x500.jpg",occupation:"Cashier",location:"O-Town, California"},{id:"11",name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{id:"12",name:"Corn",image:"https://cookinglsl.com/wp-content/uploads/2014/08/boiled-corn-on-the-cob-3-500x500.jpg"},{id:"13",name:"Bear",image:"https://bkelseyp.github.io/clicky-game/images/art-02.png"},{id:"14",name:"Bear",image:"https://bkelseyp.github.io/clicky-game/images/art-03.png"},{id:"15",name:"Bear",image:"https://bkelseyp.github.io/clicky-game/images/art-03.png"},{id:"16",name:"Bear",image:"/images/art-04.png"},{id:"17",name:"Bear",image:"/images/art-05.png"},{id:"18",name:"Bear",image:"/images/art-06.png"},{id:"19",name:"Bear",image:"/images/art-07.png"},{id:"20",name:"Bear",image:"/images/art-08.png"},{id:"21",name:"Image 02",image:"../public/images/art-09.png"},{id:"22",name:"Bear",image:"/images/art-010.png"},{id:"23",name:"Bear",image:"/images/art-011.png"},{id:"24",name:"Bear",image:"/images/art-012.png"}]},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),r=a.n(o),c=(a(15),a(4)),s=a(5),m=a(7),l=a(6),g=a(8),p=(a(16),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.imgClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name||"",src:e.image||""})))});a(17),a(18);var u=function(e){return i.a.createElement("main",Object.assign({className:"wrapper"},e))};a(19);var d=function(e){return i.a.createElement("nav",{className:"navbar navi sticky-top navbar-light bg-warning"},i.a.createElement("h2",null,"Clicky Game"),i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",null,"Click an image to begin!"),i.a.createElement("li",{className:"nav-item brand2"},"Score: ",e.score," \xa0 |\xa0  Top Score: ",e.topScore)))};a(20);var h=function(){return i.a.createElement("footer",{className:"footer text-center pt-4 pb-4"},i.a.createElement("span",{className:"pt-2 pb-2"},"  Art Clicky Game"))},w=a(1),k=function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),n=e[--t];e[t]=e[a],e[a]=n}return e},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={topScore:0,score:0,result:"",clicked:[],artwork:w,gameOver:!1},a.imageClick=function(e){console.log("Picture clicked with id is: ".concat(e)),a.state.clicked.includes(e)?a.resetGame():(a.pointIncrease(),a.state.clicked.push(e),a.setState({gameOver:!1}))},a.pointIncrease=function(){var e=a.state.score+1;console.log("the score is ".concat(e)),e===a.state.artwork.length?a.setState({result:"You win! Start clicking to play again!",topScore:e,score:0,clicked:[],artwork:w,gameOver:!1}):e>a.state.topScore?a.setState({topScore:e,score:e,result:"Correct! New high score!"}):a.setState({score:e,result:"Correct!"}),a.resetArtArray()},a.resetGame=function(){a.setState({points:0,score:0,topScore:a.state.topScore,result:"You Lose!",clicked:[],artwork:w,gameOver:!0}),console.log("Sorry, Game Over! ",a.state.gameOver),a.resetArtArray()},a.resetArtArray=function(){var e=k(w);a.setState({artwork:e})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click a card to get started"})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{topScore:this.state.topScore,score:this.state.score,status:this.state.result}),i.a.createElement(u,null,this.state.artwork.map(function(t){return i.a.createElement(p,{id:t.id,key:t.id,name:t.name,imgClick:e.imageClick,image:t.image})})),i.a.createElement(h,null))}}]),t}(n.Component);var b=function(){return i.a.createElement(u,null,i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a3af9018.chunk.js.map