import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { offerService } from '../my-offers/offer.service';
import { AuthService } from '../auth/auth.service';
import { JobService } from '../add-job/job.service';
import { JobData } from '../add-job/job-data.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  rowDataMainForm: any;

  Dtable() {
    setTimeout(function () {
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        }
  
      });
  
      const table = $('#datatables').DataTable();
      
  
    
      $('.card .material-datatables label').addClass('form-group');

    }, 100)

  }

  public dataTable: DataTable;
  constructor(private data: DataService, public offerService: offerService
    , public authService: AuthService, public jobService: JobService,
     private changeDetectorRef: ChangeDetectorRef,private router: Router) { }
   jobData: JobData; 
  jobId: string
  dataRows : any[] = [];
 nameRows : any[] = [];
  idRows : any[] = [];
  Acc: Object;
  CandidatesNumber: number;
  count: number = 0;

  ngOnInit() {
    this.jobId = this.data.getStoreDataJob();


     this.authService.autoAuthUser();
     this.offerService.getCandidates(this.jobId).subscribe(response =>{

      for(var i=0 ; i < response.count ; i++) {
           this.dataRows.push(response.username[i]);
           this.idRows.push(response.candidateNames[i]);

         

           this.dataTable.dataRows.push([
            this.dataRows[i],
            this.idRows[i]
          ])
          
       }
     this.Dtable()
      });

    this.dataTable = {
      headerRow: [ 'الأسم', 'السيرة الذاتية', 'الإجراءات' ],

      dataRows: [
         
      ]
   };

  this.getReqNumber();
  }

  getReqNumber() {
    this.jobService.getJobRequierdNumber(this.jobId).subscribe((res: any)=>{
   
      this.CandidatesNumber = res.req_n;
     this.count = res.limit_n;

     if(this.CandidatesNumber == this.count) {
       this.showSwal('warning-message');
       this.router.navigate(['/my-offers']);

     }
     })
  }
  onAccepted(id: string) {
   // this.count++;
    this.Acc = {
      jobAd : this.jobId,
      acceptedName: id
    }
  
    this.offerService.addAcceptence(this.Acc).subscribe(result =>{
      this.showSwal('secc');
      this.getReqNumber()
      this.router.navigate(['/candidates-list']);
  });;
  }

  deleteRow(rowNumber: number) {
    this.dataTable.dataRows.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
  }

onSelect(id) {
this.data.storeDataUser(id);
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
if (type == 'warning-message') {
  swal({
    title: "لقد أكتمل العدد!",
    text: "شكرا لك لقد أكتمل عدد المطلوبين !",
    buttonsStyling: false,
    confirmButtonClass: "btn btn-warning",
    type: "warning"
  }).catch(swal.noop)
}
}

}
