import { GetServerSideProps } from "next";
import { FC } from "react";
import { apiUrl } from "../../helpers";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.params;

  const res = await fetch(
    `${apiUrl(context)}/api/posts/${postId}`,
  );
  const { post } = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
