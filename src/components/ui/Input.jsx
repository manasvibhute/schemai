// import React from 'react';
// import { cn } from '../../utils/cn';

// const Input = React.forwardRef(({ 
//   label,
//   error,
//   icon: Icon,
//   className = '',
//   containerClassName = '',
//   ...props 
// }, ref) => {
//   return (
//     <div className={cn('w-full', containerClassName)}>
//       {label && (
//         <label className="block text-sm font-medium text-slate-300 mb-2">
//           {label}
//         </label>
//       )}
//       <div className="relative">
//         {Icon && (
//           <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//         )}
//         <input
//           ref={ref}
//           className={cn(
//             'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 transition',
//             'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
//             Icon && 'pl-10',
//             error && 'border-red-500/50 focus:ring-red-500',
//             className
//           )}
//           {...props}
//         />
//       </div>
//       {error && (
//         <p className="text-red-400 text-sm mt-1">{error}</p>
//       )}
//     </div>
//   );
// });

// Input.displayName = 'Input';

// export default Input;














import React from 'react';
import { cn } from '../../utils/cn';

const Input = React.forwardRef(({ 
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  return (
    <div className={cn('w-full', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 transition',
            'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
            Icon && 'pl-10',
            error && 'border-red-500/50 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;