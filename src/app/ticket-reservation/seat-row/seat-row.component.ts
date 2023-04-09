import { Component, Input } from '@angular/core';

@Component({
  selector: 'seat-row',
  templateUrl: './seat-row.component.html',
  styleUrls: ['./seat-row.component.css']
})
export class SeatRowComponent {
  @Input() bookingInfoSeats: any[];
  @Input() bookingFormInfo: any;
  @Input() rowNo: number;
}
