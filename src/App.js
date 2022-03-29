import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/dark.scss";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Order from "./pages/Order/Order";
import CreateOrder from "./components/orders/create/Create";
import EditOrder from "./components/orders/edit/Edit";
import ShowOrder from "./components/orders/show/Show";
// heroes
import Hero from "./pages/Hero/Hero";
import CreateHero from "./components/heroes/create/Create";
import EditHero from "./components/heroes/edit/Edit";
// categories
import Category from "./pages/Category/Category";
import CreateCategory from "./components/categories/create/Create";
import EditCategory from "./components/categories/edit/Edit";
// sub categories
import SubCategory from "./pages/SubCategory/SubCategory";
import CreateSubCategory from "./components/subCategories/create/Create";
import EditSubCategory from "./components/subCategories/edit/Edit";

// users
import User from "./pages/User/User";
import CreateUser from "./components/users/create/Create";
import EditUser from "./components/users/edit/Edit";
import ShowUser from "./components/users/show/Show";
// variants
import Variant from "./pages/Variant/Variant";
import CreateVariant from "./components/variants/create/Create";
import EditVariant from "./components/variants/edit/Edit";
// brands
import Brand from "./pages/Brand/Brand";
import CreateBrand from "./components/brand/create/Create";
import EditBrand from "./components/brand/edit/Edit";
// variants optioons
// Settings
import Setting from "./pages/Setting/Setting";

import VariantsOptions from "./pages/VariantOptions/VariantOptions";
import CreateVariantOptions from "./components/variantOptions/create/Create";
import EditVariantOptions from "./components/variantOptions/edit/Edit";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<LogIn />} /> */}

            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" />} />
            </Route> */}
            {/* Orders */}
            <Route path="orders">
              <Route index element={<Order />} />
              <Route path=":orderId/show" element={<ShowOrder />} />
              <Route path=":orderId/edit" element={<EditOrder />} />
              <Route
                path="create"
                element={<CreateOrder title="Add New Order" />}
              />
            </Route>
            <Route path="users">
              <Route index element={<User />} />
              <Route path=":userId" element={<ShowUser />} />
              <Route
                path="create"
                element={<CreateUser title="Add New User" />}
              />
              <Route path=":userId/edit" element={<EditUser />} />
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
            {/* Heroes */}
            <Route path="heroes">
              <Route index element={<Hero />} />
              <Route path=":heroId/edit" element={<EditHero />} />
              <Route
                path="create"
                element={<CreateHero title="Add New Hero" />}
              />
            </Route>
            <Route path="Brands">
              <Route index element={<Brand />} />
              <Route path=":brandId/edit" element={<EditBrand />} />
              <Route path="create" element={<CreateBrand />} />
            </Route>
            <Route path="Settings">
              <Route index element={<Setting />} />
            </Route>
            {/* Categories */}
            <Route path="Categories">
              <Route index element={<Category />} />
              <Route path=":categoryId/edit" element={<EditCategory />} />
              <Route path="create" element={<CreateCategory />} />
            </Route>
            {/* Sub Categories */}
            <Route path="subCategories">
              <Route index element={<SubCategory />} />
              <Route path="create" element={<CreateSubCategory />} />
              <Route
                path=":subCategoryId/category/:categoryId/edit"
                element={<EditSubCategory />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
