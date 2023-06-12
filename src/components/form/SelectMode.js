import { GENERATION_MODES } from "../../config";
import Label from "./Label";

export function SelectMode(props) {
  return (
    <div className={`${props.inputRowStyle} mb-[13px]`}>
      <Label htmlFor="mode">Choose Mode:</Label>

      <select
        name="mode"
        id="mode"
        value={props.mode}
        className={props.inputStyle}
        onChange={props.modeChangeHandler}
        disabled={props.inputDisabled}
      >
        {GENERATION_MODES.map((mode) => (
          <option value={mode.mode} key={mode.mode}>
            {mode.label}
          </option>
        ))}
      </select>
    </div>
  );
}
