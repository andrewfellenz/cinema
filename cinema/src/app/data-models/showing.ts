export class Showing {
  id: number;
  theatreId: number;
  filmId: number;
  ticketPrice: number;
  time: string;
  constructor(
    id: number,
    theatreId: number,
    filmId: number,
    ticketPrice: number,
    time: string
  ) {
    this.id = id;
    this.theatreId = theatreId;
    this.filmId = filmId;
    this.ticketPrice = ticketPrice;
    this.time = time;
  }
}
