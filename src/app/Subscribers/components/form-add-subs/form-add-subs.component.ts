import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-subs',
  templateUrl: './form-add-subs.component.html',
  styleUrls: ['./form-add-subs.component.css'],
})
export class FormAddSubsComponent implements OnInit {
  newSubsForm!: FormGroup;
  @Output() formDataEvent = new EventEmitter<any>();
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.newSubsForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      CountryCode: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      JobTitle: ['', Validators.required],
      Area: ['', Validators.required],
      Topics: this.fb.array([]),
    });
  }
  getFormData(): void {
    this.formDataEvent.emit(this.newSubsForm);
  }
}
