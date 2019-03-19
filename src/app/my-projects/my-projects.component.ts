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

export class MyProjectsComponent implements OnInit, AfterViewInit {
  rowDataMainForm: any;


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
    table.on('click', '.edit', function (e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });

    // Delete a record


    //Like record
    table.on('click', '.like', function (e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
    this.authService.autoAuthUser();
    this.fetchData();
  }
  public dataTable: DataTable;
  // tslint:disable-next-line: member-ordering

  constructor(private data: DataService, public projectService: ProjectService, public authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef) { }

  dataRows: any[] = [];
  idRows: any[] = [];
  // tslint:disable-next-line: member-ordering

  ngOnInit() {


    this.dataTable = {
      headerRow: ['اسم المشروع', 'تعديل المشروع', 'حذف المشروع'],

      dataRows: [
      ]

    };
    console.log('1')
  }

  fetchData() {
    this.projectService.getprojects().subscribe(response => {

      for (var i = 0; i < response.count; i++) {
        this.dataRows.push(response.projectName[i]);
        this.idRows.push(response.id[i]);
        this.dataTable.dataRows.push([
          this.dataRows[i],
          this.idRows[i]
        ])
      }
    });

  }
  onSelect(id) {
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
    console.log('testdeletRow');
    this.dataTable.dataRows.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
  }


}
