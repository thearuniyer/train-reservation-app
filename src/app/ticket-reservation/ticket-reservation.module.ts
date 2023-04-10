import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReserveTicketComponent } from './reserve-ticket/reserve-ticket.component';
import { SeatRowComponent } from './seat-row/seat-row.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReserveTicketComponent, 
    SeatRowComponent
  ],
  exports: [
    ReserveTicketComponent, 
    SeatRowComponent
  ]
})
export class TicketReservationModule { }