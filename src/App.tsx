import { useState } from "react";
import Header from "./assets/components/Header";
import TaskInput from "./assets/components/TaskInput";
import TaskList from "./assets/components/TaskList";
import type { Task } from "./assets/types/task";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput('')
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) =>
      id === task.id ? { ...task, completed: !task.completed } : task,
    ))
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => id !== task.id ))
  }

  return (
    <>
      <Header />

      <TaskInput input={input} setInput={setInput} addTask={addTask} />

      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
};

export default App;
