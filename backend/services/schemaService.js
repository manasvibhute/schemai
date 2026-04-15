
// import { HfInference } from "@huggingface/inference";
// import 'dotenv/config';

// const hf = new HfInference(process.env.HF_API_TOKEN);

// const MODELS = [
//   "meta-llama/Llama-3.2-3B-Instruct",
//   "mistralai/Mistral-7B-Instruct-v0.3",
//   "Qwen/Qwen2.5-7B-Instruct"
// ];

// export const generateSchemaAI = async (userPrompt, attempt = 0) => {
//   if (!process.env.HF_API_TOKEN) {
//     throw new Error("API Token is not configured on the server.");
//   }

//   // --- ENHANCED SYSTEM INSTRUCTIONS ---
//   const systemInstructions = `
//     You are a Senior Database Architect. Your task is to transform user stories into production-ready schemas.
    
//     STRICT RULES:
//     1. BEST PRACTICES: Apply 3rd Normal Form (3NF). Ensure data integrity and minimize redundancy.
//     2. RELATIONSHIPS: Automatically identify One-to-One, One-to-Many, and Many-to-Many relationships.
//     3. MULTI-DIALECT READY: Ensure column types are standard (varchar, integer, boolean, timestamp, uuid).
//     4. OUTPUT FORMAT: Return ONLY a valid JSON object. No markdown, no conversation.

//     JSON STRUCTURE:
//     {
//       "tables": [
//         {
//           "name": "string",
//           "columns": [
//             { "name": "string", "type": "string", "pk": boolean, "fk": boolean, "unique": boolean, "nullable": boolean }
//           ]
//         }
//       ],
//       "relations": [
//         { "fromTable": "string", "fromColumn": "string", "toTable": "string", "toColumn": "string", "type": "many-to-one" | "one-to-one" }
//       ]
//     }
//   `;

//   const currentModel = MODELS[attempt] || MODELS[0];

//   try {
//     console.log(`🚀 AI Architect [Attempt ${attempt + 1}] using ${currentModel}...`);

//     const response = await hf.chatCompletion({
//       model: currentModel,
//       messages: [
//         { role: "system", content: systemInstructions },
//         { role: "user", content: `Generate a normalized schema for: ${userPrompt}` }
//       ],
//       parameters: {
//         max_new_tokens: 2000,
//         temperature: 0.1, // Low temperature for high consistency
//         top_p: 0.9,
//       },
//       headers: {
//         "x-use-cache": "false",
//         "x-wait-for-model": "true"
//       }
//     });

//     const content = response.choices[0].message.content;
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
    
//     if (!jsonMatch) throw new Error("AI failed to output a valid JSON block.");
    
//     const parsedData = JSON.parse(jsonMatch[0]);
//     console.log("✅ AI Architect successfully generated the schema.");
//     return parsedData;

//   } catch (error) {
//     console.error(`❌ Model ${currentModel} failed:`, error.message);
//     if (attempt < MODELS.length - 1) {
//       return generateSchemaAI(userPrompt, attempt + 1);
//     }
//     throw new Error(`All AI Architect models failed: ${error.message}`);
//   }
// };








// import fetch from "node-fetch";

// export async function generateSchemaAI(prompt) {
//   const response = await fetch(
//     "https://api.groq.com/openai/v1/chat/completions",
//     {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "llama-3.1-70b-versatile",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are a database architect.
// Return ONLY valid JSON in this format:
// {
//   "tables": [
//     {
//       "name": "",
//       "columns": [
//         { "name": "", "type": "", "pk": false, "fk": false, "unique": false, "nullable": true }
//       ]
//     }
//   ],
//   "relations": [
//     { "fromTable": "", "fromColumn": "", "toTable": "", "toColumn": "", "type": "" }
//   ]
// }
// `
//           },
//           {
//             role: "user",
//             content: prompt
//           }
//         ],
//         temperature: 0
//       })
//     }
//   );

//   const data = await response.json();

//   if (!data.choices?.[0]?.message?.content) {
//     throw new Error("Groq API failed to generate schema");
//   }

//   return JSON.parse(data.choices[0].message.content);
// }








import { Groq } from "groq-sdk"; // Or your preferred AI SDK
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * Generates a structured JSON database schema from a natural language prompt.
 * * @param {string} userPrompt - The description of the database (e.g., "Hospital System")
 * @returns {Object} - A normalized schema object with tables and relations
 */
export async function generateSchemaAI(userPrompt) {
  try {
    const systemPrompt = `
      You are an expert Database Architect.
      Your task is to convert a user prompt into a structured JSON database schema.
      
      CRITICAL RULES:
      1. Always generate between 3 to 6 related tables to ensure a complete system.
      2. Use primary keys (pk: true) and foreign keys (fk: true).
      3. Define relationships in the 'relations' array.
      4. Return ONLY valid JSON. No prose, no markdown formatting, no backticks.
      
      JSON STRUCTURE EXAMPLE:
      {
        "tables": [
          {
            "name": "users",
            "columns": [
              { "name": "id", "type": "uuid", "pk": true },
              { "name": "email", "type": "varchar(255)", "unique": true }
            ]
          }
        ],
        "relations": [
          { "fromTable": "orders", "fromColumn": "user_id", "toTable": "users", "toColumn": "id", "type": "many-to-one" }
        ]
      }
    `;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate a schema for: ${userPrompt}` }
      ],
      model: "llama-3.3-70b-versatile", // Or your specific model ID
      temperature: 0.2, // Low temperature for consistent JSON output
      response_format: { type: "json_object" } // Forces JSON output
    });

    const rawContent = completion.choices[0].message.content;
    const parsedSchema = JSON.parse(rawContent);

    console.log(`✅ AI generated ${parsedSchema.tables?.length || 0} tables.`);
    return parsedSchema;

  } catch (error) {
    console.error("❌ AI Service Error:", error);
    throw new Error("Failed to generate schema via AI: " + error.message);
  }
}