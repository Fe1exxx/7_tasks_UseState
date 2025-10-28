import { useState, useEffect } from "react";

export default function TheFive() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // ← Перезапуск при изменении цвета

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div>
      <button onClick={() => changeColor("red")}>Красный</button>
      <button onClick={() => changeColor("green")}>Зелёный</button>
      <button onClick={() => changeColor("blue")}>Синий</button>
    </div>
  );
}
