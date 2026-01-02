// import React, { useState } from 'react';
// import { Save, Download, Share2, Play, Code, Eye, Settings, Maximize2, Database, Sparkles, FileText } from 'lucide-react';
// import {GlassCard }from '../components/GlassCard';

// const Editor = () => {
//   const [userStory, setUserStory] = useState('');
//   const [generating, setGenerating] = useState(false);
//   const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'sql'

//   const handleGenerate = () => {
//     setGenerating(true);
//     // Simulate AI generation
//     setTimeout(() => {
//       setGenerating(false);
//     }, 2000);
//   };

//   const mockSchema = {
//     tables: [
//       { id: 1, name: 'users', x: 100, y: 100 },
//       { id: 2, name: 'products', x: 400, y: 100 },
//       { id: 3, name: 'orders', x: 250, y: 300 }
//     ]
//   };

//   return (
//     <div className="h-[calc(100vh-8rem)] flex flex-col gap-4">
//       {/* Top Toolbar */}
//       <GlassCard className="p-4">
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <input
//               type="text"
//               placeholder="Untitled Schema"
//               className="text-xl font-semibold bg-transparent border-none text-white focus:outline-none w-64"
//               defaultValue="E-commerce Platform"
//             />
//             <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
//               Saved
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 transition">
//               <Save size={18} />
//               <span className="hidden sm:inline">Save</span>
//             </button>
//             <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 transition">
//               <Download size={18} />
//               <span className="hidden sm:inline">Export</span>
//             </button>
//             <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 transition">
//               <Share2 size={18} />
//               <span className="hidden sm:inline">Share</span>
//             </button>
//             <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
//               <Settings size={18} />
//             </button>
//           </div>
//         </div>
//       </GlassCard>

//       {/* Main Editor Area - Split Screen */}
//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
//         {/* Left Panel - User Story Input */}
//         <GlassCard className="p-6 flex flex-col">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-2">
//               <FileText className="text-violet-400" size={20} />
//               <h2 className="text-lg font-semibold text-white">User Story</h2>
//             </div>
//             <button
//               onClick={handleGenerate}
//               disabled={generating}
//               className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-medium flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {generating ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   <span>Generating...</span>
//                 </>
//               ) : (
//                 <>
//                   <Sparkles size={18} />
//                   <span>Generate Schema</span>
//                 </>
//               )}
//             </button>
//           </div>

//           <textarea
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//             placeholder="Describe your database requirements in plain English...

// Example:
// I need a database for an e-commerce platform. Users can browse products, add them to cart, and place orders. Each user has a profile with shipping addresses. Products belong to categories and can have multiple images. Orders contain multiple products with quantities and prices..."
//             className="flex-1 w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none transition font-mono text-sm"
//           />

//           <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
//             <span>{userStory.length} characters</span>
//             <div className="flex items-center gap-2">
//               <button className="hover:text-white transition">
//                 Load Example
//               </button>
//               <span>•</span>
//               <button className="hover:text-white transition">
//                 Clear
//               </button>
//             </div>
//           </div>
//         </GlassCard>

//         {/* Right Panel - Schema Visualization */}
//         <GlassCard className="p-6 flex flex-col">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-2">
//               <Database className="text-violet-400" size={20} />
//               <h2 className="text-lg font-semibold text-white">Schema Preview</h2>
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setViewMode('visual')}
//                 className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-medium transition ${
//                   viewMode === 'visual'
//                     ? 'bg-violet-600 text-white'
//                     : 'bg-white/5 text-slate-400 hover:text-white'
//                 }`}
//               >
//                 <Eye size={16} />
//                 <span className="hidden sm:inline">Visual</span>
//               </button>
//               <button
//                 onClick={() => setViewMode('sql')}
//                 className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-medium transition ${
//                   viewMode === 'sql'
//                     ? 'bg-violet-600 text-white'
//                     : 'bg-white/5 text-slate-400 hover:text-white'
//                 }`}
//               >
//                 <Code size={16} />
//                 <span className="hidden sm:inline">SQL</span>
//               </button>
//               <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition">
//                 <Maximize2 size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 bg-white/5 border border-white/10 rounded-xl overflow-hidden relative">
//             {viewMode === 'visual' ? (
//               // Visual Canvas Placeholder
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mx-auto mb-4">
//                     <Database className="text-violet-400" size={40} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     {userStory.length > 0 ? 'Ready to Generate' : 'Start with a User Story'}
//                   </h3>
//                   <p className="text-slate-400 text-sm max-w-xs mx-auto">
//                     {userStory.length > 0
//                       ? 'Click "Generate Schema" to visualize your database'
//                       : 'Describe your database requirements to see the visual schema here'}
//                   </p>
//                 </div>

