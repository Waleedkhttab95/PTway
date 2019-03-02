import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth = false;
  private token: string;
  private userId: string;
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
    this.http.post(BackUrl + '/userRegistreing', authData)
      .subscribe(() => {
        this.router.navigate(['/forms/userform']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  createCompany(companyName: string, email: string, CompanySpecialist: string, sector: string, password: string) {
    const authData = { companyName: companyName, email: email, CompanySpecialist: CompanySpecialist, sector: sector, password: password };
    this.http.post(BackUrl + '/companyRegistreing', authData)
      .subscribe(() => {
        this.router.navigate(['/forms/companyform']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, userId: string }>(BackUrl + '/login', authData)
      .subscribe(response => {
        console.log(response);
        const token = response.token;
        if (token) {
          this.token = token;
          this.isAuth = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          this.saveAuthData(token, this.userId);
          this.router.navigate(['/add-company-info']);
        }

      }, error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    this.token = this.getAuthData().token;
    this.isAuth = true;
    this.authStatusListener.next(true);
    this.userId = this.getAuthData().userId;
  }

  logOut() {
    this.token = null;
    this.isAuth = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.clearData();
    this.router.navigate(['/sign-in']);
  }

  private saveAuthData(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  private clearData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  getIsAuth() {
    return this.isAuth;
  }

  getUserId() {
    return this.userId;
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userId');
    if (!token) {
      return;
    }
    return {
      token: token,
      userId: user
    };
  }
}