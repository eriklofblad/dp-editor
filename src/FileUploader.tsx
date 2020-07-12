import React from "react";

interface IProps {
  setNewData: (data: string) => void;
}

const FileUploader: React.FC<IProps> = ({ setNewData }) => {
  let fileReader: undefined | FileReader;

  const handleFileRead = (e: ProgressEvent<FileReader>) => {
    if (fileReader) {
      const content = fileReader.result;
      if (typeof content === "string") {
        setNewData(content);
      }
    }
    // … do something with the 'content' …
  };

  const handleFileChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("new file chosen");
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[e.target.files.length - 1];
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" id="file" accept=".xml" onChange={handleFileChosen} />
      <label htmlFor="file" className="file-button">
        Ladda upp en fil
      </label>
    </div>
  );
};

export default FileUploader;
