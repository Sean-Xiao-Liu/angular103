import { Component, Input } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //  in ticket array is imported from tickets component
  @Input() ticket!: Ticket;
  isDetailVisible = false;

  onToggleDetail() {
    this.isDetailVisible = !this.isDetailVisible;
  }

  onMarkAsCompleted() {
    this.ticket.status = 'closed';
  }
}
