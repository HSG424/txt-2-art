import React, { useState } from "react";
import { generationModes } from "../config";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [mode, setMode] = useState(generationModes[1]);

  const updateMode = (mode) => {
    setMode(generationModes.find((element) => element.mode === mode));
  };

  const context = {
    updateMode,
    mode,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;
