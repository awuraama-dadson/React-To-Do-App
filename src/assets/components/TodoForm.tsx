import { useState } from "react"


const TodoForm = () => {
  const [input, setInput] = useState('')

  return (
    <div className="input-div"> 
       <input
    className="input"
      type='text'
      placeholder="Enter a task girl 💗"
      value={input}
      onChange={(e) => {setInput(e.target.value);
        console.log(e);}
      }
    /></div>
  )
}

export default TodoForm

