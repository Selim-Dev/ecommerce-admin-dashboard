import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/dark.scss";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Order from "./pages/Order/Order";
import CreateOrder from "./components/orders/create/Create";
import EditOrder from "./components/orders/edit/Edit";
import ShowOrder from "./components/orders/show/Show";

import Variant from "./pages/Variant/Variant";
import CreateVariant from "./components/variants/create/Create";
import EditVariant from "./components/variants/edit/Edit";

import VariantsOptions from "./pages/VariantOptions/VariantOptions";
import CreateVariantOptions from "./components/variantOptions/create/Create";
import EditVariantOptions from "./components/variantOptions/edit/Edit";

import LogIn from "./pages/login/LogIn";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" />} />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
              <Route path=":orderId/show" element={<ShowOrder />} />
              <Route path=":orderId/edit" element={<EditOrder />} />
              <Route
                path="create"
                element={<CreateOrder title="Add New Order" />}
              />
            </Route>
            <Route path="variants">
              <Route index element={<Variant />} />
              <Route path=":variantId/edit" element={<EditVariant />} />
              <Route
                path="create"
                element={<CreateVariant title="Add New variant" />}
              />
            </Route>
            <Route path="variantOptions">
              <Route index element={<VariantsOptions />} />
              <Route
                path="variant/:variantId/:variantOptionId/edit"
                element={<EditVariantOptions />}
              />
              <Route
                path="create"
                element={
                  <CreateVariantOptions title="Add New variant option" />
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
