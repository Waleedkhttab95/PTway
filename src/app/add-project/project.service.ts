import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'
import { ProjectData } from './project-data.model';
import swal from 'sweetalert2';

const BackUrl = environment.BackUrl;
@Injectable({ providedIn: 'root' })

export class ProjectService {

    // headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    private project: ProjectData[] = [];
    projectId: String;
    constructor(private http: HttpClient, private router: Router) {}

    addproject(data: any) {
      this.http
      .post<{project: ProjectData, _id: String}>(BackUrl + '/postproject' , data)
      .subscribe(responseData => {
        this.showSwal('secc');
        this.projectId = responseData._id;

         this.router.navigate(['/my-projects']);
      });
    }

    getprojects() {
        return this.http
        .get<{projectName: [String],  count: Number, id: [String]}>(BackUrl + '/getprojects')
    }

    getproject(id: String) {
       return this.http
        .get<{projectName: String,  projectDescription: String, id: String}>(BackUrl + '/getproject?id=' + id);
        
    }

    updateProject( data: any) {
        const response =  this.http
        .put(BackUrl+ '/put/project', data,{ responseType: 'text'})
        .subscribe(responseData => {
           this.router.navigate(['/my-projects']);
        });;
    }

    deleteproject(id: String) {
     return this.http
        .delete(BackUrl + '/deleteproject?id=' + id);
    }
    showSwal(type){
        if (type == 'secc') {
        swal({
          title: "تمت عملية الحفظ بنجاح!",
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success',
          confirmButtonText:'نعم',
          type:'success',
        }).catch(swal.noop)
      } 

}
}