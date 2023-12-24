import "./App.css";
import CakeView from "./features/cake/cakeView";
import IceCreameView from "./features/icecream/iceCreameView";
import UserView from "./features/user/userView";

function App() {
  return (
    <>
      <CakeView />
      <IceCreameView />
      <UserView />
    </>
  );
}

export default App;
