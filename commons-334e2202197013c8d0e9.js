(self.webpackChunkroot_p_blog=self.webpackChunkroot_p_blog||[]).push([[351],{6541:function(e,t,r){"use strict";r.d(t,{LZ:function(){return Z},M5:function(){return T},Ug:function(){return re},X6:function(){return P},kC:function(){return N},xu:function(){return g},xv:function(){return ie}});var n=r(3050),a=r(9183),i=r(8015),o=r(7294),c=r(8426),s=r(9818);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["ratio","children","className"],d=(0,n.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,c=e.children,s=e.className,d=u(e,p),f=o.Children.only(c),m=(0,i.cx)("chakra-aspect-ratio",s);return o.createElement(n.m$.div,l({ref:t,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},d),f)}));i.Ts&&(d.displayName="AspectRatio");var f=["className"],m=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var c=u(a,f);return o.createElement(n.m$.span,l({ref:t,className:(0,i.cx)("chakra-badge",e.className)},c,{__css:l({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));i.Ts&&(m.displayName="Badge");var y=["size","centerContent"],h=["size"],g=(0,n.m$)("div");i.Ts&&(g.displayName="Box");var v=(0,n.Gp)((function(e,t){var r=e.size,n=e.centerContent,a=void 0===n||n,i=u(e,y),c=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(g,l({ref:t,boxSize:r,__css:l({},c,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(v.displayName="Square");var b=(0,n.Gp)((function(e,t){var r=e.size,n=u(e,h);return o.createElement(v,l({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(b.displayName="Circle");var T=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(T.displayName="Center");var w=["className"],E=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var c=u(a,w);return o.createElement(n.m$.code,l({ref:t,className:(0,i.cx)("chakra-code",e.className)},c,{__css:l({display:"inline-block"},r)}))}));i.Ts&&(E.displayName="Code");var C=["className","centerContent"],x=(0,n.Gp)((function(e,t){var r=(0,n.Lr)(e),a=r.className,c=r.centerContent,s=u(r,C),p=(0,n.mq)("Container",e);return o.createElement(n.m$.div,l({ref:t,className:(0,i.cx)("chakra-container",a)},s,{__css:l({},p,c&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(x.displayName="Container");var S=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],O=["className","orientation","__css"],_=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Divider",e),a=r.borderLeftWidth,c=r.borderBottomWidth,s=r.borderTopWidth,p=r.borderRightWidth,d=r.borderWidth,f=r.borderStyle,m=r.borderColor,y=u(r,S),h=(0,n.Lr)(e),g=h.className,v=h.orientation,b=void 0===v?"horizontal":v,T=h.__css,w=u(h,O),E={vertical:{borderLeftWidth:a||p||d||"1px",height:"100%"},horizontal:{borderBottomWidth:c||s||d||"1px",width:"100%"}};return o.createElement(n.m$.hr,l({ref:t,"aria-orientation":b},w,{__css:l({},y,{border:"0",borderColor:m,borderStyle:f},E[b],T),className:(0,i.cx)("chakra-divider",g)}))}));i.Ts&&(_.displayName="Divider");var k=["direction","align","justify","wrap","basis","grow","shrink"],N=(0,n.Gp)((function(e,t){var r=e.direction,a=e.align,i=e.justify,c=e.wrap,s=e.basis,p=e.grow,d=e.shrink,f=u(e,k),m={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:c,flexBasis:s,flexGrow:p,flexShrink:d};return o.createElement(n.m$.div,l({ref:t,__css:m},f))}));i.Ts&&(N.displayName="Flex");var A=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],j=(0,n.Gp)((function(e,t){var r=e.templateAreas,a=e.gap,i=e.rowGap,c=e.columnGap,s=e.column,p=e.row,d=e.autoFlow,f=e.autoRows,m=e.templateRows,y=e.autoColumns,h=e.templateColumns,g=u(e,A),v={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:c,gridAutoColumns:y,gridColumn:s,gridRow:p,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:m,gridTemplateColumns:h};return o.createElement(n.m$.div,l({ref:t,__css:v},g))}));i.Ts&&(j.displayName="Grid");var L=["className"],P=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var c=u(a,L);return o.createElement(n.m$.h2,l({ref:t,className:(0,i.cx)("chakra-heading",e.className)},c,{__css:r}))}));i.Ts&&(P.displayName="Heading");var I=["className"],R=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),c=a.className,s=u(a,I);return o.createElement(n.m$.kbd,l({ref:t,className:(0,i.cx)("chakra-kbd",c)},s,{__css:l({fontFamily:"mono"},r)}))}));i.Ts&&(R.displayName="Kbd");var M=["className","isExternal"],W=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Link",e),a=(0,n.Lr)(e),c=a.className,s=a.isExternal,p=u(a,M);return o.createElement(n.m$.a,l({target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",c)},p,{__css:r}))}));i.Ts&&(W.displayName="Link");var G=["children","styleType","stylePosition","spacing"],B=["as"],D=["as"],q=(0,n.eC)("List"),F=q[0],H=q[1],$=(0,n.Gp)((function(e,t){var r,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),c=i.children,p=i.styleType,d=void 0===p?"none":p,f=i.stylePosition,m=i.spacing,y=u(i,G),h=(0,s.WR)(c),g=m?((r={})["& > *:not(style) ~ *:not(style)"]={mt:m},r):{};return o.createElement(F,{value:a},o.createElement(n.m$.ul,l({ref:t,listStyleType:d,listStylePosition:f,role:"list",__css:l({},a.container,g)},y),h))}));i.Ts&&($.displayName="List");var Y=(0,n.Gp)((function(e,t){e.as;var r=u(e,B);return o.createElement($,l({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));i.Ts&&(Y.displayName="OrderedList");var U=(0,n.Gp)((function(e,t){e.as;var r=u(e,D);return o.createElement($,l({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));i.Ts&&(U.displayName="UnorderedList");var X=(0,n.Gp)((function(e,t){var r=H();return o.createElement(n.m$.li,l({ref:t},e,{__css:r.item}))}));i.Ts&&(X.displayName="ListItem");var z=(0,n.Gp)((function(e,t){var r=H();return o.createElement(c.JO,l({ref:t,role:"presentation"},e,{__css:r.icon}))}));i.Ts&&(z.displayName="ListIcon");var K=["columns","spacingX","spacingY","spacing","minChildWidth"],Q=(0,n.Gp)((function(e,t){var r,n,a=e.columns,c=e.spacingX,s=e.spacingY,p=e.spacing,d=e.minChildWidth,f=u(e,K),m=d?(n=d,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,i.hj)(t)?t+"px":t)+", 1fr))");var t}))):(r=a,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(j,l({ref:t,gap:p,columnGap:c,rowGap:s,templateColumns:m},f))}));i.Ts&&(Q.displayName="SimpleGrid");var Z=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(Z.displayName="Spacer");var V="& > *:not(style) ~ *:not(style)";var J=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return o.createElement(n.m$.div,l({className:"chakra-stack__item"},e,{__css:l({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},te=(0,n.Gp)((function(e,t){var r,a=e.isInline,c=e.direction,p=e.align,d=e.justify,f=e.spacing,m=void 0===f?"0.5rem":f,y=e.wrap,h=e.children,g=e.divider,v=e.className,b=e.shouldWrapChildren,T=u(e,J),w=a?"row":null!=c?c:"column",E=o.useMemo((function(){return function(e){var t,r=e.spacing,n=e.direction,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(t={flexDirection:n})[V]=(0,i.XQ)(n,(function(e){return a[e]})),t}({direction:w,spacing:m})}),[w,m]),C=o.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(r,(function(e){return n[e]}))}}({spacing:m,direction:w})}),[m,w]),x=!!g,S=!b&&!x,O=(0,s.WR)(h),_=S?O:O.map((function(e,t){var r=void 0!==e.key?e.key:t,n=t+1===O.length,a=b?o.createElement(ee,{key:r},e):e;if(!x)return a;var i=n?null:o.cloneElement(g,{__css:C});return o.createElement(o.Fragment,{key:r},a,i)})),k=(0,i.cx)("chakra-stack",v);return o.createElement(n.m$.div,l({ref:t,display:"flex",alignItems:p,justifyContent:d,flexDirection:E.flexDirection,flexWrap:y,className:k,__css:x?{}:(r={},r[V]=E[V],r)},T),_)}));i.Ts&&(te.displayName="Stack");var re=(0,n.Gp)((function(e,t){return o.createElement(te,l({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(re.displayName="HStack");var ne=(0,n.Gp)((function(e,t){return o.createElement(te,l({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(ne.displayName="VStack");var ae=["className","align","decoration","casing"],ie=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var c=u(a,ae),s=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,l({ref:t,className:(0,i.cx)("chakra-text",e.className)},s,c,{__css:r}))}));i.Ts&&(ie.displayName="Text");var oe=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],ce=["className"];function se(e){return"number"==typeof e?e+"px":e}var le=(0,n.Gp)((function(e,t){var r=e.spacing,c=void 0===r?"0.5rem":r,s=e.spacingX,p=e.spacingY,d=e.children,f=e.justify,m=e.direction,y=e.align,h=e.className,g=e.shouldWrapChildren,v=u(e,oe),b=o.useMemo((function(){var e={spacingX:s,spacingY:p},t=e.spacingX,r=void 0===t?c:t,n=e.spacingY,o=void 0===n?c:n;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(r,(function(t){return se((0,a.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(o,(function(t){return se((0,a.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:f,alignItems:y,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[c,s,p,f,y,m]),T=g?o.Children.map(d,(function(e,t){return o.createElement(ue,{key:t},e)})):d;return o.createElement(n.m$.div,l({ref:t,className:(0,i.cx)("chakra-wrap",h),overflow:"hidden"},v),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:b},T))}));i.Ts&&(le.displayName="Wrap");var ue=(0,n.Gp)((function(e,t){var r=e.className,a=u(e,ce);return o.createElement(n.m$.li,l({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",r)},a))}));i.Ts&&(ue.displayName="WrapItem")},6494:function(e){"use strict";e.exports=Object.assign},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):r&&(s=r(s))}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(p,"canUseDOM",c),p}}},9040:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=o(r(2)),i=o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}var c={src:i.default.string.isRequired,alt:i.default.string.isRequired,placeholderImgUrl:i.default.string,containerStyles:i.default.object,imageStyles:i.default.object,transitionTime:i.default.number,transitionTimingFunction:i.default.string},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loaded:{}},r.imageLoadHandler=r.imageLoadHandler.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"imageLoadHandler",value:function(){var e=this.props,t=e.transitionTime,r=e.transitionTimingFunction;this.setState({loaded:{opacity:"1",transitionProperty:"opacity",transitionDuration:t+"s",transitionTimingFunction:r}})}},{key:"render",value:function(){var e=this.props,t=e.placeholderImgUrl,r=e.containerStyles,n=e.imageStyles,i=e.src,o=e.alt,c=t&&"url("+t+")",s=this.state.loaded;return a.default.createElement("div",{style:Object.assign({},{position:"relative",width:"100%",height:0,opacity:0,overflow:"hidden",backgroundImage:c,paddingBottom:"100%",backgroundSize:"cover"},r,s)},a.default.createElement("img",{src:i,alt:o,style:Object.assign({position:"absolute",top:0,left:0,width:"100%"},n),onLoad:this.imageLoadHandler}))}}]),t}();t.default=s,s.propTypes=c,s.defaultProps={containerStyles:{},imageStyles:{},transitionTime:.3,transitionTimingFunction:"ease-in",placeholderImgUrl:""}},function(e,t){e.exports=r(7294)},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";var n=r(5);function a(){}e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=a,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},1825:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(1597),i=r(6541);function o(e){e.isRootPath;var t=e.title;return n.createElement("header",null,n.createElement(i.kC,{w:"100%",h:"5vh",borderBottom:"1px black solid",mb:1,margin:"auto"},n.createElement(i.kC,{alignSelf:"center"},n.createElement(a.Link,{to:"/"},n.createElement(i.X6,{as:"h1",size:"1x1",pl:10,noOfLines:1},t))),n.createElement(i.LZ,null),n.createElement(i.kC,{alignSelf:"center",pr:70,w:120},n.createElement(a.Link,{to:"/blog"},"Blog"))))}r(9040);var c={position:"fixed",top:"5%",height:"95vh",width:"100vw",zIndex:-1},s=function(e){var t=e.location,r=e.title,a=e.bgImg,s=e.children,l="/ParkAward.github.io/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":l},n.createElement(o,{className:"global-header",isRootPath:l,title:r}),n.createElement("main",null,n.createElement("div",{className:"global-main",style:{position:"relative"}},n.createElement(i.M5,{flexDirection:"column"},s),n.createElement("img",{style:c,transitionTime:1,src:a,alt:"bgImage",loading:"lazy"}))))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,a,i,o,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),p=r.n(u),d=r(2993),f=r.n(d),m=r(6494),y=r.n(m),h="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",E="href",C="http-equiv",x="innerHTML",S="itemprop",O="name",_="property",k="rel",N="src",A="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",I="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",W=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),G=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=V(e,b.TITLE),r=V(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,L);return t||n||void 0},z=function(e){return V(e,R)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==x&&c!==w&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=y()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(b.BODY,n),se(b.HTML,a),ce(p,d);var f={baseTag:le(b.BASE,r),linkTags:le(b.LINK,i),metaTags:le(b.META,o),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},m={},y={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=f[e].oldTags)})),t&&t(),s(e,m,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(b.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);a.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==o.join(",")&&r.setAttribute(B,o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,a=pe(r,n),[c.createElement(b.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case g:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===x||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(b.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(g,a,n),link:de(b.LINK,i,n),meta:de(b.META,o,n),noscript:de(b.NOSCRIPT,c,n),script:de(b.SCRIPT,s,n),style:de(b.STYLE,l,n),title:de(b.TITLE,{title:p,titleAttributes:d},n)}},me=p()((function(e){return{baseTag:Q([E,A],e),bodyAttributes:K(h,e),defer:V(e,P),encode:V(e,I),htmlAttributes:K(g,e),linkTags:Z(b.LINK,[k,E],e),metaTags:Z(b.META,[O,T,C,_,S],e),noscriptTags:Z(b.NOSCRIPT,[x],e),onChangeClientState:z(e),scriptTags:Z(b.SCRIPT,[N,x],e),styleTags:Z(b.STYLE,[w],e),title:X(e),titleAttributes:K(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),fe)((function(){return null})),ye=(a=me,o=i=function(e){function t(){return q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case b.TITLE:return H({},a,((t={})[n.type]=o,t.titleAttributes=H({},i),t));case b.BODY:return H({},a,{bodyAttributes:H({},i)});case b.HTML:return H({},a,{htmlAttributes:H({},i)})}return H({},a,((r={})[n.type]=H({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)}($(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=$(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind;var he=r(1597),ge=function(e){var t,r,n,a=e.description,i=e.lang,o=e.meta,s=e.title,l=(0,he.useStaticQuery)("2841359383").site,u=a||l.siteMetadata.description,p=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:i},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o)})};ge.defaultProps={lang:"en",meta:[],description:""};var ve=ge}}]);
//# sourceMappingURL=commons-334e2202197013c8d0e9.js.map