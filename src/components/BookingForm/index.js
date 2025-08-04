import React, { useState, useContext } from 'react'
import './index.css'
import { DoctorContext } from '../../context/DoctorContext'

const BookingForm = () => {
  const { selectedDoctor } = useContext(DoctorContext)
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [availabilityDoctor, setAvailabilityDoctor] = useState(false)
  const [givenDateIsInvalid, setGivenDateIsInvalid] = useState(false)

  const [selectedWeekDay, setSelectedWeekDay] = useState(null)
  const [selectedFullDate, setSelectedFullDate] = useState(null)

  if (!selectedDoctor) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>No doctor selected.</p>
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (selectedDoctor.availabilityInNumbers.includes(selectedWeekDay)) {
      const today = new Date()
      const givenFullDate = new Date(selectedFullDate)

      if (givenFullDate <= today) {
        setGivenDateIsInvalid(true)
      } else {
        setSubmitted(true)
        setAvailabilityDoctor(true)
        setGivenDateIsInvalid(false)
      }
    } else {
      setAvailabilityDoctor(false)
      setGivenDateIsInvalid(false)
      setSubmitted(true)
    }
  }

  const onBookDate = e => {
    const fullDateValue = e.target.value
    const weekDay = new Date(fullDateValue).getDay()

    setSelectedFullDate(fullDateValue)
    setSelectedWeekDay(weekDay)
    setDate(fullDateValue)
  }

  return (
    <div className="booking-form">
      <h3 className='book-appointment-head'>Book Appointment with Dr. {selectedDoctor.name}</h3>
      {submitted ? (
        availabilityDoctor ? (
          <p className='after-appointment'>Appointment booked for {name} on {date} ✅</p>
        ) : (
          <p className='after-appointment'>Currently Not Available. Available on {selectedDoctor.availability}</p>
        )
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            type="date"
            value={date}
            required
            onChange={onBookDate}
          />
          {givenDateIsInvalid && <p className='error'>Selected date is outdated. Please choose a future date.</p>}
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  )
}

export default BookingForm
