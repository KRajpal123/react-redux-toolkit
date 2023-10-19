import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material'

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    return (
        <Container maxWidth="xl" sx={{ mt: 5 }} >
            <Grid container spacing={3}>
                {
                    cartItems.map((val) => {
                        return (

                            <Grid item key={val.id} lg={4} sm={6}>
                                <ProductCard val={val} />
                            </Grid>

                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Cart