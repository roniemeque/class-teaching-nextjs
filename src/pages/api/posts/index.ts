import { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../../../mock/db";

type Data = {
  posts: Post[];
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const posts = await getAllPosts();

  res.status(200).json({ posts });
};
