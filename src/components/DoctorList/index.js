import React, { useContext, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import doctors from '../../data/doctors.json'
import CarouselComponent from '../../components/CarouselComponent'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import './index.css'

const DoctorList = () => {
  const { allDoctors, isLoading, setSelectedDoctor, setDoctorList } = useContext(DoctorContext)
  const [searchInput, setSearchInput] = useState("")
  const [showFilteredData, setShowFilteredData] = useState(true)
  const navigate = useNavigate()

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor)
    navigate('/doctor-profile')
  }

  const inputValue = (event) => {
    setSearchInput(event.target.value)
  }

  const onSearch = () => {
    const filteredData = allDoctors.filter(eachDoctor => eachDoctor.name.toLowerCase().includes(searchInput.toLowerCase()) || eachDoctor.speciality.toLowerCase().includes(searchInput.toLowerCase()))
    if (filteredData.length !== 0){
      setDoctorList(filteredData)
      setShowFilteredData(true)
    }
    else{
      setShowFilteredData(false)
    }
  }

  const onFilter1 = (event) =>{
    const experienceValue = event.target.value
    const filteredData = allDoctors.filter((eachDoctor) => eachDoctor.experience <= experienceValue)
    setDoctorList(filteredData)
    setShowFilteredData(true)
  }
  const onFilter2 = (event) =>{
    const experienceValue = event.target.value
    const filteredData = allDoctors.filter((eachDoctor) => (eachDoctor.experience >= 11) && (eachDoctor.experience <= experienceValue))
    setDoctorList(filteredData)
    setShowFilteredData(true)
  }
  const onFilter3 = (event) =>{
    const experienceValue = event.target.value
    const filteredData = allDoctors.filter((eachDoctor) => eachDoctor.experience >= experienceValue)
    setDoctorList(filteredData)
    setShowFilteredData(true)
  }
  const onClear = () => {
    setDoctorList(doctors)
    setShowFilteredData(true)
  }

  if (isLoading) {
    return (<div className="loader">
      <ThreeDots height="80" width="80" color="blue" />
    </div>)
  }

  return (
    <div className="doctor-list-container">
      <Header />
      <CarouselComponent />
      <div className="main-content">
        <div className="search-container">
          <div className='input-container'>
            <input type="search" className="input" placeholder="Search..." onChange={inputValue} />
            <CiSearch className="search-icon" onClick={onSearch} />
          </div>
          <div className='filter-container'>
            <IoFilterSharp className="filter-icon" />
            <h1 className="filter-text">Filters</h1>
          </div>
          <div className="filters">
            <div className='experience-filter-container'>
              <label htmlFor="5-10">5 To 10 years Experience Doctors</label>
              <input id="5-10" name="radio" type='radio' className='text-experience' onChange={onFilter1} value={10} />
            </div>
            <div className='experience-filter-container'>
              <label htmlFor="11-15">11 To 15 years Experience Doctors</label>
              <input id="11-15" name="radio" type='radio' className='text-experience' onChange={onFilter2} value={15} />
            </div>
            <div className='experience-filter-container'>
              <label htmlFor="15+">Above 15 years Experience Doctors</label>
              <input id="15+" name="radio" type='radio' className='text-experience' onChange={onFilter3} value={16} />
            </div>
          </div>
          <div className='clear-container'>
            <p className='clear' onClick={onClear}>Clear Filters</p>
          </div>
        </div>
        {showFilteredData ? (
          <ul className="doctor-list">
            {allDoctors.map(doctor => (
              <li key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
                <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.speciality}</p>
                  <p>{doctor.availability}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="No-Result-found-container">
            <img src="https://res.cloudinary.com/dtge185n9/image/upload/v1754184367/Screenshot_2025-08-03_065527_qbwqnp.png" alt="Not Found" className="not-found-img" />
            <h1>No Result Found</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default DoctorList
