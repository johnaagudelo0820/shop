import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../../context';

const Navbar = () => {
  const { count } = useContext(ShoppingCartContext);
  const stylesActive = 'underline underline-offset-4';

  const isActive = ({ isActive }) => (isActive ? stylesActive : undefined);

  return (
    <nav className="flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light fixed bg-white">
      <ul className="flex items-center gap-5">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/clothes">
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/electronics">
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/furnitures">
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/toys">
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/others">
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="text-black/60">johnaagudelo@gmail.com</li>
        <li>
          <NavLink className={isActive} to="/my-orders">
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/my-account">
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/sign-in">
            Sign In
          </NavLink>
        </li>

        <li className="flex relative">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          {count > 0 && (
            <div className="absolute -top-3 -right-3 font-bold">{count}</div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
