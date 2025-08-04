import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { DoctorContext } from '../../context/DoctorContext'
import './index.css'

const DoctorProfile = () => {
  const { selectedDoctor } = useContext(DoctorContext)

  if (!selectedDoctor) {
    return <div className="no-selection">No doctor selected</div>
  }

  return (
    <div className="profile-container">
      <img src={selectedDoctor.imageUrl} alt={selectedDoctor.name} className="profile-img" />
      <h2>{selectedDoctor.name}</h2>
      <p><strong>Speciality:</strong> {selectedDoctor.speciality}</p>
      <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
      <p><strong>Location:</strong> {selectedDoctor.location}</p>
      <p><strong>Availability Status:</strong> {selectedDoctor.availability}</p>
      <Link to="/booking-form" className="book-btn-container">
        <button type="button" className="book-btn">Book Appointment</button>
      </Link>
    </div>
  )
}

export default DoctorProfile
