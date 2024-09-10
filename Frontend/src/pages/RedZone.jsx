import React, { useState, useEffect } from 'react';

function LocationStatus() {
  const [location, setLocation] = useState('');
  const [isSafeZone, setIsSafeZone] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      const mockLocation = 'Noida';
      setLocation(mockLocation);
      setIsSafeZone(true);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      
    <div className="relative min-h-screen bg-gray-50 p-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
    
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>
        
        
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>

        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>
        

        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>

        {/* Diagonal abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform -rotate-45"></div>
      </div>

      <h1 className="text-2xl font-bold mb-4">Location Status</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Current Location</h2>
        <p>{location || 'Loading location...'}</p>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Red Zone Alert</h1>
        <div className="bg-red-500 text-white p-6 rounded-md shadow-lg">
          <p className="text-lg">Warning: You are in a red zone area!</p>
        </div>
      </div>

      {location && (
        <div className="p-4 rounded-md bg-blue-100 border-blue-500 border">
          <p className="text-blue-700">
            Your current location ({location}) is not in a red zone. You're in a safe area.
          </p>
        </div>
      )}
    </div>
  );
  );
}


export default LocationStatus;
export default RedZone;
