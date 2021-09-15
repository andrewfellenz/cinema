import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  private tickets: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getTickets(): BehaviorSubject<number> {
    if (this.tickets.value === 0) {
      this.restoreTickets();
    }
    return this.tickets;
  }

  useTicket(): void {
    if (this.tickets.value > 0) {
      this.tickets.next(this.tickets.value - 1);
    } else {
      console.log("Out of tickets");
    }
  }

  buyTickets(tickets: number): void {
    this.tickets.next(tickets);
    this.storeTickets();
  }

  addTickets(tickets: number): void {
    this.tickets.next(this.tickets.value + tickets);
  }

  storeTickets(): void {
    sessionStorage.setItem("tickets", String(this.tickets.value));
    console.log("Storing tickets", this.tickets);
  }

  restoreTickets(): void {
    this.tickets = new BehaviorSubject<number>(
      parseInt(sessionStorage.getItem("tickets"))
    );
    console.log("Restoring tickets", this.tickets);
  }

  constructor() {}
}
