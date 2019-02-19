import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class InfoService {
    constructor(private http: HttpClient, private router: Router) {}

    addUserInfo(data: any) {
        this.http
        .post(BackUrl + '/postuserinfo' , data)
        .subscribe(response =>{
            console.log(response);
            return response;
        });
    }

    addCompanyInfo(data: any) {
        this.http
        .post(BackUrl + '/postcompanyinfo' , data)
        .subscribe(response => {
            console.log(response);
            return response;
        });
    }

    getUserInfo(id: String) {
        this.http
        .get(BackUrl + '/getuserinfo?id=' + id)
        .subscribe(data =>{
            console.log(data);
        });
    }

    getCompanyInfo(id: String) {
        this.http
        .get(BackUrl + '/getcompanyinfo?id=' + id)
        .subscribe(data =>{
            console.log(data);
        });
    }
}