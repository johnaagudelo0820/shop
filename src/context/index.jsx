import { createContext, useEffect, useMemo, useState } from 'react';

export const ShoppingCartContext = createContext([]);

const API = 'https://api.escuelajs.co/api/v1';

export const ShoppinCartProvider = ({ children }) => {
  // queantity product added to shopping cart
  const [count, setCount] = useState(0);
  // Sidebar product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // Information product detail selected
  const [productToShow, setProductToShow] = useState({});
  // Shipping cart products
  const [cartProducts, setCartProducts] = useState([]);
  // sidebar checkout product
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  // Shopping Cart Order
  const [order, setOrder] = useState([]);
  // get products from API
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // search products
  const [searchByTitle, setsearchByTitle] = useState('');

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

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  const productsFiltered = useMemo(
    () =>
      products.filter((product) =>
        product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      ),
    [searchByTitle, products]
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        productToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenu,
        order,
        setOrder,
        products,
        error,
        searchByTitle,
        setsearchByTitle,
        productsFiltered,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
