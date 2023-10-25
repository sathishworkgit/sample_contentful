export interface cardProps {
    title: string,
    cardContentCollection: {
        items: [{
            image: {
                url: string
            },
            orderBy: number,
            subTitle: string,
            title: string,
            button: string
        }]
    }
}

export interface bannerProps {
    bannerObj: {
        bannerButton: string,
        bannerImage: {
            url: string
        },
        bannerText1: string,
        bannerText2: string
    },
    unforgettableContentObj: cardProps,
    escapeContentObj: cardProps,
    twoColumnContentObj: cardProps
}