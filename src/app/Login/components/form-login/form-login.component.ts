import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../models/login.interface';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<Login>();

  //Declaration formGroup
  authForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.authForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.loginEvent.emit(this.authForm.value);
  }
}
