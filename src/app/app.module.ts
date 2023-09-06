import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: QuizComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
