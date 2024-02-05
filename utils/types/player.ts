export interface Player {
  userName: string;
  avatar: string;
  id: string;
}

export interface PlayerAuthResponse extends Player {
  token: string;
  lobbyId: string;
}