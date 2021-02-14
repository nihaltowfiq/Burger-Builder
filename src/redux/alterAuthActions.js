import { alterAuth } from "../components/AlternateAuth/firebase";
import { AUTH_SUCCESS, LOG_OUT } from "./actionTypes";

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
          localStorage.setItem("email", email);
          localStorage.setItem("userId", uid);
          dispatch(alterAuthSuccess(email, uid));
        })
        .catch((error) => console.log(error.message));
    } else {
      alterAuth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid } = userCredential.user;
          console.log(userCredential.user);
          localStorage.setItem("email", email);
          localStorage.setItem("userId", uid);
          dispatch(alterAuthSuccess(email, uid));
        })
        .catch((error) => console.log(error.message));
    }
  };
};

export const alterLogout = () => {
  alterAuth
    .signOut()
    .then(() => {
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
    })
    .catch((error) => console.log(error));
  return { type: LOG_OUT };
};

export const alterAuthCheck = () => {
  return (dispatch) => {
    const email = localStorage.getItem("email");
    if (!email) {
      //log out
      dispatch(alterLogout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(alterAuthSuccess(email, userId));
    }
  };
};
