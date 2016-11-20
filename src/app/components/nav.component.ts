import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav>
      <div class="logo">
        <img src="{{logo}}" alt="Logo">
      </div>
    </nav>  
  `,
  styleUrls: ['../assets/css/navigation.component.css']
})
export class NavComponent {
  logo = '../assets/images/logo.svg';
}
