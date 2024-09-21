import React from 'react';
import { FiSend } from 'react-icons/fi';

const MessageInput = ({ input, setInput, handleSendMessage, loading }) => (
  <div className="flex items-center border-t border-gray-300 pt-2">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      className="flex-grow p-3 bg-gray-200 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-400 transition-colors duration-150 text-black"
      placeholder="Type your message..."
      disabled={loading}
    />
    <button
      onClick={handleSendMessage}
      className={`bg-black text-white py-3 px-5 rounded-r-md border-0 hover:bg-gray-800 transition-colors duration-200 flex items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading} 
    >
      {loading ? 'Loading...' : <FiSend className="text-xl" />}
    </button>
  </div>
);

export default MessageInput;
