import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.body;
  const response = await axios.post(
    `http://stage-app-api.gogox.com/b2b/account/login`,
    params,
  );
  console.log(response.data);
  res.status(200).json(response.data);
};
