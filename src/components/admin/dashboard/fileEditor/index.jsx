import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

function FileEditor() {
  return (
    <div>
      <FilePond
      // allowMultiple={true}
      // acceptedFileTypes={["image/*", "application/pdf", "text/*"]}
      />
    </div>
  );
}

export default FileEditor;
