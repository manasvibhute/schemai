// export function schemaToNodes(schema) {
//   return schema.tables.map((table, index) => ({
//     id: table.id,
//     type: "tableNode",
//     position: { x: 200 * index, y: 100 },
//     data: table
//   }));
// }

// export function schemaToEdges(schema) {
//   return schema.relations.map((rel, index) => ({
//     id: `e${index}`,
//     source: rel.fromTable,
//     target: rel.toTable,
//     label: rel.type
//   }));
// }













// // src/utils/schemaToERD.js
// // Convert unified schema -> React Flow nodes & edges with defensive checks.

// function safeString(s) {
//   if (typeof s === "string") return s;
//   if (s == null) return "";
//   try {
//     return String(s);
//   } catch {
//     return "";
//   }
// }

// // Simple auto-layout: grid positions based on index
// function autoLayout(tables) {
//   const positions = {};
//   const colCount = Math.ceil(Math.sqrt(Math.max(1, tables.length)));
//   const xGap = 300;
//   const yGap = 220;

//   tables.forEach((t, i) => {
//     const row = Math.floor(i / colCount);
//     const col = i % colCount;
//     positions[t.name] = { x: col * xGap, y: row * yGap };
//   });
//   return positions;
// }

// // React Flow Table node data
// function buildTableLabel(table) {
//   const lines = [];
//   lines.push(`Table: ${table.name}`);
//   table.columns.forEach((c) => {
//     const flags = [];
//     if (c.pk) flags.push("PK");
//     if (c.fk) flags.push("FK");
//     if (c.unique && !c.pk) flags.push("UQ");
//     if (c.nullable) flags.push("NULL");
//     const suffix = flags.length ? ` [${flags.join(", ")}]` : "";
//     lines.push(`- ${c.name}: ${c.type}${suffix}`);
//   });
//   return lines.join("\n");
// }

// export function schemaToReactFlow(schemaInput) {
//   const schema = schemaInput && typeof schemaInput === "object" ? schemaInput : { tables: [], relations: [] };
//   const tables = Array.isArray(schema.tables) ? schema.tables : [];
//   const relations = Array.isArray(schema.relations) ? schema.relations : [];

//   const sanitizedTables = tables
//     .filter((t) => safeString(t?.name))
//     .map((t) => ({
//       name: safeString(t.name),
//       columns: Array.isArray(t.columns)
//         ? t.columns
//             .filter((c) => safeString(c?.name))
//             .map((c) => ({
//               name: safeString(c.name),
//               type: safeString(c.type) || "varchar(255)",
//               pk: Boolean(c.pk),
//               fk: Boolean(c.fk),
//               unique: Boolean(c.unique),
//               nullable: c?.nullable === true,
//             }))
//         : [],
//     }));

//   const positions = autoLayout(sanitizedTables);

//   const nodes = sanitizedTables.map((t) => ({
//     id: `table-${t.name}`,
//     type: "tableNode",
//     position: positions[t.name] || { x: 0, y: 0 },
//     data: {
//       table: t,
//       label: buildTableLabel(t),
//     },
//     draggable: true,
//   }));

//   const edges = relations
//     .map((r, idx) => {
//       const fromTable = safeString(r?.fromTable);
//       const toTable = safeString(r?.toTable);
//       const fromColumn = safeString(r?.fromColumn);
//       const toColumn = safeString(r?.toColumn);
//       const type = safeString(r?.type) || "many-to-one";

//       if (!fromTable || !toTable || !fromColumn || !toColumn) return null;

//       return {
//         id: `edge-${idx}-${fromTable}-${fromColumn}-${toTable}-${toColumn}`,
//         source: `table-${fromTable}`,
//         target: `table-${toTable}`,
//         type: "default",
//         label: `${type}: ${fromTable}.${fromColumn} → ${toTable}.${toColumn}`,
//         animated: false,
//       };
//     })
//     .filter(Boolean);

//   return { nodes, edges };
// }












// // src/utils/schemaToERD.js
// // Convert schema -> React Flow nodes/edges

// function safeString(s) {
//   return typeof s === "string" ? s : "";
// }

// function autoLayout(tables) {
//   const positions = {};
//   const xGap = 400;
//   const yGap = 300;
//   tables.forEach((t, i) => {
//     positions[t.name] = { x: (i % 3) * xGap, y: Math.floor(i / 3) * yGap };
//   });
//   return positions;
// }

// function buildLabel(table) {
//   return (
//     `Table: ${table.name}\n` +
//     table.columns
//       .map((c) => {
//         const flags = [];
//         if (c.pk) flags.push("PK");
//         if (c.fk) flags.push("FK");
//         if (c.unique) flags.push("UQ");
//         if (c.nullable) flags.push("NULL");
//         return `- ${c.name}: ${c.type}${flags.length ? " [" + flags.join(", ") + "]" : ""}`;
//       })
//       .join("\n")
//   );
// }

// export function schemaToReactFlow(schema) {
//   const tables = schema.tables || [];
//   const relations = schema.relations || [];
//   const positions = autoLayout(tables);

//   const nodes = tables.map((t) => ({
//     id: `table-${t.name}`,
//     type: "tableNode",
//     position: positions[t.name],
//     data: { table: t, label: buildLabel(t) },
//   }));

