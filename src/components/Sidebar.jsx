import React from 'react';

const Sidebar = ({ onContentChange }) => {
  return (
    <div className='bg-[gray] w-[250px] h-screen'>
      <button className='bg-red text-white' onClick={() => onContentChange('knownObjects')}>
        Show Known Objects
      </button>
      <button className='bg-blue text-white' onClick={() => onContentChange('drone')}>
        The drone
      </button>
    </div>
  );
};

export default Sidebar;
