import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {

  userDetails;
  // registerForm: FormGroup;
  constructor(public router:Router,private fb: FormBuilder,private customValidator: CustomvalidationService) {
    this.userDetails={
    "userName":"",
    "password":"",
    "emailId":"",
    "age": ""
   }
  }

  ngOnInit(): void {

    // this.registerForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   mobile:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    // });
  }

  submitEventHandler(){
    alert("registration successfull");
  }

}
