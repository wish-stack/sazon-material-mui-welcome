import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Welcome = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleGreet = () => {
      setMessage(`Hello, ${name}! Welcome to our website.`);
    };
  
    return (
      <div>
        <h1>Welcome to Our Website</h1>
        <TextField
          label="Enter Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <Button variant="contained" color="primary" onClick={handleGreet}>
          Greet Me
        </Button>
        <div>
          {message && <p>{message}</p>}
        </div>
      </div>
    );
  };
  
  export default Welcome;

  