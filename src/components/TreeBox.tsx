import React from "react";
// @ts-ignore
import Graph from "react-graph-vis";

type NodeId = any;

type Node = {
  id: NodeId;
  value: string;
  children: Node[];
};

type GraphNode = {
  id: NodeId;
  label: string;
  title: string;
};

type GraphEdge = {
  from: NodeId;
  to: NodeId;
};

type Graph = {
  nodes: GraphNode[];
  edges: GraphEdge[];
};

const getGraph = (node: Node): Graph => {
  const nodes: GraphNode[] = [];
  const rootNode: GraphNode = {
    id: node.id,
    label: node.value,
    title: node.value,
  };
  const childrenNodes = node.children.reduce(
    (prev, childNode) => {
      const childGraph = getGraph(childNode);
      const childEdge = { from: rootNode.id, to: childNode.id };
      return {
        nodes: ([] as GraphNode[]).concat(prev.nodes, childGraph.nodes),
        edges: ([] as GraphEdge[]).concat(
          prev.edges,
          childGraph.edges,
          childEdge
        ),
      };
    },
    { nodes: [], edges: [] } as Graph
  );
  return {
    nodes: nodes.concat(rootNode, childrenNodes.nodes),
    edges: childrenNodes.edges,
  };
};

type Tree = {
  root: Node;
  visited: NodeId[];
};

type TreeBoxProps = {
  tree: Tree;
};

const TreeBox = ({ tree }: TreeBoxProps) => {
  const graph = getGraph(tree.root);

  const options = {
    autoResize: true,
    height: "500px",
    width: "100%",
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed",
      },
    },
    nodes: {
      color: {
        border: "#333",
        background: "#bbb",
        highlight: {
          border: "#2B7CE9",
          background: "#97C2FC",
        },
      },
    },
    interaction: {
      selectable: false,
    },
  };

  const [network, setNetwork] = React.useState(null as any);

  React.useEffect(() => {
    if (network) {
      network.selectNodes(tree.visited, false);
    }
  }, [network, tree.visited]);

  return (
    <article>
      <Graph graph={graph} options={options} getNetwork={setNetwork} />
    </article>
  );
};

export default TreeBox;
