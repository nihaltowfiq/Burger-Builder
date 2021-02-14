// import axios from "axios";

// export const auth = (email, password) => {
//   return (dispatch) => {
//     const authData = {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     };
//     const API_KEY = "AIzaSyAB5ugyuc_EhxltqEeIVMQXpikXuMhd6-4";
//     axios
//       .post(
//         `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
//         authData
//       )
//       .then((res) => {
//         console.log(authData);
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(authData);
//         console.log(err);
//       });
//   };
// };

import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (email, password, mode) => (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let authUrl = null;
  if (mode === "Sign Up") {
    authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  } else {
    authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }
  //   const API_KEY = "AIzaSyBv7bZesaOyi4x998HIf3hw6VBlsLwbJdE";
  const API_KEY = "AIzaSyAB5ugyuc_EhxltqEeIVMQXpikXuMhd6-4";
  axios
    .post(authUrl + API_KEY, authData)
    .then((response) => console.log(response));
};
