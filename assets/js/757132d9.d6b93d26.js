/*! For license information please see 757132d9.d6b93d26.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4829,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566,7800,6480,1954,1038,8343,7791,203,8786],{433:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),i=t(4334),a="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:t},n)}},2808:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(3117),i=t(7294),a=t(4334),o=t(3735),s=t(6775),l=t(4423),u=t(636),c=t(9200);function p(e){return function(e){var n,t;return null!=(n=null==(t=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,a=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function v(e){var n,t,r,a,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=f(e),v=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:p})})),b=v[0],h=v[1],m=g({queryString:l,groupId:u}),y=m[0],x=m[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),r=t[0],a=t[1],[r,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),k=w[0],q=w[1],E=function(){var e=null!=y?y:k;return d({value:e,tabValues:p})?e:null}();return(0,i.useLayoutEffect)((function(){E&&h(E)}),[E]),{selectedValue:b,selectValue:(0,i.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),x(e),q(e)}),[x,q,p]),tabValues:p}}var b=t(5730),h="tabList__CuJ",m="tabItem_LNqP";function y(e){var n=e.className,t=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==s&&(p(n),l(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,i=c.indexOf(e.currentTarget)+1;t=null!=(r=c[i])?r:c[0];break;case"ArrowLeft":var a,o=c.indexOf(e.currentTarget)-1;t=null!=(a=c[o])?a:c[c.length-1]}null==(n=t)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},o,{className:(0,a.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function x(e){var n=e.lazy,t=e.children,r=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=a.find((function(e){return e.props.value===r}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=v(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",h)},i.createElement(y,(0,r.Z)({},e,n)),i.createElement(x,(0,r.Z)({},e,n)))}function k(e){var n=(0,b.Z)();return i.createElement(w,(0,r.Z)({key:String(n)},e))}},2721:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25","summary"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7872),i=t(7294),a=t(5774),o=t(2721),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(n,t){for(var i,a=(0,r.Z)(t);!(i=a()).done;){var o=i.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var u=l.length;function c(e){var n=e.id,t=l.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var r=Math.round((t+1)/u*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},5723:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return T},contentTitle:function(){return C},default:function(){return S},frontMatter:function(){return O},metadata:function(){return P},toc:function(){return j}});var r,i,a,o,s,l,u,c,p,f,d=t(3117),g=t(102),v=t(7294),b=t(3905),h=t(7241),m=t(2808),y=t(433),x=["title","titleId"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w.apply(this,arguments)}function k(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var q=function(e){var n=e.title,t=e.titleId,d=k(e,x);return v.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:128,viewBox:"0 -3 554 128",width:554,className:"example","aria-labelledby":t},d),n?v.createElement("title",{id:t},n):null,v.createElement("svg",w({height:100,width:90,x:74,className:"example","aria-labelledby":t},d),n?v.createElement("title",{id:t},n):null,v.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice")),r||(r=v.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:161,y:-3})),i||(i=v.createElement("image",{height:100,width:70,x:164,xlinkHref:"/img/pieces/cards/green4.svg"})),a||(a=v.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:239,y:-3})),o||(o=v.createElement("image",{height:100,width:70,x:242,xlinkHref:"/img/pieces/cards/purple3.svg"})),s||(s=v.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:317,y:-3})),l||(l=v.createElement("image",{height:100,width:70,x:320,xlinkHref:"/img/pieces/cards/purple4.svg"})),u||(u=v.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:395,y:-3})),c||(c=v.createElement("image",{height:100,width:70,x:398,xlinkHref:"/img/pieces/cards/green5.svg"})),p||(p=v.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:473,y:-3})),f||(f=v.createElement("image",{height:100,width:70,x:476,xlinkHref:"/img/pieces/cards/blue5.svg"})))},E=["components"],O={id:"chop-question-4",title:"The Chop (Question 4)"},C=void 0,P={unversionedId:"beginner/chop-question-4",id:"beginner/chop-question-4",title:"The Chop (Question 4)",description:"<Tabs",source:"@site/docs/beginner/chop-question-4.mdx",sourceDirName:"beginner",slug:"/beginner/chop-question-4",permalink:"/docs/beginner/chop-question-4",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/chop-question-4.mdx",tags:[],version:"current",frontMatter:{id:"chop-question-4",title:"The Chop (Question 4)"},sidebar:"mainSidebar",previous:{title:"The Chop (Question 3)",permalink:"/docs/beginner/chop-question-3"},next:{title:"Card Notes",permalink:"/docs/beginner/card-notes"}},T={},j=[],N={toc:j};function S(e){var n=e.components,t=(0,g.Z)(e,E);return(0,b.kt)("wrapper",(0,d.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,b.kt)(h.Z,{id:"chop-question-4",mdxType:"BeginnersGuideProgress"}),(0,b.kt)(m.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,b.kt)(y.Z,{value:"question",mdxType:"TabItem"},(0,b.kt)("ul",null,(0,b.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,b.kt)(y.Z,{value:"solution",mdxType:"TabItem"},(0,b.kt)("ul",null,(0,b.kt)("li",{parentName:"ul"},"This is a trick question. Alice ",(0,b.kt)("strong",{parentName:"li"},"does not have a chop"),", because all of her cards are clued. Alice is ",(0,b.kt)("strong",{parentName:"li"},"not allowed to discard"),".")))),(0,b.kt)(q,{mdxType:"ChopQuestion4"}))}S.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,g=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5774:function(e,n,t){"use strict";t.d(n,{Ip:function(){return l}});var r=t(7294),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},i(e,n)};function a(e){var n=e.className,t=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,u=e.style;return(0,r.createElement)("path",{className:n,style:Object.assign({},u,s({pathRadius:a,dashRatio:i,counterClockwise:t})),d:o({pathRadius:a,counterClockwise:t}),strokeWidth:l,fillOpacity:0})}function o(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function s(e){var n=e.counterClockwise,t=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-t)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(n?-a:a)+"px"}}var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,r=e.maxValue;return(Math.min(Math.max(n,t),r)-t)/(r-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,i=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,u=e.text,c=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+t,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:o,dashRatio:n,pathRadius:c,strokeWidth:l,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:o,dashRatio:p*n,pathRadius:c,strokeWidth:l,style:s.path}),u?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},u):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(r.Component)}}]);