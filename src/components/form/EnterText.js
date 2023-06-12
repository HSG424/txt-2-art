import React from "react";
import Label from "./Label";

export const EnterText = React.forwardRef((props, ref) => {
  return (
    <div className={props.inputRowStyle}>
      <Label htmlFor="text">Enter Text:</Label>

      <input
        className={props.inputStyle}
        ref={ref}
        type="text"
        id="text"
        placeholder="Write something clever..."
        maxLength={50}
        disabled={props.inputDisabled}
      />
    </div>
  );
});
