import { generationModes } from "../../config";
import Label from "./Label";

export function SelectMode(props) {
  return (
    <div className={`${props.inputRowStyle} mb-[13px]`}>
      <Label htmlFor="mode">Choose Mode:</Label>

      <select
        name={props.name}
        id={props.id}
        value={props.mode}
        className={props.inputStyle}
        onChange={props.modeChangeHandler}
        disabled={props.inputDisabled}
      >
        {generationModes.map((mode) => (
          <option value={mode.mode} key={mode.mode}>
            {mode.label}
          </option>
        ))}
      </select>
    </div>
  );
}
