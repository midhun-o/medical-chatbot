"use client"; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer'; 
import DoctorDetailsCard from '@/components/DoctorDetailsCard';

const DoctorDetails = ({ params }) => {
  const { id } = params; 
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      if (!id) return; 

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/doctor/${id}`);
        setDoctor(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <DoctorDetailsCard doctor={doctor} />
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDetails;
