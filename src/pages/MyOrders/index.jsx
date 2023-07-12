import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrdersCart from '../../components/OrdersCart';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex  justify-center w-80 relative mb-4">
        <h1>My Orders</h1>
      </div>
      {order.map(({ date, totalPrice, totalProducts }, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCart totalPrice={totalPrice} totalProducts={totalProducts} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
