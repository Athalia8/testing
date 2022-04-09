import Cardimage from "./Cardimage";
import Cardinfo from "./Cardinfo";
import Cardlist from "./Cardlist";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../components/layouts/Footer";

const Game = () => {
  return (
    <div className="_body">
      <Container>
        <div>
          <Row>
            <Col sm={8}>
              <Cardimage />
            </Col>
            <Col sm={4}>
              <Cardinfo />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Cardlist />
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Game;
