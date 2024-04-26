import { Player } from '@utils/types/player'
import { Deck } from '@utils/types/deck'
import { Card } from '@utils/types/card'

export type Game = {
    id: string;
    lobbyId: string;
    players: Player[];
    playersDecks: Deck[];
    beatenDeck: Deck[];
    generalDeck: Deck[];
    moves: Player[] ;
    winner: Player | Card[];
    status: string;
}

export type CreateGameParams = {
    players: Player[];
    lobbyId: string;
}

export interface GameResponse extends Game {}