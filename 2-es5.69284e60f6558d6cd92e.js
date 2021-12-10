function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(c){a=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+BgI":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var i=n("mrSG"),a=n("YMfE"),r=n("+/Tu"),o=n("Eajh"),s=n("NlNA"),c=n("i2Gl"),u=n("p6Hd"),d=n("HghS"),l=n("TwVa"),m=n("wd/R"),p=n("D1y2"),y=n.n(p),b=n("fXoL"),v=n("4Nuw"),h=n("0mgW"),f=n("bHA9"),k=n("B1Ao"),g=n("wtV8"),R=n("VnnJ"),S=n("1kSV"),P=n("VO+5"),A=n("mR7B"),I=n("sYmb"),D=n("O/Ur"),C=function(){var e=function(){function e(t,n,i,a,r,o,s,c,u,d,l,m){_classCallCheck(this,e),this.accounts=t,this.payments=n,this.dictionaries=i,this.recipients=a,this.api=r,this.bankFromAccount=o,this.company=s,this.modalService=c,this.notifier=u,this.maskService=d,this.translate=l,this.currencyPayments=m}return _createClass(e,[{key:"processPayment",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(n=e).body=this.constructPaymentBody(e.rawBody,e),!e.paymentId){t.next=23;break}if(e.status!==l.h.DRAFT){t.next=17;break}return t.next=7,this.api.updatePayment(n.body,{paymentId:e.paymentId});case 7:return n.response=t.sent,t.next=10,this.api.createFromDraft(n.body,{paymentId:e.paymentId});case 10:return n.response.status.code=l.h.CREATED,t.next=13,this.handlePaymentCreateResponse(n.response);case 13:n.verified=t.sent,this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===l.j.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,n.response),t.next=21;break;case 17:return t.next=19,this.api.updatePayment(n.body,{paymentId:e.paymentId});case 19:n.response=t.sent,this.showResult(!0,{amount:e.total,updateCreated:!0},null,n.response);case 21:t.next=30;break;case 23:return t.next=25,this.api.createPayment(n.body);case 25:return n.response=t.sent,t.next=28,this.handlePaymentCreateResponse(n.response);case 28:n.verified=t.sent,this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===l.j.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,n.response);case 30:return n.body.paymentRecipient&&this.checkRecipientsRefresh(n.body),t.abrupt("return",n.response);case 34:throw t.prev=34,t.t0=t.catch(0),t.t0&&this.showResult(!1,void 0,t.t0),t.t0;case 37:case"end":return t.stop()}}),t,this,[[0,34]])})))}},{key:"constructPaymentBody",value:function(e,t){var n,i;return e.type&&e.type!==l.i.INTERNAL&&e.type!==l.i.EXTERNAL?e.type===l.i.TAX?i=this.preparePaymentTaxBody(e,t):[l.i.PENSION,l.i.MEDICAL,l.i.SOCIAL].includes(e.type)?i=this.prepareEmployeePaymentBody(e,t):e.type===l.i.SALARY?i=this.prepareSalaryPaymentBody(e,t):e.type===l.i.IN_BETWEEN||e.type===l.i.CARD_TO_CARD||e.type===l.i.CARD_TO_ACCOUNT||e.type===l.i.ACCOUNT_TO_CARD?i=e:e.type===l.i.FOREIGN?i=this.prepareForeignPaymentBody(e):this.notifier.notify("error","NOT_IMPLEMENTED"):i=this.preparePaymentOrderBody(e,t),(null===(n=t)||void 0===n?void 0:n.userPurpose)&&y()(i,"details.associatedField.parameters.paymentPurpose",t.userPurpose),i}},{key:"handlePaymentCreateResponse",value:function(e){return e.status.code===u.e.REJECTED?Promise.reject(e):this.payments.isSignatureRequired?this.processPaymentVerify(e):Promise.resolve()}},{key:"saveToDrafts",value:function(e,t){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object.assign(this.constructPaymentBody(Object.assign({},e),t),{category:t.category,status:{code:l.h.DRAFT}}),n.prev=1,n.next=4,t.paymentId?this.api.updatePayment(i,{paymentId:t.paymentId}):this.api.createPayment(i);case 4:return a=n.sent,n.abrupt("return",(this.notifier.notify("success",this.translate.instant(t.paymentId?"PAYMENTS.PIPELINES.DRAFT_UPDATED":"PAYMENTS.PIPELINES.SAVED_TO_DRAFTS")),a));case 8:throw n.prev=8,n.t0=n.catch(1),this.notifier.notify("error",this.translate.instant("SHARED.ERROR")),n.t0;case 11:case"end":return n.stop()}}),n,this,[[1,8]])})))}},{key:"processPaymentVerify",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.modalService.open(c.b,{backdropClass:"backdrop_light",windowClass:"modal_light modal_md",backdrop:"static",centered:!0}),t.abrupt("return",(Object.assign(n.componentInstance,{additionalParams:{actionIds:[e.id]}}),Object.assign(n.componentInstance,{headerParams:{smsHeader:u.d.SIGNING_PAYMENT}}),new Promise((function(t,a){n.componentInstance.submitted.subscribe((function(r){i.api.signPayment(r,e.id).then((function(i){n.close(),localStorage.setItem("preferredSignatureType",r.type===l.p.OTP?c.a.OTP:c.a.SMS),t(e)})).catch((function(e){a(e||null)}))})),n.componentInstance.closed.subscribe((function(){a()}))}))));case 2:case"end":return t.stop()}}),t,this)})))}},{key:"preparePaymentOrderBody",value:function(e,t){var n=e.bankAccount?Object(a.ibanPrefix)(e.bankAccount,r.a.KZT):"",i={iinOrBin:e.iinOrBin,name:e.name,kbe:{name:e.kbeCode,code:e.kbeCode},recipientAccount:{iban:n,bankName:n&&this.bankFromAccount.transform(n,"name"),bic:n&&this.bankFromAccount.transform(n)}},o=this.constructBasePaymentDetails(e,t),s=this.payments.checkPaymentTypeFromIban(o.payerIban,n);return{emailOnSuccess:e.emailOnSuccess,paymentRecipient:i,details:o,category:l.g.DOMESTIC,type:s}}},{key:"prepareForeignPaymentBody",value:function(e){return this.currencyPayments.mapForm(e)}},{key:"prepareEmployeePaymentBody",value:function(e,t){var n=e.commonPeriodEnabled&&e.period&&m(e.period).format(a.ISO_8061),i=this.constructBasePaymentDetails(e,t),r=e.employees.map((function(e){var t=e.fio.split(" "),i=t[0],a=t[1];t.splice(0,2);var r=t.length>0?t.join(" "):null;return{amount:{currency:e.currency,amount:e.amount||0},birthDate:e.birthDate,iin:e.iin,lastname:i,firstname:a,middlename:r,period:n||e.period}}));return{category:l.g.DOMESTIC,type:e.type,details:i,paymentEmployees:r}}},{key:"prepareSalaryPaymentBody",value:function(e,t){var n,i,o,s,c,u=this,d=this.dictionaries.bankDictionary.getItemsByIds(e.bankReceiver),m={iinOrBin:null===(n=d)||void 0===n?void 0:n.bin,name:null===(i=d)||void 0===i?void 0:i.name,kbe:{code:e.isResidents?"19":"29"},recipientAccount:{iban:(null===(o=d)||void 0===o?void 0:o.salaryTransitIban)||Object(a.ibanPrefix)(e.bankAccount,r.a.KZT),bic:null===(s=d)||void 0===s?void 0:s.bic}},p=this.constructBasePaymentDetails(e,t),y=null===(c=e.employees)||void 0===c?void 0:c.map((function(e){var t=_slicedToArray(e.fio.split(" "),3),n=t[0],i=t[1],a=t[2],o=u.maskService.getNumberedAmount(e.amount);return{iban:e.iban,amount:{currency:r.a.KZT,amount:o||0},birthDate:e.birthDate,iin:e.iin.replace(" ",""),lastname:n,firstname:i,middlename:a}}));return{category:l.g.DOMESTIC,type:e.type,details:p,paymentEmployees:y,paymentRecipient:m}}},{key:"preparePaymentTaxBody",value:function(e,t){var n,i,a,r,o=this.dictionaries.UGDictionary.getItemByKey(e.ugd,"code"),s=this.dictionaries.KBKDictionary.getItemByKey(e.kbk,"code"),c={iinOrBin:null===(n=o)||void 0===n?void 0:n.bin,name:null===(i=o)||void 0===i?void 0:i.name},u=["period","periodStart","periodEnd","vin","protocolNumber"].reduce((function(t,n){return e[n]&&(t[n]=e[n]instanceof Date?m(e[n]).format("MM.yyyy"):e[n]),t}),{});return{paymentRecipient:c,details:Object.assign(Object.assign({},this.constructBasePaymentDetails(e,t)),{associatedField:{parameters:u},kbk:{code:null===(a=s)||void 0===a?void 0:a.code,name:null===(r=s)||void 0===r?void 0:r.name}}),category:l.g.DOMESTIC,type:l.i.TAX}}},{key:"flattenPaymentToModel",value:function(e){var t,n,i,r,o,s,c,u,d,p,y,b,v,h,f,k,g,R,S,P=e.paymentRecipient,A=e.details,I=e.paymentEmployees,D=e.type,C=this.accounts.store.items.find((function(e){return e.iban===A.payerIban})),E={amount:this.maskService.getMaskedAmount(null===(t=A.paymentAmount)||void 0===t?void 0:t.amount),number:A.documentId,date:A.valueDate&&Object(a.dateToNgbStruct)(new Date(A.valueDate)),knp:null===(n=A.knp)||void 0===n?void 0:n.code,purpose:A.description,vat:A.vat,urgent:A.urgent,type:D,senderAccount:C,emailOnSuccess:e.emailOnSuccess},O=(null===(i=A.associatedField)||void 0===i?void 0:i.parameters)||{};if(I&&(E.employees=I.map((function(e){return{amount:e.amount.amount,iin:e.iin,fio:[e.lastname,e.firstname,e.middlename].join(" "),birthDate:e.birthDate,period:e.period,iban:e.iban}})),E.employees.length)){var N=E.employees[0].period;E.commonPeriodEnabled=E.employees.every((function(e){return e.period&&e.period===N})),E.commonPeriodEnabled&&(E.period=m(N,a.ISO_8061).toDate())}switch(D){case l.i.MEDICAL:case l.i.PENSION:case l.i.SOCIAL:break;case l.i.SALARY:var T=this.dictionaries.bankDictionary.getItemByKey(null===(o=null===(r=P)||void 0===r?void 0:r.recipientAccount)||void 0===o?void 0:o.bic,"bic");T&&(E.bankReceiver=T.id,T.salaryTransitIban||(E.bankAccount=null===(c=null===(s=P)||void 0===s?void 0:s.recipientAccount)||void 0===c?void 0:c.iban)),P&&(E.isResidents="19"===(null===(d=null===(u=P)||void 0===u?void 0:u.kbe)||void 0===d?void 0:d.code));break;case l.i.TAX:var B;(null===(p=P)||void 0===p?void 0:p.iinOrBin)&&(B=this.dictionaries.UGDictionary.getItemByKey(P.iinOrBin,"bin")),Object.assign(E,{ugd:null===(y=B)||void 0===y?void 0:y.code,kbk:null===(b=A.kbk)||void 0===b?void 0:b.code,vin:null===(v=O)||void 0===v?void 0:v.vin,protocolNumber:null===(h=O)||void 0===h?void 0:h.protocolNumber}),["period","periodStart","periodEnd"].forEach((function(e){var t,n=O[e],i=n&&m(n,"MM.yyyy");(null===(t=i)||void 0===t?void 0:t.isValid())&&(E[e]=i.toDate())})),(E.periodEnd||E.periodEnd)&&(E.intervalEnabled=!0);break;case l.i.FOREIGN:Object.assign(E,this.currencyPayments.mapPayment(e));break;default:Object.assign(E,{iinOrBin:null===(f=P)||void 0===f?void 0:f.iinOrBin,name:null===(k=P)||void 0===k?void 0:k.name,bankAccount:null===(R=null===(g=P)||void 0===g?void 0:g.recipientAccount)||void 0===R?void 0:R.iban,kbeCode:null===(S=P)||void 0===S?void 0:S.kbe.code})}return E}},{key:"showResult",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=this.modalService.open(d.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",centered:!0,backdrop:"static"});Object.assign(a.componentInstance,{message:n&&(n.colvirResultDescription||"ERRORS.UNKNOWN_ERROR"),result:e,currency:r.a.KZT,amount:this.maskService.getNumberedAmount(t.amount)||0,multySubscribers:t.multySubscribers,hasRights:this.company.authorityLevel!==s.a.NO_SIGNATURE,payment:i,updateCreated:t.updateCreated})}},{key:"constructBasePaymentDetails",value:function(e,t){var n,i,s,c=this.dictionaries.KNPDictionary.getItemByKey(e.knp,"code"),u=this.maskService.getNumberedAmount(e.amount);return{valueDate:e.date&&Object(a.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,knp:{code:e.knp,name:c&&c.name||o.b},description:e.purpose,payerIban:null===(n=e.senderAccount)||void 0===n?void 0:n.iban,paymentAmount:{amount:u,currency:null===(s=null===(i=e.senderAccount)||void 0===i?void 0:i.balance)||void 0===s?void 0:s.currency},commission:{amount:t.commission,currency:r.a.KZT},vat:e.vat,urgent:e.urgent,documentId:e.number}}},{key:"checkRecipientsRefresh",value:function(e){var t=e.paymentRecipient.recipientAccount,n=this.recipients.isRecipientExist({companyId:this.company.currentId,iinOrBin:e.paymentRecipient.iinOrBin,name:e.paymentRecipient.name,kbe:e.paymentRecipient.kbe});return n&&this.recipients.isRecipientAccountExist(t.iban,n.id)||this.recipients.getRecipients("",!0),e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(b.ec(v.c),b.ec(h.c),b.ec(f.a),b.ec(k.a),b.ec(g.a),b.ec(o.a),b.ec(R.a),b.ec(S.q),b.ec(P.c),b.ec(A.a),b.ec(I.e),b.ec(D.b))},e.\u0275prov=b.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},D1y2:function(e,t,n){var i=n("FZoo");e.exports=function(e,t,n){return null==e?e:i(e,t,n)}},HghS:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n("3Pt+"),a=n("y5b2"),r=n("TwVa"),o=n("fXoL"),s=n("1kSV"),c=n("tyNb"),u=n("VnnJ"),d=n("mR7B"),l=n("sYmb"),m=n("bsP8");function p(e,t){1&e&&o.Sb(0)}function y(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Rb(1,"j-money",16),o.Vb()),2&e){var n=o.mc();o.Ab(1),o.uc("money",n.money)}}function b(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Tc(1),o.nc(2,"translate"),o.Vb()),2&e){var n=o.mc();o.Ab(1),o.Vc(" ",o.oc(2,1,n.subtitle)," ")}}function v(e,t){if(1&e&&(o.Wb(0,"p",17),o.Wb(1,"span"),o.Tc(2),o.nc(3,"translate"),o.Vb(),o.Tc(4,"\xa0"),o.Rb(5,"j-money",16),o.Vb()),2&e){var n=o.mc();o.Ab(2),o.Vc("",o.oc(3,2,"PAYMENTS.RESULT_MODAL.COMMISSION"),":"),o.Ab(3),o.uc("money",n.payment.details.commission)}}function h(e,t){if(1&e){var n=o.Xb();o.Wb(0,"div",11),o.Wb(1,"button",18),o.ic("click",(function(e){return o.Ic(n),o.mc().goToHistory()})),o.Tc(2),o.nc(3,"translate"),o.Vb(),o.Vb()}2&e&&(o.Ab(2),o.Uc(o.oc(3,1,"PAYMENTS.RESULT_MODAL.CHECK_STATUS")))}function f(e,t){1&e&&(o.Rb(0,"img",19),o.nc(1,"translate")),2&e&&o.vc("alt",o.oc(1,1,"SHARED.DONE"))}function k(e,t){1&e&&(o.Rb(0,"img",20),o.nc(1,"translate")),2&e&&o.vc("alt",o.oc(1,1,"SHARED.ERROR"))}var g=function(){var e=function(){function e(t,n,a,o,s,c){_classCallCheck(this,e),this.modal=t,this.router=n,this.companyService=a,this.maskedService=o,this.translate=s,this.navService=c,this.hasRights=!0,this.PAYMENT_TYPE=r.i,this.subscribe=new i.h(!1)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"closeModal",value:function(e,t){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),t&&this.router.navigate(["/"]),this.modal.close({subscribe:this.subscribe.value,createNew:e})}},{key:"goToHistory",value:function(){var e,t;if(this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.result){var n="tenge";(null===(e=this.payment)||void 0===e?void 0:e.category)==r.g.FOREIGN?n="foreign":(null===(t=this.payment)||void 0===t?void 0:t.category)==r.g.CONVERSION&&(n="conversion"),this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()?this.router.navigate(["/history/".concat(n)],{queryParams:{paymentStatus:a.c.IN_PROGRESS}}):this.router.navigate(["/history/".concat(n)],{queryParams:{paymentStatus:a.c.FOR_SIGN}})}this.modal.close()}},{key:"money",get:function(){var e;return(null===(e=this.payment)||void 0===e?void 0:e.type)==r.i.FOREIGN?this.payment.details.paymentAmount:{amount:Math.abs(this.maskedService.getNumberedAmount(this.amount)),currency:this.currency}}},{key:"subtitle",get:function(){var e;return e=this.result?this.updateCreated?"PAYMENTS.PAYMENT_EDITED":this.hasRights?this.multySubscribers?this.companyService.isPrimaryAuthority()?"PAYMENTS.PAYMENT_SENT_FOR_SIGN":"PAYMENTS.PAYMENT_SIGNED":"PAYMENTS.PAYMENT_SIGNED_AND_SENT":"PAYMENTS.CREATED_FOR_SIGN":"SHARED.ERROR",this.translate.instant(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(c.c),o.Qb(u.a),o.Qb(d.a),o.Qb(l.e),o.Qb(m.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["j-payment-result"]],inputs:{result:"result",currency:"currency",amount:"amount",multySubscribers:"multySubscribers",hasRights:"hasRights",message:"message",payment:"payment",updateCreated:"updateCreated"},decls:22,vars:17,consts:[[1,"result-modal"],[1,"modal-header"],[1,"modal-body","result-body","pb-0"],[1,"text-center"],[1,"result-modal--label","mb-2"],[4,"ngIf","ngIfThen","ngIfElse"],["class","light mb-3 mt-2",4,"ngIf"],["class","text-muted mt-0 mb-1",4,"ngIf"],[1,"m-0","text-muted"],[1,"modal-body","result-body"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"btn","btn-block",3,"click"],["success",""],["failure",""],[1,"light","mb-3","mt-2"],[3,"money"],[1,"text-muted","mt-0","mb-1"],[1,"btn","btn-primary","btn-block",3,"click"],["src","/assets/img/history/modals/success.svg",3,"alt"],["src","/assets/img/history/modals/error.svg",3,"alt"]],template:function(e,t){if(1&e&&(o.Wb(0,"div",0),o.Rb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"div",3),o.Wb(4,"div",4),o.Rc(5,p,1,0,"ng-container",5),o.Vb(),o.Rc(6,y,2,1,"h3",6),o.Rc(7,b,3,3,"h3",6),o.Rc(8,v,6,4,"p",7),o.Wb(9,"p",8),o.Tc(10),o.nc(11,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Wb(12,"div",9),o.Rc(13,h,4,3,"div",10),o.Wb(14,"div",11),o.Wb(15,"button",12),o.ic("click",(function(e){return t.closeModal(!1,!0)})),o.Tc(16),o.nc(17,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Rc(18,f,2,3,"ng-template",null,13,o.Sc),o.Rc(20,k,2,3,"ng-template",null,14,o.Sc)),2&e){var n=o.Fc(19),i=o.Fc(21);o.Ab(5),o.uc("ngIf",t.result)("ngIfThen",n)("ngIfElse",i),o.Ab(1),o.uc("ngIf",t.result),o.Ab(1),o.uc("ngIf",!t.result),o.Ab(1),o.uc("ngIf",(null==t.payment?null:t.payment.type)==t.PAYMENT_TYPE.FOREIGN&&(null==t.payment?null:null==t.payment.details?null:t.payment.details.commission)),o.Ab(2),o.Uc(o.oc(11,13,t.message||t.subtitle)),o.Ab(3),o.uc("ngIf",t.result),o.Ab(2),o.Hb("btn-primary",!t.result)("btn-link",t.result),o.Ab(1),o.Uc(o.oc(17,15,"PAYMENTS.RESULT_MODAL.BACK_TO_HOME"))}},styles:["@-webkit-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@-webkit-keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@-webkit-keyframes colored-circle{0%{opacity:0}to{opacity:1}}@keyframes colored-circle{0%{opacity:0}to{opacity:1}}.inlinesvg .svg svg{display:inline}.icon--order-success svg polyline{-webkit-animation:checkmark .25s ease-in-out .7s backwards;animation:checkmark .25s ease-in-out .7s backwards}.icon--order-success svg circle{-webkit-animation:checkmark-circle .6s ease-in-out backwards;animation:checkmark-circle .6s ease-in-out backwards}.icon--order-success svg circle#colored{-webkit-animation:colored-circle .6s ease-in-out .7s backwards;animation:colored-circle .6s ease-in-out .7s backwards}.result-body{padding:1.5rem}"],encapsulation:2}),e}()},"O/Ur":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var i=n("mrSG"),a=n("tk/3"),r=n("YMfE"),o=n("+/Tu"),s=n("TwVa"),c=n("fXoL"),u=n("p6Hd"),d=n("VnnJ"),l=n("mR7B"),m=n("bHA9"),p=function(e){return e.RU="RU",e.US="US",e.CN="CN",e.AU="AU",e.CA="CA",e.AE="AE",e}({}),y=function(){var e=function(){function e(t,n,i,a){_classCallCheck(this,e),this.api=t,this.companyService=n,this.maskedService=i,this.dictionaries=a}return _createClass(e,[{key:"getCountries",value:function(){return this.api.get("countries")}},{key:"getContractById",value:function(e){return this.api.get("companies/".concat(this.companyService.currentId,"/fx-contracts/").concat(e))}},{key:"getContracts",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.api.get("companies/".concat(this.companyService.currentId,"/fx-contracts")));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"getCodeWords",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!this.cashedCodeWordsList||e!==this.cashedCodeWordsCountry){t.next=2;break}return t.abrupt("return",this.cashedCodeWordsList);case 2:return n=(n=new a.h).append("countryCode",e),t.next=6,this.api.get("dictionaries/codewords",null,n);case 6:return i=t.sent,t.abrupt("return",(this.cashedCodeWordsCountry=e,this.cashedCodeWordsList=i,this.cashedCodeWordsList));case 8:case"end":return t.stop()}}),t,this)})))}},{key:"getBanks",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==this.cashedBankQuery||t!==this.cashedBankCountryCode){n.next=2;break}return n.abrupt("return",this.cashedBankList);case 2:return this.cashedBankQuery=e,this.cashedBankCountryCode=t,i=new a.h,e&&(i=i.append("search",e)),t&&(i=i.append("countryCode",t)),n.next=7,this.api.get("dictionaries/banks",null,i);case 7:return r=n.sent,n.abrupt("return",(this.cashedBankList=r,r));case 9:case"end":return n.stop()}}),n,this)})))}},{key:"getKbkList",value:function(){return this.api.get("dictionaries/kbk")}},{key:"getStatuses",value:function(){return this.api.get("dictionaries/payer-status")}},{key:"mapForm",value:function(e){var t,n,i,a,c,u,d,l,m,y,b,v,h={commission:{amount:e.comission,currency:e.comissionCurrency},description:e.purpose,documentId:e.number,foreignPaymentDetails:{commissionWithdrawalIban:null===(t=e.commissionAccount)||void 0===t?void 0:t.iban,intermediaryBankBic:null===(n=e.intermediaryBank)||void 0===n?void 0:n.bic,intermediaryBankName:null===(i=e.intermediaryBank)||void 0===i?void 0:i.name,type:e.payComission?"OUR":"SHA"},valueDate:e.date&&Object(r.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,payerIban:null===(a=e.senderAccount)||void 0===a?void 0:a.iban,paymentAmount:{amount:this.maskedService.getNumberedAmount(e.amount),currency:null===(u=null===(c=e.senderAccount)||void 0===c?void 0:c.balance)||void 0===u?void 0:u.currency}};if(e.knp){var f;f=e.knpObject?e.knpObject.code:e.knp;var k=this.dictionaries.KNPDictionary.getItemByKey(f,"code");h.knp={code:k.code,name:k.name}}e.kbk&&(h.kbk={code:e.kbk.code,name:e.kbk.description}),e.withinContract&&(h.foreignPaymentDetails.fxContractId=e.contractId,h.foreignPaymentDetails.contract=e.contract,h.foreignPaymentDetails.fxContractRecipient=e.fxContractRecipient,h.foreignPaymentDetails.fxContractRecipientId=e.fxContractRecipientId),e.codeWord&&(h.foreignPaymentDetails.codeWord=e.codeWord),e.isRubNonRussia&&(h.foreignPaymentDetails.intermediaryBankBic=e.rubNonRussiaCorrespondentBank.bic,h.foreignPaymentDetails.intermediaryBankIban=e.rubNonRussiaCorrespondentIban);var g=e.bank;e.isRubNonRussia&&(g=e.rubNonRussiaBank);var R=e.countryCode||(null===(d=e.country)||void 0===d?void 0:d.code)||(null===(m=null===(l=e.fxContractRecipient)||void 0===l?void 0:l.country)||void 0===m?void 0:m.code)||(null===(y=e.fxContractRecipient)||void 0===y?void 0:y.countryCode),S={category:s.i.FOREIGN,companyId:this.companyService.currentId,details:h,emailOnSuccess:e.emailOnSuccess,paymentRecipient:{cityName:e.cityName,countryCode:R,kbe:{code:e.kbeCode},kpp:e.kpp,name:e.name,recipientAccount:{bankName:null===(b=g)||void 0===b?void 0:b.name,bic:null===(v=g)||void 0===v?void 0:v.bic,iban:e.bankAccount?this.removeSpaces(e.bankAccount):e.bankAccount}},type:s.i.FOREIGN};return R==p.AU&&(S.paymentRecipient.address=e.senderAccount.balance.currency===o.a.AUD?{index:e.audIndex,state:e.audState,street:e.audStreet,buildingNumber:e.audBuildingNumber}:{text:e.audAddress}),R==p.CA&&(S.paymentRecipient.address={text:e.canAddress}),e.kio&&(S.paymentRecipient.iinOrBin=e.kio),e.kvo&&(h.foreignPaymentDetails.currencyTransactionCode=e.kvo),e.isRussianBudget&&(h.foreignPaymentDetails.oktmo=e.oktmo,h.foreignPaymentDetails.payerInn=e.payerInn,h.foreignPaymentDetails.payerKpp=e.payerKpp,h.foreignPaymentDetails.payerStatus=e.payerStatus,h.foreignPaymentDetails.paymentBasis=e.paymentBasis,h.foreignPaymentDetails.period=e.budgetPeriod,h.foreignPaymentDetails.uip=e.uip,h.foreignPaymentDetails.budgetDocNumber=e.budgetDocNumber),S}},{key:"mapPayment",value:function(e){var t,n,i,a,o,c,u,d,l,m,p,y,b,v,h,f,k,g,R,S,P,A;return{type:s.i.FOREIGN,senderAccount:null,commissionAccount:null,comission:e.details.comission,payComission:"OUR"==e.details.foreignPaymentDetails.type,countryCode:(null===(t=e.paymentRecipient)||void 0===t?void 0:t.countryCode)||"",cityName:(null===(n=e.paymentRecipient)||void 0===n?void 0:n.cityName)||"",isNewPayment:e.isNewPayment||!1,contract:e.details.foreignPaymentDetails.fxContract,contractId:e.details.foreignPaymentDetails.fxContractId,fxContractRecipient:e.details.foreignPaymentDetails.fxContractRecipient,fxContractRecipientId:e.details.foreignPaymentDetails.fxContractRecipientId,withinContract:!!e.details.foreignPaymentDetails.fxContractId,name:(null===(i=e.paymentRecipient)||void 0===i?void 0:i.name)||"",bankAccount:(null===(a=e.paymentRecipient)||void 0===a?void 0:a.recipientAccount.iban)||"",kbeCode:(null===(c=null===(o=e.paymentRecipient)||void 0===o?void 0:o.kbe)||void 0===c?void 0:c.code)||"",number:e.details.documentId,date:e.details.valueDate&&Object(r.dateToNgbStruct)(new Date(e.details.valueDate)),knp:null===(u=e.details.knp)||void 0===u?void 0:u.code,purpose:e.details.description,amount:null===(d=e.details.paymentAmount)||void 0===d?void 0:d.amount,bankLabel:"",bank:null,hasIntermediaryBank:!!e.details.foreignPaymentDetails.intermediaryBankBic,intermediaryBankLabel:"",intermediaryBank:null,notify:!!e.emailOnSuccess,emailOnSuccess:e.emailOnSuccess,kpp:(null===(l=e.paymentRecipient)||void 0===l?void 0:l.kpp)||"",kvo:e.details.foreignPaymentDetails.currencyTransactionCode||"",kio:(null===(m=e.paymentRecipient)||void 0===m?void 0:m.iinOrBin)||"",isRussianBudget:null,isRussianTaxPayer:!(!e.details.foreignPaymentDetails.payerInn&&!e.details.foreignPaymentDetails.payerKpp),payerInn:e.details.foreignPaymentDetails.payerInn||"",payerKpp:e.details.foreignPaymentDetails.payerKpp||"",kbk:e.details.kbk?{code:e.details.kbk.code,description:e.details.kbk.name}:"",oktmo:e.details.foreignPaymentDetails.oktmo||"",payerStatus:e.details.foreignPaymentDetails.payerStatus||"",hasRussianBudgetExtras:!!(e.details.foreignPaymentDetails.paymentBasis||e.details.foreignPaymentDetails.budgetDocNumber||e.details.foreignPaymentDetails.period||e.details.foreignPaymentDetails.uip),paymentBasis:e.details.foreignPaymentDetails.paymentBasis||"",budgetDocNumber:e.details.foreignPaymentDetails.budgetDocNumber||"",budgetPeriod:e.details.foreignPaymentDetails.period||"",uip:e.details.foreignPaymentDetails.uip||"",codeWord:e.details.foreignPaymentDetails.codeWord,audIndex:(null===(y=null===(p=e.paymentRecipient)||void 0===p?void 0:p.address)||void 0===y?void 0:y.index)||"",audState:(null===(v=null===(b=e.paymentRecipient)||void 0===b?void 0:b.address)||void 0===v?void 0:v.state)||"",audStreet:(null===(f=null===(h=e.paymentRecipient)||void 0===h?void 0:h.address)||void 0===f?void 0:f.street)||"",audBuildingNumber:(null===(g=null===(k=e.paymentRecipient)||void 0===k?void 0:k.address)||void 0===g?void 0:g.buildingNumber)||"",audAddress:(null===(S=null===(R=e.paymentRecipient)||void 0===R?void 0:R.address)||void 0===S?void 0:S.text)||"",canAddress:(null===(A=null===(P=e.paymentRecipient)||void 0===P?void 0:P.address)||void 0===A?void 0:A.text)||""}}},{key:"removeSpaces",value:function(e){return e.replace(/ /g,"")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.ec(u.a),c.ec(d.a),c.ec(l.a),c.ec(m.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);