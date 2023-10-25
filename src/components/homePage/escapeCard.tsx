import {
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent
} from '@mui/material';
import { cardProps } from '../../DTO/cardDto';
import './escapeCard.css';

export interface destructureCardProps {
    cardContentCollection: cardProps
}

function EscapeCard({ cardContentCollection }: destructureCardProps) {
    return (
        <>
            <div className='escapeCardWrap'>
                <Card className='escapeCard'>
                    <CardActionArea className='escapeCardArea'>
                        <CardMedia className='escapeCardImg' 
                            component='img'
                            image={cardContentCollection.image.url}
                            alt='Banner Image'
                        />
                        <CardContent>
                            <Typography className='escapeTitle' gutterBottom variant="h5" component="div">
                                {cardContentCollection.title}
                            </Typography>
                            <Typography className='escapeSubtitle' variant="body2" color="text.secondary">
                                {cardContentCollection.subTitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
}

export default EscapeCard;