import { useContext } from "react";
import { Context } from "../store/ContextProvider";
import { Loading, Error, ImageContent } from ".";

export function Main() {
  const { mode, generatedImage, isLoading, requestError } = useContext(Context);

  const textStyle =
    "w-[33.4375rem] text-center text-base leading-[1.875rem] border-b border-gray-700 pb-[1.6875rem] mb-[0.1875rem] px-[2.0625rem] xs:px-[1rem]";

  return requestError ? (
    <Error
      wrapperClassName="flex justify-center mt-[0.3125rem]"
      contentClassName={`${textStyle} text-red-700`}
    >
      {requestError}
    </Error>
  ) : isLoading ? (
    <Loading textStyle={`${textStyle} text-yellow-300`} />
  ) : (
    <ImageContent mode={mode} generatedImage={generatedImage} />
  );
}
