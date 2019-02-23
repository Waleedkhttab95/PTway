import { Component, OnInit, AfterViewInit } from '@angular/core';

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
    this.dataTable = {
      headerRow: [ 'الأسم', 'السيرة الذاتية', 'الإجراءات' ],

      dataRows: [
          ['Airi Satou', ''],
          ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
          ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
          ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
          ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
          ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
      ]
   };
  }

}
