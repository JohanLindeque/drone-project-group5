import React, { useState } from 'react';

const Patrol = () => {
  // Define initial state for patrols
  const [patrols, setPatrols] = useState([
    {
      patrol_id: 1,
      drone_id: 1,
      patrol_start_time: '2023-10-20 10:00',
      patrol_end_time: '2023-10-20 12:00',
      weather_conditions: 'Sunny',
      notes: 'Routine patrol',
      path_id: 1,
    },
    // Add more patrols as needed
  ]);

  // Function to handle adding a new Patrol
  const handleAddPatrol = () => {
    // You can add input validation here if needed
    // For now, let's assume all fields are correctly filled.
    setPatrols([
      ...patrols,
      { patrol_id: patrols.length + 1, ...patrols},
    ]);
  };

  // Function to handle removing a Patrol by ID
  const handleRemovePatrol = (id) => {
    const updatedPatrols = patrols.filter((patrol) => patrol.patrol_id !== id);
    setPatrols(updatedPatrols);
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-4xl font-semibold mb-4">Patrol Dashboard</h1>
      <hr className="mb-6" />

      {/* Add a new Patrol */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Add a New Patrol</h3>
        <div className="flex flex-wrap space-x-4">
          <input
            type="text"
            placeholder="Patrol ID"
            value={patrols.patrol_id}
            onChange={(e) => setPatrols({ ...patrols, patrol_id: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Drone ID"
            value={patrols.drone_id}
            onChange={(e) => setPatrols({ ...patrols, drone_id: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Patrol Start Time"
            value={patrols.patrol_start_time}
            onChange={(e) => setPatrols({ ...patrols, patrol_start_time: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Patrol End Time"
            value={patrols.patrol_end_time}
            onChange={(e) => setPatrols({ ...patrols, patrol_end_time: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Weather Conditions"
            value={patrols.weather_conditions}
            onChange={(e) => setPatrols({ ...patrols, weather_conditions: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Notes"
            value={patrols.notes}
            onChange={(e) => setPatrols({ ...patrols, notes: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Path ID"
            value={patrols.path_id}
            onChange={(e) => setPatrols({ ...patrols, path_id: e.target.value })}
            className="border rounded p-2 mb-2"
          />
          <button
            onClick={handleAddPatrol}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          >
            Add Patrol
          </button>
        </div>
      </div>

      {/* Display list of patrols in a list format */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Patrols</h3>
        <ul>
          {patrols.map((patrol) => (
            <li key={patrol.patrol_id} className="mb-2">
              <span>
                Patrol ID: {patrol.patrol_id}, Drone ID: {patrol.drone_id}, Patrol Start Time: {patrol.patrol_start_time}, Patrol End Time: {patrol.patrol_end_time}, Weather Conditions: {patrol.weather_conditions}, Notes: {patrol.notes}, Path ID: {patrol.path_id}
              </span>
              <button
                onClick={() => handleRemovePatrol(patrol.patrol_id)}
                className="bg-[#f7941d] text-white px-2 py-1 ml-2 rounded"
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

export default Patrol;
