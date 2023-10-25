import {
    Card,
    CardActionArea,
    CardMedia,
    Box,
    Typography,
    Button,
    CardContent
} from '@mui/material';
import { cardProps } from '../../DTO/cardDto';
import './unforgettableCard.css';

export interface destructureCardProps {
    cardContentCollection: cardProps
}

function UnfogettableCard({ cardContentCollection }: destructureCardProps) {
    return (
        <>
            <div className='unforgettableCardWrap'>
                <Card className='unfCard'>
                    <CardActionArea className='unfCardArea'>
                        <CardMedia className='cardImg' 
                            component='img'
                            image={cardContentCollection.image.url}
                            alt='Banner Image'
                        />
                        <CardContent>
                            <Typography className='unfSubtitle' variant="body2" color="text.secondary">
                                {cardContentCollection.subTitle}
                            </Typography>
                            <Typography className='unfTitle' gutterBottom variant="h5" component="div">
                                {cardContentCollection.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
}

export default UnfogettableCard;