import React from 'react';

const Sosbtn = () => {
  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-red-600 text-white font-bold p-5 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-50 animate-pulse"
        style={{
          boxShadow: "0 0 15px rgba(255, 0, 0, 0.7), 0 0 30px rgba(255, 0, 0, 0.5)",
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="focus:outline-none">
          SOS
        </button>
      </div>
    </>
  );
};

export default Sosbtn;
