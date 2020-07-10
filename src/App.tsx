import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { xmlData } from "./test-data/crLungor";
import convert, { ElementCompact } from "xml-js";
import TreeBase from "./TreeBase";

interface XmlTreeData extends ElementCompact {
  tree?: {
    branch: {
      node: XMLNode[];
    };
  };
}

export interface XMLNode {
  path_segment: XMLElement;
  parent_path_segment: Partial<XMLElement>;
  value: Partial<XMLElement>;
}

interface XMLElement {
  _text: string;
}

function App() {
  const jsonData: XmlTreeData = convert.xml2js(xmlData, { compact: true });

  console.log(jsonData);

  if (!jsonData.tree) {
    return <h1>Data not parsed</h1>;
  }

  const baseName = jsonData.tree.branch.node[0].path_segment._text;
  const nodes = jsonData.tree.branch.node.map((node) => {
    node.path_segment._text = node.path_segment._text.replace(
      baseName + "\\",
      ""
    );
    return node;
  });

  return (
    <div className="App">
      <div className="path-list">
        <h3>Base path: {baseName}</h3>
        <table>
          {nodes
            .filter((node) => !node.path_segment._text.includes("\\"))
            .map((node) => (
              <TreeBase
                key={node.path_segment._text}
                title={node.path_segment._text}
                value={node.value._text}
                childNodes={nodes.filter(
                  (nd) =>
                    nd.path_segment._text.startsWith(node.path_segment._text) &&
                    nd.path_segment._text !== node.path_segment._text
                )}
                level={1}
              />
            ))}
        </table>
      </div>
    </div>
  );
}

export default App;
