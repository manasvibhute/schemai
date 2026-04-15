// import React from 'react';
// import { Database, Zap, Shield, Users, ArrowRight, Sparkles, Code, FileText, Share2, Check } from 'lucide-react';
// import {GlassCard} from '../components/GlassCard';

// const LandingPage = () => {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'AI-Powered Generation',
//       description: 'Transform natural language user stories into production-ready database schemas in seconds.'
//     },
//     {
//       icon: Code,
//       title: 'Multiple SQL Dialects',
//       description: 'Export to PostgreSQL, MySQL, SQLite, and more. One schema, infinite possibilities.'
//     },
//     {
//       icon: FileText,
//       title: 'Visual Editor',
//       description: 'Intuitive drag-and-drop interface with real-time preview of your database structure.'
//     },
//     {
//       icon: Share2,
//       title: 'Team Collaboration',
//       description: 'Share schemas with your team, get feedback, and iterate together in real-time.'
//     },
//     {
//       icon: Shield,
//       title: 'Best Practices Built-in',
//       description: 'Automatically enforces normalization, indexing, and relationship best practices.'
//     },
//     {
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Generate complex schemas in milliseconds. No more manual ERD drawing.'
//     }
//   ];

//   const stats = [
//     { value: '50K+', label: 'Schemas Generated' },
//     { value: '10K+', label: 'Active Users' },
//     { value: '99.9%', label: 'Uptime' },
//     { value: '4.9/5', label: 'User Rating' }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//           <div className="text-center max-w-4xl mx-auto">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
//               <Sparkles size={16} className="text-violet-400" />
//               <span>Powered by Advanced AI</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               Transform User Stories into{' '}
//               <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
//                 Perfect Schemas
//               </span>
//             </h1>

//             <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
//               SchemaAI uses cutting-edge AI to convert your requirements into production-ready database schemas. 
//               Save hours of manual work and eliminate design errors.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//               <a
//                 href="/signup"
//                 className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2 group"
//               >
//                 Get Started Free
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </a>
//               <a
//                 href="#demo"
//                 className="px-8 py-4 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
//               >
//                 Watch Demo
//               </a>
//             </div>

//             {/* Dashboard Preview */}
//             <GlassCard className="p-2" glow>
//               <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-pink-900/20 rounded-xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
//                 <div className="relative z-10">
//                   <Database size={64} className="text-violet-400 mb-4 mx-auto animate-pulse" />
//                   <p className="text-slate-300 text-lg">Dashboard Preview</p>
//                   <p className="text-slate-500 text-sm mt-2">Visual Schema Editor Coming Soon</p>
//                 </div>
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section id="features" className="py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               Everything you need to design better databases
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Powerful features that make database design effortless and error-free
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <GlassCard key={index} hover glow className="p-8">
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mb-4">
//                   <feature.icon className="text-violet-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
//                 <p className="text-slate-400">{feature.description}</p>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 lg:py-32 bg-white/[0.02]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               From idea to schema in 3 steps
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { step: '01', title: 'Describe Your Requirements', desc: 'Write user stories or describe your data model in plain English' },
//               { step: '02', title: 'AI Generates Schema', desc: 'Our AI analyzes and creates an optimized database schema with relationships' },
//               { step: '03', title: 'Export & Deploy', desc: 'Download SQL scripts or integrate directly with your database' }
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
//                 <p className="text-slate-400">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 lg:py-32">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <GlassCard className="p-12" glow>
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               Ready to revolutionize your database design?
//             </h2>
//             <p className="text-xl text-slate-300 mb-8">
//               Join thousands of developers who trust SchemaAI for their database architecture.
//             </p>
//             <a
//               href="/signup"
//               className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2 group"
//             >
//               Start Building Free
//               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//             <p className="text-slate-500 text-sm mt-4">No credit card required • Free forever plan</p>
//           </GlassCard>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;










// // src/pages/LandingPage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom'; // <-- ADDED: Import Link for routing
// import { Database, Zap, Shield, Users, ArrowRight, Sparkles, Code, FileText, Share2 } from 'lucide-react';
// import { GlassCard } from '../components/GlassCard';
// import GradientBackground from '../components/GradientBackground'; // <-- ADDED: Import the background component

