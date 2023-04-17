import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='aboutUs-section'>
      <h1>About Us</h1>
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      )}
    </div>
  );
};

export default About;
