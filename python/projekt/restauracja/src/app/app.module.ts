import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersTableComponent } from './components/restaurant/orders-table/orders-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReservationPanelComponent } from './components/restaurant/reservation-panel/reservation-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    LoginComponent,
    OrdersTableComponent,
    ReservationPanelComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
