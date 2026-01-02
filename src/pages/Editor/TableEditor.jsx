// import React, { useState } from 'react';

// const TableEditor = ({ node, onSave, onClose }) => {
//   const [columns, setColumns] = useState(node.data.columns);

//   const updateColumn = (i, key, value) => {
//     const updated = [...columns];
//     updated[i][key] = value;
//     setColumns(updated);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-zinc-900 p-6 rounded-xl w-96">
//         <h2 className="text-white font-semibold mb-4">
//           Edit {node.data.name}
//         </h2>

//         {columns.map((col, i) => (
//           <div key={i} className="flex gap-2 mb-2">
//             <input
//               value={col.name}
//               onChange={e => updateColumn(i, 'name', e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//             />
//             <input
//               value={col.type}
//               onChange={e => updateColumn(i, 'type', e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//             />
//           </div>
//         ))}

//         <button
//           onClick={() => onSave(columns)}
//           className="mt-4 w-full bg-violet-600 py-2 rounded text-white"
//         >
//           Save
//         </button>

//         <button
//           onClick={onClose}
//           className="mt-2 w-full text-gray-400"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableEditor;













// import React, { useState, useEffect } from "react";

// const TableEditor = ({ node, onSave, onClose }) => {
//   // Defensive: ensure node and node.data exist
//   const initialColumns =
//     node && node.data && Array.isArray(node.data.columns)
//       ? node.data.columns
//       : [];

//   const [columns, setColumns] = useState(initialColumns);
//   const [tableName, setTableName] = useState(node?.data?.name || "Untitled");

//   // Keep state in sync if node changes
//   useEffect(() => {
//     if (node && node.data) {
//       setColumns(Array.isArray(node.data.columns) ? node.data.columns : []);
//       setTableName(node.data.name || "Untitled");
//     }
//   }, [node]);

//   const updateColumn = (i, key, value) => {
//     setColumns((prev) => {
//       const updated = [...prev];
//       if (updated[i]) {
//         updated[i] = { ...updated[i], [key]: value };
//       }
//       return updated;
//     });
//   };

//   const handleSave = () => {
//     if (typeof onSave === "function") {
//       onSave(columns);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-zinc-900 p-6 rounded-xl w-96">
//         <h2 className="text-white font-semibold mb-4">
//           Edit {tableName}
//         </h2>

//         {columns.length === 0 && (
//           <div className="text-gray-400 text-sm mb-2">
//             No columns defined yet.
//           </div>
//         )}

//         {columns.map((col, i) => (
//           <div key={i} className="flex gap-2 mb-2">
//             <input
//               value={col.name || ""}
//               onChange={(e) => updateColumn(i, "name", e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//               placeholder="Column name"
//             />
//             <input
//               value={col.type || ""}
//               onChange={(e) => updateColumn(i, "type", e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//               placeholder="Column type"
//             />
//           </div>
//         ))}

//         <button
//           onClick={handleSave}
//           className="mt-4 w-full bg-violet-600 py-2 rounded text-white"
//         >
//           Save
//         </button>

//         <button
//           onClick={onClose}
//           className="mt-2 w-full text-gray-400"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableEditor;













// import React, { useState, useEffect } from "react";

// const TableEditor = ({ node, onSave, onClose }) => {
//   // Defensive: ensure node and node.data exist
//   const initialColumns =
//     node && node.data && Array.isArray(node.data.columns)
//       ? node.data.columns
//       : [];

//   const [columns, setColumns] = useState(initialColumns);
//   const [tableName, setTableName] = useState(node?.data?.name || "Untitled");

//   // Keep state in sync if node changes
//   useEffect(() => {
//     if (node && node.data) {
//       setColumns(Array.isArray(node.data.columns) ? node.data.columns : []);
//       setTableName(node.data.name || "Untitled");
//     }
//   }, [node]);

//   const updateColumn = (i, key, value) => {
//     setColumns((prev) => {
//       const updated = [...prev];
//       if (updated[i]) {
//         updated[i] = { ...updated[i], [key]: value };
//       }
//       return updated;
//     });
//   };

//   const addColumn = () => {
//     setColumns((prev) => [
//       ...prev,
//       {
//         name: "",
//         type: "varchar(255)",
//         pk: false,
//         fk: false,
//         unique: false,
//         nullable: false,
//       },
//     ]);
//   };

//   const handleSave = () => {
//     if (typeof onSave === "function") {
//       onSave(columns);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-zinc-900 p-6 rounded-xl w-96">
//         <h2 className="text-white font-semibold mb-4">
//           Edit {tableName}
//         </h2>

