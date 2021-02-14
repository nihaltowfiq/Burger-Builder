import axios from "axios";

export const auth = (email, password) => {
  return (dispatch) => {
    const authData = { email, password, returnSecureToken: true };

    const API_KEY = "AIzaSyAB5ugyuc_EhxltqEeIVMQXpikXuMhd6-4";
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          API_KEY,
        authData
      )
      .then((res) => console.log(res));
  };
};
