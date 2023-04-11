import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReserveTicketResponseModel, TrainSeatInfoModel } from '../models/reserve-ticket.model';
import { mockResponse } from './booking-system-response';
@Component({
  selector: 'reserve-ticket',
  templateUrl: './reserve-ticket.component.html',
  styleUrls: ['./reserve-ticket.component.css']
})

export class ReserveTicketComponent implements OnInit{
  public bookingInfo: ReserveTicketResponseModel;
  public bookingForm: FormGroup;
  public availablseats: TrainSeatInfoModel[] = [];
  public flag: boolean = true;
  public error:string; 
  public res: any;

  constructor(private fb: FormBuilder) {
    this.initateForm();
  }
  
  private initateForm(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  public ngOnInit(): void {
    this.bookingInfo = mockResponse;
    this.availablseats = this.getSeatsAvailable();
  }

  public onSubmit(formValues: FormGroup): void {
    const userName: string = formValues.controls['name'].value;
    const requiredSeats: number = parseInt(formValues.controls['count'].value);
    if(requiredSeats > 7 || requiredSeats < 0) {
      this.error = "One person can reserve up to 7 seats at a time!";
    }
    else if(requiredSeats > 0) {
      this.startReservation(userName, requiredSeats);
    }
  }

  public openBookingForm(): void {
    this.bookingForm.setValue({
      name: '',
      count: ''
    });
    this.flag = true;
    this.error = '';
  }
  
  private startReservation(name: string, count: number): void {
    let seatsArray: TrainSeatInfoModel[] = [];

    seatsArray = this.checkSeatingPriority(count, 3);
      if (seatsArray.length !== 0) {
        this.bookSeat(seatsArray, name);
      } else {
        this.bookSeat(this.getRandomSeats(count), name);
      }
  }

  private getRandomSeats(count: number): TrainSeatInfoModel[] {
    let randomSeats: TrainSeatInfoModel[] = [];
    this.availablseats.forEach(seat => {
      if (randomSeats.length < count) {
        randomSeats.push(seat)
      }
    });
    return randomSeats;
  }

  private bookSeat(bookseats: TrainSeatInfoModel[], name: string): void {
    bookseats.forEach(seat => {
      const index: number = this.bookingInfo.seats.findIndex(data => data.seatNo === seat.seatNo);
      this.bookingInfo.seats[index].status = "booked";
      this.bookingInfo.seats[index].bookedBy = name;
    });

    this.availablseats = this.getSeatsAvailable();

    this.flag = false;
  }

  private getSeatsAvailable(): TrainSeatInfoModel[] {
    let availablseats: TrainSeatInfoModel[] = []
    this.bookingInfo.seats.forEach(seat => {
      if (seat.status === 'available') {
        availablseats.push(seat);
      }
    });
    console.log(availablseats.length)
    return availablseats;
  }

  private checkSeatingPriority(count: number, category: number): TrainSeatInfoModel[] {
    let bookseats: TrainSeatInfoModel[] = [];
    this.availablseats.forEach(seat => {
      if (bookseats.length < count) {
        if (seat.category === category) {
          bookseats.push(seat);
        }
        if (bookseats.length === count && count > 1) {
          bookseats = this.rowChecker(bookseats);
        }
      }

    });
    if (bookseats.length === count) {
      return bookseats;
    } else {
      return [];
    }
  }

  private rowChecker(bookseats: TrainSeatInfoModel[]): TrainSeatInfoModel[] {
    let row: number[] = [];
    bookseats.forEach(seat => {
      row.push(seat.row);
    })
    if (Array.from(new Set(row)).length === 1) {
      return bookseats;
    } else {
      const removeIndex = bookseats.splice(-1, 1);
      return removeIndex;
    }
  }
}
