import React, { useState, useEffect } from "react";
import { XMLNode } from "./App";

interface IProps {
  node: XMLNode;
  setNodeValue: (path_segment: string, value: string) => void;
  endEdit: () => void;
}

const EditValue: React.FC<IProps> = ({ node, setNodeValue, endEdit }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(node.value._text ? node.value._text : "");
  }, [node.value._text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    setNodeValue(node.path_segment._text, value);
    endEdit();
  };
  return (
    <div style={{ marginLeft: "10px" }}>
      <input
        type="text"
        name="value"
        id="edit-value"
        onChange={handleChange}
        value={value}
      />
      <div>
        <button className="file-button" onClick={handleSave}>
          Spara
        </button>
        <button className="file-button" onClick={endEdit}>
          Avbryt
        </button>
      </div>
    </div>
  );
};

export default EditValue;
