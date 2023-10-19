import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { getProducts } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';


const Product = () => {
    const dispatch = useDispatch();
    const { data: product, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);


    if (status === "Loading") {
        return <p style={{ textAlign: "center" }}>Loading...</p>
    }

    if (status === "error") {
        return <p style={{ textAlign: "center" }}>Something went wrong! Try again later...</p>
    }


    console.log(product)

    return (
        <>

            <Container sx={{ mt: 5 }} maxWidth="xl">
                <Typography
                    m={3}
                    component={'div'}
                    variant='h5'
                >
                    Shop Now
                </Typography>
                <Grid container spacing={3}>
                    {
                        product.map((val) => {
                            return (

                                <Grid item key={val.id} lg={4} sm={6}>
                                    <ProductCard val={val} />
                                </Grid>

                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Product