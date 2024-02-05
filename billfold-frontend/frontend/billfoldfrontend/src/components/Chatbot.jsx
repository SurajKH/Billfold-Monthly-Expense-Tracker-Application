// Chatbot.jsx

import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Display initial message when the component mounts
    setMessages([
      { text: 'Hi, I am your chatbot. Please type your concerns.', sender: 'bot' },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputValue('');

      const botResponse = getBotResponse(inputValue);
      if (botResponse) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: botResponse, sender: 'bot' },
          ]);
        }, 500);
      } else {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Hello! How can I assist you?', sender: 'bot' },
          ]);
        }, 500);
      }
    }
  };

  const getBotResponse = (question) => {
    const responses = {
      'what are the services offered': 'provision for systematic financial planning, calculation of investment amount and prediction for the future, Chart Visualizations for the different set of calculations.',
      'tech stack used': 'frontend: ReactJS, TailwindCSS, backend: SpringBoot, database: MySQL',
      'help': 'I am here to assist you. How can I help?',
    };

    const matchingResponse = Object.entries(responses).find(([pattern]) =>
      new RegExp(pattern, 'i').test(question)
    );
    return matchingResponse ? matchingResponse[1] : null;
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-black border border-gray-300 rounded-lg overflow-hidden text-white">
      <div className="max-h-100 min-h-60 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container flex mb-2 ${
              message.sender === 'user' ? 'justify-start' : 'justify-end'
            } text-sm`}
          >
            <div
              className={`message p-2 rounded ${
                message.sender === 'user' ? 'bg-green-500' : 'bg-blue-500'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded mr-2 bg-black text-white"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
