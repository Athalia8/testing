import Layout from "../../components/layouts/Layout";
import { Container, Row, Col } from "reactstrap";
import ImgDetail from "../../components/games/ImgDetail";
import Card from "../../components/games/Cardinfo";
import CardUser from "../../components/games/CardUser";

export default function GameDetail() {
  return (
    <div>
      <Layout title="Game detail">
        <Container>
          <Row>
            <Col sm={8} style={{ height: "220px" }}>
              <ImgDetail />
            </Col>
            <Col sm={4}>
              <CardUser />
              <Card></Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
