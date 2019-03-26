import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment'
import { map, catchError, tap } from 'rxjs/operators';
const BackUrl = environment.BackUrl;

@Injectable({ providedIn: 'root' })

export class CompanyService {


    constructor(private http: HttpClient, private router: Router) { }

getCompanyInfo() {
    return this.http.get(BackUrl+ '/getcompanyinfo')
    
}

updateCompanyInfo(data: any) {
    this.http
    .put(BackUrl + '/put/companyinfo', data).subscribe(response => {
        this.router.navigate(['/company-profile']);
    });
}



}