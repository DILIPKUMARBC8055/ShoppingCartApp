import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";
const itemContext = createContext();
function useValues() {
  const value = useContext(itemContext);
  return value;
}
function CustomeItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (prod) => {
    const index = cartItems.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
    } else {
      cartItems[index].quantity++;
      setCartItems(cartItems);
    }
    setTotal(total + prod.price);
    setItem(item + 1);
  };

  const handleRemove = (prod) => {
    if (total <= 0) {
      return;
    }
    const index = cartItems.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      return;
    } else {
      cartItems[index].quantity--;

      if (cartItems[index].quantity === 0) {
        cartItems.splice(index, 1);
      }
      setCartItems(cartItems);
    }
    setTotal(total - prod.price);
    setItem(item - 1);
  };
  const resetItems = () => {
    setItem(0);
    setTotal(0);
    setCartItems([]);
  };
  const toggle = () => setShowCart(!showCart);

  return (
    <itemContext.Provider
      value={{
        total,
        item,
        resetItems,
        handleAdd,
        handleRemove,
        toggle,
        cartItems,
      }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}
export { itemContext, useValues };
export default CustomeItemContext;
