import React from 'react'
import "../styles/homecomponents/whychooseus.css"
import image from "../../assets/founders2.webp"
import { ImCheckmark } from "react-icons/im";
const Whychooseus = () => {
  return (
       <div>
    <div className='whychooseus-container'>
      <div className="whyus-text-div">

        <div className="text-whyus">
          <h5>Why Choose Us</h5>
          <h2>We Are Qualified & Professional</h2>
          <p>JRSSA services have a novel approach to the business of contract security. Our services are designed to 
             meet and exceed our client’s necessities and expectations. Most of our competitors hire minimally 
             screened and trained guards. To incorporate with the best level of security, our law enforcement, 
             military experience, and ongoing education to provide you with the highest experienced and trained 
             representative. If you are searching for measures to create a more secure, professional, and orderly 
             workplace. Our security solutions at JR security are trustworthy and affordable.
          </p>
        </div>

        <div className="whyus-services">
          <ul>
            <li><ImCheckmark className='mark-icon'/><span>Security Consulting</span></li>
            <li><ImCheckmark className='mark-icon'/><span>Private Security</span></li>
            <li><ImCheckmark className='mark-icon'/><span>Close Protections</span></li>
          </ul>
          <ul>
            <li><ImCheckmark className='mark-icon'/><span>Guard House</span></li>
            <li><ImCheckmark className='mark-icon'/><span>Always Honest</span></li>
            <li><ImCheckmark className='mark-icon'/><span>24/7 Constant Support</span></li>
          </ul>
        </div>
      </div>
  
        {/* image section */}
        <div className="whyus-image-div">
          <div className="img-whyus">

          <img src={image} alt="" />
          {/* <div className="bg">

          </div> */}
          </div>
        </div>

       
    </div>
        <div className='accomplishment-div'>
          <div className="accomplishment">

            <div className="percentage">
               <span>100 %</span>
               <p>Project Completed</p>
            </div>

            <div className="percentage">
               <span>99 %</span>
               <p>Experienced Security</p>
            </div>

            <div className="percentage">
               <span>90 %</span>
               <p>Managing Guards</p>
            </div>

            <div className="percentage">
               <span>100 %</span>
               <p>Crowd Management</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Whychooseus
