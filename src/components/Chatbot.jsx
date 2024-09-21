"use client";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Message from './Message';
import MessageInput from './MessageInput';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const currentInput = input;
    setInput('');

    const userMessage = { text: currentInput, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true); 

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL, {
        input: { message: currentInput, session_id: sessionId }
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      const data = response.data;
      const predict = data.output.predict;

      if (predict.session_id) {
        setSessionId(predict.session_id);
      }

      if (predict.type === 'sql') {
        const doctors = predict.data.map(doctor => ({
          id: doctor[0],
          name: doctor[1],
          specialization: doctor[2],
          experience_years: doctor[5],
          city: doctor[7],
          gender: doctor[11]
        }));

        if (doctors.length > 0) {
          setMessages((prev) => [
            ...prev,
            { text: '', sender: 'bot', type: 'card', details: doctors }
          ]);
        }
      } else if (predict.type === 'chat') {
        const chatMessage = { text: predict.chat, sender: 'bot' };
        setMessages((prev) => [...prev, chatMessage]);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, there was an error processing your request.", sender: 'bot' }
      ]);
    }

    setLoading(false);
  };

  const handleButtonClick = (doctorId) => {
    const url = `${process.env.NEXT_PUBLIC_DOCTOR_URL}${doctorId}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 text-black p-4 shadow-lg border border-gray-300 rounded-lg mx-auto">
      <div ref={chatContainerRef} className="flex-grow h-64 overflow-y-auto mb-4 p-4 bg-white border border-gray-200 rounded-md shadow-inner">
        {messages.map((message, index) => (
          <Message key={index} {...message} onButtonClick={handleButtonClick} />
        ))}
      </div>
      <MessageInput
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        loading={loading}
      />
    </div>
  );
}
