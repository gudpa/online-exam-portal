import "./styles/Forms.css";

export const Button = (props) => {
  let classes = "btn ";
  if (props.className) {
    classes += props.className;
  }
  return (
    <button {...props} className={classes}>
      {props.label}
    </button>
  );
};

export const Input = (props) => {
  let classes = "input ";
  if (props.className) {
    classes += props.className;
  }
  return <input {...props} className={classes} />;
};
