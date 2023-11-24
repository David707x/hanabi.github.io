/*! For license information please see 3c0ce043.90da5d3d.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9852,6807,9074,8895,5010,4788,529,9047,2641,4677,620,926,7389,6216,1702,1566],{433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(7294),r=n(4334);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},2808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var i=n(3117),r=n(7294),a=n(4334),l=n(3735),s=n(6775),c=n(4423),o=n(636),u=n(9200);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,o]=g({queryString:n,groupId:i}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),h(e)}),[o,h,a]),tabValues:a}}var b=n(5730);const f="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),i=o[n].value;i!==s&&(p(t),c(i))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",f)},r.createElement(y,(0,i.Z)({},e,t)),r.createElement(x,(0,i.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return r.createElement(w,(0,i.Z)({key:String(t)},e))}},2721:e=>{e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25","summary"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/omni-ones","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},7241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),r=n(5774),a=n(2721);const l=a.mainSidebar.find((e=>e["Beginner's Guide"]))["Beginner's Guide"],s=[];!function e(t,n){for(const i of n)"string"==typeof i?t.push(i):e(t,Object.values(i)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const n=s.indexOf(`beginner/${t}`);if(-1===n)throw new Error("page id not found in sidebar");const a=Math.round((n+1)/c*100);return(0,i.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(r.Ip,{value:a,text:`${a}%`}))}},3157:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>F,contentTitle:()=>D,default:()=>H,frontMatter:()=>Z,metadata:()=>M,toc:()=>A});var i,r,a,l,s,c,o,u,p,d,m,g,h,b,f,v,y,x,w,E,k,q,N,P,C,O,T=n(3117),S=n(7294),j=n(3905),V=n(7241),_=n(2808),I=n(433);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},B.apply(this,arguments)}const R=e=>{let{title:t,titleId:n,...T}=e;return S.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,i||(i=S.createElement("defs",null,S.createElement("filter",{x:0,y:0,width:1,height:1,id:"finesse-question-2_yml__a"},S.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=S.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),a||(a=S.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow2.svg"})),l||(l=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=S.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),c||(c=S.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple4.svg"})),S.createElement("svg",B({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=S.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#finesse-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=S.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),S.createElement("svg",B({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,p||(p=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,d||(d=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,m||(m=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,g||(g=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:866,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,h||(h=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),S.createElement("svg",B({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,b||(b=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,f||(f=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,v||(v=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),y||(y=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),S.createElement("svg",B({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,x||(x=S.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/3.svg"}))),w||(w=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),S.createElement("svg",B({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,E||(E=S.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"}))),S.createElement("svg",B({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:247})),q||(q=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow4.svg",y:250})),S.createElement("svg",B({height:100,width:70,x:632,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,N||(N=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:710,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,P||(P=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,C||(C=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",B({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,O||(O=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Z={id:"finesse-question-2",title:"The Finesse (Question 2)"},D=void 0,M={unversionedId:"beginner/finesse-question-2",id:"beginner/finesse-question-2",title:"The Finesse (Question 2)",description:"<Tabs",source:"@site/docs/beginner/finesse-question-2.mdx",sourceDirName:"beginner",slug:"/beginner/finesse-question-2",permalink:"/docs/beginner/finesse-question-2",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/finesse-question-2.mdx",tags:[],version:"current",frontMatter:{id:"finesse-question-2",title:"The Finesse (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Finesse (Question 1)",permalink:"/docs/beginner/finesse-question-1"},next:{title:"Next Steps",permalink:"/docs/beginner/next-steps"}},F={},A=[],G={toc:A};function H(e){let{components:t,...n}=e;return(0,j.kt)("wrapper",(0,T.Z)({},G,n,{components:t,mdxType:"MDXLayout"}),(0,j.kt)(V.Z,{id:"finesse-question-2",mdxType:"BeginnersGuideProgress"}),(0,j.kt)(_.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,j.kt)(I.Z,{value:"question",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"Alice clues yellow to Cathy, touching a yellow 4 as a ",(0,j.kt)("em",{parentName:"li"},"Play Clue"),"."),(0,j.kt)("li",{parentName:"ul"},"From Bob's perspective, is this a ",(0,j.kt)("em",{parentName:"li"},"Finesse"),"? Why or why not?"))),(0,j.kt)(I.Z,{value:"solution",mdxType:"TabItem"},(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"No, it is not a ",(0,j.kt)("em",{parentName:"li"},"Finesse"),"."),(0,j.kt)("li",{parentName:"ul"},"Bob has a clued 3 in his hand, which could be the yellow 3. Therefore, this could be a ",(0,j.kt)("em",{parentName:"li"},"Prompt")," on Bob."),(0,j.kt)("li",{parentName:"ul"},"Bob knows that ",(0,j.kt)("em",{parentName:"li"},"Prompts")," take precedence over ",(0,j.kt)("em",{parentName:"li"},"Finesses"),". Since a ",(0,j.kt)("em",{parentName:"li"},"Prompt")," is possible, it cannot be a ",(0,j.kt)("em",{parentName:"li"},"Finesse"),".")))),(0,j.kt)(R,{mdxType:"FinesseQuestion2"}))}H.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5774:(e,t,n)=>{"use strict";n.d(t,{Ip:()=>c});var i=n(7294),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);