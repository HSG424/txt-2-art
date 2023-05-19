import { Fragment } from "react";
import Image from "next/image";

function ExampleImage() {
  return (
    <Fragment>
      <div className="flex justify-center">
        <p className="text-white mb-3">
          Text2Img: the default engine and my personal favorite.
        </p>
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
