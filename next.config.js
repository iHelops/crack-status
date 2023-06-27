module.exports = {
    env: {
        API_URL: 'https://gamestatus.info/back/api',
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