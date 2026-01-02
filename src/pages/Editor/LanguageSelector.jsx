// import React from 'react';

// const LanguageSelector = ({ language, setLanguage }) => (
//   <select
//     value={language}
//     onChange={(e) => setLanguage(e.target.value)}
//     className="bg-white/5 text-white px-2 py-1 rounded-lg"
//   >
//     <option value="postgres">PostgreSQL</option>
//     <option value="prisma">Prisma</option>
//     <option value="mongodb">MongoDB</option>
//   </select>
// );

// export default LanguageSelector;










import React from 'react';

const LanguageSelector = ({ value, onChange }) => {
  // We use "value" and "onChange" to match the props being passed from Editor.jsx
  
  const handleSelection = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <select
        value={value}
        onChange={handleSelection}
        className="w-full bg-[#1e293b] text-white px-3 py-2 rounded-lg border border-[#334155] focus:outline-none focus:border-[#38bdf8] transition-colors cursor-pointer"
        style={{
          appearance: 'none', // Removes default browser styling
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.7rem center',
          backgroundSize: '1em'
        }}
      >
        <option value="postgres" className="bg-[#0f172a]">PostgreSQL</option>
        <option value="mysql" className="bg-[#0f172a]">MySQL</option>
        <option value="prisma" className="bg-[#0f172a]">Prisma ORM</option>
        <option value="mongodb" className="bg-[#0f172a]">MongoDB (Mongoose)</option>
      </select>
      
      {/* Small hint text to help the user */}
      <p className="text-[10px] text-slate-500 italic px-1">
        Translates diagram to chosen dialect
      </p>
    </div>
  );
};

export default LanguageSelector;