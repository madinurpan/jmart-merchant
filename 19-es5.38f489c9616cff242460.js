function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3WgW":function(n,t,e){"use strict";e.r(t);var o,i,s,c=e("ofXK"),r=e("PCNd"),a=e("3Pt+"),b=e("tyNb"),l=e("fXoL"),p=e("sYmb"),g=function(){return["main"]},d=function(){return["pickup-points"]},f=function(){return["delivery"]},u=function(){return["schedule"]},_=function(){return["users"]},m=((i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=l.Kb({type:i,selectors:[["j-jmart-settings-tabs"]],decls:11,vars:10,consts:[[1,"tabs"],["routerLinkActive","tabs__link_active","translate","",1,"p1","tabs__link",3,"routerLink"]],template:function(n,t){1&n&&(l.Wb(0,"div",0),l.Wb(1,"a",1),l.Qc(2,"JMART.SETTINGS.INFORMATION.TITLE"),l.Vb(),l.Wb(3,"a",1),l.Qc(4,"JMART.SETTINGS.PICKUPPOINTS.TITLE"),l.Vb(),l.Wb(5,"a",1),l.Qc(6,"JMART.SETTINGS.DELIVERY.TITLE"),l.Vb(),l.Wb(7,"a",1),l.Qc(8,"JMART.SETTINGS.SCHEDULE.TITLE"),l.Vb(),l.Wb(9,"a",1),l.Qc(10,"JMART.SETTINGS.USERS.TITLE"),l.Vb(),l.Vb()),2&n&&(l.Ab(1),l.rc("routerLink",l.vc(5,g)),l.Ab(2),l.rc("routerLink",l.vc(6,d)),l.Ab(2),l.rc("routerLink",l.vc(7,f)),l.Ab(2),l.rc("routerLink",l.vc(8,u)),l.Ab(2),l.rc("routerLink",l.vc(9,_)))},directives:[b.f,b.e,p.a],styles:[".tabs[_ngcontent-%COMP%]{display:-webkit-box;display:flex;border-bottom:1px solid #eceef1}.tabs__link[_ngcontent-%COMP%]{color:#666c72;padding:1rem 0;display:block;border-bottom:2px solid transparent;bottom:-1.5px;position:relative}.tabs__link_active[_ngcontent-%COMP%]{color:#1a1c1f;font-weight:500;border-bottom-color:#ef5630}.tabs__link[_ngcontent-%COMP%] + .tabs__link[_ngcontent-%COMP%]{margin-left:40px}"]}),i),h=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=l.Kb({type:o,selectors:[["j-jmart-settings"]],decls:5,vars:0,consts:[[1,"settings"],["translate","",1,"header-title"]],template:function(n,t){1&n&&(l.Wb(0,"section",0),l.Wb(1,"h2",1),l.Qc(2,"JMART.SETTINGS.TITLE"),l.Vb(),l.Rb(3,"j-jmart-settings-tabs"),l.Rb(4,"router-outlet"),l.Vb())},directives:[p.a,m,b.h],styles:[".settings[_ngcontent-%COMP%]{padding-top:40px}"]}),o),C=["modal"],x=((s=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.modalRef.nativeElement.style.display="none"}}]),n}()).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=l.Kb({type:s,selectors:[["j-jmart-settings-logo-modal"]],viewQuery:function(n,t){var e;1&n&&l.Vc(C,!0),2&n&&l.Bc(e=l.jc())&&(t.modalRef=e.first)},decls:25,vars:3,consts:[[1,"modal"],["modal",""],["type","button",1,"close",3,"click"],["src","./assets/icons/close.svg",3,"alt"],[1,"container"],[1,"header"],["type","button",1,"header__back-button","btn","btn-outline-primary","mr-3",3,"click"],["src","assets/jmart/arrow-left.svg",1,"header__img"],[1,"m-0"],[1,"body"],[1,"body__no-logo"],[1,"body__logo-title"],[1,"body__logo-desc"],[1,"footer"],["type","button",1,"footer__btn"],["type","button",1,"footer__btn","footer__btn-primary"]],template:function(n,t){1&n&&(l.Wb(0,"div",0,1),l.Wb(2,"button",2),l.ic("click",(function(n){return t.close()})),l.Rb(3,"img",3),l.mc(4,"translate"),l.Vb(),l.Wb(5,"div",4),l.Wb(6,"div",5),l.Wb(7,"button",6),l.ic("click",(function(n){return t.close()})),l.Rb(8,"img",7),l.Vb(),l.Wb(9,"h5",8),l.Qc(10,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430"),l.Vb(),l.Vb(),l.Wb(11,"div",9),l.Wb(12,"div",10),l.Qc(13,"\u041b\u043e\u0433\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"),l.Vb(),l.Wb(14,"h5",11),l.Qc(15,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"),l.Vb(),l.Wb(16,"p",12),l.Qc(17,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"),l.Rb(18,"br"),l.Qc(19," \u043f\u0440\u043e\u0449\u0435 \u0432\u0430\u0441 \u0443\u0437\u043d\u0430\u0442\u044c"),l.Vb(),l.Vb(),l.Wb(20,"div",13),l.Wb(21,"button",14),l.Qc(22,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l.Vb(),l.Wb(23,"button",15),l.Qc(24,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b"),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&n&&(l.Ab(3),l.sc("alt",l.nc(4,1,"SHARED.CLOSE")))},pipes:[p.d],styles:[".modal[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:rgba(246,247,248,.8)}.close[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]{position:fixed;z-index:1}.close[_ngcontent-%COMP%]{margin:0;top:2vh;right:2vw}.close[_ngcontent-%COMP%]:focus, .close[_ngcontent-%COMP%]:hover{color:#000;text-decoration:none;cursor:pointer}.container[_ngcontent-%COMP%]{width:582px;height:506px;position:fixed;z-index:1;background:#fff;border-radius:.5rem}.header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:24px}.header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:24px}.header[_ngcontent-%COMP%]   .header__back-button[_ngcontent-%COMP%]{width:40px;height:40px;padding:0;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.header[_ngcontent-%COMP%]   .header__img[_ngcontent-%COMP%]{border-radius:12px}.body[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.body[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .body__no-logo[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.body[_ngcontent-%COMP%]   .body__no-logo[_ngcontent-%COMP%]{width:128px;height:128px;border:2px dashed #d6dadf;border-radius:.5rem;color:#b7bec5;font-size:12px;margin:30px 0 24px}.body[_ngcontent-%COMP%]   .body__logo-desc[_ngcontent-%COMP%]{font-size:14px;line-height:18px;color:#666c72;text-align:center;margin-bottom:36px}.footer[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.footer[_ngcontent-%COMP%]   .footer__btn[_ngcontent-%COMP%]{width:259px;height:48px;border:1px solid #ef5630;box-sizing:border-box;border-radius:12px;color:#ef5630;background:#fff}.footer[_ngcontent-%COMP%]   .footer__btn-primary[_ngcontent-%COMP%]{margin-left:12px;color:#fff;background:#ef5630}"]}),s);function y(n,t){1&n&&l.Rb(0,"j-jmart-settings-logo-modal")}var k,O,P,M,v,w,V,W,j,T=((P=function(){function n(){_classCallCheck(this,n),this.isOpen=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"open",value:function(){this.isOpen=!this.isOpen}}]),n}()).\u0275fac=function(n){return new(n||P)},P.\u0275cmp=l.Kb({type:P,selectors:[["j-jmart-settings-logo"]],decls:5,vars:1,consts:[["type","button",1,"logo",3,"click"],[1,"logo__text"],["src","./assets/jmart/camera.svg","title","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043b\u043e\u0433\u043e","alt","\u041a\u0430\u043c\u0435\u0440\u0430",1,"logo__img"],[4,"ngIf"]],template:function(n,t){1&n&&(l.Wb(0,"button",0),l.ic("click",(function(n){return t.open()})),l.Wb(1,"span",1),l.Qc(2,"\u041b\u043e\u0433\u043e"),l.Vb(),l.Rb(3,"img",2),l.Vb(),l.Oc(4,y,1,0,"j-jmart-settings-logo-modal",3)),2&n&&(l.Ab(4),l.rc("ngIf",t.isOpen))},directives:[c.u,x],styles:[".logo[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:56px;height:56px;border:2px dashed #d6dadf;border-radius:8px;background:#fff;color:#b7bec5;margin-right:20px}.logo[_ngcontent-%COMP%]:hover{cursor:pointer}.logo__img[_ngcontent-%COMP%]{display:none}"]}),P),Q=((O=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=l.Kb({type:O,selectors:[["j-company-input"]],decls:4,vars:0,consts:[[1,"input-container"],["type","text","id","company","name","company","placeholder"," ","value","TOO Tech and Friends"],["for","company"]],template:function(n,t){1&n&&(l.Wb(0,"div",0),l.Rb(1,"input",1),l.Wb(2,"label",2),l.Qc(3,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.Vb(),l.Vb())},styles:[".input-container[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{display:block}label[_ngcontent-%COMP%]{-webkit-transform:translate(.85rem,-2rem);transform:translate(.85rem,-2rem);font-size:12px;line-height:18px;color:#666c72}input[_ngcontent-%COMP%]{width:373px;height:56px;padding-left:20px;padding-top:4px;border:1px solid #d6dadf;border-radius:.5rem;-webkit-transition:border-color .2s ease;transition:border-color .2s ease}input[_ngcontent-%COMP%]:focus{outline:none}@supports not (-ms-ime-align:auto){label[_ngcontent-%COMP%]{-webkit-transform:translate(.85rem,-2rem);transform:translate(.85rem,-2rem);-webkit-transition:all .2s ease-out;transition:all .2s ease-out}input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{-webkit-transform:translate(1.35rem,-3.35rem);transform:translate(1.35rem,-3.35rem)}}"]}),O),I=((k=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||k)},k.\u0275cmp=l.Kb({type:k,selectors:[["j-jmart-settings-responsible-persons"]],decls:50,vars:0,consts:[[1,"persons-wrap"],[1,"persons-header"],["src","./assets/jmart/add.svg","alt","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",1,"persons-header__img"],[1,"persons-header__img-text"],[1,"persons-info"],[1,"persons-info__name"],[1,"persons-info__email"],[1,"persons-info__phone"],["src","./assets/jmart/edit.svg","title","\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",1,"persons-info__btn"],["src","./assets/jmart/delete.svg","title","\u0423\u0434\u0430\u043b\u0438\u0442\u044c",1,"persons-info__btn"],[1,"persons-noinfo"],[1,"persons-noinfo_light"]],template:function(n,t){1&n&&(l.Wb(0,"section",0),l.Wb(1,"div",1),l.Wb(2,"h6"),l.Qc(3,"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),l.Vb(),l.Wb(4,"span"),l.Rb(5,"img",2),l.Wb(6,"span",3),l.Qc(7,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.Vb(),l.Vb(),l.Vb(),l.Wb(8,"div",4),l.Wb(9,"p",5),l.Qc(10,"\u0425\u043e\u0432\u0430\u043d\u0441\u043a\u0430\u044f \u0410\u043d\u0442\u043e\u043d\u0438\u0434\u0430 \u0424\u0438\u043b\u0438\u043f\u043f\u043e\u0432\u043d\u0430"),l.Vb(),l.Wb(11,"p",6),l.Qc(12,"AntonidaHovanskaya96@gmail.com"),l.Vb(),l.Wb(13,"p",7),l.Qc(14,"+7 (702) 348-312-23"),l.Vb(),l.Rb(15,"img",8),l.Rb(16,"img",9),l.Vb(),l.Vb(),l.Wb(17,"section",0),l.Wb(18,"div",1),l.Wb(19,"h6"),l.Qc(20,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432"),l.Vb(),l.Wb(21,"span"),l.Rb(22,"img",2),l.Wb(23,"span",3),l.Qc(24,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.Vb(),l.Vb(),l.Vb(),l.Wb(25,"div",10),l.Wb(26,"span",11),l.Qc(27,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e"),l.Vb(),l.Vb(),l.Vb(),l.Wb(28,"section",0),l.Wb(29,"div",1),l.Wb(30,"h6"),l.Qc(31,"\u0416\u0430\u043b\u043e\u0431\u044b \u0438 \u043e\u0442\u0437\u044b\u0432\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"),l.Vb(),l.Wb(32,"span"),l.Rb(33,"img",2),l.Wb(34,"span",3),l.Qc(35,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.Vb(),l.Vb(),l.Vb(),l.Wb(36,"div",10),l.Wb(37,"span",11),l.Qc(38,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e"),l.Vb(),l.Vb(),l.Vb(),l.Wb(39,"section",0),l.Wb(40,"div",1),l.Wb(41,"h6"),l.Qc(42,"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0441\u043a\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),l.Vb(),l.Wb(43,"span"),l.Rb(44,"img",2),l.Wb(45,"span",3),l.Qc(46,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.Vb(),l.Vb(),l.Vb(),l.Wb(47,"div",10),l.Wb(48,"span",11),l.Qc(49,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e"),l.Vb(),l.Vb(),l.Vb())},styles:[".persons-wrap[_ngcontent-%COMP%]{max-width:766px;background-color:#fff;border-radius:8px;margin-bottom:20px}.persons-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:15px;border-bottom:1px solid #d6dadf}.persons-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}.persons-header[_ngcontent-%COMP%]   .persons-header__img[_ngcontent-%COMP%]{width:16px;height:16px;margin-right:10px;border-radius:3px}.persons-header[_ngcontent-%COMP%]   .persons-header__img-text[_ngcontent-%COMP%]{color:#ef5630}.persons-noinfo[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:68px}.persons-noinfo[_ngcontent-%COMP%]   .persons-noinfo_light[_ngcontent-%COMP%]{color:#666c72;font-size:14px;line-height:18px}.persons-info[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:68px;color:#1a1c1f;font-size:14px;line-height:18px;padding:16px}.persons-info[_ngcontent-%COMP%]   .persons-info__name[_ngcontent-%COMP%]{padding-left:16px}.persons-info[_ngcontent-%COMP%]   .persons-info__email[_ngcontent-%COMP%], .persons-info[_ngcontent-%COMP%]   .persons-info__name[_ngcontent-%COMP%]{margin:0;-webkit-box-flex:.5;flex-grow:.5}.persons-info[_ngcontent-%COMP%]   .persons-info__phone[_ngcontent-%COMP%]{width:140px;margin:auto}.persons-info[_ngcontent-%COMP%]   .persons-info__btn[_ngcontent-%COMP%]{width:24px;height:24px}.persons-info[_ngcontent-%COMP%]   .persons-info__btn[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),k),R=[{path:"",component:h,data:{title:"SETTINGS.TITLE"},children:[{path:"main",component:(W=function n(){_classCallCheck(this,n)},W.\u0275fac=function(n){return new(n||W)},W.\u0275cmp=l.Kb({type:W,selectors:[["ng-component"]],decls:14,vars:0,consts:[[1,"main"],[1,"text_gray"],[1,"info"],[1,"persons"]],template:function(n,t){1&n&&(l.Wb(0,"section",0),l.Wb(1,"h5"),l.Qc(2,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),l.Vb(),l.Wb(3,"p",1),l.Qc(4,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u043d\u0430 jmart.kz"),l.Vb(),l.Wb(5,"div",2),l.Rb(6,"j-jmart-settings-logo"),l.Rb(7,"j-company-input"),l.Vb(),l.Vb(),l.Wb(8,"section",3),l.Wb(9,"h5"),l.Qc(10,"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043b\u0438\u0446\u0430"),l.Vb(),l.Wb(11,"p",1),l.Qc(12,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0443\u0436\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438"),l.Vb(),l.Rb(13,"j-jmart-settings-responsible-persons"),l.Vb())},directives:[T,Q,I],styles:[".main[_ngcontent-%COMP%]{margin-top:30px}.main[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:-webkit-box;display:flex}h5[_ngcontent-%COMP%]{margin-bottom:0}.text_gray[_ngcontent-%COMP%]{color:#666c72;font-size:14px;line-height:18px}.persons[_ngcontent-%COMP%]{margin-top:30px}"]}),W)},{path:"pickup-points",component:(V=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),V.\u0275fac=function(n){return new(n||V)},V.\u0275cmp=l.Kb({type:V,selectors:[["j-j-mart-settings-pickup-points"]],decls:2,vars:0,template:function(n,t){1&n&&(l.Wb(0,"p"),l.Qc(1,"j-mart-settings-pickup-points works!"),l.Vb())},styles:[""]}),V)},{path:"delivery",component:(w=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),w.\u0275fac=function(n){return new(n||w)},w.\u0275cmp=l.Kb({type:w,selectors:[["j-jmart-settings-delivery"]],decls:2,vars:0,template:function(n,t){1&n&&(l.Wb(0,"p"),l.Qc(1,"jmart-settings-delivery works!"),l.Vb())},styles:[""]}),w)},{path:"schedule",component:(v=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=l.Kb({type:v,selectors:[["j-j-mart-settings-schedule"]],decls:2,vars:0,template:function(n,t){1&n&&(l.Wb(0,"p"),l.Qc(1,"j-mart-settings-schedule works!"),l.Vb())},styles:[""]}),v)},{path:"users",component:(M=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),M.\u0275fac=function(n){return new(n||M)},M.\u0275cmp=l.Kb({type:M,selectors:[["j-jmart-settings-users"]],decls:2,vars:0,template:function(n,t){1&n&&(l.Wb(0,"p"),l.Qc(1,"jmart-settings-users works!"),l.Vb())},styles:[""]}),M)},{path:"**",redirectTo:"main"}]}],E=((j=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ob({type:j}),j.\u0275inj=l.Nb({factory:function(n){return new(n||j)},imports:[[b.g.forChild(R)],b.g]}),j);e.d(t,"JmartSettingsModule",(function(){return L}));var S,L=((S=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ob({type:S}),S.\u0275inj=l.Nb({factory:function(n){return new(n||S)},imports:[[c.c,r.a,E,a.n,a.D]]}),S)}}]);