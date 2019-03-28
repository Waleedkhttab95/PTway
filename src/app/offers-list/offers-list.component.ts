import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../my-cv/user.service';
import { DataService } from '../data.service';
import { JobService } from '../add-job/job.service';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit, AfterViewInit {
isLoading=false;
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

   
  

    $('.card .material-datatables label').addClass('form-group');
  }
  public dataTable: DataTable;
  constructor(public userService: UserService, public dataService: DataService,public jobService: JobService) { }

  
  dataRows: any[] = [];
  idRows: any[] = [];
  count: number = 0;
  ngOnInit() {
    this.isLoading=true;
    
this.userService.getAllNotification().subscribe((response:any) =>{
  this.count +=1;
  for(var i=0 ; i <response.result.length ; i++) {
    for(var j=0 ; j <response.result.length ; j++){
      this.dataRows.push(response.result[i][j].job_Name);
      this.idRows.push(response.result[i][j]._id);
    }
      
      this.dataTable.dataRows.push([
        this.count,
        this.dataRows[i],
        this.idRows[i]
      ])
  }

 });
    this.dataTable = {
      headerRow: [ '#','العرض',  'الاجراءات' ],

      dataRows: [
   
      ]
   };
   this.isLoading=false;

  }

  onAccepted(id) {
    this.jobService.applyJob(id);
  }

  onSelect(id) {
    this.dataService.storeDataoffer(id);
  }
}
