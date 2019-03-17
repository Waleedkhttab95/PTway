import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const BackUrl = 'https://ptway-dev.herokuapp.com/api';
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

  postcompanyinfo(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(BackUrl + 'postcompanyinfo', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`company succes complete data w/ id=${data.id}`)),
      catchError(this.handleError<any>('postcompanyinfo'))
    );
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
