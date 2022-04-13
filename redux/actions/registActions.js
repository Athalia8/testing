import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Router from "next/router";
import swal from "sweetalert";

export const signUp = (credentials) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return async (dispatch, getState, { getFirebase }) => {
    if ((credentials.username.length, credentials.email.length, credentials.password.length) <= 0) {
      dispatch({ type: "EMPTY_FORM" });
    } else if (!credentials.email.match(validRegex)) {
      dispatch({ type: "INVALID_EMAIL" });
    } else if (credentials.password.length <= 5) {
      dispatch({ type: "LESS_PASSWORD" });
    } else {
      try {
        dispatch({ type: "REGISTER_PROCESS" });
        const res = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = res.user;
        await updateProfile(auth.currentUser, {
          displayName: credentials.username,
          photoURL: "https://i.ibb.co/H4f3Hkv/profile.png"
        }).then(() => {
          console.log("Profile updated")
        }).catch((error) => {
          console.log(error, message)
        });
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, {
          username: credentials.username,
          level: "Easy",
          authProvider: "local",
          updatedAt: new Date(),
        });
        dispatch({ type: "REGISTER_SUCCESS" });
        swal({ icon: "success", text: "Registrasi berhasil, silahkan Login" });
        Router.push("/login")
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            swal({ icon: "error", text: "Email sudah terdaftar" });
            dispatch({ type: "REGISTER_ERROR" });
            break;
          default:
            swal({ icon: "error", text: error.message });
            dispatch({ type: "REGISTER_ERROR" });
        }
      }
    }
  };
};
