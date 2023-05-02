import React from 'react';
import "../components/users.css";

const listOfPosts = [{"title":"Esteban","username":"Spilver","postText":"blablabnla"},{"title":"Emilio","username":"Milo","postText":"blablabnla"}];

  
const Usuarios = () => {
    return (
        <div className="App">
          {listOfPosts.map((value, key) => {
            return (
              <div className="post">
                <div className="title"> {value.title} </div>
                <div className="body">{value.postText}</div>
                <div className="footer">{value.username}</div>
              </div>
            );
          })}
        </div>
      );
};
  
export default Usuarios;