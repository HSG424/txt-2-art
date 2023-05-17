import axios from "axios";
import {
  numOfImgs,
  imgWidth,
  imgHeight,
  filterErrMsg,
  defaultErrMsg,
} from "../../config";

export default async function handler(req, res) {
  const { text } = req.body;

  const data = new FormData();

  data.append("text", text);
  data.append("grid_size", numOfImgs);
  data.append("width", imgWidth);
  data.append("height", imgHeight);

  try {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}text2img`,
      data,
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
      },
    });

    res.status(200).json(result.data);
  } catch (err) {
    const error = err.response.status === 400 ? filterErrMsg : defaultErrMsg;
    res.status(err.response.status).send({ error });
  }
}
