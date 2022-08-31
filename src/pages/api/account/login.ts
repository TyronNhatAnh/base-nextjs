import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.body;
  const response = await axios.post(
    `http://localhost:5000/account/login`,
    params,
  );
  res.status(200).json(response.data);
};
