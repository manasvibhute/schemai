// // src/utils/api.js

// export const generateSchema = async ({
//   prompt,
//   existingNodes = [],
//   existingEdges = [],
//   language = 'postgres'
// }) => {
//   // TEMP MOCK (so frontend works without backend)
//   // You can replace this later with real API call

//   return {
//     nodes: [
//       {
//         id: 'users',
//         type: 'table',
//         position: { x: 100, y: 100 },
//         data: {
//           name: 'users',
//           columns: [
//             { name: 'id', type: 'uuid', primary: true },
//             { name: 'email', type: 'varchar' },
//             { name: 'password', type: 'varchar' }
//           ]
//         }
//       }
//     ],
//     edges: []
//   };
// };














//// src/utils/api.js

// /**
//  * Main Schema API (mock AI behavior for now)
//  * Supports creating/updating schemas and generating SQL.
//  */

// /* ------------------------- MAIN ENTRY ------------------------- */
// export const generateSchema = async ({
//   prompt,
//   existingNodes = [],
//   existingEdges = [],
//   language = 'postgres'
// }) => {
//   console.log('Generating schema for:', prompt);

//   // Simulate AI thinking delay
//   await delay(800);

//   // If schema exists → update it
//   if (existingNodes.length > 0) {
//     return updateExistingSchema({ prompt, nodes: existingNodes, edges: existingEdges, language });
//   }

//   // Else → create new schema
//   return createNewSchema({ prompt, language });
// };

// /* ------------------------- CREATE NEW SCHEMA ------------------------- */
// const createNewSchema = ({ prompt, language }) => {
//   if (prompt.toLowerCase().includes('ecommerce')) {
//     return ecommerceSchema(language);
//   }

//   return basicUserSchema(language);
// };

// const basicUserSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar'),
//       column('password', 'varchar')
//     ])
//   ],
//   edges: []
// });

// const ecommerceSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar')
//     ]),
//     tableNode('orders', 450, 100, [
//       column('id', idType(language), true),
//       column('user_id', idType(language)),
//       column('total', 'decimal')
//     ])
//   ],
//   edges: [relationEdge('users', 'orders', '1 → many')]
// });

// /* ------------------------- UPDATE EXISTING SCHEMA ------------------------- */
// const updateExistingSchema = ({ prompt, nodes, edges, language }) => {
//   const newNodes = [...nodes];
//   const newEdges = [...edges];

//   // Example: "add products table"
//   if (prompt.toLowerCase().includes('product')) {
//     const exists = nodes.find(n => n.id === 'products');
//     if (!exists) {
//       newNodes.push(
//         tableNode('products', 100, 350, [
//           column('id', idType(language), true),
//           column('name', 'varchar'),
//           column('price', 'decimal')
//         ])
//       );
//     }
//   }

//   return { nodes: newNodes, edges: newEdges };
// };

// /* ------------------------- SQL GENERATION ------------------------- */
// export const generateSQLFromSchema = (schema, language = 'postgres') => {
//   if (!schema?.nodes) return '';

//   return schema.nodes
//     .map(node => {
//       const cols = node.data.columns
//         .map(col => {
//           let line = `${col.name} ${col.type}`;
//           if (col.primary) line += ' PRIMARY KEY';
//           return line;
//         })
//         .join(',\n  ');

//       return `CREATE TABLE ${node.data.name} (\n  ${cols}\n);`;
//     })
//     .join('\n\n');
// };

// /* ------------------------- HELPERS ------------------------- */
// const tableNode = (name, x, y, columns) => ({
//   id: name,
//   type: 'default',
//   position: { x, y },
//   data: { label: formatTableLabel(name, columns), name, columns }
// });

// const relationEdge = (source, target, label) => ({
//   id: `${source}-${target}`,
//   source,
//   target,
//   label
// });

// const column = (name, type, primary = false) => ({ name, type, primary });

// const formatTableLabel = (name, columns) =>
//   `${name}\n` + columns.map(c => `• ${c.name}`).join('\n');

// const idType = (language) => (language === 'mysql' ? 'INT' : 'UUID');

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// /* ------------------------- BACKEND URL (future integration) ------------------------- */
// export const API_URL = 'http://localhost:5000/api';












// // src/utils/api.js

// /**
//  * Main Schema API (mock AI behavior for now)
//  * Supports creating/updating schemas and generating SQL.
//  */

// /* ------------------------- MAIN ENTRY ------------------------- */
// export const generateSchema = async ({
//   prompt,
//   existingNodes = [],
//   existingEdges = [],
//   language = 'postgres'
// }) => {
//   console.log('Generating schema for:', prompt);

//   // Simulate AI thinking delay
//   await delay(800);

//   // If schema exists → update it
//   if (existingNodes.length > 0) {
//     return updateExistingSchema({ prompt, nodes: existingNodes, edges: existingEdges, language });
//   }

//   // Else → create new schema
//   return createNewSchema({ prompt, language });
// };

// /* ------------------------- CREATE NEW SCHEMA ------------------------- */
// const createNewSchema = ({ prompt, language }) => {
//   if (prompt.toLowerCase().includes('ecommerce')) {
//     return ecommerceSchema(language);
//   }

