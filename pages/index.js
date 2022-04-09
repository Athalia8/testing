import Layout from "../components/layouts/Layout"
import About from "../components/frontpage/About";
import Category from "../components/frontpage/Catagory";
import Gameselection from "../components/frontpage/Gameselection";
import Slidevent from "../components/frontpage/Slidevent";
import styles from "../components/frontpage/landing.module.css";
import { Container, Row, Col } from "reactstrap";

export default function LandingPage() {
  return (
    <Layout title="Landing Page" >
    <container-fluid>
    <Row>
      <Col>
      <Slidevent></Slidevent>
      </Col>
     </Row>
     <Row className={styles.Gameslider}>
     <Col >
      <Category></Category>
      </Col>
      </Row> 
    <Row className={styles.Gameslider}>
    <Col>
      <Gameselection></Gameselection>
      </Col>
      </Row>
     <Row >
      <Col>
      <About></About>
      </Col>
    </Row>
    </container-fluid>
    </Layout>
  )
}
