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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribersComponent,
    FormLoginComponent,
    NavbarComponent,
    FooterComponent,
    ListSubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
