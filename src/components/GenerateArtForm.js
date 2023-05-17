import { useState } from "react";

function GenerateArtForm(props) {
  const [text, setText] = useState("");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const response = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("data@: ", data);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="text"
        value={text}
        placeholder="Please keep your searches clean"
        onChange={textChangeHandler}
        maxLength={50}
        disabled={false}
      />

      <button disabled={!text.length > 0}>Generate!</button>
    </form>
  );
}

export default GenerateArtForm;
