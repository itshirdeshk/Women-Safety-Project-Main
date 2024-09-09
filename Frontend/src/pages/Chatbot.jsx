import React from "react";
import { FiSend } from 'react-icons/fi';

const Chatbot = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg m-10">
        {/* Chat window */}
        <div className="p-6 h-96 overflow-y-auto bg-gray-50 rounded-t-lg">
          {/* Placeholder for chatbot messages */}
          <div className="text-center text-gray-500 italic">Start a conversation...</div>
        </div>

        {/* Message input area */}
        <form className="p-3 flex items-center border-t border-gray-200 bg-gray-100 rounded-b-lg">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 "
          />
          <button type="submit" className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
            <FiSend className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
