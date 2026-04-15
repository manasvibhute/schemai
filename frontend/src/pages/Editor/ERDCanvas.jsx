// import React, { useEffect, useState } from 'react';

// const ERDCanvas = ({ schema, setSchema }) => {
//   const [localSchema, setLocalSchema] = useState(schema || { entities: [], relations: [] });

//   useEffect(() => setLocalSchema(schema || { entities: [], relations: [] }), [schema]);

//   // Whenever ERD changes manually, update parent state
//   const handleChange = (updatedSchema) => {
//     setLocalSchema(updatedSchema);
//     setSchema(updatedSchema); // sync with code
//   };

//   return (
//     <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl">
//       {/* Placeholder: Replace with your ERD library canvas */}
//       <pre className="text-xs p-2 text-slate-300 overflow-auto h-full">
//         {JSON.stringify(localSchema, null, 2)}
//       </pre>
//     </div>
//   );
// };

// export default ERDCanvas;










// import React, { useCallback } from 'react';
// import ReactFlow, {
//   addEdge,
//   Background,
//   Controls,
//   MiniMap
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// const ERDCanvas = ({ nodes, setNodes, edges, setEdges }) => {
//   const onNodesChange = useCallback(
//     (changes) =>
//       setNodes((nds) =>
//         nds.map((node) => {
//           const change = changes.find((c) => c.id === node.id);
//           return change?.position
//             ? { ...node, position: change.position }
//             : node;
//         })
//       ),
//     [setNodes]
//   );

