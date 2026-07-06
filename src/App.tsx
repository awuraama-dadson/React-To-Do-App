import { useState } from "react";

const App = () => {
  type Task = {
    id: number;
    text: string;
    completed: boolean;
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

const deleteTask = (id : number) => {
 setTasks( tasks.filter((task) => task.id !== id))
}

  return (
    <>
      <div>
        <h1 className="message">Good Morning, Gorgeous!</h1>
      </div>
      <div className="sub-h">
        Time to romanticize your productivity. What's on today's list?{" "}
      </div>
      <div className="input-div">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Enter a task girl 💗"
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div className="btn-container">
        <button className="button" onClick={addTask}>
          Add a Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="task"
            onClick={() => toggleTask(task.id)}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button className="close-button" onClick={(e) => {e.stopPropagation(); deleteTask(task.id);}}>🗑️</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
