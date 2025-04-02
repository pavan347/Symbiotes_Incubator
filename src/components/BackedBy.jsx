import React from 'react';

// Sample logo images (replace these with actual image paths)
import logo1 from '../assets/images/backedby/logo1.jpeg';
import logo2 from '../assets/images/backedby/logo2.jpeg';
import logo3 from '../assets/images/backedby/logo3.jpeg';
import logo4 from '../assets/images/backedby/logo4.jpeg';
import logo5 from '../assets/images/backedby/logo5.jpeg';

const BackedBy = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-center text-lg md:text-2xl font-bold text-gray-700 mb-16">
      Backed by the best leaders of the world  
      </h2>
      <div className="overflow-hidden relative w-full">
        <div className="flex justify-evenly gap-8">
          <img src={logo1} alt="Company 1" className="h-16 object-contain" />
          <img src={logo2} alt="Company 2" className="h-16 object-contain" />
          <img src={logo3} alt="Company 3" className="h-16 object-contain" />
          <img src={logo4} alt="Company 4" className="h-16 object-contain" />
          <img src={logo5} alt="Company 5" className="h-16 object-contain" />
          {/* Duplicate logos for seamless scrolling */}
        </div>
      </div>
    </div>
  );
};

export default BackedBy;