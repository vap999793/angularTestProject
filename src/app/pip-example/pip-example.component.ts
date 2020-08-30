import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip-example',
  templateUrl: './pip-example.component.html',
  styleUrls: ['./pip-example.component.css']
})
export class PipExampleComponent implements OnInit {
  product;
  constructor() { }

  ngOnInit(): void {
    this.product={
      productId:101,
      productName:"apple abkaj asbdk",
      quantity:8888
    }
  }

}
