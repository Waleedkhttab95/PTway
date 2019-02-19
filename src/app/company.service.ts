import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class CompanyService {

    constructor(private http: HttpClient, private router: Router) {}


    getOneCandi(jobAd: String) {
        this.http
        .get(BackUrl + '/getOneCandi?jobAd='+jobAd)
        .subscribe(response =>{
            console.log(response);
            return response;
        });
    };

    postAccept(data: any) {
        this.http
        .post(BackUrl + 'postAcc', data)
        .subscribe(response =>{
            console.log(response);
            return response;
        });
    }

    getAccepted(jobAd :String) {
        this.http
        .get(BackUrl + '/getOneAccepted?jobAd='+jobAd)
        .subscribe(response =>{
            console.log(response);
            return response;
        });
    }
}