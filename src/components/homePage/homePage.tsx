import {
    Card,
    CardActionArea,
    CardMedia,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Icon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './homePage.css';
import UnfogettableCard from './unforgerttableCard';
import EscapeCard from './escapeCard';
import TwoColumnCard from './twoColumnCard';
import { bannerProps } from '../../DTO/bannerDto';

function HomePage({ bannerObj, unforgettableContentObj, escapeContentObj, twoColumnContentObj }: bannerProps) {
    return (
        <>
            <section className='bannerSection'>
                <Card className='bannerCardWrap'>
                    <CardActionArea>
                        <Box className='overlayTextWrap'>
                            <Typography gutterBottom variant="h4" style={{fontWeight: 700}} component="div">
                                {bannerObj.bannerText1}
                            </Typography>
                            <Typography gutterBottom variant="h6" style={{fontWeight: 400, fontSize:'16px'}} component="div">
                                {bannerObj.bannerText2}
                            </Typography>
                            <Button variant='contained'>{bannerObj.bannerButton}</Button>
                        </Box>
                        <CardMedia 
                            component='img'
                            image={bannerObj.bannerImage.url}
                            alt='Banner Image'
                        />
                    </CardActionArea>
                </Card>
            </section>
            <section>
            <div className='cardContentWrap'>
                <div className='cardTitleDiv'>
                    <Typography component='div' variant='h2' className='cardMainTitle'>
                        {unforgettableContentObj.title}
                    </Typography>
                </div>
                <div className='cardLoopWrap'>
                    {
                        unforgettableContentObj.cardContentCollection.items.map((cardObj, index) => {
                            return (
                                <>
                                    <UnfogettableCard cardContentCollection={cardObj} />
                                </>
                            );
                        })
                    }
                </div>
            </div>
            </section>
            <section>
                <div className='cardContentWrap'>
                    <div className='cardTitleDiv'>
                        <Typography component='div' variant='h2' className='cardMainTitle'>
                            {escapeContentObj.title}
                        </Typography>
                    </div>
                    <div className='cardLoopWrap'>
                        {
                            escapeContentObj.cardContentCollection.items.map((cardObj, index) => {
                                return (
                                    <>
                                        <EscapeCard cardContentCollection={cardObj}/>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className='cardContentWrap'>
                    <div className='cardLoopWrap'>
                        {
                            twoColumnContentObj.cardContentCollection.items.map((cardObj, index) => {
                                return (
                                    <>
                                        <TwoColumnCard cardContentCollection={cardObj} />
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;