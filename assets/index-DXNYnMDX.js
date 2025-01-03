import{r as T,a as F,b as c,M,S as L,B,X as q,C as $,c as G,R as W,L as J,d as K,e as U,Y as k,T as H}from"./vendor-C3pyeBux.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))x(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&x(l)}).observe(document,{childList:!0,subtree:!0});function m(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function x(s){if(s.ep)return;s.ep=!0;const r=m(s);fetch(s.href,r)}})();var C={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function V(){if(_)return j;_=1;var i=T(),d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(f,a,v){var o,u={},y=null,p=null;v!==void 0&&(y=""+v),a.key!==void 0&&(y=""+a.key),a.ref!==void 0&&(p=a.ref);for(o in a)x.call(a,o)&&!r.hasOwnProperty(o)&&(u[o]=a[o]);if(f&&f.defaultProps)for(o in a=f.defaultProps,a)u[o]===void 0&&(u[o]=a[o]);return{$$typeof:d,type:f,key:y,ref:p,props:u,_owner:s.current}}return j.Fragment=m,j.jsx=l,j.jsxs=l,j}var I;function Y(){return I||(I=1,C.exports=V()),C.exports}var e=Y(),N={},A;function X(){if(A)return N;A=1;var i=F();return N.createRoot=i.createRoot,N.hydrateRoot=i.hydrateRoot,N}var z=X();const R=[{symbol:"AAPL",name:"Apple Inc.",price:173.5,change:2.5,basePrice:173.5},{symbol:"TSLA",name:"Tesla Inc.",price:242.8,change:-1.8,basePrice:242.8},{symbol:"MSFT",name:"Microsoft",price:338.45,change:1.2,basePrice:338.45},{symbol:"AMZN",name:"Amazon",price:178.9,change:-.5,basePrice:178.9},{symbol:"GOOGL",name:"Alphabet Inc.",price:147.6,change:.8,basePrice:147.6}],Z=[{symbol:"NVDA",name:"NVIDIA Corporation",price:824.15,change:3.2,basePrice:824.15},{symbol:"META",name:"Meta Platforms Inc",price:503.28,change:1.5,basePrice:503.28},{symbol:"AMD",name:"Advanced Micro Devices",price:180.49,change:-.8,basePrice:180.49},{symbol:"NFLX",name:"Netflix Inc",price:605.88,change:2.1,basePrice:605.88},{symbol:"DIS",name:"Walt Disney Co",price:111.95,change:-1.2,basePrice:111.95},{symbol:"PYPL",name:"PayPal Holdings Inc",price:62.35,change:-.5,basePrice:62.35},{symbol:"UBER",name:"Uber Technologies Inc",price:75.2,change:1.8,basePrice:75.2},{symbol:"GME",name:"GameStop Corp",price:14.82,change:-2.5,basePrice:14.82},{symbol:"COIN",name:"Coinbase Global Inc",price:225.15,change:4.2,basePrice:225.15},...R],Q=()=>{const[i,d]=c.useState(R),[m,x]=c.useState(R[0]),[s,r]=c.useState([]),[l,f]=c.useState(12435.67),[a,v]=c.useState(234.56),[o,u]=c.useState(1.92),[y,p]=c.useState(!1),[S,w]=c.useState(""),E=Z.filter(t=>t.symbol.toLowerCase().includes(S.toLowerCase())||t.name.toLowerCase().includes(S.toLowerCase())),O=t=>{i.find(n=>n.symbol===t.symbol)||d(n=>[...n,t]),p(!1),w("")},D=t=>{const n=(Math.random()-.5)*.2;return t*(1+n)};return c.useEffect(()=>{const n=setInterval(()=>{d(g=>g.map(h=>{const b=D(h.basePrice),P=(b-h.basePrice)/h.basePrice*100;return{...h,price:b,change:P}}))},3e3);return()=>clearInterval(n)},[]),c.useEffect(()=>{(()=>{const n=[],g=m.basePrice,h=new Date;for(let b=0;b<50;b++){const P=new Date(h-(50-b)*5*6e4);n.push({timestamp:P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),price:g*(1+(Math.random()-.5)*.1)})}r(n)})()},[m]),c.useEffect(()=>{const t=i.reduce((g,h)=>g+h.change,0)/i.length,n=l*(t/100);v(n),u(t)},[i,l]),e.jsxs("div",{className:"min-h-screen bg-black text-white relative",children:[e.jsx("header",{className:"border-b border-gray-800 p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(M,{className:"h-6 w-6 text-gray-400"}),e.jsx("span",{className:"text-2xl font-bold text-yellow-500",children:"StockWatch"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>p(!0),className:"hover:text-yellow-500 transition-colors",children:e.jsx(L,{className:"h-6 w-6 text-gray-400"})}),e.jsx(B,{className:"h-6 w-6 text-gray-400"})]})]})}),y&&e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-95 z-50",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex-1 flex items-center bg-gray-900 rounded-lg p-2",children:[e.jsx(L,{className:"h-5 w-5 text-gray-400 mr-2"}),e.jsx("input",{type:"text",placeholder:"Search stocks...",className:"bg-transparent w-full focus:outline-none text-white",value:S,onChange:t=>w(t.target.value),autoFocus:!0})]}),e.jsx("button",{onClick:()=>{p(!1),w("")},className:"ml-4 text-gray-400 hover:text-yellow-500 transition-colors",children:e.jsx(q,{className:"h-6 w-6"})})]}),e.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:E.map(t=>e.jsxs("div",{onClick:()=>O(t),className:"flex items-center justify-between p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:t.symbol}),e.jsx("div",{className:"text-sm text-gray-400",children:t.name})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"font-bold",children:["$",t.price.toFixed(2)]}),e.jsxs("div",{className:`text-sm ${t.change>=0?"text-green-500":"text-red-500"}`,children:[t.change>=0?"+":"",t.change.toFixed(2),"%"]})]})]},t.symbol))})]})}),e.jsxs("main",{className:"p-4",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("span",{className:"text-sm text-gray-400",children:"Portfolio Value"}),e.jsxs("div",{className:"text-3xl font-bold text-yellow-500",children:["$",l.toLocaleString()]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`flex items-center ${a>=0?"text-green-500":"text-red-500"}`,children:[a>=0?e.jsx($,{className:"h-4 w-4"}):e.jsx(G,{className:"h-4 w-4"}),"$",Math.abs(a).toFixed(2)," (",o.toFixed(2),"%)"]}),e.jsx("span",{className:"text-gray-400",children:"Today"})]})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"text-lg font-bold mb-2",children:[m.name," (",m.symbol,")"]})}),e.jsx("div",{className:"h-64 mb-6",children:e.jsx(W,{width:"100%",height:"100%",children:e.jsxs(J,{data:s,children:[e.jsx(K,{type:"monotone",dataKey:"price",stroke:"#EAB308",dot:!1,strokeWidth:2}),e.jsx(U,{dataKey:"timestamp",stroke:"#4B5563",tick:{fill:"#4B5563"}}),e.jsx(k,{stroke:"#4B5563",tick:{fill:"#4B5563"},domain:["auto","auto"]}),e.jsx(H,{contentStyle:{backgroundColor:"#1F2937",border:"none",borderRadius:"0.375rem",color:"#F3F4F6"}})]})})}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 text-yellow-500",children:"Watchlist"}),e.jsx("div",{className:"space-y-4",children:i.map(t=>e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors",onClick:()=>x(t),children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:t.symbol}),e.jsx("div",{className:"text-sm text-gray-400",children:t.name})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"font-bold",children:["$",t.price.toFixed(2)]}),e.jsxs("div",{className:`text-sm ${t.change>=0?"text-green-500":"text-red-500"}`,children:[t.change>=0?"+":"",t.change.toFixed(2),"%"]})]})]},t.symbol))})]})]})]})};function ee(){return e.jsx(Q,{})}z.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(ee,{})}));
//# sourceMappingURL=index-DXNYnMDX.js.map
