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
export class AcceptanceListComponent implements OnInit, AfterViewInit {

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
    table.on('click', '.edit', function(e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function(e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
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

    this.data.currentMessage.subscribe(m =>{
      this.jobId = m;
     
     })

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