//   return basicUserSchema(language);
// };

// const basicUserSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar'),
//       column('password', 'varchar')
//     ])
//   ],
//   edges: []
// });

// const ecommerceSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar')
//     ]),
//     tableNode('orders', 450, 100, [
//       column('id', idType(language), true),
//       column('user_id', idType(language)),
//       column('total', 'decimal')
//     ])
//   ],
//   edges: [relationEdge('users', 'orders', '1 → many')]
// });

// /* ------------------------- UPDATE EXISTING SCHEMA ------------------------- */
// const updateExistingSchema = ({ prompt, nodes, edges, language }) => {
//   const newNodes = [...nodes];
//   const newEdges = [...edges];

//   // Example: "add products table"
//   if (prompt.toLowerCase().includes('product')) {
//     const exists = nodes.find(n => n.id === 'products');
//     if (!exists) {
//       newNodes.push(
//         tableNode('products', 100, 350, [
//           column('id', idType(language), true),
//           column('name', 'varchar'),
//           column('price', 'decimal')
//         ])
//       );
//     }
//   }

//   return { nodes: newNodes, edges: newEdges };
// };

// /* ------------------------- SQL GENERATION ------------------------- */
// export const generateSQLFromSchema = (schema, language = 'postgres') => {
//   if (!schema?.nodes) return '';

//   return schema.nodes
//     .map(node => {
//       const cols = node.data.columns
//         .map(col => {
//           let line = `${col.name} ${col.type}`;
//           if (col.primary) line += ' PRIMARY KEY';
//           return line;
//         })
//         .join(',\n  ');

//       return `CREATE TABLE ${node.data.name} (\n  ${cols}\n);`;
//     })
//     .join('\n\n');
// };

// /* ------------------------- HELPERS ------------------------- */
// const tableNode = (name, x, y, columns) => ({
//   id: name,
//   type: 'default',
//   position: { x, y },
//   data: { label: formatTableLabel(name, columns), name, columns }
// });

// const relationEdge = (source, target, label) => ({
//   id: `${source}-${target}`,
//   source,
//   target,
//   label
// });

// const column = (name, type, primary = false) => ({ name, type, primary });

// const formatTableLabel = (name, columns) =>
//   `${name}\n` + columns.map(c => `• ${c.name}`).join('\n');

// const idType = (language) => (language === 'mysql' ? 'INT' : 'UUID');

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// /* ------------------------- BACKEND URL (future integration) ------------------------- */
// export const API_URL = 'http://localhost:5000/api';















////src/utils/api.js
// console.log('Generating schema for:', prompt);

// export const generateSchema = async ({
//   prompt,
//   existingNodes = [],
//   existingEdges = [],
//   language = 'postgres'
// }) => {
//   await delay(500); // simulate API

//   // NEW prompt → create new schema
//   if (!existingNodes.length) {
//     if (prompt.toLowerCase().includes('ecommerce')) {
//       return ecommerceSchema(language);
//     }
//     return basicUserSchema(language);
//   }

//   // EXISTING schema → update
//   const newNodes = [...existingNodes];
//   const newEdges = [...existingEdges];

//   if (prompt.toLowerCase().includes('product')) {
//     const exists = newNodes.find(n => n.id === 'products');
//     if (!exists) {
//       newNodes.push(
//         tableNode('products', 300, 200, [
//           column('id', idType(language), true),
//           column('name', 'varchar'),
//           column('price', 'decimal')
//         ])
//       );
//     }
//   }

//   return { nodes: newNodes, edges: newEdges };
// };

// // ---------------- Helpers ----------------

// const tableNode = (name, x, y, columns) => ({
//   id: name,
//   type: 'default',
//   position: { x, y },
//   data: { name, columns }
// });

// const column = (name, type, primary = false) => ({ name, type, primary });

// const idType = (language) => (language === 'mysql' ? 'INT' : 'UUID');

// const basicUserSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar'),
//       column('password', 'varchar')
//     ])
//   ],
//   edges: []
// });

// const ecommerceSchema = (language) => ({
//   nodes: [
//     tableNode('users', 100, 100, [
//       column('id', idType(language), true),
//       column('email', 'varchar')
//     ]),
//     tableNode('orders', 300, 100, [
//       column('id', idType(language), true),
//       column('user_id', idType(language)),
//       column('total', 'decimal')
//     ])
//   ],
//   edges: [{ id: 'users-orders', source: 'users', target: 'orders', label: '1 → many' }]
// });

// // ---------------- SQL ----------------

// export function generateSQLFromSchema(schema, language = "postgres") {
//   // 🛑 SAFETY CHECKS (VERY IMPORTANT)
//   if (!schema || !Array.isArray(schema.tables)) {
//     return "-- No schema generated yet";
//   }

//   let sql = "";

//   schema.tables.forEach((table) => {
//     if (!Array.isArray(table.columns)) return;

//     sql += `CREATE TABLE ${table.name} (\n`;

//     const columnDefs = [];

//     table.columns.forEach((col) => {
//       let line = `  ${col.name} ${col.type || "VARCHAR"}`;
//       if (col.pk) line += " PRIMARY KEY";
//       if (col.unique) line += " UNIQUE";
//       columnDefs.push(line);
//     });

