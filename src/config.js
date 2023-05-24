export const numOfImgs = "1";

export const imgWidth = "800";
export const imgHeight = "800";

export const filterErrMsg =
  "Txt2Art filters explicit content. The filtering system can often be too sensitive. Sorry, for the inconvenience. Please try again!";
export const defaultErrMsg = "Error. Please try again.";

export const loadingMsg =
  "Image Generation takes about 25 seconds. Even after the generated image appears, there are still a few more seconds of loading time. Please be patient - Thank You!";

export const generationModes = [
  {
    mode: "text2img",
    label: "Text2Img",
    img: {
      name: "text2img.jpg",
      text: "Einstein wearing vr headset",
    },
  },
  {
    mode: "impressionism-painting-generator",
    label: "Impressionism",
    img: {
      name: "impressionism.jpg",
      text: "Anthony Bourdain drinking a beer",
    },
  },
  {
    mode: "surreal-graphics-generator",
    label: "Surreal",
    img: {
      name: "surreal-graphics-generator.jpg",
      text: "Angkor Thom",
    },
  },
  {
    mode: "3d-character-generator",
    label: "3d-character",
    img: {
      name: "3d-character-generator.jpg",
      text: "Ninja Man",
    },
  },
  {
    mode: "fantasy-world-generator",
    label: "Fantasy World",
    img: {
      name: "fantasy-world.jpg",
      text: "post-apocalyptic Tokyo",
    },
  },
];
