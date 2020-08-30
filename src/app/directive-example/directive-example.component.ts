import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  styleObj:Object;
  priority;
 constructor() { 
    this.styleObj={
      "background-color":"pink",
      "font-size":"36px",
      "border":"5px solid red"
    }
    this.priority="";
  }

  ngOnInit(): void {
  }

  changeStyleEventHandler(){
    this.styleObj={
    "background-color":"pink",
    "border":"4px solid green",
    "font-size":this.priority > 5?"5px":"48px"
    }
    
  }

}
