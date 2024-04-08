import React from "react";
import "../styles/footer/footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import logo from "../../assets/logo.jpeg"
import footimg1 from "../../assets/footer-1.webp"
import footimg2 from "../../assets/footer-2.webp"
import footimg3 from "../../assets/footer-3.webp"
import footimg4 from "../../assets/footer-4.webp"
import footimg5 from "../../assets/footer-5.webp"
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronRight as Arrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* section-1 */}
      <div className="footer-section-1">
        <div className="need-help-div">

          <h2>Need Some Help ?</h2>
          <h2>Contact Us Now!</h2>
          <div className="footer-call-icon">
          <FiPhoneCall className="section-1-icons"/>
          <p>1300 901 450</p>
          </div>

          <div className="footer-call-icon">
          <MdMailOutline className="section-1-icons" />
          <p>admin@jrssa.com</p>
          </div>
          

        </div>
      </div>

       {/* section-2 */}
      <div className="footer-section-2">
        <div className="footer-data">
            
            <div className="footer-col col-1">
              <img src={logo} alt="" />

              <div className="footer-row">
              <FiPhoneCall className="section-2-icon"/>
              <p>1300 901 450</p>
              </div>

              <div className="footer-row">
              <FaLocationDot className="section-2-icon"/>
              <p>8/86 City rd, <br /> Beenleigh, 4207 <br /> Australia</p>
              </div>

            </div>

            <div className="footer-col col-2">
              <h2>Support</h2>
              <ul>
                <li><Arrow className="footer-arrow"/> Privacy Policy</li>
                <li><Arrow className="footer-arrow"/> Term Of Service</li>
                <li><Arrow className="footer-arrow"/> Disclaimer</li>
                <li><Arrow className="footer-arrow"/> FAQ</li>
              </ul>

            </div>

            <div className="footer-col col-3">
              <h2>Certification & Memberships</h2>
              
              <div className="footer-imgdiv-1">
                <img src={footimg1} alt="" />
                <img src={footimg1} alt="" />
              </div>

              <div className="footer-imgdiv-2">
                <img src={footimg1} alt="" />
                <img src={footimg2} alt="" />
              </div>

              <div className="footer-imgdiv-3">
               <img src={footimg3} alt="" />
               <img src={footimg4} alt="" />
              </div>

            </div>

            <div className="footer-col col-4">
              <h2>Licence</h2>
              <div className="Licence-div1">
                <p>Security Providers Act <br /> 1993 <br />Licence Function:</p>
              </div>

              <div className="Licence-div2">
                <ul>
                  <li>Security Firm Class <br /> 1</li>
                  <li>Security Firm Class <br /> 2</li>
                </ul>
              </div>

              <div className="Licence-div3">
                <p>Licence No: 4414318</p>
                <p>Licence No.: LHL-04945-</p>
                <p>T9D0G</p>
              </div>

              <div className="Licence-div3">
                <p>ABN - 90 618 776 266</p>
                <p>ACN - 618 776 266</p>
              </div>
            </div>

            <div className="footer-col col-5">
              <h2>OWNED & OPERATED</h2>
               <img src={footimg5} alt="" />
            </div>


        </div>
      <div className="copyright-div">
        <div className="sub-copyright-div">
          <p>Powered By <span>Socialshosha</span></p>
          <p>Copyright © 2023. All rights reserved.</p>
        </div>

      </div>
        
      </div>

    </div>
  );
};

export default Footer;
