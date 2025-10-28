import { useState } from "react";

export default function FirstComp() {
  const [date, setDate] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim()) {
      setDate([...date, text]);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Добавить</button>

      <ul>
        {date.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
