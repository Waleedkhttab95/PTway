import { Component, OnInit, AfterViewInit, Output, Injectable, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from '../add-project/project.service';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {
  rowDataMainForm: any;
  isLoading = false;
  count: number = 0;

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

    }, 100)

    
  }

  public dataTable: DataTable;
  // tslint:disable-next-line: member-ordering

  constructor(private data: DataService, public projectService: ProjectService, public authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef) { }

  dataRows: any[] = [];
  idRows: any[] = [];
  // tslint:disable-next-line: member-ordering

 
  
  ngOnInit() {

    this.isLoading=true;
    this.dataTable = {
      headerRow: ['#','اسم المشروع', 'تعديل المشروع', 'حذف المشروع','اضافة اعلان وظيفي'],

      dataRows: [
      ]

    };
    this.authService.autoAuthUser();
    this.fetchData();

  }

  fetchData() {
    this.projectService.getprojects().subscribe(response => {
      for (var i = 0; i < response.count; i++) {
        this.dataRows.push(response.projectName[i]);
        this.idRows.push(response.id[i]);
        this.count +=1;
        this.dataTable.dataRows.push([
          this.count,
          this.dataRows[i],
          this.idRows[i],
         
        ])
      }
      this.Dtable()
      this.isLoading = false;

    });

  }
  onSelect(id) {
    this.data.storeData(id);
    this.data.changeMessage(id);
  }

  onEdit(id) {
    this.data.changeMessage(id);
    this.data.changeStatus(true);
  }

  onDelete(id) {
    this.projectService.deleteproject(id).subscribe(() => {
      this.dataTable.dataRows.filter(r => r[1] !== id);
    })
  }

  deleteRow(rowNumber: number) {
    this.dataTable.dataRows.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
  }


}
