// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Mail, ArrowRight } from 'lucide-react';
// import GlassCard from '../../components/GlassCard';
// import GradientBackground from '../../components/GradientBackground';
// import Button from '../../components/ui/Button';
// import Input from '../../components/ui/Input';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setSubmitted(true);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center py-12 px-4">
//       <GradientBackground />
      
//       <div className="w-full max-w-md relative z-10">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Reset your password</h1>
//           <p className="text-slate-400">
//             {submitted 
//               ? "Check your email for reset instructions"
//               : "Enter your email and we'll send you reset instructions"
//             }
//           </p>
//         </div>

//         <GlassCard className="p-8" glow>
//           {!submitted ? (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 type="email"
//                 label="Email"
//                 icon={Mail}
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <Button type="submit" className="w-full" loading={loading}>
//                 Send Reset Link
//                 <ArrowRight size={20} />
//               </Button>
//             </form>
//           ) : (
//             <div className="text-center py-6">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
//                 <Mail className="text-white" size={32} />
//               </div>
//               <p className="text-slate-300 mb-6">
//                 We've sent password reset instructions to{' '}
//                 <strong className="text-white">{email}</strong>
//               </p>
//               <p className="text-sm text-slate-400 mb-6">
//                 Didn't receive the email? Check your spam folder or try again.
//               </p>
//               <Button
//                 variant="ghost"
//                 onClick={() => setSubmitted(false)}
//                 className="mx-auto"
//               >
//                 Try another email
//               </Button>
//             </div>
//           )}

//           <p className="text-center text-slate-400 text-sm mt-6">
//             <Link to="/login" className="text-violet-400 hover:text-violet-300 transition">
//               Back to login
//             </Link>
//           </p>
//         </GlassCard>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;










import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import GradientBackground from '../../components/GradientBackground';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <GradientBackground />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Reset your password</h1>
          <p className="text-slate-400">
            {submitted 
              ? "Check your email for reset instructions"
              : "Enter your email and we'll send you reset instructions"
            }
          </p>
        </div>

        <GlassCard className="p-8" glow>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email"
                icon={Mail}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit" className="w-full" loading={loading}>
                Send Reset Link
                <ArrowRight size={20} />
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <p className="text-slate-300 mb-6">
                We've sent password reset instructions to{' '}
                <strong className="text-white">{email}</strong>
              </p>
              <p className="text-sm text-slate-400 mb-6">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Button
                variant="ghost"
                onClick={() => setSubmitted(false)}
                className="mx-auto"
              >
                Try another email
              </Button>
            </div>
          )}

          <p className="text-center text-slate-400 text-sm mt-6">
            <Link to="/login" className="text-violet-400 hover:text-violet-300 transition">
              Back to login
            </Link>
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default ForgotPassword;








