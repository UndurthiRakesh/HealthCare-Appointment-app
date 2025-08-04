import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorList from './components/DoctorList'
import DoctorProfile from './components/DoctorProfile'
import { DoctorProvider } from './context/DoctorContext'
import BookingForm from "./components/BookingForm"

const App = () => (
  <DoctorProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/booking-form" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  </DoctorProvider>
)

export default App
