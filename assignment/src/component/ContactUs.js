import React, { useState } from 'react'
import axios from 'axios'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mbNumber, setMbNumber] = useState();

  const saveData = () => {
    const data = { name: name, email: email, number: mbNumber };
    //call api for save the data 
    axios.post('url', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='contactUs-section'>
      <form className="Contactus-form">
        <h2>Contact us</h2>
        <div className="form-group">
          <label htmlFor="text">Name :</label>
          <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address :</label>
          <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="number">Mobile number :</label>
          <input onChange={(e) => { setMbNumber(e.target.value) }} type="number" className="form-control" id="number" placeholder="Mobile number" />
        </div>
        <div className="btn">
          <button onClick={saveData} type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs