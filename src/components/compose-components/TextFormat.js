import React from "react";
import {
  FormatBold,
  FormatUnderlined,
  FormatItalic,
  Image,
  Link as LinkIcon,
  LinkOff as LinkOffIcon,
} from "@material-ui/icons";

const TextFormat = (props) => {
  const setIcon = () => {
    switch (props.value) {
      case "B":
        return <FormatBold />;
      case "I":
        return <FormatItalic />;
      case "U":
        return <FormatUnderlined />;
      case "IMG":
        return <Image />;
      case "LINK":
        return <LinkIcon />;
      case "LINK-OFF":
        return <LinkOffIcon />;
      default:
        return "";
    }
  };
  return (
    <span
      className={"textformat " + props.dataStyle}
      type="button"
      data-style={props.dataStyle}
      value={props.value}
      onMouseDown={props.handleMouseDown}
    >
      {setIcon()}
    </span>
  );
};

export default TextFormat;
