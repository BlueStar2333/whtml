(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48175423"],{"0d96":function(t,e,a){t.exports=a.p+"static/img/multiline-text.74be3455.svg"},"181d":function(t,e,a){},"21e3":function(t,e,a){},"23b5":function(t,e,a){},"28ba":function(t,e,a){t.exports=a.p+"static/img/select-number.b5493c7b.svg"},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({staticClass:"pagination-container-main",attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=r(),i=t-n,l=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=l;var r=Math.easeInOutQuad(c,n,i,e);o(r),c<e?s(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(a("5559"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"429e01bc",null);e["a"]=p.exports},"3ac1":function(t,e,a){},"47fb":function(t,e,a){},5559:function(t,e,a){"use strict";a("3ac1")},5566:function(t,e,a){t.exports=a.p+"static/img/single-option.4c8ac7a2.svg"},"6cbe":function(t,e,a){t.exports=a.p+"static/img/single-line-text.56f0d34c.svg"},"73ad":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("transition",{attrs:{name:"popup-show"}},[t.popupShow?a("Popup",{attrs:{"edit-form":t.editForm},on:{onClose:t.onClose,getData:t.getData}}):t._e()],1),a("div",{staticClass:"head"},[a("div",[a("el-input",{staticStyle:{width:"200px","margin-right":"14px"},attrs:{size:"small",placeholder:"按表名搜索"},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}}),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.getData(t.searchName)}}},[t._v("查询")])],1),2==this.$store.state.user.userInfo.Power||3==this.$store.state.user.userInfo.Power?a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus",plain:""},on:{click:t.addDiyTable}},[t._v("添加")]):t._e()],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",attrs:{"header-cell-style":{"background-color":"#f8f8f8",color:"#666","text-align":"center"},data:t.tableData.slice((t.listQuery.page-1)*t.listQuery.limit,t.listQuery.page*t.listQuery.limit),fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{prop:"diyName",fiexd:"",label:"表名",width:"200"}}),a("el-table-column",{attrs:{fiexd:"",label:"起始日期",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.diyStartDate.split("T")[0])+" ")]}}])}),a("el-table-column",{attrs:{fiexd:"",label:"截止日期",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.diyEndDate.split("T")[0])+" ")]}}])}),a("el-table-column",{attrs:{prop:"diyDescription",fiexd:"",label:"描述",width:"390",align:"center"}}),a("el-table-column",{attrs:{fiexd:"",label:"填报人数",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.COUNTID||"0")+" ")]}}])}),a("el-table-column",{attrs:{fiexd:"",label:"表单内容",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-document form-icon",on:{click:function(a){return t.lookForm(e.row)}}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"operation"},[3==t.$store.state.user.userInfo.Power?a("el-link",{attrs:{type:"primary"},on:{click:function(a){return t.editDiyTable(e.row)}}},[t._v("编辑")]):t._e(),3==t.$store.state.user.userInfo.Power?a("el-link",{attrs:{type:"danger"},on:{click:function(a){return t.deleteDiyTable(e.row.ID)}}},[t._v("删除")]):t._e(),3==t.$store.state.user.userInfo.Power?a("el-link",{attrs:{type:"success"},on:{click:function(a){return t.closeDiyTable(e.row.ID)}}},[t._v("关闭")]):t._e(),1==t.$store.state.user.userInfo.Power?a("el-link",{attrs:{type:"primary"},on:{click:function(a){return t.toFillOut(e.row.diyName)}}},[t._v("去填写此表")]):t._e()],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-size":t.listQuery.limit,layout:"prev, pager, next, jumper",total:t.tableData.length},on:{"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{"modal-append-to-body":!1,title:"表单内容",visible:t.previewShow,width:"32%",center:""},on:{"update:visible":function(e){t.previewShow=e}}},[t.previewShow?a("Preview",{attrs:{"preview-data":t.diyForm}}):t._e()],1)],1)},i=[],s=a("b85c"),o=(a("4e82"),a("333d")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup"},[a("div",{staticClass:"popup-head"},[a("h4",{staticClass:"popup-head-title"},[t._v("普通表单设计")]),a("i",{staticClass:"el-icon-close popup-head-close",on:{click:t.onClose}})]),a("div",{staticClass:"popup-body"},[a("PopupLeft"),a("PopupMiddle",t._g(t._b({on:{onClose:t.onClose,getData:t.getData}},"PopupMiddle",t.$attrs,!1),t.$listeners)),a("PopupRight",t._g(t._b({},"PopupRight",t.$attrs,!1),t.$listeners))],1)])},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("el-tabs",[a("el-tab-pane",[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-coin"}),t._v(" 组件库")]),a("el-collapse",[a("el-collapse-item",{attrs:{title:"基础组件",name:"1"}},[a("ul",{staticClass:"base"},t._l(t.baseComponents,(function(e,n){return a("li",{key:n,staticClass:"base-component",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragStart(e,n)}}},[a("img",{staticStyle:{margin:"0 4px",position:"relative",top:"2px"},attrs:{src:e.icon,width:14,height:"14",alt:"基础组件"}}),t._v(t._s(e.name)+" ")])})),0)]),a("el-collapse-item",{attrs:{title:"特殊组件",name:"2"}},[a("ul",{staticClass:"base"},t._l(t.specialInputData,(function(e,n){return a("li",{key:n,staticClass:"base-component",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragStart(e,t.baseComponents.length+n)}}},[a("img",{staticStyle:{margin:"0 4px",position:"relative",top:"2px"},attrs:{src:e.icon,width:14,height:"14",alt:"特殊组件"}}),t._v(t._s(e.name)+" ")])})),0)])],1)],1)],1)],1)},u=[],d={name:"PopupLeft",data:function(){return{baseComponents:[{icon:a("6cbe"),name:"单行文本"},{icon:a("0d96"),name:"多行文本"},{icon:a("5566"),name:"单选框"},{icon:a("e34b"),name:"多选框"},{icon:a("926e"),name:"日期选择"},{icon:a("28ba"),name:"数量选择"}],specialInputData:[{icon:a("d95e"),name:"科室选择"}]}},methods:{dragStart:function(t,e){t.dataTransfer.setData("type",e)}}},p=d,m=(a("9690"),a("2877")),f=Object(m["a"])(p,c,u,!1,null,"0354a8c1",null),h=f.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"middle"},[a("div",{staticClass:"head"},[a("el-link",{staticClass:"head-link",attrs:{underline:!1,type:"primary",icon:"el-icon-delete"},on:{click:function(e){return t.deleteInput(0,t.formData.length)}}},[t._v("清空")]),a("el-link",{staticClass:"head-link",attrs:{underline:!1,type:"primary",icon:"el-icon-view"},on:{click:t.previewTable}},[t._v("预览")]),t.editForm?a("el-link",{staticClass:"head-link",attrs:{underline:!1,type:"primary",icon:"el-icon-document-checked"},on:{click:t.edit}},[t._v("确认修改")]):a("el-link",{staticClass:"head-link",attrs:{underline:!1,type:"primary",icon:"el-icon-document-add"},on:{click:t.save}},[t._v("保存上传")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.formData.length,expression:"formData.length === 0"}],staticClass:"description"},[a("p",[t._v("请从左侧列表中选择一个组件,")]),a("p",[t._v("然后用鼠标拖动组件放置于此处.")])]),a("div",{staticClass:"body",on:{drop:function(e){return t.drop(e)},dragover:function(e){return t.allowDrop(e)}}},[t._l(t.formData,(function(e,n){return a("div",{key:n,staticClass:"body-input",on:{click:function(e){return t.selectInput(n,t.formData[n])}}},[a("h5",{class:{"body-input-label":!0,required:e.isNecessary}},[t._v(t._s(n+1+"."+e.label)+" "+t._s(e.isNecessary?"（校验值）":""))]),0===e.type?a("el-input",{staticClass:"body-input-content",attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.formData[n].content,callback:function(e){t.$set(t.formData[n],"content",e)},expression:"formData[index].content"}}):t._e(),1===e.type?a("el-input",{staticClass:"body-input-content",attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.formData[n].content,callback:function(e){t.$set(t.formData[n],"content",e)},expression:"formData[index].content"}}):t._e(),2===e.type?a("div",{staticClass:"body-input-select"},t._l(e.content,(function(n,i){return a("el-radio",{key:i,attrs:{label:n},model:{value:e.select,callback:function(a){t.$set(e,"select",a)},expression:"itemA.select"}},[t._v(t._s(n))])})),1):t._e(),3===e.type?a("el-checkbox-group",{staticClass:"body-input-select",model:{value:e.select,callback:function(a){t.$set(e,"select",a)},expression:"itemA.select"}},t._l(e.content,(function(e,n){return a("el-checkbox",{key:n,attrs:{label:e}},[t._v(t._s(e))])})),1):t._e(),4===e.type?a("el-date-picker",{staticClass:"body-input-content",attrs:{type:"date",size:"small",placeholder:"选择日期"},model:{value:t.formData[n].content,callback:function(e){t.$set(t.formData[n],"content",e)},expression:"formData[index].content"}}):t._e(),5===e.type?a("el-input-number",{attrs:{min:1,max:1e4,label:"数"},model:{value:t.formData[n].content,callback:function(e){t.$set(t.formData[n],"content",e)},expression:"formData[index].content"}}):t._e(),20===e.type?a("div",{staticClass:"body-input-content select-department"},[t._v("请选择")]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectIndex===n,expression:"selectIndex === index"}],staticClass:"body-input-nav"},[a("span",{staticClass:"nav-name"},[a("i",{staticClass:"el-icon-rank"}),t._v(" "+t._s(t.typeMap[e.type]))]),a("div",{staticClass:"nav-menu"},[a("a",[a("i",{staticClass:"el-icon-back nav-menu-back",on:{click:function(e){e.stopPropagation(),t.selectIndex=-1}}})]),a("a",[a("i",{staticClass:"el-icon-bottom nav-menu-bottom",on:{click:function(e){return e.stopPropagation(),t.switchPlaces(n,n+1)}}})]),a("a",[a("i",{staticClass:"el-icon-top nav-menu-top",on:{click:function(e){return e.stopPropagation(),t.switchPlaces(n,n-1)}}})]),a("a",[a("i",{staticClass:"el-icon-delete",on:{click:function(e){return t.deleteInput(n,1)}}})])])])],1)})),a("span",{staticClass:"body-vertical"}),a("span",{staticClass:"body-cross"})],2),a("el-dialog",{attrs:{"modal-append-to-body":!1,title:"预览",visible:t.previewShow,width:"32%",center:""},on:{"update:visible":function(e){t.previewShow=e}}},[t.previewShow?a("Preview",{attrs:{"preview-data":t.diyForm}}):t._e()],1)],1)},v=[],b=(a("a434"),a("e9c4"),[{type:0,uniqueName:"",label:"单行输入框",content:"",isNecessary:!1},{type:1,uniqueName:"",label:"多行输入框",content:"",isNecessary:!1},{type:2,uniqueName:"",label:"单选框",select:"",content:["选项1","选项2"],isNecessary:!1},{type:3,uniqueName:"",label:"多选框",select:[],content:["选项1","选项12","选项3"],isNecessary:!1},{type:4,uniqueName:"",label:"日期选择",content:"",isNecessary:!1},{type:5,uniqueName:"",label:"数量选择",content:"",isNecessary:!1},{type:20,uniqueName:"",label:"科室选择",content:"",isNecessary:!1}]),g=b,D=a("ed08"),w=a("b775");function _(t){return Object(w["a"])({url:"AddCustomTable",method:"post",data:t})}function k(t){return Object(w["a"])({url:"EditCustomTable",method:"post",data:t})}function x(t){return Object(w["a"])({url:"GetCustomTablebydiyName",method:"post",data:t})}var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preview"},[a("h4",{staticClass:"preview-title"},[t._v(t._s(t.previewData.diyName))]),a("p",{staticClass:"preview-description"},[t._v(t._s(t.previewData.diyDescription))]),t._l(t.previewData.diyContent,(function(e,n){return a("div",{key:n,staticClass:"preview-form"},[a("h5",{staticClass:"preview-form-title",class:{required:e.isNecessary}},[t._v(t._s(n+1)+". "+t._s(e.label))]),0===e.type?a("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"item.content"}}):t._e(),1===e.type?a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"item.content"}}):t._e(),2===e.type?a("div",t._l(e.content,(function(n,i){return a("el-radio",{key:i,attrs:{label:n},model:{value:e.select,callback:function(a){t.$set(e,"select",a)},expression:"item.select"}},[t._v(t._s(n))])})),1):t._e(),3===e.type?a("el-checkbox-group",{model:{value:e.select,callback:function(a){t.$set(e,"select",a)},expression:"item.select"}},t._l(e.content,(function(e,n){return a("el-checkbox",{key:n,attrs:{label:e}},[t._v(t._s(e))])})),1):t._e(),4===e.type?a("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"选择日期"}}):t._e(),5===e.type?a("el-input-number",{attrs:{min:1,max:1e4,label:"数"},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"item.content"}}):t._e(),20===e.type?a("div",{staticClass:"body-input-content select-department"},[t._v("请选择")]):t._e()],1)}))],2)},$=[],F={name:"Preview",props:{previewData:{type:Object,default:null}},data:function(){return{}},mounted:function(){}},N=F,S=(a("7a2f"),Object(m["a"])(N,C,$,!1,null,"d934a704",null)),I=S.exports,P={diyName:"请填写表名",diyDescription:"请填写表说明",diyStartDate:"请选择起始时间",diyEndDate:"请选择截止时间"},T={name:"PopupMiddle",components:{Preview:I},inheritAttrs:!1,props:{editForm:{type:Object,default:null}},data:function(){return{previewShow:!1,selectIndex:-1,formData:[],typeMap:["单行文本","多行文本","单选框","多选框","日期选择"],diyForm:null}},mounted:function(){this.editForm&&(this.formData=this.editForm.diyContent)},methods:{drop:function(t){var e=t.dataTransfer.getData("type"),a=Object(D["a"])(g[e]);this.formData.push(a)},allowDrop:function(t){t.preventDefault()},selectInput:function(t,e){this.selectIndex=t,this.$eventBus.$emit("selectInput",e)},switchPlaces:function(t,e){if(-1!==e)if(e!==this.formData.length){var a=this.formData[t],n=this.formData[e];this.formData.splice(t,1,n),this.formData.splice(e,1,a),this.selectIndex=e}else this.$message("已经移动到最下面");else this.$message("已经移动到最上面")},deleteInput:function(t,e){this.$eventBus.$emit("selectInput",null),this.formData.splice(t,e)},previewTable:function(){var t=this;this.$eventBus.$emit("getDiyData",(function(e){t.diyForm=e})),this.diyForm.diyContent=this.formData,this.previewShow=!0},checkForm:function(){var t=!1;for(var e in P){if(""===this.diyForm[e]){this.$eventBus.$emit("changeTab","second"),this.$message({message:P[e],type:"warning"}),t=!0;break}t=!1}return t},save:function(){var t=this,e=this;this.$eventBus.$emit("getDiyData",(function(t){e.diyForm=t})),this.checkForm()||(this.diyForm.diyContent=JSON.stringify(this.formData),this.diyForm.diyUser=this.$store.state.user.userInfo.Name,this.diyForm.hospitalcode=this.$store.state.user.userInfo.HospitalName,_(this.diyForm).then((function(e){"Success"===e.d&&(t.$message({message:"添加成功",type:"success"}),t.$emit("getData",""),t.$emit("onClose"),t.$eventBus.$emit("refresh"))})))},edit:function(){var t=this,e=this;this.$eventBus.$emit("getDiyData",(function(t){e.diyForm=t})),this.checkForm()||(this.diyForm.diyContent=JSON.stringify(this.formData),this.diyForm.diyUser=this.$store.state.user.userInfo.Name,this.diyForm.hospitalcode=this.$store.state.user.userInfo.HospitalName,this.diyForm.createtime=this.editForm.createtime,this.diyForm.ID=this.editForm.ID,k(this.diyForm).then((function(e){"Success"===e.d&&(t.$message({message:"修改成功",type:"success"}),t.$emit("onClose"),t.$eventBus.$emit("refresh"))})))}}},z=T,O=(a("dbbe"),Object(m["a"])(z,y,v,!1,null,"69816007",null)),B=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"组件设置",name:"first"}},[t.componentData?a("el-form",{ref:"form",attrs:{"label-width":"80px",size:"mini","label-position":"left"}},[a("el-form-item",{attrs:{label:"唯一名称"}},[a("el-input",{model:{value:t.componentData.uniqueName,callback:function(e){t.$set(t.componentData,"uniqueName",e)},expression:"componentData.uniqueName"}})],1),a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{model:{value:t.componentData.label,callback:function(e){t.$set(t.componentData,"label",e)},expression:"componentData.label"}})],1),t.radioShow||t.dateShow?t._e():a("el-form-item",{attrs:{label:"预置内容"}},[a("el-input",{model:{value:t.componentData.content,callback:function(e){t.$set(t.componentData,"content",e)},expression:"componentData.content"}})],1),t.dateShow?a("el-form-item",{attrs:{label:"时间选择"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.componentData.content,callback:function(e){t.$set(t.componentData,"content",e)},expression:"componentData.content"}})],1):t._e(),a("el-form-item",{attrs:{label:"校验表单"}},[a("el-switch",{model:{value:t.componentData.isNecessary,callback:function(e){t.$set(t.componentData,"isNecessary",e)},expression:"componentData.isNecessary"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.radioShow,expression:"radioShow"}],staticClass:"setting"},[a("el-divider",[t._v("选项设置")]),t._l(t.componentData.content,(function(e,n){return a("div",{key:n,staticClass:"setting-main"},[a("el-radio",{directives:[{name:"show",rawName:"v-show",value:2===t.componentData.type,expression:"componentData.type === 2"}],attrs:{label:e},model:{value:t.componentData.select,callback:function(e){t.$set(t.componentData,"select",e)},expression:"componentData.select"}}),a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:3===t.componentData.type,expression:"componentData.type === 3"}],attrs:{label:e},model:{value:t.componentData.select,callback:function(e){t.$set(t.componentData,"select",e)},expression:"componentData.select"}}),a("el-input",{staticStyle:{width:"140px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.componentData.content[n],callback:function(e){t.$set(t.componentData.content,n,e)},expression:"componentData.content[index]"}}),a("img",{attrs:{src:t.dragIcon,width:"22",height:"22",alt:"拖拽"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{src:t.dragBlueIcon,width:"22",height:"22",alt:"拖拽"}}),a("a",{staticClass:"setting-delete-btn",on:{click:function(e){return t.deleteRadio(n)}}},[t._v("-")])],1)})),a("div",{staticClass:"setting-link"},[a("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(e){return t.componentData.content.push("选项"+(t.componentData.content.length+1))}}},[t._v("增加选项")]),a("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(e){t.componentData.select=[]}}},[t._v("重设选中项")])],1)],2)],1):a("p",{staticClass:"prompt-text"},[t._v("请选择")])],1),a("el-tab-pane",{attrs:{label:"表单设置",name:"second"}},[a("el-form",{ref:"form",staticClass:"form-setting",attrs:{"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"表名"}},[a("el-input",{attrs:{placeholder:"请输入表名"},model:{value:t.diyForm.diyName,callback:function(e){t.$set(t.diyForm,"diyName",e)},expression:"diyForm.diyName"}})],1),a("el-form-item",{attrs:{label:"表说明"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入此表的描述,目的等"},model:{value:t.diyForm.diyDescription,callback:function(e){t.$set(t.diyForm,"diyDescription",e)},expression:"diyForm.diyDescription"}})],1),a("el-form-item",{attrs:{label:"起始日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.diyForm.diyStartDate,callback:function(e){t.$set(t.diyForm,"diyStartDate",e)},expression:"diyForm.diyStartDate"}})],1),a("el-form-item",{attrs:{label:"截止日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.diyForm.diyEndDate,callback:function(e){t.$set(t.diyForm,"diyEndDate",e)},expression:"diyForm.diyEndDate"}})],1)],1)],1)],1)],1)},E=[],M={name:"PopupRight",props:{editForm:{type:Object,default:null}},data:function(){return{activeName:"first",dragIcon:a("88c6"),dragBlueIcon:a("e43d"),diyForm:{diyName:"",diyDescription:"",diyStartDate:"",diyEndDate:""},componentData:null}},computed:{radioShow:function(){return 2===this.componentData.type||3===this.componentData.type},dateShow:function(){return 4===this.componentData.type}},mounted:function(){this.$eventBus.$on("selectInput",this.selectInput),this.$eventBus.$on("getDiyData",this.getDiyData),this.$eventBus.$on("changeTab",this.changeTab),this.editForm&&(this.diyForm={diyName:this.editForm.diyName,diyDescription:this.editForm.diyDescription,diyStartDate:this.editForm.diyStartDate,diyEndDate:this.editForm.diyEndDate})},methods:{init:function(t){},changeTab:function(t){this.activeName=t},selectInput:function(t){this.changeTab("first"),this.componentData=t},getDiyData:function(t){t(this.diyForm)},deleteRadio:function(t){1!==this.componentData.content.length?this.componentData.content.splice(t,1):this.$message({message:"至少保留一个选项",type:"warning"})}}},q=M,Q=(a("fe36"),Object(m["a"])(q,j,E,!1,null,"78460c67",null)),A=Q.exports,R={name:"Popup",components:{PopupLeft:h,PopupMiddle:B,PopupRight:A},methods:{onClose:function(){this.$emit("onClose")},getData:function(t){this.$emit("getData",t)}}},L=R,J=(a("d160"),Object(m["a"])(L,r,l,!1,null,"bfaa8998",null)),H=J.exports,U={name:"Index",components:{Pagination:o["a"],Popup:H,Preview:I},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{searchName:"",previewShow:!1,editForm:null,diyForm:[],popupShow:!1,searchModel:{startTime:"",endTime:""},listLoading:!0,total:60,listQuery:{page:1,limit:10,sort:"+id"},tableData:[]}},created:function(){this.getData(),this.$eventBus.$on("refresh",this.getData)},methods:{handleCurrentChange:function(t){this.listQuery.page=t},getData:function(t){var e=this;this.listLoading=!0;var a={diyName:t||"",hospitalcode:this.$store.state.user.userInfo.HospitalName};x(a).then((function(t){e.tableData=JSON.parse(t.d);var a,n=Object(s["a"])(e.tableData);try{for(n.s();!(a=n.n()).done;){var i=a.value;i.diyContent=JSON.parse(i.diyContent)}}catch(o){n.e(o)}finally{n.f()}e.listLoading=!1}))},lookForm:function(t){this.diyForm=Object(D["b"])(t),this.previewShow=!0},addDiyTable:function(){this.editForm=null,this.popupShow=!0},editDiyTable:function(t){this.editForm=Object(D["b"])(t),this.popupShow=!0},deleteDiyTable:function(t){var e=this;this.$confirm("此操作将永久删除该表, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},closeDiyTable:function(t){var e=this;this.$confirm("关闭之后结束填写, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"已关闭"})})).catch((function(){e.$message({type:"info",message:"已取消"})}))},toFillOut:function(t){this.$router.push({path:"/formList/fill-out?name="+t})},onClose:function(){this.popupShow=!1},sortChange:function(t){var e=t.prop,a=t.order;this.tableData.reverse(),"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleFilter:function(){this.listQuery.page=1,this.getData()},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},G=U,K=(a("f9e8"),Object(m["a"])(G,n,i,!1,null,"3743e1d2",null));e["default"]=K.exports},"7a2f":function(t,e,a){"use strict";a("af60")},"88c6":function(t,e,a){t.exports=a.p+"static/img/drag.db321efc.svg"},"926e":function(t,e,a){t.exports=a.p+"static/img/date-selection.b66eafb2.svg"},9690:function(t,e,a){"use strict";a("181d")},af60:function(t,e,a){},d160:function(t,e,a){"use strict";a("23b5")},d95e:function(t,e,a){t.exports=a.p+"static/img/department.466d6014.svg"},dbbe:function(t,e,a){"use strict";a("21e3")},e34b:function(t,e,a){t.exports=a.p+"static/img/multiple-selection.04749fc2.svg"},e43d:function(t,e,a){t.exports=a.p+"static/img/drag-blue.3097dae0.svg"},e9c4:function(t,e,a){var n=a("23e7"),i=a("d066"),s=a("d039"),o=i("JSON","stringify"),r=/[\uD800-\uDFFF]/g,l=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,u=function(t,e,a){var n=a.charAt(e-1),i=a.charAt(e+1);return l.test(t)&&!c.test(i)||c.test(t)&&!l.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},d=s((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&n({target:"JSON",stat:!0,forced:d},{stringify:function(t,e,a){var n=o.apply(null,arguments);return"string"==typeof n?n.replace(r,u):n}})},ef13:function(t,e,a){},f9e8:function(t,e,a){"use strict";a("47fb")},fe36:function(t,e,a){"use strict";a("ef13")}}]);