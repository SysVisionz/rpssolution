import { off } from 'process';
import { Choice, Outcome, Player } from '../types';

export default class Winner extends Player {
  // private theirChoices: Choice[] = [];
  private choice: Choice = 'paper';

  private choiceCounter: Record<Choice, number> = {
    paper: 0,
    scissors: 0,
    rock: 0,
  };

  choose(): Choice {
    return this.choice;
  }

  result(you: Choice, them: Choice, result: Outcome): void {
    const results: { [key: string]: Choice } = {
      paper: 'scissors',
      rock: 'paper',
      scissors: 'rock',
    };

    // if (result !== 'win') {
    //   this.choice = results[them];
    // }

    this.choiceCounter[them]++;

    if (result !== 'win') {
      const madeChoices = Object.entries(this.choiceCounter);
      //420
      const highestChoices: Choice[] = madeChoices
        .sort((a, b) => a[1] - b[1])
        .slice(1)
        .map(([choice]) => choice as Choice);

      this.choice = okay(highestChoices);
    }
  }
}

function okay(choices: Choice[]): any {
  if (choices.includes('rock') && choices.includes('paper')) {
    return 'paper';
  }

  if (choices.includes('paper') && choices.includes('scissors')) {
    return 'scissors';
  }

  if (choices.includes('rock') && choices.includes('scissors')) {
    return 'rock';
  }
}
