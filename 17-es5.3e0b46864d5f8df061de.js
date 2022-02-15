function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(a){r=!0,o=a}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{VBqz:function(e,t,n){"use strict";n.r(t);var i,r=n("ofXK"),o=n("3Pt+"),c=n("xJkR"),s=n("sYmb"),a=n("e8Ap"),u=n("4Nuw"),l=n("PCNd"),m=n("tyNb"),d=n("4wRv"),h=n("fXoL"),b=n("bsP8"),v=n("S1F0"),f=n("oKsb"),p=n("fvpk"),g=n("mrSG"),y=n("quSY"),A=n("2Vo4"),S=n("lJxs"),R=n("Kj3r"),C=n("jtnZ"),E=n("+/Tu"),k=n("TwVa"),w=n("1kSV"),O=n("Kx/q"),T=((i=function(){function e(t){_classCallCheck(this,e),this.modal=t}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||i)(h.Qb(w.a))},i.\u0275cmp=h.Kb({type:i,selectors:[["j-conversion-success-modal"]],inputs:{fromBalance:"fromBalance",toBalance:"toBalance",description:"description"},decls:16,vars:7,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","/assets/img/history/modals/success.svg"],[1,"p2","mb-0","mt-4","text-muted"],[3,"money","showAllDecimals"],["src","/assets/icons/conversion/modal-success-arrow.svg"],[1,"p2","mb-0"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(e,t){1&e&&(h.Rb(0,"div",0),h.Wb(1,"div",1),h.Rb(2,"img",2),h.Wb(3,"p",3),h.Rb(4,"j-money",4),h.Vb(),h.Rb(5,"img",5),h.Wb(6,"h3"),h.Rb(7,"j-money",4),h.Vb(),h.Wb(8,"p",6),h.Tc(9),h.nc(10,"translate"),h.Vb(),h.Vb(),h.Wb(11,"div",7),h.Wb(12,"button",8),h.ic("click",(function(e){return t.closeModal()})),h.Tc(13," CONVERSION.NAVIGATE_TO_HISTORY "),h.Vb(),h.Wb(14,"button",9),h.ic("click",(function(e){return t.dismissModal()})),h.Tc(15," SHARED.BACK_TO_HOME "),h.Vb(),h.Vb()),2&e&&(h.Ab(4),h.uc("money",t.fromBalance)("showAllDecimals",!0),h.Ab(3),h.uc("money",t.toBalance)("showAllDecimals",!0),h.Ab(2),h.Uc(h.oc(10,5,t.description)))},directives:[O.a,s.a],pipes:[s.d],styles:[""]}),i);function N(e,t){if(1&e&&h.Rb(0,"p",10),2&e){var n=h.mc();h.uc("innerHTML",n.errorText,h.Jc)}}var I,V=((I=function(){function e(t){_classCallCheck(this,e),this.modal=t}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||I)(h.Qb(w.a))},I.\u0275cmp=h.Kb({type:I,selectors:[["j-conversion-error-modal"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","/assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(e,t){1&e&&(h.Rb(0,"div",0),h.Wb(1,"div",1),h.Rb(2,"img",2),h.nc(3,"translate"),h.Wb(4,"h3",3),h.Tc(5,"SHARED.ERROR"),h.Vb(),h.Wb(6,"p",4),h.Wb(7,"span",5),h.Tc(8),h.Vb(),h.Vb(),h.Rc(9,N,1,1,"p",6),h.Vb(),h.Wb(10,"div",7),h.Wb(11,"button",8),h.ic("click",(function(e){return t.closeModal()})),h.Tc(12," SHARED.TRY_AGAIN "),h.Vb(),h.Wb(13,"button",9),h.ic("click",(function(e){return t.dismissModal()})),h.Tc(14," SHARED.BACK_TO_HOME "),h.Vb(),h.Vb()),2&e&&(h.Ab(2),h.vc("alt",h.oc(3,3,"SHARED.ERROR")),h.Ab(6),h.Uc(t.description),h.Ab(1),h.uc("ngIf",t.errorText))},directives:[s.a,r.u],pipes:[s.d],styles:[""]}),I),_=n("y5b2"),x=n("FSKB"),L=n("0mgW"),D=n("VnnJ"),j=n("mR7B"),P=n("7rOj"),M=n("VO+5"),W=n("2A1n"),F=n("CVrE"),H=n("kDIH"),B=n("hsBV"),G=n("NpBu"),U=n("9odQ"),K=n("h7tf"),Q=n("M6pS"),q=["fromDropdown"],Y=["toDropdown"],X=["purposeDropdown"],J=["commissionAccountDropdown"];function Z(e,t){1&e&&h.Rb(0,"j-restricted-placeholder",2)}function $(e,t){if(1&e&&h.Rb(0,"j-money",36),2&e){var n=h.mc(2);h.uc("money",n.commission)}}function z(e,t){1&e&&h.Rb(0,"span",37),2&e&&h.uc("translate","CONVERSION.COMMISSION_FALLBACK")}function ee(e,t){if(1&e&&(h.Ub(0),h.Rb(1,"j-money",41),h.Tc(2," = "),h.Rb(3,"j-money",41),h.Tb()),2&e){var n=h.mc(3);h.Ab(1),h.uc("showAllDecimals",!0)("money",n.rateFrom),h.Ab(2),h.uc("showAllDecimals",!0)("money",n.rateTo)}}function te(e,t){if(1&e&&(h.Wb(0,"h6",38),h.Wb(1,"span",39),h.Tc(2,"CONVERSION.RATE"),h.Vb(),h.Tc(3,": "),h.Wb(4,"span",40),h.Rc(5,ee,4,4,"ng-container",1),h.Vb(),h.Vb()),2&e){var n=h.mc(2);h.Ab(4),h.uc("jLoading",n.isRateLoading)("jLoadingInverted",!0),h.Ab(1),h.uc("ngIf",!n.isRateLoading)}}function ne(e,t){if(1&e){var n=h.Xb();h.Wb(0,"div",42),h.Wb(1,"div"),h.Tc(2),h.nc(3,"translate"),h.Vb(),h.Wb(4,"a",43),h.ic("click",(function(e){return h.Ic(n),h.mc(2).updateRate(e)})),h.Tc(5,"CONVERSION.RATE_RETRY"),h.Vb(),h.Vb()}if(2&e){var i=h.mc(2);h.Ab(2),h.Uc(i.rateErrorDescription?i.rateErrorDescription:h.oc(3,1,"CONVERSION.RATE_ERROR"))}}function ie(e,t){if(1&e&&(h.Wb(0,"span",44),h.Tc(1),h.Vb()),2&e){var n=t.$implicit,i=h.mc(2);h.Ab(1),h.Wc(" ",i.getItemCode(n)," - ",i.getItemDescription(n)," ")}}function re(e,t){if(1&e&&(h.Wb(0,"div",45),h.Wb(1,"strong"),h.Tc(2),h.Vb(),h.Wb(3,"span"),h.Tc(4," - "),h.Vb(),h.Wb(5,"span"),h.Tc(6),h.Vb(),h.Vb()),2&e){var n=t.$implicit,i=h.mc(2);h.Ab(2),h.Uc(i.getItemCode(n)),h.Ab(4),h.Uc(i.getItemDescription(n))}}function oe(e,t){if(1&e){var n=h.Xb();h.Wb(0,"div",46),h.Wb(1,"button",47),h.ic("click",(function(e){return h.Ic(n),h.mc(2).edit()})),h.Tc(2,"CONVERSION.SAVE"),h.Vb(),h.Vb()}if(2&e){var i=h.mc(2);h.Ab(1),h.uc("jLoadingInverted",!0)("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function ce(e,t){if(1&e){var n=h.Xb();h.Ub(0),h.Wb(1,"button",48),h.ic("click",(function(e){return h.Ic(n),h.mc(3).createOnly()})),h.Rb(2,"span",49),h.Wb(3,"span",19),h.Tc(4," CONVERSION.FOR_SIGN "),h.Vb(),h.Vb(),h.Wb(5,"button",50),h.ic("click",(function(e){return h.Ic(n),h.mc(3).createAndSign()})),h.Tc(6,"CONVERSION.SIGN"),h.Vb(),h.Tb()}if(2&e){var i=h.mc(3);h.Ab(1),h.uc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)("jLoadingInverted",!0),h.Ab(1),h.uc("inlineSVG","/assets/icons/conversion/sign.svg"),h.Ab(3),h.uc("disabled",i.isSubmitting)("jLoading",i.isSubmitting)}}function se(e,t){if(1&e){var n=h.Xb();h.Ub(0),h.Wb(1,"button",50),h.ic("click",(function(e){return h.Ic(n),h.mc(3).createOnly()})),h.Rb(2,"span",49),h.Wb(3,"span",19),h.Tc(4," CONVERSION.FOR_SIGN "),h.Vb(),h.Vb(),h.Tb()}if(2&e){var i=h.mc(3);h.Ab(1),h.uc("disabled",i.isSubmitting)("jLoading",i.isSubmitting),h.Ab(1),h.uc("inlineSVG","/assets/icons/conversion/sign.svg")}}function ae(e,t){if(1&e&&(h.Wb(0,"div",46),h.Rc(1,ce,7,6,"ng-container",1),h.Rc(2,se,5,3,"ng-container",1),h.Vb()),2&e){var n=h.mc(2);h.Ab(1),h.uc("ngIf",n.canSendAndSign),h.Ab(1),h.uc("ngIf",n.canSendOnly)}}function ue(e,t){if(1&e){var n=h.Xb();h.Ub(0),h.Wb(1,"form",3),h.Wb(2,"div",4),h.Wb(3,"div",5),h.Wb(4,"h5",6),h.Tc(5,"CONVERSION.FROM.TITLE"),h.Vb(),h.Wb(6,"div",7),h.Wb(7,"j-account-dropdown",8,9),h.ic("selected",(function(e){return h.Ic(n),h.mc().onFromSelect(e)})),h.Vb(),h.Vb(),h.Wb(9,"div",7),h.Rb(10,"j-amount-input",10),h.Vb(),h.Vb(),h.Wb(11,"div",11),h.Wb(12,"button",12),h.ic("click",(function(e){return h.Ic(n),h.mc().reverseAccounts()})),h.Vb(),h.Vb(),h.Wb(13,"div",13),h.Wb(14,"h5",6),h.Tc(15,"CONVERSION.TO.TITLE"),h.Vb(),h.Wb(16,"div",7),h.Wb(17,"j-account-dropdown",14,15),h.ic("selected",(function(e){return h.Ic(n),h.mc().onToSelect(e)})),h.Vb(),h.Vb(),h.Wb(19,"div",7),h.Rb(20,"j-amount-input",16),h.Vb(),h.Vb(),h.Vb(),h.Wb(21,"div",17),h.Wb(22,"div",18),h.Wb(23,"span",19),h.Tc(24,"CONVERSION.COMMISSION"),h.Vb(),h.Tc(25,": "),h.Rc(26,$,1,1,"j-money",20),h.Rc(27,z,1,1,"span",21),h.Vb(),h.Rc(28,te,6,3,"h6",22),h.Rc(29,ne,6,3,"div",23),h.Vb(),h.Wb(30,"div",24),h.Wb(31,"h5",6),h.Tc(32,"CONVERSION.DETAILS.TITLE"),h.Vb(),h.Wb(33,"div",25),h.Rb(34,"j-input",26),h.Wb(35,"j-dropdown-input",27,28),h.ic("selected",(function(e){return h.Ic(n),h.mc().onPurposeSelect(e)})),h.Rc(37,ie,2,2,"ng-template",null,29,h.Sc),h.Rc(39,re,7,2,"ng-template",null,30,h.Sc),h.Vb(),h.Vb(),h.Wb(41,"div",31),h.Wb(42,"j-account-dropdown",32,33),h.ic("selected",(function(e){return h.Ic(n),h.mc().onCommissionAccountSelect(e)})),h.Vb(),h.Vb(),h.Wb(44,"div",7),h.Rb(45,"j-input",34),h.nc(46,"async"),h.Vb(),h.Vb(),h.Rc(47,oe,3,3,"div",35),h.Rc(48,ae,3,2,"div",35),h.Vb(),h.Tb()}if(2&e){var i=h.mc();h.Ab(1),h.uc("formGroup",i.conversionForm),h.Ab(6),h.uc("hasError",i.f.from.invalid&&i.isSubmitted)("isLoading",i.isAccountsLoading)("accounts",i.fromAccounts)("isDisabledSelectable",!0),h.Ab(3),h.uc("hasError",i.f.fromAmount.invalid&&i.isSubmitted||i.fromAmountError)("formControl",i.f.fromAmount)("errorText",i.fromAmountError)("isDisabled",i.f.fromAmount.disabled)("currency",i.fromCurrency),h.Ab(2),h.uc("disabled",!i.isRateShown)("inlineSVG","/assets/icons/conversion/arrows.svg"),h.Ab(5),h.uc("isLoading",i.isAccountsLoading)("hasError",i.f.to.invalid&&i.isSubmitted)("accounts",i.toAccounts)("isDisabledSelectable",!0),h.Ab(3),h.uc("hasError",i.f.toAmount.invalid&&i.isSubmitted)("formControl",i.f.toAmount)("isDisabled",i.f.toAmount.disabled)("currency",i.toCurrency),h.Ab(6),h.uc("ngIf",i.commission),h.Ab(1),h.uc("ngIf",!i.commission),h.Ab(1),h.uc("ngIf",i.isRateShown&&!i.hasAccountFromRateError&&!i.hasAccountToRateError),h.Ab(1),h.uc("ngIf",i.hasAccountFromRateError||i.hasAccountToRateError),h.Ab(5),h.uc("formControl",i.f.documentNumber)("hasError",i.f.documentNumber.invalid&&i.isSubmitted)("isClearable",!1),h.Ab(1),h.uc("options",i.purposeList)("hasError",i.f.purpose.invalid&&i.isSubmitted),h.Ab(6),h.uc("hidden",!i.isCommissionAccountSelectable),h.Ab(1),h.uc("isLoading",i.isAccountsLoading)("accounts",i.accounts)("isDisabledSelectable",!0),h.Ab(3),h.uc("inputExtra",h.oc(46,41,i.descriptionLengthMessage$))("formControl",i.f.description)("hasError",i.f.description.invalid&&i.isSubmitted)("errorText",i.mapDescriptionErrors())("maxLength",i.descriptionMaxLength)("isClearable",!1),h.Ab(2),h.uc("ngIf",i.isEditing),h.Ab(1),h.uc("ngIf",!i.isEditing)}}var le,me,de,he={backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0},be=function(e){return e.RATE_NOT_LOADED="rate_not_found",e}({}),ve=((me=function(){function e(t,n,i,r,c,s,a,u,l,m,d,h,b,v){_classCallCheck(this,e),this.conversionService=t,this.accountsService=n,this.paymentsService=i,this.companyService=r,this.maskedService=c,this.curSymbolPipe=s,this.modalService=a,this.router=u,this.route=l,this.notifierService=m,this.translateService=d,this.navService=h,this.authorityPermissionsService=b,this.paymentsApiService=v,this.descriptionMaxLength=250,this.isSubmitted=!1,this.isRateLoading=!1,this.isEditing=!1,this.isLoading=!0,this.isRestricted=!1,this.isSubmitting=!1,this.isCommissionAccountSelectable=!1,this.rateFrom=null,this.rateTo=null,this.hasAccountFromRateError=!1,this.hasAccountToRateError=!1,this.rateErrorDescription="",this.commission=null,this.accounts=[],this.purposeList=[],this.subscription=new y.a,this.descriptionLengthMessage$=new A.a("0/".concat(this.descriptionMaxLength)),this.isAccountsLoading=!0,this.rateSubscription=null,this.conversionForm=new o.k({id:new o.h(null),from:new o.h(null,o.H.required),fromAmount:new o.h("",o.H.required),to:new o.h(null,o.H.required),toAmount:new o.h("",o.H.required),documentNumber:new o.h("",o.H.required),purpose:new o.h("",o.H.required),commission:new o.h(null),commissionAccount:new o.h(null),rate:new o.h(null),description:new o.h("",[o.H.maxLength(this.descriptionMaxLength),o.H.required])}),this.listenFromAmount(),this.listenToAmount(),this.listenDescription()}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.params.subscribe((function(t){t.id&&(e.f.id.setValue(t.id),e.isEditing=!0)}));this.subscription.add(t)}},{key:"ngAfterViewInit",value:function(){var e=this;this.getPermission().then((function(){e.isRestricted?e.isLoading=!1:e.initPage()}))}},{key:"initPage",value:function(){var e=this,t=this.route.paramMap.pipe(Object(S.a)((function(){return window.history.state}))).subscribe((function(t){e.isEditing?e.loadEditConversion(e.f.id.value):t.repeatPaymentId?e.loadRepeatConversion(t.repeatPaymentId):e.loadNewConversion()})),n=this.conversionForm.valueChanges.subscribe((function(t){e.isSubmitted=!1}));this.subscription.add(t),this.subscription.add(n)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"getItemCode",value:function(e){return e.code||""}},{key:"getItemDescription",value:function(e){return e.description||""}},{key:"onFromSelect",value:function(e){e&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnFromSelectedRule(e),this.applySelectFromCompanionRule(e),this.selectFromAccount(e),this.recalculateToAmount())}},{key:"onToSelect",value:function(e){e&&(this.applyClearAmountsIfOnlyTwoAccountsRule(),this.applyClearOnToSelectedRule(e),this.applySelectToCompanionRule(e),this.selectToAccount(e),this.recalculateToAmount())}},{key:"onPurposeSelect",value:function(e){e&&(this.f.purpose.setValue(e),this.recalculateCommission())}},{key:"onCommissionAccountSelect",value:function(e){e&&(this.f.commissionAccount.setValue(e),this.recalculateCommission())}},{key:"reverseAccounts",value:function(){var e=this.f.from.value,t=this.f.to.value;this.selectFromAccount(t),this.fromDropdown.selectAccount(t),this.f.fromAmount.setValue("",{emitEvent:!1}),this.selectToAccount(e),this.toDropdown.selectAccount(e),this.f.toAmount.setValue("",{emitEvent:!1})}},{key:"updateRate",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===(e=t)||void 0===e||e.preventDefault(),this.hasAccountFromRateError?this.recalculateFromAmount():this.recalculateToAmount()}},{key:"mapDescriptionErrors",value:function(){return this.f.description.errors?this.f.description.errors.maxlength?"ERRORS.MAX_LENGTH":void 0:null}},{key:"retrievePurposeList",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.conversionService.getPurposeList();case 2:this.purposeList=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"retrieveAccounts",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isAccountsLoading=!0,e.prev=1,e.next=4,this.accountsService.getAccounts();case 4:t=e.sent,this.accounts=t.filter((function(e){var t;return!!(null===(t=e.balance)||void 0===t?void 0:t.currency)&&e.accountType===u.a.ACCOUNT})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.prev=10,this.isAccountsLoading=!1,e.finish(10);case 13:this.applyTwoAccountsRule();case 14:case"end":return e.stop()}}),e,this,[[1,8,10,13]])})))}},{key:"createOnly",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){e.next=2;break}return e.abrupt("return",void((this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification()));case 2:return this.isSubmitting=!0,t=this.conversionForm.getRawValue(),e.next=6,this.checkIfAllowedToCreate(t.amount);case 6:if(!e.sent){e.next=23;break}return e.prev=7,e.next=10,this.conversionService.createConversion(t);case 10:this.paymentNumberStore.entity=null,this.showSuccessModal("CONVERSION.CREATE.SUCCESS"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),(n=this.handleError(e.t0))&&this.showCreateError(n);case 18:return e.prev=18,this.isSubmitting=!1,e.finish(18);case 21:e.next=24;break;case 23:this.isSubmitting=!1;case 24:case"end":return e.stop()}}),e,this,[[7,14,18,21]])})))}},{key:"createAndSign",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,this.paymentNumberStore=this.paymentsService.conversionPaymentNumber,!this.conversionForm.invalid&&!this.fromAmountError){e.next=2;break}return e.abrupt("return",void((this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification()));case 2:return this.isSubmitting=!0,t=this.conversionForm.getRawValue(),e.next=6,this.checkIfAllowedToCreate(t.amount);case 6:if(!e.sent){e.next=24;break}return e.prev=7,e.next=10,this.conversionService.createAndSignConversion(t);case 10:this.paymentNumberStore.entity=null,n=this.companyService.currentCompany.signatureScheme===k.k.SINGLE_SIGN&&this.companyService.currentAuthority.authority===k.a.PRIMARY_SIGNATURE?"CONVERSION.CREATE_AND_SIGN.SUCCESS":"CONVERSION.SIGN_ONLY.SUCCESS",this.showSuccessModal(n,!0),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),(i=this.handleError(e.t0))&&this.showCreateAndSignError(i);case 19:return e.prev=19,this.isSubmitting=!1,e.finish(19);case 22:e.next=25;break;case 24:this.isSubmitting=!1;case 25:case"end":return e.stop()}}),e,this,[[7,15,19,22]])})))}},{key:"checkIfAllowedToCreate",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.paymentsApiService.checkAmountLimit(e,k.j.CONVERSION);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))}},{key:"edit",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,!this.conversionForm.invalid){e.next=4;break}(this.hasAccountFromRateError||this.hasAccountToRateError)&&this.showRateNotLoadedNotification(),e.next=17;break;case 4:return this.isSubmitting=!0,e.prev=5,e.next=8,this.conversionService.saveEditedConversion(this.conversionForm.value,this.originalPayment);case 8:this.showSuccessModal("CONVERSION.EDIT.SUCCESS"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),e.t0.code==C.a.RATE_CHANGED?(this.showErrorNotification(e.t0),this.updateRate()):this.showEditError(this.mapError(e.t0));case 14:return e.prev=14,this.isSubmitting=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[5,11,14,17]])})))}},{key:"loadRepeatConversion",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.conversionService.getConversionById(e),this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:n=t.sent,i=_slicedToArray(n,1),r=i[0],this.loadConversionFromPayment(r),this.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"loadEditConversion",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.conversionService.getConversionById(e),this.retrievePurposeList(),this.retrieveAccounts()]);case 3:n=t.sent,i=_slicedToArray(n,1),r=i[0],this.f.documentNumber.setValue(r.details.documentId),this.loadConversionFromPayment(r),this.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"listenDescription",value:function(){var e=this;this.f.description.valueChanges.subscribe((function(t){e.descriptionLengthMessage$.next("".concat(t.length,"/").concat(e.descriptionMaxLength))}))}},{key:"showRateNotLoadedNotification",value:function(){var e=this.translateService.instant("CONVERSION.RATE_NOT_LOADED");this.notifierService.hideAll(),this.notifierService.notify("default",e)}},{key:"showErrorNotification",value:function(e){if(e.code===C.a.RATE_CHANGED){var t=this.translateService.instant("CONVERSION.RATE_CHANGED");this.notifierService.hideAll(),this.notifierService.notify("default",t)}}},{key:"loadConversionFromPayment",value:function(e){this.originalPayment=e,this.selectFromAccountByIban(e.details.payerIban),this.selectToAccountByIban(e.paymentRecipient.recipientAccount.iban),this.selectPurposeByCode(e.details.conversionPurpose.code);var t=this.maskedService.getMaskedAmount(e.details.paymentAmount.amount,this.curSymbolPipe.transform(e.details.paymentAmount.currency));this.f.fromAmount.patchValue(t),this.f.description.patchValue(e.details.description)}},{key:"getPermission",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authorityPermissionsService.isRestricted(k.j.CONVERSION);case 2:this.isRestricted=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"loadNewConversion",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,Promise.all([this.retrievePurposeList(),this.retrieveAccounts(),this.setAutoNumeration()]);case 3:this.isLoading=!1;case 4:case"end":return e.stop()}}),e,this)})))}},{key:"selectPurposeByCode",value:function(e){var t=this.purposeList.find((function(t){return t.code==e}));this.onPurposeSelect(t),this.purposeDropdown.selectItem(t)}},{key:"selectToAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectToAccount(t),this.toDropdown.selectAccount(t)}},{key:"selectFromAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectFromAccount(t),this.fromDropdown.selectAccount(t)}},{key:"listenFromAmount",value:function(){var e=this,t=this.f.fromAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(t){t&&e.recalculateToAmount()}));this.subscription.add(t)}},{key:"listenToAmount",value:function(){var e=this,t=this.f.toAmount.valueChanges.pipe(Object(R.a)(500)).subscribe((function(t){t&&e.recalculateFromAmount()}));this.subscription.add(t)}},{key:"applyTwoAccountsRule",value:function(){if(2==this.accounts.length&&this.accounts[0].balance.currency!=this.accounts[1].balance.currency){var e=this.accounts.filter((function(e){return e.balance.currency===E.a.KZT})),t=e.length?e[0]:this.accounts[0];this.selectFromAccount(t),this.fromDropdown.selectAccount(t),this.applySelectFromCompanionRule(t)}}},{key:"applySelectToCompanionRule",value:function(e){var t;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var n=this.findUnselectedAccount(e);this.selectFromAccount(n),this.fromDropdown.selectAccount(n)}}},{key:"applySelectFromCompanionRule",value:function(e){var t;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var n=this.findUnselectedAccount(e);this.selectToAccount(n),this.toDropdown.selectAccount(n)}}},{key:"applyClearAmountsIfOnlyTwoAccountsRule",value:function(){2==this.accounts.length&&(this.f.fromAmount.setValue(""),this.f.toAmount.setValue(""))}},{key:"findUnselectedAccount",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t!=e}))}},{key:"findAccountByIban",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t.iban==e}))}},{key:"setAutoNumeration",value:function(){var e=this;this.subscription.add(this.paymentsService.conversionPaymentNumber$.subscribe((function(t){e.f.documentNumber.setValue(t)})))}},{key:"selectToAccount",value:function(e){var t;this.toCurrency=null===(t=e.balance)||void 0===t?void 0:t.currency,this.f.to.setValue(e)}},{key:"selectFromAccount",value:function(e){var t;this.fromCurrency=null===(t=e.balance)||void 0===t?void 0:t.currency,this.f.from.setValue(e)}},{key:"clearToAccount",value:function(){var e;this.toCurrency=null,this.f.to.setValue(null),null===(e=this.toDropdown)||void 0===e||e.clearSelected()}},{key:"clearFromAccount",value:function(){var e;this.fromCurrency=null,this.f.from.setValue(null),null===(e=this.fromDropdown)||void 0===e||e.clearSelected()}},{key:"applyClearOnFromSelectedRule",value:function(e){e==this.f.to.value&&this.clearToAccount()}},{key:"applyClearOnToSelectedRule",value:function(e){e==this.f.from.value&&this.clearFromAccount()}},{key:"recalculateAmount",value:function(e){var t=this,n=e.source,i=e.target,r=e.sourceCurrency,o=e.targetCurrency,c=e.errorStateKey;if(this.fromCurrency&&this.toCurrency&&n.value){this.rateSubscription&&this.rateSubscription.unsubscribe(),i.disable({emitEvent:!1}),this.hasAccountToRateError=!1,this.hasAccountFromRateError=!1,this.isRateLoading=!0,this.rateErrorDescription="",this.rateFrom=null,this.rateTo=null;var s=this.maskedService.getNumberedAmount(n.value);this.rateSubscription=this.conversionService.getRateObservable({currencyFrom:this.fromCurrency,currencyTo:this.toCurrency,sum:{amount:s,currency:r}}).subscribe((function(e){t.f.rate.setValue(e),t.rateFrom=e.equation.from,t.rateTo=e.equation.to;var n=t.maskedService.getMaskedAmount(e.calculatedSum,t.curSymbolPipe.transform(o));i.patchValue(n,{emitEvent:!1}),i.enable({emitEvent:!1}),t.recalculateCommission(),t.isRateLoading=!1,t.rateSubscription=null}),(function(e){e.code===be.RATE_NOT_LOADED&&(t.rateErrorDescription=e.description),i.patchValue("",{emitEvent:!1}),i.enable({emitEvent:!1}),t[c]=!0,t.isRateLoading=!1,t.rateSubscription=null}))}}},{key:"recalculateToAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recalculateAmount({source:this.f.fromAmount,target:this.f.toAmount,sourceCurrency:this.fromCurrency,targetCurrency:this.toCurrency,errorStateKey:"hasAccountToRateError"});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"recalculateFromAmount",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recalculateAmount({source:this.f.toAmount,target:this.f.fromAmount,sourceCurrency:this.toCurrency,targetCurrency:this.fromCurrency,errorStateKey:"hasAccountFromRateError"});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"recalculateCommission",value:function(){var e;return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.conversionService.getCommission(this.conversionForm.getRawValue());case 3:this.commission=t.sent,this.f.commission.setValue(this.commission),this.isCommissionAccountSelectable=(null===(e=this.commission)||void 0===e?void 0:e.amount)>0,this.isCommissionAccountSelectable&&void 0===this.commissionAccountDropdown.selectedAccount&&this.setSelectedDefaultCommissionAccount(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.commission=null;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"setSelectedDefaultCommissionAccount",value:function(){var e,t,n;1==this.accounts.length&&(null===(e=this.commissionAccountDropdown)||void 0===e||e.selectAccount(this.accounts[0]),this.onCommissionAccountSelect(this.accounts[0]));var i=this.accounts.filter((function(e){return e.balance.currency===E.a.KZT}));1==(null===(t=i)||void 0===t?void 0:t.length)&&(null===(n=this.commissionAccountDropdown)||void 0===n||n.selectAccount(i[0]),this.onCommissionAccountSelect(i[0]))}},{key:"showCreateError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE.ERROR",e);case 3:this.createOnly(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showCreateAndSignError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",e);case 3:this.createAndSign(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showEditError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.EDIT.ERROR",e);case 3:this.edit(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showSuccessModal",value:function(e){var t,n,i,r,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function c(){var s,a,u;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return(s=this.modalService.open(T,he)).componentInstance.description=e,a=this.maskedService.getNumberedAmount(this.f.fromAmount.value),u=this.maskedService.getNumberedAmount(this.f.toAmount.value),s.componentInstance.fromBalance={amount:a,currency:null===(n=null===(t=this.f.from.value)||void 0===t?void 0:t.balance)||void 0===n?void 0:n.currency},s.componentInstance.toBalance={amount:u,currency:null===(r=null===(i=this.f.to.value)||void 0===i?void 0:i.balance)||void 0===r?void 0:r.currency},c.prev=4,c.next=7,s.result;case 7:this.navigateToHistory(o),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(4),this.navigateToHome();case 13:case"end":return c.stop()}}),c,this,[[4,10]])})))}},{key:"showErrorModal",value:function(e,t){var n=this.modalService.open(V,he);return n.componentInstance.description=e,n.componentInstance.errorText=t,n.result}},{key:"navigateToHome",value:function(){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.router.navigate(["/"])}},{key:"navigateToHistory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges();var t=_.d.FOR_SIGN;e&&this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()&&(t=_.d.IN_PROGRESS),this.router.navigate(["/history/conversion"],{queryParams:{paymentStatus:t}})}},{key:"handleError",value:function(e){if(e)return e.code!=C.a.RATE_CHANGED?(this.paymentNumberStore.entity=this.f.documentNumber.value,this.mapError(e)):(this.showErrorNotification(e),void this.updateRate())}},{key:"mapError",value:function(e){var t,n="";if(null===(t=e)||void 0===t?void 0:t.data){var i=0;for(var r in e.data)Object.prototype.hasOwnProperty.call(e.data,r)&&(i++>0&&(n+="<br>"),n+="".concat(e.data[r]))}else n=e.description||e.code||e;return n}},{key:"f",get:function(){return this.conversionForm.controls}},{key:"fromAccounts",get:function(){return this.toCurrency===E.a.KZT?this.accounts.filter((function(e){return e.balance.currency!==E.a.KZT})):this.accounts}},{key:"toAccounts",get:function(){return this.fromCurrency===E.a.KZT?this.accounts.filter((function(e){return e.balance.currency!==E.a.KZT})):this.accounts}},{key:"canSendAndSign",get:function(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}},{key:"canSendOnly",get:function(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}},{key:"isRateShown",get:function(){return this.rateFrom&&this.rateTo||this.isRateLoading}},{key:"fromAmountError",get:function(){var e,t;return this.f.fromAmount.value&&this.maskedService.getNumberedAmount(this.f.fromAmount.value)>(null===(t=null===(e=this.f.from.value)||void 0===e?void 0:e.balance)||void 0===t?void 0:t.amount)?"ERRORS.NOT_ENOUGH_AMOUNT":null}}]),e}()).\u0275fac=function(e){return new(e||me)(h.Qb(x.a),h.Qb(u.c),h.Qb(L.c),h.Qb(D.a),h.Qb(j.a),h.Qb(P.c),h.Qb(w.q),h.Qb(m.c),h.Qb(m.a),h.Qb(M.c),h.Qb(s.e),h.Qb(b.a),h.Qb(W.c),h.Qb(F.c))},me.\u0275cmp=h.Kb({type:me,selectors:[["j-conversion-form"]],viewQuery:function(e,t){var n;1&e&&(h.Yc(q,!0),h.Yc(Y,!0),h.Yc(X,!0),h.Yc(J,!0)),2&e&&(h.Ec(n=h.jc())&&(t.fromDropdown=n.first),h.Ec(n=h.jc())&&(t.toDropdown=n.first),h.Ec(n=h.jc())&&(t.purposeDropdown=n.first),h.Ec(n=h.jc())&&(t.commissionAccountDropdown=n.first))},decls:2,vars:2,consts:[["label","PAYMENTS.RESTRICTED_PLACEHOLDER",4,"ngIf"],[4,"ngIf"],["label","PAYMENTS.RESTRICTED_PLACEHOLDER"],[1,"conversion",3,"formGroup"],[1,"conversion__main"],[1,"conversion__from"],["translate","",1,"mb-3"],[1,"form-group"],["label","CONVERSION.FROM.LABEL",3,"hasError","isLoading","accounts","isDisabledSelectable","selected"],["fromDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","errorText","isDisabled","currency"],[1,"conversion__arrows"],[3,"disabled","inlineSVG","click"],[1,"conversion__to"],["label","CONVERSION.TO.LABEL",3,"isLoading","hasError","accounts","isDisabledSelectable","selected"],["toDropdown",""],["label","CONVERSION.AMOUNT",3,"hasError","formControl","isDisabled","currency"],[1,"conversion__rates"],[1,"p3","text-muted"],["translate",""],[3,"money",4,"ngIf"],[3,"translate",4,"ngIf"],["class","d-inline-flex align-items-center",4,"ngIf"],["class","p3 text-muted mt-2",4,"ngIf"],[1,"conversion__details"],[1,"conversion__details-row"],["label","CONVERSION.DETAILS.DOCUMENT_NUMBER",3,"formControl","hasError","isClearable"],["label","CONVERSION.DETAILS.PURPOSE",3,"options","hasError","selected"],["purposeDropdown",""],["selectedTemplate",""],["optionTemplate",""],[1,"form-group",3,"hidden"],["label","CONVERSION.COMMISSION_ACCOUNT",3,"isLoading","accounts","isDisabledSelectable","selected"],["commissionAccountDropdown",""],["label","CONVERSION.DETAILS.DESCRIPTION","type","textarea",3,"inputExtra","formControl","hasError","errorText","maxLength","isClearable"],["class","form-footer",4,"ngIf"],[3,"money"],[3,"translate"],[1,"d-inline-flex","align-items-center"],["translate","",1,"text-muted","conversion__rate-label"],[1,"ml-2","conversion__rate","text-dark",3,"jLoading","jLoadingInverted"],[3,"showAllDecimals","money"],[1,"p3","text-muted","mt-2"],["href","#","translate","",1,"link",3,"click"],[1,"text-truncate"],[1,"py-2"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"jLoadingInverted","disabled","jLoading","click"],["type","button",1,"btn","btn-link",3,"disabled","jLoading","jLoadingInverted","click"],[1,"d-inline-block","mr-2",3,"inlineSVG"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"disabled","jLoading","click"]],template:function(e,t){1&e&&(h.Rc(0,Z,1,0,"j-restricted-placeholder",0),h.Rc(1,ue,49,43,"ng-container",1)),2&e&&(h.uc("ngIf",t.isRestricted),h.Ab(1),h.uc("ngIf",!t.isRestricted))},directives:[r.u,H.a,o.J,o.u,o.l,s.a,B.a,G.a,o.t,o.i,a.a,U.b,K.a,O.a,Q.a],pipes:[r.b,s.d],styles:[".conversion__main[_ngcontent-%COMP%]{padding:1.5rem 0 0}@media(min-width:960px){.conversion__main[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(50% - 24px) 40px calc(50% - 24px);-webkit-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem}}.conversion__arrows[_ngcontent-%COMP%]{margin:1rem auto;text-align:center}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]{margin:5.5rem 0 0}}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;height:40px;outline:0;padding:0;border:0;background:none;box-shadow:none;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]){background:#fff;box-shadow:0 0 1px rgba(0,0,0,.04),0 0 2px rgba(0,0,0,.06),0 4px 8px rgba(0,0,0,.04)}@media(min-width:960px){.conversion__arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.conversion__rate-label[_ngcontent-%COMP%]{font-weight:400}.conversion__rate[_ngcontent-%COMP%]{display:inline-block;position:relative;min-width:30px;height:24px}.conversion__rates[_ngcontent-%COMP%]{text-align:center;padding-bottom:1.5rem}.conversion__details[_ngcontent-%COMP%], .conversion__rates[_ngcontent-%COMP%]{border-bottom:1px solid rgba(183,190,197,.35)}.conversion__details[_ngcontent-%COMP%]{padding:1.5rem 0 .5rem}@media(min-width:960px){.conversion__details-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(35% - 10px) calc(65% - 10px);-webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px}}"]}),me),fe=((le=function(){function e(t,n,i){_classCallCheck(this,e),this.navService=t,this.router=n,this.featureFlagsService=i,this.featureFlagsService.checkFeatureRoute(d.a.CONVERSION)}return _createClass(e,[{key:"onClose",value:function(){this.navService.retrieveLetterBadges(),this.navService.retrieveContractBadges(),this.router.navigate(["/"])}}]),e}()).\u0275fac=function(e){return new(e||le)(h.Qb(b.a),h.Qb(m.c),h.Qb(d.b))},le.\u0275cmp=h.Kb({type:le,selectors:[["j-conversion"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-1 col-lg-10 offset-xl-2 col-xl-8","headerClassList","bg-white",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(e,t){1&e&&(h.Wb(0,"f-page",0),h.ic("closed",(function(e){return t.onClose()})),h.Wb(1,"f-page-header"),h.Wb(2,"section",1),h.Wb(3,"h1",2),h.Tc(4,"CONVERSION.TITLE"),h.Vb(),h.Vb(),h.Vb(),h.Wb(5,"f-page-body"),h.Rb(6,"j-conversion-form"),h.Vb(),h.Vb())},directives:[v.a,f.a,s.a,p.a,ve],styles:["[_nghost-%COMP%]{background:#f6f7f8;display:block}"]}),le),pe=[{path:"",component:fe},{path:":id",component:fe},{path:"**",redirectTo:""}],ge=((de=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:de}),de.\u0275inj=h.Nb({factory:function(e){return new(e||de)},imports:[[m.g.forChild(pe)],m.g]}),de);n.d(t,"ConversionModule",(function(){return Ae}));var ye,Ae=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:ye}),ye.\u0275inj=h.Nb({factory:function(e){return new(e||ye)},imports:[[r.c,o.n,o.D,c.b,s.c,a.b,ge,u.b,l.a]]}),ye)}}]);