//                 {/* Mock Schema Visualization (when generated) */}
//                 {generating && (
//                   <div className="absolute inset-0 bg-[#0a0510]/80 backdrop-blur-sm flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="w-16 h-16 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mx-auto mb-4"></div>
//                       <p className="text-white font-semibold">Analyzing requirements...</p>
//                       <p className="text-slate-400 text-sm mt-2">This usually takes a few seconds</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               // SQL Code View
//               <div className="absolute inset-0 overflow-auto p-4">
//                 <pre className="text-sm text-slate-300 font-mono">
//                   <code>{`-- Generated SQL Schema
// -- Database: e-commerce

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   email VARCHAR(255) UNIQUE NOT NULL,
//   name VARCHAR(100) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE products (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   description TEXT,
//   price DECIMAL(10, 2) NOT NULL,
//   stock_quantity INTEGER DEFAULT 0,
//   category_id INTEGER REFERENCES categories(id),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE orders (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   total_amount DECIMAL(10, 2) NOT NULL,
//   status VARCHAR(50) DEFAULT 'pending',
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Add more tables...`}</code>
//                 </pre>
//               </div>
//             )}
//           </div>

//           <div className="mt-4 flex items-center justify-between text-sm">
//             <span className="text-slate-400">
//               {viewMode === 'visual' ? '0 tables • 0 relationships' : 'PostgreSQL'}
//             </span>
//             <div className="flex items-center gap-2">
//               <button className="text-violet-400 hover:text-violet-300 transition">
//                 Copy SQL
//               </button>
//               <span className="text-slate-600">•</span>
//               <button className="text-violet-400 hover:text-violet-300 transition">
//                 Download
//               </button>
//             </div>
//           </div>
//         </GlassCard>
//       </div>

//       {/* Bottom Suggestions Panel */}
//       <GlassCard className="p-4">
//         <div className="flex items-center gap-2 text-sm text-slate-400">
//           <Sparkles size={16} className="text-violet-400" />
//           <span>Tip: Be specific about relationships, constraints, and data types for better results</span>
//         </div>
//       </GlassCard>
//     </div>
//   );
// };

// export default Editor;








// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Save,
//   Download,
//   Share2,
//   Code,
//   Eye,
//   Settings,
//   Maximize2,
//   Database,
//   Sparkles,
//   FileText,
//   ArrowLeft
// } from 'lucide-react';
// import GlassCard from '../../components/GlassCard';

// const Editor = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [userStory, setUserStory] = useState('');
//   const [generating, setGenerating] = useState(false);
//   const [viewMode, setViewMode] = useState('visual');

//   const handleGenerate = () => {
//     setGenerating(true);
//     setTimeout(() => setGenerating(false), 2000);
//   };

//   return (
//     <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-6">
//       {/* Top Bar */}
//       <GlassCard className="p-4 mb-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => navigate('/dashboard')}
//             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
//           >
//             <ArrowLeft size={18} />
//           </button>

//           <input
//             type="text"
//             defaultValue={id ? `Schema ${id}` : 'New Schema'}
//             className="text-xl font-semibold bg-transparent border-none text-white focus:outline-none"
//           />
//         </div>

//         <div className="flex items-center gap-2">
//           <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2">
//             <Save size={18} /> Save
//           </button>
//           <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2">
//             <Download size={18} /> Export
//           </button>
//           <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white">
//             <Settings size={18} />
//           </button>
//         </div>
//       </GlassCard>

//       {/* Main Area */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-10rem)]">
//         {/* Left */}
//         <GlassCard className="flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-2">
//               <FileText className="text-violet-400" />
//               <h2 className="text-lg font-semibold text-white">User Story</h2>
//             </div>

//             <button
//               onClick={handleGenerate}
//               disabled={generating}
//               className="gradient-button px-4 py-2 rounded-lg flex items-center gap-2"
//             >
//               {generating ? 'Generating...' : <><Sparkles size={16} /> Generate</>}
//             </button>
//           </div>

//           <textarea
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//             placeholder="Describe your database requirements..."
//             className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white resize-none"
//           />
//         </GlassCard>

//         {/* Right */}
//         <GlassCard className="flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-2">
//               <Database className="text-violet-400" />
//               <h2 className="text-lg font-semibold text-white">Schema Preview</h2>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setViewMode('visual')}
//                 className={`px-3 py-1 rounded-lg ${
//                   viewMode === 'visual'
//                     ? 'bg-violet-600 text-white'
//                     : 'bg-white/5 text-slate-400'
//                 }`}
//               >
//                 <Eye size={16} />
//               </button>

//               <button
//                 onClick={() => setViewMode('sql')}
//                 className={`px-3 py-1 rounded-lg ${
//                   viewMode === 'sql'
//                     ? 'bg-violet-600 text-white'
//                     : 'bg-white/5 text-slate-400'
//                 }`}
//               >
//                 <Code size={16} />
//               </button>

//               <button className="px-3 py-1 rounded-lg bg-white/5 text-slate-400">
//                 <Maximize2 size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400">
//             {viewMode === 'visual'
//               ? 'Visual schema will appear here'
//               : 'SQL schema will appear here'}
//           </div>
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Editor;











// import React, { useState } from 'react';
// import GlassCard from '../../components/GlassCard';
// import {
//   FileText,
//   Database,
//   Sparkles,
//   Code
// } from 'lucide-react';

// import ERDCanvas from './ERDCanvas';
// import SQLView from './SQLView';
// import LanguageSelector from './LanguageSelector';
// import { generateSchema } from '../../utils/api';

// const Editor = () => {
//   const [userStory, setUserStory] = useState('');
//   const [generating, setGenerating] = useState(false);
//   const [language, setLanguage] = useState('postgres');

//   // 🔑 SOURCE OF TRUTH
//   const [nodes, setNodes] = useState([]);
//   const [edges, setEdges] = useState([]);

//   const handleGenerate = async () => {
//     if (!userStory) return;

//     setGenerating(true);
//     try {
//      const result = await generateSchema({
//       prompt: userStory,
//       existingNodes: schema?.nodes || [],
//       existingEdges: schema?.edges || [],
//       language
//     });

//     setSchema(result);
//     } catch (err) {
//     console.error(err);
//     } finally {
//     setGenerating(false);
//     }
//   };


//   return (
//     <div className="h-[calc(100vh-8rem)] flex flex-col gap-4 p-4">
//       {/* Prompt Bar */}
//       <GlassCard className="p-4 flex items-center justify-between gap-4">
//         <div className="flex items-center gap-2 flex-1">
//           <FileText size={20} className="text-violet-400" />
//           <input
//             className="bg-transparent outline-none text-white font-semibold text-lg w-full"
//             placeholder="Describe or update your database schema..."
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleGenerate}
//           disabled={generating || !userStory}
//           className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white flex items-center gap-2 disabled:opacity-50"
//         >
//           {generating ? (
//             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//           ) : (
//             <>
//               <Sparkles size={18} />
//               Generate
//             </>
//           )}
//         </button>
//       </GlassCard>

//       {/* Main Panels */}
//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
//         {/* ERD Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Database size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">ERD Diagram</h2>
//             </div>

//             <LanguageSelector
//               language={language}
//               setLanguage={setLanguage}
//             />
//           </div>

//           <div className="flex-1 min-h-0">
//             <ERDCanvas
//               nodes={nodes}
//               setNodes={setNodes}
//               edges={edges}
//               setEdges={setEdges}
//             />
//           </div>
//         </GlassCard>

//         {/* Code Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Code size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">
//                 {language.toUpperCase()} Code
//               </h2>
//             </div>

//             <button
//               onClick={() =>
//                 navigator.clipboard.writeText(
//                   JSON.stringify({ nodes, edges }, null, 2)
//                 )
//               }
//               className="text-violet-400 hover:text-violet-300"
//             >
//               Copy
//             </button>
//           </div>

//           <div className="flex-1 overflow-auto">
//             <SQLView
//               nodes={nodes}
//               edges={edges}
//               language={language}
//             />
//           </div>
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Editor;









// import React, { useState } from 'react';
// import GlassCard from '../../components/GlassCard';
// import { FileText, Database, Sparkles, Code } from 'lucide-react';
// import ERDCanvas from './ERDCanvas';
// import SQLView from './SQLView';
// import LanguageSelector from './LanguageSelector';
// import { generateSchema, generateSQLFromSchema } from '../../utils/api';

// const Editor = () => {
//   const [userStory, setUserStory] = useState('');
//   const [schema, setSchema] = useState({ tables: [],
//   relations: [], });
//   const [generating, setGenerating] = useState(false);
//   const [language, setLanguage] = useState('postgres');

//   const handleGenerate = async () => {
//   if (!userStory.trim()) return;

//   setGenerating(true);

//   try {
//     const result = await generateSchema({
//       prompt: userStory,
//       existingNodes: schema?.nodes || [],
//       existingEdges: schema?.edges || [],
//       language
//     });

//     setSchema(result);
//   } catch (error) {
//     console.error('Error generating schema:', error);
//   } finally {
//     setGenerating(false);
//   }
// };


//   const sqlCode = generateSQLFromSchema(schema, language);

//   return (
//     <div className="h-[calc(100vh-8rem)] flex flex-col gap-4 p-4">
//       <GlassCard className="p-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <FileText size={20} />
//           <input
//             className="bg-transparent outline-none text-white font-semibold text-lg w-64"
//             placeholder="Describe your schema"
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={handleGenerate}
//           disabled={generating || !userStory}
//           className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white flex items-center gap-2 disabled:opacity-50"
//         >
//           {generating ? (
//             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//           ) : (
//             <>
//               <Sparkles size={18} /> Generate
//             </>
//           )}
//         </button>
//       </GlassCard>

//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
//         {/* ERD Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Database size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">ERD Diagram</h2>
//             </div>
//             <LanguageSelector language={language} setLanguage={setLanguage} />
//           </div>
//           <ERDCanvas schema={schema} setSchema={setSchema} />
//         </GlassCard>

//         {/* SQL Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Code size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">{language.toUpperCase()} Code</h2>
//             </div>
//             <button
//               onClick={() => navigator.clipboard.writeText(sqlCode)}
//               className="text-violet-400 hover:text-violet-300"
//             >
//               Copy
//             </button>
//           </div>
//           <SQLView code={sqlCode} />
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Editor;













