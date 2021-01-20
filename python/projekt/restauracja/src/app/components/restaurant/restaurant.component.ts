import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { faChevronLeft, faChevronRight, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private router: Router, private readonly restaurantService: RestaurantService) { }

  public weekNumber = 1;
  public faPreviousWeek = faChevronLeft;
  public faNextWeek = faChevronRight;
  public addOrder = faPlus;
  public removeOrder = faTrash;

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

  public goToWeek(direction: string) {
    if (direction === 'prev') {
      this.weekNumber -= 1;
    } else if (direction === 'next') {
      this.weekNumber += 1;
    }

  }
}
