import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Inquiry from '../Footer/Inquiry'
import "../styles/Aboutus/aboutus.css"
import { FaChevronRight as Arrow } from "react-icons/fa";
import image1 from "../../assets/aboutimg-1.jpeg"
import image2 from "../../assets/aboutimg-2.webp"
import image3 from "../../assets/aboutimg-3.webp"
import { FaEye,FaAward } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";


const Aboutus = () => {
  const [show,setShow]=useState(false)
  
    setTimeout(() => {
      
     setShow(true)
    }, 3000)
  
  return (
    <div className='about-container'>
      <div className="sub-about-container">
         {/* section-1 */}
        <div className="aboutus-img-div">
          <div className="about-bg">
          <p>Home  <Arrow/> About </p>
           <h2>About</h2>
          </div>
        </div>

        {/* section-2 */}
        <div className="about-text-img">

          <div className="about-textpart">
             <h2>About JRSSA</h2>
             <h3>We Provide Top Class Protection To Clients</h3>
             <p>JRSSA is your trusted partner for reliable and cost-effective safety solutions. With an unwavering 
                commitment to safeguarding your personnel and ensuring the smooth operation of your business, we 
                provide a comprehensive range of security services to meet your unique needs.</p>

                <p>At JRSSA, we pride ourselves on our competence in protecting your premises from unwanted 
                   intruders. Our state-of-the-art security measures and highly trained personnel work seamlessly to 
                  create a fortress of defense around your property, preventing unauthorized access and potential 
                  threats.</p>

                  <p>In addition to property security, we prioritize the well-being of your staff, shielding them 
                     from harm and misuse. </p>
                
          </div>

          <div className="about-images">
            <div className="about-imgdiv-1">
              <img src={image1} className='imgdiv-1' alt="" />
              <img src={image2} className='imgdiv-2' alt="" />
            </div>

            <div className="about-imgdiv-2">
              {/* <img src={image3} className='imgdiv-3' alt="" /> */}
            </div>

          </div>

        </div>

        {/* section-3 */}
        <div className="Our-Work-Procedure">
          <h2>Our Work Procedure</h2>
          <div className="ourwork-container">

            <div className="work-div">
             <FaEye className='about-icon'/>
             <h3>Our Vision</h3>
             <p>Our vision is to create a lasting legacy of employee and customer satisfaction by consistently 
               delivering unmatched security management services. We aspire to become the industry's leading 
               supplier, wholeheartedly dedicated to safeguarding our clients' interests and fostering enduring 
               partnerships founded on trust, excellence, and a commitment to excellence.</p>
            </div>

            <div className="work-div">
              <FaPencil className='about-icon'/>
              <h3>Our Mission</h3>
              <p>Our mission is to provide world-class security management services that prioritize the safety and 
                 well-being of our clients, employees, and the communities we serve. Through unwavering dedication 
                 to excellence, innovation, and integrity, we aim to establish a standard of security solutions 
                 that not only meet but exceed expectations, ensuring long-term satisfaction and peace of mind for 
                 all stakeholders.</p>

            </div>

            <div className="work-div">
             <FaAward className='about-icon'/>
             <h3>Our Values</h3>
             <p>Our values serve as the bedrock of our organization. With an unwavering commitment to excellence, 
                integrity, and innovation, we prioritize customer satisfaction, fostering enduring partnerships 
                grounded in trust and transparency. As a team-driven entity, we dedicate ourselves to sustainable 
                practices, ensuring a profound, lasting impact within the sphere of security management services. 
                 </p>
            </div>

          </div>
        </div>

        {/* section-4 */}
        <div className="about-contact-container">
           <div className="about-contact-bg">
          
          <div className="about-contact-part-1">
            <h2>Contact Us For Service</h2>
            <p><span>---- </span><IoCallSharp/><span> ----</span></p>
            <h2>1300 901 450</h2>
            <h2>admin@jrssa.com</h2>
          </div>

          <div className="about-contact-part-2">
            <h2>We Are Ready 24 Hours For You!</h2>
            <h2>We Provide Security That Suits Your Needs.</h2>
          </div>

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

export default Aboutus
