// import React, { useState } from 'react';
// import { Plus, Search, Filter, MoreVertical, Database, Calendar, Users, Trash2, Copy, Share2, Edit } from 'lucide-react';
// import GlassCard from '../components/GlassCard';

// const Dashboard = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterOpen, setFilterOpen] = useState(false);

//   // Mock data - replace with real data from API
//   const projects = [
//     {
//       id: 1,
//       name: 'E-commerce Platform',
//       description: 'Complete schema for online shopping platform with products, orders, and users',
//       tables: 12,
//       lastModified: '2 hours ago',
//       collaborators: 3,
//       status: 'active'
//     },
//     {
//       id: 2,
//       name: 'Social Media App',
//       description: 'User profiles, posts, comments, and messaging system',
//       tables: 8,
//       lastModified: '1 day ago',
//       collaborators: 2,
//       status: 'active'
//     },
//     {
//       id: 3,
//       name: 'Task Management',
//       description: 'Projects, tasks, subtasks, and team assignments',
//       tables: 6,
//       lastModified: '3 days ago',
//       collaborators: 1,
//       status: 'draft'
//     },
//     {
//       id: 4,
//       name: 'Analytics Dashboard',
//       description: 'Events tracking, user behavior, and reporting tables',
//       tables: 10,
//       lastModified: '1 week ago',
//       collaborators: 4,
//       status: 'active'
//     },
//     {
//       id: 5,
//       name: 'Booking System',
//       description: 'Appointments, availability, and customer management',
//       tables: 7,
//       lastModified: '2 weeks ago',
//       collaborators: 2,
//       status: 'archived'
//     }
//   ];

//   const stats = [
//     { label: 'Total Schemas', value: '24', change: '+3 this month', color: 'violet' },
//     { label: 'Active Projects', value: '12', change: '+2 this week', color: 'pink' },
//     { label: 'Team Members', value: '8', change: '+1 new', color: 'violet' },
//     { label: 'Storage Used', value: '2.4 GB', change: '48% remaining', color: 'pink' }
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//         <div>
//           <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Your Schemas</h1>
//           <p className="text-slate-400">Manage and organize all your database schemas in one place</p>
//         </div>
//         <a
//           href="/editor/new"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300 group"
//         >
//           <Plus size={20} />
//           <span>New Schema</span>
//         </a>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, index) => (
//           <GlassCard key={index} className="p-6" hover>
//             <div className="flex items-start justify-between mb-2">
//               <p className="text-slate-400 text-sm">{stat.label}</p>
//               <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-${stat.color}-600 to-pink-600`}></div>
//             </div>
//             <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
//             <p className="text-slate-500 text-xs">{stat.change}</p>
//           </GlassCard>
//         ))}
//       </div>

//       {/* Search and Filter Bar */}
//       <GlassCard className="p-4">
//         <div className="flex flex-col sm:flex-row gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search schemas..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
//             />
//           </div>
//           <button
//             onClick={() => setFilterOpen(!filterOpen)}
//             className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300"
//           >
//             <Filter size={20} />
//             <span>Filter</span>
//           </button>
//         </div>
//       </GlassCard>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {projects.map((project) => (
//           <GlassCard key={project.id} className="p-6 group" hover>
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center">
//                   <Database className="text-violet-400" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
//                     {project.name}
//                   </h3>
//                   <div className="flex items-center gap-2 mt-1">
//                     <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                       project.status === 'active' 
//                         ? 'bg-green-500/20 text-green-400' 
//                         : project.status === 'draft'
//                         ? 'bg-yellow-500/20 text-yellow-400'
//                         : 'bg-slate-500/20 text-slate-400'
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition opacity-0 group-hover:opacity-100">
//                 <MoreVertical size={20} />
//               </button>
//             </div>

//             <p className="text-slate-400 text-sm mb-4 line-clamp-2">
//               {project.description}
//             </p>

//             <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
//               <div className="flex items-center gap-1">
//                 <Database size={16} />
//                 <span>{project.tables} tables</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Calendar size={16} />
//                 <span>{project.lastModified}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Users size={16} />
//                 <span>{project.collaborators}</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 pt-4 border-t border-white/10">
//               <a
//                 href={`/editor/${project.id}`}
//                 className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-sm font-medium transition-all duration-300"
//               >
//                 <Edit size={16} />
//                 <span>Open</span>
//               </a>
//               <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
//                 <Copy size={16} />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
//                 <Share2 size={16} />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition">
//                 <Trash2 size={16} />
//               </button>
//             </div>
//           </GlassCard>
//         ))}
//       </div>

//       {/* Empty State (show when no projects) */}
//       {projects.length === 0 && (
//         <GlassCard className="p-12 text-center">
//           <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mx-auto mb-6">
//             <Database className="text-violet-400" size={40} />
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">No schemas yet</h3>
//           <p className="text-slate-400 mb-6 max-w-md mx-auto">
//             Get started by creating your first database schema. Transform your ideas into structured data models.
//           </p>
//           <a
//             href="/editor/new"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300"
//           >
//             <Plus size={20} />
//             <span>Create Your First Schema</span>
//           </a>
//         </GlassCard>
//       )}
//     </div>
//   );
// };

