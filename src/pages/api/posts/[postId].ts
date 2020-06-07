import { NextApiRequest, NextApiResponse } from "next";
import { findPostById } from "../../../../mock/db";

type Data = {
  post: Post;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { postId } = req.query;

  const post = await findPostById(postId as string);

  res.status(200).json({ post });
};
