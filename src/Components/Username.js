
import React, { useState } from 'react';

function UsernameI() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Username submitted: ' + username);
    // You can perform additional actions here, like sending the username to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Username"
        />
      </form>
    </div>
  );
}

export default UsernameI;

