import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JobData } from './job-data.model';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class JobService {

    private job: JobData[] = [];
    private jobsUpdated = new Subject<{posts: JobData[], jobCount: number}>();

    constructor(private http: HttpClient, private router: Router) {}

    addJob(data: any) {
      this.http
      .post<{job: JobData}>(BackUrl + '/postjob' , data)
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
    }

    sendJob(data: any) {
        this.http
        .post(BackUrl + '/send/Jobad' , data)
        .subscribe(responseData => {
          this.router.navigate(['/']);
        });
    }

    getJobs() {
        this.http
        .get(BackUrl + '/getjobs')
        .subscribe(data =>{
            console.log(data);
        });
    }

    getJob(id: String) {
        this.http
        .get(BackUrl + '/getjob?id=' + id)
        .subscribe(data =>{
            console.log(data);
        });
    }

    deleteJob(id: String) {
       this.http
        .delete(BackUrl + '/deletejob?id=' + id).subscribe(() =>{
            console.log('Deleted');
        });
    }

    getcountry() {
        this.http
        .get(BackUrl + '/getcountry').subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    getcity() {
        this.http
        .get(BackUrl + '/getcity').subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    getsectors() {
        this.http
        .get(BackUrl + '/getsectors').subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    getspecialization() {
        this.http
        .get(BackUrl + '/getspec').subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    getcontracts() {
        this.http
        .get(BackUrl + '/getcontracts').subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    getprojects() {
        this.http
        .get(BackUrl + '/getprojects')
        .subscribe(data =>{
            console.log(data);
        });
    }

}