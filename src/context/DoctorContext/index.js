import React, { createContext, useState, useEffect } from 'react'
import doctors from '../../data/doctors.json'

export const DoctorContext = createContext()

export const DoctorProvider = ({ children }) => {
  const [doctorList, setDoctorList] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDoctorList(doctors)
      setIsLoading(false)    }, 1000)
  }, [])

  return (
    <DoctorContext.Provider
      value={{
        allDoctors: doctorList,
        isLoading,
        selectedDoctor,
        setSelectedDoctor,
        setDoctorList, // ✅ Add this
      }}
    >
      {children}
    </DoctorContext.Provider>
  )
}
