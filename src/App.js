import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import TheNotFound from './components/TheNotFound/NotFoun';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<OrderReview />} />
        <Route path="/inventory" element={<Inventory />} />
        <PrivateRoute path="/orderplaced" element={<PlaceOrder />} />
        <Route path="*" element={<TheNotFound />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
