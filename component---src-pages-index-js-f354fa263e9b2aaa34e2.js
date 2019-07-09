(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);a(165);var i=a(8),n=a.n(i),l=a(52),r=a.n(l),s=a(0),o=a.n(s),c=a(144),m=a(4),u=a.n(m),p=function(e){return o.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},o.a.createElement("div",{className:"logo"},o.a.createElement("span",{className:"icon fa-codepen"})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",null,"Luke Josten"),o.a.createElement("p",null,"Software Engineer and Problem Solver."))),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),o.a.createElement("li",null,o.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("resume")}},"Resume")))))};p.propTypes={onOpenArticle:u.a.func,timeout:u.a.bool};var d=p,h=a(167),f=a.n(h),E=a(168),b=a.n(E),y=a(169),v=a.n(y),g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this,t=o.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return o.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},o.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"About"),o.a.createElement("span",{className:"image main"},o.a.createElement("img",{src:f.a,alt:""})),o.a.createElement("p",null,"Welcome to my portfolio website! I created this site to brush up on my web development skills and to have a place show some of my side projects. I hope you will learn more about me and to learn something new and interesting along the way! If you would like to learn how this site was made, you may checkout my public ",o.a.createElement("a",{href:"https://github.com/LukeJosten/Portfolio"},"GitHub repository")," and explore the code."),t),o.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Work"),o.a.createElement("span",{className:"image main"},o.a.createElement("img",{src:b.a,alt:"Raytheon Logo"})),o.a.createElement("p",null,"I am a Computer Science graduate from Taylor University with a passion of learning. I have more than 2 years of professional software development experience in various roles. I am currently employed at Raytheon, a major U.S. defense contractor. I interned at Eli Lilly where I developed automation scripts in JavaScript, and I also worked at a startup company for a year as a full stack web developer. Cyber security is a major area of interest of mine, and I spent a year researching and analyzing malware during college. I love solving problems and want to continue to grow as a software developer."),t),o.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Contact"),o.a.createElement("form",{method:"post",action:"https://formspree.io/lukejosten@gmail.com"},o.a.createElement("div",{className:"field half first"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",id:"name"})),o.a.createElement("div",{className:"field half"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",name:"email",id:"email"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),o.a.createElement("li",null,o.a.createElement("input",{type:"reset",value:"Reset"})))),o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/luke-josten-655563111",className:"icon fa-linkedin"},o.a.createElement("span",{className:"label"},"LinkedIn"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/LukeJosten",className:"icon fa-github"},o.a.createElement("span",{className:"label"},"GitHub")))),t),o.a.createElement("article",{id:"resume",className:("resume"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Resume"),o.a.createElement("span",{className:"image main"},o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("p",null,"Under Construction"),t))},t}(o.a.Component);g.propTypes={route:u.a.object,article:u.a.string,articleTimeout:u.a.bool,onCloseArticle:u.a.func,timeout:u.a.bool,setWrapperRef:u.a.func.isRequired};var w=g,k=function(e){return o.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},o.a.createElement("p",{className:"copyright"},"Built with: ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")," Design: ",o.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};k.propTypes={timeout:u.a.bool};var A=k,N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(r()(r()(a))),a.handleCloseArticle=a.handleCloseArticle.bind(r()(r()(a))),a.setWrapperRef=a.setWrapperRef.bind(r()(r()(a))),a.handleClickOutside=a.handleClickOutside.bind(r()(r()(a))),a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},o.a.createElement("div",{id:"wrapper"},o.a.createElement(d,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),o.a.createElement(w,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),o.a.createElement(A,{timeout:this.state.timeout})),o.a.createElement("div",{id:"bg"})))},t}(o.a.Component);t.default=N},165:function(e,t,a){var i=a(6);i(i.P,"Function",{bind:a(166)})},166:function(e,t,a){"use strict";var i=a(17),n=a(11),l=a(78),r=[].slice,s={};e.exports=Function.bind||function(e){var t=i(this),a=r.call(arguments,1),o=function(){var i=a.concat(r.call(arguments));return this instanceof o?function(e,t,a){if(!(t in s)){for(var i=[],n=0;n<t;n++)i[n]="a["+n+"]";s[t]=Function("F,a","return new F("+i.join(",")+")")}return s[t](e,a)}(t,i.length,i):l(t,i,e)};return n(t.prototype)&&(o.prototype=t.prototype),o}},167:function(e,t,a){e.exports=a.p+"static/computer_coffee-3d87a1c99999f892d6519b1a6488a4ec.jpg"},168:function(e,t,a){e.exports=a.p+"static/raytheon_logo-f69591b6a2b389e5efaebf08129e07bd.jpg"},169:function(e,t,a){e.exports=a.p+"static/pic01-55e1797fd15a7113b2be5a8fc1363d93.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f354fa263e9b2aaa34e2.js.map