import Layout from "../../components/layouts/Layout";
import styles from '../../components/auth/Auth.module.css'
import Content from "../../components/auth/Content";
import SignGoogle from "../../components/auth/SignGoogle";
import SignFacebook from "../../components/auth/SignFacebook";
import FormRegister from "../../components/auth/FormRegister";
import { Container, Col } from 'reactstrap';


export default function Register() {
  return (
    <Layout title="Register">
      <Container>
        <div className="d-flex justify-content-center">
          <Col lg="6" className={styles.content}>
            <Content />
          </Col>
          <div className={styles.form_card}>
            <div>
              <h3 className="text-center my-3">Register</h3>
              <div className="d-flex justify-content-center mb-3">
                <SignGoogle />
                <SignFacebook />
              </div>
              <FormRegister />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}