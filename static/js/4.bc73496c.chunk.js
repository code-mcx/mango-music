(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(n,t,e){"use strict";e.d(t,"b",function(){return A}),e.d(t,"a",function(){return c});var a=e(92),i=e(90);function A(){var n=Object.assign({},i.c,{g_tk:5381,uin:0,platform:"h5",needNewCode:1,_:(new Date).getTime()});return Object(a.a)(i.d.rankingList,n,i.b)}function c(n){var t=Object.assign({},i.c,{g_tk:5381,uin:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:n,_:(new Date).getTime()});return Object(a.a)(i.d.rankingInfo,t,i.b)}},130:function(n,t,e){"use strict";e.d(t,"b",function(){return c}),e.d(t,"a",function(){return o});var a=e(3),i=e(29),A=function n(t,e,i,A){Object(a.a)(this,n),this.id=t,this.title=e,this.img=i,this.songs=A};function c(n){var t=[];return n.songList.forEach(function(n){t.push(new i.a(0,"",n.songname,"",0,"",n.singername))}),new A(n.id,n.topTitle,n.picUrl,t)}function o(n){return new A(n.topID,n.ListName,n.pic_v12,[])}},163:function(n,t,e){n.exports={"ranking-list":"ranking_ranking-list__1Af9f",rankingList:"ranking_ranking-list__1Af9f","ranking-wrapper":"ranking_ranking-wrapper__3OkjY",rankingWrapper:"ranking_ranking-wrapper__3OkjY",left:"ranking_left__3H9dg",right:"ranking_right__1jJmG","top-song":"ranking_top-song__32lOo",topSong:"ranking_top-song__32lOo",index:"ranking_index__Huq2h"}},221:function(n,t,e){"use strict";e.r(t);var a=e(3),i=e(5),A=e(7),c=e(6),o=e(8),r=e(0),s=e.n(r),g=e(30),l=e(119),p=e.n(l),u=e(28),h=e(93),f=e(129),m=e(90),E=e(130),d=e(163),B=e.n(d),k=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(A.a)(this,Object(c.a)(t).call(this,n))).state={loading:!0,rankingList:[]},e}return Object(o.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){var n=this;Object(f.b)().then(function(t){if(t&&t.code===m.a){var e=[];t.data.topList.forEach(function(n){/MV/i.test(n.topTitle)||e.push(E.b(n))}),n.setState({loading:!1,rankingList:e})}})}},{key:"toDetail",value:function(n){var t=this;return function(){t.props.history.push({pathname:n})}}},{key:"render",value:function(){var n=this,t=this.props,e=t.match,a=t.route;return s.a.createElement("div",{className:"music-ranking"},s.a.createElement(u.a,{onScroll:function(){Object(l.forceCheck)()}},s.a.createElement("div",{className:B.a.rankingList},this.state.rankingList.map(function(t){return s.a.createElement("div",{className:"".concat(B.a.rankingWrapper," skin-ranking-wrapper"),key:t.id,onClick:n.toDetail("".concat(e.url+"/"+t.id))},s.a.createElement("div",{className:B.a.left},s.a.createElement(p.a,{height:100},s.a.createElement("img",{src:t.img,alt:t.title}))),s.a.createElement("div",{className:B.a.right},s.a.createElement("h1",{className:"ranking-title"},t.title),t.songs.map(function(n,t){return s.a.createElement("div",{className:B.a.topSong,key:t},s.a.createElement("span",{className:B.a.index},t+1),s.a.createElement("span",null,n.name),"\xa0-\xa0",s.a.createElement("span",{className:"singer"},n.singer))})))}))),s.a.createElement(h.a,{title:"\u6b63\u5728\u52a0\u8f7d...",show:this.state.loading}),Object(g.a)(a.routes))}}]),t}(s.a.Component);t.default=k},90:function(n,t,e){"use strict";e.d(t,"d",function(){return a}),e.d(t,"c",function(){return i}),e.d(t,"b",function(){return A}),e.d(t,"a",function(){return c});var a={carousel:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",newalbum:"https://u.y.qq.com/cgi-bin/musicu.fcg",albumInfo:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",rankingList:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",rankingInfo:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",search:"https://c.y.qq.com/soso/fcgi-bin/client_search_cp",hotkey:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",singerList:"https://c.y.qq.com/v8/fcg-bin/v8.fcg",singerInfo:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",songVkey:"https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg"},i={format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0},A={param:"jsonpCallback",prefix:"callback"},c=0},92:function(n,t,e){"use strict";var a=e(100),i=e.n(a);t.a=function(n,t,e){return new Promise(function(a,A){i()(function(n,t){var e=[];for(var a in t)e.push("".concat(a,"=").concat(t[a]));var i=e.join("&");return-1===n.indexOf("?")?n+="?"+i:n+="&"+i,n}(n,t),e,function(n,t){n?A(n):a(t)})})}},93:function(n,t,e){"use strict";var a=e(3),i=e(5),A=e(7),c=e(6),o=e(8),r=e(0),s=e.n(r),g=e(96),l=e.n(g),p=e(97),u=e.n(p),h=function(n){function t(){return Object(a.a)(this,t),Object(A.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,n),Object(i.a)(t,[{key:"render",value:function(){var n=!0===this.props.show?{display:""}:{display:"none"};return s.a.createElement("div",{className:u.a.loadingContainer,style:n},s.a.createElement("div",{className:u.a.loadingWrapper},s.a.createElement("img",{src:l.a,width:"18px",height:"18px",alt:"loading"}),s.a.createElement("div",{className:u.a.loadingTitle},this.props.title)))}}]),t}(s.a.Component);t.a=h},96:function(n,t){n.exports="data:image/gif;base64,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"},97:function(n,t,e){n.exports={"loading-container":"loading_loading-container__3frnK",loadingContainer:"loading_loading-container__3frnK","loading-wrapper":"loading_loading-wrapper__17gkX",loadingWrapper:"loading_loading-wrapper__17gkX","loading-title":"loading_loading-title__uqeDc",loadingTitle:"loading_loading-title__uqeDc"}}}]);