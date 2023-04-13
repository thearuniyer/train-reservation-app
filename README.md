# Train Reservation App

This is a web application for booking train tickets. It allows users to search for trains, view their schedules, and book tickets for a particular journey. The app also provides functionality for canceling tickets and managing reservations.

## Features

The app has the following features:

1. There are 80 seats in a coach of a train with only 7 seats in a row and last row of only 3 seats. 
2. One person can reserve up to 7 seats at a time.
3. If person is reserving seats, the priority will be to book them in one row.
4. If seats are not available in one row then the booking should be done in such a way that the nearby seats are booked.
5. User can book as many tickets as s/he wants until the coach is full. 
6. There is no login functionality for this application.

## Installation

1. Clone this repository: `git clone https://github.com/thearuniyer/train-reservation-app.git`
2. Run `npm install` to install all node modules
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Technologies Used

The app is built using the following technologies:

- **Front-end**: HTML, CSS, Typescript, Angular
- **Other**: Git, Node.js

## Databse Model

The model for the database is signified with `TrainSeatInfoModel` as given below:

```
export class TrainSeatInfoModel {
  public seatNo: number;
  public status: string;
  public category: number;
  public bookedBy: string;
  
  public row: number;
}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
