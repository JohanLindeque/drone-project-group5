import React from 'react';

const Sidebar = ({ onContentChange }) => {
  return (
    <div className='bg-[gray]  h-screen flex-col  mt-10'>
      <h1>Menu</h1>
      <br />
      <div>
        <button
          className='bg-[red] hover:bg-[blue] text-white font-bold py-2 px-4 rounded flex'
          onClick={() => onContentChange('drone')}>
          Drone
        </button>

        <button className='bg-[green] hover:bg-[blue] text-white font-bold py-2 px-4 rounded'>Objects</button>
      </div>
    </div>
  );
};

export default Sidebar;
