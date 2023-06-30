const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    env: {
        API_URL: 'https://gamestatus.info/back/api',
        URL: isDev ? 'http://localhost:3000' : 'https://crackstatus.helops.ru'
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}