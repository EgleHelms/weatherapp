(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r,c,a,i,s,o,b,d,l,j,h,u,p,x,O,m,f,g=t(1),w=t.n(g),y=t(16),v=t.n(y),k=(t(25),t(12)),S=t.n(k),D=t(17),z=t(7),C=t(3),T=t(4),P=t(5),F=t(6),M=t(0),W=T.b.div(r||(r=Object(C.a)(["\n  width: 50%;\n\n  @media (max-width: 550px) {\n    width: 100%;\n  }\n"]))),A=T.b.form(c||(c=Object(C.a)(["\n  flex-basis: 100%;\n"]))),E=T.b.div(a||(a=Object(C.a)(["\n  height: 3rem;\n  border-radius: 30px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: rgba(248,249,250,0.8);\n  display: flex;\n  justify-content: space-between;\n\n\n"]))),J=T.b.input(i||(i=Object(C.a)(["\n  background-color: transparent;\n  outline: none;\n  border: none;\n  margin-left: 30px;\n  font-size: 1.5rem;\n  width: 80%;\n"]))),L=T.b.button(s||(s=Object(C.a)(["\n  background-color: transparent;\n  border: none;\n  padding-right: 20px;\n\n  &:focus{\n    background-color: transparent;\n    border: none;\n    outline: none\n  }\n"]))),I=function(e){return Object(M.jsx)(W,{children:Object(M.jsx)(A,{onSubmit:e.submit,children:Object(M.jsxs)(E,{children:[Object(M.jsx)(J,{type:"text",value:e.value,placeholder:"Enter city",onChange:e.change}),Object(M.jsx)(L,{type:"submit",children:Object(M.jsx)(P.a,{icon:F.e,style:{fontSize:"1.5rem",color:"grey"}})})]})})})},B=T.b.div(o||(o=Object(C.a)(["\nmin-width: 350px;\ndisplay: flex;\nbackground-color: rgba(248,249,250,0.4);\nborder-radius: 5px;\nmargin: 10px;\njustify-content: space-evenly;\n"]))),R=T.b.div(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  \n  p {\n    font-size: 1.5rem;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 3px;\n  }\n\n  span {\n    text-align: center;\n  }\n"]))),q=function(e){return Object(M.jsxs)(B,{children:[Object(M.jsxs)(R,{children:[Object(M.jsxs)("p",{children:[e.weather.feel,"\xb0C"]})," ",Object(M.jsx)("span",{children:"Feels like"}),Object(M.jsxs)("p",{children:[e.weather.pressure," hPa"]})," ",Object(M.jsx)("span",{children:"Preassure"}),Object(M.jsx)("p",{children:e.weather.sunrise})," ",Object(M.jsx)("span",{children:"Sunrise"})]}),Object(M.jsxs)(R,{children:[Object(M.jsxs)("p",{children:[e.weather.humidity," % "]})," ",Object(M.jsx)("span",{children:"Humidity"}),Object(M.jsxs)("p",{children:[e.weather.wind," m/s "]})," ",Object(M.jsx)("span",{children:"Wind speed"}),Object(M.jsx)("p",{children:e.weather.sunset})," ",Object(M.jsx)("span",{children:"Sunset"})]})]})},_=T.b.ul(d||(d=Object(C.a)(["\n    width: 90vw;\n    display: flex;\n    overflow-x: auto;\n\n    ::-webkit-scrollbar {\n        width: 20px;\n        }\n        \n    ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 5px rgba(248,249,250,0.2); \n        border-radius: 10px;\n        }\n        \n    ::-webkit-scrollbar-thumb {\n        background:rgba(248,249,250,0.4); \n        border-radius: 10px;\n        }\n        \n    ::-webkit-scrollbar-thumb:hover {\n        background: rgba(248,249,250,0.2); \n"]))),H=T.b.li(l||(l=Object(C.a)(["\n    display: flex;\n    min-width: 15vh;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(248,249,250,0.4);\n    margin: 10px;\n    border-radius: 5px;\n    font-family: inherit;\n"]))),N=T.b.h3(j||(j=Object(C.a)(["\n    margin-top: 15px;\n    margin-bottom: 5px;\n"]))),G=T.b.span(h||(h=Object(C.a)(["\n    font-family: inherit;\n    font-size: 1.2rem;\n    margin-bottom: 15px;\n"]))),K=T.b.img(u||(u=Object(C.a)(["\n    max-width: 50px;\n"]))),Q=function(e){var n=e.list.hourlyWeather.slice(0,15);return Object(M.jsx)("div",{children:Object(M.jsxs)("ul",{children:[Object(M.jsx)("h2",{children:"Forecast"}),Object(M.jsx)(_,{children:n.map((function(e){return Object(M.jsxs)(H,{children:[Object(M.jsxs)(N,{children:[Math.round(e.main.temp)," \xb0C"]}),Object(M.jsx)(K,{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")}),Object(M.jsxs)(G,{children:[e.dt_txt.slice(10,13),":00"]})]},e.dt)}))})]})})},U=T.b.span(p||(p=Object(C.a)(["\nfont-size: 4rem;\ncolor: black;\n"]))),V=T.b.span(x||(x=Object(C.a)(["\nfont-size: 3rem;\nmargin-left: 20px;\n"]))),X=T.b.p(O||(O=Object(C.a)(["\nfont-size: 1.5rem;\ntext-transform: capitalize;\n"]))),Y=function(e){var n=e.weather.main;return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{style:{width:"100%",display:"flex"},children:Object(M.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(M.jsxs)("div",{children:[Object(M.jsxs)("h1",{style:{fontSize:"2.5rem",marginBottom:"0"},children:[e.weather.city,", ",e.weather.country]}),Object(M.jsx)("h3",{style:{marginTop:"0"},children:e.weather.date}),Object(M.jsxs)("div",{children:[Object(M.jsx)(U,{children:"Thunderstorm"===n?Object(M.jsx)(P.a,{icon:F.a}):"Drizzle"===n?Object(M.jsx)(P.a,{icon:F.c}):"Rain"===n?Object(M.jsx)(P.a,{icon:F.d}):"Snow"===n?Object(M.jsx)(P.a,{icon:F.g}):"Clear"===n?Object(M.jsx)(P.a,{icon:F.h}):"Clouds"===n?Object(M.jsx)(P.a,{icon:F.b}):Object(M.jsx)(P.a,{icon:F.f})}),Object(M.jsxs)(V,{children:[e.weather.temp,"\xb0C"]}),Object(M.jsx)(X,{children:e.weather.description})]})]}),Object(M.jsx)(q,{weather:e.weather})]})}),Object(M.jsx)("div",{children:Object(M.jsx)(Q,{list:e.weather})})]})},Z=t.p+"static/media/2844240.72a83ab4.jpg",$=Object(T.a)(m||(m=Object(C.a)(["\n\n  body {\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    display: flex;\n    margin: 0;\n    padding: 0;\n  }\n\n  #root {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),Z),ee=T.b.div(f||(f=Object(C.a)(["\n  width: 80%;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ne=function(){var e=Object(g.useState)(""),n=Object(z.a)(e,2),t=n[0],r=n[1],c=Object(g.useState)(null),a=Object(z.a)(c,2),i=a[0],s=a[1],o=Object(g.useState)(!1),b=Object(z.a)(o,2),d=b[0],l=b[1],j=function(e){r(e.target.value)},h=function(e){e.preventDefault();var n="88d62c3b14b6a686e5197791fb46bac7",c="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=").concat(n,"&units=metric"),a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&APPID=").concat(n,"&units=metric");function i(){return(i=Object(D.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:return n=e.sent,e.next=5,fetch(a);case 5:return t=e.sent,e.abrupt("return",[n,t]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return i.apply(this,arguments)})().then((function(e){var n=Object(z.a)(e,2),t=n[0],r=n[1];if(t.ok&&r.ok)return Promise.all([t.json(),r.json()]);throw l(!0),Error(t.statusText,r.statusText)})).then((function(e){var n=Object(z.a)(e,2),t=n[0],c=n[1],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["January","February","March","April","May","June","July","August","September","October","November","December"];var o=function(){var e=(new Date).toLocaleDateString(),n=(new Date).getDay(),t=e.split("/"),r=a[n],c=t[1],s=i[t[0]-1];return"".concat(r," ").concat(c," ").concat(s)}(),b=new Date(1e3*t.sys.sunrise).toLocaleTimeString("de-DE").slice(0,5),d=new Date(1e3*t.sys.sunset).toLocaleTimeString("de-DE").slice(0,5),j={city:t.name,country:t.sys.country,date:o,description:t.weather[0].description,main:t.weather[0].main,temp:Math.round(t.main.temp),feel:Math.round(t.main.feels_like),pressure:t.main.pressure,clouds:t.clouds.all,humidity:t.main.humidity,wind:t.wind.speed,sunset:d,sunrise:b,hourlyWeather:c.list};s(j),r(""),l(!1)})).catch((function(e){console.log(e)}))};return!0===d?Object(M.jsxs)(ee,{children:[Object(M.jsx)($,{}),Object(M.jsx)("h1",{children:"Weather App"}),Object(M.jsx)(I,{value:t,showResult:i,change:j,submit:h}),Object(M.jsx)("h2",{children:"Sorry, could not find city you entered."})]}):Object(M.jsxs)(ee,{children:[Object(M.jsx)($,{}),Object(M.jsx)("h1",{children:"Weather App"}),Object(M.jsx)(I,{value:t,showResult:i,change:j,submit:h}),i&&Object(M.jsx)(Y,{weather:i})]})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};v.a.render(Object(M.jsx)(w.a.StrictMode,{children:Object(M.jsx)(ne,{})}),document.getElementById("root")),te()}},[[33,1,2]]]);
//# sourceMappingURL=main.98958d56.chunk.js.map