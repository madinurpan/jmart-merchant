function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,r=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(o){r=!0,a=o}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{kj2d:function(t,e,n){"use strict";n.r(e);var i,r,a,s=n("ofXK"),c=n("PCNd"),o=n("tyNb"),u=n("lJxs"),l=n("fXoL"),b=n("2A1n"),p=((i=function(){function t(e,n){_classCallCheck(this,t),this.authoritiesService=e,this.router=n}return _createClass(t,[{key:"canActivate",value:function(){var t=this;return this.authoritiesService.getOtpDevices().pipe(Object(u.a)((function(e){var n,i=(null===(n=e)||void 0===n?void 0:n.length)>0;return i||t.router.navigate(["/authorities/main"]),i})))}}]),t}()).\u0275fac=function(t){return new(t||i)(l.ec(b.a),l.ec(o.c))},i.\u0275prov=l.Mb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),d=n("mrSG"),m=n("quSY"),h=n("itXk"),f=n("pLZG"),g=n("VnnJ"),v=n("S1F0"),y=n("oKsb"),T=n("fvpk"),A=n("xJkR"),k=n("TwVa"),_=n("3Pt+"),I=n("+/Tu"),R=n("1kSV"),S=n("mR7B"),C=n("NpBu"),O=n("M6pS"),P=n("sYmb"),E=((a=function(){function t(e,n,i){_classCallCheck(this,t),this.modal=e,this.authorityLimitsService=n,this.maskedService=i,this.isLoading=!1,this.form=new _.k({amount:new _.h("",_.H.required)})}return _createClass(t,[{key:"ngOnInit",value:function(){this.title=this.mapTranslate("CREATE.".concat(this.paymentType))}},{key:"dismissModal",value:function(t){this.modal.dismiss(t)}},{key:"closeModal",value:function(t){this.modal.close(t)}},{key:"createLimit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,e=this.form.getRawValue(),n=e.amount,i={paymentType:this.paymentType,limit:{amount:this.maskedService.getNumberedAmount(n),currency:I.a.KZT}},t.prev=2,t.next=5,this.authorityLimitsService.createLimit(this.authorityId,i);case 5:r=t.sent,this.closeModal(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.dismissModal(t.t0);case 12:return t.prev=12,this.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[2,9,12,15]])})))}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.MODALS.".concat(t)}}]),t}()).\u0275fac=function(t){return new(t||a)(l.Qb(R.a),l.Qb(b.b),l.Qb(S.a))},a.\u0275cmp=l.Kb({type:a,selectors:[["j-authorities-create-limit-modal"]],inputs:{authorityId:"authorityId",paymentType:"paymentType"},decls:13,vars:14,consts:[[1,"pt-5","pb-4","px-4",3,"formGroup"],[1,"authorities-modal__article"],[1,"p3","text-muted"],[3,"label","formControl"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary",3,"jLoading","disabled","click"]],template:function(t,e){1&t&&(l.Wb(0,"form",0),l.Wb(1,"article",1),l.Wb(2,"h5"),l.Rc(3),l.mc(4,"translate"),l.Vb(),l.Wb(5,"p",2),l.Rc(6),l.mc(7,"translate"),l.Vb(),l.Vb(),l.Rb(8,"j-amount-input",3),l.Wb(9,"div",4),l.Wb(10,"button",5),l.ic("click",(function(t){return e.createLimit()})),l.Rc(11),l.mc(12,"translate"),l.Vb(),l.Vb(),l.Vb()),2&t&&(l.sc("formGroup",e.form),l.Ab(3),l.Tc(" ",l.nc(4,8,e.title)," "),l.Ab(3),l.Tc(" ",l.nc(7,10,e.mapTranslate("DESCRIPTION"))," "),l.Ab(2),l.sc("label",e.mapTranslate("LABEL"))("formControl",e.form.controls.amount),l.Ab(2),l.sc("jLoading",e.isLoading)("disabled",e.isLoading||e.form.invalid),l.Ab(1),l.Tc(" ",l.nc(12,12,e.mapTranslate("SUBMIT"))," "))},directives:[_.J,_.u,_.l,C.a,_.t,_.i,O.a],pipes:[P.d],styles:[".authorities-modal__article[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{line-height:30px;max-width:340px}"]}),a),x=((r=function(){function t(e,n,i){_classCallCheck(this,t),this.modal=e,this.authorityLimitsService=n,this.maskedService=i,this.isLoading=!1}return _createClass(t,[{key:"dismissModal",value:function(t){this.modal.dismiss(t)}},{key:"closeModal",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.modal.close({message:t,limit:e})}},{key:"ngOnInit",value:function(){this.title=this.mapTranslate("CREATE.".concat(this.paymentType)),this.form=new _.k({amount:new _.h(this.maskedService.getMaskedAmount(this.limit.limit.amount),_.H.required)})}},{key:"deleteLimit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,this.authorityLimitsService.deleteLimit(this.authorityId,this.limit);case 4:this.closeModal("delete"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.dismissModal("delete");case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[1,7,10,13]])})))}},{key:"updateLimit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.form.getRawValue(),n=e.amount,i=Object.assign(Object.assign({},this.limit),{limit:{amount:this.maskedService.getNumberedAmount(n),currency:I.a.KZT}}),this.isLoading=!0,t.prev=2,t.next=5,this.authorityLimitsService.updateLimit(this.authorityId,i);case 5:r=t.sent,this.closeModal("update",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.dismissModal("update");case 12:return t.prev=12,this.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[2,9,12,15]])})))}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.MODALS.".concat(t)}}]),t}()).\u0275fac=function(t){return new(t||r)(l.Qb(R.a),l.Qb(b.b),l.Qb(S.a))},r.\u0275cmp=l.Kb({type:r,selectors:[["j-authorities-edit-limit-modal"]],inputs:{authorityId:"authorityId",paymentType:"paymentType",limit:"limit"},decls:16,vars:19,consts:[[1,"pt-5","pb-4","px-4",3,"formGroup"],[1,"authorities-modal__article"],[1,"p3","text-muted"],[3,"label","formControl"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-primary",3,"jLoading","disabled","click"],["type","submit",1,"ml-3","btn","btn-primary",3,"jLoading","disabled","click"]],template:function(t,e){1&t&&(l.Wb(0,"form",0),l.Wb(1,"article",1),l.Wb(2,"h5"),l.Rc(3),l.mc(4,"translate"),l.Vb(),l.Wb(5,"p",2),l.Rc(6),l.mc(7,"translate"),l.Vb(),l.Vb(),l.Rb(8,"j-amount-input",3),l.Wb(9,"div",4),l.Wb(10,"button",5),l.ic("click",(function(t){return e.deleteLimit()})),l.Rc(11),l.mc(12,"translate"),l.Vb(),l.Wb(13,"button",6),l.ic("click",(function(t){return e.updateLimit()})),l.Rc(14),l.mc(15,"translate"),l.Vb(),l.Vb(),l.Vb()),2&t&&(l.sc("formGroup",e.form),l.Ab(3),l.Tc(" ",l.nc(4,11,e.title)," "),l.Ab(3),l.Tc(" ",l.nc(7,13,e.mapTranslate("DESCRIPTION"))," "),l.Ab(2),l.sc("label",e.mapTranslate("LABEL"))("formControl",e.form.controls.amount),l.Ab(2),l.sc("jLoading",e.isLoading)("disabled",e.isLoading),l.Ab(1),l.Tc(" ",l.nc(12,15,e.mapTranslate("RESET"))," "),l.Ab(2),l.sc("jLoading",e.isLoading)("disabled",e.isLoading||e.form.invalid),l.Ab(1),l.Tc(" ",l.nc(15,17,e.mapTranslate("SUBMIT"))," "))},directives:[_.J,_.u,_.l,C.a,_.t,_.i,O.a],pipes:[P.d],styles:[""]}),r),L=n("VO+5"),M=n("DHTX"),V=n("wV3k");function w(t,e){if(1&t&&(l.Wb(0,"small",6),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=l.lc();l.Ab(1),l.Sc(l.nc(2,1,n.mapSwitchMessage("NO_LIMITS")))}}var W=function(t){return{amount:t}};function j(t,e){if(1&t&&(l.Wb(0,"small",6),l.Rc(1),l.mc(2,"translate"),l.mc(3,"money"),l.Vb()),2&t){var n=l.lc();l.Ab(1),l.Tc(" ",l.oc(2,1,n.mapSwitchMessage("HAS_LIMIT"),l.xc(6,W,l.nc(3,4,n.payment.limitAmount)))," ")}}function D(t,e){if(1&t){var n=l.Xb();l.Wb(0,"button",10),l.ic("click",(function(t){return l.Gc(n),l.lc(2).showCreateLimitModal()})),l.Rc(1),l.mc(2,"translate"),l.Vb()}if(2&t){var i=l.lc(2);l.sc("disabled",!i.payment.isEnabled),l.Ab(1),l.Tc(" ",l.nc(2,2,i.mapButtonLabel("SET_LIMIT"))," ")}}function U(t,e){if(1&t){var n=l.Xb();l.Wb(0,"button",11),l.ic("click",(function(t){return l.Gc(n),l.lc(2).showEditLimitModal()})),l.Rc(1),l.mc(2,"translate"),l.Vb()}if(2&t){var i=l.lc(2);l.sc("disabled",!i.payment.isEnabled),l.Ab(1),l.Tc(" ",l.nc(2,2,i.mapButtonLabel("CHANGE_LIMIT"))," ")}}function N(t,e){if(1&t&&(l.Ub(0),l.Wb(1,"div",7),l.Pc(2,D,3,4,"button",8),l.Pc(3,U,3,4,"button",9),l.Vb(),l.Tb()),2&t){var n=l.lc();l.Ab(2),l.sc("ngIf",!n.payment.limitAmount),l.Ab(1),l.sc("ngIf",n.payment.limitAmount)}}var F,H=((F=function(){function t(e,n,i,r){_classCallCheck(this,t),this.authorityPermissionsService=e,this.notifierService=n,this.translateService=i,this.modalService=r}return _createClass(t,[{key:"onChange",value:function(t){var e;return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=7;break}return n.next=4,this.enablePayment();case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,this.disablePayment();case 9:n.t0=n.sent;case 10:i=n.t0,!this.payment.permissionId&&(null===(e=i)||void 0===e?void 0:e.id)&&(this.payment.permissionId=i.id),n.next=17;break;case 14:n.prev=14,n.t1=n.catch(0),this.payment.isEnabled=!this.payment.isEnabled;case 17:case"end":return n.stop()}}),n,this,[[0,14]])})))}},{key:"enablePayment",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.authorityPermissionsService.grantPermission(this.person,this.payment);case 3:return e=t.sent,t.abrupt("return",(this.notify("ACCESS_ENABLED"),e));case 7:throw t.prev=7,t.t0=t.catch(0),this.notify("ACCESS_ENABLE_FAILED","error"),t.t0;case 10:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"disablePayment",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.authorityPermissionsService.refusePermission(this.person,this.payment);case 3:return e=t.sent,t.abrupt("return",(this.notify("ACCESS_DISABLED"),e));case 7:throw t.prev=7,t.t0=t.catch(0),this.notify("ACCESS_DISABLE_FAILED","error"),t.t0;case 10:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"showCreateLimitModal",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.createModalRef(E),t.prev=1,t.next=4,e.result;case 4:n=t.sent,this.payment.limitId=n.id,this.payment.limitAmount=n.limit,this.notify("LIMIT_SET"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0&&this.notify("LIMIT_SET_FAILED","error");case 11:case"end":return t.stop()}}),t,this,[[1,8]])})))}},{key:"showEditLimitModal",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this.createModalRef(x)).componentInstance.limit={id:this.payment.limitId,paymentType:this.payment.type,limit:this.payment.limitAmount},t.prev=2,t.next=5,e.result;case 5:n=t.sent,i=n.message,r=n.limit,"update"===i?(this.payment.limitId=r.id,this.payment.limitAmount=r.limit,this.notify("LIMIT_UPDATED")):(this.payment.limitId=null,this.payment.limitAmount=null,this.notify("LIMIT_DELETED")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),"update"===t.t0?this.notify("LIMIT_UPDATE_FAILED","error"):"delete"==t.t0&&this.notify("LIMIT_DELETE_FAILED","error");case 14:case"end":return t.stop()}}),t,this,[[2,11]])})))}},{key:"mapPaymentType",value:function(t){return this.mapTranslate("TYPE.".concat(t))}},{key:"mapButtonLabel",value:function(t){return this.mapTranslate("BUTTON.".concat(t))}},{key:"mapSwitchMessage",value:function(t){return this.mapTranslate("SWITCH.".concat(t))}},{key:"createModalRef",value:function(t){var e=this.modalService.open(t,{backdropClass:"backdrop_light",windowClass:"modal_light modal_dictionary",centered:!0});return e.componentInstance.authorityId=this.person.id,e.componentInstance.paymentType=this.payment.type,e}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.PAYMENTS.".concat(t)}},{key:"notify",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";this.notifierService.notify(e,this.translateService.instant(this.mapTranslate("MESSAGES.".concat(t)),{paymentType:this.translateService.instant(this.mapPaymentType(this.payment.type))}))}}]),t}()).\u0275fac=function(t){return new(t||F)(l.Qb(b.c),l.Qb(L.c),l.Qb(P.e),l.Qb(R.q))},F.\u0275cmp=l.Kb({type:F,selectors:[["j-authorities-payment"]],inputs:{payment:"payment",person:"person"},decls:9,vars:7,consts:[[1,"toggle"],[3,"value","valueChange"],[1,"toggle__label"],[1,"d-block"],["class","text-gray",4,"ngIf"],[4,"ngIf"],[1,"text-gray"],[1,"toggle__button"],["class","btn btn-link link-blue p-0",3,"disabled","click",4,"ngIf"],["class","btn btn-link p-0",3,"disabled","click",4,"ngIf"],[1,"btn","btn-link","link-blue","p-0",3,"disabled","click"],[1,"btn","btn-link","p-0",3,"disabled","click"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"j-toggle",1),l.ic("valueChange",(function(t){return e.payment.isEnabled=t}))("valueChange",(function(t){return e.onChange(t)})),l.Vb(),l.Wb(2,"span",2),l.Wb(3,"strong",3),l.Rc(4),l.mc(5,"translate"),l.Vb(),l.Pc(6,w,3,3,"small",4),l.Pc(7,j,4,8,"small",4),l.Vb(),l.Vb(),l.Pc(8,N,4,2,"ng-container",5)),2&t&&(l.Ab(1),l.sc("value",e.payment.isEnabled),l.Ab(3),l.Sc(l.nc(5,5,e.mapPaymentType(e.payment.type))),l.Ab(2),l.sc("ngIf",!e.payment.limitAmount),l.Ab(1),l.sc("ngIf",e.payment.limitAmount),l.Ab(1),l.sc("ngIf",!e.payment.isLimitDisabled))},directives:[M.a,s.u],pipes:[P.d,V.a],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}@media(min-width:670px){[_nghost-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}}.toggle__label[_ngcontent-%COMP%]{display:block;margin-left:1rem}.toggle[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin-bottom:1rem}@media(min-width:670px){.toggle[_ngcontent-%COMP%]{margin-bottom:0}}.toggle__button[_ngcontent-%COMP%]{text-align:center;-webkit-box-flex:1;flex-grow:1}@media(min-width:670px){.toggle__button[_ngcontent-%COMP%]{text-align:right}}"]}),F);function Q(t,e){if(1&t&&(l.Wb(0,"div",7),l.Rb(1,"j-authorities-payment",8),l.Vb()),2&t){var n=e.$implicit,i=l.lc(2);l.Ab(1),l.sc("payment",n)("person",i.person)}}function K(t,e){if(1&t&&(l.Wb(0,"div",5),l.Pc(1,Q,2,2,"div",6),l.Vb()),2&t){var n=l.lc();l.Ab(1),l.sc("ngForOf",n.payments)}}var B=function(){return{height:"80px","background-color":"#ECEEF1"}};function G(t,e){1&t&&(l.Wb(0,"div",9),l.Rb(1,"ngx-skeleton-loader",10),l.Vb()),2&t&&(l.Ab(1),l.sc("theme",l.wc(1,B)))}var $,Y=[k.i.PENSION,k.i.SOCIAL,k.i.MEDICAL,k.i.TAX,k.i.SALARY,k.i.CONVERSION,k.i.FOREIGN],J=(($=function(){function t(e,n){_classCallCheck(this,t),this.authorityPermissionsService=e,this.authorityLimitsService=n,this.isLoading=!0}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadData()}},{key:"loadData",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.loadPermissions();case 3:return e=t.sent,t.next=6,this.loadLimits();case 6:n=t.sent,this.payments=Y.map((function(t){var i=e.find((function(e){return e.paymentType===t})),r=n.find((function(e){return e.paymentType===t}));return{type:t,permissionId:i?i.id:null,isEnabled:!i||i.permissions.length>0,limitId:r?r.id:null,limitAmount:r?r.limit:null,isLimitDisabled:[k.i.CONVERSION,k.i.FOREIGN].includes(t)}})),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:return t.prev=12,this.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[0,10,12,15]])})))}},{key:"loadLimits",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.authorityLimitsService.getLimits(this.person.id);case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",[]);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"loadPermissions",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.authorityPermissionsService.getPermissions(this.person.id);case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",[]);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.PAYMENTS.".concat(t)}}]),t}()).\u0275fac=function(t){return new(t||$)(l.Qb(b.c),l.Qb(b.b))},$.\u0275cmp=l.Kb({type:$,selectors:[["j-authorities-payments"]],inputs:{person:"person"},decls:9,vars:8,consts:[[1,"payments__header"],[1,"mb-1"],[1,"mb-0","p3","text-muted"],["class","payments__body",4,"ngIf"],["class","payments__body pt-4 pb-2",4,"ngIf"],[1,"payments__body"],["class","payments__item",4,"ngFor","ngForOf"],[1,"payments__item"],[3,"payment","person"],[1,"payments__body","pt-4","pb-2"],["count","8",3,"theme"]],template:function(t,e){1&t&&(l.Wb(0,"article",0),l.Wb(1,"h6",1),l.Rc(2),l.mc(3,"translate"),l.Vb(),l.Wb(4,"p",2),l.Rc(5),l.mc(6,"translate"),l.Vb(),l.Vb(),l.Pc(7,K,2,1,"div",3),l.Pc(8,G,2,2,"div",4)),2&t&&(l.Ab(2),l.Sc(l.nc(3,4,e.mapTranslate("TITLE"))),l.Ab(3),l.Sc(l.nc(6,6,e.mapTranslate("DESCRIPTION"))),l.Ab(2),l.sc("ngIf",!e.isLoading),l.Ab(1),l.sc("ngIf",e.isLoading))},directives:[s.u,s.t,H,A.a],pipes:[P.d],styles:["[_nghost-%COMP%]{background:#fff;border-radius:12px;display:block}.payments__body[_ngcontent-%COMP%], .payments__header[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.payments__header[_ngcontent-%COMP%]{padding-top:22px;padding-bottom:1rem;border-bottom:1px solid #dbdfe2}"]}),$);function X(t,e){1&t&&(l.Ub(0),l.Rc(1," \u2022 "),l.Tb())}function q(t,e){if(1&t&&(l.Ub(0),l.Wb(1,"p",4),l.Rc(2),l.Pc(3,X,2,0,"ng-container",2),l.Rc(4),l.mc(5,"translate"),l.Vb(),l.Wb(6,"h1",5),l.Rc(7),l.Vb(),l.Tb()),2&t){var n=l.lc();l.Ab(2),l.Tc(" ",n.person.position," "),l.Ab(1),l.sc("ngIf",n.person.position&&n.person.authority),l.Ab(1),l.Tc(" ",l.nc(5,6,n.mapAuthority(n.person.authority))," "),l.Ab(3),l.Vc(" ",n.person.lastname," ",n.person.firstname?n.person.firstname[0]+".":"","",n.person.middlename?n.person.middlename[0]+".":""," ")}}var Z=function(){return{width:"300px",height:"24px","margin-bottom":"6px","background-color":"#ECEEF1"}},z=function(){return{height:"48px","margin-bottom":"0","background-color":"#ECEEF1"}};function tt(t,e){1&t&&(l.Ub(0),l.Rb(1,"ngx-skeleton-loader",6),l.Rb(2,"ngx-skeleton-loader",6),l.Tb()),2&t&&(l.Ab(1),l.sc("theme",l.wc(2,Z)),l.Ab(1),l.sc("theme",l.wc(3,z)))}function et(t,e){if(1&t&&l.Rb(0,"j-authorities-payments",7),2&t){var n=l.lc();l.sc("person",n.person)}}var nt,it=((nt=function(){function t(e,n,i){_classCallCheck(this,t),this.router=e,this.route=n,this.companyService=i,this.subscription=new m.a,this.isReady=!1,this.initAuthoritiesSubscription()}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"mapAuthority",value:function(t){return this.mapTranslate("AUTHORITY.".concat(t))}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.USERS.".concat(t)}},{key:"initAuthoritiesSubscription",value:function(){var t=this;this.subscription.add(Object(h.a)([this.route.params,this.companyService.getAuthorizedPersons().pipe(Object(f.a)((function(t){var e;return(null===(e=t)||void 0===e?void 0:e.length)>0})))]).subscribe((function(e){var n=_slicedToArray(e,2),i=n[0],r=n[1];t.initPerson(r.find((function(t){return t.id===i.id})))})))}},{key:"initPerson",value:function(t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t||this.onClose(),this.person=t,this.isReady=!0;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onClose",value:function(){this.router.navigate(["/authorities/main"])}}]),t}()).\u0275fac=function(t){return new(t||nt)(l.Qb(o.c),l.Qb(o.a),l.Qb(g.a))},nt.\u0275cmp=l.Kb({type:nt,selectors:[["j-authorities-limits"]],decls:7,vars:3,consts:[["closePosition","outside","colsClassList","offset-lg-1 col-lg-8","bodyClassList","py-5",3,"closed"],[1,"limits__header",2,"position","relative"],[4,"ngIf"],[3,"person",4,"ngIf"],[1,"text-muted","limits__position"],[1,"limits__name"],[3,"theme"],[3,"person"]],template:function(t,e){1&t&&(l.Wb(0,"f-page",0),l.ic("closed",(function(t){return e.onClose()})),l.Wb(1,"f-page-header"),l.Wb(2,"div",1),l.Pc(3,q,8,8,"ng-container",2),l.Pc(4,tt,3,4,"ng-container",2),l.Vb(),l.Vb(),l.Wb(5,"f-page-body"),l.Pc(6,et,1,1,"j-authorities-payments",3),l.Vb(),l.Vb()),2&t&&(l.Ab(3),l.sc("ngIf",e.person&&e.isReady),l.Ab(1),l.sc("ngIf",!e.person||!e.isReady),l.Ab(2),l.sc("ngIf",e.person&&e.isReady))},directives:[v.a,y.a,s.u,T.a,A.a,J],pipes:[P.d],styles:[".limits__position[_ngcontent-%COMP%]{margin-bottom:6px}.limits__name[_ngcontent-%COMP%]{line-height:60px;margin-bottom:0}.limits__header[_ngcontent-%COMP%]{margin-bottom:60px}"]}),nt);function rt(t,e){if(1&t&&(l.Wb(0,"a",3),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=e.$implicit,i=l.lc();l.sc("routerLink",n),l.Ab(1),l.Tc(" ",l.nc(2,2,i.mapTranslate(n))," ")}}var at,st,ct,ot=((ct=function(){function t(e){_classCallCheck(this,t),this.authoritiesService=e,this.links=["users","otp"],this.subscription=new m.a,this.initSubscription()}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.MAIN.NAV.".concat(t.toUpperCase())}},{key:"initSubscription",value:function(){var t=this;this.subscription.add(this.authoritiesService.getOtpDevices().subscribe((function(e){var n;(null===(n=e)||void 0===n?void 0:n.length)>0?t.links.includes("otp")||t.links.push("otp"):t.links.includes("otp")&&t.links.splice(t.links.indexOf("otp"),1)})))}}]),t}()).\u0275fac=function(t){return new(t||ct)(l.Qb(b.a))},ct.\u0275cmp=l.Kb({type:ct,selectors:[["j-authorities-nav"]],decls:3,vars:1,consts:[[1,"f-page-tabs-wrap"],[1,"f-page-tabs"],["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"nav",1),l.Pc(2,rt,3,4,"a",2),l.Vb(),l.Vb()),2&t&&(l.Ab(2),l.sc("ngForOf",e.links))},directives:[s.t,o.f,o.e],pipes:[P.d],styles:[""]}),ct),ut=((st=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"onClose",value:function(){this.router.navigate(["/settings"])}}]),t}()).\u0275fac=function(t){return new(t||st)(l.Qb(o.c))},st.\u0275cmp=l.Kb({type:st,selectors:[["j-authorities-main"]],decls:8,vars:3,consts:[["closePosition","outside","colsClassList","offset-lg-1 col-lg-11 offset-xl-2 col-xl-10","bodyClassList","py-5",3,"closed"],[1,"f-page-title"]],template:function(t,e){1&t&&(l.Wb(0,"f-page",0),l.ic("closed",(function(t){return e.onClose()})),l.Wb(1,"f-page-header"),l.Wb(2,"h1",1),l.Rc(3),l.mc(4,"translate"),l.Vb(),l.Rb(5,"j-authorities-nav"),l.Vb(),l.Wb(6,"f-page-body"),l.Rb(7,"router-outlet"),l.Vb(),l.Vb()),2&t&&(l.Ab(3),l.Sc(l.nc(4,1,"AUTHORITIES.MAIN.TITLE")))},directives:[v.a,y.a,ot,T.a,o.h],pipes:[P.d],styles:[""]}),st),lt=((at=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||at)},at.\u0275cmp=l.Kb({type:at,selectors:[["j-authorities-order"]],decls:2,vars:0,template:function(t,e){1&t&&(l.Wb(0,"p"),l.Rc(1," authorities-order works!\n"),l.Vb())},styles:[""]}),at);function bt(t,e){if(1&t&&(l.Wb(0,"th",3),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=e.$implicit,i=l.lc();l.Ab(1),l.Sc(l.nc(2,1,i.mapTableHeading(n)))}}function pt(t,e){if(1&t&&(l.Wb(0,"tr"),l.Wb(1,"td"),l.Wb(2,"div",4),l.Rc(3),l.Vb(),l.Vb(),l.Wb(4,"td"),l.Wb(5,"div",5),l.Rc(6),l.Vb(),l.Vb(),l.Vb()),2&t){var n=e.$implicit;l.Ab(3),l.Tc(" ",n.serial," "),l.Ab(3),l.Vc(" ",null==n.user?null:n.user.lastname," ",null!=n.user&&n.user.firstname?(null==n.user?null:n.user.firstname[0])+".":""," ",null!=n.user&&n.user.middlename?(null==n.user?null:n.user.middlename[0])+".":""," ")}}var dt,mt=((dt=function(){function t(e){_classCallCheck(this,t),this.authoritiesService=e,this.otpDevices=[],this.headings=["SERIAL","USER"],this.subscription=new m.a,this.initSubscription()}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"mapTableHeading",value:function(t){return t?this.mapTranslate("TABLE.".concat(t)):""}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.OTP.".concat(t)}},{key:"initSubscription",value:function(){var t=this;this.subscription.add(this.authoritiesService.getOtpDevices().subscribe((function(e){t.otpDevices=e})))}}]),t}()).\u0275fac=function(t){return new(t||dt)(l.Qb(b.a))},dt.\u0275cmp=l.Kb({type:dt,selectors:[["j-authorities-otp"]],decls:6,vars:2,consts:[[1,"j-authorities-table"],["class","p4 text-muted",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"p4","text-muted"],[1,"p4","text-dark"],[1,"p2","text-dark"]],template:function(t,e){1&t&&(l.Wb(0,"table",0),l.Wb(1,"thead"),l.Wb(2,"tr"),l.Pc(3,bt,3,3,"th",1),l.Vb(),l.Vb(),l.Wb(4,"tbody"),l.Pc(5,pt,7,4,"tr",2),l.Vb(),l.Vb()),2&t&&(l.Ab(3),l.sc("ngForOf",e.headings),l.Ab(2),l.sc("ngForOf",e.otpDevices))},directives:[s.t],pipes:[P.d],styles:[".j-authorities-table[_ngcontent-%COMP%]{background:#fff;width:100%;border-radius:12px}.j-authorities-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ebec}.j-authorities-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.j-authorities-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:14px 16px;font-weight:400}.j-authorities-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 16px}"]}),dt);function ht(t,e){if(1&t&&(l.Wb(0,"th",6),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=e.$implicit,i=l.lc();l.Ab(1),l.Sc(l.nc(2,1,i.mapTableHeading(n)))}}function ft(t,e){if(1&t&&(l.Wb(0,"th",6),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=e.$implicit,i=l.lc(2);l.Ab(1),l.Sc(l.nc(2,1,i.mapTableHeading(n)))}}function gt(t,e){if(1&t&&(l.Ub(0),l.Pc(1,ft,3,3,"th",3),l.Tb()),2&t){var n=l.lc();l.Ab(1),l.sc("ngForOf",n.primaryHeadings)}}function vt(t,e){1&t&&(l.Ub(0),l.Rc(1),l.mc(2,"translate"),l.Tb()),2&t&&(l.Ab(1),l.Tc(" ",l.nc(2,1,"SHARED.DATE_FROM")," "))}function yt(t,e){1&t&&(l.Ub(0),l.Rc(1," \u2014 "),l.Rb(2,"br"),l.Tb())}function Tt(t,e){if(1&t&&(l.Wb(0,"span",11),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=l.lc(3);l.Ab(1),l.Sc(l.nc(2,1,n.mapTranslate("LIMITS_LINK")))}}function At(t,e){if(1&t&&(l.Wb(0,"a",12),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=l.lc(2).$implicit,i=l.lc();l.sc("routerLink","/authorities/limits/"+n.id),l.Ab(1),l.Sc(l.nc(2,2,i.mapTranslate("LIMITS_LINK")))}}function kt(t,e){if(1&t&&(l.Ub(0),l.Wb(1,"td"),l.Pc(2,Tt,3,3,"span",9),l.Pc(3,At,3,4,"a",10),l.Vb(),l.Tb()),2&t){var n=l.lc().$implicit,i=l.lc();l.Ab(2),l.sc("ngIf",i.currentUserId===n.userId),l.Ab(1),l.sc("ngIf",i.currentUserId!==n.userId)}}function _t(t,e){if(1&t&&(l.Wb(0,"tr"),l.Wb(1,"td"),l.Wb(2,"div",7),l.Rc(3),l.Vb(),l.Wb(4,"div",6),l.Rc(5),l.Vb(),l.Vb(),l.Wb(6,"td"),l.Wb(7,"div",8),l.Rc(8),l.mc(9,"translate"),l.Vb(),l.Vb(),l.Wb(10,"td"),l.Wb(11,"div",8),l.Pc(12,vt,3,3,"ng-container",4),l.Rc(13),l.mc(14,"date"),l.Pc(15,yt,3,0,"ng-container",4),l.Rc(16),l.mc(17,"date"),l.Vb(),l.Vb(),l.Pc(18,kt,4,2,"ng-container",4),l.Vb()),2&t){var n=e.$implicit,i=l.lc();l.Ab(3),l.Vc(" ",n.lastname," ",n.firstname?n.firstname[0]+".":""," ",n.middlename?n.middlename[0]+".":""," "),l.Ab(2),l.Tc(" ",n.position," "),l.Ab(3),l.Tc(" ",l.nc(9,10,i.mapAuthority(n.authority))," "),l.Ab(4),l.sc("ngIf",!n.toDate),l.Ab(1),l.Tc(" ",l.oc(14,12,n.fromDate,"dd MMM yyyy")," "),l.Ab(2),l.sc("ngIf",n.toDate),l.Ab(1),l.Tc(" ",l.oc(17,15,n.toDate,"dd MMM yyyy")," "),l.Ab(2),l.sc("ngIf",i.isPrimaryAuthority)}}var It,Rt=((It=function(){function t(e,n){_classCallCheck(this,t),this.companyService=e,this.authoritiesService=n,this.persons=[],this.isPrimaryAuthority=!1,this.headings=["USER","TYPE","DURATION"],this.primaryHeadings=[""],this.subscription=new m.a,this.restrictions=[],this.initCompanySubscription()}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"mapAuthority",value:function(t){return this.mapTranslate("AUTHORITY.".concat(t))}},{key:"mapRestrictions",value:function(t){return this.mapTranslate("RESTRICTIONS.".concat(t))}},{key:"mapTableHeading",value:function(t){return t?this.mapTranslate("TABLE.".concat(t)):""}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.USERS.".concat(t)}},{key:"initCompanySubscription",value:function(){var t=this;this.subscription.add(this.companyService.refresh$.pipe(Object(f.a)((function(t){return _slicedToArray(t,3)[2]}))).subscribe((function(e){var n,i=_slicedToArray(e,2),r=i[0],a=i[1];t.currentUserId=null===(n=r)||void 0===n?void 0:n.id,t.isPrimaryAuthority=t.companyService.isPrimaryAuthority(a.authority),t.isPrimaryAuthority&&t.retrieveRestrictions()})))}},{key:"retrieveRestrictions",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.authoritiesService.fetchRestrictions();case 2:this.restrictions=t.sent;case 3:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||It)(l.Qb(g.a),l.Qb(b.a))},It.\u0275cmp=l.Kb({type:It,selectors:[["j-authorities-registered"]],inputs:{persons:"persons"},decls:14,vars:9,consts:[[1,"mb-1"],[1,"p3","text-muted"],[1,"j-authorities-table"],["class","p4 text-muted",4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p4","text-muted"],[1,"p2","text-dark"],[1,"p4","text-dark"],["class","p3 text-disabled",4,"ngIf"],["class","p3 link-blue",3,"routerLink",4,"ngIf"],[1,"p3","text-disabled"],[1,"p3","link-blue",3,"routerLink"]],template:function(t,e){1&t&&(l.Wb(0,"article"),l.Wb(1,"h6",0),l.Rc(2),l.mc(3,"translate"),l.Vb(),l.Wb(4,"p",1),l.Rc(5),l.mc(6,"translate"),l.Vb(),l.Vb(),l.Wb(7,"table",2),l.Wb(8,"thead"),l.Wb(9,"tr"),l.Pc(10,ht,3,3,"th",3),l.Pc(11,gt,2,1,"ng-container",4),l.Vb(),l.Vb(),l.Wb(12,"tbody"),l.Pc(13,_t,19,18,"tr",5),l.Vb(),l.Vb()),2&t&&(l.Ab(2),l.Sc(l.nc(3,5,"AUTHORITIES.USERS.REGISTERED.TITLE")),l.Ab(3),l.Sc(l.nc(6,7,"AUTHORITIES.USERS.REGISTERED.DESCRIPTION")),l.Ab(5),l.sc("ngForOf",e.headings),l.Ab(1),l.sc("ngIf",e.isPrimaryAuthority),l.Ab(2),l.sc("ngForOf",e.persons))},directives:[s.t,s.u,o.f],pipes:[P.d,s.f],styles:[".j-authorities-table[_ngcontent-%COMP%]{background:#fff;width:100%;border-radius:12px}.j-authorities-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ebec}.j-authorities-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.j-authorities-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:14px 16px;font-weight:400}.j-authorities-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 16px}.restriction[_ngcontent-%COMP%]{background:#f2f2f7;border-radius:12px;padding:0 8px;display:inline-block}.restriction--danger[_ngcontent-%COMP%]{background:#ffefef}"]}),It),St=n("tmjD");function Ct(t,e){if(1&t&&(l.Wb(0,"th",5),l.Rc(1),l.mc(2,"translate"),l.Vb()),2&t){var n=e.$implicit,i=l.lc();l.Ab(1),l.Sc(l.nc(2,1,i.mapTableHeading(n)))}}function Ot(t,e){if(1&t&&(l.Wb(0,"tr"),l.Wb(1,"td"),l.Wb(2,"div",6),l.Rc(3),l.Vb(),l.Wb(4,"div",5),l.Rc(5),l.Vb(),l.Vb(),l.Wb(6,"td"),l.Wb(7,"div",5),l.Rc(8),l.mc(9,"mask"),l.Vb(),l.Vb(),l.Wb(10,"td"),l.Wb(11,"div",5),l.Rc(12),l.Vb(),l.Vb(),l.Vb()),2&t){var n=e.$implicit;l.Ab(3),l.Vc(" ",n.lastname," ",n.firstname?n.firstname[0]+".":""," ",n.middlename?n.middlename[0]+".":""," "),l.Ab(2),l.Tc(" ",n.position," "),l.Ab(3),l.Tc(" ",n.phone?l.oc(9,6,n.phone,"+0 (000) 000 00 00"):"\u2014"," "),l.Ab(4),l.Tc(" ",n.iin||"\u2014"," ")}}var Pt,Et=((Pt=function(){function t(){_classCallCheck(this,t),this.persons=[],this.headings=["USER","IIN","PHONE"]}return _createClass(t,[{key:"mapTableHeading",value:function(t){return t?this.mapTranslate("TABLE.".concat(t)):""}},{key:"mapTranslate",value:function(t){return"AUTHORITIES.USERS.".concat(t)}}]),t}()).\u0275fac=function(t){return new(t||Pt)},Pt.\u0275cmp=l.Kb({type:Pt,selectors:[["j-authorities-unregistered"]],inputs:{persons:"persons"},decls:13,vars:8,consts:[[1,"mb-1"],[1,"p3","text-muted"],[1,"j-authorities-table","j-authorities-table--unregistered"],["class","p4 text-muted",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"p4","text-muted"],[1,"p2","text-dark"]],template:function(t,e){1&t&&(l.Wb(0,"article"),l.Wb(1,"h6",0),l.Rc(2),l.mc(3,"translate"),l.Vb(),l.Wb(4,"p",1),l.Rc(5),l.mc(6,"translate"),l.Vb(),l.Vb(),l.Wb(7,"table",2),l.Wb(8,"thead"),l.Wb(9,"tr"),l.Pc(10,Ct,3,3,"th",3),l.Vb(),l.Vb(),l.Wb(11,"tbody"),l.Pc(12,Ot,13,9,"tr",4),l.Vb(),l.Vb()),2&t&&(l.Ab(2),l.Sc(l.nc(3,4,"AUTHORITIES.USERS.UNREGISTERED.TITLE")),l.Ab(3),l.Sc(l.nc(6,6,"AUTHORITIES.USERS.UNREGISTERED.DESCRIPTION")),l.Ab(5),l.sc("ngForOf",e.headings),l.Ab(2),l.sc("ngForOf",e.persons))},directives:[s.t],pipes:[P.d,St.b],styles:[".j-authorities-table[_ngcontent-%COMP%]{background:#fff;width:100%;border-radius:12px}.j-authorities-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ebec}.j-authorities-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.j-authorities-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:14px 16px;font-weight:400}.j-authorities-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 16px}[_nghost-%COMP%]{display:block;margin-top:2.5rem}.j-authorities-table--unregistered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{opacity:.6}"]}),Pt);function xt(t,e){if(1&t&&l.Rb(0,"j-authorities-registered",1),2&t){var n=l.lc();l.sc("persons",n.registered)}}function Lt(t,e){if(1&t&&l.Rb(0,"j-authorities-unregistered",1),2&t){var n=l.lc();l.sc("persons",n.unregistered)}}var Mt,Vt,wt,Wt=((Mt=function(){function t(e){_classCallCheck(this,t),this.companyService=e,this.registered=[],this.unregistered=[],this.subscription=new m.a,this.initAuthoritiesSubscription()}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"initAuthoritiesSubscription",value:function(){var t=this;this.subscription.add(this.companyService.getAuthorizedPersons().subscribe((function(e){var n;(null===(n=e)||void 0===n?void 0:n.length)>0&&(t.registered=e.filter((function(t){return!!t.userId})),t.unregistered=e.filter((function(t){return!t.userId})))})))}}]),t}()).\u0275fac=function(t){return new(t||Mt)(l.Qb(g.a))},Mt.\u0275cmp=l.Kb({type:Mt,selectors:[["j-authorities-users"]],decls:2,vars:2,consts:[[3,"persons",4,"ngIf"],[3,"persons"]],template:function(t,e){1&t&&(l.Pc(0,xt,1,1,"j-authorities-registered",0),l.Pc(1,Lt,1,1,"j-authorities-unregistered",0)),2&t&&(l.sc("ngIf",(null==e.registered?null:e.registered.length)>0),l.Ab(1),l.sc("ngIf",(null==e.unregistered?null:e.unregistered.length)>0))},directives:[s.u,Rt,Et],styles:[""]}),Mt),jt=[{path:"",component:(Vt=function t(){_classCallCheck(this,t)},Vt.\u0275fac=function(t){return new(t||Vt)},Vt.\u0275cmp=l.Kb({type:Vt,selectors:[["j-authorities"]],decls:1,vars:0,template:function(t,e){1&t&&l.Rb(0,"router-outlet")},directives:[o.h],styles:[""]}),Vt),data:{title:"SETTINGS.TITLE"},children:[{path:"main",component:ut,children:[{path:"users",component:Wt},{path:"order",component:lt},{path:"otp",canActivate:[p],component:mt},{path:"**",redirectTo:"users"}]},{path:"limits/:id",component:it},{path:"**",redirectTo:"main"}]}],Dt=((wt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:wt}),wt.\u0275inj=l.Nb({factory:function(t){return new(t||wt)},imports:[[o.g.forChild(jt)],o.g]}),wt);n.d(e,"AuthoritiesModule",(function(){return Nt}));var Ut,Nt=((Ut=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:Ut}),Ut.\u0275inj=l.Nb({factory:function(t){return new(t||Ut)},imports:[[s.c,_.n,_.D,c.a,Dt]]}),Ut)}}]);