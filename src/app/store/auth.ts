import { create } from 'zustand';

interface AuthState {
    lobbyId: string;
    addLobbyId: (lobbyId : string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
	lobbyId: '',

	addLobbyId: (lobbyId : string) => set(state => (
		{
			lobbyId: lobbyId,
		}
	)),
}));

export default useAuthStore;
