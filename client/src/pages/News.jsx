import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { 
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import {
    Menu,
    Home,
    Paid,
    Newspaper,
    AccountCircle,
    Notifications,
    Settings,
    Logout
} from '@mui/icons-material';
import logo from "../assets/Logo.svg";
import avatar from "../assets/Avatar.png";
import { mobile } from '../responsive';
import News from '../components/News';

const drawerWidth = 240;

const Img = styled.img`
    height: 45px;
    width: 45px;
    cursor: pointer;
`;

const ImgContainer = styled.div`
    display: flex;
    padding: 8px 0 10.5px 0;

    Img {
        display: none;

        ${mobile({ display: "flex" })};
    }
`;

const LogoContainer = styled.div`
    display: flex;
    padding: 8px 16px 3px 16px;
`;

const Logo = styled.div`
    padding-left: 10px;
    margin: auto;
    font-weight: 600;
    font-size: 1.7rem;
    text-decoration: none;
    cursor: pointer;

    span {
        font-weight: 500;
        font-size: 1.4rem;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;              
`;

const Avatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;
`;

const NewsPage = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <LogoContainer>
                <Img src={logo} alt="" />

                <Logo>Crypto <span>Verse</span></Logo>
            </LogoContainer>

            <List>
                <Typography style={{margin: "12px 16px 6px 16px"}}>GENERAL</Typography>

                <Link to="/" style={{textDecoration: "none", color: "white"}}>
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>

                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>

                <Link to="/cryptocurrencies" style={{textDecoration: "none", color: "white"}}>
                    <ListItem button>
                        <ListItemIcon>                  
                            <Paid />
                        </ListItemIcon>

                        <ListItemText primary={"Cryptocurrencies"} />
                    </ListItem>
                </Link>

                <Link to="/news" style={{textDecoration: "none", color: "white"}}>
                    <ListItem button>
                        <ListItemIcon>
                            <Newspaper />
                        </ListItemIcon>

                        <ListItemText primary={"News"} />
                    </ListItem>
                </Link>

                <ListItem button>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>

                    <ListItemText primary={"Account"} />
                </ListItem>
            </List>   
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{justifyContent: "space-between"}}>
                    <ImgContainer>
                        <Img src={logo} alt="" />
                    </ImgContainer>

                    <Container>
                        <Notifications style={{cursor: "pointer"}} />
                        <Settings style={{cursor: "pointer"}} />
                        <Avatar src={avatar} alt="" />
                        <Logout style={{cursor: "pointer"}} />

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >

                {drawer}

                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >

                {drawer}

                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                
                <Typography variant='h5'>News</Typography>
                <News />
            </Box>
        </Box>
    );
}

export default NewsPage;
