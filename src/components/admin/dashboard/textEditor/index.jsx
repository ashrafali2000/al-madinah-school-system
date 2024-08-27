import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function TextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="flex justify-center bg-black text-white">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default TextEditor;
