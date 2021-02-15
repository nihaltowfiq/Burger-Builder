import { alterAuth } from "../components/AlternateAuth/firebase";
import {
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOG_OUT,
  UPDATE_USERNAME,
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

const updateUsername = (name) => {
  alterAuth.currentUser
    .updateProfile({
      displayName: name,
    })
    .then((res) => console.log(res));
};

export const alterAuthAction = (email, password, mode, name) => {
  return (dispatch) => {
    dispatch(alterLoading(true));

    if (mode === "Sign Up") {
      alterAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid, displayName } = userCredential.user;
          localStorage.setItem("email", email);
          localStorage.setItem("userId", uid);
          updateUsername(name);
          dispatch(alterAuthSuccess(email, uid, name));
          dispatch(alterLoading(false));
          console.log("SIGN UP:", displayName);
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
          dispatch(alterAuthSuccess(email, uid, displayName));
          dispatch(alterLoading(false));
          console.log("SIGN IN:", displayName);
        })
        .catch((error) => {
          dispatch(alterLoading(false));
          dispatch(alterAuthFailed(error.message));
        });
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
