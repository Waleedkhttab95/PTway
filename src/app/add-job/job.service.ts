import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { JobData } from './job-data.model';
import {environment} from '../../environments/environment'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const BackUrl = environment.BackUrl;
import swal from 'sweetalert2';
@Injectable({ providedIn: 'root' })

export class JobService {

    private job: JobData[] = [];
    private jobsUpdated = new Subject<{ posts: JobData[], jobCount: number }>();
    jobData : Object;
    constructor(private http: HttpClient, private router: Router) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    addJob(data: any) {
        this.http
            .post(BackUrl + '/postjob', data)
            .subscribe((responseData: any) => {

                this.showSwal('secc');
                this.jobData = {
                    country: responseData.country,
                    city: responseData.city,
                    gender: responseData.gender,
                  //  personal_Skills: responseData.personal_Skills,
                    public_Major: responseData.public_Major,
                    jobAd: responseData._id

                }

                this.http
                .post(BackUrl + '/send/Jobad', this.jobData,{responseType: 'text'}).subscribe((res: any) =>{
                    this.router.navigate(['/my-projects']);
                });
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

   
    getcountry(): Observable<any> {
        return this.http.get(BackUrl + '/getcountry').pipe(
            map(this.extractData));
    }

   
    getcity(): Observable<any> {
        return this.http.get(BackUrl + '/getcity').pipe(
            map(this.extractData));
    }

    getsectors() {
        this.http
            .get(BackUrl + '/getsectors').subscribe(data => {
                return data;
            });
    }

    getspecialization() {
        this.http
            .get(BackUrl + '/getspec').subscribe(data => {
                return data;
            });
    }

   
    getcontracts(): Observable<any> {
        return this.http.get(BackUrl + '/getcontracts').pipe(
            map(this.extractData));
    }



    getprojects(id: String) {
        return this.http
        .get<{projectName: [String],  count: Number, id: [String]}>(BackUrl + '/getprojects?id='+ id)
    }

    getSkills() {
        return this.http
        .get(BackUrl + '/get/skills')
    }
    getPersonalSkills() {
        return this.http
        .get(BackUrl + '/get/p_skills')
    }
    getJobRequierdNumber(id) {
        return this.http
        .get(BackUrl+'/getjob/req?id='+ id)
    }

    showSwal(type){
        if (type == 'secc') {
        swal({
          title: "تمت عملية الإضافة بنجاح!",
          buttonsStyling: false,
          confirmButtonText:'نعم',
          type:'success',
          confirmButtonClass:'btn btn-success'
        }).catch(swal.noop)
      }

}
}