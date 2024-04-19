import api from '@utils/api'
import { GameParams, GameResponse } from '@utils/types/game'
import { AxiosResponse } from 'axios'

export const GameApiModule = {
   /**
   * Создает лобби и выполняет вход, используя предоставленные параметры.
   *
   * пример использования в коде проекта
   * 
   * const { token, lobbyId } = await AuthApiModule.createLobbyAndLogin({ userName: 'test', password: 'test' })
   * 
   * @param {GameParams} params - Параметры для входа пользователя
   * @return {Promise<GameResponse>} Ответ, содержащий информацию об аутентификации игрока
   */
   getGameById: (params: GameParams): Promise<AxiosResponse<GameResponse>> => {
    return api.post('/game', params)
  }
}