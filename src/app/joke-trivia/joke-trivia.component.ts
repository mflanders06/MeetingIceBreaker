import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Joke, JokeCategory } from '../joke';


@Component({
  selector: 'app-joke-trivia',
  templateUrl: './joke-trivia.component.html',
  styleUrls: ['./joke-trivia.component.scss']
})
export class JokeTriviaComponent implements OnInit {
  joke: Joke | null = null
  hidden: number = 1

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getItem();
  }

getItem(){
  let path: string = this.router.url
  let param = JokeCategory.joke;
  switch (path){
    case '/joke':
      param = JokeCategory.joke;
      break;
    case '/trivia':
      param = JokeCategory.trivia
      break;
    case '/quote':
      param = JokeCategory.nameThatQuote
      break;
    default:
      console.log(path);
      break;
  }
  console.log(param)
  this.getJoke(param)
}

getJoke(param: JokeCategory){
  this.dataService.getNextJoke(param).subscribe(joke => this.joke = joke)
}

showAnswer(){
  return this.hidden = 0
}

}
