(function(t){function e(e){for(var a,l,r=e[0],o=e[1],u=e[2],g=0,d=[];g<r.length;g++)l=r[g],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},s=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0723":function(t,e,i){"use strict";var a=i("fd24"),n=i.n(a);n.a},"191d":function(t,e,i){"use strict";var a=i("5c82"),n=i.n(a);n.a},1963:function(t,e,i){"use strict";var a=i("3e5c"),n=i.n(a);n.a},"1b9a":function(t,e,i){"use strict";var a=i("50b4"),n=i.n(a);n.a},"302e":function(t,e,i){},"38d3":function(t,e,i){},"3c18":function(t,e,i){"use strict";var a=i("418e"),n=i.n(a);n.a},"3e5c":function(t,e,i){},"418e":function(t,e,i){},4688:function(t,e,i){"use strict";var a=i("38d3"),n=i.n(a);n.a},"4a65":function(t,e,i){},"4b64":function(t,e,i){},"500b":function(t,e,i){"use strict";var a=i("896d"),n=i.n(a);n.a},"50b4":function(t,e,i){},"554f":function(t,e,i){"use strict";var a=i("ad80"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"app"}},[t.app&&t.messages.length>0?i("TopHead",{attrs:{app:t.app}},[i("button",{staticClass:"audio-toggle",attrs:{title:t.muted?t.translations[t.lang()]&&t.translations[t.lang()].unMuteTitle||t.translations[t.config.fallback_lang].unMuteTitle:t.translations[t.lang()]&&t.translations[t.lang()].muteTitle||t.translations[t.config.fallback_lang].muteTitle,"aria-label":t.muted?t.translations[t.lang()]&&t.translations[t.lang()].unMuteTitle||t.translations[t.config.fallback_lang].unMuteTitle:t.translations[t.lang()]&&t.translations[t.lang()].muteTitle||t.translations[t.config.fallback_lang].muteTitle},on:{click:function(e){t.muted=!t.muted}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.muted?"volume_off":"volume_up"))])])]):t._e(),i("section",{staticClass:"container chat-container"},[t.error?i("Error",{attrs:{error:t.error}}):t._e(),t.app&&0==t.messages.length?i("Welcome",{attrs:{app:t.app}}):i("section",{attrs:{"aria-live":"polite"}},[t._l(t.messages,(function(e){return i("div",{key:e.responseId,staticClass:"message"},[i("BubbleWrapper",[e.queryResult.queryText?i("Bubble",{attrs:{text:e.queryResult.queryText,me:""}}):t._e()],1),t._l(e.queryResult.fulfillmentMessages,(function(e,a){return i("div",{key:a,staticClass:"component"},[e.text?i("Bubble",{attrs:{text:e.text.text[0]}}):t._e(),e.simpleResponses?i("Bubble",{attrs:{text:e.simpleResponses.simpleResponses[0].displayText||e.simpleResponses.simpleResponses[0].textToSpeech}}):t._e(),e.card?i("Card",{attrs:{title:e.card.title,subtitle:e.card.subtitle,"image-uri":e.card.imageUri}},t._l(e.card.buttons,(function(t){return i("CardButton",{key:t.text,attrs:{uri:t.postback,title:t.text}})})),1):t._e(),e.basicCard?i("Card",{attrs:{title:e.basicCard.title,subtitle:e.basicCard.subtitle,"image-uri":e.basicCard.image.imageUri,"image-title":e.basicCard.image.accessibilityText,text:e.basicCard.formattedText}},t._l(e.basicCard.buttons,(function(t){return i("CardButton",{key:t.title,attrs:{uri:t.openUriAction.uri,title:t.title}})})),1):t._e(),e.carouselSelect?i("Carousel",t._l(e.carouselSelect.items,(function(e){return i("Card",{key:e.info.key,attrs:{title:e.title,"image-uri":e.image.imageUri,"image-title":e.image.accessibilityText,text:e.description},nativeOn:{click:function(i){return t.send({text:e.info.key})}}})})),1):t._e(),e.listSelect?i("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return i("ListItem",{key:e.title,attrs:{title:e.title,description:e.description,"image-uri":e.image.imageUri,"image-title":e.image.accessibilityText},nativeOn:{click:function(i){return t.send({text:e.info.key})}}})})),1):t._e(),e.image?i("Picture",{attrs:{uri:e.image.imageUri,title:e.image.accessibilityText}}):t._e()],1)})),e.queryResult.webhookPayload&&e.queryResult.webhookPayload.google?i("section",[t._l(e.queryResult.webhookPayload.google.richResponse.items,(function(e,a){return i("div",{key:a,staticClass:"component"},[e.simpleResponse?i("Bubble",{attrs:{text:e.simpleResponse.displayText||e.simpleResponse.textToSpeech}}):t._e(),e.basicCard?i("Card",{attrs:{title:e.basicCard.title,subtitle:e.basicCard.subtitle,"image-uri":e.basicCard.image.url,"image-title":e.basicCard.image.accessibilityText,text:e.basicCard.formattedText}},t._l(e.basicCard.buttons,(function(t){return i("CardButton",{key:t.title,attrs:{uri:t.openUrlAction.url,title:t.title}})})),1):t._e(),e.carouselBrowse?i("List",t._l(e.carouselBrowse.items,(function(t){return i("ListItem",{key:t.title,attrs:{uri:t.openUrlAction.url,title:t.title,description:t.description,footer:t.footer,"image-uri":t.image.url,"image-title":t.image.accessibilityText}})})),1):t._e(),e.mediaResponse&&e.mediaResponse.mediaObjects?i("div",t._l(e.mediaResponse.mediaObjects,(function(t){return i("Media",{key:t.name,attrs:{name:t.name,description:t.description,"icon-uri":t.icon.url,"icon-title":t.icon.accessibilityText,uri:t.contentUrl}})})),1):t._e(),e.tableCard?i("TableCard",{attrs:{title:e.tableCard.title,subtitle:e.tableCard.subtitle,"image-uri":e.tableCard.image.url,"image-title":e.tableCard.image.accessibilityText,header:e.tableCard.columnProperties,rows:e.tableCard.rows}},t._l(e.tableCard.buttons,(function(t){return i("CardButton",{key:t.title,attrs:{uri:t.openUrlAction.url,title:t.title}})})),1):t._e()],1)})),t._l(e.queryResult.webhookPayload.google.systemIntent,(function(e,a){return i("div",{key:a,staticClass:"component"},[e.listSelect?i("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return i("ListItem",{key:e.optionInfo.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.url,"image-title":e.image.accessibilityText},nativeOn:{click:function(i){return t.send({text:e.optionInfo.key})}}})})),1):t._e(),e.carouselSelect?i("Carousel",t._l(e.carouselSelect.items,(function(e){return i("Card",{key:e.optionInfo.key,attrs:{title:e.title,"image-uri":e.image.url,"image-title":e.image.accessibilityText,text:e.description},nativeOn:{click:function(i){return t.send({text:e.optionInfo.key})}}})})),1):t._e()],1)}))],2):t._e()],2)})),t.loading?i("div",{staticClass:"message"},[i("BubbleWrapper",[i("Bubble",{attrs:{me:"",loading:"","aria-hidden":"true"}})],1),i("Bubble",{attrs:{loading:"","aria-hidden":"true"}})],1):t._e()],2)],1),i("ChatInput",{ref:"input",on:{submit:t.send}},[t.suggestions.text_suggestions?i("span",t._l(t.suggestions.text_suggestions,(function(e,a){return i("Suggestion",{key:a,attrs:{title:e},nativeOn:{click:function(i){return t.send({text:e})}}})})),1):t._e(),t.suggestions.link_suggestion?i("Suggestion",{attrs:{title:t.suggestions.link_suggestion.destinationName,url:t.suggestions.link_suggestion.uri||t.suggestions.link_suggestion.url}}):t._e()],1)],1)},s=[],l=(i("99af"),i("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[t.app.avatarUri?i("img",{staticClass:"app-icon",attrs:{alt:t.app.displayName,src:"https://storage.googleapis.com/cloudprod-apiai/"+t.app.avatarUri}}):i("img",{staticClass:"app-icon",attrs:{src:"https://console.dialogflow.com/api-client/assets/img/logo-short.png",alt:t.app.displayName}}),i("h1",{staticClass:"app-title"},[t._v(t._s(t.translations[t.sel_lang]&&t.translations[t.sel_lang].welcomeTitle||t.translations[t.config.fallback_lang].welcomeTitle)+" "+t._s(t.app.displayName))]),i("p",{staticClass:"app-description"},[t._v(t._s(t.app.description))]),t.app.supportedLanguageCodes&&t.app.supportedLanguageCodes.length>0?i("div",[i("button",{staticClass:"language-picker",class:{picked:t.sel_lang==t.app.defaultLanguageCode},attrs:{role:"checkbox"},on:{click:function(e){t.sel_lang=t.app.defaultLanguageCode}}},[t._v(" "+t._s(t._f("toLang")(t.app.defaultLanguageCode))+" ")]),t._l(t.app.supportedLanguageCodes,(function(e){return i("button",{key:e,staticClass:"language-picker",class:{picked:t.sel_lang==e},attrs:{role:"checkbox"},on:{click:function(i){t.sel_lang=e}}},[t._v(" "+t._s(t._f("toLang")(e))+" ")])}))],2):t._e()])}),r=[],o=i("e13d"),u={name:"Welcome",filters:{toLang:function(t){return o.where("1",t).local}},props:{app:{type:Object,required:!0}},data:function(){return{sel_lang:""}},watch:{sel_lang:function(t){this.history()?localStorage.setItem("lang",t):this.config.fallback_lang=t}},created:function(){this.app&&this.app.defaultLanguageCode?this.sel_lang=this.app.defaultLanguageCode:this.sel_lang=this.config.fallback_lang}},c=u,g=(i("f66b"),i("2877")),d=Object(g["a"])(c,l,r,!1,null,"53105d9d",null),p=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[i("i",{staticClass:"material-icons error-icon",attrs:{"aria-hidden":"true"}},[t._v("error")]),i("pre",{staticClass:"error-description"},[t._v(t._s(t.error))])])},m=[],b={name:"Error",props:{error:{type:String,default:null}}},h=b,_=(i("1963"),Object(g["a"])(h,f,m,!1,null,"59516455",null)),y=_.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"app-head"},[t.app.avatarUri?i("img",{staticClass:"app-icon",attrs:{alt:t.app.displayName,src:"https://storage.googleapis.com/cloudprod-apiai/"+t.app.avatarUri}}):i("img",{staticClass:"app-icon",attrs:{src:"https://console.dialogflow.com/api-client/assets/img/logo-short.png",alt:t.app.displayName}}),i("div",{staticClass:"app-info"},[i("div",{staticClass:"app-name"},[t._v(t._s(t.app.displayName))]),t._m(0)]),t._t("default")],2)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-poweredby"},[t._v("Built with "),i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://dialogflow.cloud.ushakov.co","aria-hidden":"true"}},[t._v("Dialogflow Gateway")])])}],k={name:"TopHead",props:{app:{type:Object,default:null}}},S=k,w=(i("554f"),Object(g["a"])(S,v,C,!1,null,"f4a00fd6",null)),x=w.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottomchat"},[i("div",{staticClass:"container"},[i("div",{staticClass:"suggestions"},[t._t("default")],2),i("div",{staticClass:"flexible"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit({text:t.query})},focus:function(e){t.microphone=!1,t.should_listen=!1},input:function(e){e.target.composing||(t.query=e.target.value)}}}),!t.microphone&&t.query.length>0||!t.microphone_allowed?i("button",{staticClass:"button",attrs:{title:t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle},on:{click:function(e){return t.submit({text:t.query})}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("arrow_upward")])]):i("button",{staticClass:"button",class:{mic_active:t.microphone},attrs:{"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].microphoneTitle||t.translations[t.config.fallback_lang].microphoneTitle,title:t.translations[t.lang()]&&t.translations[t.lang()].microphoneTitle||t.translations[t.config.fallback_lang].microphoneTitle},on:{click:function(e){t.microphone=!t.microphone}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("mic")])])])])])},R=[];i("ac1f"),i("5319");window.MediaRecorder=i("1eaa");var q={name:"ChatInput",data:function(){return{query:"",microphone:!1,recognition:null,recorder:null,should_listen:!0}},computed:{microphone_allowed:function(){return!(!this.recognition&&!this.recorder)}},watch:{microphone:function(t){t?(this.should_listen=!0,this.recognition?(this.recognition.lang=this.lang(),this.recognition.start()):this.recorder&&this.recorder.start()):this.recognition?this.recognition.abort():this.recorder&&this.recorder.stop()}},created:function(){var t=this;window.webkitSpeechRecognition||window.SpeechRecognition?(this.recognition=new window.webkitSpeechRecognition||new window.SpeechRecognition,this.recognition.interimResults=!0,this.recognition.onresult=function(e){for(var i=e.resultIndex;i<e.results.length;++i)t.query=e.results[i][0].transcript},this.recognition.onend=function(){t.recognition.stop(),t.microphone=!1,t.submit({text:t.query})}):window.MediaRecorder&&navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){t.recorder=new window.MediaRecorder(e),t.recorder.addEventListener("dataavailable",(function(e){var i=new FileReader;i.readAsDataURL(e.data),i.onloadend=function(){t.submit({audio:i.result.replace(/^data:.+;base64,/,"")})}}))}))},methods:{listen:function(){this.should_listen&&(this.microphone=!0)},submit:function(t){t.text&&t.text.length>0?this.$emit("submit",t):t.audio&&this.$emit("submit",t),this.query=""}}},O=q,I=(i("ed4f"),Object(g["a"])(O,T,R,!1,null,"6c9933f2",null)),U=I.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bubble",class:{me:t.me,loading:t.loading},attrs:{tabindex:"0"}},[t._v(t._s(t.text))])},j=[],E={name:"Bubble",props:{text:{type:String,required:!1,default:""},me:{type:Boolean},loading:{type:Boolean}}},P=E,B=(i("4688"),Object(g["a"])(P,M,j,!1,null,"113872d6",null)),L=B.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bubble-wrapper"},[t._t("default")],2)},$=[],A={name:"BubbleWrapper"},W=A,J=(i("5c97"),Object(g["a"])(W,N,$,!1,null,"41157d82",null)),D=J.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card",attrs:{tabindex:"0"}},[t.imageUri?i("img",{staticClass:"card-image",attrs:{src:t.imageUri,alt:t.imageTitle||t.title}}):t._e(),i("div",{staticClass:"card-content"},[t.title?i("div",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"card-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t.text?i("div",{staticClass:"card-text"},[t._v(t._s(t.text))]):t._e(),t._t("default")],2)])},H=[],G={name:"Card",props:{text:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},subtitle:{type:String,default:null},title:{type:String,default:null}}},z=G,V=(i("7a71"),Object(g["a"])(z,F,H,!1,null,"031d5d5e",null)),K=V.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"card-button",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[i("i",{staticClass:"material-icons card-button-icon",attrs:{"aria-hidden":"true"}},[t._v("arrow_forward")]),i("span",{staticClass:"card-button-title"},[t._v(t._s(t.title))])])},X=[],Y={name:"CardButton",props:{uri:{type:String,default:null},title:{type:String,default:null}}},Z=Y,tt=(i("500b"),Object(g["a"])(Z,Q,X,!1,null,"113e94f4",null)),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"carousel"},[t._t("default")],2)},at=[],nt={name:"CarouselSelect"},st=nt,lt=(i("3c18"),Object(g["a"])(st,it,at,!1,null,"712e16d0",null)),rt=lt.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[t.title?i("div",{staticClass:"list-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"list-subtitle"},[t._v("Subtitle")]):t._e(),i("ul",{staticClass:"list-content",attrs:{"aria-label":t.title}},[t._t("default")],2)])},ut=[],ct={name:"List",props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},gt=ct,dt=(i("e925"),Object(g["a"])(gt,ot,ut,!1,null,"8bb611ba",null)),pt=dt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-item",attrs:{tabindex:"0"}},[t.imageUri?i("img",{staticClass:"list-item-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),i("a",{staticClass:"list-item-content",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[i("div",{staticClass:"list-item-title"},[t._v(t._s(t.title))]),i("span",{staticClass:"list-item-description"},[t._v(t._s(t.description))]),i("span",{staticClass:"list-item-footer"},[t._v(t._s(t.footer))])])])},mt=[],bt={name:"ListItem",props:{imageUri:{type:String,default:null},imageTitle:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},footer:{type:String,default:null},uri:{type:String,default:null}}},ht=bt,_t=(i("fecb"),Object(g["a"])(ht,ft,mt,!1,null,"a16c4226",null)),yt=_t.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{staticClass:"picture",attrs:{src:t.uri,alt:t.title}})},Ct=[],kt={name:"Picture",props:{uri:{type:String,default:null},title:{type:String,default:null}}},St=kt,wt=(i("1b9a"),Object(g["a"])(St,vt,Ct,!1,null,"23cd7296",null)),xt=wt.exports,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media"},[t.iconUri?i("img",{staticClass:"media-image",attrs:{src:t.iconUri,alt:t.iconTitle}}):t._e(),i("div",{staticClass:"media-content"},[t.name?i("div",{staticClass:"media-title"},[t._v(t._s(t.name))]):t._e(),t.description?i("div",{staticClass:"media-subtitle"},[t._v(t._s(t.description))]):t._e()]),i("audio",{staticClass:"media-controls",attrs:{controls:"",src:t.uri}})])},Rt=[],qt={name:"Media",props:{name:{type:String,default:null},description:{type:String,default:null},iconUri:{type:String,default:null},iconTitle:{type:String,default:null},uri:{type:String,default:null}}},Ot=qt,It=(i("0723"),Object(g["a"])(Ot,Tt,Rt,!1,null,"01d78b83",null)),Ut=It.exports,Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-card"},[t.imageUri?i("img",{staticClass:"table-card-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),i("div",{staticClass:"table-card-content"},[t.title?i("div",{staticClass:"table-card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"table-card-subtitle"},[t._v(t._s(t.subtitle))]):t._e()]),i("div",{staticClass:"table-card-scrollable"},[i("table",{staticClass:"table-card-table",attrs:{cellspacing:"0",cellpadding:"0"}},[i("tr",t._l(t.header,(function(e,a){return i("th",{key:a},[t._v(t._s(e.header))])})),0),t._l(t.rows,(function(e,a){return i("tr",{key:a},t._l(e.cells,(function(e){return i("td",{key:e.text},[t._v(t._s(e.text))])})),0)}))],2)]),t._t("default")],2)},jt=[],Et={name:"TableCard",props:{title:{type:String,default:null},subtitle:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},header:{type:Array,default:null},rows:{type:Array,default:null}}},Pt=Et,Bt=(i("8be8"),Object(g["a"])(Pt,Mt,jt,!1,null,"5e79389a",null)),Lt=Bt.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.url?i("a",{staticClass:"suggestion",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.url}},[t._v(" "+t._s(t.title)+" ")]):i("button",{staticClass:"suggestion"},[t._v(t._s(t.title))])},$t=[],At={name:"Suggestion",props:{url:{type:String,default:null},title:{type:String,default:null}}},Wt=At,Jt=(i("813b"),Object(g["a"])(Wt,Nt,$t,!1,null,"5f12b4ac",null)),Dt=Jt.exports,Ft=i("c437"),Ht=(i("4dba"),i("c293"),{name:"App",components:{Welcome:p,Error:y,TopHead:x,ChatInput:U,Bubble:L,BubbleWrapper:D,Card:K,CardButton:et,Carousel:rt,List:pt,ListItem:yt,Picture:xt,Media:Ut,TableCard:Lt,Suggestion:Dt},data:function(){return{app:null,messages:[],language:"",session:"",muted:this.config.muted,loading:!1,error:null,client:new df.Client(this.config.gateway).connect()}},computed:{suggestions:function(){if(this.messages.length>0){var t=this.messages[this.messages.length-1],e=[];for(var i in t.queryResult.fulfillmentMessages)t.queryResult.fulfillmentMessages[i].suggestions&&(e.text_suggestions=t.queryResult.fulfillmentMessages[i].suggestions.suggestions.map((function(t){return t.title}))),t.queryResult.fulfillmentMessages[i].linkOutSuggestion&&(e.link_suggestion=t.queryResult.fulfillmentMessages[i].linkOutSuggestion),t.queryResult.fulfillmentMessages[i].quickReplies&&(e.text_suggestions=t.queryResult.fulfillmentMessages[i].quickReplies.quickReplies);if(t.queryResult.webhookPayload&&t.queryResult.webhookPayload.google)for(var a in t.queryResult.webhookPayload.google)t.queryResult.webhookPayload.google[a].suggestions&&(e.text_suggestions=t.queryResult.webhookPayload.google[a].suggestions.map((function(t){return t.title}))),t.queryResult.webhookPayload.google[a].linkOutSuggestion&&(e.link_suggestion=t.queryResult.webhookPayload.google[a].linkOutSuggestion);return e}return{text_suggestions:this.config.start_suggestions}}},watch:{messages:function(t){this.history()&&localStorage.setItem("message_history",JSON.stringify(t))},loading:function(){setTimeout((function(){var t=document.querySelector("#app");if(t.querySelector(".message")){var e=t.querySelectorAll(".message")[t.querySelectorAll(".message").length-1].offsetTop-68;window.scrollTo({top:e,behavior:"smooth"})}}),2)}},created:function(){var t=this;this.history()&&null!==localStorage.getItem("message_history")&&(this.messages=JSON.parse(localStorage.getItem("message_history"))),this.history()&&null!==localStorage.getItem("session")?this.session=localStorage.getItem("session"):(this.session=Ft(),this.history()&&localStorage.setItem("session",this.session)),this.history()&&null!==localStorage.getItem("agent")?this.app=JSON.parse(localStorage.getItem("agent")):this.client.get().then((function(e){t.app=e,t.history()&&localStorage.setItem("agent",JSON.stringify(e))})).catch((function(e){t.error=e.message}))},methods:{send:function(t){var e,i=this;t.text?e={session:this.session,queryInput:{text:{text:t.text,languageCode:this.lang()}}}:t.audio&&(e={session:this.session,queryInput:{audioConfig:{audioEncoding:"AUDIO_ENCODING_UNSPECIFIED",languageCode:this.lang()}},inputAudio:t.audio}),this.loading=!0,this.error=null,this.client.send(e).then((function(t){i.messages.push(t),i.handle(t)})).catch((function(t){i.error=t.message})).then((function(){return i.loading=!1}))},handle:function(t){var e=this;if(t.outputAudio){var i=new Audio("data:audio/mp3;base64,".concat(t.outputAudio));i.onended=function(){return e.$refs.input.listen()},this.muted||i.play()}else{var a;for(var n in t.queryResult.fulfillmentMessages)t.queryResult.fulfillmentMessages[n].text&&(a=t.queryResult.fulfillmentMessages[n].text.text[0]),t.queryResult.fulfillmentMessages[n].simpleResponses&&(a=t.queryResult.fulfillmentMessages[n].simpleResponses.simpleResponses[0].textToSpeech);if(t.queryResult.webhookPayload&&t.queryResult.webhookPayload.google)for(var s in t.queryResult.webhookPayload.google)t.queryResult.webhookPayload.google[s].simpleResponse&&(a=t.queryResult.webhookPayload.google[s].simpleResponse.textToSpeech);var l=new SpeechSynthesisUtterance(a);l.voiceURI=this.config.voice,l.lang="".concat(this.lang(),"-").concat(this.lang().toUpperCase()),this.muted||window.speechSynthesis.speak(l)}}}}),Gt=Ht,zt=(i("6933"),i("191d"),Object(g["a"])(Gt,n,s,!1,null,"02e18dff",null)),Vt=zt.exports,Kt={gateway:"https://dialogflow-web-v2.core.ushaflow.com",muted:!1,start_suggestions:[],fallback_lang:"en",voice:"native"},Qt=i("e3e6"),Xt=i("9483"),Yt=function(){Object(Xt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})};Yt(),a["a"].config.productionTip=!1,a["a"].prototype.config=Kt,a["a"].prototype.translations=Qt,a["a"].prototype.history=function(){try{return localStorage.getItem("check"),!0}catch(t){return!1}},a["a"].prototype.lang=function(){return a["a"].prototype.history()&&localStorage.getItem("lang")||Kt.fallback_lang},new a["a"]({render:function(t){return t(Vt)}}).$mount("#app")},"5c82":function(t,e,i){},"5c97":function(t,e,i){"use strict";var a=i("302e"),n=i.n(a);n.a},6933:function(t,e,i){"use strict";var a=i("4a65"),n=i.n(a);n.a},"6b36":function(t,e,i){},"6d80":function(t,e,i){},"7a71":function(t,e,i){"use strict";var a=i("89e5"),n=i.n(a);n.a},"813b":function(t,e,i){"use strict";var a=i("946c"),n=i.n(a);n.a},8399:function(t,e,i){},"896d":function(t,e,i){},"89e5":function(t,e,i){},"8be8":function(t,e,i){"use strict";var a=i("8399"),n=i.n(a);n.a},"946c":function(t,e,i){},acb4:function(t,e,i){},ad80:function(t,e,i){},c293:function(t,e,i){},e3e6:function(t){t.exports=JSON.parse('{"en":{"welcomeTitle":"Welcome to","muteTitle":"Mute","unMuteTitle":"Unmute","inputTitle":"Type your message","sendTitle":"Send","microphoneTitle":"Voice Input","recognitionUnavailable":"Speech recognition is not available"},"ru":{"welcomeTitle":"Добро пожаловать в","muteTitle":"Звук","unMuteTitle":"Без звука","inputTitle":"Введите ваше сообщение","sendTitle":"Отправить","microphoneTitle":"Голосовой ввод"},"de":{"welcomeTitle":"Wilkommen bei","muteTitle":"Stumm","unMuteTitle":"Nicht stumm","inputTitle":"Schreiben Sie ihre Nachricht","sendTitle":"Senden","microphoneTitle":"Spracheingabe"},"fr":{"welcomeTitle":"Bienvenue à","muteTitle":"Son","unMuteTitle":"Silent","inputTitle":"Entrez votre message","sendTitle":"Envoyer","microphoneTitle":"Entrée vocale"}}')},e925:function(t,e,i){"use strict";var a=i("4b64"),n=i.n(a);n.a},ed4f:function(t,e,i){"use strict";var a=i("6d80"),n=i.n(a);n.a},f66b:function(t,e,i){"use strict";var a=i("6b36"),n=i.n(a);n.a},fd24:function(t,e,i){},fecb:function(t,e,i){"use strict";var a=i("acb4"),n=i.n(a);n.a}});