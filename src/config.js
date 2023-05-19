export const numOfImgs = "1";

export const imgWidth = "900";
export const imgHeight = "506";

export const filterErrMsg =
  "This app is filtering explicit content. The filtering system can often be too sensitive. Sorry, for the inconvenience. Please try again!";
export const defaultErrMsg = "Error. Please try again.";

export const generationModes = [
  {
    mode: "text2img",
    label: "Text2Img (default)",
    img: {
      description: "Text2Img: the default engine and my personal favorite.",
      caption: "Einstein wearing vr headset",
    },
  },
  {
    mode: "impressionism-painting-generator",
    label: "Impressionism",
    img: {
      description:
        "Impressionism: The 19th-century art movement characterized by relatively small, thin, yet visible brush strokes.",
      caption: "Anthony Bourdain drinking a beer",
    },
  },
  {
    mode: "surreal-graphics-generator",
    label: "Surreal",
    img: {
      description: "Surreal...",
      caption: "Angkor Thom",
    },
  },
  {
    mode: "3d-character-generator",
    label: "3d-character",
    img: {
      description: "3d-character-generator",
      caption: "starcraft terran medic",
    },
  },
  {
    mode: "fantasy-world-generator",
    label: "Fantasy World",
    img: {
      description: "Fantasy World Generator",
      caption: "post-apocalyptic Tokyo",
    },
  },
];
