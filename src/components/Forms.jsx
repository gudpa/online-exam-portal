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

export const Select = (props) => {
  let classes = "select ";
  if (props.className) {
    classes += props.className;
  }
  return (
    <select {...props} className={classes}>
      {props.options.map((option, i) => {
        return (
          <option key={i} value={option.name}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
