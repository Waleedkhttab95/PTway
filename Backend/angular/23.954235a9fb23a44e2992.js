(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"mi/+":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=function(){return function(){}}(),e=u("pMnS"),o=u("5fAV"),s=u("qXBG"),c=function(){function l(l,n){this.companyService=l,this.authService=n}return l.prototype.ngOnInit=function(){var l=this;this.companyService.getCompanyInfo().subscribe(function(n){l.authService.autoAuthUser(),l.companyName=l.authService.getCompanyName(),l.country=n.country,l.city=n.city,l.address=n.address,l.info=n.info,l.vision=n.vision,l.message=n.message,"null"!=n.personal_web&&(l.personal_web=n.personal_web),"null"!=n.facebook&&(l.facebook=n.facebook),"null"!=n.twitter&&(l.twitter=n.twitter),"null"!=n.instagram&&(l.instagram=n.instagram),"null"!=n.linkedin&&(l.linkedin=n.linkedin),"null"!=n.imagePath&&(l.imagePath=n.imagePath)})},l}(),d=t["\u0275crt"]({encapsulation:0,styles:[[".custom-card[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.custom-h6[_ngcontent-%COMP%], .custom-p[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function i(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,38,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,37,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,35,"div",[["class","col-md-8 custom-card"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,34,"div",[["class","card card-profile"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,2,"div",[["class","card-avatar"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"img",[["class","img"],["style","width: 100px;height: 100px; "]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,30,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"h6",[["class","card-category text-gray"]],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,1,"p",[["class","category"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xa0"])),(l()(),t["\u0275eld"](13,0,null,null,1,"button",[["class","btn btn-just-icon btn-round btn-twitter"],["mat-raised-button",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,0,"i",[["class","fa fa-twitter"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-just-icon btn-round btn-facebook"],["mat-raised-button",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,0,"i",[["class","fa fa-facebook"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,1,"button",[["class","btn btn-just-icon btn-round btn-linkedin"],["mat-raised-button",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,null,0,"i",[["class","fa fa-linkedin"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,1,"button",[["class","btn btn-just-icon btn-round btn-linkedin"],["mat-raised-button",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-instagram"]],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,1,"button",[["class","btn btn-just-icon btn-round btn-linkedin"],["mat-raised-button",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](22,0,null,null,0,"i",[["class","fa fa-globe"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,1,"h6",[["class","card-category text-bold custom-h6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["- \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0627\u0645\u0629:"])),(l()(),t["\u0275eld"](25,0,null,null,1,"p",[["class","card-description custom-p"]],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,[" "," "])),(l()(),t["\u0275eld"](27,0,null,null,1,"h6",[["class","card-category uk-text-bold custom-h6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["- \u0627\u0644\u0631\u0624\u064a\u0629:"])),(l()(),t["\u0275eld"](29,0,null,null,1,"p",[["class","card-description custom-p"]],null,null,null,null,null)),(l()(),t["\u0275ted"](30,null,[" "," "])),(l()(),t["\u0275eld"](31,0,null,null,1,"h6",[["class","card-category text-bold custom-h6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["- \u0627\u0644\u0631\u0633\u0627\u0644\u0629:"])),(l()(),t["\u0275eld"](33,0,null,null,1,"p",[["class","card-description custom-p"]],null,null,null,null,null)),(l()(),t["\u0275ted"](34,null,[" "," "])),(l()(),t["\u0275eld"](35,0,null,null,1,"h6",[["class","card-category text-bold custom-h6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["- \u0627\u0644\u0639\u0646\u0648\u0627\u0646:"])),(l()(),t["\u0275eld"](37,0,null,null,1,"p",[["class","card-description custom-p"]],null,null,null,null,null)),(l()(),t["\u0275ted"](38,null,[" "," "]))],null,function(l,n){var u=n.component;l(n,7,0,u.imagePath),l(n,10,0,u.companyName),l(n,26,0,u.info),l(n,30,0,u.vision),l(n,34,0,u.message),l(n,38,0,u.address)})}function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-company-profile",[],null,null,null,i,d)),t["\u0275did"](1,114688,null,0,c,[o.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var m=t["\u0275ccf"]("app-company-profile",c,r,{},{},[]),p=u("Ip0R"),f=u("gIcY"),b=u("ZYCi");u.d(n,"CompanyProfileModuleNgFactory",function(){return g});var g=t["\u0275cmf"](a,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,m]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,p.m,p.l,[t.LOCALE_ID,[2,p.y]]),t["\u0275mpd"](4608,f["\u0275angular_packages_forms_forms_j"],f["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](1073742336,p.c,p.c,[]),t["\u0275mpd"](1073742336,b.q,b.q,[[2,b.w],[2,b.m]]),t["\u0275mpd"](1073742336,f["\u0275angular_packages_forms_forms_bc"],f["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,f.FormsModule,f.FormsModule,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,b.k,function(){return[[{path:"",children:[{path:"",component:c}]}]]},[])])})}}]);