import axios from "axios";
import {
  NUM_OF_IMGS,
  IMG_WIDTH,
  IMG_HEIGHT,
  FILTER_ERR_MSG,
  DEFAULT_ERR_MSG,
} from "../../config";

export default async function handler(req, res) {
  const { text, mode } = req.body;

  const data = new FormData();

  data.append("text", text);
  data.append("grid_size", NUM_OF_IMGS);
  data.append("width", IMG_WIDTH);
  data.append("height", IMG_HEIGHT);

  try {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}${mode}`,
      data,
      headers: {
        "api-key": process.env.REACT_APP_API_KEY,
      },
    });

    res.status(200).json(result.data);
  } catch (err) {
    const error =
      err.response.status === 400 ? FILTER_ERR_MSG : DEFAULT_ERR_MSG;
    res.status(err.response.status).send({ error });
  }
}
