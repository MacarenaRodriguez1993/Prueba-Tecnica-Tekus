import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  readToken(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  logout(): void {
    console.log('click');
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }
}
