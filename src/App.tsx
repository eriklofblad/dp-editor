import React, { useState, useEffect } from "react";
import "./App.css";
import { xmlData } from "./test-data/crLungor";
import convert, { ElementCompact } from "xml-js";
import TreeBase from "./TreeBase";
import FileUploader from "./FileUploader";

interface XmlTreeData extends ElementCompact {
  tree?: {
    branch: {
      node: XMLNode[];
    };
  };
}

export interface XMLNode {
  path_segment: XMLElement;
  parent_path_segment: XMLElement;
  value: Partial<XMLElement>;
}

interface XMLElement {
  _text: string;
}

function App() {
  const [nodes, setNodes] = useState<XMLNode[]>([]);
  const [baseName, setBaseName] = useState<string>("");
  const [dpName, setDPName] = useState<string>("");

  useEffect(() => {
    setNewData(xmlData);
  }, []);

  const setNewData = (data: string): void => {
    const jsonData: XmlTreeData = convert.xml2js(data, { compact: true });

    if (!jsonData.tree) {
      return;
    }

    const prelBaseName = jsonData.tree.branch.node[0].path_segment._text;
    setBaseName(prelBaseName);

    const protocolNameNode = jsonData.tree.branch.node.filter(
      (node) => node.path_segment._text === prelBaseName + "\\name"
    );

    if (protocolNameNode.length > 0 && protocolNameNode[0].value._text) {
      setDPName(protocolNameNode[0].value._text);
    }

    setNodes(
      jsonData.tree.branch.node.filter(
        (node) => !!node.parent_path_segment._text
      )
    );
  };
  return (
    <div className="App">
      <div className="path-list">
        <h3>{dpName}</h3>
        <FileUploader setNewData={setNewData} />
        <table>
          <tbody>
            {nodes
              .filter((node) => node.parent_path_segment._text === baseName)
              .map((node) => (
                <TreeBase
                  key={node.path_segment._text}
                  activeNode={node}
                  childNodes={nodes.filter(
                    (nd) =>
                      nd.parent_path_segment._text &&
                      nd.parent_path_segment._text.startsWith(
                        node.path_segment._text
                      )
                  )}
                  level={1}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
