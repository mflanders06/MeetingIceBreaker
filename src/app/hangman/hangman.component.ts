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
  guessArray: string[] = []
  guessIndex: number[] = []
  hidden: number = 1

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

  inputCharacter(guessNumber: number, event: any){
    const {target:{value}} = event
    this.guessArray[guessNumber] = value.toString().toUpperCase()
    this.validateGuess()
  }

  validateGuess(){
    this.answerArray.forEach((element, index) => {
      if(this.guessArray.includes(element) && !this.guessIndex.includes(index)){ //if the letter is in the answer, and the index of the answer isn't already in the guessIndex
        this.guessIndex.push(index) //add index to the guessIndex array
      }
    });
  }

  checkIndex(index:number){
    console.log('The guess index', this.guessIndex)
    return this.guessIndex.includes(index)
  }

  showAnswer(){
    this.hidden = 0
  }

  

}
