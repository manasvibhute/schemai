// import express from 'express';
// import { generateSchemaController } from '../controllers/schema.controller.js';

// const router = express.Router();

// router.post('/generate', generateSchemaController);

// export default router;











// // backend/routes/schema.js
// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// // POST /api/schema/generate-schema
// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt || typeof prompt !== "string") {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (err) {
//     console.error("Schema generation error:", err);
//     res.status(500).json({ error: "Schema generation failed" });
//   }
// });

// export default router;












// // backend/routes/schema.js
// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Schema generation failed" });
//   }
// });

// export default router;











// // backend/routes/schema.js
// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) return res.status(400).json({ error: "Prompt required" });

//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (err) {
//     console.error("Schema generation error:", err);
//     res.status(500).json({ error: "Schema generation failed" });
//   }
// });

// export default router;











// // backend/routes/schema.js
// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (err) {
//     console.error("Schema generation error:", err);
//     res.status(500).json({ error: "Schema generation failed" });
//   }
// });

// export default router;










// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// // This defines the /generate-schema endpoint
// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;











// // backend/routes/schema.js
// import express from "express";
// const router = express.Router();

// // This path must be exact. Do NOT add extra slashes.
// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     console.log("-> Backend received prompt:", prompt); // This confirms the request hit the backend
//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (error) {
//     console.error("-> API Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });












// // backend/routes/schema.js
// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// // This path matches the /api/generate-schema call from the frontend
// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     console.log("-> AI Request for:", prompt); 
//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (error) {
//     console.error("-> API Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // CRITICAL: You were likely missing this line below!
// export default router;











// import express from "express";
// import { generateSchemaAI } from "../services/schemaService.js";

// const router = express.Router();

// router.post("/generate-schema", async (req, res) => {
//   try {
//     const { prompt } = req.body;
    
//     // Check for prompt
//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     // Check if token exists in process.env before calling service
//     if (!process.env.HF_API_TOKEN) {
//         throw new Error("HF_API_TOKEN is missing in the environment configuration.");
//     }

//     const schema = await generateSchemaAI(prompt);
//     res.json(schema);
//   } catch (error) {
//     console.error("Route Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;












import express from "express";
import { generateSchemaAI } from "../services/schemaService.js";

const router = express.Router();

/**
 * 1. GET ROUTE (Health Check)
 * This clears the "Cannot GET" error when you visit the link in a browser.
 */
router.get("/generate-schema", (req, res) => {
  res.status(200).json({
    status: "online",
    message: "The Generate Schema API is ready. Please use a POST request from your React app to generate SQL/ERD.",
    endpoint: "POST /api/generate-schema"
  });
});

/**
 * 2. POST ROUTE (The Actual Logic)
 * This handles the prompt sent from your frontend.
 */
router.post("/generate-schema", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    // Validate that the prompt exists
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required in the request body." });
    }

    // Security check: Verify token is loaded in the environment
    if (!process.env.HF_API_TOKEN) {
        console.error("❌ MISSING TOKEN: Check your .env file for HF_API_TOKEN");
        return res.status(500).json({ error: "Server Configuration Error: API Token is missing." });
    }

    console.log(`🤖 Generating schema for prompt: "${prompt}"...`);

    // Call the AI Service
    const schema = await generateSchemaAI(prompt);
    
    // Return the SQL and ERD to the frontend
    res.json(schema);

  } catch (error) {
    console.error("❌ Route Error:", error.message);
    res.status(500).json({ 
      error: "AI Generation Failed", 
      details: error.message 
    });
  }
});

export default router;