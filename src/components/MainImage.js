import { Fragment, useContext } from "react";
import { Context } from "../store/ContextProvider";
import Image from "next/image";
import Loading from "./Loading";
import Error from "./Error";

function MainImage() {
  const { mode, generatedImage, isLoading, requestError } = useContext(Context);

  const imgSrc = generatedImage.url
    ? generatedImage.url
    : `/example-imgs/${mode.img.name}`;

  const boldStyle = "font-medium text-gray-50";
  const textStyle =
    "w-[535px] text-center text-base leading-[30px] text-yellow-300";

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
    <Error wrapperClassName="flex justify-center" contentClassName={textStyle}>
      {requestError}
    </Error>
  ) : isLoading ? (
    <Loading textStyle={textStyle} />
  ) : (
    mainImg
  );
}

export default MainImage;
