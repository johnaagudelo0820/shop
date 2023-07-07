import React, { useContext } from 'react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../../context';

const Card = (product) => {
  const { setCount, openProductDetail, setProductToShow } =
    useContext(ShoppingCartContext);

  const showProduct = (item) => {
    openProductDetail();
    setProductToShow(item);
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
        <div
          onClick={() => setCount((count) => count + 1)}
          className="absolute top-1 right-1 flex justify-center items-center bg-white w-5 h-5 rounded-full"
        >
          <PlusSmallIcon className="h-6 w-6 text-black" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">{`$ ${product.price}`}</span>
      </p>
    </div>
  );
};

export default Card;
