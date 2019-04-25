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
export class OffersListComponent implements OnInit {
isLoading=false;
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
        searchPlaceholder: "بحث",
        sInfo: "عرض _START_ الى _END_ من _TOTAL_ ",
        sLengthMenu:"عرض _MENU_ ",
        sZeroRecords: "لا يوجد نتائج",
        sEmptyTable: "لا يوجد نتائج",
        oPaginate: {
          sFirst:    "الأولى",
          sLast:     "الأخيرة",
          sNext:     "التالية",
          sPrevious: "السابقة" 
      },
      }

    });

    const table = $('#datatables').DataTable();
    

  
    $('.card .material-datatables label').addClass('form-group');

  }, 200)

  
}
  public dataTable: DataTable;
  constructor(public userService: UserService, public dataService: DataService,public jobService: JobService) { }

  
  dataRows: any[] = [];
  idRows: any[] = [];
  count: number = 0;
  ngOnInit() {
    this.isLoading=true;
    
this.userService.getAllNotification().subscribe((response:any) =>{
 
  console.log(response.result[1][0].job_Name)
  for(var i=0 ; i <response.result.length ; i++) {
    
      this.dataRows.push(response.result[i][0].job_Name);
      this.idRows.push(response.result[i][0]._id);
      this.count +=1;
      
      this.dataTable.dataRows.push([
        this.count,
        this.dataRows[i],
        this.idRows[i]
      ])
  }

  this.Dtable()
  this.isLoading=false;
 });
    this.dataTable = {
      headerRow: [ '#','العرض',  'قبول العرض' ],

      dataRows: [
   
      ]
   };



  }

  onAccepted(id) {
    this.jobService.applyJob(id);
  }

  onSelect(id) {
    this.dataService.storeDataoffer(id);
  }
}
