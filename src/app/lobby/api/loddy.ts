import api from '@utils/api'
import { CreateGameParams, GameResponse } from '@utils/types/index'
import { AxiosResponse } from 'axios'

export const GameCreateApiModule = {
   /**
   * Создает игру, используя предоставленные параметры.
   *
   * пример использования в коде проекта
   * 
   * const {  } =  await GameCreateApiModule.createGame({ players: ['test'], lobbyId: 'test' })
   * 
   * @param {CreateGameParams} params - Параметры для создания игры
   * @return {Promise<GameResponse>} Ответ, содержащий информацию об игре
   */
   createGame: (params: CreateGameParams): Promise<AxiosResponse<GameResponse>> => {
    return api.post('/game', params)
  }
}