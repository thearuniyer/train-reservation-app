import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TICKETS } from './ticket-reservation/data/booking-system-response';
import { ReserveTicketResponseModel } from './ticket-reservation/models/reserve-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() { }

  getTickets(): Observable<ReserveTicketResponseModel> {
    const tickets = of(TICKETS)
    return tickets;
  }
}
