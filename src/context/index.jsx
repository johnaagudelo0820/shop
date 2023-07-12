import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext([]);

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
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(true);

  // Shopping Cart Order
  const [order, setOrder] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  console.log('order', order);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