//     // ✅ FOREIGN KEYS (SAFE)
//     if (Array.isArray(schema.relations)) {
//       schema.relations
//         .filter((r) => r.fromTable === table.name)
//         .forEach((r) => {
//           columnDefs.push(
//             `  FOREIGN KEY (${r.fromColumn}) REFERENCES ${r.toTable}(${r.toColumn})`
//           );
//         });
//     }

//     sql += columnDefs.join(",\n");
//     sql += `\n);\n\n`;
//   });

//   return sql || "-- No schema generated yet";
// }


// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// const API_URL = 'http://localhost:5000/api';  // adjust if needed








// // utils/api.js

// console.log("API loaded");

// // ---------------- PUBLIC API ----------------

// export const generateSchema = async ({
//   prompt,
//   language = "postgres"
// }) => {
//   console.log("Generating schema for:", prompt);

//   await delay(500);

//   if (!prompt || typeof prompt !== "string") {
//     throw new Error("Invalid prompt");
//   }

//   const text = prompt.toLowerCase();

//   if (text.includes("ecommerce")) {
//     return ecommerceSchema(language);
//   }

//   return basicUserSchema(language);
// };

// // ---------------- SCHEMA DEFINITIONS ----------------

// const basicUserSchema = (language) => ({
//   tables: [
//     {
//       name: "users",
//       columns: [
//         { name: "id", type: idType(language), pk: true },
//         { name: "email", type: "VARCHAR", unique: true },
//         { name: "password", type: "VARCHAR" }
//       ]
//     }
//   ],
//   relations: []
// });

// const ecommerceSchema = (language) => ({
//   tables: [
//     {
//       name: "users",
//       columns: [
//         { name: "id", type: idType(language), pk: true },
//         { name: "email", type: "VARCHAR", unique: true }
//       ]
//     },
//     {
//       name: "orders",
//       columns: [
//         { name: "id", type: idType(language), pk: true },
//         { name: "user_id", type: idType(language) },
//         { name: "total", type: "DECIMAL" }
//       ]
//     }
//   ],
//   relations: [
//     {
//       fromTable: "orders",
//       fromColumn: "user_id",
//       toTable: "users",
//       toColumn: "id",
//       type: "many-to-one"
//     }
//   ]
// });

// // ---------------- SQL GENERATOR ----------------

// export function generateSQLFromSchema(schema, language = "postgres") {
//   if (!schema || !Array.isArray(schema.tables)) {
//     return "-- No schema generated yet";
//   }

//   let sql = "";

//   schema.tables.forEach((table) => {
//     sql += `CREATE TABLE ${table.name} (\n`;

//     const lines = [];

//     table.columns.forEach((col) => {
//       let line = `  ${col.name} ${col.type}`;
//       if (col.pk) line += " PRIMARY KEY";
//       if (col.unique) line += " UNIQUE";
//       lines.push(line);
//     });

//     // Foreign keys
//     if (Array.isArray(schema.relations)) {
//       schema.relations
//         .filter((r) => r.fromTable === table.name)
//         .forEach((r) => {
//           lines.push(
//             `  FOREIGN KEY (${r.fromColumn}) REFERENCES ${r.toTable}(${r.toColumn})`
//           );
//         });
//     }

//     sql += lines.join(",\n");
//     sql += "\n);\n\n";
//   });

//   return sql;
// }

// // ---------------- HELPERS ----------------

// const idType = (language) => (language === "mysql" ? "INT" : "UUID");

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));













// // src/utils/api.js
// // Production-grade, defensive schema + SQL generation utilities.
// // - Ensures prompt is a string
// // - Ensures schema.tables is always defined
// // - SQL generator is dialect-aware and never crashes

// const DIALECTS = {
//   postgres: "postgres",
//   mysql: "mysql",
// };

// const DEFAULT_SCHEMA = {
//   tables: [],
//   relations: [],
// };

// // Utility: safe string
// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   try {
//     return String(input).trim();
//   } catch {
//     return "";
//   }
// }

// // Utility: assert unified schema shape defensively
// function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];
//   // Ensure each table has columns array
//   const normTables = tables.map((t) => {
//     const name = toSafeString(t?.name);
//     const columns = Array.isArray(t?.columns) ? t.columns : [];
//     const normColumns = columns.map((c) => ({
//       name: toSafeString(c?.name),
//       type: toSafeString(c?.type) || "varchar(255)",
//       pk: Boolean(c?.pk),
//       fk: Boolean(c?.fk),
//       unique: Boolean(c?.unique),
//       nullable: c?.nullable === true, // default non-null unless specified
//     }));
//     return { name, columns: normColumns };
//   });
//   // Filter out unnamed tables/columns to avoid crashes
//   const filteredTables = normTables
//     .filter((t) => t.name)
//     .map((t) => ({
//       ...t,
//       columns: t.columns.filter((c) => c.name),
//     }));

//   const normRelations = relations
//     .map((r) => ({
//       fromTable: toSafeString(r?.fromTable),
//       fromColumn: toSafeString(r?.fromColumn),
//       toTable: toSafeString(r?.toTable),
//       toColumn: toSafeString(r?.toColumn),
//       type: toSafeString(r?.type) || "many-to-one",
//     }))
//     .filter((r) => r.fromTable && r.fromColumn && r.toTable && r.toColumn);

