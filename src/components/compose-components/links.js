import { EditorState, RichUtils } from "draft-js";

const onURLChange = (setUrlValue, e) => {
  setUrlValue(e.target.value);
};

const promptForLink = (
  editorState,
  changeEditorState,
  setShowURLInput,
  setUrlValue,
  e
) => {
  console.log("here");
  e.preventDefault();
  // const {editorState} = this.state;
  const selection = editorState.getSelection();
  console.log(selection);
  if (!selection.isCollapsed()) {
    const contentState = editorState.getCurrentContent();
    const startKey = editorState.getSelection().getStartKey();
    const startOffset = editorState.getSelection().getStartOffset();
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
    const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
    let url = "";
    if (linkKey) {
      const linkInstance = contentState.getEntity(linkKey);
      url = linkInstance.getData().url;
    }
    setShowURLInput(true);
    setUrlValue(url);

    // this.setState({
    //   showURLInput: true,
    //   urlValue: url,
    // }, () => {
    //   setTimeout(() => this.refs.url.focus(), 0);
    // });
  }
};

const confirmLink = (
  editorState,
  changeEditorState,
  setShowURLInput,
  urlValue,
  setUrlValue,
  e
) => {
  e.preventDefault();
  // const {editorState, urlValue} = this.state;
  const contentState = editorState.getCurrentContent();

  const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", {
    url: urlValue,
  });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  // Apply entity
  let nextEditorState = EditorState.set(editorState, {
    currentContent: contentStateWithEntity,
  });

  // Apply selection
  nextEditorState = RichUtils.toggleLink(
    nextEditorState,
    nextEditorState.getSelection(),
    entityKey
  );

  changeEditorState(nextEditorState);
  setShowURLInput(false);
  setUrlValue("");

  // this.setState({
  //   editorState: nextEditorState,
  //   showURLInput: false,
  //   urlValue: '',
  // }, () => {
  //   setTimeout(() => this.refs.editor.focus(), 0);
  // });
};

const onLinkInputKeyDown = (
  editorState,
  changeEditorState,
  setShowURLInput,
  urlValue,
  setUrlValue,
  e
) => {
  if (e.which === 13) {
    confirmLink(
      editorState,
      changeEditorState,
      setShowURLInput,
      urlValue,
      setUrlValue,
      e
    );
  }
};

const removeLink = (
  editorState,
  changeEditorState,
  setShowURLInput,
  setUrlValue,
  e
) => {
  e.preventDefault();
  // const {editorState} = this.state;
  const selection = editorState.getSelection();
  if (!selection.isCollapsed()) {
    changeEditorState(RichUtils.toggleLink(editorState, selection, null));
    // this.setState({
    //   editorState: RichUtils.toggleLink(editorState, selection, null),
    // });
  }
};

export {
  onURLChange,
  promptForLink,
  confirmLink,
  onLinkInputKeyDown,
  removeLink,
};
