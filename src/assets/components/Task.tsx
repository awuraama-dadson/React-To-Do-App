import type { ReactNode } from "react"

interface TaskProps{
    children: ReactNode 
    onClose: ()=> void
}

const Task = ({children, onClose} : TaskProps) => {
  return (
   <>
    <div className="task">
      <div>
        {children}
      </div>
      <button className="close-button" onClick={onClose}>
       ✔
      </button>
    </div>
   </>
  )
}

export default Task
