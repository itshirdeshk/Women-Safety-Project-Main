import React from "react";

const IncidentReporting = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Report an Incident
        </h2>
        <form>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">
              Date of Incident
            </label>
            <input
              type="date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
            />
          </div>
          <div className="mb-5"></div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none "
              rows="4"
              placeholder="Describe the incident in detail"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncidentReporting;
