import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png';
import AppContext from '../context/AppContext';

const OrderItem = ({ product: productItem }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={productItem?.images?.[0]} alt={productItem.title} />
      </figure>
      <p>{productItem.title}</p>
      <p>${productItem.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(productItem)} />
    </div>
  );
};

export default OrderItem;
