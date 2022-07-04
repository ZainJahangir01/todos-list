import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    //This is not Reload the Page
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description can not be empty");
    } else {
      props.addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