// import React, { useState } from "react";
// import GlassCard from "../../components/GlassCard";
// import { FileText, Database, Sparkles, Code } from "lucide-react";
// import ERDCanvas from "./ERDCanvas";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchema } from "../../utils/api";

// const Editor = () => {
//   const [userStory, setUserStory] = useState("");

//   // ✅ ALWAYS initialize schema safely
//   const [schema, setSchema] = useState({
//     tables: [],
//     relations: [],
//   });

//   const [generating, setGenerating] = useState(false);
//   const [language, setLanguage] = useState("postgres");

//   /**
//    * 🔮 AI → Schema generation
//    */
//   const handleGenerate = async () => {
//     if (!userStory.trim()) return;

//     setGenerating(true);

//     try {
//       const result = await generateSchema({
//         prompt: userStory,
//         language,
//       });

//       // ✅ Normalize result defensively
//       setSchema({
//         tables: Array.isArray(result?.tables) ? result.tables : [],
//         relations: Array.isArray(result?.relations) ? result.relations : [],
//       });
//     } catch (error) {
//       console.error("Error generating schema:", error);
//     } finally {
//       setGenerating(false);
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-8rem)] flex flex-col gap-4 p-4">
//       {/* Prompt Bar */}
//       <GlassCard className="p-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <FileText size={20} />
//           <input
//             className="bg-transparent outline-none text-white font-semibold text-lg w-64"
//             placeholder="Describe your schema (e.g. Users, Orders, Products)"
//             value={userStory}
//             onChange={(e) => setUserStory(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleGenerate}
//           disabled={generating || !userStory}
//           className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white flex items-center gap-2 disabled:opacity-50"
//         >
//           {generating ? (
//             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//           ) : (
//             <>
//               <Sparkles size={18} /> Generate
//             </>
//           )}
//         </button>
//       </GlassCard>

//       {/* Main Panels */}
//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
//         {/* ERD Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Database size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">ERD Diagram</h2>
//             </div>
//             <LanguageSelector language={language} setLanguage={setLanguage} />
//           </div>

//           <ERDCanvas schema={schema} setSchema={setSchema} />
//         </GlassCard>

//         {/* SQL Panel */}
//         <GlassCard className="p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <Code size={20} className="text-violet-400" />
//               <h2 className="text-white font-semibold">
//                 {language.toUpperCase()} SQL
//               </h2>
//             </div>
//           </div>

//           {/* ✅ SQLView now generates SQL internally */}
//           <SQLView schema={schema} language={language} />
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Editor;












// // src/pages/Editor/Editor.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   // Only store schema and dialect in state (single source of truth)
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("E-commerce system with users, products, orders, payments");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Generate schema from prompt
//   const onGenerate = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       setSchema(result);
//     } catch (e) {
//       setError("Failed to generate schema.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Derived SQL from schema (no crashes)
//   const sql = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   // Example initial generation
//   useEffect(() => {
//     onGenerate();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Handlers to update schema from TableEditor (bidirectional sync)
//   const updateTable = (tableName, updater) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) =>
//         t.name === tableName ? updater(t) : t
//       );
//       return { ...prev, tables };
//     });
//   };

//   const addTable = (newTable) => {
//     setSchema((prev) => ({
//       ...prev,
//       tables: [...prev.tables, newTable],
//     }));
//   };

//   const removeTable = (tableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.filter((t) => t.name !== tableName);
//       const relations = prev.relations.filter(
//         (r) => r.fromTable !== tableName && r.toTable !== tableName
//       );
//       return { tables, relations };
//     });
//   };

//   const addRelation = (relation) => {
//     setSchema((prev) => ({
//       ...prev,
//       relations: [...prev.relations, relation],
//     }));
//   };

//   const removeRelation = (predicate) => {
//     setSchema((prev) => ({
//       ...prev,
//       relations: prev.relations.filter((r) => !predicate(r)),
//     }));
//   };

//   return (
//     <div className="editor-root" style={{ display: "grid", gridTemplateColumns: "320px 1fr", height: "calc(100vh - 80px)" }}>
//       <div style={{ borderRight: "1px solid rgba(255,255,255,0.1)", padding: 12 }}>
//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Prompt</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           style={{ width: "100%", marginBottom: 8 }}
//         />
//         <button disabled={loading} onClick={onGenerate} style={{ marginBottom: 16 }}>
//           {loading ? "Generating..." : "Generate ERD"}
//         </button>

//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Dialect</h3>
//         <LanguageSelector value={dialect} onChange={setDialect} />

//         <h3 style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>Table editor</h3>
//         <TableEditor
//           schema={schema}
//           onUpdateTable={updateTable}
//           onAddTable={addTable}
//           onRemoveTable={removeTable}
//           onAddRelation={addRelation}
//           onRemoveRelation={removeRelation}
//         />

//         {error && <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>}
//       </div>

//       <div style={{ display: "grid", gridTemplateRows: "1fr 240px" }}>
//         <div style={{ background: "rgba(0,0,0,0.2)" }}>
//           <ERDCanvas schema={schema} />
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: 12 }}>
//           <SQLView sql={sql} />
//         </div>
//       </div>
//     </div>
//   );
// }











