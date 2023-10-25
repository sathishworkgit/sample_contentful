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
import './twoColumnCard.css';

export interface destructureCardProps {
    cardContentCollection: cardProps
}

function TwoColumnCard({ cardContentCollection }: destructureCardProps) {
    return (
        <>
            <div className='twoCardDiv'>
                <Card className='twoCardWrap'>
                    <CardActionArea>
                        <Box className='twoOverlayTextWrap'>
                            <div className='twoCardWholeText'>
                                <Typography gutterBottom variant="h4" style={{fontWeight: 700}} component="div">
                                    {cardContentCollection.title}
                                </Typography>
                                <Typography gutterBottom variant="h6" style={{fontWeight: 400, fontSize:'16px'}} component="div">
                                    {cardContentCollection.subTitle}
                                </Typography>
                                <Button variant='contained'>{cardContentCollection.button}</Button>
                            </div>
                        </Box>
                        <CardMedia className='twoCardImg'
                            component='img'
                            image={cardContentCollection.image.url}
                            alt='Banner Image'
                        />
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
}

export default TwoColumnCard;