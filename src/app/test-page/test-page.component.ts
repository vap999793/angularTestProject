import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Questions } from '../questions'
import {ManageQuestionService} from '../manage-question.service'


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  // compulsoryRadioOption;

  currentQuestionNumber:number;
  currentRadioSelected:number;
  questionArray:Questions[] = new Array();
  selectedAnswerArray: number[] = new Array();
  notLastQuestion: boolean;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, public manageQuestionService:ManageQuestionService) { 
    
    this.questionArray = manageQuestionService.getAllQuestions();
    
    this.currentRadioSelected = -1;
  }

  ngOnInit(): void {
    this.currentQuestionNumber=parseInt(this.activatedRoute.snapshot.params["questionNumber"]);
  }

  nextQuestionEventHandler():void{
    this.currentQuestionNumber = 1+parseInt(this.activatedRoute.snapshot.params["questionNumber"]);
    this.manageQuestionService.saveAnswer(this.currentRadioSelected);
    this.router.navigateByUrl("/test/"+this.currentQuestionNumber);
    // this.selectedAnswerArray.push(this.currentRadioSelected);
    this.currentRadioSelected = -1;
    // console.log(this.selectedAnswerArray.length);
    // console.log(this.currentRadioSelected);
    
  }

  finishTestEventHandler(){
    this.manageQuestionService.saveAnswer(this.currentRadioSelected);
    
    let maxScore:number = 150;

    let {score,correctAnswers} = this.manageQuestionService.calculateScore();
    
    this.router.navigateByUrl(`/finish/${score}/${maxScore}/${correctAnswers}`);
     
    }
    
    // this.router.navigateByUrl(`/finish/${score}/${maxScore}`);
  

  changeAnswer(value){
    // console.log(value);
    this.currentRadioSelected = parseInt(value);
 }

}
