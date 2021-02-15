import { alterAuth } from "../components/AlternateAuth/firebase";
import {
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOG_OUT,
} from "./actionTypes";

const alterAuthSuccess = (email, userId, name) => {
  return { type: AUTH_SUCCESS, payload: { email, userId, name } };
};

const alterLoading = (isLoading) => {
  return { type: AUTH_LOADING, payload: isLoading };
};

const alterAuthFailed = (errMsg) => {
  return { type: AUTH_FAILED, payload: errMsg };
};

const updateUsername = (username) => {
  alterAuth.currentUser.updateProfile({
    displayName: username,
  });
};

export const alterAuthAction = (email, password, mode, username) => {
  return (dispatch) => {
    dispatch(alterLoading(true));

    if (mode === "Sign Up") {
      alterAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid } = userCredential.user;
          localStorage.setItem("email", email);
          localStorage.setItem("userId", uid);
          localStorage.setItem("username", username);
          updateUsername(username);
          dispatch(alterAuthSuccess(email, uid, username));
          dispatch(alterLoading(false));
        })
        .catch((error) => {
          dispatch(alterLoading(false));
          dispatch(alterAuthFailed(error.message));
        });
    } else {
      alterAuth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid, displayName } = userCredential.user;
          localStorage.setItem("email", email);
          localStorage.setItem("userId", uid);
          localStorage.setItem("username", displayName);
          dispatch(alterAuthSuccess(email, uid, displayName));
          dispatch(alterLoading(false));
        })
        .catch((error) => {
          dispatch(alterLoading(false));
          dispatch(alterAuthFailed(error.message));
        });
    }
  };
};

export const alterLogout = () => {
  localStorage.removeItem("username");
  alterAuth
    .signOut()
    .then(() => {
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
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
