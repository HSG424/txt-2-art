import React, { useState } from "react";
import { generationModes } from "../config";

export const Context = React.createContext();

const emptyGeneratedImage = {
  url: "",
  text: "",
};

const ContextProvider = (props) => {
  const [mode, setMode] = useState(generationModes[0]);
  const [generatedImage, setGeneratedImage] = useState(emptyGeneratedImage);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState("");

  const updateMode = (mode) => {
    setMode(generationModes.find((element) => element.mode === mode));
  };

  const updateGeneratedImage = (url, text) => {
    setGeneratedImage({
      url,
      text,
    });
  };

  const clearGeneratedImage = () => {
    setGeneratedImage(emptyGeneratedImage);
  };

  const context = {
    updateMode,
    updateGeneratedImage,
    clearGeneratedImage,
    mode,
    generatedImage,
    isLoading,
    setIsLoading,
    requestError,
    setRequestError,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;
