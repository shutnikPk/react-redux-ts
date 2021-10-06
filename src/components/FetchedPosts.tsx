import React, { FC } from "react";

interface FetchedPostsProps {
  posts: any[];
}

const FetchedPosts: FC<FetchedPostsProps> = ({ posts }) => {
  if (!posts.length) return <p className="text-center">Постов пока нет</p>;
  return <></>;
};

export default FetchedPosts;
