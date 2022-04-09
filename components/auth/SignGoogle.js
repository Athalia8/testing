import { Button } from 'reactstrap';
import styles from './Auth.module.css'

export default function SignGoogle() {
  return (
    <div>
      <Button outline color="secondary" className="btn mx-2 px-3">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className={styles.btn_img}
        />
        <span>Google</span>
      </Button>
    </div>
  );
}