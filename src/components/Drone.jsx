import React, { useState } from 'react';

const Drone = () => {
  // Define initial state for drones
  const [drones, setDrones] = useState([
    {
      id: 1,
      name: 'Drone 1',
      manufacturer: 'Manufacturer 1',
      date: '2023-09-27',
      model: 'Model 1',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Drone 2',
      manufacturer: 'Manufacturer 2',
      date: '2023-09-28',
      model: 'Model 2',
      status: 'Inactive',
    },
  ]);

  // Define state for input fields
  const [newDrone, setNewDrone] = useState({
    name: '',
    manufacturer: '',
    date: '',
    model: '',
    status: '',
  });

  // Function to handle adding a new drone
  const handleAddDrone = () => {
    if (newDrone.name && newDrone.manufacturer && newDrone.date && newDrone.model && newDrone.status) {
      setDrones([
        ...drones,
        { id: drones.length + 1, ...newDrone },
      ]);
      setNewDrone({
        name: '',
        manufacturer: '',
        date: '',
        model: '',
        status: '',
      });
    }
  };

  // Function to handle removing a drone by ID
  const handleRemoveDrone = (id) => {
    const updatedDrones = drones.filter((drone) => drone.id !== id);
    setDrones(updatedDrones);
  };

  return (
    <div className='bg-white min-h-screen p-8'>
      <h1 className='text-4xl font-semibold mb-4'>Drone Dashboard</h1>
      <hr className='mb-6' />

      {/* Add a new drone */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold'>Add a New Drone</h3>
        <div className='flex space-x-4'>
          <input
            type='text'
            placeholder='Name'
            value={newDrone.name}
            onChange={(e) => setNewDrone({ ...newDrone, name: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='text'
            placeholder='Manufacturer'
            value={newDrone.manufacturer}
            onChange={(e) => setNewDrone({ ...newDrone, manufacturer: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='date'
            value={newDrone.date}
            onChange={(e) => setNewDrone({ ...newDrone, date: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='text'
            placeholder='Model'
            value={newDrone.model}
            onChange={(e) => setNewDrone({ ...newDrone, model: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <input
            type='text'
            placeholder='Status'
            value={newDrone.status}
            onChange={(e) => setNewDrone({ ...newDrone, status: e.target.value })}
            className='border rounded p-2 flex-1'
          />
          <button onClick={handleAddDrone} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Add Drone
          </button>
        </div>
      </div>

      {/* Display list of drones */}
      <div>
        <h3 className='text-xl font-semibold mb-2'>Drones</h3>
        <ul>
          {drones.map((drone) => (
            <li key={drone.id} className='mb-2'>
              {drone.name} - {drone.manufacturer} - {drone.date} - {drone.model} - {drone.status}
              <button
                onClick={() => handleRemoveDrone(drone.id)}
                className='bg-[#f7941d] text-white px-2 py-1 ml-2 rounded'
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drone;
