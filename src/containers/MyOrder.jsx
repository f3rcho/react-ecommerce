import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import arrow from '../assets/icons/flechita.svg';
import AppContext from '../context/AppContext';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    return state.cart.reduce(reducer, 0);
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
