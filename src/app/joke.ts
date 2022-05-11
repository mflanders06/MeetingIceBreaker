export interface Joke {
    id: number,
    category: JokeCategory, //1 = joke, 2 = trivia, 3 = hangman
    question: string,
    answer: string,
    lastUsed: Date,
    hint?: string
}

export enum JokeCategory{
    joke = 'joke',
    trivia = 'trivia',
    hangman = 'hangman',
    nameThatQuote = 'name that quote'
}