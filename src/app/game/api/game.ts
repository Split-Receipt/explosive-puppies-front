import api from '@utils/api'
import { Game } from '@utils/types/game'
import { AxiosResponse } from 'axios'

export const GameApiModule = {
   getGameById: (params: {id: string}): Promise<AxiosResponse<Game>> => {
    return api.post('/game/get-by-id', params)
  }
}