import React from 'react';
import { MdPerson, MdLocationOn, MdOutlineWork } from 'react-icons/md';
import { FaGenderless } from 'react-icons/fa';

const DoctorCard = ({ doctor, onButtonClick }) => (
  <div className="bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm">
    <h3 className="font-semibold text-gray-800 flex items-center">
      <MdPerson className="mr-2 text-xl" />
      {doctor.name}
    </h3>
    <p className="text-sm text-gray-600 flex items-center">
      <MdOutlineWork className="mr-2 text-lg" />
      Specialization: {doctor.specialization}
    </p>
    <p className="text-sm text-gray-600 flex items-center">
      <MdOutlineWork className="mr-2 text-lg" />
      Experience: {doctor.experience_years} years
    </p>
    <p className="text-sm text-gray-600 flex items-center">
      <MdLocationOn className="mr-2 text-lg" />
      City: {doctor.city}
    </p>
    <p className="text-sm text-gray-600 flex items-center">
      <FaGenderless className="mr-2 text-lg" />
      Gender: {doctor.gender}
    </p>
    <button
      onClick={() => onButtonClick(doctor.id)}
      className="mt-2 bg-black text-white py-2 px-4 rounded border border-black hover:bg-gray-800 transition-colors duration-200 w-full"
    >
      Book Appointment
    </button>
  </div>
);

export default DoctorCard;
