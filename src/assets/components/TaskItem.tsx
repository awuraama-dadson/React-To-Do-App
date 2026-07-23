interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li key={task.id} onClick={() => toggleTask(task.id)}>
      <span
        style={{ textDecoration: task.completed ? "Line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>🗑️</button>
    </li>
  );
};

export default TaskItem;
