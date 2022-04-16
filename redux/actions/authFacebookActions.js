import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import swal from "sweetalert";
import { auth, db } from "../../firebase/config";

export const signInFacebook = (credentials) => {
  const facebookProvider = new FacebookAuthProvider();

  return async (dispatch, getState, { getFirebase }) => {
    try {
      dispatch({ type: "LOGIN_FACEBOOK_PROCESS" });
      const res = await signInWithPopup(auth, facebookProvider);
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

      const docRef2 = doc(db, "rps_game_points", user.uid);
      const docSnap2 = await getDoc(docRef2);
      if (docSnap2.exists()) {
        var score = docSnap2.data().total
        localStorage.setItem("score", score);
      }
      dispatch({ type: "LOGIN_FACEBOOK_SUCCESS", score });
      swal({ icon: "success", text: "Anda masuk dengan akun Facebook" });
      Router.push("/home");
    } catch (error) {
      console.log(error.message)
      dispatch({ type: "LOGIN_FACEBOOK_ERROR" });
      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          return swal({ icon: "error", text: "Email sudah terdaftar" });
        default:
          return swal({ icon: "error", text: error.code });


      }
    }
  }
}