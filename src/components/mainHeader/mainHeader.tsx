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
    Icon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './mainHeader.css';
import { mainHeaderProps } from '../../DTO/mainMenuDto';

function MainHeader({ mainHeaderArray }: mainHeaderProps) {
    return (
        <>
            <AppBar position='static' className="mainHeaderWrap" style={{backgroundColor: 'rgb(0, 1, 43)'}}>
                <Toolbar disableGutters>
                    <Box className='menuListBox' component={'span'}>
                    <ul className='menuListUl'>
                        {mainHeaderArray.map((menuData, index) => {
                            return (
                                <>
                                    <li className="menuListLi" key={menuData.menuId}>{menuData.menuName}</li>
                                </>
                            );
                        })}
                    </ul>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default MainHeader;