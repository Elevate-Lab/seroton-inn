import React, { useState, useEffect } from "react";
import { CompositeDecorator, Editor, EditorState, RichUtils } from "draft-js";
import TextFormat from "./TextFormat";
import ImagePreview from "./ImagePreview";
import { IconButton, Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import "draft-js/dist/Draft.css";
import {
  onURLChange,
  promptForLink,
  confirmLink,
  onLinkInputKeyDown,
  removeLink,
} from "./links";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//---
const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return <a href={url}>{props.children}</a>;
};
//----

export default () => {
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

  const [editorState, changeEditorState] = useState(
    EditorState.createEmpty(decorator)
  );
  const [src, setSrc] = useState([]);
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlValue, setUrlValue] = useState("");

  const onChange = (val) => {
    changeEditorState(val);
  };

  /*The HTML element heirarchy
    profile-avatar
    compose__format
      compose__format-create
        div.toolbar
        div.DraftEditor-root      ------> Editor components start here
          div.DraftEditor-editorContainer
            \
             \
      compose__format-submit

  */
  //handles default key bindings defined by draft-js.
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      changeEditorState(newState);
      return "handled";
    } else return "not-handled";
  };

  const toggleInlineStyle = (e) => {
    e.preventDefault();
    let style = e.currentTarget.getAttribute("data-style");
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleSelected = (newStyles) => {
    const styles = ["BOLD", "ITALIC", "UNDERLINE", "LINK"];
    for (let style of styles) {
      newStyles.includes(style)
        ? document
            .getElementsByClassName(`textformat ${style}`)[0]
            .classList.add("selected")
        : document
            .getElementsByClassName(`textformat ${style}`)[0]
            .classList.remove("selected");
    }
  };

  useEffect(() => {
    document.getElementById("icon-button-file").value = null;
    console.log(src);
  }, [src]);

  useEffect(() => {
    const currentState = editorState.getCurrentInlineStyle();
    let newStyles = [];
    currentState.forEach((val) => {
      newStyles.push(val);
    });
    toggleSelected(newStyles);
  }, [editorState]);

  const onImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files.length + src.length > 4) {
        alert("A maximum of 4 images can be uploaded");
        return;
      }
      const imageArray = [...src];
      for (let file of e.target.files) {
        let img = new Image();
        img.src = URL.createObjectURL(file);
        img.title = file.name;
        let newObject = { image: img, id: uuid() };
        imageArray.push(newObject);
      }
      setSrc(imageArray);
    }
  };

  const remove = (id) => {
    setSrc(src.filter((data) => data.id !== id));
  };

  //Just for not going to search for it again
  // const getSelectedText = () => {
  //   var text = "";
  //   if (typeof window.getSelection != "undefined") {
  //     text = window.getSelection().toString();
  //   } else if (
  //     typeof document.selection != "undefined" &&
  //     document.selection.type === "Text"
  //   ) {
  //     text = document.selection.createRange().text;
  //   }
  //   return text;
  // };
  const callPromptLink = (e) => {
    promptForLink(
      editorState,
      changeEditorState,
      setShowURLInput,
      setUrlValue,
      e
    );
  };

  const callRemoveLink = (e) => {
    removeLink(editorState, changeEditorState, setShowURLInput, setUrlValue, e);
  };

  var urlInput = (
    <div style={{ fontSize: "1.5rem !important" }}>
      <Dialog
        open={showURLInput}
        onClose={() => {
          setShowURLInput(false);
        }}
        aria-labelledby="url-input-form"
      >
        <DialogTitle id="form-dialog-title"> Insert Link </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the URL and click on Confirm to embed the hyperlink in the
            selected text.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Hyperlink"
            type="url"
            fullWidth
            onChange={(e) => {
              onURLChange(setUrlValue, e);
            }}
            value={urlValue}
            onKeyDown={(e) => {
              onLinkInputKeyDown(
                editorState,
                changeEditorState,
                setShowURLInput,
                urlValue,
                setUrlValue,
                e
              );
            }}
            style={{ fontSize: "1.5rem !important" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              confirmLink(
                editorState,
                changeEditorState,
                setShowURLInput,
                urlValue,
                setUrlValue,
                e
              );
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  return (
    <>
      <div className="compose__format">
        <div className="compose__format-create">
          <div className="toolbar">
            <TextFormat
              value="B"
              dataStyle="BOLD"
              handleMouseDown={toggleInlineStyle}
            />
            <TextFormat
              value="I"
              dataStyle="ITALIC"
              handleMouseDown={toggleInlineStyle}
            />
            <TextFormat
              value="U"
              dataStyle="UNDERLINE"
              handleMouseDown={toggleInlineStyle}
            />
            <TextFormat
              value="LINK"
              handleMouseDown={callPromptLink}
              dataStyle="LINK"
            />
            <TextFormat
              value="LINK-OFF"
              handleMouseDown={callRemoveLink}
              dataStyle="UNLINK"
            />
          </div>
          <Editor
            placeholder="Tell us something . . ."
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
          />
          <div className="imagePreviewContainer">
            {src.map((data) => (
              <ImagePreview
                image={data.image}
                key={data.id}
                id={data.id}
                remove={remove}
              />
            ))}
          </div>
        </div>
        <div className="compose__format-submit">
          <input
            accept="image/*"
            multiple
            id="icon-button-file"
            type="file"
            disabled={src.length >= 4}
            onChange={onImageUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" style={{ padding: "0" }}>
              <ImageIcon
                style={
                  src.length < 4
                    ? { color: "black" }
                    : { color: "gray", ":hover": { cursor: "arrow" } }
                }
              />
            </IconButton>
          </label>

          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon></SendIcon>}
          >
            POST
          </Button>
        </div>
        {urlInput}
      </div>
    </>
  );
};
