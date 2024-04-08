import React from 'react'
import "../styles/Training/training.css"
import { FaChevronRight as Arrow } from "react-icons/fa";
import Footer from "../Footer/Footer"
const Training = () => {
  return (
    <div className='training-container'>
      {/* Section-1 */}
      <div className="training-image-div">

        <div className="training-bg">
        <p>Home  <Arrow/> Training </p>
           <h2>Training</h2>
        </div>
      </div>

       {/* Section-2 */}
       <div className="training-text-image">
           {/* text-part */}
        <div className="traning-text-part">
          <h2>TRAINING WITH NSGC</h2>

          <p>In the opinion of JRSSA, one of the most important things to ensure is that a client’s expectations are 
             consistently met, and this is achieved through training.</p>

          <p>We work with our clients to create a customized induction and training curriculum that every employee 
             must finish before starting work. All employees are entitled to refresher training for the term of 
             their contract as part of training programs. Additionally, training is employed to ensure compliance 
             with risk assessments that are specifically focused on preventive measures.</p>

          <p>In our opinion, preventing hazards, identifying and addressing potential danger zones, and swiftly and 
             decisively intervening when necessary are crucial for effective security. We recognize that consistent, 
             challenging, and role-specific training—such as role-playing and simulations—is essential for all our 
             security personnel.</p>
        </div>
 
            {/* Image part */}
        <div className="traning-image-part">

          <div className="training-img">
          </div>
        
        </div>
       </div>
         <Footer/>
     
    </div>
  )
}

export default Training