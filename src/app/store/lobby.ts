import { create } from 'zustand';

interface LobbyState {
	gameId: string;
    addGameId: (gameId : string) => void;
}

const useLobbyStore = create<LobbyState>((set) => ({
	gameId: '',

	addGameId: (gameId : string) => set(state => (
		{
			gameId: gameId,
		}
	)),
}));

export default useLobbyStore;
