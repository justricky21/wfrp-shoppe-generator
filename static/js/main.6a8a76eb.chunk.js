(this["webpackJsonpwfrp-shoppe-generator"]=this["webpackJsonpwfrp-shoppe-generator"]||[]).push([[0],[,,,,,,,,function(a,e,i){a.exports=i(20)},,,,,function(a,e,i){},function(a,e,i){},function(a,e,i){},function(a,e,i){},function(a,e,i){},function(a,e,i){},function(a,e,i){},function(a,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),l=i(2),c=i.n(l),t=(i(13),i(3)),r=i(4),p=i(5),g=i(7),s=i(6);i(14);var m=function(a){var e=a.label,i=a.type,n=a.placeholder,l=a.onChange,c=a.stateName;return o.a.createElement("div",{className:"form-input input-".concat(c)},o.a.createElement("b",null,e),o.a.createElement("input",{placeholder:n,type:i,onChange:function(a){return l(c,"number"===i?a.target.valueAsNumber:a.target.value)}}))};i(15);var b=function(a){var e=a.options,i=a.defaultValue,n=a.label,l=a.onChange,c=a.stateName;return o.a.createElement("div",{className:"form-dropdown"},o.a.createElement("b",null,n),o.a.createElement("select",{defaultValue:i,onChange:function(a){return l(c,a.target.value)}},e.map((function(a){return o.a.createElement("option",{key:a.value+1,value:a.value},a.label)}))))};i(16);var v=function(a){var e=a.onClearPress,i=a.gossipScore,n=a.gossipRoll,l=a.onRollPress,c=a.onChange,t=a.populationBrackets;return o.a.createElement("div",{className:"main-form"},o.a.createElement(b,{defaultValue:0,label:"Select the location's Population",options:t,stateName:"populationModifier",onChange:c}),o.a.createElement(m,{label:"Input Gossip score...",stateName:"gossipScore",type:"number",value:i,onChange:c}),o.a.createElement(m,{label:"Input Gossip roll...",stateName:"gossipRoll",type:"number",value:n,onChange:c}),o.a.createElement("button",{onClick:l},"Roll!"),o.a.createElement("button",{onClick:e},"Clear"))};i(17);function u(a){var e=a.group,i=e.key,n=e.label,l=e.availableGroupItems;return o.a.createElement("div",{className:"results-card"},o.a.createElement("h3",null,n),l.map((function(a){return o.a.createElement("p",{key:"".concat(i," ").concat(a.name)},a.name)})))}i(18);var y=function(a){var e=a.availableItems;return o.a.createElement("div",{className:"results"},e.map((function(a){return o.a.createElement(u,{key:a.key,group:a})})))},h=(i(19),[{key:"meleeWeapons",label:"Melee Weapons",groupItems:[{name:"Buckler",price:2,coin:"g",icon:"",availability:4,page:"108"},{name:"Dagger",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Demilance (Cavalry Spear)",price:20,coin:"g",icon:"",availability:3,page:"108"},{name:"Flail",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Foil",price:18,coin:"g",icon:"",availability:2,page:"108"},{name:"Gauntlet/Knuckle-duster",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Great Weapon",price:20,coin:"g",icon:"",availability:4,page:"108"},{name:"Halberd",price:15,coin:"g",icon:"",availability:5,page:"108"},{name:"Hand Weapon",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Lance",price:15,coin:"g",icon:"",availability:2,page:"108"},{name:"Main Gauche",price:4,coin:"g",icon:"",availability:3,page:"108"},{name:"Morning Star",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Quarter Staff",price:3,coin:"s",icon:"",availability:6,page:"108"},{name:"Rapier",price:18,coin:"g",icon:"",availability:3,page:"108"},{name:"Shield",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Spear",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Sword-breaker",price:5,coin:"g",icon:"",availability:3,page:"108"}]},{key:"rangedWeapons",label:"Ranged Weapons",groupItems:[{name:"Blunderbuss",price:70,availability:3,coin:"g",icon:"",page:"108"},{name:"Bola",price:7,availability:3,coin:"s",icon:"",page:"108"},{name:"Bow",price:10,availability:5,coin:"g",icon:"",page:"108"},{name:"Crossbow",price:25,availability:4,coin:"g",icon:"",page:"108"},{name:"Crossbow Pistol",price:35,availability:2,coin:"g",icon:"",page:"108"},{name:"Elfbow",price:70,availability:1,coin:"g",icon:"",page:"108"},{name:"Firearm",price:300,availability:1,coin:"",icon:"",page:"108"},{name:"Hochland Long Rifle",price:450,availability:1,coin:"g",icon:"",page:"108"},{name:"Javelin",price:25,availability:4,coin:"s",icon:"",page:"108"},{name:"Lasso",price:1,availability:6,coin:"g",icon:"",page:"108"},{name:"Longbow",price:15,availability:4,coin:"g",icon:"",page:"108"},{name:"Net",price:3,availability:6,coin:"g",icon:"",page:"108"},{name:"Pistol",price:200,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Crossbow",price:100,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Firearm",price:600,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Pistol",price:400,availability:1,coin:"g",icon:"",page:"108"},{name:"Shortbow",price:7,availability:5,coin:"g",icon:"",page:"108"},{name:"Sling",price:4,availability:5,coin:"g",icon:"",page:"108"},{name:"Spear",price:10,availability:5,coin:"g",icon:"",page:"108"},{name:"Staff Sling",price:6,availability:2,coin:"g",icon:"",page:"108"},{name:"Throwing Axe/Hammer",price:5,availability:4,coin:"g",icon:"",page:"108"},{name:"Throwing Dagger/Star",price:3,availability:5,coin:"g",icon:"",page:"108"},{name:"Whip",price:2,availability:4,coin:"g",icon:"",page:"108"}]},{key:"ammunition",label:"Ammunition",groupItems:[{name:"Arrows (5)",price:1,availability:5,coin:"s",icon:"",page:"108"},{name:"Bolts (5)",price:2,availability:4,coin:"s",icon:"",page:"108"},{name:"Firearm Shot (10)",price:1,availability:2,coin:"s",icon:"",page:"108"},{name:"Gunpowder (per shot)",price:3,availability:1,coin:"s",icon:"",page:"108"}]},{key:"advancedArmour",label:"Advanced Armour",groupItems:[{name:"Leather Skullcap",price:3,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Jerkin",price:6,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Jack",price:12,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Leggings",price:10,availability:5,coin:"g",icon:"",page:"112"},{name:"Full Leather Armour",price:25,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Coif",price:20,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Shirt",price:60,availability:4,coin:"g",icon:"",page:"112"},{name:"Sleeved Mail Shirt",price:95,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Coat",price:75,availability:4,coin:"g",icon:"",page:"112"},{name:"Sleeved Mail Coat",price:130,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Leggings",price:20,availability:3,coin:"g",icon:"",page:"112"},{name:"Full Mail Armour",price:170,availability:3,coin:"g",icon:"",page:"112"},{name:"Helmet",price:30,availability:3,coin:"g",icon:"",page:"112"},{name:"Breastplate",price:70,availability:3,coin:"g",icon:"",page:"112"},{name:"Plate Bracers",price:60,availability:3,coin:"g",icon:"",page:"112"},{name:"Plate Leggings",price:70,availability:3,coin:"g",icon:"",page:"112"},{name:"Full Plate Armour",price:400,availability:2,coin:"g",icon:"",page:"112"}]},{key:"clothing",label:"Clothing",groupItems:[{name:"Rags",price:1,availability:7,coin:"p",icon:"",page:"113"},{name:"Poor",price:10,availability:7,coin:"s",icon:"",page:"113"},{name:"Common",price:1,availability:6,coin:"g",icon:"",page:"113"},{name:"Good",price:3,availability:5,coin:"g",icon:"",page:"113"},{name:"Best",price:10,availability:4,coin:"g",icon:"",page:"113"},{name:"Robes",price:15,availability:4,coin:"g",icon:"",page:"113"},{name:"Costume/Entertainer",price:5,availability:4,coin:"g",icon:"",page:"113"},{name:"Uniform",price:15,availability:3,coin:"g",icon:"",page:"113"},{name:"Noble's Garb",price:50,availability:2,coin:"g",icon:"",page:"113"},{name:"Royal Garb",price:100,availability:1,coin:"g",icon:"",page:"113"},{name:"Cloak",price:5,availability:6,coin:"g",icon:"",page:"113"},{name:"Overcoat",price:10,availability:6,coin:"g",icon:"",page:"113"},{name:"Hat, simple",price:10,availability:6,coin:"s",icon:"",page:"113"},{name:"Hat, wide-brimmed",price:1,availability:6,coin:"g",icon:"",page:"113"},{name:"Hood or Mask",price:10,availability:5,coin:"s",icon:"",page:"113"}]}]);var f=[{label:"Below 100",value:-1},{label:"Below 1,000",value:0},{label:"Below 10,000",value:1},{label:"10,000 or more",value:2}],d=function(a){Object(g.a)(i,a);var e=Object(s.a)(i);function i(){var a;return Object(r.a)(this,i),(a=e.call(this)).onRollPress=function(){var e=a.state,i=e.gossipScore,n=e.gossipRoll,o=e.populationModifier,l=function(a,e,i,n){var o=[];return a.forEach((function(a){var l=[],c=a.label,t=a.key;a.groupItems.forEach((function(a){switch(parseInt(n)+a.availability){case 1:e-30>=i&&l.push(a);break;case 2:e-20>=i&&l.push(a);break;case 3:e-10>=i&&l.push(a);break;case 4:e>=i&&l.push(a);break;case 5:e+10>=i&&l.push(a);break;case 6:e+20>=i&&l.push(a);break;case 7:e+30>=i&&l.push(a);break;default:a.availability>7&&l.push(a)}}));var r={key:t,label:c,availableGroupItems:l};o.push(r)})),o}(h,i,n,o);a.onSetAvailableItems(l)},a.onChange=function(e,i){a.setState(Object(t.a)({},e,i))},a.onClearPress=function(){a.setState({availableItems:[]})},a.onSetAvailableItems=function(e){a.setState({availableItems:e})},a.state={availableItems:[],gossipScore:0,gossipRoll:0,populationModifier:0},a}return Object(p.a)(i,[{key:"render",value:function(){var a=this.state,e=a.availableItems,i=a.gossipScore,n=a.gossipRoll;return o.a.createElement("div",{className:"app"},o.a.createElement(v,{gossipScore:i,gossipRoll:n,onRollPress:this.onRollPress,onClearPress:this.onClearPress,onChange:this.onChange,onSetAvailableItems:this.onSetAvailableItems,populationBrackets:f}),e.length>0&&o.a.createElement(y,{availableItems:e}))}}]),i}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6a8a76eb.chunk.js.map