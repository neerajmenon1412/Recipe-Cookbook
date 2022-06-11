function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CXQP:function(e,t,n){"use strict";n.r(t),n.d(t,"ShoppingListModule",(function(){return y}));var i=n("fXoL"),r=n("ozzT"),o=n("7F1V"),s=n("9rNa"),c=n("3Pt+"),a=n("ofXK"),b=["f"];function u(e,t){if(1&e){var n=i.Nb();i.Mb(0,"button",13),i.Ub("click",(function(){return i.cc(n),i.Wb().onDelete()})),i.gc(1,"Delete"),i.Lb()}}var l,d=((l=function(){function e(t){_classCallCheck(this,e),this.slService=t,this.editMode=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscription=this.slService.startedEditing.subscribe((function(t){e.editedItemIndex=t,e.editMode=!0,e.editedItem=e.slService.getIngredient(e.editedItemIndex),e.slForm.setValue({name:e.editedItem.name,amount:e.editedItem.amount})}))}},{key:"onSubmit",value:function(e){var t=e.value,n=new s.a(t.name,t.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,n):this.slService.addIngredient(n),this.editMode=!1}},{key:"onClear",value:function(){this.slForm.reset(),this.editMode=!1}},{key:"onDelete",value:function(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}},{key:"ngOnDestroy",value:function(){this.slService.startedEditing.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||l)(i.Jb(r.a))},l.\u0275cmp=i.Db({type:l,selectors:[["app-shopping-edit"]],viewQuery:function(e,t){var n;1&e&&i.kc(b,!0),2&e&&i.ac(n=i.Vb())&&(t.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","name","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e){var n=i.Nb();i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"form",2,3),i.Ub("ngSubmit",(function(){i.cc(n);var e=i.bc(3);return t.onSubmit(e)})),i.Mb(4,"div",0),i.Mb(5,"div",4),i.Mb(6,"label",5),i.gc(7,"Name"),i.Lb(),i.Kb(8,"input",6),i.Lb(),i.Mb(9,"div",7),i.Mb(10,"label",8),i.gc(11,"Amount"),i.Lb(),i.Kb(12,"input",9),i.Lb(),i.Lb(),i.Mb(13,"div",0),i.Mb(14,"div",1),i.Mb(15,"button",10),i.gc(16),i.Lb(),i.fc(17,u,2,0,"button",11),i.Mb(18,"button",12),i.Ub("click",(function(){return t.onClear()})),i.gc(19,"Clear"),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb()}if(2&e){var r=i.bc(3);i.zb(15),i.Xb("disabled",!r.valid),i.zb(1),i.hc(t.editMode?"Update":"Add"),i.zb(1),i.Xb("ngIf",t.editMode)}},directives:[c.u,c.m,c.n,c.a,c.l,c.o,c.s,c.p,c.q,a.i],styles:[""]}),l);function f(e,t){if(1&e){var n=i.Nb();i.Mb(0,"a",4),i.Ub("click",(function(){i.cc(n);var e=t.index;return i.Wb().onEditItem(e)})),i.gc(1),i.Lb()}if(2&e){var r=t.$implicit;i.zb(1),i.jc(" ",r.name,"(",r.amount,")")}}var p,g,m=((p=function(){function e(t,n){_classCallCheck(this,e),this.slService=t,this.loggingService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.ingredients=this.slService.getIngredients(),this.igChangeSub=this.slService.ingredientsChanged.subscribe((function(t){e.ingredients=t})),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit")}},{key:"onEditItem",value:function(e){this.slService.startedEditing.next(e)}},{key:"ngOnDestroy",value:function(){this.igChangeSub.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||p)(i.Jb(r.a),i.Jb(o.a))},p.\u0275cmp=i.Db({type:p,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor:pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(e,t){1&e&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Kb(2,"app-shopping-edit"),i.Kb(3,"hr"),i.Mb(4,"ul",2),i.fc(5,f,2,2,"a",3),i.Lb(),i.Lb(),i.Lb()),2&e&&(i.zb(5),i.Xb("ngForOf",t.ingredients))},directives:[d,a.h],styles:[""]}),p),v=n("tyNb"),h=n("PCNd"),y=((g=function e(){_classCallCheck(this,e)}).\u0275mod=i.Hb({type:g}),g.\u0275inj=i.Gb({factory:function(e){return new(e||g)},imports:[[c.j,v.f.forChild([{path:"",component:m}]),h.a]]}),g)}}]);