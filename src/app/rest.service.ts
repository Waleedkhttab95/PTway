import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../environments/environment'
import { map, catchError, tap } from 'rxjs/operators';

const BackUrl = environment.BackUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  getUsers(id): Observable<any> {
    return this.http.get(BackUrl + 'users/' + id).pipe(
      map(this.extractData));
  }

  userRegistreing(data:any): Observable<any> {
    return this.http.post<any>(BackUrl + 'api/userRegistreing', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`user Registre succes w/ id=${data.id}`)),
      catchError(this.handleError<any>('userRegistreing'))
    );
  }

  companyRegistreing(data:any): Observable<any> {
    return this.http.post<any>(BackUrl + 'api/companyRegistreing', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`comapny Registre succes w/ id=${data.id}`)),
      catchError(this.handleError<any>('companyRegistreing'))
    );
  }

  postuserinfo(data:any): Observable<any> {
    return this.http.post<any>(BackUrl + 'api/postuserinfo', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`user succes complete his data  w/ id=${data.id}`)),
      catchError(this.handleError<any>('postuserinfo'))
    );
  }

  userlogin(data:any): Observable<any> {
    console.log(data);
    return this.http.post<any>(BackUrl + 'api/login', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`user login succes w/ id=${data.id}`)),
      catchError(this.handleError<any>('userlogin'))
    );
  }

  postcompanyinfo(data:any): Observable<any> {
    console.log(data);
    return this.http.post<any>(BackUrl + 'api/postcompanyinfo', JSON.stringify(data), httpOptions).pipe(
      tap((data) => console.log(`company succes complete data w/ id=${data.id}`)),
      catchError(this.handleError<any>('postcompanyinfo'))
    );
  }

  updateProduct (id, product): Observable<any> {
    return this.http.put(BackUrl + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(BackUrl + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
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