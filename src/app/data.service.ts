import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Joke, JokeCategory } from './joke';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jokeList: Joke[] = [
    {
      id: 1,
      category: JokeCategory.joke,
      question: "What do you call a fashionable lawn statue with an excellent sense of rhythmn?",
      answer: "A metro-gnome",
      lastUsed: new Date('2022-05-09 00:00:00')
    },
    {
      id: 2,
      category: JokeCategory.joke,
      question: "Second",
      answer: "yes, this is second",
      lastUsed: new Date('2022-05-10 00:00:00')
    },
    {
      id: 3,
      category: JokeCategory.nameThatQuote,
      question: "Ode to a Small Lump of Green Putty I found in My Arpit One Midsummer Morning",
      answer: "Hitchhiker's Guide to the Galaxy",
      lastUsed: new Date('2022-05-08 00:00:00'),
      hint: "Movie"
    },
    {
      id: 4,
      category: JokeCategory.trivia,
      question: "Who named the Pacific Ocean?",
      answer: "Ferdinand Magellan",
      lastUsed: new Date('2022-05-11 00:00:00')
    },
    {
      id: 5,
      category: JokeCategory.hangman,
      question: "Map",
      answer: "Amerigo Vespucci",
      lastUsed: new Date('2022-05-11 00:00:00')
    }
  ]

  constructor() { }

  getNextJoke(){

    return of(this.jokeList.filter( val => val.category === JokeCategory.joke ).sort( (a, b) => {
      return b.lastUsed > a.lastUsed ? -1 : 1
    })[0])

  }

  getNextTrivia(){

    return of(this.jokeList.filter( val => val.category === JokeCategory.trivia ).sort( (a, b) => {
      return b.lastUsed > a.lastUsed ? -1 : 1
    })[0])

  }

  getNextHangman(){

    return of(this.jokeList.filter( val => val.category === JokeCategory.hangman ).sort( (a, b) => {
      return b.lastUsed > a.lastUsed ? -1 : 1
    })[0])

  }

  getNextQuote(){

    return of(this.jokeList.filter( val => val.category === JokeCategory.nameThatQuote ).sort( (a, b) => {
      return b.lastUsed > a.lastUsed ? -1 : 1
    })[0])

  }




}
