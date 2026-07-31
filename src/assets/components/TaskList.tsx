import type { Task } from "../types/task"
import TaskItem from "./TaskItem"

interface TaskListProps {
  tasks: Task[],
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskList = ({tasks, toggleTask, deleteTask} : TaskListProps) => {
  return (
  <>
  <ul className="task-list">
    {tasks.map((task) => 
    <TaskItem
    task={task}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
    />
    )}
  </ul>
  </>
  )
}

export default TaskList
