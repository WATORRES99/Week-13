
import React, { useState } from 'react';

function LogIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Log In submitted: ' );
    // You can perform additional actions here, like sending the username to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="Login">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;



