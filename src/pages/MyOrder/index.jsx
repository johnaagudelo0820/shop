import { useContext } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrderCart from '../../components/OrderCart';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;

  const [paramRouter] = currentPath.split('/').slice(-1);

  const [orderSelected] = isNaN(Number(paramRouter))
    ? order?.slice(-1)
    : [order[paramRouter]];

  return (
    <Layout>
      <div className="flex  justify-center w-80 relative mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {orderSelected?.products.map(({ id, title, price, images }) => (
          <OrderCart key={id} {...{ id, title, price, imageUrl: images[0] }} />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
