import requests from "./index";
import {IFullGameApi, IGameApi, IGameList} from "../models/game";
import {gameConverter} from "../helpers/game-converter";
import {searchGameConverter} from "../helpers/search-game-converter";
import {fullGameConverter} from "../helpers/full-game-converter";

class GamesApi {
    getGameList = async () => {
        const {data} = await requests.get<IGameList>('/gameinfo/game/')
        return {
            hots: data.hot_games.map(item => gameConverter(item)),
            unreleased: data.unreleased_game.map(item => gameConverter(item)),
            popular: data.popular_craked_games.map(item => gameConverter(item))
        }
    }

    getGame = async (slug: string) => {
        const {data} = await requests.get<IFullGameApi>('https://gamestatus.info/back/api/gameinfo/game/' + slug)
        return fullGameConverter(data)
    }

    search = async (query: string) => {
        const {data} = await requests.post<IGameApi[]>('/gameinfo/game/search_title/', {
            title: query
        })

        return data.map(item => searchGameConverter(item))
    }
}

export default new GamesApi()