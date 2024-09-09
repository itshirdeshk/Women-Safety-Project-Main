import React from 'react';

function RedZone() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Red Zone Alert</h1>
      <div className="bg-red-500 text-white p-4 rounded-md">
        <p>Warning: You are in a red zone area!</p>
      </div>
    </div>
  )
}

export default RedZone;