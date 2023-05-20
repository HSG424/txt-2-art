import { Fragment, useContext } from "react";
import { Context } from "../store/ContextProvider";
import Image from "next/image";

function ExampleImage() {
  const { mode } = useContext(Context);

  const boldStyle = "font-medium text-gray-50";

  return (
    <Fragment>
      <div className="flex justify-center mb-[6px]">
        <div className="flex justify-between w-[800px]">
          <p>
            text: "<span className={boldStyle}>{mode.img.text}</span>"
          </p>
          <p>
            mode: <span className={boldStyle}>{mode.label}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={`/example-imgs/${mode.img.name}`}
          alt="Example image"
          width={800}
          height={800}
          priority
        />
      </div>
    </Fragment>
  );
}

export default ExampleImage;
