import { useState } from "react";

export default function FirstComp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Счётчик 1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>+1</button>
      <button onClick={() => setCount1(count1 - 1)}>-1</button>

      <br />
      <br />
      <h1>Счётчик 2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>+1</button>
      <button onClick={() => setCount2(count2 - 1)}>-1</button>
      <h1>Итоговая сумма: {count1 + count2}</h1>
    </div>
  );
}
