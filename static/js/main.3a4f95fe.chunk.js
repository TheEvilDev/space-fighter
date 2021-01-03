(this["webpackJsonpspace-fighter"]=this["webpackJsonpspace-fighter"]||[]).push([[0],{52:function(e,t,n){},57:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(1),i=n.n(c),a=n(28),o=n.n(a),s=(n(52),n(15)),j=n(0);var u=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=(new j.TextureLoader).load("target.png");return Object(s.b)((function(n){var r=n.mouse;e.current.position.y=10*r.y,e.current.position.x=30*r.x,t.current.position.y=20*r.y,t.current.position.x=60*r.x})),Object(r.jsxs)("group",{children:[Object(r.jsx)("sprite",{position:[0,0,-8],ref:e,children:Object(r.jsx)("spriteMaterial",{attach:"material",map:n})}),Object(r.jsx)("sprite",{position:[0,0,-16],ref:t,children:Object(r.jsx)("spriteMaterial",{attach:"material",map:n})})]})};var l=function(){var e=Object(c.useRef)(null);return Object(r.jsxs)("mesh",{visible:!0,position:[0,-50,0],rotation:[-Math.PI/2,0,0],ref:e,children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[5e3,5e3,128,128]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"white",roughness:1,metalness:0,wireframe:!0})]})},b=n(11),O=(n(57),Object(b.b)({key:"shipPosition",default:{position:{},rotation:{}}})),h=(Object(b.b)({key:"playerPosition",default:{position:{},rotation:{}}}),Object(b.b)({key:"enemyPosition",default:[{x:-10,y:10,z:-80},{x:20,y:0,z:-100},{x:30,y:0,z:-60},{x:50,y:0,z:-20}]})),f=Object(b.b)({key:"laserPositions",default:[]}),x=Object(b.b)({key:"score",default:0});var d=function(){var e=Object(b.e)(f);return Object(r.jsx)("group",{children:e.map((function(e){return Object(r.jsxs)("mesh",{position:[e.x,e.y,e.z],children:[Object(r.jsx)("sphereBufferGeometry",{attach:"geometry",args:[.25,16,16]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",emissive:new j.Color("white"),wireframe:!0})]},"".concat(e.id))}))})},p=n(12),m=n(3);var y=function(){var e=Object(b.e)(O),t=Object(b.d)(f),n=Object(m.a)(t,2),c=n[0],i=n[1];return Object(r.jsxs)("mesh",{position:[0,0,-8],onClick:function(){return i([].concat(Object(p.a)(c),[{id:Math.random(),x:0,y:0,z:0,velocity:[6*e.rotation.x,5*e.rotation.y]}]))},children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"orange",emissive:new j.Color("#ff0860"),visible:!1})]})};var g=function(){return Object(r.jsxs)("mesh",{visible:!0,position:[0,0,0],rotation:[0,0,0],children:[Object(r.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"white",transparent:!0,opacity:.6,roughness:1,metalness:0})]})},v=n(34),z=function(e){var t=e.position,n=Object(c.useRef)(null),i=Object(s.c)(v.a,"./models/creepy-face.glb").nodes;return Object(r.jsx)("group",{ref:n,position:[t.x,t.y,t.z],children:Object(r.jsx)("mesh",{visible:!0,geometry:i.Quad_Sphere.geometry,children:Object(r.jsx)("meshStandardMaterial",{attach:"material",color:"white",roughness:.3,metalness:.3})})})};var w=function(){var e=Object(b.e)(h);return Object(r.jsx)("group",{children:e.map((function(e){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(g,{}),children:Object(r.jsx)(z,{position:e},"".concat(e.x))})}))})};var M=function(){var e=Object(b.d)(h),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(b.d)(f),i=Object(m.a)(c,2),a=i[0],o=i[1],j=Object(b.d)(x),u=Object(m.a)(j,2),l=u[0],O=u[1];return Object(s.b)((function(e){e.mouse;var t=n?n.map((function(e){return a.filter((function(t){return a.filter((function(t){return function(e,t){var n=t.x-e.x,r=t.y-e.y,c=t.z-e.z;return Math.sqrt(n*n+r*r+c*c)}(t,e)<3})).length>0})).length>0})):[];t.includes(!0)&&n.length>0&&(O(l+t.filter((function(e){return e})).length),console.log("hit detected")),r(n.map((function(e){return{x:e.x,y:e.y,z:e.z}})).filter((function(e,n){return!t[n]&&e.z<0}))),o(a.map((function(e){return{id:e.id,x:e.x+e.velocity[0],y:e.y+e.velocity[1],z:e.z-1,velocity:e.velocity}})).filter((function(e){return e.z>-100&&e.y>-50})))})),null},k=n(43);function S(){var e=Object(k.a)(["\n    position: absolute;\n    top: 30px;\n    right: 30px;\n    z-index: 1000;\n    color: #FFF;\n"]);return S=function(){return e},e}var F=n(44).a.section(S()),P=function(){var e=Object(b.e)(x);return Object(r.jsxs)(F,{children:["Score: ",1e3*e]})},C=n(4),B=n(16),G=n(25),L=function(e){var t=e.children,n=Object(B.a)(e,["children"]),c=Object(b.c)();return Object(r.jsx)(G.c,Object(C.a)(Object(C.a)({},n),{},{children:Object(r.jsx)(c,{children:t})}))};function R(){return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(P,{}),Object(r.jsxs)(L,{style:{background:"#171717"},children:[Object(r.jsx)(G.a,{}),Object(r.jsx)(G.b,{}),Object(r.jsx)("directionalLight",{intensity:.5}),Object(r.jsx)(u,{}),Object(r.jsx)(l,{}),Object(r.jsx)(d,{}),Object(r.jsx)(y,{}),Object(r.jsx)(w,{}),Object(r.jsx)(M,{})]})]})}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),I()}},[[60,1,2]]]);
//# sourceMappingURL=main.3a4f95fe.chunk.js.map