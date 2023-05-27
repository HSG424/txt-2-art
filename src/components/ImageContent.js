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
      <div className="flex justify-center mb-[6px]">
        <div className="flex justify-between w-[800px]">
          <p>
            text: "<span className={boldStyle}>{imgTxt}</span>"
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
          width={800}
          height={800}
          priority
        />
      </div>
    </Fragment>
  );
}
