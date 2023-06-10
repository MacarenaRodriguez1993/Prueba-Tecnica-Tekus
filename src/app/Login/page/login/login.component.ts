import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.interface';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Variables
  errorMessage: string = '';
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {}

  loginComponent(datita: Login): void {
    this.loginService.login(datita).subscribe(
      (resp) => {
        this.saveToken(resp.Token);
        this.route.navigate(['subscribers']);
      },
      (error) => {
        this.errorMessage = error.error;
      }
    );

    // const data = {
    // UserName: 'patata',
    // Password: 'MrPotat0',
    // };
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
