"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o=t(885),i=t(791),c=t(689),a=t(390),s=t(128),l=t(168),u=t(731),f=t(444),d=(0,f.ZP)(u.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"]))),h=t(184);function p(n){var e=n.to,t=n.children;return(0,h.jsxs)(d,{to:e,children:[(0,h.jsx)(s.jTe,{size:"24"}),t]})}var x,g,m,j,v,w,b,k,Z,_=t(830),P=f.ZP.div(x||(x=(0,l.Z)(["\n    display: flex;\n    align-items: flex-start;\n    padding: 8px 0;\n    margin-bottom: 16px;\n    border-bottom: 1px solid black;\n"]))),y=f.ZP.div(g||(g=(0,l.Z)(["\n    margin-left: 12px;\n"]))),S=f.ZP.h3(m||(m=(0,l.Z)(["\n    margin-top: 32px;\n"]))),E=f.ZP.ul(j||(j=(0,l.Z)(["\n    display: flex;\n"]))),U=f.ZP.li(v||(v=(0,l.Z)(["\n    margin-right: 12px\n"]))),C=f.ZP.h2(w||(w=(0,l.Z)(["\n    margin-bottom: 12px;\n    font-size: 32px;\n"]))),L=f.ZP.p(b||(b=(0,l.Z)(["\n    margin-bottom: 12px;\n"]))),O=f.ZP.span(k||(k=(0,l.Z)(["\n    background-color: #ff4500;\n    color: white;\n    padding: 0 8px;\n    border-radius: 4px;\n    line-height: 12px\n"]))),z=(0,f.ZP)(u.OL)(Z||(Z=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n\n  &.active {\n    color: orangered;\n  }\n"]))),F=t(387);function G(){var n,e,t=(0,i.useState)(null),r=(0,o.Z)(t,2),s=r[0],l=r[1],u=(0,i.useState)(null),f=(0,o.Z)(u,2),d=f[0],x=f[1],g=(0,c.UO)().movieId,m=(0,c.TH)();if((0,i.useEffect)((function(){(0,a.FL)(g).then((function(n){x(null),l(n)})).catch((function(n){x(n),l(null)}))}),[g]),s){var j=s.title,v=s.release_date,w=s.overview,b=s.poster_path,k=s.genres,Z=s.vote_average,G=k.map((function(n){return n.name})).join(", "),I=null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",T=b?"https://image.tmdb.org/t/p/w300".concat(b):F;return(0,h.jsxs)("main",{children:[d&&(0,h.jsx)("p",{children:"Movie loading fail"}),(0,h.jsx)(p,{to:I,children:"Go back"}),(0,h.jsxs)(P,{children:[(0,h.jsx)("img",{src:T,alt:j,width:"300"}),(0,h.jsxs)(y,{children:[(0,h.jsxs)(C,{children:[j," (",v.slice(0,4),")"]}),(0,h.jsxs)(L,{children:[(0,h.jsx)("b",{children:"Vote average:"})," ",(0,h.jsx)(O,{children:Z})]}),(0,h.jsxs)(L,{children:[(0,h.jsx)("b",{children:"Overview:"})," ",w]}),(0,h.jsxs)(L,{children:[(0,h.jsx)("b",{children:"Genres:"})," ",G]}),(0,h.jsx)(S,{children:"Additional information"}),(0,h.jsxs)(E,{children:[(0,h.jsx)(U,{children:(0,h.jsx)(z,{to:"cast",state:{from:I},children:"Cast"})}),(0,h.jsx)(U,{children:(0,h.jsx)(z,{to:"reviews",state:{from:I},children:"Reviews"})})]})]})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(_.Z,{}),children:(0,h.jsx)(c.j3,{})})]})}}},390:function(n,e,t){t.d(e,{Df:function(){return i},FL:function(){return c},Ku:function(){return a},Ph:function(){return l},fI:function(){return s}});var r="https://api.themoviedb.org/3",o="cb3a4c8f64515db00f59416b4e7a67de";function i(){return fetch("".concat(r,"/trending/movie/week?api_key=").concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function c(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function a(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function s(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function l(n){return fetch("".concat(r,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},387:function(n,e,t){n.exports=t.p+"static/media/default-poster.b98378e2328f30af55fe.jpg"}}]);
//# sourceMappingURL=115.59b37e78.chunk.js.map