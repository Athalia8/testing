import { signInWithEmailAndPassword, updateEmail, updatePassword, updateProfile, getAuth } from "firebase/auth";
import { Spinner } from "reactstrap";
import { auth } from "../../firebase/config";

export const UPDATE_PROFILE = "UPDATE_PROFILE"

export const updateProfileUser = (credentials) => {
  const changeProfile = () => {
    updateProfile(auth.currentUser,
      {
        photoURL: credentials.newPhotoURL,
        displayName: credentials.newDisplayName,
      }).then(() => {
        console.log("profile updated")
      }).catch((error) => {
        console.log(error.message)
      })
  }
  const changeEmail = () => {
    updateEmail(auth.currentUser, credentials.newEmail).then(() => {
      console.log("email updated")
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const changePassword = () => {
    updatePassword(auth.currentUser, credentials.newPassword).then(() => {
      console.log("password updated")
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (dispatch) => {
    dispatch({
      type: UPDATE_PROFILE,
      button: <Spinner color="light" size="sm">Loading...</Spinner>
    })
    //update profile
    const user = signInWithEmailAndPassword(auth, credentials.confirmEmail, credentials.confirmPassword)
    console.log(user)
    changeProfile()
    changeEmail()
    changePassword()
      .then(() => {
        console.log("Data Updated")
        signOut(auth);
        localStorage.clear();
        Router.push("/login");
        swal({ icon: "success", text: "Update berhasil, silahkan login" });
        dispatch({
          type: UPDATE_PROFILE,
          button: <i class='fas fa-check'></i>
        })
      })
      .catch((err) => {
        console.log(err.message)
        swal({ icon: "error", text: "Update Failed" });
        dispatch({
          type: UPDATE_PROFILE,
          button: <i class="fas fa-ban"></i>
        })
      })
  }
}