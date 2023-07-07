import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import './styles.css';

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="h-6 w-6" />
      </div>
    </aside>
  );
};

export default ProductDetail;