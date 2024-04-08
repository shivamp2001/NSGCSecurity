import React, { useState } from 'react'
import "../../Components/styles/header.css"
import "../../Components//styles/homecomponents/home.css"
// import "../styles/navbar.css"
import Logo from "../../assets/logo.jpeg"
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import Home from '../HomeComponets/Home.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu,setShowMenu] =useState(false);
  const [phoneActiveTab,setPhoneActiveTab] =useState(1);
  // console.log(selectTab);
  return (
    <div className='container-header'>
      <div className="logo-componydetails">
      <div className="website-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="navbar-container">
      <div className="pages-div">
         <ul>
            <Link to={"/"}> <li >Home</li></Link>
            <Link to={"/aboutus"}><li>About Us</li></Link>
            <Link to={"/services"}><li>Our Services</li></Link>
            <Link to={"/whynsgc"}><li>Why JRSSA</li></Link>
            <Link to={"/careers"}><li>Careers</li></Link>
            <Link to={"/training"}><li>Training</li></Link>
            <Link to={"/qualityassurance"}><li>Quality Assurance</li></Link>
            <Link to={"/contactus"}><li>Contact Us</li></Link>
     
          </ul>
        </div>
       
      </div>
      </div>

        {/* For mobile view */}
     <div className="responsive-container">
         <div className="sub-responsive-div">
         <div className="head-contact-div head-row">
             <FaPhone className='head-icon'/>
             <span>1300901450</span>
         </div>

         <div className="head-email-div head-row">
           <MdMailOutline className='head-icon'/>
           <span>admin@jrssa.com</span>
         </div>
         </div>

         {/* logo and menu tab */}
        

         <div className="logo-menutab">
            <div className='res-logo-div'>
              <img src={Logo} alt="" />
              <HiMenu className='icon-menu' onClick={()=>setShowMenu(!showMenu)}/>
            </div>
         </div>
         <div className={`menubar ${showMenu ? "":"displynone"}`}>
           <ul>
            <Link to={"/"}><li className={`${phoneActiveTab== 1?"activephonetab":""}`}
            onClick={()=>[setPhoneActiveTab(1),setShowMenu(false)]}>Home</li></Link>

            <Link to={"/aboutus"}><li className={`${phoneActiveTab== 2?"activephonetab":""}`}
            onClick={()=>[setPhoneActiveTab(2),setShowMenu(false)]}>About Us</li></Link>

            <Link to={"/services"}><li className={`${phoneActiveTab== 3?"activephonetab":""}`}
            onClick={()=>[setPhoneActiveTab(3),setShowMenu(false)]}>Our Services</li></Link>

            <Link to={"/whynsgc"}><li className={`${phoneActiveTab== 4?"activephonetab":""}`}
             onClick={()=>[setPhoneActiveTab(4),setShowMenu(false)]}>Why NSGC</li></Link>

              <Link to={"/careers"}><li className={`${phoneActiveTab== 5?"activephonetab":""}`}
              onClick={()=>[setPhoneActiveTab(5),setShowMenu(false)]}>Careers</li></Link>

              <Link to={"/training"}><li className={`${phoneActiveTab== 6?"activephonetab":""}`}
              onClick={()=>[setPhoneActiveTab(6),setShowMenu(false)]}>Training</li></Link>

              <Link to={"/qualityassurance"}><li className={`${phoneActiveTab== 7?"activephonetab":""}`}
              onClick={()=>[setPhoneActiveTab(7),setShowMenu(false)]}>Quality Assurance</li></Link>

              <Link to={"/contactus"}><li className={`${phoneActiveTab== 8?"activephonetab":""}`}
              onClick={()=>[setPhoneActiveTab(8),setShowMenu(false)]}>Contact Us</li></Link>
             </ul>
        </div>
      </div>

   

    
    </div>
  )
}

export default Header
