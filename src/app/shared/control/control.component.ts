import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // Emulated is the default encapsulation strategy, it allows the component to use the styles of the parent component
  // None is the strategy that allows the component to use the styles of the parent component
  // ShadowDom is the strategy that allows the component to use the styles of the parent component
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
}
