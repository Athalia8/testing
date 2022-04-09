import Cardimage from "./Cardimage";
import Cardinfo from "./Cardinfo";
// import styles from './Styles.module.css'
import { Container, Row, Col } from "reactstrap";

const Game = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Cardimage/>
        </Col>
        <Col sm={4}>
          <Cardinfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
