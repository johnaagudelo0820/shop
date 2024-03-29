import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../components/Navbar';
import { ShoppinCartProvider } from '../../context';
import ChackoutSideMenu from '../../components/CheckoutSideMenu';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <ChackoutSideMenu />
      </BrowserRouter>
    </ShoppinCartProvider>
  );
}

export default App;
