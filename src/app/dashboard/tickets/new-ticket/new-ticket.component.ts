import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  // onSubmit() {
  //   console.log('submit button clicked');
  //   console.log("entered title: ", this.enteredTitle);
  //   console.log("entered request: ", this.enteredRequest);
  // }

  onSubmit(enteredTitle: HTMLInputElement, enteredRequest: HTMLTextAreaElement) {
    console.log('submit button clicked');
    console.log("entered title: ", enteredTitle.value);
    console.log("entered request: ", enteredRequest.value);
  }

  enteredTitle = '';
  enteredRequest = '';
}
