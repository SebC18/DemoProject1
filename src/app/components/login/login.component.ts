import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    username:  ['Seb', Validators.required],
    password: ['h4ck3rman=>Pa$$w0rd',[ Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder) {

   }


  onSubmit(form: FormGroup) {
    console.clear();
    console.log('Username: ', form.value.username);
    console.log('Password: ', form.value.password);    
    console.log('Valid?: ', form.valid);
    console.log(form);
  }
}
