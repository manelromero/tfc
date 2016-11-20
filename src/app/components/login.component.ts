import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Servidor } from '../services/servidor.service';
import { URLS } from '../models/url';

@Component({
  selector: 'login',
  templateUrl: '../assets/html/login.component.html' 
})
export class LoginComponent {

  usuario: Object = {};
  modal: boolean = false;

  constructor(private router: Router, private servidor: Servidor) {}
  
  login(usuario) {
    // Limpiar form
    this.usuario = {};
    // Parámetros
    let param = '?user=' + usuario.user + '&password=' + usuario.password;
    this.servidor.login(URLS.LOGIN, param).subscribe(
      response => {
        // Si el usuario es correcto
        if (response.success == 'true') {
          // Guarda token en Session Storage
          sessionStorage.setItem('token', response.token);
          // Redirecciona a gestión
          this.router.navigate(['gestion']);
        } else {
          // TODO: chequear si la sesión está caducada
          // Usuario erróneo
          this.modal = true;
        }
      }
    );
  }

  cerrarModal() {
    this.modal = false;
  }

}
