import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';
import { HomeComponent } from './home/home.component';
import { JokeTriviaComponent } from './joke-trivia/joke-trivia.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', redirectTo: ''},
  { path: 'joke', component: JokeTriviaComponent},
  { path: 'trivia', component: JokeTriviaComponent},
  { path: 'quote', component: JokeTriviaComponent},
  { path: 'hangman', component: HangmanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
