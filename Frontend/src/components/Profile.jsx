import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    emergencyContacts: []
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user information from backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/me');
        const { data } = response.data;

        setUserData({
          name: data.name,
          age: data.age,
          email: data.email,
          mobile: data.mobile,
          emergencyContacts: data.emergencyContacts || []
        });
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEmergencyContactChange = (index, value) => {
    const updatedContacts = [...userData.emergencyContacts];
    updatedContacts[index] = value;
    setUserData({ ...userData, emergencyContacts: updatedContacts });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = async () => {
    try {
      const response = await axios.put('http://localhost:3000/api/users/updateProfile', {
        email: userData.email,
        password: userData.age
      })

      if(response.success){
        console.log("Profile Updated Successfully!");
      }
    } catch (error) {
      
    }
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-4 space-y-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <AiOutlineUser className="w-20 h-20 rounded-full border-2 border-gray-300 bg-slate-50" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-center text-gray-800">{name}</h2>

        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="w-full px-3 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Name"
            />
            <input
              type="number"
              value={userData.age}
              onChange={(e) => setUserData({ ...userData, age: e.target.value })}
              className="w-full px-3 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Age"
            />
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full px-3 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Email"
            />
            <input
              type="text"
              value={userData.mobile}
              onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
              className="w-full px-3 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Mobile"
            />
            <h3 className="text-lg font-semibold mt-2">Emergency Contacts</h3>
            {userData.emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center space-x-2 mb-1">
                <input
                  type="text"
                  placeholder={`Contact ${index + 1}`}
                  value={contact}
                  onChange={(e) => handleEmergencyContactChange(index, e.target.value)}
                  className="w-full px-3 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => removeEmergencyContact(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addEmergencyContact}
              className="w-full py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Add Emergency Contact
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">Age: {userData.age}</p>
            <p className="text-gray-600">Email: {userData.email}</p>
            <p className="text-gray-600">Mobile: {userData.mobile}</p>
            <h3 className="text-lg font-semibold mt-2">Emergency Contacts</h3>
            {userData.emergencyContacts.map((contact, index) => (
              <p key={index} className="text-gray-600">{contact}</p>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={toggleEdit}
          className="w-full py-1 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition duration-300 mt-2"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
