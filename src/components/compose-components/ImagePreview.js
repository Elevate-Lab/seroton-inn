import React from "react";
import { HighlightOff } from "@material-ui/icons";
const ImagePreview = (props) => (
  <div>
    <button onClick={() => props.remove(props.id)}>
      <HighlightOff />
    </button>
    <img
      src={props.image.src}
      alt={props.image.name}
      className="image-upload"
    />
  </div>
);

export default ImagePreview;
