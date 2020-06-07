import { GetStaticProps } from "next";
import { FC } from "react";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../../mock/db";

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

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
