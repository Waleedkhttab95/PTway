import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const BackUrl = 'https://ptway-dev.herokuapp.com/api';


@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    addUserInfo(data: any) {
        this.http
            .post(BackUrl + '/postuserinfo', data).subscribe(response => {
                this.router.navigate(['/my-cv']);
            });
    }
    getUserInfo() {
        console.log(this.auth.getUserId());
        return this.http
            .get(BackUrl + '/getuserinfo');
    }

    getUser() {
        return this.http
            .get(BackUrl + '/currentuser');
    }

    getUnreadNotification() {
        console.log(this.auth.getUserId());
        return this.http
            .get(BackUrl + '/get/unread/notification');
    }

    getLastNotification() {
        return this.http
            .get(BackUrl + '/get/lastnotifcation');
    }

    getAllNotification() {
        return this.http
            .get(BackUrl + '/get/allnotifications');
    }

    getSpicificNotification(id: string) {
        return this.http
            .get(BackUrl + '/get/notification?notiId=' + id);
    }
    getcity(): Observable<any> {
        return this.http.get(BackUrl + '/getcity').pipe(
            map(this.extractData));
    }
    getcountry(): Observable<any> {
        return this.http.get(BackUrl + '/getcountry').pipe(
            map(this.extractData));
    }
    getmajors(): Observable<any> {
        return this.http.get(BackUrl + '/get/majors').pipe(
            map(this.extractData));
    }
    getspMajors(id: string): Observable<any> {
        return this.http.get(BackUrl + '/get/spMajors?id=' + id).pipe(
            map(this.extractData));
    }
    getuniversty(): Observable<any> {
        return this.http.get(BackUrl + '/get/universty').pipe(
            map(this.extractData));
    }
}