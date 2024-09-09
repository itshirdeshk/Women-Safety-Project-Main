import React from "react";

const IncidentReporting = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-lg w-full bg-white shadow-2xl rounded-xl p-8 overflow-hidden">
        <div className="absolute inset-0  opacity-20 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Report an Incident
          </h2>
          <form>
            {/* Name Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter your email"
              />
            </div>

            {/* Date Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Date of Incident
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>

            {/* Description Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
                rows="4"
                placeholder="Describe the incident in detail"
              />
            </div>

            {/* File Upload/Camera Section */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Upload Evidence (Image/Video)
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                capture="user"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
                // onChange={handleFileChange}
              />
              {/* {file && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Preview:</p>
                  <div className="border rounded-lg overflow-hidden">
                    {file.endsWith("mp4") || file.endsWith("mov") ? (
                      <video src={file} controls className="w-full" />
                    ) : (
                      <img src={file} alt="Uploaded file" className="w-full" />
                    )}
                  </div>
                </div>
              )} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncidentReporting;
