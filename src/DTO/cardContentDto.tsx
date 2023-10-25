import { cardProps } from "./cardDto"

export interface cardContentProps {
    title: string,
    cardContentCollection: {
        items: [
            cardProps
        ]
    }
}