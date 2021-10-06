function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(a){r=!0,o=a}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{VBqz:function(e,t,n){"use strict";n.r(t);var i,r=n("ofXK"),o=n("3Pt+"),s=n("tk/3"),c=n("xJkR"),a=n("sYmb"),u=n("e8Ap"),l=n("4Nuw"),m=n("PCNd"),d=n("tyNb"),h=n("Kd2e"),b=n("fXoL"),v=n("S1F0"),f=n("oKsb"),p=n("fvpk"),g=n("mrSG"),A=n("quSY"),y=n("2Vo4"),S=n("lJxs"),R=n("Kj3r"),C=n("jtnZ"),E=n("+/Tu"),O=n("TwVa"),k=n("1kSV"),w=n("Kx/q"),T=((i=function(){function e(t){_classCallCheck(this,e),this.modal=t}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||i)(b.Qb(k.a))},i.\u0275cmp=b.Kb({type:i,selectors:[["j-conversion-success-modal"]],inputs:{fromBalance:"fromBalance",toBalance:"toBalance",description:"description"},decls:16,vars:7,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","/assets/img/history/modals/success.svg"],[1,"p2","mb-0","mt-4","text-muted"],[3,"money","showAllDecimals"],["src","/assets/icons/conversion/modal-success-arrow.svg"],[1,"p2","mb-0"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Wb(1,"div",1),b.Rb(2,"img",2),b.Wb(3,"p",3),b.Rb(4,"j-money",4),b.Vb(),b.Rb(5,"img",5),b.Wb(6,"h3"),b.Rb(7,"j-money",4),b.Vb(),b.Wb(8,"p",6),b.Qc(9),b.mc(10,"translate"),b.Vb(),b.Vb(),b.Wb(11,"div",7),b.Wb(12,"button",8),b.ic("click",(function(e){return t.closeModal()})),b.Qc(13," CONVERSION.NAVIGATE_TO_HISTORY "),b.Vb(),b.Wb(14,"button",9),b.ic("click",(function(e){return t.dismissModal()})),b.Qc(15," SHARED.BACK_TO_HOME "),b.Vb(),b.Vb()),2&e&&(b.Ab(4),b.rc("money",t.fromBalance)("showAllDecimals",!0),b.Ab(3),b.rc("money",t.toBalance)("showAllDecimals",!0),b.Ab(2),b.Rc(b.nc(10,5,t.description)))},directives:[w.a,a.a],pipes:[a.d],styles:[""]}),i);function N(e,t){if(1&e&&b.Rb(0,"p",10),2&e){var n=b.lc();b.rc("innerHTML",n.errorText,b.Gc)}}var V,_=((V=function(){function e(t){_classCallCheck(this,e),this.modal=t}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||V)(b.Qb(k.a))},V.\u0275cmp=b.Kb({type:V,selectors:[["j-conversion-error-modal"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","/assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Wb(1,"div",1),b.Rb(2,"img",2),b.mc(3,"translate"),b.Wb(4,"h3",3),b.Qc(5,"SHARED.ERROR"),b.Vb(),b.Wb(6,"p",4),b.Wb(7,"span",5),b.Qc(8),b.Vb(),b.Vb(),b.Oc(9,N,1,1,"p",6),b.Vb(),b.Wb(10,"div",7),b.Wb(11,"button",8),b.ic("click",(function(e){return t.closeModal()})),b.Qc(12," SHARED.TRY_AGAIN "),b.Vb(),b.Wb(13,"button",9),b.ic("click",(function(e){return t.dismissModal()})),b.Qc(14," SHARED.BACK_TO_HOME "),b.Vb(),b.Vb()),2&e&&(b.Ab(2),b.sc("alt",b.nc(3,3,"SHARED.ERROR")),b.Ab(6),b.Rc(t.description),b.Ab(1),b.rc("ngIf",t.errorText))},directives:[a.a,r.u],pipes:[a.d],styles:[""]}),V),x=n("FSKB"),I=n("0mgW"),L=n("VnnJ"),D=n("mR7B"),F=n("7rOj"),j=n("VO+5"),M=n("hsBV"),W=n("NpBu"),P=n("9odQ"),Q=n("h7tf"),B=n("M6pS"),H=["fromDropdown"],G=["toDropdown"],U=["purposeDropdown"],K=["commissionAccountDropdown"];function q(e,t){if(1&e&&b.Rb(0,"j-money",33),2&e){var n=b.lc();b.rc("money",n.commission)}}function X(e,t){1&e&&b.Rb(0,"span",34),2&e&&b.rc("translate","CONVERSION.COMMISSION_FALLBACK")}function Y(e,t){if(1&e&&(b.Ub(0),b.Rb(1,"j-money",39),b.Qc(2," = "),b.Rb(3,"j-money",39),b.Tb()),2&e){var n=b.lc(2);b.Ab(1),b.rc("showAllDecimals",!0)("money",n.rateFrom),b.Ab(2),b.rc("showAllDecimals",!0)("money",n.rateTo)}}function Z(e,t){if(1&e&&(b.Wb(0,"h6",35),b.Wb(1,"span",36),b.Qc(2,"CONVERSION.RATE"),b.Vb(),b.Qc(3,": "),b.Wb(4,"span",37),b.Oc(5,Y,4,4,"ng-container",38),b.Vb(),b.Vb()),2&e){var n=b.lc();b.Ab(4),b.rc("jLoading",n.isRateLoading)("jLoadingInverted",!0),b.Ab(1),b.rc("ngIf",!n.isRateLoading)}}function J(e,t){if(1&e){var n=b.Xb();b.Wb(0,"div",40),b.Wb(1,"div"),b.Qc(2),b.mc(3,"translate"),b.Vb(),b.Wb(4,"a",41),b.ic("click",(function(e){return b.Fc(n),b.lc().updateRate(e)})),b.Qc(5,"CONVERSION.RATE_RETRY"),b.Vb(),b.Vb()}if(2&e){var i=b.lc();b.Ab(2),b.Rc(i.rateErrorDescription?i.rateErrorDescription:b.nc(3,1,"CONVERSION.RATE_ERROR"))}}function $(e,t){if(1&e&&(b.Wb(0,"span",42),b.Qc(1),b.Vb()),2&e){var n=t.$implicit,i=b.lc();b.Ab(1),b.Tc(" ",i.getItemCode(n)," - ",i.getItemDescription(n)," ")}}function z(e,t){if(1&e&&(b.Wb(0,"div",43),b.Wb(1,"strong"),b.Qc(2),b.Vb(),b.Wb(3,"span"),b.Qc(4," - "),b.Vb(),b.Wb(5,"span"),b.Qc(6),b.Vb(),b.Vb()),2&e){var n=t.$implicit,i=b.lc();b.Ab(2),b.Rc(i.getItemCode(n)),b.Ab(4),b.Rc(i.getItemDescription(n))}}function ee(e,t){if(1&e){var n=b.Xb();b.Wb(0,"div",44),b.Wb(1,"button",45),b.ic("click",(function(e){return b.Fc(n),b.lc().edit()})),b.Qc(2,"CONVERSION.SAVE"),b.Vb(),b.Vb()}if(2&e){var i=b.lc();b.Ab(1),b.rc("jLoadingInverted",!0)("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function te(e,t){if(1&e){var n=b.Xb();b.Ub(0),b.Wb(1,"button",46),b.ic("click",(function(e){return b.Fc(n),b.lc(2).createOnly()})),b.Rb(2,"span",47),b.Wb(3,"span",16),b.Qc(4," CONVERSION.FOR_SIGN "),b.Vb(),b.Vb(),b.Wb(5,"button",48),b.ic("click",(function(e){return b.Fc(n),b.lc(2).createAndSign()})),b.Qc(6,"CONVERSION.SIGN"),b.Vb(),b.Tb()}if(2&e){var i=b.lc(2);b.Ab(1),b.rc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)("jLoadingInverted",!0),b.Ab(1),b.rc("inlineSVG","/assets/icons/conversion/sign.svg"),b.Ab(3),b.rc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function ne(e,t){if(1&e){var n=b.Xb();b.Ub(0),b.Wb(1,"button",48),b.ic("click",(function(e){return b.Fc(n),b.lc(2).createOnly()})),b.Rb(2,"span",47),b.Wb(3,"span",16),b.Qc(4," CONVERSION.FOR_SIGN "),b.Vb(),b.Vb(),b.Tb()}if(2&e){var i=b.lc(2);b.Ab(1),b.rc("disabled",i.isSubmitting)("jLoading",i.isSubmitting),b.Ab(1),b.rc("inlineSVG","/assets/icons/conversion/sign.svg")}}function ie(e,t){if(1&e&&(b.Wb(0,"div",44),b.Oc(1,te,7,6,"ng-container",38),b.Oc(2,ne,5,3,"ng-container",38),b.Vb()),2&e){var n=b.lc();b.Ab(1),b.rc("ngIf",n.canSendAndSign),b.Ab(1),b.rc("ngIf",n.canSendOnly)}}var re,oe,se,ce={backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0},ae=function(e){return e.RATE_NOT_LOADED="rate_not_found",e}({}),ue=((oe=function(){function e(t,n,i,r,s,c,a,u,l,m,d){_classCallCheck(this,e),this.conversionService=t,this.accountsService=n,this.paymentsService=i,this.companyService=r,this.maskedService=s,this.curSymbolPipe=c,this.modalService=a,this.router=u,this.route=l,this.notifierService=m,this.translateService=d,this.descriptionMaxLength=250,this.isSubmitted=!1,this.isRateLoading=!1,this.isEditing=!1,this.isLoading=!0,this.isSubmitting=!1,this.isCommissionAccountSelectable=!1,this.rateFrom=null,this.rateTo=null,this.hasAccountFromRateError=!1,this.hasAccountToRateError=!1,this.rateErrorDescription="",this.commission=null,this.accounts=[],this.purposeList=[],this.subscription=new A.a,this.descriptionLengthMessage$=new y.a("0/".concat(this.descriptionMaxLength)),this.isAccountsLoading=!0,this.conversionForm=new o.k({id:new o.h(null),from:new o.h(null,o.H.required),fromAmount:new o.h("",o.H.required),to:new o.h(null,o.H.required),toAmount:new o.h("",o.H.required),documentNumber:new o.h("",o.H.required),purpose:new o.h("",o.H.required),commission:new o.h(null),commissionAccount:new o.h(null),rate:new o.h(null),description:new o.h("",[o.H.maxLength(this.descriptionMaxLength),o.H.required])}),this.listenFromAmount(),this.listenToAmount(),this.listenDescription()}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.params.subscribe((function(t){t.id&&(e.f.id.setValue(t.id),e.isEditing=!0)}));this.subscription.add(t)}},{key:"ngAfterViewInit",value:function(){var e=this,t=this.route.paramMap.pipe(Object(S.a)((function(){return window.history.state}))).subscribe((function(t){e.isEditing?e.loadEditConversion(e.f.id.value):t.repeatPaymentId?e.loadRepeatConversion(t.repeatPaymentId):e.loadNewConversion()})),n=this.conversionForm.valueChanges.subscribe((function(t){e.isSubmitted=!1}));this.subscription.add(t),this.subscription.add(n)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"getItemCode",value:function(e){return e.code||""}},{key:"getItemDescription",value:function(e){return e.description||""}},{key:"onFromSelect",value:function(e){e&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnFromSelectedRule(e),this.applySelectFromCompanionRule(e),this.selectFromAccount(e),this.recalculateToAmount())}},{key:"onToSelect",value:function(e){e&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnToSelectedRule(e),this.applySelectToCompanionRule(e),this.selectToAccount(e),this.recalculateToAmount())}},{key:"onPurposeSelect",value:function(e){e&&(this.f.purpose.setValue(e),this.recalculateCommission())}},{key:"onCommissionAccountSelect",value:function(e){e&&(this.f.commissionAccount.setValue(e),this.recalculateCommission())}},{key:"reverseAccounts",value:function(){var e=this.f.from.value,t=this.f.to.value;this.selectFromAccount(t),this.fromDropdown.selectAccount(t),this.f.fromAmount.setValue("",{emitEvent:!1}),this.selectToAccount(e),this.toDropdown.selectAccount(e),this.f.toAmount.setValue("",{emitEvent:!1})}},{key:"updateRate",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(e=t)||void 0===e||e.preventDefault(),this.hasAccountFromRateError?this.recalculateFromAmount():this.recalculateToAmount()}},{key:"mapDescriptionErrors",value:function(){return this.f.description.errors?this.f.description.errors.maxlength?"ERRORS.MAX_LENGTH":void 0:null}},{key:"retrievePurposeList",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.conversionService.getPurposeList();case 2:this.purposeList=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"retrieveAccounts",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isAccountsLoading=!0,e.prev=1,e.next=4,this.accountsService.getAccounts();case 4:t=e.sent,this.accounts=t.filter((function(e){var t;return!!(null===(t=e.balance)||void 0===t?void 0:t.currency)&&e.accountType===l.a.ACCOUNT})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.prev=10,this.isAccountsLoading=!1,e.finish(10);case 13:this.applyTwoAccountsRule();case 14:case"end":return e.stop()}}),e,this,[[1,8,10,13]])})))}},{key:"createOnly",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){e.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),e.next=19;break;case 4:return this.isSubmitting=!0,e.prev=5,e.next=8,this.conversionService.createConversion(this.conversionForm.getRawValue());case 8:this.paymentNumberStore.entity=null,this.showSuccessModal("CONVERSION.CREATE.SUCCESS"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),(t=this.handleError(e.t0))&&this.showCreateError(t);case 16:return e.prev=16,this.isSubmitting=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[5,12,16,19]])})))}},{key:"createAndSign",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){e.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),e.next=20;break;case 4:return this.isSubmitting=!0,e.prev=5,e.next=8,this.conversionService.createAndSignConversion(this.conversionForm.getRawValue());case 8:this.paymentNumberStore.entity=null,t=this.companyService.currentCompany.signatureScheme===O.j.SINGLE_SIGN&&this.companyService.currentAuthority.authority===O.a.PRIMARY_SIGNATURE?"CONVERSION.CREATE_AND_SIGN.SUCCESS":"CONVERSION.SIGN_ONLY.SUCCESS",this.showSuccessModal(t),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),(n=this.handleError(e.t0))&&this.showCreateAndSignError(n);case 17:return e.prev=17,this.isSubmitting=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[5,13,17,20]])})))}},{key:"edit",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,!this.conversionForm.invalid){e.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),e.next=17;break;case 4:return this.isSubmitting=!0,e.prev=5,e.next=8,this.conversionService.saveEditedConversion(this.conversionForm.value,this.originalPayment);case 8:this.showSuccessModal("CONVERSION.EDIT.SUCCESS"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),e.t0.code==C.a.RATE_CHANGED?(this.showErrorNotification(e.t0),this.updateRate()):this.showEditError(this.mapError(e.t0));case 14:return e.prev=14,this.isSubmitting=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[5,11,14,17]])})))}},{key:"loadRepeatConversion",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.conversionService.getConversionById(e),this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:n=t.sent,i=_slicedToArray(n,1),r=i[0],this.loadConversionFromPayment(r),this.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"loadEditConversion",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.conversionService.getConversionById(e),this.retrievePurposeList(),this.retrieveAccounts()]);case 3:n=t.sent,i=_slicedToArray(n,1),r=i[0],this.f.documentNumber.setValue(r.details.documentId),this.loadConversionFromPayment(r),this.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"listenDescription",value:function(){var e=this;this.f.description.valueChanges.subscribe((function(t){e.descriptionLengthMessage$.next("".concat(t.length,"/").concat(e.descriptionMaxLength))}))}},{key:"showRateNotLoadedNotification",value:function(){var e=this.translateService.instant("CONVERSION.RATE_NOT_LOADED");this.notifierService.hideAll(),this.notifierService.notify("default",e)}},{key:"showErrorNotification",value:function(e){if(e.code===C.a.RATE_CHANGED){var t=this.translateService.instant("CONVERSION.RATE_CHANGED");this.notifierService.hideAll(),this.notifierService.notify("default",t)}}},{key:"loadConversionFromPayment",value:function(e){this.originalPayment=e,this.selectFromAccountByIban(e.details.payerIban),this.selectToAccountByIban(e.paymentRecipient.recipientAccount.iban),this.selectPurposeByCode(e.details.conversionPurpose.code);var t=this.maskedService.getMaskedAmount(e.details.paymentAmount.amount,this.curSymbolPipe.transform(e.details.paymentAmount.currency));this.f.fromAmount.patchValue(t),this.f.description.patchValue(e.details.description)}},{key:"loadNewConversion",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,Promise.all([this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:this.isLoading=!1;case 4:case"end":return e.stop()}}),e,this)})))}},{key:"selectPurposeByCode",value:function(e){var t=this.purposeList.find((function(t){return t.code==e}));this.onPurposeSelect(t),this.purposeDropdown.selectItem(t)}},{key:"selectToAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectToAccount(t),this.toDropdown.selectAccount(t)}},{key:"selectFromAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectFromAccount(t),this.fromDropdown.selectAccount(t)}},{key:"listenFromAmount",value:function(){var e=this,t=this.f.fromAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(t){t&&e.recalculateToAmount()}));this.subscription.add(t)}},{key:"listenToAmount",value:function(){var e=this,t=this.f.toAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(t){t&&e.recalculateFromAmount()}));this.subscription.add(t)}},{key:"applyTwoAccountsRule",value:function(){if(2==this.accounts.length&&this.accounts[0].balance.currency!=this.accounts[1].balance.currency){var e=this.accounts.filter((function(e){return e.balance.currency===E.a.KZT})),t=e.length?e[0]:this.accounts[0];this.selectFromAccount(t),this.fromDropdown.selectAccount(t),this.applySelectFromCompanionRule(t)}}},{key:"applySelectToCompanionRule",value:function(e){var t;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var n=this.findUnselectedAccount(e);this.selectFromAccount(n),this.fromDropdown.selectAccount(n)}}},{key:"applySelectFromCompanionRule",value:function(e){var t;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var n=this.findUnselectedAccount(e);this.selectToAccount(n),this.toDropdown.selectAccount(n)}}},{key:"applyClearAmountsIfOnlyTwoAccountsRule",value:function(){2==this.accounts.length&&(this.f.fromAmount.setValue(""),this.f.toAmount.setValue(""))}},{key:"findUnselectedAccount",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t!=e}))}},{key:"findAccountByIban",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t.iban==e}))}},{key:"setAutoNumeration",value:function(){var e=this;this.subscription.add(this.paymentsService.conversionPaymentNumber$.subscribe((function(t){e.f.documentNumber.setValue(t)})))}},{key:"selectToAccount",value:function(e){var t;this.toCurrency=null===(t=e.balance)||void 0===t?void 0:t.currency,this.f.to.setValue(e)}},{key:"selectFromAccount",value:function(e){var t;this.fromCurrency=null===(t=e.balance)||void 0===t?void 0:t.currency,this.f.from.setValue(e)}},{key:"clearToAccount",value:function(){var e;this.toCurrency=null,this.f.to.setValue(null),null===(e=this.toDropdown)||void 0===e||e.clearSelected()}},{key:"clearFromAccount",value:function(){var e;this.fromCurrency=null,this.f.from.setValue(null),null===(e=this.fromDropdown)||void 0===e||e.clearSelected()}},{key:"applyClearOnFromSelectedRule",value:function(e){e==this.f.to.value&&this.clearToAccount()}},{key:"applyClearOnToSelectedRule",value:function(e){e==this.f.from.value&&this.clearFromAccount()}},{key:"recalculateToAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.fromCurrency&&this.toCurrency&&this.f.fromAmount.value){e.next=2;break}return e.abrupt("return");case 2:return this.f.toAmount.disable({emitEvent:!1}),this.hasAccountToRateError=!1,this.hasAccountFromRateError=!1,this.rateErrorDescription="",this.isRateLoading=!0,this.rateFrom=null,this.rateTo=null,t=this.maskedService.getNumberedAmount(this.f.fromAmount.value),e.prev=4,e.next=7,this.conversionService.getRate({currencyFrom:this.fromCurrency,currencyTo:this.toCurrency,sum:{amount:t,currency:this.fromCurrency}});case 7:n=e.sent,this.f.rate.setValue(n),this.rateFrom=n.equation.from,this.rateTo=n.equation.to,i=this.maskedService.getMaskedAmount(n.calculatedSum,this.curSymbolPipe.transform(this.toCurrency)),this.f.toAmount.patchValue(i,{emitEvent:!1}),this.recalculateCommission(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),e.t0.code===ae.RATE_NOT_LOADED&&(this.rateErrorDescription=e.t0.description),this.f.toAmount.patchValue("",{emitEvent:!1}),this.hasAccountToRateError=!0;case 16:return e.prev=16,this.f.toAmount.enable({emitEvent:!1}),this.isRateLoading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[4,13,16,19]])})))}},{key:"recalculateFromAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.fromCurrency&&this.toCurrency&&this.f.toAmount.value){e.next=2;break}return e.abrupt("return");case 2:return this.hasAccountToRateError=!1,this.hasAccountFromRateError=!1,this.f.fromAmount.disable({emitEvent:!1}),this.isRateLoading=!0,this.rateFrom=null,this.rateTo=null,t=this.maskedService.getNumberedAmount(this.f.toAmount.value),e.prev=4,e.next=7,this.conversionService.getRate({currencyFrom:this.fromCurrency,currencyTo:this.toCurrency,sum:{amount:t,currency:this.toCurrency}});case 7:n=e.sent,this.f.rate.setValue(n),this.rateFrom=n.equation.from,this.rateTo=n.equation.to,i=this.maskedService.getMaskedAmount(n.calculatedSum,this.curSymbolPipe.transform(this.fromCurrency)),this.f.fromAmount.patchValue(i,{emitEvent:!1}),this.recalculateCommission(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),e.t0.code===ae.RATE_NOT_LOADED&&(this.rateErrorDescription=e.t0.description),this.f.fromAmount.patchValue("",{emitEvent:!1}),this.hasAccountFromRateError=!0;case 16:return e.prev=16,this.f.fromAmount.enable({emitEvent:!1}),this.isRateLoading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[4,13,16,19]])})))}},{key:"recalculateCommission",value:function(){var e;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.conversionService.getCommission(this.conversionForm.getRawValue());case 3:this.commission=t.sent,this.f.commission.setValue(this.commission),this.isCommissionAccountSelectable=(null===(e=this.commission)||void 0===e?void 0:e.amount)>0,this.isCommissionAccountSelectable&&void 0===this.commissionAccountDropdown.selectedAccount&&this.setSelectedDefaultCommissionAccount(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.commission=null;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"setSelectedDefaultCommissionAccount",value:function(){var e,t,n;1==this.accounts.length&&(null===(e=this.commissionAccountDropdown)||void 0===e||e.selectAccount(this.accounts[0]),this.onCommissionAccountSelect(this.accounts[0]));var i=this.accounts.filter((function(e){return e.balance.currency===E.a.KZT}));1==(null===(t=i)||void 0===t?void 0:t.length)&&(null===(n=this.commissionAccountDropdown)||void 0===n||n.selectAccount(i[0]),this.onCommissionAccountSelect(i[0]))}},{key:"showCreateError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE.ERROR",e);case 3:this.createOnly(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showCreateAndSignError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",e);case 3:this.createAndSign(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showEditError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.EDIT.ERROR",e);case 3:this.edit(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showSuccessModal",value:function(e){var t,n,i,r;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var s,c,a;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(s=this.modalService.open(T,ce)).componentInstance.description=e,c=this.maskedService.getNumberedAmount(this.f.fromAmount.value),a=this.maskedService.getNumberedAmount(this.f.toAmount.value),s.componentInstance.fromBalance={amount:c,currency:null===(n=null===(t=this.f.from.value)||void 0===t?void 0:t.balance)||void 0===n?void 0:n.currency},s.componentInstance.toBalance={amount:a,currency:null===(r=null===(i=this.f.to.value)||void 0===i?void 0:i.balance)||void 0===r?void 0:r.currency},o.prev=4,o.next=7,s.result;case 7:this.navigateToHistory(),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(4),this.navigateToHome();case 13:case"end":return o.stop()}}),o,this,[[4,10]])})))}},{key:"showErrorModal",value:function(e,t){var n=this.modalService.open(_,ce);return n.componentInstance.description=e,n.componentInstance.errorText=t,n.result}},{key:"navigateToHome",value:function(){this.router.navigate(["/"])}},{key:"navigateToHistory",value:function(){this.router.navigate(["/history/conversion",{}])}},{key:"handleError",value:function(e){if(e)return e.code!=C.a.RATE_CHANGED?(this.paymentNumberStore.entity=this.f.documentNumber.value,this.mapError(e)):(this.showErrorNotification(e),void this.updateRate())}},{key:"mapError",value:function(e){var t,n="";if(null===(t=e)||void 0===t?void 0:t.data){var i=0;for(var r in e.data)Object.prototype.hasOwnProperty.call(e.data,r)&&(i++>0&&(n+="<br>"),n+="".concat(e.data[r]))}else n=e.description||e.code||e;return n}},{key:"f",get:function(){return this.conversionForm.controls}},{key:"fromAccounts",get:function(){return this.toCurrency===E.a.KZT?this.accounts.filter((function(e){return e.balance.currency!==E.a.KZT})):this.accounts}},{key:"toAccounts",get:function(){return this.fromCurrency===E.a.KZT?this.accounts.filter((function(e){return e.balance.currency!==E.a.KZT})):this.accounts}},{key:"canSendAndSign",get:function(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}},{key:"canSendOnly",get:function(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}},{key:"isRateShown",get:function(){return this.rateFrom&&this.rateTo||this.isRateLoading}},{key:"fromAmountError",get:function(){var e,t;return this.f.fromAmount.value&&this.maskedService.getNumberedAmount(this.f.fromAmount.value)>(null===(t=null===(e=this.f.from.value)||void 0===e?void 0:e.balance)||void 0===t?void 0:t.amount)?"ERRORS.NOT_ENOUGH_AMOUNT":null}}]),e}()).\u0275fac=function(e){return new(e||oe)(b.Qb(x.a),b.Qb(l.c),b.Qb(I.c),b.Qb(L.a),b.Qb(D.a),b.Qb(F.c),b.Qb(k.q),b.Qb(d.c),b.Qb(d.a),b.Qb(j.c),b.Qb(a.e))},oe.\u0275cmp=b.Kb({type:oe,selectors:[["j-conversion-form"]],viewQuery:function(e,t){var n;1&e&&(b.Vc(H,!0),b.Vc(G,!0),b.Vc(U,!0),b.Vc(K,!0)),2&e&&(b.Bc(n=b.jc())&&(t.fromDropdown=n.first),b.Bc(n=b.jc())&&(t.toDropdown=n.first),b.Bc(n=b.jc())&&(t.purposeDropdown=n.first),b.Bc(n=b.jc())&&(t.commissionAccountDropdown=n.first))},decls:48,vars:43,consts:[[1,"conversion",3,"formGroup"],[1,"conversion__main"],[1,"conversion__from"],["translate","",1,"mb-3"],[1,"form-group"],["label","CONVERSION.FROM.LABEL",3,"hasError","isLoading","accounts","isDisabledSelectable","selected"],["fromDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","errorText","isDisabled","currency"],[1,"conversion__arrows"],[3,"disabled","inlineSVG","click"],[1,"conversion__to"],["label","CONVERSION.TO.LABEL",3,"isLoading","hasError","accounts","isDisabledSelectable","selected"],["toDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","isDisabled","currency"],[1,"conversion__rates"],[1,"p3","text-muted"],["translate",""],[3,"money",4,"ngIf"],[3,"translate",4,"ngIf"],["class","d-inline-flex align-items-center",4,"ngIf"],["class","p3 text-muted mt-2",4,"ngIf"],[1,"conversion__details"],[1,"conversion__details-row"],["label","CONVERSION.DETAILS.DOCUMENT_NUMBER",3,"formControl","hasError","isClearable"],["label","CONVERSION.DETAILS.PURPOSE",3,"options","hasError","selected"],["purposeDropdown",""],["selectedTemplate",""],["optionTemplate",""],[1,"form-group",3,"hidden"],["label","CONVERSION.COMMISSION_ACCOUNT",3,"isLoading","accounts","isDisabledSelectable","selected"],["commissionAccountDropdown",""],["label","CONVERSION.DETAILS.DESCRIPTION","type","textarea",3,"inputExtra","formControl","hasError","errorText","maxLength","isClearable"],["class","form-footer",4,"ngIf"],[3,"money"],[3,"translate"],[1,"d-inline-flex","align-items-center"],["translate","",1,"text-muted","conversion__rate-label"],[1,"ml-2","conversion__rate","text-dark",3,"jLoading","jLoadingInverted"],[4,"ngIf"],[3,"showAllDecimals","money"],[1,"p3","text-muted","mt-2"],["href","#","translate","",1,"link",3,"click"],[1,"text-truncate"],[1,"py-2"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"jLoadingInverted","disabled","jLoading","click"],["type","button",1,"btn","btn-link",3,"disabled","jLoading","jLoadingInverted","click"],[1,"d-inline-block","mr-2",3,"inlineSVG"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"disabled","jLoading","click"]],template:function(e,t){1&e&&(b.Wb(0,"form",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Wb(3,"h5",3),b.Qc(4,"CONVERSION.FROM.TITLE"),b.Vb(),b.Wb(5,"div",4),b.Wb(6,"j-account-dropdown",5,6),b.ic("selected",(function(e){return t.onFromSelect(e)})),b.Vb(),b.Vb(),b.Wb(8,"div",4),b.Rb(9,"j-amount-input",7),b.Vb(),b.Vb(),b.Wb(10,"div",8),b.Wb(11,"button",9),b.ic("click",(function(e){return t.reverseAccounts()})),b.Vb(),b.Vb(),b.Wb(12,"div",10),b.Wb(13,"h5",3),b.Qc(14,"CONVERSION.TO.TITLE"),b.Vb(),b.Wb(15,"div",4),b.Wb(16,"j-account-dropdown",11,12),b.ic("selected",(function(e){return t.onToSelect(e)})),b.Vb(),b.Vb(),b.Wb(18,"div",4),b.Rb(19,"j-amount-input",13),b.Vb(),b.Vb(),b.Vb(),b.Wb(20,"div",14),b.Wb(21,"div",15),b.Wb(22,"span",16),b.Qc(23,"CONVERSION.COMMISSION"),b.Vb(),b.Qc(24,": "),b.Oc(25,q,1,1,"j-money",17),b.Oc(26,X,1,1,"span",18),b.Vb(),b.Oc(27,Z,6,3,"h6",19),b.Oc(28,J,6,3,"div",20),b.Vb(),b.Wb(29,"div",21),b.Wb(30,"h5",3),b.Qc(31,"CONVERSION.DETAILS.TITLE"),b.Vb(),b.Wb(32,"div",22),b.Rb(33,"j-input",23),b.Wb(34,"j-dropdown-input",24,25),b.ic("selected",(function(e){return t.onPurposeSelect(e)})),b.Oc(36,$,2,2,"ng-template",null,26,b.Pc),b.Oc(38,z,7,2,"ng-template",null,27,b.Pc),b.Vb(),b.Vb(),b.Wb(40,"div",28),b.Wb(41,"j-account-dropdown",29,30),b.ic("selected",(function(e){return t.onCommissionAccountSelect(e)})),b.Vb(),b.Vb(),b.Wb(43,"div",4),b.Rb(44,"j-input",31),b.mc(45,"async"),b.Vb(),b.Vb(),b.Oc(46,ee,3,3,"div",32),b.Oc(47,ie,3,2,"div",32),b.Vb()),2&e&&(b.rc("formGroup",t.conversionForm),b.Ab(6),b.rc("hasError",t.f.from.invalid&&t.isSubmitted)("isLoading",t.isAccountsLoading)("accounts",t.fromAccounts)("isDisabledSelectable",!0),b.Ab(3),b.rc("hasError",t.f.fromAmount.invalid&&t.isSubmitted||t.fromAmountError)("formControl",t.f.fromAmount)("errorText",t.fromAmountError)("isDisabled",t.f.fromAmount.disabled)("currency",t.fromCurrency),b.Ab(2),b.rc("disabled",!t.isRateShown)("inlineSVG","/assets/icons/conversion/arrows.svg"),b.Ab(5),b.rc("isLoading",t.isAccountsLoading)("hasError",t.f.to.invalid&&t.isSubmitted)("accounts",t.toAccounts)("isDisabledSelectable",!0),b.Ab(3),b.rc("hasError",t.f.toAmount.invalid&&t.isSubmitted)("formControl",t.f.toAmount)("isDisabled",t.f.toAmount.disabled)("currency",t.toCurrency),b.Ab(6),b.rc("ngIf",t.commission),b.Ab(1),b.rc("ngIf",!t.commission),b.Ab(1),b.rc("ngIf",t.isRateShown&&!t.hasAccountFromRateError&&!t.hasAccountToRateError),b.Ab(1),b.rc("ngIf",t.hasAccountFromRateError||t.hasAccountToRateError),b.Ab(5),b.rc("formControl",t.f.documentNumber)("hasError",t.f.documentNumber.invalid&&t.isSubmitted)("isClearable",!1),b.Ab(1),b.rc("options",t.purposeList)("hasError",t.f.purpose.invalid&&t.isSubmitted),b.Ab(6),b.rc("hidden",!t.isCommissionAccountSelectable),b.Ab(1),b.rc("isLoading",t.isAccountsLoading)("accounts",t.accounts)("isDisabledSelectable",!0),b.Ab(3),b.rc("inputExtra",b.nc(45,41,t.descriptionLengthMessage$))("formControl",t.f.description)("hasError",t.f.description.invalid&&t.isSubmitted)("errorText",t.mapDescriptionErrors())("maxLength",t.descriptionMaxLength)("isClearable",!1),b.Ab(2),b.rc("ngIf",t.isEditing),b.Ab(1),b.rc("ngIf",!t.isEditing))},directives:[o.J,o.u,o.l,a.a,M.a,W.a,o.t,o.i,u.a,r.u,P.b,Q.a,w.a,B.a],pipes:[r.b,a.d],styles:[".conversion__main[_ngcontent-%COMP%]{padding:1.5rem 0 0}@media(min-width:960px){.conversion__main[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(50% - 24px) 40px calc(50% - 24px);-webkit-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}}.conversion__arrows[_ngcontent-%COMP%]{margin:1rem auto;text-align:center}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]{margin:5.5rem 0 0}}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;height:40px;outline:0;padding:0;border:0;background:none;box-shadow:none;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]){background:#fff;box-shadow:0 0 1px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 4px 8px rgba(0,0,0,.04)}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.conversion__rate-label[_ngcontent-%COMP%]{font-weight:400}.conversion__rate[_ngcontent-%COMP%]{display:inline-block;position:relative;min-width:30px;height:24px}.conversion__rates[_ngcontent-%COMP%]{text-align:center;padding-bottom:1.5rem}.conversion__details[_ngcontent-%COMP%], .conversion__rates[_ngcontent-%COMP%]{border-bottom:1px solid rgba(183,190,197,.35)}.conversion__details[_ngcontent-%COMP%]{padding:1.5rem 0 .5rem}@media(min-width:960px){.conversion__details-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(35% - 10px) calc(65% - 10px);-webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px}}"]}),oe),le=((re=function(){function e(t,n){_classCallCheck(this,e),this.router=t,this.featureFlagsService=n,this.featureFlagsService.checkFeatureRoute(h.a.CONVERSION)}return _createClass(e,[{key:"onClose",value:function(){this.router.navigate(["/"])}}]),e}()).\u0275fac=function(e){return new(e||re)(b.Qb(d.c),b.Qb(h.b))},re.\u0275cmp=b.Kb({type:re,selectors:[["j-conversion"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-1 col-lg-10 offset-xl-2 col-xl-8","headerClassList","bg-white",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(e,t){1&e&&(b.Wb(0,"f-page",0),b.ic("closed",(function(e){return t.onClose()})),b.Wb(1,"f-page-header"),b.Wb(2,"section",1),b.Wb(3,"h1",2),b.Qc(4,"CONVERSION.TITLE"),b.Vb(),b.Vb(),b.Vb(),b.Wb(5,"f-page-body"),b.Rb(6,"j-conversion-form"),b.Vb(),b.Vb())},directives:[v.a,f.a,a.a,p.a,ue],styles:["[_nghost-%COMP%]{background:#f6f7f8;display:block}"]}),re),me=[{path:"",component:le},{path:":id",component:le},{path:"**",redirectTo:""}],de=((se=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:se}),se.\u0275inj=b.Nb({factory:function(e){return new(e||se)},imports:[[d.g.forChild(me)],d.g]}),se);n.d(t,"ConversionModule",(function(){return be}));var he,be=((he=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:he}),he.\u0275inj=b.Nb({factory:function(e){return new(e||he)},imports:[[r.c,o.n,o.D,s.d,c.b,a.c,u.b,de,l.b,m.a]]}),he)}}]);