//         {columns.length === 0 && (
//           <div className="text-gray-400 text-sm mb-2">
//             No columns defined yet.
//           </div>
//         )}

//         {columns.map((col, i) => (
//           <div key={i} className="flex gap-2 mb-2">
//             <input
//               value={col.name || ""}
//               onChange={(e) => updateColumn(i, "name", e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//               placeholder="Column name"
//             />
//             <input
//               value={col.type || ""}
//               onChange={(e) => updateColumn(i, "type", e.target.value)}
//               className="flex-1 bg-black p-2 text-white rounded"
//               placeholder="Column type"
//             />
//           </div>
//         ))}

//         <button
//           onClick={addColumn}
//           className="w-full bg-gray-700 py-2 rounded text-white mb-2"
//         >
//           + Add Column
//         </button>

//         <button
//           onClick={handleSave}
//           className="w-full bg-violet-600 py-2 rounded text-white"
//         >
//           Save
//         </button>

//         <button
//           onClick={onClose}
//           className="mt-2 w-full text-gray-400"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableEditor;













// import React, { useState, useEffect } from "react";

// /**
//  * TableEditor
//  * - Edits a table's columns defensively.
//  * - Calls onSave(updatedColumns, tableName) and onClose() when done.
//  * - Does not manage visibility itself; parent controls visibility/modal open.
//  */
// const TableEditor = ({ node, onSave, onClose }) => {
//   // Defensive hydrate
//   const initialColumns =
//     node?.data?.columns && Array.isArray(node.data.columns)
//       ? node.data.columns
//       : [];

//   const [columns, setColumns] = useState(initialColumns);
//   const [tableName, setTableName] = useState(node?.data?.name || "Untitled");
//   const [saving, setSaving] = useState(false);

//   // Sync when node changes
//   useEffect(() => {
//     if (node?.data) {
//       setColumns(Array.isArray(node.data.columns) ? node.data.columns : []);
//       setTableName(node.data.name || "Untitled");
//     }
//   }, [node]);

//   const updateColumn = (i, key, value) => {
//     setColumns((prev) => {
//       const next = [...prev];
//       if (next[i]) next[i] = { ...next[i], [key]: value };
//       return next;
//     });
//   };

//   const addColumn = () => {
//     setColumns((prev) => [
//       ...prev,
//       {
//         name: "",
//         type: "varchar(255)",
//         pk: false,
//         fk: false,
//         unique: false,
//         nullable: false,
//       },
//     ]);
//   };

//   const removeColumn = (i) => {
//     setColumns((prev) => prev.filter((_, idx) => idx !== i));
//   };

//   const handleSave = async () => {
//     if (typeof onSave !== "function") return;
//     setSaving(true);
//     try {
//       await onSave(columns, tableName);
//       if (typeof onClose === "function") onClose();
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     if (typeof onClose === "function") onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-zinc-900 p-6 rounded-xl w-[520px]">
//         <h2 className="text-white font-semibold mb-4">Edit {tableName}</h2>

//         <div className="mb-3">
//           <label className="text-gray-400 text-xs block mb-1">Table name</label>
//           <input
//             value={tableName}
//             onChange={(e) => setTableName(e.target.value || "Untitled")}
//             className="w-full bg-black p-2 text-white rounded"
//             placeholder="Table name"
//           />
//         </div>

//         {columns.length === 0 && (
//           <div className="text-gray-400 text-sm mb-2">
//             No columns defined yet.
//           </div>
//         )}

//         <div className="space-y-2 max-h-64 overflow-auto">
//           {columns.map((col, i) => (
//             <div key={i} className="grid grid-cols-12 gap-2 items-center">
//               <input
//                 value={col.name || ""}
//                 onChange={(e) => updateColumn(i, "name", e.target.value)}
//                 className="col-span-3 bg-black p-2 text-white rounded"
//                 placeholder="Column name"
//               />
//               <input
//                 value={col.type || ""}
//                 onChange={(e) => updateColumn(i, "type", e.target.value)}
//                 className="col-span-3 bg-black p-2 text-white rounded"
//                 placeholder="Column type (e.g. uuid, varchar(255), integer)"
//               />

