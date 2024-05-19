"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[8992],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),m=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=m(e.components);return l.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(t),c=n,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return t?l.createElement(h,r(r({ref:a},p),{},{components:t})):l.createElement(h,r({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:n,r[1]=o;for(var m=2;m<i;m++)r[m]=t[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2394:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var l=t(7462),n=(t(7294),t(3905));const i={},r="Combat",o={unversionedId:"combat",id:"combat",title:"Combat",description:"---",source:"@site/docs/combat.md",sourceDirName:".",slug:"/combat",permalink:"/docs/combat",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/combat.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Gameplay",permalink:"/docs/gameplay"},next:{title:"Content",permalink:"/docs/content"}},s={},m=[{value:"Separator:",id:"separator",level:4},{value:"Guns",id:"guns",level:2},{value:"Weapon Requirements System <sup>Vanilla +</sup>",id:"weapon-requirements-system-vanilla-",level:3},{value:"B42 FireMode - Selective Fire and First Shot Precision - ESPless <sup>Vanilla +</sup>",id:"b42-firemode---selective-fire-and-first-shot-precision---espless-vanilla-",level:3},{value:"Installation:",id:"installation",level:4},{value:"Immersive Recoil 2.0 <sup>Vanilla +</sup>",id:"immersive-recoil-20-vanilla-",level:3},{value:"Immersive Recoil NPC <sup>Vanilla +</sup>",id:"immersive-recoil-npc-vanilla-",level:3},{value:"Reload Reloaded <sup>Vanilla +</sup>",id:"reload-reloaded-vanilla-",level:3},{value:"Weapon Jamming Tweaks <sup>Vanilla +</sup>",id:"weapon-jamming-tweaks-vanilla-",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"B42 True Leaning <sup><del>Vanilla +</del></sup>",id:"b42-true-leaning-vanilla-",level:3},{value:"Melee",id:"melee",level:2},{value:"Power Attack Tweaks <sup>Vanilla +</sup>",id:"power-attack-tweaks-vanilla-",level:3},{value:"SMAC - Simple Melee Attack Canceling <sup>Vanilla +</sup>",id:"smac---simple-melee-attack-canceling-vanilla-",level:3},{value:"Melee Hitstop Effects <sup>Vanilla +</sup>",id:"melee-hitstop-effects-vanilla-",level:3},{value:"Armor",id:"armor",level:2},{value:"Armor Damage Overhaul <sup>Vanilla +</sup>",id:"armor-damage-overhaul-vanilla-",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Grenades",id:"grenades",level:2},{value:"B42 Quickthrow <sup><del>Vanilla +</del></sup>",id:"b42-quickthrow-vanilla-",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"Cookable Grenades <sup><del>Vanilla +</del></sup>",id:"cookable-grenades-vanilla-",level:3},{value:"Reactions &amp; Animations",id:"reactions--animations",level:2},{value:"Crippled Limb Reaction Enforcer <sup>Vanilla +</sup>",id:"crippled-limb-reaction-enforcer-vanilla-",level:3},{value:"Simple Attack Reactions - Limb-Specific Animations <sup><del>Vanilla +</del></sup>",id:"simple-attack-reactions---limb-specific-animations-vanilla-",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Combat AI",id:"combat-ai",level:2},{value:"Player Combat Priority <sup>Hardcore</sup>",id:"player-combat-priority-hardcore",level:3},{value:"Installation:",id:"installation-5",level:4},{value:"Simple AI Merge <sup>Hardcore</sup>",id:"simple-ai-merge-hardcore",level:3},{value:"Installation:",id:"installation-6",level:4}],p={toc:m},u="wrapper";function d(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"combat"},"Combat"),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"separator"},"Separator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Right-click the empty space in the left pane of MO2 and select ",(0,n.kt)("strong",{parentName:"li"},"Create separator"),"."),(0,n.kt)("li",{parentName:"ul"},"Name the separator ",(0,n.kt)("strong",{parentName:"li"},"Combat"),".")),(0,n.kt)("h2",{id:"guns"},"Guns"),(0,n.kt)("h3",{id:"weapon-requirements-system-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69161"},"Weapon Requirements System")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Implements customizable Strength and Skill requirements for weapons, making them actually adhere to their previously inconsequential listed requirements."),(0,n.kt)("h3",{id:"b42-firemode---selective-fire-and-first-shot-precision---espless-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/82576"},"B42 FireMode - Selective Fire and First Shot Precision - ESPless")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Replaces the weapon spread mechanics with one that is far more intuitive and appropriate, without the fundamental flaws present in other mods that alter weapon spread."),(0,n.kt)("h4",{id:"installation"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - B42 FireMode")),(0,n.kt)("h3",{id:"immersive-recoil-20-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/61973"},"Immersive Recoil 2.0")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Adds working recoil to the wasteland. "),(0,n.kt)("h3",{id:"immersive-recoil-npc-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69971"},"Immersive Recoil NPC")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Adds a recoil-like mechanic for all NPCs by tracking the number of shots made by each NPC and briefly stopping them from shooting if they exceed a certain number of shots within too short a time frame."),(0,n.kt)("h3",{id:"reload-reloaded-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/62266"},"Reload Reloaded")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Replacements for agility modifiers to reload and draw speed, strength modifiers to throwing range, and custom sneak attack damage multipliers. Highly customizable."),(0,n.kt)("h3",{id:"weapon-jamming-tweaks-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/82898"},"Weapon Jamming Tweaks")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Replaces the formula for weapon jamming when firing and reloading."),(0,n.kt)("h4",{id:"installation-1"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Weapon Jamming Tweaks")),(0,n.kt)("h3",{id:"b42-true-leaning-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81872"},"B42 True Leaning")," ",(0,n.kt)("sup",null,(0,n.kt)("del",{parentName:"h3"},"Vanilla +"))),(0,n.kt)("p",null,"Adds contextual leaning around corners."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - B42 True Leaning"),(0,n.kt)("li",{parentName:"ul"},"Main File - ",(0,n.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000130112&nmm=1"},"B42 True Leaning - Custom INI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A custom INI for B42 True Leaning that intentionally disables lean hotkeys in favor of the contextual lean feature.")))),(0,n.kt)("h2",{id:"melee"},"Melee"),(0,n.kt)("h3",{id:"power-attack-tweaks-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69238"},"Power Attack Tweaks")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Gives melee power and auto attacks an optional cost in Action Points, allows for regular and special forward power attacks to be used by the player, and allows them to trigger special VATS effects out of VATS."),(0,n.kt)("h3",{id:"smac---simple-melee-attack-canceling-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/82732"},"SMAC - Simple Melee Attack Canceling")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Blocking interrupts your melee/unarmed attacks for quick and responsive defense!"),(0,n.kt)("h3",{id:"melee-hitstop-effects-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75981"},"Melee Hitstop Effects")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Adds hitstop to melee weapons by slowing down gametime to 0.1 for a few frames, then restoring it. Greatly improves the flow of combat."),(0,n.kt)("h2",{id:"armor"},"Armor"),(0,n.kt)("h3",{id:"armor-damage-overhaul-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73267"},"Armor Damage Overhaul")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"This mod completely overhauls the way armor damage is calculated, fully replacing the non-sensical formula that governed condition degradation and damage taken."),(0,n.kt)("h4",{id:"installation-2"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - ADO - Armor Damage Overhaul"),(0,n.kt)("li",{parentName:"ul"},"Main File - ",(0,n.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/79005?tab=files&file_id=1000131074&nmm=1"},"ADO - Custom INI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A custom INI for Armor Damage Overhaul that makes the standard formula much more forgiving.")))),(0,n.kt)("admonition",{title:"KNOWN BUG!",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You may experience a massive performance drop when using heavy weapons alongside this mod. The author is aware of this and working on a fix. This mod is ",(0,n.kt)("strong",{parentName:"p"},"STILL HIGHLY RECOMMENDED")," despite this bug.")),(0,n.kt)("h2",{id:"grenades"},"Grenades"),(0,n.kt)("h3",{id:"b42-quickthrow-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66686"},"B42 Quickthrow")," ",(0,n.kt)("sup",null,(0,n.kt)("del",{parentName:"h3"},"Vanilla +"))),(0,n.kt)("p",null,"Adds brand new, modern throwing weapons mechanics, as seen in Metro, COD, Fallout 4 and some other FPS games."),(0,n.kt)("h4",{id:"installation-3"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - B42 Quickthrow"),(0,n.kt)("li",{parentName:"ul"},"Main File - ",(0,n.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/77674"},"B42 Quickthrow Tweaks - Give Player Perks Method"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A patch that makes B42 Quickthrow compatible with perks and other player effects.")))),(0,n.kt)("admonition",{title:"Instructions:",type:"important"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("strong",{parentName:"li"},"M")," from the pause menu to access the MCM, then navigate to B42 Quickthrow to customize the hotkeys."))),(0,n.kt)("h3",{id:"cookable-grenades-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/81678"},"Cookable Grenades")," ",(0,n.kt)("sup",null,(0,n.kt)("del",{parentName:"h3"},"Vanilla +"))),(0,n.kt)("p",null,"Holding a grenade before throwing it decreases its fuse."),(0,n.kt)("h2",{id:"reactions--animations"},"Reactions & Animations"),(0,n.kt)("h3",{id:"crippled-limb-reaction-enforcer-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73147"},"Crippled Limb Reaction Enforcer")," ",(0,n.kt)("sup",null,"Vanilla +")),(0,n.kt)("p",null,"Makes idle animations for crippled limbs persist in situations where the game does not enforce them correctly. Also gives NPCs debuffs when crippled, similar to those that the player receives."),(0,n.kt)("h3",{id:"simple-attack-reactions---limb-specific-animations-vanilla-"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79687"},"Simple Attack Reactions - Limb-Specific Animations")," ",(0,n.kt)("sup",null,(0,n.kt)("del",{parentName:"h3"},"Vanilla +"))),(0,n.kt)("p",null,"Adds a simple animation command line to each grunt when hit. Greatly enhances the flow and realism of combat."),(0,n.kt)("h4",{id:"installation-4"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Simple Attack Reactions - TTW"),(0,n.kt)("li",{parentName:"ul"},"Update File - (A) SAR Settings - DT"),(0,n.kt)("li",{parentName:"ul"},"Update File - (B) SAR Settings - DT - Player")),(0,n.kt)("h2",{id:"combat-ai"},"Combat AI"),(0,n.kt)("h3",{id:"player-combat-priority-hardcore"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71699"},"Player Combat Priority")," ",(0,n.kt)("sup",null,"Hardcore")),(0,n.kt)("p",null,"Prevents the game becoming too easy by making enemies more likely to target the player in combat rather than companions."),(0,n.kt)("h4",{id:"installation-5"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - Player Combat Priority"),(0,n.kt)("li",{parentName:"ul"},"Main File - ",(0,n.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/80339"},"PCP Doggo Patch"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A patch that further compounds the effects of Player Combat Priority in order to make dogs more survivable in combat.")))),(0,n.kt)("h3",{id:"simple-ai-merge-hardcore"},(0,n.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/86691"},"Simple AI Merge")," ",(0,n.kt)("sup",null,"Hardcore")),(0,n.kt)("p",null,"A reliable collection of AI tweaks designed to improve AI intelligence in combat while still preserving scripted sequences."),(0,n.kt)("h4",{id:"installation-6"},"Installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main File - The AI Merge")))}d.isMDXComponent=!0}}]);