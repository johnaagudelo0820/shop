import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';
import OrderCart from '../OrderCart';

import './styles.css';
import { totalPrice } from '../../utils';

const ChackoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handlerDelete = (id) => {
    const filterProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filterProducts);
  };

  const handlerCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder((orders) => [...orders, orderToAdd]);
    setCartProducts([]);
    closeCheckoutSideMenu();
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
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map(({ id, title, price, images }) => (
          <OrderCart
            key={id}
            {...{ id, title, price, imageUrl: images[0], handlerDelete }}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light text-lg">Total:</span>
          <span className="font-medium text-2xl">
            $ {totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg mt-4"
            onClick={() => handlerCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ChackoutSideMenu;
