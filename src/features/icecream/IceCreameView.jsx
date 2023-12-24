import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";
const IceCreameView = () => {
  const [value, setValue] = useState(1);
  const noOfIceCream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice cream - {noOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice cream
      </button>
    </div>
  );
};

export default IceCreameView;
