import './App.css';

import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

function App() {
  return (
    <div className="bg-red-100">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </div>
  );
}

export default App;
