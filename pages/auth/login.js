import Layout from "../../components/layouts/Layout";
import styles from '../../components/auth/Auth.module.css'
import FormLogin from "../../components/auth/FormLogin";
import SignFacebook from "../../components/auth/SignFacebook";
import SignGoogle from "../../components/auth/SignGoogle";
import Content from "../../components/auth/Content";

export default function Login() {
  return (
    <Layout title="Login">
      <div className={styles.component}>
        <div className={styles.container}>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <Content />
            <div className={styles.form_card}>
              <div>
                <div className="card-head">
                  <p className="m-0 text-center fs-08">Sign in with</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <SignGoogle />
                    <SignFacebook />
                  </div>
                </div>
                <FormLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
