import React, { useState } from "react";

const Practice = () => {
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

const toggleTask = (id:number)=> {
  setTasks(tasks.map((task)=> task.id === id? {...task, completed: !task.completed}: task ))
}

const deleteTask = (id:number) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <>
      <div>Good Morning, Gorgeous!</div>
      <div>Time to romanticize your productivity. What's on today's list?</div>
      <div>
        <input
          type="text"
          placeholder="Enter a task girl💗"
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addTask}>Add a Task</button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="" onClick={() => toggleTask(task.id)}>
              <span style={{textDecoration: task.completed? 'line-through': 'none'}}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Practice;