// // src/pages/Editor/Editor.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   // Unified schema state
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState(
//     "E-commerce system with users, products, orders, payments"
//   );
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Modal editor state
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   // Generate schema from prompt
//   const onGenerate = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       setSchema(result);
//     } catch (e) {
//       setError("Failed to generate schema.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Derived SQL from schema
//   const sql = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   // Initial generation
//   useEffect(() => {
//     onGenerate();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Handlers for schema updates
//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns)
//               ? updatedColumns
//               : t.columns,
//           };
//         }
//         return t;
//       });
//       // Update relations if table name changed
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   // Example: open editor for first table (you can wire this to ERDCanvas events)
//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//       }}
//     >
//       <div
//         style={{
//           borderRight: "1px solid rgba(255,255,255,0.1)",
//           padding: 12,
//         }}
//       >
//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Prompt</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           style={{ width: "100%", marginBottom: 8 }}
//         />
//         <button
//           disabled={loading}
//           onClick={onGenerate}
//           style={{ marginBottom: 16 }}
//         >
//           {loading ? "Generating..." : "Generate ERD"}
//         </button>

//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Dialect</h3>
//         <LanguageSelector value={dialect} onChange={setDialect} />

//         <h3 style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>
//           Tables
//         </h3>
//         <ul style={{ color: "#ccc", fontSize: "0.9em" }}>
//           {schema.tables.map((t) => (
//             <li key={t.name}>
//               {t.name}{" "}
//               <button
//                 style={{
//                   marginLeft: 8,
//                   fontSize: "0.8em",
//                   color: "#6cf",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => openEditorForTable(t.name)}
//               >
//                 Edit
//               </button>
//             </li>
//           ))}
//         </ul>

//         {error && (
//           <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>
//         )}
//       </div>

//       <div style={{ display: "grid", gridTemplateRows: "1fr 240px" }}>
//         <div style={{ background: "rgba(0,0,0,0.2)" }}>
//           <ERDCanvas schema={schema} />
//         </div>
//         <div
//           style={{
//             borderTop: "1px solid rgba(255,255,255,0.1)",
//             padding: 12,
//           }}
//         >
//           <SQLView sql={sql} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor
//           node={selectedNode}
//           onSave={updateTableColumns}
//           onClose={closeEditor}
//         />
//       )}
//     </div>
//   );
// }












// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const onGenerate = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       setSchema(result);
//     } catch (e) {
//       setError("Failed to generate schema.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sql = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   useEffect(() => {
//     onGenerate();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//       }}
//     >
//       <div
//         style={{
//           borderRight: "1px solid rgba(255,255,255,0.1)",
//           padding: 12,
//         }}
//       >
//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Prompt</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           style={{ width: "100%", marginBottom: 8 }}
//         />
//         <button disabled={loading} onClick={onGenerate} style={{ marginBottom: 16 }}>
//           {loading ? "Generating..." : "Generate ERD"}
//         </button>

//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Dialect</h3>
//         <LanguageSelector value={dialect} onChange={setDialect} />

//         <h3 style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>Tables</h3>
//         <ul style={{ color: "#ccc", fontSize: "0.9em" }}>
//           {schema.tables.map((t) => (
//             <li key={t.name}>
//               {t.name}{" "}
//               <button
//                 style={{
//                   marginLeft: 8,
//                   fontSize: "0.8em",
//                   color: "#6cf",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => openEditorForTable(t.name)}
//               >
//                 Edit
//               </button>
//             </li>
//           ))}
//         </ul>

//         {error && <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>}
//       </div>

//       <div style={{ display: "grid", gridTemplateRows: "1fr 240px" }}>
//         <div style={{ background: "rgba(0,0,0,0.2)" }}>
//           <ERDCanvas schema={schema} />
//         </div>
//         <div
//           style={{
//             borderTop: "1px solid rgba(255,255,255,0.1)",
//             padding: 12,
//           }}
//         >
//           <SQLView sql={sql} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }












// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "integer", nullable: false },
//         ],
//       },
//       {
//         name: "transactions",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "account_id", type: "uuid", fk: true, nullable: false },
//           { name: "amount", type: "integer", nullable: false },
//           { name: "timestamp", type: "timestamp", nullable: false },
//         ],
//       },
//     ],
//     relations: [
//       {
//         fromTable: "accounts",
//         fromColumn: "customer_id",
//         toTable: "customers",
//         toColumn: "id",
//         type: "many-to-one",
//       },
//       {
//         fromTable: "transactions",
//         fromColumn: "account_id",
//         toTable: "accounts",
//         toColumn: "id",
//         type: "many-to-one",
//       },
//     ],
//   };

//   const onGenerate = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       if (!result || !result.tables || result.tables.length === 0) {
//         throw new Error("Empty schema");
//       }
//       setSchema(result);
//     } catch (e) {
//       console.error("Schema generation failed:", e);
//       setError("Failed to generate schema. Showing fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sql = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   useEffect(() => {
//     onGenerate();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//       }}
//     >
//       <div
//         style={{
//           borderRight: "1px solid rgba(255,255,255,0.1)",
//           padding: 12,
//         }}
//       >
//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Prompt</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           style={{ width: "100%", marginBottom: 8 }}
//         />
//         <button disabled={loading} onClick={onGenerate} style={{ marginBottom: 16 }}>
//           {loading ? "Generating..." : "Generate ERD"}
//         </button>

//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Dialect</h3>
//         <LanguageSelector value={dialect} onChange={setDialect} />

//         <h3 style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>Tables</h3>
//         <ul style={{ color: "#ccc", fontSize: "0.9em" }}>
//           {schema.tables.map((t) => (
//             <li key={t.name}>
//               {t.name}{" "}
//               <button
//                 style={{
//                   marginLeft: 8,
//                   fontSize: "0.8em",
//                   color: "#6cf",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => openEditorForTable(t.name)}
//               >
//                 Edit
//               </button>
//             </li>
//           ))}
//         </ul>

//         {error && <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>}
//       </div>

//       <div style={{ display: "grid", gridTemplateRows: "1fr 240px" }}>
//         <div style={{ background: "rgba(0,0,0,0.2)" }}>
//           <ERDCanvas schema={schema} />
//         </div>
//         <div
//           style={{
//             borderTop: "1px solid rgba(255,255,255,0.1)",
//             padding: 12,
//           }}
//         >
//           <SQLView sql={sql} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }











// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "integer", nullable: false },
//         ],
//       },
//       {
//         name: "transactions",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "account_id", type: "uuid", fk: true, nullable: false },
//           { name: "amount", type: "integer", nullable: false },
//           { name: "timestamp", type: "timestamp", nullable: false },
//         ],
//       },
//     ],
//     relations: [
//       {
//         fromTable: "accounts",
//         fromColumn: "customer_id",
//         toTable: "customers",
//         toColumn: "id",
//         type: "many-to-one",
//       },
//       {
//         fromTable: "transactions",
//         fromColumn: "account_id",
//         toTable: "accounts",
//         toColumn: "id",
//         type: "many-to-one",
//       },
//     ],
//   };

//   const onGenerate = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       if (!result || !result.tables || result.tables.length === 0) {
//         throw new Error("Empty schema");
//       }
//       setSchema(result);
//     } catch (e) {
//       console.error("Schema generation failed:", e);
//       setError("Failed to generate schema. Showing fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sql = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   useEffect(() => {
//     onGenerate();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//       }}
//     >
//       <div
//         style={{
//           borderRight: "1px solid rgba(255,255,255,0.1)",
//           padding: 12,
//         }}
//       >
//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Prompt</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           style={{ width: "100%", marginBottom: 8 }}
//         />
//         <button disabled={loading} onClick={onGenerate} style={{ marginBottom: 16 }}>
//           {loading ? "Generating..." : "Generate ERD"}
//         </button>

//         <h3 style={{ color: "#fff", marginBottom: 8 }}>Dialect</h3>
//         <LanguageSelector value={dialect} onChange={setDialect} />

//         <h3 style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>Tables</h3>
//         <ul style={{ color: "#ccc", fontSize: "0.9em" }}>
//           {schema.tables.map((t) => (
//             <li key={t.name}>
//               {t.name}{" "}
//               <button
//                 style={{
//                   marginLeft: 8,
//                   fontSize: "0.8em",
//                   color: "#6cf",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => openEditorForTable(t.name)}
//               >
//                 Edit
//               </button>
//             </li>
//           ))}
//         </ul>

//         {error && <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>}
//       </div>

//       <div style={{ display: "grid", gridTemplateRows: "1fr 240px" }}>
//         <div style={{ background: "rgba(0,0,0,0.2)" }}>
//           <ERDCanvas schema={schema} />
//         </div>
//         <div
//           style={{
//             borderTop: "1px solid rgba(255,255,255,0.1)",
//             padding: 12,
//           }}
//         >
//           <SQLView sql={sql} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }













// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// // Ensure your api.js is updated to point to http://localhost:5000/api/generate-schema
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   // Keep your fallback as a safety net
//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       // ... rest of your fallback tables
//     ],
//     relations: [],
//   };

//   const onGenerate = async () => {
//     if (!prompt) return;
    
//     setLoading(true);
//     setError("");
    
//     try {
//       // This calls your backend POST http://localhost:5000/api/generate-schema
//       const result = await generateSchemaFromPrompt(prompt);
      
//       // If the AI returns a structure with 'tables', we update the state
//       if (result && result.tables) {
//         setSchema(result);
//         console.log("✅ Schema generated successfully from AI");
//       } else if (result && result.sql) {
//          // Logic for if your backend returns raw SQL/ERD strings instead of objects
//          // You might need to parse these if your ERDCanvas requires objects
//          console.warn("AI returned raw strings, but Canvas expects objects.");
//          setSchema(result); 
//       } else {
//         throw new Error("Invalid format from server");
//       }
//     } catch (e) {
//       console.error("Schema generation failed:", e);
//       setError("AI generation failed. Using fallback layout.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Your existing SQL generation logic based on the schema object
//   const sql = useMemo(() => {
//     try {
//       // If the AI gives us raw SQL already, use it, otherwise generate it
//       if (schema.sql) return schema.sql;
//       return generateSQL(schema, dialect) || "-- No SQL.";
//     } catch {
//       return "-- SQL generation failed safely.";
//     }
//   }, [schema, dialect]);

//   useEffect(() => {
//     // Optionally auto-generate on load
//     // onGenerate(); 
//   }, []);

//   // --- Your existing UI and Edit logic ---
//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//         background: "#1a1a1a" // Dark theme for editor
//       }}
//     >
//       {/* Sidebar Controls */}
//       <div style={{ borderRight: "1px solid rgba(255,255,255,0.1)", padding: 16 }}>
//         <h3 style={{ color: "#fff", marginBottom: 12 }}>Generate with AI</h3>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Describe your database..."
//           rows={5}
//           style={{ 
//             width: "100%", 
//             marginBottom: 12, 
//             padding: '8px',
//             background: '#333',
//             color: '#fff',
//             border: '1px solid #444',
//             borderRadius: '4px'
//           }}
//         />
//         <button 
//           disabled={loading} 
//           onClick={onGenerate} 
//           style={{ 
//             width: "100%", 
//             padding: '10px',
//             backgroundColor: loading ? '#555' : '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: loading ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {loading ? "AI is drawing..." : "✨ Generate Design"}
//         </button>

//         <div style={{ marginTop: 24 }}>
//           <h3 style={{ color: "#fff", marginBottom: 8 }}>Database Dialect</h3>
//           <LanguageSelector value={dialect} onChange={setDialect} />
//         </div>

//         <div style={{ marginTop: 24 }}>
//           <h3 style={{ color: "#fff", marginBottom: 8 }}>Table List</h3>
//           <ul style={{ color: "#ccc", listStyle: 'none', padding: 0 }}>
//             {schema.tables && schema.tables.map((t) => (
//               <li key={t.name} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
//                 <span>{t.name}</span>
//                 <button
//                   style={{ color: "#6cf", background: "none", border: "none", cursor: "pointer" }}
//                   onClick={() => openEditorForTable(t.name)}
//                 >
//                   Edit
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {error && <div style={{ color: "#ff6b6b", marginTop: 12, fontSize: '0.85em' }}>{error}</div>}
//       </div>

//       {/* Main Content Areas */}
//       <div style={{ display: "grid", gridTemplateRows: "1fr 280px" }}>
//         {/* The Visual ERD Canvas */}
//         <div style={{ position: 'relative', overflow: 'hidden' }}>
//           <ERDCanvas schema={schema} />
//         </div>
        
//         {/* The SQL Code View */}
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: '#121212' }}>
//           <SQLView sql={sql} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }












