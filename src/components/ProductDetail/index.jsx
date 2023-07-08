import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import './styles.css';
import { ShoppingCartContext } from '../../context';

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  const { title, images, description, price } = productToShow;
  const [image] = images ?? '';
  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={closeProductDetail}
        />
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={image} alt={title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">$ {price}</span>
        <span className="font-medium text-md mb-1">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
