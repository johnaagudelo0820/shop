import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const OrderCart = ({ id, title, imageUrl, price, handlerDelete }) => {
  let renderXmarkIcon = null;

  if (handlerDelete) {
    renderXmarkIcon = (
      <XMarkIcon
        onClick={() => handlerDelete(id)}
        className="h-6 w-6 text-black cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  );
};

export default OrderCart;
