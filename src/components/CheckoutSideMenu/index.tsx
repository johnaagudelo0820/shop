import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';

import './styles.css';

const ChackoutSideMenu = () => {
  const { isCheckoutSideMenu, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

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
    </aside>
  );
};

export default ChackoutSideMenu;