// import React, { useEffect, useMemo, useState } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres");
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "decimal", nullable: false },
//         ],
//       }
//     ],
//     relations: [
//       { fromTable: "accounts", fromColumn: "customer_id", toTable: "customers", toColumn: "id", type: "many-to-one" }
//     ],
//   };

//   // --- 1. Lightning Fast Generation Hook ---
//   const onGenerate = async () => {
//     if (!prompt) return;
    
//     setLoading(true);
//     setError("");
    
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
      
//       // Validation: Ensure we have the structure needed for Best Practices
//       if (result && Array.isArray(result.tables)) {
//         setSchema(result);
//         console.log("✅ Professional Schema & Relations Loaded");
//       } else {
//         throw new Error("AI returned an incompatible data format.");
//       }
//     } catch (e) {
//       console.error("Generation Error:", e);
//       setError("AI generation failed. Using normalized fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 2. Multi-Dialect SQL Generation ---
//   const sql = useMemo(() => {
//     try {
//       // Passes current dialect to utility for real-time translation
//       return generateSQL(schema, dialect) || "-- SQL will be generated here.";
//     } catch {
//       return "-- Error generating SQL for this dialect.";
//     }
//   }, [schema, dialect]);

//   // --- 3. Relationship Edge Mapping ---
//   // This ensures the ERDCanvas shows the connection lines
//   const relationsWithEdges = useMemo(() => {
//     return {
//       ...schema,
//       edges: (schema.relations || []).map((rel, idx) => ({
//         id: `e-${rel.fromTable}-${rel.toTable}-${idx}`,
//         source: rel.fromTable,
//         target: rel.toTable,
//         label: rel.type,
//         animated: true,
//         style: { stroke: '#6cf' }
//       }))
//     };
//   }, [schema]);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//         background: "#0f172a", // Sleek professional dark blue
//         color: "#f8fafc"
//       }}
//     >
//       {/* Sidebar Controls */}
//       <div style={{ borderRight: "1px solid #1e293b", padding: 20, overflowY: 'auto' }}>
//         <h2 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#38bdf8' }}>AI Architect</h2>
        
//         <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: 10 }}>
//           Describe your business logic or user stories
//         </p>
        
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., E-commerce with product categories and reviews"
//           rows={6}
//           style={{ 
//             width: "100%", 
//             marginBottom: 15, 
//             padding: '12px',
//             background: '#1e293b',
//             color: '#fff',
//             border: '1px solid #334155',
//             borderRadius: '8px',
//             resize: 'none'
//           }}
//         />
        
//         <button 
//           disabled={loading} 
//           onClick={onGenerate} 
//           style={{ 
//             width: "100%", 
//             padding: '12px',
//             backgroundColor: loading ? '#334155' : '#0ea5e9',
//             color: 'white',
//             fontWeight: 'bold',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             transition: 'background 0.2s'
//           }}
//         >
//           {loading ? "Architecting..." : "⚡ Generate Schema"}
//         </button>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Target SQL Dialect</h3>
//           <LanguageSelector value={dialect} onChange={setDialect} />
//         </div>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Live Table Inventory</h3>
//           <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//             {schema.tables && schema.tables.map((t) => (
//               <div key={t.name} style={{ 
//                 padding: '8px 12px', 
//                 background: '#1e293b', 
//                 borderRadius: '6px', 
//                 marginBottom: 6,
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 fontSize: '0.85rem'
//               }}>
//                 <span>{t.name}</span>
//                 <button
//                   style={{ color: "#38bdf8", background: "none", border: "none", cursor: "pointer" }}
//                   onClick={() => openEditorForTable(t.name)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//         {error && <div style={{ color: "#fb7185", marginTop: 15, fontSize: '0.8rem' }}>{error}</div>}
//       </div>

//       {/* Main Content Areas */}
//       <div style={{ display: "grid", gridTemplateRows: "1fr 300px" }}>
//         {/* Visual ERD Canvas with Edge Support */}
//         <div style={{ position: 'relative', background: '#020617' }}>
//           <ERDCanvas schema={relationsWithEdges} />
//         </div>
        
//         {/* SQL Code View */}
//         <div style={{ borderTop: "1px solid #1e293b" }}>
//           <SQLView sql={sql} dialect={dialect} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }










// import React, { useEffect, useMemo, useState, useCallback } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres"); // postgres, mysql, mongodb, prisma
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "decimal", nullable: false },
//         ],
//       }
//     ],
//     relations: [
//       { fromTable: "accounts", fromColumn: "customer_id", toTable: "customers", toColumn: "id", type: "many-to-one" }
//     ],
//   };

