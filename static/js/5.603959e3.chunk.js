(this["webpackJsonpinput-ouput-project"]=this["webpackJsonpinput-ouput-project"]||[]).push([[5],{55:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i(4),s=i(30),a=i(2),r=(i(1),i(24)),o=i(29),l=i(8),h=600,c="1.2",d="m",g={H1:{fontSize:6,fontWeight:h,lineHeight:c,my:d,as:"h1"},H2:{fontSize:5,fontWeight:h,lineHeight:c,my:d,as:"h2"},H3:{fontSize:4,fontWeight:h,lineHeight:c,my:d,as:"h3"},H4:{fontSize:3,fontWeight:h,lineHeight:c,my:d,as:"h4"},H5:{fontWeight:h,fontSize:2,lineHeight:c,my:d,as:"h5"},H6:{fontWeight:h,fontSize:1,lineHeight:c,my:d,as:"h6"},Lead:{fontSize:2,fontWeight:300,my:d,as:"p"},Paragraph:{fontSize:1,fontWeight:500,lineHeight:"1.5",my:d,as:"p",color:"tertiary"},Small:{fontSize:0,fontWeight:500,as:"small",display:"inline",color:"tertiary"},Link:{fontWeight:500,fontSize:1,color:"primary"},Span:{fontWeight:"inherit",fontSize:1,display:"inline",as:"span"}},p=function(t){var e=t.to,i=t.onClick,l=t.children,h=Object(s.a)(t,["to","onClick","children"]);return Object(a.jsx)(r.b,{to:e,onClick:i,children:Object(a.jsx)(o.o,Object(n.a)(Object(n.a)(Object(n.a)({},g.Link),h),{},{children:l}))})};p.displayName="Link";var u={H1:Object(l.d)(g.H1,"H1"),H2:Object(l.d)(g.H2,"H2"),H3:Object(l.d)(g.H3,"H3"),H4:Object(l.d)(g.H4,"H4"),H5:Object(l.d)(g.H5,"H5"),H6:Object(l.d)(g.H6,"H6"),Lead:Object(l.d)(g.Lead,"Lead"),Paragraph:Object(l.d)(g.Paragraph,"Paragraph"),Small:Object(l.d)(g.Small,"Small"),Span:Object(l.d)(g.Span,"Span"),Link:p}},58:function(t,e,i){"use strict";var n=i(2),s=(i(1),i(22)),a=i(8),r=i(29);e.a=function(){var t=Object(s.b)(),e=t.locale,i=t.updateLocale,o=Object(a.i)().availableLanguages;return Object(n.jsx)(r.k,{defaultValue:e,onChange:function(t){return i(t.target.value)},children:o.map((function(t){return Object(n.jsx)("option",{value:t,children:t},t)}))})}},59:function(t,e,i){"use strict";var n=i(4),s=i(2),a=(i(1),i(55)),r=i(29),o=a.a.H5,l=a.a.Span;e.a=function(t){return Object(s.jsx)(r.a,{display:"inline-block",children:Object(s.jsxs)(o,{fontWeight:900,color:"tertiary",children:[Object(s.jsx)(l,Object(n.a)(Object(n.a)({},t.input),{},{children:"input"})),"/",Object(s.jsx)(l,Object(n.a)(Object(n.a)({},t.output),{},{children:"output"}))]})})}},65:function(t,e,i){"use strict";var n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"===typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=e/this.width,s=i/this.height,a=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/n,r=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/s;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a+this.left,clientY:r+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},t.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},t.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:2*this.element.offsetWidth+"px",height:2*this.element.offsetWidth+"px",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))},t.prototype.updateGlareSize=function(){this.glare&&Object.assign(this.glareElement.style,{width:""+2*this.element.offsetWidth,height:""+2*this.element.offsetWidth})},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in e)if(n in t)i[n]=t[n];else if(this.element.hasAttribute("data-tilt-"+n)){var s=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(s)}catch(a){i[n]=s}}else i[n]=e[n];return i},t.init=function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))},t}();"undefined"!==typeof document&&(window.VanillaTilt=s,s.init(document.querySelectorAll("[data-tilt]"))),t.exports=s},82:function(t,e,i){"use strict";i.r(e);var n=i(7),s=i(2),a=i(1),r=i.n(a),o=i(55),l=i(29),h=i(59),c=i(57),d=i(22),g=i(6),p=i(65),u=i.n(p),m=i(8);function f(){var t=Object(n.a)(["\n  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.4);\n  ","\n"]);return f=function(){return t},t}function j(){var t=Object(n.a)(["\n  ","\n  ","\n"]);return j=function(){return t},t}var b=o.a.H4,x=o.a.H6,y=o.a.Span,v=Object(g.d)(l.a).attrs({backgroundColor:"#ffffff",padding:"m"})(j(),"box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.1);","border-radius: 7px;"),O=Object(g.d)(l.a).attrs({backgroundColor:"secondary-lightened",padding:"m",display:"inline-block"})(f(),"border-radius: 7px;"),w=function(t){var e=t.date,i=Object(d.b)(),n=i.locale,r=i.translate,o=Object(m.i)().localeUtils,h=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){u.a.init(h.current)}),[h]),Object(s.jsx)(l.a,{position:"relative",margin:"0 auto",ref:h,children:Object(s.jsx)(v,{position:"relative",zIndex:10,children:Object(s.jsxs)(l.a,{display:"flex",style:{alignItems:"center"},children:[Object(s.jsx)(l.a,{p:"s",children:Object(s.jsx)(O,{children:Object(s.jsx)(y,{fontSize:"3rem",color:"secondary-darkened",children:Object(s.jsx)(c.a,{})})})}),Object(s.jsxs)(l.a,{p:"s",flexGrow:1,alignSelf:"center",children:[Object(s.jsx)(x,{m:"none",color:"secondary-tints.300",fontWeight:"900",children:r("home.hero.date.label")}),Object(s.jsx)(b,{m:"none",color:"secondary-darkened",fontWeight:"900",children:o.formatDay(e,n)})]})]})})})},L=i.p+"static/media/author.7f64db38.jpg",S=i(58);function H(){var t=Object(n.a)(["\n  vertical-align: middle;\n  border-style: none;\n  border-radius: 50%!important;\n  width: 80px;\n"]);return H=function(){return t},t}var E=r.a.Fragment,z=o.a.H1,W=o.a.H5,M=o.a.Paragraph,C=o.a.Span,A=o.a.Link,B=Object(g.d)("img")(H());e.default=function(){var t=Object(d.a)().content,e=Object(d.b)(),i=e.locale,n=e.translate,a=t.date,r=void 0===a?new Date:a,o=t.editor,g=void 0===o?{}:o;return Object(s.jsxs)(E,{children:[Object(s.jsx)(l.j,{position:"static",children:Object(s.jsx)(l.c,{children:Object(s.jsxs)(l.a,{display:"flex",style:{flexWrap:"wrap",justifyContent:"space-between"},children:[Object(s.jsx)(h.a,{output:{color:"primary"}}),Object(s.jsx)(l.a,{display:"flex",children:Object(s.jsx)(l.a,{mx:"s",children:Object(s.jsx)(S.a,{})})})]})})}),Object(s.jsx)(l.a,{py:"6rem",backgroundColor:"primary-tints.100",children:Object(s.jsx)(l.c,{children:Object(s.jsxs)(l.a,{display:"flex",minHeight:"25rem",style:{alignItems:"center",flexWrap:"wrap"},children:[Object(s.jsxs)(l.a,{width:[1,.5],alignSelf:"center",children:[Object(s.jsxs)(z,{fontWeight:"900",color:"primary-shades.900",children:[n("home.hero.heading.pre.project")," ",Object(s.jsx)("br",{}),Object(s.jsx)(C,{color:"primary",children:" Input/Outout"})," ",n("home.hero.heading.post.project")]}),Object(s.jsx)(M,{color:"secondary",children:g[i]}),Object(s.jsx)(A,{as:"span",to:"/dashboard",children:Object(s.jsxs)(l.b,{fontWeight:700,py:"m",px:"l",type:"primary",children:[Object(s.jsx)(l.a,{mr:".375rem",display:"inline",position:"relative",top:3,children:Object(s.jsx)(c.f,{})}),n("home.hero.input.page.button")]})})]}),Object(s.jsx)(l.a,{width:[1,.5],display:"flex",style:{alignSelf:"center",flexWrap:"wrap"},children:Object(s.jsx)(w,{date:r})})]})})}),Object(s.jsx)(l.a,{py:"6rem",backgroundColor:"#fff",children:Object(s.jsx)(l.c,{children:Object(s.jsxs)(l.a,{display:"flex",minHeight:"25rem",style:{alignItems:"center",flexWrap:"wrap"},children:[Object(s.jsxs)(l.a,{width:[1],alignSelf:"center",children:[Object(s.jsx)(z,{fontWeight:"900",color:"#333333",textAlign:"center",children:n("home.about.heading")}),Object(s.jsxs)(M,{color:"#444444",textAlign:"center",children:[Object(s.jsx)(C,{color:"primary",children:"input"}),"/",Object(s.jsx)(C,{color:"primary",children:"output"})," ",n("home.about.description")]}),Object(s.jsxs)(A,{to:"https://github.com/richardblondet/input-ouput-project",fontFamily:"mono",textAlign:"center",children:[Object(s.jsx)(l.a,{mr:".375rem",display:"inline",position:"relative",top:3,children:Object(s.jsx)(c.d,{})}),n("home.about.view.on.github.link")]})]}),Object(s.jsx)(l.a,{width:[1],p:"m",children:Object(s.jsxs)(l.a,{width:"300px",margin:"0 auto",children:[Object(s.jsx)(M,{textAlign:"center",pt:"l",children:Object(s.jsx)(B,{src:L,width:90})}),Object(s.jsx)(W,{m:"none",color:"#333333",textAlign:"center",children:"Richard Blondet"}),Object(s.jsx)(M,{m:"none",color:"#444444",textAlign:"center",children:n("home.author.profession")})]})})]})})})]})}}}]);
//# sourceMappingURL=5.603959e3.chunk.js.map