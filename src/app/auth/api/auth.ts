import api from '@utils/api'
import { LoginUserParams, PlayerAuthResponse } from '@utils/types/index'
import { AxiosResponse } from 'axios'

export const AuthApiModule = {
   /**
   * Создает лобби и выполняет вход, используя предоставленные параметры.
   *
   * пример использования в коде проекта
   * 
   * const { token, lobbyId } = await AuthApiModule.createLobbyAndLogin({ userName: 'test', password: 'test' })
   * 
   * @param {LoginUserParams} params - Параметры для входа пользователя
   * @return {Promise<PlayerAuthResponse>} Ответ, содержащий информацию об аутентификации игрока
   */
   createLobbyAndLogin: (params: LoginUserParams): Promise<AxiosResponse<PlayerAuthResponse>> => {
    return api.post('/auth', params)
  }
}