(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{407:function(e,r,i){},458:function(e,r,i){"use strict";i(407)},485:function(e,r,i){"use strict";i.r(r);i(193),i(44);var a=i(371),t={components:{GridLayout:a.GridLayout,GridItem:a.GridItem},data:function(){return{layout:[{x:0,y:0,w:2,h:2,i:"0",static:!1},{x:2,y:0,w:2,h:4,i:"1",static:!0},{x:4,y:0,w:2,h:5,i:"2",static:!1},{x:6,y:0,w:2,h:3,i:"3",static:!1},{x:8,y:0,w:2,h:3,i:"4",static:!1},{x:10,y:0,w:2,h:3,i:"5",static:!1},{x:0,y:5,w:2,h:5,i:"6",static:!1},{x:2,y:5,w:2,h:5,i:"7",static:!1},{x:4,y:5,w:2,h:5,i:"8",static:!1},{x:6,y:3,w:2,h:4,i:"9",static:!0},{x:8,y:4,w:2,h:4,i:"10",static:!1},{x:10,y:4,w:2,h:4,i:"11",static:!1},{x:0,y:10,w:2,h:5,i:"12",static:!1},{x:2,y:10,w:2,h:5,i:"13",static:!1},{x:4,y:8,w:2,h:4,i:"14",static:!1},{x:6,y:8,w:2,h:4,i:"15",static:!1},{x:8,y:10,w:2,h:5,i:"16",static:!1},{x:10,y:4,w:2,h:2,i:"17",static:!1},{x:0,y:9,w:2,h:3,i:"18",static:!1},{x:2,y:6,w:2,h:2,i:"19",static:!1}],draggable:!0,resizable:!0,mirrored:!0,index:0}},methods:{}},c=(i(458),i(34)),s=Object(c.a)(t,(function(){var e=this,r=e._self._c;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.draggable,expression:"draggable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.draggable)?e._i(e.draggable,null)>-1:e.draggable},on:{change:function(r){var i=e.draggable,a=r.target,t=!!a.checked;if(Array.isArray(i)){var c=e._i(i,null);a.checked?c<0&&(e.draggable=i.concat([null])):c>-1&&(e.draggable=i.slice(0,c).concat(i.slice(c+1)))}else e.draggable=t}}}),e._v(" Draggable\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.resizable,expression:"resizable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.resizable)?e._i(e.resizable,null)>-1:e.resizable},on:{change:function(r){var i=e.resizable,a=r.target,t=!!a.checked;if(Array.isArray(i)){var c=e._i(i,null);a.checked?c<0&&(e.resizable=i.concat([null])):c>-1&&(e.resizable=i.slice(0,c).concat(i.slice(c+1)))}else e.resizable=t}}}),e._v(" Resizable\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mirrored,expression:"mirrored"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.mirrored)?e._i(e.mirrored,null)>-1:e.mirrored},on:{change:function(r){var i=e.mirrored,a=r.target,t=!!a.checked;if(Array.isArray(i)){var c=e._i(i,null);a.checked?c<0&&(e.mirrored=i.concat([null])):c>-1&&(e.mirrored=i.slice(0,c).concat(i.slice(c+1)))}else e.mirrored=t}}}),e._v(" Mirrored\n    "),r("br"),e._v(" "),r("grid-layout",{attrs:{layout:e.layout,"col-num":12,"row-height":30,"is-draggable":e.draggable,"is-resizable":e.resizable,"is-mirrored":e.mirrored,"vertical-compact":!0,"use-css-transforms":!0},on:{"update:layout":function(r){e.layout=r}}},e._l(e.layout,(function(i){return r("grid-item",{attrs:{static:i.static,x:i.x,y:i.y,w:i.w,h:i.h,i:i.i}},[r("span",{staticClass:"text"},[e._v(e._s(i.i))])])})),1)],1)}),[],!1,null,"3110a6d3",null);r.default=s.exports}}]);