(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3AB1":function(t,n,e){"use strict";e.d(n,"a",function(){return l});var i=e("AytR"),o=e("PSD3"),r=e.n(o),a=e("R7Hv"),s=e("CcnG"),c=e("t/Na"),p=e("ZYCi"),u=i.a.BackUrl,l=function(){function t(t,n,e){this.http=t,this.router=n,this.data=e,this.project=[]}return t.prototype.addproject=function(t){var n=this;this.http.post(u+"/postproject",t).subscribe(function(t){n.showSwal("secc"),n.projectId=t._id,n.router.navigate(["/add-job"])})},t.prototype.getprojects=function(){return this.http.get(u+"/getprojects")},t.prototype.getproject=function(t){return this.http.get(u+"/getproject?id="+t)},t.prototype.updateProject=function(t){var n=this;this.http.put(u+"/put/project",t,{responseType:"text"}).subscribe(function(t){n.data.changeStatus(!1),n.router.navigate(["/my-projects"])})},t.prototype.deleteproject=function(t){return this.http.delete(u+"/deleteproject?id="+t)},t.prototype.showSwal=function(t){"secc"==t&&r()({title:"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0641\u0638 \u0628\u0646\u062c\u0627\u062d!",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"\u0646\u0639\u0645",type:"success"}).catch(r.a.noop)},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(c.c),s.inject(p.m),s.inject(a.a))},token:t,providedIn:"root"}),t}()},"3S2p":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var i=e("F/XL"),o=e("6blF"),r=function(t){if("string"==typeof t.value)return Object(i.a)(null);var n=t.value,e=new FileReader;return o.a.create(function(t){e.addEventListener("loadend",function(){for(var n=new Uint8Array(e.result).subarray(0,4),i="",o=!1,r=0;r<n.length;r++)i+=n[r].toString(16);switch(i){case"89504e47":o=!0;break;case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":o=!0;break;default:o=!1}t.next(o?null:{invalidMimeType:!0}),t.complete()}),e.readAsArrayBuffer(n)})}},GSdw:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var i=e("t/Na"),o=e("AytR"),r=e("67Y/"),a=e("CcnG"),s=e("ZYCi"),c=o.a.BackUrl,p=(new i.g({"Content-Type":"application/json"}),function(){function t(t,n){this.http=t,this.router=n}return t.prototype.handleError=function(t){},t.prototype.extractData=function(t){return t||{}},t.prototype.getsectors=function(){return this.http.get(c+"/getsectors").pipe(Object(r.a)(this.extractData))},t.prototype.getspecialization=function(){return this.http.get(c+"/getspec").pipe(Object(r.a)(this.extractData))},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(i.c),a.inject(s.m))},token:t,providedIn:"root"}),t}())},NWqo:function(t,n,e){"use strict";e.d(n,"a",function(){return d});var i=e("K9Ia"),o=e("AytR"),r=e("67Y/"),a=e("CcnG"),s=e("t/Na"),c=e("ZYCi"),p=e("PSD3"),u=e.n(p),l=o.a.BackUrl,d=function(){function t(t,n){this.http=t,this.router=n,this.job=[],this.jobsUpdated=new i.a}return t.prototype.extractData=function(t){return t||{}},t.prototype.addJob=function(t){var n=this;this.http.post(l+"/postjob",t).subscribe(function(t){n.showSwal("secc"),n.jobData={country:t.country,city:t.city,gender:t.gender,public_Major:t.public_Major,jobAd:t._id},n.http.post(l+"/send/Jobad",n.jobData,{responseType:"text"}).subscribe(function(t){n.router.navigate(["/my-projects"])})})},t.prototype.applyJob=function(t){var n=this;this.http.post(l+"/postBodyC",t={jobAd:t}).subscribe(function(t){n.showSwal("apply"),n.router.navigate(["/my-cv"])})},t.prototype.sendJob=function(t){var n=this;this.http.post(l+"/send/Jobad",t).subscribe(function(t){n.router.navigate(["/"])})},t.prototype.getJobs=function(t){return this.http.get(l+"/get/jobs?projectid="+t)},t.prototype.getJob=function(t){return this.http.get(l+"/getjob?id="+t)},t.prototype.lockJob=function(t){var n=this;this.http.put(l+"/lockJob?id="+t,null).subscribe(function(t){n.showSwal("locked")})},t.prototype.getJobPreview=function(t){return this.http.get(l+"/preview/getjob?id="+t)},t.prototype.deleteJob=function(t){return this.http.delete(l+"/deletejob?id="+t)},t.prototype.getcountry=function(){return this.http.get(l+"/getcountry").pipe(Object(r.a)(this.extractData))},t.prototype.getcity=function(){return this.http.get(l+"/getcity").pipe(Object(r.a)(this.extractData))},t.prototype.getsectors=function(){this.http.get(l+"/getsectors").subscribe(function(t){return t})},t.prototype.getspecialization=function(){this.http.get(l+"/getspec").subscribe(function(t){return t})},t.prototype.getcontracts=function(){return this.http.get(l+"/getcontracts").pipe(Object(r.a)(this.extractData))},t.prototype.getprojects=function(t){return this.http.get(l+"/getprojects?id="+t)},t.prototype.getSkills=function(){return this.http.get(l+"/get/skills")},t.prototype.getPersonalSkills=function(){return this.http.get(l+"/get/p_skills")},t.prototype.getJobRequierdNumber=function(t){return this.http.get(l+"/getjob/req?id="+t)},t.prototype.showSwal=function(t){"secc"==t&&u()({title:"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643\u0645 ,\u0648\u0633\u0648\u0641 \u064a\u062a\u0645 \u0639\u0631\u0636 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u064a\u0646 \u0641\u064a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0631\u0634\u062d\u064a\u0646",buttonsStyling:!1,confirmButtonText:"\u0646\u0639\u0645",type:"success",confirmButtonClass:"btn btn-success"}).catch(u.a.noop),"apply"==t&&u()({title:"\u062a\u0647\u0627\u0646\u064a\u0646\u0627 ! \u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0633\u064a\u0631\u062a\u0643\u0645 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0639\u0644\u0646\u0629 , \u062d\u0638\u0627\u064b \u0645\u0648\u0641\u0642\u0627\u064b",buttonsStyling:!1,confirmButtonText:"\u0646\u0639\u0645",type:"success",confirmButtonClass:"btn btn-success"}).catch(u.a.noop),"locked"==t&&u()({title:"\u0644\u0642\u062f \u062a\u0645 \u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 , \u0644\u0646 \u062a\u0633\u062a\u0642\u0628\u0644 \u0623\u064a\u0627 \u0645\u0631\u0634\u062d \u0628\u0639\u062f \u0627\u0644\u0623\u0646",buttonsStyling:!1,confirmButtonText:"\u0646\u0639\u0645",type:"success",confirmButtonClass:"btn btn-success"}).catch(u.a.noop)},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(s.c),a.inject(c.m))},token:t,providedIn:"root"}),t}()},NvT6:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c});var i=e("CcnG"),o=(e("Blfk"),e("Ip0R"));e("Fzqc"),e("Wf4p"),e("ZYjt"),e("dWZg"),e("wFw1");var r=i["\u0275crt"]({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function a(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function s(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function c(t){return i["\u0275vid"](2,[(t()(),i["\u0275eld"](0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),i["\u0275did"](1,16384,null,0,o.o,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,a)),i["\u0275did"](3,278528,null,0,o.p,[i.ViewContainerRef,i.TemplateRef,o.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](5,278528,null,0,o.p,[i.ViewContainerRef,i.TemplateRef,o.o],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(t,n){t(n,1,0,"indeterminate"===n.component.mode),t(n,3,0,!0),t(n,5,0,!1)},function(t,n){var e=n.component;t(n,0,0,e.diameter,e.diameter,e._viewBox)})}},Oh3A:function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"a",function(){return c}),e.d(n,"b",function(){return p}),e.d(n,"d",function(){return l}),e.d(n,"e",function(){return s}),e.d(n,"f",function(){return u});var i=e("PSD3"),o=e.n(i),r=e("CcnG"),a=function(){return function(){this.title=function(){return o.a.getTitle()},this.content=function(){return o.a.getContent()},this.buttonsWrapper=function(){return o.a.getButtonsWrapper()},this.actions=function(){return o.a.getActions()},this.confirmButton=function(){return o.a.getConfirmButton()},this.cancelButton=function(){return o.a.getCancelButton()},this.footer=function(){return o.a.getFooter()}}}(),s=new r.InjectionToken("SwalDefaults"),c=function(){function t(t){this.defaultSwalOptions=t,this.beforeOpen=new r.EventEmitter,this.open=new r.EventEmitter,this.close=new r.EventEmitter,this.confirm=new r.EventEmitter,this.cancel=new r.EventEmitter,this.nativeSwal=o.a,this.isCurrentlyShown=!1,this.touchedProps=new Set,this.markTouched=this.touchedProps.add.bind(this.touchedProps),this.show=this.show.bind(this)}return Object.defineProperty(t.prototype,"options",{get:function(){var t=this,n={};return this.touchedProps.forEach(function(e){n[e]=t[e]}),n},set:function(t){Object.assign(this,t),Object.keys(t).forEach(this.markTouched)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){Object.keys(t).filter(function(t){return"options"!==t}).forEach(this.markTouched)},t.prototype.ngOnDestroy=function(){this.isCurrentlyShown&&o.a.close()},t.prototype.show=function(){var t=this,n=Object.assign({},this.defaultSwalOptions,this.options,{onBeforeOpen:function(n){t.beforeOpen.emit({modalElement:n})},onOpen:function(n){t.isCurrentlyShown=!0,t.open.emit({modalElement:n})},onClose:function(n){t.isCurrentlyShown=!1,t.close.emit({modalElement:n})}}),e=o()(n),i=n.useRejections;return e.then(function(n){i?t.confirm.emit(n):"value"in n?t.confirm.emit(n.value):t.cancel.emit(n.dismiss)},function(n){i&&t.cancel.emit(n)}),e},t}(),p=function(){function t(t,n){this.viewContainerRef=t,this.resolver=n,this.confirm=new r.EventEmitter,this.cancel=new r.EventEmitter}return Object.defineProperty(t.prototype,"swal",{set:function(t){t instanceof c?this.swalInstance=t:this.swalOptions=Array.isArray(t)?o.a.argsToParams(t):t},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){if(!this.swalInstance){var t=this.resolver.resolveComponentFactory(c);this.swalRef=this.viewContainerRef.createComponent(t),this.swalInstance=this.swalRef.instance}},t.prototype.ngOnDestroy=function(){this.swalRef&&this.swalRef.destroy()},t.prototype.onHostClicked=function(t){var n=this;t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),this.swalOptions&&(this.swalInstance.options=this.swalOptions);var e=this.swalInstance.confirm.asObservable().subscribe(function(t){return n.confirm.emit(t)}),i=this.swalInstance.cancel.asObservable().subscribe(function(t){return n.cancel.emit(t)});this.swalInstance.show().then(function(){e.unsubscribe(),i.unsubscribe()})},t}(),u=function(){},l=function(){function t(){}return t.forRoot=function(n){return{ngModule:t,providers:[(e=n,void 0===e&&(e={}),{provide:s,useValue:e})]};var e},t}()},lR2R:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"c",function(){return s}),e.d(n,"b",function(){return c}),e.d(n,"d",function(){return d});var i=e("CcnG"),o=e("Oh3A"),r=e("Ip0R"),a=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(t){return i["\u0275vid"](2,[],null,null)}var c=i["\u0275ccf"]("swal",o.a,function(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"swal",[],null,null,null,s,a)),i["\u0275did"](1,704512,null,0,o.a,[o.e],null,null)],null,null)},{title:"title",titleText:"titleText",text:"text",html:"html",footer:"footer",type:"type",backdrop:"backdrop",toast:"toast",target:"target",input:"input",width:"width",padding:"padding",background:"background",position:"position",grow:"grow",customClass:"customClass",timer:"timer",animation:"animation",allowOutsideClick:"allowOutsideClick",allowEscapeKey:"allowEscapeKey",allowEnterKey:"allowEnterKey",showConfirmButton:"showConfirmButton",showCancelButton:"showCancelButton",confirmButtonText:"confirmButtonText",cancelButtonText:"cancelButtonText",confirmButtonColor:"confirmButtonColor",cancelButtonColor:"cancelButtonColor",confirmButtonClass:"confirmButtonClass",cancelButtonClass:"cancelButtonClass",confirmButtonAriaLabel:"confirmButtonAriaLabel",cancelButtonAriaLabel:"cancelButtonAriaLabel",buttonsStyling:"buttonsStyling",reverseButtons:"reverseButtons",focusConfirm:"focusConfirm",focusCancel:"focusCancel",showCloseButton:"showCloseButton",closeButtonAriaLabel:"closeButtonAriaLabel",showLoaderOnConfirm:"showLoaderOnConfirm",preConfirm:"preConfirm",imageUrl:"imageUrl",imageWidth:"imageWidth",imageHeight:"imageHeight",imageAlt:"imageAlt",imageClass:"imageClass",inputPlaceholder:"inputPlaceholder",inputValue:"inputValue",inputOptions:"inputOptions",inputAutoTrim:"inputAutoTrim",inputAttributes:"inputAttributes",inputValidator:"inputValidator",inputClass:"inputClass",progressSteps:"progressSteps",currentProgressStep:"currentProgressStep",progressStepsDistance:"progressStepsDistance",options:"options"},{beforeOpen:"beforeOpen",open:"open",close:"close",confirm:"confirm",cancel:"cancel"},[]),p=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function u(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function l(t){return i["\u0275vid"](2,[(t()(),i["\u0275and"](16777216,null,null,1,null,u)),i["\u0275did"](1,540672,null,0,r.r,[i.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(t,n){t(n,1,0,n.component.template)},null)}var d=i["\u0275ccf"]("ng-component",o.f,function(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,l,p)),i["\u0275did"](1,49152,null,0,o.f,[],null,null)],null,null)},{template:"template"},{},[])},tHiz:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var i=e("AytR"),o=e("PSD3"),r=e.n(o),a=e("CcnG"),s=e("t/Na"),c=e("ZYCi"),p=i.a.BackUrl,u=function(){function t(t,n){this.http=t,this.router=n}return t.prototype.getCandidates=function(t){return this.http.get(p+"/getOneCandi?jobAd="+t)},t.prototype.addCandidate=function(t){var n=this;this.http.post(p+"/postBodyC",t).subscribe(function(){n.showSwal("secc"),n.router.navigate(["/"])})},t.prototype.addAcceptence=function(t){return this.http.post(p+"/postAcc",t)},t.prototype.getAcceptence=function(t){return this.http.get(p+"/getOneAccepted?jobAd="+t)},t.prototype.startJob=function(t){var n=this;this.http.post(p+"/start/job",t).subscribe(function(t){n.showSwal("secc"),n.router.navigate(["/my-offers"])})},t.prototype.endJob=function(t){var n=this;this.http.post(p+"/end/job",t,{responseType:"text"}).subscribe(function(t){n.showSwal("secc2"),n.router.navigate(["/acceptance-list"])})},t.prototype.showSwal=function(t){"secc"==t&&r()({title:"\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628 , \u0633\u0648\u0641 \u062a\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064a \u062d\u0627\u0644 \u0627\u062e\u062a\u064a\u0627\u0631\u0643",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"\u0646\u0639\u0645",type:"success"}).catch(r.a.noop),"secc2"==t&&r()({title:"\u062a\u0645 \u0627\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0642\u062f",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"\u0646\u0639\u0645",type:"success"}).catch(r.a.noop)},t.ngInjectableDef=a.defineInjectable({factory:function(){return new t(a.inject(s.c),a.inject(c.m))},token:t,providedIn:"root"}),t}()},tRTW:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r});var i=e("CcnG"),o=(e("/dO6"),e("Wf4p"),e("YSh2"),e("seP3"),e("Fzqc"),e("gIcY"),i["\u0275crt"]({encapsulation:2,styles:[".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;background-color:#000;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}.mat-standard-chip:active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],data:{}}));function r(t){return i["\u0275vid"](2,[(t()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","mat-chip-list-wrapper"]],null,null,null,null,null)),i["\u0275ncd"](null,0)],null,null)}}}]);