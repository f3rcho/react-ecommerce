import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../containers/Layout';
import PasswordRecovery from '../pages/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/send-email" component={<SendEmail />} />
          <Route path="/new-password" component={<NewPassword />} />
          <Route path="/account" component={<MyAccount />} />
          <Route path="/singup" component={<CreateAccount />} />
          <Route path="/checkout" component={<Checkout />} />
          <Route path="/orders" component={<Orders />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
