// export default function TableNode({ data }) {
//   return (
//     <div className="bg-white text-black rounded-md shadow-md min-w-[200px]">
//       <div className="font-bold bg-gray-200 px-2 py-1 border-b">
//         {data.name}
//       </div>

//       <div className="px-2 py-1 text-sm">
//         {data.columns.map((col) => (
//           <div key={col.name} className="flex gap-1">
//             {col.pk && <span className="font-bold">PK</span>}
//             <span>{col.name}</span>
//             <span className="text-gray-500">({col.type})</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









// import { Handle, Position } from '@xyflow/react';

// export default function TableNode({ data }) {
//   return (
//     <div className="table-node-container">
//       {/* Target handle for incoming relationships (e.g., Foreign Key target) */}
//       <Handle type="target" position={Position.Left} id="target" />
      
//       <div className="table-header">{data.name}</div>
//       <div className="table-body">
//         {data.columns.map((col) => (
//           <div key={col.name} className="table-row">
//             <span>{col.name} {col.pk ? '🔑' : ''}</span>
//             <span className="col-type">{col.type}</span>
//           </div>
//         ))}
//       </div>

//       {/* Source handle for outgoing relationships (e.g., Foreign Key source) */}
//       <Handle type="source" position={Position.Right} id="source" />
//     </div>
//   );
// } 







import React from "react";
import { Handle, Position } from "reactflow";

export default function TableNode({ data }) {
  // Safety check: extract columns safely
  // Depending on your schemaToERD.js, it might be data.table.columns or data.columns
  const table = data?.table || {};
  const columns = table?.columns || data?.columns || [];

  return (
    <div style={{ 
      background: '#1e293b', 
      color: '#fff', 
      border: '1px solid #38bdf8', 
      borderRadius: '8px', 
      minWidth: '180px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      position: 'relative'
    }}>
      {/* Target Handle: Connections coming IN */}
      <Handle type="target" position={Position.Left} style={{ background: '#38bdf8' }} />
      
      <div style={{ 
        padding: '8px', 
        borderBottom: '1px solid #334155', 
        fontWeight: 'bold', 
        textAlign: 'center',
        background: '#0f172a',
        borderRadius: '8px 8px 0 0'
      }}>
        {table?.name || data?.name || "Unknown Table"}
      </div>

      <div style={{ padding: '8px' }}>
        {/* Use optional chaining ?. to prevent the 'map' error */}
        {columns.length > 0 ? (
          columns.map((col, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
              <span>{col?.name} {col?.pk ? '🔑' : ''}</span>
              <span style={{ color: '#94a3b8' }}>{col?.type}</span>
            </div>
          ))
        ) : (
          <div style={{ fontSize: '0.7rem', color: '#666' }}>No columns defined</div>
        )}
      </div>

      {/* Source Handle: Connections going OUT */}
      <Handle type="source" position={Position.Right} style={{ background: '#38bdf8' }} />
    </div>
  );
}