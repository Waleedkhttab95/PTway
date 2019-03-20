import { Component, OnInit, AfterViewInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.isLoading=true;
    this.dataTable = {
      headerRow: [ '#','العرض', 'اسم الشركة', 'الاجراءات' ],

      dataRows: [
          ['1','Airi Satou','ELM'],
          ['2','Ashton Cox','google'],
          ['3','Bradley Greer','mqdam'],
          ['4','Brenden Wagner','google'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu'],
          ['5','Brielle Williamson','psu']
      ]
   };
   this.isLoading=false;

  }

}
