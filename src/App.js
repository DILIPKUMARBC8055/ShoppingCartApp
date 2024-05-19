import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomeItemContext from "./itemContext";

function App() {
  return (
    <CustomeItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomeItemContext>
  );
}
export default App;
