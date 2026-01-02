// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Database, Home, FileText, Settings, LogOut, Plus, Menu, X } from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';
// import Button from '../ui/Button';

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const navItems = [
//     { icon: Home, label: 'Dashboard', path: '/dashboard' },
//     { icon: FileText, label: 'My Schemas', path: '/dashboard' },
//     { icon: Settings, label: 'Settings', path: '/settings' },
//   ];

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <aside
//         className={`fixed left-0 top-0 bottom-0 bg-[#0a0510]/80 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 hidden lg:flex flex-col ${
//           isOpen ? 'w-64' : 'w-20'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
//           {isOpen && (
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
//                 <Database className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-white font-semibold">SchemaAI</span>
//             </div>
//           )}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
//           >
//             <Menu size={20} />
//           </button>
//         </div>

//         {/* New Schema Button */}
//         <div className="p-4">
//           <Button
//             as={Link}
//             to="/editor/new"
//             className={`w-full ${!isOpen && 'justify-center px-0'}`}
//             size="sm"
//           >
//             <Plus size={20} />
//             {isOpen && <span>New Schema</span>}
//           </Button>
//         </div>

//         {/* Navigation */}
//         <nav className="px-4 space-y-1 flex-1">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 isActive(item.path)
//                   ? 'bg-white/10 text-white'
//                   : 'text-slate-400 hover:text-white hover:bg-white/5'
//               } ${!isOpen && 'justify-center'}`}
//             >
//               <item.icon size={20} />
//               {isOpen && <span>{item.label}</span>}
//             </Link>
//           ))}
//         </nav>

//         {/* User Profile */}
//         <div className="px-4 pb-4 border-t border-white/10 pt-4">
//           {isOpen ? (
//             <div className="space-y-2">
//               <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
//                   {user?.name?.charAt(0) || 'U'}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-white text-sm font-medium truncate">
//                     {user?.name || 'User'}
//                   </p>
//                   <p className="text-slate-400 text-xs truncate">
//                     {user?.email || 'user@example.com'}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
//               >
//                 <LogOut size={20} />
//                 <span>Logout</span>
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-2">
//               <div className="flex justify-center">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
//                   {user?.name?.charAt(0) || 'U'}
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex justify-center items-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
//               >
//                 <LogOut size={20} />
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>

//       {/* Mobile Sidebar Overlay */}
//       {isOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
//             onClick={() => setIsOpen(false)}
//           />
//           <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#0a0510] border-r border-white/10 z-50 lg:hidden flex flex-col">
//             {/* Header */}
//             <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
//                   <Database className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-white font-semibold">SchemaAI</span>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* New Schema Button */}
//             <div className="p-4">
//               <Button
//                 as={Link}
//                 to="/editor/new"
//                 className="w-full"
//                 size="sm"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <Plus size={20} />
//                 <span>New Schema</span>
//               </Button>
//             </div>

//             {/* Navigation */}
//             <nav className="px-4 space-y-1 flex-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                     isActive(item.path)
//                       ? 'bg-white/10 text-white'
//                       : 'text-slate-400 hover:text-white hover:bg-white/5'
//                   }`}
//                 >
//                   <item.icon size={20} />
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//             </nav>

//             {/* User Profile */}
//             <div className="px-4 pb-4 border-t border-white/10 pt-4">
//               <div className="space-y-2">
//                 <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
//                     {user?.name?.charAt(0) || 'U'}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-white text-sm font-medium truncate">
//                       {user?.name || 'User'}
//                     </p>
//                     <p className="text-slate-400 text-xs truncate">
//                       {user?.email || 'user@example.com'}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
//                 >
//                   <LogOut size={20} />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             </div>
//           </aside>
//         </>
//       )}
//     </>
//   );
// };

// export default Sidebar;






















import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Database, Home, FileText, Settings, LogOut, Plus, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FileText, label: 'My Schemas', path: '/dashboard' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 bg-[#0a0510]/80 backdrop-blur-xl border-r border-white/10 transition-all duration-300 z-40 hidden lg:flex flex-col ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">SchemaAI</span>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* New Schema Button */}
        <div className="p-4">
          <Button
            as={Link}
            to="/editor/new"
            className={`w-full ${!isOpen && 'justify-center px-0'}`}
            size="sm"
          >
            <Plus size={20} />
            {isOpen && <span>New Schema</span>}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              } ${!isOpen && 'justify-center'}`}
            >
              <item.icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="px-4 pb-4 border-t border-white/10 pt-4">
          {isOpen ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-slate-400 text-xs truncate">
                    {user?.email || 'user@example.com'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex justify-center items-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
              >
                <LogOut size={20} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#0a0510] border-r border-white/10 z-50 lg:hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">SchemaAI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* New Schema Button */}
            <div className="p-4">
              <Button
                as={Link}
                to="/editor/new"
                className="w-full"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <Plus size={20} />
                <span>New Schema</span>
              </Button>
            </div>

            {/* Navigation */}
            <nav className="px-4 space-y-1 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* User Profile */}
            <div className="px-4 pb-4 border-t border-white/10 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {user?.name || 'User'}
                    </p>
                    <p className="text-slate-400 text-xs truncate">
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;