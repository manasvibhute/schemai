// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
// import GlassCard from '../../components/GlassCard';
// import GradientBackground from '../../components/GradientBackground';
// import Button from '../../components/ui/Button';
// import Input from '../../components/ui/Input';
// import { useAuth } from '../../hooks/useAuth';

// const Signup = () => {
//   const navigate = useNavigate();
//   const { signup } = useAuth();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const result = await signup(formData.name, formData.email, formData.password);
//       if (result.success) {
//         navigate('/dashboard');
//       } else {
//         setError(result.error || 'Signup failed');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center py-12 px-4">
//       <GradientBackground />
      
//       <div className="w-full max-w-md relative z-10">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Create your account</h1>
//           <p className="text-slate-400">Start designing better databases today</p>
//         </div>

//         <GlassCard className="p-8" glow>
//           {/* Social Signup */}
//           <div className="space-y-3 mb-6">
//             <Button variant="secondary" className="w-full">
//               <Chrome size={20} />
//               <span>Continue with Google</span>
//             </Button>
//             <Button variant="secondary" className="w-full">
//               <Github size={20} />
//               <span>Continue with GitHub</span>
//             </Button>
//           </div>

//           <div className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-white/10"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-[#0a0510] text-slate-400">Or sign up with email</span>
//             </div>
//           </div>

//           {error && (
//             <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               type="text"
//               label="Full Name"
//               icon={User}
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />

//             <Input
//               type="email"
//               label="Email"
//               icon={Mail}
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />

//             <Input
//               type="password"
//               label="Password"
//               icon={Lock}
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//             <p className="text-xs text-slate-500 -mt-2">Must be at least 8 characters</p>

//             <Button type="submit" className="w-full" loading={loading}>
//               Create Account
//               <ArrowRight size={20} />
//             </Button>
//           </form>

//           <p className="text-center text-slate-400 text-sm mt-6">
//             Already have an account?{' '}
//             <Link to="/login" className="text-violet-400 hover:text-violet-300 font-semibold transition">
//               Sign in
//             </Link>
//           </p>
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default Signup;














import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import GradientBackground from '../../components/GradientBackground';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../hooks/useAuth';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signup(formData.name, formData.email, formData.password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <GradientBackground />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-slate-400">Start designing better databases today</p>
        </div>

        <GlassCard className="p-8" glow>
          {/* Social Signup */}
          <div className="space-y-3 mb-6">
            <Button variant="secondary" className="w-full">
              <Chrome size={20} />
              <span>Continue with Google</span>
            </Button>
            <Button variant="secondary" className="w-full">
              <Github size={20} />
              <span>Continue with GitHub</span>
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0510] text-slate-400">Or sign up with email</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              label="Full Name"
              icon={User}
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <Input
              type="email"
              label="Email"
              icon={Mail}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <Input
              type="password"
              label="Password"
              icon={Lock}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <p className="text-xs text-slate-500 -mt-2">Must be at least 8 characters</p>

            <Button type="submit" className="w-full" loading={loading}>
              Create Account
              <ArrowRight size={20} />
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-violet-400 hover:text-violet-300 font-semibold transition">
              Sign in
            </Link>
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Signup;