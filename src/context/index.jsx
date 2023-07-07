import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext([]);

export const ShoppinCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
