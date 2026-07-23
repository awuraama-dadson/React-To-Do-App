import { useState } from "react";
import Header from "./assets/components/Header";
import TaskInput from "./assets/components/TaskInput";

const App = () => {
  type Task = {
    id: number,
    text: string,
    completed: boolean,
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
      <Header/>
      <TaskInput
      input={input}
      setInput={setInput}
      addTask={addTask}
      />

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
