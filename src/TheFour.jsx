import { useState } from "react";

export default function FirstComp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(Math.min(10, count + 1))}>+1</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>-1</button>
      <h1>{count}</h1>
    </div>
  );
}
