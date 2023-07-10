import React, { useContext } from 'react';
import { PlusSmallIcon, CheckIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../../context';

const Card = (product) => {
  const {
    setCount,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    openCheckoutSideMenu,
    cartProducts,
  } = useContext(ShoppingCartContext);

  const isInCart =
    cartProducts.filter(({ id }) => id === product.id).length > 0;

  const showProduct = (item) => {
    openProductDetail();
    setProductToShow(item);
  };

  const addProductToCart = (event, productData) => {
    if (isInCart) return;
    event.stopPropagation();
    setCount((count) => count + 1);
    setCartProducts((products) => [...products, productData]);
    openCheckoutSideMenu();
  };

  const renderIcon = (isInCartProduct) => {
    if (isInCartProduct) {
      return (
        <div
          onClick={(event) => addProductToCart(event, product)}
          className="absolute top-1 right-1 flex justify-center items-center bg-lime-600 w-5 h-5 rounded-full cursor-not-allowed"
        >
          <CheckIcon className="h-4 w-4 text-white" />
        </div>
      );
    }

    return (
      <div
        onClick={(event) => addProductToCart(event, product)}
        className="absolute top-1 right-1 flex justify-center items-center bg-white w-5 h-5 rounded-full"
      >
        <PlusSmallIcon className="h-6 w-6 text-black" />
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 shadow-black">
          {product.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.images[0]}
          alt="headphone"
        />
        {renderIcon(isInCart)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">{`$ ${product.price}`}</span>
      </p>
    </div>
  );
};

export default Card;
