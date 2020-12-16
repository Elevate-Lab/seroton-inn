import React from "react";
import Editor from "./Editor";
import Avatar from "./Avatar";

const Compose = () => {
  return (
    <div className="compose">
      <div className="compose__container">
        <Avatar />
        <Editor />
      </div>
    </div>
  );
};

export default Compose;
