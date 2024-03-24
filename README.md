# Txt 2 Art

[Txt 2 Art](https://txt-2-art.vercel.app/) is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled with [Tailwind CSS](https://tailwindcss.com/).

The main purpose of [Txt 2 Art](https://txt-2-art.vercel.app/) is to generate an image from text.

Image generation is made possible by the [DeepAI API](https://deepai.org/).

Live deployment: [https://txt-2-art.vercel.app/](https://txt-2-art.vercel.app/)

## Example Image

text: "Einstein wearing vr headset"

![Example Image](/public/example-imgs/text2img.webp "Example Image")

## Installation

1. `git clone https://github.com/HSG424/txt-2-art.git`

2. `cd txt-2-art`

3. `npm install`

4. `npm run dev`

- This app only works if environment variables for the url and API key are added.

## Key Files

1. src/pages/index.js

2. src/pages/api/generate.js

3. src/components/form/GenerateArtForm.js

4. src/components/Main.js

5. src/components/ImageContent.js

6. src/store/ContextProvider.js

7. src/config.js

## Author

- **Fred Han** - (https://github.com/HSG424)

## License

This project is licensed under the MIT License
