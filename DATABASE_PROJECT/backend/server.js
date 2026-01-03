// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import schemaRoutes from './routes/schema.routes.js';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/schema', schemaRoutes);

// app.get('/', (_, res) => {
//   res.send('SchemaAI Backend Running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });










// // backend/server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import schema routes (make sure the filename matches exactly)
// import schemaRoutes from "./routes/schema.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/schema", schemaRoutes);

// app.get("/", (req, res) => {
//   res.send("SchemaAI Backend Running");
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });











// // backend/server.js
// import dotenv from "dotenv";
// dotenv.config();

// console.log("OpenAI Key loaded?", process.env.OPENAI_API_KEY ? "Yes" : "No");

// import express from "express";
// import schemaRoutes from "./routes/schema.js";

// const app = express();
// app.use(express.json());

// app.use("/api", schemaRoutes);

// app.listen(5000, () => console.log("Backend running on port 5000"));














// // backend/server.js
// import 'dotenv/config'; // This loads variables immediately before other imports
// import express from "express";
// import cors from "cors"; // Added CORS support (usually needed for frontend-backend connection)
// import schemaRoutes from "./routes/schema.js";

// // Debugging: This will help you see if the key is actually being read
// console.log("-----------------------------------------");
// console.log("Environment Check:");
// console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
// if (!process.env.OPENAI_API_KEY) {
//     console.error("CRITICAL ERROR: OPENAI_API_KEY is not defined in .env file!");
// }
// console.log("-----------------------------------------");

// const app = express();

// // Middleware
// app.use(cors()); // Allows your frontend to talk to this backend
// app.use(express.json());

// // Routes
// app.use("/api", schemaRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Backend running on port ${PORT}`);
// });











// import 'dotenv/config';
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js";

// const app = express();

// app.use(cors()); 
// app.use(express.json());


// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// app.use("/api", schemaRoutes);

// app.listen(5000, () => console.log("🚀 Backend running on port 5000"));












// // backend/server.js
// import 'dotenv/config';
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js"; // This will work once Step 2 is done

// const app = express();

// // Middleware
// app.use(cors()); 
// app.use(express.json());

// // Request Logger (Helpful for debugging 404s)
// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// // This mounts your routes at http://localhost:5000/api
// app.use("/api", schemaRoutes); 

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));











// // 1. Load environment variables immediately
// import 'dotenv/config'; 
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js";

// const app = express();

// // --- DEBUG: CHECK IF TOKEN IS LOADED ---
// // This will print to your terminal as soon as you save.
// if (!process.env.HF_API_TOKEN) {
//   console.error("❌ CRITICAL ERROR: HF_API_TOKEN is not found in process.env!");
//   console.log("Check if your .env file is in the 'backend' folder and named exactly '.env'");
// } else {
//   console.log("✅ HF_API_TOKEN detected successfully.");
// }
// // ---------------------------------------

// // Middleware
// app.use(cors()); 
// app.use(express.json());

// // Request Logger
// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use("/api", schemaRoutes); 

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Backend running on port ${PORT}`);
//   console.log(`🔗 Test the route at: http://localhost:${PORT}/api/generate-schema`);
// });







// // 1. Load environment variables immediately
// import 'dotenv/config'; 
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js";

// const app = express();

// // --- DEBUG: CHECK IF TOKEN IS LOADED ---
// // This will print to your terminal as soon as you save.
// if (!process.env.HF_API_TOKEN) {
//   console.error("❌ CRITICAL ERROR: HF_API_TOKEN is not found in process.env!");
//   console.log("Check if your .env file is in the 'backend' folder and named exactly '.env'");
// } else {
//   console.log(" HF_API_TOKEN detected successfully.");
// }
// // ---------------------------------------

// // Middleware
// app.use(cors()); 
// app.use(express.json());

// // Request Logger
// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use("/api", schemaRoutes); 

// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(` Backend running on port ${PORT}`);
//   console.log(` Test the route at: http://localhost:${PORT}/api/generate-schema`);
// }); 












// // 1. Load environment variables immediately
// import 'dotenv/config'; 
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js";

// const app = express();

// // --- DEBUG: CHECK IF TOKEN IS LOADED ---
// if (!process.env.HF_API_TOKEN) {
//   console.error("❌ CRITICAL ERROR: HF_API_TOKEN is not found in process.env!");
// } else {
//   console.log("✅ HF_API_TOKEN detected successfully.");
// }
// // ---------------------------------------

// // Middleware
// app.use(cors()); 
// app.use(express.json());

// // Request Logger
// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use("/api", schemaRoutes); 

// // --- UPDATED FOR DEPLOYMENT ---
// // Use process.env.PORT provided by Render, or fallback to 5001 for local dev
// const PORT = process.env.PORT || 5001;

// app.get("/", (req, res) => {
//   res.send("🚀 Schema AI Backend is running successfully!");
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Backend running on port ${PORT}`);
//   // This will show the actual assigned port in your Render logs
//   if (process.env.PORT) {
//     console.log(`🌍 Production URL is active.`);
//   } else {
//     console.log(`🏠 Local test at: http://localhost:${PORT}/api/generate-schema`);
//   }
// });









// // 1. Load environment variables immediately
// import 'dotenv/config'; 
// import express from "express";
// import cors from "cors";
// import schemaRoutes from "./routes/schema.js";

// const app = express();

// // --- DEBUG: CHECK IF TOKEN IS LOADED ---
// if (!process.env.HF_API_TOKEN) {
//   console.error("❌ CRITICAL ERROR: HF_API_TOKEN is not found in process.env!");
// } else {
//   console.log("✅ HF_API_TOKEN detected successfully.");
// }

// // Middleware
// app.use(cors()); 
// app.use(express.json());

// // Root Route (Fixes "Cannot GET /")
// app.get("/", (req, res) => {
//   res.status(200).send("🚀 Schema AI Backend is running successfully!");
// });

// // Routes
// app.use("/api", schemaRoutes); 

// // Request Logger (Move below root so it doesn't clutter logs)
// app.use((req, res, next) => {
//   console.log(`Incoming Request: ${req.method} ${req.url}`);
//   next();
// });

// // --- UPDATED FOR DEPLOYMENT ---
// const PORT = process.env.PORT || 10000;

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Backend running on port ${PORT}`);
//   if (process.env.PORT) {
//     console.log(`🌍 Production URL is active.`);
//   } else {
//     console.log(`🏠 Local test at: http://localhost:${PORT}`);
//   }
// });










// 1. Load environment variables immediately
import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import schemaRoutes from "./routes/schema.js";

const app = express();

// --- DEBUG: CHECK IF TOKEN IS LOADED ---
// This will appear in your Render "Logs" tab
if (!process.env.HF_API_TOKEN) {
  console.error("❌ CRITICAL ERROR: HF_API_TOKEN is missing from Environment Variables!");
} else {
  console.log("✅ HF_API_TOKEN detected successfully.");
}

// 2. Middleware
app.use(cors()); 
app.use(express.json());

// 3. Health Check & Root Route (Fixes "Cannot GET /")
// Visiting https://your-app.onrender.com/ will now show this message
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🚀 Schema AI Backend is Live!",
    timestamp: new Date().toISOString()
  });
});

// 4. Routes
app.use("/api", schemaRoutes); 

// 5. Global Error Handler (Prevents crashes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// 6. Start Server
// Render automatically provides process.env.PORT
const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`-----------------------------------------------`);
  console.log(`🚀 Server listening on Port: ${PORT}`);
  console.log(`🌍 URL: https://schema-ai.onrender.com`);
  console.log(`-----------------------------------------------`);
});