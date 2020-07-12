import React, { useState, useEffect } from "react";
import "./App.css";
import convert, { ElementCompact } from "xml-js";
import TreeBase from "./TreeBase";
import FileUploader from "./FileUploader";
import ExportButton from "./ExportButton";
import EditValue from "./EditValue";
import { xmlData } from "./test-data/crLungor";
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
  const [editing, setEditing] = useState<{
    active: boolean;
    node: XMLNode | null;
  }>({ active: false, node: null });
  const [search, setSearch] = useState<string>("");
  const [foundNodes, setFoundNodes] = useState<XMLNode[]>([]);

  useEffect(() => {
    setNewData(xmlData);
  }, []);

  const setNewData = (data: string): void => {
    const jsonData: XmlTreeData = convert.xml2js(data, { compact: true });

    console.log(jsonData);

    if (!jsonData.tree) {
      console.log("json data not as expected");
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

  useEffect(() => {
    if (search.length > 2) {
      setFoundNodes(
        nodes.filter(
          (node) => node.value._text && node.value._text.includes(search)
        )
      );
    }
  }, [search, nodes]);

  const startEdit = (node: XMLNode) => {
    setEditing({ active: true, node });
  };

  const endEdit = () => {
    setEditing({ active: false, node: null });
  };

  const setNodeValue = (path_segment: string, value: string) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.path_segment._text === path_segment) {
          return { ...node, value: { _text: value } };
        }
        return node;
      })
    );
    if (path_segment === baseName + "\\name") {
      setDPName(value);
    }
  };
  return (
    <div className="App">
      <div className="path-list">
        <h1>DP-editorn</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50vw",
          }}
        >
          <FileUploader setNewData={setNewData} />
          <ExportButton nodes={nodes} name={dpName} baseName={baseName} />
        </div>
        <h3>{dpName}</h3>
        <p>{baseName}</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ display: "flex" }}>
          <table>
            <tbody>
              {nodes
                .filter((node) => node.parent_path_segment._text === baseName)
                .filter((node) => {
                  if (search.length < 3) {
                    return true;
                  }

                  let doesContain = false;

                  foundNodes.forEach((nd) => {
                    if (
                      nd.parent_path_segment._text.includes(
                        node.path_segment._text
                      )
                    ) {
                      doesContain = true;
                    }
                  });
                  return doesContain;
                })
                .map((node) => (
                  <TreeBase
                    key={node.path_segment._text}
                    activeNode={node}
                    childNodes={nodes
                      .filter(
                        (nd) =>
                          nd.parent_path_segment._text &&
                          (nd.parent_path_segment._text ===
                            node.path_segment._text ||
                            nd.parent_path_segment._text.startsWith(
                              node.path_segment._text + "\\"
                            ))
                      )
                      .filter((nd) => {
                        if (search.length < 3) {
                          return true;
                        }
                        let found = false;
                        foundNodes.forEach((fnode) => {
                          if (
                            fnode.path_segment._text.startsWith(
                              node.path_segment._text
                            ) ||
                            fnode.path_segment._text === node.path_segment._text
                          ) {
                            found = true;
                          }
                        });
                        return found;
                      })}
                    level={1}
                    startEdit={startEdit}
                    search={search}
                    foundNodes={foundNodes.filter((nd) =>
                      nd.parent_path_segment._text.startsWith(
                        node.path_segment._text
                      )
                    )}
                  />
                ))}
            </tbody>
          </table>
          {editing.active && editing.node !== null && (
            <EditValue
              node={editing.node}
              endEdit={endEdit}
              setNodeValue={setNodeValue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
