import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="App">
      <h1>{count} </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
