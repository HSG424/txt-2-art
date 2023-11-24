import { useContext } from "react";
import { Context } from "../store/ContextProvider";
import { Loading, Error, ImageContent } from ".";

export function Main() {
  const { mode, generatedImage, isLoading, requestError } = useContext(Context);

  const textStyle =
    "w-[535px] text-center text-base leading-[30px] border-b border-gray-700 pb-[27px] mb-[3px] px-[33px] xs:px-[16px]";

  return requestError ? (
    <Error
      wrapperClassName="flex justify-center mt-[5px]"
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
