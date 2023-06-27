export type GameStatus = 'cracked' | 'unreleased' | 'uncracked'

export interface IGame {
    id: string,
    title: string,
    slug: string,
    isAAA: boolean,
    protections: string[],
    hackedGroups: string[],
    releaseDate: string,
    crackDate?: string,
    shortImage: string,
    fullImage?: string,
    teaserLink?: string,
    metaScore?: number,
    userScore?: number,
    readableStatus: string,
    status: GameStatus
}

export interface IFullGame extends IGame {
    specsInfo: {
        device: string,
        model: string
        key: string
    }[],
    description: string,
}

export interface IGameApi {
    id: string,
    title: string,
    slug: string,
    is_AAA: boolean,
    protections: string,
    hacked_groups: string,
    release_date: string,
    teaser_link: string,
    crack_date: string | null,
    short_image: string,
    full_image: string,
    mata_score: number | null,
    user_score: number | null,
    readable_status: string,
}

export interface IFullGameApi extends IGameApi {
    specs_info: {
        cpu_info: string,
        ram_info: string,
        os_info: string,
        gpu_info: string
    },
    description: string,
}

export interface IGameList {
    hot_games: IGameApi[],
    unreleased_game: IGameApi[],
    popular_craked_games: IGameApi[]
}

export interface ISearchGame {
    id: string,
    title: string,
    slug: string,
    readableStatus: string,
    fullImage?: string,
    shortImage: string,
    crackDate?: string,
    releaseDate: string,
    status: 'cracked' | 'unreleased' | 'uncracked'
}

export interface ISearchGameApi {
    id: string,
    title: string,
    slug: string,
    readable_status: string,
    full_image: string,
    short_image: string,
    crack_date: string,
    release_date: string
}