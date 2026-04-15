// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Menu } from 'lucide-react';
// import Sidebar from '../components/navigation/Sidebar';
// import GradientBackground from '../components/GradientBackground';
// import { useAuth } from '../hooks/useAuth';

// const AppLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen">
//       <GradientBackground />
      
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <main 
//         className={`transition-all duration-300 ${
//           sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
//         }`}
//       >
//         {/* Top Bar */}
//         <div className="h-16 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition"
//           >
//             <Menu size={24} />
//           </button>
//           <div className="hidden lg:block text-slate-400 text-sm">
//             Welcome back, {user?.name || 'User'}
//           </div>
//           <div className="flex items-center gap-4">
//             {/* Add notifications, search, etc. here */}
//           </div>
//         </div>

//         {/* Page Content */}
//         <div className="p-4 lg:p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AppLayout;














// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Menu } from 'lucide-react';
// import Sidebar from '../components/navigation/Sidebar';
// import GradientBackground from '../components/GradientBackground';
// import { useAuth } from '../hooks/useAuth';

// const AppLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen">
//       <GradientBackground />
      
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <main 
//         className={`transition-all duration-300 ${
//           sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
//         }`}
//       >
//         {/* Top Bar */}
//         <div className="h-16 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition"
//           >
//             <Menu size={24} />
//           </button>
//           <div className="hidden lg:block text-slate-400 text-sm">
//             Welcome back, {user?.name || 'User'}
//           </div>
//           <div className="flex items-center gap-4">
//             {/* Add notifications, search, etc. here */}
//           </div>
//         </div>

//         {/* Page Content */}
//         <div className="p-4 lg:p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AppLayout;











import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';
import GradientBackground from '../components/GradientBackground';
import { useAuth } from '../hooks/useAuth';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <GradientBackground />
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <main 
        className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* Top Bar */}
        <div className="h-16 border-b border-white/10 bg-[#0a0510]/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition"
          >
            <Menu size={24} />
          </button>
          <div className="hidden lg:block text-slate-400 text-sm">
            Welcome back, {user?.name || 'User'}
          </div>
          <div className="flex items-center gap-4">
            {/* Add notifications, search, etc. here */}
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;