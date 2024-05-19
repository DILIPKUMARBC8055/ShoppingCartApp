import data from "../data/itemData";
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Items;
