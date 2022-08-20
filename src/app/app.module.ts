import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewPageComponent } from './components/new-page/new-page.component';
import { NewPage2Component } from './components/new-page2/new-page2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewPageComponent,
    NewPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
