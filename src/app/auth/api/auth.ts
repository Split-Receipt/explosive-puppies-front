import api from '@utils/api'
import { LoginUserParams, PlayerAuthResponse } from '@utils/types/index'


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
   createLobbyAndLogin: async (params: LoginUserParams): Promise<PlayerAuthResponse> => {
    const response = await api.post('/auth', params)
    return response.data;
  }
}