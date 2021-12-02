(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+BgI":function(e,t,i){"use strict";i.d(t,"a",(function(){return D}));var n=i("mrSG"),a=i("wd/R"),r=i("D1y2"),o=i.n(r),s=i("YMfE"),c=i("+/Tu"),d=i("Eajh"),u=i("NlNA"),l=i("i2Gl"),m=i("p6Hd"),p=i("HghS"),y=i("TwVa"),b=i("fXoL"),v=i("4Nuw"),h=i("0mgW"),g=i("bHA9"),f=i("B1Ao"),k=i("wtV8"),S=i("VnnJ"),R=i("1kSV"),A=i("VO+5"),P=i("mR7B"),I=i("sYmb"),C=i("O/Ur");let D=(()=>{class e{constructor(e,t,i,n,a,r,o,s,c,d,u,l){this.accounts=e,this.payments=t,this.dictionaries=i,this.recipients=n,this.api=a,this.bankFromAccount=r,this.company=o,this.modalService=s,this.notifier=c,this.maskService=d,this.translate=u,this.currencyPayments=l}processPayment(e){return Object(n.a)(this,void 0,void 0,(function*(){try{const t=e;return t.body=this.constructPaymentBody(e.rawBody,e),e.paymentId?e.status===y.h.DRAFT?(t.response=yield this.api.updatePayment(t.body,{paymentId:e.paymentId}),yield this.api.createFromDraft(t.body,{paymentId:e.paymentId}),t.response.status.code=y.h.CREATED,t.verified=yield this.handlePaymentCreateResponse(t.response),this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===y.j.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,t.response)):(t.response=yield this.api.updatePayment(t.body,{paymentId:e.paymentId}),this.showResult(!0,{amount:e.total,updateCreated:!0},null,t.response)):(t.response=yield this.api.createPayment(t.body),t.verified=yield this.handlePaymentCreateResponse(t.response),this.showResult(!0,{amount:e.total,multySubscribers:this.company.currentCompany.signatureScheme===y.j.MULTIPLE_SIGN,hasRights:this.payments.isSignatureRequired},null,t.response)),t.body.paymentRecipient&&this.checkRecipientsRefresh(t.body),t.response}catch(t){throw t&&this.showResult(!1,void 0,t),t}}))}constructPaymentBody(e,t){var i;let n;return e.type&&e.type!==y.i.INTERNAL&&e.type!==y.i.EXTERNAL?e.type===y.i.TAX?n=this.preparePaymentTaxBody(e,t):[y.i.PENSION,y.i.MEDICAL,y.i.SOCIAL].includes(e.type)?n=this.prepareEmployeePaymentBody(e,t):e.type===y.i.SALARY?n=this.prepareSalaryPaymentBody(e,t):e.type===y.i.IN_BETWEEN||e.type===y.i.CARD_TO_CARD||e.type===y.i.CARD_TO_ACCOUNT||e.type===y.i.ACCOUNT_TO_CARD?n=e:e.type===y.i.FOREIGN?n=this.prepareForeignPaymentBody(e):this.notifier.notify("error","NOT_IMPLEMENTED"):n=this.preparePaymentOrderBody(e,t),(null===(i=t)||void 0===i?void 0:i.userPurpose)&&o()(n,"details.associatedField.parameters.paymentPurpose",t.userPurpose),n}handlePaymentCreateResponse(e){return e.status.code===m.e.REJECTED?Promise.reject(e):this.payments.isSignatureRequired?this.processPaymentVerify(e):Promise.resolve()}saveToDrafts(e,t){return Object(n.a)(this,void 0,void 0,(function*(){const i=Object.assign(this.constructPaymentBody(Object.assign({},e),t),{category:t.category,status:{code:y.h.DRAFT}});try{const e=yield t.paymentId?this.api.updatePayment(i,{paymentId:t.paymentId}):this.api.createPayment(i);return this.notifier.notify("success",t.paymentId?"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d":"\u041f\u043b\u0430\u0442\u0435\u0436 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a"),e}catch(n){throw this.notifier.notify("error","\u041e\u0448\u0438\u0431\u043a\u0430"),n}}))}processPaymentVerify(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=this.modalService.open(l.b,{backdropClass:"backdrop_light",windowClass:"modal_light modal_md",backdrop:"static",centered:!0});return Object.assign(t.componentInstance,{additionalParams:{actionIds:[e.id]}}),Object.assign(t.componentInstance,{headerParams:{smsHeader:m.d.SIGNING_PAYMENT}}),new Promise((i,n)=>{t.componentInstance.submitted.subscribe(a=>{this.api.signPayment(a,e.id).then(n=>{t.close(),localStorage.setItem("preferredSignatureType",a.type===y.p.OTP?l.a.OTP:l.a.SMS),i(e)}).catch(e=>{n(e||null)})}),t.componentInstance.closed.subscribe(()=>{n()})})}))}preparePaymentOrderBody(e,t){const i=e.bankAccount?Object(s.ibanPrefix)(e.bankAccount,c.a.KZT):"",n={iinOrBin:e.iinOrBin,name:e.name,kbe:{name:e.kbeCode,code:e.kbeCode},recipientAccount:{iban:i,bankName:i&&this.bankFromAccount.transform(i,"name"),bic:i&&this.bankFromAccount.transform(i)}},a=this.constructBasePaymentDetails(e,t),r=this.payments.checkPaymentTypeFromIban(a.payerIban,i);return{emailOnSuccess:e.emailOnSuccess,paymentRecipient:n,details:a,category:y.g.DOMESTIC,type:r}}prepareForeignPaymentBody(e){return this.currencyPayments.mapForm(e)}prepareEmployeePaymentBody(e,t){const i=e.commonPeriodEnabled&&e.period&&a(e.period).format(s.ISO_8061),n=this.constructBasePaymentDetails(e,t),r=e.employees.map(e=>{const t=e.fio.split(" "),n=t[0],a=t[1];t.splice(0,2);const r=t.length>0?t.join(" "):null;return{amount:{currency:e.currency,amount:e.amount||0},birthDate:e.birthDate,iin:e.iin,lastname:n,firstname:a,middlename:r,period:i||e.period}});return{category:y.g.DOMESTIC,type:e.type,details:n,paymentEmployees:r}}prepareSalaryPaymentBody(e,t){var i,n,a,r,o;const d=this.dictionaries.bankDictionary.getItemsByIds(e.bankReceiver),u={iinOrBin:null===(i=d)||void 0===i?void 0:i.bin,name:null===(n=d)||void 0===n?void 0:n.name,kbe:{code:e.isResidents?"19":"29"},recipientAccount:{iban:(null===(a=d)||void 0===a?void 0:a.salaryTransitIban)||Object(s.ibanPrefix)(e.bankAccount,c.a.KZT),bic:null===(r=d)||void 0===r?void 0:r.bic}},l=this.constructBasePaymentDetails(e,t),m=null===(o=e.employees)||void 0===o?void 0:o.map(e=>{const[t,i,n]=e.fio.split(" "),a=this.maskService.getNumberedAmount(e.amount);return{iban:e.iban,amount:{currency:c.a.KZT,amount:a||0},birthDate:e.birthDate,iin:e.iin.replace(" ",""),lastname:t,firstname:i,middlename:n}});return{category:y.g.DOMESTIC,type:e.type,details:l,paymentEmployees:m,paymentRecipient:u}}preparePaymentTaxBody(e,t){var i,n,r,o;const s=this.dictionaries.UGDictionary.getItemByKey(e.ugd,"code"),c=this.dictionaries.KBKDictionary.getItemByKey(e.kbk,"code"),d={iinOrBin:null===(i=s)||void 0===i?void 0:i.bin,name:null===(n=s)||void 0===n?void 0:n.name},u=["period","periodStart","periodEnd","vin","protocolNumber"].reduce((t,i)=>(e[i]&&(t[i]=e[i]instanceof Date?a(e[i]).format("MM.yyyy"):e[i]),t),{});return{paymentRecipient:d,details:Object.assign(Object.assign({},this.constructBasePaymentDetails(e,t)),{associatedField:{parameters:u},kbk:{code:null===(r=c)||void 0===r?void 0:r.code,name:null===(o=c)||void 0===o?void 0:o.name}}),category:y.g.DOMESTIC,type:y.i.TAX}}flattenPaymentToModel(e){var t,i,n,r,o,c,d,u,l,m,p,b,v,h,g,f,k,S,R;const{paymentRecipient:A,details:P,paymentEmployees:I,type:C}=e,D=this.accounts.store.items.find(e=>e.iban===P.payerIban),N={amount:this.maskService.getMaskedAmount(null===(t=P.paymentAmount)||void 0===t?void 0:t.amount),number:P.documentId,date:P.valueDate&&Object(s.dateToNgbStruct)(new Date(P.valueDate)),knp:null===(i=P.knp)||void 0===i?void 0:i.code,purpose:P.description,vat:P.vat,urgent:P.urgent,type:C,senderAccount:D,emailOnSuccess:e.emailOnSuccess},E=(null===(n=P.associatedField)||void 0===n?void 0:n.parameters)||{};if(I&&(N.employees=I.map(e=>({amount:e.amount.amount,iin:e.iin,fio:[e.lastname,e.firstname,e.middlename].join(" "),birthDate:e.birthDate,period:e.period,iban:e.iban})),N.employees.length)){const e=N.employees[0].period;N.commonPeriodEnabled=N.employees.every(t=>t.period&&t.period===e),N.commonPeriodEnabled&&(N.period=a(e,s.ISO_8061).toDate())}switch(C){case y.i.MEDICAL:case y.i.PENSION:case y.i.SOCIAL:break;case y.i.SALARY:const t=this.dictionaries.bankDictionary.getItemByKey(null===(o=null===(r=A)||void 0===r?void 0:r.recipientAccount)||void 0===o?void 0:o.bic,"bic");t&&(N.bankReceiver=t.id,t.salaryTransitIban||(N.bankAccount=null===(d=null===(c=A)||void 0===c?void 0:c.recipientAccount)||void 0===d?void 0:d.iban)),A&&(N.isResidents="19"===(null===(l=null===(u=A)||void 0===u?void 0:u.kbe)||void 0===l?void 0:l.code));break;case y.i.TAX:let i;(null===(m=A)||void 0===m?void 0:m.iinOrBin)&&(i=this.dictionaries.UGDictionary.getItemByKey(A.iinOrBin,"bin")),Object.assign(N,{ugd:null===(p=i)||void 0===p?void 0:p.code,kbk:null===(b=P.kbk)||void 0===b?void 0:b.code,vin:null===(v=E)||void 0===v?void 0:v.vin,protocolNumber:null===(h=E)||void 0===h?void 0:h.protocolNumber}),["period","periodStart","periodEnd"].forEach(e=>{var t;const i=E[e],n=i&&a(i,"MM.yyyy");(null===(t=n)||void 0===t?void 0:t.isValid())&&(N[e]=n.toDate())}),(N.periodEnd||N.periodEnd)&&(N.intervalEnabled=!0);break;case y.i.FOREIGN:Object.assign(N,this.currencyPayments.mapPayment(e));break;default:Object.assign(N,{iinOrBin:null===(g=A)||void 0===g?void 0:g.iinOrBin,name:null===(f=A)||void 0===f?void 0:f.name,bankAccount:null===(S=null===(k=A)||void 0===k?void 0:k.recipientAccount)||void 0===S?void 0:S.iban,kbeCode:null===(R=A)||void 0===R?void 0:R.kbe.code})}return N}showResult(e,t={},i,n){const a=this.modalService.open(p.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_sm",centered:!0,backdrop:"static"});Object.assign(a.componentInstance,{message:i&&(i.colvirResultDescription||"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"),result:e,currency:c.a.KZT,amount:this.maskService.getNumberedAmount(t.amount)||0,multySubscribers:t.multySubscribers,hasRights:this.company.authorityLevel!==u.a.NO_SIGNATURE,payment:n,updateCreated:t.updateCreated})}constructBasePaymentDetails(e,t){var i,n,a;const r=this.dictionaries.KNPDictionary.getItemByKey(e.knp,"code"),o=this.maskService.getNumberedAmount(e.amount);return{valueDate:e.date&&Object(s.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,knp:{code:e.knp,name:r&&r.name||d.b},description:e.purpose,payerIban:null===(i=e.senderAccount)||void 0===i?void 0:i.iban,paymentAmount:{amount:o,currency:null===(a=null===(n=e.senderAccount)||void 0===n?void 0:n.balance)||void 0===a?void 0:a.currency},commission:{amount:t.commission,currency:c.a.KZT},vat:e.vat,urgent:e.urgent,documentId:e.number}}checkRecipientsRefresh(e){const t=e.paymentRecipient.recipientAccount;let i=this.recipients.isRecipientExist({companyId:this.company.currentId,iinOrBin:e.paymentRecipient.iinOrBin,name:e.paymentRecipient.name,kbe:e.paymentRecipient.kbe});return i&&this.recipients.isRecipientAccountExist(t.iban,i.id)||this.recipients.getRecipients("",!0),e}}return e.\u0275fac=function(t){return new(t||e)(b.ec(v.c),b.ec(h.c),b.ec(g.a),b.ec(f.a),b.ec(k.a),b.ec(d.a),b.ec(S.a),b.ec(R.q),b.ec(A.c),b.ec(P.a),b.ec(I.e),b.ec(C.b))},e.\u0275prov=b.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},CVrE:function(e,t,i){"use strict";i("FSxY");var n=i("O/Ur");i.d(t,"a",(function(){return n.a})),i.d(t,"b",(function(){return n.b}));var a=i("wtV8");i.d(t,"c",(function(){return a.a})),i("gm23");var r=i("kFTB");i.d(t,"e",(function(){return r.a}));var o=i("+BgI");i.d(t,"f",(function(){return o.a}));var s=i("0mgW");i.d(t,"d",(function(){return s.b})),i.d(t,"g",(function(){return s.c}))},D1y2:function(e,t,i){var n=i("FZoo");e.exports=function(e,t,i){return null==e?e:n(e,t,i)}},FSxY:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("Stn5"),a=i("fXoL"),r=i("1kSV"),o=i("qXBG"),s=i("tyNb");let c=(()=>{class e{constructor(e,t,i){this.modal=e,this.auth=t,this.router=i}canDeactivate(e,t,i,a){var r,o;const{extras:s}=this.router.getCurrentNavigation();if(null===(o=null===(r=s)||void 0===r?void 0:r.state)||void 0===o?void 0:o.silent)return Promise.resolve(!0);if(e&&e.formDirective&&this.auth.isAuthenticated){const{formDirective:t,form:i}=e;if(!t.submitted&&i.dirty||t.submitted&&i.dirty)return this.modal.open(n.a,{backdropClass:"backdrop_light",windowClass:"modal_light modal_max-height",centered:!0}).result}return Promise.resolve(!0)}}return e.\u0275fac=function(t){return new(t||e)(a.ec(r.q),a.ec(o.a),a.ec(s.c))},e.\u0275prov=a.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},HghS:function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var n=i("3Pt+"),a=i("y5b2"),r=i("TwVa"),o=i("fXoL"),s=i("1kSV"),c=i("tyNb"),d=i("VnnJ"),u=i("mR7B"),l=i("sYmb"),m=i("bsP8");function p(e,t){1&e&&o.Sb(0)}function y(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Rb(1,"j-money",16),o.Vb()),2&e){const e=o.lc();o.Ab(1),o.sc("money",e.money)}}function b(e,t){if(1&e&&(o.Wb(0,"h3",15),o.Rc(1),o.Vb()),2&e){const e=o.lc();o.Ab(1),o.Tc(" ",e.subtitle," ")}}function v(e,t){if(1&e&&(o.Wb(0,"p",17),o.Wb(1,"span"),o.Rc(2,"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f:"),o.Vb(),o.Rc(3,"\xa0"),o.Rb(4,"j-money",16),o.Vb()),2&e){const e=o.lc();o.Ab(4),o.sc("money",e.payment.details.commission)}}function h(e,t){if(1&e){const e=o.Xb();o.Wb(0,"div",11),o.Wb(1,"button",18),o.ic("click",(function(t){return o.Gc(e),o.lc().goToHistory()})),o.Rc(2,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430"),o.Vb(),o.Vb()}}function g(e,t){1&e&&(o.Rb(0,"img",19),o.mc(1,"translate")),2&e&&o.tc("alt",o.nc(1,1,"SHARED.DONE"))}function f(e,t){1&e&&(o.Rb(0,"img",20),o.mc(1,"translate")),2&e&&o.tc("alt",o.nc(1,1,"SHARED.ERROR"))}let k=(()=>{class e{constructor(e,t,i,a,o,s){this.modal=e,this.router=t,this.companyService=i,this.maskedService=a,this.translate=o,this.navService=s,this.hasRights=!0,this.PAYMENT_TYPE=r.i,this.subscribe=new n.h(!1)}ngOnInit(){}get money(){var e;return(null===(e=this.payment)||void 0===e?void 0:e.type)==r.i.FOREIGN?this.payment.details.paymentAmount:{amount:Math.abs(this.maskedService.getNumberedAmount(this.amount)),currency:this.currency}}get subtitle(){let e="";return e=this.result?this.updateCreated?"PAYMENTS.PAYMENT_EDITED":this.hasRights?this.multySubscribers?this.companyService.isPrimaryAuthority()?"PAYMENTS.PAYMENT_SENT_FOR_SIGN":"PAYMENTS.PAYMENT_SIGNED":"PAYMENTS.PAYMENT_SIGNED_AND_SENT":"PAYMENTS.CREATED_FOR_SIGN":"SHARED.ERROR",this.translate.instant(e)}closeModal(e,t){this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),t&&this.router.navigate(["/"]),this.modal.close({subscribe:this.subscribe.value,createNew:e})}goToHistory(){var e,t;if(this.navService.retrieveContractBadges(),this.navService.retrieveLetterBadges(),this.result){let i="tenge";(null===(e=this.payment)||void 0===e?void 0:e.category)==r.g.FOREIGN?i="foreign":(null===(t=this.payment)||void 0===t?void 0:t.category)==r.g.CONVERSION&&(i="conversion"),this.companyService.isPrimaryAuthority()&&this.companyService.isSingleSignScheme()?this.router.navigate([`/history/${i}`],{queryParams:{paymentStatus:a.c.IN_PROGRESS}}):this.router.navigate([`/history/${i}`],{queryParams:{paymentStatus:a.c.FOR_SIGN}})}this.modal.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(c.c),o.Qb(d.a),o.Qb(u.a),o.Qb(l.e),o.Qb(m.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["j-payment-result"]],inputs:{result:"result",currency:"currency",amount:"amount",multySubscribers:"multySubscribers",hasRights:"hasRights",message:"message",payment:"payment",updateCreated:"updateCreated"},decls:20,vars:12,consts:[[1,"result-modal"],[1,"modal-header"],[1,"modal-body","result-body","pb-0"],[1,"text-center"],[1,"result-modal--label","mb-2"],[4,"ngIf","ngIfThen","ngIfElse"],["class","light mb-3 mt-2",4,"ngIf"],["class","text-muted mt-0 mb-1",4,"ngIf"],[1,"m-0","text-muted"],[1,"modal-body","result-body"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"btn","btn-block",3,"click"],["success",""],["failure",""],[1,"light","mb-3","mt-2"],[3,"money"],[1,"text-muted","mt-0","mb-1"],[1,"btn","btn-primary","btn-block",3,"click"],["src","./assets/img/history/modals/success.svg",3,"alt"],["src","./assets/img/history/modals/error.svg",3,"alt"]],template:function(e,t){if(1&e&&(o.Wb(0,"div",0),o.Rb(1,"div",1),o.Wb(2,"div",2),o.Wb(3,"div",3),o.Wb(4,"div",4),o.Pc(5,p,1,0,"ng-container",5),o.Vb(),o.Pc(6,y,2,1,"h3",6),o.Pc(7,b,2,1,"h3",6),o.Pc(8,v,5,1,"p",7),o.Wb(9,"p",8),o.Rc(10),o.Vb(),o.Vb(),o.Vb(),o.Wb(11,"div",9),o.Pc(12,h,3,0,"div",10),o.Wb(13,"div",11),o.Wb(14,"button",12),o.ic("click",(function(e){return t.closeModal(!1,!0)})),o.Rc(15,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Pc(16,g,2,3,"ng-template",null,13,o.Qc),o.Pc(18,f,2,3,"ng-template",null,14,o.Qc)),2&e){const e=o.Dc(17),i=o.Dc(19);o.Ab(5),o.sc("ngIf",t.result)("ngIfThen",e)("ngIfElse",i),o.Ab(1),o.sc("ngIf",t.result),o.Ab(1),o.sc("ngIf",!t.result),o.Ab(1),o.sc("ngIf",(null==t.payment?null:t.payment.type)==t.PAYMENT_TYPE.FOREIGN&&(null==t.payment?null:null==t.payment.details?null:t.payment.details.commission)),o.Ab(2),o.Sc(t.message||t.subtitle),o.Ab(2),o.sc("ngIf",t.result),o.Ab(2),o.Hb("btn-primary",!t.result)("btn-link",t.result)}},styles:["@-webkit-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@-webkit-keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@-webkit-keyframes colored-circle{0%{opacity:0}to{opacity:1}}@keyframes colored-circle{0%{opacity:0}to{opacity:1}}.inlinesvg .svg svg{display:inline}.icon--order-success svg polyline{-webkit-animation:checkmark .25s ease-in-out .7s backwards;animation:checkmark .25s ease-in-out .7s backwards}.icon--order-success svg circle{-webkit-animation:checkmark-circle .6s ease-in-out backwards;animation:checkmark-circle .6s ease-in-out backwards}.icon--order-success svg circle#colored{-webkit-animation:colored-circle .6s ease-in-out .7s backwards;animation:colored-circle .6s ease-in-out .7s backwards}.result-body{padding:1.5rem}"],encapsulation:2}),e})()},"O/Ur":function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return y}));var n=i("mrSG"),a=i("tk/3"),r=i("YMfE"),o=i("+/Tu"),s=i("TwVa"),c=i("fXoL"),d=i("p6Hd"),u=i("VnnJ"),l=i("mR7B"),m=i("bHA9"),p=function(e){return e.RU="RU",e.US="US",e.CN="CN",e.AU="AU",e.CA="CA",e.AE="AE",e}({});let y=(()=>{class e{constructor(e,t,i,n){this.api=e,this.companyService=t,this.maskedService=i,this.dictionaries=n}getCountries(){return this.api.get("countries")}getContractById(e){return this.api.get(`companies/${this.companyService.currentId}/fx-contracts/${e}`)}getContracts(){return Object(n.a)(this,void 0,void 0,(function*(){return this.api.get(`companies/${this.companyService.currentId}/fx-contracts`)}))}getCodeWords(e){return Object(n.a)(this,void 0,void 0,(function*(){if(e&&this.cashedCodeWordsList&&e===this.cashedCodeWordsCountry)return this.cashedCodeWordsList;let t=new a.h;t=t.append("countryCode",e);const i=yield this.api.get("dictionaries/codewords",null,t);return this.cashedCodeWordsCountry=e,this.cashedCodeWordsList=i,this.cashedCodeWordsList}))}getBanks(e=null,t=null){return Object(n.a)(this,void 0,void 0,(function*(){if(e===this.cashedBankQuery&&t===this.cashedBankCountryCode)return this.cashedBankList;this.cashedBankQuery=e,this.cashedBankCountryCode=t;let i=new a.h;e&&(i=i.append("search",e)),t&&(i=i.append("countryCode",t));const n=yield this.api.get("dictionaries/banks",null,i);return this.cashedBankList=n,n}))}getKbkList(){return this.api.get("dictionaries/kbk")}getStatuses(){return this.api.get("dictionaries/payer-status")}mapForm(e){var t,i,n,a,c,d,u,l,m,y,b,v;let h={commission:{amount:e.comission,currency:e.comissionCurrency},description:e.purpose,documentId:e.number,foreignPaymentDetails:{commissionWithdrawalIban:null===(t=e.commissionAccount)||void 0===t?void 0:t.iban,intermediaryBankBic:null===(i=e.intermediaryBank)||void 0===i?void 0:i.bic,intermediaryBankName:null===(n=e.intermediaryBank)||void 0===n?void 0:n.name,type:e.payComission?"OUR":"SHA"},valueDate:e.date&&Object(r.ngbDateToUTCStartDay)(e.date).toISOString()||e.date,payerIban:null===(a=e.senderAccount)||void 0===a?void 0:a.iban,paymentAmount:{amount:this.maskedService.getNumberedAmount(e.amount),currency:null===(d=null===(c=e.senderAccount)||void 0===c?void 0:c.balance)||void 0===d?void 0:d.currency}};if(e.knp){let t="";t=e.knpObject?e.knpObject.code:e.knp;const i=this.dictionaries.KNPDictionary.getItemByKey(t,"code");h.knp={code:i.code,name:i.name}}e.kbk&&(h.kbk={code:e.kbk.code,name:e.kbk.description}),e.withinContract&&(h.foreignPaymentDetails.fxContractId=e.contractId,h.foreignPaymentDetails.contract=e.contract,h.foreignPaymentDetails.fxContractRecipient=e.fxContractRecipient,h.foreignPaymentDetails.fxContractRecipientId=e.fxContractRecipientId),e.codeWord&&(h.foreignPaymentDetails.codeWord=e.codeWord),e.isRubNonRussia&&(h.foreignPaymentDetails.intermediaryBankBic=e.rubNonRussiaCorrespondentBank.bic,h.foreignPaymentDetails.intermediaryBankIban=e.rubNonRussiaCorrespondentIban);let g=e.bank;e.isRubNonRussia&&(g=e.rubNonRussiaBank);const f=e.countryCode||(null===(u=e.country)||void 0===u?void 0:u.code)||(null===(m=null===(l=e.fxContractRecipient)||void 0===l?void 0:l.country)||void 0===m?void 0:m.code)||(null===(y=e.fxContractRecipient)||void 0===y?void 0:y.countryCode);let k={category:s.i.FOREIGN,companyId:this.companyService.currentId,details:h,emailOnSuccess:e.emailOnSuccess,paymentRecipient:{cityName:e.cityName,countryCode:f,kbe:{code:e.kbeCode},kpp:e.kpp,name:e.name,recipientAccount:{bankName:null===(b=g)||void 0===b?void 0:b.name,bic:null===(v=g)||void 0===v?void 0:v.bic,iban:e.bankAccount?this.removeSpaces(e.bankAccount):e.bankAccount}},type:s.i.FOREIGN};return f==p.AU&&(k.paymentRecipient.address=e.senderAccount.balance.currency===o.a.AUD?{index:e.audIndex,state:e.audState,street:e.audStreet,buildingNumber:e.audBuildingNumber}:{text:e.audAddress}),f==p.CA&&(k.paymentRecipient.address={text:e.canAddress}),e.kio&&(k.paymentRecipient.iinOrBin=e.kio),e.kvo&&(h.foreignPaymentDetails.currencyTransactionCode=e.kvo),e.isRussianBudget&&(h.foreignPaymentDetails.oktmo=e.oktmo,h.foreignPaymentDetails.payerInn=e.payerInn,h.foreignPaymentDetails.payerKpp=e.payerKpp,h.foreignPaymentDetails.payerStatus=e.payerStatus,h.foreignPaymentDetails.paymentBasis=e.paymentBasis,h.foreignPaymentDetails.period=e.budgetPeriod,h.foreignPaymentDetails.uip=e.uip,h.foreignPaymentDetails.budgetDocNumber=e.budgetDocNumber),k}mapPayment(e){var t,i,n,a,o,c,d,u,l,m,p,y,b,v,h,g,f,k,S,R,A,P;return{type:s.i.FOREIGN,senderAccount:null,commissionAccount:null,comission:e.details.comission,payComission:"OUR"==e.details.foreignPaymentDetails.type,countryCode:(null===(t=e.paymentRecipient)||void 0===t?void 0:t.countryCode)||"",cityName:(null===(i=e.paymentRecipient)||void 0===i?void 0:i.cityName)||"",isNewPayment:e.isNewPayment||!1,contract:e.details.foreignPaymentDetails.fxContract,contractId:e.details.foreignPaymentDetails.fxContractId,fxContractRecipient:e.details.foreignPaymentDetails.fxContractRecipient,fxContractRecipientId:e.details.foreignPaymentDetails.fxContractRecipientId,withinContract:!!e.details.foreignPaymentDetails.fxContractId,name:(null===(n=e.paymentRecipient)||void 0===n?void 0:n.name)||"",bankAccount:(null===(a=e.paymentRecipient)||void 0===a?void 0:a.recipientAccount.iban)||"",kbeCode:(null===(c=null===(o=e.paymentRecipient)||void 0===o?void 0:o.kbe)||void 0===c?void 0:c.code)||"",number:e.details.documentId,date:e.details.valueDate&&Object(r.dateToNgbStruct)(new Date(e.details.valueDate)),knp:null===(d=e.details.knp)||void 0===d?void 0:d.code,purpose:e.details.description,amount:null===(u=e.details.paymentAmount)||void 0===u?void 0:u.amount,bankLabel:"",bank:null,hasIntermediaryBank:!!e.details.foreignPaymentDetails.intermediaryBankBic,intermediaryBankLabel:"",intermediaryBank:null,notify:!!e.emailOnSuccess,emailOnSuccess:e.emailOnSuccess,kpp:(null===(l=e.paymentRecipient)||void 0===l?void 0:l.kpp)||"",kvo:e.details.foreignPaymentDetails.currencyTransactionCode||"",kio:(null===(m=e.paymentRecipient)||void 0===m?void 0:m.iinOrBin)||"",isRussianBudget:null,isRussianTaxPayer:!(!e.details.foreignPaymentDetails.payerInn&&!e.details.foreignPaymentDetails.payerKpp),payerInn:e.details.foreignPaymentDetails.payerInn||"",payerKpp:e.details.foreignPaymentDetails.payerKpp||"",kbk:e.details.kbk?{code:e.details.kbk.code,description:e.details.kbk.name}:"",oktmo:e.details.foreignPaymentDetails.oktmo||"",payerStatus:e.details.foreignPaymentDetails.payerStatus||"",hasRussianBudgetExtras:!!(e.details.foreignPaymentDetails.paymentBasis||e.details.foreignPaymentDetails.budgetDocNumber||e.details.foreignPaymentDetails.period||e.details.foreignPaymentDetails.uip),paymentBasis:e.details.foreignPaymentDetails.paymentBasis||"",budgetDocNumber:e.details.foreignPaymentDetails.budgetDocNumber||"",budgetPeriod:e.details.foreignPaymentDetails.period||"",uip:e.details.foreignPaymentDetails.uip||"",codeWord:e.details.foreignPaymentDetails.codeWord,audIndex:(null===(y=null===(p=e.paymentRecipient)||void 0===p?void 0:p.address)||void 0===y?void 0:y.index)||"",audState:(null===(v=null===(b=e.paymentRecipient)||void 0===b?void 0:b.address)||void 0===v?void 0:v.state)||"",audStreet:(null===(g=null===(h=e.paymentRecipient)||void 0===h?void 0:h.address)||void 0===g?void 0:g.street)||"",audBuildingNumber:(null===(k=null===(f=e.paymentRecipient)||void 0===f?void 0:f.address)||void 0===k?void 0:k.buildingNumber)||"",audAddress:(null===(R=null===(S=e.paymentRecipient)||void 0===S?void 0:S.address)||void 0===R?void 0:R.text)||"",canAddress:(null===(P=null===(A=e.paymentRecipient)||void 0===A?void 0:A.address)||void 0===P?void 0:P.text)||""}}removeSpaces(e){return e.replace(/ /g,"")}}return e.\u0275fac=function(t){return new(t||e)(c.ec(d.a),c.ec(u.a),c.ec(l.a),c.ec(m.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Stn5:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("fXoL"),a=i("1kSV"),r=i("sYmb");let o=(()=>{class e{constructor(e){this.modal=e}ngOnInit(){}cancel(){this.modal.close(!1)}continue(){this.modal.close(!0)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(a.a))},e.\u0275cmp=n.Kb({type:e,selectors:[["j-payment-guard-modal"]],decls:18,vars:6,consts:[[1,"result-modal"],[1,"modal-header"],["type","button",1,"close",3,"click"],["src","./assets/icons/close.svg",3,"alt"],[1,"modal-body","p-3"],[1,"text-center"],[1,"modal-body","text-center"],[1,"form-group"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-link",3,"click"]],template:function(e,t){1&e&&(n.Wb(0,"div",0),n.Wb(1,"div",1),n.Wb(2,"button",2),n.ic("click",(function(e){return t.modal.dismiss()})),n.Rb(3,"img",3),n.mc(4,"translate"),n.Vb(),n.Vb(),n.Wb(5,"div",4),n.Wb(6,"div",5),n.Wb(7,"h5"),n.Rc(8,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438 \u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430?"),n.Vb(),n.Wb(9,"p"),n.Rc(10,"\u041f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f"),n.Vb(),n.Vb(),n.Vb(),n.Wb(11,"div",6),n.Wb(12,"div",7),n.Wb(13,"button",8),n.ic("click",(function(e){return t.continue()})),n.Rc(14,"\u0412\u044b\u0439\u0442\u0438"),n.Vb(),n.Wb(15,"button",9),n.ic("click",(function(e){return t.cancel()})),n.Rc(16),n.mc(17,"translate"),n.Vb(),n.Vb(),n.Vb(),n.Vb()),2&e&&(n.Ab(3),n.tc("alt",n.nc(4,2,"SHARED.CLOSE")),n.Ab(13),n.Sc(n.nc(17,4,"SHARED.CANCEL")))},pipes:[r.d],styles:[""]}),e})()},gm23:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("gzBp"),a=i("fXoL"),r=i("tyNb"),o=i("wtV8"),s=i("0mgW"),c=i("VO+5");let d=(()=>{class e{constructor(e,t,i,n,a){this.router=e,this.route=t,this.api=i,this.payments=n,this.notification=a}canActivate(e,t){var i,a,r,o;const s=null===(a=null===(i=this.router.getCurrentNavigation().extras)||void 0===i?void 0:i.state)||void 0===a?void 0:a.repeatPayment,c=(null===(r=e.params)||void 0===r?void 0:r.paymentId)||(null===(o=s)||void 0===o?void 0:o.id);let d=n.a.tenge.order;return s&&(d=this.payments.getPaymentRouteByType(s.type)),c?this.api.getPaymentById(c).then(e=>{const t=[this.payments.getPaymentRouteByType(e.type)];s||t.push(c),this.router.navigate(t,{state:{resolvedPayment:e}})}).catch(e=>{this.router.navigate([n.a.tenge.order]),this.notification.show({type:"error",message:e})}):this.router.navigate([d]),!1}}return e.\u0275fac=function(t){return new(t||e)(a.ec(r.c),a.ec(r.a),a.ec(o.a),a.ec(s.c),a.ec(c.c))},e.\u0275prov=a.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},kFTB:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i("YMfE"),a=i("3Pt+"),r=i("SMdK"),o=i("TwVa"),s=i("+/Tu"),c=i("fXoL"),d=i("0mgW"),u=i("7rOj"),l=i("bHA9");let m=(()=>{class e{constructor(e,t,i,n){this.fb=e,this.paymentsService=t,this.bankFromAccount=i,this.dictionaries=n}createPaymentInTengeForm(){const e=this.fb.group({type:void 0,iinOrBin:["",[a.H.required,a.H.minLength(12)]],name:["",[a.H.required,a.H.maxLength(250)]],bankAccount:[void 0,a.H.required],kbeCode:["",[a.H.required,r.a.kbe]],number:["",a.H.required],date:null,knp:[void 0,[a.H.required]],purpose:[""],senderAccount:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount),e=>{var t;return 0==(null===(t=e)||void 0===t?void 0:t.value)?{cantBeZero:!0}:null}]],vat:[!1],urgent:[!1],notify:[!1],emailOnSuccess:[{value:"",disabled:!0},[a.H.required,a.H.email]]}),{bankAccount:t,senderAccount:i}=e.controls;return t.setValidators([a.H.required,e=>{const t=Object(n.ibanPrefix)(e.value,s.a.KZT),a=i.value;return!e.value||t.length<18||!a||t!==a.iban?null:{isEqual:!0}},e=>this.paymentsService.bankExist(Object(n.ibanPrefix)(e.value||"",s.a.KZT)),e=>`KZ${e.value}`!==o.o.TAX_ACCOUNT?null:{taxAccountError:!0}]),i.setValidators([a.H.required,e=>(e.value&&t.updateValueAndValidity(),null)]),e}createTaxForm(){const e=this.fb.group({type:o.i.TAX,ugd:[void 0,a.H.required],kbk:["",[a.H.required]],number:["",a.H.required],date:void 0,knp:[{value:"",disabled:!0},[a.H.required]],senderAccount:["",a.H.required],purpose:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount)]],urgent:[!1],vin:[{value:"",disabled:!0}],intervalEnabled:!1,period:[{value:"",disabled:!0},[a.H.required]],periodStart:[{value:"",disabled:!0}],periodEnd:[{value:"",disabled:!0}],protocolNumber:[{value:"",disabled:!0},[a.H.required]]}),{periodEnd:t,periodStart:i}=e.controls,n=r.a.isSmallerThan(t),s=r.a.isGreaterThan(i);return i.setValidators([a.H.required,n,r.a.revalidateLinkControlIf(()=>!n(i)&&t.hasError("isGreaterThan"),t)]),t.setValidators([a.H.required,s,r.a.revalidateLinkControlIf(()=>!s(t)&&i.hasError("isSmallerThan"),i)]),e}createPensionForm(){return this.fb.group({type:o.i.PENSION,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["010",[a.H.required]],purpose:"",employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.i.PENSION)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],commonPeriodEnabled:!1})}createSocialForm(){return this.fb.group({type:o.i.SOCIAL,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["012",[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.i.SOCIAL)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:"",commonPeriodEnabled:!1})}createMedicalForm(){return this.fb.group({type:o.i.MEDICAL,date:void 0,period:[{value:void 0,disabled:!0},[a.H.required]],number:["",a.H.required],knp:["121",[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.i.MEDICAL)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:"",commonPeriodEnabled:!1})}createSalaryForm(){const e=this.fb.group({type:o.i.SALARY,bankReceiver:[""],bankAccount:[{value:"",disabled:!0}],date:void 0,number:["",a.H.required],knp:[void 0,[a.H.required]],employees:[void 0,[a.H.required,a.H.minLength(1),this.paymentsService.employeeGroupControlValidator(o.i.SALARY)]],senderAccount:["",a.H.required],amount:[0,[a.H.required,a.H.min(.01)]],urgent:[!1],purpose:[""],isResidents:!0}),{bankReceiver:t,bankAccount:i}=e.controls;return t.setValidators([a.H.required,e=>(e.value&&i.updateValueAndValidity(),null)]),i.setValidators([a.H.required,e=>{const i=Object(n.ibanPrefix)(e.value,s.a.KZT);if(i.length<7||!t.value)return null;const a=this.dictionaries.bankDictionary.getItemsByIds(t.value),r=this.paymentsService.bankFromAccount.transform(i);return a&&a.bic!==r?{difReceiverAndBankBiq:!0}:null}]),e}createCurrencyForm(){return this.fb.group({type:o.i.FOREIGN,senderAccount:["",a.H.required],commissionAccount:["",a.H.required],comission:[null],comissionCurrency:[null],payComission:[!1],countryCode:[void 0,a.H.required],country:[null],cityName:[void 0],contract:[null],contractId:[null],fxContractRecipient:[null],fxContractRecipientId:[null],withinContract:[!1],name:["",[a.H.required,a.H.maxLength(103)]],bankAccount:[""],kbeCode:["",[a.H.required,r.a.kbe]],number:["",a.H.required],date:[null],knp:[void 0,[a.H.required]],knpObject:[null],purpose:[""],amount:["",[a.H.required,a.H.min(this.paymentsService.rules.minAmount),a.H.max(this.paymentsService.rules.maxAmount),e=>{var t;return 0==(null===(t=e)||void 0===t?void 0:t.value)?{cantBeZero:!0}:null}]],bankLabel:["",a.H.required],bank:[null,a.H.required],hasIntermediaryBank:[!1],intermediaryBankLabel:[""],intermediaryBank:[null],notify:[!1],emailOnSuccess:[{value:"",disabled:!0},[a.H.required,a.H.email]],kpp:[""],kvo:[void 0],codeWord:[void 0],kio:[void 0,a.H.required],isRussianBudget:[null],isRussianTaxPayer:[null],payerInn:[null],payerKpp:[""],kbk:[null],oktmo:[""],payerStatus:["S08"],hasRussianBudgetExtras:[null],paymentBasis:[""],budgetDocNumber:[""],budgetPeriod:[""],uip:[null],isRubNonRussia:[!1],rubNonRussiaCorrespondentBankLabel:[""],rubNonRussiaCorrespondentBank:[null],rubNonRussiaBankLabel:[""],rubNonRussiaBank:[null],rubNonRussiaCorrespondentIban:[""],audIndex:[""],audState:[""],audStreet:[""],audBuildingNumber:[""],audAddress:[""],canAddress:[""]})}}return e.\u0275fac=function(t){return new(t||e)(c.ec(n.FormBuilderTypeSafe),c.ec(d.c),c.ec(u.b),c.ec(l.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);