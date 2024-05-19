import React from "react";
import styles from "../styles/Total.module.css";
import { useValues } from "../itemContext";

function Navbar() {
  //const { total } = useContext(totalContext);
  const { item, total, resetItems, toggle } = useValues();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={toggle}>
          Cart
        </button>

        <button className={styles.itemButton} onClick={resetItems}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
