
import React, { useState } from 'react';

function PasswordI() {
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Password submitted: ' + password);
    // You can perform additional actions here, like sending the username to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
        />
      </form>
    </div>
  );
}

export default PasswordI;