import { Injectable } from '@angular/core';
import { Questions } from './questions';
import { newArray } from '@angular/compiler/src/util';

@Injectable()
export class ManageQuestionService {
  questionNumber : number;
  questionArray:Questions[] = new Array();
  selectedAnswerArray = new Array();
  
  constructor() {
    this.questionArray.push(new Questions("Which cricketer had scored fastest century in Test cricket?",["Vivian Richards","Brendon McCullum","Misbah-ul-Haq"],1));
    this.questionArray.push(new Questions("Which cricketer has taken most catches in ODI cricket?",["Ricky Ponting","Mahela Jayawardene","Jacques Kallis"],1));
    this.questionArray.push(new Questions("Which cricketer had scored fastest century in ODI cricket?",["Vivian Richards","Corey Anderson","AB de Villiers"],2));
    this.questionArray.push(new Questions("Which player has made highest numbers of runs in IPL history?",["AB de Villiers","Virat Kohli","Suresh Raina"],1));
    this.questionArray.push(new Questions("Which player has taken most numbers of wickets in IPL so far?",["Lasith Malinga","Ravindra Jadeja","Sunil Narine"],0));
    this.questionArray.push(new Questions("Which player has taken most numbers of hat-tricks in the IPL so far?",["Amit Mishra","Sunil Narine","Lasith Malinga"],0));
    this.questionArray.push(new Questions("In the history of IPL, Which of the following player got out at the zero (most ducks)?",["Bhuvneshwar Kumar","Ishant Sharma","Harbhajan Singh"],2));
    this.questionArray.push(new Questions("How many centuries have been scored by the MS Dhoni in ODIs? ",["10","12","13"],0));
    this.questionArray.push(new Questions("What is the highest number of goals that FC Barcelona has scored in a league season?",["120","210","116"],2));
    this.questionArray.push(new Questions("How many Barcelona players have won the World Player of the Year award?",["4","5","6"],1));
    this.questionArray.push(new Questions("Which team has played most number of finals in IPL?",["CSK","MI","KKR"],0));
    this.questionArray.push(new Questions("What number did Messi wear before 10?",["2","19","30"],1));
    this.questionArray.push(new Questions("Who has won the most Formula One World Championships?",["Michael Schumacher","Sebestian Vettal","Luis Hamilton"],0));
    this.questionArray.push(new Questions("How many times has Rafael Nadal won the French Open?",["13","12","15"],1));
    this.questionArray.push(new Questions("In which year did Serena Williams win her last Grand Slam singles title?",["2011","2012","2015"],2));
   
   
    // this.questionArray.push(new Questions(1, "aa","1","2","3","2"));
    // this.questionArray.push(new Questions(2, "aa","1","2","3","3"));
    // this.questionArray.push(new Questions(3, "aa","1","2","3","1"));
  
  }

   getAllQuestions(){
     return this.questionArray;
   }

  //  getQuestionById(qId:number){
  //    var pos = this.questionArray.findIndex(item=>item.question==qId);
  //    return this.questionArray[pos];
  //  }

    saveAnswer(p1){
      this.selectedAnswerArray.push(p1);
    }

    // getAllAnswers(){
    //   return this.selectedAnswerArray;
    // }

    calculateScore(){
      var score = 0;
      var correctAnswers = 0;
      
      console.log(this.selectedAnswerArray);
      
      for(let i=0;i<15;i++){
        console.log(this.questionArray[i].correct);
        if(this.questionArray[i].correct == this.selectedAnswerArray[i]){
          correctAnswers++;
          score = score + 10;
          console.log(score);
      }
        
      }
      return {score,correctAnswers};
    }

}
