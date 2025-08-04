import React, { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import './index.css'

const DoctorCard = ({ doctor }) => {
  const { setSelectedDoctor } = useContext(DoctorContext)

  return (
    <div className="doctor-card" onClick={() => setSelectedDoctor(doctor)}>
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>{doctor.availability}</p>
    </div>
  )
}

export default DoctorCard
