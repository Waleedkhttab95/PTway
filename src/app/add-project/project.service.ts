import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProjectData } from './project-data.model';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';

@Injectable({ providedIn: 'root' })

export class ProjectService {

    private project: ProjectData[] = [];

    constructor(private http: HttpClient, private router: Router) {}

    addproject(data: any) {
      this.http
      .post<{project: ProjectData}>(BackUrl + '/postproject' , data)
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
    }

    getprojects() {
        this.http
        .get(BackUrl + '/getprojects')
        .subscribe(data =>{
            console.log(data);
        });
    }

    getproject(id: String) {
        this.http
        .get(BackUrl + '/getproject?id=' + id)
        .subscribe(data =>{
            console.log(data);
            return data;
        });
    }

    deleteproject(id: String) {
       this.http
        .delete(BackUrl + '/deleteproject?id=' + id).subscribe(() =>{
            console.log('Deleted');
        });
    }


}