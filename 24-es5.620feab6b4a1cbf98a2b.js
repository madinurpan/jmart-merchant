function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{DVvf:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("3Pt+"),a=n("tk/3"),o=n("sYmb"),c=n("xJkR"),s=n("4Nuw"),u=n("PCNd"),l=n("tyNb"),d=n("fXoL"),m=n("bsP8"),f=n("S1F0"),h=n("oKsb"),b=n("fvpk"),v=n("mrSG"),p=n("quSY"),y=n("lJxs"),A=n("TwVa"),S=n("+/Tu"),g=n("zwEd"),R=n("Kd2e"),T=n("1kSV");function k(e,t){if(1&e&&d.Rb(0,"p",10),2&e){var n=d.lc();d.sc("innerHTML",n.errorText,d.Hc)}}var w,C,E,O=((w=function(){function e(t,n){_classCallCheck(this,e),this.modal=t,this.router=n}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.router.navigate(["/transfers"]),this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||w)(d.Qb(T.a),d.Qb(l.c))},w.\u0275cmp=d.Kb({type:w,selectors:[["j-transfer-error"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","/assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Wb(1,"div",1),d.Rb(2,"img",2),d.mc(3,"translate"),d.Wb(4,"h3",3),d.Rc(5,"SHARED.ERROR"),d.Vb(),d.Wb(6,"p",4),d.Wb(7,"span",5),d.Rc(8),d.Vb(),d.Vb(),d.Pc(9,k,1,1,"p",6),d.Vb(),d.Wb(10,"div",7),d.Wb(11,"button",8),d.ic("click",(function(e){return t.closeModal()})),d.Rc(12," SHARED.TRY_AGAIN "),d.Vb(),d.Wb(13,"button",9),d.ic("click",(function(e){return t.dismissModal()})),d.Rc(14," SHARED.BACK_TO_HOME "),d.Vb(),d.Vb()),2&e&&(d.Ab(2),d.tc("alt",d.nc(3,3,"SHARED.ERROR")),d.Ab(6),d.Sc(t.description),d.Ab(1),d.sc("ngIf",t.errorText))},directives:[o.a,r.u],pipes:[o.d],styles:[""]}),w),N=n("Kx/q"),x=((C=function(){function e(t){_classCallCheck(this,e),this.modal=t}return _createClass(e,[{key:"dismissModal",value:function(){this.modal.dismiss()}},{key:"closeModal",value:function(){this.modal.close()}}]),e}()).\u0275fac=function(e){return new(e||C)(d.Qb(T.a))},C.\u0275cmp=d.Kb({type:C,selectors:[["j-transfer-success"]],inputs:{description:"description",totalBalance:"totalBalance"},decls:14,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","/assets/img/history/modals/success.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[3,"money"],["translate","",1,"m-0","text-muted"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Wb(1,"div",1),d.Rb(2,"img",2),d.mc(3,"translate"),d.Wb(4,"h3",3),d.Wb(5,"strong"),d.Rb(6,"j-money",4),d.Vb(),d.Vb(),d.Wb(7,"p",5),d.Rc(8),d.Vb(),d.Vb(),d.Wb(9,"div",6),d.Wb(10,"button",7),d.ic("click",(function(e){return t.closeModal()})),d.Rc(11," TRANSFERS.NAVIGATE_TO_HISTORY "),d.Vb(),d.Wb(12,"button",8),d.ic("click",(function(e){return t.dismissModal()})),d.Rc(13," SHARED.BACK_TO_HOME "),d.Vb(),d.Vb()),2&e&&(d.Ab(2),d.tc("alt",d.nc(3,3,t.description)),d.Ab(4),d.sc("money",t.totalBalance),d.Ab(2),d.Tc(" ",t.description," "))},directives:[o.a,N.a],pipes:[o.d],styles:[""]}),C),I=n("y5b2"),_=n("L+ju"),F=n("+BgI"),P=n("wtV8"),j=n("mR7B"),V=((E=function(){function e(t,n,r){_classCallCheck(this,e),this.paymentsPipelineService=t,this.paymentsApiService=n,this.maskedService=r}return _createClass(e,[{key:"getTransferById",value:function(e){return this.paymentsApiService.getPaymentById(e)}},{key:"saveEditedTransfer",value:function(e,t){return this.paymentsApiService.updatePayment(Object.assign(Object.assign({},t),this.mapTransferOwnPaymentBody(e)),{paymentId:e.id})}},{key:"createOwnTransfer",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",this.paymentsApiService.createPayment(this.mapTransferOwnPaymentBody(e)));case 4:throw t.prev=4,t.t0=t.catch(0),t.t0;case 7:case"end":return t.stop()}}),t,this,[[0,4]])})))}},{key:"createAndSignOwnTransfer",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.createOwnTransfer(e);case 2:return n=t.sent,t.abrupt("return",this.paymentsPipelineService.processPaymentVerify(n));case 4:case"end":return t.stop()}}),t,this)})))}},{key:"mapTransferOwnPaymentBody",value:function(e){var t=A.j.IN_BETWEEN,n=null;e.fromAccount.accountType===_.a.ACCOUNT&&e.toAccount.accountType===_.a.CARD&&(t=A.j.ACCOUNT_TO_CARD),e.fromAccount.accountType===_.a.CARD&&e.toAccount.accountType===_.a.ACCOUNT&&(t=A.j.CARD_TO_ACCOUNT,n=e.fromAccount.accountId),e.fromAccount.accountType===_.a.CARD&&e.toAccount.accountType===_.a.CARD&&(t=A.j.CARD_TO_CARD,n=e.fromAccount.accountId);var r={type:t,category:A.h.DOMESTIC,paymentRecipient:{recipientAccount:{iban:e.to}},details:{payerIban:e.from,paymentAmount:{amount:this.maskedService.getNumberedAmount(e.amount),currency:S.a.KZT},documentId:e.documentNumber,associatedField:{parameters:{payerCardNumber:e.fromAccount.accountType===_.a.CARD?e.fromAccount.cardNumber:null,recipientCardNumber:e.toAccount.accountType===_.a.CARD?e.toAccount.cardNumber:null}}}};return n&&(r.details=Object.assign(Object.assign({},r.details),{payerAccountId:n})),r}},{key:"mapTransferOwnToPayment",value:function(e,t){return t.paymentRecipient.recipientAccount.iban=e.to,t.details.payerIban=e.from,t.details.paymentAmount.amount=this.maskedService.getNumberedAmount(e.amount),t.details.documentId=e.documentNumber,t}}]),e}()).\u0275fac=function(e){return new(e||E)(d.ec(F.a),d.ec(P.a),d.ec(j.a))},E.\u0275prov=d.Mb({token:E,factory:E.\u0275fac,providedIn:"root"}),E),D=n("VnnJ"),L=n("CVrE"),W=n("7rOj"),M=n("+eKG"),B=n("VO+5"),H=n("2A1n"),Q=n("kDIH"),U=n("hsBV"),G=n("9odQ"),K=n("NpBu"),q=["fromDropdown"],X=["toDropdown"],J=function(){return{height:"56px","background-color":"#ECEEF1"}},Y=function(){return{height:"56px",width:"200px","background-color":"#ECEEF1"}};function Z(e,t){1&e&&(d.Ub(0),d.Rb(1,"ngx-skeleton-loader",3),d.Rb(2,"ngx-skeleton-loader",3),d.Rb(3,"ngx-skeleton-loader",3),d.Rb(4,"ngx-skeleton-loader",3),d.Wb(5,"div",4),d.Rb(6,"ngx-skeleton-loader",3),d.Vb(),d.Tb()),2&e&&(d.Ab(1),d.sc("theme",d.wc(5,J)),d.Ab(1),d.sc("theme",d.wc(6,J)),d.Ab(1),d.sc("theme",d.wc(7,J)),d.Ab(1),d.sc("theme",d.wc(8,J)),d.Ab(2),d.sc("theme",d.wc(9,Y)))}function z(e,t){1&e&&d.Rb(0,"j-restricted-placeholder",5)}function $(e,t){if(1&e&&(d.Rb(0,"p",17),d.mc(1,"translate")),2&e){var n=d.lc(2);d.sc("innerHTML",d.oc(1,1,"TRANSFERS.NOT_ENOUGH",n.translateParams),d.Hc)}}function ee(e,t){if(1&e){var n=d.Xb();d.Wb(0,"div",18),d.Wb(1,"button",19),d.ic("click",(function(e){return d.Gc(n),d.lc(2).edit()})),d.Rc(2,"TRANSFERS.SAVE"),d.Vb(),d.Vb()}}function te(e,t){if(1&e){var n=d.Xb();d.Wb(0,"button",19),d.ic("click",(function(e){return d.Gc(n),d.lc(3).createOnly()})),d.Rc(1,"TRANSFERS.FOR_SIGN"),d.Vb()}}function ne(e,t){if(1&e){var n=d.Xb();d.Wb(0,"button",22),d.ic("click",(function(e){return d.Gc(n),d.lc(3).createAndSign()})),d.Rc(1,"TRANSFERS.SIGN"),d.Vb()}}function re(e,t){if(1&e){var n=d.Xb();d.Wb(0,"button",22),d.ic("click",(function(e){return d.Gc(n),d.lc(3).createOnly()})),d.Rc(1,"TRANSFERS.SEND"),d.Vb()}}function ie(e,t){if(1&e&&(d.Wb(0,"div",18),d.Pc(1,te,2,0,"button",20),d.Pc(2,ne,2,0,"button",21),d.Pc(3,re,2,0,"button",21),d.Vb()),2&e){var n=d.lc(2);d.Ab(1),d.sc("ngIf",n.canSendAndSign),d.Ab(1),d.sc("ngIf",n.canSendAndSign),d.Ab(1),d.sc("ngIf",n.canSendOnly)}}function ae(e,t){if(1&e){var n=d.Xb();d.Ub(0),d.Wb(1,"form",6),d.Wb(2,"div",7),d.Wb(3,"j-account-dropdown",8,9),d.ic("selected",(function(e){return d.Gc(n),d.lc().onFromSelect(e)})),d.Vb(),d.Vb(),d.Wb(5,"div",10),d.Wb(6,"j-account-dropdown",11,12),d.ic("selected",(function(e){return d.Gc(n),d.lc().onToSelect(e)})),d.Vb(),d.Vb(),d.Wb(8,"div",10),d.Rb(9,"j-input",13),d.Vb(),d.Wb(10,"div",10),d.Rb(11,"j-amount-input",14),d.Pc(12,$,2,4,"p",15),d.Vb(),d.Pc(13,ee,3,0,"div",16),d.Pc(14,ie,4,3,"div",16),d.Vb(),d.Tb()}if(2&e){var r=d.lc();d.Ab(1),d.sc("formGroup",r.transferForm),d.Ab(2),d.sc("hasError",r.f.from.invalid&&r.isSubmitted)("accounts",r.fromAccounts)("isDisabledSelectable",!1)("isLoading",r.isAccountsLoading)("isFromArrowShown",!0),d.Ab(3),d.sc("hasError",r.f.to.invalid&&r.isSubmitted)("accounts",r.toAccounts)("isLoading",r.isAccountsLoading)("isDisabledSelectable",!0),d.Ab(3),d.sc("hasError",r.f.documentNumber.invalid&&r.isSubmitted)("isClearable",!1)("formControl",r.f.documentNumber),d.Ab(2),d.sc("hasError",r.f.amount.invalid&&r.isSubmitted)("helperText","TRANSFERS.COMMISSION")("helperTextParams",r.commissionParams)("formControl",r.f.amount),d.Ab(1),d.sc("ngIf",r.hasUnsufficientFunds),d.Ab(1),d.sc("ngIf",r.isEditing),d.Ab(1),d.sc("ngIf",!r.isEditing)}}var oe,ce,se,ue=((ce=function(){function e(t,n,r,a,o,c,s,u,l,d,m,f,h,b,v,y,A){_classCallCheck(this,e),this.route=t,this.transfersService=n,this.companyService=r,this.paymentsService=a,this.accountsService=o,this.amountFormatPipe=c,this.modalService=s,this.router=u,this.maskedService=l,this.paymentsApiService=d,this.cardsService=m,this.featureFlagsService=f,this.notifierService=h,this.translateService=b,this.moneyPipe=v,this.navService=y,this.authorityPermissionsService=A,this.isRestricted=!1,this.isSubmitted=!1,this.isLoading=!0,this.repeatPayment=null,this.commissionParams={amount:this.moneyPipe.transform({amount:0,currency:S.a.KZT})},this.subscription=new p.a,this.isAccountsLoading=!0,this.transferForm=new i.k({id:new i.h(""),from:new i.h("",[i.H.required]),fromAccount:new i.h(null),to:new i.h("",[i.H.required]),toAccount:new i.h(null),documentNumber:new i.h("",[i.H.required]),amount:new i.h("",[i.H.required,function(e){var t;return 0==(null===(t=e)||void 0===t?void 0:t.value)?{cantBeZero:!0}:null}])})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.route.params.subscribe((function(t){t.id&&(e.f.id.setValue(t.id),e.isEditing=!0)}));this.subscription.add(t)}},{key:"ngAfterViewInit",value:function(){var e=this;this.getPermission().then((function(){e.isRestricted?e.isLoading=!1:e.initPage()}))}},{key:"initPage",value:function(){var e=this,t=this.route.paramMap.pipe(Object(y.a)((function(){return window.history.state}))).subscribe((function(t){e.isEditing?e.loadEditTransfer(e.f.id.value):t.repeatPaymentId?e.loadRepeatTransfer(t.repeatPaymentId):e.loadNewTransfer()})),n=this.transferForm.valueChanges.subscribe((function(t){e.isSubmitted=!1}));this.subscription.add(t),this.subscription.add(n)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"onFromSelect",value:function(e){e&&(this.selectFromAccount(e),this.applyClearOnFromSelectedRule(e),this.applySelectFromCompanionRule(e))}},{key:"onToSelect",value:function(e){e&&(this.selectToAccount(e),this.applyClearOnToSelectedRule(e),this.applySelectToCompanionRule(e))}},{key:"loadRepeatTransfer",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Promise.all([this.transfersService.getTransferById(e),this.retrieveAccounts()]);case 3:return n=t.sent,this.applyOnlyAccountRule(),r=_slicedToArray(n,1),i=r[0],t.next=9,this.mapRepeatTransferFromPayment(i);case 9:a=t.sent,this.initRepeatTransfer(a),this.setAutoNumeration(),this.isLoading=!1;case 11:case"end":return t.stop()}}),t,this)})))}},{key:"loadEditTransfer",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.transfersService.getTransferById(e);case 3:return this.originalPayment=t.sent,t.next=6,this.mapRepeatTransferFromPayment(this.originalPayment);case 6:return n=t.sent,t.next=9,this.retrieveAccounts();case 9:this.applyOnlyAccountRule(),this.initRepeatTransfer(n),this.isLoading=!1;case 12:case"end":return t.stop()}}),t,this)})))}},{key:"loadNewTransfer",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.retrieveAccounts();case 3:this.setAutoNumeration(),this.isLoading=!1;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"edit",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,this.transferForm.invalid){e.next=10;break}return e.prev=1,e.next=4,this.transfersService.saveEditedTransfer(this.transferForm.value,this.originalPayment);case 4:this.showEditSuccess(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.showEditError(e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})))}},{key:"createOnly",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,!this.transferForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return this.isLoading=!0,t=this.transferForm.getRawValue(),e.next=6,this.checkIfAllowedToCreate(t.amount);case 6:if(e.sent){e.next=8;break}return e.abrupt("return",void(this.isLoading=!1));case 8:return n=this.paymentsService.paymentNumber,e.prev=9,e.next=12,this.transfersService.createOwnTransfer(t);case 12:this.showCreateSuccess(),n.entity=null,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),n.entity=this.f.documentNumber.value,this.showCreateError(e.t0);case 19:return e.prev=19,this.isLoading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[9,16,19,22]])})))}},{key:"createAndSign",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isSubmitted=!0,!this.transferForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return this.isLoading=!0,t=this.transferForm.getRawValue(),e.next=6,this.checkIfAllowedToCreate(t.amount);case 6:if(e.sent){e.next=8;break}return e.abrupt("return",void(this.isLoading=!1));case 8:return n=this.paymentsService.paymentNumber,e.prev=9,e.next=12,this.transfersService.createAndSignOwnTransfer(t);case 12:this.showCreateAndSignSuccess(),n.entity=null,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),n.entity=this.f.documentNumber.value,this.showCreateAndSignError(e.t0);case 19:return e.prev=19,this.isLoading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[9,16,19,22]])})))}},{key:"getPermission",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.authorityPermissionsService.isRestricted(A.j.IN_BETWEEN);case 3:this.isRestricted=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.isRestricted=!1;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"checkIfAllowedToCreate",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.paymentsApiService.checkWorkingTime();case 2:return n=t.sent,t.next=5,this.paymentsApiService.checkAmountLimit(e,A.j.IN_BETWEEN);case 5:return r=t.sent,t.abrupt("return",(console.log(n,r),n&&r));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"mapRepeatTransferFromPayment",value:function(e){var t,n,r,i,a;return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.retrieveAccounts();case 2:return c=null===(t=e.details)||void 0===t?void 0:t.payerIban,o.abrupt("return",(e.type!==A.j.CARD_TO_CARD&&e.type!==A.j.CARD_TO_ACCOUNT||(c=this.fromAccounts.find((function(t){var n;return t.accountType===s.a.CARD&&t.accountId===(null===(n=e.details)||void 0===n?void 0:n.payerAccountId)})).iban),{to:null===(r=null===(n=e.paymentRecipient)||void 0===n?void 0:n.recipientAccount)||void 0===r?void 0:r.iban,toAccount:this.toAccounts.find((function(t){var n,r;return t.iban===(null===(r=null===(n=e.paymentRecipient)||void 0===n?void 0:n.recipientAccount)||void 0===r?void 0:r.iban)})),from:c,fromAccount:this.fromAccounts.find((function(e){return e.iban===c})),documentNumber:null===(i=e.details)||void 0===i?void 0:i.documentId,amount:null===(a=e.details)||void 0===a?void 0:a.paymentAmount.amount}));case 4:case"end":return o.stop()}}),o,this)})))}},{key:"initRepeatTransfer",value:function(e){e&&(this.selectToAccountByIban(e.to),this.selectFromAccountByIban(e.from),this.f.documentNumber.setValue(e.documentNumber),this.f.amount.setValue(this.maskedService.getMaskedAmount(e.amount)))}},{key:"applySelectToCompanionRule",value:function(e){var t,n;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var r=this.findUnselectedAccount(e);this.selectFromAccount(r),null===(n=this.fromDropdown)||void 0===n||n.selectAccount(r)}}},{key:"applySelectFromCompanionRule",value:function(e){var t,n;if(2==(null===(t=this.accounts)||void 0===t?void 0:t.length)){var r=this.findUnselectedAccount(e);this.selectToAccount(r),null===(n=this.toDropdown)||void 0===n||n.selectAccount(r)}}},{key:"findUnselectedAccount",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t!=e}))}},{key:"findAccountByIban",value:function(e){var t;return null===(t=this.accounts)||void 0===t?void 0:t.find((function(t){return t.iban==e}))}},{key:"applyClearOnFromSelectedRule",value:function(e){var t,n=e==this.to,r=e.iban==(null===(t=this.to)||void 0===t?void 0:t.iban)&&!n;(n||r)&&this.clearToAccount(),r&&this.notifierService.notify("default",this.translateService.instant("TRANSFERS.SAME_IBANS_NOTIFICATION"))}},{key:"applyClearOnToSelectedRule",value:function(e){var t,n=e==this.from,r=e.iban==(null===(t=this.from)||void 0===t?void 0:t.iban)&&!n;(n||r)&&this.clearFromAccount(),r&&this.notifierService.notify("default",this.translateService.instant("TRANSFERS.SAME_IBANS_NOTIFICATION"))}},{key:"applyOnlyAccountRule",value:function(){var e;if(1==(null===(e=this.accounts)||void 0===e?void 0:e.length)){var t=this.accounts[0];t.isLocked||t.hasLockedState?(this.selectToAccount(t),this.toDropdown.selectAccount(t)):(this.selectFromAccount(t),this.fromDropdown.selectAccount(t))}}},{key:"selectToAccount",value:function(e){var t;this.to=e,this.f.to.setValue(null===(t=this.to)||void 0===t?void 0:t.iban),this.f.toAccount.setValue(this.to)}},{key:"selectFromAccount",value:function(e){var t;this.from=e,this.f.from.setValue(null===(t=this.from)||void 0===t?void 0:t.iban),this.f.fromAccount.setValue(this.from)}},{key:"selectToAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectToAccount(t),this.toDropdown.selectAccount(t)}},{key:"selectFromAccountByIban",value:function(e){var t=this.findAccountByIban(e);this.selectFromAccount(t),this.fromDropdown.selectAccount(t)}},{key:"clearToAccount",value:function(){var e;this.to=null,this.f.to.setValue(null),null===(e=this.toDropdown)||void 0===e||e.clearSelected()}},{key:"clearFromAccount",value:function(){var e;this.from=null,this.f.from.setValue(null),null===(e=this.fromDropdown)||void 0===e||e.clearSelected()}},{key:"retrieveAccounts",value:function(){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isAccountsLoading=!0,e.prev=1,e.next=4,Promise.all([this.accountsService.retrieveAccounts().catch((function(){return[]})),this.cardsService.getCorporateCards().catch((function(){return[]})),this.featureFlagsService.featureFlags$.toPromise()]);case 4:t=e.sent,n=_slicedToArray(t,2),r=n[0],i=n[1],a=r.filter((function(e){return e.balance.currency===S.a.KZT&&e.accountType===s.a.ACCOUNT})),o=i.filter((function(e){return e.balance.currency===S.a.KZT})),this.accounts=this.featureFlagsService.isDisabled(R.a.CARD_TRANSFERS)?a||[]:[].concat(_toConsumableArray(a||[]),_toConsumableArray(o||[])),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:return e.prev=15,this.isAccountsLoading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,13,15,18]])})))}},{key:"showEditSuccess",value:function(){var e=parseFloat(this.maskedService.getUnmaskedAmount(this.f.amount.value));this.showSuccessModal("TRANSFERS.EDIT.SUCCESS",e)}},{key:"showEditError",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.EDIT.ERROR",e);case 3:this.edit(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showCreateSuccess",value:function(){var e=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE.SUCCESS",e)}},{key:"showCreateError",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE.ERROR",e);case 3:this.createOnly(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showCreateAndSignSuccess",value:function(){var e=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE_AND_SIGN.SUCCESS",e,!0)}},{key:"showCreateAndSignError",value:function(e){return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",e);case 3:this.createAndSign(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.navigateToHome();case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"showSuccessModal",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(v.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=this.modalService.open(x,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0})).componentInstance.description=e,i.componentInstance.totalBalance={amount:t,currency:S.a.KZT},r.prev=2,r.next=5,i.result;case 5:this.navigateToHistory(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),this.navigateToHome();case 11:case"end":return r.stop()}}),r,this,[[2,8]])})))}},{key:"showErrorModal",value:function(e,t){var n,r=this.modalService.open(O,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0});return r.componentInstance.description=e,r.componentInstance.errorText=this.mapErrors(null===(n=t)||void 0===n?void 0:n.data)||t,r.result}},{key:"mapErrors",value:function(e){for(var t="",n=0,r=Object.entries(e);n<r.length;n++){var i=_slicedToArray(r[n],2);i[0],t+=i[1]+"<br>"}return t||null}},{key:"setAutoNumeration",value:function(){var e=this;this.subscription.add(this.paymentsService.paymentNumber$.subscribe((function(t){e.f.documentNumber.setValue(t)})))}},{key:"navigateToHome",value:function(){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.router.navigate(["/"])}},{key:"navigateToHistory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=I.c.FOR_SIGN;this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),e&&this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()&&(t=I.c.IN_PROGRESS),this.router.navigate(["/history/tenge"],{queryParams:{paymentStatus:t}})}},{key:"fromAccounts",get:function(){var e;return null===(e=this.accounts)||void 0===e?void 0:e.filter((function(e){return!(e.accountType===s.a.CARD&&e.category===g.a.PRIVATE)}))}},{key:"toAccounts",get:function(){return this.accounts}},{key:"canSendAndSign",get:function(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}},{key:"canSendOnly",get:function(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}},{key:"f",get:function(){return this.transferForm.controls}},{key:"translateParams",get:function(){return{amount:this.amountFormatPipe.transform(this.amountDelta)}}},{key:"hasUnsufficientFunds",get:function(){return this.amountDelta>0}},{key:"amountDelta",get:function(){var e,t,n=this.transferForm.getRawValue().amount;return this.maskedService.getNumberedAmount(n)-(null===(t=null===(e=this.from)||void 0===e?void 0:e.balance)||void 0===t?void 0:t.amount)}}]),e}()).\u0275fac=function(e){return new(e||ce)(d.Qb(l.a),d.Qb(V),d.Qb(D.a),d.Qb(L.g),d.Qb(s.c),d.Qb(W.a),d.Qb(T.q),d.Qb(l.c),d.Qb(j.a),d.Qb(L.c),d.Qb(M.a),d.Qb(R.b),d.Qb(B.c),d.Qb(o.e),d.Qb(W.e),d.Qb(m.a),d.Qb(H.c))},ce.\u0275cmp=d.Kb({type:ce,selectors:[["j-transfers-own"]],viewQuery:function(e,t){var n;1&e&&(d.Wc(q,!0),d.Wc(X,!0)),2&e&&(d.Cc(n=d.jc())&&(t.fromDropdown=n.first),d.Cc(n=d.jc())&&(t.toDropdown=n.first))},decls:4,vars:4,consts:[[4,"ngIf"],[3,"hidden"],["label","PAYMENTS.RESTRICTED_PLACEHOLDER",4,"ngIf"],[3,"theme"],[1,"d-flex","justify-content-end"],["label","PAYMENTS.RESTRICTED_PLACEHOLDER"],[3,"formGroup"],[1,"form-group","form-from"],["label","TRANSFERS.FROM",3,"hasError","accounts","isDisabledSelectable","isLoading","isFromArrowShown","selected"],["fromDropdown",""],[1,"form-group"],["label","TRANSFERS.TO",3,"hasError","accounts","isLoading","isDisabledSelectable","selected"],["toDropdown",""],["label","TRANSFERS.DOCUMENT_NUMBER",3,"hasError","isClearable","formControl"],["label","TRANSFERS.AMOUNT",3,"hasError","helperText","helperTextParams","formControl"],["class","text-muted p3",3,"innerHTML",4,"ngIf"],["class","form-footer",4,"ngIf"],[1,"text-muted","p3",3,"innerHTML"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"click"],["type","button","class","btn btn-outline-primary","translate","",3,"click",4,"ngIf"],["type","submit","class","btn btn-primary ml-3","translate","",3,"click",4,"ngIf"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"click"]],template:function(e,t){1&e&&(d.Pc(0,Z,7,10,"ng-container",0),d.Wb(1,"section",1),d.Pc(2,z,1,0,"j-restricted-placeholder",2),d.Pc(3,ae,15,20,"ng-container",0),d.Vb()),2&e&&(d.sc("ngIf",t.isLoading),d.Ab(1),d.sc("hidden",t.isLoading),d.Ab(1),d.sc("ngIf",t.isRestricted),d.Ab(1),d.sc("ngIf",!t.isRestricted))},directives:[r.u,c.a,Q.a,i.J,i.u,i.l,U.a,G.b,i.t,i.i,K.a,o.a],pipes:[o.d],styles:[".form-footer[_ngcontent-%COMP%]{border-top:1px solid rgba(183,190,197,.5);display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-top:1.5rem;padding-top:1.5rem}.form-from[_ngcontent-%COMP%]{position:relative;z-index:5}"]}),ce),le=((oe=function(){function e(t,n){_classCallCheck(this,e),this.router=t,this.navService=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.navService.retrieveLetterBadges(),this.navService.retrieveContractBadges(),this.router.navigate(["/"])}}]),e}()).\u0275fac=function(e){return new(e||oe)(d.Qb(l.c),d.Qb(m.a))},oe.\u0275cmp=d.Kb({type:oe,selectors:[["j-transfers"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-2 col-lg-8 offset-xl-3 col-xl-6",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(e,t){1&e&&(d.Wb(0,"f-page",0),d.ic("closed",(function(e){return t.onClose()})),d.Wb(1,"f-page-header"),d.Wb(2,"section",1),d.Wb(3,"h1",2),d.Rc(4,"TRANSFERS.TITLE"),d.Vb(),d.Vb(),d.Vb(),d.Wb(5,"f-page-body"),d.Rb(6,"j-transfers-own"),d.Vb(),d.Vb())},directives:[f.a,h.a,o.a,b.a,ue],styles:[""]}),oe),de=[{path:"",component:le,data:{title:"TRANSFERS.TITLE"}},{path:":id",component:le},{path:"**",redirectTo:""}],me=((se=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:se}),se.\u0275inj=d.Nb({factory:function(e){return new(e||se)},imports:[[l.g.forChild(de)],l.g]}),se);n.d(t,"TransfersModule",(function(){return he}));var fe,he=((fe=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ob({type:fe}),fe.\u0275inj=d.Nb({factory:function(e){return new(e||fe)},imports:[[r.c,i.n,i.D,a.d,c.b,me,s.b,u.a,o.c]]}),fe)}}]);