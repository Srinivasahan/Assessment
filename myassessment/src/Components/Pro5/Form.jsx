import React, { useState } from 'react';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const handleDropdownChange = (event) => {
  const selectedValue = event.target.value;
  setSelectedOption(selectedValue);
  setMessage(`You selected: ${selectedValue}`);
  };
  return (
    <center>
    <div style={{backgroundColor:"lightskyblue"}}>
      <h4>My Form</h4>
      <form>
        <label>
          Select your Favourite Place :{"  "}
          <select style={{color:"white", backgroundColor:"red", borderRadius:"5px"}} value={selectedOption} onChange={handleDropdownChange}>
            <option value="">Select...</option>
            <option value="Ooty">Ooty</option>
            <option value="Kodaikanel">Kodaikanal</option>
            <option value="Munar">Munar</option>
            <option value="Shimla">Shimla</option>
            <option value="Manali">Manali</option>
          </select>
        </label>
      </form>
      {message && <p >{message}</p>}
      <br></br><br></br><hr></hr>
    </div>
      <br></br>
    </center>
  );
};

export default Form;