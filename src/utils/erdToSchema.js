export function erdToSchema(nodes, edges, prevSchema) {
  const tables = nodes.map((node) => ({
    id: node.id,
    name: node.data?.label || node.id,
    columns: node.data?.columns || [],
  }));

  const relations = edges.map((edge) => ({
    from: edge.source,
    to: edge.target,
    type: "one-to-many",
  }));

  return {
    ...prevSchema,
    tables,
    relations,
    nodes,
    edges,
  };
}
