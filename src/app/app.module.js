"use strict";var __decorate=this&&this.__decorate||function(o,e,n,t){var r,p=arguments.length,c=p<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,n,t);else for(var a=o.length-1;0<=a;a--)(r=o[a])&&(c=(p<3?r(c):3<p?r(e,n,c):r(e,n))||c);return 3<p&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),router_1=require("@angular/router"),app_routing_module_1=require("./app-routing.module"),app_component_1=require("./app.component"),car_component_1=require("./components/car/car.component"),contacts_component_1=require("./components/contacts/contacts.component"),login_component_1=require("./components/login/login.component"),appRoutes=[{path:"",component:car_component_1.CarComponent},{path:"about",component:contacts_component_1.ContactsComponent},{path:"login",component:login_component_1.LoginComponent}],AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,car_component_1.CarComponent,contacts_component_1.ContactsComponent,login_component_1.LoginComponent],imports:[platform_browser_1.BrowserModule,app_routing_module_1.AppRoutingModule,forms_1.FormsModule,router_1.RouterModule.forRoot(appRoutes)],providers:[],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;