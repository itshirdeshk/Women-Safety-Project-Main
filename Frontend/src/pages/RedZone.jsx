import React from 'react';

function RedZone() {
  return (
    <div className="relative min-h-screen bg-gray-50 p-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>

        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>

        {/* Diagonal abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform -rotate-45"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Red Zone Alert</h1>
        <div className="bg-red-500 text-white p-6 rounded-md shadow-lg">
          <p className="text-lg">Warning: You are in a red zone area!</p>
        </div>
      </div>
    </div>
  );
}

export default RedZone;
