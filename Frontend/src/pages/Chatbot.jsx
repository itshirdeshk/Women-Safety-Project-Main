import React, { useEffect, useRef, useState } from "react";
import { FiSend } from 'react-icons/fi';
import { model } from "../service/AiModel";
import { AiOutlineUser, AiOutlineRobot } from 'react-icons/ai'; // Avatars

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const formatConversationHistory = () => {
    return messages
      .map((msg) =>
        msg.sender === "user"
          ? `User: ${msg.text}`
          : `Bot: ${msg.text}`
      )
      .join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const therapyPrompt = `
      You are a therapist chatbot designed specifically to support women dealing with stress, anxiety, or other emotional challenges. Please respond with empathy, care, and helpful suggestions. 
    `;

    const conversationHistory = formatConversationHistory();
    const new_prompt = therapyPrompt + "\n" + conversationHistory + "\nUser: " + input;

    setLoading(true);
    try {
      const response = await model.generateContent(new_prompt);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.response.text().split(':')[1].split("}")[0].split('"')[1] }
      ]);
    } catch (error) {
      console.error("Error in sending message", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg m-5 relative">
        {/* Chat Header */}
        <div className="bg-gray-400 text-white text-lg font-mono p-4 rounded-t-lg text-center">
          Vani the AI Therepyst
        </div>

        {/* Chat Window */}
        <div
          className="p-6 h-96 overflow-y-auto bg-gray-50 rounded-b-lg custom-scrollbar"
          ref={chatWindowRef}
        >
          {/* Display messages */}
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 italic">
              Start a conversation...
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-4`}>
                {msg.sender === "bot" && (
                  <AiOutlineRobot className="text-gray-500 w-8 h-8 mr-2" />
                )}
                <div
                  className={`p-3 max-w-md ${msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-l-xl rounded-br-xl"
                    : "bg-gray-300 text-gray-800 rounded-r-xl rounded-bl-xl"
                    } shadow-md transition-all transform hover:scale-105`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <AiOutlineUser className="text-blue-500 w-8 h-8 ml-2" />
                )}
              </div>
            ))
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="flex justify-start mb-4">
              <AiOutlineRobot className="text-gray-500 w-8 h-8 mr-2" />
              <div className="bg-gray-300 p-3 rounded-r-xl rounded-bl-xl animate-pulse">
                Bot is typing...
              </div>
            </div>
          )}
        </div>

        {/* Message Input Area */}
        <form
          onSubmit={handleSubmit}
          className="p-4 flex items-center border-t border-gray-200 bg-gray-100 rounded-b-lg"
        >
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="p-3 ml-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <FiSend className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Additional Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #9b9b9b;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f4f4f4;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
