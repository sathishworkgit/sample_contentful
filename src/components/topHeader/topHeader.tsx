import {
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
    Icon,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './topHeader.css';
import { topHeaderProps } from '../../DTO/topMenuDto';

function TopHeader({ topHeaderObj }: topHeaderProps) {
    return (
        <>
            <AppBar position='static' className="topHeaderWrap" style={{backgroundColor: 'rgb(0, 1, 43)'}}>
                <Toolbar disableGutters>
                    <Box className='topHeaderLeft' sx={{flexGrow: 1}}>
                        <img className="topHeaderLogo" src={topHeaderObj.logo.url} />
                        <Box className='dividerLine'/>
                        <Typography className='TopHeaderTitle' component="h6">
                            {topHeaderObj.title}
                        </Typography>
                    </Box>
                    <Box className='topHeaderRight' sx={{flexGrow: 0}}>
                        <SearchIcon />
                        <ShoppingCartIcon />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default TopHeader;