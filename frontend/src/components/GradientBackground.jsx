// import React from 'react';

// const GradientBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10 bg-[#0a0510] overflow-hidden">
//       {/* Large Purple Glow - Top Left */}
//       <div 
//         className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"
//       ></div>
      
//       {/* Magenta Glow - Top Right */}
//       <div 
//         className="absolute top-40 -right-20 w-[500px] h-[500px] bg-[#D946EF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"
//         style={{ animationDelay: '2s', animationDuration: '8s' }}
//       ></div>
      
//       {/* Purple Glow - Bottom Center */}
//       <div 
//         className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-25 animate-pulse"
//         style={{ animationDelay: '4s', animationDuration: '10s' }}
//       ></div>
      
//       {/* Additional subtle glow - Center */}
//       <div 
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D946EF] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse"
//         style={{ animationDelay: '6s', animationDuration: '12s' }}
//       ></div>
      
//       {/* Noise texture overlay for depth */}
//       <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
//     </div>
//   );
// };

// export default GradientBackground;



















import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0510] overflow-hidden">
      {/* Large Purple Glow - Top Left */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />

      {/* Magenta Glow - Top Right */}
      <div
        className="absolute top-40 -right-20 w-[500px] h-[500px] bg-[#D946EF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"
        style={{ animationDelay: '2s', animationDuration: '8s' }}
      />

      {/* Purple Glow - Bottom Center */}
      <div
        className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-25 animate-pulse"
        style={{ animationDelay: '4s', animationDuration: '10s' }}
      />

      {/* Subtle Center Glow (kept from original for depth) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D946EF] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse"
        style={{ animationDelay: '6s', animationDuration: '12s' }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
};

export default GradientBackground;
