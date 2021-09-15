import { TicketService } from "./../../services/ticket.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cin-seat",
  templateUrl: "./seat.component.html",
  styleUrls: ["./seat.component.scss"],
})
export class SeatComponent implements OnInit {
  @Input() seatNumber: number;
  occupied: boolean;
  selected: boolean = false;
  tickets: number = 0;

  constructor(private ticketService: TicketService) {}

  selectSeat(): void {
    if (this.tickets && !this.selected) {
      this.selected = true;
      this.ticketService.useTicket();
    } else if (this.selected) {
      this.selected = false;
      this.ticketService.addTickets(1);
    }
  }

  ngOnInit(): void {
    this.ticketService
      .getTickets()
      .subscribe((tickets) => (this.tickets = tickets));
  }
}
