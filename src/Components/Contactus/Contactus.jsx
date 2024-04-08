import React, { useState } from 'react'
import "../styles/contactus/contactus.css"
import { FaChevronRight as Arrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Footer from '../Footer/Footer';
import Inquiry from '../Footer/Inquiry';
const Contactus = () => {
  const [show,setShow]=useState(false)
  {
  setTimeout(() => {
      
    setShow(true)
   }, 3000)
  }
  return (
    <div className='contactus-container'>
        {/* section-1 */}
      <div className='contactus-img-div'>
        <div className='con-bg'>
           <p>Home  <Arrow/> Contact </p>
           <h2>Contact</h2>
        </div>
      </div>

      {/* section-2 */}
      <div className="section-2-contact">

        <div className="contact-textpart">
          <h5>Contact Us</h5>
          <h2>Don't Hesitate To Contact Us</h2>
        </div>

        <div className="contact-info">
              
            <div className="contact-div">
               <FaLocationDot className='contact-icon'/>
               <span>Our Location</span>
               <p>8/86 City rd, Beenleigh,<br />
                  4207 Australia</p>
            </div> 

            <div className="contact-div">
               <IoCall className='contact-icon'/>
               <span>Call Us</span>
               <p>1300 901 450</p>
            </div> 

            <div className="contact-div">
              <IoMdMail className='contact-icon'/>
              <span>Email Us</span>
              <p>admin@jrssa.com</p>
            </div> 


        </div>
      </div>

      {/* section-3 */}
      <div className="contact-section-3">

        <div className="contact-blank">

        </div>

        <div className="contact-form">
           <div className="send-msg-div">
            <h2>Send A Message</h2>
           </div>
           
           <div className="contact-textfeilds">
            
            <div className="con-textfield">
             <label htmlFor="">Name</label>
             <input type="text" placeholder='Your Name' />
            </div>

            <div className="con-textfield">
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Your Email' />
            </div>

            <div className="con-textfield">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder='Your Phone' />
            </div>

            <div className="con-textfield">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
            </div>
            <button>Submit</button>

           </div>
        </div>
      </div>
      <Footer/>
      {
        show ?<Inquiry/>:""
      }
    </div>
  )
}

export default Contactus
