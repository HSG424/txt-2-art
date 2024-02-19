export const NUM_OF_IMGS = "1";

export const IMG_WIDTH = "640";
export const IMG_HEIGHT = "512";

// export const IMAGE_GENERATOR_VERSION = "hd";
export const IMAGE_GENERATOR_VERSION = "standard";

export const FILTER_ERR_MSG =
  "Error: Txt2Art filters explicit content and is often too sensitive. Sorry for the inconvenience. Please try again!";

export const DEFAULT_ERR_MSG = "Error. Please try again.";

export const LOADING_MSG = "Image generation takes about 6 seconds...";

export const GENERATION_MODES = [
  {
    mode: "text2img",
    label: "Text2Img",
    img: {
      name: "text2img.webp",
      text: "Einstein wearing vr headset",
    },
  },
  {
    mode: "impressionism-painting-generator",
    label: "Impressionism",
    img: {
      name: "impressionism.webp",
      text: "floral garden",
    },
  },
  {
    mode: "3d-character-generator",
    label: "3d-character",
    img: {
      name: "3d-character-generator.webp",
      text: "Yokozuna",
    },
  },
  {
    mode: "fantasy-world-generator",
    label: "Fantasy World",
    img: {
      name: "fantasy-world.webp",
      text: "futuristic city",
    },
  },
];
