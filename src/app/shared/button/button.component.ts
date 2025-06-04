import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // allow the component to use the styles of the parent component
  // so the parent component can override the styles of the button component
  // and don't need to state the style url in the parent component
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() type: string = 'button';
}
