import React from "react";
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
  parent_path_segment: XMLElement;
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
  const nodes = jsonData.tree.branch.node.filter(
    (node) => !!node.parent_path_segment._text
  );

  return (
    <div className="App">
      <div className="path-list">
        <h3>Base path: {baseName}</h3>
        <table>
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
        </table>
      </div>
    </div>
  );
}

export default App;
