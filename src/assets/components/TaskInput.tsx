interface TaskInputProps {
  input: string,
  setInput: (value: string) => void,
  addTask: () => void
}

const TaskInput = ({input, setInput, addTask} : TaskInputProps) => {
  return (
    <>
    <div className="input-div">
      <input
        type="text"
        placeholder="Enter a task girl🌸"
        className="input"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
      />
    </div>
    <div className="btn-container">
      <button className="button" onClick={addTask}>Add a Task</button>
    </div>
    </>
  );
};

export default TaskInput;
