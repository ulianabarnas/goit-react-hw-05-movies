"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c=e(885),o=e(791),a=e(689),u=e(390),i=e(168),f=e(444).ZP.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 12px;\n"]))),s=e(783),h=e(184);function l(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,o.useState)(null),l=(0,c.Z)(i,2),p=l[0],d=l[1],w=(0,a.UO)().movieId;if((0,o.useEffect)((function(){(0,u.Ku)(w).then((function(n){d(null),r(n.cast)})).catch((function(n){d(n),r(null)}))}),[w]),0!==e.length)return(0,h.jsxs)("div",{children:[p&&(0,h.jsx)("p",{children:"Something go wrong. Try again"}),(0,h.jsx)(f,{children:e.map((function(n){var t=n.name,e=n.character,r=n.profile_path,c=r?"https://image.tmdb.org/t/p/w200".concat(r):s;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:c,alt:t,width:"200"}),(0,h.jsx)("p",{children:t}),(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Character:"})," ",e]})]},t)}))})]})}},390:function(n,t,e){e.d(t,{Df:function(){return o},FL:function(){return a},Ku:function(){return u},Ph:function(){return f},fI:function(){return i}});var r="https://api.themoviedb.org/3",c="cb3a4c8f64515db00f59416b4e7a67de";function o(){return fetch("".concat(r,"/trending/movie/week?api_key=").concat(c)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function a(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function u(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function i(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function f(n){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},783:function(n,t,e){n.exports=e.p+"static/media/default-photo.61b2c0df9fe54a6525b5.jpg"}}]);
//# sourceMappingURL=736.f0270d11.chunk.js.map