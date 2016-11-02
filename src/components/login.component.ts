import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../../assets/html/login.component.html' 
})
export class LoginComponent {

  public usuario: Object = {user: '', password: ''};

  constructor(private router: Router) {}
  
  login(usuario) {
    console.log(usuario);
  }
  
}