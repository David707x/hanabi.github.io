/*! For license information please see c57e9e69.0c81e20a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[7750,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566,7800,6480,1954,1038,8343,7791,203,8786],{433:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),i=n(4334),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:n},t)}},2808:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(3117),i=n(7294),a=n(4334),l=n(3735),s=n(6775),c=n(4423),o=n(636),u=n(9200);function p(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(l),(0,i.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function f(e){var t,n,r,a,l=e.defaultValue,s=e.queryString,c=void 0!==s&&s,o=e.groupId,p=g(e),f=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:p})})),h=f[0],v=f[1],b=m({queryString:c,groupId:o}),y=b[0],x=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:o}.groupId),n=(0,u.Nk)(t),r=n[0],a=n[1],[r,(0,i.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=w[0],E=w[1],q=function(){var e=null!=y?y:k;return d({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){q&&v(q)}),[q]),{selectedValue:h,selectValue:(0,i.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),E(e)}),[x,E,p]),tabValues:p}}var h=n(5730),v="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,n=e.block,s=e.selectedValue,c=e.selectValue,o=e.tabValues,u=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==s&&(p(t),c(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var r,i=u.indexOf(e.currentTarget)+1;n=null!=(r=u[i])?r:u[0];break;case"ArrowLeft":var a,l=u.indexOf(e.currentTarget)-1;n=null!=(a=u[l])?a:u[u.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},o.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:g},l,{className:(0,a.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=a.find((function(e){return e.props.value===r}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",v)},i.createElement(y,(0,r.Z)({},e,t)),i.createElement(x,(0,r.Z)({},e,t)))}function k(e){var t=(0,h.Z)();return i.createElement(w,(0,r.Z)({key:String(t)},e))}},2721:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25","summary"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7872),i=n(7294),a=n(5774),l=n(2721),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,s),"beginner"===c[0]&&c.shift();var o=c.length;function u(e){var t=e.id,n=c.indexOf("beginner/"+t);if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/o*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},4791:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=(n(7241),n(2808)),s=n(433),c=n(8524),o=["components"],u={id:"early-game-question-4",title:"The Early Game (Question 4)"},p=void 0,g={unversionedId:"beginner/early-game-question-4",id:"beginner/early-game-question-4",title:"The Early Game (Question 4)",description:"<Tabs",source:"@site/docs/beginner/early-game-question-4.mdx",sourceDirName:"beginner",slug:"/beginner/early-game-question-4",permalink:"/docs/beginner/early-game-question-4",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/early-game-question-4.mdx",tags:[],version:"current",frontMatter:{id:"early-game-question-4",title:"The Early Game (Question 4)"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"question",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is currently the ",(0,a.kt)("em",{parentName:"li"},"Early Game"),". There is 1 clue token left."),(0,a.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,a.kt)(s.Z,{value:"solution",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At level 1, there are no legal action that can be performed. Thus, Alice must discard.")))),(0,a.kt)(c.Z,{mdxType:"EarlyGameQuestion4"}))}h.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=o(n),d=i,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8524:function(e,t,n){"use strict";var r,i,a,l,s,c,o,u,p,g,d,m,f,h,v,b,y,x,w,k,E,q,O,N,P=n(7294),C=["title","titleId"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.title,n=e.titleId,S=j(e,C);return P.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 866 500",width:866,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,r||(r=P.createElement("defs",null,P.createElement("filter",{x:0,y:0,width:1,height:1,id:"early-game-question-4_yml__a"},P.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=P.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red2.svg"})),a||(a=P.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=P.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green3.svg"})),s||(s=P.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),c||(c=P.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),P.createElement("svg",T({height:100,width:90,x:464,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=P.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#early-game-question-4_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=P.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),P.createElement("svg",T({height:100,width:70,x:554,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,p||(p=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",T({height:100,width:70,x:632,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,g||(g=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",T({height:100,width:70,x:710,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,d||(d=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",T({height:100,width:70,x:788,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,m||(m=P.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),P.createElement("svg",T({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=P.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),h||(h=P.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red1.svg",y:125})),v||(v=P.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/purple3.svg",y:125})),b||(b=P.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green1.svg",y:125})),P.createElement("svg",T({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),y||(y=P.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple2.svg",y:250})),x||(x=P.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue4.svg",y:250})),w||(w=P.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue4.svg",y:250})),k||(k=P.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red2.svg",y:250})),P.createElement("svg",T({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":n},S),t?P.createElement("title",{id:n},t):null,P.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Donald")),E||(E=P.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple5.svg",y:375})),q||(q=P.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/green3.svg",y:375})),O||(O=P.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue1.svg",y:375})),N||(N=P.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red1.svg",y:375})))}},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return c}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);