import { Film } from "./film";

export class Showing {
  id: number;
  theatreId: number;
  film: Film;
  ticketPrice: number;
  time: string;
}
