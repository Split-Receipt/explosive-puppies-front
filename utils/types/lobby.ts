import { Player } from '@utils/types/player';
import { Game } from '@utils/types/game';

export type LoginUserParams = {
  lobbyId?: string;
  userName: string;
}

export type GetLobbyData = {
	lobbyId: string;
	playerId: string;
}

export type LobbyResponse = {
	lobbyId: string;
	players: Player[];
	games: Game[];
}
