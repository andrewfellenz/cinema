import { TicketService } from "./../services/ticket.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../services/header.service";

@Component({
  selector: "cin-theatres",
  templateUrl: "./theatres.component.html",
  styleUrls: ["./theatres.component.scss"],
})
export class TheatresComponent implements OnInit {
  maximumOccupancy: number = 80;
  tickets: number = 0;
  rows: string[] = Array.from("ABCDEFGH");
  seats: number[] = [...Array(this.maximumOccupancy / 8).keys()];

  constructor(
    private headerService: HeaderService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("Select Seats");
    this.ticketService
      .getTickets()
      .subscribe((tickets) => (this.tickets = tickets));
  }
}
