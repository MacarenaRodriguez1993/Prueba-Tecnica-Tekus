import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscriber } from '../../models/subscribers.interface';
import { SubscribersService } from '../../services/subscribers.service';

@Component({
  selector: 'app-dialog-update-subs',
  templateUrl: './dialog-update-subs.component.html',
  styleUrls: ['./dialog-update-subs.component.css'],
})
export class DialogUpdateSubsComponent implements OnInit {
  updateSubscriber!: FormGroup;
  message: string = '';
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subsService: SubscribersService,
    public dialogRef: MatDialogRef<DialogUpdateSubsComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log('Datos recibidos', this.data);
  }
  updateData(): void {
    console.log(this.updateSubscriber.value);
    this.subsService
      .updateSubscriberById(this.data.Id, this.updateSubscriber.value)
      .subscribe(
        (subs: any) => {
          this.message = `Subscriptores agregado con exito`;
          this.dialogRef.close();
        },
        (error) => {
          console.log(error);
        }
      );
  }
  private initForm(): void {
    this.updateSubscriber = this.fb.group({
      Name: [this.data.Name, Validators.required],
      Email: [this.data.Email, Validators.required],
      CountryCode: [this.data.CountryCode, Validators.required],
      PhoneNumber: [this.data.PhoneNumber, Validators.required],
      JobTitle: [this.data.JobTitle, Validators.required],
      Area: [this.data.Area, Validators.required],
      Topics: this.fb.array([]),
    });
  }
}
