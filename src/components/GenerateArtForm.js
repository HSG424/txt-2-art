import { useState, useContext } from "react";
import { Context } from "../store/ContextProvider";
import { generationModes } from "../config";

function GenerateArtForm() {
  const [text, setText] = useState("");

  const {
    updateMode,
    mode: { mode },
  } = useContext(Context);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const modeChangeHandler = (event) => {
    updateMode(event.target.value);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const response = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        text,
        mode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("data@: ", data);
  }

  // common tailwind styling
  const inputStyle =
    "w-[209px] bg-gray-200 text-gray-900 rounded-md px-[8px] py-[6px] focus:ring-4 focus:ring-blue-300";
  const inputRowStyle = "flex justify-end items-center gap-x-[9px]";

  return (
    <form onSubmit={submitHandler}>
      <div className={`${inputRowStyle} mb-[13px]`}>
        <label htmlFor="mode">Choose Mode:</label>

        <select
          name="mode"
          id="mode"
          value={mode}
          className={inputStyle}
          onChange={modeChangeHandler}
        >
          {generationModes.map((mode) => (
            <option value={mode.mode} key={mode.mode}>
              {mode.label}
            </option>
          ))}
        </select>
      </div>

      <div className={inputRowStyle}>
        <label htmlFor="text">Enter Text:</label>

        <input
          className={inputStyle}
          type="text"
          id="text"
          value={text}
          placeholder="Write something clever..."
          onChange={textChangeHandler}
          maxLength={50}
          disabled={false}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="mt-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl py-[11px] px-[24px]"
          disabled={!text.length > 0}
        >
          Generate
        </button>
      </div>
    </form>
  );
}

export default GenerateArtForm;
