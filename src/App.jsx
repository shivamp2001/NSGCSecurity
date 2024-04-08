import React from 'react'

import './App.css'
import Header from './Components/pages/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomeComponets/Home'
import Aboutus from './Components/AboutusComponent/Aboutus'
import Inquiry from './Components/Footer/Inquiry'
import Footer from './Components/Footer/Footer'
import Contactus from './Components/Contactus/Contactus'
import Services from './Components/ServicesComponent/Services'
import WhyNSGC from './Components/whynsgc/WhyNSGC'
import Careers from './Components/Careers/Careers'
import Training from './Components/Training/Training'
import Qualityassu from './Components/Qualityassu/Qualityassu'
// import Navbar from './Components/pages/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
       <Header/>
      <Routes>
         <Route path="/" element={<Home/>} /> 
         {/* <Route path="/" element={<Inquiry/>} />  */}
         {/* <Route path="/" element={<Footer/>} />  */}
         <Route path="/aboutus" element={<Aboutus/>} /> 
         <Route path="/services" element={<Services/>} /> 
         <Route path="/whynsgc" element={<WhyNSGC/>} /> 
         <Route path="/careers" element={<Careers/>} /> 
         <Route path="/training" element={<Training/>} /> 
         <Route path="/qualityassurance" element={<Qualityassu/>} /> 
         <Route path="/contactus" element={<Contactus/>} /> 
         {/* <Route path="/otpcompo" element={<Otpcomponent/>} />  */}
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
