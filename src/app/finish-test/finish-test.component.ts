import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finish-test',
  templateUrl: './finish-test.component.html',
  styleUrls: ['./finish-test.component.css']
})
export class FinishTestComponent implements OnInit {

  score:number;
  maxScore:number;
  
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { 
    this.score = parseInt(this.activatedRoute.snapshot.paramMap.get('score'));
    this.maxScore = parseInt(this.activatedRoute.snapshot.paramMap.get('maxScore'));
  }

  ngOnInit(): void {
  }

  leaveEventHandler(){
    this.router.navigateByUrl("");
  }
}
