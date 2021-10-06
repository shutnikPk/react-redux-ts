import React, { FC } from "react";

interface PostsFormProps {}

const PostsForm: FC<PostsFormProps> = () => {
  const submitHandler = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Posts title
          </label>
          <input type="password" className="form-control" id="title" />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default PostsForm;
