import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  @Input() rows;
  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'ReservationCreationDate' },
    { field: 'ReservationDate' },
    { field: 'Id' },
    { field: 'ClientName' },
    { field: 'Amount' },
    { field: 'TableNr' }
  ];

  public gridOptions: any = {};

  public gridApi: any;
  public gridColumnApi: any;

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  public style = {
    marginTop: '20px',
    width: '99%',
    height: '100%'
  };


}
