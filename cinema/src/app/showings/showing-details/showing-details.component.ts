import { TicketService } from "./../../services/ticket.service";
import { HeaderService } from "src/app/services/header.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Showing } from "src/app/data-models/showing";
import { ShowingsService } from "src/app/services/showings.service";
@Component({
  selector: "cin-showing-details",
  templateUrl: "./showing-details.component.html",
  styleUrls: ["./showing-details.component.scss"],
})
export class ShowingDetailsComponent implements OnInit {
  showing: Showing;
  id: number;
  tickets: number = 1;

  constructor(
    private showingsService: ShowingsService,
    private route: ActivatedRoute,
    private headerService: HeaderService,
    private TicketService: TicketService,
    private router: Router
  ) {}

  buyTickets() {
    this.TicketService.buyTickets(this.tickets);
    this.router.navigate(["/select-seats"]);
  }

  ngOnInit(): void {
    this.headerService.changeSubtitle("Buy Tickets");
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
    this.showingsService
      .getShowingById(this.id)
      .subscribe((showing) => (this.showing = showing));
  }
}