//   return { tables: filteredTables, relations: normRelations };
// }

// // Basic type helpers
// function pgDefaultFor(type) {
//   const t = type.toLowerCase();
//   if (t.includes("uuid")) return "gen_random_uuid()";
//   if (t.includes("timestamp")) return "now()";
//   return null;
// }
// function sqlIdentifier(name, dialect) {
//   const safe = name.replace(/[^a-zA-Z0-9_]/g, "_");
//   if (dialect === DIALECTS.mysql) return `\`${safe}\``;
//   return `"${safe}"`;
// }

// // Generate SQL from unified schema
// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect =
//       dialectInput && DIALECTS[dialectInput] ? DIALECTS[dialectInput] : DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput || DEFAULT_SCHEMA);

//     // Dialect-specific bits
//     const uuidType =
//       dialect === DIALECTS.mysql ? "char(36)" : "uuid";
//     const timestampType =
//       dialect === DIALECTS.mysql ? "datetime" : "timestamp";
//     const serialHint =
//       dialect === DIALECTS.mysql ? "bigint auto_increment" : "bigserial";

//     const lines = [];

//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     // Create tables
//     for (const table of schema.tables) {
//       const tIdent = sqlIdentifier(table.name, dialect);
//       const colDefs = [];

//       for (const col of table.columns) {
//         const cIdent = sqlIdentifier(col.name, dialect);
//         // Normalize common types per dialect
//         let type = col.type || "varchar(255)";
//         const lower = type.toLowerCase();
//         if (lower === "uuid") type = uuidType;
//         if (lower === "timestamp") type = timestampType;
//         if (lower === "serial" || lower === "bigserial") type = serialHint;

//         let def = `${cIdent} ${type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";

//         // Default only when sensible for postgres uuid/timestamp
//         if (dialect === DIALECTS.postgres) {
//           const dflt = pgDefaultFor(type);
//           if (!col.pk && dflt && lower !== "bigserial" && lower !== "serial") {
//             def += ` DEFAULT ${dflt}`;
//           }
//         }

//         colDefs.push(def);
//       }

//       const create = `CREATE TABLE IF NOT EXISTS ${tIdent} (\n  ${colDefs.join(",\n  ")}\n);`;
//       lines.push(create);
//     }

//     // Foreign keys (from relations)
//     for (const rel of schema.relations) {
//       const fromT = schema.tables.find((t) => t.name === rel.fromTable);
//       const toT = schema.tables.find((t) => t.name === rel.toTable);
//       if (!fromT || !toT) continue;

//       const fkName = `${rel.fromTable}_${rel.fromColumn}_fkey`;
//       const alter = `ALTER TABLE ${sqlIdentifier(rel.fromTable, dialect)} ADD CONSTRAINT ${sqlIdentifier(
//         fkName,
//         dialect
//       )} FOREIGN KEY (${sqlIdentifier(rel.fromColumn, dialect)}) REFERENCES ${sqlIdentifier(
//         rel.toTable,
//         dialect
//       )} (${sqlIdentifier(rel.toColumn, dialect)}) ON UPDATE CASCADE ON DELETE RESTRICT;`;

//       // Ensure referenced column exists
//       const hasFromCol = fromT.columns.some((c) => c.name === rel.fromColumn);
//       const hasToCol = toT.columns.some((c) => c.name === rel.toColumn);
//       if (hasFromCol && hasToCol) {
//         lines.push(alter);
//       }
//     }

//     return lines.join("\n\n");
//   } catch (err) {
//     // Never crash: return valid empty SQL
//     return "-- SQL generation failed safely, no statements produced.";
//   }
// }

// // Simple AI-ish schema generator based on a natural language prompt.
// // In production, this would call your backend service; here we synthesize a normalized schema deterministically.
// export async function generateSchemaFromPrompt(rawPrompt) {
//   const prompt = toSafeString(rawPrompt);
//   // Always return a well-formed schema object
//   if (!prompt) {
//     return normalizeSchema(DEFAULT_SCHEMA);
//   }

//   const p = prompt.toLowerCase();

