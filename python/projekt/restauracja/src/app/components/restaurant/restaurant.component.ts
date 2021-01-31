import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CalendarDate } from '../model/CalendarDate';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private router: Router, private readonly restaurantService: RestaurantService) { }

  public addOrder = faPlus;
  public removeOrder = faTrash;
  public selectedDate: CalendarDate;

  ngOnInit(): void {
  }

  public logout() {
    this.router.navigate(['login']);
  }

  public rows = [
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 },
    { ReservationCreationDate: '18.01.2021', ReservationDate: '21.01.2021', Id: 'tokarz', ClientName: 'Kaczyński', Amount: 250, TableNr: 666 }
  ];


}
