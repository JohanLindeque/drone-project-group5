import React from 'react';

const Sidebar = ({ onContentChange }) => {
  return (
    <div className='fixed left-0 top-0 h-2/6 w-60 bg-blue-800 text-white'>
      <h1 className='text-3xl font-bold text-[#32CD32] my-4 mx-6'>Group 5</h1>
      <ul className='uppercase p-4'>
        <li
          className='p-4 cursor-pointer border-b border-[#0E327A]'
          onClick={() => onContentChange('profile')}
        >
          Profile
        </li>
        <li
          className='p-4 cursor-pointer border-b border-[#0E327A]'
          onClick={() => onContentChange('drone')}
        >
          Drone
        </li>
        <li
          className='p-4 cursor-pointer border-b border-[#0E327A]'
          onClick={() => onContentChange('known-objects')}
        >
          Known Objects
        </li>
        <li
          className='p-4 cursor-pointer border-b border-[#0E327A]'
          onClick={() => onContentChange('patrol-path')}
        >
          Patrol Path
        </li>
        <li
          className='p-4 cursor-pointer border-b border-[#0E327A]'
          onClick={() => onContentChange('patrols')}
        >
          Patrols
        </li>
        <li className='p-4 cursor-pointer' onClick={() => onContentChange('signup')}>
         
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
