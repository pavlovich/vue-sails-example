webpackJsonp([16],{125:function(e,t,s){"use strict";var n={i18n:{messages:{en:{"description.first":"Enter a name","label.first":"Name *","description.second":"Enter a password","label.second":"Password *","button.first":"Create"},de:{"description.first":"Gebe einen Namen ein","label.first":"Name *","description.second":"Gebe ein Passwort ein","label.second":"Passwort *","figcaption.first":"Du kannst einen dieser Nutzer wählen, um dich einzuloggen.","button.first":"Erstellen"}}},computed:{user:{get:function(){return this.$store.state.User.user}},name:{get:function(){return this.$store.state.User.user.name},set:function(e){this.$store.commit("SET_USER_NAME",e)}},password:{get:function(){return this.$store.state.User.user.password},set:function(e){this.$store.commit("SET_USER_PASSWORD",e)}}},methods:{create:function(){this.$store.dispatch("postUser",this.user)}}};t.a=n},227:function(e,t,s){var n=s(5)(s(228),s(229),null,null);e.exports=n.exports},228:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(125);t.default={mixins:[n.a]}},229:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("mt-field",{attrs:{label:e.$t("label.first")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),s("mt-field",{attrs:{label:e.$t("label.second")},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("mt-cell",{attrs:{title:""}},[s("mt-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:e.create}},[e._v(e._s(e.$t("button.first")))])],1)],1)},staticRenderFns:[]}}});