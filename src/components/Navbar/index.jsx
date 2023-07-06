import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const stylesActive = 'underline underline-offset-4';

  const isActive = ({ isActive }) => (isActive ? stylesActive : undefined);

  return (
    <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
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
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
