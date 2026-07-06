interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return <>
  <div className="btn-container">
    <button className="button" onClick={onClick}>Add a Task</button>
  </div>
  </>;
};

export default Button;
