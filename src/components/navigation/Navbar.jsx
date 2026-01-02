// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Database, Menu, X } from 'lucide-react';
// import Button from '../ui/Button';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//               <Database className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-white">SchemaAI</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link 
//               to="/#features" 
//               className="text-slate-300 hover:text-white transition-colors duration-200"
//             >
//               Features
//             </Link>
//             <Link 
//               to="/pricing" 
//               className="text-slate-300 hover:text-white transition-colors duration-200"
//             >
//               Pricing
//             </Link>
//             <Link 
//               to="/login" 
//               className="text-slate-300 hover:text-white transition-colors duration-200"
//             >
//               Login
//             </Link>
//             <Button as={Link} to="/signup" size="sm">
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-[#0a0510] border-t border-white/10 backdrop-blur-xl">
//           <div className="px-4 py-4 space-y-3">
//             <Link 
//               to="/#features" 
//               className="block text-slate-300 hover:text-white transition py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Features
//             </Link>
//             <Link 
//               to="/pricing" 
//               className="block text-slate-300 hover:text-white transition py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Pricing
//             </Link>
//             <Link 
//               to="/login" 
//               className="block text-slate-300 hover:text-white transition py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Login
//             </Link>
//             <Button 
//               as={Link} 
//               to="/signup" 
//               className="w-full"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Get Started
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SchemaAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/#features" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Button as={Link} to="/signup" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0510] border-t border-white/10 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/#features" 
              className="block text-slate-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block text-slate-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="block text-slate-300 hover:text-white transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Button 
              as={Link} 
              to="/signup" 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;