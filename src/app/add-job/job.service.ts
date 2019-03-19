import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { JobData } from './job-data.model';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';
import swal from 'sweetalert2';
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
                console.log(responseData);
this.router.navigate(['/my-projects']);
                this.showSwal('secc');

            });
    }

    applyJob(jobAd) {
        jobAd = {
            jobAd: jobAd
        }
        this.http.post(BackUrl + '/postBodyC', jobAd).subscribe(result =>{
            this.router.navigate(['/my-cv']);
        })
    }

    sendJob(data: any) {
        this.http
            .post(BackUrl + '/send/Jobad', data)
            .subscribe(responseData => {
                this.router.navigate(['/']);
            });
    }

    getJobs(id: String) {
        return this.http.get<{jobNames: [String],  count: Number, id: [String]}>(BackUrl + '/get/jobs?projectid='+ id)
    }

  


    getJob(id: String) {
       return this.http
            .get(BackUrl + '/getjob?id=' + id)
           
            ;
    }
    
    deleteJob(id: String) {
      return this.http
            .delete(BackUrl + '/deletejob?id=' + id);
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

    getprojects(id: String) {
        return this.http
        .get<{projectName: [String],  count: Number, id: [String]}>(BackUrl + '/getprojects?id='+ id)
    }

    showSwal(type){
        if (type == 'secc') {
        swal({
          title: "تمت عملية الحذف بنجاح!",
          buttonsStyling: false,
          confirmButtonText:'نعم',
          type:'success',
          confirmButtonClass:'btn btn-success'
        }).catch(swal.noop)
      }

}
}