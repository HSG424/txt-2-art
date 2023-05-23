import Label from "./Label";

export function EnterText(props) {
  return (
    <div className={props.inputRowStyle}>
      <Label htmlFor="text">Enter Text:</Label>

      <input
        className={props.inputStyle}
        type="text"
        id={props.id}
        value={props.text}
        placeholder={props.placeholder}
        onChange={props.textChangeHandler}
        maxLength={50}
        disabled={props.inputDisabled}
      />
    </div>
  );
}
