import React, { useState } from "react";
import { XMLNode } from "./App";

interface IProps {
  childNodes: XMLNode[];
  activeNode: XMLNode;
  level: number;
}

const TreeBase: React.FC<IProps> = ({
  activeNode: { path_segment, parent_path_segment, value },
  childNodes,
  level,
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
        <td>{value._text}</td>
      </tr>
      {open &&
        hasChildren &&
        childNodes
          .filter(
            (node) => path_segment._text === node.parent_path_segment._text
          )
          .map((node) => (
            <TreeBase
              activeNode={node}
              level={level + 1}
              childNodes={childNodes.filter(
                (nd) =>
                  nd.parent_path_segment._text &&
                  nd.parent_path_segment._text.startsWith(
                    node.path_segment._text
                  )
              )}
            />
          ))}
    </React.Fragment>
  );
};

export default TreeBase;
