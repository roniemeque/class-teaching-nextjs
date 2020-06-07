import { posts } from "./posts";

// simula uma resposta async de um db
const wait = async () =>
  new Promise((resolve) => setTimeout(() => resolve(), 500));

export const getAllPosts = async (): Promise<Post[]> => {
  await wait();
  return posts;
};

export const findPostById = async (id: string): Promise<Post> => {
  await wait();
  return posts.find((post) => post.id === id);
};
