import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    ContactComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
