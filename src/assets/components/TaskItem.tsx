import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li className="task" onClick={() => toggleTask(task.id)}>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button className="close-button" onClick={(e) =>{e.stopPropagation(); deleteTask(task.id)}}>
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;
