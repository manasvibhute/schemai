// // backend/services/schemaService.js
// // Example using OpenAI SDK. Replace with your AI provider.

// const OpenAI = require("openai");
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// async function generateSchemaAI(prompt) {
//   const response = await client.chat.completions.create({
//     model: "gpt-4",
//     messages: [
//       { role: "system", content: "You are a database architect. Generate a normalized schema in JSON with tables and relations." },
//       { role: "user", content: prompt }
//     ]
//   });

//   const schemaText = response.choices[0].message.content;
//   return JSON.parse(schemaText); // Ensure AI returns valid JSON
// }

// module.exports = { generateSchemaAI };














// // backend/services/schemaService.js
// import OpenAI from "openai";
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function generateSchemaAI(prompt) {
//   const response = await client.chat.completions.create({
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: "You are a database architect. Always respond ONLY with valid JSON containing 'tables' and 'relations'. Do not include explanations or text outside JSON.",
//       },
//       { role: "user", content: prompt },
//     ],
//   });

//   const schemaText = response.choices[0].message.content.trim();

//   try {
//     return JSON.parse(schemaText);
//   } catch (err) {
//     console.error("AI returned invalid JSON:", schemaText);
//     throw new Error("Invalid JSON from AI");
//   }
// }











// // backend/services/schemaService.js
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function generateSchemaAI(prompt) {
//   const response = await client.chat.completions.create({
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a database architect. Always respond ONLY with valid JSON containing 'tables' and 'relations'. Do not include explanations or text outside JSON.",
//       },
//       { role: "user", content: prompt },
//     ],
//   });

//   const schemaText = response.choices[0].message.content.trim();

//   try {
//     return JSON.parse(schemaText);
//   } catch (err) {
//     console.error("AI returned invalid JSON:", schemaText);
//     throw new Error("Invalid JSON from AI");
//   }
// }









// // backend/services/schemaService.js
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function generateSchemaAI(prompt) {
//   try {
//     const response = await client.chat.completions.create({
//       model: "gpt-4o", // Using gpt-4o or gpt-4o-mini is recommended for better JSON adherence
//       messages: [
//         {
//           role: "system",
//           content: `You are a database architect. 
//           Generate a database schema based on the user's request.
//           Return ONLY a JSON object with this exact structure:
//           {
//             "tables": [
//               {
//                 "name": "table_name",
//                 "columns": [
//                   { "name": "id", "type": "uuid", "isPrimary": true },
//                   { "name": "column_name", "type": "varchar(255)" }
//                 ]
//               }
//             ],
//             "relations": [
//               { "from": "table1", "to": "table2", "foreignKey": "table2_id" }
//             ]
//           }
//           Do not include any explanations, markdown code blocks, or extra text.`
//         },
//         { role: "user", content: prompt },
//       ],
//       // This forces the model to output a valid JSON object
//       response_format: { type: "json_object" }, 
//     });

//     let schemaText = response.choices[0].message.content.trim();

//     // Safety: Remove markdown code blocks if the AI accidentally included them
//     schemaText = schemaText.replace(/^```json/, "").replace(/```$/, "").trim();

//     return JSON.parse(schemaText);

//   } catch (err) {
//     console.error("--- AI SERVICE ERROR ---");
//     console.error("Message:", err.message);
    
//     // Log the raw text only if it exists to help you debug in the terminal
//     if (err.response) console.error("Raw AI Response:", err.response);
    
//     throw new Error("Failed to generate schema: " + err.message);
//   }
// } 









// // backend/services/schemaService.js
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function generateSchemaAI(prompt) {
//   try {
//     const response = await client.chat.completions.create({
//       // CHANGED: gpt-4o-mini is cheaper, faster, and available to almost everyone
//       model: "gpt-4o-mini", 
//       messages: [
//         {
//           role: "system",
//           content: "You are a database architect. Return ONLY a JSON object with 'tables' and 'relations'. No markdown, no text."
//         },
//         { role: "user", content: prompt },
//       ],
//       response_format: { type: "json_object" },
//     });

//     const schemaText = response.choices[0].message.content.trim();
//     return JSON.parse(schemaText);

//   } catch (err) {
//     // This part is CRITICAL: Look at your VS Code terminal when you run this!
//     console.error("--- OPENAI ERROR ---");
//     console.error("Status:", err.status); // e.g., 401, 429, or 404
//     console.error("Message:", err.message);
    
//     // If it fails, we throw the error so the frontend knows it's NOT working
//     throw err; 
//   }
// }












// import { HfInference } from "@huggingface/inference";

// // Initialize with the token from .env
// const hf = new HfInference(process.env.HF_API_TOKEN);

// export const generateSchemaAI = async (userPrompt) => {
//   const systemInstructions = `
//     You are a database expert. 
//     Generate a database schema based on the user request.
//     Return ONLY a JSON object with two keys:
//     1. "sql": A string containing the SQL DDL statements.
//     2. "erd": A string containing the Mermaid.js ERD code.
//     Example: {"sql": "CREATE TABLE...", "erd": "erDiagram..."}
//   `;

//   try {
//     const response = await hf.chatCompletion({
//       model: "mistralai/Mistral-7B-Instruct-v0.3",
//       messages: [
//         { role: "system", content: systemInstructions },
//         { role: "user", content: userPrompt }
//       ],
//       parameters: {
//         max_new_tokens: 1000,
//         temperature: 0.1, // Keep it low for structured code
//       },
//       headers: {
//         "x-use-cache": "false" // Ensures you get fresh results when prompt changes
//       }
//     });

//     const content = response.choices[0].message.content;
    
//     // Clean up the response in case the AI adds extra text around the JSON
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
//     if (!jsonMatch) throw new Error("Invalid AI response format");
    
//     return JSON.parse(jsonMatch[0]);
//   } catch (error) {
//     console.error("AI Service Error:", error.message);
//     throw new Error("Failed to generate schema from Hugging Face");
//   }
// };













// import { HfInference } from "@huggingface/inference";
// import 'dotenv/config'; // Ensures variables are loaded in this module

// // Initialize the client
// // We use a fallback check to prevent the 'undefined' error during initialization
// const hf = new HfInference(process.env.HF_API_TOKEN || "");

// export const generateSchemaAI = async (userPrompt) => {
//   // 1. Double check the token right before the call
//   if (!process.env.HF_API_TOKEN) {
//     console.error("❌ HF_API_TOKEN is missing in schemaService.js");
//     throw new Error("API Token is not configured on the server.");
//   }

//   // 2. Updated System Instructions to match your ERDCanvas requirements
//   const systemInstructions = `
//     You are a database architect. Generate a database schema JSON object.
//     Return ONLY a valid JSON object with this exact structure:
//     {
//       "tables": [
//         {
//           "name": "table_name",
//           "columns": [
//             { "name": "column_name", "type": "datatype", "pk": true/false, "nullable": true/false }
//           ]
//         }
//       ],
//       "relations": [
//         { "fromTable": "table1", "fromColumn": "col1", "toTable": "table2", "toColumn": "col2", "type": "many-to-one" }
//       ]
//     }
//     Do not include any conversational text or markdown blocks.
//   `;

//   try {
//     console.log("Calling Hugging Face API with prompt:", userPrompt);

    
// const response = await hf.chatCompletion({
//   model: "meta-llama/Llama-3.2-3B-Instruct", // More stable provider
//   messages: [
//     { role: "system", content: systemInstructions },
//     { role: "user", content: userPrompt }
//   ],
//   parameters: {
//     max_new_tokens: 1500,
//     temperature: 0.1,
//   },
//   headers: {
//     "x-use-cache": "false",
//     "x-wait-for-model": "true" // This forces the provider to load the model before erroring
//   }
// });

//     const content = response.choices[0].message.content;
    
//     // 3. Robust JSON extraction (removes ```json ... ``` blocks if present)
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
//     if (!jsonMatch) {
//       console.error("AI Response was not JSON:", content);
//       throw new Error("AI failed to return a valid JSON schema.");
//     }
    
//     const parsedData = JSON.parse(jsonMatch[0]);
//     console.log("✅ AI successfully generated schema object.");
//     return parsedData;

//   } catch (error) {
//     console.error("AI Service Error:", error.message);
//     // If the error is a 401, the token itself is invalid
//     if (error.message.includes("401")) {
//       throw new Error("Invalid Hugging Face Token. Please check your .env file.");
//     }
//     throw new Error("Failed to generate schema from Hugging Face: " + error.message);
//   }
// };










// import { HfInference } from "@huggingface/inference";
// import 'dotenv/config';

// // 1. Better Initialization: Use the full object format for the client
// const hf = new HfInference(process.env.HF_API_TOKEN);

// // List of stable models to try in order if the first one fails
// const MODELS = [
//   "meta-llama/Llama-3.2-3B-Instruct",
//   "mistralai/Mistral-7B-Instruct-v0.3",
//   "Qwen/Qwen2.5-7B-Instruct" // High stability for JSON tasks
// ];

// export const generateSchemaAI = async (userPrompt, attempt = 0) => {
//   if (!process.env.HF_API_TOKEN) {
//     throw new Error("API Token is not configured on the server.");
//   }

//   const systemInstructions = `
//     You are a database architect. Return ONLY a valid JSON object.
//     Structure:
//     {
//       "tables": [
//         {
//           "name": "table_name",
//           "columns": [
//             { "name": "column_name", "type": "datatype", "pk": true, "nullable": false }
//           ]
//         }
//       ],
//       "relations": [
//         { "fromTable": "t1", "fromColumn": "c1", "toTable": "t2", "toColumn": "c2", "type": "many-to-one" }
//       ]
//     }
//   `;

//   const currentModel = MODELS[attempt] || MODELS[0];

//   try {
//     console.log(`🤖 [Attempt ${attempt + 1}] Calling ${currentModel}...`);

//     const response = await hf.chatCompletion({
//       model: currentModel,
//       messages: [
//         { role: "system", content: systemInstructions },
//         { role: "user", content: userPrompt }
//       ],
//       parameters: {
//         max_new_tokens: 1500,
//         temperature: 0.1,
//         top_p: 0.95,
//       },
//       headers: {
//         "x-use-cache": "false",
//         "x-wait-for-model": "true" // Critical: prevents immediate 503 if model is loading
//       }
//     });

//     const content = response.choices[0].message.content;
//     const jsonMatch = content.match(/\{[\s\S]*\}/);
    
//     if (!jsonMatch) throw new Error("No JSON found in AI response.");
    
//     const parsedData = JSON.parse(jsonMatch[0]);
//     console.log("✅ Successfully generated schema.");
//     return parsedData;

//   } catch (error) {
//     console.error(`❌ Error with ${currentModel}:`, error.message);

//     // If we have more models to try, retry with the next one
//     if (attempt < MODELS.length - 1) {
//       console.log("🔄 Retrying with a different model...");
//       return generateSchemaAI(userPrompt, attempt + 1);
//     }

//     // Final fallback error
//     throw new Error(`All models failed: ${error.message}`);
//   }
// };











import { HfInference } from "@huggingface/inference";
import 'dotenv/config';

const hf = new HfInference(process.env.HF_API_TOKEN);

const MODELS = [
  "meta-llama/Llama-3.2-3B-Instruct",
  "mistralai/Mistral-7B-Instruct-v0.3",
  "Qwen/Qwen2.5-7B-Instruct"
];

export const generateSchemaAI = async (userPrompt, attempt = 0) => {
  if (!process.env.HF_API_TOKEN) {
    throw new Error("API Token is not configured on the server.");
  }

  // --- ENHANCED SYSTEM INSTRUCTIONS ---
  const systemInstructions = `
    You are a Senior Database Architect. Your task is to transform user stories into production-ready schemas.
    
    STRICT RULES:
    1. BEST PRACTICES: Apply 3rd Normal Form (3NF). Ensure data integrity and minimize redundancy.
    2. RELATIONSHIPS: Automatically identify One-to-One, One-to-Many, and Many-to-Many relationships.
    3. MULTI-DIALECT READY: Ensure column types are standard (varchar, integer, boolean, timestamp, uuid).
    4. OUTPUT FORMAT: Return ONLY a valid JSON object. No markdown, no conversation.

    JSON STRUCTURE:
    {
      "tables": [
        {
          "name": "string",
          "columns": [
            { "name": "string", "type": "string", "pk": boolean, "fk": boolean, "unique": boolean, "nullable": boolean }
          ]
        }
      ],
      "relations": [
        { "fromTable": "string", "fromColumn": "string", "toTable": "string", "toColumn": "string", "type": "many-to-one" | "one-to-one" }
      ]
    }
  `;

  const currentModel = MODELS[attempt] || MODELS[0];

  try {
    console.log(`🚀 AI Architect [Attempt ${attempt + 1}] using ${currentModel}...`);

    const response = await hf.chatCompletion({
      model: currentModel,
      messages: [
        { role: "system", content: systemInstructions },
        { role: "user", content: `Generate a normalized schema for: ${userPrompt}` }
      ],
      parameters: {
        max_new_tokens: 2000,
        temperature: 0.1, // Low temperature for high consistency
        top_p: 0.9,
      },
      headers: {
        "x-use-cache": "false",
        "x-wait-for-model": "true"
      }
    });

    const content = response.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) throw new Error("AI failed to output a valid JSON block.");
    
    const parsedData = JSON.parse(jsonMatch[0]);
    console.log("✅ AI Architect successfully generated the schema.");
    return parsedData;

  } catch (error) {
    console.error(`❌ Model ${currentModel} failed:`, error.message);
    if (attempt < MODELS.length - 1) {
      return generateSchemaAI(userPrompt, attempt + 1);
    }
    throw new Error(`All AI Architect models failed: ${error.message}`);
  }
};