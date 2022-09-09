// import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authorization = req.headers.authorization;
  // const params = req.body;
  // const response = await axios.post(
  //   `http://stage-app-api.gogox.com/b2b/account/profile`,
  //   params,
  // );
  // const data = response.data;
  if (!authorization) {
    res.status(200).json({});
  }
  const data = {
    id: 1123123,
    user_code: 20176061,
    type_cd: 2,
    email: "simple@gogox.com",
    name: "일반직원",
    phone_number: "01044322339",
    organization_id: 1,
    branch_id: 1,
    status_cd: 1,
    notes: "TinhB2B",
    edit_status: 1,
    monthly_payments: true,
  };
  res.status(200).json(data);
};
