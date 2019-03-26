import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { offerService } from '../my-offers/offer.service';
import { AuthService } from '../auth/auth.service';
import { JobService } from '../add-job/job.service';



declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;
@Component({
  selector: 'app-acceptance-list',
  templateUrl: './acceptance-list.component.html',
  styleUrls: ['./acceptance-list.component.css']
})
export class AcceptanceListComponent implements OnInit {

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
    , public authService: AuthService, public jobService: JobService) { }
    
    jobId: string
    dataRows : any[] = [];
   nameRows : any[] = [];
    idRows : any[] = [];
    Acc: Object;
    dataJob: Object;
    CandidatesNumber: number;
    count: number = 0;

  ngOnInit() {

   this.jobId = this.data.getStoreDataJob();

     this.authService.autoAuthUser();
     this.offerService.getAcceptence(this.jobId).subscribe(response =>{

      for(var i=0 ; i < response.count ; i++) {
           this.dataRows.push(response.username[i]);
           this.idRows.push(response.AcceptedNames[i]);

         

           this.dataTable.dataRows.push([
            this.dataRows[i],
            this.idRows[i]
          ])
          
       }
     this.Dtable()
      });
    this.dataTable = {
      headerRow: [ 'الأسم', 'اجرائات العقد' ],

      dataRows: [
     
      ]
   };
  }

  startJob() {
  this.dataJob = {
    jobAd_id: this.jobId
  }
    this.offerService.startJob(this.dataJob);
  }

  endJob(id) {
    this.dataJob = {
      jobAd_id: this.jobId,
      user: id
    }
      
    this.offerService.endJob(this.dataJob);
    
    }
  
   


}