// export default Dashboard;















// // src/pages/Dashboard.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Plus, Search, Filter, MoreVertical, Database, Calendar, Users, Trash2, Copy, Share2, Edit } from 'lucide-react';
// // Corrected import path for GlassCard
// import { GlassCard } from '../components/GlassCard';
// import { cn } from '../utils/cn'; // Import cn utility for dynamic classes

// const Dashboard = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filterOpen, setFilterOpen] = useState(false);

//     // Mock data - replace with real data from API
//     const projects = [
//         {
//             id: 1,
//             name: 'E-commerce Platform',
//             description: 'Complete schema for online shopping platform with products, orders, and users',
//             tables: 12,
//             lastModified: '2 hours ago',
//             collaborators: 3,
//             status: 'active'
//         },
//         {
//             id: 2,
//             name: 'Social Media App',
//             description: 'User profiles, posts, comments, and messaging system',
//             tables: 8,
//             lastModified: '1 day ago',
//             collaborators: 2,
//             status: 'active'
//         },
//         {
//             id: 3,
//             name: 'Task Management',
//             description: 'Projects, tasks, subtasks, and team assignments',
//             tables: 6,
//             lastModified: '3 days ago',
//             collaborators: 1,
//             status: 'draft'
//         },
//         {
//             id: 4,
//             name: 'Analytics Dashboard',
//             description: 'Events tracking, user behavior, and reporting tables',
//             tables: 10,
//             lastModified: '1 week ago',
//             collaborators: 4,
//             status: 'active'
//         },
//         {
//             id: 5,
//             name: 'Booking System',
//             description: 'Appointments, availability, and customer management',
//             tables: 7,
//             lastModified: '2 weeks ago',
//             collaborators: 2,
//             status: 'archived'
//         }
//     ];

//     const stats = [
//         { label: 'Total Schemas', value: '24', change: '+3 this month', color: 'violet' },
//         { label: 'Active Projects', value: '12', change: '+2 this week', color: 'pink' },
//         { label: 'Team Members', value: '8', change: '+1 new', color: 'violet' },
//         { label: 'Storage Used', value: '2.4 GB', change: '48% remaining', color: 'pink' }
//     ];

//     // Helper function to get status classes
//     const getStatusClasses = (status) => {
//         switch (status) {
//             case 'active':
//                 return 'bg-green-500/20 text-green-400';
//             case 'draft':
//                 return 'bg-yellow-500/20 text-yellow-400';
//             default:
//                 return 'bg-slate-500/20 text-slate-400';
//         }
//     };
//     // Helper function for stat color classes (use cn for safe dynamic classes)
//     const getStatColorClasses = (color) => {
//         return cn(
//             'w-2 h-2 rounded-full bg-gradient-to-r',
//             color === 'violet' ? 'from-violet-600 to-pink-600' : 'from-pink-600 to-fuchsia-600'
//         );
//     };

//     return (
//         <div className="space-y-8">
//             {/* Header */}
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                 <div>
//                     <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Your Schemas</h1>
//                     <p className="text-slate-400">Manage and organize all your database schemas in one place</p>
//                 </div>
//                 {/* Changed 'a' tag to 'Link' for client-side routing */}
//                 <Link
//                     to="/app/editor" // Use the route defined in App.jsx
//                     className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300 group"
//                 >
//                     <Plus size={20} />
//                     <span>New Schema</span>
//                 </Link>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {stats.map((stat, index) => (
//                     <GlassCard key={index} className="p-6" hover>
//                         <div className="flex items-start justify-between mb-2">
//                             <p className="text-slate-400 text-sm">{stat.label}</p>
//                             {/* Use the helper function here */}
//                             <div className={getStatColorClasses(stat.color)}></div>
//                         </div>
//                         <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
//                         <p className="text-slate-500 text-xs">{stat.change}</p>
//                     </GlassCard>
//                 ))}
//             </div>

//             {/* Search and Filter Bar */}
//             <GlassCard className="p-4">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="flex-1 relative">
//                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//                         <input
//                             type="text"
//                             placeholder="Search schemas..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
//                         />
//                     </div>
//                     <button
//                         onClick={() => setFilterOpen(!filterOpen)}
//                         className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300"
//                     >
//                         <Filter size={20} />
//                         <span>Filter</span>
//                     </button>
//                 </div>
//             </GlassCard>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {projects.map((project) => (
//                     <GlassCard key={project.id} className="p-6 group" hover>
//                         <div className="flex items-start justify-between mb-4">
//                             <div className="flex items-center gap-3">
//                                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center">
//                                     <Database className="text-violet-400" size={24} />
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
//                                         {project.name}
//                                     </h3>
//                                     <div className="flex items-center gap-2 mt-1">
//                                         {/* Use the helper function here */}
//                                         <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium', getStatusClasses(project.status))}>
//                                             {project.status}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition opacity-0 group-hover:opacity-100">
//                                 <MoreVertical size={20} />
//                             </button>
//                         </div>

