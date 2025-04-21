// import { useState } from "react";
import CounterBox from "./components/CounterBox";
import counterStore from "./stores/counterStores";

function App() {
  // const [count, setCount] = useState(1);
  const { count, increase, decrease, increaseBy } = counterStore();
  return (
    <>
      <h1>safdasf</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={() => increaseBy(10)}>10</button>
      <button onClick={decrease}>Decrease</button>
      <CounterBox count={count} />
    </>
  );
}

export default App;
