import { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { useRouter } from 'next/router'
import Link from "next/link";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [button, setButton] = useState("Register");
  const router = useRouter()

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
    if ((username.length, email.length, password.length) <= 0) {
      setAlert("form tidak boleh kosong !!");
    }
    // else if (email.length <= 0) {
    //   setAlert("email tidak boleh kosong !!");
    // }
    // else if (password.length <= 0) {
    //   setAlert("password tidak boleh kosong !!");
    // }
    else if (password.length < 6) {
      setAlert("Password minimal 6 karakter !!");
    }
    else {
      try {
        setButton("Proccess...")
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: "https://i.ibb.co/H4f3Hkv/profile.png"
        }).then(() => {
          // Profile updated!
          // ...
          console.log("Profile updated")
        }).catch((error) => {
          // An error occurred
          // ...
          console.log(error, message)
        });
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, {
          username: username,
          level: "Easy",
          authProvider: "local",
          updatedAt: new Date(),
        });
        // localStorage.setItem("token", user.accessToken);
        setAlert("Registrasi berhasil, silahkan Login");
        router.push("/login")
      } catch (err) {
        setAlert(err.message);
      }
    }
  };

  return (
    <Form>
      {
        alert ? (<Alert color="primary" className="text-center">{alert}</Alert>)
          :
          (<Alert color="light" className="text-center">
            Or sign in with credentials
          </Alert>)
      }
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
      <div class="text-center mt-3">Have account? <Link href="/login"><a>Login</a></Link></div>
    </Form>
  )
}

