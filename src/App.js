import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/dark.scss';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Order from './pages/Order/Order';
import CreateOrder from './components/orders/create/Create';
import EditOrder from './components/orders/edit/Edit';
import ShowOrder from './components/orders/show/Show';

import LogIn from './pages/login/LogIn';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs, orderInputs } from './FormSrc';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New input={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New input={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
              <Route path=":orderId/show" element={<ShowOrder />} />
              <Route path=":orderId/edit" element={<EditOrder />} />
              <Route
                path="create"
                element={
                  <CreateOrder input={orderInputs} title="Add New Order" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