//                         <p className="text-slate-400 text-sm mb-4 line-clamp-2">
//                             {project.description}
//                         </p>

//                         <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
//                             <div className="flex items-center gap-1">
//                                 <Database size={16} />
//                                 <span>{project.tables} tables</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                                 <Calendar size={16} />
//                                 <span>{project.lastModified}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                                 <Users size={16} />
//                                 <span>{project.collaborators}</span>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-2 pt-4 border-t border-white/10">
//                             {/* Changed 'a' tag to 'Link' for client-side routing */}
//                             <Link
//                                 to={`/app/editor/${project.id}`}
//                                 className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-sm font-medium transition-all duration-300"
//                             >
//                                 <Edit size={16} />
//                                 <span>Open</span>
//                             </Link>
//                             <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
//                                 <Copy size={16} />
//                             </button>
//                             <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
//                                 <Share2 size={16} />
//                             </button>
//                             <button className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition">
//                                 <Trash2 size={16} />
//                             </button>
//                         </div>
//                     </GlassCard>
//                 ))}
//             </div>

//             {/* Empty State (show when no projects) */}
//             {projects.length === 0 && (
//                 <GlassCard className="p-12 text-center">
//                     <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mx-auto mb-6">
//                         <Database className="text-violet-400" size={40} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-2">No schemas yet</h3>
//                     <p className="text-slate-400 mb-6 max-w-md mx-auto">
//                         Get started by creating your first database schema. Transform your ideas into structured data models.
//                     </p>
//                     {/* Changed 'a' tag to 'Link' for client-side routing */}
//                     <Link
//                         to="/app/editor"
//                         className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300"
//                     >
//                         <Plus size={20} />
//                         <span>Create Your First Schema</span>
//                     </Link>
//                 </GlassCard>
//             )}
//         </div>
//     );
// };

// export default Dashboard;









// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Database,
  Calendar,
  Users,
  Trash2,
  Copy,
  Share2,
  Edit
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import { cn } from '../utils/cn';

const Dashboard = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  // Mock data
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Complete schema for online shopping platform with products, orders, and users',
      tables: 12,
      lastModified: '2 hours ago',
      collaborators: 3,
      status: 'active'
    },
    {
      id: 2,
      name: 'Social Media App',
      description: 'User profiles, posts, comments, and messaging system',
      tables: 8,
      lastModified: '1 day ago',
      collaborators: 2,
      status: 'active'
    },
    {
      id: 3,
      name: 'Task Management',
      description: 'Projects, tasks, subtasks, and team assignments',
      tables: 6,
      lastModified: '3 days ago',
      collaborators: 1,
      status: 'draft'
    }
  ];

  const stats = [
    { label: 'Total Schemas', value: '24', change: '+3 this month', color: 'violet' },
    { label: 'Active Projects', value: '12', change: '+2 this week', color: 'pink' },
    { label: 'Team Members', value: '8', change: '+1 new', color: 'violet' },
    { label: 'Storage Used', value: '2.4 GB', change: '48% remaining', color: 'pink' }
  ];

  const getStatusClasses = (status) =>
    cn(
      'px-2 py-0.5 rounded-full text-xs font-medium',
      status === 'active' && 'bg-green-500/20 text-green-400',
      status === 'draft' && 'bg-yellow-500/20 text-yellow-400'
    );

  const getStatDot = (color) =>
    cn(
      'w-2 h-2 rounded-full bg-gradient-to-r',
      color === 'violet'
        ? 'from-violet-600 to-pink-600'
        : 'from-pink-600 to-fuchsia-600'
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Your Schemas
          </h1>
          <p className="text-slate-400">
            Manage and organize all your database schemas in one place
          </p>
        </div>

        {/* ✅ FIXED: New Schema */}
        <button
          onClick={() => navigate('/editor')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all"
        >
          <Plus size={20} />
          New Schema
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <GlassCard key={i} hover>
            <div className="flex items-start justify-between mb-2">
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <div className={getStatDot(stat.color)} />
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-slate-500 text-xs">{stat.change}</p>
          </GlassCard>
        ))}
      </div>

      {/* Search */}
      <GlassCard>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search schemas..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10"
          >
            <Filter size={20} />
            Filter
          </button>
        </div>
      </GlassCard>

      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.id} hover className="group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center">
                  <Database className="text-violet-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-violet-400">
                    {project.name}
                  </h3>
                  <span className={getStatusClasses(project.status)}>
                    {project.status}
                  </span>
                </div>
              </div>
              <MoreVertical className="text-slate-400" />
            </div>

            <p className="text-slate-400 text-sm mb-4">{project.description}</p>

            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <div className="flex items-center gap-1">
                <Database size={16} /> {project.tables} tables
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} /> {project.lastModified}
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} /> {project.collaborators}
              </div>
            </div>

            {/* ✅ FIXED: Open */}
            <button
              onClick={() => navigate(`/editor/${project.id}`)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white text-sm font-medium"
            >
              <Edit size={16} />
              Open
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;





