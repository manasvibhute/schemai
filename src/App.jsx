// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './utils/authGuard';

// // Layouts
// import MarketingLayout from './layouts/MarketingLayout';
// import AppLayout from './layouts/AppLayout';

// // Public Pages
// import LandingPage from './pages/LandingPage';
// import Pricing from './pages/Pricing';
// import PublicShare from './pages/PublicShare';
// import NotFound from './pages/NotFound';

// // Auth Pages
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ForgotPassword from './pages/Auth/ForgotPassword';

// // Private Pages
// import Dashboard from './pages/Dashboard';
// import Editor from './pages/Editor';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes with Marketing Layout */}
//           <Route element={<MarketingLayout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/share/:id" element={<PublicShare />} />
//           </Route>

//           {/* Auth Routes (No Layout) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Private Routes with App Layout */}
//           <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/editor/:id" element={<Editor />} />
//             <Route path="/settings" element={<Settings />} />
//           </Route>

//           {/* 404 Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;






// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './utils/authGuard';

// // Layouts
// import MarketingLayout from './layouts/MarketingLayout';
// import AppLayout from './layouts/AppLayout';

// // Public Pages
// import LandingPage from './pages/LandingPage';
// import Pricing from './pages/Pricing';
// import PublicShare from './pages/PublicShare';
// import NotFound from './pages/NotFound';

// // Auth Pages
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ForgotPassword from './pages/Auth/ForgotPassword';

// // Private Pages
// import Dashboard from './pages/Dashboard';
// import Editor from './pages/Editor';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes with Marketing Layout */}
//           <Route element={<MarketingLayout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/share/:id" element={<PublicShare />} />
//           </Route>

//           {/* Auth Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Private Routes */}
//           <Route element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/editor/:id" element={<Editor />} />
//             <Route path="/settings" element={<Settings />} />
//           </Route>

//           {/* 404 Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;











// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './utils/authGuard';

// // Layouts
// import MarketingLayout from './layouts/MarketingLayout';
// import AppLayout from './layouts/AppLayout';

// // Public Pages
// import LandingPage from './pages/LandingPage';
// import Pricing from './pages/Pricing';
// import PublicShare from './pages/PublicShare';
// import NotFound from './pages/NotFound';

// // Auth Pages
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ForgotPassword from './pages/Auth/ForgotPassword';

// // Private Pages
// import Dashboard from './pages/Dashboard';
// import Editor from './pages/Editor';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes with Marketing Layout */}
//           <Route element={<MarketingLayout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/share/:id" element={<PublicShare />} />
//           </Route>

//           {/* Auth Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Private Routes */}
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

//           {/* 404 Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;












// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './utils/authGuard';

// // Layouts
// import MarketingLayout from './layouts/MarketingLayout';
// import AppLayout from './layouts/AppLayout';

// // Public Pages
// import LandingPage from './pages/LandingPage';
// import Pricing from './pages/Pricing';
// import PublicShare from './pages/PublicShare';
// import NotFound from './pages/NotFound';

// // Auth Pages
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ForgotPassword from './pages/Auth/ForgotPassword';

// // Private Pages
// import Dashboard from './pages/Dashboard';
// import Editor from './pages/Editor';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes with Marketing Layout */}
//           <Route element={<MarketingLayout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/share/:id" element={<PublicShare />} />
//           </Route>

//           {/* Auth Routes (No Layout) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* Private Routes with App Layout */}
//           <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/editor/:id" element={<Editor />} />
//             <Route path="/settings" element={<Settings />} />
//           </Route>

//           {/* 404 Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;











// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './utils/authGuard';

// // Layouts
// import MarketingLayout from './layouts/MarketingLayout';
// import AppLayout from './layouts/AppLayout';

// // Pages
// import LandingPage from './pages/LandingPage';
// import Pricing from './pages/Pricing';
// import PublicShare from './pages/PublicShare';
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import ForgotPassword from './pages/Auth/ForgotPassword';
// import Dashboard from './pages/Dashboard';
// import Editor from './pages/Editor/Editor';
// import Settings from './pages/Settings';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {/* Public */}
//         <Route element={<MarketingLayout />}>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/share/:id" element={<PublicShare />} />
//         </Route>

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected */}
//         <Route
//           element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/editor" element={<Editor />} />
//           <Route path="/editor/:id" element={<Editor />} />
//           <Route path="/settings" element={<Settings />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;













import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/authGuard';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';
import AppLayout from './layouts/AppLayout';

// Pages
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';
import PublicShare from './pages/PublicShare';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor/Editor'; // We will put the AI logic here
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/share/:id" element={<PublicShare />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected App Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          {/* AI Generation happens inside this Editor component */}
          <Route path="/editor" element={<Editor />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;


