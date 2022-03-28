import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/dark.scss';
import Home from './pages/home/Home';
import List from './pages/list/List';
import LogIn from './pages/login/LogIn';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from './FormSrc';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import EditeCategory from './components/catogery/editeCategory/EditeCategory';
import NewCategory from './components/catogery/newCategory/NewCategory';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<LogIn />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New input={userInputs} title='Add New User' />}
              />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={<New input={productInputs} title='Add New Product' />}
              />
            </Route>
            <Route path='category'>
              <Route index element={<List />} />
              <Route
                path='new'
                element={<New input={productInputs} title='Add New Category' />}
              />
              <Route
                path=':categoryId/edit'
                element={<New input={productInputs} title='Edite Category' />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