// const LandingPage = () => {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'AI-Powered Generation',
//       description: 'Transform natural language user stories into production-ready database schemas in seconds.'
//     },
//     {
//       icon: Code,
//       title: 'Multiple SQL Dialects',
//       description: 'Export to PostgreSQL, MySQL, SQLite, and more. One schema, infinite possibilities.'
//     },
//     {
//       icon: FileText,
//       title: 'Visual Editor',
//       description: 'Intuitive drag-and-drop interface with real-time preview of your database structure.'
//     },
//     {
//       icon: Share2,
//       title: 'Team Collaboration',
//       description: 'Share schemas with your team, get feedback, and iterate together in real-time.'
//     },
//     {
//       icon: Shield,
//       title: 'Best Practices Built-in',
//       description: 'Automatically enforces normalization, indexing, and relationship best practices.'
//     },
//     {
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Generate complex schemas in milliseconds. No more manual ERD drawing.'
//     }
//   ];

//   const stats = [
//     { value: '50K+', label: 'Schemas Generated' },
//     { value: '10K+', label: 'Active Users' },
//     { value: '99.9%', label: 'Uptime' },
//     { value: '4.9/5', label: 'User Rating' }
//   ];

//   return (
//     <div>
//       <GradientBackground /> {/* <-- ADDED: Background component for visual depth */}
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10 relative"> {/* Added z-10 for content */}
//           <div className="text-center max-w-4xl mx-auto">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
//               <Sparkles size={16} className="text-violet-400" />
//               <span>Powered by Advanced AI</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               Transform User Stories into{' '}
//               <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
//                 Perfect Schemas
//               </span>
//             </h1>

//             <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
//               SchemaAI uses cutting-edge AI to convert your requirements into production-ready database schemas. 
//               Save hours of manual work and eliminate design errors.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//               {/* Changed <a> to <Link> */}
//               <Link
//                 to="/signup"
//                 className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2 group"
//               >
//                 Get Started Free
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </Link>
//               {/* Changed <a> to <Link> */}
//               <Link
//                 to="#demo"
//                 className="px-8 py-4 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
//               >
//                 Watch Demo
//               </Link>
//             </div>

//             {/* Dashboard Preview */}
//             <GlassCard className="p-2" glow>
//               <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-pink-900/20 rounded-xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
//                 <div className="relative z-10">
//                   <Database size={64} className="text-violet-400 mb-4 mx-auto animate-pulse" />
//                   <p className="text-slate-300 text-lg">Dashboard Preview</p>
//                   <p className="text-slate-500 text-sm mt-2">Visual Schema Editor Coming Soon</p>
//                 </div>
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section id="features" className="py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               Everything you need to design better databases
//             </h2>
//             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//               Powerful features that make database design effortless and error-free
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <GlassCard key={index} hover glow className="p-8">
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mb-4">
//                   <feature.icon className="text-violet-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
//                 <p className="text-slate-400">{feature.description}</p>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 lg:py-32 bg-white/[0.02]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               From idea to schema in 3 steps
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { step: '01', title: 'Describe Your Requirements', desc: 'Write user stories or describe your data model in plain English' },
//               { step: '02', title: 'AI Generates Schema', desc: 'Our AI analyzes and creates an optimized database schema with relationships' },
//               { step: '03', title: 'Export & Deploy', desc: 'Download SQL scripts or integrate directly with your database' }
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
//                 <p className="text-slate-400">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 lg:py-32">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <GlassCard className="p-12" glow>
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               Ready to revolutionize your database design?
//             </h2>
//             <p className="text-xl text-slate-300 mb-8">
//               Join thousands of developers who trust SchemaAI for their database architecture.
//             </p>
//             {/* Changed <a> to <Link> */}
//             <Link
//               to="/signup"
//               className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2 group"
//             >
//               Start Building Free
//               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <p className="text-slate-500 text-sm mt-4">No credit card required • Free forever plan</p>
//           </GlassCard>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;











// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Layouts (default exports)
// import MarketingLayout from "./layouts/MarketingLayout.jsx";
// import AppLayout from "./layouts/AppLayout.jsx";

// // Public Pages
// import LandingPage from "./pages/LandingPage.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import PublicShare from "./pages/PublicShare.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // Auth Pages
// import Login from "./pages/Auth/Login.jsx";
// import Signup from "./pages/Auth/Signup.jsx";
// import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";

// // Private Pages
// import Dashboard from "./pages/Dashboard.jsx";
// import Editor from "./pages/Editor.jsx";
// import Settings from "./pages/Settings.jsx";

// // Auth Provider + Guard
// import { AuthProvider } from "./context/AuthContext.jsx";
// import ProtectedRoute from "./utils/authGuard.jsx";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>

//           {/* Public Marketing Pages */}
//           <Route element={<MarketingLayout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/share/:id" element={<PublicShare />} />
//           </Route>

//           {/* Auth Pages */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Protected Pages */}
//           <Route
//             element={
//               <ProtectedRoute>
//                 <AppLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/editor/:id" element={<Editor />} />
//             <Route path="/settings" element={<Settings />} />
//           </Route>

//           {/* Catch-all */}
//           <Route path="*" element={<NotFound />} />

//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;










// import React from "react";

// export default function LandingPage() {
//   return (
//     <div className="text-white bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col items-center">
//       {/* Navbar */}
//       <div className="w-full max-w-7xl flex justify-between items-center py-6 px-4">
//         <h1 className="text-3xl font-bold">VoiceForge</h1>

//         <div className="flex gap-6">
//           <a href="/" className="hover:text-gray-400">Home</a>
//           <a href="/pricing" className="hover:text-gray-400">Pricing</a>
//           <a href="/login" className="hover:text-gray-400">Login</a>
//         </div>
//       </div>

//       {/* Hero */}
//       <div className="mt-20 text-center px-4">
//         <h1 className="text-5xl font-bold leading-tight">
//           Create AI Voices in Seconds
//         </h1>
//         <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
//           Generate high-quality AI voices from text. Fast, powerful, and stunning.
//         </p>

//         <div className="mt-8 flex justify-center gap-6">
//           <a href="/signup" className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600">
//             Get Started
//           </a>
//           <a href="/pricing" className="px-6 py-3 border border-gray-600 rounded-lg hover:border-white">
//             View Pricing
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }












import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Zap, Shield, Code, Sparkles, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Sparkles, title: 'AI-Powered Generation', description: 'Transform user stories into production-ready schemas instantly' },
    { icon: Code, title: 'Multiple SQL Dialects', description: 'Export to PostgreSQL, MySQL, SQLite, and more' },
    { icon: Shield, title: 'Best Practices Built-in', description: 'Automatic normalization and relationship handling' },
    { icon: Zap, title: 'Lightning Fast', description: 'Generate complex schemas in milliseconds' }
  ];

  return (
    <div className="relative z-10">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SchemaAI</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/dashboard')} className="text-slate-300 hover:text-white transition">
                Dashboard
              </button>
              <button onClick={() => navigate('/editor')} className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
              <Sparkles size={16} className="text-violet-400" />
              <span>Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform User Stories into{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-glow">
                Perfect Schemas
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              SchemaAI uses cutting-edge AI to convert your requirements into production-ready database schemas. Save hours of manual work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button onClick={() => navigate('/editor')} className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2 group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => navigate('/dashboard')} className="px-8 py-4 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300">
                View Dashboard
              </button>
            </div>

            <GlassCard className="p-2" glow>
              <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-pink-900/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <Database size={64} className="text-violet-400 mb-4 mx-auto animate-pulse" />
                  <p className="text-slate-300 text-lg">Visual Schema Editor</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything you need to design better databases
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features that make database design effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} hover glow className="p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mb-4">
                  <feature.icon className="text-violet-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12" glow>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to revolutionize your database design?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of developers who trust SchemaAI
            </p>
            <button onClick={() => navigate('/editor')} className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-2xl shadow-violet-500/50 transition-all duration-300 inline-flex items-center gap-2">
              Start Building Free
              <ArrowRight size={20} />
            </button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;