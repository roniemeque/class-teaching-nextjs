import React, { FC } from "react";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <Link href="/posts/[postId]" as={`/posts/${post.id}`}>
      <a className="post-card">
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
      </a>
    </Link>
  );
};

export default PostCard;
