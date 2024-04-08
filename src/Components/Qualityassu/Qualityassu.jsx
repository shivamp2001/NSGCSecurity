import React from "react";
import { FaChevronRight as Arrow } from "react-icons/fa";
import "../styles/Qualityassu/quality.css"
import { IoCallSharp } from "react-icons/io5";
const Qualityassu = () => {
  return (
    <div className="quality-container">
        {/* section-1 */}
      <div className="quality-image-div">
        <div className="quality-bg">
          <p>
            Home <Arrow /> Quality Assurance{" "}
          </p>
          <h2>Assurance</h2>
        </div>

      </div>

      {/* section-2 */}
      <div className="quality-text-image">

          {/* text-part */}
        <div className="quality-text-part">
           <h2>OUR COMMITMENT</h2>
           <p>We are committed to continuous improvement and have established a Quality Assurance Management System 
              with ISO certification Quality Assurance ISO 9001:2015. This certifies JRSSA in maintaining a 
              framework for measuring and improving our performance.</p>

            <p>Internal and external audit inspection procedures – using this system across all our services, we are 
               able to ensure efficient processes and a professional workplace.</p>
        </div>

         {/* Image part */}
         <div className="quality-image-part">

           <div className="quality-img">

            </div>

         </div>
      </div>

      {/* section-3 */}
      <div className="quality-contact-container">
           <div className="quality-contact-bg">
          
          <div className="quality-contact-part-1">
            <h2>Contact Us For Service</h2>
            <p><span>---- </span><IoCallSharp/><span> ----</span></p>
            <h2>1300 901 450</h2>
            <h2>admin@jrssa.com</h2>
          </div>

          <div className="quality-contact-part-2">
            <h2>We Are Ready 24 Hours For You!</h2>
            {/* <h2>We Provide Security That Suits Your Needs.</h2> */}
            <p>Ensuring ‘Distinctive Quality and Unparalleled Customer Service’ daily, to a growing number of 
               individuals who trust and respect us, is the vital responsibility inherent in every job.</p>
          </div>

          </div>
        </div>
    </div>
  );
};

export default Qualityassu;
