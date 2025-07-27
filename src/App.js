import React, { useState } from 'react';
import Todo from './Todo';
import './index.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === '') return;
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📝 ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
