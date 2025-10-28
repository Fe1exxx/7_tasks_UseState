import { useState } from "react";

export default function FirstComp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - count)}>Сброс</button>
      <h1>{count}</h1>
    </div>
  );
}
