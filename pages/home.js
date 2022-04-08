import Layout from "../components/layouts/Layout";
import LastPlayedGame from "../components/home/LastPlayedGame";
import Leaderboards from "../components/home/Leaderboards";
import Statistics from "../components/home/Statistics";
import Updates from "../components/home/Updates";
import { Container, Row, Col } from "reactstrap";

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Row>
          <Col sm={8}>
            <LastPlayedGame></LastPlayedGame>
          </Col>
          <Col sm={4}>
            <Leaderboards></Leaderboards>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Updates></Updates>
          </Col>
          <Col sm={4}>
            <Statistics></Statistics>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
