import { useState } from "react";

export default function TheThird(params) {
  const [text, setText] = useState(null);
  const [h1text, setH1text] = useState(null);
  return (
    <>
      <input
        type="text"
        placeholder="Введите имя"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setH1text(text)}>Сохранить</button>
      <h1>{h1text}</h1>
    </>
  );
}
