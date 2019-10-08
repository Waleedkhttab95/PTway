import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { offerService } from '../my-offers/offer.service';
import { AuthService } from '../auth/auth.service';
import { JobService } from '../add-job/job.service';
import { JobData } from '../add-job/job-data.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { UserService } from '../my-cv/user.service';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-temp-list',
  templateUrl: './temp_list.component.html',
  styleUrls: ['./temp_list.component.css']
})
export class TempListComponent implements OnInit {
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

        },
        "aaSorting": [[ 1, "asc" ]]
  
      });
  
      const table = $('#datatables').DataTable();
      
  
    
      $('.card .material-datatables label').addClass('form-group');

    }, 100)

  }

  public dataTable: DataTable;
  constructor(private data: DataService, public userService: UserService,
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


     this.userService.get_temp_data().subscribe((response: any[]) =>{
      for(var i=0 ; i < response.length ; i++) {
           this.dataRows.push(response[i].fullName);
           this.idRows.push(response[i]._id);

         

           this.dataTable.dataRows.push([
            this.dataRows[i],
            this.idRows[i]
          ])
          
       }
     this.Dtable()
      });

    this.dataTable = {
      headerRow: [ 'الأسم', 'السيرة الذاتية'],

      dataRows: [
         
      ]
   };

  }

 
  onAccepted(id: string) {
   // this.count++;
    this.Acc = {
      jobAd : this.jobId,
      acceptedName: id
    }
  }
  

  

onSelect(id) {
this.data.storeDataUser(id);
}



}
