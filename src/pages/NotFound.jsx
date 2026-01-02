// import React from 'react';
// import { Home, ArrowLeft, Search, Database } from 'lucide-react';
// import {GlassCard} from '../components/GlassCard';
// import GradientBackground from '../components/GradientBackground';

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <GradientBackground />
      
//       <div className="max-w-2xl w-full text-center">
//         {/* Animated 404 */}
//         <div className="mb-8">
//           <div className="inline-flex items-center justify-center gap-4 mb-6">
//             <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
//               4
//             </div>
//             <div className="relative">
//               <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center animate-spin-slow">
//                 <Database className="text-white" size={48} />
//               </div>
//             </div>
//             <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
//               4
//             </div>
//           </div>
//         </div>

//         <GlassCard className="p-8 lg:p-12" glow>
//           <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//             Page Not Found
//           </h1>
//           <p className="text-lg text-slate-300 mb-8">
//             Oops! The page you're looking for seems to have wandered off into the database void. 
//             Let's get you back on track.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300 group"
//             >
//               <Home size={20} />
//               <span>Go Home</span>
//             </a>
//             <a
//               href="/dashboard"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 group"
//             >
//               <Database size={20} />
//               <span>View Dashboard</span>
//             </a>
//           </div>

//           {/* Suggestions */}
//           <div className="mt-12 pt-8 border-t border-white/10">
//             <p className="text-sm text-slate-400 mb-4">Looking for something specific?</p>
//             <div className="flex flex-wrap justify-center gap-3">
//               <a
//                 href="/pricing"
//                 className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
//               >
//                 Pricing
//               </a>
//               <a
//                 href="/login"
//                 className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
//               >
//                 Login
//               </a>
//               <a
//                 href="/signup"
//                 className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
//               >
//                 Sign Up
//               </a>
//               <a
//                 href="/editor/new"
//                 className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
//               >
//                 New Schema
//               </a>
//             </div>
//           </div>
//         </GlassCard>

//         {/* Fun Error Message */}
//         <p className="mt-6 text-slate-500 text-sm">
//           Error 404: Schema not found in the current database instance 🔍
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NotFound;











// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Home, Database } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import GradientBackground from '../components/GradientBackground'; // Import now works as expected

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <GradientBackground />
      
      <div className="max-w-2xl w-full text-center z-10"> {/* Added z-10 to keep content above background */}
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              4
            </div>
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center animate-spin-slow">
                <Database className="text-white" size={48} />
              </div>
            </div>
            <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              4
            </div>
          </div>
        </div>

        <GlassCard className="p-8 lg:p-12" glow>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Oops! The page you're looking for seems to have wandered off into the database void. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Changed <a> to <Link> for client-side routing */}
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300 group"
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            {/* Changed <a> to <Link> for client-side routing */}
            <Link
              to="/app/dashboard" // Assuming '/dashboard' is secured and routed as '/app/dashboard'
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 group"
            >
              <Database size={20} />
              <span>View Dashboard</span>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Changed <a> to <Link> */}
              <Link
                to="/pricing"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
              >
                Pricing
              </Link>
              {/* Changed <a> to <Link> */}
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
              >
                Login
              </Link>
              {/* Changed <a> to <Link> */}
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
              >
                Sign Up
              </Link>
              {/* Changed <a> to <Link> */}
              <Link
                to="/app/editor"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
              >
                New Schema
              </Link>
            </div>
          </div>
        </GlassCard>

        {/* Fun Error Message */}
        <p className="mt-6 text-slate-500 text-sm">
          Error 404: Schema not found in the current database instance 🔍
        </p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;