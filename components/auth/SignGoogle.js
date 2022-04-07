import styles from './Auth.module.css'

export default function SignGoogle() {
  return (
    <div>
      <div className="btn mx-2">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className={styles.btn_img}
        />
        <span>Google</span>
      </div>
    </div>
  );
}