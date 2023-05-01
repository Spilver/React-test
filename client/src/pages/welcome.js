import React from 'react';
import Login from '../components/Login';
import useToken from '../components/useToken';

  
const Welcome = () => {


const { token, setToken } = useToken();

if(!token) {
    return <Login setToken={setToken} />
}
return (
    <h1>bienvenido amigo</h1>
  );
};
  
export default Welcome;