//   const edges = relations.map((r, i) => ({
//     id: `edge-${i}`,
//     source: `table-${r.fromTable}`,
//     target: `table-${r.toTable}`,
//     label: `${r.type}: ${r.fromTable}.${r.fromColumn} → ${r.toTable}.${r.toColumn}`,
//   }));

//   return { nodes, edges };
// }








// // src/utils/schemaToERD.js

// function safeString(s) {
//   return typeof s === "string" ? s : "";
// }

// // Improved Auto-Layout for better visibility
// function autoLayout(tables) {
//   const positions = {};
//   const xGap = 350; // Horizontal space
//   const yGap = 350; // Vertical space
//   tables.forEach((t, i) => {
//     positions[t.name] = { x: (i % 3) * xGap, y: Math.floor(i / 3) * yGap };
//   });
//   return positions;
// }

// // Generates the readable text inside the table node
// function buildLabel(table) {
//   return (
//     `Table: ${table.name}\n` +
//     table.columns
//       .map((c) => {
//         const flags = [];
//         if (c.pk) flags.push("PK");
//         if (c.fk) flags.push("FK");
//         if (c.unique) flags.push("UQ");
//         if (c.nullable) flags.push("NULL");
//         return `- ${c.name}: ${c.type}${flags.length ? " [" + flags.join(", ") + "]" : ""}`;
//       })
//       .join("\n")
//   );
// }

// export function schemaToReactFlow(schema) {
//   const tables = schema.tables || [];
//   const relations = schema.relations || [];
//   const positions = autoLayout(tables);

//   // 1. Generate Nodes
//   const nodes = tables.map((t) => ({
//     id: t.name, // Simplified ID to match the 'fromTable'/'toTable' exactly
//     type: "tableNode",
//     position: positions[t.name] || { x: 0, y: 0 },
//     data: { 
//       table: t, 
//       label: buildLabel(t),
//       name: t.name // redundant but helpful for debugging
//     },
//   }));

//   // 2. Generate Edges
//   const edges = relations.map((r, i) => ({
//     id: `edge-${r.fromTable}-${r.toTable}-${i}`,
//     source: r.fromTable, // Matches Node ID
//     target: r.toTable,   // Matches Node ID
//     label: r.type,       // e.g., "many-to-one"
//     animated: true,
//     // Store metadata in 'data' so the Apply Changes button can read the columns
//     data: { 
//         fromColumn: r.fromColumn, 
//         toColumn: r.toColumn,
//         type: r.type 
//     },
//     // Styling the relationship line
//     type: 'smoothstep',
//     style: { stroke: '#38bdf8', strokeWidth: 2 },
//     markerEnd: {
//       type: 'arrowclosed',
//       color: '#38bdf8',
//     },
//   }));

//   return { nodes, edges };
// }









// src/utils/schemaToERD.js

function safeString(s) {
  return typeof s === "string" ? s : "";
}

/**
 * Automatically calculates positions for nodes so they don't overlap.
 * This is crucial for the initial view of the ERD.
 */
function autoLayout(tables) {
  const positions = {};
  const xGap = 400; // Increased gap for better readability
  const yGap = 350; 
  
  tables.forEach((t, i) => {
    // Places tables in a 3-column grid
    positions[t.name] = { 
        x: (i % 3) * xGap, 
        y: Math.floor(i / 3) * yGap 
    };
  });
  return positions;
}

/**
 * Standardizes the schema data for React Flow.
 */
export function schemaToReactFlow(schema) {
  const tables = schema?.tables || [];
  const relations = schema?.relations || [];
  const positions = autoLayout(tables);

  // 1. Generate Nodes (Tables)
  const nodes = tables.map((t) => ({
    id: t.name, // The unique ID used for connecting edges
    type: "tableNode", // Matches the nodeTypes key in ERDCanvas.jsx
    position: positions[t.name] || { x: 0, y: 0 },
    // Data passed directly to the TableNode.jsx component
    data: { 
      table: t,
      name: t.name,
      columns: t.columns || []
    },
    dragHandle: '.table-header', // Optional: if you want to restrict dragging to the header
  }));

  // 2. Generate Edges (Relationships)
  const edges = relations.map((r, i) => {
    // Unique ID for the line
    const edgeId = `edge-${r.fromTable}-${r.toTable}-${i}`;
    
    return {
      id: edgeId,
      source: r.fromTable, // Must match a Node ID
      target: r.toTable,   // Must match a Node ID
      label: r.type || "many-to-one",
      animated: true,
      
      // Metadata stored on the edge for the "Apply Changes" logic
      data: { 
        fromColumn: r.fromColumn, 
        toColumn: r.toColumn,
        type: r.type 
      },
      
      // Visual Styling
      type: 'smoothstep', // Right-angled lines for professional look
      style: { stroke: '#38bdf8', strokeWidth: 2 },
      markerEnd: {
        type: 'arrowclosed', // Shows direction of relationship
        color: '#38bdf8',
        width: 20,
        height: 20
      },
      labelStyle: { fill: '#fff', fontWeight: 700 },
      labelBgStyle: { fill: '#1e293b', fillOpacity: 0.8 },
      labelBgPadding: [8, 4],
      labelBgBorderRadius: 4,
    };
  });

  return { nodes, edges };
}