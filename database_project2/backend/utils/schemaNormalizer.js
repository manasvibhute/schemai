export const normalizeSchema = (schema) => {
  return {
    nodes: schema.nodes.map((n, i) => ({
      ...n,
      position: n.position || { x: 100 + i * 200, y: 100 }
    })),
    edges: schema.edges || []
  };
};
