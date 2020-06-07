import { GetServerSideProps } from "next";
import { FC } from "react";
import PostCard from "../components/PostCard";
import { apiUrl } from "../helpers";

interface Props {
  posts: Post[];
}

const Home: FC<Props> = ({ posts }) => (
  <main>
    <h1>Posts</h1>
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post}></PostCard>
        </li>
      ))}
    </ul>
  </main>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${apiUrl(context)}/api/posts`);
  const { posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
