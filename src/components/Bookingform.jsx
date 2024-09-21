import { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ doctorId }) => {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/book', {
        doctor_id: doctorId,
        patient_name: patientName,
        patient_email: patientEmail,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.detail);
    }
  };

  return (
    <div className="bg-gray-0 p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl mb-4">Book an Appointment</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
          className="border p-2 mb-2 w-full placeholder-gray-700 text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
          required
          className="border p-2 mb-2 w-full placeholder-gray-700 text-black"
        />
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
          className="border p-2 mb-2 w-full placeholder-gray-700 text-black"
        />
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
          className="border p-2 mb-2 w-full placeholder-gray-700 text-black"
        />
        <button type="submit" className="bg-black text-white py-2 rounded w-full">
          Book Appointment
        </button>
        {message && <p className="mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
