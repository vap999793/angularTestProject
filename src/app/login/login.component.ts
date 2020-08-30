import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  // loginForm = new FormGroup({
  //   username:new FormControl("", Validators.required),
  //   password:new FormControl("", [Validators.required, Validators.pattern(/^[]0-9a-zA-Z/), 
  //           Validators.minLength(8), Validators.maxLength(20)]),
    // age:new FormControl("")
  

  constructor(public router:Router,private fb: FormBuilder,private customValidator: CustomvalidationService) {

   }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      // name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // mobile:new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      // username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])]
      
    });
  }

  loginEventHandler(){
    if(!this.loginForm.valid){
      alert("Please provide your credentials corretly")
    }
    else{
      this.router.navigateByUrl("/start");
    }
  }

  signUpEventHandler(){
    this.router.navigateByUrl("/register");
  }

}
