import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  constructor(private dataService: DataService) { }
  hangman: Joke | null = null

  ngOnInit(): void {
  }

  getHangman(){
    this.dataService.getNextHangman().subscribe(hangman => this.hangman = hangman)
  }

}
