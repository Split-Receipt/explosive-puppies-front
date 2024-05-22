import { Player } from '@utils/types/player'
import { Deck } from '@utils/types/deck'
  
export interface Game {
    id: string;
    lobbyId: string;
    players: Player[];
    playersDecks: Deck[];
    beatenDeck: Deck[];
    generalDeck: Deck[];
    moves: Player[];
    winner: Player;
    status: string;
}

export type CreateGameParams = {
    players: Player[];
    lobbyId: string;
}