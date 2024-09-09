import React, { useEffect, useRef, useState } from "react";
import { FiSend } from 'react-icons/fi';
import { model } from "../service/AiModel";

const prompt = "You are a therapist chatbot designed specifically to support women dealing with stress, anxiety, or other emotional challenges. Please respond with empathy, care, and helpful suggestions. Offer therapeutic advice that encourages self-care, mindfulness, and positive thinking. Be non-judgmental and make sure the conversation feels safe and supportive.";

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Store conversation messages
  const [input, setInput] = useState(""); // Store user input
  const [loading, setLoading] = useState(false); // Loading state for sending message

  const chatWindowRef = useRef(null); // Reference to scroll chat window to the latest message

  useEffect(() => {
    // Scroll to the latest message whenever messages change
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

  // Function to handle user message submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return; // Do nothing if input is empty

    // Add user message to the conversation
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Clear input
    setInput("");

    const therapyPrompt = `
      You are a therapist chatbot designed specifically to support women dealing with stress, anxiety, or other emotional challenges. Please respond with empathy, care, and helpful suggestions. Offer therapeutic advice that encourages self-care, mindfulness, and positive thinking. Be non-judgmental and make sure the conversation feels safe and supportive.
    `;

    // Format conversation history
    const conversationHistory = formatConversationHistory();

    const new_prompt = therapyPrompt + "\n" + conversationHistory + "\nUser: " + input

    // Send message to backend (Gemini API)
    setLoading(true);
    try {

      const response = await model.generateContent(new_prompt);

      // Add bot response to the conversation
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
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg m-10">
        {/* Chat window */}
        <div
          className="p-6 h-96 overflow-y-auto bg-gray-50 rounded-t-lg"
          ref={chatWindowRef}
        >
          {/* Display messages */}
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 italic">
              Start a conversation...
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-3 max-w-lg ${msg.sender === "user"
                  ? "ml-auto bg-blue-100 rounded-l-lg"
                  : "mr-auto bg-gray-200 rounded-r-lg"
                  }`}
              >
                {msg.text}
              </div>
            ))
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="text-center text-gray-500 italic">Bot is typing...</div>
          )}
        </div>

        {/* Message input area */}
        <form
          onSubmit={handleSubmit}
          className="p-3 flex items-center border-t border-gray-200 bg-gray-100 rounded-b-lg"
        >
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading} // Disable input when loading
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            disabled={loading} // Disable button when loading
          >
            <FiSend className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
