import { Component, OnInit } from '@angular/core';
import { Joke, JokeCategory } from '../joke';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  constructor(private dataService: DataService) { }
  hangman: Joke = {
                    id: 1,
                    category: JokeCategory.hangman,
                    question: "Loading",
                    answer: "Loading",
                    lastUsed: new Date('2022-05-02 00:00:00')

  }
  answerArray: string[] = []

  ngOnInit(): void {
    this.getHangman();
  }

  getHangman(){
    this.dataService.getNextHangman().subscribe(hangman => {
      this.hangman = hangman
      this.splitAnswer()
    })
  }

  splitAnswer(){
    this.answerArray = this.hangman?.answer.split("");
  }

  

}
