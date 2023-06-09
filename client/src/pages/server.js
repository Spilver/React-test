import React, { useState, useEffect } from "react";
  
const Server= () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
    
  
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
};
  
export default Server;