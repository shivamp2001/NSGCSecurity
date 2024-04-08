import React, { useState } from 'react'
// import "../styles/homecomponents/home.css"
import OurServices from './OurServices'
import Whychooseus from './Whychooseus'
import Footer from '../Footer/Footer'
import Inquiry from '../Footer/Inquiry'
const Home = () => {
  const [show,setShow]=useState(false)
  {
    setTimeout(() => {
      
     setShow(true)
    }, 3000)
  }
  return (
    <div className='home-container'>
      
       <div className="section-1">
        {/* section-1 part-2 */}
        <div className="home-bg-img">
          <div className="text-content">

           <h2 className='redcolor'>Welcome To NCSG</h2>
           <h2>Our Priority Is Your Safety & Security</h2>
           <p>JRSSA Is The Fastest-growing Provider Of Professional Security Solutions. We Dedicate To Prioritize 
              The Needs Of Our Clients And Offer A Flexible System.</p>
           <button>Get Started</button>
        </div>
        
        </div>

        {/* section-1 part-2 */}
        
        <div className="about-contact">
          <div className="part-about">
            <h2 className=''>About JRSSA</h2>
            <h3>We Provide Top Class Protection To Clients</h3>
            
            <p>JRSSA is your trusted partner for reliable and cost-effective safety solutions. With an unwavering 
               commitment to safeguarding your personnel and ensuring the smooth operation of your business, we 
               provide a comprehensive range of security services to meet your unique needs.</p>

            <p>At JRSSA, we pride ourselves on our competence in protecting your premises from unwanted 
               intruders. Our state-of-the-art security measures and highly trained personnel work seamlessly to 
               create a fortress of defense around your property, preventing unauthorized access and potential 
               threats.</p>

            <p>In addition to ensuring property security, we prioritize the well-being of your staff, safeguarding 
               them from potential dangers.</p>   


          </div>

          <div className="part-contact">
            <div className="con-heading">
              <h2>Contact For Request</h2>
            </div>

            <div className="contact-textfields">
              <div className="textfield-div">

                <div className="text-fields">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Your Name' />
                </div>

                <div className="text-fields">
                  <label htmlFor="">Your Email</label>
                  <input type="text" placeholder='Email' />
                </div>

                <div className="text-fields">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder='Your Phone' />
                </div>

                <div className="text-fields">
                  <label htmlFor="">Message</label>
                  {/* <input textarea rows="" cols=""> placeholder='Your Phone' /> */}
                  <textarea  cols="20" rows="5" placeholder='Your Message' ></textarea>
                </div>

                <div className="con-submit">
                    <button>Submit</button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* section-2 */}
        <div className="our-services">
          <OurServices/>
          <Whychooseus/>
          <Footer/>

          {
           show?<Inquiry/>:""
          }
          
          
        </div>


       </div>

    </div>
  )
}

export default Home
