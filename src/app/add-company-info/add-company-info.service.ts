import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const BackUrl = environment.BackUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddCompanyInfoService {

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  constructor(private http: HttpClient, private router: Router) { }

  getcountry(): Observable<any> {
    return this.http.get(BackUrl + '/getcountry').pipe(
      map(this.extractData));
  }
  getcity(): Observable<any> {
    return this.http.get(BackUrl + '/getcity').pipe(
      map(this.extractData));
  }

  postcompanyinfo(data: any){

    const postData = new FormData();
    postData.append ('country',data.country);
    postData.append ('address',data.address);
    postData.append ('info',data.info);
    postData.append ('image',data.image, data.info);
    postData.append ('vision',data.vision);
    postData.append ('message',data.message);
    postData.append ('city',data.city);
    postData.append ('personal_web',data.personal_web);
    postData.append ('facebook',data.facebook);
    postData.append ('twitter',data.twitter);
    postData.append ('instagram',data.instagram);
    postData.append ('linkedin',data.linkedin);


    this.http.post<any>(BackUrl + '/postcompanyinfo',postData)
    .subscribe(() =>{
      this.router.navigate(['/dashboard/']);

    })
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
