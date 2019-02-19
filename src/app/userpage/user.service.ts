import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private http: HttpClient, private router: Router) {}

    getnotifications(userId: String) {
     this.http
     .get(BackUrl + '/get/notifications?userId=' + userId)
     .subscribe(data => {
         console.log(data);
         return data;
     });
    }

    getnotification(notiId: String) {
        this.http
        .get(BackUrl + '/get/notifications?notiId=' + notiId)
        .subscribe(data => {
            console.log(data);
            return data;
        });
       }

    postCandidate(data: any) {
        this.http
        .get(BackUrl + '/postBodyC' , data)
        .subscribe(response =>{
            console.log(response);
            return response;
        });
    }



}