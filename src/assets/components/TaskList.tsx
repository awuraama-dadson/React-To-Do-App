import TaskItem from "./TaskItem"

 type Task = {
    id: number,
    text: string,
    completed: boolean
  }

interface TaskListProps {
 tasks: Task[],
 toggleTask: (id: number) => void,
 deleteTask: (id: number) => void
}

const TaskList = ({tasks, toggleTask, deleteTask}: TaskListProps) => {
  return (
    <>
    <div>
      <ul>
        <TaskItem />
      </ul>
    </div>
    </>
  )
}

export default TaskList
