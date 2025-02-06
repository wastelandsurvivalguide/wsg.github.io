"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[7958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),m=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||l;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<l;m++)o[m]=a[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));const l={},o="Optimizations",s={unversionedId:"optimizations",id:"optimizations",title:"Optimizations",description:"---",source:"@site/docs/optimizations.md",sourceDirName:".",slug:"/optimizations",permalink:"/docs/optimizations",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/optimizations.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Extra Utilities & Fixes",permalink:"/docs/fixes"},next:{title:"User Interface & HUD",permalink:"/docs/ui"}},r={},m=[{value:"Separator:",id:"separator",level:4},{value:"Improved AI (Navmesh Overhaul Mod)",id:"improved-ai-navmesh-overhaul-mod",level:3},{value:"Installation:",id:"installation",level:4},{value:"TTW Ultimate Invisible Wall Remover",id:"ttw-ultimate-invisible-wall-remover",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"Collision Meshes - DC",id:"collision-meshes---dc",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Collision Meshes - NV",id:"collision-meshes---nv",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"MAC-TEN",id:"mac-ten",level:3},{value:"Items Transformed - Enhanced Meshes (ITEM)",id:"items-transformed---enhanced-meshes-item",level:3},{value:"Performance Of The Titans",id:"performance-of-the-titans",level:3},{value:"Optimized Weapon World Models (ESPLESS)",id:"optimized-weapon-world-models-espless",level:3},{value:"Vent Lighting Fix",id:"vent-lighting-fix",level:3},{value:"PipBoyOn Node Fixes",id:"pipboyon-node-fixes",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Female Pipboy Fixed - Ultimate Edition",id:"female-pipboy-fixed---ultimate-edition",level:3},{value:"Fog-based Object Culling",id:"fog-based-object-culling",level:3},{value:"ExRB - Extended Roombounds",id:"exrb---extended-roombounds",level:3},{value:"Fallout 3 TTW Interior Optimization Project",id:"fallout-3-ttw-interior-optimization-project",level:3},{value:"Installation:",id:"installation-5",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"optimizations"},"Optimizations"),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"separator"},"Separator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Right-click the empty space in the left pane of MO2 and select ",(0,n.kt)("strong",{parentName:"li"},"Create separator"),"."),(0,n.kt)("li",{parentName:"ul"},"Name the separator ",(0,n.kt)("strong",{parentName:"li"},"Optimizations"),".")),(0,n.kt)("admonition",{title:"What will these optimizations do?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"These mods will not have a noticable visual impact, but will significant improve your performance and experience with AI throughout the game.")),(0,n.kt)("h3",{id:"improved-ai-navmesh-overhaul-mod"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81003"},"Improved AI (Navmesh Overhaul Mod)")),(0,n.kt)("p",null,"Fixes and improves vanilla game pathfinding errors and will provide a better and more challenging experience with the AI. ",(0,n.kt)("strong",{parentName:"p"},"ONLY")," affects the Mojave worldspace. Navmeshes in the Capital Wasteland are already high quality."),(0,n.kt)("h4",{id:"installation"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Navmesh Overhaul")),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"A compatibility patch is ",(0,n.kt)("strong",{parentName:"p"},"NO LONGER")," required for this mod.")),(0,n.kt)("h3",{id:"ttw-ultimate-invisible-wall-remover"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77975"},"TTW Ultimate Invisible Wall Remover")),(0,n.kt)("p",null,"A comprehensive invisible wall remover for Tale of Two Wastelands."),(0,n.kt)("h4",{id:"installation-1"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - TTW Ultimate Invisible Wall Remover (ESM Version)")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"MAY")," break scripted events if quest related areas are entered from the incorrect route (eg climbing over a previously unpassable hill rather than navigating through the sewers to get to the GNR building), but is otherwise a MASSIVE quality of life improvement.")),(0,n.kt)("h3",{id:"collision-meshes---dc"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/fallout3/mods/21946"},"Collision Meshes - DC")),(0,n.kt)("p",null,"Improves collision meshes in the Capital Wasteland."),(0,n.kt)("h4",{id:"installation-2"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Collision Meshes FO3")),(0,n.kt)("h3",{id:"collision-meshes---nv"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/59149"},"Collision Meshes - NV")),(0,n.kt)("p",null,"Improves collision meshes in the Mojave Wasteland."),(0,n.kt)("h4",{id:"installation-3"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Collision Meshes FNV"),(0,n.kt)("li",{parentName:"ul"},"Main File - Update Collision Meshes FNV 1.6.3 to 1.6.4")),(0,n.kt)("h3",{id:"mac-ten"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/83815"},"MAC-TEN")),(0,n.kt)("p",null,"Fixes dozens of game models across the base game and DLCs."),(0,n.kt)("h3",{id:"items-transformed---enhanced-meshes-item"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/85622"},"Items Transformed - Enhanced Meshes (ITEM)")),(0,n.kt)("p",null,"ITEM is a general bug fixing mod for dozens of item models across the base game and DLCs."),(0,n.kt)("h3",{id:"performance-of-the-titans"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/89069"},"Performance Of The Titans")),(0,n.kt)("p",null,"Mod that improves game performance and stability by removing unnecessary and hidden geometry for major areas of the New Vegas worldspace and its DLCs."),(0,n.kt)("h3",{id:"optimized-weapon-world-models-espless"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/88611"},"Optimized Weapon World Models (ESPLESS)")),(0,n.kt)("p",null,'Adds new "world models" for weapons on the ground for better combat performance with zero visual or gameplay changes from vanilla.'),(0,n.kt)("h3",{id:"vent-lighting-fix"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/83051"},"Vent Lighting Fix")),(0,n.kt)("p",null,"Adds a shader flag to vent meshes that fixes flickering and lighting issues."),(0,n.kt)("h3",{id:"pipboyon-node-fixes"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81775"},"PipBoyOn Node Fixes")),(0,n.kt)("p",null,"Fixes multiple pipboy:on nodes in the vanilla game armor meshes and TTW to remove the annoying pip-boy flicker."),(0,n.kt)("h4",{id:"installation-4"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - PipBoyOn Node Fixes TTW")),(0,n.kt)("h3",{id:"female-pipboy-fixed---ultimate-edition"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/87642"},"Female Pipboy Fixed - Ultimate Edition")),(0,n.kt)("p",null,"Fixes misaligned Pip-Boy view for female characters as well as wrist gaps in first person."),(0,n.kt)("h3",{id:"fog-based-object-culling"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79516"},"Fog-based Object Culling")),(0,n.kt)("p",null,"Dynamically adjusts draw distance in accordance with the fog to improve performance with little to no visual difference."),(0,n.kt)("h3",{id:"exrb---extended-roombounds"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71501"},"ExRB - Extended Roombounds")),(0,n.kt)("p",null,"Adds and changes roombounds for many interior cells throughout the Mojave Wasteland to improve performance."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - ExRB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Step 1:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Full"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Full (YUP)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Full (TTW)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Compatibility"))),(0,n.kt)("li",{parentName:"ul"},"Step 2:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A World of Pain - ",(0,n.kt)("strong",{parentName:"li"},"DO NOT")," install this patch. It is incompatible with the overhauls used in the guide")))))),(0,n.kt)("h3",{id:"fallout-3-ttw-interior-optimization-project"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/85909"},"Fallout 3 TTW Interior Optimization Project")),(0,n.kt)("p",null,"Optimizes more than 200 interior cells with roombounds and occlusion planes to improve performance in the Capital Wasteland."),(0,n.kt)("h4",{id:"installation-5"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Fallout 3 Interior Optimization Project")))}u.isMDXComponent=!0}}]);