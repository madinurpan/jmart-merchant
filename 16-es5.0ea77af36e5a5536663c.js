function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{vTXZ:function(e,t,n){"use strict";n.r(t);var r,i,a,s,o=n("ofXK"),c=n("PCNd"),l=n("tyNb"),u=n("fXoL"),b=n("paXB"),f=n("7/bn"),d=n("oMXN"),p=n("EiG8"),h=n("sYmb"),g=function(){return["faq"]},m=function(){return["feature-request"]},v=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Kb({type:i,selectors:[["j-extra-settings-tabs"]],decls:5,vars:4,consts:[[1,"tabs"],["routerLinkActive","tabs__link--active","translate","",1,"p1","tabs__link",3,"routerLink"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"a",1),u.Qc(2,"SETTINGS.FAQ.TITLE"),u.Vb(),u.Wb(3,"a",1),u.Qc(4,"SETTINGS.FEATURE_REQUEST.TITLE"),u.Vb(),u.Vb()),2&e&&(u.Ab(1),u.rc("routerLink",u.vc(2,g)),u.Ab(2),u.rc("routerLink",u.vc(3,m)))},directives:[l.f,l.e,h.a],styles:[".tabs[_ngcontent-%COMP%]{display:-webkit-box;display:flex;border-bottom:1px solid #eceef1}.tabs__link[_ngcontent-%COMP%]{color:#666c72;padding:1rem 0;display:block;border-bottom:2px solid transparent;bottom:-1.5px;position:relative}.tabs__link--active[_ngcontent-%COMP%]{color:#1a1c1f;font-weight:500;border-bottom-color:#ef5630}.tabs__link[_ngcontent-%COMP%] + .tabs__link[_ngcontent-%COMP%]{margin-left:40px}"]}),i),_=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Kb({type:r,selectors:[["j-extra-settings"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-lg-10","offset-lg-1","col-xl-10","offset-xl-2"],[1,"settings"],["translate","",1,"header-title","mb-3"]],template:function(e,t){1&e&&(u.Wb(0,"j-layout-home"),u.Wb(1,"j-aside"),u.Rb(2,"j-nav-main"),u.Vb(),u.Wb(3,"j-main"),u.Wb(4,"section",0),u.Wb(5,"section",1),u.Wb(6,"section",2),u.Wb(7,"h2",3),u.Qc(8,"EXTRA_SETTINGS.TITLE"),u.Vb(),u.Rb(9,"j-extra-settings-tabs"),u.Rb(10,"router-outlet"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb())},directives:[b.a,f.a,d.a,p.a,h.a,v,l.h],styles:[".settings{padding-top:40px}.settings-info{padding:1rem;margin:2rem 0;background:#fff;border-radius:.75rem;max-width:435px}.settings-info a:hover{color:#ef5630!important}.settings-heading{font-size:1.25rem;margin:.375rem 0 1rem}"],encapsulation:2}),r),k=n("mrSG"),E=n("quSY"),S=n("IzEk"),y=n("tk/3"),x=n("yZrb"),T=((a=function(){function e(t){_classCallCheck(this,e),this.apiService=t}return _createClass(e,[{key:"getFaq",value:function(e){return Object(k.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.apiService.get("faqs/".concat(e)));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getList",value:function(){var e;return Object(k.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new y.g,r=new y.h,t.next=4,this.apiService.get("faqs",n,r,{observe:"response"});case 4:return i=t.sent,t.abrupt("return",{list:i.body,totalCount:(null===(e=i.body)||void 0===e?void 0:e.length)||0});case 6:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(e){return new(e||a)(u.ec(x.a))},a.\u0275prov=u.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),R=n("fK/r"),q=n("PGAL"),w=n("e8Ap"),C=n("Hjq/"),L=((s=function e(){_classCallCheck(this,e),this.isCollapsed=!1}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=u.Kb({type:s,selectors:[["j-faq-item"]],inputs:{faq:"faq",isCollapsed:"isCollapsed"},decls:9,vars:4,consts:[[1,"faq__block","faq__block--collapsible"],[3,"isCollapsed"],[1,"faq__collapse","d-flex","justify-content-between"],[1,"text-dark"],[1,"faq__arrow",3,"inlineSVG"],[1,"faq_body","text-muted"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Wb(1,"j-collapsible",1),u.Wb(2,"j-collapsible-trigger"),u.Wb(3,"div",2),u.Wb(4,"strong",3),u.Qc(5),u.Vb(),u.Rb(6,"span",4),u.Vb(),u.Vb(),u.Wb(7,"j-collapsible-body",5),u.Qc(8),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Ab(1),u.rc("isCollapsed",!1),u.Ab(4),u.Rc(t.faq.question),u.Ab(1),u.rc("inlineSVG","assets/icons/shared/dropdown.svg"),u.Ab(2),u.Sc(" ",t.faq.answer," "))},directives:[R.a,q.a,w.a,C.a],styles:[".faq__block{background:#fff;border-radius:.5rem;padding:.65rem 20px;margin:.75rem 0}.faq__block .faq__block--collapsible{padding-top:0;padding-bottom:0}.faq__arrow,.faq__block .faq__block--collapsible{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.faq__arrow{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.faq__collapse{padding:.65rem 0;cursor:pointer;-webkit-box-align:center;align-items:center}.faq__body{display:block;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.j-collapsed .faq__body{padding-bottom:1rem}.j-collapsed .faq__collapse .faq__arrow{-webkit-transform:rotate(540deg);transform:rotate(540deg)}"],encapsulation:2}),s),A=n("xJkR");function I(e,t){1&e&&(u.Wb(0,"div",4),u.Wb(1,"strong",5),u.Qc(2),u.mc(3,"translate"),u.Vb(),u.Vb()),2&e&&(u.Ab(2),u.Sc(" ",u.nc(3,1,"SHARED.LIST_LOADING_ERR_REFRESH")," "))}function V(e,t){if(1&e&&(u.Wb(0,"div",7),u.Rb(1,"j-faq-item",8),u.Vb()),2&e){var n=t.$implicit;u.rc("id",n.orderNum),u.Ab(1),u.rc("faq",n)}}function O(e,t){if(1&e&&(u.Ub(0),u.Oc(1,V,2,2,"div",6),u.Tb()),2&e){var n=u.lc();u.Ab(1),u.rc("ngForOf",n.faqList)}}var j=function(){return{height:"52px","background-color":"#ECEEF1"}};function W(e,t){1&e&&u.Rb(0,"ngx-skeleton-loader",9),2&e&&u.rc("theme",u.vc(1,j))}var N,Q,M=((N=function(){function e(t,n){var r=this;_classCallCheck(this,e),this.route=t,this.faqService=n,this.errorText="",this.subscription=new E.a,this.orderNum=0;var i=this.route.queryParams.pipe(Object(S.a)(1)).subscribe((function(e){r.loadFaqList()}));this.subscription.add(i)}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"loadFaqList",value:function(){return Object(k.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.errorText=null,this.isLoading=!0,e.prev=1,e.next=4,this.faqService.getList();case 4:t=e.sent,this.faqList=t.list,this.errorText=t.totalCount>0?null:"no data",this.orderNum=parseInt(this.faqList[this.faqList.length-1].orderNum)||0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.errorText=e.t0.status?e.t0.status:"unknown error",this.faqList=[];case 11:return e.prev=11,this.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[1,8,11,14]])})))}}]),e}()).\u0275fac=function(e){return new(e||N)(u.Qb(l.a),u.Qb(T))},N.\u0275cmp=u.Kb({type:N,selectors:[["j-settings-faq"]],decls:4,vars:3,consts:[[1,"faq"],["class","alert alert-danger faq","role","alert",4,"ngIf"],[4,"ngIf"],["count","6",3,"theme",4,"ngIf"],["role","alert",1,"alert","alert-danger","faq"],[1,"d-block"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[3,"faq"],["count","6",3,"theme"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Oc(1,I,4,3,"div",1),u.Oc(2,O,2,1,"ng-container",2),u.Oc(3,W,1,2,"ngx-skeleton-loader",3),u.Vb()),2&e&&(u.Ab(1),u.rc("ngIf",t.errorText),u.Ab(1),u.rc("ngIf",t.faqList),u.Ab(1),u.rc("ngIf",t.isLoading))},directives:[o.u,o.t,L,A.a],pipes:[h.d],styles:[".faq[_ngcontent-%COMP%]{margin:2rem 0}"]}),N),F=n("2Vo4"),G=n("tWFC"),U=n("3Pt+"),P=n("1kSV"),D=((Q=function(){function e(t){_classCallCheck(this,e),this.apiService=t}return _createClass(e,[{key:"create",value:function(e){return this.apiService.post("feature-requests/",e)}}]),e}()).\u0275fac=function(e){return new(e||Q)(u.ec(x.a))},Q.\u0275prov=u.Mb({token:Q,factory:Q.\u0275fac,providedIn:"root"}),Q),H=n("VO+5"),X=n("9odQ"),K=n("M6pS");function $(e,t){1&e&&(u.Wb(0,"div",4),u.Wb(1,"strong",5),u.Qc(2),u.mc(3,"translate"),u.Vb(),u.Vb()),2&e&&(u.Ab(2),u.Sc(" ",u.nc(3,1,"SHARED.LIST_LOADING_ERR_REFRESH")," "))}function J(e,t){if(1&e){var n=u.Xb();u.Wb(0,"div",6),u.Wb(1,"h6",7),u.Qc(2,"SETTINGS.FEATURE_REQUEST.SUB_TITLE"),u.Vb(),u.Rb(3,"div",8),u.Wb(4,"form",9),u.Rb(5,"j-input",10),u.mc(6,"async"),u.Wb(7,"div",11),u.Wb(8,"button",12),u.ic("click",(function(e){return u.Fc(n),u.lc().create()})),u.Qc(9,"SETTINGS.FEATURE_REQUEST.SEND "),u.Vb(),u.Vb(),u.Vb(),u.Vb()}if(2&e){var r=u.lc();u.Ab(4),u.rc("formGroup",r.form),u.Ab(1),u.rc("label","SETTINGS.FEATURE_REQUEST.INPUT_LABEL")("inputExtra",u.nc(6,10,r.bodyLengthMessage$))("maxLength",r.bodyMaxLength)("formControl",r.f.description)("hasError",r.f.description.invalid&&r.isSubmitted)("errorText",r.mapMessageErrors())("isClearable",!1),u.Ab(3),u.rc("jLoading",r.isSubmitting)("disabled",r.isSubmitting||!r.form.valid)}}var B=function(){return{height:"70px","background-color":"#ECEEF1"}},z=function(){return{height:"130px","background-color":"#ECEEF1"}},Y=function(){return{height:"56px",width:"200px","background-color":"#ECEEF1"}};function Z(e,t){1&e&&(u.Ub(0),u.Rb(1,"ngx-skeleton-loader",13),u.Rb(2,"ngx-skeleton-loader",13),u.Wb(3,"div",11),u.Rb(4,"ngx-skeleton-loader",13),u.Vb(),u.Tb()),2&e&&(u.Ab(1),u.rc("theme",u.vc(3,B)),u.Ab(1),u.rc("theme",u.vc(4,z)),u.Ab(2),u.rc("theme",u.vc(5,Y)))}var ee,te,ne=function(e){return e.SAVE_REQUEST_ERROR="NOTIFICATIONS.SAVE_REQUEST_ERROR",e}({}),re=[{path:"",component:_,data:{title:"EXTRA_SETTINGS.TITLE"},children:[{path:"faq",component:M},{path:"feature-request",component:(ee=function(){function e(t,n,r,i){_classCallCheck(this,e),this.modalService=t,this.featureRequestService=n,this.notifierService=r,this.translateService=i,this.errorText="",this.bodyMaxLength=1e3,this.bodyLengthMessage$=new F.a("0/".concat(this.bodyMaxLength)),this.isSubmitted=!1,this.subscription=new E.a,this.form=new U.k({description:new U.h("",[U.H.maxLength(this.bodyMaxLength),U.H.required,U.H.pattern("(?!^\\d+$)^.+$"),this.noWhitespaceValidator])}),this.listenDescription()}return _createClass(e,[{key:"noWhitespaceValidator",value:function(e){return 0!==(e.value||"").trim().length?null:{whitespace:!0}}},{key:"create",value:function(){return Object(k.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitting||!this.prepareCreate()){e.next=13;break}return this.isSubmitting=!0,e.prev=2,t={description:this.f.description.value},e.next=6,this.featureRequestService.create(t);case 6:this.isSubmitting=!1,this.showSuccessModal(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.showNotification(ne.SAVE_REQUEST_ERROR,"error"),this.isSubmitting=!1;case 13:case"end":return e.stop()}}),e,this,[[2,10]])})))}},{key:"prepareCreate",value:function(){return this.isSubmitted=!0,!this.form.invalid}},{key:"ngAfterViewInit",value:function(){var e=this,t=this.form.valueChanges.subscribe((function(t){e.isSubmitted=!1}));this.subscription.add(t)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"listenDescription",value:function(){var e=this;this.f.description.valueChanges.subscribe((function(t){e.bodyLengthMessage$.next("".concat(t.length,"/").concat(e.bodyMaxLength))}))}},{key:"showSuccessModal",value:function(){return Object(k.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.modalService.open(G.b,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0}),e.prev=1,e.next=4,t.result;case 4:this.form.setValue({description:""}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,this,[[1,7]])})))}},{key:"showNotification",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=this.mapTranslate(e),r=this.translateService.instant(n);this.notifierService.notify(t,r)}},{key:"mapTranslate",value:function(e){return"SETTINGS.FEATURE_REQUEST.".concat(e)}},{key:"mapMessageErrors",value:function(){return this.f.description.errors?this.f.description.errors.maxlength?"ERRORS.MAX_LENGTH":void 0:null}},{key:"f",get:function(){return this.form.controls}}]),e}(),ee.\u0275fac=function(e){return new(e||ee)(u.Qb(P.q),u.Qb(D),u.Qb(H.c),u.Qb(h.e))},ee.\u0275cmp=u.Kb({type:ee,selectors:[["j-settings-feature-request"]],decls:4,vars:3,consts:[[1,"feature-request"],["class","alert alert-danger faq","role","alert",4,"ngIf"],["class","function-form",4,"ngIf"],[4,"ngIf"],["role","alert",1,"alert","alert-danger","faq"],[1,"d-block"],[1,"function-form"],["translate","",1,"settings-heading"],["translate","SETTINGS.FEATURE_REQUEST.DESCRIPTION",1,"p2","mb-4"],[3,"formGroup"],["type","textarea","inputClass","j-input--medium-textarea",3,"label","inputExtra","maxLength","formControl","hasError","errorText","isClearable"],[1,"d-flex","justify-content-end"],["translate","","type","submit",1,"btn","btn-static","btn-primary","btn-lg",3,"jLoading","disabled","click"],[3,"theme"]],template:function(e,t){1&e&&(u.Wb(0,"div",0),u.Oc(1,$,4,3,"div",1),u.Oc(2,J,10,12,"div",2),u.Oc(3,Z,5,6,"ng-container",3),u.Vb()),2&e&&(u.Ab(1),u.rc("ngIf",t.errorText),u.Ab(1),u.rc("ngIf",!t.isLoading),u.Ab(1),u.rc("ngIf",t.isLoading))},directives:[o.u,h.a,U.J,U.u,U.l,X.b,U.t,U.i,K.a,A.a],pipes:[h.d,o.b],styles:[".feature-request[_ngcontent-%COMP%]{margin:2rem 0;width:60%}"]}),ee)},{path:"**",redirectTo:"faq"}]}],ie=((te=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:te}),te.\u0275inj=u.Nb({factory:function(e){return new(e||te)},imports:[[l.g.forChild(re)],l.g]}),te);n.d(t,"ExtraSettingsModule",(function(){return se}));var ae,se=((ae=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:ae}),ae.\u0275inj=u.Nb({factory:function(e){return new(e||ae)},imports:[[o.c,c.a,ie,U.n,U.D]]}),ae)}}]);