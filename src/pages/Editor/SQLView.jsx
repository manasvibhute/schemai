// import React from 'react';

// const SQLView = ({ schema, language }) => {
//   if (!schema) return <div className="text-slate-400">No schema yet.</div>;

//   const renderCode = () => {
//     switch (language) {
//       case 'postgres':
//         return `-- PostgreSQL\n${schema.entities.map(e => `CREATE TABLE ${e.name} (...);`).join('\n')}`;
//       case 'prisma':
//         return `// Prisma schema\n${schema.entities.map(e => `model ${e.name} {...}`).join('\n')}`;
//       case 'mongodb':
//         return `// MongoDB Collections\n${schema.entities.map(e => `db.createCollection("${e.name}")`).join('\n')}`;
//       default:
//         return '';
//     }
//   };

//   return <pre className="text-xs overflow-auto text-slate-300">{renderCode()}</pre>;
// };

// export default SQLView;










// import React, { useMemo } from 'react';
// import { generateSQLFromSchema } from '../../utils/api';

// const SQLView = ({ schema, language }) => {
//   const sql = useMemo(() => {
//     if (!schema) return '-- No schema generated yet';
//     return generateSQLFromSchema(schema, language);
//   }, [schema, language]);

//   return (
//     <pre className="flex-1 bg-black/40 rounded-lg p-4 text-sm text-green-400 overflow-auto font-mono">
//       {sql}
//     </pre>
//   );
// };

// export default SQLView;







// import React, { useMemo } from "react";
// import { generateSQLFromSchema } from "../../utils/api";
// import { generateSQL } from "../../utils/api";

// /**
//  * SQLView
//  * ----------
//  * - Live SQL generation from schema JSON
//  * - Supports multiple SQL dialects
//  * - Automatically updates when ERD / TableEditor changes
//  * - Schema is treated as single source of truth
//  */
// const SQLView = ({ schema, language = "postgres" }) => {
//   const sql = useMemo(() => {
//     if (!schema || !schema.tables || schema.tables.length === 0) {
//       return "-- No schema generated yet";
//     }

//     try {
//       return generateSQLFromSchema(schema, language);
//     } catch (err) {
//       console.error("SQL generation error:", err);
//       return "-- Error generating SQL";
//     }
//   }, [schema, language]);

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="text-xs text-gray-400 mb-2">
//         Generated SQL ({language.toUpperCase()})
//       </div>

//       {/* SQL Output */}
//       <pre className="flex-1 bg-black/50 rounded-lg p-4 text-sm text-green-400 overflow-auto font-mono whitespace-pre-wrap">
//         {sql}
//       </pre>
//     </div>
//   );
// };

// export default SQLView;









// import React, { useMemo } from "react";
// import { generateSQL } from "../../utils/api";

// /**
//  * SQLView
//  * ----------
//  * - Live SQL generation from schema JSON
//  * - Supports multiple SQL dialects
//  * - Automatically updates when ERD / TableEditor changes
//  * - Schema is treated as single source of truth
//  */
// const SQLView = ({ schema, language = "postgres" }) => {
//   const sql = useMemo(() => {
//     if (!schema || !schema.tables || schema.tables.length === 0) {
//       return "-- No schema generated yet";
//     }

//     try {
//       return generateSQL(schema, language);
//     } catch (err) {
//       console.error("SQL generation error:", err);
//       return "-- Error generating SQL";
//     }
//   }, [schema, language]);

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="text-xs text-gray-400 mb-2">
//         Generated SQL ({language.toUpperCase()})
//       </div>

//       {/* SQL Output */}
//       <pre className="flex-1 bg-black/50 rounded-lg p-4 text-sm text-green-400 overflow-auto font-mono whitespace-pre-wrap">
//         {sql}
//       </pre>
//     </div>
//   );
// };

// export default SQLView;











import React from "react";

/**
 * SQLView
 * ----------
 * Displays generated SQL code from schema + dialect.
 */
const SQLView = ({ sql }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-xs text-gray-400 mb-2">Generated SQL</div>
      <pre className="flex-1 bg-black/50 rounded-lg p-4 text-sm text-green-400 overflow-auto font-mono whitespace-pre-wrap">
        {sql}
      </pre>
    </div>
  );
};

export default SQLView;
