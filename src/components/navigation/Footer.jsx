// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Database, Twitter, Github, Linkedin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-white/10 mt-24 bg-[#0a0510]/50 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
//                 <Database className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">SchemaAI</span>
//             </div>
//             <p className="text-slate-400 max-w-sm mb-6">
//               Transform your user stories into production-ready database schemas with the power of AI.
//             </p>
//             <div className="flex gap-4">
//               <a 
//                 href="https://twitter.com" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-400 hover:text-white transition"
//               >
//                 <Twitter size={20} />
//               </a>
//               <a 
//                 href="https://github.com" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-400 hover:text-white transition"
//               >
//                 <Github size={20} />
//               </a>
//               <a 
//                 href="https://linkedin.com" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-400 hover:text-white transition"
//               >
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Product */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Product</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/#features" className="text-slate-400 hover:text-white transition">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/pricing" className="text-slate-400 hover:text-white transition">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   API
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-400 hover:text-white transition">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400 text-sm">
//           <p>&copy; {currentYear} SchemaAI. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



















import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-24 bg-[#0a0510]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SchemaAI</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Transform your user stories into production-ready database schemas with the power of AI.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-slate-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} SchemaAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;