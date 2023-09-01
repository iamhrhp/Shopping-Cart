import { Box, Button, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  const navigate = useNavigate();

  const handleProduct = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      const resJson = await res.data;
      setProducts(resJson);
      // console.log(resJson);
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  const handleCart = (item: any) => {
    setCart([...cart, item]);
    // console.log('item', item);
  };
  // console.log('cart', cart);

  const totalPrice = cart.reduce(
    (total, item) => total + Math.floor(item.price) * 82,
    0
  );

  console.log('totalPrice', totalPrice);

  return (
    <Box>
      <CartPage totalPrice={totalPrice} cart={cart} setCart={setCart} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                width: '345px !important',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '10px',
              }}
            >
              <CardMedia
                sx={{
                  width: '300px',
                  height: '337px',
                  objectFit: 'contain',
                }}
                component="img"
                width="600"
                height="337"
                image={item.image}
                placeholder={item.title}
              />
              <Typography>{item.title}</Typography>
              <Typography>Price - {Math.floor(item.price) * 82} Rs</Typography>
              <Button variant="contained" onClick={() => handleCart(item)}>
                Add to Cart
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomePage;
