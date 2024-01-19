import { Piece } from './pieces';

export class Rules {
  static determineWinner(player1Choice: Piece, player2Choice: Piece): [Piece, Piece] {
    const results = {
      Rock: { beats: ['Scissors'], loses: ['Paper'] },
      Paper: { beats: ['Rock'], loses: ['Scissors'] },
      Scissors: { beats: ['Paper'], loses: ['Rock'] },
    };

    const winner = results[player1Choice].beats.includes(player2Choice) ? player1Choice : player2Choice;
    const loser = results[player1Choice].loses.includes(player2Choice) ? player1Choice : player2Choice;

    return [winner, loser];
  }
}
