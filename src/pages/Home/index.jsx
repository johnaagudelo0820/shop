import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

const API = 'https://api.escuelajs.co/api/v1';

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = await fetch(`${API}/products`);
        if (request.ok) {
          const data = await request.json();
          setProducts(data);
          return;
        }

        setError('Error al cargar los productos');
      } catch (error) {
        setError('Error al cargar los productos');
      }
    };
    getProducts();
  }, []);

  return (
    <Layout>
      {error && <h3>{error}</h3>}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map(
          ({ id, title, category: { name }, price, images: [image] }) => (
            <Card
              key={id}
              title={title}
              categoryName={name}
              price={price}
              image={image}
            />
          )
        )}
      </div>
    </Layout>
  );
}

export default Home;
