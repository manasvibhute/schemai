// export function generateSQL(schema) {
//   return schema.tables
//     .map(
//       (t) =>
//         `CREATE TABLE ${t.name} (
// ${t.columns
//   .map(
//     (c) =>
//       `${c.name} ${c.type}${c.pk ? " PRIMARY KEY" : ""}${
//         c.unique ? " UNIQUE" : ""
//       }`
//   )
//   .join(",\n")}
// );`
//     )
//     .join("\n\n");
// }










export function generateDialectSQL(schema, dialect) {
  const lines = [];
  
  schema.tables.forEach(table => {
    let createTable = `CREATE TABLE ${table.name} (\n`;
    
    const colDefs = table.columns.map(col => {
      let def = `  ${col.name} `;
      
      // Dialect-specific type mapping
      if (dialect === 'postgres' && col.pk) def += "SERIAL PRIMARY KEY";
      else if (dialect === 'mysql' && col.pk) def += "INT AUTO_INCREMENT PRIMARY KEY";
      else if (dialect === 'sqlite' && col.pk) def += "INTEGER PRIMARY KEY AUTOINCREMENT";
      else def += col.type;

      if (!col.nullable) def += " NOT NULL";
      return def;
    });

    createTable += colDefs.join(",\n") + "\n);";
    lines.push(createTable);
  });

  return lines.join("\n\n");
}