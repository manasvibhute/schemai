export const buildPrompt = ({ prompt, schema, language }) => {
  return `
You are a database architect.

User prompt:
${prompt}

Existing schema:
${JSON.stringify(schema, null, 2)}

Return updated schema JSON.
Language: ${language}
`;
};
