// import React from 'react';
// import { cn } from '../../utils/cn';

// const TextArea = React.forwardRef(({ 
//   label,
//   error,
//   rows = 4,
//   className = '',
//   containerClassName = '',
//   showCharCount = false,
//   maxLength,
//   ...props 
// }, ref) => {
//   const [charCount, setCharCount] = React.useState(props.value?.length || 0);

//   React.useEffect(() => {
//     setCharCount(props.value?.length || 0);
//   }, [props.value]);

//   return (
//     <div className={cn('w-full', containerClassName)}>
//       {label && (
//         <label className="block text-sm font-medium text-slate-300 mb-2">
//           {label}
//         </label>
//       )}
//       <textarea
//         ref={ref}
//         rows={rows}
//         maxLength={maxLength}
//         className={cn(
//           'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 resize-none transition',
//           'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
//           error && 'border-red-500/50 focus:ring-red-500',
//           className
//         )}
//         {...props}
//       />
//       {(showCharCount || error) && (
//         <div className="flex justify-between items-center mt-1">
//           {error && <p className="text-red-400 text-sm">{error}</p>}
//           {showCharCount && (
//             <p className="text-slate-500 text-xs ml-auto">
//               {charCount}{maxLength && `/${maxLength}`}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// });

// TextArea.displayName = 'TextArea';

// export default TextArea;









import React from 'react';
import { cn } from '../../utils/cn';

const TextArea = React.forwardRef(({ 
  label,
  error,
  rows = 4,
  className = '',
  containerClassName = '',
  showCharCount = false,
  maxLength,
  ...props 
}, ref) => {
  const [charCount, setCharCount] = React.useState(props.value?.length || 0);

  React.useEffect(() => {
    setCharCount(props.value?.length || 0);
  }, [props.value]);

  return (
    <div className={cn('w-full', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        maxLength={maxLength}
        className={cn(
          'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 resize-none transition',
          'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
          error && 'border-red-500/50 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {(showCharCount || error) && (
        <div className="flex justify-between items-center mt-1">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {showCharCount && (
            <p className="text-slate-500 text-xs ml-auto">
              {charCount}{maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;