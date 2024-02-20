import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_ENDPOIN}/api/record/`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className=''>Hello, World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;