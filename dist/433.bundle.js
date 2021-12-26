"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[433],{433:(n,e,t)=>{t.r(e),t.d(e,{default:()=>O});var i,r,o,a,d,s,l,c,u=t(7294),p=t(168),m=t(885),f=t(2900),h=t(9163),x=t(9711),v=t(5893);var g=h.ZP.nav(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  /* background-color: #16161a; */\n  padding: 1rem 2rem;\n  margin-bottom: 2rem;\n"]))),w=h.ZP.div(r||(r=(0,p.Z)(["\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);\n"]))),j=h.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.8rem;\n  margin: 0 1rem;\n  &:hover {\n    text-decoration: none;\n    width: 100%;\n    height: 2.8rem;\n    background-color: #7f5af0;\n    border-radius: 0.313rem;\n  }\n\n  @media (min-width: 768px) {\n    &:hover {\n      background-color: transparent;\n    }\n  }\n"]))),y=(0,h.ZP)(x.rU)(a||(a=(0,p.Z)(["\n  font-size: 1.2rem;\n  color: #fffffe;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: none;\n    color: #fffffe;\n  }\n"]))),Z=h.ZP.div(d||(d=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 1.7rem;\n  span {\n    font-weight: 100;\n    font-size: 1.3rem;\n  }\n\n  @media screen and (max-width: 768px) {\n    img {\n      display: none;\n    }\n  }\n"]))),b=h.ZP.div(s||(s=(0,p.Z)(["\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n\n  span {\n    height: 4px;\n    width: 25px;\n    background: #fffffe;\n    margin-bottom: 4px;\n    border-radius: 5px;\n  }\n\n  @media (max-width: 768px) {\n    display: flex;\n  }\n"]))),C=h.ZP.div(l||(l=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 300px;\n    max-height: ",";\n    transition: max-height 0.2s ease-in;\n  }\n"])),(function(n){return n.isOpen?"600px":"0"})),k=(0,h.ZP)(x.rU)(c||(c=(0,p.Z)(["\n  font-size: 1.1rem;\n  color: #94a1b2;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    color: #7f5af0;\n    text-decoration: none;\n  }\n  @media (max-width: 768px) {\n    &:hover {\n      color: #fffffe;\n      text-decoration: none;\n    }\n  }\n"])));const P=function(){var n=(0,u.useState)(!1),e=(0,m.Z)(n,2),t=e[0],i=e[1];return(0,v.jsxs)(g,{children:[(0,v.jsx)(y,{to:"/",children:(0,v.jsxs)(Z,{children:[(0,v.jsx)("img",{src:f.Z,alt:"Weather"}),(0,v.jsxs)(w,{children:["Weather",(0,v.jsx)("span",{children:"App"})]})]})}),(0,v.jsxs)(b,{onClick:function(){i(!t)},children:[(0,v.jsx)("span",{}),(0,v.jsx)("span",{}),(0,v.jsx)("span",{})]}),(0,v.jsxs)(C,{isOpen:t,children:[(0,v.jsx)(j,{children:(0,v.jsx)(k,{to:"/",onClick:function(){i(!t)},children:"Home"})}),(0,v.jsx)(j,{children:(0,v.jsx)(k,{to:"/",onClick:function(){i(!t)},children:"Projects"})}),(0,v.jsx)(j,{children:(0,v.jsx)(k,{to:"/about",onClick:function(){i(!t)},children:"About"})})]})]})};var z,M,_=t(4061),L=t(6974),S=t(7175),A=t(8279);var q=h.ZP.form(z||(z=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.4rem 1rem;\n  margin: 2rem;\n  font-size: 1.2em;\n  border-radius: 5px;\n  border: solid 2px #16161a;\n\n  &:hover {\n    outline: 3px solid transparent;\n    border: solid 2px #7f5af0;\n  }\n\n  input {\n    color: #fffffe;\n    padding: 5px;\n    outline: none;\n    border: none;\n    width: 100%;\n    font-size: 1.1rem;\n    background-color: transparent;\n  }\n"]))),T=h.ZP.div(M||(M=(0,p.Z)([""])));const G=function(){var n=(0,u.useContext)(S._).cities,e=(0,u.useState)(""),t=(0,m.Z)(e,2),i=t[0],r=t[1],o=(0,_.T)().searchCity,a=(0,L.TH)(),d=(0,L.s0)();return(0,v.jsx)(T,{children:(0,v.jsx)(q,{onSubmit:function(e){e.preventDefault(),3===n.length?A.ZP.error("Limite de ciudades"):(!n.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))&&A.ZP.promise(o(i),{loading:"Loading",success:"Got the data",error:"City not found"})||A.ZP.error("Ciudad repetida"),r("")),"/"!==a.pathname&&d("/")},children:(0,v.jsx)("input",{type:"text",placeholder:"Buscar ciudad...",value:i,autoComplete:"off",required:!0,onChange:function(n){return r(n.target.value)}})})})};var H=t(4593);const O=function(n){var e=n.children;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(H.q,{children:[(0,v.jsx)("meta",{charSet:"utf-8"}),(0,v.jsx)("meta",{description:"A simple and fast way to search weather"}),(0,v.jsx)("title",{children:"weatherApplication"})]}),(0,v.jsx)(P,{}),(0,v.jsx)(G,{}),e]})}},4061:(n,e,t)=>{t.d(e,{K:()=>m,T:()=>f});var i=t(5861),r=t(885),o=t(7757),a=t.n(o),d=t(7175),s=t(7294),l=t(9669),c=t.n(l),u=t(8279),p="4ae2636d8dfbdc3044bede63951a019b",m=function(n){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),o=t[0],d=t[1],l=function(){var n=(0,i.Z)(a().mark((function n(e){var t,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("http://api.openweathermap.org/data/2.5/weather?id=".concat(e,"&appid=").concat(p,"&units=metric"));case 2:t=n.sent,i=t.data,d({min:Math.round(null==i?void 0:i.main.temp_min),max:Math.round(null==i?void 0:i.main.temp_max),img:null==i?void 0:i.weather[0].icon,id:null==i?void 0:i.id,wind:null==i?void 0:i.wind.speed,temp:Math.round(null==i?void 0:i.main.temp),name:null==i?void 0:i.name,weather:null==i?void 0:i.weather[0].main,description:null==i?void 0:i.weather[0].description,clouds:null==i?void 0:i.clouds.all,latitud:null==i?void 0:i.coord.lat,longitud:null==i?void 0:i.coord.lon,pressure:null==i?void 0:i.main.pressure,humidity:null==i?void 0:i.main.humidity,country:null==i?void 0:i.sys.country});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){u.ZP.promise(l(n),{loading:"Loading",success:"Got the data",error:"City not found"})}),[n]),o},f=function(){var n=(0,s.useContext)(d._).handleCities,e=function(){var e=(0,i.Z)(a().mark((function e(t){var i,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(p,"&units=metric"));case 2:i=e.sent,r=i.data,n({min:Math.round(null==r?void 0:r.main.temp_min),max:Math.round(null==r?void 0:r.main.temp_max),img:null==r?void 0:r.weather[0].icon,id:null==r?void 0:r.id,wind:null==r?void 0:r.wind.speed,temp:Math.round(null==r?void 0:r.main.temp),name:null==r?void 0:r.name,weather:null==r?void 0:r.weather[0].main,description:null==r?void 0:r.weather[0].description,clouds:null==r?void 0:r.clouds.all,latitud:null==r?void 0:r.coord.lat,longitud:null==r?void 0:r.coord.lon,pressure:null==r?void 0:r.main.pressure,humidity:null==r?void 0:r.main.humidity,country:null==r?void 0:r.sys.country});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{searchCity:e}}},2900:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"c30f8fc868fb620604accec7f629d893.svg"}}]);