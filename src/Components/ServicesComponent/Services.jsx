import React, { useState } from "react";
import { FaChevronRight as Arrow,FaServicestack,FaBookmark,FaUserSecret } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import "../styles/servicescom/services.css"
import OurServices from '../HomeComponets/OurServices'
import arrow from "../../assets/arrow-moverie.webp"
import Footer from "../Footer/Footer";
import Inquiry from "../Footer/Inquiry";

const Services = () => {
  const [show,setShow]=useState(false)
  {
    setTimeout(() => {
      
     setShow(true)
    }, 3000)
  }
  return (
    <div className="service-container">

      {/* section-1 */}
      <div className="service-image-div">
        <div className="service-bg">
          <p>
            Home <Arrow /> Services{" "}
          </p>
          <h2>Services</h2>
        </div>
      </div>

      {/* section-2 */}

      <OurServices/>


        
      {/* section-3 */}
      <div className="section-3">
         {/* text part */}
        <div className="ourproceess-text-div">
            <h5>Our Process</h5>
            <h2>How We Works</h2>
            <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec <br /> consequata 
               congue idsem. Maecenas malesuada faucibus finibus donec.</p>
        </div>

        {/* Icon part */}
        <div className="main-icons-div">

          <div className="service-icons-div">
            <FaServicestack className="service-icon"/>
            <p>Choose Your Services</p>
          </div>
          <img src={arrow} alt="" className="arrow-img" />

          <div className="service-icons-div">
            <FaBookmark className="service-icon"/>
            <p>Make An Appointment</p>
          </div>
          <img src={arrow} alt="" className="arrow-img" />

          <div className="service-icons-div">
            <IoCheckmarkCircleSharp className="service-icon"/>
            <p>Pay For Your Services</p>
          </div>
          <img src={arrow} alt="" className="arrow-img" />

          <div className="service-icons-div">
          <FaUserSecret className="service-icon"/>
          <p>Feel Secure With Us</p>
          </div>
        </div>

      </div>

      {/* section-4 */}
      <div className="frequently-askquestion-div">

        <div className="question-div">
     
           <h3>Frequently Asked Questions</h3>
           <p>Our highly trained & qualified teams available to implement security measures around any Retail, 
              Commercial or Industrial Site</p>
        </div>

        <div className="question-image-div">


        </div>
        
      </div>

      <Footer/>
      {
           show?<Inquiry/>:""
      }
    
    </div>
  );
};

export default Services;
