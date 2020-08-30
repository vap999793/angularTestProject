import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
 
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  loginForm = new FormGroup({
    username:new FormControl("", Validators.required),
    password:new FormControl("", [Validators.required, Validators.pattern(/^[]0-9a-zA-Z/), 
            Validators.minLength(8), Validators.maxLength(20)]),
    // age:new FormControl("")
  });

  constructor() { }

  ngOnInit(): void {
  }

  loginEventHandler(){
    
  }

}
