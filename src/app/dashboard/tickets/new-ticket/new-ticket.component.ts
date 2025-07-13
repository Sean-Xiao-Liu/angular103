import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements AfterViewInit {
  // onSubmit() {
  //   console.log('submit button clicked');
  //   console.log("entered title: ", this.enteredTitle);
  //   console.log("entered request: ", this.enteredRequest);
  // }

  // ViewChild is used to get a reference to the form element
  // so the component can access the form element without passing it as a parameter
  // also viewchild only works when element is part of the template, 
  // it won't work if the element is projected like ng-content 
  // the question mark is used to make the form optional
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() addTicket = new EventEmitter<Ticket>();

  onSubmit(enteredTitle: HTMLInputElement, enteredRequest: HTMLTextAreaElement) {

    console.log('submit button clicked');
    // console.log("entered title: ", enteredTitle.value);
    // console.log("entered request: ", enteredRequest.value);
    // the question mark means it would only reset the form if it is not null
    this.addTicket.emit({
      id: Math.floor(Math.random() * 1000000).toString(),
      title: enteredTitle.value,
      description: enteredRequest.value,
      status: this.randomStatus()
    });
    console.log('ticket added');
    // reset the form to clear the input fields
    this.form?.nativeElement.reset();
    console.log("form resetted");
  }

  enteredTitle = '';
  enteredRequest = '';

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  randomStatus() {
    return Math.random() > 0.5 ? 'open' : 'closed';
  }
}