//   // --- 1. BI-DIRECTIONAL SYNC CALLBACK ---
//   // This allows the ERDCanvas to update the Editor's state when a user
//   // moves a table or creates a new relationship line manually.
//   const handleSchemaUpdate = useCallback((updatedSchema) => {
//     setSchema(updatedSchema);
//   }, []);

//   const onGenerate = async () => {
//     if (!prompt) return;
//     setLoading(true);
//     setError("");
    
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       if (result && Array.isArray(result.tables)) {
//         setSchema(result);
//         console.log("✅ Professional Schema & Relations Loaded");
//       } else {
//         throw new Error("AI returned an incompatible data format.");
//       }
//     } catch (e) {
//       console.error("Generation Error:", e);
//       setError("AI generation failed. Using normalized fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 2. MULTI-CODE GENERATION (SQL, MongoDB, Prisma) ---
//   const codeOutput = useMemo(() => {
//     try {
//       // generateSQL now handles 'mongodb' and 'prisma' based on the api.js update
//       return generateSQL(schema, dialect) || "-- Code will be generated here.";
//     } catch (error) {
//       return "-- Error generating code for this dialect.";
//     }
//   }, [schema, dialect]);

//   // --- 3. EDGE MAPPING FOR CANVAS ---
//   const relationsWithEdges = useMemo(() => {
//     return {
//       ...schema,
//       edges: (schema.relations || []).map((rel, idx) => ({
//         id: `e-${rel.fromTable}-${rel.toTable}-${idx}`,
//         source: rel.fromTable,
//         target: rel.toTable,
//         label: rel.type,
//         animated: true,
//         style: { stroke: '#6cf' }
//       }))
//     };
//   }, [schema]);

//   // UI helpers
//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//         background: "#0f172a",
//         color: "#f8fafc"
//       }}
//     >
//       {/* Sidebar Controls */}
//       <div style={{ borderRight: "1px solid #1e293b", padding: 20, overflowY: 'auto' }}>
//         <h2 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#38bdf8' }}>AI Architect</h2>
        
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., E-commerce with product categories and reviews"
//           rows={6}
//           style={{ 
//             width: "100%", marginBottom: 15, padding: '12px', background: '#1e293b',
//             color: '#fff', border: '1px solid #334155', borderRadius: '8px', resize: 'none'
//           }}
//         />
        
//         <button 
//           disabled={loading} 
//           onClick={onGenerate} 
//           style={{ 
//             width: "100%", padding: '12px', backgroundColor: loading ? '#334155' : '#0ea5e9',
//             color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {loading ? "Architecting..." : "⚡ Generate Schema"}
//         </button>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Select Export Format</h3>
//           {/* Ensure LanguageSelector includes "mongodb" and "prisma" options */}
//           <LanguageSelector value={dialect} onChange={setDialect} />
//         </div>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Live Table Inventory</h3>
//           <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//             {schema.tables.map((t) => (
//               <div key={t.name} style={{ 
//                 padding: '8px 12px', background: '#1e293b', borderRadius: '6px', 
//                 marginBottom: 6, display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem'
//               }}>
//                 <span>{t.name}</span>
//                 <button
//                   style={{ color: "#38bdf8", background: "none", border: "none", cursor: "pointer" }}
//                   onClick={() => openEditorForTable(t.name)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Areas */}
//       <div style={{ display: "grid", gridTemplateRows: "1fr 300px" }}>
//         <div style={{ position: 'relative', background: '#020617' }}>
//           {/* Passed onSchemaUpdate to enable Bidirectional changes from the canvas */}
//           <ERDCanvas schema={relationsWithEdges} onSchemaChange={handleSchemaUpdate} />
//         </div>
        
//         <div style={{ borderTop: "1px solid #1e293b" }}>
//           {/* SQLView displays SQL, Prisma, or MongoDB code */}
//           <SQLView sql={codeOutput} dialect={dialect} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }









// import React, { useEffect, useMemo, useState, useCallback } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres"); // postgres, mysql, mongodb, prisma
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "decimal", nullable: false },
//         ],
//       }
//     ],
//     relations: [
//       { fromTable: "accounts", fromColumn: "customer_id", toTable: "customers", toColumn: "id", type: "many-to-one" }
//     ],
//   };

//   // --- 1. BI-DIRECTIONAL SYNC CALLBACK ---
//   const handleSchemaUpdate = useCallback((updatedSchema) => {
//     setSchema(updatedSchema);
//   }, []);

