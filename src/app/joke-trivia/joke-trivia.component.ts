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
  }

getItem(){
  let path: string = this.router.url
  let param = '';
  switch (path){
    case '/joke':
      param = 'joke'
      break;
    case '/trivia':
      param = 'trivia'
      break;
    case '/quote':
      param = 'nameThatQuote'
      break;
    default:
      console.log(path);
      break;
  }
  this.getJoke(param)
}

getJoke(param){
  this.dataService.getNextJoke(param).subscribe(joke => this.joke = joke)
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
