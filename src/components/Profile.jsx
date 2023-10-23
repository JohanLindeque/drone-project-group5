import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const ProfileComponent = () => {
  const navigate = useNavigate();

  // Sample user data
  const [user, setUser] = useState({
    name: 'John',
    surname: 'Doe',
    username: 'johndoe123',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
  });

  const [newEmail, setNewEmail] = useState(''); // State to hold the new email address
  const [showEmailModal, setShowEmailModal] = useState(false); // State to control the email update modal

  const dashboard = () => {
    // Redirects to the dashboard page
    navigate('/dashboard');;
  };

  const deleteProfile = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: '',
      surname: '',
      phoneNumber: '',
      email: '',
    }));
    alert('Profile deleted successfully');
    // Redirects to the login page
    navigate('/');;
  };

  // Function to update the user's email
  const updateEmail = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail,
    }));
    setShowEmailModal(false); // Close the modal
  };

  return (
    <div className='bg-white h-screen p-8'>
      <h1 className='text-4xl font-semibold mb-4'>Profile details</h1>
      <hr className='mb-6' />

      <div className='mb-8'>
        <div className='flex w-8/12'>
          <div className='bg-slate-200 w-5/12 p-6 pl-0 pr-0 rounded-3xl shadow-lg' style={{ display: 'inline-grid', justifyContent: 'center' }}>
            <div className='bg-slate-300 p-2 pl-3 text-lg font-medium rounded-t-3xl'>
              Name: <span style={{ fontWeight: 'normal' }}>{user.name} {user.surname}</span>
            </div>
            <div className='bg-slate-300 p-2 pl-3 text-lg font-medium'>
              Phone Number: <span style={{ fontWeight: 'normal' }}>{user.phoneNumber}</span>
            </div>
            <div className='bg-slate-300 p-2 pl-3 pb-3 text-lg font-medium rounded-b-3xl shadow-md'>
              Email: <span style={{ fontWeight: 'normal' }}>{user.email}</span>
            </div>
            <button
              onClick={() => setShowEmailModal(true)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-5'>
              Change Email
            </button>

<div className='mt-8 flex justify-between'>
  <button
    onClick={dashboard}
    className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
  >
    Dashboard
  </button>
  <button
    onClick={deleteProfile}
    className='bg-red-500 text-white px-4 py-2 rounded-md'
  >
    Delete Profile
  </button>
</div>
          </div>
        </div>
      </div>

      {/* Email Update Modal */}
      {showEmailModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Update Email</h2>
            <input
              type='text'
              placeholder='Enter new email'
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className='w-full px-3 py-2 border rounded-md mb-4'
            />
            <div className='flex justify-between'>
              <button
                onClick={updateEmail}
                className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
              >
                Update
              </button>
              <button
                onClick={() => setShowEmailModal(false)}
                className='bg-red-500 text-white px-4 py-2 rounded-md'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
/* :0 */