import { Component, HostBinding, HostListener, Input, ViewEncapsulation, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // Emulated is the default encapsulation strategy, it allows the component to use the styles of the parent component
  // None is the strategy that allows the component to use the styles of the parent component
  // ShadowDom is the strategy that allows the component to use the styles of the parent component
  encapsulation: ViewEncapsulation.None,
  host: {
    // add class attribute to the host element
    class: 'control' 
  }
})
export class ControlComponent {
  // // add class attribute to the host element instead of using the host property in @Component decorator
  // @HostBinding('class') className = 'control';
  @HostListener('click', ['$event']) onClick(event: Event) {
    // console.log('clicked', event);
    // access the native element by using element reference
    console.log('native element: ', this.elementRef.nativeElement);
  }
  @Input({ required: true }) label!: string;

  // inject the elementRef to get the native element
  private elementRef = inject(ElementRef);
}
