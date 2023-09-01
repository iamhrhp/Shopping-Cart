import CartPage from '../CartPage/CartPage';
import HomePage from '../HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import MasterPage from '../HomePage/MasterPage';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterPage />} />
      {/* <Route path="/cart" element={<CartPage />} /> */}
    </Routes>
  );
};

export default RoutesPage;
