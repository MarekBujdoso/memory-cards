import PropTypes from 'prop-types';

// const LoginForm = ({ userName, password }) => {
//   return (
//     <form>
//       <input type="text" name="username" value={userName} />
//       <input type="password" name="password" value={password} />
//       <input type="submit" value="Login" />
//     </form>
//   );
// }

// LoginForm.propTypes = {
//   userName: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired
// };

// export default LoginForm;

import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("qazwsx");

  const signup = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("User Signed Up: ", user);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const logOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.")
    }).catch((error) => {
      // An error happened.
      console.log("An error happened.", error)
    });
  };

  return (
    <form onSubmit={signup}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
      <button type="button" onClick={logOutHandler}>Log out</button>
    </form>
  );
};

export default LoginForm