import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/page/login/login.component';
import { SubscribersComponent } from './Subscribers/page/subscribers/subscribers.component';
import { FormLoginComponent } from './Login/components/form-login/form-login.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ListSubscriberComponent } from './Subscribers/components/list-subscriber/list-subscriber.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAddSubsComponent } from './Subscribers/components/dialog-add-subs/dialog-add-subs.component';
import { FormAddSubsComponent } from './Subscribers/components/form-add-subs/form-add-subs.component';
import { DialogUpdateSubsComponent } from './Subscribers/components/dialog-update-subs/dialog-update-subs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribersComponent,
    NavbarComponent,
    FooterComponent,
    ListSubscriberComponent,
    FormLoginComponent,
    DialogAddSubsComponent,
    FormAddSubsComponent,
    DialogUpdateSubsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
