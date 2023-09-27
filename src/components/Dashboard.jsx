import React from 'react';
import Sidebar from './Sidebar';
import KnownObjects from './KnownObjects';

const Dashboard = () => {
  return (
    <div className="flex mt-8">
      {/* Sidebar on the left */}
      <div className="w-1/4 bg-gray-200 p-4">
        <Sidebar />
      </div>

      {/* KnownObjects on the right */}
      <div className="flex-grow p-4">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Dashboard</h1>
          <KnownObjects />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
