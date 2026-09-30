import { useState } from "react";
import "./App.css";

function App() {
  //State-variabel med object. 
  const [todos, setTodos] = useState([
    { id: 1, text: "Köp kaffe", done: false },
    { id: 2, text: "Öppna campet", done: true },
    { id: 3, text: "Pusha till GitHub", done: false },
  ]);
  //Statevariabel tom, spårar vad användaren skriver.
  const [text, setText] = useState("");
  
  //Function som tar bort mellanslag
  //Kör set uppdatering som och lägger till ny onjekt, sedan triggar re-render
  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setText("");
  }
  //Funktion som endast körs ifall användare klickar på knappen.
  //Loopar genom arrayen och vänder på status till done:true/false för rätt item
  function toggleDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }
  
  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <main className="app">
      <h1>Min-To-Do</h1>
      <form className="input-row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? "todo completed" : "todo"}>
            <button type="button" onClick={() => toggleDone(t.id)}>
              {t.done ? "Avmarkera" : "Klar"}
            </button>{" "}
            {t.text}{" "}
            <button type="button" onClick={() => removeTodo(t.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;







