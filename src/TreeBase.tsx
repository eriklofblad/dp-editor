import React, { useState } from "react";
import { XMLNode } from "./App";
import { FaPen } from "react-icons/fa";

interface IProps {
  childNodes: XMLNode[];
  activeNode: XMLNode;
  level: number;
  startEdit: (node: XMLNode) => void;
  search: string;
  foundNodes: XMLNode[];
}

const TreeBase: React.FC<IProps> = ({
  activeNode: { path_segment, parent_path_segment, value },
  childNodes,
  level,
  startEdit,
  search,
  foundNodes,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = childNodes.length > 0;
  return (
    <React.Fragment>
      <tr style={{ backgroundColor: level === 1 ? "lightgray" : "white" }}>
        <td
          style={{
            cursor: hasChildren ? "pointer" : "default",
            paddingLeft: level * 10,
            fontWeight: hasChildren ? "bold" : "normal",
          }}
          onClick={() => setOpen(!open)}
        >
          {hasChildren && (open ? "-" : "+")}
          {path_segment._text.replace(parent_path_segment._text + "\\", "")}
        </td>
        <td>
          {value._text ? value._text + " " : ""}{" "}
          {value._text && (
            <FaPen
              style={{ float: "right" }}
              onClick={() =>
                startEdit({ path_segment, parent_path_segment, value })
              }
            />
          )}
        </td>
      </tr>
      {open &&
        hasChildren &&
        childNodes
          .filter(
            (node) => path_segment._text === node.parent_path_segment._text
          )
          .filter((node) => {
            if (search.length < 3) {
              return true;
            }
            let found = false;
            foundNodes.forEach((fnode) => {
              if (
                fnode.path_segment._text.startsWith(
                  node.path_segment._text + "\\"
                ) ||
                fnode.path_segment._text === node.path_segment._text
              ) {
                found = true;
              }
            });
            return found;
          })
          .map((node) => (
            <TreeBase
              key={node.path_segment._text}
              activeNode={node}
              level={level + 1}
              childNodes={childNodes
                .filter(
                  (nd) =>
                    nd.parent_path_segment._text === node.path_segment._text ||
                    nd.parent_path_segment._text.startsWith(
                      node.path_segment._text + "\\"
                    )
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
                      )
                    ) {
                      found = true;
                    }
                  });
                  return found;
                })}
              startEdit={startEdit}
              foundNodes={foundNodes.filter((nd) =>
                nd.parent_path_segment._text.startsWith(node.path_segment._text)
              )}
              search={search}
            />
          ))}
    </React.Fragment>
  );
};

export default TreeBase;
