import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useState } from 'react';

interface IProps {
  totalPrice: any;
  cart: any;
  setCart: any;
}
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const CartPage = (props: IProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, totalPrice, setCart } = props;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDelete = (item: any) => {
    const tempdelete = cart.filter((val: any) => val !== item);
    setCart(tempdelete);
  };
  return (
    <Box sx={{ position: 'fixed', right: 0 }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 300,
          }}
        >
          <Box sx={{}}>
            {cart.map((item: any) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    margin: '10px',
                  }}
                >
                  <Typography sx={{}}>{item.title}</Typography>
                  <Typography>
                    Price - {Math.floor(item.price) * 82} Rs
                  </Typography>
                  <IconButton>
                    <DeleteForeverIcon onClick={() => handleDelete(item)} />
                  </IconButton>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              position: 'fixed',
              bottom: 5,
              marginLeft: '100px',
            }}
          >
            <Typography>Total - {totalPrice}</Typography>
            <Button variant="contained">Checkout</Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
    // <Box
    //   sx={{
    //     height: '100%',
    //     width: '100px',
    //     position: 'fixed',
    //     right: 0,
    //     background: 'silver',
    //     border: '1px solid black',
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //   }}
    // >
    //   <Box sx={{}}>
    //     {cart.map((item: any) => {
    //       return (
    //         <Box
    //           key={item.id}
    //           sx={{
    //             display: 'flex',
    //             justifyContent: 'flex-start',
    //             alignItems: 'center',
    //             flexDirection: 'row',
    //             margin: '10px',
    //           }}
    //         >
    //           <Typography sx={{ marginRight: '10px' }}>{item.title}</Typography>
    //           <Typography> - {Math.floor(item.price) * 82} Rs</Typography>
    //         </Box>
    //       );
    //     })}
    //   </Box>
    //   <Box sx={{}}>
    //     <Typography>Total - {totalPrice}</Typography>
    //   </Box>
    // </Box>
  );
};

export default CartPage;
