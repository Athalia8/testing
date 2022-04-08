import Layout from "../../components/layouts/Layout";
import styles from '../../components/auth/Auth.module.css'
import FormLogin from "../../components/auth/FormLogin";
import SignFacebook from "../../components/auth/SignFacebook";
import SignGoogle from "../../components/auth/SignGoogle";
import Content from "../../components/auth/Content";
import { Container, Col } from 'reactstrap';

export default function Login() {
  return (
    <Layout title="Login">
      <Container>
        <div className="d-flex justify-content-center">
          <Col lg="6" className={styles.content}>
            <Content />
          </Col>
          <div className={styles.form_card}>
            <div>
              <h3 className="text-center my-2">Login</h3>
              <div className="d-flex justify-content-center mb-3">
                <SignGoogle />
                <SignFacebook />
              </div>
              <FormLogin />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
