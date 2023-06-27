import {IGame, IGameApi, ISearchGame, ISearchGameApi} from "../models/game";
import {checkEmpty} from "./check-empty";

export const searchGameConverter = (game: ISearchGameApi): ISearchGame => {
    const isUnreleased = Date.parse(game.release_date) > Date.now()

    return {
        id: game.id,
        title: game.title,
        slug: game.slug,
        readableStatus: game.readable_status,
        fullImage: checkEmpty(game.full_image),
        shortImage: game.short_image,
        crackDate: checkEmpty(game.crack_date),
        releaseDate: game.release_date,
        status: isUnreleased ? 'unreleased' : (
            game.crack_date === null ? 'uncracked' : 'cracked'
        )
    }
}