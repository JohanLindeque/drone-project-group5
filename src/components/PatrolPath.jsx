import React, { useState } from 'react';

const Path = () => {
  // Define initial state for paths
  const [paths, setPaths] = useState([
    {
      path_id: 1,
      points: {A: "20:14",B:"15:20"},
      patrolcycles: '10',
      user_id: '1',
    },
    {
      path_id: 2,
      points: {A: "12:25",B:"14:45"},
      patrolcycles: '3',
      user_id: '2',
    },
  ]);

  // Define state for input fields
  const [newPath, setNewPath] = useState({
    points: '',
    patrolcycles: '',
    user_id: '',
  });

  // Function to handle adding a new Path
  const handleAddDrone = () => {
    if (newPath.points && newPath.patrolcycles && newPath.user_id ) {
      setPaths([
        ...paths,
        { id: paths.length + 1, ...newPath },
      ]);
      setNewPath({
        points: '',
        patrolcycles: '',
        user_id: '',
      });
    }
  };

  // Function to handle removing a Path by ID
  const handleRemoveDrone = (id) => {
    const updatedPaths = paths.filter((Path) => Path.path_id !== id);
    setPaths(updatedPaths);
  };

  return (
    <div className='bg-white min-h-screen p-8'>
      <h1 className='text-4xl font-semibold mb-4'>Path Dashboard</h1>
      <hr className='mb-6' />

      {/* Add a new Path */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold'>Add a New Path</h3>
        <div className='flex space-x-4'>
          <input
            type='text'
            placeholder='Points'
            value={newPath.points}
            onChange={(e) => setNewPath({ ...newPath, points: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='text'
            placeholder='Patrolcycles'
            value={newPath.patrolcycles}
            onChange={(e) => setNewPath({ ...newPath, patrolcycles: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='text'
            placeholder='User'
            value={newPath.user_id}
            onChange={(e) => setNewPath({ ...newPath, user_id: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <button onClick={handleAddDrone} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Add Path
          </button>
        </div>
      </div>

      {/* Display list of paths */}
      <div>
        <h3 className='text-xl font-semibold mb-2'>Paths</h3>
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-2">Path ID</th>
              <th className="border p-2">Points</th>
              <th className="border p-2">Patrol Cycles</th>
              <th className="border p-2">User ID</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paths.map((path) => (
              <tr key={path.path_id}>
                <td className="border p-2 text-center">{path.path_id}</td>
                <td className="border p-2">
                  <table className="w-full">
                    <tbody>
                      {Object.keys(path.points).map((pointKey) => (
                        <tr key={pointKey}>
                          <td className="border p-2">{pointKey}:</td>
                          <td className="border p-2">{path.points[pointKey]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td className="border p-2 text-center">{path.patrolcycles}</td>
                <td className="border p-2 text-center">{path.user_id}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleRemoveDrone(path.path_id)}
                    className='bg-[#f7941d] text-white px-2 py-1 ml-2 rounded'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Path;
