import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  usuario: string;
  password: string;
  tipouser: string;
  nombre: string;
  idempresa: number
}

@Component({
  selector: 'gestion',
  template: 'Este es el componente GestionComponent'
})
export class GestionComponent implements OnInit {
  token = sessionStorage.getItem('token');
  constructor(private router: Router) {}
  ngOnInit() {
    if (!this.token) {
      this.router.navigate(['login']);
      console.log('redirected');
    }
  }
}
