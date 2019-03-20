import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JobService } from '../add-job/job.service';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { DataService } from '../data.service';
import swal from 'sweetalert2';
declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit, AfterViewInit {
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
  constructor(private data: DataService, public jobService: JobService, public authService: AuthService
    , private changeDetectorRef: ChangeDetectorRef) { }

  dataRows : any[] = [];
  idRows : any[] = [];
  projectId: string
  ngOnInit() {

this.isLoading=true;
this.projectId = this.data.getStoreData();
    this.authService.autoAuthUser();


this.jobService.getJobs(this.projectId).subscribe(response =>{
  console.log(response);
  for(var i=0 ; i < response.count ; i++) {
      this.dataRows.push(response.jobNames[i]);
      this.idRows.push(response.id[i]);
      this.dataTable.dataRows.push([
        this.dataRows[i],
        this.idRows[i]
      ])
  }

 });
    this.dataTable = {
      headerRow: [ 'اسم الإعلان','قائمة المرشحين', 'عدد المقبولين', 'قائمة المقبولين', 'حذف الإعلان' ],

      dataRows: [
         
      ]
   };

  }

  onCandidates(id) {
    

   this.data.storeDataJob(id);
  }

  onAccepted(id) {
   
    this.data.storeDataJob(id);
  }

 onDelete(id){
   this.jobService.deleteJob(id).subscribe(()=>{
     this.showSwal('secc');
    }
   );
 }

 
 deleteRow(rowNumber: number) {
  console.log(rowNumber);
  this.dataTable.dataRows.splice(rowNumber, 1);
  this.changeDetectorRef.detectChanges();
}


 showSwal(type){
  if (type == 'secc') {
  swal({
    title: "تمت العملية  بنجاح!",
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-success',
    confirmButtonText:'نعم',
    type:'success',
  }).catch(swal.noop)
} 
  }
}