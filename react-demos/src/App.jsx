import Card from "./components/Card";
import "./index.css";
import Weather from "./components/Weather";
import { FaCartArrowDown } from "react-icons/fa";
import { useState, useReducer } from "react";
import FetchDataEffect from "./components/FetchDataEffect";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      break;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [count, setCount] = useState(0);
  console.log(count);
  const onIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <main style={{ margin: "10rem 0 0 0" }}>
      <div>
        {/** play with useReducer  */}
        <h1>count from useReducer: {state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>plus +</button>
        <button onClick={() => dispatch({ type: "decrement" })}>minus -</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>

      <h1>Count from useEffects: {count}</h1>
      <section>
        <Password isValid={true} />
        <Weather />
        <FaCartArrowDown />
      </section>
      <div>
        <Card count={count} onClickHandler={onIncrement}>
          <h1> My Card</h1>
          <p>This is some content for the card</p>
        </Card>
      </div>
      <div style={{ height: "600px", overflowY: "scroll" }}>
        <FetchDataEffect />
      </div>
    </main>
  );
};

export default App;
