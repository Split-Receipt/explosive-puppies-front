import { Player } from '@utils/types/player'
import { Deck } from '@utils/types/deck'
import { Card } from '@utils/types/card'

export type GameParams = {
    id: string;
  }
  
export interface Game extends GameParams {
    lobbyId: string;
    players: Player[];
    playersDecks: Deck[];
    beatenDeck: Deck[];
    generalDeck: Deck[];
    moves: Player[] ;
    winner: Player | Card[];
    status: string;
  }

export interface GameResponse extends Game {

  }