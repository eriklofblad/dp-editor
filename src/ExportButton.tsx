import React from "react";
import { XMLNode } from "./App";
import { saveAs } from "file-saver";
import { js2xml } from "xml-js";

interface IProps {
  nodes: XMLNode[];
  name: string;
  baseName: string;
}

const ExportButton: React.FC<IProps> = ({ nodes, name, baseName }) => {
  const downloadFile = () => {
    const data = {
      _declaration: {
        _attributes: {
          version: "1.0",
          encoding: "UTF-8",
        },
      },
      _doctype: `tree [
<!ELEMENT tree (branch)+>
<!ELEMENT branch (node)+>
<!ELEMENT node (path_segment,parent_path_segment?,value?)>
<!ELEMENT path_segment (#PCDATA)>
<!ELEMENT parent_path_segment (#PCDATA)>
<!ELEMENT value (#PCDATA)>
]`,
      tree: {
        branch: {
          node: [
            { path_segment: baseName, parent_path_segment: {}, value: {} },
            ...nodes,
          ],
        },
      },
    };

    const fileText = new Blob(
      [
        js2xml(data, {
          compact: true,
          fullTagEmptyElement: true,
          spaces: 2,
        }),
      ],
      {
        type: "application/xml;charset=utf-8",
      }
    );

    saveAs(fileText, `DP_${name.replace(" ", "_")}.xml`);
  };

  return (
    <div>
      <button className="file-button" onClick={downloadFile}>
        Spara som xml
      </button>
    </div>
  );
};

export default ExportButton;
