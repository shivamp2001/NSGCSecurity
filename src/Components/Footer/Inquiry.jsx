import React from 'react'
import "../styles/footer/inquiry.css"
const Inquiry = () => {
  return (
    <div className='inquiry-container'>
        <div className="inquiry-textfeilds">
          <h2>NCSG</h2>
          <p>Providing security solutions that makes your life easier</p>
          <div className='inquiry-subheading'>
            <span>Please Fill the form for any inquiry that you may have.</span>
          </div>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Number'/>
          <textarea name="" id="" cols="20" rows="7" placeholder='Type Your Message'></textarea>
          <button>Submit</button>
        </div>
    </div>
  )
}

export default Inquiry
