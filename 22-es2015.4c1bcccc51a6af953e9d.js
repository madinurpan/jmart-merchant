(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{DVvf:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("3Pt+"),r=n("tk/3"),s=n("sYmb"),c=n("xJkR"),a=n("4Nuw"),u=n("PCNd"),l=n("tyNb"),d=n("fXoL"),m=n("bsP8"),h=n("S1F0"),b=n("oKsb"),f=n("fvpk"),p=n("mrSG"),v=n("quSY"),y=n("lJxs"),S=n("TwVa"),A=n("+/Tu"),g=n("zwEd"),T=n("Kd2e"),R=n("1kSV");function E(t,e){if(1&t&&d.Rb(0,"p",10),2&t){const t=d.mc();d.uc("innerHTML",t.errorText,d.Jc)}}let w=(()=>{class t{constructor(t){this.modal=t}dismissModal(){this.modal.dismiss()}closeModal(){this.modal.close()}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(R.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["j-transfer-error"]],inputs:{description:"description",errorText:"errorText"},decls:15,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","px-4","pt-0","pb-4","text-center"],["src","/assets/img/history/modals/error.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[1,"m-0","text-muted"],["translate",""],["class","mt-3 mb-0 text-danger",3,"innerHTML",4,"ngIf"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"],[1,"mt-3","mb-0","text-danger",3,"innerHTML"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Wb(1,"div",1),d.Rb(2,"img",2),d.nc(3,"translate"),d.Wb(4,"h3",3),d.Tc(5,"SHARED.ERROR"),d.Vb(),d.Wb(6,"p",4),d.Wb(7,"span",5),d.Tc(8),d.Vb(),d.Vb(),d.Rc(9,E,1,1,"p",6),d.Vb(),d.Wb(10,"div",7),d.Wb(11,"button",8),d.ic("click",(function(t){return e.closeModal()})),d.Tc(12," SHARED.TRY_AGAIN "),d.Vb(),d.Wb(13,"button",9),d.ic("click",(function(t){return e.dismissModal()})),d.Tc(14," SHARED.BACK_TO_HOME "),d.Vb(),d.Vb()),2&t&&(d.Ab(2),d.vc("alt",d.oc(3,3,"SHARED.ERROR")),d.Ab(6),d.Uc(e.description),d.Ab(1),d.uc("ngIf",e.errorText))},directives:[s.a,i.u],pipes:[s.d],styles:[""]}),t})();var C=n("Kx/q");let O=(()=>{class t{constructor(t){this.modal=t}dismissModal(){this.modal.dismiss()}closeModal(){this.modal.close()}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(R.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["j-transfer-success"]],inputs:{description:"description",totalBalance:"totalBalance"},decls:14,vars:5,consts:[[1,"modal-header","j-modal-header"],[1,"modal-body","j-modal-body","text-center","pb-4"],["src","/assets/img/history/modals/success.svg",3,"alt"],["translate","",1,"light","mb-3","mt-2"],[3,"money"],["translate","",1,"m-0","text-muted"],[1,"modal-footer","py-4","px-3","justify-content-center"],["translate","","type","button",1,"btn","btn-primary","btn-block","mb-3",3,"click"],["translate","","type","button",1,"btn","btn-static","btn-link","m-0",3,"click"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Wb(1,"div",1),d.Rb(2,"img",2),d.nc(3,"translate"),d.Wb(4,"h3",3),d.Wb(5,"strong"),d.Rb(6,"j-money",4),d.Vb(),d.Vb(),d.Wb(7,"p",5),d.Tc(8),d.Vb(),d.Vb(),d.Wb(9,"div",6),d.Wb(10,"button",7),d.ic("click",(function(t){return e.closeModal()})),d.Tc(11," TRANSFERS.NAVIGATE_TO_HISTORY "),d.Vb(),d.Wb(12,"button",8),d.ic("click",(function(t){return e.dismissModal()})),d.Tc(13," SHARED.BACK_TO_HOME "),d.Vb(),d.Vb()),2&t&&(d.Ab(2),d.vc("alt",d.oc(3,3,e.description)),d.Ab(4),d.uc("money",e.totalBalance),d.Ab(2),d.Vc(" ",e.description," "))},directives:[s.a,C.a],pipes:[s.d],styles:[""]}),t})();var N=n("y5b2"),I=n("L+ju"),F=n("+BgI"),k=n("wtV8"),V=n("mR7B");let D=(()=>{class t{constructor(t,e,n){this.paymentsPipelineService=t,this.paymentsApiService=e,this.maskedService=n}getTransferById(t){return this.paymentsApiService.getPaymentById(t)}saveEditedTransfer(t,e){return this.paymentsApiService.updatePayment(Object.assign(Object.assign({},e),this.mapTransferOwnPaymentBody(t)),{paymentId:t.id})}createOwnTransfer(t){return Object(p.a)(this,void 0,void 0,(function*(){try{return this.paymentsApiService.createPayment(this.mapTransferOwnPaymentBody(t))}catch(e){throw e}}))}createAndSignOwnTransfer(t){return Object(p.a)(this,void 0,void 0,(function*(){const e=yield this.createOwnTransfer(t);return this.paymentsPipelineService.processPaymentVerify(e)}))}mapTransferOwnPaymentBody(t){let e=S.i.IN_BETWEEN,n=null;t.fromAccount.accountType===I.a.ACCOUNT&&t.toAccount.accountType===I.a.CARD&&(e=S.i.ACCOUNT_TO_CARD),t.fromAccount.accountType===I.a.CARD&&t.toAccount.accountType===I.a.ACCOUNT&&(e=S.i.CARD_TO_ACCOUNT,n=t.fromAccount.accountId),t.fromAccount.accountType===I.a.CARD&&t.toAccount.accountType===I.a.CARD&&(e=S.i.CARD_TO_CARD,n=t.fromAccount.accountId);let i={type:e,category:S.g.DOMESTIC,paymentRecipient:{recipientAccount:{iban:t.to}},details:{payerIban:t.from,paymentAmount:{amount:this.maskedService.getNumberedAmount(t.amount),currency:A.a.KZT},documentId:t.documentNumber,associatedField:{parameters:{payerCardNumber:t.fromAccount.accountType===I.a.CARD?t.fromAccount.cardNumber:null,recipientCardNumber:t.toAccount.accountType===I.a.CARD?t.toAccount.cardNumber:null}}}};return n&&(i.details=Object.assign(Object.assign({},i.details),{payerAccountId:n})),i}mapTransferOwnToPayment(t,e){return e.paymentRecipient.recipientAccount.iban=t.to,e.details.payerIban=t.from,e.details.paymentAmount.amount=this.maskedService.getNumberedAmount(t.amount),e.details.documentId=t.documentNumber,e}}return t.\u0275fac=function(e){return new(e||t)(d.ec(F.a),d.ec(k.a),d.ec(V.a))},t.\u0275prov=d.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=n("VnnJ"),j=n("CVrE"),L=n("7rOj"),x=n("+eKG"),M=n("VO+5"),_=n("hsBV"),W=n("9odQ"),B=n("NpBu");const H=["fromDropdown"],Q=["toDropdown"],U=function(){return{height:"56px","background-color":"#ECEEF1"}},K=function(){return{height:"56px",width:"200px","background-color":"#ECEEF1"}};function G(t,e){1&t&&(d.Ub(0),d.Rb(1,"ngx-skeleton-loader",12),d.Rb(2,"ngx-skeleton-loader",12),d.Rb(3,"ngx-skeleton-loader",12),d.Rb(4,"ngx-skeleton-loader",12),d.Wb(5,"div",13),d.Rb(6,"ngx-skeleton-loader",12),d.Vb(),d.Tb()),2&t&&(d.Ab(1),d.uc("theme",d.yc(5,U)),d.Ab(1),d.uc("theme",d.yc(6,U)),d.Ab(1),d.uc("theme",d.yc(7,U)),d.Ab(1),d.uc("theme",d.yc(8,U)),d.Ab(2),d.uc("theme",d.yc(9,K)))}function q(t,e){if(1&t&&(d.Rb(0,"p",14),d.nc(1,"translate")),2&t){const t=d.mc();d.uc("innerHTML",d.pc(1,1,"TRANSFERS.NOT_ENOUGH",t.translateParams),d.Jc)}}function J(t,e){if(1&t){const t=d.Xb();d.Wb(0,"div",15),d.Wb(1,"button",16),d.ic("click",(function(e){return d.Ic(t),d.mc().edit()})),d.Tc(2,"TRANSFERS.SAVE"),d.Vb(),d.Vb()}}function X(t,e){if(1&t){const t=d.Xb();d.Wb(0,"button",16),d.ic("click",(function(e){return d.Ic(t),d.mc(2).createOnly()})),d.Tc(1,"TRANSFERS.FOR_SIGN"),d.Vb()}}function Y(t,e){if(1&t){const t=d.Xb();d.Wb(0,"button",19),d.ic("click",(function(e){return d.Ic(t),d.mc(2).createAndSign()})),d.Tc(1,"TRANSFERS.SIGN"),d.Vb()}}function Z(t,e){if(1&t){const t=d.Xb();d.Wb(0,"button",19),d.ic("click",(function(e){return d.Ic(t),d.mc(2).createOnly()})),d.Tc(1,"TRANSFERS.SEND"),d.Vb()}}function z(t,e){if(1&t&&(d.Wb(0,"div",15),d.Rc(1,X,2,0,"button",17),d.Rc(2,Y,2,0,"button",18),d.Rc(3,Z,2,0,"button",18),d.Vb()),2&t){const t=d.mc();d.Ab(1),d.uc("ngIf",t.canSendAndSign),d.Ab(1),d.uc("ngIf",t.canSendAndSign),d.Ab(1),d.uc("ngIf",t.canSendOnly)}}let $=(()=>{class t{constructor(t,e,n,i,r,s,c,a,u,l,d,m,h,b,f,p){this.route=t,this.transfersService=e,this.companyService=n,this.paymentsService=i,this.accountsService=r,this.amountFormatPipe=s,this.modalService=c,this.router=a,this.maskedService=u,this.paymentsApiService=l,this.cardsService=d,this.featureFlagsService=m,this.notifierService=h,this.translateService=b,this.moneyPipe=f,this.navService=p,this.isSubmitted=!1,this.isLoading=!0,this.repeatPayment=null,this.commissionParams={amount:this.moneyPipe.transform({amount:0,currency:A.a.KZT})},this.subscription=new v.a,this.isAccountsLoading=!0,this.transferForm=new o.k({id:new o.h(""),from:new o.h("",[o.H.required]),fromAccount:new o.h(null),to:new o.h("",[o.H.required]),toAccount:new o.h(null),documentNumber:new o.h("",[o.H.required]),amount:new o.h("",[o.H.required,t=>{var e;return 0==(null===(e=t)||void 0===e?void 0:e.value)?{cantBeZero:!0}:null}])})}ngOnInit(){const t=this.route.params.subscribe(t=>{t.id&&(this.f.id.setValue(t.id),this.isEditing=!0)});this.subscription.add(t)}ngAfterViewInit(){const t=this.route.paramMap.pipe(Object(y.a)(()=>window.history.state)).subscribe(t=>{this.isEditing?this.loadEditTransfer(this.f.id.value):t.repeatPaymentId?this.loadRepeatTransfer(t.repeatPaymentId):this.loadNewTransfer()}),e=this.transferForm.valueChanges.subscribe(t=>{this.isSubmitted=!1});this.subscription.add(t),this.subscription.add(e)}ngOnDestroy(){this.subscription.unsubscribe()}get fromAccounts(){var t;return null===(t=this.accounts)||void 0===t?void 0:t.filter(t=>!(t.accountType===a.a.CARD&&t.category===g.a.PRIVATE))}get toAccounts(){return this.accounts}get canSendAndSign(){return this.companyService.isSecondaryAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()}get canSendOnly(){return this.companyService.isNoSignAuthority()||this.companyService.isPrimaryAuthority()&&this.companyService.isMultipleSignScheme()}get f(){return this.transferForm.controls}get translateParams(){return{amount:this.amountFormatPipe.transform(this.amountDelta)}}get hasUnsufficientFunds(){return this.amountDelta>0}onFromSelect(t){t&&(this.selectFromAccount(t),this.applyClearOnFromSelectedRule(t),this.applySelectFromCompanionRule(t))}onToSelect(t){t&&(this.selectToAccount(t),this.applyClearOnToSelectedRule(t),this.applySelectToCompanionRule(t))}loadRepeatTransfer(t){return Object(p.a)(this,void 0,void 0,(function*(){this.isLoading=!0;const e=yield Promise.all([this.transfersService.getTransferById(t),this.retrieveAccounts()]);this.applyOnlyAccountRule();const[n]=e,i=yield this.mapRepeatTransferFromPayment(n);this.initRepeatTransfer(i),this.setAutoNumeration(),this.isLoading=!1}))}loadEditTransfer(t){return Object(p.a)(this,void 0,void 0,(function*(){this.isLoading=!0,this.originalPayment=yield this.transfersService.getTransferById(t);const e=yield this.mapRepeatTransferFromPayment(this.originalPayment);yield this.retrieveAccounts(),this.applyOnlyAccountRule(),this.initRepeatTransfer(e),this.isLoading=!1}))}loadNewTransfer(){return Object(p.a)(this,void 0,void 0,(function*(){this.isLoading=!0,yield this.retrieveAccounts(),this.setAutoNumeration(),this.isLoading=!1}))}edit(){return Object(p.a)(this,void 0,void 0,(function*(){if(this.isSubmitted=!0,!this.transferForm.invalid)try{yield this.transfersService.saveEditedTransfer(this.transferForm.value,this.originalPayment),this.showEditSuccess()}catch(t){this.showEditError(t)}}))}createOnly(){return Object(p.a)(this,void 0,void 0,(function*(){this.isLoading=!0,this.isSubmitted=!0;const t=this.paymentsService.paymentNumber;if(this.transferForm.invalid)this.isLoading=!1;else{try{yield this.paymentsApiService.checkWorkingTime()}catch(e){return void(this.isLoading=!1)}try{yield this.transfersService.createOwnTransfer(this.transferForm.value),this.showCreateSuccess(),t.entity=null}catch(e){t.entity=this.f.documentNumber.value,this.showCreateError(e)}finally{this.isLoading=!1}}}))}createAndSign(){return Object(p.a)(this,void 0,void 0,(function*(){this.isLoading=!0,this.isSubmitted=!0;const t=this.paymentsService.paymentNumber;if(this.transferForm.invalid)this.isLoading=!1;else{try{yield this.paymentsApiService.checkWorkingTime()}catch(e){return void(this.isLoading=!1)}try{yield this.transfersService.createAndSignOwnTransfer(this.transferForm.value),this.showCreateAndSignSuccess(),t.entity=null}catch(e){t.entity=this.f.documentNumber.value,this.showCreateAndSignError(e)}finally{this.isLoading=!1}}}))}mapRepeatTransferFromPayment(t){var e,n,i,o,r;return Object(p.a)(this,void 0,void 0,(function*(){yield this.retrieveAccounts();let s=null===(e=t.details)||void 0===e?void 0:e.payerIban;return t.type!==S.i.CARD_TO_CARD&&t.type!==S.i.CARD_TO_ACCOUNT||(s=this.fromAccounts.find(e=>{var n;return e.accountType===a.a.CARD&&e.accountId===(null===(n=t.details)||void 0===n?void 0:n.payerAccountId)}).iban),{to:null===(i=null===(n=t.paymentRecipient)||void 0===n?void 0:n.recipientAccount)||void 0===i?void 0:i.iban,toAccount:this.toAccounts.find(e=>{var n,i;return e.iban===(null===(i=null===(n=t.paymentRecipient)||void 0===n?void 0:n.recipientAccount)||void 0===i?void 0:i.iban)}),from:s,fromAccount:this.fromAccounts.find(t=>t.iban===s),documentNumber:null===(o=t.details)||void 0===o?void 0:o.documentId,amount:null===(r=t.details)||void 0===r?void 0:r.paymentAmount.amount}}))}initRepeatTransfer(t){t&&(this.selectToAccountByIban(t.to),this.selectFromAccountByIban(t.from),this.f.documentNumber.setValue(t.documentNumber),this.f.amount.setValue(this.maskedService.getMaskedAmount(t.amount)))}get amountDelta(){var t,e;const{amount:n}=this.transferForm.getRawValue();return this.maskedService.getNumberedAmount(n)-(null===(e=null===(t=this.from)||void 0===t?void 0:t.balance)||void 0===e?void 0:e.amount)}applySelectToCompanionRule(t){var e,n;if(2==(null===(e=this.accounts)||void 0===e?void 0:e.length)){const e=this.findUnselectedAccount(t);this.selectFromAccount(e),null===(n=this.fromDropdown)||void 0===n||n.selectAccount(e)}}applySelectFromCompanionRule(t){var e,n;if(2==(null===(e=this.accounts)||void 0===e?void 0:e.length)){const e=this.findUnselectedAccount(t);this.selectToAccount(e),null===(n=this.toDropdown)||void 0===n||n.selectAccount(e)}}findUnselectedAccount(t){var e;return null===(e=this.accounts)||void 0===e?void 0:e.find(e=>e!=t)}findAccountByIban(t){var e;return null===(e=this.accounts)||void 0===e?void 0:e.find(e=>e.iban==t)}applyClearOnFromSelectedRule(t){var e;const n=t==this.to,i=t.iban==(null===(e=this.to)||void 0===e?void 0:e.iban)&&!n;(n||i)&&this.clearToAccount(),i&&this.notifierService.notify("default",this.translateService.instant("TRANSFERS.SAME_IBANS_NOTIFICATION"))}applyClearOnToSelectedRule(t){var e;const n=t==this.from,i=t.iban==(null===(e=this.from)||void 0===e?void 0:e.iban)&&!n;(n||i)&&this.clearFromAccount(),i&&this.notifierService.notify("default",this.translateService.instant("TRANSFERS.SAME_IBANS_NOTIFICATION"))}applyOnlyAccountRule(){var t;if(1==(null===(t=this.accounts)||void 0===t?void 0:t.length)){const t=this.accounts[0];t.isLocked||t.hasLockedState?(this.selectToAccount(t),this.toDropdown.selectAccount(t)):(this.selectFromAccount(t),this.fromDropdown.selectAccount(t))}}selectToAccount(t){var e;this.to=t,this.f.to.setValue(null===(e=this.to)||void 0===e?void 0:e.iban),this.f.toAccount.setValue(this.to)}selectFromAccount(t){var e;this.from=t,this.f.from.setValue(null===(e=this.from)||void 0===e?void 0:e.iban),this.f.fromAccount.setValue(this.from)}selectToAccountByIban(t){const e=this.findAccountByIban(t);this.selectToAccount(e),this.toDropdown.selectAccount(e)}selectFromAccountByIban(t){const e=this.findAccountByIban(t);this.selectFromAccount(e),this.fromDropdown.selectAccount(e)}clearToAccount(){var t;this.to=null,this.f.to.setValue(null),null===(t=this.toDropdown)||void 0===t||t.clearSelected()}clearFromAccount(){var t;this.from=null,this.f.from.setValue(null),null===(t=this.fromDropdown)||void 0===t||t.clearSelected()}retrieveAccounts(){return Object(p.a)(this,void 0,void 0,(function*(){this.isAccountsLoading=!0;try{const t=yield Promise.all([this.accountsService.retrieveAccounts(),this.cardsService.getCorporateCards(),this.featureFlagsService.featureFlags$.toPromise()]),[e,n]=t,i=e.filter(t=>t.balance.currency===A.a.KZT&&t.accountType===a.a.ACCOUNT),o=n.filter(t=>t.balance.currency===A.a.KZT);this.accounts=this.featureFlagsService.isDisabled(T.a.CARD_TRANSFERS)?i||[]:[...i||[],...o||[]]}catch(t){}finally{this.isAccountsLoading=!1}}))}showEditSuccess(){const t=parseFloat(this.maskedService.getUnmaskedAmount(this.f.amount.value));this.showSuccessModal("TRANSFERS.EDIT.SUCCESS",t)}showEditError(t){return Object(p.a)(this,void 0,void 0,(function*(){try{yield this.showErrorModal("TRANSFERS.EDIT.ERROR",t),this.edit()}catch(t){this.navigateToHome()}}))}showCreateSuccess(){const t=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE.SUCCESS",t)}showCreateError(t){return Object(p.a)(this,void 0,void 0,(function*(){try{yield this.showErrorModal("TRANSFERS.CREATE.ERROR",t),this.createOnly()}catch(t){this.navigateToHome()}}))}showCreateAndSignSuccess(){const t=this.maskedService.getNumberedAmount(this.f.amount.value);this.showSuccessModal("TRANSFERS.CREATE_AND_SIGN.SUCCESS",t,!0)}showCreateAndSignError(t){return Object(p.a)(this,void 0,void 0,(function*(){try{yield this.showErrorModal("TRANSFERS.CREATE_AND_SIGN.ERROR",t),this.createAndSign()}catch(t){this.navigateToHome()}}))}showSuccessModal(t,e,n=!1){return Object(p.a)(this,void 0,void 0,(function*(){const i=this.modalService.open(O,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0});i.componentInstance.description=t,i.componentInstance.totalBalance={amount:e,currency:A.a.KZT};try{yield i.result,this.navigateToHistory(n)}catch(o){this.navigateToHome()}}))}showErrorModal(t,e){var n;const i=this.modalService.open(w,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",backdrop:"static",centered:!0});return i.componentInstance.description=t,i.componentInstance.errorText=this.mapErrors(null===(n=e)||void 0===n?void 0:n.data)||e,i.result}mapErrors(t){let e="";for(const[n,i]of Object.entries(t))e+=i+"<br>";return e||null}setAutoNumeration(){this.subscription.add(this.paymentsService.paymentNumber$.subscribe(t=>{this.f.documentNumber.setValue(t)}))}navigateToHome(){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.router.navigate(["/"])}navigateToHistory(t=!1){let e=N.c.FOR_SIGN;this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),t&&this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()&&(e=N.c.IN_PROGRESS),this.router.navigate(["/history/tenge"],{queryParams:{paymentStatus:e}})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(l.a),d.Qb(D),d.Qb(P.a),d.Qb(j.g),d.Qb(a.c),d.Qb(L.a),d.Qb(R.q),d.Qb(l.c),d.Qb(V.a),d.Qb(j.c),d.Qb(x.a),d.Qb(T.b),d.Qb(M.c),d.Qb(s.e),d.Qb(L.e),d.Qb(m.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["j-transfers-own"]],viewQuery:function(t,e){var n;1&t&&(d.Yc(H,!0),d.Yc(Q,!0)),2&t&&(d.Ec(n=d.jc())&&(e.fromDropdown=n.first),d.Ec(n=d.jc())&&(e.toDropdown=n.first))},decls:15,vars:22,consts:[[4,"ngIf"],[3,"formGroup","hidden"],[1,"form-group","form-from"],["label","TRANSFERS.FROM",3,"hasError","accounts","isDisabledSelectable","isLoading","isFromArrowShown","selected"],["fromDropdown",""],[1,"form-group"],["label","TRANSFERS.TO",3,"hasError","accounts","isLoading","isDisabledSelectable","selected"],["toDropdown",""],["label","TRANSFERS.DOCUMENT_NUMBER",3,"hasError","isClearable","formControl"],["label","TRANSFERS.AMOUNT",3,"hasError","helperText","helperTextParams","formControl"],["class","text-muted p3",3,"innerHTML",4,"ngIf"],["class","form-footer",4,"ngIf"],[3,"theme"],[1,"d-flex","justify-content-end"],[1,"text-muted","p3",3,"innerHTML"],[1,"form-footer"],["type","button","translate","",1,"btn","btn-outline-primary",3,"click"],["type","button","class","btn btn-outline-primary","translate","",3,"click",4,"ngIf"],["type","submit","class","btn btn-primary ml-3","translate","",3,"click",4,"ngIf"],["type","submit","translate","",1,"btn","btn-primary","ml-3",3,"click"]],template:function(t,e){1&t&&(d.Rc(0,G,7,10,"ng-container",0),d.Wb(1,"form",1),d.Wb(2,"div",2),d.Wb(3,"j-account-dropdown",3,4),d.ic("selected",(function(t){return e.onFromSelect(t)})),d.Vb(),d.Vb(),d.Wb(5,"div",5),d.Wb(6,"j-account-dropdown",6,7),d.ic("selected",(function(t){return e.onToSelect(t)})),d.Vb(),d.Vb(),d.Wb(8,"div",5),d.Rb(9,"j-input",8),d.Vb(),d.Wb(10,"div",5),d.Rb(11,"j-amount-input",9),d.Rc(12,q,2,4,"p",10),d.Vb(),d.Rc(13,J,3,0,"div",11),d.Rc(14,z,4,3,"div",11),d.Vb()),2&t&&(d.uc("ngIf",e.isLoading),d.Ab(1),d.uc("formGroup",e.transferForm)("hidden",e.isLoading),d.Ab(2),d.uc("hasError",e.f.from.invalid&&e.isSubmitted)("accounts",e.fromAccounts)("isDisabledSelectable",!1)("isLoading",e.isAccountsLoading)("isFromArrowShown",!0),d.Ab(3),d.uc("hasError",e.f.to.invalid&&e.isSubmitted)("accounts",e.toAccounts)("isLoading",e.isAccountsLoading)("isDisabledSelectable",!0),d.Ab(3),d.uc("hasError",e.f.documentNumber.invalid&&e.isSubmitted)("isClearable",!1)("formControl",e.f.documentNumber),d.Ab(2),d.uc("hasError",e.f.amount.invalid&&e.isSubmitted)("helperText","TRANSFERS.COMMISSION")("helperTextParams",e.commissionParams)("formControl",e.f.amount),d.Ab(1),d.uc("ngIf",e.hasUnsufficientFunds),d.Ab(1),d.uc("ngIf",e.isEditing),d.Ab(1),d.uc("ngIf",!e.isEditing))},directives:[i.u,o.J,o.u,o.l,_.a,W.b,o.t,o.i,B.a,c.a,s.a],pipes:[s.d],styles:[".form-footer[_ngcontent-%COMP%]{border-top:1px solid rgba(183,190,197,.5);display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-top:1.5rem;padding-top:1.5rem}.form-from[_ngcontent-%COMP%]{position:relative;z-index:5}"]}),t})(),tt=(()=>{class t{constructor(t,e){this.router=t,this.navService=e}ngOnInit(){}onClose(){this.navService.retrieveLetterBadges(),this.navService.retrieveContractBadges(),this.router.navigate(["/"])}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(l.c),d.Qb(m.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["j-transfers"]],decls:7,vars:0,consts:[["closePosition","outside","colsClassList","offset-lg-2 col-lg-8 offset-xl-3 col-xl-6",3,"closed"],[1,"account-header"],["translate","",1,"f-page-title"]],template:function(t,e){1&t&&(d.Wb(0,"f-page",0),d.ic("closed",(function(t){return e.onClose()})),d.Wb(1,"f-page-header"),d.Wb(2,"section",1),d.Wb(3,"h1",2),d.Tc(4,"TRANSFERS.TITLE"),d.Vb(),d.Vb(),d.Vb(),d.Wb(5,"f-page-body"),d.Rb(6,"j-transfers-own"),d.Vb(),d.Vb())},directives:[h.a,b.a,s.a,f.a,$],styles:[""]}),t})();const et=[{path:"",component:tt,data:{title:"TRANSFERS.TITLE"}},{path:":id",component:tt},{path:"**",redirectTo:""}];let nt=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[l.g.forChild(et)],l.g]}),t})();n.d(e,"TransfersModule",(function(){return it}));let it=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[i.c,o.n,o.D,r.d,c.b,nt,a.b,u.a,s.c]]}),t})()}}]);