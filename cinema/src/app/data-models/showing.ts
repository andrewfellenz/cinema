import { Film } from "./film";

export class Showing {
  id: number;
  theatre: number;
  film: Film;
  ticketPrice: number;
  time: Date;
}
