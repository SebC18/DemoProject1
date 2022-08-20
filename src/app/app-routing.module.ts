import { NewPageComponent } from './components/new-page/new-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newPage', component: NewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {anchorScrolling: 'enabled'}
    ),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
