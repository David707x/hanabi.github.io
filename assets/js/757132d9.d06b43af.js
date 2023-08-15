/*! For license information please see 757132d9.d06b43af.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4829,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566],{433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),i=n(4334);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,s),hidden:n},t)}},2808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(3117),i=n(7294),a=n(4334),s=n(3735),o=n(6775),l=n(4423),c=n(636),u=n(9200);function p(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=l??p;return g({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var h=n(5730);const v="tabList__CuJ",m="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),l(r))},g=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},s,{className:(0,a.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":o===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",v)},i.createElement(y,(0,r.Z)({},e,t)),i.createElement(x,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return i.createElement(k,(0,r.Z)({key:String(t)},e))}},2721:e=>{e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25","summary"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),i=n(5774),a=n(2721);const s=a.mainSidebar.find((e=>e["Beginner's Guide"]))["Beginner's Guide"],o=[];!function e(t,n){for(const r of n)"string"==typeof r?t.push(r):e(t,Object.values(r)[0])}(o,s),"beginner"===o[0]&&o.shift();const l=o.length;function c(e){let{id:t}=e;const n=o.indexOf(`beginner/${t}`);if(-1===n)throw new Error("page id not found in sidebar");const a=Math.round((n+1)/l*100);return(0,r.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),r.createElement("div",{id:"percent"},r.createElement(i.Ip,{value:a,text:`${a}%`}))}},5723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>w,default:()=>P,frontMatter:()=>k,metadata:()=>q,toc:()=>C});var r,i,a,s,o,l,c,u,p,d,g=n(3117),b=n(7294),f=n(3905),h=n(7241),v=n(2808),m=n(433);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}const x=e=>{let{title:t,titleId:n,...g}=e;return b.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:128,viewBox:"0 -3 554 128",width:554,className:"example","aria-labelledby":n},g),t?b.createElement("title",{id:n},t):null,b.createElement("svg",y({height:100,width:90,x:74,className:"example","aria-labelledby":n},g),t?b.createElement("title",{id:n},t):null,b.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice")),r||(r=b.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:161,y:-3})),i||(i=b.createElement("image",{height:100,width:70,x:164,xlinkHref:"/img/pieces/cards/green4.svg"})),a||(a=b.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:239,y:-3})),s||(s=b.createElement("image",{height:100,width:70,x:242,xlinkHref:"/img/pieces/cards/purple3.svg"})),o||(o=b.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:317,y:-3})),l||(l=b.createElement("image",{height:100,width:70,x:320,xlinkHref:"/img/pieces/cards/purple4.svg"})),c||(c=b.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:395,y:-3})),u||(u=b.createElement("image",{height:100,width:70,x:398,xlinkHref:"/img/pieces/cards/green5.svg"})),p||(p=b.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:473,y:-3})),d||(d=b.createElement("image",{height:100,width:70,x:476,xlinkHref:"/img/pieces/cards/blue5.svg"})))},k={id:"chop-question-4",title:"The Chop (Question 4)"},w=void 0,q={unversionedId:"beginner/chop-question-4",id:"beginner/chop-question-4",title:"The Chop (Question 4)",description:"<Tabs",source:"@site/docs/beginner/chop-question-4.mdx",sourceDirName:"beginner",slug:"/beginner/chop-question-4",permalink:"/docs/beginner/chop-question-4",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/chop-question-4.mdx",tags:[],version:"current",frontMatter:{id:"chop-question-4",title:"The Chop (Question 4)"},sidebar:"mainSidebar",previous:{title:"The Chop (Question 3)",permalink:"/docs/beginner/chop-question-3"},next:{title:"Card Notes",permalink:"/docs/beginner/card-notes"}},E={},C=[],O={toc:C};function P(e){let{components:t,...n}=e;return(0,f.kt)("wrapper",(0,g.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,f.kt)(h.Z,{id:"chop-question-4",mdxType:"BeginnersGuideProgress"}),(0,f.kt)(v.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,f.kt)(m.Z,{value:"question",mdxType:"TabItem"},(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,f.kt)(m.Z,{value:"solution",mdxType:"TabItem"},(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"This is a trick question. Alice ",(0,f.kt)("strong",{parentName:"li"},"does not have a chop"),", because all of her cards are clued. Alice is ",(0,f.kt)("strong",{parentName:"li"},"not allowed to discard"),".")))),(0,f.kt)(x,{mdxType:"ChopQuestion4"}))}P.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5774:(e,t,n)=>{"use strict";n.d(t,{Ip:()=>l});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:a,dashRatio:i,counterClockwise:n})),d:s({pathRadius:a,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function s(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,s=e.counterClockwise,o=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:s,dashRatio:t,pathRadius:u,strokeWidth:l,style:o.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:s,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:o.path}),c?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);