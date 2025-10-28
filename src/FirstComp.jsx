import { useState } from "react";

export default function FirstComp() {
  const [view, setView] = useState("Показать");

  return (
    <div>
      <button
        onClick={() =>
          view === "Показать" ? setView("Скрыть") : setView("Показать")
        }
      >
        {view}
      </button>
      <h1>{view === "Показать" ? null : "Привет, я текст"}</h1>
    </div>
  );
}
