import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);

  const addTask = () => {
    const taskText = taskInputRef.current.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    setTasks(prevTasks => [...prevTasks, taskText]);
    taskInputRef.current.value = "";
  };

  const removeTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          ref={taskInputRef}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? 'even-item' : 'odd-item'}
          >
            {task}
            <button onClick={() => removeTask(index)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
