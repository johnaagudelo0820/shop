import { useContext, useMemo } from 'react';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';
import { useParams } from 'react-router-dom';

function Home() {
  const { category } = useParams();
  const { productsFiltered, error, setsearchByTitle, searchByTitle } =
    useContext(ShoppingCartContext);

  const productFiltredByCategory = useMemo(() => {
    if (!category) return productsFiltered;
    return productsFiltered.filter(
      (product) =>
        product.category.name.toLowerCase() === category.toLowerCase()
    );
  }, [productsFiltered, category]);

  return (
    <Layout>
      <div className="flex  justify-center w-80 relative mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black p-2 w-80 mb-4 focus:outline-none"
        onChange={(event) => setsearchByTitle(event.target.value)}
        value={searchByTitle}
      />
      {error && <h3 className="font-medium text-red-600">{error}</h3>}
      {productFiltredByCategory.length === 0 && (
        <div className="flex items-center mt-3">
          <p className="font-medium text-center">No hay productos</p>
        </div>
      )}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {productFiltredByCategory.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
