import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { Router } from '@angular/router';
import swal from 'sweetalert2';
 declare var $: any;
// declare const $: any;

import 'bootstrap-notify';

declare interface JQueryStatic {
  notify: any;
}

const BackUrl = environment.BackUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth = false;
  private isCompany: string = "false";
  private token: string;
  private userId: string;
  private companyName: string;
  
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) { }
  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(firstName: string, lastName: string, email: string, password: string) {
    const authData = { firstName: firstName, lastName: lastName, email: email, password: password };
    this.http.post<{token: string}>(BackUrl + '/userRegistreing', authData)
      .subscribe((response: any) => {
        if (response.token) {
          this.token = response.token;
          this.isAuth = true;
          this.isCompany = "false";
          this.authStatusListener.next(true);
          this.saveAuthData(response.token, this.userId, this.isCompany);
        this.router.navigate(['/add-user-info']);
      }
    }, error => {
        this.authStatusListener.next(false);
      });
   
  }

  createCompany(companyName: string, email: string, CompanySpecialist: string, sector: string, password: string) {
  

       if (sector == "VO") {
        const authData = { companyName: companyName, email: email,
          CompanySpecialist: CompanySpecialist, sector: sector, password: password, isActive:false };
          this.http.post<{ token: String }>(BackUrl + '/companyRegistreing', authData)
          .subscribe((response :any) => {
            if (response.token) {
              this.token = response.token;
              this.isAuth = true;
              this.isCompany = "true";
              this.companyName = authData.companyName;
              this.authStatusListener.next(true);
              this.saveAuthData(response.token, this.userId, this.isCompany);
              this.showSwal('warning-message');
              this.router.navigate(['/sign-in']);
       }
          }, error => {
            this.authStatusListener.next(false);
          });
      

      }
      else {
        const authData = { companyName: companyName, email: email,
          CompanySpecialist: CompanySpecialist, sector: sector, password: password };
          this.http.post<{ token: String }>(BackUrl + '/companyRegistreing', authData)
          .subscribe((response :any) => {
            if (response.token) {
              this.token = response.token;
              this.isAuth = true;
              this.isCompany = "true";
              this.companyName = authData.companyName;
              this.authStatusListener.next(true);
              this.saveAuthData(response.token, this.userId, this.isCompany);
              this.router.navigate(['/add-company-info']);

       }
          }, error => {
            this.authStatusListener.next(false);
          });
      }
 
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, userId: string }>(BackUrl + '/login', authData)
      .subscribe(response => {
        const token = response.token;
        if (token) {
          this.token = token;
          this.isAuth = true;
          this.isCompany = 'false';
          this.userId = response.userId;
          this.authStatusListener.next(true);
          this.saveAuthData(token, this.userId, this.isCompany);
          this.router.navigate(['/my-cv']);
        }

      }, error => {
        $.notify({message: error.error },
          {  type: 'danger'})
  
        this.authStatusListener.next(false);
      });
  }

  companyLogin(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, userId: string ,companyName: string}>(BackUrl + '/com_login', authData)
      .subscribe(response => {
        const token = response.token;
        if (token) {
          this.token = token;
          this.isAuth = true;
          this.isCompany = "true";
          this.userId = response.userId;
          this.companyName = response.companyName;
          this.authStatusListener.next(true);
          this.saveAuthData(token, this.userId, this.isCompany,this.companyName);
          this.router.navigate(['/dashboard']);
        }

      }, error => {
        $.notify({message: error.error },
          {  type: 'danger'})
        this.authStatusListener.next(false);
      });
  }


  autoAuthUser() {
    this.token = this.getAuthData().token;
    this.isAuth = true;
    this.isCompany = this.getAuthData().isCompany;
    this.companyName = this.getAuthData().companyName;
    this.authStatusListener.next(true);
    this.userId = this.getAuthData().userId;
  }

  logOut() {
    this.token = null;
    this.isAuth = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.isCompany = null;
    this.clearData();
    this.router.navigate(['/sign-in']);
  }

  private saveAuthData(token: string, userId: string, isCompany: string, companyName?:string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('isCompany', isCompany);
    localStorage.setItem('companyName', companyName);
  }

  private clearData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isCompany');
    localStorage.removeItem('companyName');
  }

  getIsAuth() {
    return this.isAuth;
  }

  getUserId() {
    return this.userId;
  }

  getIsCompany() {
    return this.isCompany;
  }

  getCompanyName() {
    return this.companyName;
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userId');
    const isCompany = localStorage.getItem('isCompany');
    const companyName = localStorage.getItem('companyName');

    if (!token) {
      return;
    }
    return {
      token: token,
      userId: user,
      isCompany: isCompany,
      companyName: companyName
    };
  }
  showSwal(type) {
    if (type == 'warning-message') {
      swal({
        title: "تمت عملية التسجيل بنجاح!",
        text: "سيتم ارسال رسالة عبر الريد الالكتروني عند تفعيل الحساب الخاص بك!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning",
        type: "warning"
      }).catch(swal.noop)
    }
  }
}