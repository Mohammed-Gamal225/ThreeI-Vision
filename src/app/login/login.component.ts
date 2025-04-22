import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,ReactiveFormsModule } from '@angular/forms';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[UserApiService]
})

export class LoginComponent {
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder , private userApi:UserApiService 
    , private _router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      this.userApi.login(this.loginForm.value).subscribe(
        (response:any)=>{
          console.log(response);
          this._router.navigate(['dashboard'])
        }
      )
    } else {
      console.log('Form is not valid');
    }
  }
}