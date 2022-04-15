import { Button } from 'reactstrap';
import { useRouter } from 'next/router'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import styles from './Auth.module.css'
import { useState } from 'react';
import { auth, db } from '../../firebase/config';

export default function SignGoogle() {
  const [alert, setAlert] = useState("");
  const [button, setButton] = useState("Google");
  const router = useRouter()

  const googleProvider = new GoogleAuthProvider();
  const withGoogle = async () => {
    setButton("Proccess...")
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          username: user.displayName,
          level: "Easy",
          authProvider: "google",
          updatedAt: new Date(),
        });
      }
      // localStorage.setItem("token", user.accessToken);
      setAlert("Anda masuk dengan akun Google");
      router.push("/home");
    } catch (err) {
      console.error(err);
      setAlert(err.message);
    }
  }
  return (
    <div>
      <Button onClick={withGoogle} outline color="secondary" className="btn mx-2 px-3">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className={styles.btn_img}
        />
        <span>{button}</span>
      </Button>
    </div>
  );
}