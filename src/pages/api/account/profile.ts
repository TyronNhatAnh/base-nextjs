// import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authorization = req.headers.authorization;
  // const params = req.body;
  // const response = await axios.post(
  //   `http://stage-app-api.gogox.com/account/profile`,
  //   params,
  // );
  // const data = response.data;
  if (!authorization) {
    res.status(200).json({});
  }
  const data = {
    user_code: 20176061,
    type_cd: 1,
    email: "zinky.tinh@gogox.com",
    name: "zinky.tinh@gogox.com",
    phone_number: "0900292222",
    branch_id: 1,
    status_cd: 1,
    notes: "TinhB2C",
    edit_status: 1,
  };
  res.status(200).json(data);
};
