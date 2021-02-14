import { alterAuth } from "../components/AlternateAuth/firebase";
import { AUTH_SUCCESS } from "./actionTypes";

const alterAuthSuccess = (email, userId) => {
  return { type: AUTH_SUCCESS, payload: { email, userId } };
};

export const alterAuthAction = (email, password, mode) => {
  return (dispatch) => {
    if (mode === "Sign Up") {
      alterAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid } = userCredential.user;
          console.log(userCredential.user);
          dispatch(alterAuthSuccess(email, uid));
        })
        .catch((error) => console.log(error.message));
    } else {
      alterAuth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log(user.email);
          console.log(user.uid);
        })
        .catch((error) => console.log(error.message));
    }
  };
};
