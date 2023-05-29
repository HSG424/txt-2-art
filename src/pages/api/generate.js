import axios from "axios";
import {
  numOfImgs,
  imgWidth,
  imgHeight,
  filterErrMsg,
  defaultErrMsg,
} from "../../config";

export default async function handler(req, res) {
  const { text, mode } = req.body;

  const data = new FormData();

  data.append("text", text);
  data.append("grid_size", numOfImgs);
  data.append("width", imgWidth);
  data.append("height", imgHeight);

  console.log("URL: ", process.env.REACT_APP_URL);
  console.log("KEY: ", process.env.REACT_APP_API_KEY);

  try {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}${mode}`,
      data,
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
      },
    });

    console.log("result", result);

    res.status(200).json(result.data);
  } catch (err) {
    console.log(err);

    const error = err.response.status === 400 ? filterErrMsg : defaultErrMsg;
    res.status(err.response.status).send({ error });
  }
}
