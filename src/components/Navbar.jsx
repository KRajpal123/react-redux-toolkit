import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {
    const cartProducts = useSelector(state => state.cart);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "black", p: 2 }}>
                <Toolbar>
                    <Typography variant='h5' component={'div'} sx={{ flexGrow: 0, mr: 3, fontWeight: 500 }}>
                        React-Redux-Toolkit
                    </Typography>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        <Link to={'/dashboard'}
                        style={{textDecoration:"none",}}
                        >
                            Dashboard
                        </Link>
                    </Typography>
                    <IconButton color="primary" aria-label="add to shopping cart" size="large">
                        <Badge badgeContent={cartProducts.length} color="error" size="large">
                            <Link to={'/cart'}>
                                <AddShoppingCartIcon sx={{ fontSize: "40px" }} />
                            </Link>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}