import { create } from 'zustand';

interface LobbyState {
    id: string;
    addIdGame: (id : string) => void;
};

const useLobbyStore = create<LobbyState>((set) => ({
    id: '',

    addIdGame: (id : string) => set(state => (
        {
            id: id
        }
    ))
}));

export default useLobbyStore;
