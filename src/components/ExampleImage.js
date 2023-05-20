import { Fragment } from "react";
import Image from "next/image";

function ExampleImage() {
  const boldStyle = "font-medium text-gray-50";

  return (
    <Fragment>
      <div className="flex justify-center mb-[6px]">
        <div className="flex justify-between w-[800px]">
          <p>
            text: <span className={boldStyle}>Einstein wearing vr headset</span>
          </p>
          <p>
            mode: <span className={boldStyle}>Text2Img</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/example.jpeg"
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
