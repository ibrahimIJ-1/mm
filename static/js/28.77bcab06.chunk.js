(this["webpackJsonpdr-online-dr-portal"]=this["webpackJsonpdr-online-dr-portal"]||[]).push([[28],{441:function(e,t,a){"use strict";a(222);var n=a(172),r=(a(223),a(88)),i=(a(221),a(173)),o=a(58),l=a(59),c=a(74),s=a(73),u=a(0),d=a.n(u),p=a(174),m=a.n(p),f=a(75),h=Object(f.a)(),v=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).initialState=function(){return{data:[],value:void 0,initialValue:e.defaultValue||void 0,fetching:!1,all:!!e.all&&e.all}},n.state=n.initialState(),n.onChange=function(e){n.setState({value:e});try{var t=e?e.key:void 0;(0,n.props.onChange)(e,t),e||n.loadData("")}catch(a){}},n.resetValue=function(){n.setState({value:void 0})},n.onSearch=function(e){n.loadData(e)},n.loadData=m()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;n.setState({fetching:!0});var a={limit:100,offset:0};e&&""!==e&&(a.q=e),h.get("".concat("http://localhost:3010/").concat(t||n.props.endpoint)).query(a).end((function(e,t){if(e)n.setState({data:[],fetching:!1});else{var a=t.body,r=n.props.exclude,i=[];if(r)i=a.filter((function(e){return e.id!==r}));else i=a;var o=[];i.data.map((function(e){return o.push({text:"function"===typeof n.props.optiontext?n.props.optiontext(e):e.name,value:"function"===typeof n.props.optionvalue?n.props.optionvalue(e):e.id}),null})),n.setState({data:o,fetching:!1})}}))}),800),n.ref=e.ref,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.endpoint&&this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.fetching,a=e.data,o=e.value,l=e.initialValue,c=e.all,s=this.props,u=s.placeholder,p=s.disabled,m=s.className,f=s.rtl,h=u||"";return d.a.createElement(n.a,{allowClear:void 0===this.props.allowClear||this.props.allowClear,mode:this.props.mode||null,showSearch:!0,disabled:p,labelInValue:!0,value:o,defaultValue:l,notFoundContent:t?d.a.createElement(i.a,{size:"small"}):d.a.createElement(r.a,{image:r.a.PRESENTED_IMAGE_SIMPLE}),filterOption:!1,onSearch:this.onSearch,onChange:this.onChange,style:{width:"100%"},placeholder:h,className:m||void 0},c&&d.a.createElement(n.a.Option,{key:-9,style:{fontFamily:f?"Cuprumsemi":void 0}},"All"),a.map((function(e){return d.a.createElement(n.a.Option,{key:e.value,style:{fontFamily:f?"Cuprumsemi":void 0}},e.text)})))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),a}(d.a.Component);t.a=v},443:function(e,t,a){"use strict";function n(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}a.d(t,"a",(function(){return n}))},614:function(e,t,a){},640:function(e,t,a){"use strict";a.r(t);a(453);var n,r=a(452),i=(a(444),a(445)),o=(a(116),a(45)),l=(a(448),a(451)),c=(a(99),a(40)),s=(a(117),a(30)),u=a(43),d=a.n(u),p=a(447),m=a(64),f=a(58),h=a(59),v=a(74),g=a(73),b=a(0),y=a.n(b),E=a(418),S=a(654),w=a(655),k=a(60),O=a(415),j=a(449),I=a.n(j),x=(a(450),a(225)),C=a.n(x),F=a(9),N=(a(614),a(171),a(119)),D=(a(224),a(120)),M=(a(226),a(153)),R=a(118),A=(a(443),a(441)),B=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).initialState=function(){return{id:e.id,modelName:e.modelName,modelTitle:e.title,reloadGrid:e.reloadGrid,buttonIcon:e.buttonIcon,model:null,isModalVisible:!1}},n.state=n.initialState(),n.loadModel=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.id){e.next=5;break}return e.next=3,Object(R.b)("".concat(n.state.modelName,"/").concat(n.state.id));case 3:t=e.sent,n.setState({model:t},(function(){n.modelFormRef.current&&n.modelFormRef.current.setFieldsValue(Object(p.a)(Object(p.a)({},t),{},{serviceId:{id:t.serviceId,key:t.serviceId,label:t.service.nameEn}}))}));case 5:case"end":return e.stop()}}),e)}))),n.onFormFinished=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,r,i,o,l,c,s,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state,r=a.id,i=a.modelName,o=a.reloadGrid,l=t.descriptionEn,c=t.descriptionAr,s=t.serviceId,u={descriptionEn:l,descriptionAr:c,serviceId:s.key,id:r||void 0},e.next=5,Object(R.c)(i,u);case 5:o&&o(),n.closeModal();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showModal=function(){n.setState({isModalVisible:!0},Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.id){e.next=3;break}return e.next=3,n.loadModel();case 3:case"end":return e.stop()}}),e)}))))},n.closeModal=function(){n.setState({isModalVisible:!1})},n.modelFormRef=Object(b.createRef)(),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.modelTitle,a=e.buttonIcon;e.id;return y.a.createElement("div",{style:{width:"100%"}},y.a.createElement(c.a,{type:"primary",onClick:this.showModal,icon:a,shape:"round",className:"btn_hover darkBlueBg",style:{width:"100%"}}),this.state.isModalVisible&&y.a.createElement(N.a,{title:t,visible:this.state.isModalVisible,onCancel:this.closeModal,width:"85%",okButtonProps:{form:"modelForm",htmlType:"submit",className:"darkBlueBg"},cancelButtonProps:{style:{display:"none"}}},y.a.createElement(D.a,{id:"modelForm",ref:this.modelFormRef,onFinish:this.onFormFinished,style:{marginTop:"5%"}},y.a.createElement(o.a,{gutter:10},y.a.createElement(s.a,{span:24},y.a.createElement(D.a.Item,{name:"descriptionEn",label:F.a.t("Description English"),rules:[{required:!0,message:F.a.t("Input is required")}]},y.a.createElement(M.a,null))),y.a.createElement(s.a,{span:24},y.a.createElement(D.a.Item,{name:"descriptionAr",label:F.a.t("Description Arabic"),rules:[{required:!0,message:F.a.t("Input is required")}]},y.a.createElement(M.a.TextArea,null))),y.a.createElement(s.a,{span:24},y.a.createElement(D.a.Item,{name:"serviceId",label:F.a.t("Select Service"),rules:[{required:!0,message:F.a.t("Input is required")}]},y.a.createElement(A.a,{endpoint:"Services?page=0&pageSize=1000",placeholder:F.a.t("Service"),allowClear:!1,optiontext:function(e){return e.nameEn}})))))))}}]),a}(y.a.Component),T=a(75),V=(Object(T.a)(),["8","15","20","30","40"]),z=Object(k.b)("userStore")(n=Object(k.c)(n=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).initialState=function(){return{modelName:"ServiceAchivments",createTitle:F.a.t("New Record"),editTitle:F.a.t("Edit Record"),data:[],loading:!1,type_name:void 0,selectedPackageId:-1,selectedUserId:-1,pagination:{pageSize:parseInt(V[0],10),pageSizeOptions:V,current:1,total:0,showSizeChanger:!0,hideOnSinglePage:!1,showQuickJumper:!0},sortedInfo:null,editResourceId:void 0,activityForDetails:null,access:[]}},n.state=n.initialState(),n.fetch=Object(m.a)(d.a.mark((function e(){var t,a,r,i,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),t=n.state,a=t.pagination,r=t.modelName,i={pageSize:a.pageSize,page:a.current-1},e.prev=3,n.setState({loading:!0}),e.next=7,Object(R.b)("".concat(r,"?").concat(C.a.stringify(i)));case 7:o=e.sent,(l=Object(p.a)({},n.state.pagination)).total=o.count,n.setState({loading:!1,data:o.data,pagination:l}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n.setState(n.initialState());case 16:return e.prev=16,n.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])}))),n.deleteModel=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({deleting:!0}),e.next=4,Object(R.a)("".concat(n.state.modelName,"/").concat(t));case 4:n.fetch(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,n.setState({deleting:!1}),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(t){return e.apply(this,arguments)}}(),n.showActivityDetail=function(e){n.setState({activityForDetails:e})},n.closeActivityDetails=function(){n.setState({activityForDetails:null})},n.columns=[{title:"#",align:"center",dataIndex:"id",key:"id",sorter:!0,width:70,render:function(e){return y.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e)}},{title:F.a.t("Service Name"),dataIndex:"service",key:"service",align:"start",ellipsis:!0,render:function(e){return y.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e.nameEn)}},{title:F.a.t("Description English"),dataIndex:"descriptionEn",key:"descriptionEn",align:"start",ellipsis:!0},{title:F.a.t("Description Arabic"),dataIndex:"descriptionAr",key:"descriptionAr",align:"start",ellipsis:!0},{title:F.a.t("Actions"),sorter:!1,align:"center",width:160,render:function(e){return y.a.createElement(o.a,{span:24,gutter:5},y.a.createElement(s.a,{span:12},y.a.createElement(B,{id:e.id,reloadGrid:n.fetch,title:n.state.editTitle,modelName:n.state.modelName,buttonIcon:y.a.createElement(E.a,null)})),y.a.createElement(s.a,{span:12},y.a.createElement(l.a,{placement:"bottom",title:F.a.t("delete")+"?",onConfirm:function(){return n.deleteModel(e.id)},okText:F.a.t("Yes"),cancelText:F.a.t("No")},y.a.createElement(c.a,{icon:y.a.createElement(S.a,{style:{color:"red"}}),shape:"round",className:"btn_hover darkBlueBg",type:"primary",loading:n.state.deleting}))))}}],n.newBtn=y.a.createRef(),n.editBtn=y.a.createRef(),n.newBtnClicked=function(){n.newBtn.current.click()},n.editBtnClicked=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({editResourceId:t});case 2:n.editBtn.current.click();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleTableChange=function(e,t,a){var r=Object(p.a)({},n.state.pagination);r.current=e.current,r.pageSize=e.pageSize,n.setState({pagination:r,sortedInfo:a},(function(){return n.fetch()}))},n.categoryNameChanged=function(){n.fetch()},n.filterFormRef=y.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.pagination,l=t.loading,c=t.createTitle,u=t.modelName;t.activityForDetails;return y.a.createElement(y.a.Fragment,null,y.a.createElement(o.a,{gutter:[10,10]},y.a.createElement(s.a,{span:24},y.a.createElement(r.a,{columns:this.columns,rowClassName:"tb_row",rowKey:function(){return I()()},dataSource:a,pagination:n,loading:l,onChange:this.handleTableChange,title:function(){return y.a.createElement(o.a,null,y.a.createElement(s.a,{span:4,style:{display:"flex"}},y.a.createElement("h2",{style:{margin:"auto"}},F.a.t(u)),y.a.createElement(i.a,{type:"vertical",style:{height:"80%",margin:"auto 10%"}})),y.a.createElement(s.a,{offset:16,span:4},y.a.createElement(B,{reloadGrid:e.fetch,title:c,modelName:u,buttonIcon:y.a.createElement(w.a,null)})))}}))),y.a.createElement("p",{className:"pager-Info"},F.a.t("Showing")," ",a.length," ",F.a.t("from")," ",n.total))}}]),a}(y.a.Component))||n)||n;t.default=Object(O.a)()(z)}}]);
//# sourceMappingURL=28.77bcab06.chunk.js.map