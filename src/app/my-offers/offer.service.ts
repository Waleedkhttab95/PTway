import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
const BackUrl = 'https://ptway-dev.herokuapp.com/api';
@Injectable({ providedIn: 'root' })

export class offerService {

    constructor(private http: HttpClient, private router: Router) {}

    getCandidates(id: string) {
       return this.http.get<{candidateNames: [string], username: [string] , count:Number, id:[string]}>(BackUrl+'/getOneCandi?jobAd='+id)
    }

    addCandidate(data: any) {
        this.http.post(BackUrl+'/postBodyC',data).subscribe(() =>{
            this.router.navigate(['/']);

        })
    }

    addAcceptence(data: any) {
        this.http.post(BackUrl+'/postAcc' , data).subscribe(result =>{
            console.log(result)
            this.showSwal('secc');
            this.router.navigate(['/candidates-list']);
        });
    }

    getAcceptence(id: string) {
        return this.http.get<{AcceptedNames: [string], username: [string] , count:Number, id:[string]}>(BackUrl+'/getOneAccepted?jobAd='+id)
    }

    startJob(data: any) {
        this.http.post(BackUrl+'/start/job', data).subscribe(result =>{
            this.showSwal('secc');
            this.router.navigate(['/acceptance-list']);

        })
    }

    endJob(data: any) {
        const response = this.http.post(BackUrl+'/end/job', data,{ responseType: 'text'}).subscribe(result =>{
            this.showSwal('secc');
            this.router.navigate(['/acceptance-list']);
            

        })
    }
    showSwal(type){
        if (type == 'secc') {
        swal({
          title: "تمت العملية بنجاح!",
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success',
          confirmButtonText:'نعم',
          type:'success',
        }).catch(swal.noop)
      } 

}
}