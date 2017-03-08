import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QuestionNumberComponent } from './question-number/question-number.component';
import { TotalTimeComponent } from './total-time/total-time.component';
import { IndividualQuestionTimeComponent } from './individual-question-time/individual-question-time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestionAnswerComponent, QuestionNumberComponent, TotalTimeComponent, IndividualQuestionTimeComponent]
})
export class CandidateTestModule { }
