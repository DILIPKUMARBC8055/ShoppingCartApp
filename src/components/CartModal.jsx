import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValues } from "../itemContext";

function CartModal() {
  const { total, cartItems,resetItems,toggle } = useValues();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={resetItems}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cartItems.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.name}</h1>
              <h3>X {item.quantity} </h3>
              <h3>X {item.quantity * item.price}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
