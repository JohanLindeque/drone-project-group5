import React, { useState } from 'react';

const KnownObjectsComponent = () => {
  // Define initial state for drones
  const [entries, setEntries] = useState([
    {
      /*ID: '1',*/
      patrolID: '1',
      imageLink: '/images/unknown.png',
      dateTime: '2023-08-13T19:25',
      objectType: 'Unknown',
      userID: 1,
    },
    {
      /*ID: '2',*/
      patrolID: '2',
      imageLink: '/images/bike.png',
      dateTime: '2023-08-17T10:15',
      objectType: 'Bike',
      userID: 2,
    },
    {
      /*ID: '3',*/
      patrolID: '2',
      imageLink: '/images/bus.png',
      dateTime: '2023-08-21T11:30',
      objectType: 'Bus',
      userID: 2,
    },
    {
      /*ID: '4',*/
      patrolID: '2',
      imageLink: '/images/train.png',
      dateTime: '2023-08-25T12:45',
      objectType: 'Train',
      userID: 3,
    },
    {
      /*ID: '5',*/
      patrolID: '3',
      imageLink: '/images/motorbike.png',
      dateTime: '2023-08-29T14:00',
      objectType: 'Motorbike',
      userID: 3,
    },
    {
      /*ID: '6',*/
      patrolID: '4',
      imageLink: '/images/van.png',
      dateTime: '2023-09-02T15:15',
      objectType: 'Van',
      userID: 4,
    },
    {
      /*ID: '7',*/
      patrolID: '4',
      imageLink: '/images/truck.png',
      dateTime: '2023-09-04T16:30',
      objectType: 'Truck',
      userID: 2,
    },
  ]);

  // Input Fields
  const [newEntry, setNewEntry] = useState({
    ID: '',
    patrolID: '',
    imageLink: '',
    dateTime: '',
    objectType: '',
    userID: '',
  });

  // Function to handle adding a new drone
  const handleAddEntry = () => {
    if (newEntry.patrolID && newEntry.imageLink && newEntry.dateTime && newEntry.objectType && newEntry.userID) {
      setEntries([
        ...entries,
        { id: entries.length + 1, ...newEntry },
      ]);
      setNewEntry({
        /* ID: '', */
        patrolID: '',
        imageLink: '',
        dateTime: '',
        objectType: '',
        userID: '',
      });
    }
  };

  // Function to handle removing a entry by ID
  /*
  const handleRemoveEntry = (ID) => {  |///OR///| const handleRemoveEntry = (objectID) => {
    const updatedEntries = entries.filter((entry) => entry.ID !== ID  |///OR///| entry.objectID !== objectID);
    setEntries(updatedEntries); 
  */

  const handleRemoveEntry = (dateTime) => {
    const updatedEntries = entries.filter((entry) => entry.dateTime !== dateTime);
    setEntries(updatedEntries);
  };

  return (
    <div className='bg-white min-h-screen p-8'>
      <h1 className='text-4xl font-semibold mb-4'>Known Objects</h1>
      <hr className='mb-6' />
      {/* Add your known objects content here */}

      {/* Add entries into the table */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold'>Insert detail(s) to add a new entry</h3>
        <div className='flex space-x-4'>
          <input
            type='text'
            placeholder='Patrol ID'
            value={newEntry.patrolID}
            onChange={(e) => setNewEntry({ ...newEntry, patrolID: e.target.value })}
            className='border rounded p-2 flex-1 w-1/12'
          />
          <input
            type='text'
            placeholder='Image url'
            value={newEntry.imageLink}
            onChange={(e) => setNewEntry({ ...newEntry, imageLink: e.target.value })}
            className='border rounded p-2 flex-1 w-2/12'
          />
          <input
            type='datetime-local'
            value={newEntry.dateTime}
            onChange={(e) => setNewEntry({ ...newEntry, dateTime: e.target.value })}
            className='border rounded p-2 flex-1 w-6/12'
          />
          <input
            type='text'
            placeholder='Object Type'
            value={newEntry.objectType}
            onChange={(e) => setNewEntry({ ...newEntry, objectType: e.target.value })}
            className='border rounded p-2 flex-1 w-2/12'
          />
          <input
            type='text'
            placeholder='User ID'
            value={newEntry.userID}
            onChange={(e) => setNewEntry({ ...newEntry, userID: e.target.value })}
            className='border rounded p-2 flex-1 w-1/12'
          />
          <button onClick={handleAddEntry} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Add Entry
          </button>
        </div>
      </div>

      <div id="table-container">
<table className='bg-slate-100 inline-block shadow-md rounded-3xl p-8 w-full text-center'>
  <thead>
    <tr>
      <th className='w-1/12 border-4 bg-slate-300 border-slate-600'>Object ID</th>
      <th className='w-1/12 border-4 bg-slate-200 border-slate-600'>Patrol ID</th>
      <th className='w-2/12 border-4 bg-slate-300 border-slate-600'>Image Link</th>
      <th className='w-2/12 border-4 bg-slate-200 border-slate-600'>Time and Date Captured</th>
      <th className='w-2/12 border-4 bg-slate-300 border-slate-600'>Object Type</th>
      <th className='w-1/12 border-4 bg-slate-200 border-slate-600'>User ID</th>
      <th className='px-2' style={{ width: '0.1%' }}>Delete</th>
    </tr>
  </thead>
  <tbody>
    {entries.map((entry, index) => (
      <tr className='group'>
        <td className='bg-slate-200 border-b-2 border-r-2 border-l-4 border-slate-600'>{index + 1}</td>
        <td className='bg-slate-100 border-b-2 border-r-2 border-slate-600'>{entry.patrolID}</td>
        <td className='bg-slate-200 border-b-2 border-r-2 border-slate-600'>{entry.imageLink}</td>
        <td className='bg-slate-100 border-b-2 border-r-2 border-slate-600'>{entry.dateTime.replace('T', ' ')}</td>
        <td className='bg-slate-200 border-b-2 border-r-2 border-slate-600'>{entry.objectType}</td>
        <td className='bg-slate-100 border-b-2 border-r-4 border-slate-600'>{entry.userID}</td>
        <td>
          <button
            /* For work with the ID field */
            /*onClick={() => handleRemoveEntry(entry.dateTime)}
            className='bg-[#a22522] text-white px-2 hidden rounded-lg group-hover:block'*/

            /* Demonstration purposes */
            onClick={() => handleRemoveEntry(entry.dateTime)}
            className='bg-[#a22522] text-white px-2 hidden rounded-lg group-hover:block'
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
    <tr>
      <td className='border-b-2 bg-slate-600 h-'></td>
      <td className='border-b-2 bg-slate-600 h-0'></td>
      <td className='border-b-2 bg-slate-600 h-0'></td>
      <td className='border-b-2 bg-slate-600 h-0'></td>
      <td className='border-b-2 bg-slate-600 h-0'></td>
      <td className='border-b-2 bg-slate-600 h-0'></td>
    </tr>
  </tbody>
</table>

  </div>
    </div>
  );
};

export default KnownObjectsComponent;
