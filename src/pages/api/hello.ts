import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  hello: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ hello: "world" });
};
