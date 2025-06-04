import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css', '../../../shared/button/button.component.css', '../../../shared/control/control.component.css'] 
})
export class NewTicketComponent {
  onSubmit() {
    console.log('submit');
    console.log(this.enteredTitle);
    console.log(this.enteredRequest);
  }

  enteredTitle = '';
  enteredRequest = '';
}
