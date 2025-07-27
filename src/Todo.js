import React from 'react';

function Todo({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}

export default Todo;
