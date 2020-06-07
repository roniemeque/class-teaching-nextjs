import { GetStaticProps, GetStaticPaths } from "next";
import { FC } from "react";
import { findPostById, getAllPosts } from "../../../mock/db";

interface Props {
  post: Post;
}

const PostPage: FC<Props> = ({ post }) => (
  <main>
    <article className="post">
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      {post.content.map((p) => <p key={p}>{p}</p>)}
    </article>
  </main>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params;

  const post = await findPostById(postId as string);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { postId: post.id },
    })),
    fallback: false,
  };
};

export default PostPage;
