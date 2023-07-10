import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';
import OrderCart from '../OrderCart';

import './styles.css';

const ChackoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(ShoppingCartContext);

  const handlerDelete = (id) => {
    const filterProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filterProducts);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenu ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6 overflow-y-scroll">
        {cartProducts.map(({ id, title, price, images }) => (
          <OrderCart
            key={id}
            {...{ id, title, price, imageUrl: images[0], handlerDelete }}
          />
        ))}
      </div>
    </aside>
  );
};

export default ChackoutSideMenu;
