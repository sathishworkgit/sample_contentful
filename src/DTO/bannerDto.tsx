import { cardContentProps } from './cardContentDto';

export interface bannerProps {
    bannerObj: {
        bannerButton: string,
        bannerImage: {
            url: string
        },
        bannerText1: string,
        bannerText2: string
    },
    unforgettableContentObj: cardContentProps,
    escapeContentObj: cardContentProps,
    twoColumnContentObj: cardContentProps
}