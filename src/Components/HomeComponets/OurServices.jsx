import React from 'react'
import "../styles/homecomponents/ourservices.css";
import { FaCar,FaRegBell,FaUserLock,FaUserSecret,FaBuilding,FaFingerprint,FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';
const OurServices = () => {
  return (
    <div className='ourservices-container'>
      
      <div className='ourservices-text-div'>
       <h2 className='ourservices-heading'>Our Services</h2>
       <h2 className='ourservices-subheading'>WE DELIVER PREMIUM SECURITY SOLUTIONS AT BEST PRICE</h2>
       <p>We have highly trained staff available that implement security measures around any Retail, 
         Commercial or Industrial Site.</p>
      </div>
       
       {/* part second showing carts */}
      <div className="services-carts-div">
         {/* 1 */}
        <div className="small-cart">
          <div className="cart-img">
            <FaCar className='cart-icon'/>
           <h3>Mobile Patrols</h3>
            <p>Empowering your mobile safety with our cutting-edge, reliable security solutions and expertise. Trust 
               our experts for 24/7 safeguarding of your property and assets.</p>
          </div>
          <div className="learnmore-btn">
          <Link to={""}><p>Learn More</p></Link> 
          </div>
        </div>

        {/* 2 */}
        <div className="small-cart">
          <div className="cart-img">
            <FaRegBell className='cart-icon'/>
            <h3>Alarm Monitoring Service</h3>
            <p>Using the line type of your choice, our Back to Base Monitoring connects your security system to our 
              24-hour monitoring control room. Having the appropriate response in place when an alarm goes off is 
              your best line of defense for safeguarding your company's assets.</p>
          </div>
           <div className="learnmore-btn">
          <Link to={""}><p>Learn More</p></Link> 
          </div>
        </div>

         {/* 3 */}
        <div className="small-cart">
          <div className="cart-img">
            <FaUserLock className='cart-icon'/>
           <h3>Retail Security and Loss <br /> Prevention Management</h3>
           <p>Comprehensive retail security and loss prevention management to safeguard your business, assets, and 
             customer experience. Contact us for tailored solutions.</p>
          </div>
          <div className="learnmore-btn">
          <Link to={""}><p>Learn More</p></Link> 
          </div>
        </div>

         {/* 4 */}
        <div className="small-cart">
          <div className="cart-img">
            <FaUserSecret className='cart-icon'/>
             <h3>Event Security and Crowd <br /> Management Services</h3>
             <p>Ensure a safe and seamless event experience with our expert event security and crowd management 
                services. Your event, our priority.</p>
          </div>
          <div className="learnmore-btn">
          <Link to={""}><p>Learn More</p></Link> 
          </div>
        </div>

      </div>

      {/* part second / big carts */}
      <div className="services-bigcarts-div">

        {/* big cart-1 */}
        <div className="big-cart">
          <div className="cart-img">
            <FaBuilding className='cart-icon'/>
             <h3>Construction Infrastucture & <br /> Building Environment Security</h3>
             <p>Securing construction infrastructure and building environments. We protect your projects with 
               innovative security solutions, ensuring safety and progress.</p>
           </div>
            <div className="learnmore-btn bigcart-btn">
                <Link to={""}><p>Learn More</p></Link> 
            </div>
        </div>

          {/* big cart-2 */}
        <div className="big-cart">
          <div className="cart-img">
            <FaFingerprint className='cart-icon'/>
             <h3>Customer and Staff Security</h3>
             <p>Ensure a safe and seamless event experience with our expert event security and crowd management 
               services. Your event, our priority.</p>
           </div>
            <div className="learnmore-btn bigcart-btn">
                <Link to={""}><p>Learn More</p></Link> 
            </div>
        </div>

          {/* big cart-3 */}
        <div className="big-cart">
          <div className="cart-img">
            <FaCamera className='cart-icon'/>
             <h3>Corporate, Government and <br /> Commercial Security</h3>
             <p>Ensure a safe and seamless event experience with our expert event security and crowd management 
                services. Your event, our priority.</p>
           </div>
            <div className="learnmore-btn bigcart-btn">
                <Link to={""}><p>Learn More</p></Link> 
            </div>
        </div>

      </div>
    </div>
  )
}

export default OurServices
