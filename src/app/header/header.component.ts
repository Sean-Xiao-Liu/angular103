import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../shared/button/button.component.css']
})
export class HeaderComponent {
  onLogout() {
    console.log('logout');
  }
}
