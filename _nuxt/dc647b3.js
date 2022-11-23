(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},384:function(t,e){},385:function(t,e){},389:function(t,e){},390:function(t,e){},395:function(t,e){},397:function(t,e){},398:function(t,e){},399:function(t,e){},402:function(t,e){},404:function(t,e){},409:function(t,e){},410:function(t,e){},411:function(t,e){(function(e){t.exports=e}).call(this,{})},412:function(t,e){},427:function(t,e){},816:function(t,e,n){t.exports=n.p+"img/loading.7dad9fe.svg"},824:function(t,e,n){"use strict";n.r(e);n(85);var o=n(12),r=(n(52),n(86),n(381)),c={data:function(){return{env:"mainnet",loading:!0,effectsdk:null,id:parseInt(this.$route.params.id),tasks:null,submissions:null,timer:null,batch:null,batchIpfs:null,campaign:null,resultModal:!1,dataModal:null,imageModal:"https://effect.network/img/logo/effect-force.png"}},computed:{batchPercentageDone:function(){return this.batch?Math.round(this.batch.tasks_done/(this.batch.num_tasks*this.batch.repetitions)*100):0}},mounted:function(){var t=this;this.effectsdk=new r.EffectClient(this.env),this.getBatch(),this.getResults(),this.timer=setInterval((function(){t.getResults()}),1e4)},beforeDestroy:function(){clearInterval(this.timer)},methods:{getBatch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,console.log("getBatch",t.id),e.next=4,t.effectsdk.force.getBatchById(t.id).catch(console.error);case 4:return t.batch=e.sent,console.log("batch",t.batch),e.next=8,t.effectsdk.force.getIpfsContent(t.batch.content.field_1).catch(console.error);case 8:return t.batchIpfs=e.sent,console.log("batchIpfs",t.batchIpfs),e.next=12,t.effectsdk.force.getCampaign(t.batch.campaign_id).catch(console.error);case 12:t.campaign=e.sent,console.log("campaign",t.campaign),t.loading=!1,console.log("getBatch",t.batch,t.batchIpfs,t.campaign);case 16:case"end":return e.stop()}}),e)})))()},getResults:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Retrieving results."),n=0,t.submissions&&(n=t.submissions.length),e.next=5,t.effectsdk.force.getSubmissionsOfBatch(t.id);case 5:t.submissions=e.sent,console.log("results",t.submissions),t.submissions.length!==n&&(console.log("Retrieving new results."),t.getBatch());case 8:case"end":return e.stop()}}),e)})))()},viewResult:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.resultModal=!0,n=JSON.parse(data),console.log("dataJson",n),e.next=5,t.effectsdk.force.getIpfsContent(null==n?void 0:n.hash);case 5:o=e.sent,console.log("ipfsData",o),t.dataModal=null==o?void 0:o.data,console.log("data-modal",t.dataModal),t.imageModal=null==n?void 0:n.image_url;case 10:case"end":return e.stop()}}),e)})))()}}},l=n(56),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section"},[e("div",{staticClass:"columns pt-6"},[e("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[e("h2",{staticClass:"title"},[t._v("\n        Order\n      ")]),t._v(" "),e("nav",{staticClass:"breadcrumb"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/batch"}},[t._v("Orders")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"is-active",attrs:{to:"#"}},[t._v("ID")])],1)])]),t._v(" "),t.loading?e("div",{staticClass:"loading-text"},[t._v("\n        Loading\n      ")]):e("div",[t.batch&&t.campaign?e("div",[e("div",{staticClass:"box media p-6"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",{staticClass:"subtitle has-text-black"},[e("a",{attrs:{href:"https://app.effect.network/campaigns/".concat(t.batch.campaign_id),target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"icon-text"},[e("span",{staticClass:"is-underlined"},[t._v(t._s(t.campaign.info.title))]),t._v("\n                       \n                      "),e("span",[e("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"subtitle has-text-black"},[t._v("\n                  Details\n                ")]),t._v(" "),e("div",{staticClass:"px-6"},[e("table",{staticClass:"table is-narrow is-centered"},[e("thead"),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("\n                          Order-ID\n                        ")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://app.effect.network/campaigns/".concat(t.batch.campaign_id,"/").concat(t.id),target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"is-underlined"},[t._v(t._s(t.id))]),t._v(" "),e("span",{staticClass:"icon"},[e("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])]),t._v(" "),e("tr",[e("td",[t._v("\n                          Status\n                        ")]),t._v(" "),e("td",[t._v("\n                          "+t._s(t.batchPercentageDone)+"% (complete)\n                        ")])]),t._v(" "),e("tr",[e("td",[t._v("Tasks")]),t._v(" "),e("td",[t._v(t._s(t.batch.num_tasks)+" ×")])]),t._v(" "),e("tr",[e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v(t._s(t.batch.repetitions)+" ×")])]),t._v(" "),e("tr",[e("td",[t._v("Cost per Task")]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.campaign.info.reward)+" EFX")])])])]),t._v(" "),e("tfoot",[e("tr",[e("td",[t._v("Total Cost")]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.batch.balance.quantity))])])])])])]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"subtitle has-text-black"},[t._v("\n                  Results ("+t._s(t.batch.tasks_done)+"/"+t._s(t.batch.num_tasks*t.batch.repetitions)+")\n                ")]),t._v(" "),e("progress",{directives:[{name:"show",rawName:"v-show",value:t.submissions&&t.submissions.length>0,expression:"submissions && submissions.length > 0"}],staticClass:"progress is-medium is-info",attrs:{max:"100"},domProps:{value:t.batchPercentageDone}},[t._v("\n                  "+t._s(t.batchPercentageDone)+"%\n                ")]),t._v(" "),t.submissions&&t.submissions.length>0?e("div",{staticClass:"table-container px-6"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.submissions,(function(n){return e("tr",{key:n.id},[e("td",[e("a",{attrs:{href:"https://app.effect.network/campaigns/".concat(t.batch.campaign_id,"/").concat(n.batch_id),target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            "+t._s(n.id)+"\n                          ")])]),t._v(" "),e("td",[t._v(t._s(n.submitted_on))]),t._v(" "),e("td",[e("img",{staticStyle:{"max-width":"512px"},attrs:{src:JSON.parse(n.data).image_url}})]),t._v(" "),e("td",[e("a",{attrs:{href:JSON.parse(n.data).aqualxx_link,target:"_blank",rel:"noopener noreferrer"}},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{staticClass:"icon is-small",attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])])])})),0)])]):e("div",{staticClass:"has-text-centered"},[t._v("\n                  No results yet, please wait while someone starts working on your order.\n                ")])])])])]):e("div",[e("p",[t._v("No batch found")])])])]),t._v(" "),e("div",{staticClass:"modal",class:{"is-active":t.resultModal}},[e("div",{staticClass:"modal-background",on:{click:function(e){e.preventDefault(),t.resultModal=!1}}},[e("div",{staticClass:"modal-card p-6"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n              Stable Diffusion Results\n            ")]),t._v(" "),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){e.preventDefault(),t.resultModal=!1}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"modal-content mx-auto has-text-centered",staticStyle:{"max-width":"80%"}},[null===t.imageModal||void 0===t.imageModal?e("img",{staticClass:"mx-auto",attrs:{src:n(816)}}):e("img",{staticClass:"mx-auto",attrs:{src:t.imageModal,alt:"",srcset:""}})]),t._v(" "),e("hr"),t._v(" "),null===t.dataModal||void 0===t.dataModal?e("div",[t._v("\n              Loading...\n            ")]):e("div",[e("div",{staticClass:"table-container"},[e("table",{staticClass:"table mx-auto"},[t._m(1),t._v(" "),e("tbody",t._l(t.dataModal,(function(n){return e("tr",{key:n.id},[e("td",[e("img",{staticStyle:{width:"100px"},attrs:{src:n.image_url}})]),t._v(" "),e("td",[t._v(t._s(n.pos_prompts))])])})),0)])])])]),t._v(" "),e("footer",{staticClass:"modal-card-foot"})])])])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Submitted on")]),t._v(" "),e("th",[t._v("Result")]),t._v(" "),e("th",[t._v("Parameters Aqualxx")])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Image")]),t._v(" "),e("th",[t._v("Label")])])])}],!1,null,null,null);e.default=component.exports}}]);