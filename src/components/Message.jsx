import React from 'react';
import DoctorCard from './DoctorCard';

const Message = ({ text, sender, type, details, onButtonClick }) => {
  if (type === 'card' && Array.isArray(details) && details.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {details.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onButtonClick={onButtonClick} />
        ))}
      </div>
    );
  }

  return (
    <div className={`mb-3 flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`inline-block px-4 py-2 rounded-lg shadow-sm ${sender === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;