//   // Minimal rule-based generation: E-commerce example and fallback
//   // inside generateSchemaFromPrompt
// if (p.includes("e-commerce")) {
//   const schema = {
//     tables: [
//       {
//         name: "users",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//           { name: "password_hash", type: "varchar(255)", nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "created_at", type: "timestamp", nullable: false },
//         ],
//       },
//       {
//         name: "products",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "sku", type: "varchar(64)", unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "description", type: "text", nullable: true },
//           { name: "price_cents", type: "integer", nullable: false },
//           { name: "stock_qty", type: "integer", nullable: false },
//           { name: "created_at", type: "timestamp", nullable: false },
//         ],
//       },
//       {
//         name: "orders",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "user_id", type: "uuid", fk: true, nullable: false },
//           { name: "status", type: "varchar(32)", nullable: false },
//           { name: "order_date", type: "timestamp", nullable: false },
//         ],
//       },
//       {
//         name: "order_items",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "order_id", type: "uuid", fk: true, nullable: false },
//           { name: "product_id", type: "uuid", fk: true, nullable: false },
//           { name: "quantity", type: "integer", nullable: false },
//           { name: "unit_price_cents", type: "integer", nullable: false },
//         ],
//       },
//       {
//         name: "payments",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "order_id", type: "uuid", fk: true, nullable: false },
//           { name: "amount_cents", type: "integer", nullable: false },
//           { name: "method", type: "varchar(32)", nullable: false },
//           { name: "status", type: "varchar(32)", nullable: false },
//           { name: "created_at", type: "timestamp", nullable: false },
//         ],
//       },
//       {
//         name: "categories",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "product_categories",
//         columns: [
//           { name: "product_id", type: "uuid", fk: true, nullable: false },
//           { name: "category_id", type: "uuid", fk: true, nullable: false },
//         ],
//       },
//     ],
//     relations: [
//       { fromTable: "orders", fromColumn: "user_id", toTable: "users", toColumn: "id", type: "many-to-one" },
//       { fromTable: "order_items", fromColumn: "order_id", toTable: "orders", toColumn: "id", type: "many-to-one" },
//       { fromTable: "order_items", fromColumn: "product_id", toTable: "products", toColumn: "id", type: "many-to-one" },
//       { fromTable: "payments", fromColumn: "order_id", toTable: "orders", toColumn: "id", type: "one-to-one" },
//       { fromTable: "product_categories", fromColumn: "product_id", toTable: "products", toColumn: "id", type: "many-to-many" },
//       { fromTable: "product_categories", fromColumn: "category_id", toTable: "categories", toColumn: "id", type: "many-to-many" },
//     ],
//   };
//   return normalizeSchema(schema);
// }
  
//   // Fallback: single table
//   const fallback = {
//     tables: [
//       {
//         name: "entities",
//         columns: [
//           { name: "id", type: "uuid", pk: true, fk: false, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", pk: false, fk: false, unique: false, nullable: false },
//         ],
//       },
//     ],
//     relations: [],
//   };
//   return normalizeSchema(fallback);
// }












// // src/utils/api.js
// // Handles schema + SQL generation. Calls backend AI service.

// const DIALECTS = { postgres: "postgres", mysql: "mysql" };

// const DEFAULT_SCHEMA = { tables: [], relations: [] };

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// export async function generateSchemaFromPrompt(prompt) {
//   const safePrompt = toSafeString(prompt);
//   if (!safePrompt) return normalizeSchema(DEFAULT_SCHEMA);

//   // Call backend AI service
//   const res = await fetch("/api/generate-schema", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt: safePrompt }),
//   });
//   const data = await res.json();
//   return normalizeSchema(data);
// }

// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect = DIALECTS[dialectInput] || DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput);

//     const lines = [];
//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     for (const table of schema.tables) {
//       const colDefs = table.columns.map((col) => {
//         let def = `"${col.name}" ${col.type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";
//         return def;
//       });
//       lines.push(
//         `CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`
//       );
//     }

//     for (const rel of schema.relations) {
//       lines.push(
//         `ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}") ON UPDATE CASCADE ON DELETE RESTRICT;`
//       );
//     }

//     return lines.join("\n\n");
//   } catch {
//     return "-- SQL generation failed safely.";
//   }
// }











// // src/utils/api.js
// // Handles schema + SQL generation. Calls backend AI service.

// const DIALECTS = { postgres: "postgres", mysql: "mysql" };

// const DEFAULT_SCHEMA = { tables: [], relations: [] };

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// export async function generateSchemaFromPrompt(prompt) {
//   const res = await fetch("/api/schema/generate-schema", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt }),
//   });

//   if (!res.ok) throw new Error("Schema generation failed");

//   const data = await res.json();
//   return normalizeSchema(data);
// }


// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect = DIALECTS[dialectInput] || DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput);

//     const lines = [];
//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     for (const table of schema.tables) {
//       const colDefs = table.columns.map((col) => {
//         let def = `"${col.name}" ${col.type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";
//         return def;
//       });
//       lines.push(
//         `CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`
//       );
//     }

//     for (const rel of schema.relations) {
//       lines.push(
//         `ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}") ON UPDATE CASCADE ON DELETE RESTRICT;`
//       );
//     }

//     return lines.join("\n\n");
//   } catch {
//     return "-- SQL generation failed safely.";
//   }
// }











// // src/utils/api.js
// // Handles schema + SQL generation. Calls backend AI service.

// const DIALECTS = { postgres: "postgres", mysql: "mysql" };

// // Change this to match your actual backend URL
// const API_BASE_URL = "http://localhost:5000/api"; 

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// export async function generateSchemaFromPrompt(prompt) {
//   // UPDATED: Added absolute URL to reach the backend on port 5000
//   const res = await fetch(`${API_BASE_URL}/schema/generate-schema`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt }),
//   });

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.error || "Schema generation failed");
//   }

//   const data = await res.json();
//   return normalizeSchema(data);
// }

// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect = DIALECTS[dialectInput] || DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput);

//     const lines = [];
//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     for (const table of schema.tables) {
//       const colDefs = table.columns.map((col) => {
//         let def = `"${col.name}" ${col.type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";
//         return def;
//       });
//       lines.push(
//         `CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`
//       );
//     }

