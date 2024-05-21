import { create } from 'zustand';

interface LobbyState {
    id: string;
    addGameId: (id : string) => void;
};

const useLobbyStore = create<LobbyState>((set) => ({
    id: '',

    addGameId: (id : string) => set(state => (
        {
            id: id
        }
    ))
}));

export default useLobbyStore;
