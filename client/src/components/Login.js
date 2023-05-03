import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <section>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" onChange={e => setUserName(e.target.value)} required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" onChange={e => setPassword(e.target.value)} required/>
                        <label for="">Contraseña</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Recordarme  <a href="#">Olvide mi contraseña</a></label>
                      
                    </div>
                    <button>Ingresar</button>
                    <div class="register">
                        <p>No tienes una cuenta? <a href="#">Registrate</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

/*
  <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
*/


Login.propTypes = {
  setToken: PropTypes.func.isRequired
};