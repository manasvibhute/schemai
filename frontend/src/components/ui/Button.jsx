// import React from 'react';
// import { cn } from '../../utils/cn';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'md',
//   className = '', 
//   disabled = false,
//   loading = false,
//   onClick,
//   type = 'button',
//   ...props 
// }) => {
//   const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
//   const variants = {
//     primary: 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50',
//     secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
//     ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
//     danger: 'bg-red-600 hover:bg-red-500 text-white',
//     outline: 'border-2 border-violet-600 text-violet-400 hover:bg-violet-600/10'
//   };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm rounded-lg',
//     md: 'px-6 py-3 text-base rounded-xl',
//     lg: 'px-8 py-4 text-lg rounded-xl'
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled || loading}
//       className={cn(
//         baseStyles,
//         variants[variant],
//         sizes[size],
//         className
//       )}
//       {...props}
//     >
//       {loading && (
//         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//       )}
//       {children}
//     </button>
//   );
// };

// export default Button;










import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
    danger: 'bg-red-600 hover:bg-red-500 text-white',
    outline: 'border-2 border-violet-600 text-violet-400 hover:bg-violet-600/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

export default Button;