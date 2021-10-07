import React, { FC, useState } from "react";

interface PostsFormProps {}

const PostsForm: FC<PostsFormProps> = () => {
  const [title, setTitle] = useState<any>("");
  const submitHandler = (event: any) => {
    event.preventDefault();
    const { title: any } = title;
    const newPost = {
      title: any,
      id: Date.now().toString(),
    };
    console.log(newPost);
    setTitle({ title: "" });
  };
  const changeInputHandler = (event: any) => {
    event.persist();
    setTitle((prev: any) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Posts title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title.title}
            name="title"
            onChange={changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default PostsForm;