//               {/* Flags */}
//               <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={!!col.pk}
//                   onChange={(e) => updateColumn(i, "pk", e.target.checked)}
//                 />
//                 PK
//               </label>
//               <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={!!col.fk}
//                   onChange={(e) => updateColumn(i, "fk", e.target.checked)}
//                 />
//                 FK
//               </label>
//               <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={!!col.unique}
//                   onChange={(e) => updateColumn(i, "unique", e.target.checked)}
//                 />
//                 UQ
//               </label>
//               <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={!!col.nullable}
//                   onChange={(e) => updateColumn(i, "nullable", e.target.checked)}
//                 />
//                 NULL
//               </label>

//               <button
//                 type="button"
//                 onClick={() => removeColumn(i)}
//                 className="col-span-1 bg-red-700 text-white rounded px-2 py-2 text-xs"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-2 mt-3">
//           <button
//             type="button"
//             onClick={addColumn}
//             className="flex-1 bg-gray-700 py-2 rounded text-white"
//           >
//             + Add Column
//           </button>
//           <button
//             type="button"
//             onClick={handleSave}
//             disabled={saving}
//             className="flex-1 bg-violet-600 py-2 rounded text-white disabled:opacity-50"
//           >
//             {saving ? "Saving..." : "Save"}
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="flex-1 text-gray-300 border border-gray-600 rounded py-2"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableEditor;













import React, { useState, useEffect } from "react";

/**
 * TableEditor
 * -----------
 * Modal editor for editing a single table's columns.
 * Supports adding/removing columns, editing names/types, and Save/Cancel.
 */
const TableEditor = ({ node, onSave, onClose }) => {
  // Defensive: ensure node and node.data exist
  const initialColumns = node?.data?.columns || [];
  const [columns, setColumns] = useState(initialColumns);
  const [tableName, setTableName] = useState(node?.data?.name || "Untitled");

  // Sync state when node changes
  useEffect(() => {
    setColumns(node?.data?.columns || []);
    setTableName(node?.data?.name || "Untitled");
  }, [node]);

  const updateColumn = (i, key, value) => {
    setColumns((prev) => {
      const next = [...prev];
      if (next[i]) {
        next[i] = { ...next[i], [key]: value };
      }
      return next;
    });
  };

  const addColumn = () => {
    setColumns((prev) => [
      ...prev,
      { name: "", type: "varchar(255)", pk: false, fk: false, unique: false, nullable: false },
    ]);
  };

  const removeColumn = (i) => {
    setColumns((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSave = () => {
    if (typeof onSave === "function") {
      onSave(columns, tableName);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-[520px]">
        <h2 className="text-white font-semibold mb-4">Edit {tableName}</h2>

        <div className="mb-3">
          <label className="text-gray-400 text-xs block mb-1">Table name</label>
          <input
            value={tableName}
            onChange={(e) => setTableName(e.target.value || "Untitled")}
            className="w-full bg-black p-2 text-white rounded"
            placeholder="Table name"
          />
        </div>

        {columns.length === 0 && (
          <div className="text-gray-400 text-sm mb-2">No columns defined yet.</div>
        )}

        <div className="space-y-2 max-h-64 overflow-auto">
          {columns.map((col, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-center">
              <input
                value={col.name || ""}
                onChange={(e) => updateColumn(i, "name", e.target.value)}
                className="col-span-3 bg-black p-2 text-white rounded"
                placeholder="Column name"
              />
              <input
                value={col.type || ""}
                onChange={(e) => updateColumn(i, "type", e.target.value)}
                className="col-span-3 bg-black p-2 text-white rounded"
                placeholder="Column type"
              />

              {/* Flags */}
              <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={!!col.pk}
                  onChange={(e) => updateColumn(i, "pk", e.target.checked)}
                />
                PK
              </label>
              <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={!!col.fk}
                  onChange={(e) => updateColumn(i, "fk", e.target.checked)}
                />
                FK
              </label>
              <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={!!col.unique}
                  onChange={(e) => updateColumn(i, "unique", e.target.checked)}
                />
                UQ
              </label>
              <label className="col-span-1 text-xs text-gray-300 flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={!!col.nullable}
                  onChange={(e) => updateColumn(i, "nullable", e.target.checked)}
                />
                NULL
              </label>

              <button
                type="button"
                onClick={() => removeColumn(i)}
                className="col-span-1 bg-red-700 text-white rounded px-2 py-2 text-xs"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-3">
          <button
            type="button"
            onClick={addColumn}
            className="flex-1 bg-gray-700 py-2 rounded text-white"
          >
            + Add Column
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 bg-violet-600 py-2 rounded text-white"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 text-gray-300 border border-gray-600 rounded py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableEditor;
