import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const OrdersCart = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.02.2023</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  );
};

export default OrdersCart;
