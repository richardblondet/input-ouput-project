(this["webpackJsonpinput-ouput-project"]=this["webpackJsonpinput-ouput-project"]||[]).push([[8],{58:function(e,t,r){"use strict";var i=r(2),n=(r(1),r(22)),o=r(8),a=r(29);t.a=function(){var e=Object(n.b)(),t=e.locale,r=e.updateLocale,c=Object(o.i)().availableLanguages;return Object(i.jsx)(a.k,{defaultValue:t,onChange:function(e){return r(e.target.value)},children:c.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})}},76:function(e,t,r){"use strict";r.r(t);var i=r(7),n=r(2),o=r(1),a=r.n(o),c=r(57),s=r(6),l=r(58),d=r(59),b=r(55),j=r(29);function h(){var e=Object(i.a)(["\n  padding: 0px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  \n"]);return h=function(){return e},e}function p(){var e=Object(i.a)(["\n  position: relative;\n  width: 36px;\n  height: 36px;\n  margin: 16px;\n"]);return p=function(){return e},e}var x=b.a.H1,u=b.a.H6,f=b.a.Paragraph,g=b.a.Span,O=function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(j.j,{position:"static",children:Object(n.jsx)(d.a,{output:{color:"primary"}})}),Object(n.jsx)(j.a,{py:"4rem",px:"m",backgroundColor:"primary-tints.100",children:Object(n.jsx)(j.a,{display:"flex",minHeight:"25rem",style:{alignItems:"center",flexWrap:"wrap"},children:Object(n.jsxs)(j.a,{width:[1],maxWidth:[1,"50%"],alignSelf:"center",children:[Object(n.jsxs)(x,{fontWeight:"900",color:"primary-shades.900",children:["This is how",Object(n.jsx)("br",{}),Object(n.jsx)(g,{color:"primary",children:" this theme"})," looks like!"]}),Object(n.jsx)(f,{color:"tertiary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus architecto rem repellat, perferendis quisquam asperiores odio itaque numquam totam odit perspiciatis repudiandae corrupti voluptate recusandae excepturi dicta in nobis."}),Object(n.jsxs)(j.b,{fontWeight:700,py:"m",px:"l",type:"primary",children:[Object(n.jsx)(j.a,{mr:".375rem",display:"inline",position:"relative",top:3,children:Object(n.jsx)(c.b,{})}),"Call to action"]})]})})})]})},m=Object(s.d)(j.a)(p()),y=Object(s.d)(j.a)(h()),w=function(e){return e.charAt(0).toLocaleUpperCase()+e.slice(1)},v=function(e){var t=e.children.split("-").map(w).join(" ");return Object(n.jsx)(u,{ml:"s",children:Object(n.jsx)("span",{children:t})})},k=function(e){var t=e.colors,r=e.name;return Object(n.jsxs)(y,{children:[Object(n.jsx)(m,{children:Object(n.jsx)(j.a,{width:"100%",height:"100%",style:{borderRadius:"4px"},children:Object(n.jsxs)(j.a,{style:{borderRadius:"10%",overflow:"hidden",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsxs)(j.a,{style:{display:"flex",width:"100%",height:"1px",flexGrow:1},children:[Object(n.jsx)(j.a,{style:{backgroundColor:t.primary,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}}),Object(n.jsx)(j.a,{style:{backgroundColor:t.secondary,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}}),Object(n.jsx)(j.a,{style:{backgroundColor:t.tertiary,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}})]}),Object(n.jsxs)(j.a,{style:{display:"flex",width:"100%",height:"1px",flexGrow:1},children:[Object(n.jsx)(j.a,{style:{backgroundColor:t.red,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}}),Object(n.jsx)(j.a,{style:{backgroundColor:t.green,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}}),Object(n.jsx)(j.a,{style:{backgroundColor:t.yellow,width:"100%",height:"100%",borderRight:"1px inset rgba(0,0,0,0.1)",borderBottom:"1px solid rgba(0,0,0,0.1)"}})]})]})})}),Object(n.jsx)(v,{children:r})]})},C=r(22),R=r(23);function B(){var e=Object(i.a)(["\n  ","\n  position: relative;\n  display: block;\n  cursor: pointer;\n  border-bottom: 1px solid #F6F9FC;\n  \n  &:hover {\n    background-color: #f6f6f6;\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: .25rem;\n\n  li:last-child {\n    border-bottom: none;\n  }\n"]);return L=function(){return e},e}function W(){var e=Object(i.a)(["\n  max-width: 7rem;\n  padding: 8px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  border: solid 1px #fefefe;\n"]);return W=function(){return e},e}var q=b.a.H5,F=b.a.Link,H=(b.a.Span,Object(s.d)(j.a)(W()),Object(s.d)("ul")(L())),S=Object(s.d)("li")(B(),j.q);t.default=function(){var e=Object(C.c)(),t=e.theme,r=e.selectTheme;return Object(n.jsxs)(j.a,{width:"100%",children:[Object(n.jsxs)(j.e,{children:[Object(n.jsx)(q,{color:"#959599",children:"Theme"}),Object(n.jsxs)(j.a,{display:"flex",children:[Object(n.jsx)(j.a,{mx:"s",children:Object(n.jsx)(l.a,{})}),Object(n.jsx)(j.a,{minWidth:"150px",mx:"xs",children:Object(n.jsxs)(F,{to:"/",as:j.b,children:[Object(n.jsx)(j.a,{mr:".375rem",display:"inline",position:"relative",top:3,children:Object(n.jsx)(c.f,{})}),"Output Page"]})})]})]}),Object(n.jsxs)(j.a,{display:"flex",style:{flexWrap:"wrap",borderBottom:"solid 1px #efefef"},children:[Object(n.jsx)(j.a,{width:[1,"25%"],children:Object(n.jsx)(H,{children:R.a.map((function(e){var i=R.b[e].colors;return Object(n.jsx)(S,{backgroundColor:t===e?"primary-lightened":"#fff",onClick:function(){return r(e)},children:Object(n.jsx)(k,{name:e,colors:i})},e)}))})}),Object(n.jsx)(j.a,{width:[1,"75%"],p:"l",style:{borderLeft:"1px solid rgba(0,0,0,.125)"},children:Object(n.jsx)(O,{})})]})]})}}}]);
//# sourceMappingURL=8.4e0a4898.chunk.js.map