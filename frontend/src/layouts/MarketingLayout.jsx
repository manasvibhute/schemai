// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/navigation/Navbar';
// import Footer from '../components/navigation/Footer';
// import GradientBackground from '../components/GradientBackground';

// const MarketingLayout = () => {
//   return (
//     <div className="min-h-screen">
//       <GradientBackground />
//       <Navbar />
//       <main className="pt-16">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MarketingLayout;








import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import GradientBackground from '../components/GradientBackground';

const MarketingLayout = () => {
  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;