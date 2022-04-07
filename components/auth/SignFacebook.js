import styles from './Auth.module.css'

export default function SignFacebook() {
  return (
    <div>
      <div className="btn mx-2">
        <img
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png"
          alt=""
          className={styles.btn_img}
        />
        <span>Facebook</span>
      </div>
    </div>
  );
}