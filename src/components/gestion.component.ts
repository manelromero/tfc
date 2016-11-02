import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
