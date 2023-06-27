import {IFullGame, IFullGameApi} from "../models/game";
import {parseArray} from "./parse-array";
import {checkEmpty} from "./check-empty";

export const fullGameConverter = (game: IFullGameApi): IFullGame => {
    const isUnreleased = Date.parse(game.release_date) > Date.now()

    return {
        id: game.id,
        title: game.title,
        slug: game.slug,
        isAAA: game.is_AAA,
        protections: parseArray(game.protections),
        hackedGroups: parseArray(game.hacked_groups),
        releaseDate: game.release_date,
        crackDate: checkEmpty(game.crack_date),
        shortImage: game.short_image,
        fullImage: checkEmpty(game.full_image),
        teaserLink: checkEmpty(game.teaser_link),
        metaScore: checkEmpty(game.mata_score),
        userScore: checkEmpty(game.user_score),
        readableStatus: game.readable_status,
        status: isUnreleased ? 'unreleased' : (
            game.crack_date === null ? 'uncracked' : 'cracked'
        ),
        description: game.description,
        specsInfo: Object.keys(game.specs_info).length !== 0 ? (
            [
                {
                    device: 'Процессор',
                    model: game.specs_info.cpu_info,
                    key: game.specs_info.cpu_info
                },
                {
                    device: 'Видеокарта',
                    model: game.specs_info.gpu_info,
                    key: game.specs_info.gpu_info
                },
                {
                    device: 'Память',
                    model: game.specs_info.ram_info,
                    key: game.specs_info.ram_info
                },
                {
                    device: 'ОС',
                    model: game.specs_info.os_info,
                    key: game.specs_info.os_info
                }
            ]
        ) : []
    }
}