// import React from 'react';
// import { cn } from '../../utils/cn';

// const Spinner = ({ size = 'md', className = '', fullScreen = false }) => {
//   const sizes = {
//     sm: 'w-4 h-4 border-2',
//     md: 'w-8 h-8 border-3',
//     lg: 'w-12 h-12 border-4',
//     xl: 'w-16 h-16 border-4'
//   };

//   const spinner = (
//     <div
//       className={cn(
//         'border-violet-500/30 border-t-violet-500 rounded-full animate-spin',
//         sizes[size],
//         className
//       )}
//     />
//   );

//   if (fullScreen) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-[#0a0510]/80 backdrop-blur-sm z-50">
//         <div className="text-center">
//           {spinner}
//           <p className="text-white mt-4">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return spinner;
// };

// export default Spinner;















import React from 'react';
import { cn } from '../../utils/cn';

const Spinner = ({ size = 'md', className = '', fullScreen = false }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const spinner = (
    <div
      className={cn(
        'border-violet-500/30 border-t-violet-500 rounded-full animate-spin',
        sizes[size],
        className
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a0510]/80 backdrop-blur-sm z-50">
        <div className="text-center">
          {spinner}
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return spinner;
};

export default Spinner;  