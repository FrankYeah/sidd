(window.webpackJsonp=window.webpackJsonp||[]).push([[36,14,15,17,21],{1022:function(t,e,c){"use strict";c.r(e);c(55),c(19);var n=[{page:"20220118",img:c(689),keyword:"接案．網站",tag:"1",date:"2022.01.18",title:"網站設計與前端工程，接案實作四例",text:"這篇文，將以四個網站接案為例，介紹接案過程會碰到的實際狀況與流程。包含：聯繫、確認需求、談價、出設計稿、程式開發、網站佈署..."},{page:"20220127",img:c(703),keyword:"接案．網站",tag:"1",date:"2022.01.27",title:"網站架設接案，四個實際接案範例詳解過程",text:"本文將以四個實際網站架設接案為例，詳解接案過程中，實際會執行的流程，以及各式臨時狀況。我會從案件聯繫、確認需求、談價..."}],o={head:{title:"精選文 - 西打藍官方網站 Siddharam Official Website",meta:[{name:"keywords",content:"西打藍, 西打藍官方網站, 自由工作者, 自由接案, 前端工程師, 文字工作者, 網站開發, 網站架設, 軟體工程師"}]},layout:"default",components:{boxContent:c(635).default,preBox:c(649).default,headText:c(638).default,contactBtn:c(641).default},props:{},data:function(){return{selectTag:0,tagData:[{name:"全部"},{name:"網站接案"},{name:"自由工作者"}],articlesList:n,selectArticles:[]}},computed:{},methods:{},watch:{selectTag:{handler:function(t){this.selectArticles=0==t?this.articlesList:this.articlesList.filter((function(article){return article.tag==t}))},immediate:!0}}},r=(c(834),c(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("preBox",{staticClass:"articles"},[c("div",{staticClass:"articles-intro"},[c("headText",{attrs:{ch:"精選文",en:"ARTICLES"}})],1),t._v(" "),c("boxContent",{staticClass:"articles-class"},t._l(t.tagData,(function(e,n){return c("div",{key:n,class:["articles-class-tag",{"articles-class-tag-bold":t.selectTag==n}],on:{click:function(e){t.selectTag=n}}},[t._v(t._s(t.tagData[n].name))])})),0),t._v(" "),c("boxContent",{staticClass:"articles-page"},t._l(t.selectArticles,(function(e,n){return c("router-link",{key:n,staticClass:"articles-page-box",attrs:{to:"/article/"+e.page,target:"_blank"}},[c("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:""+e.img,expression:"`${articles.img}`",arg:"background-image"}],staticClass:"articles-page-img"}),t._v(" "),c("div",{staticClass:"articles-page-row"},[c("div",{staticClass:"articles-page-keyword"},[t._v(t._s(e.keyword))]),t._v(" "),c("div",{staticClass:"articles-page-date"},[t._v(t._s(e.date))])]),t._v(" "),c("div",{staticClass:"articles-page-title"},[t._v(t._s(e.title))]),t._v(" "),c("div",{staticClass:"articles-page-text"},[t._v(t._s(e.text))])])})),1)],1)}),[],!1,null,"20cf77e2",null);e.default=component.exports},630:function(t,e,c){var content=c(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("5eb4bdbd",content,!0,{sourceMap:!1})},631:function(t,e,c){var content=c(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("b2b3508c",content,!0,{sourceMap:!1})},632:function(t,e,c){var content=c(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("0c9b0cc3",content,!0,{sourceMap:!1})},633:function(t,e,c){var content=c(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("3ec1ede2",content,!0,{sourceMap:!1})},635:function(t,e,c){"use strict";c.r(e);var n={components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},o=(c(639),c(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"box"},[t._t("default")],2)}),[],!1,null,"4423a8d4",null);e.default=component.exports},636:function(t,e,c){"use strict";c(630)},637:function(t,e,c){var n=c(23)(!1);n.push([t.i,".head[data-v-5fe8913b]{text-align:center}.head-text-ch[data-v-5fe8913b]{font-size:34px;letter-spacing:8px}.head-text-en[data-v-5fe8913b]{margin-top:18px;font-size:20px;letter-spacing:2px}.head-line[data-v-5fe8913b]{width:30px;height:1px;background-color:#005caf;margin:20px auto 0}@media(max-width:1023px){.head-text-ch[data-v-5fe8913b]{font-size:24px;line-height:1.4}.head-text-en[data-v-5fe8913b]{font-size:16px;margin-top:12px}.head-line[data-v-5fe8913b]{width:20px;margin:16px auto 0}}",""]),t.exports=n},638:function(t,e,c){"use strict";c.r(e);var n={components:{},props:{ch:String,en:String},data:function(){return{}},computed:{},methods:{},watch:{}},o=(c(636),c(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"head"},[c("h1",{staticClass:"head-text-ch"},[t._v(t._s(t.ch))]),t._v(" "),c("h1",{staticClass:"head-text-en"},[t._v(t._s(t.en))]),t._v(" "),c("div",{staticClass:"head-line"})])}),[],!1,null,"5fe8913b",null);e.default=component.exports},639:function(t,e,c){"use strict";c(631)},640:function(t,e,c){var n=c(23)(!1);n.push([t.i,".box[data-v-4423a8d4]{max-width:1100px;margin:100px auto}@media(max-width:1023px){.box[data-v-4423a8d4]{max-width:500px;margin:70px auto 30px}}",""]),t.exports=n},641:function(t,e,c){"use strict";c.r(e);var n={components:{},props:{text:String,mini:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},watch:{}},o=(c(643),c(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{class:["contactB"]},[c("button",{class:["contactB-box",{"contactB-box-mini":t.mini}]},[t._v("\n    "+t._s(t.text)+"\n  ")])])}),[],!1,null,"c3397ac2",null);e.default=component.exports},643:function(t,e,c){"use strict";c(632)},644:function(t,e,c){var n=c(23)(!1);n.push([t.i,".contactB[data-v-c3397ac2],.contactB-box[data-v-c3397ac2]{text-align:center}.contactB-box[data-v-c3397ac2]{width:250px;padding:16px 0;border:1px solid #005caf;border-radius:4px;font-size:22px;color:#005caf;cursor:pointer;-webkit-transition:.6s;transition:.6s}.contactB-box[data-v-c3397ac2]:hover{color:#fff;background-color:#005caf}.contactB-box-mini[data-v-c3397ac2]{width:150px;padding:10px 0;font-size:18px}@media(max-width:1023px){.contactB-box[data-v-c3397ac2]{width:140PX;padding:8px 0;font-size:18px}.contactB-box-mini[data-v-c3397ac2]{width:100px;padding:6px 0;font-size:15px}}",""]),t.exports=n},645:function(t,e,c){"use strict";c(633)},646:function(t,e,c){var n=c(23)(!1);n.push([t.i,".pre[data-v-d5dceafa]{margin-bottom:-1px;padding-top:120px;background-color:#f0f0f0;color:#000}@media(max-width:1023px){.pre[data-v-d5dceafa]{padding-top:80px}}",""]),t.exports=n},649:function(t,e,c){"use strict";c.r(e);var n={components:{},props:{ch:String,en:String},data:function(){return{}},computed:{},methods:{},watch:{}},o=(c(645),c(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"pre"},[t._t("default")],2)}),[],!1,null,"d5dceafa",null);e.default=component.exports},689:function(t,e,c){t.exports=c.p+"img/article-sunmoon-1.8683300.webp"},703:function(t,e,c){t.exports=c.p+"img/article-yayan-2.cf93b1a.webp"},796:function(t,e,c){var content=c(835);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("66f43d82",content,!0,{sourceMap:!1})},834:function(t,e,c){"use strict";c(796)},835:function(t,e,c){var n=c(23)(!1);n.push([t.i,".articles-intro[data-v-20cf77e2]{margin:0 auto}.articles-class[data-v-20cf77e2]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:50px auto}.articles-class-tag[data-v-20cf77e2]{margin:0 20px 0 0;font-size:22px;cursor:pointer}.articles-class-tag[data-v-20cf77e2]:hover{opacity:.8}.articles-class-tag-bold[data-v-20cf77e2]{font-weight:700}.articles-page[data-v-20cf77e2]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:50px auto;color:#000}.articles-page-box[data-v-20cf77e2]{width:300px;margin:0 100px 80px 0;-webkit-transition:opacity .3s;transition:opacity .3s;cursor:pointer}.articles-page-box[data-v-20cf77e2]:nth-child(3n){margin:0 0 80px}.articles-page-box[data-v-20cf77e2]:hover{opacity:.8}.articles-page-img[data-v-20cf77e2]{width:320px;height:220px;background-repeat:no-repeat;background-size:cover;background-position:50%}.articles-page-row[data-v-20cf77e2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:20px 0 0}.articles-page-keyword[data-v-20cf77e2]{font-size:18px;color:#005caf}.articles-page-date[data-v-20cf77e2]{font-size:14px;color:grey}.articles-page-title[data-v-20cf77e2]{font-size:24px;font-weight:700;line-height:1.4;margin:14px 0 0;letter-spacing:1.3px;color:#000}.articles-page-text[data-v-20cf77e2]{font-size:18px;margin:18px 0 0;line-height:1.4;color:#000}@media(max-width:1023px){.articles-class[data-v-20cf77e2]{margin:50px auto 30px;padding:0 20px}.articles-class-tag[data-v-20cf77e2]{font-size:18px;margin:0 14px 0 0}.articles-page[data-v-20cf77e2]{margin:30px auto 50px;padding:0 20px}.articles-page-box[data-v-20cf77e2]{max-width:300px;width:calc(50vw - 30px);margin:0 20px 60px 0}.articles-page-box[data-v-20cf77e2]:nth-child(2n){margin:0 0 60px}.articles-page-img[data-v-20cf77e2]{width:100%;max-height:180px;height:30vw}.articles-page-row[data-v-20cf77e2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:10px 0 0}.articles-page-keyword[data-v-20cf77e2]{font-size:14px}.articles-page-date[data-v-20cf77e2]{margin:6px 0 0}.articles-page-title[data-v-20cf77e2]{margin:8px 0 0;font-size:18px}.articles-page-text[data-v-20cf77e2]{margin:8px 0 0;font-size:14px}}",""]),t.exports=n}}]);