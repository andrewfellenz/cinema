import { Film } from "./film";
import { Theatre } from "./theatre";

export class Showing {
  id: number;
  theatre: Theatre;
  film: Film;
  ticketPrice: number;
  time: string;
}