//   const onEdgesChange = useCallback(
//     (changes) =>
//       setEdges((eds) =>
//         eds.filter((e) => !changes.find((c) => c.id === e.id && c.type === 'remove'))
//       ),
//     [setEdges]
//   );

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   return (
//     <div className="w-full h-full rounded-xl overflow-hidden">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//       >
//         <Background />
//         <MiniMap />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default ERDCanvas;











// import React, { useEffect } from 'react';
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState
// } from 'reactflow';

// import 'reactflow/dist/style.css';

// const ERDCanvas = ({ schema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   useEffect(() => {
//     if (!schema?.nodes) return;

//     setNodes(schema.nodes);
//     setEdges(schema.edges || []);
//   }, [schema, setNodes, setEdges]);

//   if (!schema) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50">
//         Enter a prompt and click Generate
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 rounded-xl overflow-hidden">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         fitView
//       >
//         <MiniMap />
//         <Controls />
//         <Background gap={12} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default ERDCanvas;













// import React, { useEffect, useState } from 'react';
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState
// } from 'reactflow';

// import 'reactflow/dist/style.css';
// import TableEditor from './TableEditor';

// const ERDCanvas = ({ schema, setSchema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [editingNode, setEditingNode] = useState(null);

//   // Sync schema → React Flow
//   useEffect(() => {
//     if (!schema?.nodes) return;
//     setNodes(schema.nodes);
//     setEdges(schema.edges || []);
//   }, [schema, setNodes, setEdges]);

//   // Sync React Flow → schema (dragging, positioning)
//   useEffect(() => {
//     if (!schema?.nodes) return;
//     setNodes(schema.nodes);
//    (schema.edges || []);
//   }, [schema, setNodes, setEdges]);


//   const handleNodeClick = (_, node) => {
//     setEditingNode(node);
//   };

//   const saveTableChanges = (updatedColumns) => {
//     const updatedNodes = nodes.map(n =>
//       n.id === editingNode.id
//         ? {
//             ...n,
//             data: {
//               ...n.data,
//               columns: updatedColumns
//             }
//           }
//         : n
//     );

//     setNodes(updatedNodes);
//     setEditingNode(null);
//   };

//   if (!schema) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50">
//         Enter a prompt and click Generate
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 rounded-xl overflow-hidden relative">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onNodeClick={handleNodeClick}
//         fitView
//       >
//         <MiniMap />
//         <Controls />
//         <Background gap={12} />
//       </ReactFlow>

//       {editingNode && (
//         <TableEditor
//           node={editingNode}
//           onSave={saveTableChanges}
//           onClose={() => setEditingNode(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ERDCanvas;











// import React, { useEffect } from 'react';
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// const ERDCanvas = ({ schema, setSchema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   useEffect(() => {
//     if (schema.nodes) {
//       setNodes(schema.nodes);
//       setEdges(schema.edges || []);
//     }
//   }, [schema, setNodes, setEdges]);

//   // Keep schema updated on node/edge changes
//   useEffect(() => {
//     setSchema({ nodes, edges });
//   }, [nodes, edges, setSchema]);

//   if (!schema || schema.nodes.length === 0) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50 h-[400px]">
//         Enter a prompt and click Generate
//       </div>
//     );
//   }

//   return (
//   <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden">
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       fitView
//     >
//       <MiniMap />
//       <Controls />
//       <Background gap={12} />
//     </ReactFlow>
//   </div>
// );

// };

// export default ERDCanvas;







// import React, { useEffect } from 'react';
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState,
//   applyNodeChanges,
//   applyEdgeChanges
// } from 'reactflow';

// import 'reactflow/dist/style.css';


// import 'reactflow/dist/style.css';


// const ERDCanvas = ({ schema, setSchema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   // ✅ Load schema into ReactFlow ONLY when schema changes from parent
//   useEffect(() => {
//     if (!schema) return;

//     setNodes(schema.nodes || []);
//     setEdges(schema.edges || []);
//   }, [schema]); // ✅ ONLY schema

//   // ✅ Handle node changes (USER interaction)
//   const handleNodesChange = (changes) => {
//     onNodesChange(changes);

//     setSchema(prev => ({
//       ...prev,
//       nodes: applyNodeChanges(changes, nodes),
//       edges
//     }));
//   };

//   // ✅ Handle edge changes (USER interaction)
//   const handleEdgesChange = (changes) => {
//     onEdgesChange(changes);

//     setSchema(prev => ({
//       ...prev,
//       nodes,
//       edges: applyEdgeChanges(changes, edges)
//     }));
//   };

//   if (!schema || !schema.nodes || schema.nodes.length === 0) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50 min-h-[400px]">
//         Enter a prompt and click Generate
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={handleNodesChange}
//         onEdgesChange={handleEdgesChange}
//         fitView
//       >
//         <MiniMap />
//         <Controls />
//         <Background gap={12} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default ERDCanvas;









// import { erdToSchema } from "../../utils/erdToSchema";

// import React, { useEffect, useCallback } from "react";
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState,
//   applyNodeChanges,
//   applyEdgeChanges,
// } from "reactflow";

// import "reactflow/dist/style.css";

// /**
//  * ERDCanvas
//  * ----------
//  * - Renders ERD using React Flow
//  * - Fully editable nodes & edges
//  * - Bidirectional sync with schema JSON
//  * - Schema remains single source of truth
//  */
// const ERDCanvas = ({ schema, setSchema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   /**
//    * 🔁 Load schema → ReactFlow
//    * Runs ONLY when schema changes from parent
//    */
//   useEffect(() => {
//     if (!schema?.nodes || !schema?.edges) return;

//     setNodes(schema.nodes);
//     setEdges(schema.edges);
//   }, [schema?.nodes, schema?.edges, setNodes, setEdges]);

//   /**
//    * 🧠 Node change handler (drag, resize, rename-ready)
//    */
//   const handleNodesChange = useCallback(
//   (changes) => {
//     setNodes((nds) => {
//       const updatedNodes = applyNodeChanges(changes, nds);

//       setSchema((prev) =>
//         erdToSchema(updatedNodes, edges, prev)
//       );

//       return updatedNodes;
//     });
//   },
//   [edges, setSchema]
// );


//   /**
//    * 🔗 Edge change handler (relations)
//    */
//   const handleEdgesChange = useCallback(
//   (changes) => {
//     setEdges((eds) => {
//       const updatedEdges = applyEdgeChanges(changes, eds);

//       setSchema((prev) =>
//         erdToSchema(nodes, updatedEdges, prev)
//       );

//       return updatedEdges;
//     });
//   },
//   [nodes, setSchema]
// );


//   /**
//    * 💤 Empty state
//    */
//   if (!schema?.nodes || schema.nodes.length === 0) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50 min-h-[400px]">
//         Enter a prompt and click <span className="ml-1 font-semibold">Generate</span>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-white/10">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={handleNodesChange}
//         onEdgesChange={handleEdgesChange}
//         fitView
//       >
//         <MiniMap
//           pannable
//           zoomable
//           nodeStrokeWidth={3}
//         />
//         <Controls />
//         <Background gap={14} size={1} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default ERDCanvas;
















// import React, { useEffect, useCallback } from "react";
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState,
//   applyNodeChanges,
//   applyEdgeChanges,
// } from "reactflow";

// import "reactflow/dist/style.css";

// import TableNode from "./TableNode";
// import { schemaToNodes, schemaToEdges } from "../../utils/schemaToERD";

// const nodeTypes = {
//   tableNode: TableNode,
// };

// /**
//  * ERDCanvas
//  * ----------
//  * - Renders SOLID developer-grade ERD
//  * - Tables + columns + PK visualization
//  * - Schema (tables/relations) is single source of truth
//  * - React Flow is only a visual projection
//  */
// const ERDCanvas = ({ schema, setSchema }) => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   /**
//    * 🔁 SCHEMA → ERD (visual)
//    * Runs whenever tables / relations change
//    */
//   useEffect(() => {
//     if (!schema?.tables) return;

//     setNodes(schemaToNodes(schema));
//     setEdges(schemaToEdges(schema));
//   }, [schema?.tables, schema?.relations, setNodes, setEdges]);

//   /**
//    * 🧠 Handle node movement / resize
//    * (visual only — does NOT mutate table structure)
//    */
//   const handleNodesChange = useCallback(
//     (changes) => {
//       setNodes((nds) => {
//         const updatedNodes = applyNodeChanges(changes, nds);

//         // preserve positions back into schema (optional but useful)
//         setSchema((prev) => ({
//           ...prev,
//           tables: prev.tables.map((t) => {
//             const node = updatedNodes.find((n) => n.id === t.id);
//             return node
//               ? { ...t, position: node.position }
//               : t;
//           }),
//         }));

//         return updatedNodes;
//       });
//     },
//     [setSchema]
//   );

//   /**
//    * 🔗 Handle relationship edits
//    */
//   const handleEdgesChange = useCallback(
//     (changes) => {
//       setEdges((eds) => {
//         const updatedEdges = applyEdgeChanges(changes, eds);

//         setSchema((prev) => ({
//           ...prev,
//           relations: updatedEdges.map((e) => ({
//             fromTable: e.source,
//             toTable: e.target,
//             type: e.label || "one-to-many",
//           })),
//         }));

//         return updatedEdges;
//       });
//     },
//     [setSchema]
//   );

//   /**
//    * 💤 Empty state
//    */
//   if (!schema?.tables || schema.tables.length === 0) {
//     return (
//       <div className="flex-1 flex items-center justify-center text-white/50 min-h-[400px]">
//         Enter a prompt and click <span className="ml-1 font-semibold">Generate</span>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-white/10">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         nodeTypes={nodeTypes}
//         onNodesChange={handleNodesChange}
//         onEdgesChange={handleEdgesChange}
//         fitView
//       >
//         <MiniMap pannable zoomable />
//         <Controls />
//         <Background gap={14} size={1} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default ERDCanvas;











// // src/pages/Editor/ERDCanvas.jsx
// import React, { useMemo } from "react";
// import ReactFlow, { Background, Controls } from "reactflow";
// import "reactflow/dist/style.css";
// import { schemaToReactFlow } from "../../utils/schemaToERD";

// // Inline custom TableNode to avoid new files
// function TableNode({ data }) {
//   const { table, label } = data || {};
//   return (
//     <div style={{
//       border: "1px solid rgba(255,255,255,0.2)",
//       borderRadius: 8,
//       background: "rgba(255,255,255,0.08)",
//       backdropFilter: "blur(6px)",
//       color: "#fff",
//       minWidth: 220,
//       padding: 10
//     }}>
//       <div style={{ fontWeight: 600, marginBottom: 6 }}>{table?.name || "Table"}</div>
//       <div style={{ fontSize: 12, whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
//         {label}
//       </div>
//     </div>
//   );
// }

// const nodeTypes = { tableNode: TableNode };

// export default function ERDCanvas({ schema }) {
//   // Keep schema as source of truth; derive nodes/edges on-the-fly
//   const { nodes, edges } = useMemo(() => schemaToReactFlow(schema), [schema]);

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
//         <Background variant="dots" gap={16} size={1} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }











// import React, { useMemo } from "react";
// import ReactFlow, { Background, Controls } from "reactflow";
// import "reactflow/dist/style.css";
// import { schemaToReactFlow } from "../../utils/schemaToERD";

// function TableNode({ data }) {
//   return (
//     <div style={{ background: "#222", color: "#fff", padding: 10, borderRadius: 6 }}>
//       <strong>{data.table.name}</strong>
//       <pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>{data.label}</pre>
//     </div>
//   );
// }

// const nodeTypes = { tableNode: TableNode };

// export default function ERDCanvas({ schema }) {
//   const { nodes, edges } = useMemo(() => schemaToReactFlow(schema), [schema]);
//   return (
//     <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
//       <Background />
//       <Controls />
//     </ReactFlow>
//   );
// }











// import React, { useMemo } from "react";
// import ReactFlow, { Background, Controls, Handle, Position } from "reactflow";
// import "reactflow/dist/style.css";
// import { schemaToReactFlow } from "../../utils/schemaToERD";

// // Updated Custom Node with Handles for Relationships
// function TableNode({ data }) {
//   return (
//     <div style={{ 
//       background: "#1e293b", 
//       color: "#fff", 
//       padding: "12px", 
//       borderRadius: "8px", 
//       border: "1px solid #38bdf8",
//       minWidth: "150px",
//       boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
//     }}>
//       {/* Target Handle: Where incoming relationship lines connect */}
//       <Handle 
//         type="target" 
//         position={Position.Left} 
//         style={{ background: "#38bdf8", width: "8px", height: "8px" }} 
//       />
      
//       <div style={{ 
//         borderBottom: "1px solid #334155", 
//         marginBottom: "8px", 
//         paddingBottom: "4px",
//         fontWeight: "bold",
//         textAlign: "center"
//       }}>
//         {data.table.name}
//       </div>
      
//       <div style={{ fontSize: "12px", lineHeight: "1.6" }}>
//         {data.table.columns.map((col) => (
//           <div key={col.name} style={{ display: "flex", justifyContent: "space-between" }}>
//             <span style={{ color: col.pk ? "#facc15" : "#fff" }}>
//               {col.name} {col.pk ? "🔑" : ""}
//             </span>
//             <span style={{ color: "#94a3b8", marginLeft: "10px" }}>{col.type}</span>
//           </div>
//         ))}
//       </div>

//       {/* Source Handle: Where outgoing relationship lines start */}
//       <Handle 
//         type="source" 
//         position={Position.Right} 
//         style={{ background: "#38bdf8", width: "8px", height: "8px" }} 
//       />
//     </div>
//   );
// }

// const nodeTypes = { tableNode: TableNode };

// export default function ERDCanvas({ schema }) {
//   // Ensure schemaToReactFlow is returning both nodes and edges
//   const { nodes, edges } = useMemo(() => schemaToReactFlow(schema), [schema]);

//   return (
//     <div style={{ width: "100%", height: "100%", background: "#0f172a" }}>
//       <ReactFlow 
//         nodes={nodes} 
//         edges={edges} 
//         nodeTypes={nodeTypes} 
//         fitView
//       >
//         <Background color="#334" variant="dots" />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }







// import React, { useCallback, useState, useMemo, useEffect } from 'react';
// import ReactFlow, { 
//   addEdge, 
//   applyEdgeChanges, 
//   applyNodeChanges, 
//   Background, 
//   Controls 
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import TableNode from "./TableNode";
// import { schemaToReactFlow } from "../../utils/schemaToERD";

// const nodeTypes = { tableNode: TableNode };

// export default function ERDCanvas({ schema, onSchemaChange }) {
//   // Generate initial React Flow data from the schema prop
//   const { nodes: initialNodes, edges: initialEdges } = useMemo(() => schemaToReactFlow(schema), [schema]);

//   // Local state for the diagram (allows interaction before saving)
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   // Modal State for configuring relationships
//   const [showModal, setShowModal] = useState(false);
//   const [pendingConnection, setPendingConnection] = useState(null);
//   const [relConfig, setRelConfig] = useState({ type: "many-to-one", fk: "" });

//   // Sync diagram if the AI generates a completely new schema
//   useEffect(() => {
//     setNodes(initialNodes);
//     setEdges(initialEdges);
//   }, [initialNodes, initialEdges]);

//   // Handle dragging tables
//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );

//   // Handle manual edge deletions or UI changes
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   // Triggered when a line is dragged between nodes
//   const onConnect = useCallback((params) => {
//     setPendingConnection(params);
//     // Find source table columns to pre-fill Foreign Key selection
//     const sourceTable = schema.tables.find(t => t.name === params.source);
//     if (sourceTable && sourceTable.columns.length > 0) {
//       setRelConfig({ type: "many-to-one", fk: sourceTable.columns[0].name });
//     }
//     setShowModal(true);
//   }, [schema.tables]);

//   // Finalize the connection after modal confirmation
//   const confirmConnection = () => {
//     const newEdge = {
//       ...pendingConnection,
//       id: `e-${pendingConnection.source}-${pendingConnection.target}-${Date.now()}`,
//       label: relConfig.type,
//       type: 'smoothstep',
//       animated: true,
//       markerEnd: { type: 'arrowclosed', color: '#38bdf8' },
//       data: { fk: relConfig.fk } // Store the chosen Foreign Key
//     };
//     setEdges((eds) => addEdge(newEdge, eds));
//     setShowModal(false);
//   };

//   // Sync the visual diagram back to the main Schema (and thus the SQL/Code)
//   const handleApply = () => {
//     const newRelations = edges.map(edge => ({
//       fromTable: edge.source,
//       fromColumn: edge.data?.fk || "id", // Use the stored FK or default to id
//       toTable: edge.target,
//       toColumn: "id",
//       type: edge.label || "many-to-one"
//     }));

//     onSchemaChange({ ...schema, relations: newRelations });
//     alert("Changes successfully applied to Code View!");
//   };

//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Background color="#334" variant="dots" />
//         <Controls />
//       </ReactFlow>

//       {/* Apply Changes Button */}
//       <button 
//         onClick={handleApply}
//         style={applyBtnStyle}
//       >
//         💾 Apply Changes to Code
//       </button>

//       {/* Relationship Configuration Modal */}
//       {showModal && (
//         <div style={modalOverlayStyle}>
//           <div style={modalContentStyle}>
//             <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Configure Relationship</h3>
//             <p style={{ fontSize: '14px', color: '#94a3b8' }}>
//               Connecting <b>{pendingConnection?.source}</b> to <b>{pendingConnection?.target}</b>
//             </p>
            
//             <label style={labelStyle}>Relationship Type:</label>
//             <select 
//               value={relConfig.type} 
//               onChange={e => setRelConfig({...relConfig, type: e.target.value})}
//               style={inputStyle}
//             >
//               <option value="many-to-one">Many-to-One (N:1)</option>
//               <option value="one-to-many">One-to-Many (1:N)</option>
//               <option value="one-to-one">One-to-One (1:1)</option>
//             </select>

//             <label style={labelStyle}>Select Foreign Key (from {pendingConnection?.source}):</label>
//             <select 
//               value={relConfig.fk} 
//               onChange={e => setRelConfig({...relConfig, fk: e.target.value})}
//               style={inputStyle}
//             >
//               {schema.tables.find(t => t.name === pendingConnection?.source)?.columns.map(col => (
//                 <option key={col.name} value={col.name}>{col.name}</option>
//               ))}
//             </select>

//             <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
//               <button onClick={confirmConnection} style={btnConfirm}>Confirm Connection</button>
//               <button onClick={() => setShowModal(false)} style={btnCancel}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // --- STYLES ---

// const applyBtnStyle = {
//   position: 'absolute', bottom: 20, right: 20, zIndex: 10,
//   padding: '12px 20px', background: '#10b981', color: '#fff',
//   border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
// };

// const modalOverlayStyle = { 
//   position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
//   background: 'rgba(0,0,0,0.75)', display: 'flex', justifyContent: 'center', 
//   alignItems: 'center', zIndex: 1000 
// };

// const modalContentStyle = { 
//   background: '#1e293b', padding: '25px', borderRadius: '12px', 
//   width: '350px', color: 'white', border: '1px solid #334155' 
// };

// const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '5px', color: '#94a3b8' };

// const inputStyle = { 
//   width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', 
//   background: '#0f172a', color: 'white', border: '1px solid #334155' 
// };

// const btnConfirm = { 
//   flex: 2, padding: '10px', background: '#3b82f6', color: 'white', 
//   border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' 
// };

// const btnCancel = { 
//   flex: 1, padding: '10px', background: '#475569', color: 'white', 
//   border: 'none', borderRadius: '6px', cursor: 'pointer' 
// };











// import React, { useCallback, useState, useMemo, useEffect } from 'react';
// import ReactFlow, { 
//   addEdge, 
//   applyEdgeChanges, 
//   applyNodeChanges, 
//   Background, 
//   Controls,
//   MiniMap // Added MiniMap for better navigation in large schemas
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import TableNode from "./TableNode";
// import { schemaToReactFlow } from "../../utils/schemaToERD";

// const nodeTypes = { tableNode: TableNode };

// export default function ERDCanvas({ schema, onSchemaChange }) {
//   const { nodes: initialNodes, edges: initialEdges } = useMemo(() => schemaToReactFlow(schema), [schema]);

//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const [showModal, setShowModal] = useState(false);
//   const [pendingConnection, setPendingConnection] = useState(null);
//   const [relConfig, setRelConfig] = useState({ type: "many-to-one", fk: "" });

//   useEffect(() => {
//     setNodes(initialNodes);
//     setEdges(initialEdges);
//   }, [initialNodes, initialEdges]);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );

//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   const onConnect = useCallback((params) => {
//     setPendingConnection(params);
//     const sourceTable = schema.tables.find(t => t.name === params.source);
//     if (sourceTable && sourceTable.columns.length > 0) {
//       setRelConfig({ type: "many-to-one", fk: sourceTable.columns[0].name });
//     }
//     setShowModal(true);
//   }, [schema.tables]);

//   const confirmConnection = () => {
//     const newEdge = {
//       ...pendingConnection,
//       id: `e-${pendingConnection.source}-${pendingConnection.target}-${Date.now()}`,
//       label: relConfig.type,
//       type: 'smoothstep',
//       animated: true,
//       markerEnd: { type: 'arrowclosed', color: '#38bdf8' },
//       data: { fk: relConfig.fk }
//     };
//     setEdges((eds) => addEdge(newEdge, eds));
//     setShowModal(false);
//   };

//   // const handleApply = () => {
//   //   const newRelations = edges.map(edge => ({
//   //     fromTable: edge.source,
//   //     fromColumn: edge.data?.fk || "id",
//   //     toTable: edge.target,
//   //     toColumn: "id",
//   //     type: edge.label || "many-to-one"
//   //   }));

//   //   onSchemaChange({ ...schema, relations: newRelations });
//   //   alert("Changes successfully applied to Code View!");
//   // };
  


//   return (
//     /* This outer div allows the scrollbars to appear from the Editor.jsx wrapper */
//     <div className="canvas-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//         // These settings improve the "scrollable" feel
//         zoomOnScroll={true} 
//         panOnScroll={false} 
//         panOnDrag={true}
//       >
//         <Background color="#334" variant="dots" />
//         <Controls />
//         {/* MiniMap helps navigate when tables are off-screen */}
//         <MiniMap 
//           nodeColor="#38bdf8" 
//           maskColor="rgba(15, 23, 42, 0.8)" 
//           style={{ background: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}
//         />
//       </ReactFlow>

//       <button 
//         onClick={handleApply}
//         style={applyBtnStyle}
//       >
//         💾 Apply Changes to Code
//       </button>

//       {showModal && (
//         <div style={modalOverlayStyle}>
//           <div style={modalContentStyle}>
//             <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Configure Relationship</h3>
//             <p style={{ fontSize: '14px', color: '#94a3b8' }}>
//               Connecting <b>{pendingConnection?.source}</b> to <b>{pendingConnection?.target}</b>
//             </p>
            
//             <label style={labelStyle}>Relationship Type:</label>
//             <select 
//               value={relConfig.type} 
//               onChange={e => setRelConfig({...relConfig, type: e.target.value})}
//               style={inputStyle}
//             >
//               <option value="many-to-one">Many-to-One (N:1)</option>
//               <option value="one-to-many">One-to-Many (1:N)</option>
//               <option value="one-to-one">One-to-One (1:1)</option>
//             </select>

//             <label style={labelStyle}>Select Foreign Key (from {pendingConnection?.source}):</label>
//             <select 
//               value={relConfig.fk} 
//               onChange={e => setRelConfig({...relConfig, fk: e.target.value})}
//               style={inputStyle}
//             >
//               {schema.tables.find(t => t.name === pendingConnection?.source)?.columns.map(col => (
//                 <option key={col.name} value={col.name}>{col.name}</option>
//               ))}
//             </select>

//             <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
//               <button onClick={confirmConnection} style={btnConfirm}>Confirm Connection</button>
//               <button onClick={() => setShowModal(false)} style={btnCancel}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // --- STYLES (Keep existing styles) ---
// const applyBtnStyle = {
//   position: 'absolute', bottom: 20, right: 20, zIndex: 10,
//   padding: '12px 20px', background: '#10b981', color: '#fff',
//   border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
// };

// const modalOverlayStyle = { 
//   position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
//   background: 'rgba(0,0,0,0.75)', display: 'flex', justifyContent: 'center', 
//   alignItems: 'center', zIndex: 1000 
// };

// const modalContentStyle = { 
//   background: '#1e293b', padding: '25px', borderRadius: '12px', 
//   width: '350px', color: 'white', border: '1px solid #334155' 
// };

// const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '5px', color: '#94a3b8' };

// const inputStyle = { 
//   width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', 
//   background: '#0f172a', color: 'white', border: '1px solid #334155' 
// };

// const btnConfirm = { 
//   flex: 2, padding: '10px', background: '#3b82f6', color: 'white', 
//   border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' 
// };

// const btnCancel = { 
//   flex: 1, padding: '10px', background: '#475569', color: 'white', 
//   border: 'none', borderRadius: '6px', cursor: 'pointer' 
// };









import React, { useCallback, useState, useMemo, useEffect } from 'react';
import ReactFlow, { 
  addEdge, 
  applyEdgeChanges, 
  applyNodeChanges, 
  Background, 
  Controls,
  MiniMap 
} from 'reactflow';
import 'reactflow/dist/style.css';
import TableNode from "./TableNode";
import { schemaToReactFlow } from "../../utils/schemaToERD";

const nodeTypes = { tableNode: TableNode };

export default function ERDCanvas({ schema, onSchemaChange }) {
  // 1. Transform initial schema into nodes and edges
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => schemaToReactFlow(schema), [schema]);

  // 2. Local state for the interactive diagram
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // 3. Modal State for Relationship Configuration
  const [showModal, setShowModal] = useState(false);
  const [pendingConnection, setPendingConnection] = useState(null);
  const [relConfig, setRelConfig] = useState({ type: "many-to-one", fk: "" });

  // Sync internal state when AI generates a new schema
  // useEffect(() => {
  //   setNodes(initialNodes);
  //   setEdges(initialEdges);
  // }, [initialNodes, initialEdges]);
  // Inside ERDCanvas.jsx
useEffect(() => {
  if (schema) {
    const { nodes: newNodes, edges: newEdges } = schemaToReactFlow(schema);
    setNodes(newNodes);
    setEdges(newEdges);
    
    
  }
}, [schema]); // This MUST trigger when Editor.jsx calls setSchema

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Triggered when a connection is dragged between handles
  const onConnect = useCallback((params) => {
    setPendingConnection(params);
    // Auto-select the first column of the source table as the default FK
    const sourceTable = schema.tables.find(t => t.name === params.source);
    if (sourceTable && sourceTable.columns.length > 0) {
      setRelConfig({ type: "many-to-one", fk: sourceTable.columns[0].name });
    }
    setShowModal(true);
  }, [schema.tables]);

  // Finalize edge creation after Modal confirmation
  const confirmConnection = () => {
    const newEdge = {
      ...pendingConnection,
      id: `e-${pendingConnection.source}-${pendingConnection.target}-${Date.now()}`,
      label: relConfig.type,
      type: 'smoothstep',
      animated: true,
      markerEnd: { type: 'arrowclosed', color: '#38bdf8' },
      data: { fk: relConfig.fk } // CRITICAL: Store the FK in edge data
    };
    setEdges((eds) => addEdge(newEdge, eds));
    setShowModal(false);
  };

  /**
   * APPLY CHANGES LOGIC
   * Maps current visual edges back to the relation format the SQL/Code generator expects.
   */
  const handleApply = () => {
    const newRelations = edges.map(edge => ({
      fromTable: edge.source,
      // Retrieve the Foreign Key stored in the edge data from the modal
      fromColumn: edge.data?.fk || "id", 
      toTable: edge.target,
      toColumn: "id", // Assuming target is usually the Primary Key
      type: edge.label || "many-to-one"
    }));

    // CRITICAL: Push updated state back to Editor.jsx
    onSchemaChange({ 
      ...schema, 
      relations: newRelations 
    });

    alert("✅ Changes successfully applied to Code View!");
  };

  return (
    <div className="canvas-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        zoomOnScroll={true} 
        panOnScroll={false} 
        panOnDrag={true}
      >
        <Background color="#334" variant="dots" />
        <Controls />
        <MiniMap 
          nodeColor="#38bdf8" 
          maskColor="rgba(15, 23, 42, 0.8)" 
          style={{ background: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}
        />
      </ReactFlow>

      {/* Persistent 'Apply' Button */}
      <button 
        onClick={handleApply}
        style={applyBtnStyle}
      >
        💾 Apply Changes to Code
      </button>

      {/* Relationship Dialogue Box */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Configure Relationship</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              Linking <b>{pendingConnection?.source}</b> to <b>{pendingConnection?.target}</b>
            </p>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Relationship Type:</label>
              <select 
                value={relConfig.type} 
                onChange={e => setRelConfig({...relConfig, type: e.target.value})}
                style={inputStyle}
              >
                <option value="many-to-one">Many-to-One (N:1)</option>
                <option value="one-to-many">One-to-Many (1:N)</option>
                <option value="one-to-one">One-to-One (1:1)</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Foreign Key (from {pendingConnection?.source}):</label>
              <select 
                value={relConfig.fk} 
                onChange={e => setRelConfig({...relConfig, fk: e.target.value})}
                style={inputStyle}
              >
                {schema.tables.find(t => t.name === pendingConnection?.source)?.columns.map(col => (
                  <option key={col.name} value={col.name}>{col.name}</option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              <button onClick={confirmConnection} style={btnConfirm}>Confirm</button>
              <button onClick={() => setShowModal(false)} style={btnCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- STYLING ---
const applyBtnStyle = {
  position: 'absolute', bottom: 20, right: 20, zIndex: 10,
  padding: '12px 20px', background: '#10b981', color: '#fff',
  border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
};

const modalOverlayStyle = { 
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
  background: 'rgba(0,0,0,0.75)', display: 'flex', justifyContent: 'center', 
  alignItems: 'center', zIndex: 1000 
};

const modalContentStyle = { 
  background: '#1e293b', padding: '25px', borderRadius: '12px', 
  width: '350px', color: 'white', border: '1px solid #334155',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
};

const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '5px', color: '#94a3b8' };

const inputStyle = { 
  width: '100%', padding: '10px', borderRadius: '6px', 
  background: '#0f172a', color: 'white', border: '1px solid #334155' 
};

const btnConfirm = { 
  flex: 2, padding: '10px', background: '#3b82f6', color: 'white', 
  border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' 
};

const btnCancel = { 
  flex: 1, padding: '10px', background: '#475569', color: 'white', 
  border: 'none', borderRadius: '6px', cursor: 'pointer' 
};