(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{8164:function(e,r,i){"use strict";i.d(r,{x:function(){return S}});var n=i(959),t=i(9786),o=i(4669),a=i(6629),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,r,i)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,p=(e,r)=>{for(var i in r||(r={}))u.call(r,i)&&h(e,i,r[i]);if(d)for(var i of d(r))f.call(r,i)&&h(e,i,r[i]);return e},m=(e,r)=>s(e,c(r)),g=(0,a.k)((e,{color:r,variant:i,size:n,lineClamp:t,truncate:o,inline:a,inherit:l,underline:s,gradient:c,weight:d,transform:u,align:f,strikethrough:h,italic:g})=>{let y=e.fn.variant({variant:"gradient",gradient:c});return{root:p(m(p(p(p(p({},e.fn.fontStyles()),e.fn.focusStyles()),"number"==typeof t?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical"}:null),o?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null),{color:function({theme:e,color:r,variant:i}){return"dimmed"===r?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"==typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:"link"===i?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:r||"inherit"}({color:r,theme:e,variant:i}),fontFamily:l?"inherit":e.fontFamily,fontSize:l||void 0===n?"inherit":e.fn.size({size:n,sizes:e.fontSizes}),lineHeight:l?"inherit":a?1:e.lineHeight,textDecoration:function({underline:e,strikethrough:r}){let i=[];return e&&i.push("underline"),r&&i.push("line-through"),i.length>0?i.join(" "):"none"}({underline:s,strikethrough:h}),WebkitTapHighlightColor:"transparent",fontWeight:l?"inherit":d,textTransform:u,textAlign:f,fontStyle:g?"italic":void 0}),e.fn.hover("link"===i&&void 0===s?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:y.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}}),y=i(8269),b=Object.defineProperty,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,j=(e,r,i)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,x=(e,r)=>{for(var i in r||(r={}))w.call(r,i)&&j(e,i,r[i]);if(v)for(var i of v(r))O.call(r,i)&&j(e,i,r[i]);return e},k=(e,r)=>{var i={};for(var n in e)w.call(e,n)&&0>r.indexOf(n)&&(i[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>r.indexOf(n)&&O.call(e,n)&&(i[n]=e[n]);return i};let z={variant:"text"},P=(0,n.forwardRef)((e,r)=>{let i=(0,t.N4)("Text",z,e),{className:o,size:a,weight:l,transform:s,color:c,align:d,variant:u,lineClamp:f,truncate:h,gradient:p,inline:m,inherit:b,underline:v,strikethrough:w,italic:O,classNames:j,styles:P,unstyled:S,span:T}=i,N=k(i,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:_,cx:E}=g({variant:u,color:c,size:a,lineClamp:f,truncate:h,inline:m,inherit:b,underline:v,strikethrough:w,italic:O,weight:l,transform:s,align:d,gradient:p},{unstyled:S,name:"Text"});return n.createElement(y.x,x({ref:r,className:E(_.root,{[_.gradient]:"gradient"===u},o),component:T?"span":"div"},N))});P.displayName="@mantine/core/Text";let S=(0,o.F)(P)},5735:function(e,r,i){"use strict";i.d(r,{D:function(){return z}});var n=i(959),t=i(9786),o=i(6629),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,i)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,h=(e,r)=>{for(var i in r||(r={}))d.call(r,i)&&f(e,i,r[i]);if(c)for(var i of c(r))u.call(r,i)&&f(e,i,r[i]);return e},p=(e,r)=>l(e,s(r)),m=(0,o.k)((e,{element:r,weight:i,size:n,inline:t})=>({root:p(h({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:i||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:void 0!==n?n in e.headings.sizes?e.headings.sizes[n].fontSize:n:e.headings.sizes[r].fontSize,lineHeight:t?1:void 0!==n&&n in e.headings.sizes?e.headings.sizes[n].lineHeight:e.headings.sizes[r].lineHeight,margin:0})})),g=i(8164),y=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,r,i)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,j=(e,r)=>{for(var i in r||(r={}))v.call(r,i)&&O(e,i,r[i]);if(b)for(var i of b(r))w.call(r,i)&&O(e,i,r[i]);return e},x=(e,r)=>{var i={};for(var n in e)v.call(e,n)&&0>r.indexOf(n)&&(i[n]=e[n]);if(null!=e&&b)for(var n of b(e))0>r.indexOf(n)&&w.call(e,n)&&(i[n]=e[n]);return i};let k={order:1},z=(0,n.forwardRef)((e,r)=>{let i=(0,t.N4)("Title",k,e),{className:o,order:a,children:l,unstyled:s,size:c,weight:d,inline:u}=i,f=x(i,["className","order","children","unstyled","size","weight","inline"]),{classes:h,cx:p}=m({element:`h${a}`,weight:d,size:c,inline:u},{name:"Title",unstyled:s});return[1,2,3,4,5,6].includes(a)?n.createElement(g.x,j({component:`h${a}`,ref:r,className:p(h.root,o)},f),l):null});z.displayName="@mantine/core/Title"},7979:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return i(928)}])},928:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return c}});var n=i(1527),t=i(3462),o=i.n(t),a=i(3575),l=i.n(a),s=i(5735);function c(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:"Our Clients"})}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)(s.D,{order:1,color:"green",children:"Our Clients"}),(0,n.jsx)("p",{children:"At GreenLeaf Solutions, we're proud to work with a diverse range of businesses and organizations to help them achieve their sustainability goals. Our clients range from small factories to large multinational corporations, and they all share a commitment to making a positive impact on the environment."}),(0,n.jsx)(s.D,{order:2,color:"dark",children:"Some of our notable clients include:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.D,{order:3,color:"dimmed",children:"Blue Ocean Industries:"}),(0,n.jsx)("p",{children:"Blue Ocean Industries is a leading manufacturer of eco-friendly consumer goods. They've worked with us to reduce waste and minimize their environmental impact throughout their operations."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.D,{order:3,color:"dimmed",children:"Green Fields Farms:"}),(0,n.jsx)("p",{children:"Green Fields Farms is a family-owned agricultural business that grows and sells organic produce. They've partnered with us to implement sustainable practices on their farm, including water conservation and waste reduction."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.D,{order:3,color:"dimmed",children:"Clean Air Solutions:"}),(0,n.jsx)("p",{children:"Clean Air Solutions is a company that provides air purification systems for commercial and residential properties. They've worked with us to improve the energy efficiency of their products and reduce their carbon footprint."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.D,{order:3,color:"dimmed",children:"Eco-Friendly Packaging Inc.:"}),(0,n.jsx)("p",{children:"Eco-Friendly Packaging is a company that provides environmentally responsible packaging solutions for businesses. They've partnered with us to reduce waste and minimize the environmental impact of their products."})]})]}),(0,n.jsx)("p",{children:"These are just a few examples of the companies and organizations we've had the privilege of working with. Our clients trust us to deliver effective and efficient solutions that make a real difference, and we're committed to doing just that. Whether you're a small factory or a large corporation, we're here to help you achieve your sustainability goals."})]})]})}},3575:function(e){e.exports={main:"main_main__byEYC"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7979)}),_N_E=e.O()}]);