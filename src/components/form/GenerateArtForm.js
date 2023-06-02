import { useState, useContext } from "react";
import { Context } from "../../store/ContextProvider";
import { Button, EnterText, SelectMode, Error } from ".";

export function GenerateArtForm() {
  const [text, setText] = useState("");
  const [formError, setFormError] = useState("");

  const {
    updateMode,
    updateGeneratedImage,
    clearGeneratedImage,
    mode: { mode },
    isLoading,
    setIsLoading,
    setRequestError,
  } = useContext(Context);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const modeChangeHandler = (event) => {
    clearGeneratedImage();
    updateMode(event.target.value);
  };

  const checkInput = () => {
    setFormError("");

    if (text.length < 3) {
      setFormError("Text must be greater than 2 characters.");
      return false;
    } else {
      return true;
    }

    return false;
  };

  async function submitHandler(event) {
    event.preventDefault();

    if (!checkInput()) return;

    setIsLoading(true);
    setRequestError("");

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

    if (!data.error) {
      updateGeneratedImage(data.output_url, text);
    } else {
      setRequestError(data.error);
    }

    setIsLoading(false);
  }

  // common tailwind styling
  const inputStyle =
    "w-[209px] bg-gray-200 text-gray-900 rounded-md px-[8px] py-[6px] focus:ring-4 focus:ring-blue-300";
  const inputRowStyle = "flex justify-end items-center gap-x-[9px]";

  const inputDisabled = isLoading ? true : false;

  return (
    <form onSubmit={submitHandler}>
      <SelectMode
        name="mode"
        id="mode"
        inputRowStyle={inputRowStyle}
        mode={mode}
        inputStyle={inputStyle}
        modeChangeHandler={modeChangeHandler}
        inputDisabled={inputDisabled}
      />

      <EnterText
        id="text"
        inputRowStyle={inputRowStyle}
        inputStyle={inputStyle}
        text={text}
        textChangeHandler={textChangeHandler}
        inputDisabled={inputDisabled}
        placeholder="Write something clever..."
      />

      <Button inputDisabled={inputDisabled}>Generate!</Button>

      {formError && (
        <Error wrapperClassName="flex justify-end mt-[14px] text-[14px] text-red-600">
          {formError}
        </Error>
      )}
    </form>
  );
}
