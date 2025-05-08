
import { useState, useEffect } from "react";
import styles from "./Todo.module.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      text: inputValue,
      completed: false,
      date: new Date().toLocaleString()
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (

    <>
      <div className={styles.wrapper}>
        <h1>React : todo list</h1>
        <div className={styles.inputContainer}>

          {/* Inputfält och knapp */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="... add something to do ..."
            className={styles.inputField}
          />
          <button onClick={addTodo} className={styles.addButton}>Add
          </button>
        </div>
        {/* Lista med uppgifter */}
        <div className={styles.listContainer}>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={styles.todoItem}>
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                className={styles.checkbox}
                />
                <div className={styles.todoContent}>
                <span className={`${styles.todoText} ${todo.completed ? styles.completed : ""}`}>
                  {todo.text}</span>
                  <br />
                  <span className={styles.todoDate}>Date added: {todo.date}</span>
                  </div>
                <button className={styles.deleteButton} onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(index);
                }}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
