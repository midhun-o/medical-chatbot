"use client";
import { useParams } from 'next/navigation';
import BookingForm from '@/components/BookingForm';

const AppointmentPage = () => {
  const { id } = useParams(); // Use useParams to get the doctor ID from the URL

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      {id && <BookingForm doctorId={id} />} {/* Pass the doctor ID to the BookingForm */}
    </div>
  );
};

export default AppointmentPage;
