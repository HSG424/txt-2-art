import { Fragment, useContext } from "react";
import { Context } from "../store/ContextProvider";
import { Loading, Error } from ".";
import Image from "next/image";

export function MainImage() {
  const { mode, generatedImage, isLoading, requestError } = useContext(Context);

  const imgSrc = generatedImage.url
    ? generatedImage.url
    : `/example-imgs/${mode.img.name}`;

  const boldStyle = "font-medium text-gray-50";
  const textStyle =
    "w-[535px] text-center text-base leading-[30px] border-b border-gray-700 pb-[27px] mb-[3px] px-[16px]";

  const imgTxt = generatedImage.text ? generatedImage.text : mode.img.text;

  const mainImg = (
    <Fragment>
      <div className="flex justify-center mb-[6px]">
        <div className="flex justify-between w-[800px]">
          <p>
            text: "<span className={boldStyle}>{imgTxt}</span>"
          </p>
          <p>
            mode: <span className={boldStyle}>{mode.label}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={imgSrc}
          alt={imgTxt}
          placeholder="blur"
          blurDataURL="/example-imgs/10x10.png"
          width={800}
          height={800}
          priority
        />
      </div>
    </Fragment>
  );

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
    mainImg
  );
}
