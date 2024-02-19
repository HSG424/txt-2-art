import { Fragment } from "react";
import Image from "next/image";

export function ImageContent(props) {
  const imgSrc = props.generatedImage.url
    ? props.generatedImage.url
    : `/example-imgs/${props.mode.img.name}`;

  const imgTxt = props.generatedImage.text
    ? props.generatedImage.text
    : props.mode.img.text;

  const boldStyle = "font-medium text-gray-50";

  return (
    <Fragment>
      <div className="flex justify-center mb-[1.4375rem] xs:mb-[0.375rem]">
        <div className="text-center xs:text-left block xs:flex justify-between px-[0.3125rem] md:px-0 w-full xs:w-[40rem]">
          <p className="mb-[0.125rem] xs:mb-0">
            "<span className={boldStyle}>{imgTxt}</span>"
          </p>
          <p>
            mode: <span className={boldStyle}>{props.mode.label}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={imgSrc}
          alt={imgTxt}
          placeholder="blur"
          blurDataURL="/example-imgs/10x10.png"
          width={640}
          height={512}
          priority
        />
      </div>
    </Fragment>
  );
}
