import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import Router from "next/router";
import swal from "sweetalert";

export const signIn = (credentials) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return async (dispatch, getState, { getFirebase }) => {
    if ((credentials.email.length, credentials.password.length) <= 0) {
      dispatch({ type: "EMPTY_FORM" });
    } else if (!credentials.email.match(validRegex)) {
      dispatch({ type: "INVALID_EMAIL" });
    } else if (credentials.password.length <= 5) {
      dispatch({ type: "LESS_PASSWORD" });
    } else {
      try {
        dispatch({ type: "LOGIN_PROCESS" });
        const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = {
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', res.user.accessToken);

        const docRef2 = doc(db, "rps_game_points", user.uid);
        const docSnap2 = await getDoc(docRef2);
        if (docSnap2.exists()) {
          var score = localStorage.setItem("score", docSnap2.data().total);
        }
        dispatch({ type: "LOGIN_SUCCESS", score });
        swal({ icon: "success", text: "Login Berhasil" });
        Router.push("/home");
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            swal({ icon: "error", text: "Email tidak terdaftar" });
            dispatch({ type: "AUTH_ERROR" });
            break;
          case 'auth/wrong-password':
            swal({ icon: "error", text: "Password anda salah" });
            dispatch({ type: "AUTH_ERROR" });
            break;
          default:
            swal({ icon: "error", text: error.code })
        }
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
