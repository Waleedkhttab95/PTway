import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { offerService } from '../my-offers/offer.service';
import { AuthService } from '../auth/auth.service';
import { JobService } from '../add-job/job.service';
import { JobData } from '../add-job/job-data.model';

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
export class CandidatesListComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
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

    // Edit record
    // table.on('click', '.edit', function(e) {
    //   const $tr = $(this).closest('tr');
    //   const data = table.row($tr).data();
    //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
    //   e.preventDefault();
    // });

    // // Delete a record
    // table.on('click', '.remove', function(e) {
    //   const $tr = $(this).closest('tr');
    //   table.row($tr).remove().draw();
    //   e.preventDefault();
    // });

    // //Like record
    // table.on('click', '.like', function(e) {
    //   alert('You clicked on Like button');
    //   e.preventDefault();
    // });

    $('.card .material-datatables label').addClass('form-group');
  }
  public dataTable: DataTable;
  constructor(private data: DataService, public offerService: offerService
    , public authService: AuthService, public jobService: JobService) { }
   jobData: JobData; 
  jobId: string
  dataRows : any[] = [];
 nameRows : any[] = [];
  idRows : any[] = [];
  Acc: Object;
  CandidatesNumber: number;
  count: number = 0;

  ngOnInit() {
    this.data.currentMessage.subscribe(m =>{
      this.jobId = m;
     
     })

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
     
      });

    this.dataTable = {
      headerRow: [ 'الأسم', 'السيرة الذاتية', 'الإجراءات' ],

      dataRows: [
         
      ]
   };

   this.jobService.getJob(this.jobId).subscribe((res: any)=>{
    console.log(res.job.limit_Number)
     this.CandidatesNumber = res.job.required_Number;
    this.count = res.job.limit_Number;
    })
  }

  onAccepted(id: string) {
   // this.count++;
    this.Acc = {
      jobAd : this.jobId,
      acceptedName: id
    }
  
    this.offerService.addAcceptence(this.Acc);
    console.log(this.count);
  }

}
