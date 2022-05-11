import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Joke } from '../joke';


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
    console.log(this.router.url)
  }

getItem(){
  let path: string = ''
  path = this.router.url
  switch (path){
    case '/joke':
      this.getJoke();
      break;
    case '/trivia':
      this.getTrivia();
      break;
    case '/quote':
      this.getQuote();
      break;
    default:
      console.log(path);
      break;
  }
}

getJoke(){
  this.dataService.getNextJoke().subscribe(joke => this.joke = joke)
}

getTrivia(){
  this.dataService.getNextTrivia().subscribe(trivia => this.joke = trivia)
}

getQuote(){
  this.dataService.getNextQuote().subscribe(quote => this.joke = quote)
}

showAnswer(){
  return this.hidden = 0
}

}
