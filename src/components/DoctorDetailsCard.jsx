import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaBirthdayCake } from 'react-icons/fa';
import Link from 'next/link';

const DoctorDetailsCard = ({ doctor }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full h-full border border-gray-200 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">{doctor?.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="text-lg text-gray-800">
            <strong>Specialization:</strong> {doctor?.specialization}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Experience:</strong> {doctor?.experience_years || 'N/A'} years
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="flex items-center text-lg text-gray-800">
            <FaPhone className="mr-2 text-black" />
            <strong>Contact:</strong> {doctor?.phone_number || 'N/A'}
          </p>
          <p className="flex items-center text-lg text-gray-800">
            <FaEnvelope className="mr-2 text-black" />
            <strong>Email:</strong> {doctor?.email || 'N/A'}
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="flex items-center text-lg text-gray-800">
            <FaMapMarkerAlt className="mr-2 text-black" />
            <strong>Address:</strong> {doctor?.address || 'N/A'}
          </p>
          <p className="text-lg text-gray-800">
            <strong>City:</strong> {doctor?.city || 'N/A'}
          </p>
          <p className="text-lg text-gray-800">
            <strong>State:</strong> {doctor?.state || 'N/A'}
          </p>
          <p className="text-lg text-gray-800">
            <strong>ZIP Code:</strong> {doctor?.zip_code || 'N/A'}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Country:</strong> {doctor?.country || 'N/A'}
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="flex items-center text-lg text-gray-800">
            <FaUser className="mr-2 text-black" />
            <strong>Gender:</strong> {doctor?.gender || 'N/A'}
          </p>
          <p className="flex items-center text-lg text-gray-800">
            <FaBirthdayCake className="mr-2 text-black" />
            <strong>Date of Birth:</strong> {doctor?.date_of_birth || 'N/A'}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-auto">
        <Link href={`/appointment/${doctor?.id}`} className="bg-black text-white text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md">
          Go to Appointment Page
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetailsCard;