//     for (const rel of schema.relations) {
//       lines.push(
//         `ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}") ON UPDATE CASCADE ON DELETE RESTRICT;`
//       );
//     }

//     return lines.join("\n\n");
//   } catch {
//     return "-- SQL generation failed safely.";
//   }
// }
















// const DIALECTS = { postgres: "postgres", mysql: "mysql" };

// // 1. Ensure this points to your Node.js server port
// const API_BASE_URL = "http://localhost:5000/api"; 

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// export async function generateSchemaFromPrompt(prompt) {
//   try {
//     // 2. This URL combines with your backend routes
//     // Ensure backend server.js uses app.use("/api", schemaRoutes)
//     // And backend routes/schema.js uses router.post("/generate-schema", ...)
//     const res = await fetch(`${API_BASE_URL}/generate-schema`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     if (!res.ok) {
//       const errorData = await res.json().catch(() => ({}));
      
//       throw new Error(errorData.error || `Server responded with ${res.status}`);
//     }

//     const data = await res.json();
//     return normalizeSchema(data);
//   } catch (err) {
//     console.error("Frontend API Error:", err.message);
//     throw err; // Let the UI handle the error state
//   }
// }

// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect = DIALECTS[dialectInput] || DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput);

//     const lines = [];
//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     for (const table of schema.tables) {
//       const colDefs = table.columns.map((col) => {
//         let def = `"${col.name}" ${col.type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";
//         return def;
//       });
//       lines.push(
//         `CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`
//       );
//     }

//     for (const rel of schema.relations) {
//       lines.push(
//         `ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}") ON UPDATE CASCADE ON DELETE RESTRICT;`
//       );
//     }

//     return lines.join("\n\n");
//   } catch {
//     return "-- SQL generation failed safely.";
//   }
// }










// const DIALECTS = { postgres: "postgres", mysql: "mysql" };

// // 1. Point to your running Node.js server
// const API_BASE_URL = "http://localhost:5000/api"; 

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// /**
//  * Ensures the data from the AI matches the exact format your ERDCanvas needs.
//  */
// function normalizeSchema(schema) {
//   // If the AI returned a nested object or string, we try to find the actual table data
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// export async function generateSchemaFromPrompt(prompt) {
//   try {
//     const res = await fetch(`${API_BASE_URL}/generate-schema`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     if (!res.ok) {
//       const errorData = await res.json().catch(() => ({}));
//       throw new Error(errorData.error || `Server responded with ${res.status}`);
//     }

//     let data = await res.json();

//     // --- NEW: ROBUST JSON PARSING ---
//     // If the backend sends the AI text directly, it might be a string. 
//     // We try to parse it just in case.
//     if (typeof data === 'string') {
//         try {
//             const jsonMatch = data.match(/\{[\s\S]*\}/);
//             data = JSON.parse(jsonMatch ? jsonMatch[0] : data);
//         } catch (e) {
//             console.error("Failed to parse raw AI string", e);
//         }
//     }

//     return normalizeSchema(data);
//   } catch (err) {
//     console.error("Frontend API Error:", err.message);
//     throw err; 
//   }
// }

// export function generateSQL(schemaInput, dialectInput = DIALECTS.postgres) {
//   try {
//     const dialect = DIALECTS[dialectInput] || DIALECTS.postgres;
//     const schema = normalizeSchema(schemaInput);

//     if (schema.tables.length === 0) return "-- No tables to generate.";

//     const lines = [];
//     if (dialect === DIALECTS.postgres) {
//       lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
//     }

//     for (const table of schema.tables) {
//       const colDefs = table.columns.map((col) => {
//         let def = `"${col.name}" ${col.type}`;
//         if (col.pk) def += " PRIMARY KEY";
//         if (col.unique && !col.pk) def += " UNIQUE";
//         if (!col.nullable) def += " NOT NULL";
//         return def;
//       });
//       lines.push(
//         `CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`
//       );
//     }

//     for (const rel of schema.relations) {
//       lines.push(
//         `ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" \nFOREIGN KEY ("${rel.fromColumn}") \nREFERENCES "${rel.toTable}" ("${rel.toColumn}") \nON UPDATE CASCADE ON DELETE RESTRICT;`
//       );
//     }

//     return lines.join("\n\n");
//   } catch (error) {
//     console.error("SQL Gen Error:", error);
//     return "-- SQL generation failed safely.";
//   }
// }










// const DIALECTS = { postgres: "postgres", mysql: "mysql", mongodb: "mongodb", prisma: "prisma" };

// const API_BASE_URL = "http://localhost:5000/api"; 

// function toSafeString(input) {
//   if (typeof input === "string") return input.trim();
//   if (input == null) return "";
//   return String(input).trim();
// }

// /**
//  * The "Single Source of Truth" normalization.
//  * This handles bidirectional data—ensuring that diagram edits 
//  * stay compatible with code generation.
//  */
// export function normalizeSchema(schema) {
//   const safe = schema && typeof schema === "object" ? schema : {};
//   const tables = Array.isArray(safe.tables) ? safe.tables : [];
//   const relations = Array.isArray(safe.relations) ? safe.relations : [];

