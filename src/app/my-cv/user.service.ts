import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


const BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })
 export class UserService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

    addUserInfo(data:any) {
        this.http
        .post(BackUrl + '/postuserinfo', data).subscribe(response =>{
            this.router.navigate(['/my-cv']);
        });
    }
    getUserInfo() {
        console.log(this.auth.getUserId());
        return this.http
        .get(BackUrl + '/getuserinfo' );
    }

    getUser() {
        return this.http
        .get(BackUrl + '/currentuser');
    }

    getUnreadNotification() {
        console.log(this.auth.getUserId());
        return this.http
        .get(BackUrl+'/get/unread/notification');
    }

    getLastNotification() {
        return this.http
        .get(BackUrl + '/get/lastnotifcation');
    }

    getAllNotification() {
        return this.http
        .get(BackUrl + '/get/allnotifications');
    }

    getSpicificNotification(id:string) {
        return this.http
        .get(BackUrl + '/get/notification?notiId='+id);
    }

   
 }