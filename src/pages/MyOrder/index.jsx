import { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  console.log('order', order);
  return (
    <Layout>
      My Order
      <div className="px-6 overflow-y-scroll flex-1">
        {order?.slice(-1)[0].map(({ id, title, price, images }) => (
          <OrderCart
            key={id}
            {...{ id, title, price, imageUrl: images[0], handlerDelete }}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