//   const normTables = tables.map((t) => ({
//     name: toSafeString(t?.name),
//     columns: Array.isArray(t?.columns)
//       ? t.columns.map((c) => ({
//           name: toSafeString(c?.name),
//           type: toSafeString(c?.type) || "varchar(255)",
//           pk: !!c?.pk,
//           fk: !!c?.fk,
//           unique: !!c?.unique,
//           nullable: !!c?.nullable,
//         }))
//       : [],
//   }));

//   return {
//     tables: normTables.filter((t) => t.name),
//     relations: relations
//       .map((r) => ({
//         fromTable: toSafeString(r?.fromTable),
//         fromColumn: toSafeString(r?.fromColumn),
//         toTable: toSafeString(r?.toTable),
//         toColumn: toSafeString(r?.toColumn),
//         type: toSafeString(r?.type) || "many-to-one",
//       }))
//       .filter((r) => r.fromTable && r.toTable),
//   };
// }

// // --- AI GENERATION ---
// export async function generateSchemaFromPrompt(prompt) {
//   try {
//     const res = await fetch(`${API_BASE_URL}/generate-schema`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     if (!res.ok) {
//       const errorData = await res.json().catch(() => ({}));
//       throw new Error(errorData.error || `Server responded with ${res.status}`);
//     }

//     let data = await res.json();
//     if (typeof data === 'string') {
//         try {
//             const jsonMatch = data.match(/\{[\s\S]*\}/);
//             data = JSON.parse(jsonMatch ? jsonMatch[0] : data);
//         } catch (e) { console.error("Parse error", e); }
//     }
//     return normalizeSchema(data);
//   } catch (err) {
//     throw err; 
//   }
// }

// // --- MULTI-CODE GENERATION ---

// /**
//  * Generates Prisma Schema File
//  */
// function generatePrismaCode(schema) {
//   let code = `datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n`;
//   code += `generator client {\n  provider = "prisma-client-js"\n}\n\n`;

//   schema.tables.forEach(table => {
//     code += `model ${table.name} {\n`;
//     table.columns.forEach(col => {
//       let type = "String"; // Default
//       if (col.type.toLowerCase().includes("int")) type = "Int";
//       if (col.type.toLowerCase().includes("bool")) type = "Boolean";
//       if (col.type.toLowerCase().includes("time")) type = "DateTime";
      
//       code += `  ${col.name} ${type}${col.pk ? " @id @default(uuid())" : ""}${col.unique && !col.pk ? " @unique" : ""}\n`;
//     });
//     code += `}\n\n`;
//   });
//   return code;
// }

// /**
//  * Generates MongoDB Mongoose Schema
//  */
// function generateMongoCode(schema) {
//   let code = `import mongoose from 'mongoose';\n\n`;
//   schema.tables.forEach(table => {
//     code += `const ${table.name}Schema = new mongoose.Schema({\n`;
//     table.columns.forEach(col => {
//       if (col.pk && col.name === 'id') return; // Mongoose adds _id automatically
//       let type = "String";
//       if (col.type.toLowerCase().includes("int")) type = "Number";
//       code += `  ${col.name}: { type: ${type}${col.unique ? ", unique: true" : ""}${!col.nullable ? ", required: true" : ""} },\n`;
//     });
//     code += `});\n\nexport const ${table.name} = mongoose.model('${table.name}', ${table.name}Schema);\n\n`;
//   });
//   return code;
// }

// /**
//  * Generates SQL (Postgres/MySQL)
//  */
// function generateSQLCode(schema, dialect) {
//   const lines = [];
//   if (dialect === "postgres") lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");

//   for (const table of schema.tables) {
//     const colDefs = table.columns.map((col) => {
//       let def = `"${col.name}" ${col.type}`;
//       if (col.pk) def += " PRIMARY KEY";
//       if (col.unique && !col.pk) def += " UNIQUE";
//       if (!col.nullable) def += " NOT NULL";
//       return def;
//     });
//     lines.push(`CREATE TABLE IF NOT EXISTS "${table.name}" (\n  ${colDefs.join(",\n  ")}\n);`);
//   }

//   for (const rel of schema.relations) {
//     lines.push(`ALTER TABLE "${rel.fromTable}" ADD CONSTRAINT "${rel.fromTable}_${rel.fromColumn}_fkey" FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}");`);
//   }
//   return lines.join("\n\n");
// }

// /**
//  * Main switch for bidirectional code generation
//  */
// export function generateSQL(schemaInput, dialectInput = "postgres") {
//   const schema = normalizeSchema(schemaInput);
//   if (schema.tables.length === 0) return "-- No tables to generate.";

//   if (dialectInput === "prisma") return generatePrismaCode(schema);
//   if (dialectInput === "mongodb") return generateMongoCode(schema);
  
//   return generateSQLCode(schema, dialectInput);
// }










const DIALECTS = { 
  postgres: "postgres", 
  mysql: "mysql", 
  mongodb: "mongodb", 
  prisma: "prisma" 
};

const API_BASE_URL = "http://localhost:5000/api"; 

function toSafeString(input) {
  if (typeof input === "string") return input.trim();
  if (input == null) return "";
  return String(input).trim();
}

