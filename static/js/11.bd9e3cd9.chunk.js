(this["webpackJsonpdr-online-dr-portal"]=this["webpackJsonpdr-online-dr-portal"]||[]).push([[11],{441:function(e,t,a){"use strict";a(222);var n=a(172),r=(a(223),a(88)),i=(a(221),a(173)),l=a(58),o=a(59),c=a(74),s=a(73),u=a(0),d=a.n(u),m=a(174),p=a.n(m),f=a(75),h=Object(f.a)(),g=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).initialState=function(){return{data:[],value:void 0,initialValue:e.defaultValue||void 0,fetching:!1,all:!!e.all&&e.all}},n.state=n.initialState(),n.onChange=function(e){n.setState({value:e});try{var t=e?e.key:void 0;(0,n.props.onChange)(e,t),e||n.loadData("")}catch(a){}},n.resetValue=function(){n.setState({value:void 0})},n.onSearch=function(e){n.loadData(e)},n.loadData=p()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;n.setState({fetching:!0});var a={limit:100,offset:0};e&&""!==e&&(a.q=e),h.get("".concat("http://localhost:3010/").concat(t||n.props.endpoint)).query(a).end((function(e,t){if(e)n.setState({data:[],fetching:!1});else{var a=t.body,r=n.props.exclude,i=[];if(r)i=a.filter((function(e){return e.id!==r}));else i=a;var l=[];i.data.map((function(e){return l.push({text:"function"===typeof n.props.optiontext?n.props.optiontext(e):e.name,value:"function"===typeof n.props.optionvalue?n.props.optionvalue(e):e.id}),null})),n.setState({data:l,fetching:!1})}}))}),800),n.ref=e.ref,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.endpoint&&this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.fetching,a=e.data,l=e.value,o=e.initialValue,c=e.all,s=this.props,u=s.placeholder,m=s.disabled,p=s.className,f=s.rtl,h=u||"";return d.a.createElement(n.a,{allowClear:void 0===this.props.allowClear||this.props.allowClear,mode:this.props.mode||null,showSearch:!0,disabled:m,labelInValue:!0,value:l,defaultValue:o,notFoundContent:t?d.a.createElement(i.a,{size:"small"}):d.a.createElement(r.a,{image:r.a.PRESENTED_IMAGE_SIMPLE}),filterOption:!1,onSearch:this.onSearch,onChange:this.onChange,style:{width:"100%"},placeholder:h,className:p||void 0},c&&d.a.createElement(n.a.Option,{key:-9,style:{fontFamily:f?"Cuprumsemi":void 0}},"All"),a.map((function(e){return d.a.createElement(n.a.Option,{key:e.value,style:{fontFamily:f?"Cuprumsemi":void 0}},e.text)})))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),a}(d.a.Component);t.a=g},443:function(e,t,a){"use strict";function n(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}a.d(t,"a",(function(){return n}))},446:function(e,t,a){"use strict";a(171);var n=a(119),r=a(58),i=a(59),l=a(74),o=a(73),c=a(0),s=a.n(c);s.a.Component},622:function(e,t,a){},648:function(e,t,a){"use strict";a.r(t);a(453);var n,r=a(452),i=(a(444),a(445)),l=(a(116),a(45)),o=(a(448),a(451)),c=(a(99),a(40)),s=(a(117),a(30)),u=a(43),d=a.n(u),m=a(447),p=a(64),f=a(58),h=a(59),g=a(74),b=a(73),v=a(0),E=a.n(v),y=a(418),w=a(654),S=a(655),k=a(60),N=a(415),O=a(449),I=a.n(O),F=(a(450),a(225)),j=a.n(F),x=a(9),C=(a(622),a(171),a(119)),M=(a(461),a(467)),B=(a(224),a(120)),R=(a(226),a(153)),P=(a(454),a(455)),A=a(118),T=a(443),q=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).initialState=function(){return{id:e.id,modelName:e.modelName,modelTitle:e.title,reloadGrid:e.reloadGrid,buttonIcon:e.buttonIcon,model:null,isModalVisible:!1,imagePreview:"",selectImageFile:null}},n.state=n.initialState(),n.loadModel=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.id){e.next=5;break}return e.next=3,Object(A.b)("".concat(n.state.modelName,"/").concat(n.state.id));case 3:t=e.sent,n.setState({model:t,imagePreview:"".concat("http://localhost:3010/").concat(t.image)},(function(){n.modelFormRef.current&&n.modelFormRef.current.setFieldsValue({locationEn:t.locationEn,locationAr:t.locationAr,phoneNumber:t.phoneNumber,buildNumber:t.buildNumber})}));case 5:case"end":return e.stop()}}),e)}))),n.imageFileChanged=function(){var e=document.getElementById("imageInput").files;n.setState({selectImageFile:0!=e.length?e[0]:null},Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=n.state.selectImageFile)){e.next=5;break}n.setState({imagePreview:""}),e.next=9;break;case 5:return e.next=7,Object(T.a)(t);case 7:a=e.sent,n.setState({imagePreview:a});case 9:case"end":return e.stop()}}),e)}))))},n.onFormFinished=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r,i,l,o,c,s,u,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state,r=a.id,i=a.modelName,l=a.reloadGrid,o=t.locationEn,c=t.locationAr,s=t.phoneNumber,u=t.buildNumber,(m=new FormData).append("locationEn",o),m.append("locationAr",c),m.append("phoneNumber",s),m.append("buildNumber",u),n.state.selectImageFile&&m.append("image",n.state.selectImageFile),r&&m.append("id",r),e.next=11,Object(A.c)(i,m);case 11:l&&l(),n.closeModal();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showModal=function(){n.setState({isModalVisible:!0,imagePreview:null},Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.id){e.next=3;break}return e.next=3,n.loadModel();case 3:case"end":return e.stop()}}),e)}))))},n.closeModal=function(){n.setState({isModalVisible:!1})},n.modelFormRef=Object(v.createRef)(),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.modelTitle,a=e.imagePreview,n=e.buttonIcon,r=e.id;return E.a.createElement("div",{style:{width:"100%"}},E.a.createElement(c.a,{type:"primary",onClick:this.showModal,icon:n,shape:"round",className:"btn_hover darkBlueBg",style:{width:"100%"}}),this.state.isModalVisible&&E.a.createElement(C.a,{title:t,visible:this.state.isModalVisible,onCancel:this.closeModal,okButtonProps:{form:"modelForm",htmlType:"submit",className:"darkBlueBg"},cancelButtonProps:{style:{display:"none"}}},E.a.createElement(B.a,{id:"modelForm",ref:this.modelFormRef,onFinish:this.onFormFinished,style:{marginTop:"5%"}},E.a.createElement(l.a,{gutter:10},E.a.createElement(l.a,null,E.a.createElement(s.a,{span:24},""!=a&&E.a.createElement(E.a.Fragment,null,E.a.createElement(P.a,{src:a}),E.a.createElement(i.a,null)),E.a.createElement(B.a.Item,{name:"image",label:x.a.t("Image"),rules:[{required:!r,message:x.a.t("Input is required")}]},E.a.createElement(R.a,{type:"file",accept:"image/*",id:"imageInput",ref:this.websiteImageFileRef,onChange:this.imageFileChanged})))),E.a.createElement(s.a,{span:24},E.a.createElement(B.a.Item,{name:"locationEn",label:x.a.t("Address English"),rules:[{required:!0,message:x.a.t("input is required")}]},E.a.createElement(R.a,null))),E.a.createElement(s.a,{span:24},E.a.createElement(B.a.Item,{name:"locationAr",label:x.a.t("Address Arabic"),rules:[{required:!0,message:x.a.t("input is required")}]},E.a.createElement(R.a,null))),E.a.createElement(s.a,{span:12},E.a.createElement(B.a.Item,{name:"phoneNumber",label:x.a.t("Phone Number"),rules:[{required:!0,message:x.a.t("input is required")}]},E.a.createElement(R.a,null))),E.a.createElement(s.a,{span:12},E.a.createElement(B.a.Item,{name:"buildNumber",label:x.a.t("Building Number"),rules:[{required:!0,message:x.a.t("input is required")}]},E.a.createElement(M.a,null)))))))}}]),a}(E.a.Component),V=(a(446),a(75)),D=(a(441),Object(V.a)(),["8","15","20","30","40"]),z=Object(k.b)("userStore")(n=Object(k.c)(n=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).initialState=function(){return{modelName:"Addresses",createTitle:x.a.t("New Record"),editTitle:x.a.t("Edit Record"),data:[],loading:!1,type_name:void 0,selectedPackageId:-1,selectedUserId:-1,pagination:{pageSize:parseInt(D[0],10),pageSizeOptions:D,current:1,total:0,showSizeChanger:!0,hideOnSinglePage:!1,showQuickJumper:!0},sortedInfo:null,editResourceId:void 0,access:[]}},n.state=n.initialState(),n.fetch=Object(p.a)(d.a.mark((function e(){var t,a,r,i,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),t=n.state,a=t.pagination,r=t.modelName,t.filters,i={pageSize:a.pageSize,page:a.current-1},e.prev=3,n.setState({loading:!0}),e.next=7,Object(A.b)("".concat(r,"?").concat(j.a.stringify(i)));case 7:l=e.sent,(o=Object(m.a)({},n.state.pagination)).total=l.count,n.setState({loading:!1,data:l.data,pagination:o}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n.setState(n.initialState());case 16:return e.prev=16,n.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])}))),n.deleteModel=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({deleting:!0}),e.next=4,Object(A.a)("".concat(n.state.modelName,"/").concat(t));case 4:n.fetch(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,n.setState({deleting:!1}),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(t){return e.apply(this,arguments)}}(),n.columns=[{title:"#",align:"center",dataIndex:"id",key:"id",sorter:!0,width:70,render:function(e){return E.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e)}},{title:x.a.t("Address"),dataIndex:"locationEn",key:"locationEn",align:"start",ellipsis:!0,render:function(e){return E.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e)}},{title:x.a.t("Phone Number"),dataIndex:"phoneNumber",key:"phoneNumber",align:"start",ellipsis:!0,render:function(e){return E.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e)}},{title:x.a.t("Building Number"),dataIndex:"buildNumber",key:"buildNumber",align:"start",ellipsis:!0,render:function(e){return E.a.createElement("p",{style:{fontFamily:"Cuprumsemi"}},e)}},{title:x.a.t("Actions"),sorter:!1,align:"center",width:160,render:function(e){return E.a.createElement(l.a,{span:24},E.a.createElement(s.a,{span:12},E.a.createElement(q,{id:e.id,reloadGrid:n.fetch,title:n.state.editTitle,modelName:n.state.modelName,buttonIcon:E.a.createElement(y.a,null)})),E.a.createElement(s.a,{span:12},E.a.createElement(o.a,{placement:"bottom",title:x.a.t("delete")+"?",onConfirm:function(){return n.deleteModel(e.id)},okText:x.a.t("Yes"),cancelText:x.a.t("No")},E.a.createElement(c.a,{icon:E.a.createElement(w.a,{style:{color:"red"}}),shape:"round",className:"btn_hover darkBlueBg",type:"primary",loading:n.state.deleting}))))}}],n.newBtn=E.a.createRef(),n.editBtn=E.a.createRef(),n.newBtnClicked=function(){n.newBtn.current.click()},n.editBtnClicked=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({editResourceId:t});case 2:n.editBtn.current.click();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleTableChange=function(e,t,a){var r=Object(m.a)({},n.state.pagination);r.current=e.current,r.pageSize=e.pageSize,n.setState({pagination:r,sortedInfo:a},(function(){return n.fetch()}))},n.categoryNameChanged=function(){n.fetch()},n.filterFormRef=E.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.pagination,o=t.loading,c=t.createTitle,u=t.modelName;return E.a.createElement(E.a.Fragment,null,E.a.createElement(l.a,{gutter:[10,10]},E.a.createElement(s.a,{span:24},E.a.createElement(r.a,{columns:this.columns,rowClassName:"tb_row",rowKey:function(){return I()()},dataSource:a,pagination:n,loading:o,onChange:this.handleTableChange,title:function(){return E.a.createElement(l.a,null,E.a.createElement(s.a,{span:4,style:{display:"flex"}},E.a.createElement("h2",{style:{margin:"auto"}},x.a.t(u)),E.a.createElement(i.a,{type:"vertical",style:{height:"80%",margin:"auto 10%"}})),E.a.createElement(s.a,{offset:20,span:4},E.a.createElement(q,{reloadGrid:e.fetch,title:c,modelName:u,buttonIcon:E.a.createElement(S.a,null)})))}}))),E.a.createElement("p",{className:"pager-Info"},x.a.t("Showing")," ",a.length," ",x.a.t("from")," ",n.total))}}]),a}(E.a.Component))||n)||n;t.default=Object(N.a)()(z)}}]);
//# sourceMappingURL=11.bd9e3cd9.chunk.js.map