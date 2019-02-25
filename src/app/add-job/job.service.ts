import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { JobData } from './job-data.model';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class JobService {

    private job: JobData[] = [];
    private jobsUpdated = new Subject<{ posts: JobData[], jobCount: number }>();

    constructor(private http: HttpClient, private router: Router) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    addJob(data: any) {
        this.http
            .post<{ job: JobData }>(BackUrl + '/postjob', data)
            .subscribe(responseData => {
                this.router.navigate(['/']);
            });
    }

    sendJob(data: any) {
        this.http
            .post(BackUrl + '/send/Jobad', data)
            .subscribe(responseData => {
                this.router.navigate(['/']);
            });
    }

    // getJobs() {
    //     this.http.get(BackUrl + '/getjobs').subscribe(data => {
    //         console.log(data);
    //     });
    // }

    getJobs(): Observable<any> {
        return this.http.get(BackUrl + '/getjobs').pipe(
            map(this.extractData));
    }


    getJob(id: String) {
        this.http
            .get(BackUrl + '/getjob?id=' + id)
            .subscribe(data => {
                console.log(data);
            });
    }

    deleteJob(id: String) {
        this.http
            .delete(BackUrl + '/deletejob?id=' + id).subscribe(() => {
                console.log('Deleted');
            });
    }

    // getcountry() {
    //     this.http
    //         .get(BackUrl + '/getcountry').subscribe(data => {
    //             console.log(data);
    //             return data;
    //         });
    // }
    getcountry(): Observable<any> {
        return this.http.get(BackUrl + '/getcountry').pipe(
            map(this.extractData));
    }

    // getcity() {
    //     this.http
    //         .get(BackUrl + '/getcity').subscribe(data => {
    //             console.log(data);
    //             return data;
    //         });
    // }

    getcity(): Observable<any> {
        return this.http.get(BackUrl + '/getcity').pipe(
            map(this.extractData));
    }

    getsectors() {
        this.http
            .get(BackUrl + '/getsectors').subscribe(data => {
                console.log(data);
                return data;
            });
    }

    getspecialization() {
        this.http
            .get(BackUrl + '/getspec').subscribe(data => {
                console.log(data);
                return data;
            });
    }

    // getcontracts() {
    //     this.http
    //     .get(BackUrl + '/getcontracts').subscribe(data =>{
    //         console.log(data);
    //         return data;
    //     });
    // }

    getcontracts(): Observable<any> {
        return this.http.get(BackUrl + '/getcontracts').pipe(
            map(this.extractData));
    }

    // getprojects() {
    //     this.http
    //         .get(BackUrl + '/getprojects')
    //         .subscribe(data => {
    //             console.log(data);
    //         });
    // }

    getprojects(): Observable<any> {
        return this.http.get(BackUrl + '/getprojects').pipe(
            map(this.extractData));
    }



}