/**
 * Normalizes the schema to ensure consistent data structures 
 * for both the UI and code generators.
 */
export function normalizeSchema(schema) {
  const safe = schema && typeof schema === "object" ? schema : {};
  const tables = Array.isArray(safe.tables) ? safe.tables : [];
  const relations = Array.isArray(safe.relations) ? safe.relations : [];

  const normTables = tables.map((t) => ({
    name: toSafeString(t?.name),
    columns: Array.isArray(t?.columns)
      ? t.columns.map((c) => ({
          name: toSafeString(c?.name),
          type: toSafeString(c?.type) || "varchar(255)",
          pk: !!c?.pk,
          fk: !!c?.fk,
          unique: !!c?.unique,
          nullable: !!c?.nullable,
        }))
      : [],
  }));

  return {
    tables: normTables.filter((t) => t.name),
    relations: relations
      .map((r) => ({
        fromTable: toSafeString(r?.fromTable),
        fromColumn: toSafeString(r?.fromColumn),
        toTable: toSafeString(r?.toTable),
        toColumn: toSafeString(r?.toColumn),
        type: toSafeString(r?.type) || "many-to-one",
      }))
      .filter((r) => r.fromTable && r.toTable),
  };
}

// --- AI GENERATION ---
export async function generateSchemaFromPrompt(prompt) {
  try {
    const res = await fetch(`${API_BASE_URL}/generate-schema`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with ${res.status}`);
    }

    let data = await res.json();
    if (typeof data === 'string') {
      try {
        const jsonMatch = data.match(/\{[\s\S]*\}/);
        data = JSON.parse(jsonMatch ? jsonMatch[0] : data);
      } catch (e) {
        console.error("Parse error", e);
      }
    }
    return normalizeSchema(data);
  } catch (err) {
    throw err;
  }
}

// --- GENERATORS ---

function generatePrismaCode(schema) {
  let code = `datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n`;

  schema.tables.forEach(table => {
    code += `model ${table.name} {\n`;
    table.columns.forEach(col => {
      let type = "String";
      const t = col.type.toLowerCase();
      if (t.includes("int")) type = "Int";
      else if (t.includes("bool")) type = "Boolean";
      else if (t.includes("float") || t.includes("decimal")) type = "Float";
      else if (t.includes("time") || t.includes("date")) type = "DateTime";

      code += `  ${col.name} ${type}`;
      if (col.pk) code += " @id @default(uuid())";
      if (col.unique && !col.pk) code += " @unique";
      code += "\n";
    });
    code += `}\n\n`;
  });
  return code;
}

function generateMongoCode(schema) {
  let code = `import mongoose from 'mongoose';\n\n`;
  schema.tables.forEach(table => {
    code += `const ${table.name}Schema = new mongoose.Schema({\n`;
    table.columns.forEach(col => {
      if (col.pk && (col.name === 'id' || col.name === '_id')) return;
      let type = "String";
      const t = col.type.toLowerCase();
      if (t.includes("int") || t.includes("float") || t.includes("decimal")) type = "Number";
      else if (t.includes("bool")) type = "Boolean";
      else if (t.includes("date") || t.includes("time")) type = "Date";

      code += `  ${col.name}: { type: ${type}${col.unique ? ", unique: true" : ""}${!col.nullable ? ", required: true" : ""} },\n`;
    });
    code += `}, { timestamps: true });\n\nexport const ${table.name} = mongoose.models.${table.name} || mongoose.model('${table.name}', ${table.name}Schema);\n\n`;
  });
  return code;
}

function generateSQLCode(schema, dialect) {
  const lines = [];
  if (dialect === "postgres") lines.push("CREATE EXTENSION IF NOT EXISTS pgcrypto;");

  schema.tables.forEach((table) => {
    const colDefs = table.columns.map((col) => {
      let def = `  "${col.name}" ${col.type}`;
      if (col.pk) def += " PRIMARY KEY";
      if (col.unique && !col.pk) def += " UNIQUE";
      if (!col.nullable) def += " NOT NULL";
      return def;
    });
    lines.push(`CREATE TABLE IF NOT EXISTS "${table.name}" (\n${colDefs.join(",\n")}\n);`);
  });

  schema.relations.forEach((rel) => {
    lines.push(`ALTER TABLE "${rel.fromTable}" \n  ADD CONSTRAINT "fk_${rel.fromTable}_${rel.fromColumn}" \n  FOREIGN KEY ("${rel.fromColumn}") REFERENCES "${rel.toTable}" ("${rel.toColumn}");`);
  });

  return lines.join("\n\n");
}

/**
 * Main switch for code generation. 
 * This is called by Editor.jsx inside the useMemo hook.
 */
export function generateSQL(schemaInput, dialectInput = "postgres") {
  const schema = normalizeSchema(schemaInput);
  if (!schema.tables || schema.tables.length === 0) return "-- No tables to generate.";

  const dialect = dialectInput.toLowerCase();

  if (dialect === DIALECTS.prisma) return generatePrismaCode(schema);
  if (dialect === DIALECTS.mongodb) return generateMongoCode(schema);
  if (dialect === DIALECTS.mysql) return generateSQLCode(schema, "mysql");
  
  return generateSQLCode(schema, "postgres");
}