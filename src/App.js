import logo from "./logo.svg";
import "./App.css";
import AddCandy from "./components/AddCandy";
import Cart from "./components/Cart";
import ViewCandy from "./components/ViewCandy";
import { getCandyService, getCartCandyService } from "./services";
import { useEffect, useState } from "react";
import CartModal from "./components/CartModal";
import { addCartCandyService } from "./services";

function App() {
  const [candyDetails, setCandyDetails] = useState();
  const [cartToggle, setCartToggle] = useState(false);
  const [cartCandyData, setCartCandyData] = useState();

  const fetchCandy = async () => {
    const res = await getCandyService();
    setCandyDetails(res.data);

    const rescandy = await getCartCandyService();
    setCartCandyData(rescandy.data);
  };

  const addCandyCartHandler = async (e) => {
    console.log(e.target.id);
    addCartCandyService(e.target.id);
  };

  useEffect(() => {
    fetchCandy();
  }, []);

  return (
    <div className="h-full w-full text-center">
      <h1 className="text-3xl w-[300px] my-2 rounded-lg px-6 py-2 bg-red-400 mx-auto">
        Candy Shop
      </h1>

      <div className="flex bg-blue-300 justify-evenly items-center">
        <AddCandy fetchData={fetchCandy} />
        <div onClick={() => {setCartToggle(true)
        fetchCandy() }}>
          <Cart />
        </div>
      </div>

      {cartToggle && (
        <CartModal
          cartCandyData={cartCandyData}
          close={() => setCartToggle(false)}
        />
      )}

      <div>
        {candyDetails && (
          <ViewCandy
            addCandyCartHandler={addCandyCartHandler}
            data={candyDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
