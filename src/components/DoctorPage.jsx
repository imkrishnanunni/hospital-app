import React, { useState, useEffect } from 'react';

function DoctorPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data 
    fetch('http://127.0.0.1:8000/api/doctors/')
      .then(response => response.json())
      .then(data =>  setDoctors(data.doctors))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
    <h1>Available Doctors</h1>
    <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <h2>{doctor.first_name} {doctor.last_name}</h2>
          </li>
        ))}
    </ul>
    </div>
  );
}

export default DoctorPage;