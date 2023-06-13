import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormAddSubsComponent } from '../form-add-subs/form-add-subs.component';
import { SubscribersService } from '../../services/subscribers.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-subs',
  templateUrl: './dialog-add-subs.component.html',
  styleUrls: ['./dialog-add-subs.component.css'],
})
export class DialogAddSubsComponent implements OnInit {
  formComponents: FormAddSubsComponent[] = [];
  message: string = '';
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private subsService: SubscribersService,
    public dialogRef: MatDialogRef<DialogAddSubsComponent>
  ) {}
  ngOnInit() {
    this.addMoreSubs();
  }

  addMoreSubs() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        FormAddSubsComponent
      );
    const componentRef =
      this.viewContainerRef.createComponent(componentFactory);
    const formComponent = componentRef.instance as FormAddSubsComponent;
    this.formComponents.push(formComponent);
  }
  onSaveAllClick() {
    const formDataList = this.formComponents.map(
      (formComponent) => formComponent.newSubsForm.value
    );

    const dataForApi = {
      Subscribers: formDataList,
    };
    console.log(dataForApi);
    this.subsService.createNewsSubscribers(dataForApi).subscribe(
      (resp: any) => {
        this.message = `Subscriptores agregado con exito`;
        this.dialogRef.close();
      },
      (error) => {
        this.message = error;
      }
    );
  }
}
