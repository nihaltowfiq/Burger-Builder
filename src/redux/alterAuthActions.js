import { alterAuth } from "../components/AlternateAuth/firebase";

export const alterAuthAction = (email, password, mode) => {
  return (dispatch) => {
    if (mode === "Sign Up") {
      alterAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => console.log(error.message));
    } else {
      alterAuth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => console.log(error.message));
    }
  };
};
