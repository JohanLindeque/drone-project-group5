import React, { useState } from 'react';
import Profile from './Profile';
import Drone from './Drone';
import KnownObjects from './KnownObjects';
import Sidebar from './Sidebar';

const App = () => {
  const [content, setContent] = useState('drone');

  const handleContentChange = (selectedContent) => {
    setContent(selectedContent);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-800 text-white py-4">
        <Sidebar onContentChange={handleContentChange} />
      </div>

      {/* Content Area */}
      <div className="flex-grow p-6 ml-2 mt-8">
        {content === 'profile' && <Profile />}
        {content === 'drone' && <Drone />}
        {content === 'known-objects' && <KnownObjects />}
      </div>
    </div>
  );
};

export default App;
