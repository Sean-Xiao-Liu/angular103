import { Component, Input } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: {
    id: 'new-ticket'
  }
})
export class TicketsComponent {
  @Input() tickets: Ticket[] = [];

  onAddTicket(ticket: Ticket) {
    this.tickets.push(ticket);
    console.log('tickets: ', this.tickets);
  }
}
