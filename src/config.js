export const NUM_OF_IMGS = "1";

export const IMG_WIDTH = "800";
export const IMG_HEIGHT = "800";

export const FILTER_ERR_MSG =
  "Error: Txt2Art filters explicit content and is often too sensitive. Sorry for the inconvenience. Please try again!";

export const DEFAULT_ERR_MSG = "Error. Please try again.";

export const LOADING_MSG =
  "Image Generation takes about 25 seconds. Even after the generated image appears, a few more seconds of loading time remain. Please be patient - Thank You!";

export const GENERATION_MODES = [
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
      text: "floral garden",
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
