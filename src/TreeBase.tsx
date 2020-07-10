import React, { useState } from "react";
import { XMLNode } from "./App";

interface IProps {
  childNodes: XMLNode[];
  title: string;
  value?: string;
  level: number;
}

const TreeBase: React.FC<IProps> = ({ title, childNodes, value, level }) => {
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
          {title}
        </td>
        <td>{value}</td>
      </tr>
      {open &&
        hasChildren &&
        childNodes
          .map((node) => {
            node.path_segment._text = node.path_segment._text.replace(
              title + "\\",
              ""
            );
            return node;
          })
          .filter((node) => !node.path_segment._text.includes("\\"))
          .map((node) => (
            <TreeBase
              title={node.path_segment._text}
              value={node.value._text}
              level={level + 1}
              childNodes={childNodes.filter(
                (nd) =>
                  nd.path_segment._text.startsWith(node.path_segment._text) &&
                  nd.path_segment._text !== node.path_segment._text
              )}
            />
          ))}
    </React.Fragment>
  );
};

export default TreeBase;
