import React, { FC } from "react";
import Post from "./Post";

interface PostsProps {
  posts: any[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  if (!posts.length) return <p className="text-center">Постов пока нет</p>;
  return (
    <>
      {posts.map((post) => (
        <Post key={post} post={post} />
      ))}
    </>
  );
};

export default Posts;
