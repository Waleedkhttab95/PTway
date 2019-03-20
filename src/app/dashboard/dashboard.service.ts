import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class DashboardService {
    
    constructor(private http: HttpClient, private router: Router) { }

    getCounts() {
       return this.http.get(BackUrl + '/get/counts')
    }
}