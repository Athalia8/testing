import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import swal from "sweetalert";
import Router from "next/router";

export const signInGoogle = (credentials) => {
  const googleProvider = new GoogleAuthProvider();

  return async (dispatch, getState, { getFirebase }) => {
    try {
      dispatch({ type: "LOGIN_GOOGLE_PROCESS" });
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const dataUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      localStorage.setItem('user', JSON.stringify(dataUser));
      localStorage.setItem('token', user.accessToken);

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username: user.displayName,
          level: "Easy",
          authProvider: "google",
          updatedAt: new Date(),
        });
      }
      // else console.log("addDoc collection failed")
      const docRef2 = doc(db, "rps_game_points", user.uid);
      const docSnap2 = await getDoc(docRef2);
      if (docSnap2.exists()) {
        var score = docSnap2.data().total
        localStorage.setItem("score", score);
      }
      // else console.log("addDoc collection failed")
      dispatch({ type: "LOGIN_GOOGLE_SUCCESS", score });

      swal({ icon: "success", text: "Anda masuk dengan akun Google" });
      Router.push("/home");
    } catch (error) {
      console.log(error.message)
      dispatch({ type: "LOGIN_GOOGLE_ERROR" });
      swal({ icon: "error", text: error.code });
    }
  }
}