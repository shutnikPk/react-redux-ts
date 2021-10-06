import React, { FC } from "react";

interface FetchedPostsProps {
  posts: any[];
}

const FetchedPosts: FC<FetchedPostsProps> = ({ posts }) => {
  if (!posts.length)
    return <button className="btn btn-primary">Загрузить посты</button>;
  return <></>;
};

export default FetchedPosts;
