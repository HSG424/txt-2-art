import { useState } from "react";
import { generationModes } from "../config";

function GenerateArtForm(props) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("text2img");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const modeChangeHandler = (event) => {
    setMode(event.target.value);
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
  const textColor = "text-gray-100";
  const flexCenter = "flex justify-center";
  const inputStyle =
    "text-[15px] text-center w-60 bg-gray-200 text-gray-900 rounded-md pt-[8px] pb-[9px] px-[7px] focus:ring-4 focus:ring-blue-300";

  return (
    <form onSubmit={submitHandler} className="flex flex-col mt-[134px]">
      <div className={`${flexCenter} mb-1`}>
        <label className={textColor} htmlFor="mode">
          Choose mode:
        </label>
      </div>

      <div className={`${flexCenter} mb-[18px]`}>
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

      <div className={`${flexCenter} mb-1`}>
        <label className={textColor} htmlFor="text">
          Creation text:
        </label>
      </div>

      <div className={`${flexCenter} mb-[23px]`}>
        <input
          className={inputStyle}
          type="text"
          id="text"
          value={text}
          placeholder="Enter something clever..."
          onChange={textChangeHandler}
          maxLength={50}
          disabled={false}
        />
      </div>

      <div className={flexCenter}>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-[21px] pt-[12px] pb-[11px]"
          disabled={!text.length > 0}
        >
          Generate
        </button>
      </div>
    </form>
  );
}

export default GenerateArtForm;
