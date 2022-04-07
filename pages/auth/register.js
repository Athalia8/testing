import Layout from "../../components/layouts/Layout";
import styles from '../../components/auth/Auth.module.css'
import Content from "../../components/auth/Content";
import SignGoogle from "../../components/auth/SignGoogle";
import SignFacebook from "../../components/auth/SignFacebook";
import FormRegister from "../../components/auth/FormRegister";

export default function Register() {
  return (
    <Layout title="Register">
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
                <FormRegister />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}