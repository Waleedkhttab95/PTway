import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'


const BackUrl = environment.BackUrl;

@Injectable({ providedIn: 'root' })

export class DashboardService {
    
    constructor(private http: HttpClient, private router: Router) { }

    getCounts() {
       return this.http.get(BackUrl + '/get/counts')
    }
}