//   const onGenerate = async () => {
//     if (!prompt) return;
//     setLoading(true);
//     setError("");
    
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       if (result && Array.isArray(result.tables)) {
//         setSchema(result);
//         console.log("✅ Professional Schema & Relations Loaded");
//       } else {
//         throw new Error("AI returned an incompatible data format.");
//       }
//     } catch (e) {
//       console.error("Generation Error:", e);
//       setError("AI generation failed. Using normalized fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 2. MULTI-CODE GENERATION ---
//   const codeOutput = useMemo(() => {
//     try {
//       return generateSQL(schema, dialect) || "-- Code will be generated here.";
//     } catch (error) {
//       return "-- Error generating code.";
//     }
//   }, [schema, dialect]);

//   // --- 3. EDGE MAPPING FOR CANVAS ---
//   const relationsWithEdges = useMemo(() => {
//     return {
//       ...schema,
//       edges: (schema.relations || []).map((rel, idx) => ({
//         id: `e-${rel.fromTable}-${rel.toTable}-${idx}`,
//         source: rel.fromTable,
//         target: rel.toTable,
//         label: rel.type,
//         animated: true,
//         style: { stroke: '#6cf' }
//       }))
//     };
//   }, [schema]);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//         background: "#0f172a",
//         color: "#f8fafc"
//       }}
//     >
//       {/* Sidebar Controls */}
//       <div style={{ borderRight: "1px solid #1e293b", padding: 20, overflowY: 'auto' }}>
//         <h2 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#38bdf8' }}>AI Architect</h2>
        
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., E-commerce with product categories and reviews"
//           rows={6}
//           style={{ 
//             width: "100%", marginBottom: 15, padding: '12px', background: '#1e293b',
//             color: '#fff', border: '1px solid #334155', borderRadius: '8px', resize: 'none'
//           }}
//         />
        
//         <button 
//           disabled={loading} 
//           onClick={onGenerate} 
//           style={{ 
//             width: "100%", padding: '12px', backgroundColor: loading ? '#334155' : '#0ea5e9',
//             color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {loading ? "Architecting..." : "⚡ Generate Schema"}
//         </button>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Select Export Format</h3>
//           <LanguageSelector value={dialect} onChange={setDialect} />
//         </div>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Live Table Inventory</h3>
//           <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }} className="custom-scrollbar">
//             {schema.tables.map((t) => (
//               <div key={t.name} style={{ 
//                 padding: '8px 12px', background: '#1e293b', borderRadius: '6px', 
//                 marginBottom: 6, display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem'
//               }}>
//                 <span>{t.name}</span>
//                 <button
//                   style={{ color: "#38bdf8", background: "none", border: "none", cursor: "pointer" }}
//                   onClick={() => openEditorForTable(t.name)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Areas */}
//       <div style={{ display: "grid", gridTemplateRows: "1fr 300px", overflow: 'hidden' }}>
        
//         {/* --- SCROLLABLE ERD AREA --- */}
//         <div style={{ 
//           position: 'relative', 
//           background: '#020617', 
//           overflow: 'auto', // Enables scrolling
//           height: '100%',
//           width: '100%'
//         }} className="custom-scrollbar">
//           {/* We use a large inner container if you want to force traditional scrollbars, 
//               but React Flow handles internal zooming/panning automatically. */}
//           <div style={{ height: '100%', width: '100%', minWidth: '800px' }}>
//             <ERDCanvas schema={relationsWithEdges} onSchemaChange={handleSchemaUpdate} />
//           </div>
//         </div>
        
//         {/* SQL Code View */}
//         <div style={{ borderTop: "1px solid #1e293b", overflow: 'auto' }} className="custom-scrollbar">
//           <SQLView sql={codeOutput} dialect={dialect} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }

















// import React, { useEffect, useMemo, useState, useCallback } from "react";
// import ERDCanvas from "./ERDCanvas";
// import TableEditor from "./TableEditor";
// import SQLView from "./SQLView";
// import LanguageSelector from "./LanguageSelector";
// import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
// import "../../index.css";

// export default function Editor() {
//   const [schema, setSchema] = useState({ tables: [], relations: [] });
//   const [dialect, setDialect] = useState("postgres"); 
//   const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [selectedNode, setSelectedNode] = useState(null);
//   const [showEditor, setShowEditor] = useState(false);

//   const fallbackSchema = {
//     tables: [
//       {
//         name: "customers",
//         columns: [
//           { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
//           { name: "name", type: "varchar(255)", nullable: false },
//           { name: "email", type: "varchar(255)", unique: true, nullable: false },
//         ],
//       },
//       {
//         name: "accounts",
//         columns: [
//           { name: "id", type: "uuid", pk: true, nullable: false },
//           { name: "customer_id", type: "uuid", fk: true, nullable: false },
//           { name: "balance", type: "decimal", nullable: false },
//         ],
//       }
//     ],
//     relations: [
//       { fromTable: "accounts", fromColumn: "customer_id", toTable: "customers", toColumn: "id", type: "many-to-one" }
//     ],
//   };

//   // --- 1. BI-DIRECTIONAL SYNC CALLBACK ---
//   // When 'Apply Changes' is clicked in ERDCanvas, this updates the state
//   // and automatically refreshes the code in SQLView.
//   const handleSchemaUpdate = useCallback((updatedSchema) => {
//     console.log("🔄 Updating Schema from Canvas:", updatedSchema);
//     setSchema(updatedSchema);
//   }, []);

//   const onGenerate = async () => {
//     if (!prompt) return;
//     setLoading(true);
//     setError("");
    
//     try {
//       const result = await generateSchemaFromPrompt(prompt);
//       if (result && Array.isArray(result.tables)) {
//         setSchema(result);
//         console.log("✅ Professional Schema & Relations Loaded");
//       } else {
//         throw new Error("AI returned an incompatible data format.");
//       }
//     } catch (e) {
//       console.error("Generation Error:", e);
//       setError("AI generation failed. Using normalized fallback.");
//       setSchema(fallbackSchema);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- 2. MULTI-CODE GENERATION ---
//   // This re-runs every time 'schema' or 'dialect' changes
//   const codeOutput = useMemo(() => {
//     try {
//       // If generateSQL handles SQL, MongoDB, and Prisma, this is the main logic
//       return generateSQL(schema, dialect) || "-- Code will be generated here.";
//     } catch (error) {
//       console.error("Code Generation Error:", error);
//       return "-- Error generating code.";
//     }
//   }, [schema, dialect]);

//   // --- 3. EDGE MAPPING FOR CANVAS ---
//   const relationsWithEdges = useMemo(() => {
//     return {
//       ...schema,
//       edges: (schema.relations || []).map((rel, idx) => ({
//         id: `e-${rel.fromTable}-${rel.toTable}-${idx}`,
//         source: rel.fromTable,
//         target: rel.toTable,
//         label: rel.type,
//         animated: true,
//         data: { fk: rel.fromColumn }, // Carry FK data for bidirectional logic
//         style: { stroke: '#38bdf8', strokeWidth: 2 }
//       }))
//     };
//   }, [schema]);

//   const updateTableColumns = (updatedColumns, updatedTableName) => {
//     setSchema((prev) => {
//       const tables = prev.tables.map((t) => {
//         if (t.name === selectedNode?.data?.name) {
//           return {
//             ...t,
//             name: updatedTableName || t.name,
//             columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
//           };
//         }
//         return t;
//       });
//       const oldName = selectedNode?.data?.name;
//       const newName = updatedTableName || oldName;
//       const relations = prev.relations.map((r) => ({
//         ...r,
//         fromTable: r.fromTable === oldName ? newName : r.fromTable,
//         toTable: r.toTable === oldName ? newName : r.toTable,
//       }));
//       return { tables, relations };
//     });
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const closeEditor = () => {
//     setShowEditor(false);
//     setSelectedNode(null);
//   };

//   const openEditorForTable = (tableName) => {
//     const table = schema.tables.find((t) => t.name === tableName);
//     if (!table) return;
//     const node = { data: { name: table.name, columns: table.columns } };
//     setSelectedNode(node);
//     setShowEditor(true);
//   };

//   return (
//     <div
//       className="editor-root"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "320px 1fr",
//         height: "calc(100vh - 80px)",
//         background: "#0f172a",
//         color: "#f8fafc"
//       }}
//     >
//       {/* Sidebar Controls */}
//       <div style={{ borderRight: "1px solid #1e293b", padding: 20, overflowY: 'auto' }} className="custom-scrollbar">
//         <h2 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#38bdf8' }}>AI Architect</h2>
        
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g., E-commerce with product categories and reviews"
//           rows={6}
//           style={{ 
//             width: "100%", marginBottom: 15, padding: '12px', background: '#1e293b',
//             color: '#fff', border: '1px solid #334155', borderRadius: '8px', resize: 'none'
//           }}
//         />
        
//         <button 
//           disabled={loading} 
//           onClick={onGenerate} 
//           style={{ 
//             width: "100%", padding: '12px', backgroundColor: loading ? '#334155' : '#0ea5e9',
//             color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {loading ? "Architecting..." : "⚡ Generate Schema"}
//         </button>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Select Export Format</h3>
//           <LanguageSelector value={dialect} onChange={setDialect} />
//         </div>

//         <div style={{ marginTop: 30 }}>
//           <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Live Table Inventory</h3>
//           <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }} className="custom-scrollbar">
//             {schema.tables.map((t) => (
//               <div key={t.name} style={{ 
//                 padding: '8px 12px', background: '#1e293b', borderRadius: '6px', 
//                 marginBottom: 6, display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem'
//               }}>
//                 <span>{t.name}</span>
//                 <button
//                   style={{ color: "#38bdf8", background: "none", border: "none", cursor: "pointer" }}
//                   onClick={() => openEditorForTable(t.name)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Areas */}
//       <div style={{ display: "grid", gridTemplateRows: "1fr 300px", overflow: 'hidden' }}>
        
//         {/* SCROLLABLE ERD AREA */}
//         <div style={{ 
//           position: 'relative', 
//           background: '#020617', 
//           overflow: 'auto', 
//           height: '100%',
//           width: '100%'
//         }} className="custom-scrollbar">
//           <div style={{ height: '100%', width: '100%', minWidth: '1000px', minHeight: '800px' }}>
//             <ERDCanvas schema={relationsWithEdges} onSchemaChange={handleSchemaUpdate} />
//           </div>
//         </div>
        
//         {/* SQL/Prisma/Mongo Code View */}
//         <div style={{ borderTop: "1px solid #1e293b", overflow: 'auto', background: '#0f172a' }} className="custom-scrollbar">
//           <SQLView sql={codeOutput} dialect={dialect} />
//         </div>
//       </div>

//       {showEditor && (
//         <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
//       )}
//     </div>
//   );
// }











import React, { useEffect, useMemo, useState, useCallback } from "react";
import ERDCanvas from "./ERDCanvas";
import TableEditor from "./TableEditor";
import SQLView from "./SQLView";
import LanguageSelector from "./LanguageSelector";
import { generateSchemaFromPrompt, generateSQL } from "../../utils/api";
import "../../index.css";

export default function Editor() {
  const [schema, setSchema] = useState({ tables: [], relations: [] });
  const [dialect, setDialect] = useState("postgres"); // Handles: postgres, mysql, mongodb, prisma
  const [prompt, setPrompt] = useState("Banking system with customers, accounts, transactions");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedNode, setSelectedNode] = useState(null);
  const [showEditor, setShowEditor] = useState(false);

  const fallbackSchema = {
    tables: [
      {
        name: "customers",
        columns: [
          { name: "id", type: "uuid", pk: true, unique: true, nullable: false },
          { name: "name", type: "varchar(255)", nullable: false },
          { name: "email", type: "varchar(255)", unique: true, nullable: false },
        ],
      },
      {
        name: "accounts",
        columns: [
          { name: "id", type: "uuid", pk: true, nullable: false },
          { name: "customer_id", type: "uuid", fk: true, nullable: false },
          { name: "balance", type: "decimal", nullable: false },
        ],
      }
    ],
    relations: [
      { fromTable: "accounts", fromColumn: "customer_id", toTable: "customers", toColumn: "id", type: "many-to-one" }
    ],
  };

  // --- 1. BI-DIRECTIONAL SYNC CALLBACK ---
  // This is triggered by 'Apply Changes' in ERDCanvas. 
  // Updating 'schema' here triggers the useMemo below to refresh the Code View.
  const handleSchemaUpdate = useCallback((updatedSchema) => {
    console.log("🔄 Syncing Schema to Code View:", updatedSchema);
    setSchema(updatedSchema);
  }, []);

  const onGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError("");
    
    try {
      const result = await generateSchemaFromPrompt(prompt);
      if (result && Array.isArray(result.tables)) {
        setSchema(result);
        console.log("✅ Professional Schema & Relations Loaded");
      } else {
        throw new Error("AI returned an incompatible data format.");
      }
    } catch (e) {
      console.error("Generation Error:", e);
      setError("AI generation failed. Using normalized fallback.");
      setSchema(fallbackSchema);
    } finally {
      setLoading(false);
    }
  };

  // --- 2. MULTI-CODE GENERATION ---
  // Re-runs whenever 'schema' or 'dialect' changes.
  const codeOutput = useMemo(() => {
    try {
      // Calls the smart switcher in api.js
      return generateSQL(schema, dialect) || "-- Code will be generated here.";
    } catch (error) {
      console.error("Code Generation Error:", error);
      return "-- Error generating code for this selection.";
    }
  }, [schema, dialect]);

  // --- 3. EDGE MAPPING FOR CANVAS ---
  const relationsWithEdges = useMemo(() => {
    return {
      ...schema,
      edges: (schema.relations || []).map((rel, idx) => ({
        id: `e-${rel.fromTable}-${rel.toTable}-${idx}`,
        source: rel.fromTable,
        target: rel.toTable,
        label: rel.type,
        animated: true,
        data: { fk: rel.fromColumn }, // Crucial for 'Apply Changes' logic
        style: { stroke: '#38bdf8', strokeWidth: 2 }
      }))
    };
  }, [schema]);

  const updateTableColumns = (updatedColumns, updatedTableName) => {
    setSchema((prev) => {
      const tables = prev.tables.map((t) => {
        if (t.name === selectedNode?.data?.name) {
          return {
            ...t,
            name: updatedTableName || t.name,
            columns: Array.isArray(updatedColumns) ? updatedColumns : t.columns,
          };
        }
        return t;
      });
      const oldName = selectedNode?.data?.name;
      const newName = updatedTableName || oldName;
      const relations = prev.relations.map((r) => ({
        ...r,
        fromTable: r.fromTable === oldName ? newName : r.fromTable,
        toTable: r.toTable === oldName ? newName : r.toTable,
      }));
      return { tables, relations };
    });
    setShowEditor(false);
    setSelectedNode(null);
  };

  const closeEditor = () => {
    setShowEditor(false);
    setSelectedNode(null);
  };

  const openEditorForTable = (tableName) => {
    const table = schema.tables.find((t) => t.name === tableName);
    if (!table) return;
    const node = { data: { name: table.name, columns: table.columns } };
    setSelectedNode(node);
    setShowEditor(true);
  };

  return (
    <div
      className="editor-root"
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        height: "calc(100vh - 80px)",
        background: "#0f172a",
        color: "#f8fafc"
      }}
    >
      {/* Sidebar Controls */}
      <div style={{ borderRight: "1px solid #1e293b", padding: 20, overflowY: 'auto' }} className="custom-scrollbar">
        <h2 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#38bdf8' }}>AI Architect</h2>
        
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your system (e.g. E-commerce)..."
          rows={6}
          style={{ 
            width: "100%", marginBottom: 15, padding: '12px', background: '#1e293b',
            color: '#fff', border: '1px solid #334155', borderRadius: '8px', resize: 'none'
          }}
        />
        
        <button 
          disabled={loading} 
          onClick={onGenerate} 
          style={{ 
            width: "100%", padding: '12px', backgroundColor: loading ? '#334155' : '#0ea5e9',
            color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? "Architecting..." : "⚡ Generate Schema"}
        </button>

        <div style={{ marginTop: 30 }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Select Export Format</h3>
          <LanguageSelector value={dialect} onChange={setDialect} />
        </div>

        <div style={{ marginTop: 30 }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: 10 }}>Live Table Inventory</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '5px' }} className="custom-scrollbar">
            {schema.tables.map((t) => (
              <div key={t.name} style={{ 
                padding: '8px 12px', background: '#1e293b', borderRadius: '6px', 
                marginBottom: 6, display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem'
              }}>
                <span>{t.name}</span>
                <button
                  style={{ color: "#38bdf8", background: "none", border: "none", cursor: "pointer" }}
                  onClick={() => openEditorForTable(t.name)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
        {error && <div style={{ color: "#fb7185", marginTop: 15, fontSize: '0.8rem' }}>{error}</div>}
      </div>

      {/* Main Content Areas */}
      <div style={{ display: "grid", gridTemplateRows: "1fr 300px", overflow: 'hidden' }}>
        
        {/* SCROLLABLE ERD AREA */}
        <div style={{ 
          position: 'relative', 
          background: '#020617', 
          overflow: 'auto', 
          height: '100%',
          width: '100%'
        }} className="custom-scrollbar">
          {/* Internal wrapper to ensure space for scrollbars and MiniMap navigation */}
          <div style={{ height: '100%', width: '100%', minWidth: '1200px', minHeight: '900px' }}>
            <ERDCanvas schema={relationsWithEdges} onSchemaChange={handleSchemaUpdate} />
          </div>
        </div>
        
        {/* SQL/Prisma/Mongo Code View */}
        <div style={{ borderTop: "1px solid #1e293b", overflow: 'auto', background: '#0f172a' }} className="custom-scrollbar">
          <SQLView sql={codeOutput} dialect={dialect} />
        </div>
      </div>

      {showEditor && (
        <TableEditor node={selectedNode} onSave={updateTableColumns} onClose={closeEditor} />
      )}
    </div>
  );
}