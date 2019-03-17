import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUpData } from './sign-up-data.model';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ErrorHandler } from "@angular/core";
// import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from "http-status-codes";
// import { ToastsManager, Toast, ToastOptions } from "ng6-toastr";

const BackUrl = 'https://ptway-dev.herokuapp.com/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignUpService implements ErrorHandler {
  // static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  // static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";

  public handleError(error: any) {
    // console.error(error);
    // let httpErrorCode = error.httpErrorCode;
    // switch (httpErrorCode) {
    //   case UNAUTHORIZED:
    //     this.router.navigateByUrl("/sign0in");
    //     break;
    //   case FORBIDDEN:
    //     this.router.navigateByUrl("/error-message");
    //     break;
    //   case BAD_REQUEST:
    //     this.showError(error.message);
    //     break;
    //   default:
    //     this.showError(SignUpService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    // }
  }
  // private showError(message: string) {
  //   this.toastManager.error(message, SignUpService.DEFAULT_ERROR_TITLE, { dismiss: 'controlled' }).then((toast: Toast) => {
  //     let currentToastId: number = toast.id;
  //     this.toastManager.onClickToast().subscribe(clickedToast => {
  //       if (clickedToast.id === currentToastId) {
  //         this.toastManager.dismissToast(toast);
  //         window.location.reload();
  //       }
  //     });
  //   });
  // }

  // private job: SignUpData[] = [];
  // private jobsUpdated = new Subject<{ posts: SignUpData[], jobCount: number }>();

  constructor(private http: HttpClient, private router: Router) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getsectors(): Observable<any> {
    return this.http.get(BackUrl + '/getsectors').pipe(
      map(this.extractData));
  }

  getspecialization(): Observable<any> {
    return this.http.get(BackUrl + '/getspec').pipe(
      map(this.extractData));
  }
  // postuserRegistreing(data:any): Observable<any> {
  //   console.log(data);
  //   return this.http.post<any>(BackUrl + '/userRegistreing', JSON.stringify(data), httpOptions).pipe(
  //     tap((data) => console.log(`user Registre succes w/ id=${data.id}`)),
  //     catchError(this.handleError<any>('userRegistreing'))
  //   );
  // }

  // companyRegistreing(data:any): Observable<any> {
  //   console.log(data);
  //   return this.http.post<any>(endpoint + 'api/companyRegistreing', JSON.stringify(data), httpOptions).pipe(
  //     tap((data) => console.log(`comapny Registre succes w/ id=${data.id}`)),
  //     catchError(this.handleError<any>('companyRegistreing'))
  //   );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
