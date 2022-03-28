import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
  useReducer,
} from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsModule = ({ children }) => {
  const [products, setProducts] = useState([]);
  //   console.log("i enjdr");

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/products').then((res) => {
      setProducts(res.data.data.data);
    });
  }, []);
  console.log(products);
  //* category section
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/category').then((res) => {
      setCategory(res.data.data.data);
    });
  }, []);
  console.log(category);
  // Cart section
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  const addToCart = useCallback(
    (product) => {
      const exist = cartItems.find((item) => item._id === product._id);
      console.log(cartItems);
      if (exist) {
        setCartItems(
          cartItems.map((item) =>
            item._id === product._id
              ? {
                  ...exist,
                  qty: exist.qty === exist.stock ? exist.qty : exist.qty + 1,
                }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    },
    [cartItems]
  );

  // Decrease From Cart
  const decFromCart = useCallback(
    (product) => {
      const exist = cartItems.find((item) => item._id === product._id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((item) => item._id !== product._id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item._id === product._id ? { ...exist, qty: exist.qty - 1 } : item
          )
        );
      }
    },
    [cartItems]
  );

  const contextValue = useMemo(
    () => ({ products, category, addToCart, decFromCart, cartItems }),
    [products, category, addToCart, decFromCart, cartItems]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
