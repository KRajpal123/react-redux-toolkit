import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add, deleteProduct } from '../store/cartSlice'
import { useLocation } from 'react-router-dom';

export default function ProductCard({ val }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';

    const addToCart = (val) => {
        // dispatch an add action
        dispatch(add(val))
    }

    const removeCart = (id) => {
        //  dispatch an remove action
        dispatch(deleteProduct(id))
    }
    return (
        <Card height="240px">
            <CardActionArea>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <CardMedia
                        component="img"
                        height={"150px"}
                        sx={{
                            width: "200px",
                            objectFit: "contain"
                        }}
                        image={val.image}
                        alt="green iguana"
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                    </Typography>
                </CardContent>
                <Typography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'20px'}
                >INR:{val.price}</Typography>
                <CardContent style={{ maxHeight: "100px", overflowY: "auto" }}>
                    <Typography variant="body2" color="text.secondary">
                        {val.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button size="large" color="error"
                    onClick={isCartPage ? () => removeCart(val.id) : () => addToCart(val)}
                    variant='contained'
                >
                    {isCartPage ? "Remove Item" : "add to cart"}
                </Button>
            </CardActions>
        </Card>

    );
}