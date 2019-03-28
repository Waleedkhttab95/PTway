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
export class MyOffersComponent implements OnInit {
  isLoading = false;
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
  constructor(private data: DataService, public jobService: JobService, public authService: AuthService
    , private changeDetectorRef: ChangeDetectorRef) { }

  dataRows: any[] = [];
  idRows: any[] = [];
  projectId: string
  ngOnInit() {
    this.isLoading = true;
    this.projectId = this.data.getStoreData();
    this.authService.autoAuthUser();
    this.jobService.getJobs(this.projectId).subscribe(response => {
      for (var i = 0; i < response.count; i++) {
        this.dataRows.push(response.jobNames[i]);
        this.idRows.push(response.id[i]);
        this.dataTable.dataRows.push([
          this.dataRows[i],
          this.idRows[i]
        ])
      }
      this.Dtable()
      this.isLoading = false;
    });
    this.dataTable = {
      headerRow: ['اسم الإعلان', 'قائمة المرشحين', 'قائمة المقبولين', 'حذف الإعلان'],
      dataRows: []
    };
  }
  onCandidates(id) {
    this.data.storeDataJob(id);
  }

  onAccepted(id) {
    this.data.storeDataJob(id);
  }

  onDelete(id) {
    this.jobService.deleteJob(id).subscribe(() => {
      this.showSwal('secc');
    }
    );
  }
  showSwal(type) {
    if (type == 'secc') {
      swal({
        title: "تمت العملية  بنجاح!",
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-success',
        confirmButtonText: 'نعم',
        type: 'success',
      }).catch(swal.noop)
    }

   
 }

 
 deleteRow(rowNumber: number) {
  this.dataTable.dataRows.splice(rowNumber, 1);
  this.changeDetectorRef.detectChanges();
}


 
}