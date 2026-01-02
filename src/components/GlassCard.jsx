// import React from 'react';
// import { cn } from '../utils/cn'; // Updated to use the @ alias

// export const GlassCard = ({ children, className, ...props }) => {
//   return (
//     <div
//       className={cn(
//         'bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-6',
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };

// // This line allows Login.jsx to import it without curly braces
// export default GlassCard;














// import React from 'react';
// import { cn } from '../utils/cn';

// const GlassCard = ({
//   children,
//   className,
//   hover = false,
//   glow = false,
//   padding = 'p-6',
//   ...props
// }) => {
//   return (
//     <div
//       className={cn(
//         // Base glass styles (from original)
//         'bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg',

//         // Padding (from Claude, but controlled)
//         padding,

//         // Hover effect (optional)
//         hover &&
//           'transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-white/20 transform hover:scale-[1.02]',

//         // Glow effect (optional)
//         glow && 'shadow-2xl shadow-violet-500/10',

//         // Custom classes
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };

// export default GlassCard;










import React from 'react';
import { cn } from '../utils/cn';

const GlassCard = ({
  children,
  className,
  hover = false,
  glow = false,
  padding = 'p-6',
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl',
        padding,
        hover &&
          'hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]',
        glow && 'shadow-2xl shadow-violet-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
export { GlassCard };
