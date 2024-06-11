import { create } from 'zustand';
import { Game } from '@utils/types/index';

interface GameStore {
	game: Game;
	addDataGame: (game: Game) => void;
}

const useGameStore = create<GameStore>((set) => ({
	game: {
		id: '',
		lobbyId: '',
		players: [],
		playersDecks: [],
		beatenDeck: [],
		generalDeck: [],
		moves: [],
		winner: {
			userName: '',
			avatar: '',
			id: '',
			status: '',
		},
		status: '',
	},

	addDataGame: (newGameData: Game) => set((state) => ({game: newGameData}))}
));

export default useGameStore;
