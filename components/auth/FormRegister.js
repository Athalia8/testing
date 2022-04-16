import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
// import { useRouter } from 'next/router'
// import { auth, db } from "../../firebase/config";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signUp } from "../../redux/actions/registActions";
import { connect, useDispatch } from "react-redux";

function FormRegister(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [button, setButton] = useState("Register");
  // const router = useRouter()
  const { registError, buttonRegister } = props;

  useEffect(() => {
    setAlert(registError)
    setButton(buttonRegister)
  }, [registError, buttonRegister])

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setAlert("");
  };

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

  const register = async (e) => {
    e.preventDefault();
    await props.signUp({ username, email, password });
    // if ((username.length, email.length, password.length) <= 0) {
    //   setAlert("form tidak boleh kosong !!");
    // }
    // // else if (email.length <= 0) {
    // //   setAlert("email tidak boleh kosong !!");
    // // }
    // // else if (password.length <= 0) {
    // //   setAlert("password tidak boleh kosong !!");
    // // }
    // else if (password.length < 6) {
    //   setAlert("Password minimal 6 karakter !!");
    // }
    // else {
    //   try {
    //     setButton("Proccess...")
    //     const res = await createUserWithEmailAndPassword(auth, email, password);
    //     const user = res.user;
    //     await updateProfile(auth.currentUser, {
    //       displayName: username,
    //       photoURL: "https://i.ibb.co/H4f3Hkv/profile.png"
    //     }).then(() => {
    //       // Profile updated!
    //       // ...
    //       console.log("Profile updated")
    //     }).catch((error) => {
    //       // An error occurred
    //       // ...
    //       console.log(error, message)
    //     });
    //     const docRef = doc(db, "users", user.uid);
    //     await setDoc(docRef, {
    //       username: username,
    //       level: "Easy",
    //       authProvider: "local",
    //       updatedAt: new Date(),
    //     });
    //     // localStorage.setItem("token", user.accessToken);
    //     setAlert("Registrasi berhasil, silahkan Login");
    //     router.push("/login")
    //   } catch (err) {
    //     setAlert(err.message);
    //   }
    // }
  };

  return (
    <Form>
      <div className="py-0">
        {
          alert ? (<Alert color="danger" className="text-center py-1 px-0">
            <span className="fas fa-exclamation-triangle mx-1" />
            {alert}</Alert>)
            :
            (<Alert color="light" className="text-center py-1">or</Alert>)
        }
      </div>
      <div className="text-center pb-3">Sign up with credentials</div>
      <FormGroup className="d-flex align-items-center">
        <span className="fas fa-user text-muted mx-1" />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={changeUsername}
        />
      </FormGroup>
      <FormGroup className="d-flex align-items-center">
        <span className="far fa-envelope text-muted mx-1" />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeEmail}
        />
      </FormGroup>
      <FormGroup className="d-flex align-items-center">
        <span className="fas fa-key text-muted mx-1" />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={changePassword}
        />
      </FormGroup>
      <div className="text-center">
        <Button onClick={register} color="primary">{button}</Button>
      </div>
      <div className="text-center mt-3">Have account? <Link href="/auth/login"><a className="text-decoration-none text-primary">Login</a></Link></div>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    registError: state.regist.registError,
    buttonRegister: state.regist.buttonRegister,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);

