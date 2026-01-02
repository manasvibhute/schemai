// import OpenAI from "openai";
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function generateSchemaAI(prompt) {
//   const response = await client.chat.completions.create({
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: "You are a database architect. Generate a normalized database schema in JSON format with tables and relations.",
//       },
//       { role: "user", content: prompt },
//     ],
//   });

//   const schemaText = response.choices[0].message.content;

//   // Validate and parse JSON
//   try {
//     return JSON.parse(schemaText);
//   } catch {
//     throw new Error("AI response was not valid JSON");
//   }
// }












const { InferenceClient } = require('@huggingface/inference');
require('dotenv').config();

// Get a free token from https://huggingface.co/settings/tokens
const hf = new InferenceClient(process.env.HF_TOKEN);

const generateSchema = async (userPrompt) => {
  const system = `
 You are a Senior Database Architect.
  Return a JSON object with:
  1. "tables": Array of objects { name, columns: [{ name, type, pk, fk }] }
  2. "relations": Array of objects { fromTable, fromColumn, toTable, toColumn, type }
  
  CRITICAL: You MUST identify foreign key relationships and include them in the "relations" array.
  Example: {"fromTable": "orders", "fromColumn": "customer_id", "toTable": "customers", "toColumn": "id"}
`;

  try {
    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.3',
      inputs: `<s>[INST] ${systemPrompt} \n\n User Request: ${userPrompt} [/INST]`,
      parameters: {
        max_new_tokens: 1000,
        return_full_text: false,
      }
    });

    // Extracting the JSON from the text response
    const resultText = response.generated_text;
    return JSON.parse(resultText); 
  } catch (error) {
    console.error("Hugging Face Error:", error);
    throw error;
  }
};

module.exports = { generateSchema };