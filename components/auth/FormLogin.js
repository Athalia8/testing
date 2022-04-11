import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { auth, db } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { signIn } from "../../redux/actions/authActions";
import { connect, useDispatch } from "react-redux";

function FormLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [button, setButton] = useState("Login");
  const router = useRouter();
  const { authError, buttonLogin, alertLogin } = props;

  useEffect(() => {
    setButton(buttonLogin);
    setAlert(alertLogin);
  }, [buttonLogin, alertLogin]);

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setAlert("");
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setAlert("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({ email, password });
  };

  // const login = async (e) => {
  //   e.preventDefault();
  //   if ((email.length, password.length) <= 0) {
  //     setAlert("form tidak boleh kosong !!");
  //   } else if (password.length < 6) {
  //     setAlert("Password minimal 6 karakter !!");
  //   } else {
  //     try {
  //       // setButton("Process...")
  //       const res = await signInWithEmailAndPassword(auth, email, password);
  //       const user = res.user;
  //       const docRef = doc(db, "users", user.uid);
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         // const data = {
  //         //   token: user.accessToken,
  //         //   uid: docSnap.id,
  //         //   username: docSnap.data().username,
  //         //   pp: docSnap.data().profile_picture,
  //         //   authBy: docSnap.data().authProvider,
  //         //   email: docSnap.data().email,
  //         // }
  //         localStorage.setItem("token", user.accessToken);
  //         localStorage.setItem("uid", docSnap.id);
  //         localStorage.setItem("username", docSnap.data().username);
  //         localStorage.setItem("pp", docSnap.data().profile_picture);
  //         localStorage.setItem("authBy", docSnap.data().authProvider);
  //         localStorage.setItem("email", docSnap.data().email);
  //         setAlert("Login Berhasil");
  //         console.log(user);
  //         console.log(user.accessToken);
  //         router.push("/home");
  //         //dispatch({ type: "LOGIN_SUCCESS" });
  //       } else {
  //         //dispatch({ type: "LOGIN_ERROR" });
  //       }
  //     } catch (error) {
  //       setAlert(error.message);
  //       //dispatch({ type: "LOGIN_ERROR" });
  //     }
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit}>
      {alert ? (
        <Alert color="primary" className="text-center">
          {alert}
        </Alert>
      ) : (
        <Alert color="light" className="text-center">
          Or sign in with credentials
        </Alert>
      )}
      <FormGroup className="d-flex align-items-center">
        <span className="far fa-envelope text-muted mx-1" />
        <Input type="email" placeholder="Email" value={email} onChange={changeEmail} required />
      </FormGroup>
      <FormGroup className="d-flex align-items-center">
        <span className="fas fa-key text-muted mx-1" />
        <Input type="password" placeholder="Password" value={password} onChange={changePassword} required />
      </FormGroup>
      <div className="text-center mb-3">
        <Button color="primary">{button}</Button>
      </div>
      {authError && <FormGroup className="text-center align-items-center alert alert-danger">{authError}</FormGroup>}
      <div className="text-center mt-3">
        <Link href="#">
          <a>Forget password? </a>
        </Link>
        or
        <Link href="/register">
          <a> Register</a>
        </Link>
      </div>
    </Form>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    buttonLogin: state.auth.buttonLogin,
    alertLogin: state.auth.alertLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
