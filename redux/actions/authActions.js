import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import Router from "next/router";

export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    if ((credentials.email.length, credentials.password.length) <= 0) {
      dispatch({ type: "EMPTY_FORM" });
      //setAlert("form tidak boleh kosong !!");
    } else if (credentials.password.length < 6) {
      //setAlert("Password minimal 6 karakter !!");
      dispatch({ type: "LESS_PASSWORD" });
    } else {
      try {
        // setButton("Process...");
        dispatch({ type: "LOGIN_PROCESS" });
        const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = res.user;

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("uid", docSnap.id);
          localStorage.setItem("username", docSnap.data().username);
          localStorage.setItem("pp", docSnap.data().profile_picture);
          localStorage.setItem("authBy", docSnap.data().authProvider);
          localStorage.setItem("email", docSnap.data().email);
          const token = user.accessToken;
          //setAlert("Login Berhasil");
          //router.push("/home");

          const docRef2 = doc(db, "rps_game_points", user.uid);
          const docSnap2 = await getDoc(docRef2);
          if (docSnap2.exists()) {
            var score = localStorage.setItem("score", docSnap2.data().total);
          }

          dispatch({ type: "LOGIN_SUCCESS", score });
          Router.push("/home");
        } else {
          dispatch({ type: "LOGIN_ERROR" });
        }
      } catch (error) {
        //setAlert(error.message);
        dispatch({ type: "LOGIN_ERROR", message: error.message });
      }
    }
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    signOut(auth);
    localStorage.clear();
    const token = null;
    Router.push("/");
    dispatch({ type: "LOGOUT_SUCCESS", token });
  };
};
