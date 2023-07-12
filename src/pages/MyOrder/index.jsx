import { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrderCart from '../../components/OrderCart';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const [orderLast] = order?.slice(-1);

  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {orderLast?.products.map(({ id, title, price, images }) => (
          <OrderCart key={id} {...{ id, title, price, imageUrl: images[0] }} />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
