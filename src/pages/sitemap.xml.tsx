import React from 'react';
import Games from "../api/games";

const URL = process.env.URL

const staticPagesURL = [
    `${URL}/`,
    `${URL}/search`
]

const generateSiteMap = (urls: string[]) => {
    const xmlUrls = urls.map(item => (
        `<url><loc>${item}</loc><lastmod>${new Date().toISOString()}</lastmod><priority>1.0</priority></url>`
    )).join('')

    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}</urlset>`
}

const getGamesUrl = async () => {
    const gameList = await Games.getGameList()
    const games = [...gameList.popular, ...gameList.unreleased, ...gameList.hots]
    return games.map(game => `${URL}/game/${game.slug}`)
}

export const getServerSideProps = async ({res}) => {
    const gamesUrl = await getGamesUrl()

    const sitemap = generateSiteMap([
        ...staticPagesURL,
        ...gamesUrl
    ])

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {}
    }
}

export default function SitemapXml() { return null }