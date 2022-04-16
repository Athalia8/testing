import { Button } from 'reactstrap';
// import { useRouter } from 'next/router'
// import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import styles from './Auth.module.css'
// import { useState } from 'react';
// import { auth, db } from '../../firebase/config';
import { signInFacebook } from '../../redux/actions/authFacebookActions';
import { connect } from 'react-redux';

function SignFacebook(props) {
  const { buttonFacebook } = props

  const handleClick = async (e) => {
    e.preventDefault();
    await props.signInFacebook();
  }

  // const [alert, setAlert] = useState("");
  // const [button, setButton] = useState("Facebook");
  // const router = useRouter()

  // const facebookProvider = new FacebookAuthProvider();
  // const withFacebook = async () => {
  //   setButton("Proccess...")
  //   try {
  //     const res = await signInWithPopup(auth, facebookProvider);
  //     const user = res.user;
  //     const dataUser = {
  //       uid: user.uid,
  //       displayName: user.displayName,
  //       email: user.email,
  //       photoURL: user.photoURL,
  //     };
  //     localStorage.setItem('user', JSON.stringify(dataUser));
  //     localStorage.setItem('token', user.accessToken);

  //     const docRef2 = doc(db, "rps_game_points", user.uid);
  //     const docSnap2 = await getDoc(docRef2);
  //     if (docSnap2.exists()) {
  //       var score = localStorage.setItem("score", docSnap2.data().total);
  //     }
  //     // dispatch({ type: "LOGIN_FACEBOOK_SUCCESS", score });

  //     const q = query(collection(db, "users"), where("uid", "==", user.uid));
  //     const docs = await getDocs(q);
  //     if (docs.docs.length === 0) {
  //       await addDoc(collection(db, "users"), {
  //         username: user.displayName,
  //         level: "Easy",
  //         authProvider: "facebook",
  //         updatedAt: new Date(),
  //       });
  //     }
  //     // localStorage.setItem("token", user.accessToken);
  //     setAlert("Anda masuk dengan akun Facebook");
  //     router.push("/home");
  //   } catch (err) {
  //     console.error(err);
  //     setAlert(err.message);
  //   }
  // } 

  return (
    <div>
      <Button onClick={handleClick} outline color="secondary" className="btn mx-2 px-2">
        <img
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"
          alt=""
          className={styles.btn_img}
        />
        <span>{buttonFacebook}</span>
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    buttonFacebook: state.facebook.buttonFacebook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInFacebook: (creds) => dispatch(signInFacebook(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignFacebook);