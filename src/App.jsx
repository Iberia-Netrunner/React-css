import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Köp kaffe", done: false },
    { id: 2, text: "Öppna campet", done: true },
    { id: 3, text: "Pusha till GitHub", done: false },
  ]);
  const [text, setText] = useState("");

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
      <h1>Min ToDo</h1>
      <form className="input-row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      <ul className="Todo-list">
        {todos.map((t) => (
          <li key={t.id} className="todo">
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







