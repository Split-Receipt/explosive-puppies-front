import api from '@utils/api';
import { CreateGameParams, CreateGameResponse } from '@utils/types/index';
import { AxiosResponse } from 'axios';

export const GameCreateApiModule = {
/**
   * Создает игру, используя предоставленные параметры.
   *
   * пример использования в коде проекта
   *
   * const {  } =  await GameCreateApiModule.createGame({ players: ['test'], lobbyId: 'test' })
   *
   * @param {CreateGameParams} params - Параметры для создания игры
   * @return {Promise<CreateGameResponse>} Ответ, содержащий информацию об игре
   */
	createGame: (params: CreateGameParams): Promise<AxiosResponse<CreateGameResponse>> => {
		return api.post('/game/create', params);
	},
};
